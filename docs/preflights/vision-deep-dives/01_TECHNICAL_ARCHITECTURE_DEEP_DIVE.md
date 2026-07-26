# Deep Dive 01 — Technical Architecture

> **Date:** 2026-07-02
> **Context:** Supporting document for [`HERA_VISION_2026_07_02.md`](../HERA_VISION_2026_07_02.md)
> **Scope:** What has actually been built, at what scale, with what architecture

---

## The Backend — Not a Toy

HERA's backend is a production-grade FastAPI application. The numbers tell the story:

| File | Lines | What it does |
|------|-------|-------------|
| `server.py` | ~7,100 | FastAPI entry point, DB helpers, schema migrations, action runner dispatch, SSE broadcasts, tool executors, event emission |
| `routers/chat.py` | ~6,200 | Chat orchestration, speaker routing, LLM calls, tool loops, task handoffs, prompt shell builders, memory injection, sandbox enforcement |
| `routers/missions.py` | ~1,380 | Mission/task/goal CRUD, task status lifecycle, goal play |
| `routers/skills.py` | ~991 | Skill management, system vs custom, file watchers |
| `routers/agents.py` | Agent CRUD, personality, model tier selection |
| `routers/tools.py` | ~607 | Tool registry, catalog, system tools |
| `routers/memory.py` | Memory block management |
| `routers/github_router.py` | GitHub Issues integration |

That's 7 modular routers using a factory pattern with dependency injection (chosen specifically to prevent circular imports — documented as a locked architectural decision after BUG-008).

### The Database Layer

Three SQLite databases in `%APPDATA%\HERA\db\`:

1. **`hera_mission_control.db`** — 30+ tables covering:
   - `chat_missions` — rooms/projects
   - `chat_messages` — full chat history with pagination
   - `agent_roster` — agent profiles with personality, wellness, inventory, model tier
   - `mission_participants` — per-room agent membership with pause/resume
   - `mission_tasks` — full task lifecycle with GOAP state, linked files, metadata
   - `agent_events` — typed event bus (thought, tool_call, file_read, file_write, api_call, task_status, pitch, media_gen, error, permission_request)
   - `life_events`, `life_artifacts`, `life_event_artifacts` — Life OS event ledger with cost tracking
   - `tools_ledger`, `skills` — tool/skill registry
   - `room_tools`, `room_skills` — per-room tool/skill bindings
   - `memory_blocks` — persistent memory with compaction
   - `hera_settings` — key-value configuration store

2. **`hera_ledger.db`** — Usage/cost audit ledger tracking every API call's cost

3. **HERA context index** — Vault/project context index for file searching

The migration system (`_migrate_schema()` in server.py) handles schema evolution incrementally. Column additions use `_ensure_column()` which safely adds columns only if they don't exist.

### The Services Layer

Backend logic is separated into focused services:

| Service | What it handles |
|---------|----------------|
| `services/statuses.py` | Single source of truth for all task/goal status values. Canonical format: lowercase snake_case. Retired statuses (`paused`, `backlog`) auto-coerced to `not_started` |
| `services/task_review.py` | Review gate — single choke point for task completion review (submit → approve/revise/cancel) |
| `services/task_failures.py` | Structured failure classification for task runs. Differentiates blocker (unrecoverable) from failure (can retry) |
| `services/goal_play.py` | Goal conductor — orchestrates sequential goal execution with run states separate from goal status |
| `services/memory_compactor.py` | Memory block compaction — manages memory size by summarizing and archiving old blocks |
| `services/object_reconcile.py` | System vs custom object reconciliation — `purge_tool_dependents`, `purge_skill_dependents` |
| `services/object_watcher.py` | Skill file watcher — watches filesystem for skill file changes |

### Chat Orchestration — The Core Loop

`routers/chat.py` is the heart of the system. Here's how a message flows:

1. User types in the Composer with optional `@AgentName` mention
2. Speaker routing resolves the target agent:
   - `[@Name]` → case-insensitive match against active unpaused participants
   - No tag → primary agent, or first active participant
   - Empty rooms → HTTP 400
3. The message is stored in SQLite
4. A prompt shell is built (`_build_play_task_shell` or `_build_composer_shell`) including:
   - Room pinned context
   - Memory blocks (red/yellow/green by recency)
   - Recent visible chat history
   - Available tools (`catalog_search`, `action_runner`, `present_survey`)
5. The LLM call goes to the user's configured provider via OpenRouter (directly from the user's machine — never through HERA servers)
6. The model can call tools in a bounded loop (max 4 iterations of `CHAT_MAX_TOOL_ITERATIONS`)
7. Tool calls include: `update_task_status`, `read_vault_file`, `write_vault_file`, `catalog_search`, `action_runner`
8. The response is saved, attributed to the speaking agent, and broadcast via SSE
9. Tool chips are emitted showing query/result information

All blocking LLM and SQLite work runs in `_LLM_EXECUTOR` (ThreadPoolExecutor, 2 workers) to keep the asyncio event loop free.

### The Task Run System

Task execution is a separate system from chat:

1. **Action Runner:** A centralized dispatch table in `server.py` that routes tool calls to their implementations
2. **Play confirmation:** A single modal asks the user to confirm before a task run begins
3. **Sandbox enforcement:** `_build_sandbox_roots()` in `routers/chat.py` controls what files agents can access
4. **Guardrails:** Per-task budget limits, editable in the run modal. Goal-launched tasks enforce the same rules.
5. **Review gate:** After a task run, the agent submits work for review → user can approve, revise, or cancel
6. **Failure classification:** `services/task_failures.py` distinguishes blockers from failures — blockers halt the task, failures allow retry

### The Event Bus

Every agent action emits a typed event via `emit_event(...)`:

```
Event types: thought · tool_call · file_read · file_write · api_call · 
task_status · pitch · media_gen · error · permission_request
```

These events are stored in the `agent_events` table and persist across sessions. They are the backbone of the trust mechanic: the ledger proves what happened, independent of what the model claims.

SSE (Server-Sent Events) is the real-time transport layer:
- `/api/missions/{id}/chat/stream` — chat messages
- `/api/agent-events/stream` — agent state updates
- Event types: `ping`, `mission_task_updated`, `vault_file_written`, agent state changes

No polling. The StatusBar's health check (every 10s) is the only poll in the entire system.

---

## The Frontend — A Full Application, Not a Chat Widget

### Component Architecture

The UI is built in React/TypeScript with Vite:

| Component | What it is |
|-----------|-----------|
| `App.tsx` | App shell, top-level navigation |
| `WarRoom.tsx` | Deep focus on one room — chat panel + task board + team rail + Phaser mini-map |
| `TheVoid.tsx` | Global view — Phaser game world with all rooms rendered |
| `LifeOS.tsx` | Event ledger with filters, date range, event types — two-tab design (Events / Curator) |
| `TheArmory.tsx` (~1,998 lines) | Skills and tools management — create, edit, configure |
| `HeraComposer.tsx` | Gemini-style chat input with `@` mention autocomplete |
| `RoomChatPanel.tsx` (~1,197 lines) | Chat stream with tool chips, thinking spinners, timestamps |
| `TaskDetailDrawer.tsx` (~1,256 lines) | Full task detail — status, assignee, guardrails, activity log |
| `PhaserVoid.tsx` | Phaser.js game scene — renders rooms, floors, furniture, agent sprites |
| `AgentForgeModal.tsx` | Agent creation/configuration — personality, role, department, sprite |
| `MissionTasksPanel.tsx` | Task board — create, edit, status cycle, priority, drag reorder |
| `StatusBar.tsx` | Live telemetry — Server/Chat/SSE/Agents health indicators |
| `DataTable.tsx` | Generic data table component |
| `LimelightNav.tsx` | Navigation component |

### The API Layer

`api.ts` (~2,010 lines) provides typed wrappers for all backend endpoints and an SSE helper. Every API call is typed in TypeScript — no raw fetch calls scattered through components.

### The Phaser Game World

The Void is not CSS cards pretending to be rooms. It's a real Phaser.js game scene:

- `VoidWorldScene.renderFloors()` — draws floor tiles from tilesets
- `VoidWorldScene.renderFurniture()` — places furniture sprites from the asset catalog
- `VoidWorldScene.renderAgents()` — places animated agent sprites with idle bob tweens
- Room schemas defined in JSON (`ui/public/rooms/{id}.json`)
- 73+ curated commercial assets from the Modern Interiors tileset (purchased, not placeholder)
- 6 rendering layers: Base Floor → Rugs → Wall Furniture → Main Furniture → Surface Decor → Ceiling
- Clicking a room selects it; clicking an agent opens the forge

### CSS and Design System

`ui/src/index.css` at ~1,549 lines defines the complete design system. The pixel-art aesthetic is deliberate and consistent — not a placeholder waiting for "real" design.

---

## The Engine Layer

| Module | What it does |
|--------|-------------|
| `engine/image_engine.py` | Image processing pipeline — scanline halftone effect for generated images |
| `engine/image_dashboard.py` | Image management dashboard |
| `engine/appearance.py` | AppearanceDNA system for agent character composition (future — roll dice, validate, resolve to asset paths) |

The scanline halftone pipeline is notable: it applies a custom pixel-art aesthetic to AI-generated images, giving HERA a consistent visual identity. This was exportable enough that Favour has shared it with others.

---

## The Skills and Tools System

### System Skills (3 default, seeded on fresh installs):
- Locked (`is_system=1`), globally discoverable, never stored as room-specific links
- Managed by `catalog_search` as the discovery gateway

### Custom Skills:
- Per-room, created by users or agents
- Stored in `HERA_FOLDER/skills/`
- File watcher detects changes

### Tools:
- System tools are locked, HERA-owned
- Custom tools bind to rooms
- Two-gate permission: (1) is tool equipped in room? (2) does tool require approval?
- `action_runner` is the centralized dispatch for all tool execution

### The Catalog:
- `data/void_asset_catalog.seed.json` — 73 curated runtime-safe assets
- `data/void_asset_catalog.schema.json` — schema definition
- `ui/public/void-assets/catalog.manifest.json` — runtime manifest

---

## Infrastructure and Packaging

### Desktop Shell
- `hera.pyw` — pywebview wrapper
- `HERAOS.spec` — PyInstaller config for building a Windows .exe
- Windows Start Menu launcher ("HERA OS")
- System tray icon with right-click menu (Restart Server, Terminate)
- `hera-ports.json` — configurable Chrome tabs opened on launch

### AppData Migration (Sprint S)
- All runtime data lives in `%APPDATA%\HERA\` — survives app reinstalls
- `HERA_FOLDER` (default `~/Documents/HERA`) — user content home
- Images export to `HERA_FOLDER/images/exports/{type}/{name}/`
- Tools/skills routed to `HERA_FOLDER/tools|skills`
- Zero path env vars needed — sensible defaults for everything

### Build Process
- `build_hera.ps1` — PowerShell build script
- `check_assets.mjs` — Asset verification
- `playwright.config.ts` — E2E test configuration
- GitHub integration: private HERA OS repository and Projects board

### Scripts and Tooling
- `scripts/research_runner.py` — Tavily + OpenRouter batch research (zero Claude tokens)
- `scripts/forge_edit.py` — DeepSeek mechanical code editor for low-cost repetitive edits
- `scripts/check_doc_hygiene.py` — Documentation hygiene checker
- `scanline_standalone.py` — Exportable scanline image pipeline

---

## What This Architecture Demonstrates

1. **A real full-stack application** — not a weekend project or a tutorial derivative. The server alone is 13,000+ lines across two files, with 40+ endpoints, 30+ database tables, and a modular router architecture.

2. **Deliberate architectural decisions** — every major choice (factory pattern for routers, ThreadPoolExecutor for LLM calls, SSE over polling, event bus for trust, local-first for privacy) is documented with reasoning in ADRs.

3. **Production practices** — migrations, typed APIs, error boundaries, health checks, conventional commits with git hooks, sprint planning, bug registries, domain maps.

4. **Cost engineering** — the two-model split (Claude for architecture, DeepSeek for execution) is not just documented but proven through actual tooling (research_runner.py, forge_edit.py).

5. **Game engine integration** — Phaser.js is not dropped in as a toy. It has a 6-layer rendering architecture, curated asset catalogs, room schemas, and a planned room builder tool. This is game development methodology applied to a productivity tool.

---

*All line counts and file references verified against the HERA repository as of 2026-07-02.*

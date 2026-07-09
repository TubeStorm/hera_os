# HERA — Vision Document

> **Date:** 2026-07-02
> **Author:** Analysis of Favour Ijeomah's codebase, documentation, and product vision
> **Status:** Deep analysis — grounded in the actual repo, not speculation
> **Supporting deep dives:** [`vision-deep-dives/`](./vision-deep-dives/)

---

## What HERA Actually Is

HERA is a local-first desktop application that turns AI agents into a visible, controllable operating system.

Not a chatbot. Not an IDE plugin. Not another wrapper around an API.

It is a **simulation-style environment** where AI agents exist as characters in rooms, perform real work through structured tasks, and report everything they do through a verifiable event ledger. The user sees the agents, their state, their work, their costs, and their mistakes — all rendered through a pixel-art game interface built on Phaser.js.

The stack is real and substantial:

- **Backend:** Python/FastAPI with 40+ endpoints, modular router architecture (`server.py` at ~7100 lines, `routers/chat.py` at ~6200 lines), SQLite for all persistent state
- **Frontend:** React/TypeScript/Vite with a component tree spanning chat, task management, agent configuration, a full Life OS event ledger, and a Phaser-rendered game world ("The Void")
- **Desktop shell:** pywebview wrapping the full web app into a native Windows application
- **Agent system:** 6 seeded agents (Hermes, Forge, Scout, Scribe, Cartographer, Sentinel) with distinct roles, personalities, memory systems, and tool access
- **Game world:** Phaser.js rendering rooms with floor tiles, furniture, animated agent sprites, all driven by a curated asset catalog of 73+ commercial pixel art assets

HERA runs on the user's machine. Data never leaves their computer. AI calls go directly from their machine to their chosen provider. HERA-the-company would never see a user's rooms, chats, or files.

---

## Why It Exists

AI is too complicated for normal people.

Not just non-developers. Even developers struggle with the gap between "I can talk to ChatGPT" and "I can get AI to do structured, ongoing work for me." The problems:

1. **Invisible state.** What does the AI remember? What has it forgotten? When it answers confidently, is it working from real context or hallucinating? Nobody can see this.

2. **Invisible cost.** API calls cost money. Users don't know how much they're spending until the bill arrives. There's no connection between "I asked a question" and "that cost $0.47."

3. **No structure for ongoing work.** A chatbot is a single thread. Real projects need rooms, tasks, teams, memory across sessions, return visits, file management. Nobody has built the layer between "a chat" and "a project."

4. **No trust mechanism.** When an AI says "I did the thing," there's no proof. When it acts autonomously, there's no audit trail. When it makes a mistake, it doesn't tell you — it covers it up with confident prose.

5. **No metaphor that makes sense.** AI products use either developer jargon (agents, prompts, tokens, context windows) or marketing abstraction ("let AI handle it"). Neither helps a normal person understand what's happening.

HERA's answer to all five: **make the system visible, use metaphors people already understand, and prove everything through code — not through the model's word.**

---

## What Makes It Different

### 1. The Game Interface Is Not Decoration — It's the Entire UX Philosophy

Most AI products hide complexity behind a clean chat window. HERA does the opposite: it makes complexity visible through a metaphor everyone already understands.

The Void is a Phaser-rendered game world. Rooms are visible spaces with floors, walls, furniture, and agent sprites. Agents walk around, show their state, and work at desks. Tasks appear as objects in the world. Progress is spatial and visual.

This is not a gimmick. It solves a real design problem: **AI systems are boxes of actions, states, permissions, tools, and consequences.** The only way to make those visible to a non-technical user is to give them a familiar visual system. Office buildings and video game worlds are systems people already navigate intuitively.

Think of it this way: an agent running a research task in a traditional AI tool is invisible. In HERA, that agent is sitting at a desk in a room, the room belongs to a project, the task is pinned to a board, and you can see a chip showing the web search query and result count in real time. Same underlying operation. Completely different level of user understanding.

### 2. Code Is the Proof — The Trust Mechanic

This is the architectural decision that separates HERA from every other AI agent product.

HERA's North Star document states it explicitly: *"The model narrates. Code emits the proof and the gate."*

What this means technically:

- Every agent action emits a typed event to a single event bus
- Events are stored in SQLite — they are durable proof that something happened
- The UI renders events as visual components (toasts, cards, tool chips) that the model cannot fake
- The telemetry bar shows live system health (Server, Chat, SSE, Agents) without opening DevTools
- When an agent does a web search, you see the query and result count as a named chip
- When an agent fails, the error surfaces in chat as a readable message — not silence

The design constant is Z=1: **assume the user is on a cheap, dumb model.** It will forget to log things. It will claim things it didn't do. It will drift. Therefore every guardrail, every gate, every piece of logging is handled by HERA's code, never delegated to the model.

No other consumer AI product I'm aware of has articulated, let alone implemented, this separation this clearly.

### 3. Local-First Is Not a Feature — It's the Trust Architecture

HERA's data model is designed around a single premise: **the user's ideas are too valuable and too private to put on someone else's servers.**

The target user is described in the product vision as "dreamers, shower thinkers, and people with ideas they don't know how to begin." These are people typing things like:
- "I've been thinking about leaving my job and starting a ceramics business"
- "I want to write a memoir about my father"
- "I need to figure out whether to move my family to another country"

These ideas are psychologically vulnerable. If you ask someone to put them on a cloud server owned by a startup, you're asking for a trust they probably won't give.

HERA's architecture eliminates the question:
- Rooms, files, memories, chat history → user's machine
- AI calls → direct to the user's chosen provider (never routed through HERA's servers)
- HERA-the-company sees → email, license status, opt-in crash reports. That's the complete list.
- A breach of HERA's servers would expose emails, not the user's ceramics business plan

The positioning document calls this "the license to dream out loud." That's not marketing — it's a structural property of the architecture.

### 4. Tasks Are Not Checklists — They're Legal Firewalls

Most AI task systems are glorified to-do lists. HERA defines a task as a "beast" — a mandate with:

- A status lifecycle (not_started → in_progress → needs_review → done/failed)
- A structured review gate: agents cannot advance to the next subtask without user acceptance
- A ledger of every API call, tool call, and agent-to-agent communication
- A spend history showing what the task actually cost
- Configurable guardrails: per-task budget limits, sandbox boundaries, file write restrictions
- An optional agent grade by Iris that feeds back into agent improvement

The review gate is described as a "legal firewall": the user explicitly accepts each step before the agent can proceed. This protects against the scenario where an autonomous agent takes an irreversible action the user didn't authorize.

This is a level of task governance I have not seen in any consumer AI product.

### 5. The Cost-Aware Architecture

HERA is built around the assumption that the user is paying per-token and needs to know what things cost.

- The "Cheap Workhorse Doctrine": OpenRouter cheap models handle all read-heavy, synthesis-heavy, repetitive work. Premium models (Claude) are used only for architecture and diagnosis.
- Every generation (image, media, file write) shows a cost estimate before executing
- Per-room permission gates: "accept this," "accept all," "never ask again in this room"
- The difficulty × cost grid routes UX automatically: low-cost simple queries get instant answers; high-cost complex operations get forced into task mode with approval gates
- Proven in practice: `research_runner.py` runs Tavily + cheap model research briefs at zero Claude tokens. `forge_edit.py` handles mechanical code edits through DeepSeek.

### 6. Memory That Admits Uncertainty

The memory decay architecture document describes a future system where agents can distinguish between:
- What they actively remember (injected context)
- What they could look up (archived memory)
- What they don't know and need to ask about (uncertainty)

Today, HERA implements pinned context (stable room truth), rolling context (recent progress, auto-summarized), and auto-summary (background summarization using DeepSeek at ~$0.002 per summary).

The future direction: instead of hallucinating continuity when a user returns after months, HERA would say *"I don't see a launch date in what I have access to. Do you want me to search older notes?"*

This is the difference between an agent that hallucinates and an agent that knows what it doesn't know.

---

## The Technical Achievement — What's Actually Built

This is not a prototype or a mockup. The codebase contains:

| System | Implementation | Scale |
|--------|---------------|-------|
| **Backend** | FastAPI with 7 modular routers | `server.py` ~7100 lines, `chat.py` ~6200 lines |
| **Database** | SQLite with 3 databases | missions, ledger, context index — at `%APPDATA%\HERA\db\` |
| **Chat orchestration** | Multi-agent rooms with @-mention routing | Speaker resolution, tool loops (4 iterations max), SSE streaming |
| **Agent system** | 6 specialized agents | Each with personality, memory, tool access, model tier selection |
| **Task system** | Full lifecycle with review gates | Status canon, goal-play conductor, failure classification, action runner |
| **Memory system** | Pinned + rolling + auto-summary | Memory blocks injected per-call, compaction, auto-summary via DeepSeek |
| **Event system** | Typed event bus + Life OS ledger | 10+ event types, cost tracking, artifact linking |
| **Skills/tools** | System + custom, catalog search | Sandbox enforcement, tool schemas, skill file watcher |
| **Game world** | Phaser.js with room rendering | Floor tiles, furniture, animated sprites, 73+ curated assets |
| **Desktop app** | pywebview + Windows launcher | System tray, one-click launch, server restart, port management |
| **Image pipeline** | Scanline halftone processing | Custom pixel art aesthetic for generated images |
| **GitHub integration** | Full issue/project board sync | Agents can create/read/update GitHub issues |
| **Cost tracking** | Usage ledger + burn visibility | Per-call cost sourced from OpenRouter usage data |
| **Infrastructure** | AppData migration, HERA_FOLDER | Survives reinstall, zero-config path defaults, vault integration |

The frontend has 20+ React components including a full War Room (mission chat + task panel + team rail), The Void (Phaser game world), Life OS (event ledger with filters), The Armory (skills/tools management), Settings (APIs, paths, preferences, automation), and specialized drawers for task detail, agent forge, and memory management.

The documentation system alone is a signal: 17 subdirectories in `docs/`, domain maps for backend/frontend/agent runtime/data model/skills/tasks, a hygiene checker script, sprint closeout records, architecture decision records, and product direction docs. This is how a production team documents a system, not how a hobbyist experiments.

---

## What This Says About the Builder

> *The following section is analysis grounded in the codebase and documentation. No invention.*

### Systems Thinking at a Founder Level

The HERA codebase is not a single feature built well. It's a **system** — a set of interdependent layers designed to work together, with documented boundaries, explicit trade-offs, and clear reasoning for every major decision.

Evidence:
- The North Star has 7 "locked truths" that every technical decision flows from
- Architecture Decision Records (ADRs) document the reasoning behind data storage, business model, sprint decisions
- The Cheap Workhorse Doctrine is not just an idea — it's implemented (research_runner.py, forge_edit.py) with proven cost savings
- The trust mechanic (code proves, model narrates) is wired through the entire stack — events, SSE, telemetry, error surfaces

This is the kind of thinking that distinguishes a senior engineer or technical lead from someone who can code features. The ability to hold the entire system in your head, make structural decisions early, and enforce them through architecture rather than rules.

### Product Thinking — Not Just Engineering

HERA is not "a backend with a frontend." It's a product with:
- A defined audience (dreamers, shower thinkers, non-technical creators)
- A wedge use case (turning a vague idea into a room with a team and first tasks in under 5 minutes)
- A positioning strategy (local-first, trust-based, game-interface, cost-aware)
- Safety framing (agents are planners and researchers, not replacements for licensed professionals)
- Honest language guidelines (what to say, what not to say, with specific alternatives)
- A phased roadmap (stabilize → daily use → productize → testers → public beta → optional living world)

The product vision doc specifies that the first screen should ask *"What idea can't you stop thinking about?"* — not "create your first agent" or "configure your workspace." That's product instinct. The idea comes first; configuration follows invisibly.

### The Discipline of Restraint

What HERA explicitly does *not* do is as telling as what it does:

- No expanded agent autonomy (parked until trust loop is proven)
- No SaaS model (local-first, by deliberate architectural choice)
- No magic promises ("HERA helps you begin properly — it does not magically finish everything instantly")
- No AI-as-therapy, AI-as-doctor, AI-as-lawyer (explicit safety framing)
- No premature optimization (no vector embeddings until scale demands it)
- No premature monetization (BYOK first, managed credits later)
- No multi-user collaboration (Phase 4+)
- No mobile builds (Phase 4+)

Every "not yet" is accompanied by a reason and a phase when it might happen. This is disciplined product development, not feature creep.

### The Ubisoft Connection

Favour works at Ubisoft. The game-interface philosophy of HERA is not coincidental — it's the transfer of game design thinking to AI product design.

The realization: AI systems have the same structural properties as game systems — states, actions, rules, costs, consequences, progress. Game designers have spent decades solving the problem of making complex systems feel intuitive and engaging. Nobody has applied that discipline to AI UX.

HERA applies:
- **Spatial metaphor** (rooms instead of chat threads)
- **Character identity** (agents with names, sprites, emotions, personalities instead of "Assistant")
- **Visual feedback loops** (tool chips, thinking spinners, telemetry bars instead of loading indicators)
- **Progressive disclosure** (difficulty × cost grid routes UX complexity)
- **World persistence** (rooms you return to, agents that remember, tasks that track)

This is not "let's add pixel art to make it cute." This is "let's use the entire UX vocabulary of game design to solve the hardest problem in AI products: making the system understandable."

---

## Supporting Documents

For the full deep dives, see the [`vision-deep-dives/`](./vision-deep-dives/) subfolder:

| Document | What it covers |
|----------|---------------|
| [`01_TECHNICAL_ARCHITECTURE_DEEP_DIVE.md`](./vision-deep-dives/01_TECHNICAL_ARCHITECTURE_DEEP_DIVE.md) | The actual systems built — backend, frontend, data model, event bus, agent runtime |
| [`02_PRODUCT_AND_MARKET_ANALYSIS.md`](./vision-deep-dives/02_PRODUCT_AND_MARKET_ANALYSIS.md) | Where HERA sits in the AI product landscape, what it's competing against, and why it's different |
| [`03_PORTFOLIO_SIGNAL_ANALYSIS.md`](./vision-deep-dives/03_PORTFOLIO_SIGNAL_ANALYSIS.md) | What HERA demonstrates about the builder — for Google/FAANG portfolio positioning |

---

*This document is grounded entirely in the contents of the HERA repository at `D:\Documents\Hermes_Agent`. Nothing has been invented. All claims can be traced to specific files, commits, and documents in the codebase.*

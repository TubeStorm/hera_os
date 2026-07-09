# Competitor Screenshot Bucket List

**For:** Favour
**Save everything into:** `D:\Documents\favour-ai-product-portfolio\docs\References\competitors\`
**Why:** The HERA page argues "most AI tools hide what the AI knows, did, cost, and changed." That claim lands 10× harder next to a real side-by-side. I already captured the HERA side myself (7 real screenshots in `docs/References/hera-screens/` — Void, War Room, Iris rail, Life OS events, Burn, Armory, Goals). These are the competitor halves I need from you, because they require your logged-in accounts.

**Capture rules**
- Full app window, light or dark theme — whichever you actually use. Don't crop UI chrome; the point is the whole surface.
- Log out of anything sensitive first, or use a throwaway conversation. Nothing personal in view (names, emails, real project text).
- PNG, roughly 1600px wide or wider.
- Use the exact filenames below — the rewrite notes and future page work reference them by name.

---

## Priority 1 — the memory comparison (pairs with `hera-warroom` + memory blocks)

| # | Filename | What to capture | Why |
|---|----------|-----------------|-----|
| 1 | `chatgpt-settings-manage-memories.png` | ChatGPT → Settings → Personalization → **Manage memories** panel, with a few harmless saved memories visible | Shows memory buried 2 clicks deep in Settings, flat list, no idea when it saved anything. HERA's memory blocks live in the room where you work. |
| 2 | `chatgpt-memory-updated-toast.png` | A chat where ChatGPT shows the tiny "Memory updated" chip (ask it to remember something trivial like "I prefer short answers") | The entire visibility of a memory write in ChatGPT is one dismissible chip. |
| 3 | `claude-project-knowledge.png` | Claude.ai → a Project → the **project knowledge** panel | The closest thing Claude has to room context — still a doc bucket, not visible working memory. |

## Priority 2 — the cost comparison (pairs with `hera-lifeos-burn`)

| # | Filename | What to capture | Why |
|---|----------|-----------------|-----|
| 4 | `openai-platform-usage-dashboard.png` | platform.openai.com → **Usage** page (or the Anthropic console usage page → `anthropic-console-usage.png`, either works) | Cost lives in a developer console, after the fact, in a different product than where you did the work. HERA shows per-turn burn inside the workspace. |
| 5 | `chatgpt-no-cost-in-chat.png` | Any ordinary ChatGPT conversation — just a normal answer | The "control" shot: zero cost information anywhere in the surface where work happens. Caption writes itself. |

## Priority 3 — the "chat is not a workspace" comparison (pairs with `hera-void-home` + `hera-warroom`)

| # | Filename | What to capture | Why |
|---|----------|-----------------|-----|
| 6 | `chatgpt-sidebar-thread-list.png` | ChatGPT sidebar with a long list of past conversations visible (titles only — rename anything personal first) | The infinite-thread-list problem: no rooms, no teams, no task state, just a scroll of titles. |
| 7 | `codex-task-list.png` | chatgpt.com/codex → the task list view with a couple of finished/running tasks | The best-in-class agent task UI — and it's still developer-only, repo-scoped, no cost, no spatial model. Good "steelman" competitor. |
| 8 | `claude-code-terminal-run.png` | Claude Code running in a terminal mid-task (any toy task) | Shows the strongest agent experience today still lives in a terminal — exactly the audience gap HERA targets. |

## Priority 4 — nice to have (only if quick)

| # | Filename | What to capture | Why |
|---|----------|-----------------|-----|
| 9 | `cursor-agent-panel.png` | Cursor's agent/composer panel mid-edit | Second developer-tool example; skippable. |
| 10 | `notion-ai-inline.png` | Notion AI invoked inside a doc | "AI bolted onto a doc tool" category; skippable. |

---

## What I'll do with them
- Build "chat box vs HERA workspace" and "where's the cost?" side-by-side figures for the HERA page (the layout already anticipates them).
- Each figure gets an honest caption naming the competitor and date captured — no doctored images, no fake UI.
- Until these exist, the HERA page ships with real HERA screenshots standing alone (already live) — the comparisons are an upgrade, not a blocker.

**Verification note (2026-07-04):** surfaces confirmed current — ChatGPT memory lives at Settings → Personalization → Manage memories ([OpenAI Memory FAQ](https://help.openai.com/en/articles/8590148-memory-faq)), Codex cloud tasks live at chatgpt.com/codex ([Codex web docs](https://developers.openai.com/codex/cloud)).

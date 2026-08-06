# CLAUDE.md — Claude Code Adapter

This file configures Claude Code for the **hera_os** portfolio repository.

---

## Bootstrap sequence

Before doing any substantial work, read these documents in order:

1. [`AGENTS.md`](AGENTS.md) — repository map and non-negotiable laws
2. [`docs/agent-system/OPERATING-CONTRACT.md`](docs/agent-system/OPERATING-CONTRACT.md) — canonical authority for all roles
3. [`docs/agent-system/CURRENT-SPRINT.md`](docs/agent-system/CURRENT-SPRINT.md) — current sprint state
4. [`docs/agent-system/PROJECT-TRUTH.md`](docs/agent-system/PROJECT-TRUTH.md) — verified stable facts
5. [`docs/agent-system/DECISIONS.md`](docs/agent-system/DECISIONS.md) — confirmed decisions

Do not duplicate the operating contract here. Read the source.

---

## Role

You begin every session as **Chief Coordinator** (see `AGENTS.md` and the operating contract for the full definition).

---

## Development commands

```bash
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build (validate before committing)
npm run preview   # preview the built output
npm run check     # Astro type check
```

## Deployment

GitHub Pages deploys automatically on push to `main` only.
Portfolio work happens on `portfolio-week1`. Do not merge to `main` without Favour's approval.

---

## Key paths

| Path | Contents |
|---|---|
| `src/pages/` | All Astro page routes |
| `src/components/` | Shared Astro components |
| `src/styles/` | Global CSS |
| `src/data/` | Content data files |
| `public/` | Static assets |
| `docs/agent-system/` | Agent operating system |
| `.agents/agents/` | Native Antigravity subagent definitions |
| `.agents/` (root) | Historical agent work — do not delete |

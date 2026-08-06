# CURRENT-SPRINT.md — Live Sprint State

> **Living document.** Every coordinator that materially changes sprint truth must update this file.
> Do not record aspirational states as complete. Do not omit blockers.

---

## Current objective

**Week 1 — make the existing HERA/YC website usable as Favour's career portfolio**
without turning the sprint into months of portfolio preparation.

Scope is deliberately narrow: install the operating system, define the two new page architectures, build and verify those pages, then publish only after Favour's approval.

---

## Sprint sequence

| # | Step | Status |
|---|---|---|
| 1 | Install and prove persistent agent operating system | 🟡 **ACTIVE** |
| 2 | Audit portfolio-relevant repository and content truth | ⬜ Not started |
| 3 | Define About page architecture | ⬜ Not started |
| 4 | Define Ubisoft Work architecture | ⬜ Not started |
| 5 | Build About page | ⬜ Not started |
| 6 | Build Ubisoft Work page | ⬜ Not started |
| 7 | Verify both pages | ⬜ Not started |
| 8 | Favour review and approval | ⬜ Not started |
| 9 | Merge to main and publish | ⬜ Not started |

---

## Active work (Step 1)

**Task:** Install persistent multi-agent operating system

**What is being created:**
- `AGENTS.md` — universal repository entrypoint
- `CLAUDE.md` — Claude Code adapter
- `.agents/rules/00-chief-coordinator.md` — Antigravity workspace rule
- `docs/agent-system/OPERATING-CONTRACT.md` — canonical authority
- `docs/agent-system/PROJECT-TRUTH.md` — verified facts
- `docs/agent-system/CURRENT-SPRINT.md` — this file
- `docs/agent-system/DECISIONS.md` — confirmed decisions
- `docs/agent-system/work-packets/active/` — packet staging area
- `docs/agent-system/work-packets/closed/` — completed packets
- `docs/agent-system/research-requests/` — external research prompts
- `.agents/agents/repository-researcher.md`
- `.agents/agents/builder.md`
- `.agents/agents/verifier.md`
- `.agents/agents/repair-builder.md`

**Working branch:** `portfolio-week1` (worktree at `d:\Documents\favour-ai-product-portfolio-week1`)

**Acceptance criteria for Step 1:**
- [ ] All operating system files created and internally consistent
- [ ] No paths pointing to nonexistent files
- [ ] Build still passes (`npm run build`)
- [ ] No production website files modified
- [ ] Favour can verify system loads in a fresh conversation

---

## Open questions (for Favour to decide when ready)

- What Ubisoft projects are safe to mention by name vs. generic category?
- What is the primary audience for the About page — recruiters, YC, or product peers?
- Does the existing `about.astro` page need to be rebuilt from scratch or extended?

---

## Blockers

None currently.

---

*Last updated: 2026-08-05 — operating system installation, Step 1 active*

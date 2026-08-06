# DECISIONS.md — Confirmed Decisions

> Record only decisions that have been **explicitly confirmed by Favour**.
> Do not add inferred, assumed, or "probably intended" decisions.
> Do not relitigate entries already recorded here.
> Mark the date and context for each decision.

---

## Confirmed decisions

### Workflow and safety

| Decision | Date | Context |
|---|---|---|
| Portfolio work uses a separate branch/worktree (`portfolio-week1`) | 2026-08-05 | Prevents accidental overwrite of live YC/HERA site on `main` |
| GitHub Pages deployment fires only on `main` pushes | 2026-08-05 | Verified from `.github/workflows/deploy.yml` — branch work is safe |
| Existing `.agents/` directory is preserved, not deleted | 2026-08-05 | Contains historical agent work that may still be useful evidence |

### Content and pages

| Decision | Date | Context |
|---|---|---|
| HERA pages are preserved by default | 2026-08-05 | Explicit instruction — existing HERA/YC content must remain intact unless explicitly scoped |
| About page is about method and product thinking — not a generic personal biography | 2026-08-05 | Explicit instruction from Favour |
| Ubisoft Work prioritizes breadth over exhaustive case-study depth | 2026-08-05 | Explicit instruction from Favour |

### Research and agent economics

| Decision | Date | Context |
|---|---|---|
| Broad external research should be prepared as research-request prompts for cheaper ChatGPT/web execution — not automatic coding-agent usage | 2026-08-05 | Explicit instruction — protects agent allowance |

### Authority and confidentiality

| Decision | Date | Context |
|---|---|---|
| Favour retains final authority on career positioning and confidentiality | 2026-08-05 | Explicit instruction — agents may not invent these decisions |
| Ubisoft material defaults to private/generic until Favour explicitly approves a specific item | 2026-08-05 | Explicit instruction — do not publish internal material speculatively |

---

## Pending (awaiting Favour's decision)

- Which Ubisoft projects are safe to name publicly vs. generic category only?
- Primary audience for About page (recruiters, YC partners, product peers)?
- Rebuild `about.astro` from scratch vs. extend the existing 3.4 KB stub?

---

*Last updated: 2026-08-05 — operating system installation*

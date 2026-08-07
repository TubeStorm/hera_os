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
| Portfolio work uses a separate branch (`portfolio-week1`) in primary repo | 2026-08-05 | Prevents accidental overwrite of live YC/HERA site on `main`; no secondary worktrees used |
| GitHub Pages deployment fires only on `main` pushes | 2026-08-05 | Verified from `.github/workflows/deploy.yml` — branch work is safe |
| Existing `.agents/` directory is preserved, not deleted | 2026-08-05 | Contains historical agent work that may still be useful evidence |

### Content and pages

| Decision | Date | Context |
|---|---|---|
| HERA pages are preserved by default | 2026-08-05 | Explicit instruction — existing HERA/YC content must remain intact unless explicitly scoped |
| About page is about method and product thinking — not a generic personal biography | 2026-08-05 | Explicit instruction from Favour |
| Ubisoft Work prioritizes breadth over exhaustive case-study depth | 2026-08-05 | Explicit instruction from Favour |

### Ubisoft content decisions

| Decision | Date | Context |
|---|---|---|
| Brand name is "Ubisoft" — do not anonymize | 2026-08-06 | Explicitly confirmed by Favour |
| Tool titles use generic domain descriptors (e.g. "Resource Management Platform") | 2026-08-06 | Explicitly confirmed by Favour |
| 6 problem stories approved: 3 original + 3 shortlisted | 2026-08-06 | Explicitly confirmed by Favour |

### Agent workflow decisions

| Decision | Date | Context |
|---|---|---|
| Chief must publish a human-readable waypoint before substantial work or subagent delegation | 2026-08-07 | Explicit instruction from Favour — workflow repair |
| Public-facing pages require Favour's explicit acceptance before being marked complete | 2026-08-07 | Explicit instruction from Favour — workflow repair |
| Every meaningful completed slice receives a durable closeout file in `docs/closeout/` | 2026-08-07 | Explicit instruction from Favour — workflow repair |
| Work packets move from `active/` to `closed/` when implementation + verification lifecycle completes | 2026-08-07 | Explicit instruction from Favour — workflow repair |
| Chief must respect explicit stop boundaries — cannot cross them even if it believes work should continue | 2026-08-07 | Explicit instruction from Favour — workflow repair |
| Human-facing communications must use product/UX language — no Git plumbing, agent IDs, or compiler jargon | 2026-08-07 | Explicit instruction from Favour — workflow repair |

---

## Pending (awaiting Favour's decision)

- Primary audience for About page: is it recruiters, YC partners, or product peers? (affects tone calibration for Slice 3)
- Rebuild target for Slice 3: are there specific sections of the Ubisoft Work page that Favour wants changed, or does the existing structure stand?

---

*Last updated: 2026-08-07 — added workflow repair decisions confirmed by Favour; moved resolved Ubisoft content decisions from pending to confirmed*

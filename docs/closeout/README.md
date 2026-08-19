# docs/closeout — Durable Work Closeouts

This folder holds one permanent record for every meaningful slice, task, or workflow change that materially affects the portfolio or operating system.

---

## The rule

**Every meaningful piece of completed work gets a closeout.**

A meaningful piece of work is anything that:
- Changes a public-facing portfolio page
- Changes the agent operating system or its rules
- Changes navigation, routes, or global site data
- Closes a named work packet or sprint step

Trivial fixes (typos, single-word copy tweaks, config experiments) do not require a closeout.

---

## Why this folder exists

Without closeouts:
- Favour cannot reconstruct what happened without reading transcripts
- Future Chiefs cannot determine what was reviewed and what wasn't
- The sprint map loses its evidence base
- A "completed" item may have never been reviewed by a human

With closeouts:
- Every meaningful result has a permanent record in plain language
- The technical proof exists alongside the human narrative
- Favour can find exactly what needs her review, and exactly what is already closed

---

## Naming convention

```
YYYY-MM-DD_<SLICE-OR-TASK-NAME>_CLOSEOUT.md
```

Examples:
- `2026-08-06_SLICE-1-NAVIGATION_CLOSEOUT.md`
- `2026-08-07_SLICE-2-ABOUT-PAGE_CLOSEOUT.md`
- `2026-08-07_WORKFLOW-REPAIR_CLOSEOUT.md`

Use hyphens within the name segment. Use underscores between segments.

---

## Closeout template

See `docs/agent-system/CLOSEOUT-TEMPLATE.md`.

The human-facing result always comes **before** the technical receipt. Do not bury the outcome beneath logs.

---

## Required sections (in this order)

1. **What you can do now** — human outcome, leads the document
2. **What changed** — product-language description
3. **What was proven** — honest verification (do not convert file checks into visual proof)
4. **What is not finished** — honest gaps
5. **What I need from Favour** — specific or "Nothing"
6. **What happens next and why** — 1–3 sentences
7. **Project records updated** — living documents touched
8. **Technical receipt** — branch, commits, files, build result, verifier verdict

---

## Favour acceptance states

A closeout is created when the implementation/verification lifecycle is complete.
The closeout records the current Favour acceptance state:

| State | Meaning |
|---|---|
| `Favour Accepted: Pending` | Built and verified; Favour has not reviewed/accepted yet |
| `Favour Accepted: Yes` | Favour explicitly confirmed the result is good |
| `Favour Accepted: No` | Favour reviewed and requested changes |

---

*README created: 2026-08-07 — part of workflow repair*

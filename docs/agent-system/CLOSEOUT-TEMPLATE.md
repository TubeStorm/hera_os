# CLOSEOUT TEMPLATE — Durable Record of Completed Work

> Every slice, task, or meaningful change to the portfolio or workflow receives one closeout file.
> Create this file when the work's implementation and verification lifecycle is complete.
> The closeout must be understandable without reading the chat transcript.
>
> **Naming:** `YYYY-MM-DD_<SLICE-OR-TASK-NAME>_CLOSEOUT.md`
> **Location:** `docs/closeout/`

---

# [Work name] — Closeout

**Date:** YYYY-MM-DD
**Branch:** `portfolio-week1`
**Favour Accepted:** Yes / No / Pending

---

## What you can do now

Lead with the human outcome.
What can Favour do, show, or say is true now that was not true before?
Example: "You can open /about/ and read your complete AI Product Systems narrative."

---

## What changed

Explain the work in ordinary product language.
Which pages, sections, or features changed? What does the result look, feel, or read like?
Avoid naming files as the primary explanation — describe what the human sees.

---

## What was proven

Explain independent verification in observable terms.
"An independent verifier confirmed the build passes, all links resolve, and the page reads correctly on mobile."
Be honest about what was checked and how. Do not convert source inspection into visual proof if a browser was not opened.
Do not claim rendered-browser verification if only file inspection was performed.

---

## What is not finished

State anything still incomplete, pending, unproven, or awaiting Favour.
Include: visual review pending, content decisions outstanding, known technical gaps.
If nothing is unfinished, say "Nothing."

---

## What I need from Favour

Say exactly what Favour must do or decide for this work to be fully closed.
Say "Nothing" if nothing is required.
Examples:
- "Please open /about/ in your browser and confirm the content, layout, and positioning feel right."
- "Please confirm whether the Ubisoft project names on this page are safe to keep public."

---

## What happens next and why

Maximum 1–3 sentences.
What does this close unlock? What is the immediate next step?

---

## Project records updated

List every living document updated as part of this close:
- `docs/agent-system/CURRENT-SPRINT.md` — status updated to [new status]
- `docs/agent-system/PROJECT-TRUTH.md` — [what fact was added/changed]
- `docs/agent-system/work-packets/closed/[PACKET].md` — moved from active
- etc.

---

## Technical receipt

Keep this section concise. It is evidence, not the main result.

- **Branch:** `portfolio-week1`
- **Commit(s):** [hash] — [short message]
- **Files changed:** [list]
- **Build check:** `npm run build` — exit 0, N pages, 0 errors [or FAILED]
- **Type check:** `npm run check` — pass [or FAILED]
- **Verifier result:** PASS / CONDITIONAL PASS / FAIL
- **Defects found:** [N defects — list or "none"]
- **Repairs made:** [description or "none"]
- **Visual/browser check:** Performed / Not performed — [details if performed]
- **Mobile check:** Performed / Not performed — [details if performed]

---

*Template created: 2026-08-07 — part of workflow repair*

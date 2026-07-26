# PROJECT PLAN — HERA Obsidian Shortcuts Copy Rewrite

## Overview
Research and rewrite the portfolio copy for the 'Obsidian Shortcuts' application to align with the HERA OS founder narrative, incorporating explicit founder guidance for HERA Inheritance, utilizing a multi-agent critique and review cycle.

## Milestones

| # | Milestone | Scope | Deliverable | Status |
|---|-----------|-------|-------------|--------|
| 1 | Research & Critique | Extract facts from YC audit/evidence docs & critique current Obsidian Shortcuts copy | `research_report.md` & `critique_report.md` | DONE |
| 2 | Drafting (v2 Polish) | Product Storyteller refines draft copy removing em dashes, polishing buzzwords, and tightening Iris dependency narrative | `draft_copy_v2.md` | DONE |
| 3 | Dual-Review Gate System | YC Reviewer (>=8.5) & Nontechnical Reader (>=9.0) re-evaluate v2 copy | `yc_review_report.md` & `nontech_review_report.md` | DONE |
| 4 | Integration & Verification | Update `src/data/lineage.ts` with accepted v2 copy, run build & tests, verify integrity | `src/data/lineage.ts` updated & verified | DONE |
| 5 | Final Packaging & Delivery | Deliver final report, claim completion to Sentinel | `FINAL_OBSIDIAN_SHORTCUTS_COPY.md` | DONE |

## Required Copy Sections
1. Problem (real user problem, hidden system failure noticed, what existing approaches assumed)
2. Rejected (what was rejected and why)
3. Built (what was built, architecture, concrete tech choices)
4. Inherited (MUST incorporate explicit founder guidance: "Obsidian Shortcuts taught me that something as simple as appending here, appending to bottom, or appending to a symbol is a system. It taught me that if you stack very simple actions one after the other, you eventually have a very complex system. This is how lanes and task parallelism work is built in the backend. When Iris (HERA's planner) plans your project, her job is not just to think of fancy new tasks or guess—she must consider dependencies that will make it impossible for the next task to ever matter to the first task that was executed. In other words, what will break task 5 in column 4 in lane 3, when we press the plan and task 1 in lane 1 of column 1 begins?")
5. Status (evidence of use, current status)

## Gate Criteria Results
- Factually aligned with YC audit/evidence docs: PASSED
- Incorporates exact founder guidance for HERA Inheritance: PASSED (100% exact match)
- Zero AI writing tropes, buzzwords, or vague claims: PASSED
- Zero em dashes (`—`): PASSED (0 em dashes verified by Auditor v2)
- Concrete cause-and-effect structure: PASSED
- YC Reviewer score: **9.5 / 10.0** (Threshold: >= 8.5) — PASSED
- Nontechnical Reader score: **9.5 / 10.0** (Threshold: >= 9.0) — PASSED
- Forensic Auditor verdict: **CLEAN** — PASSED

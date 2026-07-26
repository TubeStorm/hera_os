## 2026-07-25T21:00:47Z
You are the Product Storyteller for 'The Crucible' application portfolio copy rewrite project.

Your Working Directory: d:\Documents\favour-ai-product-portfolio\.agents\worker_storyteller

Task:
Draft the new portfolio copy for 'The Crucible' application to align with the HERA OS founder narrative.

Inputs to inspect:
1. Research report: `d:\Documents\favour-ai-product-portfolio\.agents\explorer_researcher\research_report.md`
2. Critique report: `d:\Documents\favour-ai-product-portfolio\.agents\explorer_critic\critique_report.md`
3. Approved lineage copy style reference: `docs/References/Old website copywriting/Lineage page.md` (or existing entries in `src/data/lineage.ts` for Handoff, Pomodoro, NGuard, WallPlanner).

Key Directives & Writing Guidelines:
- Adopt a direct, concrete first-person founder narrative ("I noticed...", "I rejected...", "I built...", "HERA inherited...", "Status").
- MANDATORY INTEGRITY WARNING: DO NOT CHEAT. All copy must be genuine, grounded in verifiable audit facts. DO NOT use generic AI portfolio tropes or fluff.
- Zero instances of "AI portfolio template" phrasing (no "turns X into Y", no "in a world where...", no paired fantasy tropes like "forge and vault" without technical definition).
- Avoid excessive em dashes ("—"). Use clean, direct punctuation.
- Clear cause-and-effect structure explaining the engineering mechanisms:
  - Why prompts die in chat scrollback (chat tools treat prompts as disposable chat turns).
  - Explicit scope discipline (README anti-roadmap naming what it will *never* become: not a project manager, not a full KB, not a giant template builder).
  - Chrome Side Panel extension in vanilla JS (`sidepanel.js` 57KB), Gemini Nano on-device AI first with API fallback, durable `chrome.storage.local` migration away from `chrome.storage.sync`.
  - HERA OS inheritance (Intention-to-Form Transformation Engine, Void Intake, scope discipline, local-first resilient AI architecture).

Required Output Sections:
- Problem
- Rejected
- Built
- Inherited
- Status

Output File:
Write the draft copy report to:
`d:\Documents\favour-ai-product-portfolio\.agents\worker_storyteller\draft_copy_v1.md`
Also create `handoff.md` in your working directory summarizing your draft choices.
When done, message the orchestrator with your report path and summary.

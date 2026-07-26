# Content Map — per page

For each page: purpose, target reader, main message, proof shown, images used, what feels generic, what is placeholder, what is missing. Honest, not defensive.

---

## `/` — Home

- **Purpose:** Front door. Pitch + route to the two case studies, resume, and contact.
- **Target reader:** Hiring manager / founder / recruiter evaluating an AI product designer in the first 20 seconds.
- **Main message:** "I make AI systems easier to trust, control, and actually use."
- **Proof shown:** Two case-study cards (HERA, Enterprise), a 6-item capability grid, a 4-step process, HERA + Enterprise preview blocks.
- **Images:** 3 placeholders (HERA card, Enterprise card, HERA "Global Iris + Life OS" tall, Enterprise "planning & governance console" tall). No real images.
- **Feels generic:** "Systems, not screens.", "Quiet process, hard-to-break results.", "Six things I get called in for." are confident but could sit on many senior-designer sites. The capability grid is abstract (no specifics, metrics, or artifacts).
- **Placeholder:** All hero/preview imagery; "Download resume" points at a PDF that doesn't exist yet.
- **Missing:** Any real screenshot or proof of craft; social proof (logos, testimonials); a portrait; anything numeric beyond "1,000+/40+".

## `/work` — Work index

- **Purpose:** List of case studies.
- **Target reader:** Someone who clicked "Work" wanting the portfolio proper.
- **Main message:** "Case studies in making complex software legible." (redacted + honest, not vanity).
- **Proof shown:** The same two cards as home + a dashed "more under NDA" note.
- **Images:** 2 placeholders (the two card thumbnails).
- **Feels generic:** It's almost a duplicate of the homepage "Selected work" section — same two cards, similar framing. Thin as a standalone page.
- **Placeholder:** Both card images.
- **Missing:** More than two projects; any visual variety from the homepage; filters/tags/index value.

## `/work/hera` — HERA case study

- **Purpose:** Deep, redacted case study on HERA OS.
- **Target reader:** Someone assessing product-architecture + agentic-AI-UX depth.
- **Main message:** Made AI work "visible, controllable, and understandable" for non-technical builders.
- **Proof shown:** Problem → role → product model → 10 key systems → 7 hard problems → 4 selected screens → what it demonstrates → what's next. One quote callout. Meta row (role/type/timeline/focus).
- **Images:** 6 placeholders (hero, composer, Global Iris rail, Life OS, memory blocks, permissions). All placeholders.
- **Feels generic:** The narrative is strong but entirely **told, not shown** — no artifacts, flows, before/after, or screens. The "key systems" are described in one line each without evidence. Reads as a well-written spec, not a proven case study.
- **Placeholder:** Every one of the 6 image slots.
- **Missing:** Actual screens (redacted or blurred is fine), diagrams, process artifacts, outcomes/metrics, any indication the product is real.

## `/work/enterprise-tools` — Enterprise (Ubisoft) case study

- **Purpose:** Deep case study on enterprise internal-tools work at Ubisoft.
- **Target reader:** Someone assessing enterprise/at-scale UX and governance-workflow depth.
- **Main message:** Rebuilt trust in planning/staffing/governance tools used by 1,000+ people; turned 40+ modals into one system.
- **Proof shown:** Context → 4 stat chips → problem → role → research → design systems → governance → impact → demonstrates. One quote callout. Meta row.
- **Images:** 4 placeholders (hero console, 40+ modal audit map, approval flow, quota visibility).
- **Feels generic:** The stats (1,000+ / 40+ / 1 / 3) are the only concrete anchors and two of them ("1 coherent system", "3 workflow domains") are soft. Impact section is qualitative ("became legible", "reduced confusion") with no measured result.
- **Placeholder:** All 4 image slots. "Ubisoft" is named but there's no logo/permission context.
- **Missing:** Real (even redacted) artifacts of the audit; measurable outcomes; confirmation the Ubisoft attribution is cleared to publish.

## `/resume` — Resume

- **Purpose:** Scannable resume + PDF download.
- **Target reader:** Recruiter / hiring manager.
- **Main message:** "Senior UX / Product Designer — AI Workflows, Agentic Systems & Enterprise Tools."
- **Proof shown:** Summary, 2 roles with bullets, selected projects, 9 skills, education line.
- **Images:** None.
- **Feels generic:** Skills list is standard. Fine for a resume.
- **Placeholder:** **Education is a placeholder** ("Design / HCI background — See full CV", no institution/dates). **The Download PDF button targets `resume/Favour-Diokpo-Resume.pdf`, which does not exist** — clicking currently 404s.
- **Missing:** Real education; real dates; the actual PDF file; location/contact block.

## `/about` — About

- **Purpose:** Personal framing + belief system.
- **Target reader:** Someone who wants the human behind the work before reaching out.
- **Main message:** "I design the parts of AI products people are supposed to trust."
- **Proof shown:** 3 narrative paragraphs + the same 6 capability items relabeled "A few things I believe about AI UX."
- **Images:** 1 placeholder — "Portrait — Favour Diokpo."
- **Feels generic:** The "How I think" grid is literally the same six capability objects reused from the homepage — no new content, just a new heading. Reduces perceived depth.
- **Placeholder:** The portrait (no real photo).
- **Missing:** A real photo; anything specific/personal (background, location, path into design); differentiation from the homepage copy.

## `/contact` — Contact

- **Purpose:** Convert interest into a message.
- **Target reader:** A prospective client/employer ready to reach out.
- **Main message:** "Let's make your AI product trustworthy."
- **Proof shown:** Pitch, email card, LinkedIn card, a 3-field form.
- **Images:** None.
- **Feels generic:** Standard contact page.
- **Placeholder:** **Email is `hello@favourdiokpo.com` (placeholder domain).** **LinkedIn links to `https://www.linkedin.com/` (generic root, not a real profile).** The form is a `mailto:` that opens the visitor's email client and is explicitly TODO'd to be wired to Formspree/Web3Forms.
- **Missing:** Real email + real LinkedIn URL; a working form handler; any other channel (Twitter/X, portfolio elsewhere).

---

## Cross-cutting observations

- **Every image on the entire site is a placeholder** (14 slots total incl. duplicates). No screenshots, no diagrams, no portrait.
- **Contact identity is fake/placeholder** across footer, contact page, and site data (`hello@favourdiokpo.com`, LinkedIn root).
- **Resume PDF is referenced in 3 places (hero, resume header, resume footer) but the file is absent** → those are broken downloads today.
- **Content repeats:** the 6 capability items appear on home + about; the 2 project cards appear on home + work. Real unique page count is lower than it looks.
- **Strong on narrative/voice, empty on evidence.** The writing consistently claims taste and rigor; nothing visual yet backs it up.
- `astro.config.mjs` still has `GITHUB_USERNAME = 'YOUR_USERNAME'`, so live URLs/canonical/OG tags are not yet real.

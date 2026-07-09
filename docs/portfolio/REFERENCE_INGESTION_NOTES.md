# Reference Ingestion Notes

Source of truth for the 2026-07-02 reference-ingestion pass. Every source file in
`docs/References/` was read directly (not from memory). This file records what each
contains, which claims are safe to publish, which details must stay private, and how
each one influenced the site.

**Golden rule applied:** no metric appears on the public site unless it is directly
supported by one of these files. No invented business outcomes (no "saved $X", no
"reduced friction by Y%").

---

## Favour_Diokpo_Resume_2026.pdf  (newest resume — the one wired for download)

- **Contains:** Current resume. Title "Senior UX Specialist — Product Owner/Manager".
  Montréal, QC. Contact block. Summary, core strengths, Ubisoft experience (RPM, Work
  Arrangement, Capacity Governance), selected impact themes, education, certifications.
- **Usable claims / facts:**
  - Ubisoft — Senior UX Specialist (Internal Tools), **May 2021 – Present** (corrected
    the site, which previously said "2021–2024").
  - 1,000+ users; 40+ modals audited/standardized; 10+ internal tools.
  - Three workstreams: RPM, Work Arrangement, Capacity Governance.
  - **Education:** MIT Professional Program in Applied Data Science (2022–2023);
    Carleton University BIT (2016–2020); Algonquin College Advanced Diploma, IT & Design
    (2016–2020).
  - **Certifications:** IBM AI Product Manager (2026); Google Project Management (2026).
  - Tools: Figma, Miro, Jira/Confluence, Tableau/Sheets, basic SQL.
  - **Contact (public on the resume):** favourdiokpo@icloud.com,
    linkedin.com/in/favour-diokpo.
- **Private / do NOT publish:** phone number (613) 501-6340 — kept off the public site.
- **Influence:** Copied to `public/resume/Favour-Diokpo-Resume.pdf` and download wired
  (`resumeAsset.available = true`). Email + LinkedIn set to `confirmed: true` in
  `site.ts`, so Contact + Footer now show real channels. Added real Education +
  Certifications sections to the resume page. Fixed Ubisoft dates everywhere.

## Favour_Diokpo_Resume_ old.md  (older resume)

- **Contains:** Near-identical earlier version of the 2026 resume, same numbers.
- **Influence:** Used to cross-check that the 2026 facts are stable (dates, education,
  metrics all consistent). No conflicts. The 2026 PDF is the published one.

## Case study 1.md  — Work Arrangement (Redesigning Internal Approvals at Scale)

- **Contains:** Full Work Arrangement case study.
- **Usable claims:**
  - Research across **four organizational levels** (Employees, Direct Managers, Other
    Managers, Directors & HR committee); **12+ interviewees**.
  - Old tool supported only two outcomes; defined **five structured approval flows**.
  - "Did you speak with the employee?" accountability checkpoint before publishing.
  - Free-text manager comments replaced with **legally-vetted templated messaging** due
    to HR/legal constraints.
  - ~13 major issues documented; five phased epics.
  - Acted as de facto product strategist without a formal PO title.
- **Private / do NOT publish:** Internal names (Claude, Véroniq, Aude, Sybil, Clement)
  and verbatim employee quotes — omitted from the public site. Ubisoft NDA: original
  visuals were intentionally blurred; do not reproduce them.
- **Influence:** Enterprise case study "Workflow redesign" section (five flows,
  accountability checkpoint, templated messaging) and the "Three workstreams" block.

## Case study 2.md  — RPM UI Revamp & Design System

- **Contains:** Full RPM case study with survey data.
- **Usable claims:**
  - RPM used by **1,000+ users**; sole UX designer.
  - Global satisfaction survey — **101 responses**.
  - Overall satisfaction **3.5/5**; "save time" rated **2.16/5**.
  - Project Managers = **38%** of users (largest group), among least satisfied (**3.3/5**).
  - 54% of users had >2 years tenure (3.2/5); newer users (<6mo) rated highest (3.5/5);
    mid-tenure lowest (2.6/5). 62% use RPM several times a week+.
  - **40+ modals audited**; focused on three core modals (Position, Request, Advanced
    Date Editor) + navigation ribbon. 25+ distinct issues mapped.
  - Collaborated with Ubisoft's shared design-system team **EGG**; devs shipped the same
    components from design.
- **Private / do NOT publish:** Ubisoft screenshots (NDA — the source images are
  placeholder/blurred). Use redacted diagrams instead (already the site's approach).
- **Influence:** "What the research found" section (all survey numbers), stat chips
  (101 responses, 5 approval flows), RPM workstream card, EGG design-system mention in
  the resume and case study.

## about me old.pdf  — earlier About/portfolio deck

- **Contains:** "Product-Focused UX Specialist" positioning. "I work on tools that
  bridge **Money, People, and Game Development**." "Who I am" — Senior UX Specialist on
  internal platforms that help studios plan work, request hires, and make approvals;
  "turning messy workflows into something people can actually use without babysitting
  the system." Edge: "I turn governance problems into shippable options with proof."
  Contact page shows favourdiokpo@icloud.com + LinkedIn.
- **Usable voice cues:** money/people/game-development bridge; "without babysitting the
  system"; "turning ambiguity into decisions"; governance-to-shippable-options framing.
- **Private / do NOT publish:** nothing sensitive; this was already a public-facing deck.
- **Influence:** About page — added the money/people/game-development line and the
  "without babysitting the system" / "turn ambiguity into decisions" voice, blended into
  (not replacing) the AI-first positioning.

## good / blurry Ubisoft RPM ui revamp & design system.pdf

- **Contains:** Visual export of the RPM case study (screens, before/after). The "blurry"
  version is deliberately obscured for NDA; the "good" one is high-res.
- **Decision:** NOT read page-by-page and NOT published. These are Ubisoft-owned UI under
  NDA. The textual substance is fully captured in Case study 2.md, and the site uses
  redacted diagrams (ModalAuditBeforeAfter, ApprovalFlow, QuotaCard) instead of real
  screenshots — the correct, NDA-safe approach.

---

## Net changes driven by these sources

| Source fact | Where it landed |
|---|---|
| Ubisoft = May 2021 – **Present** | resume period, project status/year, case-study meta |
| Email + LinkedIn confirmed | `contact` in site.ts → Contact page + Footer |
| Resume PDF (2026) | `public/resume/`, download wired on Resume + Contact |
| Education + Certifications | new sections on the Resume page |
| 101 survey responses, 3.5/5, 2.16/5, PM 38%/3.3/5 | enterprise "What the research found" + stat chips |
| Five approval flows + accountability checkpoint | enterprise "Workflow redesign" |
| Three workstreams (RPM / Work Arrangement / Capacity Governance) | enterprise "Three workstreams" |
| Money / People / Game Development voice | About page |

# Closeout — Portfolio Re-Architecture: HERA as the Main Signal

**Date:** 2026-07-04
**Preflight:** `docs/preflights/Portfolio Re-Architecture — Make HERA the Main Signal, Not a Generic Case Study.md`
**Repo:** `D:\Documents\favour-ai-product-portfolio`

---

## Summary

The site stopped being a generic "trust and agentic UX" portfolio and became a portfolio about one specific point of view — *I design systems that make complicated work visible* — proven by a flagship product (HERA, shown with real screenshots captured from the live development build) and three clearly separated Ubisoft workstreams. Every page got a distinct job, a voice pass, and an evidence check. Nothing on the site claims more than the sources support.

## HERA Result

- HERA is now the flagship: nav has a direct **HERA** link, the hero's primary CTA is **View HERA**, the Work page leads with a featured HERA card, and the homepage HERA section opens with the actual product ("What if AI felt less like a chatbot and more like a place?").
- The case study became a **product dossier**: why I built it → the product idea (game layer as UX philosophy) → 7 concrete differences → 7 product systems (each with its why) → 7 named proof modules (Global Iris, Rooms & agents, Composer, Life OS, Chat integrity, Goals & tasks, Skills & tools) → 4 usage scenarios → **7 honest failure cards** → market gap → what it proves.
- **I captured real screenshots myself** (Playwright against the live app at 127.0.0.1:8765, 1600×900@2x): Void, War Room, Global Iris rail, Life OS events, Burn, Armory, Goals. Raw copies: `docs/References/hera-screens/`. Site copies: `public/images/hera/`. All labeled "development build, July 2026."
- Two designed diagrams kept where they explain better than pixels (Iris scope map, ghost-turn before/after). The generic TrustLayerMap hero is gone.

## Ubisoft / Enterprise Result

Reframed as **grouped workstreams, not one project**. Page retitled "Enterprise Systems at Ubisoft — three workstreams in planning, approvals, and governance," opening with "These are three distinct projects, not one." Each workstream (RPM `#rpm`, Work Arrangement `#work-arrangement`, Capacity Governance `#capacity-governance`) has problem / role / research / designed / what-it-demonstrates. Work page and resume Selected Projects now list the same four projects 1:1.

## Resume Result

- Headline: "Product Designer for AI systems, internal tools, and workflow-heavy products" (was a three-noun jargon stack).
- Summary rewritten in first person; zero uses of agentic/trust/architecture.
- HERA re-listed as **Founder & Product Designer — independent AI product**, with a real stack bullet (FastAPI, React/TS, Phaser, SQLite event ledger).
- Skill groups de-buzzed ("Failure states & recovery" instead of "Trust & control models").

## Voice / Persona Result

- The site now sounds like a person with a thesis, not marketing copy: plain sentence first, object/decision/failure second.
- Removed: "making agentic AI visible, controllable, and safe to trust", "AI products are powerful but…", "interfaces people can understand and trust", "Systems, not screens" (×3), the role-soup rotator, both homepage filler grids.
- Point of view is clearest on the HERA failure cards, the About thesis ("argue about backend event ledgers and sprite sheets in the same conversation"), and the hero.
- Intentionally formal: Resume, Enterprise numbers, Education. Full receipts: `docs/portfolio/VOICE_AND_PERSONA_NOTES.md`.

## Evidence Result

- Strong (source-doc-backed): all Ubisoft numbers (101 survey, 40+ modals, 1,000+ users, five flows, four org levels), all HERA mechanics (each failure card traces to a real closeout in the Hermes repo), the solo build claim.
- Positioning (clearly presented as belief): "AI should feel like a place…", "Good tools make people want to work."
- Softened/avoided: no user counts, no revenue, no release date, no absolute "nobody else does this," HERA labeled "In development, unreleased." Full table: `docs/portfolio/EVIDENCE_MAP.md`.

## Repetition Cleanup

grep-audited over built HTML: **agentic 0, seamless 0, complex 0, powerful 0, intuitive 1, architecture 1, trust 9** (down from saturation; remaining uses concrete). "Visible" is the retained thesis word, concentrated on the HERA page. Details + kept-intentionally list: `docs/portfolio/REPETITION_AUDIT.md`.

## HERA Tangibility Result

- Tangible objects now on the page: Global Iris, rooms, the Void, Composer, memory blocks, event ledger, burn card, goals/tasks/blockers, skills/tools catalog, permission modes, attachments-as-real-files, the telemetry bar.
- Scenarios added (4, short): the creator starting a room, the attachment check, the task receipt, reading memory blocks.
- Visuals: 7 real screenshots + 2 product-specific diagrams; zero decorative filler.

## Visual Result

New: `hera-void-home`, `hera-warroom`, `hera-global-iris-rail`, `hera-lifeos-events`, `hera-lifeos-burn`, `hera-armory`, `hera-goals` (all real). Homepage HERA section and Work flagship card use the Void shot. Kept: IrisScopeMap, GhostBeforeAfter, ModalAuditBeforeAfter, ApprovalFlow, QuotaCard (all product-specific). Retired from pages: TrustLayerMap-as-HERA-hero, ComposerCard, MemoryBlocks diagrams (superseded by real screenshots).

## Source Use

`HERA_VISION_2026_07_02.md`; vision-deep-dives `01/02/03`; `Case study 1.md` (Work Arrangement); `Case study 2.md` (RPM); `Favour_Diokpo_Resume_2026.pdf`; `about me old.pdf` voice cues; `REFERENCE_INGESTION_NOTES.md`; Hermes-repo closeouts for failure-story accuracy (Iris rail, TSP-06/08D.x, BURN P0). NDA rule held: no Ubisoft screenshots, redacted diagrams only.

## Build / Preview Result

- `npm run build` — **exit 0, 7 pages** (one environment quirk found: building while the preview server runs fails with EPERM on Windows because dist/ is locked; stop server → build → restart).
- `npm run preview -- --port 4322` — running.
- Playwright link crawl: **20 internal URLs, all 200**; resume PDF 200; all HERA images 200; no lorem ipsum, no TODO, no empty hrefs, no fake contact info (only confirmed email/LinkedIn/GitHub render).

## Route Verification

| Route | Status |
|---|---|
| `/` | PASS (200) |
| `/work/` | PASS (200) |
| `/work/hera/` | PASS (200) |
| `/work/enterprise-tools/` (+ 3 anchors) | PASS (200) |
| `/resume/` | PASS (200) |
| `/about/` | PASS (200) |
| `/contact/` | PASS (200) |

## Working Link

**http://localhost:4322/favour-ai-product-portfolio/** — production build, served by the preview server I started. I verified all routes. Open this link.
(If the server is ever stopped: it restarts with `npm run preview -- --port 4322` in the repo — but it is running now.)

## Review Export

**`D:\Documents\favour-ai-product-portfolio\audit-export-v3.zip`** (≈7 MB) — full-page screenshots of all 7 routes, page copy for all routes, asset list, route verification, build report, repetition audit, evidence map, voice notes, rewrite diff notes, remaining-placeholders report.

## Remaining Issues

**Blockers:** none.

**Missing assets (Favour's move):**
- Competitor screenshots — exact filenames + instructions in `docs/References/competitors/SCREENSHOT_BUCKET_LIST.md`. Drop them in that folder and I'll build the side-by-side figures.
- Optional: a staged Void/Armory session (current shots show test rooms like "Heyo Room" and an agent named "SKIBIDI_WRITER" — real and publishable, but a staged pass would present better), and a memory-blocks close-up.

**Optional polish:**
- Work-page card copy could be punchier.
- The old diagram components (TrustLayerMap, ComposerCard, MemoryBlocks) still exist in `src/components/diagrams/` unused — harmless, deletable later.

**Future:**
- Once competitor shots exist: "Chat box vs HERA workspace" and "Where's the cost?" comparison figures on the HERA page.
- Deploy to GitHub Pages when Favour wants the public URL updated (nothing was committed/pushed this pass).

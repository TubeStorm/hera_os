# PROJECT-TRUTH.md — Verified Stable Facts

> This document records only **verified facts** drawn directly from the repository.
> Facts marked `[REPO]` were confirmed by reading actual files.
> Facts marked `[HUMAN DECISION]` were stated by Favour — agents may not override them.
> Open questions are marked `[UNRESOLVED]`.
>
> Do not add speculative or inferred facts here without marking them clearly.

---

## Repository identity

- **[REPO]** Repository name: `TubeStorm/hera_os`
- **[REPO]** Local path: `d:\Documents\favour-ai-product-portfolio`
- **[REPO]** Framework: Astro 4.x with Tailwind CSS
- **[REPO]** Build command: `npm run build` (uses `astro build`)
- **[REPO]** Dev server: `npm run dev` (port 4321)
- **[REPO]** Type check: `npm run check`
- **[REPO]** Node requirement: `>=18.17.0`

## Deployment

- **[REPO]** Deployed to GitHub Pages at `https://TubeStorm.github.io/hera_os/`
- **[REPO]** Deployment triggers only on push to `main` branch (`.github/workflows/deploy.yml`)
- **[REPO]** Manual trigger available via `workflow_dispatch`
- **[REPO]** Build output: `./dist/`
- **[REPO]** Astro `base` path configured as `/hera_os/`

## Branch safety

- **[REPO]** Two local branches exist: `main` and `portfolio-week1`
- **[REPO]** Primary repository directory (`d:\Documents\favour-ai-product-portfolio`) is checked out on `portfolio-week1`
- **[HUMAN DECISION]** All portfolio development work occurs on branch `portfolio-week1` directly in the primary repository folder (no secondary worktrees)
- **[HUMAN DECISION]** The live YC/HERA site on `main` must not be accidentally overwritten

## Existing pages (confirmed by reading `src/pages/`)

- **[REPO]** `src/pages/index.astro` — main homepage (43 KB — substantial, existing HERA content)
- **[REPO]** `src/pages/about.astro` — About page (3.4 KB — exists but not yet portfolio-ready)
- **[REPO]** `src/pages/contact.astro` — Contact page
- **[REPO]** `src/pages/resume.astro` — Resume page
- **[REPO]** `src/pages/work/index.astro` — Work index
- **[REPO]** `src/pages/work/hera.astro` — HERA case study page
- **[REPO]** `src/pages/work/enterprise-tools.astro` — Enterprise tools page
- **[REPO]** `src/pages/work/lineage.astro` — Lineage page

## Source structure

- **[REPO]** `src/components/` — shared Astro components
- **[REPO]** `src/layouts/` — page layouts
- **[REPO]** `src/styles/` — global CSS
- **[REPO]** `src/data/` — content data files
- **[REPO]** `public/` — static assets (images, videos)

## Existing agent infrastructure (preserved, not deleted)

- **[REPO]** `.agents/` — contains 35+ subdirectories of historical agent work from previous multi-agent sessions
- **[REPO]** `.agents/ORIGINAL_REQUEST.md` — original portfolio copy request (Crucible, TabSuite, Obsidian tools)
- **[REPO]** `.agents/orchestrator/` — previous orchestrator agent with finalized copy for HERA portfolio items
- **[REPO]** `.claude/launch.json` — Claude Code dev/preview server configurations
- **[REPO]** `.github/workflows/deploy.yml` — GitHub Actions deployment (main branch only)

## Documentation (existing in `docs/`)

- **[REPO]** `docs/YC-FOUNDER-THESIS-AND-NARRATIVE.md` — 23 KB, founder narrative document
- **[REPO]** `docs/YC-FOUNDER-EVIDENCE-LEDGER.md` — 12 KB, evidence ledger
- **[REPO]** `docs/YC-HERA-DEEP-DIVE-BLUEPRINT.md` — 14 KB, HERA blueprint
- **[REPO]** `docs/YC-LINEAGE-PAGE-BLUEPRINT.md` — 17 KB, lineage page blueprint
- **[REPO]** `docs/ASSETS_NEEDED.md` — asset requirements
- **[REPO]** `docs/DESIGN.md` — design system notes (root level)

## Portfolio intent (human decisions)

- **[HUMAN DECISION]** This repository contains the HERA/YC website being extended into a career portfolio
- **[HUMAN DECISION]** Existing HERA pages must remain intact unless explicitly scoped for change
- **[HUMAN DECISION]** Target new portfolio surfaces: **About** and **Ubisoft Work**
- **[HUMAN DECISION]** About page exists to demonstrate Favour's product/system thinking and her workflow with agents and humans — not a generic personal biography
- **[HUMAN DECISION]** Ubisoft Work page exists to demonstrate breadth, senior professional experience, and repeated problem-solving patterns — not exhaustive UX case studies
- **[HUMAN DECISION]** Unresolved Ubisoft confidentiality defaults to private/generic presentation

## Navigation & Route Connection Truth

- **[REPO]** Live header navigation (`src/data/site.ts`) currently connects only 4 pages (`/`, `/work/hera/`, `/work/lineage/`, `/contact/`).
- **[REPO]** 4 existing pages in `src/pages/` (`/about/`, `/work/index.astro`, `/work/enterprise-tools/`, `/resume/`) are completely disconnected from header navigation.
- **[REPO]** The recommended navigation structure for portfolio launch is 6 items: `Home` (`''`) \| `HERA OS` (`'work/hera/'`) \| `Ubisoft Work` (`'work/enterprise-tools/'`) \| `About` (`'about/'`) \| `Lineage` (`'work/lineage/'`) \| `Contact` (`'contact/'`).

## Ubisoft Evidence & Confidentiality Truth

- **[REPO]** Role verified as "Senior UX Specialist — internal tools" at Ubisoft Montréal, May 2021 – Present (~5 years), managing platforms for 1,000+ users across Production, HR, and Finance.
- **[HUMAN DECISION]** Brand explicitly confirmed as **"Ubisoft"** (do NOT anonymize to "Global AAA Game Studio").
- **[HUMAN DECISION]** Tool titles explicitly confirmed as **generic domain descriptors** (e.g. "Resource Management Platform", "Hybrid Workplace Platform", "Production Macro-Planning Platform") to highlight system breadth across fields while maintaining NDA compliance.
- **[REPO]** Identified **8 internal enterprise platforms** across Favour's tenure: Resource Management Platform (RPM), Hybrid Workplace Platform (Work Arrangement), Production Macro-Planning Platform (Blockplan), Game Employee Credits Platform (Famous), Operational Monitoring & Layout Editor (Munin), Global Production Management (GPM), Voice Recording & Scheduling (Voice), and Time Filtering Tool (Tempus).
- **[REPO]** Identified **6 problem story candidates** (3 approved originals + 3 shortlisted additionals):
  1. Hybrid Workplace Platform — 5 Approval Flows & Remote Work Governance (Work Arrangement)
  2. Resource Management Platform — Close Request State Machine & End-Date Hack Removal (RPM)
  3. Resource Management Platform — 40+ Modal Audit & Spatial Footprint Matrix (RPM UI System)
  4. Game Employee Credits Platform — Global Policy Governance & Multi-Column Layout Systems (Famous)
  5. Production Macro-Planning Platform — Jira Integration & Timeline Synchronization (Blockplan)
  6. Resource Management Platform — Warning-Only Capacity Governance & Scenario Planning (RPM Kota)
- **[REPO]** Evidence base expanded from personal vault archives: `YC answers` (6 files including YC Fall 2026 application export `FAVOUR hera Application to YC 2026.mhtml`, `Hera Product Logic.txt`) and `portfolio building archives` (74 files across 8 subdirectories, 63,000+ lines of extracted text `deep_evidence.txt`).
- **[REPO]** Extracted systematic product methodology suite: UX-to-PO artifacts (Decision Logs, Micro-PRDs, Opportunity Briefs, Workshop Capture Sheets, Forensic Reconstruction Worksheets) and Career Autopsy Matrix (Product invention 0->1, System behaviour design, Human-AI interaction, Conceptual leadership).
- **[REPO]** All Ubisoft evidence categorized into 4 tiers in `docs/agent-system/WEEK1-PREFLIGHT-OUTPUT.md` Section 5.
- **[REPO]** Public-safe metrics in repo: 1,000+ users, 101 survey responses, 40+ modals audited, 3.5/5 overall rating, 2.16/5 time saving rating, 38% PM share at 3.3/5 rating, 5 approval flows.
- **[REPO]** Confidentiality presentation: Redacted SVG component diagrams (`ModalAuditBeforeAfter.astro`, `ApprovalFlow.astro`, `QuotaCard.astro`) in `src/components/diagrams/` provide high-trust, NDA-compliant visual presentation without exposing proprietary screenshots.

## About Page Architecture Truth

- **[REPO]** Real Subject: *"How Favour turns unclear ideas into coherent product systems."*
- **[REPO]** All 11 core About page topics are fully supported by verifiable in-repository code, blueprints, YC application answers, and archival test suites.
- **[REPO]** About page structure codified as 6 sections: Hero & Thesis (with verbatim YC quotes), Problem Diagnosis (Famous credit policy, RPM end-date hack, WallPlanner), Systems Primitives & State Machines (Work Arrangement 5 approval flows, RPM Spatial Footprint Matrix), Human vs. AI Authority & Verification (UX-to-PO template suite, Career Autopsy Matrix), Enterprise Scale & HERA Convergence (8 enterprise platforms vs HERA OS), and Action Cards.
- **[HUMAN DECISION]** Animated comparisons must preserve shared content and geometry, explain causality through a timed establish → think → inspect/resolve → reveal → hold sequence, keep orientation cues visible, and provide pause/play when text must be read. Canonical detail: `docs/agent-system/DESIGN-EXECUTION-STANDARD.md`.
- **[REPO]** The Section 01 carousel currently contains four slide articles even though the in-progress Slide 2 preflight and progress markup describe five. Slide 2 repair does not invent or alter the missing fifth slide; reconcile this in a separately approved carousel-content slice.

## HERA Career Evidence Map Truth

- **[REPO]** HERA provides verifiable proof across 5 core competencies: Product Invention (Void, Composer, Living Roadmap, Versioned Artifacts), System-Behaviour Design (formal state machines, wave barriers, 29 offline test suite), Human-AI Interaction Thinking (human authority review gates, `semantic_runtime` honesty gate), Product Leadership (pivot from Old HERA), and Workflow Architecture (multi-agent role bounding).
- **[REPO]** 4 IP/Confidentiality risks flagged & mitigated: Old vs New HERA framing, unwired memory/auto-naming claims, internal `/dev/` route exposure, and Ubisoft NDA.

---

*Last updated: 2026-08-06 — Preflight audit expanded with YC answers & portfolio archives; Favour decisions confirmed*


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

- **[REPO]** Currently only one branch exists: `main`
- **[REPO]** Worktree `portfolio-week1` created 2026-08-05 from `main` at commit `36e3b6b`
- **[HUMAN DECISION]** All portfolio development work occurs on `portfolio-week1`, not `main`
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

## Ubisoft material

- **[UNRESOLVED]** Specific Ubisoft projects/screenshots/metrics are NOT confirmed safe for publication
- **[HUMAN DECISION]** Default to private/generic presentation until Favour explicitly approves specific items

---

*Last updated: 2026-08-05 — operating system installation*

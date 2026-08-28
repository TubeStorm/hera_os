# Project: HERA Early Access Public Release (EA-V2-PUBLIC)

## Architecture
- **Framework**: Astro 5.x with static site generation (`output: 'static'`)
- **Styling**: Native CSS tokens in `src/styles/global.css`, inline scoped CSS in Astro components
- **Frontend State / Interaction**: Vanilla JS inside `<script>` tags on client
- **Backend / Form Endpoint**: Formspree AJAX (`https://formspree.io/f/mwlkevkp`)
- **Target Branch**: `main` (cleanly branched via `early-access-public` from `main`)
- **Excluded Branches / Folders**: `portfolio-week1` dev work (About page, Ubisoft case study) MUST NOT be merged to `main`.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F1 | EA Surface Core (R1) | 3 entry points (nav, hero inline, launcher), floating panel, email/name/use-case/checkbox, states, escape/focus trap, localStorage | M2 | ORIGINAL_REQUEST §R1 |
| F2 | Discovery Dropdown (R2) | `How did you find HERA?` dropdown with 8 options + Other toggle for `Where did you find HERA?` free-text; submits `how_heard`, `how_heard_other` | M2 | ORIGINAL_REQUEST §R2 |
| F3 | Deterministic HERA Alias (R3) | Email-derived deterministic alias (`Word-DD`, `Word_DD`, `Word+DD`), >=1000s namespace, stored in localStorage, submitted as `hera_alias` | M2 | ORIGINAL_REQUEST §R3 |
| F4 | Success State Agent Preview (R4) | "You're in.", alias displayed, inline canvas rendering amber pixel agent sprite, footer hint text, remove "Go catch Iris." | M2 | ORIGINAL_REQUEST §R4 |
| F5 | Labeled Footer Agents (R5) | Canvas-drawn labels: `Iris` in gold/accent (`--accent`), visitor agent in white/subtle with HERA alias; keep other agents unlabeled | M2 | ORIGINAL_REQUEST §R5 |
| F6 | Future-Proofing & Restraint (R6/R7) | Extensible footer agent data structure, no fake global count, native minimalist aesthetic | M2 | ORIGINAL_REQUEST §R6, §R7 |
| F7 | Formspree Payload Completion (R8) | Submits `email`, `name`, `use_case`, `early_tester`, `how_heard`, `how_heard_other`, `hera_alias`, `_source` | M2 | ORIGINAL_REQUEST §R8 |
| F8 | Waypoint Document | Waypoint at `docs/agent-system/WAYPOINT-2026-08-26_EA-V2-PUBLIC.md` | M1 | ORIGINAL_REQUEST §Waypoint |
| F9 | Git Branching & Isolation | Branch `early-access-public` from `main`, port ONLY EA files, strict isolation from Ubisoft/About dev work | M2 | ORIGINAL_REQUEST §Git |
| F10 | Build, Security, Verification | `npm run build`, security greps (no private data in dist/), Playwright screenshot suite across 7 criteria | M3 | ORIGINAL_REQUEST §Acceptance Criteria |
| F11 | Merge, Push & Live Deployment | Merge `early-access-public` to `main`, push to `origin/main`, verify live GitHub Pages site | M4 | ORIGINAL_REQUEST §Acceptance Criteria |
| F12 | Live Formspree Test & Submission | Real Formspree submission verifying all fields | M4 | ORIGINAL_REQUEST §Acceptance Criteria |
| F13 | Closeout & Sprint Update | `docs/closeout/2026-08-26_EA-V2-PUBLIC_CLOSEOUT.md` & `docs/agent-system/CURRENT-SPRINT.md` update | M5 | ORIGINAL_REQUEST §Closeout |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M0 | Survey & Working Tree Capture | Inspect uncommitted EA files on `portfolio-week1` and Git commits | none | IN_PROGRESS |
| M1 | Waypoint Publication | Create `docs/agent-system/WAYPOINT-2026-08-26_EA-V2-PUBLIC.md` | M0 | PLANNED |
| M2 | Git Branch & EA Implementation | Branch `early-access-public` from `main`, port & enhance EA components (F1-F7, F9) | M1 | PLANNED |
| M3 | Build, Security & Screenshot Suite | `npm run build`, security audit, Playwright screenshots across viewports/states | M2 | PLANNED |
| M4 | Merge to Main, Push & Live Verification | Fast-forward merge to `main`, push `origin/main`, live site check & real Formspree test | M3 | PLANNED |
| M5 | Closeout & Sprint Update | Publish closeout report and update CURRENT-SPRINT.md | M4 | PLANNED |

## Interface Contracts
### LocalStorage Keys
- `hera_ea_signed_up`: `'true'` when signed up
- `hera_ea_alias`: string (e.g. `'Moss-47'`)

### Formspree Payload Schema
```json
{
  "email": "user@example.com",
  "name": "Optional Name",
  "use_case": "Optional use case",
  "early_tester": true,
  "how_heard": "LinkedIn",
  "how_heard_other": "Specific blog",
  "hera_alias": "Moss-47",
  "_source": "hera-early-access"
}
```

### Canvas Label Contract
- Iris: `ctx.font = 'bold 9px var(--font-sans, sans-serif)'` / color `getComputedStyle(canvas).getPropertyValue('--accent') || '#e5a93b'` (or matching token)
- Visitor: `ctx.font = '8px var(--font-sans, sans-serif)'` / color `rgba(255, 255, 255, 0.75)` or `#e0e0e0`

## Code Layout
- `src/components/EarlyAccessSurface.astro` — Main floating panel, form, alias generator, success inline agent preview
- `src/components/Nav.astro` — Nav link `Join early access`
- `src/components/Footer.astro` — Pixel canvas footer, labeled agents, session agent display
- `src/layouts/BaseLayout.astro` — Mounts `EarlyAccessSurface`
- `src/pages/index.astro` — Hero inline one-liner
- `docs/agent-system/WAYPOINT-2026-08-26_EA-V2-PUBLIC.md` — Waypoint
- `docs/closeout/2026-08-26_EA-V2-PUBLIC_CLOSEOUT.md` — Closeout

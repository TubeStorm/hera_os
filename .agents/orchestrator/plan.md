# Orchestration Plan: Minimal Early-Access Funnel

## Objective
Implement a minimal, visually restrained early-access funnel for HERA OS on `portfolio-week1` branch, satisfying all requirements R1-R6, complete automated & functional verification, screenshot capture, operating docs updates, and durable closeout.

## Phases

### Phase 0: Survey Phase (Parallel Exploration)
- **Explorer 1 (Codebase & Component Architecture)**: Inspect `src/components/Nav.astro`, `src/data/site.ts`, `src/pages/index.astro`, `src/components/Footer.astro` to document exact line context, DOM structure, component hierarchy, and footer agent animation mechanics.
- **Explorer 2 (Visual Language & Design Tokens)**: Inspect `docs/DESIGN.md`, `src/styles/global.css`, existing modals/drawers/tooltips/forms, typography scales, colors, spacing, and interaction patterns to ensure 100% adherence to design tokens and zero visual inflation.
- **Explorer 3 (Spec, Formspree API, Git State & Waypoint Drafter)**: Check git branch status on `portfolio-week1`, Formspree endpoint details (`https://formspree.io/f/mwlkevkp`), header/body payload format, error handling requirements, privacy/anti-credential constraints, and draft the waypoint following `docs/agent-system/WAYPOINT-TEMPLATE.md`.

### Phase 1: Waypoint Publication & Project Decomposition
- Synthesize survey findings.
- Write `PROJECT.md` with Feature Inventory (R1-R6), Architecture, Milestones, Interface Contracts, and Code Layout.
- Publish `docs/agent-system/WAYPOINT-2026-08-26_EARLY-ACCESS-FUNNEL.md`.

### Phase 2: Dual Track Execution
- **Track 1: Implementation Milestones**
  - M1: Early-Access Surface Component (`EarlyAccessPanel.astro` / client logic, Formspree AJAX adapter, states, focus trap, esc key, tooltip).
  - M2: Three Entry Points (Nav item in `Nav.astro` / `site.ts`, Homepage inline single line in `index.astro`, Persistent launcher widget).
  - M3: Footer Success Animation integration in `Footer.astro` (session-based extra pixel agent, preserving existing agents and Iris).
- **Track 2: E2E Testing Track**
  - Design test infrastructure and 4-tier opaque-box test suite (`TEST_INFRA.md`).
  - Publish `TEST_READY.md`.

### Phase 3: Final Milestone, Verification & Forensic Audit
- Verify 100% pass on Tiers 1-4 tests and build (`npm run build`).
- Tier 5 Adversarial Coverage Hardening with Challenger.
- Functional verification: local dev server testing, keyboard nav, error handling, localStorage persistence.
- Playwright screenshot capture for all 6 required states:
  1. Nav with `Join early access`
  2. Panel open state (desktop)
  3. Panel open state (narrow viewport ≤390px)
  4. Success state copy visible
  5. Launcher in `You're on the list ✓` state
  6. Footer with new agent present
- Forensic Integrity Audit (`teamwork_preview_auditor`) for clean authentic implementation.

### Phase 4: Closeout & Delivery
- Update `docs/agent-system/CURRENT-SPRINT.md` to `🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW`.
- Write durable closeout in `docs/closeout/2026-08-26_HERA-EARLY-ACCESS-FUNNEL_CLOSEOUT.md`.
- Commit changes on `portfolio-week1`.
- Report victory to user.

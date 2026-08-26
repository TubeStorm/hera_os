# ⛳ WAYPOINT — HERA Early Access Public Release (EA-V2-PUBLIC)

**Date:** 2026-08-26  
**Status:** In Progress — Pre-Implementation Check-In  

---

## What I am doing now

I am preparing the public release of the enhanced HERA Early Access signup funnel on the `main` branch. This release ports the Early Access surface to the live site with four key enhancements:
1. A discovery-source dropdown (`How did you find HERA?`) with conditional free-text input for "Other".
2. A deterministic, privacy-preserving HERA alias generator that assigns each signup a unique callsign (e.g., `Moss-47`, `Nova_18`).
3. An inline pixel agent preview in the success state that renders the visitor's amber agent sprite.
4. Native canvas-rendered name labels in the animated footer (`Iris` in gold accent and the visitor's alias in subtle white).

Crucially, this work is isolated on a dedicated release branch (`early-access-public`) branched directly from `main`, guaranteeing that in-progress Ubisoft case studies and unapproved About page revisions from `portfolio-week1` will **never** reach the public live site.

---

## Why it matters — what you gain

- **High-Converting Visitor Engagement:** Prospective users, design leaders, and collaborators can sign up for early access directly from the live public portfolio with zero friction across 3 entry points (header nav, homepage hero line, persistent bottom-right launcher).
- **Attribution Data:** You will receive clean discovery-channel data (`LinkedIn`, `Reddit`, `X / Twitter`, `GitHub`, `Search`, `Friend`, `Article`, or `Other`) in your Formspree inbox to see where your traffic originates.
- **Memorable HERA Lore & Delight:** Each visitor receives an immediate personal identity and pixel agent companion that hangs out with Iris in the footer canvas, reinforcing HERA's narrative worldbuilding.
- **Zero Risk of Confidentiality Breaches:** Strict Git isolation preserves all NDA protections and sanitized public assets.

---

## How you will see it working

When this release is deployed to `https://TubeStorm.github.io/hera_os/`:
- You will see `Join early access` in the top navigation bar and an `Early access ✦` launcher at the bottom-right of every page.
- Clicking any trigger opens a floating panel (`Want in?`).
- The form includes the optional discovery dropdown. Selecting "Other" smoothly reveals the "Where did you find HERA?" text box.
- Submitting the form displays `"You're in."`, your assigned HERA alias, and an amber pixel wanderer sprite drawn inline on canvas.
- When the panel closes, your amber agent companion walks alongside Iris in the footer, with `Iris` labeled in gold accent text and your alias labeled in subtle white above the sprite.
- Formspree receives all 8 structured fields cleanly (`email`, `name`, `use_case`, `early_tester`, `how_heard`, `how_heard_other`, `hera_alias`, `_source`).

---

## Technical Specifications & Architecture Decisions

### 1. Git Steps, Isolation & Blocklist Plan
- **Branching:** Create `early-access-public` branched directly from `main` (`git checkout -b early-access-public main`).
- **Strict Allowlist:** Only 5 source files and 3 release documentation files will be committed:
  - `src/components/EarlyAccessSurface.astro` (Enhanced EA component)
  - `src/components/Nav.astro` (EA nav trigger button)
  - `src/layouts/BaseLayout.astro` (Mounts EarlyAccessSurface)
  - `src/pages/index.astro` (Hero inline CTA line)
  - `src/components/Footer.astro` (Canvas-drawn labels for Iris and visitor agent)
  - `docs/agent-system/WAYPOINT-2026-08-26_EA-V2-PUBLIC.md` (This waypoint)
  - `docs/agent-system/CURRENT-SPRINT.md` (Sprint record)
  - `docs/closeout/2026-08-26_EA-V2-PUBLIC_CLOSEOUT.md` (Closeout report)
- **Strict Blocklist (Ubisoft / Dev Exclusion Confirmation):**
  - `src/pages/work/enterprise-tools.astro` (Retains sanitized NDA-safe holding page on `main`)
  - `src/pages/work/index.astro` (Retains homepage redirect on `main`)
  - `src/data/site.ts` (Retains sanitized nav links on `main`)
  - `src/pages/about.astro` (Retains approved public title and cards on `main`)
  - `public/resume/Favour-Diokpo-Resume.pdf` (Retains 50KB sanitized PDF on `main`)
  - All internal `.agents/` scratchpads and experimental tests are excluded from the public commit.
- **Merge & Deployment:** Fast-forward merge `early-access-public` into `main` (`git merge --ff-only early-access-public`) and push to `origin/main` to trigger GitHub Actions Pages deployment.

### 2. Deterministic HERA Alias System
- **Word List (64 curated botanical, celestial, mineral, and signal nouns):**
  `Aster`, `Atlas`, `Aura`, `Basalt`, `Beam`, `Birch`, `Bloom`, `Bolt`, `Breeze`, `Cedar`, `Cinder`, `Cirrus`, `Cliff`, `Clove`, `Crest`, `Drift`, `Dune`, `Echo`, `Ember`, `Fern`, `Finch`, `Flint`, `Flora`, `Frost`, `Gale`, `Glint`, `Grove`, `Halo`, `Haven`, `Hazel`, `Jade`, `Kite`, `Lark`, `Lichen`, `Loom`, `Lotus`, `Lumen`, `Lunar`, `Lynx`, `Meadow`, `Mica`, `Mist`, `Moss`, `Nebula`, `Nexus`, `Nova`, `Onyx`, `Orbit`, `Orion`, `Peak`, `Pine`, `Pip`, `Prism`, `Pulse`, `Quartz`, `Quill`, `Reed`, `Ridge`, `Rift`, `Rune`, `Sage`, `Silk`, `Slate`, `Solar` (Excludes `Iris` to avoid naming collisions with the protagonist).
- **Separators:** `['-']`, `['_']`, `['+']` (3 options).
- **Numeric Range:** `00` through `99` (100 options).
- **Exact Namespace Size:** $64 \times 3 \times 100 = 19,200$ unique aliases.
- **Hash Function:** 32-bit FNV-1a non-cryptographic hash operating over normalized (trimmed, lowercased) email strings. It is deterministic, uniform, lightning-fast in browser JS, and mathematically non-invertible.
- **Persistence:** Stored in `localStorage` key `hera_ea_alias` and `sessionStorage` key `hera_ea_alias`.

### 3. Success State Pixel Agent Preview
- Replaces `"Go catch Iris."` with:
  1. `"You're in."` title.
  2. Assigned HERA alias in monospace accent text.
  3. Inline `<canvas>` ($24\text{px} \times 30\text{px}$) rendering the 8×10 amber wanderer sprite (`#d97706` body, `#1e293b` hair, `#d9b99b` skin) at 3x pixel scale.
  4. Location guidance: `"You'll find your agent hanging out with Iris at the bottom of the page."`

### 4. Footer Canvas Label Rendering
- Rendered natively on the `<canvas id="agent-walk">` using `ctx.fillText` (zero overlaid HTML DOM nodes).
- **Iris Label:** Centered 4px above Iris's head (`X = a.x + 12`, `Y = groundY - 34 + bob`). Font: `bold 9px var(--font-sans)`, Color: `var(--accent)` (gold/accent).
- **Visitor Agent Label:** Centered 4px above the visitor sprite's head. Font: `8px var(--font-sans)`, Color: `var(--muted)` or subtle light tone.
- **Background Agents:** Unlabeled to preserve focus on Iris and the visitor.
- **Extensible Architecture:** Agent data model includes optional `label` and `labelColor` properties for future server-driven multi-agent additions.

---

## Who is doing what

| Role | Responsibility |
|---|---|
| Project Orchestrator | Directing phase execution, branch gating, audit verification, closeout |
| Worker (Implementer) | Branching `early-access-public`, implementing component enhancements (R1–R8) |
| Reviewer (QA & Code Review) | Inspecting code quality, accessibility, design tokens, and Git boundary safety |
| Challenger (Verification) | Running automated build checks, security grep scans, and Playwright screenshot captures |
| Forensic Auditor | Verifying zero hardcoded shortcuts, authentic logic, and strict Git isolation |

---

## What could still go wrong

1. **Git Merge Conflict on Branch Creation:** Switching branches while files are modified in the working tree. *(Mitigated by carefully creating `early-access-public` from `main` and staging only allowlisted files).*
2. **Formspree Endpoint Rate Limiting:** Live verification requests hitting rate limits. *(Mitigated by sending a single clean test payload during live verification).*

---

## What happens next without you

1. The Worker will create branch `early-access-public` from `main`, port the allowlisted files, and implement all enhancements.
2. The Reviewer and Challenger will run `npm run build`, execute security greps on `dist/`, and capture Playwright screenshot evidence across viewports.
3. The Forensic Auditor will audit the changes for integrity and Git isolation compliance.
4. Once gated and approved, `early-access-public` will be merged into `main` and pushed to `origin/main`.
5. Live deployment and a live Formspree test will be validated.
6. The Closeout report will be published and presented to you.

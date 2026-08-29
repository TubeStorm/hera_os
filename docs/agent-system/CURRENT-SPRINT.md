# CURRENT-SPRINT.md — Live Sprint State

> **Living document. Human master map.** Every coordinator that materially changes sprint truth must update this file.
> Do not record aspirational states as complete. Do not omit blockers.
> Do not dump implementation detail here — this is a human-readable map.
>
> **Status vocabulary:**
> ⬜ NOT STARTED | 🟡 IN PROGRESS | 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR | ✅ FAVOUR ACCEPTED / CLOSED | ❌ FAILED / REQUIRES REPAIR

---

## Current objective

**Week 1 — make the existing HERA/YC website usable as Favour's career portfolio**
without turning the sprint into months of portfolio preparation.

Scope is deliberately narrow: install the operating system, define the two new page architectures, build and verify those pages, then publish only after Favour's approval.

---

## Sprint sequence

| # | Step | Status |
|---|---|---|
| 0 | **Public release split** — hide Ubisoft work, new resume, deploy to main | ✅ CLOSED 2026-08-19 |
| 0b | HERA Early Access Public Release (EA-V2-PUBLIC) | 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW |
| 0c | **HERA homepage revamp — Slice 1** (opening failure sequence + first HERA reveal; see `docs/preflights/hera website revamp/`) | 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW |
| 1 | Install and prove persistent agent operating system | ✅ FAVOUR ACCEPTED / CLOSED |
| 2 | Audit portfolio-relevant repository and content truth | ✅ FAVOUR ACCEPTED / CLOSED |
| 3 | Define About page architecture | ✅ FAVOUR ACCEPTED / CLOSED |
| 4 | Define Ubisoft Work architecture | ✅ FAVOUR ACCEPTED / CLOSED |
| 5 | Activate Navigation & Reconnect Routes (Slice 1) | ✅ FAVOUR ACCEPTED / CLOSED |
| 6 | Build About page (Slice 2) | 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW |
| 6b | About Section 01 Slide 1 visual rework and carousel interaction polish | 🟡 BUILT — WAITING FOR FAVOUR VISUAL REVIEW |
| 6c | About Section 01 Slide 2 context-story and design-workflow repair | 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW |
| 6d | About Section 01 Slide 5 visual implementation and review repair | 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW |
| 7 | Polish Ubisoft Work page (Slice 3) | ⬜ NOT STARTED — blocked by Slice 2 Favour review |
| 8 | Verify all pages & build output (Slice 4) | ⬜ NOT STARTED |
| 9 | Favour review, merge to main and publish (Slice 5) | ⬜ NOT STARTED |

---

## Current active work

**HERA homepage revamp — Slice 1: opening failure sequence** (updated 2026-08-28) — 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW.

The homepage now opens with an animated sequence: an AI finishes fast, `.md` files pile up, panicked human thoughts surface over the clutter, it hits a visual breaking point, then clears decisively into the real HERA logo and a cycling "You lead..." statement landing on "You lead. HERA keeps up." Nav brand also fixed to show the real HERA logo + "HERA OS" instead of Favour's name. Built, independently verified (verifier + live tester), two confirmed mobile defects repaired and re-verified. One item stayed genuinely unverified in-browser this session (`prefers-reduced-motion` — no available tool could emulate it; code implements it correctly using an already-trusted pattern).

Closeout: `docs/closeout/2026-08-28_SLICE-1-OPENING-FAILURE-SEQUENCE_CLOSEOUT.md`

**HERA Early Access Public Release (EA-V2-PUBLIC)** (updated 2026-08-26) — 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW.

The enhanced HERA Early Access signup funnel has been released to `main` and verified live on GitHub Pages ([https://TubeStorm.github.io/hera_os/](https://TubeStorm.github.io/hera_os/)). Features include discovery dropdown, deterministic HERA alias generator, inline pixel agent preview on confirmation, and labeled footer agents (`Iris` in gold and visitor alias in subtle white). All changes maintain 100% isolation from WIP Ubisoft and About page materials. **Note (found 2026-08-28):** this funnel exists on `main` but not yet on `portfolio-week1` — the two branches haven't converged, so `portfolio-week1` currently has no Early Access funnel at all. Worth a decision from Favour on when/whether to bring it over.

Closeout: `docs/closeout/2026-08-26_EA-V2-PUBLIC_CLOSEOUT.md`

---

## Most recent closed work

**About Section 01 animation foundation** — 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW

The scroll-driven animated component (four scenes: Burden, Ibiza, Trust, Transfer) was integrated into the About page exactly as specified in the handoff. The static Section 01 card is replaced. Normal scrolling is preserved. An independent verifier confirmed 13/13 acceptance criteria from source inspection. Build passes.

Closeout: `docs/closeout/2026-08-07_SECTION-01-ANIMATION-FOUNDATION_CLOSEOUT.md`

**About Section 01 — Slide 1 visual rework** — built per preflight spec. Slide 1 now shows:
- Correct 42/58 left-right layout (copy left, canvas right), side-by-side on desktop, stacking on mobile
- Left copy: "THE HERA STORY" eyebrow, bold paragraph (~22px), body text (~16px). Exact verbatim copy from spec.
- Right canvas: black (#0c0c0d), no border, no caption, no internal header. Lucide Brain SVG with slow pulse + warm stress glow. 6 floating thought fragments arranged around the brain.
- All other slides (2–4) and carousel mechanics untouched.

**Carousel interaction polish (2026-08-09):** The first next arrow now sits beside the animation, has no border, and nudges right. The animation canvas is exact black. All four progress marks are clickable with hover/focus feedback, and the closing statement animates in only on slide 4. The real desktop route and a 390px viewport were checked; the build passes. Closeout: `docs/closeout/2026-08-09_ABOUT-CAROUSEL-INTERACTION-POLISH_CLOSEOUT.md`.

---

## Immediate next step

**Favour reviews the new HERA homepage opening sequence.**

Dev server is ready. Open: **http://localhost:4321/hera_os/** and watch the sequence load-to-landing, then scroll past it into the existing demo section, then refresh and watch it again.

See `docs/closeout/2026-08-28_SLICE-1-OPENING-FAILURE-SEQUENCE_CLOSEOUT.md` for the exact questions to judge (pacing, the adaptive-theme vs. always-black canvas call, whether "HERA OS" reads right as the homepage brand).

Separately, whenever convenient: **Favour reviews Slide 1 on the About page.**

Check:
1. The parent "How do you find the real problem?" heading is visually dominant
2. The slide copy hierarchy looks right (small kicker, bold paragraph, body text — no headings inside the slide)
3. The black canvas: brain with glow, 6 floating thought chips
4. Nothing overlaps, no borders visible on the canvas
5. Click the → arrow to confirm slides 2–4 still work

Once Slide 1 is approved we build Slides 2–5 using the same shell.

---

## Blockers / decisions required from Favour

**1. HERA homepage opening sequence review** — gates Slice 2 of the homepage revamp (do not start it until this is reviewed, per the slice's own instruction).

**2. About page visual review** — Required before Slice 3 begins.
See `docs/closeout/2026-08-07_SLICE-2-ABOUT-PAGE_CLOSEOUT.md` for what to check and what to tell us.

**3. Ubisoft Work (Slice 3)** — No additional decisions needed from Favour before build begins, but the Slice 2 review is the gate.

**4. Early Access branch convergence** — `main` has the shipped Early Access funnel; `portfolio-week1` doesn't yet. When/whether to bring them together is Favour's call.

---

## Technical record

**Working branch:** `portfolio-week1`
**Repository:** `D:\Documents\favour-ai-product-portfolio`
**Last meaningful commits:**
- Slice 1 (nav): committed 2026-08-06
- Slice 2 (About page): committed 2026-08-06 (hash `374017c`)
- Workflow repair (this update): 2026-08-07

*Last updated: 2026-08-28 — HERA homepage revamp Slice 1 (opening failure sequence) built, independently verified, two mobile defects repaired and re-verified; waiting for Favour review. Also fixed a stale unresolved merge-conflict in this file's own sprint table (see BUGS.md BUG-001).*

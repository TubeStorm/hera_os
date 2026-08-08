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
| 1 | Install and prove persistent agent operating system | ✅ FAVOUR ACCEPTED / CLOSED |
| 2 | Audit portfolio-relevant repository and content truth | ✅ FAVOUR ACCEPTED / CLOSED |
| 3 | Define About page architecture | ✅ FAVOUR ACCEPTED / CLOSED |
| 4 | Define Ubisoft Work architecture | ✅ FAVOUR ACCEPTED / CLOSED |
| 5 | Activate Navigation & Reconnect Routes (Slice 1) | ✅ FAVOUR ACCEPTED / CLOSED |
| 6 | Build About page (Slice 2) | 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW |
| 6b | About Section 01 Slide 1 visual rework | 🟡 BUILT — WAITING FOR FAVOUR VISUAL REVIEW |
| 7 | Polish Ubisoft Work page (Slice 3) | ⬜ NOT STARTED — blocked by Slice 2 Favour review |
| 8 | Verify all pages & build output (Slice 4) | ⬜ NOT STARTED |
| 9 | Favour review, merge to main and publish (Slice 5) | ⬜ NOT STARTED |

---

## Current active work

**About Section 01 — Slide 1 visual rework** (2026-08-07) — 🟡 BUILT — WAITING FOR FAVOUR VISUAL REVIEW.

Dev server is running at **http://localhost:4323/hera_os/about/** (port may vary — check task log if unavailable). Scroll to Section 01.

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

---

## Immediate next step

**Favour reviews Slide 1 on the About page.**

Dev server is ready. Open: **http://localhost:4323/hera_os/about/** and scroll to Section 01.

Check:
1. The parent "How do you find the real problem?" heading is visually dominant
2. The slide copy hierarchy looks right (small kicker, bold paragraph, body text — no headings inside the slide)
3. The black canvas: brain with glow, 6 floating thought chips
4. Nothing overlaps, no borders visible on the canvas
5. Click the → arrow to confirm slides 2–4 still work

Tell us what you see. Once Slide 1 is approved we build Slides 2–5 using the same shell.

---

## Blockers / decisions required from Favour

**1. About page visual review** — Required before Slice 3 begins.
See `docs/closeout/2026-08-07_SLICE-2-ABOUT-PAGE_CLOSEOUT.md` for what to check and what to tell us.

**2. Ubisoft Work (Slice 3)** — No additional decisions needed from Favour before build begins, but the Slice 2 review is the gate.

---

## Technical record

**Working branch:** `portfolio-week1`
**Repository:** `D:\Documents\favour-ai-product-portfolio`
**Last meaningful commits:**
- Slice 1 (nav): committed 2026-08-06
- Slice 2 (About page): committed 2026-08-06 (hash `374017c`)
- Workflow repair (this update): 2026-08-07

*Last updated: 2026-08-07 — workflow repair. Slice 2 status corrected from "COMPLETE" to "BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW". New workflow rules installed in OPERATING-CONTRACT.md.*

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
| 0c | **HERA homepage revamp — Slice 1** (opening cinematic + first HERA reveal; see `docs/preflights/hera website revamp/`) | 🟡 RE-AUTHORED + VERIFIED — WAITING FOR FAVOUR REVIEW (Fix 2, 2026-08-29) |
| 1 | Install and prove persistent agent operating system | ✅ FAVOUR ACCEPTED / CLOSED |
| 2 | Audit portfolio-relevant repository and content truth | ✅ FAVOUR ACCEPTED / CLOSED |
| 3 | Define About page architecture | ✅ FAVOUR ACCEPTED / CLOSED |
| 4 | Define Ubisoft Work architecture | ✅ FAVOUR ACCEPTED / CLOSED |
| 5 | Activate Navigation & Reconnect Routes (Slice 1) | ✅ FAVOUR ACCEPTED / CLOSED |
| 6 | Build About page (Slice 2) | 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW |
| 6b | About Section 01 Slide 1 visual rework and carousel interaction polish | 🟡 BUILT — WAITING FOR FAVOUR VISUAL REVIEW |
| 6c | About Section 01 Slide 2 context-story and design-workflow repair | 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW |
| 6d | About Section 01 Slide 5 visual implementation and review repair | 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW |
| 7 | Polish Ubisoft Work page (Slice 3) / **Gallery Foundation** | 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW |
| 8 | Verify all pages & build output (Slice 4) | ⬜ NOT STARTED |
| 9 | Favour review, merge to main and publish (Slice 5) | ⬜ NOT STARTED |

---

## Current active work

**Ubisoft Work — Gallery Foundation (Slice 7)** (2026-09-02) — 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW.

The old `enterprise-tools.astro` grouped page (three workstreams, one massive dump) has been killed and replaced with a clean editorial gallery at `/work/ubisoft/`. Three projects now have their own routes: RPM (`/work/ubisoft/rpm/`), Work Arrangement (`/work/ubisoft/work-arrangement/`), Famous (`/work/ubisoft/famous/`). Capacity Governance was retired as a top-level gallery item (it belongs inside the RPM case study). Each detail page is a placeholder shell — no fabricated case study content. The old `/work/enterprise-tools/` URL redirects cleanly to the gallery. Nav, About page, homepage, and all inbound links updated. Browser-verified at desktop and 390px mobile.

Closeout: `docs/closeout/2026-09-02_SLICE-7-UBISOFT-GALLERY-FOUNDATION_CLOSEOUT.md`

**HERA homepage revamp — Slice 1 FIX 2: opening scroll story re-authored** (updated 2026-08-29) — 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR VISUAL REVIEW.

Favour reviewed the scroll-controlled rebuild and sent a second fix document. The interaction concept was right; the composition and the pacing were not. Five things were wrong: the visitor landed on near-blank black with no idea that scrolling was the interaction; the opening still carried a fake grey chat window with a composer, Send button and cursor animation that added weight without meaning; the `.md` curtain was sparse with big holes of empty sky instead of an overwhelming full-width mass; important statements could be skipped by one ordinary wheel gesture; and the HERA reveal stacked the logo above the word and let the final line jump to a different position.

The re-author fixes all of it. The page now **arrives inside the story** — request already sent, agent already thinking, a quiet "Scroll down" cue on screen. The chat chrome is deleted outright and the conversation sits on the black page at proper reading size. The curtain descends from above the top edge as a continuous full-width mass with a ragged bottom, and exits once it has taken about a third of the screen. Mid-build Favour replaced the panic beat: instead of one thought bubble swapping for the next, **eight message cards now pile up like physical paper**, earlier cards staying visible behind the new front card — accumulating cleanup burden, not a carousel. Panic cards, both cost statements, all five promises and the closing line now share one measured type size, and the promises and the final line occupy one pixel-identical slot beneath a fixed `[logo] HERA` row.

Closeout: `docs/closeout/2026-08-29_SLICE-1-FIX-2_CLOSEOUT.md`

---

## Immediate next step

**Favour reviews the Ubisoft Work gallery at `http://localhost:4323/hera_os/work/ubisoft/`** (start dev server with `npm run dev` from the repo — it opens at port 4321 or next available).

Check:
1. The gallery feels like seeing three pieces in an exhibition, not a case-study grid
2. Each project card has the right title, problem sentence, skill tags, and CTA
3. Click each "Read case study →" to confirm it lands on its own page (not the old grouped dump)
4. Confirm mobile at 390px looks right (single-column)
5. Confirm the nav "Ubisoft Work" pill is present and correct

Once gallery foundation is approved: **resend the RPM resources ZIP and Numa evidence ZIP**, then we begin RPM as its own design project — story architecture first, image shopping list second, then implementation.

Separately: **Favour reviews the re-authored homepage opening.**

---

## Blockers / decisions required from Favour

**1. HERA homepage opening sequence review** — gates Slice 2 of the homepage revamp (do not start it until this is reviewed, per the slice's own instruction). Re-authored per Fix 2 and independently verified 2026-08-29; **ready for review now**.

**2. About page visual review** — Required before Slice 3 begins.
See `docs/closeout/2026-08-07_SLICE-2-ABOUT-PAGE_CLOSEOUT.md` for what to check and what to tell us.

**3. Ubisoft Work Gallery Foundation (Slice 7)** — Built and verified 2026-09-02. Waiting for Favour's visual review before RPM case-study work begins. See `docs/closeout/2026-09-02_SLICE-7-UBISOFT-GALLERY-FOUNDATION_CLOSEOUT.md`.
- Dev server running at `http://localhost:4323/hera_os/work/ubisoft/` when started.
- RPM case study (`/work/ubisoft/rpm/`) is the next build slice — do NOT start until gallery foundation is reviewed.
- Favour should resend the RPM resources ZIP and Numa evidence ZIP before the RPM case study begins.

**4. Early Access branch convergence** — `main` has the shipped Early Access funnel; `portfolio-week1` doesn't yet. When/whether to bring them together is Favour's call.

---

## Technical record

**Working branch:** `portfolio-week1`
**Repository:** `D:\Documents\favour-ai-product-portfolio`
**Last meaningful commits:**
- Slice 1 (nav): committed 2026-08-06
- Slice 2 (About page): committed 2026-08-06 (hash `374017c`)
- Workflow repair (2026-08-07)
- Slice 7 (Ubisoft gallery foundation): committed 2026-09-02 (hash `a45edc0`)

*Last updated: 2026-09-02 — Slice 7 Ubisoft Work gallery foundation built and browser-verified. enterprise-tools grouped page killed; /work/ubisoft/ gallery + 3 individual case shells created; Famous replaces Capacity Governance as 3rd project; all inbound links updated; redirect in place. Waiting for Favour visual review.*

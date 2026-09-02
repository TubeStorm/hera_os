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
| 7b | RPM Story Architecture (Slice 8) | ✅ FAVOUR ACCEPTED / CLOSED |
| 7c | **RPM Chapter 01 Evidence + Editorial Pass (Slice 9)** | 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW |
| 8 | Verify all pages & build output (Slice 4) | ⬜ NOT STARTED |
| 9 | Favour review, merge to main and publish (Slice 5) | ⬜ NOT STARTED |

---

## Current active work

**Reconcile HERA and Restore Production Parity (Slice 11A)** (2026-09-02) — 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW.

The `main` branch containing the working HERA Early Access funnel was manually merged into `portfolio-week1`, resolving the git divergence without overwriting or losing any portfolio progress. The "Join early access" navigation link, inline trigger, and popup form now co-exist seamlessly with the newer portfolio structures (About page, Ubisoft Gallery, Re-authored hero). Automated visual verification confirmed the early-access popup opens correctly on local dev. Both branches have been pushed to GitHub.

Closeout: `docs/closeout/2026-09-02_SLICE-11A-RECONCILE-HERA_CLOSEOUT.md`


**RPM Chapter 01 Evidence + Editorial Pass (Slice 9)** (2026-09-02) — 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW.

The first chapter of the RPM case study (`/rpm/model/`) in the private `favour-private-work` repository has been fully implemented. High-value evidence (legacy Position/Request UAT screenshots, SQA Request-only screenshot, and the Miro propagation map) were sourced and added. Two conceptual diagrams (Mental Model and Engineering Reality) were custom-built using HTML/Tailwind rather than hunting for screenshots. The narrative pacing was tightened to avoid repetitive case-study-template rhythms, and deliberate placeholders were kept for the Hero, False Start, and final Request screens. Status claim confirmed as "Shipped" per the SQA proof and Numa documentation. Browser-verified at desktop and mobile, and a production build passes perfectly.

Closeout: `docs/closeout/2026-09-02_SLICE-9-RPM-CHAPTER-01_CLOSEOUT.md`

**Ubisoft Work — Gallery Foundation (Slice 7)** (2026-09-02) — 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW.

The old `enterprise-tools.astro` grouped page (three workstreams, one massive dump) has been killed and replaced with a clean editorial gallery at `/work/ubisoft/`. Three projects now have their own routes: RPM (`/work/ubisoft/rpm/`), Work Arrangement (`/work/ubisoft/work-arrangement/`), Famous (`/work/ubisoft/famous/`). Capacity Governance was retired as a top-level gallery item (it belongs inside the RPM case study). Each detail page is a placeholder shell — no fabricated case study content. The old `/work/enterprise-tools/` URL redirects cleanly to the gallery. Nav, About page, homepage, and all inbound links updated. Browser-verified at desktop and 390px mobile.

Closeout: `docs/closeout/2026-09-02_SLICE-7-UBISOFT-GALLERY-FOUNDATION_CLOSEOUT.md`

**HERA homepage revamp — Slice 1 FIX 2: opening scroll story re-authored** (updated 2026-08-29) — 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR VISUAL REVIEW.

Favour reviewed the scroll-controlled rebuild and sent a second fix document. The interaction concept was right; the composition and the pacing were not. Five things were wrong: the visitor landed on near-blank black with no idea that scrolling was the interaction; the opening still carried a fake grey chat window with a composer, Send button and cursor animation that added weight without meaning; the `.md` curtain was sparse with big holes of empty sky instead of an overwhelming full-width mass; important statements could be skipped by one ordinary wheel gesture; and the HERA reveal stacked the logo above the word and let the final line jump to a different position.

The re-author fixes all of it. The page now **arrives inside the story** — request already sent, agent already thinking, a quiet "Scroll down" cue on screen. The chat chrome is deleted outright and the conversation sits on the black page at proper reading size. The curtain descends from above the top edge as a continuous full-width mass with a ragged bottom, and exits once it has taken about a third of the screen. Mid-build Favour replaced the panic beat: instead of one thought bubble swapping for the next, **eight message cards now pile up like physical paper**, earlier cards staying visible behind the new front card — accumulating cleanup burden, not a carousel. Panic cards, both cost statements, all five promises and the closing line now share one measured type size, and the promises and the final line occupy one pixel-identical slot beneath a fixed `[logo] HERA` row.

Closeout: `docs/closeout/2026-08-29_SLICE-1-FIX-2_CLOSEOUT.md`

---

## Immediate next step

**Favour reviews RPM Chapter 01 at `http://localhost:4321/rpm/model/`** (start dev server with `npm run dev` from the `favour-private-work` repository).

Check:
1. Do I understand RPM before product jargon appears?
2. Do I understand the Position / Request problem visually?
3. Is the false start memorable?
4. Is Favour's product decision obvious?
5. Is the Engineering constraint understandable to a non-engineer?
6. Does the Miro evidence demonstrate scale without becoming noise?
7. Does the result feel credible without fake metrics?
8. Would I keep scrolling?

Once Chapter 01 visual language is locked in, we proceed to Chapter 02 and Chapter 03.

Separately: **Favour reviews the Ubisoft Work gallery at `http://localhost:4323/hera_os/work/ubisoft/`** (start dev server with `npm run dev` from the `favour-ai-product-portfolio` repo).

Separately: **Favour reviews the re-authored homepage opening.**

Separately: **Favour reviews the reconciled Early Access parity at `http://localhost:4327/hera_os/`** (start dev server with `npm run dev` from the `favour-ai-product-portfolio` repo). Check that the early access popup opens properly and portfolio navigation works.

---

## Blockers / decisions required from Favour

**1. HERA homepage opening sequence review** — gates Slice 2 of the homepage revamp (do not start it until this is reviewed, per the slice's own instruction). Re-authored per Fix 2 and independently verified 2026-08-29; **ready for review now**.

**2. About page visual review** — Required before Slice 3 begins.
See `docs/closeout/2026-08-07_SLICE-2-ABOUT-PAGE_CLOSEOUT.md` for what to check and what to tell us.

**3. Ubisoft Work Gallery Foundation (Slice 7)** — Built and verified 2026-09-02. Waiting for Favour's visual review before RPM case-study work begins. See `docs/closeout/2026-09-02_SLICE-7-UBISOFT-GALLERY-FOUNDATION_CLOSEOUT.md`.
- Dev server running at `http://localhost:4323/hera_os/work/ubisoft/` when started.
- RPM case study (`/work/ubisoft/rpm/`) is the next build slice — do NOT start until gallery foundation is reviewed.
- Favour should resend the RPM resources ZIP and Numa evidence ZIP before the RPM case study begins.

**4. Early Access branch convergence** — ✅ Resolved (2026-09-02). `main` has been merged into `portfolio-week1`, successfully reconciling the early-access funnel with the latest portfolio work. Both branches have been pushed. Waiting for Favour to review.

---

## Technical record

**Working branch:** `portfolio-week1`
**Repository:** `D:\Documents\favour-ai-product-portfolio`
**Last meaningful commits:**
- Slice 1 (nav): committed 2026-08-06
- Slice 2 (About page): committed 2026-08-06 (hash `374017c`)
- Workflow repair (2026-08-07)
- Slice 7 (Ubisoft gallery foundation): committed 2026-09-02 (hash `a45edc0`)

*Last updated: 2026-09-02 — Slice 9 RPM Chapter 01 case study built and browser-verified in `favour-private-work`. Evidence placed, conceptual diagrams built in-code, editorial pass complete. Waiting for Favour visual review on `http://localhost:4321/rpm/model/`.*

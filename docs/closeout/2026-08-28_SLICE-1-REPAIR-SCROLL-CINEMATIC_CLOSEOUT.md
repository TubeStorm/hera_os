# HERA homepage Slice 1 — REPAIR: scroll-controlled opening cinematic — Closeout

**Date:** 2026-08-28
**Branch:** `portfolio-week1`
**Favour Accepted:** Pending
**Status:** 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW

> **This is Slice 1 Revision / Repair.** It does not overwrite the original Slice 1 closeout
> (`docs/closeout/2026-08-28_SLICE-1-OPENING-FAILURE-SEQUENCE_CLOSEOUT.md`), which remains the record of the first attempt.
>
> Original Slice 1 was technically built and independently verified, but **rejected by Favour because the interaction concept did not match the intended experience.** That distinction matters and is worth keeping: this was not bad CSS. **We built the wrong product interaction, faithfully.**

---

## What you can do now

You can open the homepage and *scroll a short film*.

The visitor lands on what looks like an ordinary, empty AI chat — no headline, no eyebrow, no marketing copy, nothing explaining anything. Then everything that follows happens **because they scroll**, and only while they scroll. Stop, and the story stops exactly where it is. Scroll back up, and it rewinds along the same path.

What they scroll through:

1. A blank chat with an empty composer.
2. `Make a small change to the website` types itself into the input, one character at a time.
3. A cursor travels to the Send button, clicks it once, and disappears.
4. The message becomes a user bubble. `Thinking...`
5. The AI begins an absurdly long answer. The first two sentences are readable, undisturbed — long enough to think *"why is it still talking?"*
6. While it is **still** talking, `.md` files begin raining down in vertical Matrix-style columns.
7. The rain thickens until the answer is physically buried underneath it. The AI is still producing information while its own artifacts bury the information.
8. Everything clears to black.
9. Five thoughts, one at a time, each in a single centred bubble in exactly the same position: *Did I send the right file?* → *Is this source current?* → *Where did it save that?* → *Wait. What task are we on?* → *STOP MAKING NEW BRANCHES.*
10. Clear. Then, finally, the pain is named: **Your AI finished in 3 minutes.** / **You spent the next 20 digging through 18 new `.md` files and begging it to explain itself.**
11. Clear. Then: **Introducing** → the real HERA mark → **HERA** → the `You lead...` promises → and it rests, permanently, on **Stop managing your AI. Start giving it work.**

The reversal is the whole point: the visitor *experiences* the problem, and only then is told what they just watched.

---

## What changed

The homepage opening was **replaced, not polished.** The previous version played itself on a millisecond timer the moment the page loaded, and it announced its own thesis ("Your AI finished in 3 minutes.") before the visitor had experienced anything.

The new opening is a long pinned section where **scroll position is the play head.** Everything visible — the typing, the cursor, the answer revealing word by word, every falling column of files, which thought is on screen, the HERA promises — is calculated from how far down the page you are. There is no timer anywhere in the narrative. That is why stopping freezes it and scrolling back rewinds it: there is no separate "reverse animation," reversal falls out of the arithmetic for free.

Deleted outright, with no leftovers: the autoplay choreography, the `HERA OS` eyebrow, the opening pain headline, the static USER/AGENT card, the fake `😨 or 🫩` user reply, the artificially truncated response, the randomly-scattered rotating files, the bordered filename pills, the scattered simultaneously-accumulating thoughts, the automatically rotating HERA copy, and the `#` before HERA.

**Two decisions were locked this round:**

- **The cinematic canvas is always black**, regardless of the visitor's light/dark system setting. This is an authored product film, not a standard hero. The rest of the site still follows the visitor's theme. (This also closes the open question left over from the first attempt.)
- **The final line is "Stop managing your AI. Start giving it work."** Favour's own fix document contradicted itself here — it corrected the line in one place and kept the old `You lead. HERA keeps up.` in two others, including the acceptance test. Favour confirmed the corrected version on 2026-08-28. The `You lead...` statements still cycle before it.

---

## What was proven

All of the following was proven in a **real running browser** (Playwright Chromium 148, against the live dev server), not from source inspection or a single final screenshot.

**An independent verifier — which did not write the code — passed all 22 acceptance criteria.** The ones worth naming:

- **Nothing autoplays.** Held still at the mid-point for three seconds: the reveal count, the rain's transform, and the progress value were byte-identical before and after. There are zero `setTimeout`/`setInterval` calls in the component; the only three looping animations are the thinking dots, the caret blink, and the logo glow — all ambient, none narrative.
- **The rain is real Matrix rain.** Fourteen columns spanning the full width; transforms change continuously and monotonically with scroll; the bottom edges of the columns spread across 856px at peak, so it never forms a tidy rectangle.
- **The rain genuinely buries the answer.** Independently measured at ~72.7% of the answer's area covered at peak (see the honest note below). Human verdict on the rendered frame: most lines have a file across them and dense clusters block whole phrases.
- **One thought at a time, never moving.** Exactly one bubble in the DOM at every checkpoint, holding the same position across all five.
- **HERA never appears early**, and the promises do not advance while you are not scrolling.
- **The ending is correct and permanent:** *Introducing / HERA / Stop managing your AI. Start giving it work.*, no `#`.
- **No filename is truncated, boxed, bordered, shaded, or rotated** at 1440px, 375px, or 430px.
- **Reduced motion works and was actually tested** — all eight story states present as discrete steps, no falling motion, not a dumped end frame.
- **The canvas stays black even in a forced light theme**, with the rest of the page unaffected.
- **The scroll-lock regression did not return:** two full round trips into the video section and back out, using real wheel events.
- `npm run build` passes with all 8 routes. `npm run check` adds zero new errors against the known 122-error baseline.

**A live tester also watched the whole thing as a first-time visitor** and found one real defect (below), plus one false alarm that is discussed honestly further down.

---

## Defects found and fixed this cycle

| # | What was wrong | Status |
|---|---|---|
| 1 | The fake cursor stopped in empty space beside the Send button instead of on it — it used hardcoded viewport percentages instead of the button's real position | Fixed: the travel target is now measured from the button's actual bounding box and re-measured on resize. Cursor-centre-inside-button confirmed at 1440px, 375px and 430px |
| 2 | Filenames in the rain truncated with an ellipsis (`CURRENT-SPRINT...`, `handoff-latest-RE...`) — a repeat of BUG-003 | Fixed: clipping removed entirely, names wrap instead. No ellipsis at any width |
| 3 | The rain's "peak" was not dense enough — the AI's first paragraph was fully readable through it | Fixed: 12→14 full-width columns, more files per column, tighter pitch. **Root cause was subtler than density:** every column's travel was pinned to the same scene-end boundary, so a column that started later was forced to finish at the same instant and raced through instead of lingering. Decoupling per-column travel from the scene boundary is what made the peak real and sustained |
| 4 | **BUG-006** — at 375px the fully-typed sentence collided with the Send button | Fixed: flexbox `min-width:auto` trap on the input, plus a sub-400px type-scale block. 82px of clear space at 375px, 430px untouched |

**BUG-004** (the old clutter→HERA crossfade) is closed as superseded — the transition it described was deleted with the autoplay choreography, and the replacement scroll-controlled clear-to-HERA was visually proven (HERA's layer measures zero opacity until the pain statement has fully faded).

---

## The false blocker — recorded honestly

The live tester filed a **Blocker**: "universal scroll trap, visitors get permanently stuck ~1,900px short of the bottom of the page," reproduced across five viewports with up to 78,000px of wheel input.

**It is not a defect, and it was not caused by this repair.** The Chief reproduced and refuted it independently:

- That stop is the homepage's own **intentional `#video-section` gate**, which predates this slice. In that mode every wheel event is deliberately cancelled and the only forward exit is **clicking the visible ↓ button** — which the tester never clicked. Clicking it advances the page immediately.
- Past the gate, the loop section advances one stage per gesture behind a ~560ms throttle, so wheel ticks fired faster than that are swallowed and read as "stuck." Wheeling at human pace walked all eight stages and released to free scrolling, reaching the true bottom of the page.

The BUGS.md entry was **corrected rather than deleted** — the refutation is durable knowledge.

**But there is real signal inside the false alarm, and it is a question for Favour.** A reasonable proxy for a first-time visitor scrolled that section and concluded the page was broken. It never occurred to it to click. That is pre-existing behaviour outside this slice's scope, so nothing was changed — but it is worth a decision.

---

## What is not finished

- **Favour has not reviewed this.** It is built and independently verified. It is not accepted.
- **The rain's "feel" is an open taste question.** The live tester perceived it as "a dense static-feeling grid rather than continuously falling streams." The verifier independently proved the transforms move continuously with scroll, and the live tester was sampling with discrete position jumps rather than scrolling — which produces exactly that impression. Nothing was restructured on the strength of it, but Favour should judge it with her own hand on the wheel.
- **The peak-coverage number is not settled.** The builder measured 83.6%; the verifier's independent script measured 72.7% on the same frame. Different sampling methods, neither dishonest. Both numbers are recorded; the visual verdict is what carried the criterion.
- **The wheel-only visitor question** at the video gate, above.
- **Early Access remains absent from this branch** — deliberately. It lives on `main`. Nothing was merged, ported, or recreated. Branch convergence is still a separate future decision.

---

## What I need from Favour

**Open the homepage and scroll it slowly, all the way down, with your own hand on the wheel.** Then scroll back up.

Specifically judge:

1. **Pacing.** Does each beat get enough scroll distance? Can you comfortably read each panic thought more than once before it is replaced? Does one flick of the wheel ever skip a whole idea?
2. **The rain.** Does it read as *falling streams* or as a grid? Is the peak absurd enough — does it hit "why are there `.md` files everywhere?"
3. **The burial.** At the densest moment, is losing the AI's answer behind its own files as satisfying as it should be?
4. **The reveal.** Does *Introducing / HERA / Stop managing your AI. Start giving it work.* land the way you wanted after everything before it?
5. **The always-black canvas** — confirm you want it that way regardless of theme.
6. **The video-gate question:** should a visitor who only scrolls be required to click the ↓ arrow to continue past the demo video?

---

## What happens next and why

Favour's review gates Slice 2 (Iris), which has deliberately **not** been started. Once she accepts the opening, the same scroll-as-timeline model becomes the foundation the rest of the homepage revamp builds on.

---

## Retrospective

- **We built the wrong thing correctly, and the packet is where that gets caught.** The first attempt passed its own verification and still failed, because the packet specified the *artifact* rather than the *interaction law*. This repair's packet led with "scroll is the timeline, not the trigger" and stated the position formula outright. That single sentence removed nearly all the ambiguity that cost us the first build. **Future packets for interactive work should state the governing interaction law before the scene list.**
- **A capability was recorded as absent for three sessions without anyone trying it.** `prefers-reduced-motion` was reported unverifiable and "no Playwright installed" — but Playwright was there the whole time as the *Python* package, invisible to `package.json` and `node_modules` checks. One command settled it and turned a permanently-hedged acceptance criterion into a proven one. **Rule added: a capability is "unavailable" only after you have actually tried to use it.**
- **A Blocker was filed against working, pre-existing behaviour.** It cost a repair-cycle scare and would have shipped a false defect into the record if it had been taken at face value. **Rules added: exhaust visible affordances and drive input at human pace before filing "stuck"; the Chief must independently reproduce any Blocker before it stands; a refuted Blocker gets corrected, not deleted.**
- **Two agents measured the same frame and got 83.6% and 72.7%.** Neither stated its method well enough for the other to reconcile. **Rule added: a quantitative acceptance claim must carry its measurement method; when roles disagree, record both and let the visual verdict decide.**
- **Perceptual judgments need continuous input.** The "static-feeling rain" report came from an agent jumping between scroll positions. **Rule added: discrete jumps capture frames; only continuous wheel input may judge whether motion feels continuous.**
- **Resuming the builder instead of replacing it was the right call and is now law.** The builder held ~187k tokens of paid context across three rounds of corrections. Spawning a replacement for each addendum would have re-bought the same understanding three times.

### Workflow improvements made as a result (before this closeout was written)

| Change | Document |
|---|---|
| **§R — Delegation economics:** addendums resume the existing worker; context reuse as cost accounting; intentional model routing (silence is not a routing decision); prospective application | `OPERATING-CONTRACT.md` (new section), summarised in `AGENTS.md` law 4 |
| **Retrospectives must produce a workflow change before closeout**, and the closeout must state which document changed | `OPERATING-CONTRACT.md` §M |
| **Browser transport fallback is law** — 3-minute cap, Playwright first-class for scroll-driven work, proof standard unchanged when transport changes | `BROWSER-TESTING-PROTOCOL.md`, `OPERATING-CONTRACT.md` §F2, `AGENTS.md` |
| **Blockers must be independently reproduced by the Chief before they stand**; refuted Blockers are corrected, not deleted | `OPERATING-CONTRACT.md` §F |
| **Exhaust visible affordances and use human-pace input before filing "stuck"** | `BROWSER-TESTING-PROTOCOL.md` |
| **Quantitative claims must carry their measurement method**; record disagreements | `BROWSER-TESTING-PROTOCOL.md` |
| **Judge continuous motion with continuous input** | `BROWSER-TESTING-PROTOCOL.md` |
| **Verify a capability is absent before recording it absent** | `BROWSER-TESTING-PROTOCOL.md` |
| Playwright availability, reduced-motion emulation, and the transport rule recorded as verified environment facts | `CHEAT-SHEET.md` |

## Bugs & cheat sheet touched?

- `docs/agent-system/BUGS.md` — **BUG-005** added by the live tester and then **corrected to "Not a defect (invalid)"** with the full refutation; **BUG-006** added and fixed; **BUG-004** closed as superseded with visual proof of the replacement transition. Checked 2026-08-28.
- `docs/agent-system/CHEAT-SHEET.md` — updated 2026-08-28 with: Playwright/Chromium availability and reduced-motion emulation; the `scroll-behavior: smooth` test-methodology trap; Astro's per-component CSS scoping (a class defined in `index.astro` never reaches a component); the reduced-motion override-scoping bug; measuring real element rects instead of hardcoding viewport percentages for UI travel targets; decoupling a density effect's per-unit travel from a locked scene boundary; the flexbox `min-width:auto` trap; and both disputed peak-coverage figures with a note not to trust either as exact.

---

## Project records updated

- `docs/agent-system/CURRENT-SPRINT.md` — Slice 1 recorded as rejected-then-repaired; status 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW
- `docs/agent-system/OPERATING-CONTRACT.md` — new §R; amended §F, §F2, §H, §M
- `docs/agent-system/BROWSER-TESTING-PROTOCOL.md` — transport law + four new evidence rules
- `docs/agent-system/CHEAT-SHEET.md` — see above
- `docs/agent-system/BUGS.md` — see above
- `AGENTS.md` — laws 4 and the subagent section updated
- `docs/agent-system/WAYPOINT-2026-08-28_SLICE-1-REPAIR.md` — created
- `docs/agent-system/work-packets/closed/SLICE-1-REPAIR-SCROLL-CINEMATIC.md` — moved from `active/`
- `docs/preflights/hera website revamp/Slice 1 fix 1.md` — status block updated to DONE
- Original Slice 1 closeout — **left intact**, referenced, not overwritten

---

## Technical receipt

- **Branch:** `portfolio-week1` (never `main`; `origin/main` untouched at `df7e63c`, so nothing deployed)
- **Repair baseline:** `c8b6467`
- **Commit:** `cfab0a2` — *feat(hero): repair scroll cinematic in opening failure sequence*. **Note:** this commit was made and pushed to `origin/portfolio-week1` under Favour's git identity at 22:54 during the session; it was not made by the Chief or any subagent. It contains the component rewrite plus the workflow-doc and screenshot changes. Flagged for transparency, not as a problem — `main` is unaffected.
- **Files changed:** `src/components/OpeningFailureSequence.astro` (full rewrite, ~800 insertions / ~384 deletions). `src/pages/index.astro` **deliberately untouched** — the existing `#video-section` scroll-lock crossing-check is unmodified and re-verified working.
- **Build check:** `npm run build` — pass, 8/8 routes
- **Type check:** `npm run check` — 122 pre-existing baseline errors, unchanged, 0 new; 3 harmless `define:vars` warnings (known Astro type-checker limitation)
- **Verifier result:** PASS — 22/22 criteria
- **Defects found:** 4 (3 by the Chief from screenshot review, 1 by the live tester) + 1 false Blocker refuted
- **Repairs made:** all 4, by the original builder, resumed rather than replaced
- **Visual/browser check:** Performed — Playwright Chromium 148 against the dev server. ~28 builder checkpoints, 20+ independent verifier checkpoints, live-tester passes at 1920/1536/1440/1366/430/375px, both scroll directions, real wheel events, refresh-at-top and refresh-mid-story, forced light theme, and a `reduced_motion="reduce"` context. Screenshots in `docs/agent-system/screenshots/slice-1-repair/` (`/verify/` and `/live/` subfolders).
- **Mobile check:** Performed — 375px and 430px, including the BUG-006 repair
- **Model routing (per new §R3):** builder, verifier and live tester all deliberately routed to Sonnet rather than inheriting the Chief's model. The work was bounded by a complete specification; the expensive tier was not warranted.

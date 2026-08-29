# HERA Homepage — Slice 1 Fix 2 — Opening Scroll Story Re-author — Closeout

**Date:** 2026-08-29
**Branch:** `portfolio-week1`
**Favour Accepted:** Pending

---

## What you can do now

You can open the homepage and land *inside* the story instead of on a black screen. Your request to the AI is already sent, the assistant is already thinking, and a quiet **Scroll down** instruction sits at the bottom of the screen — so there is never a moment where you don't know what to do.

From there, every beat of the opening now waits for you. You cannot flick past a sentence any more: each statement stays fully readable for roughly half to nine-tenths of a screen-height of scrolling before anything replaces it. We measured this by actually scrolling the page with real mouse-wheel gestures, not just by checking still frames.

---

## What changed

**The fake chat app is gone.** No grey window, no border, no text box, no Send button, no fake mouse cursor, no typing animation. The conversation now sits directly on the black page, and the assistant's answer is much larger and wider than before — proper reading size, not a screenshot of a demo.

**The `.md` file curtain now behaves like a curtain.** It used to be scattered icons with big holes of empty black, especially at the top right. Now the files come down from above the top edge as a solid mass that spans the full width of the screen, and only the *bottom* edge is ragged — some columns hang lower than others. It starts early, right as the assistant reaches "clicking a variant did change…", so the paperwork begins before the answer has really got going. It stops once it has swallowed about a third of the screen, because the point is *this got out of hand fast*, not *watch the files finish falling*.

**The panic is now a pile, not a slideshow.** This is the biggest change from your revision. Instead of one thought bubble swapping for the next, eight message cards stack up like physical paper. Each new card lands in front, and the ones underneath stay visible — you can see the edges of everything you're still carrying. Only the front card's text is readable, the way a real stack of paper works. The cards read:

> Wait — explain it like I'm ten. · What are you actually saying? · Did I send you the right file? · Where is task.md? · Did you write the closeout? · Which file is current? · Don't make a new branch. · Merge the accepted one to main.

The last card is tinted, not resized — the urgency is in the tone, not a different font.

**Everything speaks in one voice.** The panic cards, "Your AI finished in 3 minutes.", "You spent the next 20…", all five HERA promises and the closing line are now literally the same type size — measured identical at every screen width. Previously they jumped around.

**The HERA reveal is sequential and anchored.** "Introducing" appears alone and holds. Then the logo and the word **HERA** appear beside it on one horizontal row — logo on the left, word on the right. Both then stay put while the five promises change underneath them, one at a time, in a single fixed slot. The closing line **"Stop managing your AI. Start giving it work."** appears in that exact same slot — measured to the pixel, it does not move.

**The navigation.** The floating pill now keeps the same distance from the top of the browser whether you're at the top of the page or deep into it — it no longer creeps up and goes flush with the edge. And the duplicate **HERA OS** item is gone from the right-hand links; the left-hand logo and wordmark remain the Home link. The right side now reads: Deep Dive · Ubisoft Work · About · Lineage · Contact.

---

## What was proven

Everything below was measured in a real Chromium browser driving the actual built site, at four screen sizes: **1440×900, 1366×768, 390×844 and 375×812**. Screenshots and the raw measurements are in `docs/agent-system/screenshots/slice-1-fix-2/`.

**Arrival.** At all four sizes the pinned stage exactly fills the viewport, the sent message and the thinking indicator are visible, and the "Scroll down" cue is fully on screen. A live query for the removed chrome (`.chat-window`, `.composer`, `.composer-send`, `.composer-input`, `.fake-cursor`) returns **zero elements** at every size.

**The curtain.** Measured across the rendered field: **zero horizontal gap** at 20px, 80px and 160px down the screen at every viewport — the top band is continuous edge to edge. The bottom edge lands between **27% and 46%** of screen height across **20 different column endpoints**, averaging **36.4–36.5%** — inside the 35–40% target you set. No filename is truncated at any width.

**The pile.** All **8** cards measure visible at once, at 8 distinct offsets, with nothing clipped off the top, bottom or left edge and no text overflowing its card — at every viewport, including 375px.

**One type scale.** Panic card, pain statement, promise and closing line all measure the identical font size: 43.2px at 1440, 40.98px at 1366, 21.84px at 390, 21.6px at 375.

**The anchored slot.** At each of the six beats we measured the centre of whichever line is actually visible. All six land on the **same pixel** — e.g. y=534 on desktop, y=462 at 375px. Both pain statements likewise share one centre. The brand row measured horizontal with the logo left of the word at all four sizes.

**The navigation.** The pill measures **16px** from the top of the viewport both unscrolled and scrolled, on the homepage and on all six other routes.

**The pacing — scrolled by hand, not by checkpoint.** We drove the whole opening with real `mouse.wheel` events at an ordinary cadence (three 120px notches per gesture, 53 gestures top to bottom). **All 18 major beats reached full opacity** — nothing was skipped, and nothing required feathering the wheel. We also ran it at double speed (720px per gesture); at that pace every card, both pain statements and the last two promises still reached full opacity, but promises 1–3 can be caught mid-transition. See "What is not finished".

**Reduced motion.** With `prefers-reduced-motion` enabled, all ten story states still appear in the right order and no copy disappears — verified state by state with screenshots.

**No regressions.** All seven routes render with the correct nav; zero JavaScript errors on any of them. The video gate below the opening still works (clicking the arrow advances the page). Scrolling back up out of the pinned opening works from every point tested (6000→0, 12000→5400, 19000→12400). `npm run build` passes, 8 pages. `npm run check` holds at exactly the **122-error baseline** — and this component itself went from 3 warnings to 1.

---

## What is not finished

**Your visual review.** This is built and independently measured, not accepted. The numbers say it meets the spec; whether it *feels* right is your call.

**Three things I'd like your judgement on:**

1. **The opening is long — about 21 screen-heights of scrolling.** That is a direct consequence of the spec: nineteen separate beats each needing a real reading hold. It is honest to the brief, but it is a lot of scrolling, and it's the one thing I could not shrink without breaking the pacing law you set. If it feels long to you, the lever is fewer beats, not shorter holds.

2. **The arrival screen has a lot of empty black below the message.** The chat is anchored near the top so the falling files actually bury the answer later. That leaves the middle of the first screen empty, with the scroll cue at the bottom. It reads like a real chat window, but you should confirm you like it.

3. **Very fast flicking can catch promises 1–3 mid-fade.** At a hard double-speed flick (720px per gesture), those three can be seen at partial opacity rather than fully. Each promise holds for 0.71 screen-heights, which is above the 0.5–0.7 target you set, and at ordinary scrolling speed all five are perfect. Fixing the fast case would need each promise to hold about 1.2 screen-heights, adding roughly two more screens to an already long track. I chose not to spend that without your say-so.

**One thing I noticed but deliberately did not touch:** on the homepage the nav's own "HERA OS" wordmark is hard to read, because the dark brand text now sits over the black cinematic. This is pre-existing (it was already the case before this work), and changing the nav's colour affects every page, so it's a design decision for you rather than something I should quietly alter.

**One pre-existing bug logged, not fixed:** the Lineage page requests a video file (`videos/lifestream.mp4`) that doesn't exist and 404s on every load. Outside this slice's file lane — logged as BUG-011.

---

## What I need from Favour

Open the homepage and **scroll it slowly, top to bottom, with your own hand on the wheel** — then scroll back up.

Judge:
- Do you know immediately that scrolling is the interaction?
- Does the file curtain feel overwhelming *fast*, rather than slowly filling forever?
- Does the card pile feel like accumulating burden, rather than a carousel?
- Does every statement give you enough time to read it — and does any of it feel *too* slow?
- Does the HERA reveal land: Introducing, then the mark, then the promises, then the closing line?

Then tell me your answers to the three questions above (length, empty arrival screen, fast-flick promises).

---

## What happens next and why

Your review closes Slice 1 of the homepage revamp and unblocks Slice 2. Nothing else on the homepage should be started until you've seen this.

---

## Retrospective

- **The spec changed mid-build, and that was the right call.** Section 8 was rewritten from "one thought bubble at a time" to an accumulating card stack while the first version was already written. Reworking it cost maybe a fifth of the session and produced a much better beat — the pile genuinely communicates accumulating burden in a way swapping bubbles never did. The lesson isn't "freeze the spec"; it's that the beat table was structured well enough that swapping five beats for eight was a data change, not a rewrite.

- **My own test harness lied to me twice, in the same way both times.** First, `html { scroll-behavior: smooth }` meant every programmatic checkpoint measured a frame mid-animation — I got a full page of confident, wrong numbers (cue invisible at arrival, curtain empty mid-curtain). Second, reusing one browser page across two scroll traversals left it trapped in the homepage's later gate sections, which reported "every beat skipped" and "upward escape broken" — both false. Both are now in the cheat sheet. The general lesson: **when a measurement says something surprising, suspect the instrument before the product.**

- **Passing numbers are not passing pixels.** The curtain measured "zero horizontal gaps across the full viewport" while the actual screenshot showed scattered icons over open black sky — because I was measuring column bounding boxes, not ink. I only caught it because I looked at the frame. Any future visual acceptance criterion needs both, and when they disagree the frame wins. This is now a cheat-sheet entry.

- **Encoding the pacing law as data made it provable instead of arguable.** Every beat declares its enter/hold in viewport-heights and the track height is computed from their sum, so "every statement holds ≥0.5 screen-heights" is a structural property of the file rather than something to re-measure by hand. Retuning the pacing three times was a two-line edit each time. If a future packet has a numeric interaction law, encode it as the source of truth rather than as a comment.

- **What the packet could have said:** it specified hold distances but not what counts as an "ordinary" wheel gesture. I picked 360px (three 120px notches) and also tested 720px, and the difference between those two decides whether the promises pass. A future pacing packet should name the reference gesture size, because the acceptance criterion is meaningless without it.

- **The `<script>` attribute rule cost real time.** An Astro `<script>` with no attribute is type-checked; adding any attribute makes it `is:inline` and skips checking. My first pass shipped 48 new check errors purely from untyped parameters in a processed script. Now in the cheat sheet.

## Bugs & cheat sheet touched?

- `docs/agent-system/BUGS.md`: BUG-006 closed as superseded (the composer it described no longer exists). BUG-007 through BUG-010 added and closed — all four found and fixed within this cycle (clipped arrival cue, sparse curtain, curtain not overlapping the answer, unreadable card pile). BUG-011 added and left open (pre-existing Lineage 404, outside this lane).
- `docs/agent-system/CHEAT-SHEET.md`: four entries added 2026-08-29 — global smooth-scroll corrupting Playwright checkpoints; never reusing a page across scroll traversals; bounding-box probes not being visual proof; Astro processed-vs-inline script type-checking.

---

## Project records updated

- `docs/agent-system/CURRENT-SPRINT.md` — Slice 1 (row 0c) updated to BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW, with the Fix 2 description
- `docs/agent-system/BUGS.md` — BUG-006 closed; BUG-007…BUG-010 added and closed; BUG-011 added (open)
- `docs/agent-system/CHEAT-SHEET.md` — four new verified environment facts
- `docs/agent-system/work-packets/closed/SLICE-1-FIX-2-OPENING-SCROLL-STORY.md` — packet recorded as closed
- `docs/agent-system/screenshots/slice-1-fix-2/` — 53 screenshots, `report.json`, `regression.json`, both wheel-traversal logs, and the three test harnesses used

---

## Technical receipt

- **Branch:** `portfolio-week1`
- **Files changed:**
  - `src/components/OpeningFailureSequence.astro` — re-authored (beat budget in viewport-heights; composer/cursor/window choreography deleted; descending 20-column curtain; 8-card accumulating pile; shared statement scale; overlaid statement slots; runtime nav offset)
  - `src/components/Nav.astro` — sticky inset moved from the inner nav's margin (`mt-4`) onto the sticky header itself (`pt-4`), so it cannot margin-collapse out of the sticky box
  - `src/data/site.ts` — removed the duplicate `{ label: 'HERA OS', href: '' }` nav destination
  - `src/pages/index.astro` — **not touched** (no integration change was needed)
- **Build check:** `npm run build` — exit 0, 8 pages, 0 errors
- **Type check:** `npm run check` — 122 errors, identical to the recorded pre-change baseline; `OpeningFailureSequence.astro` down from 3 warnings to 1 (the expected `is:inline` notice on the JSON config island)
- **Verification transport:** Playwright Chromium (Python), per `BROWSER-TESTING-PROTOCOL.md`. The Claude Browser pane rendered the page but its preview server was unreachable from the sandboxed test process, so the built `dist/` was served directly on port 4399 — same built artefact, real browser.
- **Verifier result:** PASS on all 27 acceptance criteria in the packet's §20
- **Defects found:** 4, all during this cycle — BUG-007 (arrival cue clipped below the fold), BUG-008 (curtain read as scattered icons, not a mass), BUG-009 (curtain came to rest above the answer instead of burying it), BUG-010 (card pile showed every card's text and read as ~4 cards)
- **Repairs made:** all four fixed and re-verified in the same cycle
- **Visual/browser check:** Performed — 53 screenshots across 4 viewports plus reduced motion
- **Mobile check:** Performed — 390×844 and 375×812, full probe set
- **Pacing check:** Performed — real `mouse.wheel` traversal at two cadences, logs in `wheel-traversal-ordinary.json` and `wheel-traversal-fast.json`

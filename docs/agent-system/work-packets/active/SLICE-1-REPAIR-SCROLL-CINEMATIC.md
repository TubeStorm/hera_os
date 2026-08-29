# WORK PACKET — Slice 1 REPAIR: scroll-controlled opening cinematic

> **STATUS:** 🟡 IN PROGRESS
> **Date opened:** 2026-08-28
> **Type:** Repair / revision of an already-built, agent-verified, **Favour-rejected** slice.
> **Source instruction:** `docs/preflights/hera website revamp/Slice 1 fix 1.md` (read it in full — it is the specification of record; this packet operationalises it and does not replace it)
> **Original closeout being superseded:** `docs/closeout/2026-08-28_SLICE-1-OPENING-FAILURE-SEQUENCE_CLOSEOUT.md`
> **Repair baseline commit:** `c8b6467` on `portfolio-week1`

---

## Why this exists

Original Slice 1 was technically built and independently verified, but **Favour rejected the interaction concept**. This was not a CSS defect — we built the wrong product interaction faithfully. The opening autoplayed on a millisecond timeline; Favour wants the entire story **scrubbed by scroll position**, and wants the visitor to *experience* the problem before being told what it was.

Do not overwrite the original closeout. This is a new revision record.

---

## The one-sentence visitor takeaway

> "I just watched an AI answer a two-word request with an essay while burying its own answer under a blizzard of `.md` files — and then someone finally named what I'd been feeling."

---

## Objective

Replace `src/components/OpeningFailureSequence.astro` with a **scroll-scrubbed, pinned cinematic**. Scroll progress is the only clock. Nothing advances while the visitor is still.

---

## Core interaction law (non-negotiable)

- **Scroll progress drives 100% of the story.** Including the `.md` rain.
- **No autoplay.** No `setTimeout` choreography. No millisecond `animation-delay` narrative timeline. No timer cycling the HERA statements.
- Long pinned/sticky section: a tall scroll track with a `position: sticky` stage that stays visually fixed while the story advances.
- Scroll position = a scrubber through a film. Stop scrolling → story stops. Scroll backward → story reverses.
- Every major beat gets **generous** scroll distance. A single normal wheel movement must not skip a whole idea.
- Desktop is the cinematic version. Mobile is a simpler adaptation inside the same experience — **do not compromise desktop to make mobile easier.**

### Required technical shape

```
<section id="opening-sequence">          ← tall track, height ≈ 900vh desktop
  <div class="opening-stage">            ← position: sticky; top: 0; height: 100svh
     …all scenes, absolutely positioned layers…
  </div>
</section>
```

- One `scroll`/`rAF` loop computes
  `p = clamp((window.scrollY - trackTop) / (trackHeight - viewportHeight), 0, 1)`
  and writes it once per frame (e.g. `stage.style.setProperty('--p', p)` plus any derived per-scene vars / `data-scene` attribute).
- Everything else reads from that. **Infinite decorative loops are still allowed** (e.g. the existing HERA logo glow pulse, a caret blink) — those are ambient, not narrative. Narrative motion must be scroll-bound.
- Use `requestAnimationFrame`-throttled scroll reads; do not do layout reads per wheel event.

---

## Approved scene map and scroll budget

`p` is normalised 0 → 1 across the whole track. These are the approved allocations — tune within ±0.02 if a beat reads badly, but do not restructure the order or compress the reading holds.

| p range | Scene | What happens |
|---|---|---|
| 0.00 – 0.06 | **1. Empty chat** | A plain AI-chat environment. Empty conversation area. Composer pinned at the bottom (text input + send button). **No eyebrow, no headline, no HERA, no marketing copy.** Nothing explanatory whatsoever. |
| 0.06 – 0.12 | **2a. Typing** | `Make a small change to the website` enters the input **character-by-character mapped to `p`** (scroll back = un-types). Caret visible. |
| 0.12 – 0.145 | **2b. Cursor to Send** | A visible mouse cursor travels to the Send button. |
| 0.145 – 0.155 | **2c. Click** | Cursor clicks Send **exactly once** (one press state), then the cursor disappears and does not return. |
| 0.155 – 0.18 | **2d. Bubble** | Input clears; the message becomes a normal **user speech bubble** in the conversation. |
| 0.18 – 0.21 | **3a. Thinking** | Small `Thinking...` indicator appears below the user bubble. |
| 0.21 – 0.30 | **3b. First two sentences** | The AI answer begins revealing. By ~0.28 the visitor can comfortably read roughly the first two sentences and think *"why is it talking this much?"* — **nothing else interferes in this window.** |
| 0.30 – 0.60 | **3c. Answer keeps going** | The rest of the long answer continues revealing progressively, word-by-word or clause-by-clause, mapped to `p`. **Never truncated, never masked.** |
| 0.33 – 0.60 | **4. `.md` rain** (overlaps 3c) | Matrix-style vertical `.md` file rain — see the dedicated section below. Starts with 1–2 streams at 0.33, ramps to full density by ~0.55. Files pass **over** the answer and progressively bury it. The AI is still talking while its own artifacts obscure it. |
| 0.60 – 0.65 | **5. Clear** | The chat and the rain fade away together. **HERA is not introduced yet.** Land on a clean black field. |
| 0.65 – 0.83 | **6. One thought at a time** | Five thoughts, each in **one centered user-style speech bubble at exactly the same position**. One at a time, never two on screen, never scattered. ~0.036 of `p` each: fade in → long readable hold → fade out → next one replaces it in place. |
| 0.83 – 0.93 | **7. The pain, named** | Centered, large. First `Your AI finished in 3 minutes.` then (~0.87) `You spent the next 20 digging through 18 new .md files and begging it to explain itself.` Then a real hold. This is the punchline — do not rush into HERA. |
| 0.93 – 0.95 | **8a. Clear** | Pain statement fades. Clean black field. |
| 0.95 – 1.00 | **8b. HERA reveal** | See the HERA reveal section below. |

### Scene 6 — the five thoughts (verbatim, in order)

1. `Did I send the right file?`
2. `Is this source current?`
3. `Where did it save that?`
4. `Wait. What task are we on?`
5. `STOP MAKING NEW BRANCHES.`

Tone gets progressively more frantic (the last one may be visually louder/urgent). A normal slow scroll must let someone read each one **more than once** before it is replaced. Reuse the established user-bubble geometry from the demo section below (`.user-bubble-mini` in `src/pages/index.astro`, lines ~426–435) rather than inventing a new bubble look.

### Scene 8 — HERA reveal (scroll-controlled, no timer)

Hierarchy:

- small: `Introducing`
- **largest typography on the screen:** `HERA` — with the authentic HERA logo already in the repo (`public/images/hera/logo/hera-logo-1254.webp` / `.png`). **No `#` before HERA.**
- medium, below it, the promise line, replaced one at a time by scroll travel — each needs enough scroll distance to actually read:
  1. `You lead. It remembers what you already said.`
  2. `You lead. It knows what happens next.`
  3. `You lead. It knows where everything went.`
  4. `You lead. It keeps the work together.`
  5. `You lead. It stops when it actually needs you.`

**FINAL RESTING LINE — confirmed by Favour 2026-08-28:**

> `Stop managing your AI. Start giving it work.`

This **supersedes** `You lead. HERA keeps up.` The source instruction doc contradicts itself here (it says "Not this, use this" at the promise list but then repeats the old line in its own "final state" paragraph and acceptance test). Favour resolved it in favour of `Stop managing your AI. Start giving it work.` — **do not "fix" this back.**

So the permanent end state the visitor is left reading is:

```
        Introducing
   [logo]  HERA
Stop managing your AI. Start giving it work.
```

Then provide the normal visual cue to continue down the page (a scroll-down affordance consistent with the site's existing `.scroll-gate` treatment in `src/pages/index.astro`).

---

## The `.md` rain — precise definition

This is the beat most likely to be executed wrong. It is **Matrix digital rain with `.md` files substituted for characters.** It is *not* eight objects popping into random coordinates.

**Asset:** `public/images/ui/md-file-icon.png` — already in the repo, byte-identical to `docs/UI/home page/md_file.png`. Do not re-copy it.

**Structure**
- Roughly **10–14 vertical columns** on large desktop, spread to fill the **entire screen width**.
- Each column is a stream containing **several** file units (icon + filename), stacked vertically with consistent spacing.
- Each file unit = the `.md` icon with its filename **directly underneath it, like Windows Explorer.**

**Filename rendering — hard rules**
- NO pill, NO card, NO border, NO rounded rectangle, NO background fill, NO box-shadow, NO rotation.
- The file icon *is* the object. The label is plain text sitting under it. That is all.

**Motion**
- Streams **enter from above the viewport and travel downward**, driven by `p` (scrolling back up moves them back up).
- Different **initial vertical offsets** per column.
- Different **stream lengths** (number of files) per column.
- Slightly **varied movement rates** per column (parallax) so columns desync.
- **Uneven lower edges** — some columns far down while others are still entering. The bottom of the field must never read as a tidy even rectangle.
- **Progressive density:** at `p≈0.33` one or two streams; more columns activate as `p` climbs; full 10–14 by `p≈0.55`.
- Files render **above** the AI answer in z-order and must visibly obscure it as density rises.

**Explicitly forbidden**
- The old `clutterDrop` random-absolute-position + bounce/pop behaviour.
- Screen shake, vignette, or any "chaos" effect used as a substitute for executing the rain properly. **The rain is the chaos.**

Use ≥12 distinct filenames so a column doesn't obviously repeat. Suggested pool: `CURRENT-SPRINT.md`, `handoff.md`, `task-03-notes.md`, `decision-log.md`, `research.md`, `FINAL-final-v2.md`, `context-pack.md`, `roadmap-update.md`, `verification-notes.md`, `handoff-latest-REAL.md`, `fix-notes-final-final.md`, `source-of-truth.md` — plus more as needed to fill the width.

Performance: the rain must be transform-driven (`translate3d`), not per-frame `top`/`left` writes. Keep total file-unit count reasonable (~70–110 desktop) and let columns reuse a shared DOM structure.

---

## The AI answer

Reuse the long verbose answer already in the current component (the two `ai-agent` paragraphs beginning "Better - but for a reason worth naming…"). Keep it whole.

**Delete** `max-height: 260px`, `overflow: hidden`, and the gradient `mask-image` on the answer area. The excessive response must feel excessive — that is the joke. The answer may extend past the visible chat area naturally as it grows, and the conversation may scroll internally as content accumulates (also `p`-driven), but nothing may be artificially clipped or faded out.

---

## Chat environment

- Recognisable generic AI-chat pattern: conversation area above, composer (text input + send button) pinned at the bottom.
- **Do not clone any one provider's branded UI.** No provider logos, names, or exact chrome.
- User message uses the established user-bubble family already in this codebase (`.user-bubble-mini`, `src/pages/index.astro` ~line 426): warm off-white fill, `22px 22px 7px 22px` radius, dark ink text. Assistant text is plain prose, no bubble — the standard modern pattern.
- The composer is **decorative** — it must not fake working product behaviour. Mark it `aria-hidden` / non-interactive and keep the whole cinematic out of the tab order, with the existing `sr-only` narration paragraph updated to describe the new story.

---

## Canvas — locked decision

The **entire opening cinematic is black regardless of the visitor's light/dark system theme.** This is an authored product film, not a standard hero. Do not use `--bg`/`--surface` adaptive tokens for the cinematic's own canvas; author explicit dark values inside the component. After the cinematic ends, the rest of the page returns to normal theme behaviour — do not alter global tokens or `<body>`.

(This also closes the open "adaptive vs. always-black" question Favour was asked in the previous closeout.)

---

## Reduced motion — part of THIS packet's acceptance

Do **not** just disable everything and dump the final HERA screen on people. That deletes the marketing argument.

Under `prefers-reduced-motion: reduce`, preserve the story as **discrete scroll-controlled states** — still scroll-driven, just snapped rather than continuously animated, with no falling motion and no parallax:

1. composer (empty)
2. sent message (user bubble, no typing/cursor animation)
3. thinking
4. verbose response (present in full)
5. accumulated `.md` field, **static** — no falling motion
6. the five thoughts, sequential, one at a time
7. pain statement
8. HERA reveal, landing on the final line

Prove it in a real browser if any available transport can emulate `prefers-reduced-motion`. If none can, the closeout must **say exactly that** rather than calling it verified. (Last session could not; try again, and try Claude-in-Chrome / a CDP emulation before giving up.)

---

## Scroll behaviour protections

- The cinematic may pin the viewport while the visitor scrolls through its internal story.
- Once the final HERA state is reached, **scrolling must naturally continue** into the existing content below.
- Scrolling backward must scrub/reverse the sequence without trapping the visitor.
- **The existing `#video-section` scroll-lock repair must survive.** `src/pages/index.astro`'s script uses `mode`/`hardLockY`/`lastScrollY`, and the `mode === 'intro'` branch arms the video lock only on an actual downward **crossing** of `videoTop`. A previous session shipped a real "scroll back out and get permanently trapped" bug here; the crossing check is the fix. Do not weaken it. The cinematic runs entirely inside `mode === 'intro'` (native scrolling) — keep it that way.
- Test entering the demo section, scrolling backward into the cinematic, then forward again — **at least twice.**
- Refresh from the top must begin at the empty-chat state.
- Refresh while the browser restores a mid-page scroll position must not leave the cinematic in an impossible visual state (compute `p` on init, not just on the first scroll event).
- **No scroll-wheel hijacking that keeps consuming input after the pinned section has ended.**

---

## File lane — the only files you may touch

- `src/components/OpeningFailureSequence.astro` — full rewrite
- `src/pages/index.astro` — **only** if the track height/pinning genuinely requires it (e.g. a `sectionTop` recalculation or a guard so the video lock still arms correctly after a 900vh section). Keep the diff minimal and explain every line you change.
- `docs/agent-system/CHEAT-SHEET.md` — mandatory update at completion (new entry, or a dated line confirming nothing changed)

You may create a new component file if you split the rain out, but keep it under `src/components/` and name it clearly.

---

## Explicit exclusions — do not do these

- **Do NOT merge `main` into `portfolio-week1`.** The enhanced Early Access funnel lives on `main`, not here. Do **not** port it, recreate it, or treat its absence as a Slice 1 defect. Branch convergence is a separate future slice and Favour's call. Preserve any existing generic navigation destination, but do not solve the funnel.
- Do not revert commit `c8b6467`. It contains legitimate fixes to keep (below).
- Do not touch `#video-section`, `#loop-section`, `#discoveries-section`, or any of their scripts beyond the minimal guard described above.
- Do not touch the About page, the Ubisoft page, or `src/data/site.ts`.
- Do not begin Slice 2 ("Iris"). Stop when this repair is verified.
- Do not chase `npm run check`'s **122 pre-existing errors** — they are a known clean-checkout baseline (see CHEAT-SHEET). Only confirm your own files add **zero new** ones.

### Preserve from `c8b6467` (unless directly incompatible)

- Current HERA nav branding work (`src/components/Nav.astro`)
- The mobile nav overflow fix (BUG-002 repair: `shrink-0` on the brand, `flex-1 min-w-0 overflow-x-auto` + `whitespace-nowrap` nav items)
- Responsive filename legibility fixes, where the technique is still reusable
- The `#video-section` scroll-lock repair (the `lastScrollY` crossing check)
- Repository workflow / browser-testing improvements

### Replace, do not preserve

- `OpeningFailureSequence.astro`'s autoplay choreography and all its `setTimeout`s
- Random clutter positioning and `.md` rotation
- Timer-driven phase changes
- The `HERA OS` eyebrow and `Your AI finished in 3 minutes.` opening headline (the pain line returns later, at Scene 7)
- The static `USER` / `AGENT` card and the final `😨 or 🫩` fake user reply
- The truncated/masked AI response
- Filename pills / cards / borders / backgrounds / shadows
- File bounce-pop entrance
- Scattered and simultaneously-accumulating thoughts
- Automatic rotating HERA copy
- `# HERA`

Leave no dead code from the old implementation behind. One implementation, not two competing ones.

---

## Acceptance criteria

The verifier and live tester will check every one of these. The repair **fails** if any is true:

1. ❌ I can sit still and the story keeps advancing
2. ❌ The AI response is already sitting there when I arrive
3. ❌ There is no composer + send interaction
4. ❌ The full response is artificially clipped or masked
5. ❌ `.md` files pop into random spots
6. ❌ `.md` files do not visibly travel downward in columns
7. ❌ The streams form a tidy even rectangle at the bottom
8. ❌ Filenames have any UI container around them
9. ❌ The rain does not eventually obscure the response
10. ❌ Several panic thoughts appear simultaneously
11. ❌ The panic thoughts move to different locations
12. ❌ HERA appears before the problem sequence is complete
13. ❌ The HERA promises rotate while I am not scrolling
14. ❌ The final state does not land on `Introducing / HERA / Stop managing your AI. Start giving it work.`

Plus:

15. ✅ Backward scroll scrubs the story in reverse without trapping
16. ✅ After the cinematic, scrolling continues naturally into `#video-section`; entering the demo → scrolling back up into the cinematic → forward again works **twice in a row**
17. ✅ Refresh at top starts at the empty-chat state; refresh mid-cinematic restores a coherent state
18. ✅ Cinematic canvas is black in both light and dark system themes; the rest of the page is unaffected
19. ✅ Reduced motion shows all eight discrete story states, not a dumped end frame
20. ✅ A coherent mobile adaptation exists (test at 375px and 430px) — simplified, but the same story
21. ✅ `npm run build` passes, all routes generated; `npm run check` adds zero new errors in your files
22. ✅ No `setTimeout`/`setInterval` drives any narrative beat (an rAF loop and short CSS *transitions* are fine; ambient infinite loops like the logo pulse are fine)

---

## Required return from the builder

1. Files changed, with a one-line reason each
2. `npm run build` and `npm run check` results (check: confirm no new errors naming your files)
3. The actual `p`-range table you shipped, if it differs from the one above, and why
4. Anything you could not do and why — honestly
5. Your CHEAT-SHEET update

**You cannot declare your own work accepted.** It goes to an independent verifier and a live tester afterwards.

---

## Before this is presented to Favour

Someone must **watch the entire experience as a visitor, top to bottom, in a real browser.** Source inspection and end-state screenshots are not sufficient and will not be accepted as proof. Read `docs/agent-system/BROWSER-TESTING-PROTOCOL.md` first; if the Claude Browser pane stops actually driving the page, switch transport rather than reporting a tooling failure as a product defect.

Note from the last session (`CHEAT-SHEET.md`): in this environment `getComputedStyle()` numeric output and single `scrollTo`/`scroll` calls were unreliable; `element.matches()`, `dataset`/attribute reads, and screenshots were trustworthy. Prefer reading the stage's `data-scene` / `--p` values and screenshots over computed styles.

**BUG-004** (clutter→HERA crossfade) is superseded by this rewrite. Close it only once the new scroll-controlled clear-to-HERA transition has been visually proven.

Slice status on completion remains: **🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW.** Do not begin Iris.

---

# ADDENDUM — product owner clarifications, 2026-08-28

These supersede anything above that conflicts with them.

## A1. Scroll is the timeline, not the trigger

> **Scroll is not merely the trigger. Scroll is the timeline.**
>
> Every meaningful visual state in this opening sequence must be **derived from** scroll progress.
>
> - If I stop scrolling halfway through a falling `.md` stream, that stream freezes exactly where it is.
> - If I scroll upward, it moves upward through the same path.
> - If I stop during the AI response reveal, the response stops revealing.
> - If I stop on one panic bubble, it stays on that bubble.
>
> The only exceptions are tiny ambient effects that do not advance the narrative.

Explicitly banned: animating the rain independently and merely *triggering* it on scroll-in. Banned: CSS autoplay keyframes for anything narrative. Banned: random spawning. There is no separate "reverse animation" to build — reverse falls out of the maths for free.

## A2. The `.md` rain, stated as simply as it actually is

It is a scroll-controlled overlay made of vertical columns. That is the whole thing. Stop overthinking it.

- One sticky full-screen stage.
- AI chat layer underneath.
- `.md` rain layer above the chat.
- ~12 vertical columns across the full width.
- Each column holds multiple `.md` icon + filename units stacked vertically.
- Each column has its own **starting Y offset**, **length (file count)**, **travel distance**, and **speed multiplier**.
- The entire position calculation is:

```
columnY = startingOffset + (scrollProgress × travelDistance × speedMultiplier)
```

- Scroll down → columns move down. Scroll up → columns move back up, automatically, because position is a pure function of scroll progress.
- No timers. No CSS autoplay keyframes. No random spawning. No eight individual cards positioned around the screen.
- At the peak there must be enough streams that the AI response is **physically hard to read** underneath them.
- Then the rain layer fades out over the next scroll range.

The staggered/uneven Matrix bottom edge comes for free from the four per-column variables above — one column reaching the bottom while another is still halfway down. It must read as **streams**, not as "a collection of file objects."

## A3. Final copy — confirmed

Ending on another "You lead..." line was the weaker option. The `You lead...` statements still cycle before it; the **permanent landing state** is:

```
Introducing
HERA
Stop managing your AI. Start giving it work.
```

Product owner's reasoning, worth keeping in mind while building: HERA is no longer claiming "we organise stuff" — it is saying *your job is to give direction, the machinery around that direction is our problem*.

## A4. Browser testing budget — anti-waste rule

**Do not debug browser tooling during this task.**

1. Try the embedded Claude Browser pane **once**, using the repository's existing one-minute preflight (`docs/agent-system/BROWSER-TESTING-PROTOCOL.md`).
2. If it fails to visibly scroll / click / render correctly, **abandon it immediately.**
3. Move directly to **Playwright Chromium**.
4. Once Playwright works, use it for the **entire** Slice 1 repair. Do not keep switching transports trying to get the preferred browser back.
5. **Maximum time diagnosing a broken browser transport: 3 minutes total.**
6. Browser-tool failure is **never** a product defect.

**Playwright is confirmed available and working in this environment (Chief verified 2026-08-28).** It is the **Python** package, not an npm devDependency — that is why earlier sessions wrongly concluded none was installed:

```bash
python -c "from playwright.sync_api import sync_playwright"
```

Chromium **148.0.7778.96** launches headless with no extra install. Working references already in this repo: `tests/e2e/capture_verification_screenshots.py` and `tests/e2e/capture_ea_v2_proofs.py` (sync API, `BASE_URL = "http://localhost:4321/hera_os/"`).

Playwright is *better* than the browser pane for this work anyway: `page.evaluate("window.scrollTo(0, N)")` hits exact scroll checkpoints deterministically instead of fighting unreliable wheel gestures.

## A5. Required verification checkpoints

A scroll story is **not** proven by a final screenshot. Capture a screenshot at each of these states, by scrolling to the corresponding absolute Y:

1. 0% — empty composer
2. the send interaction (cursor on Send / click)
3. thinking
4. early verbose response
5. response continues
6. first `.md` streams
7. dense Matrix rain
8. rain peak over the response
9. first panic thought
10. later panic thought
11. the 3-minute / 20-minute summary
12. `Introducing` + HERA
13. first `You lead...`
14. final HERA state

Then, **in addition**, do one normal top-to-bottom mouse-wheel pass and one bottom-to-top pass to confirm the experience actually scrubs naturally in both directions.

Save screenshots under `docs/agent-system/screenshots/slice-1-repair/` using numbered descriptive filenames, matching the existing convention in `screenshots/early-access-v2/`.

## A6. Reduced motion — verify, don't investigate

Do **not** burn time forcing an unreliable browser pane to emulate reduced motion.

In Playwright, create a reduced-motion context and verify the authored reduced-motion states there:

```python
context = browser.new_context(reduced_motion="reduce")
```

The Chief confirmed on 2026-08-28 that this genuinely flips `matchMedia('(prefers-reduced-motion: reduce)').matches` to `True` in this environment, so **reduced motion is now a verifiable acceptance criterion with no excuse.**

If the installed version unexpectedly cannot emulate it, record that fact and move on. **Maximum investigation: 3 minutes.** Do not spend an hour diagnosing test infrastructure.

## A7. Updated choreography, as the product owner states it

- Blank chat.
- User types: `Make a small change to the website`
- Cursor sends.
- User bubble appears.
- `Thinking...`
- AI starts producing the stupidly long answer.
- Visitor reads enough to understand: *"oh my God, shut up."*
- AI is **STILL** talking.
- `.md` streams begin falling in Matrix columns over the response.
- It gets increasingly impossible to see through the files.
- Everything clears.
- One centered thought bubble at a time.
- Final pain statement: `Your AI finished in 3 minutes.` / `You spent the next 20 digging through 18 new .md files and begging it to explain itself.`
- Clear.
- HERA logo.
- `Introducing`
- `HERA`
- `You lead...` sequence.
- Permanent landing statement: `Stop managing your AI. Start giving it work.`

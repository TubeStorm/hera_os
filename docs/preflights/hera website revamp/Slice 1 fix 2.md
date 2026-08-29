# HERA Homepage — Slice 1 Fix 2 — Opening Scroll Story Re-author
## Remove the fake chat chrome, fix the Matrix curtain, and make every major beat readable at normal scrolling speed

**Status:** Not started  
**Updated:** 2026-08-28  
**Baseline branch:** `portfolio-week1`  
**Baseline commit:** `cfab0a29d1b38f72986ac397c7c1d80121f049c4`  
**Repository:** `D:\Documents\favour-ai-product-portfolio`

This packet supersedes the current Slice 1 opening-sequence choreography where it conflicts with the rules below.

Do **not** redesign the rest of the homepage.  
Do **not** create a new worktree.  
Do **not** touch `main`.  
Do **not** turn this into another full opening rewrite. The core idea stays; the composition and pacing are what need repair.

---

# 1. Why this repair exists

The current opening has the right ingredients but the wrong experience.

At normal human scroll speed:

- the visitor lands on an almost blank page and does not know that scrolling is the interaction;
- the nav visually moves upward until it becomes flush with the top of the viewport;
- the opening still carries a large grey chat-window/composer shell that adds visual weight without adding meaning;
- the fake cursor/input/send choreography is now unnecessary;
- the Matrix `.md` rain develops too slowly and leaves large empty areas near the top/right instead of reading like an overwhelming curtain;
- the rain is allowed to continue far longer than the story needs;
- the human panic bubbles are tiny;
- important statements can be skipped by one ordinary scroll gesture;
- type sizes jump between panic bubbles, the “3 minutes / 20 minutes” beat, and the HERA promises;
- the HERA reveal puts the logo above the word instead of `[logo] HERA` on one row;
- `Introducing`, the HERA mark, the five promises, and the final line are compressed together instead of being revealed sequentially;
- the five `You lead...` messages currently occupy far too little scroll distance and can fly past unread;
- the final line moves to a different vertical position instead of replacing the promises in one stable copy slot;
- the top nav shows `HERA OS` twice.

The new rule is:

> **Scroll controls the story, but the user should never have to scroll unusually slowly to understand it.**

Every major beat follows:

> **enter → hold → transition → hold**

Not:

> transition → transition → transition.

---

# 2. File lane

Primary implementation:

- `src/components/OpeningFailureSequence.astro` — main repair
- `src/components/Nav.astro` — permanent nav viewport inset
- `src/data/site.ts` — remove duplicate `HERA OS` navigation destination

Only touch:

- `src/pages/index.astro`

if the repaired opening track genuinely requires a minimal integration adjustment. Explain every changed line if this file is touched.

Normal workflow docs/evidence updates remain required by the repository operating contract.

---

# 3. Opening state — no blank arrival

## What the visitor sees at `scrollY = 0`

The opening is already alive.

Black background.

Visible immediately:

1. the already-sent user bubble:
   **“Make a small change to the website”**
2. the agent thinking indicator beneath it:
   **Thinking...**
3. a low-centered scroll affordance:
   **Scroll down**
   with the existing/down-arrow visual language.

The visitor must not need to scroll through blank black space before understanding what to do.

The scroll affordance must be unmistakable but quiet. It is instructional, not another hero headline.

### Remove entirely

The opening no longer needs:

- the grey bordered chat-window card;
- the composer background;
- input field;
- caret;
- Send button;
- fake cursor;
- prompt typing animation;
- cursor travel;
- click animation.

The user message is already sent when the page loads.

The story begins from:

> **user asked something tiny → agent is thinking**

This is simpler and stronger.

---

# 4. Chat presentation — black canvas, not a fake app window

Do not put the conversation inside the current grey rounded rectangle.

Use the black page as the canvas.

The user bubble can remain visually a user bubble.

The thinking state and later agent response should sit directly in the cinematic composition.

The agent response should become wider and larger than it is now so it is readable before the Matrix starts obscuring it.

Desktop target:

- response width approximately `min(760–900px, 68–74vw)`;
- readable body size, roughly `18–21px` depending on the current typography scale;
- no tiny “demo screenshot” feel.

Do not make the initial user bubble as huge as the later cinematic statements. It is the setup, not the punchline.

---

# 5. Agent response → Matrix transition

When the visitor first scrolls:

1. the `Thinking...` state fades away;
2. the long agent response begins appearing;
3. do **not** wait for paragraph two before introducing the file chaos.

The Matrix/file curtain should start around the phrase:

> **“clicking a variant did change...”**

Use the actual revealed-word position / response progress rather than an unrelated magic global percentage where practical.

The point is:

> the answer has barely gotten going before the paperwork starts becoming ridiculous.

---

# 6. Matrix curtain — full at the top, shredded at the bottom

The current Matrix has large empty areas, especially in the upper-right region. That breaks the “curtain” idea.

New visual law:

> **The top of the Matrix reads like one continuous curtain across the viewport. The bottom edge can be uneven and shredded.**

Think:

████████████████████████  
████████████████████████  
████████████████████████  
███████████████   ██████  
██████████   ███   █████  
█████  ███    ██     ███  
███     ██            ██

Not:

large areas of clean black sky between isolated columns.

## Implementation intent

- keep authored/deterministic placement;
- columns span edge-to-edge;
- when the curtain starts, file stacks originate from/above the top edge;
- each column is vertically stacked enough that the upper field reads continuously;
- column lengths may differ;
- vertical travel/speed may differ;
- the lower endpoints should be jagged;
- no tidy rectangular bottom edge;
- no giant blank top band on the right.

This does **not** need to reach the bottom of the viewport.

The old ~84% peak-density target is no longer the goal.

---

# 7. End the Matrix early

The story point is:

> **this became too much, too quickly.**

We do not need to watch files fall all the way down.

Once the Matrix visually occupies roughly **35–40% of the viewport depth across the full-width curtain**, transition out.

That threshold should be visually measured, not assumed from a single column's transform.

At that moment:

- the agent response;
- Matrix curtain;
- remaining chat setup

fade/cut away decisively into the human-reaction sequence.

Do not let the Matrix drag on because its columns have not technically completed their travel.

The narrative owns the exit, not the falling-file physics.

---

# 8. Human panic stack — accumulate the cleanup burden

Do **not** swap one isolated thought bubble for another.

That is too jarring and loses the whole point: the human is accumulating cleanup work while the AI keeps producing things.

Instead, build a **stack of large message cards** like overlapping physical cards.

## Interaction

The first human card appears centered.

As the visitor scrolls:

1. card 1 appears and holds;
2. card 2 arrives slightly offset and becomes the new front card while card 1 remains visibly stacked behind it;
3. card 3 joins the pile;
4. continue until the stack visibly feels excessive;
5. the full stack holds;
6. only then transition to the `Your AI finished in 3 minutes` sequence.

Previous cards do not disappear when a new one arrives.

They recede behind the active card using:
- slight vertical/horizontal offset;
- slightly reduced opacity;
- optional tiny rotation of only a degree or two if it still feels clean;
- consistent card width/radius.

The pile should read like **accumulating mental/admin burden**, not a carousel.

## Scale

Desktop:

- front card approximately one-third of viewport width;
- practical width range around `500–680px`;
- large readable statement typography;
- generous padding;
- centered as a group.

Mobile:

- approximately `82–90vw`;
- preserve visible card offsets without clipping;
- no tiny text.

Use the same cinematic statement type scale later used for the pain statements and HERA promises.

## Copy

Use short, painfully recognizable AI-management interruptions.

Recommended sequence:

1. **Wait — explain it like I'm ten.**
2. **What are you actually saying?**
3. **Did I send you the right file?**
4. **Where is task.md?**
5. **Did you write the closeout?**
6. **Which file is current?**
7. **Don't make a new branch.**
8. **Merge the accepted one to main.**

The exact punctuation/capitalization may be tuned for visual rhythm, but keep the meaning plain and recognizable.

Do not turn these into polished marketing copy. They should sound like someone managing an AI that keeps creating more work.

The last card does **not** need a different red font size or an unrelated visual system. If urgency needs emphasis, use background/tone while preserving the same card geometry and type scale.

## Hold law

Each newly added card must receive a readable hold before the next one arrives.

A normal mouse-wheel gesture must not add three cards at once.

At the completed stack:
- hold long enough for the visitor to register the pile;
- then clear the entire stack decisively;
- transition to the cost statement.

This accumulated stack replaces the previous one-at-a-time panic-bubble treatment.

---

# 9. One cinematic type scale

The homepage currently jumps between unrelated font sizes during the opening.

Create/reuse **one shared cinematic statement scale** for:

- human panic thought bubbles;
- `Your AI finished in 3 minutes.`;
- `You spent the next 20...`;
- all five `You lead...` promises;
- `Stop managing your AI. Start giving it work.`

These should feel like chapters of one story.

Recommended implementation concept:

`--opening-statement-size: clamp(1.8rem, 3vw, 2.8rem);`

Exact value may be tuned against screenshots, but there should be **one shared source of truth**, not separate arbitrary font sizes.

Exceptions:

- initial user message = smaller setup copy;
- agent long response = readable body copy;
- `Introducing` = intentionally small eyebrow;
- `HERA` wordmark = intentionally much larger branding.

Do not interpret “same size” as making every piece of the page identical.

---

# 10. Panic → pain sequence

After the thought bubbles, give the cost its own weight.

Use a stable centered statement position.

Beat A:

**Your AI finished in 3 minutes.**

Hold.

Then transition in the **same statement slot** to:

**You spent the next 20 digging through 18 new .md files and begging it to explain itself.**

Hold.

Do not immediately stack both and race onward.

Do not move the text to a new vertical position between the two.

---

# 11. HERA reveal — exact required structure

The reveal is sequential.

## Beat 1

Only:

**Introducing**

Nothing else yet.

Hold.

## Beat 2

Beneath `Introducing`, reveal:

**[HERA logo] HERA**

The logo is on the **left**.

The word `HERA` is on the **right**.

They form one horizontal brand row.

The logo is **not above** the word.

Hold.

## Beat 3 onward

Keep:

- `Introducing`;
- `[logo] HERA`

fixed in place.

Below them is **one stable promise slot**.

That slot cycles, one scroll-held beat at a time:

1. **You lead. It remembers what you already said.**
2. **You lead. It knows what happens next.**
3. **You lead. It knows where everything went.**
4. **You lead. It keeps the work together.**
5. **You lead. It stops when it actually needs you.**

Each sentence must receive a genuine reading hold.

After the fifth hold, the **same exact promise slot** becomes:

**Stop managing your AI. Start giving it work.**

The final line must not jump upward/downward because it is a different DOM element.

Prefer one text container whose content/state changes, or two perfectly overlaid elements occupying the exact same geometry.

---

# 12. Scroll pacing law

This is the most important repair.

The current implementation gives some major messages less scroll distance than one ordinary wheel gesture.

That is unacceptable.

## For every major readable beat

Use:

**enter → HOLD → exit**

The hold is the majority of the beat.

Transitions should be short.

Readable state should be long.

As a starting acceptance target, every major statement should remain fully readable for at least roughly **0.5–0.7 viewport-heights of scroll travel** before it can be replaced.

This applies especially to:

- every panic thought;
- each pain statement;
- each `You lead...` promise;
- the final `Stop managing...` line.

Do not merely add more total `vh`.

Redistribute the existing scroll story intelligently.

It is acceptable to shorten the full opening track if the experience becomes better.

It is also acceptable to keep a long track.

What is **not** acceptable is packing six important messages into the final few percent of the track.

---

# 13. Natural scrolling test — mandatory

Checkpoint screenshots alone are insufficient for this repair.

The failure is specifically about how a person travels **between** checkpoints.

Verification must include both:

## A. Deterministic screenshots

Use Playwright exact scroll checkpoints to verify composition.

## B. Ordinary mouse-wheel traversal

Use real `page.mouse.wheel(...)` events at a human cadence.

The tester must start at the top and experience the entire opening **without knowing the internal progress table**.

Grade:

- Did they immediately know to scroll?
- Could one ordinary gesture skip an entire thought?
- Could one ordinary gesture skip multiple `You lead...` promises?
- Did they have to deliberately feather the wheel unusually slowly?
- Did any important copy appear and disappear before it could reasonably be read?
- Did the HERA reveal feel sequential?
- Did the final line stay anchored?
- Did the Matrix become overwhelming quickly rather than slowly filling forever?

If the answer to any skip/readability question is bad, retune the hold ranges.

Do not declare success solely because screenshots at exact percentages look good.

---

# 14. Navigation repairs

## A. Permanent top inset

The floating nav pill must remain at the same visual distance from the top of the desktop viewport before and during scroll.

Current structure puts the spacing on the inner nav (`mt-4`) while the sticky header itself is `top-0`.

Repair the sticky geometry so the actual sticky element owns the inset.

Expected:

- nav starts floating below the browser top;
- scroll;
- nav remains floating at that same offset;
- it never travels upward and becomes flush to the viewport edge.

## B. Remove duplicate `HERA OS`

Keep the left brand:

**[logo] HERA OS**

Remove the separate first navigation destination `HERA OS` that currently appears again beside `Deep Dive`.

Desktop right-side nav should begin with:

- Deep Dive
- Ubisoft Work
- About
- Lineage
- Contact

The left brand remains the Home link.

Do not remove the actual left brand.

---

# 15. Things explicitly removed from the opening

This repair intentionally supersedes earlier fixes around these elements because the elements no longer belong in the design:

- composer input;
- Send button;
- fake mouse cursor;
- typing animation;
- cursor-target measurement;
- click down/up choreography;
- grey chat window/card background;
- chat-window border.

Delete dead CSS/JS created solely for those removed pieces.

Do not keep invisible dead choreography “just in case.”

---

# 16. Responsive requirements

Verify at minimum:

- desktop `1440 × 900`;
- laptop `1366 × 768`;
- mobile `390 × 844`;
- mobile `375 × 812`.

At every size:

- opening is meaningful immediately;
- scroll instruction is visible without clipping;
- no grey chat card;
- user bubble and thinking state read cleanly;
- agent response is readable;
- Matrix upper curtain has no giant visual holes;
- thought bubbles dominate appropriately;
- all cinematic statements share one type scale appropriate to that viewport;
- HERA brand row remains horizontal where practical;
- promise/final slot remains stable;
- nav does not collide with content;
- duplicate HERA OS item is gone.

On narrow mobile only, `[logo] HERA` may reduce gap/scale as necessary, but do not casually stack logo above HERA unless horizontal fit genuinely fails after reasonable responsive sizing.

---

# 17. Reduced motion

Preserve the existing reduced-motion requirement.

Reduced motion should show the same **story order** as discrete readable states:

1. user message + thinking;
2. agent response;
3. static Matrix curtain;
4. each thought;
5. pain statement A;
6. pain statement B;
7. Introducing;
8. `[logo] HERA`;
9. five promises;
10. final line.

No essential copy may disappear merely because animated travel is disabled.

---

# 18. Regression boundaries

Do not regress:

- the existing video-section scroll-gate behaviour outside this opening;
- upward escape from later scroll-lock sections;
- the rest of the homepage;
- About / Ubisoft / Deep Dive / Lineage / Contact routes;
- mobile nav horizontal behavior;
- GitHub Pages base-path handling.

Do not “fix” unrelated pre-existing check errors.

Baseline from the latest accepted repair remains:

- build passes;
- existing type/check baseline is known;
- no new opening/nav errors may be introduced.

---

# 19. Required evidence

Create a dated evidence folder under the existing agent-system screenshot/evidence convention.

Capture at minimum:

### Opening
- arrival state;
- early agent response before Matrix;
- first Matrix onset;
- ~35–40% Matrix curtain just before exit;
- panic stack after first card;
- panic stack at mid-build;
- completed panic stack before transition;
- pain A;
- pain B.

### HERA
- Introducing only;
- Introducing + `[logo] HERA`;
- promise 1;
- a middle promise;
- promise 5;
- final line in the exact same slot.

### Navigation
- top-of-page nav;
- scrolled nav proving identical viewport inset;
- nav proving duplicate HERA OS item is gone.

### Mobile
At least:
- arrival;
- Matrix;
- human thought;
- HERA promise/final.

Also preserve a short ordinary-wheel traversal record or tester notes proving the pacing was evaluated continuously, not only at programmatic checkpoints.

---

# 20. Acceptance criteria

This repair passes only when all are true:

- [ ] no blank initial state;
- [ ] `Scroll down` instruction is visible immediately;
- [ ] user message is already sent at arrival;
- [ ] thinking state is already visible;
- [ ] grey chat card is gone;
- [ ] composer/input/Send/cursor choreography is gone;
- [ ] agent response expands directly on black canvas;
- [ ] Matrix begins early, around `clicking a variant did...`;
- [ ] Matrix top reads as a full-width curtain;
- [ ] Matrix bottom edge is jagged;
- [ ] no giant upper-right/top gap like the current screenshot;
- [ ] Matrix exits around 35–40% curtain depth instead of falling to completion;
- [ ] human panic messages accumulate as a readable physical card stack rather than swapping one-for-one;
- [ ] each added card receives a readable hold and previous cards remain visibly stacked behind it;
- [ ] panic thoughts, pain statements, promises, and final line share one cinematic type scale;
- [ ] every major statement has real hold distance;
- [ ] ordinary scrolling cannot casually add/skip multiple panic cards or multiple important messages;
- [ ] `Introducing` appears before the HERA brand;
- [ ] HERA brand is `[logo left] HERA right`;
- [ ] HERA brand remains fixed while promises change beneath it;
- [ ] promises occupy one stable text slot;
- [ ] final line occupies that exact same slot;
- [ ] nav retains a permanent top inset during scroll;
- [ ] right-side duplicate `HERA OS` nav item is removed;
- [ ] reduced-motion story remains complete;
- [ ] desktop/laptop/mobile screenshots pass;
- [ ] ordinary-wheel live tester passes;
- [ ] build/check regression baseline is not worsened.

---

# 21. Stop condition

After implementation:

1. run build/check against recorded baseline;
2. browser-verify with Playwright;
3. run an independent ordinary-scroll live test;
4. repair only real defects found;
5. update `BUGS.md`, `CHEAT-SHEET.md`, and current sprint/work-packet state per repository law;
6. commit to `portfolio-week1`;
7. push;
8. report the commit SHA and evidence locations;
9. leave the slice **waiting for Favour visual review** unless Favour explicitly accepts it.

Do not start the next homepage slice automatically.

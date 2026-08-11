**STATUS: DONE**
**DATE:** 2026-08-11
**REASON:** Implemented Slide 4 of 5 with the s4-layout and SVG/CSS animation foundation per specifications. Waiting for Favour review.

Implement **Slide 4 of 5 only** in the existing About Section 01 carousel.

Slides 1, 2 and 3 are approved.

Do not redesign or alter them.

The carousel is now correctly five slides:

1. The HERA story
2. What I questioned
3. What I realized
4. The product decision ← BUILD THIS NOW
5. What that changed

The current Slide 4 is an old legacy placeholder containing generic HUMAN / PRODUCT cards and generic CONTEXT / STATE / HISTORY / WORK / EVIDENCE blocks.

**Delete that Slide 4 visual and its legacy treatment. Do not polish or reuse it.**

---

## LEFT COPY — EXACT

Small header:

**The product decision**

Bold paragraph:

**Make context part of the product, not something hidden inside a markdown.**

**regular paragraph:**

The person should provide meaning and judgment, while the product carries the surrounding context: decisions, files, previous work, accepted results, and ongoing tasks. These contexts should each live in stable places the system can inspect and the human can audit.

Use this exact copy.

Do not rewrite it.

Do not replace the second sentence with the older:

“The person should provide meaning and judgment…”

That is no longer the approved copy.

### Typography

Match Slides 1–3:

* small kicker/header;
* bold paragraph-style statement;
* visually subordinate to the master section heading:
  `How do you find the real problem?`

Do NOT use the old giant `<h3>` treatment.

feel free to also standardized the classes, seein that soem casses share the exact same design css. e.g. slide1, s2-body, s3-body, s2-copy

---

# RIGHT VISUAL — PURPOSE

This slide is the payoff to Slides 1–3.

Slide 1 showed:

**the human brain carrying system/project state.**

Slides 2–3 showed:

**context becoming inspectable and usable by the system.**

Slide 4 must show:

**the system now carries the stable work/context, freeing the human brain to focus on meaning and judgment.**

This should feel like a visual transformation of Slide 1.

---

# VISUAL COMPOSITION

Use the same:

* black rounded canvas;
* no visible border;
* no internal title bar;
* no explanatory caption;
* no dashboard chrome.

Inside the canvas create a clear **left / right composition**.

Approximately:

**LEFT 42% — human brain**

**RIGHT 58% — AI + stable product context**

Do not place another giant card around either half.

Use spacing and visual grouping.

---

# LEFT — CALMER HUMAN BRAIN

Reuse the exact brain visual already established in Slide 1.

Source:

`docs/UI/icons_svg/brain-reference-black-transparent.svg`

Do not introduce another brain illustration.

The visual relationship to Slide 1 should be obvious.

### Change its state

Slide 1 brain:

* stressed;
* red glow;
* many intrusive system-state thoughts.

Slide 4 brain:

* calm;
* subtle green / blue-green / neutral-positive glow;
* slower gentler pulse;
* only 3–4 thoughts;
* thoughts are about human meaning, taste and judgment.

Do NOT make the brain bright neon green.

Keep it elegant and restrained.

### Floating human thoughts

Use short thoughts such as:

* `Would Mum enjoy a beach day?`
* `Do I want this trip to feel relaxed?`
* `Maybe we should stay near the water.`
* `What would make this trip special?`

These should float gently around the brain using the same ambient-drift philosophy as Slide 1.

They should NOT look stressful.

Give them:

* more breathing room;
* slower motion;
* softer opacity;
* fewer competing objects.

The contrast with Slide 1 should be immediately visible.

The point is:

**the human is now thinking human thoughts instead of functioning as the system database.**

Do not add explanatory text saying that.

Show it.

---

# RIGHT — AI + STABLE PRODUCT STRUCTURE

Use Favour's actual AI asset:

`docs/UI/icons_svg/robot_ai.webp`

The original source file must remain untouched.

If the Astro build cannot directly serve/import an asset from `docs/UI/`, make a build-safe copy under an appropriate local portfolio asset directory such as:

`src/assets/about/`

Do not hotlink the image.

Do not substitute another robot icon.

### Robot

Place the robot above or slightly beside the stored-context structure.

It should clearly mean:

**AI can inspect this information.**

Keep it fairly small.

The stable product structure should remain the primary idea.

Use only subtle ambient robot motion:

* slight breathing/float;
* very soft glow;
* optional tiny scan movement.

Do not make the robot cute, animated like a character, or visually dominant.

---

# STABLE CONTEXT STRUCTURE

Create **five stable places** because the approved copy explicitly names five categories:

1. Decisions
2. Files
3. Previous work
4. Accepted results
5. Ongoing tasks

Do NOT replace these with generic:

* Context
* State
* History
* Work
* Evidence

Those old categories are rejected.

### Visual metaphor

Use a clean little **context cabinet / drawer / filing structure**.

This should build naturally on the sticky-note language already established in Slides 2 and 3.

Think:

* five dark slots/drawers;
* each has a small category label;
* one physical sticky note / file / piece of information is visibly peeking out;
* subtle depth;
* no heavy borders.

It should look like information has an actual home.

### Concrete travel information

Use straightforward examples so a hiring manager understands the visual instantly.

For example:

**DECISION**
sticky note:
`Destination`
`Ibiza`

**FILE**
small file:
`Flight shortlist.pdf`

**PREVIOUS WORK**
sticky/file:
`Hotel research`

**ACCEPTED RESULT**
sticky:
`Budget`
`$2,500`

**ONGOING TASK**
sticky:
`Compare September flights`

Also preserve continuity from Slide 3:

`Travelling with`
`Mum`

This can appear as another small note tucked naturally within the stored context structure, preferably associated with the relevant decision/context area.

Do NOT invent a sixth top-level product category solely to house it.

---

# IMPORTANT VISUAL DISTINCTION

The hiring manager should understand without reading a legend:

### HUMAN SIDE

Meaning.

Preference.

Taste.

Judgment.

### PRODUCT / AI SIDE

Decisions.

Files.

Previous work.

Accepted results.

Ongoing work.

Do not add those explanatory words as labels.

The examples themselves should communicate the distinction.

---

# MOTION

This slide is **ambient**, not a paced story.

Someone should understand it from a static screenshot.

Use small movement only:

### Brain

* slow subtle pulse;
* calm glow;
* human thoughts drift gently.

### Product side

* robot subtly idles;
* notes remain mostly stationary;
* occasionally one note may lift 2–3px and settle;
* a very restrained scan/highlight may pass over one stored item;
* drawers should feel alive but stable.

Do NOT:

* animate all five notes flying in sequentially;
* use a fake cursor;
* use tabs;
* make the hiring manager wait for the concept;
* create another long timeline;
* add typewriter effects;
* add an explanatory header inside the canvas.

The visual should feel **stable** because stability is literally the product idea being communicated.

---

# NO BORDERS

Favour's existing rule remains:

**No border around the animation canvas.**

Also avoid unnecessary outlined cards inside the canvas.

The context cabinet may use subtle surface contrast and shadow/depth to define its structure.

Do not turn everything into bordered rectangles.

---

# DO NOT TOUCH

Do not modify:

* Slide 1
* Slide 2
* Slide 3
* Slide 5
* About hero
* About Section 02 onward
* HERA OS
* HERA Deep Dive
* Ubisoft Work
* global navigation

Do not refactor the approved Slide 1–3 animation systems unless absolutely required to prevent a real shared bug.

Use dedicated `s4-*` markup/styles rather than mutating the old legacy `.stage / .transfer / .transfer-card` system.

The old Slide 4 implementation is disposable.

---

# DESIGN EXECUTION

Follow the existing:

`docs/agent-system/DESIGN-EXECUTION-STANDARD.md`

Before coding, identify:

* the visual invariant;
* motion timeline / ambient loops;
* existing Slide 1 brain treatment to reuse;
* existing Slide 2–3 sticky-note/context language to reuse;
* asset paths;
* desktop and narrow-screen behavior.

Then implement.

---

# RESPONSIVE BEHAVIOR

Desktop:

* left human brain;
* right AI + context structure.

Narrow screens:

* preserve comprehension rather than shrinking everything into illegibility;
* brain may sit above the context structure;
* maintain generous black-space;
* stored-item labels must remain readable.

Do not introduce horizontal scrolling.

---

# RETURN

Browser-render and verify Slide 4.

Return:

1. one full desktop screenshot of Slide 4 in the actual About page;
2. one close crop of the animation;
3. one narrow/mobile screenshot;
4. confirmation Slide 1–3 remained visually unchanged;
5. stop for Favour review.

Do not begin Slide 5.

# discussions with chatgpt

## Yep — Git is clean enough to move to Slide 4

* I checked the current pushed `ProblemFindingStory.astro`.
* Slide 3 is there with the conversation + stacked context drawer + `Destination: Ibiza` inspection + new `Travelling with: Mum` note. Good continuity from Slide 2.
* The carousel is now actually **5 slides**, with 5 dots and `1 / 5` count logic.
* Slide 4 is still the **old legacy placeholder** with `HUMAN / PRODUCT / CONTEXT / STATE / HISTORY / WORK / EVIDENCE`. We should delete that whole visual rather than polish it.
* And all three assets are pushed: your brain SVG, `human.webp`, and `robot_ai.webp`.

The nice thing is Slide 4 can now pay off Slides 1–3 instead of introducing another new metaphor.

---

# Slide 4/5 — **The product decision**

This is the before/after payoff.

Slide 1:

**my brain is carrying project/system state**

Slides 2–3:

**the product can store and inspect context**

Slide 4:

**therefore: give that information stable homes in the product and give the human their brain back.**

I would absolutely reuse the **brain from Slide 1**, but change its emotional state.

### LEFT SIDE OF THE ANIMATION: human brain

Same brain.

But:

* no red stress glow;
* soft calm green/blue-neutral glow;
* slower gentler pulse;
* only **3 or 4 thoughts** instead of nine;
* thoughts are actual human thoughts/judgments, not system administration.

For the travel story, something like:

`Would Mum enjoy a beach day?`

`Do I want this trip to feel relaxed?`

`Maybe we should stay near the water.`

`What would make this trip special?`

Those are things I **want the human thinking about**.

Not:

`which version is current?`
`where is the file?`
`what did the agent decide?`

That's the visual transformation.

### RIGHT SIDE: AI + stable product structure

Use your:

`docs/UI/icons_svg/robot_ai.webp`

The robot should be recognizable but not gigantic. It sits above/near the system structure.

Below it: **five stable context drawers**, because your actual sentence names five categories.

Not generic `CONTEXT / STATE / HISTORY`.

Use exactly:

**DECISION**
`Destination: Ibiza`

**FILE**
`Flight shortlist.pdf`

**PREVIOUS WORK**
`Hotel research`

**ACCEPTED RESULT**
`Budget: $2,500`

**ONGOING TASK**
`Compare September flights`

And somewhere in the context we can include the new information from Slide 3:

`Travelling with: Mum`

I think that belongs naturally as either a little note visibly tucked into the **Decision** drawer or a sixth loose saved-context note associated with the system. We shouldn't invent a sixth category because your copy lists five stable places.

The important distinction is:

**category = stable product structure**

**sticky note = actual information inside it**

That is much clearer than five generic cards.

### Animation

Very little.

This should basically be a living infographic:

* brain gently pulses;
* human thoughts drift lazily;
* robot has a subtle idle motion/glow;
* notes slightly peek from drawers;
* perhaps every few seconds one drawer's note lifts ~3px and settles, implying inspectability;
* maybe a tiny scanning highlight passes across one note.

No staged 8-second sequence.

No fake cursor.

No “first this happens, then this happens.”

Slide 4 should be understandable even if someone screenshots it.

#

## One thing I particularly like here

Slide 1 and Slide 4 will now visually rhyme:

**Slide 1**

* same brain
* red
* crowded
* “What sprint?”
* “Which file?”
* “What did the verifier approve?”
* the human is functioning as infrastructure

**Slide 4**

* same brain
* calm
* spacious
* “Would Mum enjoy this?”
* “What would make this special?”
* meanwhile the boring operational facts physically live somewhere else

That makes the product decision understandable **before the recruiter even finishes reading the paragraph**.

And the existing Slide 2 → Slide 3 sticky-note language means the right side of Slide 4 doesn't come out of nowhere either. It looks like those little inspectable notes have matured into an actual product structure.

That is exactly the kind of continuity this carousel was missing in the first ugly version.

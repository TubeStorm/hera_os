**STATUS:**
**DATE:**
**REASON:** 


Implement **Slide 5 of 5 only** in the existing About Section 01 carousel.

Slides 1–4 are existing work. Do not redesign them during this task.

This is the final slide:

1. The HERA story
2. What I questioned
3. What I realized
4. The product decision
5. What that changed ← BUILD THIS NOW

The current Slide 5 is only a placeholder containing:

“HERA stops being better chat”

and

“Rough intent → structured work → human only when genuinely needed.”

Delete that placeholder implementation.

Do not preserve its copy or visual treatment.

# LEFT COPY — EXACT

Small header:

**4 — What that changed**

Bold paragraph:

**HERA became less about “a better chat” and more about an operating environment for work: the person can arrive with rough intent, the system turns it into structured work, and interruptions only happen when the human genuinely matters.**

Do not rewrite this.

Do not add another explanatory paragraph inside the Slide 5 left column.

The existing final section outro beginning:

“That is usually how I work: I follow the friction…”

already exists outside the carousel.

Keep that existing outro exactly as written and preserve its current behavior of appearing when the user reaches the final slide.

Do not duplicate it inside Slide 5.

# VISUAL PURPOSE

This is the payoff to the complete five-slide argument.

It must show:

**ROUGH HUMAN INTENT**
→
**THE PRODUCT CREATES STRUCTURE AND DOES WORK**
→
**ONLY GENUINELY HUMAN JUDGMENT COMES BACK**

Do not introduce another new HERA concept.

Do not use HERA-specific vocabulary such as:

* Room
* Void
* Objective
* Goal shell
* semantic survey
* context block

A hiring manager who has never seen HERA must understand this visual immediately.

# CANVAS

Use the established About-carousel visual language:

* black / near-black canvas;
* rounded corners;
* no visible border;
* no internal header bar;
* no explanatory title inside the canvas;
* no dashboard chrome;
* generous negative space.

Use the wider visual proportions already being established for the carousel.

The visual needs enough horizontal room to show a simple operating relationship.

# VISUAL COMPOSITION

Treat the animation as **one continuous systems diagram**, not separate cards.

There are three conceptual areas.

## A — HUMAN ARRIVES WITH ROUGH INTENT

On the left side of the canvas, use Favour's actual human asset:

`docs/UI/icons_svg/human.webp`

If required for the Astro build, copy it to the same build-safe asset area used for the robot.

Do not alter the source asset.

Keep the human illustration relatively small.

Beside it, show one natural speech/thought bubble:

**“I want to go back to Ibiza with Mum this fall. Somewhere quiet. I don't want to plan every detail.”**

This should feel deliberately rough and human.

Do not split this into form fields.

Do not make the user structure the request.

No labels such as:

RAW INPUT
UNSTRUCTURED INTENT
USER PROMPT

The natural sentence itself communicates that.

## B — SYSTEM TURNS IT INTO COHERENT WORK

Use Favour's existing robot asset:

`src/assets/about/robot_ai.webp`

Place the robot subtly above or beside a compact persistent workspace.

The robot is not the star.

The structured work is the star.

Create three simple groups:

### OUTCOME

**Plan Ibiza trip with Mum**

### KNOWN

Reuse the physical sticky-note language already established in Slides 2–4.

Show small inspectable notes such as:

* `Ibiza`
* `Mum`
* `Fall`
* `Quiet`

Do not turn these into generic UI pills if the established sticky-note treatment can be reused.

### WORK

Show a very small work list:

**Compare flights** ✓

**Shortlist quiet hotels** ✓

**Draft itinerary** …

The task treatment should be clean and glanceable.

Do not turn this into a project-management dashboard.

Do not add dates, assignees, avatars, priority tags, progress charts or unnecessary UI.

The hiring manager only needs to understand:

**the system turned one rough thought into an outcome, retained what it knows, and created useful work.**

# C — ONE GENUINELY HUMAN DECISION RETURNS

From the structured workspace, allow one restrained visual path to return toward the human.

Show one question:

**“Would you rather save money or fly direct?”**

This is intentionally a preference/tradeoff.

The system can:

* inspect context;
* research flights;
* compare options;
* organize the work.

But it should not quietly invent which tradeoff the human values.

This one question demonstrates:

**the human is interrupted only where human judgment genuinely matters.**

Do not add text saying:

HUMAN REQUIRED

DECISION GATE

NEEDS INPUT

or similar system terminology.

The question itself is enough.

# VISUAL FLOW

The canvas should be understandable from a static screenshot.

Suggested spatial relationship:

human + rough thought
→
robot / structured workspace
→
one question returns to human

Use thin elegant connector lines if needed.

Do not use giant arrows.

Do not visually split the canvas into three bordered columns.

Everything should feel like one environment.

# CONTINUITY WITH PREVIOUS SLIDES

This visual should quietly reuse things the reader already learned:

From Slide 2 / 3:

* yellow physical context notes.

From Slide 4:

* robot asset;
* stable inspectable context language.

From the wider carousel:

* black canvas;
* restrained motion;
* no borders;
* product explanation through visual behavior rather than extra prose.

Do NOT reuse the brain.

Slides 1 and 4 already use the brain to explain cognitive burden and its release.

Slide 5 zooms outward to show the complete human ↔ system working relationship.

# MOTION

This should mostly behave like a **living infographic**.

The final state must be understandable immediately.

Use ambient motion:

* human rough-intent bubble drifts very slightly;
* an occasional faint signal travels from rough intent toward the structured workspace;
* known-context notes subtly breathe / lift;
* one work item occasionally receives a check;
* unfinished work may have one restrained progress shimmer;
* robot has very subtle idle motion;
* the single human-question connector occasionally travels back toward the human;
* final question remains readable.

Do not make the visitor wait for the entire concept to build from nothing.

Do not use:

* typewriter animation;
* fake cursor;
* tabs;
* scroll interaction;
* an 8-second staged movie;
* sequential card explosions;
* decorative AI particles.

# COPY HIERARCHY

Match the approved Slides 1–4 structure:

small kicker:

**4 — What that changed**

then one bold paragraph.

Do not use the old giant legacy `<h3>` treatment.

The master heading:

**How do you find the real problem?**

must remain visually dominant over all slide-level text.

# FINAL OUTRO

The existing outro below the carousel is part of the Slide 5 payoff.

Keep exactly:

“That is usually how I work: I follow the friction until I can describe the burden **the user should never have been carrying in the first place.**”

Preserve its current reveal behavior on the final slide.

Do not duplicate it.

Do not rewrite it.

# RESPONSIVE

Desktop:

* keep human intent, structured system, and returning question clearly readable in one horizontal conceptual composition.

Narrow/mobile:

* it may become a vertical flow:
  rough intent
  ↓
  structured work
  ↓
  one question back to human

Do not shrink everything until the text is illegible.

No horizontal scrolling.

# DO NOT TOUCH

Do not redesign:

* Slide 1
* Slide 2
* Slide 3
* Slide 4
* About hero
* About Section 02 onward
* HERA OS
* Deep Dive
* Ubisoft Work
* navigation

Shared carousel width fixes that are already in progress may remain.

Do not use Slide 5 as an excuse for another global refactor.

Follow:

`docs/agent-system/DESIGN-EXECUTION-STANDARD.md`

# RETURN

Browser-render Slide 5 in the real About page.

Return:

1. one full desktop screenshot of Slide 5;
2. one close crop of the animation;
3. one narrow/mobile screenshot;
4. confirmation Slide 1–4 content/behavior remained unchanged;
5. confirmation the final outro appears only on Slide 5;
6. stop for Favour review.

Do not begin another About section.

# conversation with chatgpt and favour

## Slide 5 is the payoff, not another new concept

The current pushed Slide 5 is still just the placeholder: **“HERA stops being ‘better chat’ / Rough intent → structured work → human only when genuinely needed.”** We can delete that completely.

And I found something useful already in the implementation: your final line — **“That is usually how I work…”** — already exists as a separate outro that only reveals at the end of the carousel.

I actually want to **keep that behavior**.

So Slide 5 becomes the final answer:

**rough human intent → system creates useful structure → work continues → only one genuinely human decision comes back**

Then below the carousel, your existing closing sentence appears as the conclusion to the whole section.

That means we don't cram your final philosophical line into the left column too.

---

## The Slide 5 visual I want

This one should feel like a **small animated systems diagram**, not another chat demo.

Imagine the black canvas as one continuous environment.

**Left:** your actual `human.webp`, small, beside one rough message:

> I want to go back to Ibiza with Mum this fall. Somewhere quiet. I don't want to plan every detail.

That message should look deliberately human and unstructured. One natural thought. No form. No fields.

A thin line moves from that thought into the system.

**Middle/right:** your little robot sits above a compact persistent workspace that has already transformed the intent into three obvious pieces:

**OUTCOME**
Plan Ibiza trip with Mum

**KNOWN**
`Ibiza` · `Mum` · `Fall` · `Quiet`

These should reuse the sticky-note language we've established, not generic pills.

**WORK**
`Compare flights` ✓
`Shortlist quiet hotels` ✓
`Draft itinerary` …

The work rows can have tiny ambient progress/check motion.

Then one single line travels **back** toward the human.

One question:

> **Would you rather save money or fly direct?**

I prefer that over “Which week works?” because this is indisputably a **human tradeoff**. The AI can research prices, compare flights, inspect context and prepare options. It cannot legitimately decide what *you value more*.

That's exactly the product principle.

So visually:

**human gives meaning**
→ **system provides structure + does work**
→ **human only gets pulled back in for judgment**

And that's basically the entire HERA thesis explained without using:

Room
Void
Objective
Goal shell
semantic survey
context block
or any HERA-specific vocabulary.

### Motion

I don't want this one to be another six-second movie.

The whole graph should be understandable **while paused**.

Motion just makes the relationships breathe:

* the rough thought drifts slightly;
* a faint signal occasionally travels from the human thought into the workspace;
* `Ibiza / Mum / Fall / Quiet` subtly illuminate as things the system extracted/knows;
* one work row occasionally checks itself;
* robot idles subtly;
* the one human-question line glows/travels back toward the human;
* then rests.

No cursor.

No tab switching.

No giant sequence of cards flying into existence.

And unlike Slide 4, **no brain**. We have already used the brain to tell the before/after cognition story. Slide 5 should zoom outward and show the *whole operating relationship*.

---

## It also closes the five-slide story properly

The carousel now reads as one actual case study:

**1/5 — The HERA story**
My brain was carrying the system.

**2/5 — What I questioned**
Why can't the product inspect what I already gave it?

**3/5 — What I realized**
Inspectable context has to actually be checked and updated.

**4/5 — The product decision**
Give context/work stable places and return the human brain to human judgment.

**5/5 — What that changed**
Now a person can arrive rough, the system can turn that into work, and only meaningful decisions need to come back.

Then your closing sentence appears below:

> That is usually how I work: I follow the friction until I can describe the burden **the user should never have been carrying in the first place.**

That closing line now has earned its existence because the reader literally watched you do it across five slides.

##

This is the first slide where I **would not build it one metaphor at a time with you** unless the first render is ugly. The concept itself is simple enough now: one human thought goes in, coherent work exists, one meaningful judgment comes back.

If the builder executes that cleanly, **Section 01 is fucking done** except for our inevitable “move this 14px left” polish pass.


**STATUS:** DONE
**DATE:** 2026-08-11
**REASON:** fix D:\Documents\favour-ai-product-portfolio\docs\preflights\Four week portfolio work\Slide 1_ About Page 04 animation foundation .md


Revise **Slide 4 only**, plus one shared carousel-width adjustment.

Do not begin Slide 5.

Slide 4's concept is approved, but the current implementation is too compressed.

## 1. WIDEN THE CAROUSEL CONTENT AREA

The page currently leaves substantial unused horizontal space while the carousel is constrained around a 980px content width.

Increase the desktop carousel/slides maximum width to approximately:

**1120–1160px**

Choose the value that aligns best with the existing page container and navigation.

Update the footer/dot alignment accordingly.

Do not make the carousel full-bleed.

Maintain comfortable page margins.

For the shared left-copy / right-visual layouts used by Slides 1–4, move toward approximately:

**38% copy / 62% visual**

Keep copy text internally width-constrained so paragraphs do not become excessively wide.

For Slide 4 specifically, approximately **35% copy / 65% visual** is acceptable if needed.

This width adjustment may affect Slides 1–3 spatially, but their copy, animation content, timing and visual design must remain unchanged.

Browser-check that none of the approved slides regress.

## 2. REMOVE THE SLIDE 4 CABINET

The current five large drawers are rejected.

They consume too much space and introduce a new visual metaphor we do not need.

Slide 3 already established the correct visual language:

**inspectable context = stacked physical notes.**

Reuse that language.

Refer to the existing Slide 3 stacked-note implementation in:

`src/components/about/ProblemFindingStory.astro`

especially the `s3-notes-container` / `s3-note-item` visual treatment.

Do not literally reuse its exact positions; reuse the visual grammar.

## 3. SLIDE 4 PRODUCT SIDE

Keep Favour's existing robot asset.

Below / around the robot, show a loose stacked collection of approximately six pieces of inspectable context.

Use small category labels plus concrete contents.

Examples:

**DECISION**
yellow note:
`Destination`
`Ibiza`

**FILE**
small paper/file:
`Flight shortlist.pdf`

**PREVIOUS WORK**
note:
`Hotel research`

**ACCEPTED RESULT**
note:
`Budget`
`$2,500`

**ONGOING TASK**
note:
`Compare flights`

Also preserve continuity from Slide 3 with the existing blue note:

`Travelling with`
`Mum`

The notes should slightly overlap / stack like physical context objects.

Do not put each note inside a large drawer or card.

Do not create six equal boxes.

The point is:

the information has stable, inspectable existence without turning the animation into a dashboard.

## 4. ONE CONTINUOUS VISUAL CANVAS

Remove the strong internal vertical split currently separating the brain half from the product half.

The animation should feel like one black conceptual canvas.

Suggested spatial balance:

* brain cluster around the left third;
* robot/context-note cluster around the right third;
* generous negative space between them.

Do not add a divider line.

Do not add labels such as HUMAN SIDE / PRODUCT SIDE.

## 5. HUMAN SIDE

Keep the currently approved:

* calm brain;
* green/blue subtle glow;
* relaxed human thoughts;
* ambient movement.

Make sure the thoughts do not get clipped by the visual boundary.

The widened canvas should give them noticeably more space.

## 6. MOTION

Keep Slide 4 ambient.

For the notes:

* gentle independent float of 1–3px;
* occasional slight note lift;
* subtle scan/highlight across one note;
* no sequential drawer-opening animation.

Robot remains subtle.

Brain remains calm.

The screenshot should explain the concept even with animation paused.

## 7. DO NOT CHANGE COPY

Keep the current approved Slide 4 copy exactly as it exists.

Do not rewrite it.

## RETURN

Return:

1. updated full Slide 4 screenshot;
2. close crop of the revised animation;
3. Slide 2 screenshot after the shared width increase;
4. Slide 3 screenshot after the shared width increase;
5. confirmation their behavior/copy remained unchanged.

Stop after this tuning pass.

# conversation with chatgpt 

## Yes — reuse Slide 3's stacked notes

* **Do not keep the giant five-drawer cabinet.** It is the main reason Slide 4 feels cramped.
* Slide 3 already taught the visual language: **context = physical stacked notes the system can inspect.** Reusing that is better continuity and requires less explanation.
* Slide 4 should show a **larger cluster of those same sticky notes**, grouped loosely under the robot, not five full-width filing drawers.
* The categories can still exist, but as tiny labels on/above the notes rather than giant containers.

So instead of:

`DECISION [huge drawer]`
`FILE [huge drawer]`
`PREVIOUS WORK [huge drawer]`
etc.

We get something visually more like:

**robot**

↙ scattered/stacked below

`DECISION`
yellow note: **Ibiza**

`FILE`
small white paper: **Flight shortlist.pdf**

`PREVIOUS WORK`
yellow note: **Hotel research**

`ACCEPTED`
note: **Budget · $2,500**

`TASK`
note: **Compare flights**

plus the blue **Travelling with · Mum** note from Slide 3.

Much smaller, much more visual, much less “enterprise admin dashboard.”

---

## And yes — widen the carousel

I checked the CSS and found the bigger underlying problem.

The entire `.slides` container is currently capped at only **980px**, while Slides 2, 3 and 4 then split that again **42 / 58**.

That is why you're seeing massive unused black page space while the actual content is fighting for room in the middle. 😂

I would fix both:

* Increase the main carousel content width from **980px → around 1120–1160px** on large desktop.
* Change the common copy/visual relationship from roughly **42 / 58 → 38 / 62**.
* Keep the copy itself width-constrained internally so it doesn't suddenly become long ugly lines.
* Slide 4 can go slightly more aggressive, around **35 / 65**, because its visual genuinely contains two conceptual halves.

This should benefit Slides 1–3 too without changing what they actually contain.

We're not redesigning them — just giving them oxygen.

---

## Revised Slide 4 visual

Now it becomes much simpler:

**LEFT half of animation**

* calm brain
* 3–4 human thoughts
* lots of breathing room

**RIGHT half**

* robot near top
* below: a loose **stack/constellation of context notes**
* no cabinet
* no five giant containers
* notes overlap slightly like Slide 3
* each note has a tiny category label

And I don't think the animation canvas itself needs a hard 42/58 split down the middle either.

In the screenshot, that visible dark vertical split makes it feel like two panels stitched together.

Remove that.

Let the brain and context stack sit in **one continuous black space**.

Maybe:

* brain around 30% from left
* robot/context around 72% from left
* generous empty space between them

Then the visual feels like a conceptual illustration rather than two dashboard columns.

I think this will fix **both** problems you're reacting to:

1. the whole carousel has been unnecessarily skinny;
2. Slide 4 is using a huge cabinet where **six little pieces of paper would communicate more with half the space**.

And visually, having the same sticky-note family evolve from **one note in Slide 2 → stack in Slide 3 → a whole body of durable context in Slide 4** is actually much stronger product storytelling.

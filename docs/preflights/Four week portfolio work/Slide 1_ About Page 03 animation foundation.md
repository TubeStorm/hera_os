Implement **Slide 3 of 5 only** in the existing About Section 01 carousel.

Slides 1 and 2 are approved. Do not redesign them.

The carousel has **5 slides total**:

1. The HERA story
2. What I questioned
3. What I realized ← build this now
4. The product decision
5. What that changed

The current implementation still visually reports `/4`. Correct the carousel's total count and navigation model to **5**, but do not invent the content/design of Slides 4 or 5 during this pass.

## LEFT COPY — EXACT

Small header:

**2 — What I realized**

Bold paragraph:

**The bottleneck was not simply model intelligence. It was trust. I needed to know that when the AI interrupted me, it had already checked the information I had given it and genuinely needed something only I could decide.**

Do not rewrite, expand, summarize, or add another trust statement.

Use the exact typography hierarchy already approved for Slides 1–2.

## RIGHT VISUAL — PURPOSE

Slide 2 established:

**the system can have checkable context.**

Slide 3 establishes:

**the system visibly checks that context before asking the human, and new human information becomes inspectable context afterward.**

This is NOT another comparison slide.

Do not use tabs.

Do not use the Slide 2 fake cursor.

Do not show “with context / without context.”

## VISUAL CONTINUITY

Reuse the approved HERA/Iris chat styling from Slide 2.

Reuse the yellow sticky-note visual language, but evolve the single note into a small **inspectable context drawer / file holder**.

The visual should feel like the next chapter of Slide 2, not a different design system.

Keep:

* black rounded animation canvas;
* no border around the canvas;
* no internal title/header bar;
* no explanatory caption;
* ambient explanatory motion only.

## COMPOSITION

Approximately:

* left 60% of animation = conversation
* right 40% = context drawer

### Context drawer

Create a small vertical holder containing several partially stacked notes.

Examples:

1. `we were talking about Ibiza`
2. `user wants a Return trip`
3. they `Prefere Quiet` flights
4. maybe one partially hidden note underneath
5. feel free to choose better notes that simply convey what we mean by context to a 1 year old

One additional note may be partially hidden.

Do not turn this into dashboard cards.

It should visually read as a small collection of inspectable saved context.

## ANIMATION SEQUENCE

Start with the existing saved context visible in the drawer.

User:

**“Hey, I'd like to plan a trip back there again.”**

Before Iris answers, visibly show the system inspecting existing context.

Use a restrained **eye/read treatment**:

* a simple thin SVG eye appears near `Destination — Ibiza`;
* eye blinks once;
* a subtle scanning/highlight motion travels across the Ibiza note;
* the relevant note may lift a few pixels while being inspected.

Do NOT use a giant emoji eye.

Do NOT add text saying “AI IS CHECKING CONTEXT.”

The animation itself explains that.

Then Iris responds:

**“Back to Ibiza? Who are you travelling with?”**

Then user responds:

**“My mum.”**

Immediately afterward, a new sticky note should slide smoothly into the context drawer:

**Travelling with**
Mum

The newly added note may receive one brief settled/check highlight.

## WHAT THIS MUST COMMUNICATE

At a glance:

1. the system already has stored information;
2. it checks that information before interrupting;
3. it asks only for information it genuinely does not know;
4. the user's new answer becomes durable, inspectable context.

That is the trust model.

Do not explain those four points with extra labels in the animation.

Show them.

## TIMING

Do not make the hiring manager wait through a long cinematic sequence.

The complete idea should become understandable quickly.

Suggested rhythm:

* existing context visible immediately;
* user message appears;
* context inspection happens;
* Iris response appears;
* user answer appears;
* new `Mum` note joins the drawer;
* final state rests long enough to inspect;
* loop gently if the existing carousel animation architecture requires looping.

No typewriter animation.

## DO NOT TOUCH

* Slide 1 visual/copy
* Slide 2 visual/copy
* About page outside this carousel
* Sections 02 onward
* HERA pages
* Ubisoft Work

The only shared carousel correction allowed is converting the actual carousel from the accidental 4-slide model to the canonical **5-slide model/count**.

## RETURN

Browser-render and verify Slide 3.

Return:

1. full screenshot of Slide 3 in the page;
2. close screenshot of its animation;
3. confirmation carousel now recognizes 5 total slides;
4. stop for Favour review.

Do not begin Slide 4.

---

## Slide 2 is good — lock it

* Yep. **This one works.** The idea is readable almost immediately: same conversation, but inspectable context changes the quality of the next question.
* The sticky note works much better than generic `CONTEXT` blocks because it makes the invisible thing tangible.
* The automatic tab/cursor behavior is useful rather than decorative.
* **Do not redesign Slide 2 now.** Lock it.
* Only obvious correction: the footer still says **`2 / 4`**. The actual carousel is **5 slides**, so this must become `2 / 5`. The agent was right not to invent the fifth slide without instruction; now we explicitly add it.

The sequence is permanently:

**1/5 The HERA story → 2/5 What I questioned → 3/5 What I realized → 4/5 The product decision → 5/5 What that changed.**

---

## Slide 3/5 — what it needs to prove

This one is subtly different from Slide 2.

Slide 2 says:

**“The product should be able to check what it already knows.”**

Slide 3 says:

**“I need evidence that it actually checked before it bothers me.”**

That difference is important.

Keep your exact original copy:

**2 — What I realized**

**The bottleneck was not simply model intelligence. It was trust. I needed to know that when the AI interrupted me, it had already checked the information I had given it and genuinely needed something only I could decide.**

No extra “an interruption should earn…” sentence. No trust repeated three times.

### Visual

Reuse the **With checkable context** visual language from Slide 2 so this feels like a continuation rather than a brand-new infographic.

But:

* remove the tabs;
* remove the fake cursor;
* no comparison state;
* now we watch **one context-aware interaction**.

I want the right side split approximately:

**conversation ~60% / context drawer ~40%**

The context area should now evolve from one sticky note into something that reads more like a **small inspectable memory drawer**.

Not six dashboard cards.

Think a little vertical file holder with 3–4 overlapping notes peeking from it.

Visible notes can include:

* `we were talking about Ibiza`
* `user wants a Return trip`
* they `Prefere Quiet` flights
* maybe one partially hidden note underneath
* feel free to choose better notes that simply convey what we mean by context to a 1 year old

The point is: **there is stored context the system can inspect and a human could audit.**

Then animate a small eye/read indicator over the relevant note.

Not a giant literal 👁️ emoji.

Something elegant:

* thin eye SVG;
* blink;
* small scanning glow travels across `Destination — Ibiza`;
* the note lifts 2–3px while being read.

Then conversation:

`YOU`
**Hey, I'd like to plan a trip back there again.**

The context drawer visibly checks `Ibiza`.

`IRIS`
**Back to Ibiza? Who are you travelling with?**

Then:

`YOU`
**My mum.**

And immediately a **new note slides into the drawer**:

`Travelling with`
**Mum**

That last motion is important because it shows this is not merely “AI has memory.”

It's:

**context is inspectable → context is used → new meaning becomes durable context.**

That is the interesting system-design idea.

---

## Then the remaining arc is clean

* **1 — burden:** my brain was carrying system state.
* **2 — questioning:** why can't the product inspect what I already gave it?
* **3 — realization:** I need to see that it actually checks before asking me.
* **4 — product decision:** move stable work/context out of the human brain and into inspectable product structure.
* **5 — consequence:** HERA stops being “better chat” and becomes **rough intent → structured work → human only when genuinely needed**.

That is now one actual argument rather than five random AI-design principles.

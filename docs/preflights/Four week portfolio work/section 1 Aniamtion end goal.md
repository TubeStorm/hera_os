
## Yes — reset this section, and build **one slide at a time**

* The carousel mechanic itself is fine. The preview proves manual navigation works and scroll hijacking is gone. 
* The failure now is **art direction + hierarchy**, not interaction.
* I agree with every big correction you made:

  * **left = original copy**
  * **right = visual**
  * section heading stays visually dominant
  * slide header is small
  * the bold explanatory line is a **bold paragraph**, not another giant heading
  * body text stays body text
  * **NO animation-box border**
  * **NO mini-header inside the animation box**
  * **NO explanatory word salad inside the visual**
  * black rounded animation canvas
  * motion is ambient/illustrative, not another story the user has to wait through
* And yes: we should build **Slide 1 only first**. The last two attempts prove that building all the animations before locking the basic visual grammar wastes time. Once Slide 1 looks right, slides 2–5 inherit the exact shell.

The first two slides of the current carousel are structurally functional but visually doing exactly what you're describing: the slide headline is competing with the actual section hierarchy, then the visual repeats the same story again in text. 

---

# The visual system is now this

Every carousel slide uses the **same fixed composition**:

**LEFT ~42%**

`small slide header`

**bold paragraph / insight**

normal paragraph

**RIGHT ~58%**

black rounded animation canvas
no border
no internal title
no caption explaining what you're looking at

The carousel arrows sit outside that pair:

**←   [COPY] [VISUAL]   →**

The parent section above remains exactly:

**01**

## How do you find the real problem?

I usually start by asking one thing: **what is the user carrying that the product should be carrying instead?**

That heading must be **larger than anything inside the carousel**.

### Typography hierarchy

* `How do you find the real problem?` = actual section heading, largest.
* `The HERA story` = small eyebrow/header.
* `I thought the problem was...` = bold paragraph, around 20–24 px, **not H2/H3-sized**.
* remaining copy = normal body, around 16 px.

That fixes the ridiculous header-within-header-within-header situation.

### Icons

For the brain, use the official **Lucide Brain** icon. It is the kind of stylized line SVG we want, not a medical illustration, and Lucide lets the builder copy the SVG directly. ([Lucide][1])

For later human/AI visuals:

* human = **Lucide CircleUserRound** or a proper profile silhouette, never an empty circle. ([Lucide][2])
* AI = **Lucide Bot**, which reads immediately as AI instead of our mystery sparkle square. ([Lucide][3])

No more “is this circle supposed to be a person?” 😭

---

# The five visuals

### Slide 1 — The HERA story

**COPY — exactly yours**

**The HERA story**

**I thought the problem was managing agents. It turned out the problem was everything I had to remember for them.**

AI agents could already ask questions, use tools, and work for long periods. But I was still remembering which file was current, what I had already decided, what another agent had learned, which version had been reviewed, and whether I had answered the same question before.

HERA started because I kept feeling that exact problem while working with AI.

**VISUAL**

Do **not** show AI working.

The whole point of this visual is:

> **my brain was functioning as the system's memory and project manager.**

Center:

large Lucide brain icon.

It gently pulses like stress:

* tiny scale pulse;
* faint warm/red glow expands/contracts;
* nothing cartoonish.

Around it, 6 real thought bubbles float slowly like the chat fragments on the HERA homepage:

* `What sprint are we on?`
* `Which subagent owns that slice?`
* `What context is still missing?`
* `Did I already share the last build closeout?`
* `What did the verifier approve?`
* `Which file is the current version?`

These float independently around the brain.

No arrows.

No labels.

No boxes explaining them.

No “ME.”

No “AI WORKING.”

The user looks at it for half a second and understands:

**this person's head is holding the system together.**

That's all Slide 1 needs.

---

### Slide 2 — What I questioned

**COPY — exactly yours**

**1 — What I questioned**

Why should an intelligent product keep asking me to act as its memory? If I already told a friend I went to Ibiza, I expect the next useful question to be “who did you go with?”, not “where did you travel?”

**VISUAL**

You're right: the concept is **not Ibiza**.

Ibiza is simply our controlled example for:

**uncheckable context vs checkable context.**

At the top of the visual:

two understated tabs:

`WITHOUT CHECKABLE CONTEXT`

`WITH CHECKABLE CONTEXT`

A small fake cursor periodically switches between them.

No user interaction required.

#### Without context

Use the HERA/Iris chat bubble aesthetic.

`YOU`

> I went to Ibiza.

`AI`

> That's cool. Did you enjoy your trip?

Then a simple divider:

**5 HOURS LATER**

`YOU`

> Hey, I'd like to plan a trip back there again.

`AI`

> Where would you like to travel?

That's the failure.

#### Cursor switches → With checkable context

Same beginning:

`YOU`

> I went to Ibiza.

`AI`

> That's cool. Did you enjoy your trip?

But beside the conversation there is now a small **context drawer / note area**.

A sticky note visibly appears:

`Destination`
**Ibiza**

5 HOURS LATER.

`YOU`

> Hey, I'd like to plan a trip back there again.

The `Ibiza` note gives a tiny highlight/check motion.

Then:

`AI`

> Back to Ibiza? Who are you travelling with?

Done.

The hiring manager understands the difference without reading an essay.

The tab can gently cycle every ~5 seconds. It should not type every sentence character by character. The messages exist; the context behavior is what moves.

---

### Slide 3 — What I realized

**COPY — exactly yours**

**2 — What I realized**

The bottleneck was not simply model intelligence. It was trust. I needed to know that when the AI interrupted me, it had already checked the information I had given it and genuinely needed something only I could decide.

And yes — you're right that my previous added line just said **trust twice while contributing absolutely nothing**. Gone.

**VISUAL**

Continue the exact same travel scenario.

No toggle this time.

Show:

conversation on the left.

Small **context drawer** on the right.

The drawer should feel like a little filing cabinet / stack of inspectable notes — not abstract rectangles.

A few partially visible notes:

* `Destination — Ibiza`
* `Trip type — return trip`
* other saved-context notes partially stacked behind

An **eye icon** appears on the `Ibiza` note.

It gently blinks once.

That tells us:

**the AI is checking existing context.**

Then:

`AI`

> Back to Ibiza? Who are you travelling with?

`YOU`

> My mum.

A new note slides into the drawer:

`Travelling with`
**Mum**

That is the actual trust model.

Not:

> trust trust trustworthy trusted trust.

The visual proves:

**I can see what the system knew, see it use that information, and see new information become inspectable context.**

Way more interesting.

---

### Slide 4 — The product decision

**COPY — exactly yours**

**3 — The product decision**

Make context part of the product, not something hidden inside a prompt. Decisions, files, previous work, accepted results and ongoing tasks should have stable places the system can inspect and the human can audit.

**VISUAL**

This is where your “brain is calmer” idea works perfectly.

### Left

Brain again.

But now:

* gentle green/neutral glow;
* slower pulse;
* only light ordinary human thoughts floating around it.

Things like:

`What shoes should I pack?`

`Mum would love a boat day.`

`Should we book dinner somewhere nice?`

These are **human thoughts**, not system-state chores.

### Right

Lucide Bot above a clean six-slot context cabinet.

The drawer categories reflect the actual original copy, while the notes make them concrete:

**DECISION**
`Destination: Ibiza`

**PREFERENCE**
`Travelling with: Mum`

**FILE**
`Flight shortlist.pdf`

**PREVIOUS WORK**
`Hotel research`

**ACCEPTED RESULT**
`Budget agreed`

**ONGOING TASK**
`Compare flights`

This is much stronger than my generic `CONTEXT / STATE / HISTORY / WORK / EVIDENCE` blocks.

Because now the hiring person understands:

> Oh. The human thinks about the trip. The software holds the fucking admin.

Exactly.

---

### Slide 5 — What that changed

**COPY — exactly yours**

**4 — What that changed**

HERA became less about “a better chat” and more about an operating environment for work: the person can arrive with rough intent, the system turns it into structured work, and interruptions only happen when the human genuinely matters.

That is usually how I work: I follow the friction until I can describe the burden the user should never have been carrying in the first place.

**VISUAL**

I think the clearest animation is:

### Rough intent → organized work → one meaningful question

On the left of the black canvas is one loose human note:

> I want to go back to Ibiza with my mum sometime this fall. Somewhere quiet. I don't want to plan every detail.

It is intentionally messy and informal.

Then, without the human filling out anything, pieces subtly reorganize themselves to the right:

**GOAL**
Plan Ibiza trip with Mum

**KNOWN**

* Ibiza
* Mum
* quiet trip

**WORK**

* compare flights
* shortlist hotels
* draft itinerary

Then one tiny question travels back toward the human/profile icon:

> Which week works for your mum?

That is it.

This animation explains the entire sentence:

**rough intent**
→ system creates structure
→ AI continues working
→ human only gets pulled in for genuinely human information.

No Room.

No Objective.

No Goal shell.

No HERA vocabulary whatsoever.

A recruiter understands it instantly.

And it completes the narrative started in Slide 1:

**BEFORE:** your brain holds the system together.

**AFTER:** you provide intent and judgment; the system carries the workflow.

---
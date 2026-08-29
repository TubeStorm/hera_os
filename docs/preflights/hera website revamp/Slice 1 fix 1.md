> **STATUS:** 🟡 IN PROGRESS
> **Date:** 2026-08-28
> **Reason:** Chief Coordinator started the Slice 1 repair. Active packet: `docs/agent-system/work-packets/active/SLICE-1-REPAIR-SCROLL-CINEMATIC.md`.
> **Resolved ambiguity:** the doc contradicted itself on the final locked line. Favour confirmed 2026-08-28 — the final resting line is **"Stop managing your AI. Start giving it work."**, superseding "You lead. HERA keeps up." in the Scene 8 landing paragraph and in the acceptance test.



### HERA HOMEPAGE SLICE 1 REPAIR

The current Slice 1 implementation at commit `c8b6467` is **not accepted**.

Do not polish the existing choreography.

The underlying concept has been misunderstood and needs to be replaced.

Keep reusable assets and any sound infrastructure, but remove the superseded timed animation behavior rather than leaving two competing implementations.

## Core interaction law

**The complete opening sequence is controlled by scroll progress.**
EVERYTHING IS TIED TO THE SCROLL YES, EVENT HE MATRIX WATERFALL. 

It must NOT autoplay.

No `setTimeout` choreography.

No millisecond `animation-delay` timeline deciding when the visitor has finished reading.

No independent timer cycling HERA statements.

The page should use a long sticky/pinned storytelling section. The viewport can remain visually fixed while scrolling advances the story.

Think of scroll position as a scrubber through a film.

If the visitor stops scrolling:

**the story stops advancing.**

If they continue:

**the next part progressively happens.**

Give each major beat generous scroll distance. Do not pack transitions so tightly that a normal wheel movement skips whole ideas.

Desktop is the cinematic version.

Create a simpler vertical/mobile adaptation later within this same experience, but do not compromise the desktop concept to make that easier.

## Scene 1: begin with NOTHING explanatory

Remove the opening-sequence eyebrow:

`HERA OS`

Remove the opening headline:

`Your AI finished in 3 minutes.`

Do not tell the visitor the point before they experience it.

This instruction applies to the cinematic opening content, not the global navigation brand.

The opening viewport should feel like a simple AI chat environment.

No HERA introduction yet.

No marketing copy yet.

## Scene 2: the user asks for something stupidly small

At the bottom of the chat environment is a familiar composer:

* text input
* send button

The message is:

**Make a small change to the website**

Show that text being entered into the input as early scroll progress advances.

A visible cursor moves to the Send button.

The cursor clicks Send exactly once.

Then the cursor disappears.

The submitted message becomes a normal user speech bubble in the conversation.

This should feel immediately familiar to anyone who has used ChatGPT, Claude, Codex, etc.

Do not copy one provider's exact branded UI.

We want the recognizable interaction pattern.

## Scene 3: AI starts working

Show a small:

**Thinking...**

Then the answer begins appearing.

Use the long verbose answer already supplied for this prototype.

CRITICAL:

Do not dump the entire response onto the screen.

Do not rapidly type it by timer.

Reveal it progressively according to scroll.

The visitor must be able to read roughly the first two sentences and think:

> Jesus Christ, why is it talking this much?

before anything else starts interfering.

The prose should continue revealing after that.

The joke requires the AI to still be fucking talking while the next problem arrives.

And do NOT truncate the answer.

Remove the current `max-height:260px + overflow:hidden + mask` behavior that hides most of the text.

We deliberately need the excessive response to feel excessive.

## Scene 4: `.md` HELL begins

While the AI is STILL producing its ridiculous answer, `.md` files begin raining from above.

Use:

`D:\Documents\favour-ai-product-portfolio\docs\UI\home page\md_file.png`

Do NOT reuse the current randomly positioned `clutterDrop` behavior.

This is **Matrix-style digital rain translated into `.md` files.**

The reference concept is vertically falling streams in columns.

Build multiple vertical streams across the screen.

Each stream contains repeated `.md` file icons.

Under every icon is a realistic filename.

Example names:

`CURRENT-SPRINT.md`

`handoff.md`

`task-03-notes.md`

`decision-log.md`

`research.md`

`FINAL-final-v2.md`

`context-pack.md`

`roadmap-update.md`

`verification-notes.md`

`handoff-latest-REAL.md`

`fix-notes-final-final.md`

`source-of-truth.md`

add as may as needed we need it to fill the entier width of the screen and be raining down

The filenames should appear **directly underneath their icons like Windows Explorer.**

NO:

* pill
* filename card
* border
* rounded rectangle
* filename background
* box shadow
* random rotation

The file itself is the object.

The label is simply underneath it.

### Rain behavior

Use roughly 10 to 14 columns on large desktop.

Columns should:

* enter from above the viewport
* travel downward
* contain several file/icon units
* have different initial vertical offsets
* have different stream lengths
* have slightly varied scroll-movement rates
* end at uneven heights
* progressively become denser

At first:

one or two streams.

Then more.

Then:

**holy fucking shit why are there `.md` files everywhere?**

The files must pass OVER the AI answer. as it is stillr ednign AS THE USER SCROLLS.

The user should literally begin losing the verbose response behind the file rain.

That is the metaphor.

The AI is still producing information while its artifacts are physically burying the information.

Do not add decorative screen shaking, vignette drama, or random “chaos” effects as a substitute for executing this idea properly.

The rain itself is the chaos.

## Scene 5: clear the garbage

After the `.md` rain reaches its absurd peak:

fade the AI conversation and rain away.

Do not introduce HERA yet.

We now move into the human's internal spiral.

## Scene 6: one thought at a time

Use ONE centered user-style speech bubble.

Same position every time.

Never scatter these around the screen.

Never show several simultaneously.

As scroll progresses, show one thought.

Give it generous scroll space.

Fade it out.

Then replace it in exactly the same position.

Suggested sequence:

**Did I send the right file?**

then

**Is this source current?**

then

**Where did it save that?**

then

**Wait. What task are we on?**

then

**STOP MAKING NEW BRANCHES.**

Keep the tone increasingly frantic.

Do not rush these.

A normal slow scroll should let someone comfortably read each one more than once before replacing it.

Because this is scroll-controlled, do not assign a number of seconds to a thought.

Assign it a meaningful range of scroll progress.

## Scene 7: NOW summarize the pain

Only after the viewer has experienced the whole mess do we finally explain what they just watched.

Centered.

Large.

Start with this copy for the prototype:

**Your AI finished in 3 minutes.**

Then reveal:

**You spent the next 20 digging through 18 new `.md` files and begging it to explain itself.**

Let that land.

Do not immediately rush into HERA.

Give it real scroll space.

This is the punchline to everything before it.

## Scene 8: clear everything

Fade the pain statement away.

Return to a clean black field.

Then introduce HERA.

Use the authentic HERA logo already exported in the Asset Bridge.

Visual hierarchy:

small:

**Introducing**

then the largest typography on the screen:

**HERA**

No `#` before HERA.

Then medium:

**You lead.**

Below / continuing from that statement, use the HERA promises.

These are also controlled by scroll.

No timer.

One statement gets replaced by the next after enough scroll travel to actually read it.

Use the current product-message pool as temporary copy, but prioritize specific language rather than vague slogans.

The sequence can currently use:

**You lead. It remembers what you already said.**

**You lead. It knows what happens next.**

**You lead. It knows where everything went.**

**You lead. It keeps the work together.**

**You lead. It stops when it actually needs you.**

Then land permanently on:

**You lead. HERA keeps up.** <--- Not this , use this ----> **Stop managing your AI. Start giving it work.**  

At the end of the entire scroll sequence, the visitor should visually be left reading:

**Introducing**

# HERA

**You lead. HERA keeps up.**

This final state remains.

Then provide the normal visual cue to continue down the page.

## Remove the current wrong behaviors

Specifically remove/replace:

* autoplay-on-load choreography
* millisecond-delay choreography
* opening `HERA OS` eyebrow
* opening pain headline before the demonstration
* static USER / AGENT card
* final `😨 or 🫩` fake user reply
* truncated AI response
* random absolute `.md` positions
* `.md` rotation
* filename pills/cards/borders
* file bounce/pop entrance
* scattered thought labels
* simultaneous accumulated thoughts
* automatic rotating HERA copy
* `# HERA`

Do not preserve wrong code because it already exists.

## Acceptance test

This repair fails if:

* I can sit still and the story keeps advancing
* the AI response is already sitting there when I arrive
* there is no composer + send interaction
* the full response is artificially clipped
* `.md` files pop into random spots
* `.md` files do not visibly travel downward in columns
* the streams form a tidy even rectangle at the bottom
* filenames have little UI containers around them
* the rain does not eventually obscure the response
* several panic thoughts appear simultaneously
* the panic thoughts move to different locations
* HERA appears before the problem sequence is complete
* the HERA promises rotate while I am not scrolling
* the final state does not land on `Introducing / HERA / You lead. HERA keeps up.`

Before presenting the repair, WATCH the entire experience as a visitor from top to bottom.

Do not verify this from source code and screenshots alone.

Slice remains:

**BUILT + VERIFIED, WAITING FOR FAVOUR REVIEW.**

Do not begin Iris.

---

## One small art-direction thing I think you absolutely nailed

The change from:

**“Here is a hero statement, now let me demonstrate it.”**

to:

**“Experience the problem first. NOW I'll tell you what just happened.”**

is much better.

Because the visitor goes:

AI chat 🙂
Why is it still talking 😐
Why are there files 😭
WHERE DID EVERYTHING GO
STOP MAKING NEW BRANCHES
...

then:

**Your AI finished in 3 minutes.
You spent the next 20 digging through 18 new `.md` files and begging it to explain itself.**

And only THEN:

**Introducing
HERA**

That is a fucking reveal.

Use **Sonnet Medium for this repair**. The creative decision is now extremely explicit. Opus would be wasted money unless Sonnet still somehow returns “six tasteful files fading into view.”

[1]: https://en.wikipedia.org/wiki/Digital_rain "https://en.wikipedia.org/wiki/Digital_rain"




# more context you must read and follow any actionalable for you
## Yes. I checked the pushed build. It is structurally the wrong experience.

* The current component literally says **“Autoplays once per page load”** and drives files/thoughts with millisecond delays. That is the opposite of your new requirement that **scroll controls the entire story**.
* It opens with `HERA OS` and **“Your AI finished in 3 minutes.”** before the visitor has experienced anything. You want no thesis yet. The visitor should first live through the stupid AI interaction, then earn that sentence later.
* It is not actually a chat interaction. It renders `USER`, the user message, `AGENT`, the entire answer, and even a final user emoji inside one static card. There is no input, send button, cursor click, thinking state, or answer being produced.
* The `.md` files are eight individually positioned objects that **pop/drop into random coordinates and rotate**. That is absolutely not Matrix rain.
* Worse, the filenames are inside little bordered pills with backgrounds and shadows. You explicitly wanted **Windows Explorer behavior: icon, filename directly underneath, nothing else.**
* The thoughts appear around the screen and accumulate. You want the exact opposite: **one centered speech bubble, same location, swap one thought for the next.**
* The HERA reveal currently uses `# HERA` and then automatically cycles its promises. You want `Introducing` → huge `HERA` → scroll-controlled `You lead...` statements → final locked `You lead. HERA keeps up.`

And I found exactly why you asked **“why didn't it put the entire message?”**

It explicitly set the answer area to:

* `max-height: 260px`
* `overflow: hidden`
* a gradient mask fading the bottom away

So yes. **The implementation intentionally cuts the fucking response off.** 😂

This is not a “tweak the pacing” repair. I would tell it to **replace the choreography.**

---

# What “Matrix rain” means, precisely

I checked the reference because I want the agent to stop interpreting this creatively.

The Matrix digital-rain effect is characterized by **vertical streams flowing downward in columns**. It is kinetic typography, not objects randomly popping into positions. ([Wikipedia][1])

For HERA, replace the characters with `.md` files.

So imagine 10 to 14 invisible vertical lanes across desktop:

`↓ lane 1      ↓ lane 2      ↓ lane 3`

📄
`roadmap.md`

📄
`handoff.md`

📄
`context.md`

then the next row follows underneath, and the entire stream is moving downward.

The important visual properties:

* columns
* downward continuous travel
* several files within each column
* different column starting heights
* different stream lengths
* slightly different movement rates
* deliberately uneven lower edges
* some columns already far down while others are still entering
* the files pass **over** the AI answer and increasingly obscure it

Your little diagram is actually an excellent reference:

`📁📁📁📁📁📁📁📁📁📁📁📁`
`📁📁📁📁📁📁📁📁📁📁📁📁`
`📁📁📁📁📁📁📁📁📁📁📁📁`
`📁📁📁📁   📁📁    📁📁📁`
`📁📁📁📁   📁📁    📁📁`
`📁    📁`

**THAT.**

Not “eight files entered the viewport with a cute bounce.”



---

## Yes. The closeout reveals 6 things worth adding

* The biggest one: **do not let the repair accidentally undo the scroll-lock bug fix** they found while building Slice 1.
* The repair should start from the now-pushed `portfolio-week1` commit **`c8b6467`**. That commit contains the current wrong choreography plus some legitimate infrastructure/mobile/nav fixes we want to preserve.
* Early Access is **not actually on `portfolio-week1`**. So the repair must not waste time trying to preserve, recreate, or merge it. That is a future branch-integration task.
* Reduced motion was never live-proven. Since we are replacing the entire animation model anyway, make reduced motion part of THIS repair's acceptance criteria rather than carrying forward the old unverified implementation.
* BUG-004, the clutter/HERA crossfade, becomes irrelevant because we're replacing that transition. Tell it to close BUG-004 only after the new scroll-controlled clear-to-HERA transition is visually proven.
* The current slice packet was already moved to `closed/`. This is a **repair/new revision**, not permission to silently edit history and pretend original Slice 1 passed.

## Add this Git + scope addendum

Paste this near the beginning of the task you already copied:

**Repair baseline**

This repair begins from the pushed `portfolio-week1` commit:

`c8b6467dadb3eefaa60abac2fa6d424888f9905b`

The existing Slice 1 implementation has useful fixes mixed with incorrect choreography.

Preserve unless directly incompatible with the new design:

* current HERA nav branding work
* mobile nav overflow fix
* current responsive filename legibility fixes where reusable
* the existing demo-section scroll-lock repair that fixed users becoming trapped when scrolling back upward
* existing repository workflow/browser-testing improvements

Replace rather than preserve:

* `OpeningFailureSequence.astro`'s autoplay choreography
* random clutter positioning
* timer-driven phase changes
* current opening copy structure
* current static AI response presentation
* current scattered thoughts
* current automatic HERA promise rotation

Do not revert the entire commit just because the hero direction changed.

## Add this Early Access boundary

This matters because its previous task assumptions were wrong:

**Early Access branch truth**

The previous closeout verified that the enhanced Early Access implementation is currently on `main`, not on `portfolio-week1`.

Therefore this repair must:

* NOT merge `main` into `portfolio-week1`
* NOT port Early Access
* NOT recreate Early Access
* NOT treat its absence from this branch as a Slice 1 defect
* preserve any existing generic navigation destination if present, but do not solve the funnel in this repair

Early Access branch integration is a separate future slice.

That will stop Sonnet from going:

> “Oh no! Missing feature! Let me casually merge main.” 😭

## Add these interaction protections

I would append these to the acceptance section:

**Scroll behavior protections**

* The opening cinematic may pin the viewport while the visitor scrolls through its internal story.
* Once the final HERA state has been reached, scrolling must naturally continue into the existing content below.
* Scrolling backward must scrub/reverse or revisit the opening sequence without trapping the user.
* The existing demo section below must retain its current working scroll behavior.
* Test entering the demo, scrolling backward into the HERA opening, then downward again at least twice.
* Refresh from the top must begin at the initial empty chat state.
* Refresh while the browser restores a mid-page scroll position must not leave the opening in an impossible visual state.
* Do not use scroll wheel hijacking that consumes input indefinitely after the relevant pinned section has ended.

That last one is important because their closeout says the previous implementation exposed a real “scroll back out and get permanently trapped” bug.

## And I would lock these two visual decisions now

I don't think we need to ask the agent again.

**Canvas**

Make the entire opening cinematic **black regardless of light/dark system theme**.

Why? This is no longer a standard website hero. It's an authored product film. Matrix `.md` rain, chat, the clear-out, then the gold HERA reveal all benefit from one controlled canvas.

After the cinematic ends, the rest of the site can return to its normal theme behavior.

**Reduced motion**

Do not just turn every animation off and dump the final HERA screen on people.

For reduced motion, preserve the story in **discrete scroll-controlled states**:

* composer
* sent message
* thinking
* verbose response
* accumulated `.md` field without falling motion
* sequential thoughts
* pain statement
* HERA reveal

So accessibility does not delete the actual marketing argument.

And this time it needs real browser proof if an available transport can emulate `prefers-reduced-motion`. If no available transport can, the closeout must say exactly that again rather than calling it verified.

## Tiny final addition: the closeout itself

Tell it:

**This is Slice 1 Revision / Repair.**

Do not overwrite the historical closeout as though the first design was accepted.

Create a new active repair packet / closeout according to the portfolio workflow, reference the original Slice 1 closeout, and explain:

> Original Slice 1 was technically built and verified but rejected by Favour because the interaction concept did not match the intended experience.

That distinction is actually useful project history. This wasn't “bad CSS.” It was **we built the wrong product interaction faithfully**.

Everything else in the repair prompt you copied is good.

So add those four chunks and unleash Sonnet. The actual design direction is now absurdly specific. If it gives us floating `.md` cards again after this, I am personally filing charges.

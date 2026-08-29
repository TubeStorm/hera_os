

# Task 0 passed. One thing we deliberately ignore for now

* Logo: **READY NOW**
* Iris walk toward viewer: **READY NOW**
* Iris idle: **READY NOW**
* All four walk/idle directions: **READY NOW**
* Black Void background: **READY NOW**, and hilariously it is actually what HERA itself uses, not us cheaping out.
* Random 20-character roster: technically ready but **do not touch yet** because of the LimeZu distribution question. We do not need it for the hero anyway.

The public site will eventually need the LimeZu credit if Iris ships. Fine.

I would **not** authorize exporting all 20 raw roster sheets right now. There is zero reason to take even mild licensing risk before the crowd section exists.

When we reach that section, we can decide whether to use generated composites, a smaller derived set, or another solution.

---

# Now use Sonnet. Slice 1 only.

This is sufficiently bounded now that **Sonnet is the correct model**.

Give this to the **portfolio Chief Coordinator**, not the HERA Chief:

### TASK: HERA homepage revamp, Slice 1, opening failure sequence + HERA reveal

Work in:

`D:\Documents\favour-ai-product-portfolio`

Branch:

`portfolio-week1`

This is the portfolio project. Do not inspect or modify the separate HERA application repository.

### Read before doing anything

Follow this repository's normal workflow beginning with:

`D:\Documents\favour-ai-product-portfolio\AGENTS.md`

Then the canonical project truth/design documents it requires.

For the design direction for this homepage specifically, read:

`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Current Idea`

Treat that as the current product/art direction.

Then read the new HERA bridge:

`D:\Documents\favour-ai-product-portfolio\docs\preflights\hera website revamp\Task 0\HERA Asset Bridge\00 READ ME.md`

and:

`D:\Documents\favour-ai-product-portfolio\docs\preflights\hera website revamp\Task 0\HERA Asset Bridge\05 PORTFOLIO SHOPPING LIST.md`

For this slice specifically, also use:

`D:\Documents\favour-ai-product-portfolio\docs\UI\home page\md_file.png`

### Critical boundary

Build **ONLY the opening homepage sequence through the first HERA reveal**.

Do not build Iris.

Do not build the coordination section.

Do not build the demo section.

Do not build the crowd/footer-agent system.

Do not redesign Early Access yet.

Do not decide the rest of the homepage while implementing this slice.

The point of slicing this work is that Favour reviews the actual experience before the next piece exists.

### Small site-shell correction

Update the main navigation so the HERA-facing homepage no longer presents Favour as the site brand.

Current left identity using `Favour Diokpo` should become:

`[real HERA logo] HERA OS`

Use the real exported logo documented in the Asset Bridge.

Favour's identity belongs in About, not as the homepage product logo.

Preserve the existing navigation destinations.

Preserve Early Access functionality. Do not redesign that funnel in this slice.

### Experience we are building

The opening thought is:

**Your AI finished in 3 minutes.**

But finishing the AI response is not actually where the work ends.

The page should progressively become overwhelmed by the secondary work a person has to manage around the AI.

This should feel like an actual experience happening to the visitor, not an infographic explaining AI problems.

### Phase 1, apparent success

Begin clean and controlled.

The user sees the AI completing useful work extremely quickly.

Use the verbose response material already prepared in the `Current Idea` source as temporary content where appropriate.

Do not polish temporary prose into fake marketing claims.

The important thing is the feeling:

AI did the task.

Fast.

Great.

Then reality starts.

### Phase 2, the mess starts multiplying

Markdown documents begin appearing.

Use the exact asset:

`docs/UI/home page/md_file.png`

Each `.md` file must have a realistic filename displayed beneath it in the visual language of Windows Explorer.

Examples can include things like:

`CURRENT-SPRINT.md`

`handoff.md`

`task-03-notes.md`

`decision-log.md`

`research.md`

`FINAL-final-v2.md`

The filenames should feel recognizable to someone doing large AI-assisted projects.

They must not all appear simultaneously.

The clutter needs pacing.

One file is nothing.

Then another.

Then another.

Then suddenly there is too much shit.

### Phase 3, human context begins fighting for attention

While documents accumulate, short human thoughts begin surfacing.

Use extremely short lines.

Examples of the intended category:

`Did I give it the right file?`

`Is that still current?`

`Where did it save that?`

`Wait. We already did this.`

`Which task are we on?`

`Why did it make another branch?`

`STOP MAKING NEW BRANCHES.`

Do not show all of these merely because they are listed here.

Art-direct the sequence.

The point is escalation.

The AI answer itself should increasingly become harder to attend to because managing the work around the answer has become the actual job.

### Phase 4, breaking point

The screen should reach a point where the opening success has become visually ridiculous.

Documents.

AI output.

Context questions.

Project-management noise.

The visitor should understand the problem before HERA says a single word.

Do not add an explanatory paragraph telling them what they just saw.

### Phase 5, clear it

Then clear the mess decisively.

Not a lazy fade into another normal website section.

It should feel like the page regains control.

Introduce the real HERA logo from:

`docs/preflights/hera website revamp/Task 0/HERA Asset Bridge/exports/logo/`

Then:

# HERA

And cycle through:

**You lead. It remembers the project.**

**You lead. It keeps the work moving.**

**You lead. It knows where the work lives.**

**You lead. It keeps decisions attached.**

**You lead. It asks when the decision is yours.**

Land on:

**You lead. HERA keeps up.**

Do not turn these into five feature cards.

They are one evolving statement.

### Visual direction

The existing site is intentionally dark and restrained.

Do not suddenly turn this into a generic SaaS gradient homepage.

The chaos should come from the **behavior and objects**, not from throwing decorative graphics everywhere.

Use the real design system already present in the portfolio.

The `.md` files should feel physical and intrusive enough that their accumulation matters.

Typography must remain readable throughout motion.

Animation should have deliberate timing and hierarchy.

Respect reduced-motion preferences.

Desktop is the main cinematic experience, but mobile must have an authored adaptation rather than merely shrinking desktop.

### Shopping list for this slice

Before implementation, explicitly verify:

* HERA logo: AVAILABLE
* `.md` icon: AVAILABLE
* temporary AI response content: AVAILABLE from Current Idea
* current portfolio typography/design tokens: AVAILABLE
* Iris: NOT REQUIRED
* Void: NOT REQUIRED
* character generator: NOT REQUIRED
* waitlist crowd: NOT REQUIRED

If something in this list is unexpectedly unavailable, stop that dependency rather than inventing a replacement.

### Verification

This is a visual interaction slice.

Follow the repository's Design Execution Standard.

Browser-test the actual sequence.

Inspect the saved screenshots yourself.

Test at minimum:

* large desktop
* typical laptop width
* mobile
* reduced motion
* refresh / replay behavior if the animation can replay

Watch the whole sequence from beginning to HERA landing state, not merely a screenshot of the final frame.

Fix obvious pacing, overlap, clipping, legibility, z-index, and responsive defects before presenting it.

### Completion state

When built and independently verified, this slice is:

**BUILT + VERIFIED, WAITING FOR FAVOUR REVIEW**

It is not complete until Favour watches it.

Give Favour a clickable local URL.

Do not begin Slice 2.

---


* The whole bridge is now **inside the portfolio repo on `portfolio-week1`**, at:

  `D:\Documents\favour-ai-product-portfolio\docs\preflights\hera website revamp\Task 0\HERA Asset Bridge`

* Git has all six bridge docs plus the exports folder.

* Your `.md` Explorer icon is also there now at:

  `D:\Documents\favour-ai-product-portfolio\docs\UI\home page\md_file.png`

* So YES, from now on the portfolio people **stay in the portfolio repo**. They should not go spelunking through actual HERA unless the bridge explicitly says `NEEDS HERA WORK`.

* The bridge itself literally says that is its purpose: future portfolio agents should read this handoff instead of reverse-engineering HERA again.

And that Iris proof is fucking perfect for what we need. Front-facing walk + front idle are the important ones. We do not need to map 40 animations just to make a homepage.

---
Replace the current Section 01 scroll/sticky interaction with the attached carousel version:

`about-section-01-carousel.zip` "D:\Documents\favour-ai-product-portfolio\docs\UI\about-section-01-carousel"

Read `CAROUSEL_HANDOFF.md`.

Replace only:

`src/components/about/ProblemFindingStory.astro`

Do NOT try to repair the existing scrollytelling version.

The new interaction is intentionally simple:

* one manual four-slide carousel;
* each slide contains:

  * small header;
  * large header;
  * short summary;
  * one contained animation box;
* left arrow moves backward;
* right arrow moves forward;
* no left arrow on slide 1;
* no right arrow on slide 4;
* entering a slide restarts that slide's animation;
* keyboard left/right should also work.

Absolutely do not reintroduce:

* sticky panels;
* scroll-triggered slide changes;
* wheel interception;
* scroll locks;
* giant absolute-position canvases.

Do not rewrite the copy.

Do not modify About Sections 02–05.

Integrate this supplied file as-is first, render the result, and stop for Favour's review.

Do not perform a second design pass before she sees it.

# tldr - from favours planner: chatgpt

Yeah, **carousel is the right call**. The screenshot is useful because it makes the failure obvious: the first version was trying to make the page scroll *and* make a large internal stage tell its own story at the same time. Too many moving systems. The result is exactly what you're seeing: the stage disappears, objects overlap, and the visual becomes harder to understand than the copy.

I rebuilt Section 01 as the carousel you described.

"D:\Documents\favour-ai-product-portfolio\docs\UI\about-section-01-carousel"

It now works conceptually like this:

* **Slide 1 — The HERA story**

  * small: `The HERA story`
  * large: `I thought the problem was managing agents.`
  * summary beneath
  * contained animation: **ME** accumulates five things to remember while **AI** calmly works.
* **Slide 2 — What I questioned**

  * Ibiza analogy
  * earlier answer gets stored
  * stupid duplicate question appears/fades
  * useful unanswered question replaces it.
* **Slide 3 — What I realized**

  * question enters
  * Decisions / Files / Previous Work / Conversation / Accepted Result get checked
  * only if unresolved does the path reach **YOU**.
* **Slide 4 — The product decision**

  * Human retains **Intent + Judgment**
  * Product takes **Context + State + History + Work + Evidence**.

And the interaction is now dead simple:

**← [content + animation] →**

No left arrow on the first slide.
No right arrow on the last slide.
No scroll logic.
No sticky anything.
No wheel hijacking.
Clicking into a slide restarts its animation.

I also made the geometry far more boring on purpose. Each animation box uses contained grids/flex layouts rather than throwing fifteen absolutely-positioned objects around a giant canvas. We can add elegance after it is stable.

Give the builder this:

Replace the current Section 01 scroll/sticky interaction with the attached carousel version:

`about-section-01-carousel.zip`

Read `CAROUSEL_HANDOFF.md`.

Replace only:

`src/components/about/ProblemFindingStory.astro`

Do NOT try to repair the existing scrollytelling version.

The new interaction is intentionally simple:

* one manual four-slide carousel;
* each slide contains:

  * small header;
  * large header;
  * short summary;
  * one contained animation box;
* left arrow moves backward;
* right arrow moves forward;
* no left arrow on slide 1;
* no right arrow on slide 4;
* entering a slide restarts that slide's animation;
* keyboard left/right should also work.

Absolutely do not reintroduce:

* sticky panels;
* scroll-triggered slide changes;
* wheel interception;
* scroll locks;
* giant absolute-position canvases.

Do not rewrite the copy.

Do not modify About Sections 02–05.

Integrate this supplied file as-is first, render the result, and stop for Favour's review.

Do not perform a second design pass before she sees it.

Once it renders, send me **one screenshot of slide 1 and one of slide 2** first. If those two feel right, the rest should be much easier to tune.

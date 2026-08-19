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


read this too -> "D:\Documents\favour-ai-product-portfolio\docs\preflights\Four week portfolio work\tldr - from favours planner chatgpt.md"
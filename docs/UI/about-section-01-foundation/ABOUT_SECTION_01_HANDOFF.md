# About Section 01 — Visual Foundation Handoff

## Purpose

Integrate the supplied visual foundation for:

**01 — How do you find the real problem?**

Do NOT redesign the rest of About yet.

The interaction already encodes the intended story:

1. **Burden** — AI works while the human accumulates context and workflow state.
2. **Question** — the Ibiza analogy distinguishes an already-known answer from a genuinely unanswered question.
3. **Trust** — the product checks existing context before an interruption may reach the human.
4. **Transfer** — context/state/history/work/evidence move into the product; the human retains intent and judgment.

This is meant to visualize **how Favour thinks**, not demo HERA UI.

## Integration

Copy:

`src/components/about/ProblemFindingStory.astro`

into the same path in the portfolio repo.

In `src/pages/about.astro`, add:

`import ProblemFindingStory from '../components/about/ProblemFindingStory.astro';`

Delete ONLY the current Section 01 block beginning with `01 / How do you find the real problem?`

Replace it with:

`<ProblemFindingStory />`

Leave Section 02 onward untouched.

## Interaction law

- Natural scrolling only.
- No wheel/touch interception.
- No scroll lock.
- No Continue arrows.
- Visual stays sticky while the short narrative copy passes.
- Scrolling upward reverses the state.
- Mobile must not trap scrolling.
- Respect reduced-motion.

This intentionally differs from the HERA homepage, which uses hard scroll gates.

## Motion law

Every motion must explain meaning:

- accumulating objects = the human is carrying state;
- a remembered fact lighting up = answer already exists;
- context checks = the system looked first;
- only the unresolved path reaching YOU = interruption earned;
- objects settling into PRODUCT = responsibility moved into software.

Do NOT add generic AI particles, neural blobs, spinning gradients, gratuitous 3D, random cursor theatrics, or motion unrelated to the sentence being explained.

## Copy law

The substance is approved. Do not corporate-polish it.

Preserve these anchors:

- “what is the user carrying that the product should be carrying instead?”
- “I thought the problem was managing agents. It turned out the problem was everything I had to remember for them.”
- the Ibiza analogy
- “The bottleneck was not simply model intelligence. It was trust.”
- “Make context part of the product, not something hidden inside a prompt.”
- the closing principle about the burden the user should never have been carrying

If the visual makes a sentence redundant, copy may be shortened — not replaced with jargon.

## Builder job

First integrate this foundation AS IS and render it.

Then iterate only on observed issues:
- layout
- typography
- transition timing
- line geometry
- spacing
- visual density
- mobile behavior
- accessibility/browser robustness

Do not rebuild the concept from scratch before showing Favour a first render.

## First-pass acceptance

- normal About scrolling is untouched
- all four visual states activate
- upward scroll reverses them
- desktop copy + stage remain readable
- mobile does not trap the user
- reduced-motion is sane
- Section 02 onward is unchanged
- normal site build passes

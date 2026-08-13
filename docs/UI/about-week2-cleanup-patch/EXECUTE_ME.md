# EXECUTE ME — About Week 2 Cleanup

## Repo
`D:\Documents\favour-ai-product-portfolio`

## Branch
Use existing `portfolio-week1`.

Do NOT create a branch.
Do NOT create a worktree.
Do NOT merge to `main`.

## Source of truth
The current Git branch is up to date.

This ZIP is a surgical content/design patch for About Sections 02–05 only.

## CRITICAL LOCK
Do NOT touch:
`src/components/about/ProblemFindingStory.astro`

Section 01 and its five-slide carousel are locked for this task.

## Action
Open:
`src/pages/about.astro`

Find the complete block beginning with Section `02`:
`How do you decide what the AI should do — and what the product should enforce?`

and ending immediately after Section `05`:
`Is this way of thinking specific to AI?`

Replace ONLY those four sections with:
`ABOUT_SECTIONS_02_05_REPLACEMENT.astro`

Do not replace:
- About hero
- Section 01 / ProblemFindingStory
- “What I want to work on next”
- “Explore the work”

If the replacement block contains a `<style>` tag, keep it directly after Section 05 and before the existing “What I want to work on next” section.

## Intended changes

### 02
Keep the software rules / AI judgment / human judgment framework.
Delete the redundant “A very unglamorous example / More AI was not the fix” story.
Do not add a replacement example.

### 03
Replace both old bug cards with the authority-aware HERA case:
- plausible wholesale prices silently settled an unresolved business strategy;
- assignment is execution authority, not decision authority;
- prove the architecture across wholesale pricing and B2B studio positioning.

Reference:
`references/HERA_AUTHORITY_AWARE_CASE_STUDY.md`

Do not add extra implementation jargon.

### 04
Keep the idea but simplify the presentation.
No animation.
No big bordered pair of cards.

Important Favour visual requirement:
- background is BLACK;
- `04` has NO ring, circle, pill, outline, card, or capsule around it;
- use simple blue dot + `04`;
- remove `"I know, crazy!"`.

### 05
Use common-language tool names:
- Staffing & resource planning platform
- Company-wide remote-work approval platform
- Hiring capacity decision support

Each example must explicitly answer the section question by showing the same systems question that appears in HERA.

Do not revert to vague headings:
- Resource planning
- Hybrid workplace approvals
- Capacity governance

## Design restraint
Do not turn 02–05 into another animation project.

Section 01 is the visual showcase.

For 02–05:
- prioritize readability;
- preserve black portfolio background;
- no new illustration system;
- no gradients;
- no giant new cards;
- no global redesign.

## Verify
Run production build.

Browser-check desktop and narrow/mobile:
- Section 01 untouched.
- 02 has no bottom example.
- 03 is one coherent authority-aware case.
- 04 is black and `04` has no ring.
- 04 has no `"I know, crazy!"`.
- 05 uses common-language Ubisoft tool names and explicit “Same systems question” lines.
- no unrelated pages changed.

## Closeout
Status after implementation:
`🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW`

Return:
1. plain-English summary;
2. desktop screenshots of 03, 04, 05;
3. one mobile screenshot of 04 or 05;
4. build result;
5. confirmation Section 01 was untouched;
6. stop.

Do not start Ubisoft Work.

# Slice 12: RPM Chapter 02 Evidence and Editorial Pass

## Status

NOT STARTED

## Objective

Turn the existing RPM Chapter 02 route into a credible, readable senior UX case-study chapter about how one staffing Request survives changing capacity, changing people, and changing time.

This is an implementation slice for the private portfolio only.

Primary route:

`D:\Documents\favour-private-work\src\pages\rpm\changing-need\index.astro`

Do not begin Chapter 03.
Do not redesign the overall portfolio shell.
Do not retire or repath HERA routes.
Do not deploy the private portfolio yet.

---

## Synchronize first

Before reading source or changing code, follow:

`D:\Documents\favour-ai-product-portfolio\docs\agent-system\REPO-SYNC-AMENDMENT.md`

Synchronize both repositories and protect unexpected local human changes.

Repositories:

- `D:\Documents\favour-ai-product-portfolio` -> `TubeStorm/hera_os`, canonical branch `main`
- `D:\Documents\favour-private-work` -> `TubeStorm/favour-private-work`, canonical branch `master`

---

## Read first

### Current portfolio implementation

- `D:\Documents\favour-private-work\src\pages\rpm\changing-need\index.astro`
- `D:\Documents\favour-private-work\src\pages\rpm\model\index.astro`
- `D:\Documents\favour-private-work\src\pages\rpm\index.astro`
- `D:\Documents\favour-private-work\src\layouts\CaseStudyLayout.astro`
- `D:\Documents\favour-private-work\src\styles\global.css`

Chapter 01 is the visual and editorial precedent. Match its design language, but do not copy its section rhythm mechanically.

### Canonical story material

- `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Ubisoft work_case 2&3 storyboard.md`
- `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Ubisoft work page discussion 1.md`

### RPM source material

Inspect only as needed:

`D:\Documents\Favour's Vault\HERA\portfolio building archives\more stuff\case studies\RPM`

Do not perform another broad RPM evidence audit. Search only for evidence required by this chapter.

---

## Chapter title

Keep the approved plain-English title:

**What happens when staffing needs change?**

Supporting line:

**Capacity changes, early departures, Split, and preserving history.**

Do not replace it with a vague conference-talk title.

---

## Core story

Chapter 01 simplified RPM around one user-facing Request.

Chapter 02 answers the next problem:

**If one Request represents the staffing need, how does that need survive when reality changes?**

The chapter should prove Favour can reason about:

- state over time
- continuity and history
- edge cases
- product semantics
- contextual intervention
- technical scope
- reducing concepts rather than adding UI

This is not a feature gallery.

---

## Editorial rule: make the page shorter than the current draft

The current route has too many separate sections that repeat the same idea.

Collapse the story into approximately 6 to 7 strong narrative beats.

Recommended structure:

### 1. The staffing need changes over time

Start with one concrete example:

A Request begins at 100% capacity, later becomes 50%, then 20%.

Question:

**How can one Request change without rewriting its own history?**

Use a clean designed timeline or capacity diagram as the opening visual.

Do not open with a long abstract essay.

### 2. Need Overrides preserve past, present, and future

Explain the product rules plainly:

- past values stay historical
- the current period reflects what is true now
- future periods can change
- periods cannot overlap
- edits affect the relevant dates, not the entire Request

Use real Need Override evidence if available and readable.

Strong known candidate from the RPM evidence set:

`Screenshots/rpm new request modal - need override.png`

Search briefly for a better current Need Override crop or related settings breakdown only if it materially improves comprehension.

If no better evidence is immediately available, use the known screenshot plus a custom explanatory diagram.

Do not waste time hunting for the perfect image.

### 3. The person can leave while the staffing need remains

Use a concrete scenario, for example:

A frontend developer's assignment ends three months early. The employee leaves. The project still needs a frontend developer.

Distinguish three cases visually:

- person leaves early and time remains -> staffing need survives
- mandate ends normally and no time remains -> staffing need ends
- person leaves temporarily -> a gap exists, then the need resumes

This is the turning point from simple capacity editing to continuity of the Request itself.

### 4. The system should notice the moment the need becomes uncertain

Explain the residual-need trigger at the action where RPM can infer something meaningful changed.

Example flow:

Close Request early -> remaining need detected -> ask whether the role is still needed -> create or continue the linked need

Key design principle:

**Do not make users remember a separate workflow when the system already knows the relevant moment.**

Keep this short.

### 5. We almost added another concept

Show the false start:

Create Draft was explored, but Engineering challenged what new capability it actually provided.

If it was effectively a cloned Request plus preserved need and dates, and Split already required those capabilities, a new concept was unnecessary.

Core line:

**A new button was not a new capability.**

Use real evidence only if it can be found quickly. Otherwise make a simple designed before/after:

Before: Split / Duplicate / Create Draft
After: Split / Duplicate

Do not fabricate Figma or fake source artifacts.

### 6. Split and Duplicate mean different things

This is the strongest semantic decision in the chapter.

Explain plainly:

- Split carries lineage
- Duplicate creates an independent copy

Use a custom diagram:

Request A -> Split -> Request B, relationship retained

Request A -> Duplicate -> Request C, no relationship

Then explain the MVP technical scope:

- one parent to one child
- parent and child reference each other through History
- avoid an expensive arbitrary family-tree visualization before the value is proven

Do not present this as shipped unless source evidence supports that status.

### 7. Make the new Request findable after the split

End on interaction quality rather than another abstract principle.

Use the known evidence:

`Screenshots/Split feedback toast copy.png`

Explain the problem:

The child Request may sort somewhere else in a large table, so simply placing it under the parent would break sorting behavior.

Show the practical response where supported:

- preserve sorting
- make the new Request findable
- improve feedback
- link old and new Request where supported by the source

Then bridge to Chapter 03:

Now RPM can preserve a staffing need through change. The next question is when the system should warn, recover, or enforce a decision.

---

## Evidence discipline

Use real artifacts to prove the work happened. Use designed diagrams to make the reasoning understandable.

Known high-value evidence candidates:

1. Need Override UI
   - `Screenshots/rpm new request modal - need override.png`
2. Split feedback
   - `Screenshots/Split feedback toast copy.png`
3. Any immediately available Need Override rules/settings evidence that clearly shows date or state behavior

Do not copy an entire confidential source directory into the private repo.

Copy only the few assets actually used by Chapter 02 into an appropriate private-route asset folder.

Do not add internal evidence to `hera_os`.

---

## Status honesty

This chapter contains work at potentially different maturity levels.

Do not apply one blanket `Shipped` label to the entire chapter.

Before adding a status label, verify whether the source supports:

- Shipped
- Implemented
- Proposed
- In validation
- Design direction

Known caution:

Residual Need, Split lineage scope, and related continuation behavior may include design-direction or validation work rather than fully shipped production behavior.

When uncertain, use neutral wording rather than inventing a maturity claim.

---

## Copy standard

Write for an intelligent recruiter or product leader who has never seen RPM.

The reader should understand each section on first read.

Avoid:

- repeated explanations of “preserving history”
- abstract design language when a concrete example works
- generic senior-UX phrases
- jargon without explanation
- long paragraphs
- em dashes or en dashes in visible portfolio copy
- unnecessary “this mattered because” filler
- repeating the same conclusion after every diagram

Prefer:

problem -> decision -> tradeoff -> consequence

The seniority should come from the decisions, not from complicated wording.

---

## Visual standard

The current portfolio shell is intentionally minimal. Build on it rather than redesigning it.

Chapter 02 should feel like the same portfolio as Chapter 01, but it should not become a wall of bordered cards.

Be critical of:

- too many boxes
- excessive blue accents
- decorative labels
- giant empty vertical gaps
- repeated section heading + paragraph + card patterns
- diagrams that look like generic dashboard widgets
- evidence that is technically present but too small to read

Favor:

- strong editorial spacing
- large evidence at the moments where proof matters
- restrained custom diagrams
- concise captions
- clear before/after or state relationships

Do not perform a portfolio-wide polish pass in this slice.

---

## Implementation boundaries

Primary implementation repo:

`D:\Documents\favour-private-work`

Primary route:

`src/pages/rpm/changing-need/index.astro`

Supporting files may be changed only when necessary for the chapter, for example shared case-study styles or selected private assets.

Do not:

- modify Chapter 03 content
- redesign the Work landing page
- migrate more routes
- change HERA navigation
- retire old HERA URLs
- configure hosting or authentication
- expose Ubisoft screenshots publicly
- create fake impact metrics

---

## Verification

Run the private portfolio locally and verify the actual rendered page.

At minimum check:

- `/rpm/changing-need/` at 1280px
- `/rpm/changing-need/` at 390px
- top navigation
- chapter title and metadata hierarchy
- every real screenshot is legible
- every custom diagram is understandable without reading source code
- no horizontal overflow
- no broken images
- no visible em dash or en dash in the Chapter 02 experience
- previous/next or chapter navigation resolves correctly
- bridge to Chapter 03 works
- production build succeeds

Open the screenshots you capture and actually inspect them.

Do not call screenshot capture alone “visual verification.”

---

## Critical review before closeout

Before declaring the slice ready, review the page like a hiring manager.

Ask:

- Do I understand the problem in under 20 seconds?
- Does every section add a new idea?
- Is there anywhere I would stop scrolling because the page is repetitive?
- Can I tell what Favour personally decided?
- Can I see where Engineering constraints changed the product scope?
- Is Split vs Duplicate instantly understandable?
- Are any status claims stronger than the evidence?
- Is there anything that looks like portfolio filler?

Cut or rewrite weak material before closeout.

---

## Closeout

Report:

- exact narrative beats retained
- sections merged or removed from the original draft
- evidence assets added
- custom diagrams created
- status claims and the source supporting each
- deliberate placeholders that remain, if any
- desktop result
- mobile result
- production build result
- remaining weaknesses you still see
- final commit SHA for `favour-private-work`
- final synchronization state for both repositories

Start the private portfolio dev server yourself and give Favour a clickable review URL.

Stop at:

`BUILT + VERIFIED: WAITING FOR FAVOUR REVIEW`

Do not begin Chapter 03.
status: done

# Slice 9 prompt

Send Antigravity this:

## Slice 9: RPM Chapter 01 Evidence + Editorial Pass

We are continuing the private Ubisoft portfolio in:

`D:\Documents\favour-private-work`

GitHub:

`TubeStorm/favour-private-work`

This repository must remain **private**.

Slice 8 is complete. Do not revisit the overall route architecture unless something is actually broken.

The current protected RPM structure is:

* `/`
* `/rpm/`
* `/rpm/model/`
* `/rpm/changing-need/`
* `/rpm/decision-authority/`

This slice works **only on `/rpm/model/`**.

Do not begin Chapter 02 or Chapter 03.

---

## Read first

Use these as the canonical editorial sources:

`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Ubisoft work_case 1 storyboard.md`

`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Ubisoft work page discussion.md`

RPM source material:

`D:\Documents\Favour's Vault\HERA\portfolio building archives\more stuff\case studies\RPM`

Numa evidence synthesis:

`D:\Documents\Favour's Vault\02. The Career\Job Applications\Numa\Numa - evidence`

Also inspect the current implementation of:

`D:\Documents\favour-private-work\src\pages\rpm\model\index.astro`

Do not rewrite the story from scratch.

The chapter storyboard is already approved. The goal now is to turn it into a convincing, recruiter-readable case study using the strongest known evidence and deliberate diagrams.

---

## Human outcome

A senior design leader, PM, or AI product hiring manager should be able to understand:

* what RPM is
* why Position versus Request was a real product-model problem
* how recurring research exposed it
* why the initial three-mode solution was rejected
* why one staffing need became one Request
* why Position could not simply be removed from the backend
* how the product model changed without demanding a giant backend rewrite
* how one conceptual decision propagated through the rest of the system
* what structurally changed for the user

The page must prove:

* research synthesis
* product-model thinking
* system behavior design
* Engineering collaboration
* legacy constraint handling
* judgment
* willingness to discard an initially reasonable solution

Do not add sections named things like “Systems Thinking” or “Engineering Collaboration.”

The story itself should prove those qualities.

---

## Evidence priority

Do **not** perform a giant asset audit.

Use the known high-value evidence first.

### Evidence 1: legacy Position vs Request

Use:

`RPM UAT_with positon & request_postion toggled.png`

and

`RPM UAT_with positon & request_request toggled.png`

Purpose:

Show that the same staffing need was exposed through two different user-facing system objects, interfaces, and action sets.

This should support the beat:

**Two interfaces. Two sets of actions. One staffing need.**

Present them side by side if readable.

Crop or frame them carefully if needed.

Do not distort the screenshots.

---

### Evidence 2: Request-only result

Use:

`RPM SQA_ new_ no positon_ only request.png`

Purpose:

Show the structural before/after.

Legacy:

Position + Request exposed to the user

New:

Request-only planning model

This is one of the chapter's strongest proof moments.

---

### Evidence 3: Position removal impact map

Use:

`2026 positon removal_ miro proof.png`

Purpose:

Show that removing Position from the user experience was not “hide a tab.”

It affected a broad product surface.

This visual should be large.

The viewer does not need to read every node.

Its job is to communicate scale and propagation.

If helpful, create a few restrained zoom callouts around the image for categories such as:

* creation
* editing
* settings
* permissions
* reporting
* history
* copy
* legacy behavior

Do not turn it into an unreadable annotation explosion.

---

### Evidence 4: strongest current Request UI

Search the known RPM material briefly for the strongest polished current Request or New Request screen.

If an obvious strong image appears quickly, use it.

If not, **leave the existing deliberate placeholder**.

Do not spend significant time searching for the perfect final screenshot.

---

## Recreate these visuals instead of hunting for screenshots

Some story beats are better served by clean diagrams.

Build these directly in the site's visual language.

### Diagram A: mental model

Before:

`Staffing need → Position → Request`

After:

`Staffing need → Request`

Include a subtle technical note:

`Position remains underneath for legacy system behavior`

This should be extremely simple.

---

### Diagram B: Engineering reality

Show conceptually:

User-facing RPM
↓
Request

Then underneath / behind it:

Position
Legacy IDs
History
Reporting
Business rules

Purpose:

Explain that Position disappears from the user's job without necessarily disappearing from the architecture.

Avoid technical architecture jargon that a recruiter would not understand.

---

### Research exhibit

Use the grounded research figures already present in the storyboard.

Keep 2024 and 2025 visibly separate.

Do not merge their respondent counts or metrics.

Current approved framing includes:

2024:

* ~92 respondents
* Project Management among least satisfied groups
* ease of use around 2.7/5

2025:

* ~90 participants
* Position vs Request became the largest Production dislike category
* 18 comments specifically pointed to the distinction

If the source material contains 2 or 3 clear anonymized comments about Position versus Request and they can be found quickly, add them.

If not, leave the research exhibit quantitative only.

Do not fabricate quotes.

---

## Editorial pass

The page currently follows the approved beats.

Preserve the sequence:

1. What RPM is
2. The problem looked like usability
3. What users were being asked to understand
4. My first solution was wrong
5. Reframing the product
6. Engineering reality
7. One product decision touched everything
8. What changed for the user
9. The result
10. bridge to Chapter 02

Now improve the actual reading experience.

### Pacing rules

* Avoid giant text walls.
* Use short narrative sections.
* Let evidence carry the story whenever possible.
* Some sections should be almost entirely visual.
* Not every section needs a box.
* Avoid repetitive card layouts.
* Avoid “UX case study template” rhythm.
* Avoid excessive pills.
* Avoid KPI dashboards.
* Avoid repeating the same conclusion in different wording.
* Remove anything that feels like portfolio filler.

The reader should be able to skim the page and still understand the major decisions.

### Visual hierarchy

Make these moments feel especially important:

**My first solution was wrong**

**We were giving users three different ways to manage the same broken mental model.**

**A user does not have a Position and a Request. They have a staffing need.**

**How do we remove Position from the user's job without requiring Engineering to remove Position from the architecture?**

**The backend constraint survived. The user's mental model did not have to.**

These should not all use the exact same component treatment.

Use editorial variation.

---

## False-start section

This is one of the strongest senior-design moments.

If the actual three-mode Position / Simple / Detail exploration can be found quickly, use the real artifact.

If it cannot be found quickly:

Keep a deliberate placeholder describing exactly what belongs there.

Do not invent fake Figma screens.

The story around it must remain:

* the concept initially seemed reasonable
* different users appeared to need different levels of complexity
* lighter flows could hide fields
* advanced users could retain control
* deeper flow work revealed that the solution preserved the broken product model
* the direction was discarded

Keep the existing **Discarded** state if useful.

---

## Outcome/status accuracy

Audit the current `Shipped` label.

Do not let a single status imply that every idea described in Chapter 01 shipped.

Determine what is actually grounded.

Potentially separate:

* Request-centered model
* Position removal from the user experience
* specific supporting interaction changes
* later extensions

Only use:

* `Shipped`
* `Implemented`
* `Proposed`
* `In validation`

when directly supported by source evidence.

If a status is uncertain, do not guess.

Leave it unlabeled or add a clearly unresolved placeholder for Favour to confirm.

Do not fabricate impact percentages.

Strong structural outcomes are enough:

* 2 exposed staffing concepts → 1 user-facing model
* Position logic preserved underneath
* legacy history / dependencies retained
* Request becomes the user-facing object
* the rest of the product can now reason from one consistent staffing model

---

## Security boundary

This repository is private, but this slice should still remain disciplined.

Do not add unrelated confidential Ubisoft material.

Only use the evidence needed for Chapter 01.

Do not copy entire Jira exports or research repositories into the site.

Do not expose unnecessary names, employee information, project names, IDs, emails, or confidential data.

If an image needs redaction before safe portfolio use, leave it as a placeholder and flag it for Favour instead of committing it raw.

No client-side fake password.

Authentication remains a later deployment concern.

---

## Do not touch

Do not redesign:

* `/rpm/`
* `/rpm/changing-need/`
* `/rpm/decision-authority/`
* the public HERA portfolio
* `TubeStorm/hera_os`
* `TubeStorm/hera-os`

Do not begin actual Chapter 02 content.

Do not begin actual Chapter 03 content.

Do not create Work Arrangement or Famous pages in this private repo.

---

## Verification

After implementation:

Verify `/rpm/model/` at:

* desktop around 1280px
* mobile 390px

Check:

* evidence images remain readable
* before/after comparison works
* no screenshot overflows
* long Miro visual can be understood
* headings have strong hierarchy
* diagrams are readable
* no giant dead whitespace
* no excessive scrolling caused by weak content
* previous/back navigation works
* next chapter CTA works
* no fabricated evidence
* no accidental confidential material
* production build passes

Also inspect the entire page from top to bottom as a recruiter.

Ask:

* Do I understand RPM before product jargon appears?
* Do I understand the Position / Request problem visually?
* Is the false start memorable?
* Is Favour's product decision obvious?
* Is the Engineering constraint understandable to a non-engineer?
* Does the Miro evidence demonstrate scale without becoming noise?
* Does the result feel credible without fake metrics?
* Would I keep scrolling?

If the answer to any is no, fix the page before closeout.

---

## Closeout

Return:

* desktop full-page or major-section screenshots
* mobile screenshots
* exact evidence assets added
* diagrams created
* placeholders still remaining
* any evidence that needs Favour to locate/edit/redact
* exact status claims used and what source justified each one
* anything you deliberately cut from the storyboard and why
* production build result

Status:

`BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW`

Stop after Chapter 01.

Do not proceed into Chapter 02 without Favour review.



----



# chatgpt conversation


# Perfect. Slice 8 is exactly the right stopping point

* I checked the **actual private GitHub repo** too. I can read `TubeStorm/favour-private-work` while it is private.
* Chapter 01 is already substantially laid out from our storyboard, including the research beat, legacy model, false start, Request reframing, Engineering constraint, Miro propagation map, before/after, outcome and bridge to Chapter 02.
* So we are **past architecture now**.
* Your reorganized source docs are much cleaner too:

  * `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Ubisoft work page discussion.md`
  * `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Ubisoft work_case 1 storyboard.md`
  * `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Ubisoft work_case 2&3 storyboard.md`

I would officially consider **Slice 8 closed**.

# Slice 9 should be Case 01 only

* Do **not** immediately flesh out Cases 02 and 03.
* We should make Chapter 01 excellent first because it establishes the visual grammar for everything after it.
* The goal is no longer "fill every placeholder."
* The goal is:

  * replace the **highest-value evidence**
  * turn conceptual placeholders into deliberate diagrams
  * cut any portfolio-y filler
  * make the narrative feel fast even though the thinking is deep
  * prove that the final visual rhythm works before duplicating it twice

If Case 01 is great, Cases 02 and 03 become much cheaper.

---

# We only need four real evidence pieces for the first pass

This is where I want to save time.

### Real evidence 1: Legacy Position vs Request

We already have these:

* `RPM UAT_with positon & request_postion toggled.png`
* `RPM UAT_with positon & request_request toggled.png`

Use them for:

**Two interfaces. Two sets of actions. One staffing need.**

This is probably the strongest visual explanation of the original problem.

### Real evidence 2: Request-only result

We already have:

* `RPM SQA_ new_ no positon_ only request.png`

Use it for the major before/after.

Legacy two-object UI → new Request-only UI.

### Real evidence 3: Position removal map

We already have:

* `2026 positon removal_ miro proof.png`

Make this huge.

This proves the work wasn't "remove a tab."

### Real evidence 4: strongest new Request UI

We can probably use either the final Request interface or a crop from the current Request modal.

If we can't immediately find the perfect one, **leave that final placeholder alone for now**.

Everything else can be designed.

That means we **do not need to hunt for nine screenshots**.

---

# The other visuals should be recreated, not sourced

* **Research**

  * create a clean editorial research exhibit from the grounded numbers.
  * 2024 and 2025 remain visibly separate.
  * optionally add anonymized quotes later.
* **Three-mode false start**

  * if the real Figma/Miro is immediately available, use it.
  * if not, leave the labelled placeholder. Do not waste 40 minutes searching.
* **Before/after mental model**

  * custom diagram:
  * `Need → Position → Request`
  * becomes
  * `Need → Request`
* **Engineering reality**

  * custom architecture diagram:
  * user interacts with Request
  * Position persists underneath
  * legacy dependencies remain.
* These recreations may actually communicate the thinking **better** than raw screenshots.

That's the balance I want throughout this portfolio:

**real artifacts prove it happened; designed diagrams make the reasoning understandable.**

---

# One thing I already want changed during Slice 9

Chapter 01 currently ends with a hard-coded **`Shipped`** marker.

Before we polish, Antigravity should verify exactly what that status applies to.

We know the Request-only product exists in newer evidence, but I don't want a single `Shipped` pill accidentally implying that **every element described in the chapter** shipped if some pieces were proposed, implemented later, or still validating.

Better pattern may be:

* main Request-centered model: **Shipped / Implemented**, whichever is accurate
* specific later evolutions: label independently when needed

No portfolio inflation. The actual thinking is strong enough.

---

# So next Antigravity instruction

I would call this:

**Slice 9: RPM Chapter 01 Evidence + Editorial Pass**

Its mission:

* work **only** on `/rpm/model/`
* use the three known screenshots + Miro map first
* create the simple conceptual diagrams itself
* leave lower-value missing evidence as polished placeholders
* inspect at desktop and mobile
* aggressively watch page length and pacing
* do **not** begin Chapter 02
* finish with screenshots of the entire chapter so **you and I can actually critique the page as a recruiter would**

That last part matters. Our next review should stop being about files and route architecture.

I want to look at **the actual fucking case study** and ask:

**Would I keep scrolling? Do I understand what Favour discovered? Is the senior decision obvious? Is anything boring?**

Then we tune it.

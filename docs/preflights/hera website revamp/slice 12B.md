# Slice 12B: RPM Chapter 02 Visual Replacement + Shared Case Footer

**Status:** NOT STARTED

## Purpose

Replace the temporary HTML/Tailwind diagrams in RPM Chapter 02 with Favour's finished visual assets, add proper image fullscreen viewing, simplify the chapter-to-chapter CTA, and move the case-study contact CTA out of the article body into the actual site footer.

This is a focused correction/polish slice. Do not rewrite the Chapter 02 narrative unless required for the explicit changes below.

Primary implementation repo:
`D:\Documents\favour-private-work`

Source asset directory:
`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2`

Execution/workflow repo:
`D:\Documents\favour-ai-product-portfolio`

Before work, follow:
`D:\Documents\favour-ai-product-portfolio\docs\agent-system\REPO-SYNC-AMENDMENT.md`

---

## 1. Sync first

Before reading or changing implementation:

1. Inspect `git status` in both repos.
2. Do not overwrite, reset, or discard unexpected human changes.
3. In `D:\Documents\favour-ai-product-portfolio`, use canonical branch `main` and pull latest `origin/main`.
4. In `D:\Documents\favour-private-work`, use canonical branch `master` and pull latest `origin/master`.
5. If either pull is unsafe because of local divergence or dirty human work, stop and report the conflict instead of improvising.

---

## 2. Current Chapter 02 implementation to modify

Primary page:
`D:\Documents\favour-private-work\src\pages\rpm\changing-need\index.astro`

Shared layouts/components likely involved:
`D:\Documents\favour-private-work\src\layouts\CaseStudyLayout.astro`
`D:\Documents\favour-private-work\src\layouts\BaseLayout.astro`
`D:\Documents\favour-private-work\src\components\MediaFrame.astro`

Important existing capability:
`MediaFrame.astro` already supports image zoom on a black backdrop with an X button and Escape-to-close. Reuse or carefully extend this instead of creating a second lightbox system.

Do not blindly keep its current default 16:9 crop if that damages the supplied artwork. The supplied images should preserve their intended aspect ratio on the page and in fullscreen.

---

## 3. Asset rule

Favour has already created the visual assets. Use the PNG and MP4 exports as the actual portfolio evidence.

Do **not** use the `.html`, `.tsx`, or `.svg` source files for these replacements unless a PNG/MP4 is genuinely unusable. The HTML/TSX files were only used to create the screenshots and are harder for portfolio visitors to inspect or zoom.

Copy the required finished assets into an appropriate protected/private portfolio path such as:
`D:\Documents\favour-private-work\public\rpm\changing-need\`

Use clean production filenames if helpful, but preserve which numbered asset maps to which section.

Do not move proprietary assets into `hera_os`.

---

## 4. Replacement map

### 01. Hero

REMOVE the entire temporary generated hero diagram containing:

- `A concrete scenario`
- `100% Capacity / Jan - Apr`
- arrow
- `50% Capacity / May - Aug`
- arrow
- `20% Capacity / Sep - Dec`

Replace that whole visual with:

`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\1 hero image.png`

Source-only file that should not be embedded:
`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\1 hero image.html`

The PNG becomes the hero evidence. Do not wrap it in another fake diagram/card UI.

---

### 02. Need Overrides

Current page currently shows the old static `need-override.png` above the caption:

`The Need Override interface preserving historical periods while allowing future edits.`

Replace that old static visual with **two videos, stacked vertically, not side by side**:

1. `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\2 Need drawer edit mode.mp4`
2. `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\2 Need drawer open_close.mp4`

Requirements:
- Stack them vertically.
- Keep them wide enough to read.
- Use normal video controls and `playsinline`.
- Do not autoplay with sound.
- Preserve the current surrounding copy unless visual fit requires a tiny caption adjustment.

---

### 03. Departure scenarios

REMOVE the temporary three-row HTML/Tailwind object containing:

- `Person leaves early, time remains`
- `Mandate ends prematurely`
- `Staffing need survives`
- `Mandate ends normally, no time remains`
- `Contract completed as planned`
- `Staffing need ends`
- `Person leaves temporarily`
- `Parental leave, sick leave`
- `Gap exists, need resumes`

Replace the whole generated object with:

`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\3 Departure Scenarios.png`

---

### 04. Remaining-need flow

REMOVE the temporary HTML/Tailwind flow:

`Close Request early → Remaining need detected → "Still need this role?" → Create linked Request`

Replace it with:

`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\4 flow_concepts.png`

Do not embed:
`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\4 flow_concepts.html`

---

### 05. Feature consolidation / Create Draft removed

REMOVE the current generated Before/After object showing Split Request, Duplicate Request, and crossed-out Create Draft.

Replace it with **two finished images stacked vertically, not side by side**:

1. `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\5 feature_consolidation_graphic.png`
2. `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\5 new split modal.png`

Do not use the HTML/SVG source versions:
`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\5 feature_consolidation_graphic.html`
`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\5 new split modal.svg`

---

### 06. Split vs Duplicate

REMOVE the generated Split / Duplicate diagram currently built from boxes and connector lines.

Replace it with:

`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\6 split_vs_duplicate_final_concepts.png`

Do not embed:
`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Portfolio images\chapter 2\6 split_vs_duplicate_final_concepts.html`

The existing plain-language technical/MVP explanation can remain if it still adds information not already obvious from the visual.

REMOVE the pill/status label:
`Design direction / validation`

It is unclear, visually noisy, and does not help a recruiter understand the case.

If the scope caveat still needs to be expressed, use plain language in the prose instead, for example:
`For the MVP, we scoped the design to one parent Request and one linked child Request.`

Do not replace the removed pill with another badge.

---

### 07. Make the new Request findable after the split

The copy beginning:

`Make the new Request findable after the split`

and ending with the explanation about preserving sorting rules and linking old/new Requests is correct for now.

Favour is still creating the final visual for this section and will provide it later.

**Do not invent a new diagram, screenshot, or placeholder in this slice.**

Leave the existing evidence untouched for now unless it is technically broken. This section will receive a separate media replacement when Favour supplies the final asset.

---

## 5. Fullscreen / zoom behavior for still images

Every still image used as Chapter 02 evidence in this slice must be inspectable.

Required behavior:

1. On the page, image displays at a useful readable size and preserves its intended aspect ratio.
2. Cursor/interaction should make it clear the image can be opened.
3. Clicking the image opens a full-screen black backdrop.
4. The image is shown as large as possible while remaining contained in the viewport.
5. White/visible close `X` in the top-right.
6. Clicking the backdrop closes when appropriate.
7. Escape closes.
8. Body scroll is locked while open and restored on close.
9. Keyboard accessibility must not regress.

Prefer reusing/extending:
`D:\Documents\favour-private-work\src\components\MediaFrame.astro`

Do not create several separate lightbox implementations per image.

Videos may use native browser fullscreen controls. Do not force the image-lightbox treatment onto video unless it is clearly needed.

---

## 6. Simplify the Chapter 03 link

At the end of Chapter 02, KEEP this existing closing sentence exactly unless there is a technical reason not to:

**Now RPM could preserve a staffing need through change. The next question is when the system should warn, recover, or enforce a decision.**

The current button repeats too much:

`Next chapter: When should the system warn instead of block?`

Replace its visible label with only:

`Next Chapter →`

or the same meaning using a right-arrow icon plus `Next Chapter`.

Do not repeat the Chapter 03 title in the button. The paragraph already does the narrative work.

The destination remains:
`/rpm/decision-authority/`

---

## 7. Move the case contact CTA into the actual footer

Current `CaseStudyLayout.astro` renders a large article-level CTA card containing:

- `Want to talk through this?`
- `Happy to walk through decisions, trade-offs, and what comes next.`
- `Get in touch`
- `All cases`

This feels like footer information, not part of the case-study narrative.

### Required structural change

Remove this CTA block from the article body in:
`D:\Documents\favour-private-work\src\layouts\CaseStudyLayout.astro`

Render the same information as part of the actual footer region controlled by:
`D:\Documents\favour-private-work\src\layouts\BaseLayout.astro`

The current footer only contains:
`© 2026 Favour Diokpo`

### Important design rules

- The moved CTA must visually read as footer content, not as another case-study card.
- NO card background.
- NO enclosing rounded rectangle.
- NO border around the CTA block.
- Remove the heavy boxed/card treatment entirely.
- Keep the copyright information.
- Keep `Get in touch` and `All cases` usable.
- Keep responsive/mobile behavior clean.

Preferred architecture:
- Let `BaseLayout` own the real `<footer>`.
- Let case-study pages opt into the expanded footer CTA via a prop or named slot from `CaseStudyLayout`, so About/Other Projects/etc do not suddenly say `Want to talk through this?` unless explicitly intended.
- Avoid duplicating the same footer markup in Chapter 01, Chapter 02, and Chapter 03.

The footer should feel restrained and editorial. Typography and whitespace can create hierarchy. Do not replace the removed card with another decorative container.

---

## 8. Do not change in this slice

Do not:
- rewrite the Chapter 02 story wholesale
- begin Chapter 03
- redesign Chapter 01
- change HERA public-site navigation
- change deployment/authentication
- retire routes
- move private Ubisoft evidence into `hera_os`
- add extra visual diagrams because a section looks empty
- use the HTML/TSX source exports instead of the provided image/video evidence
- introduce new slogan/campaign work into the RPM case study

This slice is primarily visual replacement + shared case footer cleanup.

---

## 9. Verification

### Chapter 02 desktop
Verify at a normal desktop viewport, around 1280px:
- hero PNG replaces generated capacity blocks
- both Need drawer videos present and vertically stacked
- departure PNG replaces row cards
- flow PNG replaces generated flow boxes
- both feature-consolidation images present and vertically stacked
- split-vs-duplicate PNG replaces generated diagram
- `Design direction / validation` pill is gone
- final section remains intact pending Favour's later visual
- `Next Chapter →` is concise and links correctly
- no old generated object remains accidentally visible

### Fullscreen images
Click every new PNG:
- black backdrop
- full-size contained image
- X works
- Escape works
- backdrop close works appropriately
- scroll restores
- no crop destroys the image

### Mobile
Verify at 390px:
- no horizontal overflow
- images remain legible
- videos stack correctly
- controls usable
- footer CTA stacks cleanly
- fullscreen lightbox still usable
- Next Chapter CTA remains clear

### Shared case footer regression
Verify at minimum:
- `/rpm/`
- `/rpm/model/`
- `/rpm/changing-need/`
- `/rpm/decision-authority/`

Confirm the article-level contact card is gone from chapter pages and the CTA appears in the actual footer as intended.

Also spot-check:
- `/`
- `/about/`
- `/other-projects/`
- `/contact/`

Make sure the shared footer change did not create inappropriate case-specific CTA copy on unrelated pages.

### Build
Run the production build in `D:\Documents\favour-private-work`.

If `hera_os` is untouched, still confirm sync/status according to the repo-sync amendment.

---

## 10. Closeout requirements

Create a closeout in the normal `docs/closeout/` workflow containing:

- what visual objects were removed
- which numbered finished assets replaced them
- whether MediaFrame was reused or extended
- fullscreen interaction verification
- desktop verification
- 390px mobile verification
- shared footer change and regression check across all RPM routes
- production build result
- final branch + commit SHA for both repos
- anything intentionally deferred, especially the final `Make the new Request findable after the split` visual
- a short critical visual note if any supplied asset still feels too small, cropped, repetitive, or hard to read

Commit and push every changed repo.

Stop at:

`BUILT + VERIFIED: WAITING FOR FAVOUR REVIEW`

# Slice 11B: Build the Favour Portfolio Destination

## Status

NOT STARTED

## Purpose

Build the actual personal portfolio destination inside `favour-private-work` before changing HERA navigation or retiring any existing HERA routes.

The result should make the private portfolio capable of becoming Favour's main professional portfolio while HERA remains the HERA product site.

This slice is destination-first. Do not repath HERA yet.

## Repositories

Public HERA site:

`D:\Documents\favour-ai-product-portfolio`

GitHub:

`TubeStorm/hera_os`

Private portfolio:

`D:\Documents\favour-private-work`

GitHub:

`TubeStorm/favour-private-work`

Before doing anything else, follow `docs/agent-system/REPO-SYNC-AMENDMENT.md` and synchronize both repositories. Do not begin from stale local files.

## Read first

From `hera_os`:

- `docs/agent-system/CURRENT-SPRINT.md`
- `docs/agent-system/PROJECT-TRUTH.md`
- `docs/agent-system/OPERATING-CONTRACT.md`
- `docs/agent-system/REPO-SYNC-AMENDMENT.md`
- `docs/agent-system/DESIGN-EXECUTION-STANDARD.md`
- latest relevant file in `docs/closeout/`
- `src/components/Nav.astro`
- `src/pages/about.astro`
- `src/pages/work/lineage.astro`
- `src/pages/contact.astro`
- `src/pages/work/ubisoft/index.astro`
- `src/data/site.ts`

From `favour-private-work`:

- current site shell and navigation
- current Work landing
- current RPM overview
- all current RPM chapter routes
- current shared styles and components

## Strategic architecture

We are moving toward two clear experiences.

### HERA site

Eventually:

- HERA OS
- Deep Dive
- Portfolio
- Join early access

Do not implement this final HERA navigation in this slice.

### Favour portfolio

This slice should establish:

- Work
- About
- Other Projects
- Contact

The portfolio should use the same visual family as HERA, especially the floating pill navigation, spacing discipline, typography, and calm editorial rhythm, but it should feel like Favour's professional portfolio rather than a HERA product page.

## Scope

Work primarily in `favour-private-work`.

Use `hera_os` as the source for existing About, Lineage, Contact, and HERA project content, but do not remove, redirect, or break those original HERA routes yet.

### 1. Navigation

Build the portfolio navigation as:

Left:

`Favour Diokpo`

Right:

- `Work`
- `About`
- `Other Projects`
- `Contact`

Use the HERA floating pill navigation as the visual reference.

No `Public portfolio` button.

No `Ubisoft work` suffix.

No privacy/security implementation language in visible UI.

No meaningless decorative blue dot labels.

No dead nav items.

### 2. Work page

The Work page becomes the actual selected-work hub.

It should establish two levels of evidence.

#### Primary depth

**HERA OS**

Explain HERA clearly as Favour's independent AI product.

It should communicate product invention, agentic systems, human AI interaction, system behavior, authority, recovery, and the fact that Favour designed and built the product.

This does not need to duplicate the entire HERA site. It should be a strong portfolio entry with a clear route/link strategy that can later point to the HERA site or Deep Dive.

**RPM**

Title:

`Rebuilding how Ubisoft plans staffing`

Supporting idea:

Ubisoft's staffing platform exposed two system concepts for one real-world need. Favour redesigned the product around one Request while preserving the legacy Position structure Engineering still depended on.

RPM should lead into the existing `/rpm/` protected overview and its three chapters.

#### Supporting breadth

**Work Arrangement**

Present as concise breadth proof around multi-role remote-work approvals, governance, and policy constraints.

**Famous**

Present as concise breadth proof around credits, global policy/governance, dense data, and official recognition workflows.

Do not build full protected deep dives for Work Arrangement or Famous.

Do not fabricate impact claims.

Do not copy proprietary screenshots unless already approved for the private repo.

### 3. About

Migrate the existing About experience from `hera_os` into the private portfolio.

Do not rewrite it into a generic biography page.

Preserve the strongest interaction and storytelling patterns already built, especially:

- how Favour finds the real problem
- what she questions
- what she realizes
- what product decision follows
- what changes
- AI judgment versus human judgment
- HERA authority example
- how Favour actually uses AI in her own workflow
- understandable Ubisoft breadth

Adapt links and imports so the page works cleanly in `favour-private-work`.

Do not remove the source About page from HERA in this slice.

### 4. Other Projects

Migrate the current HERA `Lineage` page into the portfolio under the navigation label:

`Other Projects`

The page itself may retain the editorial title:

`The Long Build`

The page should make immediate sense to someone who has never heard the word `Lineage` in this context.

Preserve the useful story of older tools, experiments, and systems that eventually converged into HERA.

Do not remove the original Lineage route from HERA yet.

### 5. Contact

Migrate the current Contact experience into the portfolio.

Use confirmed contact details only.

Keep it concise and intentional.

Do not remove the original HERA Contact route yet.

### 6. Visual hierarchy

Be critical of every element.

The portfolio should feel:

- calm
- senior
- editorial
- deliberate
- related to HERA without pretending to be HERA

Avoid:

- excessive cards
- repeated intros
- unnecessary borders
- decorative dots with no meaning
- portfolio boilerplate
- excessive pills
- repetitive role/company labels
- long explanations of where the user is
- implementation/security commentary
- duplicated CTAs
- em dashes and en dashes in visible copy

Use plain punctuation instead.

### 7. HERA link strategy in this slice

Do not perform the final repathing yet.

The portfolio may link to the currently published HERA site where useful.

Do not remove HERA's current About, Lineage, Contact, or Ubisoft routes.

Do not rename the HERA navigation to `Portfolio` yet.

Do not create redirects yet.

That belongs to Slice 11C after this destination has been reviewed and after authenticated deployment is decided.

## Security

The repository remains private.

Do not add fake client-side authentication.

Do not expose Ubisoft evidence publicly.

Do not assume that a private GitHub repo automatically means a deployed site is private.

Authentication is a deployment-layer requirement and will be handled separately.

## Verification

Verify the private portfolio at minimum at desktop and 390px mobile.

Check:

- Work
- About
- Other Projects
- Contact
- RPM overview
- RPM Chapter 01
- navigation behavior
- no dead links
- no accidental public/private route confusion
- no visible privacy implementation commentary
- no broken migrated assets
- no obvious HERA-specific path assumptions
- production build passes

Use actual browser verification, not source inspection alone.

Also verify that `hera_os` still builds and that this slice did not regress its current routes, because it is being used as migration source and may receive minimal supporting edits only if absolutely required.

## Closeout standard

The closeout must report:

- what was migrated
- what was intentionally left in HERA
- which links are temporary until Slice 11C
- screenshots of Work, About, Other Projects, and Contact
- mobile evidence
- build result for both repositories
- final branch and commit SHA for both repositories
- any migration defects or missing assets
- anything that should be simplified before repathing HERA
- any remaining weak design/copy Antigravity itself believes should be challenged

Do not describe the slice as complete until independent verification is done.

Final status:

`BUILT + VERIFIED: WAITING FOR FAVOUR REVIEW`

Stop after this slice.

Do not begin HERA route retirement, redirects, authenticated deployment, or Slice 11C.

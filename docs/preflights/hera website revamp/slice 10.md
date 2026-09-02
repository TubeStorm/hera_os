
STATUS: DONE

> ## Slice 10: Portfolio Alignment + Hierarchy Reset
>
> We are correcting the overall information architecture and visual hierarchy across:
>
> `D:\Documents\favour-private-work`
>
> and the public portfolio:
>
> `D:\Documents\favour-ai-product-portfolio`
>
> This is **not** a new case-study content slice.
>
> Do not begin Chapter 02 or Chapter 03 implementation.
>
> The goal is to remove the AI-generated “side website” feeling and make the private work experience feel like a natural continuation of Favour's portfolio.
>
> ---
>
> ## Read first
>
> Inspect the existing HERA public navigation implementation and visual shell.
>
> Specifically inspect:
>
> `D:\Documents\favour-ai-product-portfolio\src\components\Nav.astro`
>
> `D:\Documents\favour-ai-product-portfolio\src\components\Footer.astro`
>
> `D:\Documents\favour-ai-product-portfolio\src\layouts\BaseLayout.astro`
>
> and the corresponding visual tokens/styles.
>
> The HERA floating pill navigation is the reference for the new portfolio navigation pattern.
>
> Do not blindly copy every HERA nav destination.
>
> Reuse the **navigation design language**, not the current HERA information architecture.
>
> ---
>
> ## Strategic direction
>
> We are moving toward two clearer products:
>
> ### HERA site
>
> Eventually focused on:
>
> HERA OS
> Deep Dive
> Waitlist
>
> ### Favour portfolio
>
> Work
> About
> Lineage
> Contact
> protected RPM case study
>
> Do **not** migrate About, Lineage or Contact in this slice yet.
>
> Instead, design the private portfolio shell so those routes can be migrated cleanly in a subsequent slice.
>
> The private portfolio must stop looking like a technical annex of another website.
>
> ---
>
> ## Fix the portfolio URL immediately
>
> Current incorrect URL:
>
> `https://tubstorm.github.io/hera_os/`
>
> Correct:
>
> `https://tubestorm.github.io/hera_os/`
>
> Fix every occurrence.
>
> ---
>
> ## Replace the current private-site header
>
> Remove:
>
> `F`
>
> `Favour Diokpo — Ubisoft work`
>
> `Public portfolio`
>
> and its left-facing arrow.
>
> Replace the header with a floating pill navigation based on the HERA OS navigation design.
>
> New portfolio navigation:
>
> Left:
>
> `Favour Diokpo`
>
> Right:
>
> `Work`
>
> Reserve architecture for future:
>
> `About`
>
> `Lineage`
>
> `Contact`
>
> Do not render dead links if those routes do not exist yet.
>
> The left brand should link to the portfolio Work landing page.
>
> There should be no “Public portfolio” concept in the navigation.
>
> The visitor should not feel like they switched websites.
>
> ---
>
> ## Footer
>
> Delete:
>
> `Favour Diokpo — professional case studies. Protected material.`
>
> Delete:
>
> `Public portfolio →`
>
> Delete all implementation/security commentary.
>
> Use an extremely restrained footer.
>
> Something like:
>
> `© 2026 Favour Diokpo`
>
> is enough.
>
> Do not add arrows, portfolio escape links, security statements or extra navigation unless they clearly improve usability.
>
> ---
>
> ## Delete privacy copy from visible UX
>
> Completely remove:
>
> `This site contains internal Ubisoft material. It is private by design — not indexed, not linked from the public portfolio's Git history.`
>
> Security architecture belongs in code/docs, not in recruiter-facing copy.
>
> Keep `noindex` metadata if technically appropriate.
>
> Do not explain it visibly.
>
> ---
>
> ## Remove meaningless decorative labels
>
> The current `.eyebrow` automatically adds a blue dot.
>
> Remove that behavior from the Favour portfolio.
>
> A blue dot that communicates no status or category is visual noise.
>
> Eyebrows should only exist where they provide useful hierarchy.
>
> Do not put:
>
> `Ubisoft — Senior UX Specialist`
>
> above every page simply because the component supports an eyebrow.
>
> Do not repeat:
>
> `Resource Planning & Management`
>
> if the page already clearly says RPM.
>
> ---
>
> ## Work landing page rewrite
>
> The current landing page repeats RPM setup copy that appears again inside `/rpm/`.
>
> Reduce it aggressively.
>
> Desired hierarchy:
>
> `Selected work`
>
> Then one primary project:
>
> `RPM`
>
> `Rebuilding how Ubisoft plans staffing`
>
> Suggested supporting copy:
>
> `Ubisoft's staffing platform exposed two system concepts for one real-world need. I redesigned the product around one Request while preserving the legacy structure Engineering still depended on.`
>
> CTA:
>
> `View RPM`
>
> No:
>
> `Protected case studies`
>
> No:
>
> `Enterprise systems for 1,000+ users. The detailed evidence lives here.`
>
> No duplicate Ubisoft role label.
>
> No duplicate scale copy.
>
> No “Read project overview” if `View RPM` is clearer.
>
> Keep the landing visually calm.
>
> One project does not need a gallery pretending there are twelve.
>
> ---
>
> ## RPM overview rewrite
>
> `/rpm/` should become a concise chapter index, not another introduction page that repeats the landing page.
>
> Desired hierarchy:
>
> Small useful label:
>
> `RPM`
>
> Main title:
>
> `Rebuilding how Ubisoft plans staffing`
>
> One concise setup:
>
> `Producers use RPM to plan who a project needs, when they need them, and at what capacity. Over several years, I worked on the product as its staffing model, workflows and governance evolved.`
>
> Then useful metadata if needed:
>
> Role
> Senior UX Specialist
>
> Company
> Ubisoft
>
> Scope
> Enterprise staffing platform
>
> Do not repeat the same 1,000+ user statement again unless it materially helps.
>
> Then:
>
> `Three product problems`
>
> followed immediately by the chapter entries.
>
> Remove the awkward:
>
> `<- All projects`
>
> from beside the page hierarchy.
>
> Use the persistent global navigation instead.
>
> ---
>
> ## Rename all three chapters
>
> The existing chapter titles are too vague and literary.
>
> Replace them with plain-English titles:
>
> ### Chapter 1
>
> `One staffing need, not two system concepts`
>
> Supporting line:
>
> `How Position and Request became one user-facing model.`
>
> Route remains:
>
> `/rpm/model/`
>
> ### Chapter 2
>
> `What happens when staffing needs change?`
>
> Supporting line:
>
> `Capacity changes, early departures, Split, and preserving history.`
>
> Route remains:
>
> `/rpm/changing-need/`
>
> ### Chapter 3
>
> `When should the system warn instead of block?`
>
> Supporting line:
>
> `Approval recovery, capacity limits, and keeping decisions with people.`
>
> Route remains:
>
> `/rpm/decision-authority/`
>
> Update:
>
> chapter index
>
> page H1s
>
> browser titles
>
> previous/next chapter navigation
>
> internal chapter references
>
> Do not change the route slugs.
>
> ---
>
> ## Visible punctuation rule
>
> Remove visible em dashes and en dashes from the Favour portfolio experience.
>
> Use:
>
> commas
> colons
> parentheses
> periods
>
> instead.
>
> This applies to:
>
> navigation
> headings
> labels
> buttons
> page copy
> footer
> metadata
> chapter titles
>
> Do not mechanically damage dates or source code syntax.
>
> The goal is human-readable visible copy.
>
> ---
>
> ## Public `hera_os` alignment
>
> Update the public RPM positioning so it matches the new flagship story.
>
> Current public RPM language still emphasizes:
>
> modal audit
> ribbon redesign
> 40+ modals
>
> That is now supporting evidence, not the flagship framing.
>
> Public RPM should instead communicate:
>
> `RPM`
>
> `Rebuilding how Ubisoft plans staffing`
>
> Suggested problem framing:
>
> `Experienced planners were being asked to manage two system concepts for one staffing need.`
>
> Suggested design framing:
>
> `I redesigned RPM around one Request-centered model while preserving the legacy Position structure Engineering still needed underneath.`
>
> Keep modal/ribbon work only as supporting evidence where useful.
>
> Do not add proprietary screenshots to the public repository.
>
> Do not expose private case-study content.
>
> ---
>
> ## Public Ubisoft gallery
>
> Preserve the three breadth projects:
>
> RPM
> Work Arrangement
> Famous
>
> The public gallery still proves breadth.
>
> RPM remains the only protected deep dive being built right now.
>
> Do not create full protected Work Arrangement or Famous cases.
>
> ---
>
> ## Future migration preparation
>
> We intend to evaluate moving:
>
> About
> Lineage
> Contact
>
> from `hera_os` into the Favour portfolio later.
>
> Do not perform that migration yet.
>
> But ensure the new navigation and layout architecture can support those destinations without another shell redesign.
>
> HERA can then eventually simplify toward:
>
> HERA OS
> Deep Dive
> Waitlist
>
> Do not delete or hide existing public routes during this slice.
>
> ---
>
> ## Design critique standard
>
> Be aggressively critical.
>
> Before preserving any element, ask:
>
> Does this help the visitor understand the work?
>
> Does this establish hierarchy?
>
> Does this help them navigate?
>
> Does this prove Favour's judgment?
>
> If not, remove it.
>
> Specifically watch for:
>
> duplicate labels
>
> decorative dots
>
> redundant role names
>
> repetitive intros
>
> excessive cards
>
> arrows pointing in conflicting directions
>
> duplicated navigation
>
> privacy implementation language
>
> generic portfolio filler
>
> pointless metadata
>
> empty visual chrome
>
> unnecessary blue
>
> excessive pills
>
> long explanatory paragraphs
>
> ---
>
> ## Visual quality
>
> Compare the new portfolio directly against the HERA public site.
>
> The portfolio should feel:
>
> related
> calm
> deliberate
> editorial
> senior
>
> Not:
>
> like an admin dashboard
> like a second product
> like a password portal
> like an AI-generated UX template
>
> Inspect:
>
> typography
>
> line length
>
> spacing
>
> page width
>
> color usage
>
> border frequency
>
> card frequency
>
> button hierarchy
>
> navigation density
>
> heading scale
>
> mobile behavior
>
> ---
>
> ## Verification
>
> Verify at minimum:
>
> `favour-private-work /`
>
> `/rpm/`
>
> `/rpm/model/`
>
> desktop 1280px
>
> mobile 390px
>
> public `hera_os /work/ubisoft/`
>
> public RPM shell/card
>
> corrected `tubestorm` URL
>
> no visible privacy implementation copy
>
> no `Public portfolio` buttons
>
> no `Favour Diokpo — Ubisoft work`
>
> no meaningless blue eyebrow dots
>
> new plain-English chapter titles everywhere
>
> production builds for both touched repos
>
> ---
>
> ## Closeout
>
> Show:
>
> before and after screenshots
>
> new navigation
>
> Work landing
>
> RPM overview
>
> Chapter 1 top section
>
> public Ubisoft gallery
>
> exact copy removed
>
> exact copy changed
>
> remaining UX issues you still think are weak
>
> Do not congratulate yourself.
>
> Critique the result before Favour has to.
>
> Status:
>
> `BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW`



---


# chatgpt conversation 
# Yes. I think the architecture should change one more time

* **HERA OS should stop pretending to be both a product site and your entire professional portfolio.**
* The current split is muddy:

  * HERA branding
  * personal portfolio
  * Ubisoft work
  * private case studies
  * “Public portfolio” escape links
* That is why the private site currently feels like an AI-generated annex instead of part of one coherent experience.

I would move toward:

**HERA site**

* HERA OS
* Deep Dive
* Waitlist

**Favour portfolio**

* Work
* About
* Lineage
* Contact
* protected RPM case study

But the **visual language should stay continuous**. Same floating pill navigation pattern, same spacing discipline, same typography system, same motion restraint.

So yes: migrate **About, Lineage, Contact** to the new portfolio eventually, and let `hera_os` become much more purely about HERA.

Not in a giant destructive migration this second, though. First fix the new portfolio shell so it is worth migrating into.

---

# The current private site hierarchy is bad

I checked the actual repo. Your reaction is justified.

Right now it literally has:

* `Favour Diokpo — Ubisoft work`
* `Public portfolio`
* `Protected case studies`
* `Ubisoft — Senior UX Specialist`
* another privacy explanation in the footer
* another `Public portfolio →`
* `All cases`
* `Resource Planning & Management`
* then another RPM title
* then another RPM explanation

That is way too much orientation copy.

The page spends more effort telling you **where you are** than showing you **why the work matters**.

And yes, this sentence should absolutely not be on the site:

> `This site contains internal Ubisoft material. It is private by design...`

That is implementation commentary accidentally shipped as UX. Delete it.

The header is also wrong. `Favour Diokpo — Ubisoft work` plus a `Public portfolio` escape hatch makes the visitor feel like they left the real site and entered a side application.

---

# What the hierarchy should become

Use the **same floating pill navigation design as HERA OS**. The existing HERA nav is materially better: logo/brand on the left, compact destinations on the right, one clean container, no “back to public portfolio” nonsense.

For the new portfolio, I would make it:

**Left**
`Favour Diokpo`

or potentially a simple personal mark later.

**Right**
`Work`
`About`
`Lineage`
`Contact`

When viewing RPM:

`Work`
`About`
`Lineage`
`Contact`

No special “Public portfolio” button.

No arrows pointing back to some other website.

No `Ubisoft work` suffix in the brand.

No blue dot before every eyebrow unless the dot actually conveys a state. Right now it conveys nothing. The private CSS adds that dot automatically to every `.eyebrow`, which is why it keeps showing up everywhere.  Remove that decorative behavior from the new portfolio.

And yes, fix the typo:

Wrong:
`https://tubstorm.github.io/hera_os/`

Correct:
`https://tubestorm.github.io/hera_os/`

The typo is currently literally in `src/data/site.ts`.

---

# Copy needs a hard reset too

The top-level private page does **not** need:

`Ubisoft — Senior UX Specialist`
`Protected case studies`
`Enterprise systems for 1,000+ users. The detailed evidence lives here.`

Then immediately:

`Resource Planning & Management`
`RPM — Rebuilding how Ubisoft plans staffing`
the same “prior redesign / 1,000+ users” paragraph again.

That is repetitive sludge.

I would make the Work landing much simpler:

**Selected work**

**RPM**
**Rebuilding how Ubisoft plans staffing**

> Ubisoft’s staffing platform exposed two system concepts for one real-world need. I redesigned the product around one Request while preserving the legacy structure Engineering still depended on.

`View RPM →`

That is enough.

Then inside `/rpm/`:

**RPM**

# Rebuilding how Ubisoft plans staffing

One short setup:

> Producers use RPM to plan who a project needs, when they need them, and at what capacity. Over several years, I worked on the product as its staffing model, workflows and governance evolved.

Then immediately the three chapters.

No repeating the “prior redesign” paragraph again.

No `All projects` awkwardly sitting beside another label.

No meaningless `Resource Planning & Management (RPM)` blue-dot eyebrow.

---

# The chapter titles should be plain English

I agree. They are currently trying too hard to sound editorial.

Current:

* `When the interface was exposing the database`
* `When the person changes but the need remains`
* `Designing systems that advise without taking control`

These sound like conference talk titles.

Use titles a smart 14-year-old understands instantly:

**Chapter 1**

### One staffing need, not two system concepts

How Position and Request became one user-facing model.

**Chapter 2**

### What happens when staffing needs change?

Capacity changes, early departures, Split, and preserving history.

**Chapter 3**

### When should the system warn instead of block?

Approval recovery, capacity limits, and keeping decisions with people.

Those are still senior because the **content is senior**. The title does not need to cosplay as a design essay.

Also remove em dashes from visible portfolio copy. There are a ton throughout both repos. We should treat this like your resume rule: normal punctuation instead.

---
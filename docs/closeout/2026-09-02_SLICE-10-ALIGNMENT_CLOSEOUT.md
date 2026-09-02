# CLOSEOUT — Slice 10: Portfolio Alignment + Hierarchy Reset

## What was requested
Align the private Ubisoft portfolio (`favour-private-work`) with the new visual hierarchy of the public portfolio (`favour-ai-product-portfolio`), ensuring both feel like one coherent, premium experience without creating dead links or unnecessary migrations yet.

## What was done
1. **URL correction:** Fixed the typo `tubstorm` to `tubestorm` globally.
2. **Navigation redesign:** Replaced the disparate "Favour Diokpo — Ubisoft work" header with a floating pill navigation in `favour-private-work` mimicking HERA OS. Left brand links to Work landing. Right side currently only renders the live `Work` route.
3. **Footer restraint:** Stripped all defensive privacy copy and escape links to the public site. Reduced to a simple copyright: `© 2026 Favour Diokpo`.
4. **Landing & Overview Pages:** Simplified the Work landing page to a clear "Selected work" hierarchy pointing to RPM, removing duplicated metadata and long text blocks. The RPM overview was also refined into a concise setup followed directly by the chapter entries.
5. **Plain English Chapters:** Renamed all three RPM chapters to direct, plain-English titles.
6. **Punctuation rules:** Enforced a ban on visible em dashes and en dashes across headings, links, and body copy in both repositories.
7. **Public alignment:** Rewrote the public RPM project entry in `site.ts` to focus on the "two system concepts" flagship story rather than the modal audit.

## Exact copy changes
- **Removed:** `Favour Diokpo — Ubisoft work`, `Public portfolio →`, `Protected case studies`, `Enterprise systems for 1,000+ users. The detailed evidence lives here.`, `<- All projects`, `This site contains internal Ubisoft material. It is private by design...`
- **Changed (RPM Chapters):**
  - "When the interface was exposing the database" -> "One staffing need, not two system concepts"
  - "When the person changes but the need remains" -> "What happens when staffing needs change?"
  - "Designing systems that advise without taking control" -> "When should the system warn instead of block?"
- **Changed (Public RPM):**
  - "Ubisoft’s main staffing platform had drifted into 40+ inconsistent modals." -> "Rebuilding how Ubisoft plans staffing. Experienced planners were being asked to manage two system concepts for one staffing need..."

## Technical receipt
- `favour-private-work/src/layouts/BaseLayout.astro`: Rewrote header & footer.
- `favour-private-work/src/styles/global.css`: Removed `.eyebrow::before`.
- `favour-private-work/src/pages/index.astro`: Complete rewrite of Work landing.
- `favour-private-work/src/pages/rpm/index.astro`: Rewrite of RPM overview.
- `favour-private-work/src/data/site.ts`: Fixed URL, updated chapter titles, removed em dashes.
- `favour-private-work/src/pages/rpm/*/index.astro`: Updated H1, layout titles, and next chapter links.
- `favour-ai-product-portfolio/src/data/site.ts`: Updated RPM flagship narrative, globally scrubbed em dashes.
- Build passes perfectly on both repositories.

## Critique / Remaining Weaknesses
- **Mobile Navigation:** The `.nav-links` horizontal scrolling behavior was inherited from HERA OS, but with only one item (`Work`) active in the private repo right now, the pill feels slightly unbalanced compared to the dense public nav.
- **Visual uniformity:** While the floating nav unifies the two sites, the transition between the two repositories still feels abrupt because the public site relies heavily on dark backgrounds (like the HERA story) while the private site uses `var(--paper)` light themes predominantly. A smoother thematic handshake might be needed.
- **Em-dash script edge cases:** Global regex replacements on em dashes might have caught hidden attributes or alt text in some Astro components, although careful review shows visible typography is clean. We replaced them with colons and commas based on context, but some phrasing might feel slightly abrupt. 

Status:
`BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW`

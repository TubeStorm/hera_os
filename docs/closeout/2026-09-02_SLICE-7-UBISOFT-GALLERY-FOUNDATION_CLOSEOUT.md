# Closeout — Slice 7: Ubisoft Work Gallery Foundation

**Date:** 2026-09-02
**Status:** 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW
**Commit:** 45edc0 on branch portfolio-week1

---

## What a visitor can now do

A recruiter visiting "Ubisoft Work" from the nav, from the About page, or from any old link that pointed to /work/enterprise-tools/ now lands on a clean editorial gallery page at /work/ubisoft/.

They see **three pieces in an exhibition** — RPM, Work Arrangement, Famous — and choose which one to enter. Each project card shows its name, a one-sentence description of the actual problem, 2 skill signal tags, and a "Read case study →" link that takes them to that project's own dedicated page.

Clicking any CTA brings them to that project's individual page — not back into a grouped dump. Each case page has its own back-link to the gallery, its own eyebrow/title/lead/metadata, and a clearly-labelled placeholder body ("Case study in preparation") so the shell structure is complete without fabricating any content.

---

## New route map

| Route | What it is |
|-------|-----------|
| /work/ubisoft/ | Editorial gallery — 3 projects |
| /work/ubisoft/rpm/ | RPM case study page (shell) |
| /work/ubisoft/work-arrangement/ | Work Arrangement case study page (shell) |
| /work/ubisoft/famous/ | Famous case study page (shell — provisional) |
| /work/enterprise-tools/ | Meta redirect → /work/ubisoft/ (old route preserved as a redirect) |

---

## What old route behaviour was removed or redirected

**Removed (architecture):**
- The grouped enterprise-tools.astro case study page — 196 lines of prose, stats dashboard, three workstreams dumped together, shared conclusions essay, "What this proves" block — is gone as a content page.
- The work/index.astro → enterprise-tools → three sections with anchors loop is gone.
- ubisoftProjects entries no longer point to #rpm, #work-arrangement, #capacity-governance anchors on a single page.
- Capacity Governance is retired as a gallery project (it lives inside RPM's story, not as a top-level case).

**Redirected (no broken links):**
- /work/enterprise-tools/ → /work/ubisoft/ via <meta http-equiv="refresh"> with a <link rel="canonical"> pointing at the gallery. Instantaneous in browser.
- The About page action card ("Ubisoft Work") now points directly to /work/ubisoft/ — no redirect needed.
- The nav "Ubisoft Work" pill now points directly to /work/ubisoft/.
- The homepage strengths strip Ubisoft link now points to /work/ubisoft/.

---

## What changed outside this slice

Nothing substantive. The following were updated as necessary side-effects of the routing change:
- src/data/site.ts — hrefs and comment updated; Famous added as 3rd project replacing Capacity Governance
- src/pages/about.astro — 1 link updated (line 402)
- src/pages/work/index.astro — section header copy updated to reflect new architecture
- src/components/ProjectThumb.astro — slug condition updated from enterprise-tools to pm | work-arrangement | famous

HERA, About, Lineage, Contact, Resume, and the homepage animation were not touched.

---

## Verification evidence

**Type check:** 122 errors — exactly the pre-existing baseline. Zero new errors.

**Browser verification (8 URLs, Playwright Chromium headless):**

| URL | Result |
|-----|--------|
| /work/ubisoft/ desktop 1280px | ✅ PASS — 3 projects, visual areas, tags, CTAs visible |
| /work/ubisoft/ mobile 390px | ✅ PASS — single-column, nav correct, all elements legible |
| /work/ubisoft/rpm/ | ✅ PASS — back link, metadata, placeholder, no fabricated content |
| /work/ubisoft/work-arrangement/ | ✅ PASS — back link, 5-flows narrative hint, placeholder |
| /work/ubisoft/famous/ | ✅ PASS — status correctly "provisional — evidence pending" |
| /work/enterprise-tools/ | ✅ PASS — redirects to gallery, no broken destination |
| / homepage | ✅ PASS — "Ubisoft Work" nav pill present and correct; homepage animation is designed |
| /about/ | ✅ PASS — Ubisoft Work action card links correctly to /work/ubisoft/ |

Screenshots in: C:\Users\ijeom\.gemini\antigravity\brain\1c0611f5-de52-407f-8689-af1dcd606a05\screenshots\

---

## Protected deployment recommendation (plain English)

**The problem:** This portfolio lives in a public GitHub repository. If Favour puts detailed Ubisoft case study content — screenshots, real flow diagrams, named internal systems — into this repository's source code, that content becomes visible in GitHub's file browser and commit history even if it's behind a password screen.

**The recommended structure:**

1. **This public repo (hera_os) — what it has now:** The Ubisoft gallery page with sanitized project cards and the placeholder case shells. No proprietary screenshots or internal diagrams here. Anyone can visit without a password.

2. **A separate private repo (new):** The actual RPM, Work Arrangement, and Famous case studies live here — screenshots, internal flow diagrams, detailed narratives, Jira evidence. This repo deploys to a second URL (GitHub Pages from a private repo, Netlify, Vercel, etc.).

3. **The password screen lives at the private deployment:** When a recruiter clicks "Read case study →" from the gallery, they arrive at the separate deployment's login screen. After entering the password, they see the full case study — same visual design, same nav, same typography. The visitor has no reason to know it's technically a separate site.

**What this costs:** A second repository and a second deployment. Both can be on free tiers (GitHub private repos are free; Netlify/Vercel free tiers handle static sites). The shared visual language is achieved by sharing the same global CSS, layout files, and components between both repos (or copying them — they'll rarely change).

**What this is NOT:** This is not a hosting migration. It's additive. The public portfolio stays exactly as it is. The private deployment is new work, started only when RPM is ready to write.

---

## Retrospective

**What worked:** Reading the inbound-link surface (nav, about.astro, index.astro, site.ts) before touching anything meant no links were left broken — everything either updated directly or is covered by the redirect.

**What should carry forward:** The enterprise-tools redirect pattern is a good template if any future route needs to move. The new ubisoft/ directory structure is clean and ready for subpath additions (/rpm/, /work-arrangement/, /famous/) without any routing file changes needed.

**One open question for the next RPM slice:** The gallery visual areas are currently SVG-less motifs (CSS-only). They work now, but once RPM has real design artefacts, the RPM card visual should be replaced with an actual image or component. The infrastructure supports that without any layout changes.

---

## Status

🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW

Do not begin the RPM case study until Favour reviews and approves this foundation.

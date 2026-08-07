# Repetition Audit — 2026-07-04

Method: grep counts over the built HTML (`dist/`, all 7 routes), then manual context reads.
Raw counts include SEO meta duplication (title + description + og tags repeat page copy ~3×), image alt text, and one JS class (`is-visible`) — noted where relevant.

## The watchlist words

| Word | Count (raw) | Verdict |
|---|---|---|
| agentic | 0 | Eliminated. Was the site's most-repeated jargon word. |
| seamless | 0 | Never present; stays banned. |
| complex | 0 | Eliminated ("complex systems" was in the old hero, work page, and about). |
| powerful | 0 | Eliminated (old CTA: "powerful but hard to trust"). |
| intuitive | 1 | Single use, in the HERA page quoting game design's job ("making that shape intuitive"). Earned. |
| architecture | 1 | Single use ("Local-first is the trust architecture"). Earned. |
| trust | 9 | Down from saturation. Remaining uses are concrete: the trust architecture line, enterprise "earns belief / stopped believing" rewrites kept two, resume has zero in the summary. |
| workflow | 10 | Mostly in the literal phrase "workflow-heavy products" (positioning) and Ubisoft flow descriptions. Acceptable. |
| visible | ~20 in real prose | **The retained thesis word — intentional.** It is the site's one-word point of view ("I design systems that make complicated work visible"). Uses are concentrated on the HERA page where each instance points at a mechanism (visible actions, visible cost, visible blockers). Raw grep says 61; the excess is meta-tag duplication, alt text, and the `is-visible` JS class. |
| systems | ~25 in real prose | High but structural — "enterprise systems", "product systems", "internal tools" contexts. Watch in future edits; do not let it become a verb-free label again. |

## Repeated sentences/sections removed
- The "what the AI saw, did, saved, forgot, and cost" riff appeared on Home, HERA (twice), and the project card. Now appears zero times verbatim; the idea survives once, concretely, in the HERA "What makes it different" list.
- "Systems, not screens" appeared on Home (twice, once as a section title) and About. Removed everywhere.
- The homepage capability grid + how-I-work grid duplicated both case studies' content. Removed.
- Hero copy no longer repeats the HERA case study; the HERA page no longer repeats the About thesis paragraph verbatim (About keeps the "place you can understand, enter, and direct" line as its thesis; HERA phrases it as "AI should feel like a place you can enter" once).

## Repetition kept intentionally
- "I design systems that make complicated work visible." — hero + footer tagline. One sentence, two structural placements. Deliberate brand line.
- "Route around" appears on the Enterprise page twice and About once — it's the connective insight between Ubisoft and HERA and is used to make that exact link.
- Stat set (1,000+ / 40+ / 101 / 5) appears on Home, Work, and Enterprise — numbers are proof, not filler.

## Remaining repetition risk
- "visible/visibility" could creep further with future edits; the word budget is spent.
- Each Ubisoft workstream description exists in three lengths (Work card, Home card, Enterprise section). They are phrased differently but describe the same facts — acceptable for a project map, but don't add a fourth.

# HERA Portfolio Rewrite Notes — 2026-07-04

The re-architecture pass that made HERA the main signal. Companion docs:
[VOICE_AND_PERSONA_NOTES.md](./VOICE_AND_PERSONA_NOTES.md) · [EVIDENCE_MAP.md](./EVIDENCE_MAP.md) · [REWRITE_DIFF_NOTES.md](./REWRITE_DIFF_NOTES.md) · [REPETITION_AUDIT.md](./REPETITION_AUDIT.md)

## What changed
- **HERA is now the flagship**, not one of two equal case studies. Nav gained a direct HERA link; the hero's primary CTA is "View HERA"; the Work page leads with a featured HERA card.
- **Real screenshots replaced abstract diagrams as the primary HERA evidence.** Seven screenshots captured directly from the live development build (2026-07-04, Playwright at 1600×900@2x): Void, War Room, Global Iris rail, Life OS events, Burn, Armory, Goals. Stored in `docs/References/hera-screens/` and served from `public/images/hera/`. Two designed diagrams survive where they explain better than pixels (Iris scope map, ghost-turn before/after).
- **The HERA page became a product dossier** with the preflight's structure: why I built it → the product idea (game layer as UX philosophy) → what makes it different (7 concrete differences) → what I actually designed (7 product systems) → the product language (7 proof modules) → scenarios → what broke (7 honest failure cards) → why it matters → what it proves.
- **Ubisoft was un-collapsed** into three labeled workstreams (RPM / Work Arrangement / Capacity Governance) on a page retitled "Enterprise Systems at Ubisoft — three workstreams…", with anchor links (`#rpm`, `#work-arrangement`, `#capacity-governance`) so Work-page cards land on the right project. The page states outright: "These are three distinct projects, not one."
- **Resume repositioned**: headline "Product Designer for AI systems, internal tools, and workflow-heavy products"; HERA listed as "Founder & Product Designer — independent AI product" with a build-stack bullet; keyword soup removed. Selected Projects now match the Work page 1:1.
- **Homepage got one job**: point of view + proof + navigation. The capability grid and how-I-work grid were deleted.

## What the HERA story is now
Belief-first: AI feels like a text box attached to invisible machinery, so Favour built an operating system where the machinery is the interface — rooms, agents as characters, task boards with review gates, readable memory, an event ledger, and per-turn cost. The game layer is the UX philosophy, not decoration. Local-first is the trust architecture. The failures (Iris-as-room, the blocking modal, ghost chats, phantom attachments, permission nagging, invisible cost) are presented as the force that shaped the model.

## What generic content was removed
See VOICE_AND_PERSONA_NOTES.md for the full list. Headliners: "making agentic AI visible, controllable, and safe to trust", the trust-layer framing as HERA's whole identity, the agentic/trust/architecture keyword soup, both homepage filler grids, and the "AI Product Systems Designer" role stack.

## How Ubisoft projects are grouped now
One grouped page (environment + shared stats), three clearly-labeled workstream sections, each with problem / role / designed / proof / what-it-demonstrates. Work page and resume list them as three separate projects that link into the grouped page.

## What claims are source-supported
All published metrics trace to the 2026 resume PDF and the two case-study source docs; all HERA mechanics trace to the vision docs, the closeout records in the Hermes repo, or the screenshots themselves. Full table in EVIDENCE_MAP.md. No invented business metrics; HERA labeled "In development, unreleased."

## What still needs real screenshots
- **Competitor halves of the comparison figures** — bucket list with exact filenames waiting for Favour in `docs/References/competitors/SCREENSHOT_BUCKET_LIST.md` (ChatGPT manage-memories panel, usage dashboards, Codex task list, etc.).
- **A cleaner Void** — current capture shows test rooms ("Prompt Stack Test Room", "Heyo Room"). Publishable, but a staged Void with realistic project rooms would present better. Same for the Armory (agent named "SKIBIDI_WRITER" is… honest, but stageable).
- **Memory blocks close-up** — the memory tab wasn't reachable by script this pass; a focused capture of readable/editable memory blocks would strengthen the context-model section.
- Re-run the capture script after any staging: `scratchpad/capture_hera.py` pattern — Playwright, 1600×900, device_scale_factor 2, wait for SSE settle, walk the nav tabs.

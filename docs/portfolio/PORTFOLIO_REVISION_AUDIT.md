# Portfolio Revision Audit

Pre-edit audit of the existing portfolio (Astro static site) before revising it to feel like a
real, credible, job-facing portfolio for **Favour Diokpo — AI Product Systems Designer** rather
than a generic AI-made template.

Audited pages: Home, Work, HERA case study, Enterprise/Ubisoft case study, Resume, About, Contact.

---

## Page-by-page audit

| Page | Current problem | What to keep | What to rewrite | Missing visuals | Priority |
|------|-----------------|--------------|-----------------|-----------------|----------|
| **Home** (`index.astro`) | Reads like a premium template, not a person with a POV. Two case-study previews use empty "screenshot placeholder" boxes. No fast proof of *why Favour*. | Strong headline ("trust, control, actually use"), clean layout, "What I design" + "How I work" grids. | Add a **proof strip** (AI architecture / enterprise / systems thinking). Sharpen HERA + enterprise preview copy to be specific ("I designed the trust layer"). | HERA trust-layer visual; enterprise before/after visual (replace 2 placeholders). | **P0** |
| **Work** (`work/index.astro`) | Thin. Repeats the two homepage cards with no added value. Placeholder thumbnails. No categories, status, or "what it proves." | Redacted/honest framing; grid of the two projects. | Rebuild cards to answer problem → designed → proves; add category legend + status labels; add "request a walkthrough" CTA. | Branded per-project cover motifs (replace placeholder thumbs). | **P0** |
| **HERA case study** (`work/hera.astro`) | Too vague — "I built an AI workspace." Generic sections. 7 screenshot placeholders. Doesn't sell the trust thesis. | Redaction note; key-systems grid; the "trust what you can't see" callout. | Restructure to the required 8 sections (trust problem → why chat UI breaks → product model → role → what I designed → hard decisions → what broke/improved → what it proves). Use stronger first-person claims. | Trust-layer map, Iris scope map, composer/attachment-truth card, memory blocks, ghost before/after, permission flow (replace all placeholders). | **P0** |
| **Enterprise/Ubisoft** (`work/enterprise-tools.astro`) | Too generic. Real signal (1,000+, 40+ modals) buried. 3 placeholders. Title weak. | Stat chips (1,000+, 40+), Ubisoft context, "trust is a feature" quote. | Retitle to "Ubisoft Internal Tools — Rebuilding trust in planning and governance workflows." Restructure to required sections. Add honesty note (no invented metrics). | Modal audit before/after, approval flow, quota card (replace placeholders). | **P0** |
| **Resume** (`resume.astro`) | Placeholder education ("See full CV"). Broken PDF download link (file doesn't exist). Skills are a flat word cloud. No tools section. | Headline, summary, experience bullets, selected projects. | Remove placeholder education. Gate the PDF link behind an availability flag (no 404). Group skills by category. Add a tools section. | — (text page) | **P0** |
| **About** (`about.astro`) | Repeats the exact homepage capability grid (content duplication across pages). Voice is generic. Portrait is an empty placeholder. | Enterprise→AI throughline; two-column layout. | Rewrite in Favour's voice around "the part of AI that breaks after the demo." Replace the duplicated capability grid with a distinct **principles** grid. | Replace portrait placeholder with a designed monogram stand-in. | **P1** |
| **Contact** (`contact.astro`) | Fake email (`hello@favourdiokpo.com`) + generic LinkedIn root URL. Contact form is a dead-end `mailto:` to the fake address. | Pitch copy; card styling. | Publish **only confirmed** links (GitHub is real). Hide email/LinkedIn until real. Remove the non-functional form (dead-end UI). Add redacted-work note + resume-on-request. | — | **P0** |
| **Global** (`site.ts`, config) | `astro.config.mjs` username already set to `TubeStorm` (real). README still says `YOUR_USERNAME`. Central data mixes fake contact + missing-PDF path with no gating. | Single-source-of-truth pattern in `site.ts`. | Add contact-confirmation gating, resume availability flag, richer project model, principles/strengths data. Update README to drop `YOUR_USERNAME` and document the new gates. | — | **P0** |

---

## Cross-cutting problems (found repo-wide)

1. **Every visual was a "Screenshot placeholder"** — 13 distinct labels, ~14 render instances, zero real images. Biggest credibility drag.
2. **Content duplication** — the same 6 capability cards rendered on Home *and* About; Work repeated the Home project cards verbatim.
3. **Broken / fake links** — resume PDF 404, fake email, generic LinkedIn, dead contact form.
4. **Vague case studies** — both read as templates; the actual thesis (trust/visibility for HERA; systemization for enterprise) wasn't foregrounded.
5. **README placeholder** — deployment instructions still referenced `YOUR_USERNAME` even though the config was already real.

## Revision thesis

The site's job is to prove three things fast: **(1)** Favour designs AI *product systems*, not
screens; **(2)** she has enterprise UX credibility at scale; **(3)** she turns messy workflows
into understandable systems. Every fix below serves those three.

## Fixes applied (see closeout in the task run)

- Replaced all placeholders with designed diagrams / annotated UI cards (see `src/components/diagrams/`, framed by `src/components/figure/Figure.astro`).
- Rewrote HERA + enterprise case studies to the required section structures with sharper, first-person claims.
- Added a homepage proof strip; de-duplicated About (new principles grid) and Work (problem/designed/proves cards + categories + status).
- Removed placeholder education; gated the resume PDF; grouped skills; added tools.
- Contact publishes only confirmed links (GitHub); email/LinkedIn hidden until real; dead form removed.
- `ASSETS_NEEDED.md` lists every remaining real asset and its drop-in location.

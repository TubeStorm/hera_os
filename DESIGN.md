# Design Blueprint — Favour AI Product Portfolio

Target vibe: **Apple crisp · Linear clean · Figma product taste · high-end systems portfolio · quiet confidence · sharp product-architecture energy.** Not a fake Apple clone — a premium *AI product architect* portfolio.

## Design principles
1. **Systems over screens.** Structure, spacing, and hierarchy do the talking.
2. **Quiet confidence.** No hype, no neon, no crypto-landing energy.
3. **Legibility is the brand.** The site itself should feel trustworthy and controllable — same values as the work.
4. **Restraint.** One accent, used sparingly. Generous whitespace. Hairline borders.
5. **No dead-ends.** Every page routes forward; every CTA has a clear next step.

## Color palette
Defined as CSS variables in `src/styles/global.css` (light default + tasteful `prefers-color-scheme: dark`).

| Token | Light | Role |
|-------|-------|------|
| `--paper` | `#fbfbf9` | page background (off-white) |
| `--surface` | `#ffffff` | raised cards |
| `--ink` | `#0b0b0c` | primary text, primary buttons |
| `--muted` | `#62636a` | secondary text |
| `--faint` | `#9a9ba2` | captions / tertiary |
| `--line` | `#e7e7e1` | hairline borders |
| `--accent` | `#2563eb` | sparingly — dots, tiny highlights, links |

## Typography
- **Inter** (loaded async, system-font fallback). Tight tracking on headings.
- Fluid scale via `clamp()`: `display`, `h1`, `h2`, `h3`, `lead`. See `tailwind.config.mjs`.
- `text-wrap: balance` on headings.

## Spacing rules
- Page container: `max-w-content` (72rem), prose `max-w-prose` (46rem).
- Section rhythm: `.section` = `py-20 sm:py-28`, separated by `border-line` hairlines.

## Component rules
Base components in `src/components/`:
- `Button` (primary = ink pill, ghost = hairline), `Nav`, `Footer`
- `SectionHeader`, `ProjectCard`, `StatChip`, `Callout`, `ImagePlaceholder`, `Hero`
- Cards use `.card` + `.card-hover` (subtle lift, no gaudy shadows).

## Page structure
`/` · `/work` · `/work/hera` · `/work/enterprise-tools` · `/resume` · `/about` · `/contact`

## Motion rules
- Subtle: hero `rise` on load, `.reveal` scroll-in via IntersectionObserver.
- Fully disabled under `prefers-reduced-motion: reduce`.

## Do-not-do list
- ❌ No gradient soup / AI-purple washes.
- ❌ No stock photography — use labeled `ImagePlaceholder` blocks.
- ❌ No template-y SaaS hero with 3 pricing tiers.
- ❌ No revealing HERA proprietary code, prompts, file paths, or business model.
- ❌ No lorem ipsum (all copy is real or clearly marked `TODO`).

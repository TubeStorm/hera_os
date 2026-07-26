# Design System — current state (as-built)

This describes what exists in the code today. No defense, no aspiration — just what's there.
Source: `src/styles/global.css`, `tailwind.config.mjs`, `src/components/*`, `src/layouts/*`.

---

## Typography

- **Typeface:** Inter (loaded from Google Fonts, async via `media="print" onload`). Fallback stack: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif`. There is a brief FOUT/system-font flash before Inter loads.
- **Scale (fluid, `clamp()`):**
  - `display` — clamp(2.6rem, 6vw, 5rem), line-height 1.02, tracking -0.035em (hero only)
  - `h1` — clamp(2rem, 4vw, 3.25rem), tracking -0.03em
  - `h2` — clamp(1.5rem, 2.6vw, 2.15rem), tracking -0.025em
  - `h3` — 1.3rem (fixed, not fluid), tracking -0.02em
  - `lead` — clamp(1.1rem, 1.6vw, 1.4rem)
  - Body/prose — ~1.02rem, `leading-relaxed`
- `text-wrap: balance` on h1–h4. `font-feature-settings: 'cv11','ss01'`.
- Weights used: 400/500/600/700. Headings are 600 ("semibold"), not bold.
- **Honest note:** heading tracking is tight and Apple-ish. Only one font family — no serif or mono anywhere. Everything is sans, which reads clean but also means near-zero typographic contrast between sections.

## Colors

CSS variables in `:root`, with a full dark-mode override under `@media (prefers-color-scheme: dark)`. Dark mode is automatic (follows OS) — there is **no manual theme toggle**.

| Token | Light | Dark | Role |
|-------|-------|------|------|
| `--paper` | #fbfbf9 | #08080a | page background |
| `--surface` | #ffffff | #101013 | cards |
| `--ink` | #0b0b0c | #f4f4f2 | primary text / primary buttons |
| `--muted` | #62636a | #a2a3ab | secondary text |
| `--faint` | #9a9ba2 | #6d6e77 | captions / tertiary |
| `--line` | #e7e7e1 | #24242a | hairline borders |
| `--accent` | #2563eb | #6f9bff | eyebrow dots, links, bullet dots, small highlights |
| `--accent-soft` | #eef2ff | #14203a | soft wash |

- **Accent is blue (#2563eb).** It appears only in tiny doses: eyebrow dots, `prose-hera` bullet dots, resume org labels, callout side-bars, and faint radial washes behind the hero / CTA / image placeholders.
- **Honest note:** the palette is almost entirely greyscale + one blue. Restrained by intent, but also means the site has very little color identity — nothing that reads as "Favour's brand." Blue accent is a fairly default/safe choice.

## Spacing

- Page container: `max-w-content` = **72rem**, padding `px-6 sm:px-8`.
- Prose container: `max-w-prose` = **46rem** (case-study bodies, resume).
- Vertical rhythm: `.section` = `py-20 sm:py-28`. Sections separated by `border-t border-line` hairlines on the homepage.
- Generous whitespace throughout; consistent 4/px-grid via Tailwind spacing.

## Buttons

- `.btn` base: pill (`rounded-pill` = 999px), `px-5 py-2.5`, text-sm, medium weight, 300ms `ease-smooth` transition.
- **Primary** (`.btn-primary`): solid `--ink` fill, `--paper` text. Hover: lift 1px + `--shadow-lift`.
- **Ghost** (`.btn-ghost`): transparent, 1px `--line` border, `--ink` text. Hover: border → `--ink`.
- Only two variants. No sizes, no icon-only, no destructive/disabled states defined.
- Nav has a third one-off "Get in touch" pill (ink fill) not built from `.btn`.

## Cards

- `.card`: `--surface` bg, 1px `--line` border, `--shadow-card`, `rounded-card` (18px).
- `.card-hover`: adds `translateY(-3px)` + `--shadow-lift` + border darken on hover (500ms).
- Used by: ProjectCard, StatChip, Callout, contact cards, case-study footer CTA.
- **Honest note:** shadows are subtle (Linear-style), corner radius 18px is consistent. Cards are the main structural motif and they're used consistently.

## Layout / grid

- Centered single-column max-width shell; content grids are Tailwind (`md:grid-cols-2`, `lg:grid-cols-3`, `sm:grid-cols-4`).
- Signature pattern: **"bordered grid"** — `grid gap-px ... border border-line bg-line` so 1px gaps show the line color as gridlines (What I design, How I work, Key systems, About principles). This creates a table/matrix look.
- Case studies use a narrower prose column (46rem) inside a wider page shell.
- **Honest note:** layout leans heavily on the same bordered-grid + hairline-divider recipe on nearly every section, so pages have a similar cadence. Consistent, but repetitive — most sections are "eyebrow → big heading → grid."

## Image treatment

- **There are no real images.** Every image slot is an `ImagePlaceholder` component: bordered box, subtle radial accent wash, a fine dot-grid texture, a small picture icon, and two labels — "Screenshot placeholder" + the specific caption.
- Ratios: wide (16/7), video (16/9), square, tall (4/5).
- `role="img"` with `aria-label="Screenshot placeholder — {label}"`.
- **Honest note:** this is the single biggest gap. 14 placeholder slots, zero real screenshots or portrait. The site currently shows no actual product work.

## Motion / animation

- **Hero:** `animate-rise` — staggered fade/translate-up on load (role, headline, subhead, buttons, role dots, each with increasing `animation-delay`).
- **Scroll reveal:** `.reveal` elements start `opacity:0; translateY(16px)` and transition in via IntersectionObserver (`BaseLayout` inline script), unobserved after firing.
- Hover micro-motion: button lift, card lift, project-card arrow slide, nav "Get in touch" lift.
- All motion is disabled under `prefers-reduced-motion: reduce` (both `.reveal` and `.animate-rise`).
- **Honest note:** motion is tasteful and restrained. The reveal-on-scroll is applied very broadly, so almost everything fades in — which can feel slightly uniform.

## Navigation

- Sticky top pill nav (`Nav.astro`), `rounded-pill`, `--surface`/80 + `backdrop-blur-xl`, hairline border, `z-50`.
- Left: square ink "F" mark + name (name hidden on mobile). Right: Work / Resume / About / Contact + a solid ink "Get in touch" pill (hidden below `sm`).
- Active state: current link is `text-ink` (vs `text-muted`), matched by pathname `endsWith`.
- **Honest note:** on mobile the primary "Get in touch" CTA and the site name are both hidden, so the mobile nav is just four text links + the F mark. No hamburger/drawer — it relies on all four links fitting.

## Footer

- `Footer.astro`: tagline (as an h3), location line, email link; two link columns (Pages, Elsewhere); bottom bar with © year + role.
- Consistent hairline dividers, muted text, hover→ink.

## References / inspiration (stated in DESIGN.md)

The blueprint explicitly names the target vibe: **Apple crisp · Linear clean · Figma product taste · quiet confidence.** Do-not-do list: no gradient soup, no AI-purple, no stock photography, no template SaaS hero, no revealing HERA internals, no lorem ipsum.

**Honest read on how well it hits those references:** The restraint, hairlines, pill nav, and subtle shadows do land in "Linear/Apple" territory. But the execution is generic-premium rather than distinctive — it looks like a well-made template in that genre, not a portfolio with a personal visual signature. The single blue accent, all-Inter type, and repeated bordered-grid sections mean it reads as "tasteful default" more than "Favour's design point of view." And with every image still a placeholder, the "product taste" claim is asserted in copy but not yet shown.

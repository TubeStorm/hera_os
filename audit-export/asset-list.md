# Asset List — current state

Every image, icon, PDF, and asset the site uses, and where it appears.

---

## Real binary assets that exist in the repo

| File | Size | Purpose | Where used |
|------|------|---------|-----------|
| `public/favicon.svg` | 227 B | Black rounded-square "M/F"-style monogram (ink #0B0B0C on #FBFBF9) | `<link rel="icon">` in `BaseLayout` — every page tab |
| `public/.nojekyll` | 0 B | Prevents GitHub Pages Jekyll processing | Build/deploy only |
| `public/resume/README.txt` | 352 B | Instructions to drop in the real resume PDF | Not user-facing |

**That is the complete list of real media assets.** There are no PNG/JPG/WebP images, no portrait, no screenshots, and no PDF in the repo.

## Referenced but MISSING

| Reference | Referenced in | Status |
|-----------|--------------|--------|
| `resume/Favour-Diokpo-Resume.pdf` | `site.resumePdf` → Hero "Download resume", Resume "Download PDF", Resume footer link | **File does not exist — download 404s** |

## Image placeholders (no real image — component-rendered)

All are the `ImagePlaceholder.astro` component (bordered box + dot-grid + icon + caption). None are real images.

| Placeholder label | Page | Ratio |
|-------------------|------|-------|
| HERA — Global Iris assistant | home card + hera hero | wide |
| Enterprise — planning & governance console | home card + enterprise hero | wide |
| HERA — Global Iris + Life OS | home (HERA preview) | tall |
| Enterprise — planning & governance console | home (Enterprise preview) | tall |
| HERA — Composer with file-aware chat | hera (product model) | video |
| HERA — Global Iris right rail | hera (selected screens) | tall |
| HERA — Life OS overview | hera (selected screens) | tall |
| HERA — Memory blocks | hera (selected screens) | video |
| HERA — Permissions / run confirm | hera (selected screens) | video |
| Enterprise — 40+ modal audit map | enterprise (research) | video |
| Enterprise — approval flow | enterprise (governance) | video |
| Enterprise — quota visibility | enterprise (governance) | video |
| Portrait — Favour Diokpo | about | tall |

→ **13 distinct placeholder labels, ~14 render instances.** The intended home for real images is `public/images/case-studies/` (documented in README) — that folder does not exist yet.

## Inline SVG icons (hand-coded, not files)

No icon library is installed. All icons are inline `<svg>` in components:

| Icon | Component | Use |
|------|-----------|-----|
| Arrow up-right (external) | `contact.astro` | Email / social cards |
| Checkmark | `index.astro` | HERA preview checklist |
| Arrow-right | `ProjectCard.astro` | "Read case study" |
| Arrow-left | `CaseStudyLayout.astro` | "All work" back link |
| Picture/landscape glyph | `ImagePlaceholder.astro` | Placeholder icon |
| "F" monogram (text, not svg) | `Nav.astro` | Logo mark |

## Fonts (external, not bundled)

| Asset | Source | Load |
|-------|--------|------|
| Inter (400/500/600/700) | Google Fonts (`fonts.googleapis.com`) | Async stylesheet (`media=print` swap) + `<noscript>` fallback |

Fonts are **not self-hosted** — they load from Google's CDN at runtime (a privacy/offline consideration for a "desktop-app-first" philosophy, and an external dependency for the static site).

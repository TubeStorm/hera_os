# Repo Summary — current state

Repo root: `C:\Users\ijeom\favour-ai-product-portfolio`
Git: initialized, 1 commit (`aa81ade — Initial commit`), branch `main`, 35 tracked files. **Not pushed to any remote.** (`audit-export/` is currently untracked.)

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 4 (`astro@^4.16.18`, running 4.16.19) — static output, no SSR |
| Language | TypeScript (strict, `astro/tsconfigs/strict`) |
| Styling | Tailwind CSS 3 (`@astrojs/tailwind`, `applyBaseStyles:false`) + CSS variables |
| Fonts | Inter via Google Fonts CDN (async) |
| Hosting | GitHub Pages via GitHub Actions |
| Icons | Hand-coded inline SVG (no icon library) |

Note: pinned to Astro 4 because the local machine runs **Node 18.17.0**; Astro 5 requires ≥18.20.8. `.npmrc` sets `engine-strict=false` so sub-version engine warnings don't block install.

## Main files & folders

```
favour-ai-product-portfolio/
├─ astro.config.mjs        # site + base path config (has YOUR_USERNAME placeholder)
├─ tailwind.config.mjs     # color/type/radius tokens → CSS vars
├─ tsconfig.json           # strict + @components/@layouts/@data aliases
├─ package.json            # scripts: dev/build/preview/check
├─ .npmrc                  # engine-strict=false
├─ DESIGN.md               # design blueprint
├─ README.md               # setup/deploy/content guide
├─ .github/workflows/deploy.yml   # GitHub Pages CI
├─ public/
│  ├─ favicon.svg
│  ├─ .nojekyll
│  └─ resume/README.txt    # (real PDF NOT present)
└─ src/
   ├─ styles/global.css     # tokens, base, component classes, motion
   ├─ data/site.ts          # SINGLE SOURCE OF TRUTH for copy/nav/projects/resume + withBase()
   ├─ components/           # Button, Nav, Footer, Hero, SectionHeader,
   │                        # ProjectCard, StatChip, Callout, ImagePlaceholder
   ├─ layouts/              # BaseLayout, CaseStudyLayout
   └─ pages/
      ├─ index.astro        # /
      ├─ work/index.astro   # /work
      ├─ work/hera.astro    # /work/hera
      ├─ work/enterprise-tools.astro  # /work/enterprise-tools
      ├─ resume.astro       # /resume
      ├─ about.astro        # /about
      └─ contact.astro      # /contact
```

Content editing is centralized: most copy lives in `src/data/site.ts`; the two case studies are inline in their `.astro` pages.

## How to run locally

```bash
npm install
npm run dev      # http://localhost:4321/favour-ai-product-portfolio/
```

The dev URL **includes the base path** (`/favour-ai-product-portfolio/`) because it's configured as a GitHub Pages project repo. Hitting `http://localhost:4321/` without the base path will 404.

## How to build

```bash
npm run build    # → ./dist (7 static pages, directory format: /x/index.html)
npm run preview  # serve the built ./dist locally
npm run check    # astro + tsc diagnostics
```

Last known state: build succeeds, 7 pages, `astro check` reports 0 errors (1 harmless hint about the `onload` font-swap attribute).

## How GitHub Pages deploy is configured

`.github/workflows/deploy.yml`:
- Triggers: push to `main`, or manual `workflow_dispatch`.
- Permissions: `contents: read`, `pages: write`, `id-token: write`.
- Build job: `checkout@v4` → `setup-node@v4` (node 20, npm cache) → `npm ci` → `configure-pages@v5` → `npm run build` → `upload-pages-artifact@v3` (`./dist`).
- Deploy job: `deploy-pages@v4`.
- Concurrency group `pages`, no cancel-in-progress.

**Not yet activated:** requires (1) setting `GITHUB_USERNAME` in `astro.config.mjs`, (2) creating + pushing the GitHub repo, (3) Settings → Pages → Source → GitHub Actions. None of these have been done — the repo is local-only.

## Broken links / references (as of this export)

- **`resume/Favour-Diokpo-Resume.pdf` — missing file.** Referenced 3× (Hero "Download resume", Resume "Download PDF", Resume footer). All three currently 404.
- **LinkedIn → `https://www.linkedin.com/`** — generic root, not a real profile (footer + contact page).
- **Email → `hello@favourdiokpo.com`** — placeholder domain (footer + contact page + form action).
- Internal navigation between the 7 routes is wired through `withBase()` and resolves correctly; no broken internal route links found.

## Unfinished / placeholder inventory

- `astro.config.mjs`: `GITHUB_USERNAME = 'YOUR_USERNAME'` → `site`/canonical/OG URLs are not real yet.
- All 13 image slots are `ImagePlaceholder` components — **no real screenshots or portrait exist.**
- `public/images/case-studies/` (documented target for real images) does not exist.
- Resume `education` is a placeholder line ("Design / HCI background — See full CV").
- Contact form is `mailto:`-only; explicitly TODO'd to wire to Formspree/Web3Forms.
- Real contact identity (email, LinkedIn) not set.
- Ubisoft is named as an employer in a public case study — publishing clearance not confirmed in-repo.

## Environment notes

- OS: Windows 11. Node 18.17.0 (below Astro 5 requirement — stay on Astro 4 unless Node is upgraded).
- Fonts load from Google CDN at runtime (external dependency; not self-hosted).
- Dark mode is automatic via `prefers-color-scheme`; no manual toggle.

# Favour AI Product Portfolio

A sleek, Apple-crisp static portfolio for **Favour Diokpo — AI Product Systems Designer**.
Built with **Astro + TypeScript + Tailwind CSS**, deployed free to **GitHub Pages** via GitHub Actions.

> Core message: *"I make AI systems easier to trust, control, and actually use."*

- **Live URL (after deploy):** `https://TubeStorm.github.io/favour-ai-product-portfolio/`
- **Design blueprint:** see [`DESIGN.md`](./DESIGN.md)
- **Revision audit:** see [`docs/portfolio/PORTFOLIO_REVISION_AUDIT.md`](./docs/portfolio/PORTFOLIO_REVISION_AUDIT.md)
- **Assets still needed:** see [`ASSETS_NEEDED.md`](./ASSETS_NEEDED.md)

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | [Astro](https://astro.build) 4 (static output) |
| Language | TypeScript |
| Styling | Tailwind CSS 3 + CSS variables (light + dark) |
| Hosting | GitHub Pages (GitHub Actions deploy) |

No server-side rendering. 100% static, deployable anywhere.

---

## Local development

```bash
npm install     # install dependencies
npm run dev      # start dev server → http://localhost:4321/favour-ai-product-portfolio/
npm run build    # build static site to ./dist
npm run preview  # preview the production build locally
npm run check    # (optional) Astro + TypeScript diagnostics
```

> Note: the dev URL includes the `base` path (`/favour-ai-product-portfolio/`) because the site
> is configured for a GitHub Pages **project** repo.

---

## ⚙️ Required setup before deploying

### 1. GitHub username — already set

[`astro.config.mjs`](./astro.config.mjs) is configured with the real username:

```js
const GITHUB_USERNAME = 'TubeStorm';
const REPO_NAME = 'favour-ai-product-portfolio';
```

- **Project repo** (default): site publishes to
  `https://TubeStorm.github.io/favour-ai-product-portfolio/`.
- **User site** (cleaner URL): rename the repo to `TubeStorm.github.io`, then set
  `site: 'https://TubeStorm.github.io'` and `base: '/'` (or remove the `base` line).

### 2. Enable GitHub Pages via Actions

In the GitHub repo: **Settings → Pages → Build and deployment → Source → GitHub Actions.**
That's it — the included workflow does the rest on every push to `main`.

---

## Deploying

Deployment is automated by [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml):

1. Runs on every push to `main` (or manually from the **Actions** tab).
2. Installs deps, builds the static site, uploads the `dist/` artifact.
3. Deploys to GitHub Pages using the official Pages actions.

Uses: `actions/checkout`, `actions/setup-node`, `actions/configure-pages`,
`actions/upload-pages-artifact`, `actions/deploy-pages` — with permissions
`contents: read`, `pages: write`, `id-token: write`.

### First-time publish (exact steps)

1. Create the repo and push (see **Create the GitHub repo** below).
2. `astro.config.mjs` already targets `TubeStorm` — no edit needed unless the username changes.
3. GitHub → **Settings → Pages → Source → GitHub Actions**.
4. Wait for the **Deploy to GitHub Pages** workflow (Actions tab) to finish green.
5. Visit `https://TubeStorm.github.io/favour-ai-product-portfolio/`.

---

## Create the GitHub repo

**With GitHub CLI** (from the project folder):

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
gh repo create favour-ai-product-portfolio --public --source=. --remote=origin --push
```

**Without GitHub CLI (manual):**

1. Create a new **public** repo named `favour-ai-product-portfolio` at <https://github.com/new> (do **not** add a README/license — this repo already has them).
2. From the project folder:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio site"
   git branch -M main
   git remote add origin https://github.com/TubeStorm/favour-ai-product-portfolio.git
   git push -u origin main
   ```
3. Then follow **First-time publish** above.

---

## Where to update content

| What | Where |
|------|-------|
| Name, role, tagline, location | [`src/data/site.ts`](./src/data/site.ts) → `site` |
| Contact links (GitHub / email / LinkedIn) + `confirmed` gating | `src/data/site.ts` → `contact` |
| Resume PDF availability flag | `src/data/site.ts` → `resumeAsset` |
| Nav links | `src/data/site.ts` → `nav` |
| Project cards (category, status, problem/designed/proves) | `src/data/site.ts` → `projects` |
| Homepage "Why me" proof strip | `src/data/site.ts` → `strengths` |
| "What I design" / "How I work" | `src/data/site.ts` → `capabilities`, `howIWork` |
| About "How I think" grid | `src/data/site.ts` → `principles` |
| Resume content (grouped skills + tools) | `src/data/site.ts` → `resume` |
| HERA case study | [`src/pages/work/hera.astro`](./src/pages/work/hera.astro) |
| Enterprise case study | [`src/pages/work/enterprise-tools.astro`](./src/pages/work/enterprise-tools.astro) |
| Designed diagrams / visuals | [`src/components/diagrams/`](./src/components/diagrams/) + [`src/components/figure/Figure.astro`](./src/components/figure/Figure.astro) |
| Colors / type / spacing | [`src/styles/global.css`](./src/styles/global.css) + [`tailwind.config.mjs`](./tailwind.config.mjs) |

### Contact links (no fake links ship)

Each link in `contact` (in `src/data/site.ts`) has a `confirmed` flag. **Only confirmed links
render** on the Contact page and footer. GitHub is confirmed real; email and LinkedIn are `false`
until you set a real value and flip `confirmed: true`. See [`ASSETS_NEEDED.md`](./ASSETS_NEEDED.md).

### Add your resume PDF

1. Drop `Favour-Diokpo-Resume.pdf` into [`public/resume/`](./public/resume/).
2. Set `resumeAsset.available = true` in `src/data/site.ts`.

Until then the site shows a **"PDF on request"** link (no broken 404). Different filename? Update
`resumeAsset.path`.

### Add real screenshots (optional — diagrams already fill every slot)

Every visual is a designed diagram/annotated card, so there are **no empty placeholders** to
replace. To swap in a real screenshot:

1. Put images in `public/images/hera/` or `public/images/enterprise/`.
2. Replace the relevant `<Figure> … </Figure>` diagram block in the page with an `<img>`:

   ```astro
   <img src={withBase('images/hera/iris.png')} alt="HERA Global Iris" class="w-full rounded-card border border-line" />
   ```

   (Import `withBase` from `../data/site` so the path respects the GitHub Pages base.)
   See [`ASSETS_NEEDED.md`](./ASSETS_NEEDED.md) for the full drop-in map.

---

## Content status

- ✅ `astro.config.mjs` — `GITHUB_USERNAME` set to `TubeStorm`.
- ✅ All screenshot placeholders replaced with designed diagrams / annotated cards.
- ✅ No fake contact links (only confirmed GitHub is published).
- ✅ No broken resume/PDF links (gated behind `resumeAsset.available`).
- ✅ No placeholder education, no lorem ipsum.
- 🔲 `public/resume/Favour-Diokpo-Resume.pdf` — add the real PDF, then flip `resumeAsset.available`.
- 🔲 Portrait/headshot — add `public/images/portrait.jpg`, swap `<MonogramPortrait />` in About.
- 🔲 `contact.email` / `contact.linkedin` in `src/data/site.ts` — set real values + `confirmed: true`.
- 🔲 Optional: real product screenshots to sit alongside the diagrams.

See [`ASSETS_NEEDED.md`](./ASSETS_NEEDED.md) for the full list and drop-in locations.
All prose is real copy written for this portfolio — no lorem ipsum.

---

## License

Personal portfolio. All rights reserved © Favour Diokpo.

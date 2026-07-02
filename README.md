# Favour AI Product Portfolio

A sleek, Apple-crisp static portfolio for **Favour Diokpo — AI Product Systems Designer**.
Built with **Astro + TypeScript + Tailwind CSS**, deployed free to **GitHub Pages** via GitHub Actions.

> Core message: *"I make AI systems easier to trust, control, and actually use."*

- **Live URL (after deploy):** `https://YOUR_USERNAME.github.io/favour-ai-product-portfolio/`
- **Design blueprint:** see [`DESIGN.md`](./DESIGN.md)

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

### 1. Set your GitHub username

Open [`astro.config.mjs`](./astro.config.mjs) and replace `YOUR_USERNAME`:

```js
const GITHUB_USERNAME = 'YOUR_USERNAME'; // TODO: change me
```

- **Project repo** (default): keep `REPO_NAME = 'favour-ai-product-portfolio'`.
  Site publishes to `https://YOUR_USERNAME.github.io/favour-ai-product-portfolio/`.
- **User site** (cleaner URL): rename the repo to `YOUR_USERNAME.github.io`, then set
  `site: 'https://YOUR_USERNAME.github.io'` and `base: '/'` (or remove the `base` line).

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
2. Edit `astro.config.mjs` → set `GITHUB_USERNAME`. Commit + push.
3. GitHub → **Settings → Pages → Source → GitHub Actions**.
4. Wait for the **Deploy to GitHub Pages** workflow (Actions tab) to finish green.
5. Visit `https://YOUR_USERNAME.github.io/favour-ai-product-portfolio/`.

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
   git remote add origin https://github.com/YOUR_USERNAME/favour-ai-product-portfolio.git
   git push -u origin main
   ```
3. Then follow **First-time publish** above.

---

## Where to update content

| What | Where |
|------|-------|
| Name, role, tagline, email, socials | [`src/data/site.ts`](./src/data/site.ts) → `site` |
| Nav links | `src/data/site.ts` → `nav` |
| Project cards + case-study meta | `src/data/site.ts` → `projects` |
| "What I design" / "How I work" | `src/data/site.ts` → `capabilities`, `howIWork` |
| Resume content | `src/data/site.ts` → `resume` |
| HERA case study | [`src/pages/work/hera.astro`](./src/pages/work/hera.astro) |
| Enterprise case study | [`src/pages/work/enterprise-tools.astro`](./src/pages/work/enterprise-tools.astro) |
| Colors / type / spacing | [`src/styles/global.css`](./src/styles/global.css) + [`tailwind.config.mjs`](./tailwind.config.mjs) |

### Add your resume PDF

Drop `Favour-Diokpo-Resume.pdf` into [`public/resume/`](./public/resume/).
Different filename? Update `resumePdf` in `src/data/site.ts`.

### Add real screenshots

1. Put images in `public/images/case-studies/`.
2. Replace the `<ImagePlaceholder label="…" />` blocks in the relevant page with an `<img>`:

   ```astro
   <img src={withBase('images/case-studies/hera-iris.png')} alt="HERA Global Iris" class="w-full rounded-card border border-line" />
   ```

   (Import `withBase` from `../data/site` so the path respects the GitHub Pages base.)

### Wire up the contact form (optional)

The contact form currently opens the visitor's email client (`mailto:`). For inline submission,
point the `<form action>` at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com)
and remove the `enctype="text/plain"` mailto fallback in [`src/pages/contact.astro`](./src/pages/contact.astro).

---

## Content status (placeholders to replace)

- 🔲 `astro.config.mjs` — set `GITHUB_USERNAME`.
- 🔲 `public/resume/Favour-Diokpo-Resume.pdf` — add the real PDF.
- 🔲 All `ImagePlaceholder` blocks — swap for real screenshots when available.
- 🔲 `site.email` / `site.socials` in `src/data/site.ts` — set real contact + LinkedIn.
- 🔲 `resume.education` — add real education details.
- 🔲 Contact form handler — optional Formspree/Web3Forms wiring.

All prose is real copy written for this portfolio — no lorem ipsum.

---

## License

Personal portfolio. All rights reserved © Favour Diokpo.

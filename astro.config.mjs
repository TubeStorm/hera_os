import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ─────────────────────────────────────────────────────────────────────────────
// GitHub Pages configuration
//
// TODO: Replace YOUR_USERNAME with your GitHub username before deploying.
//
//   Project repo URL will be:
//     https://YOUR_USERNAME.github.io/favour-ai-product-portfolio/
//
//   If you later rename the repo to `YOUR_USERNAME.github.io` (a "user site"),
//   set:   site: 'https://YOUR_USERNAME.github.io'
//          base: '/'                (or delete the `base` line entirely)
// ─────────────────────────────────────────────────────────────────────────────

const GITHUB_USERNAME = 'YOUR_USERNAME'; // TODO: change me
const REPO_NAME = 'favour-ai-product-portfolio';

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: `/${REPO_NAME}/`,
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    format: 'directory',
  },
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// ─────────────────────────────────────────────────────────────────────────────
// GitHub Pages configuration — already set to the real account.
//
//   Project repo URL:
//     https://TubeStorm.github.io/favour-ai-product-portfolio/
//
//   If the repo is later renamed to `TubeStorm.github.io` (a "user site"),
//   set:   site: 'https://TubeStorm.github.io'
//          base: '/'                (or delete the `base` line entirely)
//
//   Only change GITHUB_USERNAME below if the GitHub account changes.
// ─────────────────────────────────────────────────────────────────────────────

const GITHUB_USERNAME = 'TubeStorm';
const REPO_NAME = 'hera-os';

export default defineConfig({
  site: `https://${GITHUB_USERNAME}.github.io`,
  base: `/${REPO_NAME}/`,
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    format: 'directory',
  },
});

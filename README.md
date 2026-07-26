# HERA OS — Founder Portfolio & System Dissection

> Messy founder thinking, turned into an executable AI roadmap.

This repository powers the official web portfolio and interactive system breakdown for **HERA OS**, built by **Favour Diokpo**.

- **Live Site**: [https://TubeStorm.github.io/hera_os/](https://TubeStorm.github.io/hera_os/)

---

## About HERA OS

HERA OS is an AI workspace engineered to solve the context bottleneck in AI-assisted software development. Rather than treating prompts as disposable chat turns or forcing founders to manually manage project status documents, HERA transforms unstructured intent into persistent rooms, executable roadmaps, and parallel agentic task runs.

### Key Highlights
- **The Void**: Instant, formless intake that turns messy conversations into structured roadmaps.
- **The Transforming Composer**: A single interactive control surface that adapts to questions, reviews, decisions, and permissions without modal sprawl.
- **The Living Roadmap**: Autonomous goal advancement driven directly by accepted task executions.
- **The Long Build (Lineage)**: Built on 8+ ancestor tools spanning single-focus session managers, native sleep accountability apps, desktop overlays, system-tray timers, prompt vault extensions, on-device AI tab managers, and targeted file insertion engines.

---

## Tech Stack

- **Framework**: [Astro](https://astro.build) (Static output)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages (via GitHub Actions)

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server
npm run dev

# 3. Build static production site
npm run build
```

---

## Deployment

Deployments are handled automatically by GitHub Actions on every push to `main` via [.github/workflows/deploy.yml](./.github/workflows/deploy.yml).

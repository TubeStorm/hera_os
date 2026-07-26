# audit-export-v2 — Portfolio review package

Generated after the **Reference Ingestion Pass** (2026-07-02). This folder lets you
review the site **without running anything**.

## What's inside
- `screenshots/` — full-page screenshots of all 7 routes (1440px wide, rendered from
  the production build): `home`, `work`, `hera`, `enterprise`, `resume`, `about`, `contact`.
- `copy/` — the exact page copy for every route, extracted from the built HTML.
- `ROUTE_VERIFICATION.md` — every route + the PDF, all returning 200.
- `BROKEN_LINKS.md` — internal link sweep (0 broken; one PDF-link bug found & fixed).
- `BUILD_RESULT.md` — exact commands + pass result.
- `ASSET_LIST.md` — shipped assets + the designed diagrams used as visual proof.
- `PLACEHOLDERS_REPORT.md` — no visible placeholders remain.

## What changed this pass (short version)
Real facts from `docs/References/` replaced generic copy:
- **Ubisoft dates fixed** to *May 2021 – Present* (was wrongly 2021–2024).
- **Real research metrics** on the enterprise case study: 101-response survey,
  3.5/5 overall satisfaction, 2.16/5 "saves time", PMs 38% & 3.3/5, 40+ modals,
  five structured approval flows, three named workstreams (RPM / Work Arrangement /
  Capacity Governance).
- **Real contacts** now published: favourdiokpo@icloud.com, linkedin.com/in/favour-diokpo
  (phone kept private).
- **Resume PDF** (2026) wired for download; **real education + certifications** added.
- **About** voice sharpened with real material (money / people / game development;
  "without babysitting the system").

Full source-by-source notes: `docs/portfolio/REFERENCE_INGESTION_NOTES.md`.

## To view it live yourself (optional — already verified for you)
The builder already built, served, and verified every route. If you want to see it live:
open `dist/` with any static server, or the site is deployable to GitHub Pages at
`https://tubestorm.github.io/favour-ai-product-portfolio/`.

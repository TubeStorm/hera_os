# CLOSEOUT — Public Release Split 2026-08-19

**Status:** ✅ COMPLETE — Live on production  
**Date:** 2026-08-19  
**Branch work happened on:** `release/public-portfolio-2026-08-19` (merged to `main`, deleted)  
**Development branch:** `portfolio-week1` — untouched

---

## What was delivered

A temporary public release of the portfolio that hides unfinished Ubisoft work
and publishes a new resume, without affecting `portfolio-week1` development.

**Production URL:** https://TubeStorm.github.io/hera_os/  
**Deployed commit on main:** `9656779`

---

## What was changed (on release branch only)

| File | Change |
|---|---|
| `src/data/site.ts` | Removed "Ubisoft Work" nav item; rerouted enterprise-scale strength card to `about/`; swapped resume PDF and restored `available: true` |
| `src/pages/work/enterprise-tools.astro` | Replaced unfinished case study with NDA-safe holding page |
| `src/pages/work/index.astro` | Replaced grouped work index with minimal home redirect |
| `src/pages/about.astro` | Removed Ubisoft Work card from "Explore the work" grid; fixed title from "Senior UX Designer" to "Senior UX Specialist" |
| `public/resume/Favour-Diokpo-Resume.pdf` | Replaced with `Favour_Diokpo_AI_Product_Designer_Resume.pdf` (50 KB, Aug 2026) |

---

## Live verification (browser screenshots taken)

| Check | Result |
|---|---|
| Nav — live homepage | HERA OS · Deep Dive · About · Lineage · Contact (no Ubisoft Work) ✅ |
| `/work/enterprise-tools/` live | NDA-safe holding page only, no case study content ✅ |
| About — title | "Senior UX Specialist" ✅ |
| About — Ubisoft card | Removed ✅ |
| Resume download | "Download PDF" button active, new PDF served ✅ |
| HERA OS, Deep Dive, Lineage, Contact | All intact and correct ✅ |

---

## Branch cleanup

| Branch | Final state |
|---|---|
| `main` | At `9656779` — live on GitHub Pages |
| `portfolio-week1` | At `6aa043b` — clean, untouched, synced with origin |
| `release/public-portfolio-2026-08-19` | Deleted locally (was never pushed to remote) |

---

## What remains open

- Ubisoft Work case study development continues on `portfolio-week1`
- When Favour approves the About page and Ubisoft Work is ready, the full
  content will be restored via a new sprint merge to `main`

---

*Closed: 2026-08-19 — Chief Coordinator*

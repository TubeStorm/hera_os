# Assets Needed

The site now ships with **designed editorial visuals** (system diagrams, annotated UI
cards, before/after maps) in place of every empty "screenshot placeholder." Nothing on the
site is a blank box. This file lists the **real assets** that would make it even stronger,
and the exact place each one drops in.

Until an item below is supplied, the site degrades honestly — it shows a designed diagram, a
monogram stand-in, or a "coming soon / on request" note instead of a broken link.

---

## 1. Real screenshots (optional upgrade — diagrams already cover these)

Drop images into the folders below, then replace the matching `<Figure>` + diagram component
in the page with an `<img>` (see README → "Add real screenshots").

| Asset | Suggested filename | Folder | Currently shown as |
|-------|--------------------|--------|--------------------|
| HERA Void / Home screenshot | `public/images/hera/home.png` | `public/images/hera/` | Trust-layer diagram |
| Global Iris screenshot | `public/images/hera/iris.png` | `public/images/hera/` | Iris scope map |
| Composer screenshot | `public/images/hera/composer.png` | `public/images/hera/` | Annotated composer card |
| Memory blocks screenshot | `public/images/hera/memory.png` | `public/images/hera/` | Memory-blocks card |
| Life OS screenshot | `public/images/hera/life-os.png` | `public/images/hera/` | (referenced in copy) |
| Goals / Tasks screenshot | `public/images/hera/tasks.png` | `public/images/hera/` | (referenced in copy) |
| Armory skills / tools screenshot | `public/images/hera/armory.png` | `public/images/hera/` | (referenced in copy) |
| Permissions / run-confirm screenshot | `public/images/hera/permissions.png` | `public/images/hera/` | Permission-flow diagram |
| Redacted enterprise diagram/screenshot | `public/images/enterprise/audit.png` | `public/images/enterprise/` | Modal before/after map |
| Approval flow screenshot | `public/images/enterprise/approvals.png` | `public/images/enterprise/` | Approval-flow diagram |
| Quota visibility screenshot | `public/images/enterprise/quotas.png` | `public/images/enterprise/` | Quota card |

> ⚠️ Privacy: only add redacted images. No source code, private prompts, file paths, business
> model, unreleased roadmap, or sensitive logs (see the case-study privacy note).

## 2. Portrait / headshot — **needed**

- Drop `public/images/portrait.jpg` (portrait, ~4:5).
- Then swap `<MonogramPortrait />` in `src/pages/about.astro` for an `<img>`.
- Until then, the About page shows a designed monogram card ("Portrait coming — headshot pending").

## 3. Resume PDF — ✅ **done**

- `Favour-Diokpo-Resume.pdf` (the 2026 resume) is in `public/resume/` and
  `resumeAsset.available = true`. Download works on the Resume + Contact pages.
- To replace it later, drop a new PDF at the same path (or update `resumeAsset.path`).

## 4. Real contact links — ✅ **done**

All three channels are now confirmed from `Favour_Diokpo_Resume_2026.pdf` and published:

| Channel | Field | Status |
|---------|-------|--------|
| GitHub | `contact.github` | ✅ `github.com/TubeStorm` |
| Email | `contact.email` | ✅ `favourdiokpo@icloud.com` |
| LinkedIn | `contact.linkedin` | ✅ `linkedin.com/in/favour-diokpo` |

> Phone number from the resume is intentionally **not** published (privacy).
> The site still never publishes fake or unconfirmed links.

## 5. Education details — ✅ **done**

- Real education + certifications (from the 2026 resume) now render on the Resume page:
  MIT Applied Data Science, Carleton BIT, Algonquin Advanced Diploma; IBM AI Product
  Manager + Google Project Management certs. Data lives in `resume.education` /
  `resume.certifications` in `src/data/site.ts`.

---

## Summary — what's still missing vs. done

**Done (no longer blocking):**
- All screenshot placeholders replaced with designed diagrams / annotated cards.
- GitHub, Email, and LinkedIn links are real and live.
- Resume PDF (2026) is in place and the download works.
- Real education + certifications on the resume.
- No broken resume/PDF links, no fake contact links, no lorem ipsum.
- GitHub Pages username configured (`TubeStorm`).

**Still needed (real assets, optional):**
- Portrait / headshot photo (About page still shows a designed monogram stand-in).
- Optional: real, redacted product screenshots to sit alongside/replace the diagrams.

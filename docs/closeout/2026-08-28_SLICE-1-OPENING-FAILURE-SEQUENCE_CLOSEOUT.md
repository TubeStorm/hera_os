# HERA Homepage Opening Failure Sequence (Slice 1) — Closeout

**Date:** 2026-08-28
**Branch:** `portfolio-week1`
**Favour Accepted:** Pending

---

## What you can do now

You can open the homepage and actually watch the problem HERA solves happen to you, before any pitch copy explains it. It plays automatically: an AI finishes a task fast → `.md` files start piling up → short panicked thoughts surface over the pile → it hits a visually overwhelming breaking point with no caption telling you what you just saw → then the mess clears decisively into the real HERA logo, "# HERA," and a line that cycles "You lead. It remembers the project" through four variants before landing held on "You lead. HERA keeps up."

The nav also now correctly presents **HERA OS** as the site's brand — the real gold ouroboros logo plus "HERA OS" text on the top left — instead of your name and initial. Your own identity is untouched everywhere else (About page, resume, etc.).

Refreshing the page replays the whole thing from the start. Scrolling past the landing state continues into the existing demo video exactly as it did before this slice.

## What changed

- New homepage opening sequence (`src/components/OpeningFailureSequence.astro`), replacing the old "HERA OS / Messy founder thinking..." hero and the scroll-reveal wall of text beneath it.
- Nav brand mark swapped from a plain "F" + your name to the real HERA logo + "HERA OS" (`src/components/Nav.astro`). Your identity string (`site.name`) itself was left untouched — it's still used correctly on the About page.
- The old scroll-hijacking script that drove the hero/text-reveal sections was trimmed down to remove only what those sections needed; the demo-video and "how it works" sections below were not touched and still behave exactly as before.
- A real bug in the old scroll-lock code (found in a phase the builder built to replace it) got fixed along the way: scrolling back out of the locked demo-video section could permanently trap you there. Confirmed fixed by watching it happen live, twice.
- Two mobile-only defects were found by independent testing and fixed in a second pass: the nav was clipping "Contact" off the edge of the screen on phones, and the file/thought clutter was overlapping and truncating filenames at mobile widths. Both re-checked directly and confirmed clean at 375px.

**Explicitly not touched, per the slice's own boundary:** Iris, the coordination section, the demo section itself, the footer/agent-crowd strip, and the Early Access funnel's design.

## What was proven

An independent verifier and a separate live tester (neither one had written the code) each opened the real running page in a browser and checked it against the 14 written acceptance criteria — not just read the source. 10 of 14 passed clean on the first look. The 2 real defects they found (both mobile) went through a repair pass and were then re-checked directly by the Chief in a real browser at exactly 375px, watching the animation mid-play, not just the final frame — both are confirmed fixed.

`npm run build` passes cleanly (8 routes, no errors). `npm run check` shows the same 122 pre-existing errors this repo already had before this slice touched anything (confirmed by name-matching the error output) — zero new errors in either file this slice changed.

## What is not finished

- **`prefers-reduced-motion: reduce` was never watched in a real browser.** Every browser tool available this session (the embedded pane, and this session had no working alternative transport set up) could emulate dark mode but not reduced-motion. The code itself implements it correctly, using the exact same pattern already trusted elsewhere on this site — but per this repo's own rule, "looks right in the code" isn't the same as "we watched it," so this stays open rather than being quietly called done.
- **One cosmetic-only issue (BUG-004):** at one laptop width, a screenshot caught the "You lead. HERA keeps up." headline and the outgoing clutter both faintly visible in the same frame for a beat — a brief crossfade rather than a hard cut. The very next frame was clean. Left alone deliberately rather than risk destabilizing working timing for a cosmetic issue.
- **A branch-state fact worth knowing, not a defect in this slice:** the work packet assumed the Early Access signup funnel already lived on `portfolio-week1` (it's referenced in `Footer.astro` per the sprint record). The verifier found it actually only exists on `main` — this branch doesn't have it yet. Nothing in this slice could have broken it, since it isn't here to break, but it means "Early Access is preserved" couldn't be meaningfully checked on this branch, and whether/when to bring that branch state together is a call for you or a future slice, not something this session decided unilaterally.

## What I need from Favour

**Please open the link below and watch the whole sequence at least once, then scroll past it into the existing demo section, then refresh and watch it again.** Specifically:

1. Does the pacing/timing feel right, or too fast/slow anywhere? (This was left as a craft judgment call in the work packet on purpose.)
2. The sequence uses the site's normal light/dark adaptive background rather than a hardcoded black canvas (unlike the existing demo section below it, which is always black). Is that the right call, or did you want the opening cinematic to always be black regardless of your system theme?
3. Does "HERA OS" as the homepage brand read correctly to you, knowing your own identity now lives only on the About page?

Also worth a decision from you at some point (not blocking this review): whether/when the Early Access funnel work on `main` should come into `portfolio-week1`.

## What happens next and why

Once you've watched it and tell us what you think, this closes for real and Slice 2 (the rest of the homepage) can be scoped. Nothing further should start on the homepage until you've seen this.

---

## Retrospective

- **What took longer than expected:** the scroll-hijacking JS integration (removing the old hero/lit modes while keeping the demo-video section's locked-scroll behavior intact) was more delicate than the packet anticipated — it's where the real "scroll back out gets you stuck" bug was hiding, and it only showed up from actually trying the interaction twice in a row, not from reading the code.
- **What the packet should have said but didn't:** it assumed Early Access already existed on this branch. A quick `git log --all --oneline -- src/components/Footer.astro` or branch check before writing packet assumptions about existing functionality would have caught this before, not after, the build.
- **Workflow correction already made in-session:** the Chief initially launched the first builder with `isolation: "worktree"`, which this repo's `AGENTS.md` explicitly forbids. Caught immediately, worktree removed, relaunched correctly. Logged in `CHEAT-SHEET.md` so it isn't repeated.
- **A genuine tooling gap, not a product gap:** this session's browser tooling had no `prefers-reduced-motion` emulation available in any transport tried, and the live-tester's attempt to work around a "can't save screenshots" limitation by reaching for an OS-level screen capture briefly (and immediately, harmlessly) captured the user's real personal browser window instead of the sandboxed pane. Both are now written into `BROWSER-TESTING-PROTOCOL.md` so the next session doesn't rediscover either the hard way.
- **What a future Chief shouldn't have to re-learn:** the exact CSS-specificity trap that caused BUG-003 (inline `style` attributes beat media-query class overrides, silently) is now in `CHEAT-SHEET.md` — worth a glance before writing any more responsive positioning logic that mixes inline styles with breakpoint overrides.

## Bugs & cheat sheet touched?

- `docs/agent-system/BUGS.md`: 4 rows added this slice (BUG-001 through BUG-004); BUG-001, BUG-002, BUG-003 closed/verified-fixed; BUG-004 left open (cosmetic, documented above).
- `docs/agent-system/CHEAT-SHEET.md`: multiple entries added — the worktree rule, the scroll-lock re-trap pattern, Claude Browser pane reliability quirks this session, the `npm run check` pre-existing baseline, the `npm run preview` file-lock note, and the inline-style-vs-media-query specificity trap.

---

## Project records updated

- `docs/agent-system/CURRENT-SPRINT.md` — new entry added for this slice; fixed the pre-existing unresolved merge-conflict markers in the sprint table (BUG-001) along the way.
- `docs/agent-system/work-packets/closed/SLICE-1-OPENING-FAILURE-SEQUENCE.md` — moved from `active/`, closure header added.
- `docs/agent-system/BUGS.md` — see above.
- `docs/agent-system/CHEAT-SHEET.md` — see above.
- `docs/agent-system/BROWSER-TESTING-PROTOCOL.md` — added the "never use an OS-level screenshot as a workaround" rule after the live-tester incident.

---

## Technical receipt

- **Branch:** `portfolio-week1` (all work in the primary repo folder, no worktree — see retrospective)
- **Commit(s):** none yet — changes are uncommitted in the working tree, awaiting your review before committing
- **Files changed:** `src/components/OpeningFailureSequence.astro` (new), `src/pages/index.astro`, `src/components/Nav.astro`; assets added under `public/images/hera/logo/` and `public/images/ui/`
- **Build check:** `npm run build` — exit 0, 8 pages, 0 errors
- **Type check:** `npm run check` — 122 pre-existing errors (unrelated baseline, confirmed unchanged), 0 new in changed files
- **Verifier result:** FAIL on first pass (1 confirmed defect + 2 unverifiable-in-browser gaps) → repair → re-verified directly by the Chief → both confirmed defects now Closed; reduced-motion gap remains open per above
- **Defects found:** 4 (BUG-001 through BUG-004) — 3 closed, 1 open (cosmetic, non-blocking)
- **Repairs made:** Nav mobile-overflow fix; mobile clutter-positioning/truncation fix (see BUGS.md for root causes)
- **Visual/browser check:** Performed — by builder, independent verifier, independent live tester, and the Chief directly (mobile re-check)
- **Mobile check:** Performed — 375–481px range, both by the live tester and the Chief directly at exactly 375px

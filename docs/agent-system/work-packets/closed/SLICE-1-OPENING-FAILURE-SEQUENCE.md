**STATUS: 🟡 BUILT + VERIFIED — WAITING FOR FAVOUR REVIEW — 2026-08-28 — build → verify → repair → re-verify cycle complete. Not yet reviewed by Favour. See `docs/closeout/2026-08-28_SLICE-1-OPENING-FAILURE-SEQUENCE_CLOSEOUT.md`.**

# Slice 1 — HERA Homepage Opening Failure Sequence + First HERA Reveal

Source instruction: `docs/preflights/hera website revamp/Slice 1.md` (read in full — this packet condenses it but does not replace it).
Design direction source: `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Current Idea.md`.

## Objective

Replace the current homepage opening (`#hero-section` + `#lit-section` in `src/pages/index.astro`) with a new animated sequence that dramatizes "your AI finished in 3 minutes, but the real work — managing the mess around it — is just starting," escalating through five phases, then clearing decisively into the first HERA logo reveal and a cycling "You lead..." statement. Also correct the nav brand identity so the homepage presents HERA, not Favour, as the site brand.

**Everything from `#video-section` downward in `index.astro` is out of scope and must be preserved exactly as-is**, functionally and visually, including the Early Access funnel (lives in `Footer.astro`, not touched by this packet) and the footer agent strip (already shipped — do not touch).

## The five phases (full detail in `Slice 1.md` — do not skip reading it)

1. **Apparent success.** Clean, controlled. The AI completes a task fast. Feels good.
2. **The mess multiplies.** `.md` files begin appearing one at a time (paced — one, then another, then another, then suddenly too many), using the Explorer-file visual language, icon at `public/images/ui/md-file-icon.png`, each with a realistic filename beneath it.
3. **Human context fights for attention.** Short human thought-lines surface over the growing clutter, escalating in urgency. Art-direct which ones appear and when — do not dump the whole example list at once.
4. **Breaking point.** Visually ridiculous overload: documents, AI output, context questions, PM noise. No explanatory paragraph — the visitor must feel the problem before HERA says anything.
5. **Clear it.** Not a lazy fade — the page visibly regains control. Real HERA logo reveals, then `# HERA`, then a cycling statement, landing on a final held state.

## Exact content to use (temporary/placeholder prose — do not polish into marketing claims)

**Phase 1 opening line:** "Your AI finished in 3 minutes."

**Phase 1 "AI response" content** (verbatim, from `Current Idea.md` — use as the fast/impressive AI output that later gets buried):
```
USER: Make a small website change

AGENT: Better - but for a reason worth naming. Your instinct was right
and the diagnosis was more literal than a layout preference:
clicking a variant did change the answer, but the answer was
rendered below the fold behind a collapse, and re-rendering the
pane threw away its scroll position, so the screen snapped to
the top. Two separate faults producing one feeling of "nothing
responded." The scroll reset was a straight bug - panes now
keep their own scrollTop across a render, so clicking a tile no
longer moves the page at all. That fix alone was worth it.

The column is the other half. Selection has to change something
at eye level, and it now does: the detail column sits beside the
viewer, never scrolls away, never collapses, and fades on change
so the swap is visible. The variant grid is where your cursor is;
the answer is one glance right of the image it describes.

USER: 😨 or 🫩
```

**Phase 2 filename pool** (pick and pace a subset — do not show all simultaneously): `CURRENT-SPRINT.md`, `handoff.md`, `task-03-notes.md`, `decision-log.md`, `research.md`, `FINAL-final-v2.md`, `task-3-closeout.md`, `FINAL-roadmap-v2.md`, `handoff-latest-REAL.md`, `agent-context-new.md`, `fix-notes-final-final.md`.

**Phase 3 human-thought pool** (pick and pace a subset, escalating): "Did I give it the right file?", "Is that still current?", "Where did it save that?", "Wait. We already did this.", "Which task are we on?", "Why did it make another branch?", "STOP MAKING NEW BRANCHES."

**Phase 5 cycling statement** — fixed prefix "You lead. It", cycling suffix, one evolving statement (never five feature cards):
1. You lead. It remembers the project.
2. You lead. It keeps the work moving.
3. You lead. It knows where the work lives.
4. You lead. It keeps decisions attached.
5. You lead. It asks when the decision is yours.

**Landing state (held, not cycling further):** "You lead. HERA keeps up." — give this its own distinct held beat; it breaks the "It" pattern deliberately (HERA named directly) to read as the resolved state.

## Assets (already placed — reference, do not modify)

- `public/images/hera/logo/hera-logo-1254.webp` (use this one — real HERA logo, gold ouroboros ring + star, dark-background mark, public-safe, no attribution needed)
- `public/images/hera/logo/hera-logo-1254.png` (fallback)
- `public/images/ui/md-file-icon.png` (the `.md` Explorer-style icon)

**Logo motion, verbatim CSS available for reuse** (from HERA's own source, `docs/preflights/hera website revamp/Task 0/HERA Asset Bridge/01 HERA LOGO.md`):
```css
@keyframes hera-logo-pulse {
  0%,100% { opacity:1;   filter:drop-shadow(0 0 8px  rgba(158,129,254,.58)) drop-shadow(0 0 18px rgba(76,91,255,.28)) }
  50%     { opacity:.78; filter:drop-shadow(0 0 18px rgba(214,202,254,.88)) drop-shadow(0 0 28px rgba(76,91,255,.5)) }
}
@keyframes hera-logo-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
```
Glow is violet, not gold — that's intentional in HERA's own app. `pulse` 2.4s ease-in-out is the more likely fit for a reveal moment; `spin` 18s linear is available if it reads better in context. Use your judgment, but don't invent new logo treatments from scratch when this exists.

## Design system to reuse (do not invent new tokens)

Read `docs/agent-system/DESIGN-EXECUTION-STANDARD.md` first. Reuse `src/styles/global.css` tokens (`--paper`, `--ink`, `--muted`, `--faint`, `--line`, `--accent`) and existing utility classes (`.container-page`, `.container-prose`, `.reveal`, `.eyebrow`, `.section`). The site is dark-restrained by default in `prefers-color-scheme: dark` — match the existing hero/lit sections' visual register (see the CSS you're replacing in `index.astro` for the current tone: black canvas, warm gold/cream accents, restrained). Chaos comes from **behavior and pacing of objects**, not decorative graphics.

## How the sequence plays (your call within these constraints)

- **Autoplay, not scroll-hijacked.** This is the first thing visible on page load — start it automatically (on load or on first intersection, matching the existing `.reveal` IntersectionObserver convention in `BaseLayout.astro`). Do not wire it into the old wheel-hijacking scroll system described below.
- **`prefers-reduced-motion: reduce`** must render the landing state directly — real logo, "You lead. HERA keeps up." — with no escalating clutter animation. This must be a coherent, complete-feeling end state, not a frozen first frame.
- **Refresh replays it** naturally (component re-mounts, sequence restarts from Phase 1). That alone satisfies the "replay behavior" verification requirement; an in-page replay control is optional polish, not required.
- **After landing**, the visitor can scroll down normally into the rest of the page — see integration instructions below.
- **Typography must stay readable through the motion.** Respect the existing type scale/hierarchy classes already in the design system rather than inventing new sizes.
- **Mobile needs an authored adaptation**, not a shrunk desktop layout — the phase pacing and clutter density should feel intentional at mobile width, not cramped.

## Integration with the existing scroll system (do exactly this — do not improvise a different approach)

`index.astro`'s current `<script>` implements a scroll-hijacking state machine with modes `hero → lit-scroll → lit-gate → video → loop → free`. You are deleting the `hero` and `lit-*` modes and everything that supports only them:

- Delete the `#hero-section` and `#lit-section` markup blocks, and their component-scoped CSS (`.hero-gate`, `#lit-text` rules, `.lit-gate-stack`, the `lit`/`near`/`w` word-lighting classes, etc.). Keep `.gate-screen`, `.video-gate-stack`, `.scroll-gate` and everything used by `#video-section` / `#loop-section` — those stay.
- Delete these script pieces entirely: `heroSection`, `heroNext`, `litSection`, `litText`, `litNext`, the `words` array and word-lighting logic, `litEnd()`, `updateLit()`, `goToHero()`, `goToLitStart()`, `goToLitGate()`, and the `heroNext`/`litNext` event listeners.
- `video` mode becomes the effective entry mode for the scroll-hijacking system, but **do not lock scroll above `#video-section`** — the visitor scrolls freely and normally through your new opening component. When `#video-section`'s top reaches the viewport top, resume the existing locked "video" behavior exactly as it is today (`lockScrollAt(sectionTop(videoSection))`, wheel-prevented, `videoNext` advances to `goToLoop(0)`).
- The one required behavior change inside `video` mode: today, scrolling up while locked calls `goToLitGate()`. Since `lit-gate` no longer exists, scrolling up while locked in `video` mode must instead simply **unlock and let the visitor scroll back up normally** into the new opening section (do not replay the cinematic on scroll-up — it only autoplays once per pageview, on load).
- Update `initialiseModeFromPosition()` accordingly: if `scrollY` is above `#video-section`'s top, there is no lock (treat as free/normal scroll through the new component); the existing logic from `#video-section` downward (`video`, `loop`, `free` modes) is otherwise unchanged.
- Do not touch `#loop-section`, `#discoveries-section`, or the closing bio section.

## Nav brand identity fix

In `src/components/Nav.astro`, replace the current left-side brand mark (the `F` avatar + `{site.name}` = "Favour Diokpo") with the real HERA logo image (`public/images/hera/logo/hera-logo-1254.webp`) + the text "HERA OS". **Hardcode "HERA OS" directly in `Nav.astro` — do not change `site.name` in `src/data/site.ts`**, since that value is Favour's identity used correctly elsewhere (About page, resume, etc.). Keep the link target (`withBase('')`, home). **Preserve the existing `nav` array/destinations exactly** — this is a brand-mark change only, not a navigation-structure change.

## Explicit exclusions (per `Slice 1.md` — do not build any of these)

- Iris (any sprite, animation, or mention as a character)
- The coordination section
- The demo section (`#video-section` content itself — preserve, don't touch)
- The crowd/footer-agent system (already shipped in `Footer.astro` — do not touch)
- Any Early Access funnel redesign (preserve exactly as-is)
- Any decision about the rest of the homepage beyond this opening

## File lane

- **New:** `src/components/OpeningFailureSequence.astro` (or split into a couple of tightly-scoped sub-components under `src/components/` if that's cleaner — your call, stay minimal)
- **Edit:** `src/pages/index.astro` (remove hero/lit sections + their CSS/script per above; insert the new component at the top; adjust the script per the integration instructions above)
- **Edit:** `src/components/Nav.astro` (brand mark only)
- **Do not edit:** `src/data/site.ts`, `Footer.astro`, any other page, `global.css` (add scoped component styles instead unless a genuinely reusable token is missing — if so, say why in your handoff rather than just adding it)

## Acceptance criteria (verifier will check these — number them in your handoff notes)

1. Loading `/` shows the new opening sequence automatically, starting at Phase 1, with no user interaction required to begin.
2. All five phases are observably present and in order when watching the full sequence load-to-landing (not just inspecting final markup).
3. `.md` files in Phase 2 appear one at a time with visible pacing (not all at once), using the provided icon and realistic filenames with visible names beneath each.
4. Phase 3 human-thought lines appear over the accumulating clutter, escalating — a real subset of the pool, not the entire list dumped at once.
5. Phase 4 reads as visually overloaded with no explanatory caption/paragraph telling the visitor what they just saw.
6. Phase 5 clears the mess decisively (not a fade), reveals the real HERA logo asset, shows `# HERA`, then cycles the five "You lead. It ___" lines as one evolving statement (same fixed prefix, changing suffix — not five separate cards), and lands held on "You lead. HERA keeps up."
7. `prefers-reduced-motion: reduce` shows the landing state (logo + final line) directly, with no clutter-escalation animation, and it's a complete, coherent state — not a blank/frozen first frame.
8. Refreshing the page replays the sequence from Phase 1.
9. Nav left brand shows the real HERA logo image + "HERA OS" text, links to home, and all six existing nav destinations (`HERA OS` demo-page link is unaffected — note this label collision is pre-existing between the nav array's first item and the new brand mark; do not resolve it in this packet, just don't make it worse) still resolve correctly. Early Access entry point in the nav still opens/functions.
10. Scrolling down past the landing state reaches `#video-section` exactly as it behaves today (video plays/is visible, scroll locks there as before, `videoNext` still advances to the loop demo).
11. Scrolling back up from a locked `#video-section` returns the visitor to the new opening section without re-triggering the cinematic.
12. Desktop (≥1440px), laptop (~1280–1366px), and mobile (≤430px) widths all render without clipping, overlap, or illegible text; mobile is an authored adaptation, not a visibly shrunk desktop layout.
13. `npm run build` and `npm run check` both pass; no regressions on `/about/`, `/work/hera/`, `/contact/`, or other existing routes.
14. No content beyond what's specified above was invented as if it were a real product claim (temporary AI-response prose must not read as a polished marketing quote).

## Expected return

Use the `portfolio-builder` return format. Additionally state explicitly: which phases you were able to fully realize vs. approximate, any place you deviated from this packet and why, and anything you deliberately left for the verifier to judge (e.g. exact pacing timings, since "art-direct the sequence" is inherently a craft call).

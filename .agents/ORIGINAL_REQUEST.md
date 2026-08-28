# Original User Request

## 2026-08-26T20:29:21Z

Ship an enhanced HERA Early Access signup funnel to the public `main` branch of `TubeStorm/hera_os`, adding a discovery-source dropdown, a deterministic HERA alias per signup, an agent preview in the success state, and labeled footer agents — without merging any unfinished Ubisoft portfolio development work into the public site.

Working directory: `D:\Documents\favour-ai-product-portfolio`
Integrity mode: development

---

## Verified Git truth (do not re-investigate)

```
main           9656779  [origin/main]           ← public live site
portfolio-week1 16472c7  [origin/portfolio-week1] ← carries unfinished About/Ubisoft dev

main → portfolio-week1 gap (commits IN main NOT in portfolio-week1):
  9656779  chore(main): merge public release split 2026-08-19
  fd64d4b  chore(release): add new resume PDF and restore download gate
  8734aac  chore(release): hide Ubisoft work and disable resume for public launch

portfolio-week1 → main gap (commits IN portfolio-week1 NOT in main):
  16472c7  docs(closeout): record public release split 2026-08-19   ← docs only
  (many more commits = unfinished About page / Ubisoft dev work — DO NOT BRING THESE TO MAIN)
```

**The Early Access work from the previous session is currently UNCOMMITTED working-tree changes on `portfolio-week1`.** The relevant files are:

- `src/components/EarlyAccessSurface.astro` (NEW — untracked)
- `src/components/Nav.astro` (modified — EA nav link added)
- `src/layouts/BaseLayout.astro` (modified — EA surface mounted)
- `src/pages/index.astro` (modified — EA inline line added)
- `src/components/Footer.astro` (modified — visitor agent session logic added)

Read each of these files from the working tree BEFORE creating the public branch.

---

## Required Git workflow

1. Read the working-tree EA files listed above while still on `portfolio-week1`.
2. Create branch `early-access-public` FROM `main` (`git checkout -b early-access-public main`).
3. Apply ONLY the EA-related source files to this new branch — do NOT bring:
   - Ubisoft case study pages or assets
   - About page dev work
   - `.agents/` orchestrator state files
   - `TEST_INFRA.md`, `TEST_READY.md`, `PROJECT.md`
   - Any route, screenshot, or copy that was hidden in the public release split
4. Apply all enhancements described below.
5. Build and verify.
6. Merge `early-access-public` into `main` (fast-forward preferred).
7. Push `main` to origin.
8. Verify the live GitHub Pages deployment.

Do NOT merge `portfolio-week1` into `main`. Do NOT merge `main` back into `portfolio-week1` during this task.

---

## Requirements

### R1. Preserve and port the existing Early Access surface

The existing `EarlyAccessSurface.astro` must be ported cleanly to the `early-access-public` branch. All current functionality must remain working:

- Three entry points: nav `Join early access`, homepage inline one-liner, persistent bottom-right `Early access ✦` launcher
- Floating panel anchored bottom-right (not a modal, no dark curtain)
- Panel title: `Want in?`
- `ⓘ` icon revealing privacy note on interaction only
- Fields: email (required), name (optional), use-case textarea (optional), early-tester checkbox
- Submit: `Count me in`
- States: idle, loading, success, invalid email, backend failure
- Escape key closes panel; focus trap; focus returns on close
- `localStorage` persistence: launcher reads `You're on the list ✓` after signup across page refreshes
- Formspree AJAX POST to `https://formspree.io/f/mwlkevkp` with JSON body and `Accept: application/json` header
- Zero submitted emails or private credentials in any committed file or build output

### R2. Add discovery-source dropdown

Add an optional field to the form:

**Label:** `How did you find HERA?`

Render as a `<select>` (or equivalent native control — use existing site visual language, no custom-styled dropdowns that require heavy CSS or JS). Options, in order:

- *(blank / placeholder — "Choose one…" or equivalent)*
- LinkedIn
- Reddit
- X / Twitter
- GitHub
- Search
- Friend / word of mouth
- Article / blog
- Other

When **Other** is selected, reveal a small optional text input below it:

**Label:** `Where did you find HERA?`

Hide this text input when Other is not selected. Do not pre-display it.

Submit to Formspree as:
- `how_heard` — the selected option value (omit if blank/unselected)
- `how_heard_other` — the free-text value (omit if empty or Other not selected)

Neither field is required. Do not block form submission if they are empty.

### R3. HERA alias — deterministic, email-derived, no collision claims

Every signup receives a short fictional HERA alias. Requirements:

- **Format:** one short word + a small separator (`-`, `_`, or `+`) + a 2-digit number. Total length: short. Examples: `Moss-47`, `Nova_18`, `Kite+03`, `Mica_44`, `Rune-20`, `Pip_81`, `Aster+12`. Never more than a few short words. Avoid slashes or characters problematic in HTML, analytics, or CSV exports.
- **Deterministic:** the same normalized email must always produce the same alias. Implement using a hash of the lowercase-trimmed email mapped into a word list × number space. The namespace must be large enough that collisions between different emails are extremely unlikely in practice (aim for thousands of distinct aliases minimum).
- **No raw email derivable:** the alias must not be trivially reversible to the original email.
- **Honesty:** this site is static. Do not claim or imply global uniqueness checking against Formspree's private submission database. The alias is probabilistically unique due to namespace size, not guaranteed by a live deduplication query.
- **Persistence:** after successful signup, store the alias in `localStorage`. On subsequent opens of the panel, retrieve and reuse the same alias — do not generate a different one.
- **Formspree field:** submit the alias as `hera_alias` in the Formspree payload.
- **Waypoint requirement:** at waypoint, describe the chosen word list, hash function, and namespace size so Favour can understand what was built.

### R4. Success state — show the assigned agent visually

Remove the phrase `Go catch Iris.` from the success view entirely.

After successful signup, the success state inside the panel must show:

1. `You're in.` (existing — keep)
2. The visitor's HERA alias, displayed above the agent render
3. A small visual render of the visitor's pixel agent — the same amber wanderer that will appear in the footer — drawn inline in the confirmation surface. Use a small canvas or equivalent pixel-art rendering consistent with the footer sprite system. It must look like the footer agents, not a generic icon.
4. Below the agent: `You'll find your agent hanging out with Iris at the bottom of the page.`

Keep this extremely restrained — no additional headings, subheadings, or explanatory stacks.

The panel then closes automatically (same timing as before). When it closes, that same agent must appear in the footer.

If the user opens Early Access again after already signing up, the form may re-display, but the site must reuse the existing stored alias and not generate a new identity.

### R5. Footer agent labels

Add small name labels above the relevant agents in the footer canvas:

- **Iris:** label `Iris` in the existing site gold/accent color (`--accent` CSS variable). Iris's label may be slightly larger or bolder than visitor aliases. No pill, border, or background behind the label.
- **Visitor agent (if present in session):** label displays their stored HERA alias. Color: white or subtle light tone. Smaller than Iris's label.
- Other existing background agents: no label.

Labels must feel native to the tiny pixel world — small, floating just above the sprite's head, rendered on the same canvas. Do not add DOM elements over the canvas. Render the text directly via `ctx.fillText`.

Preserve all existing footer animation, Iris behavior, and other agents exactly. Do not redesign the footer.

### R6. Future-proofing — no fake global crowd

Do not render any count of total signups. Do not pretend the static site can read Formspree's private submission database.

Structure the footer agent system so that the local visitor's agent can later be supplemented by server-provided aliases (e.g., an array of `{alias, colors}` objects) without redesigning the footer rendering loop. A comment in the code noting the extension point is sufficient.

### R7. Design restraint

The existing HERA OS site is the visual authority. Do not add:

- Unnecessary borders on interactive elements
- Cards around form sections
- Eyebrow labels
- Heading + subheading + paragraph stacks
- Gradients
- Fake social proof or waitlist counts
- Generic SaaS UI patterns

The `<select>` for the source dropdown should use the same input class as the existing text inputs. Minimal styling only.

The success agent preview should feel like a natural extension of the HERA world, not a marketing badge.

### R8. Complete Formspree submission

The Formspree payload must contain all of:

- `email` (required)
- `name` (optional)
- `use_case` (optional)
- `early_tester` (boolean)
- `how_heard` (optional — omit if blank)
- `how_heard_other` (optional — omit if blank)
- `hera_alias` (always — the deterministic alias)
- `_source: "hera-early-access"` (hidden tracking field)

---

## Before coding — required waypoint

Publish a waypoint at `docs/agent-system/WAYPOINT-2026-08-26_EA-V2-PUBLIC.md` covering:

- Exact Git steps planned (branch name, which files are ported, what is excluded)
- Confirmation that Ubisoft dev work will not cross into `main`
- The alias word list, hash approach, and namespace size
- The inline agent rendering approach for the success state
- The label rendering approach for the footer canvas
- Which files will be modified or added

Do not begin implementation until the waypoint is written.

---

## Acceptance Criteria

### Git boundary
- [ ] `main` after the merge contains NO files from the About page dev work, Ubisoft case study pages, or any route/asset hidden in the public release split
- [ ] `portfolio-week1` is not touched during this task
- [ ] The merge commit on `main` is cleanly reachable and the push succeeds to `origin/main`

### Functional
- [ ] All three entry points (nav, homepage inline, bottom-right launcher) open the same panel
- [ ] `How did you find HERA?` dropdown is present and optional
- [ ] Selecting `Other` reveals the free-text field; deselecting hides it
- [ ] `how_heard` and `how_heard_other` appear in Formspree submission fields
- [ ] A HERA alias is generated and displayed in the success state
- [ ] The same email always produces the same alias (deterministic)
- [ ] `hera_alias` appears in Formspree submission fields
- [ ] After reload, the existing alias is retrieved from storage — no new alias is generated
- [ ] Success state shows: "You're in.", alias, small pixel agent render, footer instruction — no "Go catch Iris."
- [ ] The visitor's pixel agent appears in the footer after signup in that session
- [ ] Iris is labeled `Iris` in accent/gold color in the footer
- [ ] Visitor agent label shows the HERA alias in white/subtle color
- [ ] All other existing footer agents and Iris behavior remain intact
- [ ] Escape key closes panel; Tab/focus trap works
- [ ] Invalid email shows inline error without submitting
- [ ] Backend failure shows `Something went wrong. Try again?`
- [ ] Launcher reads `You're on the list ✓` after signup, persists across refresh

### Build and security
- [ ] `npm run build` exits 0 with no errors
- [ ] No private API credential in any committed file or build output
- [ ] No submitted email or personal data committed to Git
- [ ] Grep `dist/` for email address patterns — zero hits for user-submitted data
- [ ] Grep source files for Formspree endpoint — present (expected, not a secret)

### Proof — screenshots required (agent must self-inspect before closing)
- [ ] Nav with `Join early access` visible
- [ ] Panel open with discovery dropdown visible
- [ ] Other option selected + free-text field revealed
- [ ] Success state showing alias + agent render + footer instruction
- [ ] Footer with Iris label (gold) and visitor alias label (white/subtle)
- [ ] Launcher in `You're on the list ✓` state
- [ ] Mobile (≤390px) — panel usable, no overflow

### Deployment
- [ ] `main` pushed to `origin/main`
- [ ] GitHub Pages deployment triggered
- [ ] Live URL `https://TubeStorm.github.io/hera_os/` loads and shows `Join early access` in nav
- [ ] A real Formspree submission is made and confirmed visible in the Formspree dashboard
- [ ] Submission includes `how_heard`, `hera_alias`, and all other required fields

### Closeout
- [ ] `docs/closeout/2026-08-26_EA-V2-PUBLIC_CLOSEOUT.md` written using the closeout template at `docs/agent-system/CLOSEOUT-TEMPLATE.md`
- [ ] `docs/agent-system/CURRENT-SPRINT.md` updated
- [ ] Report includes: public URL, deployed commit hash, Formspree field proof, alias method, pages/viewports checked, Ubisoft exclusion confirmation, anything deferred

---

## Reference files (read before touching anything)

- `DESIGN.md` — visual authority
- `src/styles/global.css` — existing CSS custom properties and tokens
- `src/components/EarlyAccessSurface.astro` — current working-tree EA component (currently on `portfolio-week1` as an untracked file)
- `src/components/Footer.astro` — current working-tree footer with session visitor agent logic
- `src/components/Nav.astro` — current working-tree nav with EA link
- `src/layouts/BaseLayout.astro` — current layout mounting EA surface
- `src/pages/index.astro` — homepage with inline EA line
- `docs/agent-system/CLOSEOUT-TEMPLATE.md` — closeout format
- `docs/agent-system/WAYPOINT-TEMPLATE.md` — waypoint format

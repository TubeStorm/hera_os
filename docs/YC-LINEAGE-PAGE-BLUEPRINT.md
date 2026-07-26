# YC Lineage Page Blueprint

**Date:** 2026-07-16
**Status:** Specification only. No implementation may begin from this document without a separate approved preflight.
**Companion documents:** YC-FOUNDER-THESIS-AND-NARRATIVE.md (the argument), YC-FOUNDER-EVIDENCE-LEDGER.md (claim-by-claim verification), YC-HERA-DEEP-DIVE-BLUEPRINT.md (the separate HERA page).

---

## 1. Name, route, and thesis — final recommendation

### Navigation label: `Lineage` — **keep**

Pressure-tested against alternatives:

| Candidate | Verdict |
|---|---|
| **Lineage** | ✅ Communicates descent and inheritance between projects — which is the page's entire argument. Short, unusual without being cute. |
| Other Work | ❌ Leftovers framing; explicitly banned by strategy. |
| Before HERA | ❌ Defines the work by absence; makes the projects prologue instead of evidence. |
| Provenance | ❌ Archival/forensic connotation; about objects, not a person's trajectory. |
| Track Record | ❌ Corporate résumé tone; invites skimming. |
| The Long Build (as nav label) | ❌ Too long for navigation; works better as the page title it already is. |

### Page title: `The Long Build` — **keep**

It states the founder case in three words: she was building long before there was a company. No stronger alternative found.

### Route: `/work/lineage/` — **keep**

Consistent with the existing `/work/hera/` structure. Full local URL: `http://localhost:4321/favour-ai-product-portfolio/work/lineage/`.

### Opening thesis — **keep with one edit**

Working copy: "HERA was not a sudden idea. It is where years of building systems for focus, behavior, context and execution finally converged."

Recommended final: **"HERA was not a sudden idea. It is where years of building systems for interfaces, orchestration, behavior, and context finally converged."**

Rationale: "focus" undersells WallPlanner/Pomodoro and reads as productivity-app language; the four nouns should mirror the four featured systems exactly (interface, orchestration, behavior, context). "Execution" is dropped from the noun list because execution is the property of all of them — it belongs in the sentence that follows, not the list.

---

## 2. Role of this page (vs. every other page)

| Page | Question it answers | What it must NOT do |
|---|---|---|
| Homepage | "What is this and why should I keep reading?" — the trailer | Contain the full founder case or HERA explanation |
| HERA page | "What has this founder seen about AI work that others misunderstand?" | Mention old projects beyond one link to Lineage |
| **Lineage page** | **"Is this founder behavior real, repeated, and relevant?"** | Explain HERA's product internals; become a UX portfolio |
| Founder/About | "Who is she, factually?" — name, Ubisoft, contact | Re-argue the case; duplicate Lineage content |
| Demo | "Does the product actually work?" | Carry narrative weight |
| Contact | "How do I reach her?" | Anything else |

Cross-linking rule: HERA page links to Lineage once ("See the systems that led here"); Lineage ends by linking to the HERA page. No content duplication between them.

---

## 3. Information architecture

```text
The Long Build
│
├── 1. Opening founder statement            (one paragraph + thesis line)
├── 2. The four systems that led to HERA    (1 flagship + 3 features)
│     ├── Handoff        — context          (flagship, largest)
│     ├── WallPlanner    — interface
│     ├── NGuard         — behavior
│     └── Pomodoro Timer — orchestration
├── 3. Before HERA had a name               (full chronological timeline)
│     └── every legitimate project, grouped by period
├── 4. Convergence                          (four threads join into HERA)
└── 5. Single link → HERA page
```

### 3.1 Opening founder statement

One paragraph, first person, no biography. Approved direction (edit for voice, keep the substance):

> I built these tools because I needed them. There were no customers waiting, no investors watching, and no public identity to maintain. I saw friction, designed a system around it, built the product, and used it. HERA is not the beginning of that behavior. It is the largest expression of it.

Follow with the thesis line (§1). Nothing else above the featured systems.

### 3.2 The four featured systems

Layout: Handoff as one large flagship block; WallPlanner, NGuard, Pomodoro as three substantial but smaller blocks. **No visible #1–#4 ranking.**

Fixed content skeleton per feature (all seven fields required, in this order):

```text
The problem I noticed
The convention I rejected
What I built instead
Evidence that it worked          (dates, commits, artifacts — never adjectives)
What it proved                   (about the founder, one sentence)
Where it lives in HERA           (the direct inheritance, one sentence)
[10–30 second demonstration]     (recording or screenshot sequence)
[Read the decision →]            (expandable mini case study)
```

Per-system content direction:

**Handoff — context (flagship).**
Problem: stopping and returning destroys working context; the browser makes context-switching frictionless to the point of chaos. Convention rejected: the browser as a neutral surface; "did you finish?" as the end-of-session question. Built: one enforced active subject; global Inbox; three subject-creation modes matched to the user's state of clarity; the wrap-up flow — messy notes in, AI-rebuilt dossier out; optional bidirectional Obsidian sync; 184KB vanilla JS, no build tools, one week (April 2026). Proved: context is a product object, not text in a chat. In HERA: the Void's messy intake, the Objective, migration that preserves the conversation, resumable runs. Demo: the wrap-up flow end-to-end (~30s). Expandable: the asymmetry insight — input should be allowed to be messy because the *system* owns cleaning it; exactly how human memory and AI capability should divide labor.

**WallPlanner — interface.**
Problem: planners demand a context switch to be consulted. Convention rejected: a planner must be an application window at all. Built: transparent Electron overlay compositing with the wallpaper; boards, notes, subtasks; hotkey toggle; 57 commits over 16 months (Oct 2023 – Mar 2025). Proved: she challenges the physical assumption of the interface itself — and stays with an idea for years. In HERA: software as a place; surfaces that communicate rules before instructions; the workspace that reconfigures around the user instead of navigating them away. Demo: overlay appearing/disappearing over the desktop (~15s). ⚠ Asset gap: README's screenshot1.png does not exist; everything must be captured fresh.

**NGuard — behavior.**
Problem: you intend to sleep at midnight; you look up and it's 3 a.m. Convention rejected: sleep apps record behavior after the fact; accountability tools shame. Built: cue schedule anchored to target bedtime (3.5h → 0), each cue a short notification with explicit choices (Done / 15 min / Still working / Sleep now / Skip Today); morning check-in logs reality; weekly adaptation that never punishes a bad week; 14 named application states; native SwiftUI + WidgetKit (April–May 2026). Proved: she designs behavioral systems as formal state machines — and writes the spec first (321-line product document). In HERA: intervening at the right behavioral moment — review gates, blockers, the composer transforming into exactly the decision the moment requires. Demo: cue → response → morning check-in (device recording; pending Mac/device capture). Expandable: the non-punishment rule as a product-ethics decision.

**Pomodoro Timer — orchestration.**
Problem: a timer you must remember to start is a to-do item, not a system. Convention rejected: the timer as a session you initiate. Built: multiple independent timers, each with its own days-of-week, operating window, work/break durations, custom .wav; system tray + auto-launch background execution; real scheduling via node-schedule; 30+ commits in 48 hours (May 2025). Proved: "define the rules and let the system execute them" — three years before agent orchestration was a category. In HERA: goals with parallel task lanes, scheduled execution, runs that proceed without being re-initiated. Demo: two timers configured differently firing independently (~20s). ⚠ Asset gap: no screenshots exist.

### 3.3 The timeline — "Before HERA had a name"

Every legitimate project appears; weight varies. Chronological groups with git-verified dates (all dates below are from commit history, evidence appendix, re-spot-checked 2026-07-16):

```text
── 2023 · The reflex forms ─────────────────────────────
2023.04–06   TotalTally        purchase tracker w/ custom bar chart; earliest structured commits ([UI][DEV][BUG])
2023.08      GalleryGrouper    image distributor — noticed friction, shipped same day (12 commits, one day)
2023.08      CourseMate        course tracker; 12 Python UI prototypes before implementation; live SQLite db
2023.09      CollageWhiz       collage builder in 9 days; generated layout stays editable
2023.09      ClockIt           punch-in/out tracker; deliberately minimal; V2 maintained Jan 2024
2023.10  ►   WallPlanner       [FEATURED — expands inline]                    (active through 2025.03)
2023.11–12   LifeStream        Unity life sim — build mode, 3D scenes, working grocery economy (33 commits)

── 2024 · Range and maintenance ────────────────────────
2024.01      ClockIt V2        returning to maintain old work
2024.06      Fitbit Tic-Tac-Toe  a game with an AI opponent under severe wearable constraints

── 2025 · Systems thinking sharpens ────────────────────
2025.05  ►   Pomodoro Timer    [FEATURED — expands inline]  (48-hour build)
2025.06      Aurora PCStats    Flask + psutil stats widget; personal infrastructure, overbuilt beautifully
2025.??      HERA begins       (old HERA: rooms, War Room, game world — the mistake that taught the lesson)

── 2026 · The AI-native suite ──────────────────────────
2026.04      The Crucible      prompt forge + vault; README names what it will NOT become
2026.04      TabSuite          browsing session as named, recoverable state; on-device AI grouping
2026.04      Obsidian Companion  vault editing without leaving the browser (155KB script)
2026.04      StickyTabs        diegetic notebook UI for persistent links
2026.04  ►   Handoff           [FEATURED — expands inline]  (one-week build)
2026.05  ►   NGuard            [FEATURED — expands inline]
2026.05      LifeLogger        tap-logger; predictive widget with five designed states; P0/P1/P2 spec
2026.05      Obsidian Shortcuts  visual workflow builder for vault actions
             _Tracker CSVs     (mention inside iOS entries as "she builds trackers to manage her builds" — not a timeline node)

── convergence → HERA ──────────────────────────────────
```

Each ordinary entry answers, in ≤4 short lines: friction noticed / what she built / the decision that made it hers / honest completion status + year + evidence link (repo, screenshot, or demo). The four featured projects appear in the timeline at their true dates as compact nodes with "Read the decision →" expanding the §3.2 mini case study inline — do not duplicate the full feature blocks.

**Exclusions (do not appear publicly):** gut-check-ios (pre-implementation; likely an early LifeLogger draft — confirm before ever mentioning), CourseMate's database file (personal data; the project itself may appear, its db may not), LifeStream source/assets (third-party license review required; the entry may appear with original screenshots only), _Tracker CSV contents (reference their existence, never their contents).

### 3.4 Convergence section

Ends the page. Four threads visually join into HERA. Copy must name the inheritance precisely, one line per thread:

```text
WallPlanner   → the interface lives where the user already is      → HERA's rooms and reconfiguring workspace
Pomodoro      → rules execute so the human doesn't re-initiate     → HERA's goals, lanes, and parallel runs
NGuard        → intervene where intention drifts                   → HERA's review gates and transforming composer
Handoff       → context survives stopping                          → HERA's Objective, migration, and resumable work
```

Followed by one sentence and one link: "HERA is where these four systems became one." → `/work/hera/`. Do not summarize HERA here.

---

## 4. Copy direction

- First person throughout. Plain declarative sentences. No founder adjectives ("visionary," "passionate"), no "genius," no Steve Jobs comparisons, no "years ahead of its time."
- Every claim carries its evidence inline: dates, commit counts, durations, file sizes only where they prove discipline (never as boasting), platform names.
- Honest completion status on every entry ("working V1, last commit March 2025," "substantially built, unreleased," "requires developer-mode install"). A precise limitation reads as strength.
- AI involvement stated plainly where true (extensions use on-device/local AI; HERA built with AI coding agents directed by the founder). Never hidden, never apologized for.
- No technology laundry lists. Name the stack only when the stack is the point (vanilla JS with no build tools; native SwiftUI; Fitbit SDK constraints).

## 5. Visual and motion direction

- Consistent with the existing portfolio system (dark, serif display headings, restrained). No new design language for this page.
- Timeline is a single vertical spine on all viewports; period group headers are sticky on desktop.
- Featured expansion ("Read the decision") is an inline accordion — never a modal, never a page navigation (consistent with the founder's own anti-modal law).
- Motion: one signature move only — timeline nodes fade/slide in on scroll, and the four convergence threads animate joining into a single line at the end. Everything else static. The page must never feel like a motion showcase.
- Each ordinary entry: exactly one visual (screenshot or ≤15s looping capture). Featured entries: one hero visual + one demonstration.
- Mobile: features stack full-width; timeline entries collapse to title + year + one line, tap to expand; convergence renders as a static stacked list (no animation).

## 6. Asset requirements (complete list)

| Asset | Source | Status |
|---|---|---|
| Handoff: dashboard, active subject w/ Start Here, wrap-up modal, inbox screenshots + 30s wrap-up recording | Load unpacked in Chrome | ❌ capture needed |
| WallPlanner: overlay-on-wallpaper hero shot, board/note screenshots, 15s toggle recording | `npm start` (node_modules present) | ❌ capture needed — README screenshot confirmed missing |
| NGuard: device/simulator recording of cue→response→check-in; product-document excerpt image | macOS + Xcode or device | ❌ blocked on Mac/device |
| Pomodoro: timer-list + schedule-config screenshots, 20s dual-timer recording | Run app or installer | ❌ capture needed |
| TabSuite: side-panel grouping + snapshot/restore screenshots | Load unpacked | ❌ capture needed |
| Crucible: before/after prompt clean screenshot | Load unpacked | ❌ capture needed |
| StickyTabs: one hero screenshot | Load unpacked | ❌ capture needed |
| TotalTally / ClockIt / GalleryGrouper / CollageWhiz / CourseMate: one screenshot each | Run each Electron app / extension | ❌ capture needed (CourseMate: UI only, never the db) |
| LifeStream: 1–2 original gameplay screenshots (no third-party asset close-ups) | Unity editor or existing captures | ❌ license review first |
| Fitbit Tic-Tac-Toe: photo or simulator shot | Fitbit simulator | ❌ capture needed |
| Aurora PCStats: browser widget screenshot | `python pc_stats_server.py` | ❌ capture needed |
| LifeLogger / Obsidian Shortcuts: device recordings or design-doc excerpts | macOS/device | ❌ blocked on Mac/device |
| Commit-history screenshots (WallPlanner 16 months; Handoff week; Pomodoro 48h) | `git log` renders | ⚠ decide on email exposure first (ledger item N-4) |

## 7. Verification requirements before anything ships

1. Every project shown running on the founder's machine, screenshot/recording captured, date recorded — this converts the ledger's "stated by founder" rows to "verified."
2. Founder-name pass across all copy (must read Favour Diokpo; no "Jane," no bare "TubeStorm" as a name).
3. Privacy pass per the evidence ledger (db files, certs, tracker contents, Ubisoft material, git email decision).
4. Every date cross-checked against the git-history table in YC-FOUNDER-PREVIOUS-WORK-EVIDENCE.md.
5. Honest-status line present on every entry.

## 8. Strict scope boundaries for implementation

- This page only. No changes to the HERA page, homepage, navigation structure (beyond adding the `Lineage` nav item), or any existing case study.
- No new global design tokens, fonts, or color roles. Reuse the existing system exactly.
- No modification to any source project repository — assets are captured from them, nothing is committed to them.
- No public repository visibility changes as part of implementation (that decision is tracked separately in the ledger).
- Placeholder discipline: where an asset is pending (iOS recordings), ship the entry with its text and an honest "device recording coming" note — never a fabricated or AI-generated stand-in screenshot.
- Implementation requires its own preflight referencing this blueprint; this document does not authorize code.

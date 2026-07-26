# YC Founder Thesis and Narrative

**Date:** 2026-07-16
**Type:** Internal strategy document. Not public copy.
**Founder name for all public materials:** **Favour Diokpo** (see "Founder-name audit" below — do not use any other identity in application or website copy).
**Primary sources:** FAVOUR-FOUNDER-OPERATING-MODEL.md, YC-FOUNDER-PREVIOUS-WORK-AUDIT.md + EVIDENCE.md, New Truth documents, preflights/tasks 2 (+drafts), report folder audits (2026-07-10 → 2026-07-16), live inspection of HERA on 127.0.0.1:8765/8766 and the portfolio dev site on localhost:4321 (this session).

---

## 1. The definitive founder thesis

> **Favour Diokpo repeatedly notices when software assigns the wrong work to the human, redesigns the operating model around the person's actual intention, and executes that redesign into a working product. She has done this at least sixteen times over three years, on four platforms, before any investor, customer, or public identity existed. HERA is the largest and most complete expression of that pattern — and the pattern, not HERA alone, is what YC would be investing in.**

Three properties make this thesis strong, and each is evidenced rather than asserted:

### 1a. The pattern predates the stakes

Every previous product was built for herself, with no audience. TotalTally (April 2023) through the iOS apps (May 2026) were built while holding a taxing full-time UX role at Ubisoft (~5 years, sole UX designer across roughly nine internal production tools — number requires confirmation before public use). Nobody was watching. The behavior is therefore intrinsic, which answers YC's real underlying question: *will this person still be building in eighteen months if the current plan changes?* The answer is documented in git history: she built through 2023, 2024, 2025, and 2026 regardless of outcome.

### 1b. The pattern is specific, not generic "builds stuff"

Each project rejects a specific inherited convention:

| Project | Inherited convention | Her rejection |
|---|---|---|
| WallPlanner | A planner is a window you open | The desktop surface *is* the planner |
| Pomodoro Timer | A timer is something you start | Timers are scheduled objects governed by rules and operating windows |
| NGuard | Sleep apps track what happened | Intervene at the exact moment intention becomes drift; never punish a bad week |
| Handoff | The browser is a neutral surface | One active subject, enforced architecturally; wrap-up turns messy notes into preserved context |
| TabSuite | Tabs are ephemeral | A browsing session is a named, recoverable state |
| The Crucible | Tools accumulate features | The README names what the product will *not* become |
| HERA | The user must translate intent into software structure | The system determines what the input should become |

### 1c. The lessons compound into HERA

This is not sixteen disconnected apps. Four separate investigations converge:

```text
WallPlanner (2023–2025)   →  interface lives where the user already is     →  HERA's spatial rooms, workspace beside chat
Pomodoro (2025)           →  define rules, let the system execute          →  HERA's goals, lanes, parallel task execution
NGuard (2026)             →  intervene at the behavioral moment            →  HERA's review gates, blockers, composer transformations
Handoff (2026)            →  context must survive stopping and returning   →  HERA's Objective, memory, migration, resumable runs
```

HERA unifies surface, orchestration, behavioral intervention, and context continuity into one system. The lineage is traceable project by project (see YC-LINEAGE-PAGE-BLUEPRINT.md for the per-project proof).

---

## 2. Why HERA is the culmination, not an isolated idea

The honest sequence, all documented in her own repository:

1. **She used AI agents to build HERA and hit a wall that wasn't generation.** Her own words (drafts, July 2026): generating work was no longer the bottleneck — preserving product intent, deciding what happens next, reviewing outputs, and keeping the project coherent was. This is a discovered problem, not a whiteboarded one.
2. **Early HERA repeated the industry's mistake.** The first HERA was rooms, forms, a "War Room" chat, and project-management conventions — the user translating themselves into software again. The current portfolio site's HERA page still documents this old model (it must be rewritten; see YC-HERA-DEEP-DIVE-BLUEPRINT.md).
3. **She diagnosed the mistake in writing, then rebuilt.** The New Truth documents and preflight drafts show the raw diagnosis → written spec → prototype → implementation → forensic audit loop, repeatedly. The Void (arrive messy, structure is earned), the transforming composer, the living roadmap cascade, honest "Worked for" language, and artifact review gates each have a documented decision trail.
4. **The rebuilt spine runs today.** Verified live this session on 127.0.0.1:8765: Void chat with real model runs, room cockpit with breadcrumb and workspace rail, a real roadmap with derived goal status ("2 done · 1 blocked", completion circle 2/3), honest "Worked for 37s" entries, and versioned artifacts behind review gates. The roadmap cascade — the single P0 gap named in the 07-15 readiness audit — was implemented the same day with a 29-test offline suite, a live API-level proof, and Playwright verification (HERA-ROADMAP-CASCADE-IMPLEMENTATION-REPORT.md).

The correct claim is therefore not "she had a great idea." It is: **she has been independently investigating the separate components of HERA for three years, hit the unifying problem personally, misbuilt it once, diagnosed her own mistake with unusual honesty, and rebuilt it into a running system inside two weeks of a YC deadline.**

---

## 3. Strongest founder evidence — ranking

Which products most powerfully demonstrate unusual founder judgment, persistence, execution, and evolution. (This is NOT the demo ranking; see §4.)

1. **Handoff** — the HERA thesis in miniature: messy human input → interpretation → preserved operational context → deliberate continuation. The wrap-up flow is a genuine product invention. Three subject-creation modes matched to the user's state of clarity. 184KB of disciplined vanilla JS, no framework, built in one week (April 2026). The single strongest direct precursor to HERA.
2. **NGuard** — the deepest product *thinking* on paper and in code: a 321-line product document, a 14-state formal state machine for a behavioral product, a weekly adaptation algorithm with an explicit non-punishment rule, and 150KB ContentView.swift. Proves she specifies like a founder before building — and that "designs behavioral systems, not screens" is literal.
3. **WallPlanner** — the persistence proof and the earliest interface-conviction proof: 57 commits over 16 months (Oct 2023 – Mar 2025) on the idea that the planner should be the desktop surface itself. Novelty plus staying power, from before AI tools made building cheap.
4. **Pomodoro Timer** — the orchestration leap: per-day scheduling, operating windows, background execution, independent parallel timers — built in 48 hours (30+ commits, May 2025). The clearest early evidence of "define the rules and let the system execute them," which is HERA's execution model in embryo.
5. **The Crucible** — product discipline in writing: the README names exactly what the product will not become, and documents an engineering decision (sync-storage → local storage migration) in founder language.
6. **LifeLogger** — production-grade specification habits: P0/P1/P2 feature tiers with acceptance criteria, and a five-state model for a single predictive widget — edge-state thinking most teams skip.
7. **TabSuite** — a browsing session treated as recoverable state; 177KB of vanilla JS; on-device AI. Corroborates Handoff's context thesis from a different angle.
8. **Obsidian Shortcuts** — a visual no-code workflow builder (iOS) — corroborates the orchestration thread.
9. **Obsidian Companion / StickyTabs / TotalTally / ClockIt / GalleryGrouper / CollageWhiz / Aurora PCStats / Fitbit Tic-Tac-Toe / LifeStream / CourseMate** — collectively: the reflex (build the tool the same day the friction appears), the range (Electron, Chrome, iOS, Unity, Fitbit, Flask), and the maintenance habit (ClockIt V2).

### Pressure-test verdict on the four-product hypothesis

The hypothesis (Handoff–context, WallPlanner–interface, NGuard–behavior, Pomodoro–orchestration) **survives**, with findings:

- **TabSuite** genuinely competes with Handoff on the context axis (session snapshots = recoverable state). It does not displace Handoff because Handoff adds the interpretive step — messy input rebuilt into a clean dossier — which is precisely HERA's intake thesis. TabSuite becomes first supporting evidence, not featured.
- **LifeLogger** competes with NGuard on behavioral modeling. NGuard wins on formal state depth (14 states vs. 5) and on the ethics decision (non-punitive adaptation) — the most quotable founder judgment in the portfolio.
- **Obsidian Shortcuts** competes with Pomodoro on orchestration. Pomodoro wins for the timeline (2025, pre-extension era, shows the idea maturing early), for explainability in ten seconds, and because a timer everyone knows makes the convention-rejection legible instantly.
- **The Crucible** is the strongest fifth candidate overall — but its lesson (scope discipline) supports the founder's character rather than a distinct HERA subsystem. Keep it as the leading timeline entry, not a featured system.
- No product overturns the ranking. **The featured four stand.**

---

## 4. Strongest portfolio demonstrations — ranking

Which products produce the clearest, most reliable, most visually understandable demonstrations *today, on the founder's Windows machine*. This list is deliberately different from §3.

1. **Handoff** — loads unpacked in Chrome, no build step; the wrap-up flow is a 30-second self-explanatory demo. **Caveat:** zero screenshots exist today; all assets must be captured.
2. **TabSuite** — demos instantly against the user's real open tabs; AI grouping and session snapshot/restore are visually obvious. Better demo than its founder-evidence rank.
3. **WallPlanner** — the most visually distinctive concept in the portfolio (planner composited with the wallpaper) and explainable in one screenshot — **but the README's screenshot1.png does not exist (verified this session)** and the app has not been run recently. Requires a launch-and-capture session before it can be shown.
4. **Pomodoro Timer** — the scheduling UI makes the orchestration point visually; README says screenshots "coming soon" (none exist). Requires capture.
5. **The Crucible** — clean single-purpose demo; before/after prompt cleaning reads well on camera.
6. **StickyTabs** — instantly charming (diegetic notebook UI); one screenshot carries it.
7. **NGuard / LifeLogger / Obsidian Shortcuts** — **weakest demos despite top-tier founder evidence**: they require macOS + Xcode or a device; nothing can be captured on the Windows machine. NGuard is #2 founder evidence and near-last demo readiness. Mitigation: founder captures device screen recordings; the product documents themselves are showable evidence of thinking.
8. **LifeStream / Fitbit Tic-Tac-Toe / Aurora PCStats / CollageWhiz / GalleryGrouper / ClockIt / TotalTally** — timeline entries with one visual each; not standalone demos. LifeStream additionally has third-party asset license concerns.

**The two lists differ most at NGuard (evidence #2, demo #7) and TabSuite (evidence #7, demo #2).** The Lineage page structure must not let demo convenience silently reorder the founder-evidence story: NGuard stays featured with its product document and (when available) device recordings; TabSuite works hard in the timeline.

---

## 5. Top-four recommendation (featured systems)

**Handoff (flagship, largest treatment), WallPlanner, NGuard, Pomodoro Timer.**

Public presentation order: Handoff first as flagship; then WallPlanner (interface), NGuard (behavior), Pomodoro (orchestration) as equal supporting features. Do not print #1–#4 rankings publicly. Each featured system maps to the HERA subsystem it seeded (see §1c) and that mapping is the entire point of featuring them.

---

## 6. Evidence and weaknesses — stated plainly

### What is verified

- Git history for every project: authorship, dates, commit counts (evidence appendix, re-spot-checked this session — WallPlanner 2023-10-27 → 2025-03-14; My_Extensions April 2026; iOS repo May 2026; TotalTally April 2023).
- HERA's core loop live in the browser this session: Void chat, room cockpit, living roadmap with derived goal status, Worked-for entries, workspace/composer/chat separation, internal dev hub, roadmap cockpit ("HERA Action Ledger"), image engine with per-image cost and total-spend accounting.
- The roadmap cascade implementation: 29 offline tests passing, live API-level proof including backend-restart persistence, 2 Playwright specs (implementation report, 07-15).
- The founder's own documentation trail: raw voice-to-text diagnosis → written spec → prototype HTML builds (void opening builds 3–4, roadmap lab builds 1–3, workspace builds 9–10, composer states before/after simplification) → implementation → forensic audits that call out her own product's fictions.

### What is NOT yet verified (do not claim publicly until it is)

- **Previous apps "currently work":** the founder states they run on her devices. No fresh run or screenshot exists for WallPlanner, Pomodoro, ClockIt, CollageWhiz, GalleryGrouper, CourseMate, or any extension. Extensions and Electron apps are one session away from verification; iOS apps require macOS/Xcode.
- **Memory injection in HERA:** as of the 07-15 audit, memory/files/skills are listed and counted in the UI but never injected into runs. Unless repaired since, no public claim that "HERA remembers" may be made. The honest phrasing: memory objects exist and are readable; injection is in progress.
- **Room auto-naming:** `_derive_room` produced word-salad names — visible live this session ("Moon Made Wish …", "Wants Receipe C…"). A per-run naming/objective design exists in draft. Demo flow must pre-create the room or the fix must land first.
- **Model-in-the-loop cascade:** cascade proofs patch out the model executor; a full model-driven run of the complete loop is a manual step not yet recorded.
- **User evidence:** zero external users so far. The plan (five moderated founder tests before July 24/27) exists; results do not. The application must phrase traction as "testing now," never imply usage.
- **Ubisoft "nine internal tools":** confirm number and timeframe before using.

### Structural weaknesses to own, not hide

- Solo, non-traditionally-technical founder building with AI coding agents. Framing that is both true and strong: *she runs a fleet of AI builder agents against her own specs, preflights, and acceptance criteria, then forensically audits their output* — the report folder is literal evidence of her catching agent fictions ("false component integration," fake progress, stale statuses) and forcing repairs. That is a management skill for exactly the future YC is funding, and it is HERA's own thesis being dogfooded.
- Old HERA vs. New HERA confusion in existing public material (portfolio HERA page describes the old model). Must be resolved before anything is shown.
- Windows-only, unreleased, no revenue. Standard pre-seed truths; state them without apology.

---

## 7. Founder-name audit (blocking issue for all public copy)

Identities found in the materials:

| Identity | Where | Status |
|---|---|---|
| **Favour Diokpo** | Portfolio site copy, resume PDF (Favour_Diokpo_Resume_2026.pdf), favourdiokpo@icloud.com, linkedin.com/in/favour-diokpo, audit subject lines | ✅ **The canonical public name. Use exactly this everywhere.** |
| FavourDiokpo (no space) | Git author on WallPlanner, TotalTally, Pomodoro, LifeStream, most of My_Extensions | Acceptable in commit-history screenshots; it visibly matches the canonical name |
| TubeStorm | Auto-generated GitHub handle (github.com/TubeStorm), git author on the iOS repo and some My_Extensions commits | ✅ Resolved: TubeStorm is an old auto-generated handle, **not a founder identity** — never present it as Favour's name. Public display name = "Favour Diokpo"; username rename to `favourdiokpo` planned before publication, subject to availability. Keep only as a factual GitHub-handle reference |
| ijeomaofodire@hotmail.com | Git committer email on historical commits | ✅ Resolved for YC publication: future commits use the YC founder email (favourdiokpo@gmail.com); historical commit metadata stays private and will **not** appear in public commit screenshots |
| "Jane" | Founder-video bullet script in "1 How to frame hera.md" (was "I'm Jane, founder of HERA") | ✅ Resolved: Jane is Favour's sister — not the founder, not a pen name — and was incorrectly inserted into founder materials. Corrected to "I'm Favour". Must never appear as Favour's identity |
| khenarts@gmail.com | Session/user account email | Keep out of public materials unless deliberately chosen as contact |

**Rule:** every public artifact — application, video, website, GitHub profile, showcase repos — says **Favour Diokpo**. Flag any other name during copy review; never silently propagate.

---

## 8. YC-lens map (which concern each element answers)

| YC question | Primary evidence |
|---|---|
| Unusually resourceful? | Sole UX designer across ~9 Ubisoft tools while shipping 16+ personal products; runs AI agents as a build team with specs + forensic audits; built her own dev hub, roadmap cockpit, image engine with cost accounting |
| Can she build? | Running HERA spine (verified live); 3 years of shipped tools across 4 platforms; 184KB/177KB single-file vanilla-JS apps with no scaffolding |
| Original insight? | Intention-to-Form: the system determines what input should become; persistence as an intelligent, reversible moment (Void→room migration); workflow-as-interface; honesty-gated AI narration |
| Understands the user? | She is the user (founder building with AI agents); NGuard/Handoff show behavioral empathy formalized into state machines |
| Moves quickly? | Handoff in 1 week; Pomodoro in 48h; cascade P0 identified and implemented with tests the same day (07-15) |
| Committed? | 16 months on WallPlanner; nightly building alongside a full-time job for 3 years; HERA dogfooded to plan HERA |
| Real product, not a design exercise? | Live runs, SQLite persistence, versioned artifacts on disk, review gates, restart-survival — all verified; plus her own audits distinguishing working / partial / fiction |
| Learned something competitors haven't? | Generation isn't the bottleneck — intent preservation, review, and project coherence are; temporary-vs-permanent should not be a user decision made in advance |
| Evidence beyond self-description? | Git history, running software, prototype archives, test suites, forensic audit documents — none written for an audience |

---

## 9. What YC should remember after reading

1. **The pattern is old; only the company is new.** Sixteen products over three years, built for no one's approval, each rejecting a specific inherited convention.
2. **Four of those products are HERA's organs.** Surface (WallPlanner), orchestration (Pomodoro), behavioral intervention (NGuard), context continuity (Handoff). She was investigating HERA before HERA had a name.
3. **She found the real problem by hitting it.** Building with AI agents, the bottleneck moved from generation to intent, review, and coherence. HERA is the tool she needed to build HERA — and she demonstrably uses it that way.
4. **She kills her own wrong answers.** Old HERA was rebuilt when she recognized it made humans translate themselves into software. Her audits label her own product's fictions and force honesty into the UI.
5. **If HERA pivots or fails, the behavior persists.** The evidence says she will notice the next wrongly-assigned burden and build again — she has never needed permission to.

---

## The argument in one page

**Why should YC believe Favour Diokpo is an exceptional founder capable of building HERA?**

Because the only reliable predictor of founder behavior is documented past behavior, and hers is unusually legible. Between April 2023 and May 2026, while working as the sole UX designer across roughly nine internal production tools at Ubisoft, she designed and built sixteen software products across Electron, Chrome extensions, native iOS, Unity, Fitbit OS, and Python — not tutorials or clones, but reconstructions: a planner that composites with the desktop wallpaper instead of living in a window; a Pomodoro timer rebuilt as rule-governed scheduled routines with operating windows and background execution; a sleep app that intervenes at the exact moment intention becomes drift, runs on a 14-state formal state machine, and refuses on principle to punish a bad week; a Chrome extension that enforces one active subject and turns messy end-of-session notes into clean, preserved context via AI. Each one rejects a specific convention, each one shipped as a usable system, and each one's lesson is traceable in the next.

Those four lessons — the interface should live where the user already is; work should be orchestrated by rules rather than repeatedly initiated; software should intervene where intention drifts; context should survive stopping — are, precisely, HERA's four load-bearing systems. HERA is not her first idea. It is her sixteenth product and her first company, begun when she personally hit the problem that defines the AI-tools decade: models generate faster than humans can preserve intent, coordinate work, review output, and keep a project coherent. Chat tools organize conversations; project tools assume you already have a plan. HERA creates and executes the plan from the conversation — the user arrives messy in The Void, and structure is earned, not demanded.

The proof standard she holds herself to is the strongest signal. Her first HERA repeated the industry's mistake — rooms, forms, project-management ritual — and she rebuilt it after diagnosing, in writing, that she was making humans translate themselves into software again. Her internal audits distinguish, line by line, what works, what is partial, and what is fiction in her own product; when a July 15 audit found that completed tasks didn't advance the roadmap — the product's literal thesis — the cascade was specified, implemented, and proven with 29 passing tests and a live persistence proof the same day. The core loop — messy idea → room → objective → generated roadmap → executed task → versioned artifact → human review → visible roadmap progress — runs today on her machine and was verified in the browser during this audit.

She is a solo founder without an engineering degree who ships by directing AI coding agents against her own specifications, preflights, and acceptance criteria, then forensically auditing what they claim — which is not a workaround; it is a working prototype of how software will be built, run by someone who has spent three years practicing exactly the judgment it requires. What remains unproven is ordinary and named: no external users yet (five moderated founder tests are planned before the deadline), memory injection still being wired, iOS demos pending a Mac. What is proven is rare: a founder who has been converting noticed friction into working systems, unprompted and unpaid, for her entire adult professional life — and whose accumulated lessons happen to assemble into exactly the product the moment demands.

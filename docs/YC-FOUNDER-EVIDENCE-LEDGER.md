# YC Founder Evidence Ledger

**Date:** 2026-07-16
**Purpose:** every public claim, its evidence, and its clearance status. A claim may appear in the YC application or on the website only when its row here is ✅ Verified and its privacy column is clear. Update this ledger whenever a claim's status changes; never ship copy whose row is ⚠ or ❌.

**Verification codes:** ✅ = verified by audit/live inspection · 🟡 = evidence exists but not re-verified recently / verified indirectly · ⚠ = stated by founder, unverified · ❌ = missing or contradicted.

---

## A. Founder identity

| # | Claim | Evidence | Source | Asset needed | Status | Privacy | YC app | Website |
|---|---|---|---|---|---|---|---|---|
| N-1 | Founder name is Favour Diokpo | Resume PDF, site copy, icloud email, LinkedIn slug | portfolio `src/data/site.ts`, `public/resume/` | — | ✅ | none | ✅ | ✅ |
| N-2 | "Jane" appeared in founder-video script | Jane is Favour's sister — not the founder, not a pen name — incorrectly inserted into founder materials | `Y COMBINATOR/1 How to frame hera.md` (corrected to "I'm Favour") | — | ✅ resolved — identity error fixed; replace every founder-reference occurrence with Favour Diokpo | none | ❌ never use "Jane" | ❌ never use "Jane" |
| N-3 | GitHub handle is github.com/TubeStorm — auto-generated, not a deliberate founder identity | All repo remotes | git remotes, verified 07-16 | Public display name = "Favour Diokpo"; username rename to `favourdiokpo` planned before publication, subject to availability | ✅ resolved | low | ✅ (handle only, never as a name) | ✅ (handle only) |
| N-4 | Git committer email `ijeomaofodire@hotmail.com` appears in historical commits | git log, all repos | verified 07-16 | Future commits use the YC founder email (`favourdiokpo@gmail.com`); historical commit metadata remains private and will not appear in public commit screenshots | ✅ resolved for YC publication | **medium** (history) | n/a | old history kept private |
| N-5 | ~5 years at Ubisoft; sole UX designer across ~9 internal tools | Resume + founder statement | resume PDF; audit §Deliverables | Confirm tool count + timeframe | ⚠ confirm before use | Ubisoft confidentiality — role description only, no tool names/screens | after confirm | after confirm |

## B. Previous products — existence, dates, authorship

| # | Claim | Evidence | Source | Asset needed | Status | Privacy | YC app | Website |
|---|---|---|---|---|---|---|---|---|
| P-1 | 16+ distinct products built 2023–2026 | 20 project trees; git history table | evidence appendix; spot-checked 07-16 | — | ✅ | see per-project rows | ✅ | ✅ |
| P-2 | WallPlanner: 57 commits, Oct 2023–Mar 2025 | git log (2023-10-27 → 2025-03-14, author FavourDiokpo) | repo, verified 07-16 | commit-history screenshot (after N-4) | ✅ | proprietary license — disclose | ✅ | ✅ |
| P-3 | WallPlanner is a transparent desktop-overlay planner | README, component source | repo | fresh screenshots + 15s recording | 🟡 code-verified, not run | none | after capture | after capture |
| P-4 | WallPlanner README screenshot exists | — | `assets/images/screenshot1.png` | — | ❌ confirmed missing 07-16 | none | n/a | n/a |
| P-5 | Handoff: single-focus tracker w/ AI wrap-up, built in ~1 week Apr 2026 | README + changelog, 184KB sidepanel.js, git | My_Extensions repo | screenshots + 30s wrap-up recording | 🟡 code-verified, not run | placeholder "sk-ant-api03-..." is a UI hint, not a key — safe | after capture | after capture |
| P-6 | Pomodoro: per-day scheduled multi-timer, 30+ commits in 48h May 2025 | git, package.json (node-schedule) | repo | screenshots + 20s recording | 🟡 | none | after capture | after capture |
| P-7 | NGuard: 14-state behavioral iOS app, non-punitive weekly adaptation | 321-line product doc, 150KB ContentView.swift | `My_Apps_IOS/NGuard` | device/simulator recording (needs Mac) | 🟡 docs+source verified; app not run | review Swift source before publishing | doc-based claims ok | after capture |
| P-8 | "Applications and extensions currently work on my devices" | Founder statement 07-16 | task brief | run-and-capture session per product | ⚠ | — | phrase as "built and working on my machines" only after captures | same |
| P-9 | TabSuite / Crucible / StickyTabs / Obsidian Companion: working extensions Apr 2026 | source + README + git | My_Extensions | screenshots each | 🟡 | Obsidian Companion: confirm `obsidian-local-rest-api.crt` is localhost-only before repo publish | after capture | after capture |
| P-10 | LifeLogger: five-state predictive widget, P0/P1/P2 spec | 265-line feature list, source | `My_Apps_IOS/LifeLogger` | device recording (Mac) | 🟡 | review before publish | doc-based ok | after capture |
| P-11 | LifeStream: Unity life sim with working economy | 33 commits, .csproj, scenes | repo | original screenshots only | 🟡 | **third-party asset licenses (AdvancedPeopleSystem2, ProPixelizer, UMotion) — no code/asset publishing** | mention ok | screenshots after license check |
| P-12 | CourseMate exists with live db | repo + coursemate.db | repo | UI screenshot only | ✅ | **never publish coursemate.db (personal data)** | mention ok | UI only |
| P-13 | gut-check-ios is a distinct product | 18KB design doc identical to LifeLogger's | `My_Apps_IOS/gut-check-ios` | — | ❌ likely an early LifeLogger draft | — | ❌ omit | ❌ omit |
| P-14 | _Tracker CSVs = she builds trackers for her builds | 3 CSVs, 28–36KB | `My_Apps_IOS/_Tracker` | — | ✅ existence | contents unreviewed — reference existence only | ✅ as one line | ✅ as one line |

## C. HERA — current product claims

| # | Claim | Evidence | Source | Asset needed | Status | Privacy | YC app | Website |
|---|---|---|---|---|---|---|---|---|
| H-1 | Void intake: messy prompt → real model run → survey → honest response | Live run in 07-15 audit (claude-haiku-4.5); Void surface seen live 07-16 | readiness audit §0, §B; browser session | demo recording | ✅ | scrub personal room names from any capture | ✅ | ✅ |
| H-2 | Void→room migration preserves conversation; atomic, idempotent, re-parents runs | Audit trace of state machine; migration preflights | readiness audit; Void migration plan | **the signature recording** | ✅ mechanics | — | ✅ | ✅ |
| H-3 | Room auto-naming is intelligent | `_derive_room` hardcoded/word-salad; live rooms "Moon Made Wish Could", "Wants Receipe C…" seen 07-16 | readiness audit P0; live session | — | ❌ fiction today | — | ❌ do not claim; pre-create demo rooms | ❌ |
| H-4 | Living roadmap: goals with derived status advancing from completed tasks | Cascade spec + implementation: 29 offline tests, live API proof w/ restart persistence, 2 Playwright specs; roadmap seen live 07-16 ("2 done · 1 blocked", 2/3 circle) | cascade implementation report; live session | ≤15s recording of approval advancing goal | ✅ (model-in-loop path simulated — see H-9) | — | ✅ | ✅ |
| H-5 | Versioned artifacts on disk with provenance + review gates | Audit-verified endpoints; files under Documents/HERA | readiness audit rows 13–15 | screenshot | ✅ | scrub real file paths | ✅ | ✅ |
| H-6 | Honest "Worked for" — narration only from real events; branching silent unless genuine | semantic_runtime honesty gate; live "Worked for 37s" seen 07-16 | readiness audit; Humanizing-Iris + Honest-Branching research | screenshot | ✅ | — | ✅ | ✅ |
| H-7 | "HERA remembers" / memory in runs | Memory counted+displayed, never injected (`_build_run_stack` inactive) | readiness audit P1 | — | ❌ fiction as of 07-15 | — | ❌ say "memory readable; injection being wired" | ❌ same |
| H-8 | One composer transforming across workflow states | Composer catalogue live 07-16 (Chat/Void/Goal/Task/Survey/Review); composer seen in room | catalogue; live session; composer-states screenshots | state-strip stills | ✅ | catalogue itself stays internal | ✅ | ✅ |
| H-9 | Full loop end-to-end with a live model, on camera | Cascade proofs simulate the executor; intake half verified with real model | implementation report §8 | **one recorded full live-model run** | ⚠ pending recording | — | after recording | after recording |
| H-10 | Two review systems can disagree (task Done vs artifact Waiting) | 07-16 forensic audit (proven incident) | task/artifact review state audit | — | internal only | — | n/a (repair queue) | n/a |
| H-11 | Users/traction | none yet; 5 moderated tests planned pre-deadline | framing doc | test results | ⚠ future | participant consent for recordings | only as "testing now" once true | same |
| H-12 | Built while dogfooding: HERA's audit→spec→build loop used to build HERA | This report chain (07-10 → 07-16) + roadmap cockpit | report folder; `/dev/roadmap` live | 1 cockpit screenshot max | ✅ | internal docs quoted selectively; no raw logs | ✅ | ✅ |
| H-13 | AI coding agents used for implementation, directed + audited by founder | Preflights w/ acceptance criteria; forensic repair reports (false-integration catch) | `preflights/tasks 2/*` | short quote of a repair finding | ✅ | quote carefully; no internal tool dumps | ✅ own it | ✅ |

## D. Old HERA / pivot claims

| # | Claim | Evidence | Source | Asset needed | Status | Privacy | YC app | Website |
|---|---|---|---|---|---|---|---|---|
| O-1 | Old HERA was rooms/forms/War Room + game world, and was rebuilt on a new thesis | Current portfolio HERA page (documents old model); legacy WarRoom still in codebase; New Truth docs | portfolio page (seen live 07-16); readiness audit row 19 | 1–2 old screenshots labeled "first version" | ✅ | old screenshots already redacted | ✅ as the pivot story | ✅ |
| O-2 | Current portfolio HERA page describes the product accurately | — | live page 07-16 | — | ❌ describes old HERA as current | — | — | **page must be replaced before sharing URL** |

## E. Private-repository strategy (recommendation)

**HERA source stays private.** YC evaluates via demo video + application, not source access. Public-evidence model:

```text
GitHub profile (TubeStorm, display name "Favour Diokpo")
→ public identity; pinned repos curated; profile README links to the site

Portfolio website
→ the narrative + recordings (Lineage page, HERA page, demo)

Public showcase repos (per selected project)
→ README, screenshots, architecture notes, release binaries — not private dev source

Private repos
→ HERA itself; anything unreviewed
```

Per-channel rulings:

| Channel | Ruling |
|---|---|
| Public product website | ✅ primary evidence surface |
| Public demo video | ✅ required; follow the two-video split (founder video = talking, per YC rules; product demo separate) |
| Obscure/unlisted demo URL | 🟡 acceptable for the application's demo link; do not treat obscurity as security — nothing sensitive behind it |
| Public docs/showcase repos | ✅ preferred model for old projects (option 2): screenshots, README, releases; avoids full source review burden |
| Sanitized architecture diagrams | ✅ good expandable-note material for the HERA page |
| Making selected old repos public | 🟡 only after per-repo review: N-4 email decision, credential scan, license check (LifeStream ❌, CourseMate db ❌) |
| GitHub profile cleanup | ✅ do before submission: display name, pinned repos, profile README |
| Release binaries | 🟡 nice-to-have for WallPlanner/Pomodoro; unsigned Windows installers trigger SmartScreen — mention, don't rely on |
| Screenshots of verified commit history | ✅ strong evidence; blocked on N-4 email decision |
| Inviting reviewers into private repos | ❌ never — personal-repo collaborators get write access; nobody expects source access |

## F. Standing privacy rules

1. No Ubisoft internal tool names, screenshots, or artifacts anywhere. Role description only.
2. No raw HERA logs, prompts, file paths, API keys, or model-routing internals in any public asset.
3. No personal data: coursemate.db, tracker CSV contents, real room names from personal use, real spending figures beyond a single deliberately chosen honest-cost example.
4. Founder quotes from raw drafts: short excerpts only, chosen to show diagnosis quality; never dump full drafts.
5. Every recording captured on a clean test dataset (pre-created demo rooms), per the framing doc's test-machine rules.

# YC HERA Deep-Dive Page Blueprint

**Date:** 2026-07-16
**Status:** Specification only. No implementation may begin without a separate approved preflight.
**Scope:** the HERA page at `/work/hera/` — completely separate from the Lineage page.
**Blocking finding:** the current live HERA page describes **old HERA** (War Room chat, game-inspired framing, Global Iris right rail, pixel-agent system map) as the product. Under the interpretation rules — current behavior and New Truth documents are authoritative; obsolete behavior must not be presented as current — **the page requires a full narrative replacement, not an edit pass.** The old material survives only inside the "first mistake" section as evidence of the pivot.

---

## 1. What the page must answer

Who is this for: a YC reader (or partner-track reviewer) deciding whether HERA is a real product with a real insight, in under four minutes of reading. Not design recruiters. Not AI Twitter.

The page answers, in order: what she observed → what everyone else's tools get wrong → what she got wrong first → the breakthroughs the mistake produced → what runs today → what is honestly unfinished → why she specifically can build this.

It is a narrative of decisive discoveries — **not a feature tour.** Feature enumeration is the failure mode; every section must be organized around a decision, with the feature appearing only as the decision's consequence.

---

## 2. Page narrative (section by section)

### §1 The observation

> AI became able to create pieces of a product faster than founders could preserve intent, coordinate the work, and understand what changed.

Ground it autobiographically: she was directing AI coding agents to build HERA and discovered generation was no longer the bottleneck — the project *around* the generation was. Scattered chats, prompts, outputs, planning tools; the same context re-explained; outputs with no review state; plans that never learned from completed work.

One supporting line for the market shape: chat products organize conversations; project-management products assume you already know the plan. HERA creates and executes the plan from the conversation.

### §2 The first mistake (old HERA, shown honestly)

Old HERA: rooms you had to create first, forms, a "War Room" chat, project-management conventions inside a game-world skin. The diagnosis, in her own framing: **it made humans translate themselves into software again** — the exact failure she had spent years building against.

Assets: one or two old-HERA screenshots (the current page's War Room / pixel-Void shots are usable here, relabeled as "the first version"). This section is short, unsparing, and ends on the sentence that pivots: recognizing the mistake produced the product.

### §3 The breakthroughs (the intellectual changes)

Present as before → after pairs (each is a real, documented decision):

```text
Create a room first        →  arrive messy in The Void; structure is earned
Project setup form         →  conversation interpreted into an Objective
Static generated plan      →  living roadmap that advances from completed work
Generic task list          →  parallel task lanes with real runs and states
Model output in a chat     →  versioned artifact with provenance and review state
Activity logs / AI theatre →  honest, gated "Worked for" — silence over fiction
A modal for every feature  →  one composer that transforms around the moment
```

The unifying claim (from the founder operating model, stated once): the system should determine what the user's input should become — its form, destination, state, and next action — instead of making the human perform that translation.

### §4 The proof (the loop, shown end-to-end)

One continuous demonstration of the current truth:

```text
messy thought → Void run → room (conversation preserved) → Objective
→ roadmap generated → task played → honest Worked-for → artifact lands
→ review (approve / request changes) → task Done → goal advances → roadmap moves
```

Verified live 2026-07-16 on the development build: Void chat with real model runs; room cockpit (chat · transforming composer · workspace rail: Objective, Roadmap, Memory, Artifacts, Agents, Skills, Tools); the roadmap workspace with derived goal summaries ("2 done · 1 blocked"), completion circles, and per-goal strips; "Worked for 37s" entries; versioned artifacts behind review gates.

### §5 The founder process (three to five decisive moments)

This is the section competitors cannot copy. Each moment traces the full chain **raw observation → written diagnosis → prototype → implementation → failure/contradiction → revised system → current result**, using her real documents. Recommended five (drop to the strongest three if the page runs long — keep 1, 3, 4):

**Moment 1 — Persistence became a moment, not a mode (The Void).**
Observation: every tool forces temporary-vs-permanent as an up-front user decision. Diagnosis: the drafts and "Start rough — HERA starts with intent" doc (July 2026) — a conversation should begin disposable, prove value, and become structured *without the user feeling transferred*. Prototype: hera-void-opening builds 3–4. Implementation: durable Void sessions; atomic, idempotent migration state machine that re-parents live runs while preserving the conversation and scroll. Contradiction survived: an earlier audit found the Void was still the old game surface; it was rebuilt as a real server-backed chat. Current: migration mechanics verified working (07-15 audit); room auto-naming still weak — named honestly on the page or fixed first.

**Moment 2 — The composer is a cockpit, not an input (chat / composer / workspace grammar).**
Observation: every feature was growing its own modal. Diagnosis: chat is immutable history; the composer owns unresolved decisions; the workspace owns persistent truth. Prototype: composer catalogue with modes (Chat, Void, Goal, Task, Survey, Review) — live at the dev catalogue; "composer states before we simplified" screenshots show the subtraction pass. Failure survived: the survey once appeared before Iris's question — timing destroyed context; her draft "Repair question-survey timing" is the written diagnosis. Current: one composer transforming per workflow state, verified in the running room.

**Moment 3 — Honesty became an architectural rule (Worked for + branching).**
Observation (her raw test notes, July 2026): a run error told her to "send the prompt again" while the output showed the work had happened — "this is about honesty and reliability… error is less about 'something went wrong' and more about what went wrong at what time and how the user accurately solves it." Diagnosis → research: Humanizing Iris's Worked-for; Honest Branching and Deliberation. Implementation: `semantic_runtime` honesty gate — narration renders only when backed by real events; branching renders only when the model genuinely deliberated, otherwise silence. Current: verified in code and live audit. This inverts the industry's chain-of-thought theatre and is a quotable product position: **the code emits the proof, never the model's word.**

**Moment 4 — The roadmap had to be alive (the cascade).**
Observation: the 07-15 readiness audit named the product's own thesis as its biggest fiction — completed tasks did not advance goals or the roadmap. Diagnosis: "HERA Roadmap Cascade — Product and Build Truth" (a spec that even adjudicates what Revert, Reject, Stopped, Cancelled, and Ignored honestly mean). Implementation: same-day cascade engine — derived goal status, wave barriers for parallel lanes, read-repair; 29 offline tests, live API proof including backend-restart persistence, Playwright verification of the roadmap advancing without reload. Current: verified live. This moment doubles as the dogfooding proof: HERA's own audit → spec → build loop *is* the HERA workflow.

**Moment 5 — Output became an artifact with a review state.**
Observation: a model's answer is not a deliverable; founders lose the "which version is real?" thread. Diagnosis: artifact storage agreements; review-gate preflights. Implementation: durable versioned files on disk, provenance, approve/request-changes/revert with exactly one approved version standing. Failure survived (her 07-16 audit): two parallel review systems disagreed — task marked Done while the artifact said Waiting for review; mechanism proven, documented, queued for repair. Current: review gates real; the audit itself is evidence of the standard.

Presentation per moment: 2–3 sentences of story, one evidence visual, one "what it proved" line. Use her raw drafts *sparingly and cleaned of typos only where quoted at length* — one short verbatim quotation per moment maximum.

### §6 The current truth (say exactly what is and isn't)

**Working today (verified):** Void intake with real model runs and surveys; honest Worked-for; Void→room migration preserving the conversation; Objective; roadmap generation and acceptance; task execution; durable versioned artifacts; two-tier review; task→goal→roadmap cascade; restart persistence.

**Being repaired / in progress (state honestly):** memory listed and readable but not yet injected into runs; room auto-naming/objective interpretation; duplicate-run guards beyond goal-play; the two-review-systems reconciliation; roadmap re-planning from completed work.

**Not yet:** external users (five moderated founder tests scheduled), macOS build, released binaries, multi-user.

Framing line for the section: *a founder who knows the exact boundary of her product is more credible than one pretending it is finished.*

### §7 Why her

One short section, pointing at (not duplicating) the Lineage page: four of HERA's load-bearing systems were built as independent products first. Plus the Ubisoft sentence (pending fact confirmation). Plus the AI-leverage framing: she directs AI coding agents against her own specs and audits their claims — HERA's user is exactly who she already is.

---

## 3. Evidence-to-format recommendations

| Evidence | Format on page |
|---|---|
| Void → room migration (conversation preserved while structure forms) | **The one signature animation** (screen recording, ≤20s). This is the differentiated moment; spend the motion budget here |
| Old HERA vs New HERA (War Room form-world → Void/roadmap) | Before/after comparison, two stills, slider or side-by-side |
| Roadmap advancing when a task is approved | Short recording (≤15s), §4 or Moment 4 |
| "Worked for" honesty | Screenshot of a real Worked-for thread + one-line caption; optionally the semantic-runtime gate as an expandable technical note |
| Raw draft → shipped feature (e.g., survey-timing draft → composer behavior) | Short quotation (2–3 lines) of the raw draft beside a screenshot of the shipped result |
| Cascade spec → tests → live | Expandable technical note: state model summary + test counts; not in the main scroll |
| Composer transformations | A compact state strip (Chat → Survey → Review …) as stills; the catalogue itself is internal-only |
| Prototype lineage (void builds 3–4, workspace builds 9–10, roadmap labs) | Small filmstrip inside Moment 1/2 expandables |
| Visual timeline of decision moments | The §5 section structure itself; no separate timeline graphic needed |

## 4. Internal tools — show or not

| Tool | Verdict |
|---|---|
| Composer catalogue (`/dev/mockup/new-hera`) | **Don't show as product.** One still inside Moment 2 as process evidence is enough; a public catalogue reads as design-system theatre |
| Dev hub (`/dev/`) | **Don't show.** Internal complexity without narrative value |
| Roadmap cockpit (`/dev/roadmap`) | **One screenshot maximum**, inside §7 or Moment 4, captioned "she builds instruments to manage the build" — it corroborates resourcefulness. Never as HERA itself |
| Image engine (`:8766`) | **Don't show product UI.** Its honest cost accounting ("total spent $2.31") may earn one line of copy; screenshots expose asset-pipeline noise |
| Task/preflight/report system | **Quote from it; don't screenshot it wholesale.** The forensic audits are the founder-standard evidence in §5; raw internal logs stay private |

## 5. Exact areas where claims must remain cautious

1. **Memory:** never "HERA remembers." Say memory objects are readable/editable and injection is being wired (07-15 audit: counted, not injected).
2. **Room naming:** don't demo or screenshot auto-named rooms until fixed ("Moon Made Wish Could" is live today). Pre-create demo rooms.
3. **"Everything works":** the cascade's model-in-the-loop path was proven with the executor simulated; a full recorded live-model run is still needed before "end-to-end" language.
4. **Novelty:** per her own Workflow-as-Interface note — claim a coherent interaction model, not a world-first. Approved phrasing: "existing systems contain many of these capabilities; HERA composes them into one continuous, human-readable experience."
5. **Users/traction:** none yet; only "testing with founders now" once tests actually begin.
6. **Ubisoft:** no internal tool names, screenshots, or proprietary detail — role description only, number-of-tools fact confirmed first.
7. **Agents/skills/tools in runs:** listed in the workspace but not yet execution-wired; do not imply agent marketplace functionality.

## 6. What to omit entirely

Old HERA cosmology (Jarvis/AGI/OS-of-everything framing); the legacy WarRoom surface; pixel-agent sprites as current product; raw logs and private file paths; API keys/model routing internals; burn dashboards with real spend beyond the one honest-cost line; the Steve Jobs/Gemini archetype material; any "genius" language; unreleased feature promises (Life OS tabs, Armory, routines).

## 7. How the reader should leave

Feeling, in order: *she found this problem by living it → she has seen something specific and testable about how AI work should be structured → the core of it already runs → she tells the truth about the rest → the previous decade of her building says she will finish.* The last element links to Lineage; the contact/demo action sits directly under it.

## 8. Scope boundaries

- This blueprint covers `/work/hera/` only. No homepage, navigation, or Lineage work is authorized by it.
- Full copy replacement; the existing page's structure may be reused only where it accidentally matches this narrative.
- All new screenshots come from the current build; every old-HERA visual is explicitly labeled as the first version.
- No source code, prompts, file paths, or private logs in any asset (existing page's redaction rule carries forward).
- Implementation requires its own preflight referencing this blueprint.

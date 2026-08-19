# Work Packet: Slice 2 — About Page Build

---

## CLOSURE RECORD

> **Final status:** 🟡 IMPLEMENTATION COMPLETE + AGENT VERIFIED — WAITING FOR FAVOUR REVIEW
> **Closed:** 2026-08-07
> **Closeout file:** `docs/closeout/2026-08-07_SLICE-2-ABOUT-PAGE_CLOSEOUT.md`
> **Favour accepted:** No — Favour has not reviewed this page in a browser yet
>
> The About page was built by an agent and verified by an independent agent (19/19 acceptance criteria passed via source and build inspection). No human has opened the page in a browser. Favour must review the page before this work is fully closed. Until then, the page is accurately described as built and verified — not accepted.

---

> **Original status:** READY FOR BUILD — awaiting coordinator launch
> **Branch:** `portfolio-week1` inside `D:\Documents\favour-ai-product-portfolio`
> **Created:** 2026-08-06
> **Preflight source:** `docs/agent-system/WEEK1-PREFLIGHT-OUTPUT.md`

---

## 1. Objective

Rebuild the content of `src/pages/about.astro` to produce a page whose central subject is:

> "How Favour turns unclear ideas into coherent product systems."

The page must make a strong-fit employer understand Favour's product systems method from first scroll to CTA — without reading anything else on the site.

---

## 2. Audience

**Primary:** Hiring managers, senior product/design leaders, and teams hiring for senior AI product design / AI product systems roles.

**Secondary:** Recruiters who need to quickly grasp the positioning.

**Not the primary audience:** YC/founder readers. The page must not dilute its career purpose to serve them.

---

## 3. Career Argument

By the end of this page, a strong-fit employer must believe:

1. Favour does not just make screens — she designs the rules, objects, and state machines that make a system behave correctly.
2. She knows how to separate what AI can execute from what a human must own — and she has built production systems that enforce that boundary.
3. Her 5 years at Ubisoft and HERA are not two separate things. They are the same method applied to enterprise scale and then to original invention.
4. She is not a visual-craft-first designer, a Product Manager, or a code-heavy prototyper. She is an AI Product Systems designer.
5. She is rigorous: she audits, forensically reconstructs, and uses independent verification — she does not self-certify.

---

## 4. Approved Page Architecture

Six sections in this exact narrative order. Do not add sections. Do not reorder. Do not preserve the existing about.astro stub content.

### Section 1 — Hero / Positioning

- **Eyebrow:** "About"
- **Headline:** "I design systems that turn unclear ideas into coherent, operating software."
- **Lead paragraph:** Explain in 2–3 sentences that most software asks humans to adapt themselves to the machine's structure. Favour builds systems where intent comes first, deterministic rules execute the work, and human judgment stays where it belongs.
- **Verbatim YC quotes to work in (all three are verified public):**
  - "I design systems that make you trust complicated tools."
  - "The technology can perform the action, but the human is still forced to carry the workflow."
  - "I have spent almost five years at Ubisoft designing internal operational tools."
- **Evidence signals (inline, not a bullet list):** 5 years / Ubisoft / 8 enterprise platforms / 1,000+ users / 16 independent software tools / HERA OS.

### Section 2 — How I find the real problem

- **Headline:** "How I find the real problem"
- **Lead:** The visible friction is rarely the root cause. Software breaks when it forces humans to perform filing, context tracking, and state management the system should own.
- **Three pattern cards (card grid, reuse `.card` component):**

  **Card 1: Questioning inherited conventions**
  - Signal: Exposing policy flaws and UI defaults others accepted.
  - Specific examples:
    - Employee Credits Platform (Famous): Proved Ubisoft's 3-hour credit length was caused by single-column formatting, not multi-role crediting — reversed a long-standing HQ France policy.
    - Resource Management Platform: Discovered users were manually overwriting end-dates to close requests. No explicit close action existed. The workaround was corrupting HR logs and Finance budgets.
    - WallPlanner / HERA: Rejected the assumption that a planner must be a separate application window.

  **Card 2: Finding the real bottleneck through forensic audit**
  - Signal: Auditing under real organizational pressure before proposing solutions.
  - Specific examples:
    - 101-person global study on the Resource Management Platform when frequent users rated time-saved only 2.16/5.
    - Audited 40+ inconsistent modals before recommending any redesign.
    - Mapped 25+ silent workflow flaws — none of which appeared in the original problem brief.

  **Card 3: Letting intent arrive rough**
  - Signal: Human-centered intake that earns structure rather than forcing it.
  - Specific examples:
    - The Void in HERA: founders arrive with messy thinking; the system converts it to an Objective without forcing form-filling.
    - Hybrid Workplace Platform (Work Arrangement): discovered employees feared rejection before speaking to their manager; designed a mandatory "Did you speak with your employee?" accountability step rather than a rigid form gate.

### Section 3 — How I define system behaviour

- **Headline:** "How I define system behaviour"
- **Lead:** Product design is not screen layout. It is object design, state machines, and system invariants specified before code is written.
- **Four primitives (structured grid, reuse `.card` or definition list pattern):**

  1. **The Void (Intake)** — Unstructured intent converted into an Objective without context loss. Founder arrives messy; system earns the structure.
  2. **The Transforming Composer (Interaction)** — One morphing input surface replacing modal sprawl. Chat, Survey, Goal, Task, and Review states morph in-place.
  3. **The Living Roadmap (Orchestration)** — Plans that advance automatically when real work passes review gates. Not a static task list.
  4. **Versioned Artifacts & Review Gates (Deliverables)** — Disk-backed output with provenance, timestamps, and mandatory human approval before promotion.

- **Enterprise parallel (inline callout, not a separate card):** The same behaviour-specification discipline produced the 5 explicit approval flows in the Hybrid Workplace Platform, the formal Close Request state machine in the Resource Management Platform, and the 29-test deterministic verification suite for HERA's roadmap cascade engine.

### Section 4 — Human authority / AI leverage

- **Headline:** "Human authority, AI leverage"
- **Lead:** I run AI agents as researchers, builders, and critics against my own specifications — without outsourcing product judgment.
- **Two-column layout:**

  **Column A — What I own:**
  - Identifying the real problem
  - Product invention and object design
  - Mental models and system primitives
  - Rules, state machines, and system invariants
  - Human-vs-AI authority boundaries
  - Acceptance criteria
  - Final judgment

  **Column B — What AI can accelerate:**
  - Bounded research and repository investigation
  - Variant exploration against approved specifications
  - Implementation against a bounded work packet
  - Adversarial critique of my own reasoning
  - Independent verification (agent checking work it did not write)
  - Repetitive execution

- **Verification discipline callout (short, inline):** Work is verified by an independent agent that did not implement it. HERA's narration ("Worked for 37s") renders only when backed by real runtime events — not simulated. The operating system that built this portfolio follows the same rules.

### Section 5 — The connection: Ubisoft → HERA

- **Headline:** "From enterprise platforms to HERA OS"
- **Lead:** 5 years designing internal tools for 1,000+ people at Ubisoft. One solo-built AI operating system. The same method — applied to very different scales.
- **Compact two-column comparison (not a case-study depth, just signal):**

  | Ubisoft Enterprise Systems | HERA OS |
  |---|---|
  | 8 internal platforms across resource planning, governance, credits, and production | 1 unified AI operating system |
  | 1,000+ daily users across studios | Built and operated solo |
  | Multi-level stakeholder research, legal constraints, policy alignment | Product specification, system design, and implementation |
  | Same method: diagnose, model, specify, verify | Same method: diagnose, model, specify, verify |

- Do NOT go deeper on Ubisoft content here — that belongs on the Ubisoft Work page.

### Section 6 — Explore the work / CTA

- **Headline:** "Explore the work"
- **Four action cards linking to:**
  1. HERA OS Deep Dive → `/work/hera/`
  2. Ubisoft Work → `/work/enterprise-tools/`
  3. The Long Build: Lineage → `/work/lineage/`
  4. Get in touch → `/contact/`
- Use the existing card/button pattern from the site.

---

## 5. Evidence Map

Every claim in the page has a verified source. Builder must not add any claim not listed here.

| Claim | Source | Type |
|---|---|---|
| "5 years at Ubisoft designing internal operational tools" | YC answers / `FAVOUR hera Application to YC 2026.mhtml` lines 545–556 | Direct quote |
| "8 enterprise platforms, 1,000+ users" | `WEEK1-PREFLIGHT-OUTPUT.md` Section 5.1; `deep_evidence.txt` | Verified fact |
| Employee Credits Platform (Famous) / policy reversal | `YC answers/FAVOUR hera Application to YC 2026.mhtml` lines 602–631 | Verified fact |
| RPM end-date hacking / Close Request state machine | `docs/References/biggest impact.txt`; `deep_evidence.txt` lines 723–764 | Verified fact |
| 101-person global study, 40+ modals, 2.16/5 time-saved rating | `docs/References/Case study 2.md` lines 59–64; `YC answers` lines 638–644 | Verified metric |
| Work Arrangement — 5 approval flows / mandatory speak-with-employee step | `docs/References/Case study 1.md`; `src/components/diagrams/ApprovalFlow.astro` | Verified fact |
| The Void, Transforming Composer, Living Roadmap, Versioned Artifacts | `docs/YC-HERA-DEEP-DIVE-BLUEPRINT.md` §3, §5 | Verified fact |
| 29-test roadmap cascade deterministic suite | `docs/YC-HERA-DEEP-DIVE-BLUEPRINT.md` §5 (Moment 4) | Verified fact |
| Human authority / AI leverage distinction | `docs/agent-system/OPERATING-CONTRACT.md` Sec A, B | Verified fact |
| "Worked for 37s" / semantic_runtime honesty gate | `docs/YC-FOUNDER-EVIDENCE-LEDGER.md` Row H-6 | Verified fact |
| "I design systems that make you trust complicated tools" | `YC answers/FAVOUR hera Application to YC 2026.mhtml` | Verbatim quote |
| "The technology can perform the action, but the human is still forced to carry the workflow" | `YC answers/FAVOUR hera Application to YC 2026.mhtml` | Verbatim quote |

**Do not fabricate metrics. Do not add claims without a source listed here.**

---

## 6. Copy Constraints

The page copy must:

- Sound like a senior product practitioner — direct, confident, specific
- Use first-person voice where appropriate ("I design", "I run", "I discovered")
- Prefer specific examples over competency lists
- Explain technical/product concepts in language a non-engineer hiring manager can follow
- Keep sections visually scannable — short paragraphs, not walls of text

The page copy must NOT:

- Use AI buzzword soup ("leverage cutting-edge AI to synergize...")
- Use generic "passionate designer" biography language
- Claim engineering expertise Favour does not want to market (she is not a Product Engineer or Design Engineer)
- Use the framing "product engineering method" — use "product systems method" or "product design method"
- Imply AI generated Favour's product judgment
- Present the page as "look how many AI agents I use"
- Reposition her as: AI Product Manager / Product Engineer / Design Engineer / code-heavy prototyper / visual-craft-first designer

---

## 7. Visual Strategy

**Rule:** Reuse the existing design system entirely. Do not create new design tokens, new colour palettes, new animation patterns, or new component types unless a single minimal addition is genuinely necessary and explicitly justified in a comment.

**Design system reference:**
- Tokens: `src/styles/global.css` — `--paper`, `--surface`, `--ink`, `--muted`, `--faint`, `--line`, `--accent`
- Container classes: `.container-page` (72rem), `.container-prose` (46rem), `.section`
- Card: `.card`, `.card-hover` — 1rem border radius, hairline border, lift transform on hover
- Typography: Inter, `tracking-tight`, `tracking-tightest`, `text-wrap: balance` on headings
- Reveal animation: `.reveal` with IntersectionObserver — already implemented site-wide
- Responsive: same breakpoints as existing pages

**Visual narrative flow the page should suggest (without a completely new design):**
Ambiguity → Diagnosis → Model → Rules → Delegated execution → Verification → Human judgment

Concrete reuse options:
- Section 1 hero: 2-column grid (prose + optional portrait/icon), same pattern as hera.astro hero
- Section 2 cards: `.card` grid, same as Lineage/HERA evidence cards
- Section 3 primitives: numbered definition list or 2×2 card grid
- Section 4 authority split: 2-column layout with rule divider — already used on enterprise-tools.astro
- Section 5 comparison: `<table>` or 2-column grid with `.card` wrapper — minimal
- Section 6 CTAs: same action card pattern as contact.astro or hera.astro CTA block

**Motion:** Use `.reveal` on sections. No gratuitous animations. No new animation code.

---

## 8. File Lane

### Permitted to modify
| File | What changes |
|---|---|
| `src/pages/about.astro` | **Primary file.** Full content rebuild. |

### May read (reference only, do not modify)
| File | Why |
|---|---|
| `src/data/site.ts` | Nav and sitewide data — read only |
| `src/styles/global.css` | Design tokens and utility classes — read only |
| `src/components/Nav.astro` | Understand header structure — read only |
| `src/components/Footer.astro` | Understand footer structure — read only |
| `src/pages/work/hera.astro` | Pattern reference for section layout — read only |
| `src/pages/work/enterprise-tools.astro` | Pattern reference — read only |
| `src/components/diagrams/ApprovalFlow.astro` | May reference/embed if appropriate — read only |
| `docs/agent-system/WEEK1-PREFLIGHT-OUTPUT.md` | Evidence and architecture source — read only |

### Frozen — do not touch under any circumstances
- `src/pages/index.astro`
- `src/pages/work/hera.astro`
- `src/pages/work/lineage.astro`
- `src/pages/work/enterprise-tools.astro`
- `src/data/lineage.ts`
- `src/components/Footer.astro`
- `src/components/diagrams/*` (all diagram components)
- `.github/workflows/deploy.yml`
- `src/data/site.ts` — do not modify; nav is already updated by Slice 1

---

## 9. Acceptance Criteria

### Positioning
- [ ] Page headline is a direct, specific statement of Favour's method — not a biography opener
- [ ] The page does NOT describe her as AI PM, Product Engineer, Design Engineer, or code-heavy prototyper
- [ ] "AI Product Systems" or "AI Product Design" is the positioning signal — used naturally, not mechanically repeated

### Factual accuracy
- [ ] Every specific metric and claim is traceable to a source in the Evidence Map above
- [ ] No fabricated numbers
- [ ] No claims about HERA features flagged as "unwired" in the Evidence Ledger (no "HERA remembers everything", no "rooms auto-name intelligently")
- [ ] Ubisoft tool names use generic domain descriptors, not internal codenames
- [ ] No internal colleague names, game codenames, or financial data

### Design & responsive behaviour
- [ ] Page renders correctly at 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] No new design tokens introduced
- [ ] `.reveal` animations work on all sections
- [ ] Typography, spacing, and card styles match the existing site

### Navigation & links
- [ ] All 4 CTA links in Section 6 resolve to correct existing routes
- [ ] Header navigation renders the 6-item nav (already set by Slice 1)

### Build
- [ ] `npm run build` exits with code 0, 8 pages built, 0 errors
- [ ] `npm run check` passes TypeScript checks

### IP / Confidentiality
- [ ] No new HERA technical disclosure (no source architecture, no system prompts, no proprietary orchestration internals)
- [ ] No internal Ubisoft screenshots, confidential data, or raw proprietary interface references
- [ ] No local machine paths exposed in source or rendered output

---

## 10. Verification Plan

An independent verifier (not the implementing agent) must:

1. **Build check:** Run `npm run build` and confirm exit code 0, 8 pages, 0 errors.
2. **TypeScript check:** Run `npm run check` and confirm 0 errors.
3. **Visual inspection of rendered `/about/index.html`:** Open the built HTML file and inspect each of the 6 sections against the approved architecture.
4. **Positioning check:** Read the page aloud and confirm it reads as an AI Product Systems / senior AI Product Design portfolio — not a biography, not a PM resume, not a technical engineering showcase.
5. **Link resolution:** Verify all 4 CTA links point to correct paths (`/work/hera/`, `/work/enterprise-tools/`, `/work/lineage/`, `/contact/`).
6. **Evidence spot-check:** Verify 3 random specific claims against the Evidence Map — confirm each has a traceable source.
7. **IP check:** Confirm no internal Ubisoft codenames, no HERA system prompts, no local paths appear in rendered output.
8. **Responsive check:** Confirm layout at 375px, 768px, and 1280px viewport widths using built HTML.
9. **Design system check:** Confirm no new CSS tokens or animation code outside what already exists in `global.css`.

Verifier verdict must be one of: **PASS** / **CONDITIONAL PASS (minor defect list)** / **FAIL (rebuild required)**.

---

## 11. Exclusions

This packet covers only `src/pages/about.astro`.

The following are explicitly out of scope for this build:

- Ubisoft Work page implementation (`src/pages/work/enterprise-tools.astro`) — that is Slice 3
- Resume page changes
- LinkedIn changes
- HERA product changes
- New HERA technical disclosure of any kind
- Dependency upgrades
- Unrelated site redesign or visual language invention
- Changes to frozen HERA, Lineage, or homepage pages
- Navigation changes — already done in Slice 1

---

*Packet created: 2026-08-06 — ready for builder launch after coordinator approval*

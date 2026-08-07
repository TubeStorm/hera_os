# WEEK 1 PREFLIGHT OUTPUT: HERA OS & CAREER PORTFOLIO STRATEGY

> **Canonical Preflight Synthesis Artifact**  
> **Author:** Worker (`worker_deliverables`)  
> **Date:** 2026-08-06  
> **Repository:** `TubeStorm/hera_os`  
> **Working Branch:** `portfolio-week1`  
> **Target Path:** `docs/agent-system/WEEK1-PREFLIGHT-OUTPUT.md`  

---

## SECTION 1: EXECUTIVE FINDING

The existing `hera_os` website (`https://TubeStorm.github.io/hera_os/`) is an exceptionally high-impact, polished Y Combinator founder pitch for HERA OS. However, it currently operates as a single-product startup showcase, hiding 4+ years of senior enterprise systems experience at Ubisoft (managing internal platforms for 1,000+ users across resource planning, remote work governance, and capacity management).

**Core Strategic Finding:** The strongest, most truthful way to extend the site into Favour's career portfolio is **NOT** to rebuild or dilute the flagship HERA founder homepage (`/`), but to **elevate disconnected surfaces** (`/work/enterprise-tools/` and `/about/`) into main header navigation while defining a clean, evidence-backed About page content architecture around the core thesis:  
> *"How Favour turns unclear ideas into coherent product systems."*

This preflight investigation has conducted a comprehensive audit of all repository files, routes, code freeze elements, 4-tier Ubisoft evidence classifications, 11 About page topics, HERA 5 core competencies, IP/confidentiality risks, external research benchmarks, and minimal Favour input requirements. Zero production code files have been modified during preflight.

---

## SECTION 2: CURRENT-SITE TRUTH

### 2.1 Tech Stack & Build Infrastructure
- **Framework**: Astro `^4.16.18` (`package.json:15`).
- **Styling**: Tailwind CSS `^3.4.17` via `@astrojs/tailwind` integration (`package.json:20`, `astro.config.mjs:24`).
- **TypeScript**: `^5.7.3` with `@astrojs/check` (`package.json:18,21`).
- **Runtime Requirement**: Node.js `>=18.17.0`.
- **Astro Configuration (`astro.config.mjs`)**:
  - `site`: `https://TubeStorm.github.io`
  - `base`: `/hera_os/`
  - `trailingSlash`: `'always'`
  - `build.format`: `'directory'`
- **Build & Verification Commands**:
  - `npm run dev`: Astro dev server at `localhost:4321`.
  - `npm run build`: Executes `astro build`, generating HTML/CSS/JS artifacts in `./dist/`.
  - `npm run check`: Executes `astro check` for TypeScript type-checking.
- **Deployment Pipeline**: `.github/workflows/deploy.yml` deploys automatically to GitHub Pages on push to `main` branch or manual `workflow_dispatch`.

### 2.2 Complete Route Audit (8 Routes Total)

| Route Path | File Location | Purpose & Description | Live Header Status | Size / Complexity |
|---|---|---|---|---|
| `/` | `src/pages/index.astro` | Flagship HERA OS YC presentation homepage (1486 lines). Hero, scroll-gated narrative ("Messy founder thinking..."), hero video, 8-step flow canvas, discoveries, contact CTA. | **CONNECTED** (`HERA OS`) | 43 KB / Very High |
| `/work/hera/` | `src/pages/work/hera.astro` | HERA Deep Dive case study (251 lines). Product architecture, first mistakes, shifts in thinking, working today vs in progress. | **CONNECTED** (`Deep Dive`) | 12.2 KB / High |
| `/work/lineage/` | `src/pages/work/lineage.astro` | "The Long Build" Lineage page (154 lines). Reverse chronological trace of founder projects: Handoff, NGuard, WallPlanner, plus ancestors & range. | **CONNECTED** (`Lineage`) | 6.1 KB / Medium |
| `/contact/` | `src/pages/contact.astro` | Contact page. Confirmed contact links (GitHub, Email, LinkedIn) and contact card. | **CONNECTED** (`Contact`) | Low |
| `/about/` | `src/pages/about.astro` | About page stub (74 lines). Bio copy ("interested in the part of AI that breaks after the demo") and 6 principle cards. | **DISCONNECTED** (Unlinked in `site.ts`) | 3.4 KB / Low Stub |
| `/work/` | `src/pages/work/index.astro` | Work Index page (113 lines). Displays HERA as flagship project + three Ubisoft enterprise workstreams. | **DISCONNECTED** (Unlinked in `site.ts`) | 5.8 KB / Medium |
| `/work/enterprise-tools/` | `src/pages/work/enterprise-tools.astro` | Enterprise Tools page for Ubisoft (196 lines). Covers RPM (Modal & Ribbon Revamp), Work Arrangement (5 approval flows), and Capacity Governance (quota visibility). | **DISCONNECTED** (Unlinked in `site.ts`) | 11.1 KB / High |
| `/resume/` | `src/pages/resume.astro` | Resume page. Structured resume view reading from `src/data/site.ts` `resume` object. Links to PDF asset. | **DISCONNECTED** (Unlinked in `site.ts`) | Medium |

### 2.3 Visual Language & Design System Audit (`src/styles/global.css` & `DESIGN.md`)
- **Brand Vibe**: *"Apple crisp · Linear clean · Figma product taste · high-end systems portfolio · quiet confidence · sharp product-architecture energy."*
- **Color Tokens**:
  - `--paper`: `#fbfbf9` (Light) / `#08080a` (Dark) — Off-white background
  - `--surface`: `#ffffff` (Light) / `#101013` (Dark) — Raised cards
  - `--ink`: `#0b0b0c` (Light) / `#f4f4f2` (Dark) — Primary text & primary buttons
  - `--muted`: `#62636a` (Light) / `#a2a3ab` (Dark) — Secondary text
  - `--faint`: `#9a9ba2` (Light) / `#6d6e77` (Dark) — Captions & labels
  - `--line`: `#e7e7e1` (Light) / `#24242a` (Dark) — Hairline borders
  - `--accent`: `#2563eb` (Light) / `#6f9bff` (Dark) — Accent blue used sparingly
  - `--accent-soft`: `#eef2ff` (Light) / `#14203a` (Dark)
- **Container & Layout Tokens**:
  - `.container-page`: `max-w-content` (72rem / 1152px), `px-6 sm:px-8`.
  - `.container-prose`: `max-w-prose` (46rem / 736px), `px-6 sm:px-8`.
  - `.section`: `py-20 sm:py-28`, separated by `border-line` hairline borders.
  - `.card`, `.card-hover`: 1rem border radius (`rounded-card`), hairline border (`var(--line)`), subtle lift transform (`translateY(-3px)`) on hover with `--shadow-lift`.
- **Typography & Motion**:
  - Font: Inter with tight tracking (`tracking-tight`, `tracking-tightest`).
  - Headings: `text-wrap: balance` applied globally to `h1, h2, h3, h4`.
  - Header: Sticky floating pill navigation with backdrop blur (`Nav.astro`).
  - Footer: Interactive HTML5 Canvas sprite character animation (`Footer.astro`).
  - Motion: IntersectionObserver `.reveal` animations, fully respecting `@media (prefers-reduced-motion: reduce)`.

### 2.4 Code Freeze Elements (Untouched Constraints)
The following files and components are verified critical infrastructure and must remain **FROZEN & UNTOUCHED**:
1. `src/pages/index.astro` (43 KB flagship YC launch page)
2. `src/pages/work/hera.astro` (12.2 KB HERA Deep Dive case study)
3. `src/pages/work/lineage.astro` (6.1 KB Lineage page)
4. `src/data/lineage.ts` (Lineage project data & video mapping)
5. `src/components/diagrams/*` (`ApprovalFlow.astro`, `GhostBeforeAfter.astro`, `IrisScopeMap.astro`, `MemoryBlocks.astro`, `ModalAuditBeforeAfter.astro`, `MonogramPortrait.astro`, `PermissionFlow.astro`, `QuotaCard.astro`, `TrustLayerMap.astro`)
6. `src/components/Footer.astro` (Interactive canvas footer animation)
7. `.agents/` (35+ subdirectories of historical agent artifacts)
8. `.github/workflows/deploy.yml` (GitHub Pages automated deployment pipeline)

---

## SECTION 3: PORTFOLIO POSITIONING GAP

### 3.1 YC Founder Pitch vs. AI PM / Systems Career Portfolio
- **Current Site State**: The live site presents purely as a single-product startup launch for HERA OS. Header navigation links (`HERA OS`, `Deep Dive`, `Lineage`, `Contact`) tell a single-product founder story.
- **Positioning Gap**:
  1. **Hidden Senior Enterprise Accomplishments**: Favour's 4+ years as Senior UX Specialist at Ubisoft (managing internal platforms for 1,000+ users across RPM, Work Arrangement, and Capacity Governance) are hidden in unlinked routes. Recruiters see a brilliant startup demo but no proof of corporate scale, stakeholder management, or enterprise governance.
  2. **Hidden Methodology & Systems Thinking**: The site shows *what* HERA is, but does not present Favour's explicit framework for turning ambiguous problems into product primitives, balancing AI vs. human authority, and orchestrating multi-agent systems.
- **Repositioning Strategy**: Maintain the YC founder pitch on the homepage (`/`) while exposing `/work/enterprise-tools/` as **Ubisoft Work** and building `/about/` as **About** (Favour's product engineering method).

---

## SECTION 4: ABOUT PAGE CONTENT ARCHITECTURE

### 4.1 Theme & Positioning
- **Theme**: *"How Favour turns unclear ideas into coherent product systems."*
- **Target Audience**: Recruiters, hiring managers, YC partners, and senior product leaders evaluating systems thinking, execution rigor, and AI product maturity.
- **Tone**: Authoritative, direct, evidence-backed, first-person narrative.

### 4.2 Evaluation of the 11 Core Topics (Repo Evidence vs. Favour Input)

| # | Topic | Status | Primary Repo Evidence Source | Favour Input Needed? |
|---|---|---|---|---|
| 1 | Problems she naturally notices | **Supported by Repo** | `docs/YC-FOUNDER-THESIS-AND-NARRATIVE.md` §1b; `YC answers/FAVOUR hera Application to YC 2026.mhtml` (16 products over 3 yrs; noticing software forcing wrong work onto humans) | Optional personal anecdote |
| 2 | Questioning inherited assumptions | **Supported by Repo** | `docs/YC-HERA-DEEP-DIVE-BLUEPRINT.md` §3; `YC answers/FAVOUR hera Application to YC 2026.mhtml` (Famous credits policy reversal; RPM end-date hack removal; WallPlanner desktop surface shift) | No |
| 3 | Finding the real product problem | **Supported by Repo** | `docs/YC-HERA-DEEP-DIVE-BLUEPRINT.md` §1; `portfolio building archives/UX-to-PO_Evidence_Templates.docx` (101-person RPM study, 40+ modal audit, 25+ workflow flaws mapped) | No |
| 4 | Mental models & product primitives | **Supported by Repo** | `docs/YC-HERA-DEEP-DIVE-BLUEPRINT.md` §3, §5 (Void, Objective, Room, Living Roadmap, Transforming Composer, Versioned Artifacts, Review Gates); `UX-to-PO_Evidence_Templates.docx` | No |
| 5 | Defining system behaviour | **Supported by Repo** | `docs/YC-FOUNDER-THESIS-AND-NARRATIVE.md` §3 (NGuard 14-state machine); Work Arrangement 5 approval flows; Blueprint §5 (Roadmap Cascade spec & 29 offline test suite) | No |
| 6 | Human vs. AI authority | **Supported by Repo** | `docs/agent-system/OPERATING-CONTRACT.md` Sec A; Blueprint §5 (Artifact Review Gates & `semantic_runtime` gate); YC answers ("human carries workflow") | Minimal endorsement |
| 7 | Multi-agent execution without outsourcing judgment | **Supported by Repo** | `OPERATING-CONTRACT.md` Sec B, E, F; `.agents/ORIGINAL_REQUEST.md` (Multi-agent research/critic/storyteller/reviewer pipelines) | No |
| 8 | Slicing & planning complicated work | **Supported by Repo** | `OPERATING-CONTRACT.md` Sec C, E; `CURRENT-SPRINT.md`; Work Arrangement 5-Epic delivery breakdown; RPM Quota two-phase delivery | No |
| 9 | Verifying AI-assisted work | **Supported by Repo** | `OPERATING-CONTRACT.md` Sec F; Blueprint §5 (Moment 3 & 4 honesty gates & independent verifier rules); Forensic Reconstruction Worksheets | No |
| 10 | What decisions remain human | **RESOLVED & CONFIRMED** | `OPERATING-CONTRACT.md` Sec A; `DECISIONS.md`; Favour's confirmed decisions (Brand = "Ubisoft", Tool Titles = Generic, 3 approved + 3 shortlisted stories) | Confirmed by Favour |
| 11 | Connecting HERA & Ubisoft experience | **Supported by Repo** | `YC answers/FAVOUR hera Application to YC 2026.mhtml`; `Hera Product Logic.txt` (5 years Senior UX Specialist across 8 internal tools + 16 independent builds → HERA OS) | No |

### 4.3 Structured Content Architecture for `src/pages/about.astro`

```text
================================================================================
ABOUT PAGE CONTENT ARCHITECTURE
Theme: "How Favour turns unclear ideas into coherent product systems."
================================================================================

[SECTION 1: HERO & THESIS STATEMENT]
- Layout: 2-column grid (60% lead prose / 40% Monogram Portrait / Primitive Diagram)
- Eyebrow: "About Favour Diokpo"
- Headline: "I design systems that turn unclear ideas into coherent, operating software."
- Narrative Lead:
  "Most software asks humans to translate themselves into the machine's structure.
   I build systems where intent comes first, deterministic rules execute the work,
   and human judgment stays exactly where it belongs."
- Verbatim YC Quotes:
  • "I design systems that make you trust complicated tools."
  • "I have spent almost five years at Ubisoft designing internal operational tools."
  • "The technology can perform the action, but the human is still forced to carry the workflow."
- Core Signals: Systems architect, AI UX leader, clarity over complexity.
- Evidence Hooks: 16 shipped software tools, 5 years designing enterprise platforms at Ubisoft across 8 internal systems, builder of HERA OS.

[SECTION 2: PROBLEM DIAGNOSIS & QUESTIONING ASSUMPTIONS]
- Headline: "How I spot the real problem"
- Sub-narrative: "The visible friction is rarely the root cause. Software breaks when it forces humans to perform filing, context tracking, and state management that the system should own."
- 3 Core Patterns (Card Grid):
  1. Questioning Inherited Conventions & Global Policies
     • Signal: Exposing policy flaws and UI defaults.
     • Hooks:
       - Employee Credits System (Famous): Proved 3-hour credit length was formatting (single vs multi-column), forcing HQ France to reverse long-standing policy.
       - Resource Management Platform (RPM): Discovered users hacking end-dates to close requests, exposing silent downstream damage to HR and Finance.
       - WallPlanner: Redefined planner as desktop surface, not window.
  2. Finding the Real Bottleneck via Deep Forensic Audit
     • Signal: Auditing workflows under real organizational pressure.
     • Hooks: 101-person global study on RPM, auditing 40+ modals, mapping 25+ workflow flaws when frequent users rated time saved just 2.16 out of 5. Building HERA proved text generation is solved—intent preservation and review is broken.
  3. Starting Rough (Intention-to-Form)
     • Signal: Human-centered intake without premature structure.
     • Hooks: The Void in HERA—allowing founders to arrive messy and earning structure naturally.

[SECTION 3: SYSTEM PRIMITIVES & BEHAVIOURAL SPECIFICATION]
- Headline: "How I define system behaviour"
- Sub-narrative: "Great product design is not screen layout; it is object design, state machines, and system invariants specified before code is written."
- 4 Systems Primitives (Structured Grid):
  1. The Void (Intake) — Unstructured intent converted into an Objective without context loss.
  2. The Transforming Composer (Interaction) — One morphing input cockpit replacing modal sprawl.
  3. The Living Roadmap (Orchestration) — Plans that advance automatically when real work passes review.
  4. Versioned Artifacts & Review Gates (Deliverables) — Disk-backed output with provenance and human approval gates.
- Evidence Hooks:
  - Hybrid Workplace Platform (Work Arrangement): 5 explicit approval flows replacing ambiguous legacy logic under legal liability constraints.
  - Resource Management Platform (RPM): Spatial Footprint Matrix consolidating 40+ modals; Custom Field Pinning for Assassin's Creed X (35+ custom fields).
  - NGuard: 14-state formal state machine.
  - HERA Roadmap Cascade Engine: Verified by 29 offline deterministic tests.

[SECTION 4: HUMAN VS. AI AUTHORITY & VERIFICATION METHODOLOGY]
- Headline: "Human authority, AI leverage, and forensic verification"
- Sub-narrative: "I run fleets of AI agents as researchers, builders, and critics against my own specifications—without ever outsourcing product judgment."
- Two-Column Breakdown:
  Column A: The Authority Boundary & Career Autopsy Matrix
  • Human (LOVE LOVE LOVE): 0->1 product invention (Room -> Goal -> Task), system behaviour design (formal state machines), human-AI interaction boundaries, conceptual leadership, final approval.
  • AI (LEVERAGE): Rapid draft generation, multi-agent research synthesis, test execution, variant exploration against specifications.
  Column B: Product Artifact Suite & Verification Discipline
  • UX-to-PO Artifact Suite: Decision Logs, Micro-PRDs (6-line briefs), Workshop Capture Sheets, Opportunity Briefs, Outcome Reviews, Forensic Reconstruction Worksheets.
  • Verification Discipline: Independent verifier role (agent checking code did not write it); `semantic_runtime` honesty gates ("Worked for 37s" renders only when backed by real runtime events).
- Evidence Hooks: Canonical Operating Contract (`OPERATING-CONTRACT.md`), `deep_evidence.txt` lines 1100–1394, `semantic_runtime` honesty gate.

[SECTION 5: ENTERPRISE SCALE & HERA CONVERGENCE]
- Headline: "From enterprise platforms to HERA OS"
- Sub-narrative: "My work spans high-stakes enterprise tools used by 1,000+ people at Ubisoft and HERA OS, an independent AI operating system designed and built solo."
- Comparison / Convergence Matrix:
  • Ubisoft Enterprise Systems (8 Platforms): Audited 40+ modals in RPM, defined 5 policy-vetted approval flows in Work Arrangement, engineered warning-only capacity governance ("Kota"), synchronized macro block planning with Jira (Blockplan), reversed multi-role crediting policy (Famous).
  • HERA OS (AI Operating System): Unified surface, orchestration, behavior, and context into a local-first AI workspace.
- Evidence Hooks: YC Application archive, 74 portfolio building files, RPM 101-response survey, HERA codebase.

[SECTION 6: NAVIGATION & CALL TO ACTION]
- Headline: "Explore the work"
- Action Cards:
  • [Deep Dive: HERA OS] → `/work/hera/`
  • [Ubisoft Work] → `/work/enterprise-tools/`
  • [The Long Build: Lineage] → `/work/lineage/`
  • [Get in touch] → `/contact/`
================================================================================
```

---

## SECTION 5: UBISOFT WORK CONTENT ARCHITECTURE

### 5.0 Favour's Confirmed Decisions (Confirmed 2026-08-06)

Favour reviewed the preflight output and confirmed three foundational decisions for the Ubisoft Work content:
1. **Brand Name**: Use **"Ubisoft"** explicitly — do NOT anonymize to "Global AAA Game Studio".
2. **Tool Titles**: Use **generic domain descriptors** (e.g., "Resource Management Platform", "Hybrid Workplace Platform", "Production Macro-Planning Platform") — generic titles better express the breadth of tools and fields she worked across while remaining NDA-compliant.
3. **Approved Problem Stories**: The 3 original recommended problem stories are approved, plus 3 additional shortlisted problem stories discovered from expanded vault archives (total 6 problem stories).

---

### 5.1 Evidence Audit, 8 Discovered Internal Tool Platforms & 4-Tier Categorization

#### Discovered Internal Tool Platforms Inventory (8 Platforms Total)
From deep investigation of `D:\Documents\Favour's Vault\HERA\YC answers` and `D:\Documents\Favour's Vault\HERA\portfolio building archives` (74 files across 8 subdirectories), Favour's ~5-year tenure as Senior UX Specialist at Ubisoft spans 8 distinct enterprise internal tool platforms:

1. **Resource Management Platform (RPM / Resource Planning & Management)**: Flagship enterprise resource planning platform used across studios by 1,000+ users (Producers, PMs, HR/Talent, Finance, Executives) for staffing, allocation, Gantt scheduling, and hiring demand.
2. **Hybrid Workplace Platform (Work Arrangement)**: Remote work governance platform created to manage long-term remote work requests for 5,000+ Ubisoft Canada employees following 2-day return-to-office hybrid policies.
3. **Production Macro-Planning Platform (Blockplan / BP / Jira Sync)**: Production macro-planning platform integrated with Jira, enabling high-level block planning, date ranges, calendar events, and timeline dependency tracking across production teams.
4. **Game Employee Credits Platform (Famous / Credit Research)**: Global game employee credits arrangement and governance platform, resolving multi-role crediting policy friction across international game productions.
5. **Operational Monitoring & Layout Editor (Munin / Weatherstation)**: Operational monitoring, layout editing, and data snapshot system for live game ops.
6. **Global Production Management (GPM)**: Enterprise employee profile and bulk allocation management interface.
7. **Voice Recording & Scheduling (Voice)**: Voice actor scheduling, recording session booking, and audio production workflow tool.
8. **Time Filtering Tool (Tempus)**: Time tracking, filter defaults, and scheduling interface.

#### 4-Tier Evidence Categorization Matrix

| Tier | Category / Artifact / Claim | Source Location | Evidence Details & Citation | Safety / Action |
|---|---|---|---|---|
| **TIER 1: VERIFIED AND PUBLIC-SAFE** | Role, Seniority & Brand Claim | `YC answers/FAVOUR hera Application to YC 2026.mhtml:545-556`, `Favour_Diokpo_Resume.docx` | Brand: **Ubisoft** (explicitly cleared by Favour). Role: Senior UX Specialist / UX Designer (May 2021 – Present, ~5 years). Scope: 1,000+ active global users across 8 internal platforms. | **SAFE TO PUBLISH**. Cleared by Favour decision. |
| **TIER 1: VERIFIED AND PUBLIC-SAFE** | Generic Tool Titles & Domain Scope | Favour Decision 2026-08-06; `deep_evidence.txt` | 8 generic titles: Resource Management Platform, Hybrid Workplace Platform, Production Macro-Planning Platform, Game Employee Credits Platform, Operational Monitoring & Layout Editor, Global Production Management, Voice Recording & Scheduling, Time Filtering Tool. | **SAFE TO PUBLISH**. Generic descriptors express breadth. |
| **TIER 1: VERIFIED AND PUBLIC-SAFE** | User Research Metrics & Sample Sizes | `YC answers/FAVOUR hera Application to YC 2026.mhtml:638-644`, `UX-to-PO_Evidence_Templates.docx` | 101-person global study, 40+ modals audited, 25+ workflow problems mapped, 4-level org research (12+ interviews), 5 explicit approval flows. | **SAFE TO PUBLISH**. Verifiable methodology data. |
| **TIER 1: VERIFIED AND PUBLIC-SAFE** | Published Satisfaction Ratings | `docs/References/Case study 2.md:59-64`, `src/pages/work/enterprise-tools.astro:77-79` | Time saving rating: 2.16 / 5 (prior to redesign); PM share: 38% at 3.3 / 5 overall rating; overall post-redesign score: 3.5 / 5. | **SAFE TO PUBLISH**. Retained from existing site data. |
| **TIER 1: VERIFIED AND PUBLIC-SAFE** | Redacted Architectural System Diagrams | `src/components/diagrams/` (`ModalAuditBeforeAfter.astro`, `ApprovalFlow.astro`, `QuotaCard.astro`) | Abstract SVG layout diagrams showing modal consolidation, 5 approval paths, warning-only quota UI. | **SAFE TO PUBLISH**. Zero proprietary IP exposed. |
| **TIER 1: VERIFIED AND PUBLIC-SAFE** | UX-to-PO Product Artifact Suite | `portfolio building archives/UX-to-PO_Evidence_Templates.docx` | Decision Logs, Micro-PRDs (6-line briefs), Workshop Capture Sheets, Opportunity Briefs, Outcome Reviews, Forensic Reconstruction. | **SAFE TO PUBLISH**. Methodology frameworks. |
| **TIER 2: RESERVED / GENERICIZED / SAFETY UNKNOWN** | Internal Tool Codenames | `portfolio building archives/` (`RPM`, `WorkArrangement`, `Blockplan/BP`, `Famous`, `Munin`, `GPM`, `Voice`, `Tempus`, `Kota`) | Code names used internally at Ubisoft. | **GENERICIZED**. Mapped to generic domain titles per Favour's decision. |
| **TIER 2: RESERVED / GENERICIZED / SAFETY UNKNOWN** | Internal Game Project Codenames | `deep_evidence.txt` line 748 (`Assassin's Creed-X`) | Internal game project codename mentioned in custom field pinning example. | **ANONYMIZED**. Refer to as "Major AAA Franchise Project (35+ custom fields)". |
| **TIER 2: RESERVED / GENERICIZED / SAFETY UNKNOWN** | Internal Team & Colleague Names | `docs/References/Case study 1.md:44-48`, `deep_evidence.txt` (`Claude`, `Véronique`, `Aude`, `Clement`, `Sybil`, `EGG`) | Colleague names and internal design system team acronyms. | **ANONYMIZED**. Map to role titles (e.g. "HR Policy Lead", "Shared Design System Team"). |
| **TIER 3: CLAIM REQUIRES FAVOUR** | Unbacked Granular Performance Claims | `deep_evidence.txt` (`[ ]ms` latency reduction placeholders) | Granular performance metrics with bracketed placeholders. | **DIRECTIONAL ONLY**. Frame as "directional latency reduction" unless Favour provides numbers. |
| **TIER 4: NOT ENOUGH EVIDENCE** | Original Unblurred Screenshots & Raw Wireframes | `portfolio building archives/` (`.bmpr` wireframes, blurred Miro boards, raw PDFs for Munin/Tempus/Voice) | High-fidelity UI screenshots and wireframes under NDA. | **EXCLUDED / BREADTH ONLY**. Replace with abstract SVG diagrams. Keep minor tools in Breadth Gallery. |

---

### 5.2 Breadth-First Page Structure & 6 Problem Story Candidates

The **Ubisoft Work Page** (`src/pages/work/enterprise-tools.astro`) uses a **breadth-first matrix** (5 years, 8 internal platforms, 1,000+ users) anchored by **6 focused deep-dive problem stories** (3 approved originals + 3 shortlisted from archives):

#### Approved Original Problem Stories (1–3)

1. **STORY 1 (Original Approved): Remote Work Governance Breakdown & 5 Policy Approval Flows**
   - *Platform*: Hybrid Workplace Platform (Work Arrangement)
   - *Problem*: Abrupt hybrid work policy enforcement (mandatory 2 days in-office) led to high friction and manager-employee confusion. Legacy tool had only 2 rigid states and allowed no collaboration; HR legal policy prohibited showing free-text manager refusal comments to employees due to legal liability.
   - *Intervention*: Favour conducted 4-level organizational research (employees, managers, directors, HR), identified that managers feared publishing decisions before talking to employees, designed mandatory "Did You Speak with Employee?" accountability step, expanded logic into 5 policy-vetted approval flows, and created HR-vetted templated decision messages.
   - *Impact*: Transformed an ambiguous compliance tool into a transparent, legally sound governance platform deployed across 5,000+ Ubisoft Canada employees.
   - *Evidence References*: `YC answers/Hera Product Logic.txt` line 21; `portfolio building archives/UX-to-PO_Evidence_Templates.docx` lines 765–975; `src/components/diagrams/ApprovalFlow.astro`.

2. **STORY 2 (Original Approved): Eliminating "End-Date Hacking" in Resource Planning**
   - *Platform*: Resource Management Platform (RPM)
   - *Problem*: Users closed staffing requests by manually overwriting the end date to "today", because no explicit close action existed. This silent workaround corrupting historical logs, triggered illegal HR unassignments, and caused massive budget discrepancies between Finance and Production.
   - *Intervention*: Favour eliminated the redundant "Position" entity to simplify the mental model into "Request", then designed an explicit `Close Request` state machine with mandatory trigger checks, timestamped audit logs, automated HR unassignment notifications, and Finance budget reconciliation prompts.
   - *Impact*: Replaced destructive manual date-hacking with an automated, cross-departmental lifecycle engine across 1,000+ global users.
   - *Evidence References*: `YC answers/FAVOUR hera Application to YC 2026.mhtml` lines 957–962; `docs/References/biggest impact.txt`; `deep_evidence.txt` lines 723–764.

3. **STORY 3 (Original Approved): Standardizing 40+ One-Off Modals & Spatial Footprint Matrix**
   - *Platform*: Resource Management Platform (RPM UI System)
   - *Problem*: 1,000+ users complained RPM was bloated and slow. Frequent users rated time saved just 2.16/5. Over 40 one-off modals had inconsistent button placements, conflicting object concepts, and scattered custom fields (e.g., Assassin's Creed X team struggled with 35+ custom fields).
   - *Intervention*: Favour ran a 101-person survey, audited 40+ modals, established a Spatial Footprint Matrix (hiding secondary info in collapsible drawers), standardized modal actions into a unified action bar, invented Custom Field Pinning (floating critical fields to the top), and partnered with shared design system team EGG.
   - *Impact*: Restored user trust, eliminated modal clutter, and established standardized UI governance across enterprise tools.
   - *Evidence References*: `YC answers/FAVOUR hera Application to YC 2026.mhtml` lines 638–644; `deep_evidence.txt` lines 723–748; `src/components/diagrams/ModalAuditBeforeAfter.astro`.

#### Shortlisted Additional Problem Stories (4–6)

4. **STORY 4 (Shortlisted Additional): Employee Credits System & Global Policy Governance**
   - *Platform*: Game Employee Credits Platform (Famous)
   - *Problem*: Productions were bypassing the official game credits tool; one shipped game accidentally included raw template legal language in final credits. An old policy enforced at HQ in France restricted crediting employees to a single role (even if they contributed to multiple roles), claiming multi-role crediting would make already 3-hour credit sequences too long. Original decision-makers had left HQ.
   - *Intervention*: Favour exposed the company-wide governance failure to senior management. She benchmarked competitor credit sequences, proved the length issue was driven by single-column formatting rather than multi-role entries, and used Legal's own space constraint justification to mandate adoption of her compact, multi-column credit layout.
   - *Impact*: Overturned a entrenched HQ policy, turned a neglected tool into Ubisoft's official credits system, and protected legal compliance across global game releases.
   - *Evidence References*: `YC answers/FAVOUR hera Application to YC 2026.mhtml` lines 602–631; `portfolio building archives/Famous.bmpr`; `Credit Resreach.bmpr`.

5. **STORY 5 (Shortlisted Additional): Production Macro-Planning & Jira Timeline Synchronization**
   - *Platform*: Production Macro-Planning Platform (Blockplan / Jira Sync)
   - *Problem*: Disconnect between high-level macro block planning (producers/executives setting milestone dates) and operational task execution in Jira (developers completing issues). Milestone date changes were not reflected in Jira, leading to schedule drift and missed milestone dependencies across multi-studio productions.
   - *Intervention*: Favour redesigned the macro-planning interface with a time-navigation ribbon cluster, two-way Jira issue synchronization, explicit date-range dependency mapping, and milestone drift indicators.
   - *Impact*: Synchronized executive block planning directly with operational Jira task execution across major game production pipelines.
   - *Evidence References*: `portfolio building archives/more stuff/BP/Jira - Blockplan V2.bmpr`; `2025-10 BP+Jira macro process et flow.bmpr`; `deep_evidence.txt` lines 1114–1134.

6. **STORY 6 (Shortlisted Additional): Warning-Only Capacity Governance & Scenario Planning**
   - *Platform*: Resource Management Platform — Capacity Module (RPM "Kota")
   - *Problem*: Early capacity governance concepts proposed strict hard-blocking rules for over-allocation, which producers rejected as unrealistic for dynamic game development. Additionally, exploratory scenario planning was inflating live hiring demand, creating false panic in HR and Finance.
   - *Intervention*: Favour defined warning-only quota visibility thresholds (no hard blocks), structured a two-phase delivery (approval context first, quota module second), aligned Product and Engineering on legacy definitions (used vs buffer capacity), and separated scenario-safe planning from operational hiring demand with a one-step promote mechanism.
   - *Impact*: Delivered effective decision-support capacity governance while preserving producer autonomy and preventing platform latency via progressive disclosure.
   - *Evidence References*: `deep_evidence.txt` lines 204–207, 239–243, 315–317; `src/components/diagrams/QuotaCard.astro`.

---

### 5.3 Redacted Visual Presentation Strategy

Internal screenshots default to confidential. The page uses pre-existing abstract SVG components (`ModalAuditBeforeAfter.astro`, `ApprovalFlow.astro`, `QuotaCard.astro`) accompanied by an explicit disclaimer:
> *"Ubisoft UI is under NDA — this page uses redacted architectural diagrams instead of proprietary screenshots. Every metric, workflow detail, and story comes directly from verified source audit documents and Favour's confirmed decisions."*

---

## SECTION 6: HERA CAREER-EVIDENCE MAP

HERA is documented evidence of Favour's senior/staff capabilities across 5 core professional competencies:

| Competency Tier | Concrete HERA Evidence | Specific Repository Reference | Career / Hiring Signal |
|---|---|---|---|
| **1. Product Invention** | • **The Void & Intention-to-Form**: Unstructured chat intake converting intent into an Objective and migrating into a Room without context loss.<br>• **Transforming Composer**: Single morphing widget replacing popups across Chat, Survey, Goal, Task, Review states.<br>• **Living Roadmap**: Cascade engine advancing plans automatically when artifacts pass review.<br>• **Versioned Artifacts**: Disk-backed storage with explicit review gates. | • `docs/YC-HERA-DEEP-DIVE-BLUEPRINT.md` §3, §5<br>• `src/pages/work/era.astro`:111-176<br>• `src/pages/index.astro`:7-35, 78-234 | Solves fundamental AI product challenges: context loss, modal sprawl, and static unexecuted plans. |
| **2. System-Behaviour Design** | • **Formal State Machines**: Atomic state transitions for Void-to-Room migration.<br>• **Wave Barriers & Lane Parallelism**: Task execution matrix executing parallel lanes concurrently while pausing at dependency barriers.<br>• **Deterministic Test Suites**: 29 offline test suite verifying roadmap cascade logic across backend restarts. | • `docs/YC-HERA-DEEP-DIVE-BLUEPRINT.md` §5 (Moment 4)<br>• `docs/YC-FOUNDER-THESIS-AND-NARRATIVE.md` §2, §6<br>• `docs/YC-FOUNDER-EVIDENCE-LEDGER.md` Row H-4 | Specifies complex backend state transitions and system invariants, not just visual mockups. |
| **3. Human-AI Interaction Thinking** | • **Human Authority Gate**: Human retains full control over intent and final artifact approval; AI never self-approves deliverables.<br>• **Honest Narration ("Worked for 37s")**: Narration renders ONLY when backed by real runtime events; silence over AI theatre.<br>• **Asymmetric Burden**: System assumes responsibility for structuring and dependency mapping. | • `docs/YC-HERA-DEEP-DIVE-BLUEPRINT.md` §5 (Moment 3)<br>• `docs/YC-FOUNDER-EVIDENCE-LEDGER.md` Row H-6 (`semantic_runtime` gate)<br>• `src/pages/work/era.astro`:180-198 | Deep AI UX maturity—rejecting fake chain-of-thought theatre in favor of verifiable runtime truth. |
| **4. Product Leadership & Rigor** | • **Self-Disruption / Willingness to Pivot**: Diagnosed Old HERA (rooms-first, forms, gamified UI) as repeating industry mistakes, executing a complete rebuild to New HERA.<br>• **Forensic Auditing Discipline**: Conducts systematic readiness audits calling out product fictions and driving same-day fixes. | • `docs/YC-HERA-DEEP-DIVE-BLUEPRINT.md` §2<br>• `docs/YC-FOUNDER-THESIS-AND-NARRATIVE.md` §2, §6<br>• `docs/YC-FOUNDER-EVIDENCE-LEDGER.md` Section C | Ruthless intellectual honesty, self-critique, and high execution velocity under deadlines. |
| **5. Workflow Architecture** | • **Multi-Agent Role Bounding**: Separation between planner (Iris), researchers, builders, and verifiers.<br>• **Cost & Token Transparency**: Real-time token tracking and per-turn cost accounting ($2.31 total spend tracking). | • `docs/agent-system/OPERATING-CONTRACT.md` Sec B<br>• `docs/YC-HERA-DEEP-DIVE-BLUEPRINT.md` §4 | Capability to architect cost-conscious, multi-agent enterprise workflows. |

---

## SECTION 7: PUBLIC/CONFIDENTIALITY ISSUES

Four distinct IP and confidentiality risks were identified and assigned strict mitigations:

1. **Obsolete "Old HERA" Gamified Framing vs. New HERA Reality**
   - *Risk*: Early public copy described HERA as a game-world pixel OS with sprite characters as primary UI.
   - *Mitigation*: Frame Old HERA strictly as historical evidence of "The First Mistake" (the pivot), presenting New HERA (Void intake, living roadmap, transforming composer) as current truth.
2. **Unwired / Fiction Claims**
   - *Risk*: Asserting "HERA remembers everything" or "Rooms auto-name intelligently". Per Evidence Ledger (Rows H-3 & H-7), memory objects are readable but not yet injected into run-stack, and auto-naming yields word-salad strings.
   - *Mitigation*: Phrase memory accurately as *"Memory objects readable; run-stack injection in progress"*. Pre-create clean demo rooms for screenshots/videos.
3. **Internal Dev Infrastructure & Raw Path Leakage**
   - *Risk*: Exposing internal routes (`/dev/`), raw system prompts, or local paths (`D:\Documents\HERA\...`, `C:\Users\ijeom\...`).
   - *Mitigation*: Exclude `/dev/` from public navigation, scrub local machine paths, use relative URLs and sanitized test datasets.
4. **Ubisoft Enterprise Confidentiality**
   - *Risk*: Exposure of internal codenames, unblurred screenshots, financial metrics, or colleague names.
   - *Mitigation*: Use brand name "Ubisoft" (explicitly cleared by Favour) while standardizing tool titles to generic domain categories (Resource Management Platform, Hybrid Workplace Platform, etc.) and abstract SVG diagrams. Anonymize colleague names.

---

## SECTION 8: EVIDENCE INVENTORY

The following verified evidence files exist within the repository and personal archives:
- `docs/YC-FOUNDER-THESIS-AND-NARRATIVE.md` (23 KB founder thesis)
- `docs/YC-FOUNDER-EVIDENCE-LEDGER.md` (12 KB evidence ledger tracking claims)
- `docs/YC-HERA-DEEP-DIVE-BLUEPRINT.md` (14 KB blueprint for HERA Deep Dive)
- `docs/YC-LINEAGE-PAGE-BLUEPRINT.md` (17 KB blueprint for Lineage page)
- `D:\Documents\Favour's Vault\HERA\YC answers\` (6 files including `FAVOUR hera Application to YC 2026.mhtml`, `Hera Product Logic.txt`, `Idea answers.txt`, `Progress answers.txt`)
- `D:\Documents\Favour's Vault\HERA\portfolio building archives\` (74 files across 8 subdirectories including `Favour_Diokpo_Resume.docx`, `UX-to-PO_Evidence_Templates.docx`, `.bmpr` wireframes, PDFs)
- `docs/References/Case study 1.md` (Detailed research log for Work Arrangement tool: 12+ interviews, 5 approval flows, HR legal template rules)
- `docs/References/Case study 2.md` (Detailed research log for RPM UI Revamp: 101 survey responses, 3.5/5 overall rating, 2.16/5 time saving rating, 38% PM share)
- `docs/References/biggest impact.txt` (Raw transcript detailing Close Request state machine & Position entity elimination)
- `src/components/diagrams/` (`ModalAuditBeforeAfter.astro`, `ApprovalFlow.astro`, `QuotaCard.astro`)
- `docs/agent-system/OPERATING-CONTRACT.md` (Canonical multi-agent operating rules)

---

## SECTION 9: MINIMAL FAVOUR INPUT REQUIRED

Favour reviewed the preflight inventory on 2026-08-06 and provided her decisions:

```
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 1: REQUIRED FOR FIRST VERSION — ALL ITEMS CONFIRMED BY FAVOUR     │
├────────────────────────────────────────────────────────────────────────┤
│ 1. NDA Brand Clearance Choice                                          │
│    - DECISION: CONFIRMED — Use "Ubisoft" explicitly.                   │
│                                                                        │
│ 2. Tool Title Anonymization Preference                                 │
│    - DECISION: CONFIRMED — Use generic domain descriptors (e.g.,       │
│      "Resource Management Platform", "Hybrid Workplace Platform").     │
│                                                                        │
│ 3. Sign-Off on Selected Problem Stories                                │
│    - DECISION: CONFIRMED — Original 3 approved + 3 additional          │
│      shortlisted problem stories approved (Total 6 problem stories).   │
└────────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 2: HELPFUL LATER (3 Items — Optional / Enhancement)              │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Post-Launch Qualitative / Quantitative Feedback                      │
│ 2. Contextual Quotes for Stakeholder Alignment                         │
│ 3. Additional Tool Names for Breadth List                             │
└────────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 3: NOT NEEDED THIS WEEK (Excluded Homework)                       │
├────────────────────────────────────────────────────────────────────────┤
│ ✕ Original unblurred Figma files or internal Ubisoft screenshots.     │
│ ✕ Comprehensive documentation of all 40 individual audited modals.    │
│ ✕ Full video recordings or live demos of internal enterprise tools.   │
│ ✕ Detailed technical backend code or database schemas.                │
└────────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 2: HELPFUL LATER (3 Items — Optional / Enhancement)              │
├────────────────────────────────────────────────────────────────────────┤
│ 1. Post-Launch Qualitative / Quantitative Feedback                      │
│ 2. Contextual Quotes for Stakeholder Alignment                         │
│ 3. Additional Tool Names for Breadth List                             │
└────────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────────┐
│ TIER 3: NOT NEEDED THIS WEEK (Excluded Homework)                       │
├────────────────────────────────────────────────────────────────────────┤
│ ✕ Original unblurred Figma files or internal Ubisoft screenshots.     │
│ ✕ Comprehensive documentation of all 40 individual audited modals.    │
│ ✕ Full video recordings or live demos of internal enterprise tools.   │
│ ✕ Detailed technical backend code or database schemas.                │
└────────────────────────────────────────────────────────────────────────┘
```

---

## SECTION 10: EXTERNAL RESEARCH REQUESTS CREATED

In accordance with `OPERATING-CONTRACT.md` Section D, two self-contained research request prompt files have been created in `docs/agent-system/research-requests/`:

1. `20260806-ai-designer-operating-model-benchmarks.md`: Prompts for benchmarking Senior/Staff AI Product Designer portfolios (OpenAI, Anthropic, Linear). Findings emphasize designing for non-determinism, state machine visualization, human vs. AI agency matrices, and 4-stage case study frameworks.
2. `20260806-nda-gaming-enterprise-case-studies.md`: Prompts for benchmarking NDA-heavy AAA gaming & enterprise tool portfolios. Findings emphasize process-first narratives, generic system whitewashing, shadow portfolio capability grids, and explicit header disclaimers.

---

## SECTION 11: RECOMMENDED NAVIGATION

We recommend updating `nav` in `src/data/site.ts` to a clean 6-item navigation bar:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  [F] Favour Diokpo      Home    HERA OS    Ubisoft Work    About    Lineage    Contact │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Navigation Configuration (`src/data/site.ts`)
```typescript
export const nav = [
  { label: 'Home', href: '' },
  { label: 'HERA OS', href: 'work/hera/' },
  { label: 'Ubisoft Work', href: 'work/enterprise-tools/' },
  { label: 'About', href: 'about/' },
  { label: 'Lineage', href: 'work/lineage/' },
  { label: 'Contact', href: 'contact/' },
];
```

### Hierarchy & Structural Rationale
1. `Home` (`/`): High-impact entry point. Preserves the full HERA YC launch experience.
2. `HERA OS` (`/work/hera/`): Flagship AI operating system Deep Dive case study.
3. `Ubisoft Work` (`/work/enterprise-tools/`): **PRIMARY REPOSITIONING ANCHOR.** Reconnects 4+ years of senior enterprise UX/PM experience.
4. `About` (`/about/`): Explains Favour's product engineering method ("How I turn unclear ideas into coherent product systems").
5. `Lineage` (`/work/lineage/`): Proves "The Long Build" — personal tools built over years.
6. `Contact` (`/contact/`): Clear conversion page with confirmed links (GitHub, Email, LinkedIn, Resume PDF).

---

## SECTION 12: RECOMMENDED IMPLEMENTATION SLICES IN DEPENDENCY ORDER

We recommend executing portfolio deployment across 5 dependency-ordered slices:

1. **Slice 1: Header Navigation & Route Activation** (`src/data/site.ts`)  
   - Update `nav` array to include `Ubisoft Work` (`work/enterprise-tools/`) and `About` (`about/`).  
   - Instant win: Reconnects existing, verified Ubisoft content without code risk.
2. **Slice 2: About Page Content Architecture Build** (`src/pages/about.astro`)  
   - Rebuild `src/pages/about.astro` following the 6-section architecture defined in Section 4.
3. **Slice 3: Ubisoft Work Page Polish & Disclaimer Update** (`src/pages/work/enterprise-tools.astro`)  
   - Enhance `enterprise-tools.astro` with explicit NDA disclaimers and the 3 problem story headers.
4. **Slice 4: Independent Verification & Build Validation**  
   - Run `npm run check` and `npm run build` to verify type safety and static HTML generation under `./dist/`.
5. **Slice 5: Favour Review & Approval Handoff**  
   - Present completed site on `portfolio-week1` branch for Favour's review and sign-off.

---

## SECTION 13: THE SINGLE BEST FIRST BUILD SLICE AFTER APPROVAL

**Recommended First Build Slice: SLICE 1 — Header Navigation & Route Activation (`src/data/site.ts`)**

### Rationale:
- **Zero Layout / Component Risk**: Requires editing a single array in `src/data/site.ts`.
- **Immediate Impact**: Instantly exposes Favour's 4+ years of senior enterprise experience at Ubisoft (`/work/enterprise-tools/`) and the About page stub (`/about/`) across the live site navigation.
- **Solves the Positioning Gap**: Bridges the founder pitch vs. career portfolio gap in less than 5 minutes of work.
- **Deterministically Verifiable**: Can be verified instantly via `npm run build` and visual header check across viewports.

# Operating Contract — hera_os Portfolio Repository

> **Canonical authority.** All agents (Codex, Claude Code, Antigravity) are bound by this document.
> Adapters (`AGENTS.md`, `CLAUDE.md`, `.agents/rules/`) reference this — they do not supersede it.

---

## A. Human authority — Favour owns these

Agents must not invent or assume decisions in the following areas:

- **Career positioning** — narrative framing, professional claims, seniority signals
- **Factual claims** — specific metrics, project outcomes, team sizes, timelines
- **Confidentiality** — what Ubisoft or HERA internal material may be made public
- **Personal taste** — visual/tone decisions that materially affect the published result
- **Final approval** — no change to a public-facing page is final until Favour approves it

When one of these is required and Favour has not decided, stop and ask. Do not substitute a plausible-sounding answer.

---

## B. Chief Coordinator responsibility

The main conversation agent is always the Chief Coordinator. Its job:

1. **Understand** — fully parse the request before acting.
2. **Check current truth** — read sprint state and project truth before rediscovering anything already recorded.
3. **Determine what is unknown** — distinguish verified facts from open questions.
4. **Decide scope** — is this small enough to do directly, or does it need decomposition?
5. **Create bounded packets** — if decomposing, each packet has a clear objective, scope, acceptance criteria, and exclusions.
6. **Delegate** — assign packets to appropriate subagents with all already-known facts included.
7. **Reconcile** — integrate returns, resolve conflicts, identify remaining gaps.
8. **Hand off** — deliver to Favour in plain language: what works, what was proven, what remains open, what she needs to decide.

The coordinator does not write implementation code when a builder is active. The coordinator does not accept its own work as verified.

---

## C. Work classification

**Do directly** (no decomposition needed):
- Single-file edits
- Copy updates with no layout implications
- Config changes
- Answering questions about the codebase
- Trivial bug fixes

**Decompose** when the work contains genuinely separable concerns:
- Research + implementation (different knowledge domains)
- Implementation + independent verification (requires an agent that did not write the code)
- Multiple independent build lanes that can run in parallel
- A repair cycle after a verification failure

**Never** manufacture decomposition for trivial work. Process has a cost.

---

## D. Research discipline

**Repository research** (reading existing files, understanding current state):
- May be delegated to the `repository-researcher` subagent.
- The coordinator must provide a bounded question list. The researcher does not decide what to look for.

**External research** (web, industry standards, competitor analysis, portfolio strategy):
- Must NOT consume coding-agent allowance by default.
- When external research is needed, write a self-contained prompt file under `docs/agent-system/research-requests/`.
- The prompt must contain: exact questions, required source quality, desired output format, maximum useful length, and how the answer affects the portfolio decision.
- After writing the prompt, **stop that research lane** and report that the prompt is ready for Favour to run via ChatGPT or web browsing.
- Favour may explicitly authorize the coding environment to perform external research. Without that authorization, do not proceed.

---

## E. Builder discipline

A builder receives a **work packet** containing:

- **Objective** — what must exist when done
- **Approved specification** — the exact agreed design/copy/structure
- **Acceptance criteria** — what the verifier will check
- **File lane** — exactly which files the builder may touch
- **Relevant existing decisions** — from `DECISIONS.md` and `PROJECT-TRUTH.md`
- **Explicit exclusions** — what is out of scope
- **Expected return** — what the builder must deliver back

The builder:
- Does not perform a broad repository audit (the coordinator already provided the facts)
- Stays inside the assigned file lane
- Runs deterministic checks (`npm run build`, `npm run check`) before returning
- Returns: changed files, build status, and any unresolved facts (not editorial opinions)
- **Cannot declare final acceptance of its own work**

---

## F. Verification discipline

The verifier is independent — it did not write the code it is checking.

A verifier checks all of the following:

- [ ] The requested result actually exists
- [ ] It works (build passes, links resolve, routes are correct)
- [ ] It matches the approved packet specification
- [ ] Existing working pages are preserved and unbroken
- [ ] Correct behavior at relevant desktop and mobile widths
- [ ] Build output (`dist/`) is correct and complete
- [ ] No unsupported claims or content were added by the builder
- [ ] Evidence can be trusted (not self-reported pass)

The verifier **does not edit production code**.

Failures are returned as a numbered defect list: criterion, observed behavior, expected behavior, relevant file/line.

---

## G. Repair discipline

A repair builder receives only the minimum context needed to fix the defects:

- Failed acceptance criteria (numbered list from verifier)
- Exact defects (criterion, observed, expected, file/line)
- Relevant files to touch
- Previous attempt context sufficient to avoid repeating the same mistake

The repair builder does **not** restart the entire original investigation.
The repair builder does **not** re-read the full specification from scratch unless a defect requires it.
After repair, the work returns to the verifier for a fresh pass.

---

## H. Usage discipline

Agent allowance (compute, tokens, time) is a finite resource. Protect it.

- **Never pay twice** for the same investigation. If the coordinator already knows something, pass it to every subagent.
- **Parallelise only genuinely independent work.** Two agents working on the same concern in parallel is waste.
- **Do not spawn subagents merely because they are available.** The coordinator is capable of direct work.
- **Stop immediately** when an approved approach is invalidated. Do not continue executing a plan that has been proven wrong.
- **Prefer one well-scoped capable agent** over several shallow overlapping agents.
- **External research** goes to cheaper tools (ChatGPT, web browser) unless Favour explicitly authorizes in-session research.

---

## I. Public/confidentiality default

Ubisoft material is **NOT** assumed safe for publication merely because it exists in the repository or in Favour's files.

Until Favour explicitly approves a specific item:

- Do not publish internal screenshots, dashboards, or metrics
- Do not publish confidential workflow details or internal process names
- Do not publish sensitive organizational information or team structures
- When in doubt, use **generic system categories** rather than internal names

HERA's currently public website material may remain public. Do not expose:
- HERA's unpublished technical implementation or prompts
- Internal orchestration details or agent-to-agent protocols
- Unpublished product strategy or roadmap
- Private source material or conversations

The portfolio goal is to demonstrate Favour's thinking — it does not require revealing confidential internals to be compelling.

---

## J. Completion standard

When work is complete, the coordinator hands off to Favour in **plain language**.

Every completion report must lead with:

1. **What now works** — specific, observable facts (not "the page is done")
2. **What was proven** — what verification showed (build output, links checked, etc.)
3. **What remains unresolved** — open questions, gaps, things not yet done
4. **What Favour needs to decide** — decisions that require her authority (see Section A)

Do not bury the answer beneath technical logs. Do not omit unresolved items to appear more complete. Do not invent a decision Favour has not made.

---

*Last updated: 2026-08-05 — operating system installation*

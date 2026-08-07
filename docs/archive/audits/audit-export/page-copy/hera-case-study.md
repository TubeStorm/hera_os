# HERA case study — exact copy

Route: `/work/hera/` (`src/pages/work/hera.astro` via `CaseStudyLayout`)

---

Back link: All work

Eyebrow: Case study — AI-native workspace
Heading: **HERA OS — Designing an AI-native workspace for non-technical builders**
Subtitle: AI tools are powerful but fragile. Context disappears, files vanish, agents hallucinate, and users can't see what's happening. HERA explores what it takes to make AI work feel visible, controllable, and understandable.

Meta: Role — Product architect & UX systems · Type — AI-native workspace · Timeline — 2025 — Present · Focus — Agentic AI UX

Hero image: Screenshot placeholder — HERA — Global Iris assistant

Redaction note: Redacted design & product case study — no proprietary code, prompts, file paths, or business model is shown.

## Problem

AI tools promise leverage but often deliver **fragility**. Context disappears between sessions. Files a user swears they attached quietly vanish. Agents hallucinate, permissions interrupt work at the worst moment, and — worst of all — users can't **see what is happening**. The result is software that's powerful in demos and untrustworthy in daily use.

HERA started from one question: what would it take to make working with AI feel visible, controllable, and understandable — for people who don't write code?

## My role

**Product architect, UX systems designer, agent workflow designer, spec writer, and QA lead.** I owned the underlying model — the objects, states, and edge cases — as much as the surfaces. That meant defining how memory, files, tasks, and permissions behave before any screen was polished, then pressure-testing the flows that most teams ship broken by accident.

## Product model

HERA treats the assistant, the workspace, and the user's intent as one connected system. A global assistant travels with the user; rooms hold scoped work; the composer is the honest single surface where messages, files, and agent actions meet. Everything an agent does is meant to be legible — with a visible cause and a reversible path.

Image: Screenshot placeholder — HERA — Composer with file-aware chat

## Key systems designed

- **Global Iris assistant** — A persistent assistant that follows the user across the OS without hijacking the workspace.
- **Rooms / workspaces** — Scoped spaces where work, files, and agents live together with clear boundaries.
- **Composer** — The core input surface — messages, attachments, and agent actions in one honest flow.
- **Memory blocks** — Human-readable memory the user can see, edit, and trust instead of a black box.
- **Life OS** — A higher-level view of goals, tasks, and activity across the whole system.
- **Tasks & goals** — Turning agent work into trackable, resumable units of progress.
- **Skills & tools catalog** — A discoverable surface for what agents can actually do.
- **Permissions** — Interaction models that keep users in control without constant interruption.
- **File-aware chat** — Chat that knows about real files — no phantom attachments, no lost context.
- **Surface actions** — Making agent actions visible and reversible at the point they happen.

## Hard UX problems

- Ghost chat states — turns that appeared stuck, empty, or half-finished.
- Duplicate assistant messages breaking the sense of a single, trustworthy voice.
- Attachment truth — making the files a user attached actually real to the system.
- Permission modes that protect users without interrupting real work.
- Global assistant vs. room assistant — one identity, two contexts, no confusion.
- User trust in agentic actions — showing cause, effect, and a way back.
- Making AI actions visible instead of happening invisibly in the background.

Callout (quote): The hardest part of agentic UX isn't the agent — it's convincing the user they can trust what they can't see.

## Selected screens

- Screenshot placeholder — HERA — Global Iris right rail
- Screenshot placeholder — HERA — Life OS overview
- Screenshot placeholder — HERA — Memory blocks
- Screenshot placeholder — HERA — Permissions / run confirm

## What this demonstrates

- Architecting a product's invisible model — objects, states, and edge cases — end to end.
- Designing agentic AI UX that keeps users oriented and in control.
- Turning trust into concrete interface decisions, not vibes.
- Shipping and QA'ing the fragile states most AI products leak.

## What I'd improve next

Deeper onboarding for first-run trust, tighter feedback when long agent tasks are running, and a more opinionated default for how much autonomy an agent should take before checking in. The goal stays the same: quiet, confident surfaces that are hard to break and easy to trust.

## Footer CTA (case-study layout)

Want the full walkthrough? — Happy to talk through the decisions, trade-offs, and what I'd do next.
Buttons: Get in touch · More work

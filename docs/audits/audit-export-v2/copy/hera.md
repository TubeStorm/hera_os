# Page copy — hera

Route: /work/hera/

---

Skip to content
F Favour Diokpo Work Resume About Contact
Get in touch

All work
Case study — AI-native workspace
HERA OS — Making agentic AI visible, controllable, and safe to trust
AI products are powerful, but they break trust the moment users can’t see what the system remembered, what files exist, what an agent did, or why something cost money. HERA is a product/design experiment in making agentic AI legible for non-technical builders.
Role
Product architect & UX systems

Type
AI-native workspace

Timeline
2025 — Present

Focus
Trust, control & agentic UX

I Global Iris
watching the whole OS

What the system will tell you every turn
Saw
3 files in room

file-aware chat
Did
2 actions · reversible

surface actions
Saved
1 memory block

human-readable
Forgot
nothing hidden

no ghost state
Cost
$0.04 this turn

visible burn

System map HERA reports its own state every turn — what it saw, did, saved, forgot, and cost.

Redacted design & product case study — no proprietary code, prompts, file paths, business model,
or unreleased roadmap is shown.

The trust problem in AI tools

AI tools promise leverage but often deliver fragility . Context disappears
between sessions. Files a user swears they attached quietly vanish. Agents act invisibly,
permissions interrupt at the worst moment, and money gets spent with no receipt. The deepest
problem isn’t capability — it’s that users can’t see what the system is doing .

You can’t trust what you can’t see. If a person can’t tell what the AI remembered, what files
exist, what an agent just did, or why a turn cost money, no amount of model quality earns their
confidence. HERA started from one question: what would it take to make working with AI feel
visible, controllable, and understandable — for people who don’t write code?

Why normal chat UI breaks down

A single scrolling chat log is a great demo and a poor system of record. It hides state instead
of showing it: turns appear stuck or half-finished, the assistant sometimes speaks twice,
attachments become phantom references, and “done!” can be a hallucination. The interface tells
a story the system can’t back up.

Before — ghost state
Run the report agent.

…nothing. Did it work? Did it save? Did it cost money?

Empty turns, duplicate replies, fake success — trust leaks here.

After — visible state
Run the report agent.

Report generated

2 files read · saved to Files · $0.03 · undo available

Cause, effect, cost, and a way back — every time.

Before / after A stuck, silent turn (before) vs. a visible system state with cause, cost, and undo (after).

Product model

I separated global assistant behavior from room-scoped work . A single Global
Iris identity travels with the user across the OS; rooms hold scoped work, files, and agents
with clear boundaries. The composer is the honest single surface where messages, files, and
agent actions meet — and everything an agent does is meant to be legible, with a visible cause
and a reversible path.

I Global Iris
One identity that follows you across the OS — never hijacks the workspace.
· right-rail, always reachable
· cross-room awareness
· your preferences, everywhere

Rooms / workspaces
Scoped spaces where work, files, and agents live together with clear boundaries.
Research
room 1

Build
room 2

Ops
room 3

Same assistant, different context — no confusion about where work lives.

System map One assistant identity, two contexts — global reach without losing where work lives.

My role
Product architect, UX systems designer, agent workflow designer, spec writer, and QA
lead. I designed the trust layer for an AI workspace — the objects, states, and edge
cases as much as the surfaces. That meant defining how memory, files, tasks, permissions, and
cost behave before any screen was polished, then pressure-testing the flows most teams ship
broken by accident.

What I designed
I turned invisible agent behavior into visible system states, and designed interfaces for what the AI saw, did, saved, forgot, and cost:

Global Iris assistant
A persistent assistant that follows the user across the OS without hijacking the workspace.

Room-based workspaces
Scoped spaces where work, files, and agents live together with clear boundaries.

Composer 2.0
The core input surface — messages, attachments, and agent actions in one honest flow.

Canonical chat integrity
One trustworthy transcript: no ghost turns, no duplicate replies, no fake success.

File-aware chat & attachment truth
Chat that knows about real files — what you attach becomes real, not a phantom reference.

Memory blocks
Human-readable memory the user can see, edit, and trust instead of a black box.

Permissions & run-confirm
Interaction models that keep users in control without interrupting real work.

Surface actions & action drawers
Making what an agent did visible and reversible at the point it happens.

Goals & tasks
Turning agent work into trackable, resumable units of progress.

Life OS
A higher-level view of goals, tasks, activity, and cost across the whole system.

Skills & tools catalog
A discoverable surface for what agents can actually do.

Cost visibility
Never showing $0.00 when the truth is unknown — honest, per-turn burn.

Summarize the attached spec and flag open questions.

spec-v3.pdf

real file

+ attach @ agent

Attachment truth: what you attach becomes a real file in the room — no phantom references, no silently lost context.

Annotated UI Composer with file-aware chat — attachment truth means the file you attach is real to the system.
Memory
visible · editable · yours
Preference Ship copy in a direct, no-fluff voice.

Project HERA closeout docs live under docs/closeout/.

Fact Backend restarts itself — just kill the process.

Not a hidden vector store — memory you can read, correct, or delete.

Annotated UI Memory blocks — human-readable memory the user can read, correct, or delete.

Hard decisions
One voice, two contexts. Keeping a single assistant identity while making global vs. room behavior obvious — instead of two assistants that confuse users.
Permissions without friction. Protecting users from destructive actions while letting safe, read-only tools run automatically, so control never becomes nagging.
Honesty over polish. Choosing to show real empty states, real cost, and real failure rather than a smooth lie. Unknown cost renders as “—”, never as “$0.00”.
Canonical transcript. Treating the chat as a system of record with integrity rules, not a cosmetic log — even when that meant reworking how turns are stored and replayed.

01
Agent requests
wants to run “delete 4 files”

02
Run-confirm
shows exactly what & where

03
Allow / Deny
or “always allow” safe tools

System tools stay frictionless: read files search auto-allowed

Flow Run-confirm: the agent shows exactly what it wants to do; safe tools stay frictionless.

The hardest part of agentic UX isn’t the agent — it’s convincing the user they can trust what
they can’t see. So I stopped hiding it.

What broke — and how the model improved
Ghost turns. Turns that looked stuck or empty pushed me to design explicit turn states — running, done, failed — with a visible result and a way back.
Duplicate assistant messages. Breaking the sense of a single trustworthy voice forced canonical chat-integrity rules on top of the transcript.
Phantom attachments. Files that “attached” but weren’t real led to attachment truth: a browser attachment becomes an actual room file, or it doesn’t claim to exist.
Silent cost. Spend with no receipt led to per-turn burn surfaced in Life OS — and the rule that unknown cost is shown honestly, never as zero.

Each failure sharpened the same thesis: the fix for fragile AI isn’t a better demo, it’s a
product model where the system tells the truth about its own state.

What this proves about my product skill
I can architect an AI product’s invisible model — objects, states, and edge cases — end to end.
I design agentic AI UX that keeps non-technical users oriented and in control.
I turn trust into concrete interface decisions: visible cause, reversible action, honest cost.
I ship and QA the fragile states most AI products leak — ghost turns, duplicates, phantom files, fake success.

What I’d improve next

Deeper first-run onboarding for trust, tighter feedback while long agent tasks run, and a more
opinionated default for how much autonomy an agent takes before checking in. The goal stays the
same: quiet, confident surfaces that are hard to break and easy to trust.

Want the full walkthrough?
Happy to talk through the decisions, trade-offs, and what I’d do next.

Get in touch More work

I make AI systems easier to trust, control, and actually use.
Available for select work — remote & hybrid

Get in touch

Pages
Work
Resume
About
Contact

Elsewhere
GitHub
Email
LinkedIn

© 2026 Favour Diokpo. All rights reserved.
AI Product Systems Designer

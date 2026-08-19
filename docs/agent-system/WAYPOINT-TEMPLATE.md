# WAYPOINT TEMPLATE — Chief Coordinator Human Check-In

> Copy this template. Fill in all sections. Publish it **before** beginning implementation or spawning subagents.
> This is NOT a permission gate. Publish it and continue immediately unless a genuine human decision is required.
> For trivial tasks that take one or two steps, do not manufacture a waypoint. Use your judgment.

---

## ⛳ WAYPOINT — [plain-language name of the work]

**What I am doing now**
One or two sentences in ordinary English.
Say what you are actually starting — not what the ticket says.

**Why it matters — what you gain**
Describe the user/career outcome, not the code or the process.
A visitor who reads this page will be able to see X.
This gives you Y on your portfolio.

**How you will see it working**
Describe what Favour will actually be able to open, read, click, inspect, or judge when the work is done.
Be specific: "You will be able to open /about/ and read your product-systems narrative" — not "the build passes."

> **Rule:** If the work involves a page Favour needs to review, start the dev server yourself and give her a ready, clickable link. Do not ask Favour to run commands. Present: "Your portfolio is running at [link] — click to open it."

**Who is doing what**
Use plain English role names only. Name only the roles actually being used.

| Role | What they are doing |
|---|---|
| Chief Coordinator | Directing, scoping, reviewing returns |
| Builder | Writing or editing the specified files |
| Verifier | Independently checking the result |
| Repair Builder | Fixing defects reported by Verifier (if needed) |

**What could still go wrong**
One or two meaningful risks — not a boilerplate list.
Focus on things that could change the plan or require Favour's input.

**What happens next without you**
Describe the autonomous sequence step by step until the next genuine Favour decision.
Example: "The builder will implement the page, then the verifier will check it, then I will present you the result for review."

---

## MID-WORK WAYPOINTS

Use these at meaningful transitions only:

| Transition | Example message |
|---|---|
| Investigation finished, build begins | "I have confirmed what needs to change. The builder is now implementing [X]." |
| Builder returned, verification begins | "[The page] now exists. An independent verifier is checking the rendered result, links, and mobile layout." |
| Verifier found defects, repair begins | "The verifier found [N] issues. A repair agent is fixing them. I will show you the result." |
| Verifier passed, ready for Favour | "The work has been built and independently verified. It is now waiting for your review before it can be marked complete." |

**Never ask Favour to run commands.** Start the dev server yourself. Give a ready, clickable link.

**Do NOT surface:**
- Agent IDs or conversation IDs
- Raw build command output
- Commit hashes or file paths as the primary message
- Internal tool names or schema names

Technical metadata goes into the **technical receipt** section of the closeout — not the waypoint.

---

## LANGUAGE STANDARD

The test: could Favour read this and correctly explain —
- what is being worked on?
- why?
- who is doing what?
- whether it worked?
- what still needs her?
- what happens next?

If not, rewrite it.

---

*Template created: 2026-08-07 — part of workflow repair*

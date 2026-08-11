# Portfolio Design Execution Standard

> **Canonical shared guidance for Codex, Antigravity, Claude Code, builders, and verifiers.** Read this before building or repairing any animated, interactive, or highly visual portfolio surface.

## The governing rule

Design the visitor’s understanding over time, not a collection of attractive end states. A visual is successful only when a first-time visitor can tell what stayed the same, what changed, why it changed, and what conclusion to draw.

## Before building

1. **Name the one idea.** Write the single sentence the visitor should understand at a glance.
2. **Inventory the existing design language.** Find the live production or approved catalogue component that owns each visible pattern. Reuse its geometry, spacing, colour, typography, and state language. Do not create a look-alike from memory.
3. **Write the timeline.** Define the starting frame, moments of tension, reveal, reading holds, transition, loop, pause behaviour, and reduced-motion end state.
4. **Mark invariants.** Explicitly list everything that must not move between comparison states: container size, shared copy, chat width, baseline, controls, or navigation.
5. **Remove explanation the motion already provides.** Prefer timing, position, and feedback colour over captions that narrate the obvious.

## Comparison scenes

- Keep shared information physically identical. Do not rebuild or reflow it between states.
- Reserve space for conditional content so its arrival does not squeeze the control group.
- Change the smallest possible variable. If the lesson is “context changes the answer,” the conversation, canvas, and controls stay fixed; only context evidence, reasoning state, and answer change.
- Use persistent orientation cues. A cursor, active tab, progress marker, or play state must not disappear while it is doing explanatory work.
- Give every reveal a readable hold. Do not switch scenes as soon as the final state appears.

## Motion and narrative tension

- Start from the information the visitor is meant to remember; do not make old information float in again.
- Use this rhythm: **establish → pause/think → inspect or resolve → reveal → hold → transition**.
- Use casual, human-readable system language. A fourteen-year-old should understand the status without knowing AI terminology.
- Motion must explain causality. Decorative motion may support hierarchy but must never compete with the evidence.
- Provide pause/play for any loop containing text that must be read.
- Reduced-motion mode must show a coherent, useful end state rather than a frozen beginning.

## Visual consistency

- Do not mix canvas backgrounds, component families, corner systems, or message treatments inside one comparison unless the difference itself is the point.
- User and agent messages must come from the approved product family when the portfolio is depicting that product.
- Decorative controls may imply editability, but must not fake working product behaviour. Use accessible labels and established iconography.
- Colour supports meaning after the structure is clear. Red and green may reinforce a failed and successful outcome; they must not carry the explanation alone.

## Required design receipt

Every visual implementation packet must include:

- the one-sentence visitor takeaway;
- the approved reference components and where they were found;
- the timed state sequence;
- layout invariants;
- responsive and reduced-motion behaviour;
- a list of labels or decoration deliberately removed;
- desktop and narrow rendered proof;
- the exact questions Favour should judge in visual review.

## Learning loop

At closeout, add only reusable, confirmed lessons to this standard or `PROJECT-TRUTH.md`. Do not preserve one-off taste guesses as universal rules. When Favour corrects a recurring pattern, update the owning standard in the same slice so the next agent receives the correction before it designs.

This task touches **HERA the application**, not `hera_os` the portfolio.

### Goal

Create a small, durable **HERA → Portfolio Asset Bridge** so the portfolio project can use authentic HERA visual assets and behavior without repeatedly reading or reverse-engineering the HERA application.

This is a research/export task.

Do not redesign HERA.

Do not edit the portfolio.

Do not create portfolio-specific one-off sprite implementations inside HERA.

### Read first

Follow the normal HERA workflow and existing authority documents.

In particular, use existing project truth and `docs/engineering/BUILDER-CHEATS.md` before investigating anything already known.

The point of this task is specifically to stop future portfolio agents paying repeatedly to understand the HERA codebase.

### Output location

Create:

`D:\Documents\favour-ai-product-portfolio\docs\preflights\hera website revamp\Task 0\HERA Asset Bridge\`

Keep the documents SHORT.

Create:

1. `00 READ ME.md`
2. `01 HERA LOGO.md`
3. `02 IRIS SPRITE CONTRACT.md`
4. `03 CHARACTER GENERATOR CONTRACT.md`
5. `04 VOID AND ROOM VISUAL CONTRACT.md`
6. `05 PORTFOLIO SHOPPING LIST.md`
7. `exports\`

Do not create one giant report.

### 01 HERA LOGO

Find the canonical HERA logo actually used by the application.

Report:

- exact source asset path
- format
- whether there are variants
- intended light/dark usage
- actual colors if relevant
- whether it can be safely copied into the public portfolio
- which exact file the portfolio should use

If the logo is generated rather than stored as a simple asset, explain the minimum portable representation.

Put a public-safe export into `exports\` if possible.

Do not invent or redraw the logo.

### 02 IRIS SPRITE CONTRACT

Find the actual Iris character implementation.

The portfolio needs to reproduce **the real Iris**, not approximate her.

Document:

- canonical Iris customization / appearance source
- sprite sheet or character assets she ultimately resolves to
- frame dimensions
- scale assumptions
- rendering assumptions
- direction mapping
- animation names
- exact frame sequences for animations that ALREADY WORK
- animation speed / timing
- which animation corresponds to walking downward toward the viewer
- idle animation
- any other animations already mapped and genuinely usable
- whether hair/body/accessories are separate layers
- dependencies required to render her correctly
- what can be exported as static assets and what requires logic

Also explicitly list:

**READY NOW**  
animations the portfolio can safely use immediately.

**NOT MAPPED YET**  
animations that exist in the source assets but are not yet properly wired.

Do not map all missing animations in this task.

We will make a separate HERA-side task later if the Iris homepage section requires them.

If practical, create a tiny isolated preview proving the exported **walk down** and idle states without modifying production behavior.

### 03 CHARACTER GENERATOR CONTRACT

The future early-access crowd should use HERA's actual character visual language rather than the current placeholder portfolio people.

Investigate how HERA currently generates/customizes characters.

Document the smallest reusable contract needed to create a random visual character outside HERA.

We need to know:

- available body / hair / clothing / accessory layers or equivalent
- allowed combinations
- palette behavior
- deterministic generation possibilities
- what identifier or seed could recreate the same character
- whether the portfolio can safely generate a character from a HERA alias/seed
- which assets are safe to expose publicly
- runtime dependencies we should NOT drag into the portfolio

The desired future behavior is:

`waitlist participant → public alias/seed → deterministic HERA-style sprite`

The portfolio must NOT need the person's email to render their public character.

Do not implement the waitlist system here.

Only produce the contract and safe export assets required later.

### 04 VOID AND ROOM VISUAL CONTRACT

Inspect the actual room/void builder currently exposed through:

`http://127.0.0.1:8788/`

Verify from the code what this surface actually is and how it is started. Do not trust the URL alone.

Document:

- source implementation
- assets used for the Void
- assets used for room rendering
- what output the room builder produces
- whether a room can be exported as a static background
- what is required merely to render Iris against black
- what is required if we later decide to place Iris inside an authentic HERA room

For the current portfolio, **black is an acceptable Iris background**.

Do not build a room unless required to prove the contract.

Favour can use the existing room builder later if we decide a room improves the section.

### 05 PORTFOLIO SHOPPING LIST

This is the most important document.

Make a table with only:

**Item | Status | Exact source | Export | Portfolio use**

Items at minimum:

- HERA logo
- Iris appearance
- Iris walk-down animation
- Iris idle animation
- other currently mapped Iris animations
- HERA random character assets
- deterministic character seed contract
- Void assets
- room background/export method

Use only these statuses:

- `READY NOW`
- `NEEDS HERA WORK`
- `NOT NEEDED YET`

The point is that every future portfolio slice can read **one small shopping list** and know whether it has what it needs.

### Export rules

Anything placed in `exports\` must be:

- safe for a public website
- free of secrets
- free of internal database content
- free of private HERA prompts
- free of machine-specific runtime assumptions unless documented
- the smallest useful subset

Do not move the entire HERA sprite system or codebase into the handoff.

### Version the bridge

At the top of `00 READ ME.md`, record:

- HERA source commit inspected
- date
- source branch
- which local builder/version was inspected

This lets the portfolio project know when the cheat sheet has become stale.

### Stop condition

When this bridge is complete:

- show Favour the exact files created
- show the shopping list
- show visual proof of Iris using only animations genuinely ready now
- state what remains unmapped
- do NOT start mapping the rest
- do NOT edit `hera_os`
- handle HERA workflow/living-document bookkeeping yourself as required by the HERA project
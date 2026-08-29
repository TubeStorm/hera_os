# Browser Testing Protocol

> Read this before capturing any screenshot, verifying any visual/interactive result, or live-testing a page. Applies to the Chief and every subagent (`portfolio-verifier`, `portfolio-live-tester`, or anyone else driving a browser).

## The rule

**A broken Claude Browser tool is never a portfolio defect, and must never be recorded as one.** If the embedded pane stops actually driving the page — clicks report success but nothing on screen changes, navigation silently no-ops, the pane never loads — that is a tooling problem. Switch transport and keep going. Do not spend the session diagnosing Anthropic's tool, and do not leave a slice open because of it.

## Transport fallback is a workflow law (added 2026-08-28)

**Maximum time spent diagnosing a broken browser transport: 3 minutes, total, per slice.**

1. Attempt the preferred embedded browser **once**, using the one-minute preflight below.
2. If it cannot reliably click, scroll, render, or capture the real page — abandon that transport immediately.
3. Move directly to **Playwright Chromium**, or the next proven real-browser transport.
4. Once a reliable transport is found, use it for the **remainder of that slice** unless it also fails. Do not keep switching back to try to resurrect the preferred pane.

A browser-tool failure is **not** a product defect and must never be recorded as one. **Do not lower the proof standard because the transport changed.**

For scroll-driven or animated experiences specifically, **Playwright is an approved first-class verification method** and should be *preferred* over spending build allowance trying to revive an unreliable embedded pane. `page.evaluate("window.scrollTo({top: N, behavior: 'instant'})")` hits exact story checkpoints deterministically, which wheel gestures in the embedded pane cannot do reliably.

### Playwright is available in this environment — verified 2026-08-28

It is the **Python** package, not an npm devDependency. That is why earlier sessions wrongly concluded none was installed.

```bash
python -c "from playwright.sync_api import sync_playwright"
```

Chromium **148.0.7778.96** launches headless with no extra install. `browser.new_context(reduced_motion="reduce")` genuinely emulates `prefers-reduced-motion`, so **reduced motion is a verifiable criterion — there is no longer an excuse for reporting it unverified.** Working references already in this repo: `tests/e2e/capture_verification_screenshots.py` and `tests/e2e/capture_ea_v2_proofs.py`.

## Order of transport preference

1. **Claude Browser pane** (`mcp__Claude_Browser__*`) — try first, once, with the preflight.
2. **Playwright Chromium** (Python, confirmed working here) — the standing fallback, and the *first* choice for scroll-driven work.
3. **Claude in Chrome** (`mcp__claude-in-chrome__*`) — the user's real, logged-in Chrome, when a session actually has it.

An automated click from any real browser process against the real running dev server **is** legitimate proof. Nothing here requires a human finger on a mouse — it requires real, user-visible behavior in the real rendered page.

## One-minute transport preflight (before trusting any transport)

Never trust a transport because it *reports* success. Prove it can actually drive a page first:

1. Open the real dev-server page (or a neutral local page).
2. Click a harmless real control.
3. **Prove the click changed something** — a visible DOM change, a navigation, a console log — not just the tool's own "success" message.
4. Take one screenshot.
5. Confirm the viewport is not zero/blank.

If any step fails, drop to the next transport in the order above and re-run the preflight. Note which transport you ended up using in your evidence.

## What this does NOT permit

A broken transport is never license to substitute:
- injected JavaScript calling the page's own handlers as a stand-in for a real click;
- "the build/route resolved" as proof a visual/animated sequence looks and paces correctly;
- a screenshot of only the final frame as proof of a timed sequence.

Those remain `Fail`. The transport changes; the standard of proof does not.

## Screenshot review loop — look before you claim

Every screenshot must be **opened and actually looked at** before it is used to support a claim ("phase 3 clutter is legible", "mobile nav doesn't overflow", etc.).

1. Take the screenshot.
2. Open/inspect it.
3. Compare it to the specific claim it's meant to prove.
4. If it doesn't support the claim — wrong viewport, mid-transition, occluded element, wrong tab — fix the setup and retry.
5. **Up to three total attempts per check.** After three, stop, report the residual issue honestly (what's still wrong, what you tried), and move to the next check. Do not loop indefinitely on one shot.

Never write a finding implying you saw something you did not actually open and inspect.

## Never use an OS-level screenshot as a workaround

If your role's tools can't persist a browser screenshot to disk (e.g. `Write`/`Edit` disallowed for verifier/live-tester roles), **do not** reach for an OS-level screen-capture tool as a substitute. It captures whatever is actually on the user's screen — which may be their real, personal browser window, not the sandboxed pane — and there is no way to guarantee otherwise from inside the tool call. This happened once (2026-08-28, Slice 1 live-testing): a screen capture caught the user's personal Chrome window, including private tabs. It was deleted immediately, but it should never have been taken.

If you cannot save evidence within your role's own tools, say so plainly in your report and name the specific screenshots you couldn't persist — that is a process gap for the Chief to fix (e.g. by having a role with Write access archive them, or adjusting tool permissions), not something to work around with a broader-scoped capture.

## Where evidence lives

Archive human-facing screenshot sets under `docs/agent-system/screenshots/<slug>/` (see `screenshots/early-access-v2/` for the existing naming pattern: numbered, descriptive filenames). Reference the folder path in your report rather than pasting images inline.

---

## Lessons that became rules (Slice 1 repair, 2026-08-28)

### Before filing a "stuck / trapped / broken" defect, exhaust the visible affordances

A live tester filed a **Blocker** — "universal scroll trap, visitors can never reach the bottom of the page" — reproduced across five viewports with up to 78,000px of wheel delta. It was not a defect. It was the homepage's own intentional `#video-section` gate: in that mode every wheel event is deliberately cancelled and the only forward exit is **clicking the visible ↓ button**, which the tester never clicked. Past that, `#loop-section` advances one stage per gesture behind a ~560ms throttle, so wheel ticks fired faster than the throttle are swallowed and read as "stuck".

Therefore, before recording any stuck/trapped/unreachable defect:

1. **Try every visible on-screen affordance in that state** — buttons, arrows, cues, links. A gate with a visible control is a design decision, not a trap.
2. **Drive input at human pace.** Many gated sections throttle gestures (here, ~560ms). A burst of programmatic ticks is not a human scrolling; it tests the throttle, not the page.
3. **Check whether the behaviour predates the slice** before attributing it to it. Read `git log`/the diff for the file that owns the behaviour.
4. **The Chief must independently reproduce any Blocker before it stands.** A Blocker that survives into a closeout unreproduced is a process failure.

That the tester *concluded the page was broken* is still real signal about first-time-visitor comprehension — record it as a **UX question for Favour**, not as a defect. Both things can be true.

### Quantitative claims must carry their method

The builder measured `.md`-rain coverage over the AI response at **83.6%**; the verifier's independent grid-sampling script measured **72.7%** on the same frame. Neither was dishonest — the sampling densities and bounding-box selections differed.

- Any number used as acceptance evidence must state **how it was measured**.
- When two roles disagree, **record both numbers and the disagreement**, and let the **human/visual verdict on the actual rendered frame** decide the criterion.
- Never let a single unreconciled figure enter the cheat sheet or a closeout as fact.

### Judge continuous motion with continuous input

The live tester reported the `.md` rain "reads as a dense static-feeling grid rather than continuously falling streams" — while sampling it with discrete `scrollTo` jumps. The verifier independently confirmed the transforms change continuously and monotonically with scroll progress.

For scroll-scrubbed work: **discrete position jumps are valid for capturing a specific frame, and invalid for judging whether motion feels continuous.** Any perceptual claim about pacing, flow, or "does it feel like it's moving" must come from real, continuous wheel input.

### Verify a capability is absent before recording it absent

Three consecutive sessions recorded `prefers-reduced-motion` as unverifiable and "no Playwright installed in this repo." Playwright was installed the whole time — as the **Python** package rather than an npm devDependency, so `package.json` and `node_modules` checks both came up empty and nobody ran the one-line import. One command would have saved three sessions of hedged, unproven acceptance criteria.

**A capability is "unavailable" only after you have actually tried to use it.** Absence from the obvious manifest is not proof.

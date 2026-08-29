# Browser Testing Protocol

> Read this before capturing any screenshot, verifying any visual/interactive result, or live-testing a page. Applies to the Chief and every subagent (`portfolio-verifier`, `portfolio-live-tester`, or anyone else driving a browser).

## The rule

**A broken Claude Browser tool is never a portfolio defect, and must never be recorded as one.** If the embedded pane stops actually driving the page — clicks report success but nothing on screen changes, navigation silently no-ops, the pane never loads — that is a tooling problem. Switch transport and keep going. Do not spend the session diagnosing Anthropic's tool, and do not leave a slice open because of it.

## Order of transport preference

1. **Claude Browser pane** (`mcp__Claude_Browser__*`) — default, try first.
2. **Claude in Chrome** (`mcp__claude-in-chrome__*`) — the user's real, logged-in Chrome, if available in the session.
3. **Playwright, or any other real browser automation available in the environment** — a clean automated Chromium process is equally valid proof.

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

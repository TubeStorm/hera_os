# ⛳ WAYPOINT — Minimal HERA Early-Access Funnel

## What I am doing now
I am adding a lightweight, quiet early-access signup funnel to your portfolio website so visitors arriving from Reddit or LinkedIn can sign up for early access to HERA without turning your site into an aggressive SaaS landing page.

## Why it matters — what you gain
Visitors who discover HERA through your work or social posts can immediately express interest and leave their contact info. This captures high-intent early users while preserving the clean, thoughtful editorial feel of your portfolio and founder narrative.

## How you will see it working
Once the build is complete:
1. **Header Navigation**: You will see a small, elegant `Join early access` accent button in the top navigation bar.
2. **Homepage**: Near the bottom of the homepage (just before your closing bio section), a single quiet line will read: `Want to try HERA before everyone else? Join early access →`.
3. **Bottom-Right Launcher**: A discreet floating pill button reading `Early access ✦` will sit in the bottom-right corner.
4. **Floating Surface**: Clicking any of these three triggers opens an anchored floating card titled `Want in?` with an interactive `ⓘ` tooltip for privacy details, fields for email, name, use case, and an "unfinished things" tester checkbox, and a `Count me in` button.
5. **Session Success & Footer Agent**: When someone signs up, the form gently transitions to `You're in.` followed by `Go catch Iris.`, closes itself, changes the launcher text to `You're on the list ✓` (persisting across page reloads), and adds a new pixel wanderer agent to your footer animation alongside Iris.
6. **Mobile Viewport**: The floating panel smoothly fits narrow mobile screens (375px–390px) without horizontal scrolling or layout breaks.

## Where things live & files being touched
- **Entry point 1 (Nav)**: `src/components/Nav.astro` (line 36 inside the nav container pill).
- **Entry point 2 (Homepage)**: `src/pages/index.astro` (line 256, immediately before the closing bio and lineage links).
- **Entry point 3 & Surface**: `src/components/EarlyAccessSurface.astro` (new component) mounted globally in `src/layouts/BaseLayout.astro` (line 71).
- **Footer Sprite Animation**: `src/components/Footer.astro` (extended to dynamically spawn an extra session agent while keeping Iris and the 4 existing wanderers intact).

## Visual restraint & design rules
- **Zero generic SaaS cliches**: No dark blocking modal overlays, no multi-color gradients, no bordered cards, and no fake waitlist counts.
- **Design tokens reused**: Exact matches with `--paper`, `--surface`, `--ink`, `--muted`, `--faint`, `--line`, and `--accent`.
- **Typography & Geometry**: Uses Inter font hierarchy, `rounded-card` (18px) and `rounded-pill` (999px) border radii, and soft `--shadow-lift` elevation.
- **Hairline borders**: Crisp, subtle borders only where structurally necessary; no heavy interactive bounding boxes.

## Submissions & Privacy Contract
- **Formspree Adapter**: Submissions are posted directly to your live Formspree endpoint (`https://formspree.io/f/mwlkevkp`) using asynchronous JSON requests.
- **Zero repository secrets / No leaked data**: No user emails or personal information will ever be committed to Git or stored in local test files.

## Who is doing what
| Role | What they are doing |
|---|---|
| Chief Coordinator | Orchestrating multi-agent development tracks, gates, and verification |
| Builder | Implementing the floating surface component, entry points, and footer animation |
| Verifier | Independently checking build integrity, accessibility, Formspree payload, and mobile responsiveness |
| Challenger | Stress-testing error states, edge cases, and keyboard navigation |
| Forensic Auditor | Verifying zero hardcoded shortcuts, authentic implementation, and clean security hygiene |

## What could still go wrong
- Formspree network errors or rate limits: Handled gracefully with a friendly `Something went wrong. Try again?` message without exposing raw technical errors.
- Narrow mobile overflow: Mitigated with responsive max-width calculation (`w-[calc(100vw-2.5rem)]`).

## What happens next without you
The implementation builders will create the components, test agents will verify all interaction states and automated tests across desktop and mobile, screenshots will be captured, and the full verification receipt will be presented to you for final review.

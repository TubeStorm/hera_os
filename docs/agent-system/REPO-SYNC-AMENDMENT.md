# Repository Sync Amendment

> Canonical workflow amendment for portfolio work that spans the HERA public site and Favour's private portfolio.

## Rule

For every substantial portfolio slice, the Chief must synchronize both repositories before reading the execution packet or changing code, and must confirm both repositories are synchronized with their remotes again before closeout.

Repositories:

- `D:\Documents\favour-ai-product-portfolio` -> `TubeStorm/hera_os`
- `D:\Documents\favour-private-work` -> `TubeStorm/favour-private-work`

Current canonical branches:

- `hera_os`: `main`
- `favour-private-work`: `master`

## Before work

1. Inspect `git status` in both repositories.
2. Do not destroy or overwrite uncommitted human work. If unexpected local changes exist, stop and report them before pulling.
3. Checkout the canonical branch in each repository.
4. Pull the latest remote state for both repositories before reading or executing the slice packet.
5. Only after both repositories are current may implementation begin.

A stale local checkout is not an acceptable execution source.

## After work

1. Run the required build and verification checks for every repository touched by the slice.
2. Commit all intended changes in the repository where they belong.
3. Push every modified repository to its canonical remote branch.
4. Run a normal push/sync check on the other repository as well, even when it had no changes, so the closeout can confirm both local repositories are aligned with GitHub.
5. Closeout must state the final branch and commit SHA for both repositories.

## Cross-repository safety

- Never copy private Ubisoft evidence into `hera_os`.
- Never assume a file in one repository is current until both repositories have been synchronized at slice start.
- Do not force push as routine workflow.
- Do not silently reset one repository to match the other.
- If branches diverge or a pull cannot be completed safely, stop implementation and resolve repository truth first.

## Why this exists

On 2026-09-02, `main` and `portfolio-week1` diverged. The published HERA site retained the working Early Access funnel while the local portfolio branch silently lost it. This amendment exists so Favour never has to manually remind agents to pull both repositories before work or push/synchronize both after work.

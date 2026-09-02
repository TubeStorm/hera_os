# Slice 11A packet

Save this as:

`D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\slice 11A.md`

## Slice 11A: Reconcile HERA branches and restore production parity

### Read first

* Current repo:
  `D:\Documents\favour-ai-product-portfolio`
* GitHub:
  `TubeStorm/hera_os`
* Reference discussion:
  `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Ubisoft work page discussion 1.md`
* Read the repo operating contract and Design Execution Standard before changing code.
* This slice is about **branch truth and regression recovery**, not another portfolio redesign.

### Why this slice exists

`main` and `portfolio-week1` have diverged.

Right now:

* `main` contains the working HERA early access system used by the published site.
* `main` includes `EarlyAccessSurface`.
* `main` includes the Join early access navigation action.
* `main` contains the working signup funnel and associated production behavior.
* `portfolio-week1` contains newer portfolio and HERA visual work.
* `portfolio-week1` does **not** currently contain the full early access implementation.
* This is why localhost and the published website disagree.

This must be fixed before we migrate portfolio pages or change navigation architecture again.

### Primary goal

Create **one reconciled version of HERA** that contains:

* the latest HERA website and opening experience from `portfolio-week1`
* all working early access behavior from `main`
* the recent portfolio alignment work
* no loss of production functionality
* no loss of newer visual work

After verification, `main` must become the canonical current branch again.

### Non negotiable safety rules

* Do not force reset either branch.
* Do not overwrite `main` with `portfolio-week1`.
* Do not overwrite `portfolio-week1` with `main`.
* Do not use a blind merge and assume conflict resolution is correct.
* Compare the divergent implementation first.
* Resolve conflicts intentionally by feature.
* Preserve Git history.
* Do not modify `TubeStorm/favour-private-work` in this slice.
* Do not migrate About, Contact, Lineage, Ubisoft routes, or portfolio navigation yet.
* Do not begin RPM Chapter 02 or Chapter 03.

### Production functionality that must survive

Restore or preserve the complete early access system from `main`, including its actual dependencies and behavior.

At minimum verify:

* `EarlyAccessSurface` is mounted from the main HERA layout.
* Join early access is available from the HERA navigation.
* Any inline early access entry point used by the production experience still works.
* Opening the early access surface works.
* Form fields and discovery flow work.
* success state works.
* mobile layout works.
* the launcher reflects successful signup where applicable.
* no existing signup integration is replaced with fake local behavior.

Do not merely copy the visible button. Restore the actual functioning system.

### Newer HERA work that must survive

Preserve the latest work from `portfolio-week1`, especially:

* `OpeningFailureSequence`
* current homepage cinematic/story experience
* current HERA logo assets
* current HERA visual shell
* current Deep Dive
* current About implementation
* current Lineage implementation
* current Contact implementation
* Slice 7 Ubisoft gallery work
* Slice 10 public RPM copy alignment
* all currently working portfolio links until the later migration slice intentionally replaces them

Do not regress these just to match `main`.

### Navigation for this slice

Do **not** perform the final navigation redesign yet.

This slice only needs a reconciled HERA navigation that:

* preserves the current usable destinations
* restores Join early access
* preserves the newest HERA visual treatment where possible
* does not remove routes that will be migrated in Slice 11B

The final simplified navigation:

`HERA OS | Deep Dive | Portfolio | Join early access`

belongs to the next migration slice.

### Verification

Run the actual site locally from the reconciled branch.

Verify at minimum:

* HERA homepage desktop
* HERA homepage 390px mobile
* OpeningFailureSequence
* complete scroll story
* video section
* roadmap/workflow sequence
* Deep Dive
* About
* Lineage
* Contact
* Ubisoft Work
* Join early access navigation entry
* early access panel
* early access form
* success state
* mobile early access experience
* production build

Compare localhost directly against the currently published production site specifically for the waitlist behavior.

The requirement is not visual pixel equality. The requirement is:

**localhost must no longer be missing production features.**

### Git reconciliation

After browser verification passes:

* commit the reconciled implementation on `portfolio-week1`
* merge the reconciled work into `main`
* push `main`
* push `portfolio-week1`
* do not force push
* confirm both branches contain the reconciliation commit or are otherwise intentionally synchronized
* confirm `main` is the canonical production branch

If deployment is automated from `main`, verify the deployment starts successfully.

### Closeout

Report:

* original `main` SHA
* original `portfolio-week1` SHA
* reconciliation commit SHA
* final `main` SHA
* final `portfolio-week1` SHA
* files with meaningful merge conflicts
* exactly what was kept from `main`
* exactly what was kept from `portfolio-week1`
* early access verification evidence
* homepage verification evidence
* mobile verification evidence
* production build result
* whether deployment was triggered
* any remaining difference between localhost and production
* anything still unsafe to migrate in Slice 11B

Do not claim completion if the waitlist exists visually but the actual signup interaction is broken.

Status:

**`BUILT + VERIFIED: WAITING FOR FAVOUR REVIEW`**

Stop.

Do not begin Slice 11B.

---

# Adjoint Antigravity prompt

Send this after the packet exists:

* Execute **Slice 11A only**.
* Canonical packet:
  `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\slice 11A.md`
* Supporting product discussion:
  `D:\Documents\Favour's Vault\HERA\portfolio building archives\Hera portfolio revamp\Ubisoft work page discussion 1.md`
* Repo:
  `D:\Documents\favour-ai-product-portfolio`
* GitHub:
  `TubeStorm/hera_os`
* The immediate defect is that the published `main` site has the working HERA early access funnel while local `portfolio-week1` does not. The branches have diverged.
* Reconcile them deliberately. Do not force reset, blindly overwrite, or remove newer portfolio work.
* Preserve the newer HERA opening experience and portfolio work from `portfolio-week1`.
* Restore the complete working early access implementation from `main`.
* Browser verify both together.
* Once verified, merge the reconciled state into `main`, push both relevant branches, and confirm branch state.
* Do not modify `favour-private-work`.
* Do not migrate About, Lineage, Contact, or Ubisoft routes yet.
* Do not redesign the final navigation yet.
* Do not begin another slice after closeout.
* Stop at:
  **`BUILT + VERIFIED: WAITING FOR FAVOUR REVIEW`**

---

# What comes immediately after

* **Slice 11A:** make HERA sane again.
* **Slice 11B:** turn the two repos into the architecture we actually want:

  * HERA: Home, Deep Dive, Portfolio, Join early access
  * Portfolio: Work, About, Other Projects, Contact
  * migrate/repath About, Lineage, Contact
  * retire the duplicate HERA Ubisoft gallery/routes into redirects
  * repath things like `The Long Build →`, `See the systems that led here →`, Contact links, About links, and every other cross-site route.

Do **not** let it start 11B automatically. I want the branch reconciliation receipt first because this is exactly the kind of shit that can silently delete a working feature if we rush it.

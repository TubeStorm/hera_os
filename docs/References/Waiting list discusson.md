## Yes, add it now

* This is the missing bridge between **“interesting HERA post”** and **“I might actually use this.”**
* I would not call it a **Waitlist** everywhere. That sounds passive.
* Use **Join early access** as the main CTA.
* Internally, sure, it is your waitlist.
* Put it in three places:

  * top nav: **Join early access**
  * landing page near the main HERA CTA
  * small persistent bottom-right button: **Early access**

That way someone can read your permission rant, click HERA, poke around, and then actually do something.

## The little bottom-right experience

* Closed state:
  **Early access ✦**
* Click it and a small panel opens in that same corner, like support chat, but clearly a signup form.
* Do not make them fill out a startup application.

I would ask only:

* **Email** required
* **Name** optional
* **What would you want HERA to help you do?** optional
* checkbox: **I’m open to testing early versions**

That last one is useful because your waitlist can quietly become your first testing pool.

Then submit button:

**Count me in**

After submission:

> **You’re in.**
>
> I’m still building HERA, but when I’m ready to bring more people in, you’ll be one of the first I ask.
>
> **See you soon ✦**

Then the panel can collapse back into:

**You’re on the list ✓**

That is enough.

## Landing page copy

I would make this a tiny section, not a giant startup waitlist shrine.

### Option 1, my favorite

**Want to try HERA before everyone else?**

I’m still building it. Join the early access list and I’ll reach out when I’m ready for more people to break things.

**Join early access**

### Option 2, more HERA

**HERA isn’t ready for everyone yet.**

But if you want to be there when it is, join early access.

**Count me in**

### Option 3, more you

**I’m building this thing in public now, so you may as well come break it.**

Join the first group I’ll invite to try HERA.

**Join early access**

I actually think #3 fits the energy you have started establishing publicly.

## One thing I would not do

Do not put:

**20+ people waiting**

just because technically you can assemble 20 relatives and friends 😂

Count someone only once they have knowingly submitted the form or explicitly said they want access.

You absolutely can send the page to everybody you know and say:

> “I need early testers. Put your email here so I stop keeping this shit in my head.”

Then suddenly you may genuinely have 20.

But I would not even show the count yet. **“Join the first testers”** is stronger than some tiny vanity number anyway.

And yes, the post you already published now has an actual funnel:

**rant about real AI problem → HERA_OS → understand what you're building → Join early access → potential tester**

That is much more useful than merely accumulating likes.

Your final permission post also landed on the right investigation. The repeated Allow prompts are the emotional entry point, but the real HERA problem is still:

**What exactly did I authorize, where does that authority live, and how can I understand or revoke it later?**

So the public rant and the product work now line up rather nicely.


---
## I checked the actual repo first

* The site is Astro, deployed as a static GitHub Pages site. The homepage is deliberately theatrical and sparse: huge hero, progressive story, HERA demo, three discoveries, then your personal lineage. It does **not** have a conventional SaaS section stack, which is good.
* Navigation is centralized in `src/data/site.ts` and rendered through `src/components/Nav.astro`, so adding one global CTA should be clean, not duplicated page by page.
* The footer is already a custom animated world of little pixel agents with Iris walking among them. This is PERFECT for the waitlist. A successful signup can literally cause **a new agent to walk into the footer**. That feels native to the site instead of some Mailchimp shit glued onto it.
* Your own design file says the brand is restraint, quiet confidence, generous whitespace, no template SaaS energy, and no dead ends. The waitlist solves the current dead end beautifully.
* One Git thing you should know: the remote currently shows only `main` and `portfolio-week1`. `portfolio-week1` is actually **3 commits behind main and 0 ahead**. So if your Ubisoft work is actively being built on that branch locally, those newer changes are **not currently on GitHub**. That is probably good for now.

And yes, important: **password protecting a page does not protect its source if the source is committed to a public GitHub repo.** Anyone determined enough can open the repo and read it. When the Ubisoft material is ready, anything genuinely confidential should either stay out of the public repo entirely or live in a private source repo with only the NDA-safe built output going public. A frontend password is access friction, not source protection.

---

## My pitch: do almost nothing visually

I would add exactly **three manifestations of the same CTA**, not three different waitlist designs.

**Nav**

`Join early access`

Not a bordered pill. Not a giant colored button. Just slightly stronger than the other nav items, possibly using your accent. It sits at the far right.

**Homepage**

Near the end, before your Favour/Lineage ending, one line:

> **Want to try HERA before everyone else?**  `Join early access →`

That's it.

No giant WAITLIST section.

No eyebrow.

No heading + subheading + paragraph + three feature bullets.

**Bottom right**

A small persistent:

`Early access ✦`

Clicking it opens the signup surface exactly where a support chat would normally open.

And this is where I think it becomes very HERA.

---

## What opens

Not a modal.

Not a boxed form with 19 borders.

Just a floating surface with enough background contrast to separate it from the page.

At the top:

**Want in?**

Then immediately:

* Email
* Name, optional
* `What would you use HERA for?`, optional
* one small checkbox: **I'm down to test unfinished things**
* **Count me in**

An `i` icon can hold the boring information:

> Early invites and occasional HERA updates. No spam. Leave whenever you want.

That keeps the primary surface almost stupidly simple.

After submit:

> **You're in.**
>
> Go catch Iris.

Then the panel closes itself after a moment.

And **one new little agent walks into the footer.**

That last interaction is the thing I would absolutely keep. You already built the weird little footer world. Use it.

I would not show `21 people waiting` or any fake social proof. The agents themselves become the quiet metaphor for people joining HERA.

For the first version, the new agent can appear as immediate confirmation for that visitor. We do **not** need to solve a globally synchronized “one footer sprite per human on the waitlist” system just to launch this today. That can become real later if we decide the crowd should represent actual signup volume.

---

## One technical decision before your agent codes

Your website is static GitHub Pages. It cannot safely maintain a waitlist database on its own.

So I would **not** let your agent invent some API key in the frontend or store emails in GitHub.

For the quickest respectable v1, I'd use **Formspree behind your custom UI**.

Why:

* your site keeps its exact design;
* Formspree just receives the form;
* emails aren't committed to GitHub;
* you can see/export signups;
* almost no infrastructure;
* later, if HERA gets a real public backend, we swap the submission adapter without redesigning anything.

The footer agent is a frontend success animation, so it doesn't require Formspree to expose the entire waitlist publicly.

There is one thing you would need to do: create the Formspree form and give your agent the resulting form endpoint. That's the only external setup I want you doing for this first pass.

---

## Send your website agent this

**HERA_OS EARLY ACCESS CTA**

Work in the existing `TubeStorm/hera_os` portfolio repository.

Before changing anything, inspect the current repository and rendered site. In particular read:

* `DESIGN.md`
* `src/data/site.ts`
* `src/components/Nav.astro`
* `src/components/Footer.astro`
* `src/layouts/BaseLayout.astro`
* `src/pages/index.astro`
* `src/styles/global.css`

The current site is the visual authority. Do not redesign it into a SaaS landing page.

### Goal

Add a very small early-access funnel to HERA_OS so somebody arriving from a Reddit or LinkedIn post has something useful to do if they want to eventually try HERA.

This should feel like it was always part of this site.

### Before coding

Publish a short waypoint showing:

* exactly where the three entry points will live;
* which existing typography, spacing, motion and color rules you are reusing;
* the exact states of the early-access surface;
* which files you expect to modify or add;
* how submissions will persist;
* how secrets and personal signup data stay out of GitHub.

Do not begin implementation until you have inspected the actual components rather than guessing from this prompt.

### Product contract

There are three ways to reach the same early-access surface.

1. Primary navigation gets `Join early access`.
2. Near the end of the homepage, before the existing Favour/Lineage closing section, add only:
   **Want to try HERA before everyone else?** `Join early access →`
3. Bottom right of the site has a small persistent `Early access ✦` launcher.

All three open the same surface.

### Visual direction

Restraint.

Do not add:

* bordered cards everywhere;
* a giant waitlist section;
* eyebrow labels;
* heading + subheading + descriptive paragraph stacks;
* gradients;
* multiple explanatory blocks;
* fake startup metrics;
* generic SaaS components.

Favour strongly dislikes unnecessary borders. Do not reach for a border simply because something is interactive.

Use the visual language already present in HERA_OS.

The open surface should feel closer to a very elegant help-chat surface than a traditional marketing form.

### Open state

Visible title:

**Want in?**

Fields:

* Email, required
* Name, optional
* `What would you use HERA for?`, optional
* checkbox: `I'm down to test unfinished things`

Submit:

**Count me in**

Add one small info icon for secondary information. It may reveal:

`Early invites and occasional HERA updates. No spam. Leave whenever you want.`

Do not place that explanation permanently underneath the heading.

### Success state

After a successful signup:

**You're in.**

`Go catch Iris.`

Then introduce one additional pixel agent into the existing animated footer walk as the playful success acknowledgement.

Study the existing footer implementation before changing it. Iris and the existing agents must remain intact.

This is a success animation for the newly joined visitor. Do not invent a global public waitlist-count system in this slice.

The closed launcher may then read:

`You're on the list ✓`

Persist that local acknowledgement so refresh does not immediately ask the same person to sign up again. Do not treat browser storage as the authoritative waitlist record. The form backend is authoritative.

### Submission backend

This is a static GitHub Pages site.

Do not:

* commit submitted emails into the repository;
* put a private API token in client-side code;
* create a fake local database;
* expose waitlist records publicly.

Use a tiny submission adapter so the UI does not depend permanently on one form provider.

For this first release, use the Formspree endpoint Favour supplies.

If the Formspree endpoint has not been provided when you begin, complete the interface and adapter cleanly, then stop at the real wiring boundary and tell Favour exactly what value is required. Do not invent an endpoint or mark persistence as working when it is not.

Include normal loading, success, duplicate/retry-safe, invalid-email and failure states without visually inflating the component.

### Git

Do not touch or merge unfinished Ubisoft portfolio work as part of this task.

First report the actual remote/local branch truth you find.

Make this change on the current appropriate website work branch, not by creating another graveyard branch unless the repository's existing workflow explicitly requires one.

Do not publish confidential Ubisoft source material to the public repository.

### Proof

Before closing:

* build the production Astro site;
* verify desktop and narrow viewport;
* test all three entry points;
* test keyboard and Escape behavior;
* test invalid email;
* test real successful submission once the endpoint exists;
* test backend failure;
* verify no submitted email or private credential appears in the repository/build output;
* inspect the final rendered screenshots yourself;
* specifically verify the new surface did not introduce unnecessary borders, duplicated explanatory copy, or a generic SaaS look;
* verify the footer's existing agents still work and the success agent joins correctly.

Close out with what a person can now actually do, what remains fake/unwired if anything, screenshots, commit, and branch state.

---

That is the build I would make.

It is tiny enough to ship quickly, but there is now a **real conversion path** from the permission post you just published:

**“Who the fuck built HERA?” → website → rabbit hole → “wait I actually want this” → Join early access.**

That's exactly what the site was missing.



---

## 1. Make the Formspree account

* Go to [Formspree](https://formspree.io/?utm_source=chatgpt.com)
* Click **Get Started** / create an account.
* Use the email you actually want HERA waitlist notifications going to.
* Verify your email address if Formspree asks you to.
* Log into the dashboard.

Formspree's current docs say new forms are created from the dashboard using the **+** button in the top-left, then **New Form**. ([Formspree Docs][1])

---

## 2. Create HERA's waitlist form

* In the Formspree dashboard, click the **+** in the top-left.
* Choose **New Form**.
* Name it something obvious like:

  * `HERA Early Access`
* If it asks where submissions should be sent, use your preferred email.
* Create/save the form.

Do **not** worry about building the visual form inside Formspree. Your website agent is building the actual HERA UI. We just want Formspree to be the invisible place receiving the submissions.

---

## 3. Find the one thing your agent needs

Open your new **HERA Early Access** form.

Look for **Integration**.

Formspree should show something like:

`Your form's endpoint is:`

followed by an address shaped like:

`https://formspree.io/f/xxxxxxxx`

That is the important thing.

Formspree's current documentation confirms the form endpoint lives in the **Integration** section. ([Formspree Docs][1])

Copy that entire endpoint.

### What you give your agent

Give it:

> Formspree endpoint for the HERA Early Access form:
> `PASTE THE ENDPOINT HERE`

**That endpoint is not the same thing as a secret API key.** It is expected to be used by the public-facing form.

You do **not** need to give the agent your Formspree password or some private account API key.

---

## 4. What HERA should send

Our form has four pieces of information:

* `email` required
* `name` optional
* `use_case` optional, from **What would you use HERA for?**
* `early_tester` true/false, from **I'm down to test unfinished things**
* Where did you hear about it? 

Formspree stores fields according to their `name`, so your agent needs each actual form field to have a meaningful name. ([Formspree][2])

You do not need to configure those four fields manually in Formspree first. Your agent can send them from the website.

---

## 5. Then test it once

After your agent wires the real endpoint:

* Open your HERA website.
* Click **Join early access**.
* Use an email you control.
* Fill in whatever optional fields you want.
* Submit.
* You should see HERA's **You're in. Go catch Iris.** success state.
* Go back to Formspree.
* Open **HERA Early Access**.
* Confirm your submission actually appears there.
* Also check that the notification email arrives.

That last check matters. We do not accept **the website showed success** as proof. The signup has to actually exist in Formspree.

Formspree supports static sites exactly this way, so GitHub Pages is fine. ([Formspree][2])

---

## What NOT to do

* Do not use the old Formspree style where your email address appears directly in the form URL. Formspree has phased that legacy method out. ([Formspree Docs][3])
* Do not create an API key for this unless Formspree specifically requires it for some later advanced feature.
* Do not paste your Formspree password into Claude.
* Do not expose a private Formspree API key in the GitHub Pages JavaScript.
* Do not bother with their CLI or Forms API for this simple waitlist. Their submissions API is a separate authenticated feature and is not necessary for what we're building. ([Formspree Docs][4])

So your job right now is literally:

**Sign up → + → New Form → HERA Early Access → Integration → copy `https://formspree.io/f/...` → give that one endpoint to your website agent.**

That should take about five minutes.

[1]: https://help.formspree.io/articles/building-your-form/building-an-html-form?utm_source=chatgpt.com "Building an HTML Form — Formspree Docs"
[2]: https://formspree.io/html/?utm_source=chatgpt.com "HTML Forms with No Server Code | Formspree"
[3]: https://help.formspree.io/articles/troubleshooting/phasing-out-legacy-forms-email-urls?utm_source=chatgpt.com "Phasing out legacy forms (email URLs) — Formspree Docs"
[4]: https://help.formspree.io/articles/the-forms-api/form-submissions-api?utm_source=chatgpt.com "Form Submissions API — Formspree Docs"

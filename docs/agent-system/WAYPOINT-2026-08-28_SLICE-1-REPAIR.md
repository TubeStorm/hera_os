# ⛳ WAYPOINT — Rebuilding the homepage opening so scrolling controls the whole story

**Date:** 2026-08-28
**Packet:** `docs/agent-system/work-packets/active/SLICE-1-REPAIR-SCROLL-CINEMATIC.md`
**Instruction of record:** `docs/preflights/hera website revamp/Slice 1 fix 1.md`

---

**What I am doing now**

You rejected the homepage opening we built, and you were right to. We built it as a little film that plays itself the moment the page loads. You want the opposite: the visitor's scroll wheel *is* the play head. Scroll and the story moves. Stop and it stops. Scroll back and it rewinds.

So we are not polishing that sequence — we are replacing it. Same idea, completely different machine underneath.

**Why it matters — what you gain**

The rebuilt opening makes the visitor *live through* the problem before anyone names it. They watch a two-word request turn into an essay, watch `.md` files rain down and physically bury the answer the AI is still writing, sit through five increasingly panicked thoughts, and only *then* read "Your AI finished in 3 minutes. You spent the next 20 digging through 18 new `.md` files and begging it to explain itself."

That reversal — experience first, explanation second — is the strongest thing on the page. It also demonstrates something about you rather than claiming it: this is authored interaction design, not a hero banner.

**How you will see it working**

When it is done I will start the site for you and give you a link. You will land on what looks like an ordinary empty AI chat. Then you scroll — slowly — and the whole thing happens at whatever pace you choose. You will be able to stop mid-sentence and confirm nothing moves, scroll backward and watch it un-happen, and keep going past the ending into the demo video section like a normal page.

**One thing I decided for you, and one thing you already decided**

- *You decided:* the final line the visitor is left reading is **"Stop managing your AI. Start giving it work."** Your fix document contradicted itself on this — it corrected the line in one place and kept the old one in two others. You confirmed the corrected version. That is now locked in the packet.
- *I decided:* the opening cinematic is **black regardless of the visitor's light/dark setting**, per your instruction. This also closes the open question from the last review.

**Who is doing what**

| Role | What they are doing |
|---|---|
| Chief Coordinator (me) | Wrote the specification, resolved the copy contradiction, will review and reconcile the returns |
| Builder | Rewriting the opening sequence against the scroll-scrubbed specification |
| Verifier | Independently checking every acceptance point, in source and in a real browser |
| Live tester | Watching the whole thing scroll top-to-bottom like a first-time visitor |

**What could still go wrong**

1. **The `.md` rain is the risky beat.** The last attempt interpreted "files pile up" as eight objects popping into place. The packet now specifies it as literal Matrix rain — 10–14 vertical columns, uneven bottom edge, files travelling downward *over* the answer. If it comes back as tasteful floating cards again, that is a repair cycle.
2. **Browser tooling — now largely solved.** Last session lost an hour to a flaky browser pane and had to report reduced motion as unverified. I checked before starting: a proper automated browser (Playwright/Chromium) *is* installed on this machine and it can genuinely simulate a visitor who has "reduce motion" switched on. So this time we can actually prove that part. I have also given everyone a hard rule: three minutes of fighting a broken browser tool, then switch and move on. Broken tooling is never reported as a fault in your page.

3. **The story has to be provable frame by frame, not by one final screenshot.** Everyone testing this captures the same fourteen checkpoints — empty composer, send, thinking, early response, response continuing, first streams, dense rain, rain peak over the response, first thought, later thought, the summary, Introducing/HERA, first "You lead...", final state — plus a full wheel pass down and a full wheel pass back up.

**What happens next without you**

The builder implements it, the verifier and live tester independently attack it, I run any repair cycle needed, and then I start the server and hand you a link with the exact things to judge. Nothing goes to `main`. I am not starting Iris.

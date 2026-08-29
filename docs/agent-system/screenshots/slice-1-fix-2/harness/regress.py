"""Regression sweep: every route renders, nav inset holds everywhere, the
homepage's later scroll-gate sections still behave, and nothing errors."""
import json, os, sys
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:4399/hera_os/"
OUT = sys.argv[2] if len(sys.argv) > 2 else "regress"
os.makedirs(OUT, exist_ok=True)

ROUTES = ["", "work/hera/", "work/enterprise-tools/", "about/", "work/lineage/", "contact/", "work/"]
out = {}

with sync_playwright() as pw:
    b = pw.chromium.launch()
    for route in ROUTES:
        ctx = b.new_context(viewport={"width": 1440, "height": 900})
        page = ctx.new_page()
        errs = []
        page.on("pageerror", lambda e: errs.append(str(e)))
        page.on("console", lambda m: errs.append("console:" + m.text) if m.type == "error" else None)
        page.goto(BASE + route, wait_until="networkidle")
        page.wait_for_timeout(500)
        nav0 = page.evaluate("() => document.querySelector('header nav').getBoundingClientRect().top")
        page.evaluate("() => window.scrollTo({top: 1200, behavior: 'instant'})")
        page.wait_for_timeout(300)
        nav1 = page.evaluate("() => document.querySelector('header nav').getBoundingClientRect().top")
        info = page.evaluate("""() => ({
          title: document.title,
          navItems: Array.from(document.querySelectorAll('header .nav-links a')).map(a => a.textContent.trim()),
          mainHasContent: document.getElementById('main').textContent.trim().length > 200,
          h1: (document.querySelector('h1') || {}).textContent || null,
          docHeight: document.body.scrollHeight,
          navLinksScrollable: (() => { const n = document.querySelector('.nav-links');
             return { clientW: n.clientWidth, scrollW: n.scrollWidth }; })(),
        })""")
        out[route or "(home)"] = {
            "navTopUnscrolled": round(nav0, 1),
            "navTopScrolled": round(nav1, 1),
            "navInsetStable": abs(nav0 - nav1) < 1,
            **info,
            "errors": errs,
        }
        ctx.close()

    # Homepage below-the-opening behaviour: the video gate button still works,
    # and upward escape from the pinned opening still returns you to the top.
    ctx = b.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    errs = []
    page.on("pageerror", lambda e: errs.append(str(e)))
    page.goto(BASE, wait_until="networkidle")
    page.wait_for_timeout(600)
    track_h = page.evaluate("() => document.getElementById('opening-track').offsetHeight")
    # Land just past the opening, where the video gate lives.
    page.evaluate("(y) => window.scrollTo({top: y, behavior: 'instant'})", track_h + 60)
    page.wait_for_timeout(500)
    gate = page.evaluate("""() => {
      const btn = document.getElementById('video-next');
      if (!btn) return null;
      const r = btn.getBoundingClientRect();
      return { exists: true, visible: r.width > 0 && r.height > 0,
               inViewport: r.top >= 0 && r.bottom <= window.innerHeight,
               classes: btn.className };
    }""")
    before = page.evaluate("() => window.scrollY")
    clicked = False
    if gate and gate.get("inViewport"):
        page.click("#video-next")
        page.wait_for_timeout(900)
        clicked = True
    after = page.evaluate("() => window.scrollY")
    page.screenshot(path=os.path.join(OUT, "video-gate-after-click.png"))

    # Upward escape from the pinned opening.
    page.evaluate("(y) => window.scrollTo({top: y, behavior: 'instant'})", 6000)
    page.wait_for_timeout(300)
    for _ in range(30):
        page.mouse.wheel(0, -220)
    page.wait_for_timeout(500)
    escaped_to = page.evaluate("() => window.scrollY")

    out["_homepageBehaviour"] = {
        "openingTrackPx": track_h,
        "videoGate": gate,
        "gateClicked": clicked,
        "scrollBeforeClick": before,
        "scrollAfterClick": after,
        "gateAdvancedPage": after > before,
        "upwardEscapeFrom6000ReachedY": escaped_to,
        "upwardEscapeWorks": escaped_to < 6000,
        "errors": errs,
    }
    ctx.close()
    b.close()

with open(os.path.join(OUT, "regression.json"), "w") as f:
    json.dump(out, f, indent=2)
print(json.dumps(out, indent=2))

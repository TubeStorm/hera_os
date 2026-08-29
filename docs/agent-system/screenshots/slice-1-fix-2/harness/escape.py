import json, sys
from playwright.sync_api import sync_playwright
BASE = "http://127.0.0.1:4399/hera_os/"
res = {}
with sync_playwright() as pw:
    b = pw.chromium.launch()
    # Fresh context, never clicks the gate: pure upward escape from mid-opening.
    for start in [6000, 12000, 19000]:
        ctx = b.new_context(viewport={"width": 1440, "height": 900})
        page = ctx.new_page()
        page.goto(BASE, wait_until="networkidle")
        page.wait_for_timeout(600)
        page.evaluate("(y) => window.scrollTo({top: y, behavior: 'instant'})", start)
        page.wait_for_timeout(400)
        y0 = page.evaluate("() => window.scrollY")
        for _ in range(30):
            page.mouse.wheel(0, -220)
            page.wait_for_timeout(12)
        page.wait_for_timeout(500)
        y1 = page.evaluate("() => window.scrollY")
        res["upFrom%d" % start] = {"landed": y0, "afterWheelUp": y1, "movedUp": y1 < y0}
        ctx.close()
    # Contact page content
    ctx = b.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    page.goto(BASE + "contact/", wait_until="networkidle")
    page.wait_for_timeout(400)
    res["contact"] = page.evaluate("""() => ({
        mainText: document.getElementById('main').innerText.replace(/\s+/g,' ').trim().slice(0,300),
        links: Array.from(document.querySelectorAll('#main a')).map(a => a.textContent.trim()).slice(0,10),
    })""")
    ctx.close()
    b.close()
print(json.dumps(res, indent=2))

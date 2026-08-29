"""Slice 1 Fix 2 — evidence capture + measured acceptance probes.

Usage: python capture.py <outDir> <baseUrl>
"""
import json
import os
import sys
from playwright.sync_api import sync_playwright

OUT = sys.argv[1]
URL = sys.argv[2] if len(sys.argv) > 2 else "http://localhost:4322/hera_os/"
os.makedirs(OUT, exist_ok=True)

VIEWPORTS = [
    ("desktop-1440x900", 1440, 900, True),
    ("laptop-1366x768", 1366, 768, False),
    ("mobile-390x844", 390, 844, False),
    ("mobile-375x812", 375, 812, False),
]

SHOTS = [
    ("01-arrival", "arrival", 0.0),
    ("02-response-early", "response", 0.18),
    ("03-response-before-curtain", None, None),
    ("04-curtain-onset", None, None),
    ("05-curtain-full", "curtain", 0.97),
    ("06-panic-card1", "card1", 0.6),
    ("07-panic-card4", "card4", 0.6),
    ("08-panic-card8-full-stack", "card8", 0.6),
    ("09-pain-a", "painA", 0.5),
    ("10-pain-b", "painB", 0.5),
    ("11-introducing-only", "introducing", 0.5),
    ("12-introducing-brand", "brand", 0.6),
    ("13-promise-1", "promise1", 0.5),
    ("14-promise-3", "promise3", 0.5),
    ("15-promise-5", "promise5", 0.5),
    ("16-final-line", "final", 0.5),
]

MOBILE_SUBSET = {"01-arrival", "05-curtain-full", "08-panic-card8-full-stack", "16-final-line"}

report = {"viewports": {}, "probes": {}}

GEOM_JS = """() => {
  const t = document.getElementById('opening-track');
  return {
    trackTop: Math.round(t.getBoundingClientRect().top + window.scrollY),
    trackHeight: t.offsetHeight,
    vh: window.innerHeight,
    marks: window.__openingMarks.marks,
    rainStart: window.__openingMarks.rainStart,
  };
}"""

ARRIVAL_JS = """() => {
  const cue = document.getElementById('opening-scroll-cue');
  const st = document.getElementById('opening-stage');
  const bub = document.querySelector('.user-bubble');
  const think = document.getElementById('thinking-row');
  const r = cue.getBoundingClientRect();
  const s = st.getBoundingClientRect();
  return {
    cueBottom: Math.round(r.bottom),
    cueFullyInViewport: r.bottom <= window.innerHeight && r.top >= 0,
    cueOpacity: getComputedStyle(cue).opacity,
    stageTop: Math.round(s.top),
    stageBottom: Math.round(s.bottom),
    stageFillsViewport: Math.abs(s.top) < 2 && Math.abs(s.bottom - window.innerHeight) < 2,
    bubbleVisible: bub.getBoundingClientRect().height > 0,
    bubbleFontPx: getComputedStyle(bub).fontSize,
    thinkingOpacity: getComputedStyle(think).opacity,
    cueText: cue.textContent.replace(/\\s+/g, ' ').trim(),
    greyCardCount: document.querySelectorAll('.chat-window, .composer, .composer-send, .fake-cursor, .composer-input').length,
  };
}"""

CURTAIN_JS = """() => {
  const cols = Array.from(document.querySelectorAll('.rain-col')).filter(c => c.getBoundingClientRect().width > 0);
  const vh = window.innerHeight, vw = window.innerWidth;
  const spans = cols.map(c => {
    const inner = c.querySelector('.rain-col-inner').getBoundingClientRect();
    const box = c.getBoundingClientRect();
    return { left: Math.round(box.left), right: Math.round(box.right),
             top: Math.round(inner.top), bottom: Math.round(inner.bottom),
             depthPct: +((inner.bottom / vh) * 100).toFixed(1) };
  });
  const probe = (y) => {
    let cursor = 0, maxGap = 0;
    const sorted = [...spans].sort((a,b) => a.left - b.left);
    for (const s of sorted) {
      if (s.top > y || s.bottom < y) continue;
      if (s.left > cursor) maxGap = Math.max(maxGap, s.left - cursor);
      cursor = Math.max(cursor, s.right);
    }
    if (vw > cursor) maxGap = Math.max(maxGap, vw - cursor);
    return { coveredToPx: cursor, maxGapPx: maxGap };
  };
  const depths = spans.map(s => s.depthPct);
  return {
    columns: spans.length,
    viewportWidth: vw,
    topBandY20: probe(20),
    topBandY80: probe(80),
    bandY160: probe(160),
    minDepthPct: Math.min(...depths),
    maxDepthPct: Math.max(...depths),
    meanDepthPct: +(depths.reduce((a,b)=>a+b,0)/depths.length).toFixed(1),
    jaggedRangePct: +(Math.max(...depths)-Math.min(...depths)).toFixed(1),
    distinctBottomEdges: new Set(depths).size,
    rainLayerOpacity: getComputedStyle(document.getElementById('rain-layer')).opacity,
    anyTruncatedFilename: Array.from(document.querySelectorAll('.rain-file span')).some(s => s.scrollWidth > s.clientWidth + 1),
  };
}"""

STACK_JS = """() => {
  const cards = Array.from(document.querySelectorAll('.panic-card'));
  const vis = cards.map(c => +getComputedStyle(c).opacity);
  const rects = cards.map(c => c.getBoundingClientRect());
  const front = rects[rects.length - 1];
  return {
    total: cards.length,
    visibleCount: vis.filter(v => v > 0.05).length,
    opacities: vis.map(v => +v.toFixed(2)),
    frontWidthPx: Math.round(front.width),
    frontWidthPctOfViewport: +((front.width / window.innerWidth) * 100).toFixed(1),
    anyClippedLeft: rects.some(r => r.left < 0),
    anyClippedTop: rects.some(r => r.top < 0),
    anyClippedBottom: rects.some(r => r.bottom > window.innerHeight),
    anyOverflowingText: cards.some(c => c.scrollHeight > c.clientHeight + 1),
    fontSize: getComputedStyle(cards[0]).fontSize,
    distinctOffsets: new Set(rects.map(r => Math.round(r.top))).size,
  };
}"""

SCALE_JS = """() => {
  const px = (sel) => { const el = document.querySelector(sel); return el ? getComputedStyle(el).fontSize : null; };
  return {
    panicCard: px('.panic-card'),
    painLine: px('#pain-layer .statement'),
    promise: px('#hera-slot .statement'),
    finalLine: px('#hera-slot .statement.is-final'),
    urgentCard: px('.panic-card.is-urgent'),
  };
}"""

SLOT_JS = """() => {
  const kids = Array.from(document.querySelectorAll('#hera-slot > *')).map(k => {
    const r = k.getBoundingClientRect();
    return { centerY: Math.round(r.top + r.height/2), centerX: Math.round(r.left + r.width/2) };
  });
  const pain = Array.from(document.querySelectorAll('#pain-layer .statement-slot > *')).map(k => {
    const r = k.getBoundingClientRect();
    return { centerY: Math.round(r.top + r.height/2) };
  });
  const brand = document.getElementById('hera-brand').getBoundingClientRect();
  const logo = document.querySelector('.hera-logo').getBoundingClientRect();
  const word = document.querySelector('.hera-word').getBoundingClientRect();
  return {
    heraSlotCenters: kids,
    painSlotCenters: pain,
    brandRowHorizontal: logo.right <= word.left + 2 && Math.abs((logo.top+logo.height/2) - (word.top+word.height/2)) < brand.height/2,
    logoLeftOfWord: logo.left < word.left,
    logoCenterY: Math.round(logo.top + logo.height/2),
    wordCenterY: Math.round(word.top + word.height/2),
  };
}"""

with sync_playwright() as pw:
    browser = pw.chromium.launch()

    for name, w, h, full in VIEWPORTS:
        ctx = browser.new_context(viewport={"width": w, "height": h})
        page = ctx.new_page()
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        page.on("console", lambda m: errors.append("console: " + m.text) if m.type == "error" else None)
        page.goto(URL, wait_until="networkidle")
        page.wait_for_timeout(700)

        d = os.path.join(OUT, name)
        os.makedirs(d, exist_ok=True)

        geom = page.evaluate(GEOM_JS)
        scrollable = geom["trackHeight"] - geom["vh"]
        to_y = lambda p: round(geom["trackTop"] + p * scrollable)

        for shot_name, key, frac in SHOTS:
            if not full and shot_name not in MOBILE_SUBSET:
                continue
            if shot_name == "03-response-before-curtain":
                p = geom["rainStart"] - 0.004
            elif shot_name == "04-curtain-onset":
                p = geom["rainStart"] + 0.008
            else:
                m = geom["marks"][key]
                p = m[1] + (m[2] - m[1]) * frac
            page.evaluate("(y) => window.scrollTo({top: y, behavior: 'instant'})", to_y(p))
            page.wait_for_timeout(280)
            page.screenshot(path=os.path.join(d, shot_name + ".png"))

        # Nav inset probe
        page.evaluate("() => window.scrollTo({top: 0, behavior: 'instant'})")
        page.wait_for_timeout(250)
        nav_top_0 = page.evaluate("() => document.querySelector('header nav').getBoundingClientRect().top")
        page.screenshot(path=os.path.join(d, "nav-01-top.png"),
                        clip={"x": 0, "y": 0, "width": w, "height": 120})
        arrival = page.evaluate(ARRIVAL_JS)
        page.evaluate("() => window.scrollTo({top: 2500, behavior: 'instant'})")
        page.wait_for_timeout(280)
        nav_top_scrolled = page.evaluate("() => document.querySelector('header nav').getBoundingClientRect().top")
        page.screenshot(path=os.path.join(d, "nav-02-scrolled.png"),
                        clip={"x": 0, "y": 0, "width": w, "height": 120})
        nav_labels = page.evaluate(
            "() => Array.from(document.querySelectorAll('header .nav-links a')).map(a => a.textContent.trim())")

        # Curtain probe just before the narrative exit
        page.evaluate("(y) => window.scrollTo({top: y, behavior: 'instant'})", to_y(geom["marks"]["curtain"][2] * 0.995))
        page.wait_for_timeout(360)
        curtain = page.evaluate(CURTAIN_JS)

        # Full pile probe
        m8 = geom["marks"]["card8"]
        page.evaluate("(y) => window.scrollTo({top: y, behavior: 'instant'})", to_y(m8[1] + (m8[2] - m8[1]) * 0.6))
        page.wait_for_timeout(320)
        stack = page.evaluate(STACK_JS)
        scale = page.evaluate(SCALE_JS)

        # Slot anchoring measured while the HERA block is on screen
        mf = geom["marks"]["final"]
        page.evaluate("(y) => window.scrollTo({top: y, behavior: 'instant'})", to_y(mf[1] + (mf[2] - mf[1]) * 0.5))
        page.wait_for_timeout(300)
        slots = page.evaluate(SLOT_JS)


        # Anchored-slot probe: the centre of the VISIBLE member at each beat.
        anchored = {"hera": [], "pain": []}
        VIS_JS = """(sel) => {
          const layer = document.getElementById(sel.layer);
          const lo = +getComputedStyle(layer).opacity;
          const kids = Array.from(document.querySelectorAll(sel.q));
          let best = null, bo = 0;
          kids.forEach((k, i) => {
            const o = +getComputedStyle(k).opacity * lo;
            if (o > bo) { bo = o; best = { i, o: +o.toFixed(2), r: k.getBoundingClientRect() }; }
          });
          if (!best) return null;
          return { index: best.i, opacity: best.o,
                   centerY: Math.round(best.r.top + best.r.height / 2),
                   centerX: Math.round(best.r.left + best.r.width / 2) };
        }"""
        for bk in ["promise1", "promise2", "promise3", "promise4", "promise5", "final"]:
            mm = geom["marks"][bk]
            page.evaluate("(y) => window.scrollTo({top: y, behavior: 'instant'})",
                          to_y(mm[1] + (mm[2] - mm[1]) * 0.5))
            page.wait_for_timeout(220)
            anchored["hera"].append(dict(beat=bk, **(page.evaluate(VIS_JS, {"layer": "hera-layer", "q": "#hera-slot > *"}) or {})))
        for bk in ["painA", "painB"]:
            mm = geom["marks"][bk]
            page.evaluate("(y) => window.scrollTo({top: y, behavior: 'instant'})",
                          to_y(mm[1] + (mm[2] - mm[1]) * 0.5))
            page.wait_for_timeout(220)
            anchored["pain"].append(dict(beat=bk, **(page.evaluate(VIS_JS, {"layer": "pain-layer", "q": "#pain-layer .statement-slot > *"}) or {})))

        holds = {}
        for k, m in geom["marks"].items():
            holds[k] = {
                "holdPx": round((m[2] - m[1]) * scrollable),
                "holdVh": round(((m[2] - m[1]) * scrollable) / geom["vh"], 2),
            }

        report["viewports"][name] = {
            "geom": {"trackHeightPx": geom["trackHeight"], "vh": geom["vh"],
                     "scrollablePx": scrollable, "rainStartP": round(geom["rainStart"], 4)},
            "navTopUnscrolled": round(nav_top_0, 1),
            "navTopScrolled": round(nav_top_scrolled, 1),
            "navInsetStable": abs(nav_top_0 - nav_top_scrolled) < 1,
            "navLabels": nav_labels,
            "arrival": arrival,
            "curtain": curtain,
            "stack": stack,
            "scale": scale,
            "slots": slots,
            "anchoredSlots": anchored,
            "holds": holds,
            "pageErrors": errors,
        }
        ctx.close()

    # ----- Ordinary mouse-wheel traversal (mandatory §13B) -----
    ctx = browser.new_context(viewport={"width": 1440, "height": 900})
    page = ctx.new_page()
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(700)

    SAMPLE_JS = """() => {
      const read = (el) => (el ? +getComputedStyle(el).opacity : 0);
      const out = {};
      const pl = read(document.getElementById('panic-layer'));
      document.querySelectorAll('.panic-card').forEach((c, i) => {
        out['card' + (i + 1)] = +(read(c) * pl).toFixed(2);
      });
      const painL = read(document.getElementById('pain-layer'));
      const pains = document.querySelectorAll('#pain-layer .statement-slot > *');
      out.painA = +(read(pains[0]) * painL).toFixed(2);
      out.painB = +(read(pains[1]) * painL).toFixed(2);
      const hl = read(document.getElementById('hera-layer'));
      document.querySelectorAll('#hera-slot > *').forEach((k, i) => {
        out[i < 5 ? 'promise' + (i + 1) : 'final'] = +(read(k) * hl).toFixed(2);
      });
      out.eyebrow = +(read(document.getElementById('hera-eyebrow')) * hl).toFixed(2);
      out.brand = +(read(document.getElementById('hera-brand')) * hl).toFixed(2);
      out.cue = +read(document.getElementById('opening-scroll-cue')).toFixed(2);
      out.y = window.scrollY;
      return out;
    }"""

    TRACKED = (["card%d" % i for i in range(1, 9)] + ["painA", "painB", "eyebrow", "brand"] +
               ["promise%d" % i for i in range(1, 6)] + ["final"])


    def traverse(notch, per_gesture, tag):
        # Fresh context per cadence: reusing a page that already travelled past
        # the opening leaves it inside the homepage's later scroll-gate
        # sections, which own the scroll position and corrupt the measurement.
        tctx = browser.new_context(viewport={"width": 1440, "height": 900})
        page = tctx.new_page()
        page.goto(URL, wait_until="networkidle")
        page.wait_for_timeout(700)
        seen = {}
        peak = {}
        log = []
        s = page.evaluate(SAMPLE_JS)
        log.append(dict(gesture=0, **s))
        for k, v in s.items():
            if k != "y":
                peak[k] = max(peak.get(k, 0), v)
                if v >= 0.85:
                    seen[k] = seen.get(k, 0) + 1
        gestures = 0
        while gestures < 260:
            for _ in range(per_gesture):
                page.mouse.wheel(0, notch)
            page.wait_for_timeout(70)
            gestures += 1
            s = page.evaluate(SAMPLE_JS)
            log.append(dict(gesture=gestures, **s))
            for k, v in s.items():
                if k != "y":
                    peak[k] = max(peak.get(k, 0), v)
                    if v >= 0.85:
                        seen[k] = seen.get(k, 0) + 1
            if s["final"] >= 0.99 and seen.get("final", 0) > 4:
                break
            if len(log) > 3 and s["y"] == log[-2]["y"] and s["y"] > 0:
                break
        with open(os.path.join(OUT, "wheel-traversal-%s.json" % tag), "w") as f:
            json.dump(log, f, indent=2)
        tctx.close()
        return {
            "cadence": "%d notches x %dpx = %dpx per gesture" % (per_gesture, notch, notch * per_gesture),
            "gesturesToReachFinal": gestures,
            "gesturesFullyReadable": {k: seen.get(k, 0) for k in TRACKED},
            "everMissed": [k for k in TRACKED if not seen.get(k)],
            "peakOpacityObserved": {k: peak.get(k, 0) for k in TRACKED},
            "minPeakOpacity": min(peak.get(k, 0) for k in TRACKED),
            "minGesturesAnyBeat": min(seen.get(k, 0) for k in TRACKED),
        }

    report["probes"]["wheelOrdinary"] = traverse(120, 3, "ordinary")
    report["probes"]["wheelFast"] = traverse(120, 6, "fast")

    # ----- Reduced motion -----
    ctx = browser.new_context(viewport={"width": 1440, "height": 900}, reduced_motion="reduce")
    page = ctx.new_page()
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(600)
    geom = page.evaluate(GEOM_JS)
    scrollable = geom["trackHeight"] - geom["vh"]
    d = os.path.join(OUT, "reduced-motion")
    os.makedirs(d, exist_ok=True)
    ORDER = [("arrival", 0.5), ("response", 0.9), ("curtain", 0.95), ("card1", 0.6),
             ("card8", 0.6), ("painA", 0.5), ("painB", 0.5), ("introducing", 0.5),
             ("brand", 0.6), ("promise1", 0.5), ("promise3", 0.5), ("promise5", 0.5),
             ("final", 0.5)]
    RM_JS = """() => {
      const texts = [];
      const push = (el, layerEl) => {
        if (!el) return;
        const lo = layerEl ? +getComputedStyle(layerEl).opacity : 1;
        const o = +getComputedStyle(el).opacity * lo;
        if (o >= 0.5) texts.push(el.textContent.replace(/\\s+/g, ' ').trim().slice(0, 58));
      };
      const chat = document.getElementById('chat-layer');
      push(document.querySelector('.user-bubble'), chat);
      push(document.getElementById('thinking-row'), chat);
      document.querySelectorAll('.panic-card').forEach(c => push(c, document.getElementById('panic-layer')));
      document.querySelectorAll('#pain-layer .statement-slot > *').forEach(c => push(c, document.getElementById('pain-layer')));
      push(document.getElementById('hera-eyebrow'), document.getElementById('hera-layer'));
      push(document.getElementById('hera-brand'), document.getElementById('hera-layer'));
      document.querySelectorAll('#hera-slot > *').forEach(c => push(c, document.getElementById('hera-layer')));
      return {
        revealedWords: document.querySelectorAll('#answer-row .rw.is-shown').length,
        rainOpacity: getComputedStyle(document.getElementById('rain-layer')).opacity,
        visible: texts,
      };
    }"""
    states = []
    for k, f in ORDER:
        m = geom["marks"][k]
        p = m[1] + (m[2] - m[1]) * f
        page.evaluate("(y) => window.scrollTo({top: y, behavior: 'instant'})", round(geom["trackTop"] + p * scrollable))
        page.wait_for_timeout(240)
        states.append(dict(beat=k, **page.evaluate(RM_JS)))
        page.screenshot(path=os.path.join(d, "rm-" + k + ".png"))
    report["probes"]["reducedMotion"] = states
    ctx.close()

    browser.close()

with open(os.path.join(OUT, "report.json"), "w") as f:
    json.dump(report, f, indent=2)
print(json.dumps(report, indent=2))

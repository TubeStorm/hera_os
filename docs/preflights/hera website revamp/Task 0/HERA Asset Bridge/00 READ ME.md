# 00 — READ ME · HERA → Portfolio Asset Bridge

## Version stamp

| | |
|---|---|
| Inspected | **2026-08-28** |
| HERA repo | `D:\Documents\HERA` |
| Branch | `hera-v2-ui` |
| Commit | **`c1c61168e0000dacfc1d9a367988b4b37e9956b2`** (`c1c6116`) |
| Working tree | dirty — an unrelated runtime slice was in progress. **No inspected file was among the modified ones**; the sprite, appearance, void and logo paths were all clean at this commit. |
| Builder inspected | Void Asset Browser / Room Builder — `scripts/serve_void_asset_browser.py`, default port 8788, spawned by `hera_desktop.py:_start_void_asset_browser()` |
| Renderer inspected | `ui/src/components/PhaserVoid.tsx`, Phaser 3.87 (`ui/package.json`) |
| Iris profile source | `%APPDATA%/HERA/db/character_lab_state.json`, `profiles.iris`, saved `2026-07-19T14:32:05Z` — **machine-local, not in the repo** |
| Nothing in HERA was modified | this was read-only research plus file copies out |

**This bridge goes stale when:** `services/character_lab_assets.py`,
`services/character_catalog.py`, `services/agent_appearance.py`,
`ui/src/components/PhaserVoid.tsx`, `ui/src/HeraLogo.tsx`, or
`ui/src/assets/hera-logo.*` change. Re-run against a newer commit if so.

## Why this exists

So no future portfolio agent has to read or reverse-engineer the HERA codebase again.
Everything the portfolio needs from HERA is either written down here or exported into
`exports/`. If something is missing, that is a gap in this bridge — say so rather than
going back into HERA to re-derive it.

## Read in this order

| File | Answers |
|---|---|
| **`05 PORTFOLIO SHOPPING LIST.md`** | **Start here.** One table: do I have what I need, yes or no. |
| `01 HERA LOGO.md` | Which logo file, what colours, what it means, is it safe |
| `02 IRIS SPRITE CONTRACT.md` | The real Iris, the frame maths, which animations actually work |
| `03 CHARACTER GENERATOR CONTRACT.md` | `alias → seed → sprite`, with no email |
| `04 VOID AND ROOM VISUAL CONTRACT.md` | What 8788 really is, and why black is the correct background |
| `exports/` | The actual files |

## The five things worth knowing before you read anything

1. **The logo is a raster, and that is fine.** 1254² WEBP with true alpha, gold on
   transparent, built for dark backgrounds. There is no SVG master — a brief for one
   exists and was never executed. Ignore `hera_pro_v4_1.svg` in the repo root; it is a
   dead teal design that is not the HERA logo.

2. **Two Iris animations are genuinely ready: idle and walk**, each in four directions.
   That is 8 clips, which is more than a homepage section needs. Phone, read-book and
   turnaround have frame data but **no renderer plays them** — do not assume the
   animation map means an animation works.

3. **The live Void renders characters on solid black and loads no room art at all.**
   Its room-layout pipeline exists in the backend but is currently wired to nothing —
   `getVoidLayout()` has zero call sites. So black behind Iris is not a shortcut; it is
   what HERA itself does.

4. **Iris's appearance lives in `%APPDATA%`, not in the repo.** Snapshot the exported
   PNG. Do not re-derive her at build time and do not expect another machine's HERA to
   agree about what Iris looks like.

5. **There is one open legal question and it is Favour's, not an agent's** — whether
   sprite PNGs derived from the licensed LimeZu pack may be published. The Iris export
   is a small derived composite and is defensible; the 20-character roster is verbatim
   pack files and was deliberately not exported. `05` has the verbatim licence text.
   Either way the public page must credit `limezu.itch.io`.

## Exports

```
exports/
  logo/     hera-logo-1254.webp   ← use this
            hera-logo-1254.png
            hera-favicon-256.png
  iris/     iris-sheet-trimmed.png     1152×288, 10.7 KB, rows 0–2 × cols 0–23
            iris-portrait-48x96.png    single frame
  preview/  iris-preview.html          self-contained proof, opens from anywhere
            iris-sheet-trimmed.png
```

Everything in `exports/` is public-safe on the secrets axis: no credentials, no database
content, no HERA prompts, no machine paths. The only open question is the asset licence
above.

`exports/preview/iris-preview.html` has the sprite sheet inlined as a data URI, so it
renders from any location with no server and no dependencies. Open it in a browser to
see walk-down and idle actually running.

## Scope discipline

This bridge deliberately **did not**: map phone/read_book/turnaround animations, build a
room, export a room background, export the 20-character roster, touch `hera_os`, or
change one line of HERA. Each of those is a separate decision with a named owner in `05`.

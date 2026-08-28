# 04 — Void and Room Visual Contract

## What 127.0.0.1:8788 actually is

Verified from code, not from the URL.

- **Entrypoint:** `scripts/serve_void_asset_browser.py` — a plain stdlib
  `ThreadingHTTPServer`, **not** the FastAPI app. The whole single-page tool
  (rooms list, layout editor, Character Lab) is one embedded `INDEX_HTML` string
  inside that file. Default port `8788`.
- **How it starts:** spawned as a subprocess by the desktop launcher,
  `hera_desktop.py:_start_void_asset_browser()` → `python scripts/serve_void_asset_browser.py --host 127.0.0.1 --port 8788`.
  Also listed in `hera-ports.json` and linked as a Hub card in `ui/hera_dev_tools.html`.
- **What it is called:** "Void Room Builder Layout Editor" / "Void Asset Browser".
  It is a **developer tool**, separate from the shipped product on port 8765.

Practical consequence for the portfolio: 8788 is not a service you can call. It is a
local desktop dev tool. Nothing about it can be depended on from a website.

## The load-bearing surprise

**The live Void does not render rooms.** It renders characters on solid black.

`ui/src/components/PhaserVoid.tsx` is the real renderer (Phaser 3.87 is genuinely
imported, not a dead dependency; mounted by `ui/src/new-hera/void/VoidSurface.tsx`
and `ui/src/components/RoomMiniMap.tsx`). Its `preload()` loads **only character
spritesheets** — no floor, wall, or furniture texture is ever loaded. `create()`
sets the background to `#000000` and spawns actors.

The room builder's layout pipeline exists as a backend contract that nothing on
screen currently consumes:

- `ui/public/pixel-agents/default-layout-1.json` is referenced by no code — an orphan sample.
- `getVoidLayout()` (`ui/src/api.ts:1942`), wrapping `GET /api/void/layout`, has **zero call sites**.
- The starter area PhaserVoid actually uses is a hardcoded constant,
  `VOID_STARTER_AREA` in `routers/characters.py:263`.

**So "black is an acceptable Iris background" is not a compromise. It is what HERA
itself does.** The portfolio rendering Iris on black is more faithful than a room would be.

## Source implementation

| Layer | Files |
|---|---|
| Renderer (live) | `ui/src/components/PhaserVoid.tsx` |
| Mount points | `ui/src/new-hera/void/VoidSurface.tsx`, `ui/src/components/RoomMiniMap.tsx` |
| Layout contract | `services/void_layout.py` (`published_layout()`, `publish_builder_room()`) |
| Sessions / intelligence | `services/void_sessions.py`, `services/void_intelligence.py` |
| REST | `routers/hera_void.py`; `routers/characters.py` (`GET /api/void/layout`, `GET /api/void/roster`) |
| Dev builder | `scripts/serve_void_asset_browser.py` |

## Assets

**Loaded by the live Void:** character sheets only, via `/api/void/roster` → `sheet_path`,
served from `ui/public/pixel-agents/appearances/sheets/*.png` and
`ui/public/pixel-agents/generated/**`.

**Room-builder-only inventory (8788, not rendered in-product):**
`ui/public/pixel-agents/floors/floor_0..8.png`, `walls/wall_0.png`,
`furniture/<TYPE>/` across 24 furniture-type folders.

**Licence — read `05` before shipping any of these.** All of it derives from the
LimeZu *Modern Interiors* pack under `asset_sources/void/Assets/`, whose `LICENSE.txt`
forbids redistributing the asset and requires credit.

## What the room builder produces

A JSON layout saved to `data/rooms/*.json`. Real shape:

```json
{ "version": 1, "cols": 21, "rows": 22, "layoutRevision": 1,
  "tiles":       [ /* cols*rows flat ints, 255 = empty */ ],
  "tileColors":  [ /* parallel, per-cell HSB adjust or null */ ],
  "furniture":   [ {"uid":"f-…","type":"TABLE_FRONT","col":4,"row":16} ] }
```

Publishing via `publish_builder_room()` bakes **individual per-object PNGs** into
`%APPDATA%/HERA/db/void_layouts/assets/` plus a pointer file, read back by `GET /api/void/layout`.

## Can a room be exported as a static background today?

**No.** No endpoint, script, or canvas path produces one composited room PNG.
Baking produces per-object PNGs, never a flattened image.

To add it later, either:
- **(a) server-side** — walk a published layout's `tiles`/`furniture`, paint the baked
  PNGs at `col*48, row*48` with Pillow, flatten to one PNG; or
- **(b) client-side** — `game.renderer.snapshot()` against a scene that actually draws
  the tile grid. That scene does not exist yet (see the surprise above).

Either is a real HERA-side task, not a portfolio task.

## Minimum to render Iris against black, outside HERA

One PNG, a handful of numbers, no backend, no DB, no Phaser.

```js
// sheet geometry
const FRAME_W = 48, FRAME_H = 96;
// a frame reference is (row, frameIndexWithinRow)
// sx = frameIndex * 48 ; sy = row * 96
ctx.drawImage(sheet, sx, sy, 48, 96, dx, dy, 48 * scale, 96 * scale);
```

Set `image-rendering: pixelated`. Nothing else is required.
`exports/preview/iris-preview.html` proves this with plain CSS and no canvas at all.

## Additionally required for an authentic HERA room (later, if ever)

1. A composited room background — does not exist; see the export section above.
2. Depth ordering equivalent to `sprite.setDepth(y)` (`PhaserVoid.tsx:190`), so the
   character sorts in front of and behind furniture by y-position.
3. Walkable/collider data (`LAYER_COLLIDER`, `services/void_layout.py:58`) — only if
   the character moves rather than being placed.
4. Visible "Credits: limezu.itch.io" attribution on the public page.

## Not established

- Whether `data/rooms/` currently holds any saved room besides the orphan sample.
- Whether the derived sheets under `ui/public/pixel-agents/` carry a distinct licence
  or inherit the pack's. No separate licence file sits alongside them; inheritance is
  an inference. See `05`.

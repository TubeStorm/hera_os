# 05 — Portfolio Shopping List

Statuses: `READY NOW` · `NEEDS HERA WORK` · `NOT NEEDED YET`

| Item | Status | Exact source | Export | Portfolio use |
|---|---|---|---|---|
| HERA logo | `READY NOW` | `ui/src/assets/hera-logo.webp` (1254², RGBA, true alpha) | `exports/logo/hera-logo-1254.webp` · `.png` · `hera-favicon-256.png` | Header, hero, favicon. Gold-on-transparent, built for dark. HERA's own artwork — no attribution owed. Details in `01`. |
| Logo motion | `READY NOW` | `ui/src/HeraLogo.tsx` keyframes | copied into `01` | `pulse` 2.4s or `spin` 18s, verbatim CSS. Note the glow is violet, not gold. |
| Iris appearance | `READY NOW` | `ui/public/pixel-agents/generated/adult/afaf7665e238ae25.png` (= `533d10865bd398e3.png`, byte-identical) | `exports/iris/iris-sheet-trimmed.png` (1152×288, 10.7 KB) | The real Iris, pre-composited, one texture. **Snapshot it — her look lives in `%APPDATA%`, not the repo.** See `02`. |
| Iris walk-down | `READY NOW` | `DEFAULT_ANIMATION_MAP`, `services/character_lab_assets.py:66`; played at `ui/src/components/PhaserVoid.tsx:156` | in trimmed sheet · proven in `exports/preview/iris-preview.html` | Row 2, frames 18–23, 8 fps, loop (750 ms). `front` = toward viewer, confirmed from `dirFromVelocity()`. |
| Iris idle | `READY NOW` | same | in trimmed sheet · proven in preview | Row 1, frames 18–23, 6 fps, loop (1000 ms). |
| Iris walk/idle — other 3 directions | `READY NOW` | same | in trimmed sheet | right 0–5, back 6–11, left 12–17 on both rows. 8 usable clips total. Side/back frames read as a diagonal cut — that is the pack's art style, present in HERA's untouched sheets too. |
| Iris turnaround | `NOT NEEDED YET` | row 0, frames 0–3, 4 fps | in trimmed sheet | Data is valid and exported, but **HERA itself never animates it** — used only as a static builder thumbnail. Usable if wanted; nothing to build. |
| Iris phone / read_book | `NEEDS HERA WORK` | rows 6 & 7, mapped in `character_lab_assets.py` | not exported | Full 4-direction maps exist; **zero renderer plays them**. Separate HERA task if the homepage ever needs them. Do not map now. |
| Iris sleep/sit/pickup/throw/combat | `NEEDS HERA WORK` | `DEFERRED_ANIMATIONS`, `character_lab_assets.py:111` | not exported | Documented placeholders, not mappings. No frame data wired at all. |
| Sprite rendering contract | `READY NOW` | `services/character_lab_assets.py:38`; `ui/src/components/character/CharacterBuilder.tsx:59` | written into `02` | 48×96 frames; `sx = frame*48`, `sy = row*96`; `image-rendering: pixelated`; integer scale only. Verified pixel-for-pixel against HERA's own stored preview. |
| Deterministic character seed | `READY NOW` | `services/agent_appearance.py:125` (Python) and `ui/src/components/PhaserVoid.tsx:60` (JS) — identical FNV-1a | JS reproduced in `03` | `alias → fnv1a → % 20 → appearance_id`. **No email required.** Copy the hash verbatim or HERA and the portfolio will disagree. |
| HERA random character assets (20 roster) | `NEEDS HERA WORK` — legal decision, not engineering | `ui/public/pixel-agents/appearances/manifest.json` + `sheets/agent_pixel_001..020.png` | **deliberately not exported** | Fully animated, static, build-time — technically ready today. But they are *verbatim copies* of licensed pack files. Favour's call, see licence box below. |
| Larger crowd (>20 people) | `NOT NEEDED YET` | `services/character_catalog.py` Character Lab | — | Arbitrary combinations exist but need server-side Python + Pillow. Fix is a HERA task to pre-bake N into a bigger manifest, never a portfolio-side hack. |
| Kids character family | `NOT NEEDED YET` | `scripts/build_kid_appearances.py` | — | Emits **one idle frame**, no walk cycle. Static avatars only. |
| Void assets | `NOT NEEDED YET` | `ui/public/pixel-agents/{floors,walls,furniture}/` | — | **The live Void loads none of them.** `PhaserVoid.tsx` preloads character sheets only and paints `#000000`. See `04`. |
| Black Iris background | `READY NOW` | `ui/src/components/PhaserVoid.tsx` `create()` — `#000000` | — | Not a compromise. Black is literally what HERA renders. |
| Room background / export method | `NEEDS HERA WORK` | `services/void_layout.py`; builder at `scripts/serve_void_asset_browser.py` (port 8788) | — | **No composited-room PNG export exists.** Baking produces per-object PNGs only. Also: the layout pipeline is currently disconnected — `getVoidLayout()` has zero call sites, and `default-layout-1.json` is an orphan. See `04`. |
| Room builder as a live service | `NOT NEEDED YET` | `scripts/serve_void_asset_browser.py`, spawned by `hera_desktop.py:1037` | — | A local desktop dev tool on 127.0.0.1:8788, not the FastAPI app. A website can never call it. |

## The one blocking question for Favour

Everything above is engineering-settled. This is not, and it is a business call:

> **May the portfolio publish sprite PNGs derived from the LimeZu *Modern Interiors* pack?**

`asset_sources/void/Assets/moderninteriors-win/LICENSE.txt`, verbatim:

```
YOU CAN:  Edit and use the asset in any commercial or non commercial project
YOU CAN'T: Resell or distribute the asset to others
           Edit and resell the asset to others
           Credits required (limezu.itch.io)
```

Reading it plainly: **using** the sprites on the site is permitted, commercially.
**Redistributing the pack** is not. Credit is mandatory either way.

What this bridge did about it:

- **Exported** the trimmed Iris composite — a derived work, 3 of 20 rows, 10.7 KB.
  Defensible as *use in a project*.
- **Did not export** the 20 premade roster sheets — those are verbatim pack files, and
  serving them publicly is the closest thing here to *distributing the asset*.

If Favour says yes, exporting the other 19 is about ten minutes of work and needs no
further investigation — everything required is already in `03`.

**Whatever is decided, the public page must carry `Credits: limezu.itch.io`.**
Two other packs sit in `asset_sources/` and are traps: `Modern_Interiors_Free_v2.2`
forbids commercial use outright, and `PIPOYA … NEKONIN` has **no licence file at all**.
Take nothing from either.

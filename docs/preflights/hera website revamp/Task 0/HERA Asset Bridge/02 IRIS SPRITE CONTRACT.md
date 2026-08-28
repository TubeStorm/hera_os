# 02 — Iris Sprite Contract

## The short answer

`exports/iris/iris-sheet-trimmed.png` (1152 × 288, 10.7 KB) is the real Iris.
Two animations are genuinely ready: **idle** and **walk**, in four directions.
Everything else is data with nothing playing it.

`exports/preview/iris-preview.html` proves walk-down and idle with zero dependencies.

## Where Iris comes from

Iris is **not** an ordinary agent. She is a *system character*:
`SYSTEM_CHARACTERS = ("iris","log_gremlin","curator","routine_kid")`
(`services/character_catalog.py:67`).

She is resolved by `system_character("iris")` (`services/character_catalog.py:384`):

1. Look for a Character Lab profile in `%APPDATA%/HERA/db/character_lab_state.json`.
2. If absent, fall back to shipped default layer offsets `(1,3,8,24,0)` keyed `"iris"`
   (`services/character_lab_assets.py:191`).
3. Compose the chosen layers into one flattened PNG.

She never appears in `ui/public/pixel-agents/appearances/manifest.json` — that
20-entry manifest is the *generic* agent roster and does not contain Iris.
`routers/characters.py:217` re-heals the `agent_roster` DB row for `iris` on every
`/api/void/roster` call, so **the database is a cache, not the source of truth.**

### Her layers on this machine

| Slot | Layer id |
|---|---|
| body | `Body_48x48_03` |
| eyes | `Eyes_48x48_07` |
| outfit | `Outfit_16_48x48_01` |
| hair | `Hairstyle_04_48x48_08` |
| accessory | `Accessory_10_Bolt_48x48_01` |

Composed to `ui/public/pixel-agents/generated/adult/afaf7665e238ae25.png`
(2688 × 1920). The second composer path names the same artwork
`533d10865bd398e3.png` — **verified byte-identical**, MD5 `9d91b432…`. Either file is Iris.

## ⚠ The stability warning that matters most

Iris's look lives in `%APPDATA%`, **not in the repo**. It is private per-installation
state. Open the Character Lab, change her hair, and "Iris" changes on that machine
only — the public repo never sees it.

**So: the portfolio must snapshot a specific Iris PNG as a static asset.** Do not
re-derive her from HERA at build time, and do not assume the shipped default offsets
match any given install. The export in this bridge *is* that snapshot.

## Layers are pre-composited, not layered at render time

`Image.alpha_composite` runs server-side in order **body → eyes → outfit → hair →
accessory** (`services/character_lab_assets.py:238`, `services/character_catalog.py:289`)
and saves one flattened PNG, cached by content hash. The browser loads **one texture**.
There is no hair/body/clothing layering concept anywhere in `ui/src`.

Good news for the portfolio: nothing to compose, nothing to keep in sync.

## Rendering contract

```
FRAME_W = 48
FRAME_H = 96          # two tiles tall: the character sits in the lower portion, headroom above
sheet   = 56 cols × 20 rows on the full sheet   (trimmed export: 24 cols × 3 rows)

sx = frameIndex * 48
sy = row        * 96
drawImage(sheet, sx, sy, 48, 96, dx, dy, 48*scale, 96*scale)
```

Set `image-rendering: pixelated`. Integer scale factors only (2×, 3×, 4×) — fractional
scaling shimmers.

Source of the formula: `services/character_lab_assets.py:38`, and the independently
coded CSS version at `ui/src/components/character/CharacterBuilder.tsx:59`
(`backgroundPosition: -(col*48)px -(row*96)px`). **I verified my own crop against
HERA's stored Iris preview PNG — pixel-for-pixel identical.**

### Direction mapping

`dirFromVelocity()` (`ui/src/components/PhaserVoid.tsx:69`):
`|dx| >= |dy| → dx>=0 ? right : left`, otherwise `dy>=0 ? front : back`.
Screen y grows downward, so **positive dy = moving down = `front`**.

| Direction | Frames within the row | Meaning |
|---|---|---|
| right | 0–5 | walking right |
| back | 6–11 | walking away from viewer |
| left | 12–17 | walking left |
| **front** | **18–23** | **walking downward, toward the viewer** ← the one the portfolio wants |

## READY NOW

Verified against `ensureAnims()` (`ui/src/components/PhaserVoid.tsx:148`), which
registers Phaser animations for exactly `['idle','walk']` (line 156) and nothing else.

| Animation | Row | Frames per direction | fps | Loop |
|---|---|---|---|---|
| **idle** | 1 | right 0–5 · back 6–11 · left 12–17 · **front 18–23** | 6 | yes |
| **walk** | 2 | right 0–5 · back 6–11 · left 12–17 · **front 18–23** | 8 | yes |

That is 8 usable clips (2 animations × 4 directions). All 8 are in the trimmed export.

Timing lives in `DEFAULT_ANIMATION_MAP` (`services/character_lab_assets.py:66`) and is
read at `PhaserVoid.tsx:170` (`frameRate: spec.fps || 6`).
- idle → 6 fps → 6 frames → **1000 ms** per loop
- walk → 8 fps → 6 frames → **750 ms** per loop

## NOT MAPPED YET

Frame data exists; **no renderer plays it**. Grepping `ui/src` for these finds zero
`anims.create()` / `.play()` call sites.

| Animation | Row | Status |
|---|---|---|
| turnaround | 0 | frames 0–3 defined, 4 fps — used only as a static builder thumbnail, never animated |
| phone | 6 | full 4-direction map defined, nothing plays it |
| read_book | 7 | full 4-direction map defined, nothing plays it |

Plus the explicitly deferred set in `services/character_lab_assets.py:111` — sleep,
sit, push_cart, pickup, throw, hit, punch, stab, hurt, shoot, gun_idle,
combat_object_specific. These are documented placeholders, not mappings.

**Row 0 (turnaround) is included in the trimmed export anyway** — the frames are valid
and the portfolio can use them; it just isn't something HERA itself animates today.
Rows 6 and 7 are not exported. Mapping them is a separate HERA-side task if the
homepage ever needs them. Do not map them here.

## One thing that looks like a bug and is not

Iris's **side and back** frames read as a hard diagonal cut across the body. I checked
this against HERA's untouched premade sheet `agent_pixel_001.png` — the identical
diagonal appears there. **It is the asset pack's own chibi side-profile art style**, not
a composition fault and not an export fault.

The **front** frames — the ones the portfolio actually wants — are clean.

Also authentic: the grey-and-green object floating above Iris's head is her
`Accessory_10_Bolt` layer. It matches HERA's own saved preview exactly. Do not "fix" it.

## Dependencies

**Required:** one PNG. That is the whole list.

**Not required — do not drag any of it in:** Phaser (only used for the Void's wander AI,
camera and click handling), Python + Pillow (only used to *compose* new combinations),
SQLite `agent_roster` (only persists a user's choice), `%APPDATA%` state.

## Exported

| File | What |
|---|---|
| `exports/iris/iris-sheet-trimmed.png` | 1152 × 288 — rows 0–2 (turnaround, idle, walk), cols 0–23 (all four directions). 10.7 KB. |
| `exports/iris/iris-portrait-48x96.png` | single frame, for a static avatar |
| `exports/preview/iris-preview.html` | self-contained proof; sheet inlined as a data URI, opens from anywhere |
| `exports/preview/iris-sheet-trimmed.png` | same PNG, loose, next to the preview |

Read `05` on licensing before publishing any of these.

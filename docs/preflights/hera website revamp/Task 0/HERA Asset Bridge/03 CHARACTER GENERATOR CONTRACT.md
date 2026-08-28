# 03 — Character Generator Contract

Goal being served: `waitlist participant → public alias/seed → deterministic HERA-style sprite`,
with **no email**, no HERA runtime, no database.

## HERA has three character systems, not one

This is the thing that will waste a future agent's time if it is not written down.

| # | System | Roster | Animated? | Source |
|---|---|---|---|---|
| 1 | **Premade roster** | fixed **20**, verbatim copies | yes, full sheets | `scripts/build_agent_appearances.py` |
| 2 | **Character Lab / catalogue** | arbitrary combinations | yes, full sheets | `services/character_catalog.py`, `services/character_lab_assets.py` |
| 3 | **Kids family** | combinations | **no — single idle frame** | `scripts/build_kid_appearances.py` |

There is also a fourth, older, unrelated sprite system at
`ui/public/pixel-agents/characters/char_0..5.png` used by `ui/src/components/SpriteAvatar.tsx`
(different sheet geometry, 336 × 288, CSS `steps(3)`). Ignore it. It shares the naming
and nothing else.

### 1. Premade roster — the one the portfolio should use

`scripts/build_agent_appearances.py:86` copies 20 **whole, already-animated** sheets
verbatim out of `asset_sources/.../0_Premade_Characters/48x48/Premade_Character_48x48_NN.png`.
It is a plain `img.save()` of the original — **no composition, no combination**.

Output: `ui/public/pixel-agents/appearances/` — `manifest.json` plus
`sheets/agent_pixel_001..020.png` and matching `previews/`.

Manifest shape:
```json
{ "version":1, "kind":"pixel_48", "frame_w":48, "frame_h":96,
  "fallback_id":"agent_pixel_001", "count":20,
  "appearances":[{ "appearance_id":"agent_pixel_001", "label":"Pixel 001",
    "sheet_path":"/pixel-agents/appearances/sheets/agent_pixel_001.png",
    "preview_path":"…/previews/agent_pixel_001.png",
    "frame_w":48, "frame_h":96, "sheet_cols":56, "sheet_rows":20,
    "idle_frame":{"row":0,"col":0},
    "source_name":"Premade_Character_48x48_01.png" }, …] }
```

**Twenty distinct people, fully animated, static at build time, never mutated by a
running HERA.** That is exactly the shape a public waitlist crowd needs.

Two caveats:
- `sheet_rows` in the manifest says 20, but the premade PNGs are 2688 × 1968 (20.5 rows).
  Harmless for rows 0–2; do not trust `sheet_rows` for arithmetic.
- The manifest carries `idle_frame` only. **Animation maps are not in it** — copy the
  `{row, frames, fps}` table from `02` alongside the sheets.

### 2. Character Lab — the real generator, and why not to use it

Any `body × eyes × outfit × hair × accessory` selection from
`asset_sources/.../Character_Generator/{Bodies,Eyes,Outfits,Hairstyles,Accessories}/48x48/`
composes on demand via `compose_selection()` (`character_catalog.py:260`), flattened by
Pillow, cached by content hash into `ui/public/pixel-agents/generated/adult/`.

Layer order is fixed: `body → eyes → outfit → hair → accessory`
(`LAYER_ORDER`, `services/character_lab_assets.py:41`).
Families: `adult` and `kids`, each with its own directory set (`FAMILY_DIRS`, line 42).

This is genuinely open-ended and genuinely powerful — and it is **server-side Python +
Pillow + local disk cache**. A public website cannot call it. Use it only to *pre-bake*
specific characters (as was done for Iris), never at request time.

### 3. Kids family — not usable for a crowd

`scripts/build_kid_appearances.py:65` does combine layers deterministically via coprime
multipliers, but emits `sheet_cols: 1, sheet_rows: 1` — **one idle frame, no walk cycle**.
Fine for a static avatar, useless for animation.

## Palette behaviour

There is none to model. Colour is baked into each layer PNG by the source pack. HERA
applies no tint, no hue-shift, no recolour anywhere in the character path. The only
colour-adjust machinery in the repo is `tileColors` on **room tiles**
(`ui/public/pixel-agents/default-layout-1.json`), not characters.

So: variety comes from *which layers*, never from *recolouring one layer*.

## The deterministic seed contract

HERA already has exactly the function the portfolio needs, implemented identically on
both sides: FNV-1a 32-bit, then modulo the id list.

- Python: `services/agent_appearance.py:125` (`_fnv1a`) → `deterministic_for(seed)` at line 133
- JavaScript: `ui/src/components/PhaserVoid.tsx:60`

Reproduce it verbatim — do not invent a hash, or HERA and the portfolio will disagree
about who someone is:

```js
function fnv1a(seed) {
  let h = 0x811c9dc5;
  for (const ch of String(seed || '')) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h;
}

// ids sorted exactly as manifest.appearances order: agent_pixel_001 … agent_pixel_020
const appearanceId = IDS[fnv1a(alias) % IDS.length];
const sheet = `/hera/appearances/${appearanceId}.png`;
```

**`seed` = the public alias, never the email.** Same alias always yields the same
person; nothing about the participant is recoverable from the sprite.

Total portfolio-side dependency: a 20-entry id array, 20 PNGs, one 8-line hash function,
one `drawImage` loop. No Python, no DB, no Phaser.

### Honest limit

20 distinct characters. A crowd larger than ~20 will visibly repeat. If that matters,
the fix is a HERA-side task to pre-bake N Character-Lab combinations into a larger
manifest using the same shape — not a portfolio-side hack. **Not needed yet.**

## What must not cross the boundary

| Do not bring | Why |
|---|---|
| Phaser | only used for the Void's wander AI/camera; irrelevant to drawing a sprite |
| Python + Pillow | only needed to *compose new* combinations |
| SQLite `agent_roster` | only persists a HERA user's chosen appearance |
| `%APPDATA%/HERA/db/character_lab_state.json` | private per-install state; will not exist |
| `asset_sources/**` | the raw licensed packs — see below |

## Public exposure — read this before shipping

The generator's source is the **LimeZu *Modern Interiors*** pack
(`GEN_ROOT`, `services/character_lab_assets.py:19`). Licence verbatim,
`asset_sources/void/Assets/moderninteriors-win/LICENSE.txt`:

```
MODERN INTERIORS FULL VERSION LICENSE
YOU CAN:
-Edit and use the asset in any commercial  or non commercial project
-Use the asset in any commercial  or non commercial project
YOU CAN'T:
- Resell or distribute the asset to others
- Edit and resell the asset to others
- Credits required (limezu.itch.io)
```

Reading, plainly: **using** these sprites on the portfolio is permitted, including
commercially. **Redistributing the asset** is not, and **credit is mandatory**.

The 20 premade sheets are *verbatim copies of pack files*. Publishing them as
downloadable PNGs is the closest thing here to "distributing the asset" — it is a
judgement call, and it is Favour's to make, not mine. This bridge therefore exports
**only the derived, trimmed Iris composite** and not the 20-sheet roster. See `05`.

Also present under `asset_sources/void/Assets/`, and both traps:
- `Modern_Interiors_Free_v2.2/LICENSE.txt` — **"YOU CAN'T USE THE ASSET IN COMMERCIAL
  PROJECTS."** Stricter. Not what the character code uses, but do not grab from it by mistake.
- `PIPOYA FREE RPG Character Sprites NEKONIN/` — **no licence file present at all**, and
  no code references it. Assume no rights.

## Recommendation

Ship the deterministic-alias contract now against a **pre-baked, portfolio-owned**
manifest — start with the Iris export to prove the pipeline, and settle the licence
question with Favour before adding the other 19.

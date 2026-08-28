# 01 — HERA Logo

## The short answer

Use `exports/logo/hera-logo-1254.webp`. It is the real logo, it is safe to publish,
and it needs no attribution to anyone outside HERA.

## Canonical source

| | |
|---|---|
| Source of truth | `ui/src/assets/hera-logo.webp` |
| Rendered by | `ui/src/HeraLogo.tsx` (single component, `import logoUrl from './assets/hera-logo.webp'`) |
| Format | WEBP, RGBA, 1254 × 1254, true alpha (89% of pixels fully transparent) |
| PNG twin | `ui/src/assets/hera-logo.png` — same artwork, 1254 × 1254 RGBA, 338 KB vs 212 KB |
| Favicon | `ui/public/favicon.png` — 256 × 256 RGBA, same mark, referenced by `ui/index.html:5` |

There is **no vector master**. `docs/product/logo and identity/HERA_Logo_Builder_Agent_Prompt.md`
specifies an SVG/ICO/ICNS variant system, but that brief was never executed —
what actually ships is the raster. The raster is the canonical asset.

## Copies that are all byte-identical

`hera-logo.png` appears in five places with one MD5 (`a3cf2748ae40d4590b073e8b9d76c904`):
repo root, `ui/src/assets/`, `ui/public/`, and two `dist/` build outputs.
`hera-logo.webp` appears twice, one MD5 (`aafbfa175964f278691fe62be9a042bc`).
**There are no true variants** — no light/dark pair, no wordmark lockup, no monochrome master.

## The one trap

`hera_pro_v4_1.svg` sits in the repo root and is **not the HERA logo**. It is a teal
(`#00d4a0`) square-tile app icon from an abandoned direction, referenced by nothing.
Do not use it.

## Intended usage

Designed for **dark backgrounds**. The mark is a warm gold-on-transparent ouroboros
ring with a four-point star at centre. On light backgrounds the pale cream highlight
band (`#FBF2E1`) nearly vanishes.

Sampled palette (quantised over the opaque pixels):

| Role | Hex |
|---|---|
| Highlight | `#FBF2E1` |
| Light gold | `#EFDDC2` |
| Mid gold | `#E1C8A4` |
| Core gold | `#D1B389` |
| Shadow | `#806F57` |

## Meaning (from `HERA_Ouroboros_Lore_and_Logo_Brief`)

Two tapered arcs = HERA's ouroboros loop. The centre star = **Iris**, the intelligence
inside the loop. The star is deliberately detached from the ring. The loop is
deliberately **not closed**. Do not close it, do not add an eye, a snake head, or
circuitry — the brief forbids all three.

## Motion, if you want it

`ui/src/HeraLogo.tsx` defines two animations the portfolio may reuse verbatim:

```css
@keyframes hera-logo-pulse {
  0%,100% { opacity:1;   filter:drop-shadow(0 0 8px  rgba(158,129,254,.58)) drop-shadow(0 0 18px rgba(76,91,255,.28)) }
  50%     { opacity:.78; filter:drop-shadow(0 0 18px rgba(214,202,254,.88)) drop-shadow(0 0 28px rgba(76,91,255,.5)) }
}
@keyframes hera-logo-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
```

Used as `pulse` 2.4s ease-in-out on the boot splash, `spin` 18s linear elsewhere.
Note the glow is **violet**, not gold — that contrast is intentional in-app.

## Public safety

Safe. Original HERA artwork, no third-party pack, no licence obligation, no secrets,
no embedded metadata of concern. Copy it into the portfolio directly.

## Exported

- `exports/logo/hera-logo-1254.webp` ← **use this one**
- `exports/logo/hera-logo-1254.png` (fallback / any tool that dislikes WEBP)
- `exports/logo/hera-favicon-256.png`

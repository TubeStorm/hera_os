# Asset List — audit-export-v2

## Shipped assets (in `public/`, served at the base path)
| Asset | Purpose | Status |
|-------|---------|--------|
| `resume/Favour-Diokpo-Resume.pdf` | Downloadable resume (2026) | ✅ real, wired |
| `favicon.svg` | Site favicon | ✅ |
| `.nojekyll` | GitHub Pages: don't run Jekyll | ✅ |
| `images/hera/.gitkeep` | Folder for optional HERA screenshots | placeholder folder (empty) |
| `images/enterprise/.gitkeep` | Folder for optional enterprise screenshots | placeholder folder (empty) |

## Visual proof — designed diagrams (NDA-safe, no screenshots required)
All rendered as inline SVG/HTML components, not images — sharp at any zoom, no broken `<img>`:

| Component | Used on | Teaches |
|-----------|---------|---------|
| `TrustLayerMap` | Home, HERA | What the AI reports every turn (saw/did/saved/forgot/cost) |
| `GhostBeforeAfter` | HERA | Stuck/silent turn vs. visible state with cause + undo |
| `IrisScopeMap` | HERA | One assistant identity, global vs. room scope |
| `ComposerCard` | HERA | File-aware chat / attachment truth |
| `MemoryBlocks` | HERA | Human-readable, editable memory |
| `PermissionFlow` | HERA | Run-confirm; safe tools stay frictionless |
| `ModalAuditBeforeAfter` | Home, Enterprise | 40+ one-off modals → one coherent pattern |
| `ApprovalFlow` | Enterprise | Approval flow with visible status + ownership |
| `QuotaCard` | Enterprise | Warning-only quota visibility on dense data |
| `MonogramPortrait` | About | Monogram stand-in (until a real headshot is added) |

## Still optional (not blocking)
- Real headshot → `public/images/portrait.jpg` (About currently shows the monogram).
- Real redacted screenshots → `public/images/hera/` and `public/images/enterprise/`
  (diagrams already cover these; screenshots would be an upgrade, NDA permitting).

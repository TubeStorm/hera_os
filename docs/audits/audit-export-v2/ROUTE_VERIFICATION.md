# Route Verification — audit-export-v2

Verified by the builder against the local Astro preview of the production build
(`npm run build` → `npm run preview`), base path `/favour-ai-product-portfolio/`.

| Route | HTTP | Notes |
|-------|------|-------|
| `/` | 200 | Home — hero, proof strip, both case-study previews, how-I-work, CTA |
| `/work/` | 200 | Work index — two case-study cards (problem / designed / proves) |
| `/work/hera/` | 200 | HERA case study — trust-layer, diagrams, "what broke" section |
| `/work/enterprise-tools/` | 200 | Ubisoft case study — three workstreams, real survey metrics |
| `/resume/` | 200 | Resume — real experience, education, certs, **working PDF download** |
| `/about/` | 200 | About — enterprise→AI voice, money/people/game-dev line |
| `/contact/` | 200 | Contact — real email + LinkedIn + GitHub, no "coming soon" note |
| `/resume/Favour-Diokpo-Resume.pdf` | 200 | Resume PDF asset (90 KB) loads directly |

All 8 endpoints returned **200**. Every route was fetched and its rendered content
confirmed to contain the intended real facts (dates, metrics, contacts).

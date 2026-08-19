# Broken Link Report — audit-export-v2

Method: extracted every `href` from all built HTML in `dist/`, then requested each
internal link against the running preview server and each route above.

## Internal links
**0 broken.** Every internal `/favour-ai-product-portfolio/...` link returned 200.

> One bug was found and fixed during this pass: the Resume "Download PDF" button was
> double-prefixing the base path (`/favour-ai-product-portfolio/favour-ai-product-portfolio/...`
> → 404) because `Button.astro` re-applies `withBase()`. Fixed by passing the raw
> `resumeAsset.path` to the button. Re-verified 200.

## External links (informational — not fetched, listed for review)
- https://github.com/TubeStorm — confirmed real (repo host)
- https://linkedin.com/in/favour-diokpo — from the 2026 resume
- mailto:favourdiokpo@icloud.com — from the 2026 resume
- https://fonts.googleapis.com / fonts.gstatic.com — Google Fonts (Inter)
- https://tubestorm.github.io/favour-ai-product-portfolio/... — canonical/OG URLs (self)

No fake, placeholder, or `YOUR_USERNAME` links present.

# Report: Rising Ink Demo Images + Vercel Nested Root Guidance

## Summary
- Added Georgi demo images under `sites/rising-ink/demos/public/images/georgi` and wired them into the Philosophy and Artifacts sections.
- Updated artifact titles and hover metadata per provided names/descriptions.
- Adjusted artifact overlay symbols to fade out on hover/tap.
- Updated Vercel deployment rules for nested root directories.

## Files Created
- `plans/reports/012-rising-ink-demo-images-vercel-report.md`

## Files Modified
- `.rules/12-vercel-deployment.md`
- `sites/rising-ink/demos/src/pages/Georgi.jsx`

## Files Added (assets)
- `sites/rising-ink/demos/public/images/georgi/georgi_abusleme_tattoo_1603975401_2430644292698329406_6628144.jpg`
- `sites/rising-ink/demos/public/images/georgi/georgi_abuslemetattoo_1637265148_2709898931751199448_6628144.jpg`
- `sites/rising-ink/demos/public/images/georgi/georgi_abusleme_tattoo_1532443514_1830591339186388112_6628144.jpg`
- `sites/rising-ink/demos/public/images/georgi/georgi_abusleme_the_ritual_1847475718839408845_6628144.jpg`

## Validation
- Not run (recommended: `npm run build:rising-ink`).

## Notes
- Nested root guidance added for `sites/rising-ink/demos` to avoid install path issues on Vercel.

---
report: "home-andrew-polish"
date: "2026-01-04"
status: "partial"
---

# Report: Home + Andrew Polish

## Scope
- Home page fixes: IntersectionObserver zone detection, blur/gradient removal, typography alignment, Root accordion grouping, footer removal, TOC dot pulse.
- Andrew page fixes: TOC anchors and heading hierarchy for Tangibles/Questions/Next.

## Changes
### Home (`sites/odyssey-lab/src/pages/Home.jsx`)
- Reworked dark-zone detection to track multiple visible sections reliably.
- Removed gauzy blur usage and gradient transition blocks (removed `ZoneTransition`).
- Aligned fonts and SectionHeader sizing to `gemini-base-b.jsx` (Cinzel/Inter/JetBrains Mono; 4xl/5xl headers).
- Grouped Root accordions below the three-card grid.
- Removed empty footer.
- Added custom `toc-pulse` animation for the sticky TOC dot.
- Replaced hardcoded colors with CSS variables where touched.

### Andrew (`sites/odyssey-lab/src/pages/AndrewThreshold.jsx`)
- Demoted Tangibles/Questions/Next headings to H3-level (`section-title-sub`).
- Added `section-header-minor` styling for these sub-sections.
- Re-targeted TOC anchors: `#tangibles` now points to “The Financial Picture”.

## Validation
- `npm run dev -- --host 0.0.0.0 --port 5173`
  - Local: `http://localhost:5173/`

## Notes
- No git commit/push performed (explicit user request; deviates from “clean git commits” standard).
- Visual verification depends on user review in the running dev server.

## Open Items
- Confirm the Root/Cosmology gap is resolved in-browser; if not, adjust section spacing/backgrounds.
- Confirm TOC active-state behavior with H3 anchors feels stable during scroll.

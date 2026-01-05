---
report: "sticky-nav-component"
date: "2026-01-04"
status: "partial"
---

# Report: Sticky Nav Component + Gauze Removal

## Scope
- Remove remaining gauze overlay on Home.
- Componentize sticky bottom nav based on Andrew’s behavior, shared across Home + Andrew.
- Home shows sticky nav only below the `md` breakpoint.

## Changes
- Added shared component: `sites/odyssey-lab/src/components/StickyNav.jsx`.
- Home now uses `StickyNav` with `showDesktop={false}` to keep it mobile-only.
- Andrew now uses the shared `StickyNav` with full desktop + mobile behavior.
- Removed Home background overlay layer (grid/gradient) to eliminate gauze effect.

## Validation
- `npm run dev -- --host 0.0.0.0 --port 5173`
  - Local: `http://localhost:5173/`

## Notes
- No git commit/push performed (not requested).

## Open Items
- Confirm mobile overlay styling matches the Andrew reference and appears only below `md` on Home.

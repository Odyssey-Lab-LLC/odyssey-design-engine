---
report: "home-nav-blur"
date: "2026-01-04"
status: "partial"
---

# Report: Home Sticky Nav + Blur Cleanup

## Scope
- Adjust sticky bottom TOC visibility to only show below the header nav breakpoint.
- Remove remaining gauze blur element from the Home transmute section.

## Changes
- Sticky bottom bar now shows only on small screens (`md:hidden`) and hides on md+.
- Removed mobile overlay/toggle to avoid duplicate navigation on small.
- Removed the ambient blur glow element in the transmute section.

## Validation
- `npm run dev -- --host 0.0.0.0 --port 5173`
  - Local: `http://localhost:5173/`

## Notes
- No git commit/push performed (explicit user request).

## Open Items
- Confirm bottom nav behavior at the md breakpoint matches expectation.

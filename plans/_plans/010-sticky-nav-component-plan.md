---
plan: "sticky-nav-component"
version: "1.0.0"
created: "2026-01-04"
owner: "Codex"
status: "complete"
---

# Sticky Nav Component + Gauze Removal Plan

## Rules Consulted
- `.rules/00-general.md` — No-guess clause, fail-fast on uncertainty.
- `.rules/00-conflict-checking.md` — Conflict detection and hierarchy.
- `.rules/10-react-standards.md` — JSX conventions and component structure.
- `.rules/10-design-system.md` — Token-first styling, no hardcoded values.
- `.rules/90-odyssey-project.md` — Site-local component boundaries.
- `AGENTS.md` — Prime directive, reporting requirement.
- `CLAUDE.md` — Architect output requirement and completion format.

## Goals
- Remove remaining “gauze blur” effect on Home.
- Standardize sticky bottom nav as a shared site component (Andrew version behavior + mobile state).
- On Home, show sticky nav only below the breakpoint where header links disappear.

## Inputs (Read)
- `sites/odyssey-lab/src/pages/Home.jsx`
- `sites/odyssey-lab/src/pages/AndrewThreshold.jsx`

## Outputs (Write)
- `sites/odyssey-lab/src/components/StickyNav.jsx`
- `sites/odyssey-lab/src/pages/Home.jsx`
- `sites/odyssey-lab/src/pages/AndrewThreshold.jsx`
- `plans/reports/010-sticky-nav-component-report.md`
- `plans/lessons/010-sticky-nav-component-lessons.md`

## Step Plan
1. Remove any remaining blur/gauze overlay from Home background layer.
2. Create `StickyNav` component in `sites/odyssey-lab/src/components/StickyNav.jsx` with:
   - Shared markup and mobile overlay (Table of Contents).
   - Scroll visibility + active section tracking.
   - Props to hide desktop bar (Home) while keeping mobile toggle.
3. Replace inline StickyNav implementations in Home + Andrew with the shared component.
4. Start dev server and share localhost URL.
5. Write report + lessons (no commit/push unless requested).

## Stop Conditions
- Header breakpoint not aligned with `md`.
- Componentization introduces layout regressions in Andrew nav.

## Decisions (Confirmed)
- Use `md` as the breakpoint (header nav uses `hidden md:flex`).
- Keep component site-local (`sites/odyssey-lab/src/components/`).

## Completion Notes
- Dev server: `npm run dev -- --host 0.0.0.0 --port 5173` (Vite ready; localhost provided).
- Report: `plans/reports/010-sticky-nav-component-report.md`.
- Lessons: `plans/lessons/010-sticky-nav-component-lessons.md`.

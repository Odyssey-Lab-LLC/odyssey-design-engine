---
plan: "home-nav-blur"
version: "1.0.0"
created: "2026-01-04"
owner: "Codex"
status: "complete"
---

# Home Sticky Nav + Blur Cleanup Plan

## Rules Consulted
- `.rules/00-general.md` — No-guess clause, fail-fast on uncertainty.
- `.rules/00-conflict-checking.md` — Conflict detection and hierarchy.
- `.rules/10-react-standards.md` — JSX conventions and component structure.
- `.rules/10-design-system.md` — Token-first styling, no hardcoded values.
- `.rules/90-odyssey-project.md` — Site-local scope and file boundaries.
- `AGENTS.md` — Prime directive, reporting requirement.
- `CLAUDE.md` — Architect output requirement and completion format.

## Goals
- Show the bottom sticky TOC only below the breakpoint where the top header links disappear.
- Hide the bottom sticky TOC at and above that breakpoint.
- Remove the remaining gauze blur effect from the Home page.

## Inputs (Read)
- `sites/odyssey-lab/src/pages/Home.jsx`

## Outputs (Write)
- `sites/odyssey-lab/src/pages/Home.jsx`
- `plans/reports/009-home-nav-blur-report.md`
- `plans/lessons/009-home-nav-blur-lessons.md`

## Safe + Efficient Path
1. Identify the header nav breakpoint (`md` currently hides top nav on mobile).
2. Flip sticky bottom bar to show only below `md` and remove mobile overlay toggle to avoid duplicate nav.
3. Remove the remaining blur element in the transmute section (gauze effect).
4. Start dev server and report localhost URL.
5. Write report + lessons (no git commit/push unless requested).

## Step Plan
1. Update StickyNav: `hidden md:flex` → `flex md:hidden`, remove mobile toggle/overlay and unused state/icons.
2. Remove ambient blur element in the transmute section.
3. Run `npm run dev -- --host 0.0.0.0 --port 5173` and share URL.
4. Write report + lessons.

## Stop Conditions
- Breakpoint differs from `md` in Tailwind config.
- Blur removal creates unintended artifacts in dark section.

## Decisions (Confirmed)
- Use the existing `md` breakpoint (header nav already uses `hidden md:flex`).
- No git commit/push for this sequence unless explicitly requested.

## Completion Notes
- Dev server: `npm run dev -- --host 0.0.0.0 --port 5173` (Vite ready; localhost provided).
- Report: `plans/reports/009-home-nav-blur-report.md`.
- Lessons: `plans/lessons/009-home-nav-blur-lessons.md`.

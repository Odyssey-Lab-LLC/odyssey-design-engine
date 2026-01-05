---
plan: "home-andrew-polish"
version: "1.0.0"
created: "2026-01-04"
owner: "Codex"
status: "complete"
---

# Home + Andrew Polish Plan (No Git Push)

## Rules Consulted
- `.rules/00-general.md` — No-guess clause, fail-fast on uncertainty.
- `.rules/00-conflict-checking.md` — Conflict detection and hierarchy.
- `.rules/10-react-standards.md` — JSX conventions and component structure.
- `.rules/10-design-system.md` — Token-first styling, no hardcoded values.
- `.rules/20-testing.md` — Test expectations (run dev server, build when reasonable).
- `.rules/90-odyssey-project.md` — Site-local scope and file boundaries.
- `AGENTS.md` — Prime directive, reporting requirement.
- `CLAUDE.md` — Architect output requirement and completion format.
- `ARCHITECTURE.md` — Multi-site structure expectations.

## Goals
- Fix Home IntersectionObserver zone detection so dark mode persists when any dark section is visible.
- Remove gauzy blur and gradient boundary effects on Home.
- Align Home typography (font family + sizing) with `gemini-base-b.jsx`.
- Fix Home layout issues: white gap between Root/Cosmology, Root accordions grouped below grid, remove empty footer, restore pulsing TOC dot.
- Fix Andrew TOC/anchors and heading hierarchy so Tangibles/Questions/Next are H3-level (not H2/section-title-main).
- Start dev server and provide localhost URL (no git commit/push).
- Produce report + lessons per repo standards.

## Inputs (Read)
- `sites/odyssey-lab/src/pages/Home.jsx`
- `sites/odyssey-lab/src/pages/AndrewThreshold.jsx`
- `_workspace/init gem content delta test/gemini-base-b.jsx`
- User screenshots under `_workspace/home fix screens/`

## Outputs (Write)
- `sites/odyssey-lab/src/pages/Home.jsx`
- `sites/odyssey-lab/src/pages/AndrewThreshold.jsx`
- `plans/reports/008-home-andrew-polish-report.md`
- `plans/lessons/008-home-andrew-polish-lessons.md`

## Safe + Efficient Path
1. **Tight scope**: Only Home + AndrewThreshold files and report/lessons.
2. **Token-first**: Replace any new colors with CSS variables; avoid introducing new hardcoded values.
3. **Typography alignment**: Match gemini-base-b (Cinzel display, Inter body, JetBrains Mono; h2 sizing 4xl/5xl pattern).
4. **Structural fixes**: Move Root accordions out of cards into a grouped list below the grid.
5. **Observer fix**: Track visibility state across all dark sections before setting `body[data-zone]`.
6. **No Git changes**: Do not stage/commit/push per user request (note as deviation).
7. **Validation**: Run `npm run dev -- --host 0.0.0.0 --port 5173` and provide localhost URL before report.

## Step Plan
1. **Home: IntersectionObserver**
   - Replace `entries.some(...)` logic with a persistent Set/Map of visible dark sections.
   - Set `body.dataset.zone` to `dark` if any dark section is visible.
2. **Home: Remove blur + gradient boundary**
   - Remove `backdrop-filter` usage from `.odyssey-card`, `SynthesisBlock`, and any blur utility classes.
   - Replace `ZoneTransition` gradient with a neutral divider or remove it entirely.
   - Remove gradient boundary classes (e.g., `bg-gradient-to-b`) where they exist solely for light/dark transitions.
3. **Home: Typography alignment**
   - Define `.font-display` and align font stacks to gemini-base-b (Cinzel/Inter/JetBrains Mono).
   - Adjust `SectionHeader` sizing and description sizing to match gemini-base-b (4xl/5xl, lg/xl).
4. **Home: Layout fixes**
   - Fix white gap between Root and Cosmology (remove stray light backgrounds/margins).
   - Move Root accordions into a grouped list below the 3-card grid.
   - Remove empty footer.
   - Add pulsing effect to the TOC dot.
5. **Andrew: TOC/heading hierarchy**
   - Demote Tangibles/Questions/Next to H3-level styling inside their sections.
   - Update TOC targets so `Tangibles` links to the first subheading in that block.
   - Keep Threshold/Convergence/Exploration as primary H2 section headers.
6. **Validation**
   - Start dev server and provide localhost URL.
   - Spot-check Home + Andrew for the requested issues.
7. **Report + Lessons**
   - Write `plans/reports/008-home-andrew-polish-report.md` and `plans/lessons/008-home-andrew-polish-lessons.md`.

## Stop Conditions
- Any ambiguity in Andrew heading hierarchy beyond stated instructions.
- Missing tokens needed for typography updates.
- Dev server fails to start.

## Decisions (Confirmed)
- No git commit/push for this sequence (explicit user request; log in report as deviation).
- Typography reference is `gemini-base-b.jsx`.

## Completion Notes
- Dev server: `npm run dev -- --host 0.0.0.0 --port 5173` (Vite ready; localhost provided).
- Report: `plans/reports/008-home-andrew-polish-report.md`.
- Lessons: `plans/lessons/008-home-andrew-polish-lessons.md`.

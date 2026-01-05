---
plan: "andrew-threshold-merge"
version: "1.0.0"
created: "2026-01-04"
owner: "Codex"
status: "proposed"
---

# Andrew Threshold Merge Plan

## Goals
- Preserve existing `AndrewThreshold.jsx` structure and behavior.
- Merge Section 1–3 content from `_workspace/andrew gem merge/andrew-2-crossing-the-threshold.html` into matching JSX sections.
- Standardize styles where clear mappings exist, without breaking current visual system.
- Maintain form-first naming and token-first styling.

## Rules Consulted
- `.rules/00-general.md` — No-guess clause, fail-fast on uncertainty.
- `.rules/00-conflict-checking.md` — Conflict detection and hierarchy.
- `.rules/00-rules-governance.md` — Rule-source integrity.
- `.rules/10-react-standards.md` — JSX/className conventions, form-first naming.
- `.rules/10-design-system.md` — Token-first styling, no hardcoded values.
- `.rules/11-design-system-extensions.md` — Prototype protection and site sovereignty.
- `.rules/90-odyssey-project.md` — Site vs shared boundaries, component conventions.
- `AGENTS.md` — Prime directive, DoD, reporting requirement.
- `CLAUDE.md` — Architect output requirement, completion format.
- `ARCHITECTURE.md` — Multi-site structure and config expectations.

## Inputs (Read)
- `sites/odyssey-lab/src/pages/AndrewThreshold.jsx`
- `_workspace/andrew gem merge/andrew-2-crossing-the-threshold.html`

## Outputs (Write)
- `sites/odyssey-lab/src/pages/AndrewThreshold.jsx`
- `plans/reports/005-andrew-threshold-merge-report.md`
- `plans/lessons/005-andrew-threshold-merge-lessons.md`

## Safe + Efficient Path
1. **Map content precisely**: identify Section 1–3 boundaries in HTML and JSX and use explicit insertion points.
2. **Merge content minimally**: insert converted JSX blocks at the bottom of each existing section wrapper, before the next section begins, preserving current hero/proof/crescendo flows.
3. **Style alignment pass**: update/add CSS in `AndrewStyles` only where mappings are clear:
   - Proof points: use existing `.proof-point-wrapper` and children styles for proof content previously styled as `.proof-card.card--elevated`.
   - Add a new `.proof-card` class in JSX that mirrors the HTML `.proof-card` styling for any non-proof-point usage (per user request).
   - Add `.honest-block` styles based on HTML but aligned with current zone/tokens.
4. **Avoid premature abstraction**: no shared component extraction unless reused elsewhere.
5. **Validate**: run `npm run dev` and visually spot-check the three merged sections (note if unavailable).
6. **Report**: write report + lessons per completion requirements.

## Step Plan
1. **Content extraction**: capture HTML Section 1–3 content blocks only:
   - Section 1: `<!-- === SECTION 1: THE CONVERGENCE === -->` through the end of its `</section>`, excluding hero and any next-steps card.
   - Section 2: `<!-- === SECTION 2: WHAT SUCCESS LOOKS LIKE === -->` through the end of its `</section>`.
   - Section 3: `<!-- === SECTION 3: HOW WE'D WORK TOGETHER === -->` through the end of its `</section>`.
2. **Mapping table**:
   - HTML Section 1 (The Convergence) → JSX SECTION 01 (The Threshold).
   - HTML Section 2 (What Success Looks Like) → JSX SECTION 02 (The Convergence).
   - HTML Section 3 (How We'd Work Together) → JSX SECTION 03 (The Exploration).
3. **JSX merge**: translate HTML to JSX, insert at the bottom of each `SECTION 01/02/03` block in `sites/odyssey-lab/src/pages/AndrewThreshold.jsx` before the next section wrapper.
4. **Style reconciliation**:
   - Preserve `.proof-point-wrapper` styles; use it for proof blocks that were `.proof-card.card--elevated`.
   - Introduce `.proof-card` class in `AndrewStyles` based on HTML `.proof-card` style for any non-proof-point usage.
   - Add `.honest-block` styling based on HTML, adapted to the current zone system and tokens.
5. **Journey Arc SVG**: keep verbatim in JSX, convert inline attributes to JSX-safe syntax, and replace any hardcoded colors with existing CSS variables.
6. **Tables**: prefer existing layout patterns already present in `AndrewThreshold.jsx` for KPIs; if none exist, use a semantic `<table>` and style with existing tokens.
7. **Token check**: confirm no new hardcoded colors/spacing are introduced; use existing CSS variables or extend `:root` with new tokens if required.
8. **Validation**: run `npm run dev`, check console errors.
9. **Write report/lessons**: document changes, any deviations, and testing results.

## Stop Conditions
- Conflicts between rules and requested changes.
- Ambiguous mapping between HTML classes and JSX components.
- Missing tokens for required styling.
- Dev server fails to start or page errors appear.

## Decisions (Confirmed)
- Journey Arc SVG: preserve verbatim in JSX.
- Tables (KPIs): prefer existing layout patterns in `AndrewThreshold.jsx`; fall back to semantic `<table>` if no suitable pattern exists.

---
plan: "andrew-threshold-fix"
version: "1.0.0"
created: "2026-01-04"
owner: "Codex"
status: "complete"
---

# Andrew Threshold Fix Plan

## Goals
- Restore light/dark zone transitions (hero/crescendo stay dark; narrative sections light).
- Add missing HTML content (FAQ at minimum; audit for other missing sections).
- Repair lens interaction and tenure clock accuracy.
- Fix print view (hide back link), and add sticky TOC nav from Home.jsx (tokenized).
- Replace default bullets with diamond markers in gold accent.
- Adjust heading scale so h3 sits closer to h2, and reserve blue for links (use gold for non-link accents).
- Keep styles token-first and preserve existing AndrewThreshold layout.

## Rules Consulted
- `.rules/00-general.md` — No-guess clause, fail-fast on uncertainty.
- `.rules/00-conflict-checking.md` — Conflict detection and hierarchy.
- `.rules/10-react-standards.md` — JSX/className conventions.
- `.rules/10-design-system.md` — Token-first styling.
- `.rules/11-design-system-extensions.md` — Prototype protection.
- `.rules/90-odyssey-project.md` — Site vs shared boundaries.
- `AGENTS.md` — Prime directive, reporting requirements.

## Audit Summary (Current Gaps)
- Zone switching not engaging; body remains dark across narrative sections.
- `.highlight-block` stays light (white) in dark zone.
- FAQ section missing; accordion styles not present.
- Likely missing additional HTML sections (Section 4 Financial Picture, Section 5 Why This Could Work, Section 6 Honest Risks, Friendly Offer/Next Steps).
- Lens animation not responding to pointer movement.
- Tenure clock baseline likely wrong (needs 1y 4m alignment).
- Print view shows Back to Home button.
- Sticky TOC nav not present.

## Inputs (Read)
- `sites/odyssey-lab/src/pages/AndrewThreshold.jsx`
- `sites/odyssey-lab/src/pages/Home.jsx` (sticky nav reference)
- `_workspace/andrew gem merge/andrew-2-crossing-the-threshold.html`

## Outputs (Write)
- `sites/odyssey-lab/src/pages/AndrewThreshold.jsx`
- `plans/reports/006-andrew-threshold-fix-report.md`
- `plans/lessons/006-andrew-threshold-fix-lessons.md`

## Step Plan
1. **Audit + map missing HTML sections**: confirm which HTML sections (4–7, next steps) are not present and decide placement.
2. **Zone transition fix**: make light-zone deterministic between `#narrative-zone` and `#crescendo` using scroll position (Lenis or window scroll). Add CSS variable alias `--bg-highlight` to keep highlight blocks aligned with zone changes.
3. **Highlight block correction**: update `.highlight-block` to use `--bg-highlight`, with dark/light defaults.
4. **FAQ + accordion**: port FAQ markup, convert to React state-based accordion. Add accordion styles; remove top padding on `.accordion__content-inner` per request.
5. **Missing sections**: insert Sections 4–6 (Financial Picture, Why This Could Work, Honest Risks), plus Next Steps and a reworded “Exploration Initiated” final section before crescendo.
6. **Section order**: place Next Steps before Section 03; move Section 03 (Exploration) to second-to-last before crescendo, preserving the original JSX Section 03 header + its deep-dive container as a single block; add “Exploration Initiated” as the last section before crescendo.
7. **Lens animation repair**: add `-webkit-clip-path`, attach pointer handler to lens container, and update CSS variables with element-relative coordinates. Add touch support.
7. **Tenure clock**: update start date or compute based on confirmed baseline (1y 4m at current company).
8. **Print cleanup**: hide `.back-link` in `@media print`.
9. **Sticky TOC nav**: copy layout from `Home.jsx` into `AndrewThreshold.jsx` with tokenized colors and local CSS (no hardcoded hex). Anchor IDs must be:
   - `#threshold`
   - `#convergence`
   - `#tangibles`
   - `#questions`
   - `#next`
   - `#beyond`
10. **Bullets**: replace default list bullets with diamond markers in gold accent via CSS (`li::before` + `list-style: none`) for narrative/accordion content.
11. **Typography + accents**: adjust h3 sizing in merged sections for a smoother scale; change `.deep-dive-title` and other non-link blue accents to gold tokens; reserve blue for anchor links only.
12. **Links**: ensure Andrew Journey + TBC Research URLs match the latest provided links.
13. **Validation**: run `npm run build`, `npm run dev` (escalated if needed), and document results.

## Stop Conditions
- Missing/unclear tenure start date.
- Ambiguous placement for missing sections.
- Zone switching behavior not agreed upon.

## Decisions Locked
- Sticky nav IDs: `#threshold`, `#convergence`, `#tangibles`, `#questions`, `#next`, `#beyond`.
- Tenure baseline: 2024-10-04 (1y 4m as of 2026-01-04).

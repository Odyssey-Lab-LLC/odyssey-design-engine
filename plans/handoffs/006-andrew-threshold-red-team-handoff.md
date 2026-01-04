# Handoff: Andrew Threshold Fix Plan Red Team

**Date:** 2026-01-04  
**From:** Codex (GPT-5)  
**To:** Next Agent (Red Team)

---

## Context
We need to fix `sites/odyssey-lab/src/pages/AndrewThreshold.jsx` after merging HTML content. The page currently stays dark across narrative sections, missing FAQ, and has several functional/style issues. The user asked for an audit + plan first, then a red-team review by another agent.

## Primary Plan
See: `plans/_plans/006-andrew-threshold-fix-plan.md`

## Red Team Goals
- Identify gaps, risks, and missing steps in the plan.
- Flag rule conflicts or ambiguous requirements.
- Suggest safer or more efficient approaches.

## Key Requirements (User)
- Restore dark→light→dark transitions (hero/crescendo dark, narrative sections light).
- Add FAQ section; keep HTML accordion layout; remove top padding on `.accordion__content-inner`.
- Audit for other missing HTML sections (Sections 4–6, Next Steps, and new “Exploration Initiated” final section). Preserve the original JSX Section 03 header + deep-dive container together when reordering.
- Fix lens animation (currently not responding).
- Correct tenure clock to match Andrew’s 1y 4m at current company (assume start date Oct 4 2024 unless you flag issues).
- Ensure print view hides back-link button.
- Add sticky bottom TOC nav from `Home.jsx` (componentize or copy; avoid hardcoded colors if possible).
- Replace default bullets with diamond markers in gold accent.
- Adjust heading scale so h3 sits closer to h2; reserve blue for links (use gold for non-link accents).
- Sticky nav IDs (locked): `#threshold`, `#convergence`, `#tangibles`, `#questions`, `#next`, `#beyond`.
- Verify links:
  - https://andrew-odyssey.netlify.app
  - https://tbch-use-case-validation-research.netlify.app

## Known Constraints
- Token-first styling; avoid new hardcoded values.
- Page-specific components only (no extraction unless 3+ reuse).

## Open Questions
- None at the moment.

## Files Likely Touched
- `sites/odyssey-lab/src/pages/AndrewThreshold.jsx`

## Please Deliver
- A short critique list of plan weaknesses.
- Any missing tests/validation steps.
- Alternative approaches if the plan is risky.

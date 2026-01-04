---
plan: "homepage-polish"
version: "1.0.0"
created: "2026-01-04"
owner: "Codex"
status: "complete"
---

# Homepage Polish + OG Image Plan

## Rules Consulted
- `.rules/00-general.md` — No-guess clause, fail-fast on uncertainty.
- `.rules/10-react-standards.md` — JSX conventions and component boundaries.
- `.rules/10-design-system.md` — Token-first styling.
- `.rules/90-odyssey-project.md` — Site-specific vs shared scope.
- `AGENTS.md` — Planning/reporting requirements.

## Goals
- Add Open Graph images for the Andrew page only (PNG + JPG), with a dedicated commit.
- Fix only clearly broken homepage visuals (readability, spacing, escaped characters, missing breaks).
- Keep all changes scoped to the homepage files and avoid Andrew page regressions.
- Use Gemini JSX references for light/dark zone intent without porting Andrew styles.
- Produce a clear report of anything intentionally left untouched.

## Inputs (Read)
- `sites/odyssey-lab/index.html` (for baseline meta handling)
- `sites/odyssey-lab/src/pages/Home.jsx` or `sites/odyssey-lab/src/App.jsx` (actual homepage)
- `_workspace/init gem content delta test/gemini-base-b.jsx`
- `_workspace/init gem content delta test/gem-hero-and-light-zones.jsx`
- User-provided screenshots (local file paths for `view_image`)
- Existing OG image files: `this-is-odyssey-lab/og-image-andrew-threshold.png`, `this-is-odyssey-lab/og-image-andrew-threshold.jpg`

## Outputs (Write)
- `sites/odyssey-lab/public/images/andrew-threshold-og.png`
- `sites/odyssey-lab/public/images/andrew-threshold-og.jpg`
- `sites/odyssey-lab/src/pages/AndrewThreshold.jsx` (only for meta tag injection)
- `plans/reports/007-homepage-polish-report.md`
- `plans/lessons/007-homepage-polish-lessons.md`

## Step Plan

### A) OG Images (Isolated Commit)
1. Create `sites/odyssey-lab/public/images/` and copy the PNG + JPG into it.
2. Add Andrew-page-only meta tag injection in `AndrewThreshold.jsx` using `useEffect`:
   - Set or create `og:image` and `twitter:image` using `window.location.origin`.
   - Remove tags on unmount to avoid affecting other routes.
3. Stage only OG-related changes and commit + push.

### B) Homepage Polish (Post‑OG)
4. Confirm which file is the active homepage (`Home.jsx` vs `App.jsx`) and limit edits to that file.
5. Use Gemini reference JSX files to verify intended light/dark zone structure and typography without copying Andrew styles verbatim.
6. Apply only high-confidence fixes:
   - Remove/limit the "gauzy blur" overlay in dark sections (or restrict it to light zones).
   - Fix escaped characters (e.g., `\'` artifacts).
   - Restore missing paragraph breaks and spacing.
   - Correct obvious readability issues (contrast, overflow, gaps) that are evident from screenshots.
7. Run `npm run build` and `npm run dev` (escalated if needed).
8. Produce report/lessons with a list of items deliberately not changed due to uncertainty.

## Stop Conditions
- Homepage file unclear or conflicting references.
- OG tags require a canonical domain and none is provided.
- Screenshot evidence is insufficient to confirm a change is safe.

## Open Questions
1. Which file is the homepage in use (`sites/odyssey-lab/src/pages/Home.jsx` or `sites/odyssey-lab/src/App.jsx`)?
2. Is `window.location.origin` acceptable for OG image URLs, or do you want a fixed canonical domain?
3. Do you want the blur removed entirely or limited to light zones only?
4. Can you provide local paths to the screenshots for `view_image`?
5. Are there known strings with escaped characters you want fixed first?

## Decisions Locked
- Homepage route uses `sites/odyssey-lab/src/pages/Home.jsx` via `sites/odyssey-lab/src/App.jsx`.
- OG image URL uses `window.location.origin`.
- Gauzy blur should apply only to light-zone sections.
- Screenshots provided under `_workspace/home fix screens/`.

## Completion Notes
- OG image commit: `72d59f3`.
- Homepage polish applied to `sites/odyssey-lab/src/pages/Home.jsx`.
- Validation: `npm run build`, `npm run dev -- --host 0.0.0.0 --port 5173`.

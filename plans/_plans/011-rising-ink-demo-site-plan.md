# Plan: Rising Ink Demos Site + Governance Updates

## Decisions Locked
- **Structure:** `sites/rising-ink/` is a vertical container; the **single deployable site** for now is `sites/rising-ink/demos/` (Vercel root). Demos are routes/pages inside this site (single-page today, expandable later).
- **Speed-first exception:** Rising Ink demos may ship with hardcoded colors/spacing and custom Tailwind values. This will be codified as a rules update (see Governance Updates).
- **Config drift:** If `sites/postcss.config.js` and `sites/tailwind.config.js` are verified unused duplicates, remove them; otherwise leave in place for now.

---

## Understanding & Goals
- Build the **Rising Ink Demos** site now using `_workspace/georgi-gem/georgi-gem-1.jsx` as the first demo page.
- Prioritize **speed to publish** over design-system compliance for Rising Ink demos.
- Rising Ink is a **tattoo/piercing vertical** with a common single-page flow, but **site-level customization remains unique**.
- Long-term direction: converge on **Untitled UI React components** as the base, with Rising Ink-specific wrappers and logic.
- Short-term direction: standardize **section flow and page structure** first, then introduce a translation layer for shared logic.

## Constraints & Standards
- Follow conflict-checking hierarchy and stop on ambiguity.
- Use Vercel multi-site standards (`.rules/12-vercel-deployment.md`).
- Update system files when standards change (`.rules/00-rules-governance.md`).
- Rising Ink demos are allowed to ship with hardcoded values once the rule update lands.
- Avoid destructive changes without confirmation.

## Inputs
- `_workspace/georgi-gem/georgi-gem-1.jsx`
- `sites/odyssey-lab/` (structure reference)
- `config/vite.config.js`
- `package.json`
- `tailwind.config.js`, `postcss.config.js`
- `vercel.json`
- `AGENTS.md`, `ARCHITECTURE.md`, `README.md`

## Expected Outputs
- `sites/rising-ink/demos/index.html`
- `sites/rising-ink/demos/src/main.jsx`
- `sites/rising-ink/demos/src/App.jsx` (routes) and `sites/rising-ink/demos/src/pages/Georgi.jsx`
- `sites/rising-ink/demos/public/`
- `sites/rising-ink/demos/vercel.json` (if SPA routing)
- `config/vite.rising-ink.config.js` and npm scripts for Rising Ink builds
- System file updates documenting Rising Ink structure, demo workflow, and speed-first exceptions
- Cleanup of duplicate configs in `sites/` if unused

## Plan
1. **Audit current structure**
   - Inspect `sites/odyssey-lab` scaffolding and `config/vite.config.js`.
   - Verify whether `sites/postcss.config.js` and `sites/tailwind.config.js` are duplicates or unused.
2. **Governance updates for Rising Ink** 📋
   - Document the Rising Ink demos model (`sites/rising-ink/demos`) and vertical grouping under `sites/`.
   - Add a **speed-first exception** allowing hardcoded values in Rising Ink demos.
   - Update `AGENTS.md`, `ARCHITECTURE.md`, `README.md`, and the relevant `.rules/*` sections.
   - Run `python scripts/check-system-file-sync.py` after version bumps.
3. **Scaffold Rising Ink demos site**
   - Create `sites/rising-ink/demos/` structure mirroring `sites/odyssey-lab`.
   - Copy `_workspace/georgi-gem/georgi-gem-1.jsx` into `sites/rising-ink/demos/src/pages/Georgi.jsx`.
   - Wire `App.jsx` to render Georgi as the default route (`/`) for now.
   - Add required CSS/keyframes for custom animation classes used in the JSX.
4. **Build config + scripts**
   - Create `config/vite.rising-ink.config.js` with `root: ../sites/rising-ink/demos`.
   - Add `dev:rising-ink`, `build:rising-ink`, and `preview:rising-ink` scripts.
   - Ensure `build.outDir` is relative (`dist`).
5. **Vercel deployment wiring**
   - Add `sites/rising-ink/demos/vercel.json` if SPA routing is needed.
   - Document Vercel project settings (Root Directory: `sites/rising-ink/demos`, Output: `dist`).
6. **Validation**
   - Run Rising Ink dev server and production build.
   - Confirm no console errors on load.
7. **Finalize handoff artifacts**
   - Create completion report in `plans/reports/`.
   - Create lessons learned in `plans/lessons/`.

## Stop Conditions
- Rules update conflicts with existing governance files.
- Build output not landing under the site root `dist/`.
- Dev server/build errors or browser console errors.

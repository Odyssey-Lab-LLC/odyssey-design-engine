# Report: Rising Ink Demos Site + Governance Updates

## Summary
- Added Rising Ink demos site scaffolding under `sites/rising-ink/demos` and wired the Georgi demo page.
- Added Rising Ink speed-first exception to design-system rules and updated system files for vertical grouping.
- Added Rising Ink Vite config and npm scripts.
- Removed unused duplicate config files from `sites/`.

## Files Created
- `sites/rising-ink/demos/index.html`
- `sites/rising-ink/demos/src/main.jsx`
- `sites/rising-ink/demos/src/App.jsx`
- `sites/rising-ink/demos/src/pages/Georgi.jsx`
- `sites/rising-ink/demos/vercel.json`
- `config/vite.rising-ink.config.js`
- `plans/reports/011-rising-ink-demo-site-report.md`

## Files Modified
- `AGENTS.md`
- `ARCHITECTURE.md`
- `README.md`
- `CLAUDE.md`
- `KILO.md`
- `.rules/10-design-system.md`
- `.rules/11-design-system-extensions.md`
- `.rules/90-odyssey-project.md`
- `.cursor/rules/design-system.mdc`
- `.kilocode/rules/design-system.md`
- `package.json`

## Files Removed
- `sites/postcss.config.js`
- `sites/tailwind.config.js`

## Validation
- `python3 scripts/check-system-file-sync.py`
- `npm run build:rising-ink`

## Notes
- `python` not available in shell; used `python3` for sync check.
- No dev server or browser run in this session.

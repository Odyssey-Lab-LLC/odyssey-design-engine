# Report: Tailwind Content Scope Update

## Summary
- Narrowed Tailwind content globs to deployable site roots plus shared components.
- Removed broad `./sites/**/*` and `_workspace` scans to avoid accidental node_modules matching.
- Rebuilt Rising Ink demo to confirm warning is gone.

## Files Modified
- `tailwind.config.js`
- `.rules/90-odyssey-project.md`

## Validation
- `npm run build:rising-ink`

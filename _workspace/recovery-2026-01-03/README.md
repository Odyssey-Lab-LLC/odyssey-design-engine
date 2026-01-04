# Recovery Test Environments - 2026-01-03

## Purpose

This directory contains isolated test environments created during the recovery process when we lost track of the working homepage implementation during a refactoring attempt.

## What Happened

During an attempt to migrate from a root-level setup to a multi-site architecture (`sites/odyssey-lab`), the working homepage stopped rendering correctly. We lost track of which version was actually working and where it was located.

## Contents

### test-v1/
- Isolated test environment for `NewHomepage.jsx` (v0.9 - 1117 lines)
- Earlier version of the homepage
- Created to compare with v2 and identify which version was working

### test-v2/
- Isolated test environment for `NewHomepage-v2.jsx` (v1.0 - 1303 lines) 
- More complete version of the homepage
- This version was confirmed to be the working implementation

## Key Files

Both test environments included:
- `TestApp.jsx` - Copy of the homepage component
- `main.jsx` - Entry point
- `index.html` - HTML with Google Fonts
- `base.css` - Basic CSS for font loading
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

## Outcome

The v2 version (`NewHomepage-v2.jsx` / 1303 lines) was confirmed to be the working version. This content is now properly integrated into `sites/odyssey-lab/src/pages/Home.jsx` with all necessary configuration in place.

## Lessons Learned

See `plans/lessons/002-sites-recovery-and-reorganization.md` for detailed learnings from this recovery process.

## Archive Date

January 3, 2026

## Safe to Delete?

Yes, after verifying `sites/odyssey-lab` is working correctly. These are preserved for reference but are no longer needed for the running application.


---
lesson: "002"
date: "2026-01-03"
title: "Sites Recovery and Architecture Reorganization"
tags: ["recovery", "architecture", "multi-site", "css", "vite"]
---

# Lesson 002: Sites Recovery and Architecture Reorganization

## Context

During an attempt to migrate from a root-level React application to a multi-site architecture (`sites/odyssey-lab`), we lost track of the working homepage implementation. The refactoring process created confusion about:
- Which version of the homepage was actually working (V1 or V2)
- Where the working version was located (root, workspace, or sites)
- Why the migration to `sites/odyssey-lab` caused rendering to break

## What Went Wrong

### 1. Path Confusion During Migration
- Original working app was in project root (`main.jsx`, `index.html`)
- Migration to `sites/odyssey-lab` attempted to import from workspace using `@/_workspace/...` path
- The import path was incorrect and caused the component not to load properly

### 2. CSS Loading Issues
Multiple CSS-related problems compounded the rendering issues:
- **Missing Google Fonts** - `index.html` in sites didn't have font `<link>` tags
- **Tailwind Not Processing** - Config paths weren't set up correctly for the new location
- **Missing CSS Import** - Initial test setups forgot to import Tailwind's `index.css`

### 3. Import Path Mismatches
- `App.jsx` tried to import: `import NewHomepage from '@/_workspace/init gem content delta test/NewHomepage'`
- The `@` alias pointed to project root, making this path convoluted
- The actual component content (1303 lines) was already in `Home.jsx` but wasn't being used

### 4. Lost Context
- Couldn't remember if V1 (1117 lines) or V2 (1303 lines) was the working version
- Unclear what dependencies existed on root-level files
- Previous agent attempted "quick fixes" that made things worse instead of better

## How It Was Diagnosed

### 1. Systematic Isolation
Created completely isolated test environments:
- `_workspace/test-v1/` for testing `NewHomepage.jsx` (V1)
- `_workspace/test-v2/` for testing `NewHomepage-v2.jsx` (V2)
- Each with own `main.jsx`, `index.html`, Vite config, Tailwind config

### 2. Browser Inspection
Used browser developer tools to identify missing resources:
- Console errors revealed missing imports
- Network tab showed 404s for fonts and CSS
- Elements tab showed unstyled content (CSS not applied)

### 3. Configuration Tracing
Methodically traced how configs were discovered:
- Vite's `root` configuration determines starting point
- PostCSS/Tailwind search upward from Vite root
- Path aliases in Vite config affect import resolution

### 4. Discovery of Root Setup
Key breakthrough: Realized the original working version was running from project root:
- `main.jsx` in root imported V2 directly
- `index.css` in root had Tailwind directives
- `postcss.config.js` and `tailwind.config.js` in root
- This is why it stopped working when moved to `sites/`

## How It Was Fixed

### Phase 1: Isolated Testing (Recovery)
1. Created `_workspace/test-v2/` directory
2. Copied `NewHomepage-v2.jsx` → `TestApp.jsx`
3. Created minimal `main.jsx`, `index.html`
4. Created local Tailwind/PostCSS configs
5. Added Google Fonts to HTML
6. Bypassed Tailwind initially with `base.css` for faster iteration
7. Result: Confirmed V2 (1303 lines) was the working version

### Phase 2: Sites Migration (Implementation)
1. Updated `sites/odyssey-lab/src/App.jsx` to import local `Home` component
2. Added Google Fonts to `sites/odyssey-lab/index.html`
3. Verified Tailwind config scanned `sites/` directory
4. Confirmed Vite config pointed to `sites/odyssey-lab` as root
5. Tested dev server and verified in browser
6. Result: Working correctly at http://localhost:5173/

### Phase 3: Architecture Cleanup (Reorganization)
1. Archived test environments to `_workspace/recovery-2026-01-03/`
2. Moved shared configs from project root to `/sites/`:
   - `index.css` → `sites/index.css`
   - `postcss.config.js` → `sites/postcss.config.js`
   - `tailwind.config.js` → `sites/tailwind.config.js`
3. Updated Vite `@` alias to point to `/sites/` instead of project root
4. Updated Tailwind content paths to scan from new location
5. Removed temporary test files and configs
6. Cleaned up `package.json` scripts
7. Result: Clean architecture with site-related files in `/sites/`

## Key Learnings

### 1. Sites Can Use Shared Configs via Upward Search
**Pattern:** Vite's `root` is set to `sites/odyssey-lab/`, but PostCSS/Tailwind configs can live in parent directory (`/sites/`)

**Why it works:** Build tools search upward through parent directories if config not found in root.

**Benefit:** Multiple sites can share configs without duplication:
```
/sites/
├── postcss.config.js    # Shared
├── tailwind.config.js   # Shared
├── index.css            # Shared
├── odyssey-lab/
│   └── src/
└── future-site/
    └── src/
```

### 2. The `@` Alias Pattern
**Purpose:** Provides clean imports for shared resources

**Configuration:**
```javascript
resolve: {
  alias: {
    '@': path.resolve(__dirname, '../sites'),  // Points to sites directory
    '@shared': path.resolve(__dirname, '../shared'),
    '@sites': path.resolve(__dirname, '../sites')
  }
}
```

**Usage:**
```javascript
import '@/index.css'  // Resolves to /sites/index.css
```

**Key insight:** The `@` alias should point to where shared site resources live, not necessarily project root.

### 3. Multi-Site Architecture Best Practice
**Principle:** Everything site-related should live in `/sites/` for clear separation of concerns.

**Structure:**
```
/root
├── config/           # Build tool configs only
├── shared/           # Cross-site shared components
├── _workspace/       # Research/experiments
└── sites/            # Everything site-related
    ├── index.css          # Shared Tailwind directives
    ├── postcss.config.js  # Shared PostCSS config
    ├── tailwind.config.js # Shared Tailwind config
    └── odyssey-lab/       # Individual site
```

**Benefits:**
- Clear ownership boundaries
- Easy to reason about dependencies
- Cleaner project root
- Better for future multi-site expansion

### 4. Test Environments Are Valuable
**When to use:** When you've lost track of what's working or where it's located.

**Pattern:**
1. Create isolated environment in `_workspace/`
2. Copy suspect component with minimal dependencies
3. Test in isolation
4. Archive for future reference when done

**Value:** Provides certainty without risking the main codebase.

### 5. CSS Loading Checklist
When CSS isn't applying, check:
- [ ] Tailwind directives imported (`@tailwind base; @tailwind components; @tailwind utilities;`)
- [ ] CSS file imported in entry point (`import '@/index.css'`)
- [ ] Google Fonts linked in HTML (if using external fonts)
- [ ] Tailwind `content` paths correctly scan source files
- [ ] PostCSS config discoverable by build tool
- [ ] Vite alias correctly resolves CSS import path

### 6. Progressive Problem Solving
**Avoid:** Making multiple changes simultaneously and losing track of what helped.

**Do:**
1. Make one change at a time
2. Test after each change
3. Document what worked
4. Only proceed when you understand why it worked

**In this case:** We initially tried fixing everything at once (aliases, Tailwind, fonts, imports) and created more confusion. Isolating to test environments forced us to solve one problem at a time.

## Architectural Decisions

### Decision 1: Move Configs to /sites/
**Rationale:** Everything site-related should live together for clear separation of concerns.

**Before:**
```
/root
├── index.css
├── postcss.config.js
├── tailwind.config.js
└── sites/
    └── odyssey-lab/
```

**After:**
```
/root
├── sites/
    ├── index.css          # Shared by all sites
    ├── postcss.config.js
    ├── tailwind.config.js
    └── odyssey-lab/
```

**Trade-offs:**
- ✅ Cleaner root directory
- ✅ Clear "this is site-related" grouping
- ✅ Easier to reason about what affects sites
- ⚠️ Slightly less conventional (many projects keep configs in root)

**Conclusion:** Benefits outweigh convention. This is a multi-site system, so grouping makes sense.

### Decision 2: Archive Test Environments Instead of Deleting
**Rationale:** These represent the recovery process and might be useful for reference.

**Location:** `_workspace/recovery-2026-01-03/`

**Contents:**
- `test-v1/` - V1 isolated test setup
- `test-v2/` - V2 isolated test setup
- `README.md` - Documentation of what these were for

**Safe to delete?** Yes, after confirming `sites/odyssey-lab` works correctly. Kept for historical reference.

### Decision 3: Update `@` Alias to Point to /sites/
**Rationale:** The `@` alias should point to where shared site resources live.

**Change:**
```javascript
// Before
'@': path.resolve(__dirname, '..')  // Project root

// After
'@': path.resolve(__dirname, '../sites')  // Sites directory
```

**Impact:** `import '@/index.css'` now resolves to `/sites/index.css` instead of `/index.css`.

**Benefit:** More semantically correct - `@` means "shared site resources" not "project root."

## Validation Checklist for Future Migrations

Use this checklist when migrating components or setting up new sites:

### Pre-Migration
- [ ] Document current working state (URLs, ports, what's rendering correctly)
- [ ] Identify all dependencies (fonts, CSS, images, external resources)
- [ ] Note all import paths and aliases
- [ ] Take screenshots of working state for comparison

### During Migration
- [ ] Check if imports use `@` alias or relative paths
- [ ] Verify Google Fonts in HTML `<head>`
- [ ] Confirm Tailwind content paths scan correct directories
- [ ] Verify PostCSS config discoverable from Vite root
- [ ] Update Vite aliases if directory structure changed
- [ ] Test one change at a time

### Post-Migration
- [ ] Dev server starts without errors
- [ ] Browser console shows no errors
- [ ] Network tab shows no 404s (fonts, CSS, images)
- [ ] All fonts load correctly
- [ ] Tailwind styles apply
- [ ] Test key interactions (accordions, navigation, modals, etc.)
- [ ] Compare screenshots to pre-migration state

### If Something Breaks
1. **Don't panic and make random changes** - This makes diagnosis harder
2. **Create isolated test environment** - Eliminate variables systematically
3. **Check browser console and network tab** - Let the browser tell you what's missing
4. **Trace import chains** - Where is each resource supposed to come from?
5. **Compare working vs broken** - What's different about the setup?

## Prevention Strategies

### 1. Incremental Migration
**Don't:** Try to move everything at once.
**Do:** Migrate one piece at a time with validation at each step.

**Example:**
1. ✅ Set up new directory structure
2. ✅ Test with simple component
3. ✅ Add CSS loading
4. ✅ Verify fonts
5. ✅ Migrate actual content

### 2. Maintain Working Reference
**Don't:** Delete or modify the working version until new version is confirmed working.
**Do:** Keep working version running while building new setup.

**In this case:** We preserved the root setup while building `sites/odyssey-lab`, allowing us to compare.

### 3. Document Dependencies
**Don't:** Assume you'll remember what depends on what.
**Do:** Explicitly document:
- What imports what
- What aliases point where
- What configs are discovered by what tools
- What external resources are loaded

### 4. Test in Isolation First
**Don't:** Try to fix things in the main codebase when you're unsure.
**Do:** Create minimal reproduction in `_workspace/` to understand the problem.

### 5. Read the Error Messages
**Don't:** Guess at solutions without understanding the problem.
**Do:** Read console errors, 404s, and warnings carefully. They usually tell you exactly what's wrong.

## Related Documentation

- `ARCHITECTURE.md` - Updated with new `/sites/` structure
- `_workspace/recovery-2026-01-03/README.md` - Archive of test environments
- `plans/lessons/001-v1-completion-revised-lessons.md` - Previous lessons
- `sites/odyssey-lab/src/.backup-2026-01-03-215007/` - Backup before successful fix

## Tags for Future Search

`#recovery` `#multi-site` `#architecture` `#css-loading` `#vite-config` `#path-aliases` `#tailwind` `#migration` `#debugging`



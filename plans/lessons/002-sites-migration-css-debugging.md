# Lesson 002: Sites Migration CSS Loading Issue

**Date:** 2026-01-03  
**Context:** Migration of working homepage from root to `sites/odyssey-lab/` structure  
**Issue:** Site broke after migration - no CSS/Tailwind styles applied  
**Resolution:** Fixed CSS import and Tailwind content paths  

---

## What Went Wrong

After migrating the working homepage to `sites/odyssey-lab/`, the site rendered with broken styling - no Tailwind classes were applied, fonts weren't loading, and all visual styling was missing.

### Root Causes Identified

1. **Missing CSS Import in main.jsx**
   - The migrated `main.jsx` was missing `import '@/index.css'`
   - Without this import, Tailwind's CSS directives were never loaded into the page
   - This was the **critical** missing piece

2. **Incorrect Tailwind Content Paths**
   - `tailwind.config.js` had `content: ["./sites/**/*.html", "./sites/**/*.{js,jsx,ts,tsx}"]`
   - But Vite's `root` is set to `sites/odyssey-lab/`, so Tailwind looked for `sites/odyssey-lab/sites/**/*` (wrong!)
   - Needed to be relative to Vite root: `"./**/*.{js,jsx,ts,tsx}"`

3. **Architecture Assumption Error**
   - Initially assumed `App.jsx` was a wrapper importing `Home.jsx` from `pages/`
   - Actually, `App.jsx` **IS** the full 1303-line homepage component
   - `pages/Home.jsx` is a separate, unused copy

---

## How It Was Diagnosed

### Evidence-Based Debugging with Instrumentation

1. **Initial Hypothesis:** Components not rendering
   - Added logs to `main.jsx`, `App.jsx`, `Home.jsx`
   - **Finding:** Only `main.jsx` executed; no logs from other files

2. **Discovered Architecture:** 
   - Read `App.jsx` - found it contained the full homepage code
   - `App.jsx` exports as default function, not importing from elsewhere

3. **CSS Loading Analysis:**
   - Searched for `index.css` - found it in project root with Tailwind directives
   - Checked `main.jsx` - **NO CSS IMPORT** found
   - This was the smoking gun

4. **Tailwind Configuration Check:**
   - Reviewed `tailwind.config.js` content paths
   - Realized paths were absolute from project root, not relative to Vite root
   - Vite root is `sites/odyssey-lab/`, so paths needed to be relative to that

---

## How It Was Fixed

### Fix 1: Add CSS Import to main.jsx

```javascript
import '@/index.css'
```

- Uses the `@` alias which points to project root (configured in `vite.config.js`)
- Loads Tailwind's base/components/utilities directives
- Triggers PostCSS to process the CSS with Tailwind plugin

### Fix 2: Update Tailwind Content Paths

**Before:**
```javascript
content: [
  "./sites/**/*.html",
  "./sites/**/*.{js,jsx,ts,tsx}",
]
```

**After:**
```javascript
content: [
  "./index.html",
  "./**/*.{js,jsx,ts,tsx}",
  "./**/*.html",
]
```

- Paths now relative to Vite root (`sites/odyssey-lab/`)
- Correctly scans all JSX files in the site directory
- Tailwind generates classes for all utilities used in components

### Fix 3: Update PostCSS Config (Minor)

Added explicit Tailwind config path:
```javascript
tailwindcss: { config: './tailwind.config.js' }
```

This ensures PostCSS finds the config when running from the Vite root.

---

## Key Learnings

### 1. CSS Import is Non-Negotiable
- Tailwind (and any CSS) must be explicitly imported somewhere in the JS entry chain
- Vite doesn't auto-inject CSS - it needs an import statement
- **Always check:** Is `index.css` imported in `main.jsx`?

### 2. Vite Root Affects All Relative Paths
- When `root` is set to a subdirectory, ALL relative paths are relative to that root
- This includes:
  - Tailwind `content` paths
  - PostCSS config lookups
  - Import aliases (if not absolute)
- **Always think:** What is Vite's root? Are my paths relative to that?

### 3. File Structure Assumptions Can Mislead
- Don't assume file roles based on names
- `App.jsx` could be a wrapper OR the full component
- **Always read** the actual file contents before instrumenting

### 4. Debug with Evidence, Not Assumptions
- Instrumentation logs revealed the true architecture
- Without logs, would have continued debugging the wrong files
- **Runtime evidence > code reading** for understanding execution flow

### 5. Multi-Site Architecture Requires Careful Config Management
- Shared configs (`tailwind.config.js`, `postcss.config.js`) in project root
- Vite root set to individual site directory
- Path resolution must account for this separation
- **Document:** Where each config lives and what paths are relative to

---

## Validation Checklist for Future Migrations

When migrating a component/page to `sites/` structure:

- [ ] **CSS Import:** Does `main.jsx` import the CSS file?
- [ ] **Tailwind Content:** Are content paths relative to Vite root?
- [ ] **Vite Root:** Is `vite.config.js` root set to the site directory?
- [ ] **Path Aliases:** Do Vite aliases point to correct absolute paths?
- [ ] **PostCSS Config:** Is Tailwind config path explicit?
- [ ] **Dev Server:** Does `npm run dev` start without errors?
- [ ] **Browser Test:** Does the page render with proper styling?
- [ ] **Console Check:** Are there any runtime errors in browser console?

---

## Architecture Insights

### Current Working Setup

**Project Root:**
- `index.css` - Tailwind directives
- `tailwind.config.js` - Shared Tailwind config
- `postcss.config.js` - Shared PostCSS config

**Vite Config (`config/vite.config.js`):**
- `root: path.resolve(__dirname, '../sites/odyssey-lab')`
- Aliases: `@` → project root, `@shared` → shared/, `@sites` → sites/

**Site (`sites/odyssey-lab/`):**
- `src/main.jsx` - Imports `@/index.css` (critical!)
- `src/App.jsx` - Full 1303-line homepage component
- `index.html` - Entry HTML with root div

**This architecture works because:**
1. Shared configs live in project root (accessible to all sites)
2. Each site has its own directory under `sites/`
3. Vite's root is set to the individual site
4. Path aliases bridge the gap between site root and project root
5. CSS import explicitly loads Tailwind from project root

---

## Related Files

- `sites/odyssey-lab/src/main.jsx` - Entry point with CSS import
- `tailwind.config.js` - Content paths for style generation
- `config/vite.config.js` - Vite root and alias configuration
- `postcss.config.js` - PostCSS/Tailwind processing

---

## Status

✅ **Resolved:** Site now renders correctly with full Tailwind styling  
✅ **Validated:** Hard refresh confirms styles persist  
✅ **Documented:** Architecture and debugging process captured  


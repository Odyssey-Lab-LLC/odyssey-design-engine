---
handoff_id: 002-phase-2
phase_number: 2
phase_name: Migrate Home + Initial Router
from_agent: Phase 1 (Setup)
to_agent: Execution Agent
date: 2026-01-03
estimated_time: 20-25 mins
estimated_cost: $2-4
dependencies: Phase 1 complete, pages/ directory exists, App.jsx.backup exists, react-router-dom installed
---

# Phase 2: Migrate Home.jsx + Initial Router Setup

## 🎯 Phase Objective

**Move current App.jsx content to pages/Home.jsx AND refactor App.jsx to a router wrapper with the `/` route. This is an ATOMIC operation - both changes happen together.**

---

## 📌 Prerequisites (Verify Before Starting)

- [ ] Phase 1 status is ✅ Complete in meta-plan
- [ ] `sites/odyssey-lab/src/pages/` directory exists
- [ ] `sites/odyssey-lab/src/App.jsx` exists (source file)
- [ ] `sites/odyssey-lab/src/App.jsx.backup` exists (rollback point)
- [ ] `react-router-dom` is installed (verify in package.json)

**Reference meta-plan for:** File inventory, routing architecture.
**Meta-plan location:** `plans/002-html-to-react-migration-META.md`

---

## 🖥️ Dev Server Status

- **Needs dev server:** Yes (for validation at end)
- **Expected state before phase:** Stopped
- **Start command:** `npm run dev` (wait for "Local: http://localhost:5173")
- **After phase:** Keep running (Phase 3 will need it)
- **Why:** Must validate that `/` route works after router refactor

---

## 📁 File Paths Reference

**Project root:** `/Users/brandonmcpeak/GitHub & Projects/odyssey-design-engine/`

**Paths with spaces (ALWAYS use quotes in shell):**
```bash
# Good:
cat "_workspace/andrew gem merge/andrew-1-call-to-adventure.html"

# Bad (BREAKS):
cat _workspace/andrew gem merge/andrew-1-call-to-adventure.html
```

**This phase's key paths:**
- Source: `sites/odyssey-lab/src/App.jsx` (~1302 lines)
- Target: `sites/odyssey-lab/src/pages/Home.jsx`
- Router: `sites/odyssey-lab/src/App.jsx` (will be refactored to ~25 lines)
- Backup: `sites/odyssey-lab/src/App.jsx.backup`

---

## 🧠 Phase-Specific Context

This phase is **CRITICAL for incremental router integration**. We're doing TWO things atomically:

1. **Copy** App.jsx content → Home.jsx (with rename from `App` to `Home`)
2. **Refactor** App.jsx to router wrapper with ONLY the `/` route initially

**Why atomic:** If we copy but don't refactor, the app has two copies of the same content. If we refactor first, App.jsx breaks because Home.jsx doesn't exist yet. Must be done together.

**Router starts minimal:** Only `/` route. Phases 3-4 will add routes incrementally.

---

## ⚠️ Tool Safety Protocol

**Before using ANY tool:**
1. List available tools, verify tool exists
2. Check ALL required parameters
3. If tool fails 2x, use fallback method
4. Stop condition: Don't retry malformed calls indefinitely

**Fallback strategies for this phase:**
- If file read fails: Verify file path, check permissions
- If file write fails: Verify directory exists, check disk space
- If imports break: Check path aliases in vite.config.js
- If router doesn't work: Check react-router-dom version, verify imports

---

## 🚀 Execution Steps

### Step 2.1: Verify Backup Exists

**What:** Confirm rollback point is intact.

**How:**
```bash
ls -la sites/odyssey-lab/src/App.jsx.backup
wc -l sites/odyssey-lab/src/App.jsx.backup
```

**Expected:** File exists with ~1300 lines.

**Stop if:** Backup missing - recreate before proceeding.

**Time:** 1 minute

---

### Step 2.2: Read Current App.jsx

**What:** Get the current App.jsx content.

**How:**
```bash
cat sites/odyssey-lab/src/App.jsx
```

**Note:** File is ~1302 lines. Read in full.

**Expected:** Full React component with GlobalStyles, content sections, animations.

**Time:** 1-2 minutes

---

### Step 2.3: Create Home.jsx

**What:** Create Home.jsx with the App.jsx content.

**Path:** `sites/odyssey-lab/src/pages/Home.jsx`

**Changes needed:**
1. Keep ALL existing content (GlobalStyles, imports, components, JSX)
2. Rename the function from `App` to `Home`
3. Update export: `export default Home;`

**Template structure:**
```jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// ... all other existing imports ...

const GlobalStyles = () => (
  // ... exact copy of existing GlobalStyles ...
);

// ... all existing internal components (Accordion, cards, etc.) ...

function Home() {  // <-- Renamed from App
  // ... all existing state, effects, handlers ...
  
  return (
    <>
      <GlobalStyles />
      {/* ... all existing JSX ... */}
    </>
  );
}

export default Home;  // <-- Updated export name
```

**DO NOT:**
- Remove any styles
- Change any component logic
- "Clean up" or refactor anything
- Remove any internal components (Accordion, etc.)

**Time:** 5-8 minutes

---

### Step 2.4: Verify Home.jsx Created

**What:** Confirm Home.jsx exists with correct content.

**How:**
```bash
# Check file exists
ls -la sites/odyssey-lab/src/pages/Home.jsx

# Check it has content (line count similar to App.jsx)
wc -l sites/odyssey-lab/src/pages/Home.jsx
```

**Expected:**
- File exists
- ~1300 lines (similar to App.jsx)

**Stop if:** File not created or significantly smaller.

**Time:** 1 minute

---

### Step 2.5: Refactor App.jsx to Router Wrapper

**What:** Replace App.jsx with minimal router wrapper.

**IMPORTANT:** Replace the ENTIRE App.jsx with this EXACT code:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Write to:** `sites/odyssey-lab/src/App.jsx` (overwrites existing)

**Key points:**
- ONLY the `/` route for now (Phases 3-4 add more)
- NO GlobalStyles in App.jsx (Home.jsx has its own)
- NO shared layout wrapper (page sovereignty)
- Simple, minimal router

**Time:** 3-5 minutes

---

### Step 2.6: Verify App.jsx Structure

**What:** Confirm App.jsx is now the router wrapper.

**How:**
```bash
wc -l sites/odyssey-lab/src/App.jsx
cat sites/odyssey-lab/src/App.jsx
```

**Expected:**
- ~20-25 lines (not ~1300)
- Contains BrowserRouter, Routes, Route
- Imports Home from './pages/Home'

**Stop if:** App.jsx still has old content.

**Time:** 1 minute

---

### Step 2.7: Start Dev Server & Test

**What:** Verify the route works.

**How:**
```bash
npm run dev
```

**Expected:**
- Dev server starts without errors
- No import errors in console

**Test in browser:**
1. Navigate to `http://localhost:5173/`
2. Check:
   - [ ] Page loads (same content as before)
   - [ ] All sections visible
   - [ ] Accordions work
   - [ ] Animations play
   - [ ] No console errors

**Stop if:** 
- Build fails → Check import paths
- 404 at `/` → Check route definition
- Console errors → Check component export

**Time:** 3-5 minutes

---

### Step 2.8: Test Route Refresh

**What:** Verify direct URL access works.

**How:**
1. While on `http://localhost:5173/`, refresh the page (F5)
2. Page should reload correctly (not 404)

**Expected:** Page reloads, same content appears.

**Time:** 1 minute

---

## ✅ Post-Phase Validation

**Validation A: Home.jsx Exists**
- [ ] `sites/odyssey-lab/src/pages/Home.jsx` exists
- [ ] File has ~1300 lines
- [ ] Function named `Home` (not `App`)
- [ ] Export is `export default Home`

**Validation B: App.jsx is Router**
- [ ] App.jsx is now ~20-25 lines
- [ ] Contains BrowserRouter, Routes, Route
- [ ] Imports Home from './pages/Home'
- [ ] NO GlobalStyles in App.jsx

**Validation C: Route Works**
- [ ] Dev server runs without errors
- [ ] `/` loads Home content
- [ ] Page refresh works
- [ ] No console errors

**Validation D: Visual Parity**
- [ ] Page looks identical to before
- [ ] All interactive elements work

---

## 🎯 Success Criteria

Phase is DONE when:
- [x] Home.jsx exists at `sites/odyssey-lab/src/pages/Home.jsx`
- [x] Contains full App.jsx content (renamed to Home)
- [x] App.jsx refactored to router wrapper (~25 lines)
- [x] Dev server runs without errors
- [x] `/` route renders Home correctly
- [x] Page refresh works (no 404)
- [x] No console errors in browser
- [x] App.jsx.backup still intact

---

## 🛑 Stop Conditions

- [ ] If Home.jsx can't import (syntax error), STOP and fix
- [ ] If dev server won't start, STOP and check import paths
- [ ] If `/` route 404s, STOP and check route definition
- [ ] If visual differences appear, STOP and investigate
- [ ] If cost exceeds $6, STOP (this should be straightforward)

---

## 📦 Outputs

**Files created:**
- `sites/odyssey-lab/src/pages/Home.jsx` (migrated from App.jsx)

**Files modified:**
- `sites/odyssey-lab/src/App.jsx` (refactored to router wrapper)

**Decisions made:**
- Router uses BrowserRouter (not HashRouter)
- No shared layout wrapper (page sovereignty)
- Only `/` route initially (incremental addition)

---

## 🔄 Handoff to Next Phase

**What Phase 3 needs to know:**
- Files created: Home.jsx at pages/Home.jsx
- Router: Initial setup complete with `/` route only
- Dev server: Confirmed working, KEEP RUNNING
- Visual parity: Confirmed (page looks same as before)
- Any deviations: Document if anything different

**Update meta-plan status:**
```markdown
| 2 | `002-phase-2-migrate-home.md` | ✅ Complete | [date/time] | [date/time] | $[X] | [X] mins | [issues or "None"] |
```

---

## ⏱️ Time Budget

- Estimated: 20-25 minutes
- If exceeds estimate by 50% (>37 mins), STOP and reassess

## 💰 Cost Budget & Progress Monitoring

- Estimated: $2-4

**Monitor PROGRESS, not just cost:**

**Green flag:** Cost at $4, phase completes → Continue (worth it)
**Yellow flag:** Cost at 1.5× $4, phase 50% done → Continue cautiously
**Red flag:** Cost at 2× $4, phase <25% done → STOP (something wrong)

**Better abort signal: Time stuck without progress**
- >15 mins debugging same error with no code changes → STOP
- Same tool call fails 3+ times → Use fallback or STOP
- >30 mins on phase with <50 lines of code written → STOP
- Cost rising but files being created → Acceptable
- Cost rising with NO file changes → STOP (tool loop)

---

## See Also

- Meta-plan: `plans/002-html-to-react-migration-META.md`
- Previous: `plans/handoffs/002-phase-1-setup.md`
- Next: `plans/handoffs/002-phase-3-convert-andrew-1.md`
- React Router docs: https://reactrouter.com/


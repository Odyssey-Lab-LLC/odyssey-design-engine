---
handoff_id: 002-phase-2
phase_number: 2
phase_name: Migrate Home.jsx
from_agent: Phase 1 (Infrastructure)
to_agent: Execution Agent
date: 2026-01-03
estimated_time: 15-20 mins
estimated_cost: $2-3
dependencies: Phase 1 complete, pages/ directory exists, App.jsx.backup exists
---

# Phase 2: Migrate Home.jsx

## 🎯 Phase Objective

**Move current App.jsx content to pages/Home.jsx and verify it works as a standalone page component.**

---

## 📌 Prerequisites (Verify Before Starting)

- [ ] Phase 1 status is ✅ Complete in meta-plan
- [ ] `sites/odyssey-lab/src/pages/` directory exists
- [ ] `sites/odyssey-lab/src/App.jsx` exists (source file)
- [ ] `sites/odyssey-lab/src/App.jsx.backup` exists (rollback point)

**Reference meta-plan for:** File inventory, routing architecture.
**Meta-plan location:** `plans/002-html-to-react-migration-META.md`

---

## 🧠 Phase-Specific Context

This is the **simplest migration** - the file is already valid React/JSX. We're just:
1. Copying content to new location
2. Adjusting exports
3. Verifying it works standalone

**Why this phase exists:** Proves the pattern works before complex HTML conversions.

**No changes to content** - keep all existing styles, components, logic intact.

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

---

## 🚀 Execution Steps

### Step 2.1: Read Current App.jsx

**What:** Get the current App.jsx content.

**How:**
```bash
cat sites/odyssey-lab/src/App.jsx
```

**Note:** File is ~1302 lines. Read in full.

**Expected:** Full React component with GlobalStyles, content sections, animations.

**Time:** 1-2 minutes

---

### Step 2.2: Create Home.jsx

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

### Step 2.3: Verify File Created

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

### Step 2.4: Temporary Import Test

**What:** Verify Home.jsx can be imported (optional quick test).

**How:** Temporarily modify App.jsx to import Home:

```jsx
// Temporary test in App.jsx (will be refactored in Phase 5)
import Home from './pages/Home';

function App() {
  return <Home />;
}

export default App;
```

**This is a TEMPORARY change** - will be properly refactored in Phase 5 (Router Integration).

**Time:** 2-3 minutes

---

### Step 2.5: Run Dev Server Test

**What:** Verify page renders correctly.

**How:**
```bash
npm run dev
```

**Expected:**
- Dev server starts without errors
- Page renders at localhost:5173
- Visual appearance identical to before
- No console errors

**Check in browser:**
- [ ] Page loads
- [ ] All sections visible
- [ ] Accordions work
- [ ] Animations play
- [ ] No console errors

**Stop if:** Build fails or visual differences appear.

**Time:** 3-5 minutes

---

### Step 2.6: Revert App.jsx (If Modified)

**What:** If you made temporary changes to App.jsx for testing, revert them.

**How:**
```bash
cp sites/odyssey-lab/src/App.jsx.backup sites/odyssey-lab/src/App.jsx
```

**Why:** App.jsx refactoring happens in Phase 5. Keep it original for now.

**Validation:**
```bash
diff sites/odyssey-lab/src/App.jsx sites/odyssey-lab/src/App.jsx.backup
```

**Expected:** No differences (files identical).

**Time:** 1 minute

---

## ✅ Post-Phase Validation

**Validation A: File Exists**
- [ ] `sites/odyssey-lab/src/pages/Home.jsx` exists
- [ ] File has ~1300 lines

**Validation B: Content Correct**
- [ ] Function named `Home` (not `App`)
- [ ] Export is `export default Home`
- [ ] All GlobalStyles content preserved
- [ ] All components preserved

**Validation C: Import Works**
- [ ] Can be imported without errors
- [ ] Dev server starts successfully

**Validation D: Visual Parity**
- [ ] Page looks identical to before
- [ ] All interactive elements work

---

## 🎯 Success Criteria

Phase is DONE when:
- [x] Home.jsx exists at `sites/odyssey-lab/src/pages/Home.jsx`
- [x] Contains full App.jsx content (renamed to Home)
- [x] Dev server runs without errors
- [x] Page renders identically to original
- [x] No console errors in browser
- [x] App.jsx.backup still intact

---

## 🛑 Stop Conditions

- [ ] If Home.jsx can't import (syntax error), STOP and fix
- [ ] If dev server won't start, STOP and check import paths
- [ ] If visual differences appear, STOP and investigate
- [ ] If cost exceeds $4, STOP (this is a simple copy operation)

---

## 📦 Outputs

**Files created:**
- `sites/odyssey-lab/src/pages/Home.jsx` (migrated from App.jsx)

**Files modified:**
- None (App.jsx temporary changes reverted)

**Decisions made:**
- None (straightforward copy)

---

## 🔄 Handoff to Next Phase

**What Phase 3 needs to know:**
- Files created: Home.jsx at pages/Home.jsx
- Dev server: Confirmed working
- Visual parity: Confirmed
- Any deviations: Document if anything different

**Update meta-plan status:**
```markdown
| 2 | `002-phase-2-migrate-home.md` | ✅ Complete | [date/time] | [date/time] | $[X] | [X] mins | [issues or "None"] |
```

---

## ⏱️ Time Budget

- Estimated: 15-20 minutes
- If exceeds estimate by 50% (>30 mins), STOP and reassess

## 💰 Cost Budget

- Estimated: $2-3
- If exceeds $4, STOP and report

---

## See Also

- Meta-plan: `plans/002-html-to-react-migration-META.md`
- Phase 1: `plans/handoffs/002-phase-1-infrastructure.md`
- Next phase: `plans/handoffs/002-phase-3-convert-andrew-1.md`


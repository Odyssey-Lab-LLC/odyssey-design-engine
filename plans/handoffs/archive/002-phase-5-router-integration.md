---
handoff_id: 002-phase-5
phase_number: 5
phase_name: Router Integration
from_agent: Phase 4 (Convert andrew-gem-2)
to_agent: Execution Agent
date: 2026-01-03
estimated_time: 15-20 mins
estimated_cost: $2-3
dependencies: Phase 4 complete, all 3 page components exist
---

# Phase 5: Router Integration

## 🎯 Phase Objective

**Refactor App.jsx from a page component to a router wrapper that serves all 3 page components at their respective routes.**

---

## 📌 Prerequisites (Verify Before Starting)

- [ ] Phase 4 status is ✅ Complete in meta-plan
- [ ] All 3 page components exist:
  - [ ] `sites/odyssey-lab/src/pages/Home.jsx`
  - [ ] `sites/odyssey-lab/src/pages/CallToAdventure.jsx`
  - [ ] `sites/odyssey-lab/src/pages/ThresholdConvergence.jsx`
- [ ] `react-router-dom` is installed (from Phase 1)
- [ ] `sites/odyssey-lab/src/App.jsx.backup` exists (rollback point)

**Reference meta-plan for:** Routing architecture.
**Meta-plan location:** `plans/002-html-to-react-migration-META.md`

---

## 🧠 Phase-Specific Context

**Current App.jsx:** Full page component (~1302 lines) with embedded GlobalStyles and content.

**Target App.jsx:** Minimal router wrapper (~20-30 lines) that imports and routes to page components.

**Route structure:**
```
/                          → Home.jsx
/call-to-adventure         → CallToAdventure.jsx
/threshold-convergence     → ThresholdConvergence.jsx
```

**No layout wrapper** - Maximum page sovereignty. Each page handles its own header/footer.

---

## ⚠️ Tool Safety Protocol

**Before using ANY tool:**
1. List available tools, verify tool exists
2. Check ALL required parameters
3. If tool fails 2x, use fallback method
4. Stop condition: Don't retry malformed calls indefinitely

**Fallback strategies for this phase:**
- If router import fails: Check react-router-dom version, reinstall
- If route doesn't work: Check component export, check path spelling
- If crash on navigation: Check for import errors in page components

---

## 🚀 Execution Steps

### Step 5.1: Verify Backup Still Exists

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

### Step 5.2: Create New App.jsx (Router Wrapper)

**What:** Replace entire App.jsx with router wrapper.

**Target content:**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CallToAdventure from './pages/CallToAdventure';
import ThresholdConvergence from './pages/ThresholdConvergence';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call-to-adventure" element={<CallToAdventure />} />
        <Route path="/threshold-convergence" element={<ThresholdConvergence />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**Write to:** `sites/odyssey-lab/src/App.jsx` (overwrites existing)

**Important notes:**
- NO GlobalStyles in App.jsx (each page has its own)
- NO shared layout wrapper
- Simple, minimal router
- Each page is fully independent

**Time:** 3-5 minutes

---

### Step 5.3: Verify Import Paths

**What:** Ensure all imports resolve correctly.

**Check:**
```bash
# Verify all page files exist
ls -la sites/odyssey-lab/src/pages/Home.jsx
ls -la sites/odyssey-lab/src/pages/CallToAdventure.jsx
ls -la sites/odyssey-lab/src/pages/ThresholdConvergence.jsx
```

**Expected:** All 3 files exist.

**Time:** 1 minute

---

### Step 5.4: Run Dev Server

**What:** Start dev server and verify no errors.

**How:**
```bash
npm run dev
```

**Expected:**
- Server starts without errors
- No import errors in console
- No React Router errors

**Stop if:** Dev server won't start. Check import paths and component exports.

**Time:** 2-3 minutes

---

### Step 5.5: Test All Routes

**What:** Verify each route works.

**Test in browser:**

1. **Home route (`/`):**
   - Navigate to `http://localhost:5173/`
   - [ ] Page loads
   - [ ] Content renders correctly
   - [ ] No console errors

2. **CallToAdventure route (`/call-to-adventure`):**
   - Navigate to `http://localhost:5173/call-to-adventure`
   - [ ] Page loads
   - [ ] Content renders correctly
   - [ ] No console errors

3. **ThresholdConvergence route (`/threshold-convergence`):**
   - Navigate to `http://localhost:5173/threshold-convergence`
   - [ ] Page loads
   - [ ] Content renders correctly
   - [ ] No console errors

**Time:** 5-8 minutes

---

### Step 5.6: Test Navigation

**What:** Verify client-side navigation works.

**Tests:**
1. Start at `/`
2. Click browser address bar, type `/call-to-adventure`, press Enter
3. [ ] Page changes without full reload
4. Click browser back button
5. [ ] Returns to Home
6. Navigate to `/threshold-convergence`
7. [ ] Page changes correctly
8. Refresh browser (F5)
9. [ ] Page reloads correctly (doesn't 404)

**Note:** Refresh may 404 on Vercel without vercel.json, but should work in dev mode.

**Time:** 3-5 minutes

---

### Step 5.7: Verify Styles Isolated

**What:** Confirm pages don't interfere with each other's styles.

**Test:**
1. Navigate to `/` - check styles correct
2. Navigate to `/call-to-adventure` - check styles correct
3. Navigate back to `/` - check styles still correct (no CSS bleed)
4. Navigate to `/threshold-convergence` - check styles correct
5. Navigate to `/call-to-adventure` - check styles still correct

**Expected:** Each page has its own isolated GlobalStyles. No CSS pollution between pages.

**Time:** 3-5 minutes

---

## ✅ Post-Phase Validation

**Validation A: App.jsx Structure**
- [ ] App.jsx is now ~20-30 lines (not ~1300)
- [ ] Contains BrowserRouter, Routes, 3 Route elements
- [ ] No GlobalStyles in App.jsx

**Validation B: All Routes Work**
- [ ] `/` loads Home.jsx
- [ ] `/call-to-adventure` loads CallToAdventure.jsx
- [ ] `/threshold-convergence` loads ThresholdConvergence.jsx

**Validation C: Navigation Works**
- [ ] Direct URL access works
- [ ] Browser back/forward works
- [ ] Page refresh works

**Validation D: No Errors**
- [ ] Dev server runs without errors
- [ ] No console errors on any route

---

## 🎯 Success Criteria

Phase is DONE when:
- [x] App.jsx refactored to router wrapper (~25 lines)
- [x] All 3 routes defined and working
- [x] Direct URL access works for all routes
- [x] Browser navigation works
- [x] Dev server runs without errors
- [x] No console errors on any route
- [x] Styles isolated per page (no CSS bleed)

---

## 🛑 Stop Conditions

- [ ] If any route 404s after multiple attempts, STOP
- [ ] If pages interfere with each other's styles, STOP
- [ ] If dev server won't start, STOP
- [ ] If cost exceeds $5, STOP (this is simple routing)

---

## 📦 Outputs

**Files created:**
- None

**Files modified:**
- `sites/odyssey-lab/src/App.jsx` (complete rewrite to router wrapper)

**Decisions made:**
- Simple flat routing (no nested routes)
- No shared layout wrapper
- Page sovereignty maintained

---

## 🔄 Handoff to Next Phase

**What Phase 6 needs to know:**
- App.jsx is now router wrapper
- All 3 routes working in dev mode
- Any deviations: [Document if any route issues]

**Update meta-plan status:**
```markdown
| 5 | `002-phase-5-router-integration.md` | ✅ Complete | [date/time] | [date/time] | $[X] | [X] mins | [issues or "None"] |
```

---

## ⏱️ Time Budget

- Estimated: 15-20 minutes
- If exceeds estimate by 50% (>30 mins), STOP and reassess

## 💰 Cost Budget

- Estimated: $2-3
- If exceeds $5, STOP and report

---

## See Also

- Meta-plan: `plans/002-html-to-react-migration-META.md`
- Previous: `plans/handoffs/002-phase-4-convert-andrew-gem-2.md`
- Next: `plans/handoffs/002-phase-6-build-validation.md`
- React Router docs: https://reactrouter.com/


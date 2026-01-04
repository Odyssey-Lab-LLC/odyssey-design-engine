---
handoff_id: 002-phase-5
phase_number: 5
phase_name: Build & Visual Validation
from_agent: Phase 4 (Convert andrew-2 + Route)
to_agent: Execution Agent
date: 2026-01-03
estimated_time: 15-25 mins
estimated_cost: $2-4
dependencies: Phase 4 complete, all 3 page components exist, all 3 routes working in dev mode
---

# Phase 5: Build Validation & Visual Regression Suite

## 🎯 Phase Objective

**Verify production build succeeds, all routes work in production mode, run final comprehensive visual regression suite, and confirm deploy-readiness.**

---

## 📌 Prerequisites (Verify Before Starting)

- [ ] Phase 4 status is ✅ Complete in meta-plan
- [ ] All 3 page components exist:
  - [ ] `sites/odyssey-lab/src/pages/Home.jsx`
  - [ ] `sites/odyssey-lab/src/pages/CallToAdventure.jsx`
  - [ ] `sites/odyssey-lab/src/pages/ThresholdConvergence.jsx`
- [ ] All 3 routes working in dev mode:
  - [ ] `/` (Home)
  - [ ] `/call-to-adventure` (CallToAdventure)
  - [ ] `/threshold-convergence` (ThresholdConvergence)
- [ ] `vercel.json` exists with rewrites (from Phase 1)

**Reference meta-plan for:** Routing architecture, deployment config.
**Meta-plan location:** `plans/002-html-to-react-migration-META.md`

---

## 🖥️ Dev Server Status

- **Needs dev server:** Yes for visual regression, then STOP before build
- **Expected state before phase:** May be running (from Phase 4)
- **Start command:** `npm run dev` (for visual validation first)
- **Before build step:** MUST STOP dev server
- **After phase:** Stopped
- **Why:** Build process may conflict with running dev server. Visual regression needs dev server first.

---

## 📁 File Paths Reference

**Project root:** `/Users/brandonmcpeak/GitHub & Projects/odyssey-design-engine/`

**Paths with spaces (ALWAYS use quotes in shell):**
```bash
# Good:
open "_workspace/andrew gem merge/andrew-1-call-to-adventure.html"

# Bad (BREAKS):
open _workspace/andrew gem merge/andrew-1-call-to-adventure.html
```

**This phase's key paths:**
- Original andrew-1: `"_workspace/andrew gem merge/andrew-1-call-to-adventure.html"`
- Original andrew-2: `"_workspace/andrew gem merge/andrew-gem-2.jsx"`
- Original Home backup: `sites/odyssey-lab/src/App.jsx.backup`
- Build output: `dist/` (gitignored)
- Vercel config: `vercel.json`

---

## 🧠 Phase-Specific Context

This phase combines what were previously two separate phases:
1. **Build & Deploy Validation** (old Phase 6)
2. **Visual Regression Suite** (old Phase 7)

**Order matters:**
1. Run visual regression FIRST (requires dev server)
2. STOP dev server
3. Run build validation

**Why combined:** Both are validation activities that don't modify code. Running them sequentially is efficient.

---

## ⚠️ Tool Safety Protocol

**Before using ANY tool:**
1. List available tools, verify tool exists
2. Check ALL required parameters
3. If tool fails 2x, use fallback method
4. Stop condition: Don't retry malformed calls indefinitely

**Fallback strategies for this phase:**
- If dev server issues: Restart, clear cache
- If original files won't open: Try different browser, check file path
- If build fails: Check console for specific error, fix imports
- If preview 404s: Check vercel.json, try adding base to vite config

---

## 🚀 Execution Steps

### Part A: Visual Regression Suite

---

### Step 5.1: Start Dev Server (If Not Running)

**What:** Ensure dev server is running for visual testing.

**How:**
```bash
npm run dev
```

**Expected:** Server starts at localhost:5173

**Time:** 1 minute

---

### Step 5.2: Visual Comparison - Home

**What:** Compare Home.jsx against original App.jsx.

**Setup:**
1. Recall how original looked (or view backup if needed)
2. Navigate to `http://localhost:5173/`

**Comparison checklist:**

| Element | Match? | Notes |
|---------|--------|-------|
| Hero section layout | | |
| Typography (Cinzel headers) | | |
| Bronze/gold colors | | |
| Accordion styling | | |
| Card layouts | | |
| Spacing/margins | | |
| Background colors | | |

**Interactions:**
- [ ] Accordions expand/collapse
- [ ] Hover states work
- [ ] Scroll behavior normal

**Console:**
- [ ] No errors
- [ ] No missing asset warnings

**Time:** 3-4 minutes

---

### Step 5.3: Visual Comparison - CallToAdventure

**What:** Compare CallToAdventure.jsx against original HTML.

**Setup:**
1. Open original:
   ```bash
   open "_workspace/andrew gem merge/andrew-1-call-to-adventure.html"
   ```
2. Navigate to `http://localhost:5173/call-to-adventure`

**Comparison checklist:**

| Element | Match? | Notes |
|---------|--------|-------|
| Page layout | | |
| Meta-card styling | | |
| Highlight blocks | | |
| Phase stack | | |
| Typography | | |
| Colors (bronze palette) | | |
| Grid background | | |

**Interactions:**
- [ ] Accordions expand/collapse
- [ ] Hover states work

**Console:**
- [ ] No errors
- [ ] Fonts loading correctly

**Time:** 3-4 minutes

---

### Step 5.4: Visual Comparison - ThresholdConvergence

**What:** Compare ThresholdConvergence.jsx against original.

**Setup:**
1. Open original:
   ```bash
   open "_workspace/andrew gem merge/andrew-gem-2.jsx"
   ```
2. Navigate to `http://localhost:5173/threshold-convergence`

**Comparison checklist:**

| Element | Match? | Notes |
|---------|--------|-------|
| Lens hero section | | |
| Dark zone colors | | |
| Synchronic bar | | |
| Deep dive sections | | |
| Proof points | | |
| Typography | | |
| Entangled theme colors | | |

**Complex features status:**
- [ ] Lens mouse tracking: Working / Fallback
- [ ] Matrix text decode: Working / Fallback
- [ ] Zone transitions: Working / Fallback
- [ ] Lenis smooth scroll: Working / Fallback

**Time:** 4-5 minutes

---

### Step 5.5: Mobile Testing (375px)

**What:** Test all 3 pages at mobile viewport.

**Method:**
1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select iPhone SE or set width to 375px

**Test each page:**

**Home (`/`):**
- [ ] Layout adapts (no horizontal scroll)
- [ ] Text readable
- [ ] Accordions work on tap

**CallToAdventure (`/call-to-adventure`):**
- [ ] Layout adapts
- [ ] Cards stack correctly
- [ ] Text readable

**ThresholdConvergence (`/threshold-convergence`):**
- [ ] Layout adapts
- [ ] Lens effect adapted or disabled
- [ ] Content accessible

**Time:** 3-4 minutes

---

### Step 5.6: CSS Isolation Test

**What:** Verify no CSS bleed between pages.

**Test:**
1. Navigate to `/` - note specific styles
2. Navigate to `/call-to-adventure` - should have different look
3. Navigate back to `/` - styles should reset correctly
4. Navigate to `/threshold-convergence` - different dark theme
5. Navigate to `/call-to-adventure` - should not have dark theme bleeding

**Expected:** Each page has its own isolated GlobalStyles. No CSS pollution between pages.

**Stop if:** CSS variables are bleeding between pages (e.g., dark theme affecting light pages)

**Time:** 2-3 minutes

---

### Part B: Build Validation

---

### Step 5.7: Stop Dev Server

**What:** Ensure no conflicting processes before build.

**How:** Ctrl+C in terminal where dev server is running.

**Verify stopped:**
```bash
# Should not show any node processes on port 5173
lsof -i :5173
```

**Time:** 1 minute

---

### Step 5.8: Run Production Build

**What:** Build production bundle.

**How:**
```bash
npm run build
```

**Expected output:**
- Build completes without errors
- Output in `dist/` directory
- No warnings about missing dependencies
- Asset optimization succeeds

**Check output:**
```bash
ls -la dist/
```

**Expected:** `dist/` contains build files (index.html, assets/, etc.)

**Stop if:** Build fails. Check error message, fix issue before proceeding.

**Common build failures:**
- Missing dependencies (check package.json)
- Import path errors (check @shared aliases)
- Undefined variables in production mode
- Missing public assets

**Time:** 2-3 minutes

---

### Step 5.9: Verify Build Output

**What:** Check build contains expected files.

**How:**
```bash
ls -la dist/
cat dist/index.html | head -20
```

**Expected:**
- `index.html` exists
- `assets/` directory with JS/CSS bundles
- References to bundled assets in HTML

**Time:** 1 minute

---

### Step 5.10: Run Preview Server

**What:** Test production build locally.

**How:**
```bash
npm run preview
```

**Expected:**
- Server starts on different port (usually 4173)
- No errors in console

**Note URL for testing (usually `http://localhost:4173`)

**Time:** 1-2 minutes

---

### Step 5.11: Test All Routes in Preview

**What:** Verify each route works in production mode.

**Test in browser:**

1. **Home route (`/`):**
   - Navigate to `http://localhost:4173/`
   - [ ] Page loads
   - [ ] Content renders correctly
   - [ ] Styles applied
   - [ ] No console errors

2. **CallToAdventure route (`/call-to-adventure`):**
   - Navigate to `http://localhost:4173/call-to-adventure`
   - [ ] Page loads
   - [ ] Styles applied
   - [ ] Interactions work

3. **ThresholdConvergence route (`/threshold-convergence`):**
   - Navigate to `http://localhost:4173/threshold-convergence`
   - [ ] Page loads
   - [ ] Complex features work (or fallbacks)

**Time:** 3-4 minutes

---

### Step 5.12: Test Direct URL Access

**What:** Verify client-side routing works for direct URLs.

**Test:**
1. Open new browser tab
2. Directly navigate to `http://localhost:4173/call-to-adventure`
3. [ ] Page loads (doesn't 404)
4. Directly navigate to `http://localhost:4173/threshold-convergence`
5. [ ] Page loads (doesn't 404)

**Note:** If these 404 in preview, it may still work on Vercel with vercel.json.

**Time:** 2 minutes

---

### Step 5.13: Verify vercel.json Configuration

**What:** Confirm Vercel config is valid.

**How:**
```bash
cat vercel.json
```

**Expected content:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Validation:**
- [ ] File exists in project root
- [ ] JSON is valid (no syntax errors)
- [ ] Rewrite rule present

**Time:** 1 minute

---

### Step 5.14: Stop Preview Server

**What:** Clean up.

**How:** Ctrl+C in terminal.

**Time:** 1 minute

---

## ✅ Post-Phase Validation

**Validation A: Visual Regression Passed**
- [ ] Home looks identical to original
- [ ] CallToAdventure looks identical to original HTML
- [ ] ThresholdConvergence looks identical (with documented fallbacks)
- [ ] No CSS bleed between pages

**Validation B: Mobile Testing Passed**
- [ ] All 3 pages work at 375px
- [ ] No layout breaks
- [ ] Touch interactions work

**Validation C: Build Success**
- [ ] `npm run build` completes without errors
- [ ] `dist/` directory exists with build files

**Validation D: Preview Works**
- [ ] `npm run preview` starts successfully
- [ ] All 3 routes load in preview mode
- [ ] Direct URL access works (or documented for Vercel)

**Validation E: Deploy Ready**
- [ ] vercel.json exists with correct config
- [ ] No blocking build warnings

---

## 🎯 Success Criteria

Phase is DONE when:
- [x] Visual regression passed for all 3 pages
- [x] Mobile testing passed (375px)
- [x] CSS isolation confirmed (no bleed)
- [x] Production build succeeds (`npm run build`)
- [x] Build output exists in `dist/`
- [x] Preview server runs (`npm run preview`)
- [x] All 3 routes work in preview mode
- [x] vercel.json valid with rewrites

---

## 🛑 Stop Conditions

- [ ] If any page has major layout breaks, STOP and document
- [ ] If CSS bleed causes pages to look broken, STOP and fix
- [ ] If `npm run build` fails, STOP and fix error
- [ ] If preview shows blank pages, STOP and investigate
- [ ] If all routes 404 in preview, STOP
- [ ] If cost exceeds $6, STOP

---

## 📦 Outputs

**Files created:**
- `dist/` directory (build output, gitignored)

**Files modified:**
- None

**Documentation created (in handoff notes):**
- Visual regression results summary
- Complex features status (working vs fallbacks)
- Build validation status

---

## 🔄 Handoff to Next Phase

**What Phase 6 needs to know:**
- Visual regression: [Passed / Issues documented]
- Mobile testing: [Passed / Issues on specific pages]
- CSS isolation: [Confirmed / Issues]
- Build: Successful
- Preview: All routes working
- Direct URL: [Working in preview / Works on Vercel only]
- Complex features in ThresholdConvergence: [List working vs fallback]

**Update meta-plan status:**
```markdown
| 5 | `002-phase-5-build-validation.md` | ✅ Complete | [date/time] | [date/time] | $[X] | [X] mins | [issues or "None"] |
```

---

## ⏱️ Time Budget

- Estimated: 15-25 minutes
- If exceeds estimate by 50% (>37 mins), STOP and reassess

## 💰 Cost Budget & Progress Monitoring

- Estimated: $2-4

**Monitor PROGRESS, not just cost:**

**Green flag:** Cost at $4, phase completes → Continue (worth it)
**Yellow flag:** Cost at 1.5× $4, phase 50% done → Continue cautiously
**Red flag:** Cost at 2× $4, phase <25% done → STOP (something wrong)

**Better abort signal: Time stuck without progress**
- >10 mins debugging same error with no progress → STOP
- Same tool call fails 3+ times → Use fallback or STOP
- Cost rising but validation completing → Acceptable
- Cost rising with NO validation progress → STOP (tool loop)

---

## See Also

- Meta-plan: `plans/002-html-to-react-migration-META.md`
- Previous: `plans/handoffs/002-phase-4-convert-andrew-2.md`
- Next: `plans/handoffs/002-phase-6-documentation.md`
- Vite preview docs: https://vitejs.dev/guide/cli.html#vite-preview


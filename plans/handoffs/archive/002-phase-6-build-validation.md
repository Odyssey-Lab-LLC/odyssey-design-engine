---
handoff_id: 002-phase-6
phase_number: 6
phase_name: Build & Deploy Validation
from_agent: Phase 5 (Router Integration)
to_agent: Execution Agent
date: 2026-01-03
estimated_time: 20-25 mins
estimated_cost: $2-3
dependencies: Phase 5 complete, all routes working in dev mode
---

# Phase 6: Build & Deploy Validation

## 🎯 Phase Objective

**Verify production build succeeds and all routes work in production mode, confirming the migration is deploy-ready.**

---

## 📌 Prerequisites (Verify Before Starting)

- [ ] Phase 5 status is ✅ Complete in meta-plan
- [ ] All routes working in dev mode:
  - [ ] `/` (Home)
  - [ ] `/call-to-adventure` (CallToAdventure)
  - [ ] `/threshold-convergence` (ThresholdConvergence)
- [ ] `vercel.json` exists with rewrites (from Phase 1)
- [ ] `npm run dev` starts without errors

**Reference meta-plan for:** Routing architecture, deployment config.
**Meta-plan location:** `plans/002-html-to-react-migration-META.md`

---

## 🧠 Phase-Specific Context

**Why this phase matters:**
- Dev mode can hide issues that break production builds
- Production build performs optimizations that may expose problems
- Vercel deployment requires valid build and proper routing config

**What we're validating:**
1. `npm run build` succeeds
2. `npm run preview` serves production build correctly
3. All routes work in production mode
4. vercel.json is valid for deployment

---

## ⚠️ Tool Safety Protocol

**Before using ANY tool:**
1. List available tools, verify tool exists
2. Check ALL required parameters
3. If tool fails 2x, use fallback method
4. Stop condition: Don't retry malformed calls indefinitely

**Fallback strategies for this phase:**
- If build fails: Check console for specific error, fix imports
- If preview 404s: Check vercel.json, try adding base to vite config
- If assets missing: Check public/ directory, check import paths

---

## 🚀 Execution Steps

### Step 6.1: Stop Dev Server

**What:** Ensure no conflicting processes.

**How:** If dev server running, stop it (Ctrl+C).

**Time:** 1 minute

---

### Step 6.2: Run Production Build

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

### Step 6.3: Verify Build Output

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

**Time:** 1-2 minutes

---

### Step 6.4: Run Preview Server

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

### Step 6.5: Test All Routes in Preview

**What:** Verify each route works in production mode.

**Test in browser (using preview port):**

1. **Home route (`/`):**
   - Navigate to `http://localhost:4173/`
   - [ ] Page loads
   - [ ] Content renders correctly
   - [ ] Styles applied
   - [ ] No console errors

2. **CallToAdventure route (`/call-to-adventure`):**
   - Navigate to `http://localhost:4173/call-to-adventure`
   - [ ] Page loads
   - [ ] Content renders correctly
   - [ ] Styles applied
   - [ ] Interactions work

3. **ThresholdConvergence route (`/threshold-convergence`):**
   - Navigate to `http://localhost:4173/threshold-convergence`
   - [ ] Page loads
   - [ ] Content renders correctly
   - [ ] Complex features work (or fallbacks)

**Time:** 5-8 minutes

---

### Step 6.6: Test Direct URL Access in Preview

**What:** Verify client-side routing works for direct URLs.

**Important:** This tests SPA fallback behavior.

**Test:**
1. Open new browser tab
2. Directly navigate to `http://localhost:4173/call-to-adventure`
3. [ ] Page loads (doesn't 404)
4. Directly navigate to `http://localhost:4173/threshold-convergence`
5. [ ] Page loads (doesn't 404)

**Note:** If these 404 in preview, it may still work on Vercel with vercel.json. But it's better if it works in preview too.

**Time:** 2-3 minutes

---

### Step 6.7: Verify vercel.json Configuration

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

**Why this matters:** Without this, direct URL access (e.g., `/call-to-adventure`) will 404 on Vercel after deployment.

**Time:** 1-2 minutes

---

### Step 6.8: Check for Production Warnings

**What:** Review any warnings during build.

**Scan build output for:**
- [ ] No "unused variable" warnings (usually OK)
- [ ] No "missing dependency" warnings
- [ ] No "export not found" warnings
- [ ] No bundle size warnings (unless pages are huge)

**Action:** Note significant warnings for lessons learned. Minor warnings OK.

**Time:** 2-3 minutes

---

### Step 6.9: Stop Preview Server

**What:** Clean up.

**How:** Ctrl+C in terminal.

**Time:** 1 minute

---

## ✅ Post-Phase Validation

**Validation A: Build Success**
- [ ] `npm run build` completes without errors
- [ ] `dist/` directory exists with build files

**Validation B: Preview Works**
- [ ] `npm run preview` starts successfully
- [ ] All 3 routes load in preview mode

**Validation C: Direct URL Access**
- [ ] Direct navigation to `/call-to-adventure` works
- [ ] Direct navigation to `/threshold-convergence` works

**Validation D: Deploy Ready**
- [ ] vercel.json exists with correct config
- [ ] No blocking build warnings

---

## 🎯 Success Criteria

Phase is DONE when:
- [x] Production build succeeds (`npm run build`)
- [x] Build output exists in `dist/`
- [x] Preview server runs (`npm run preview`)
- [x] All 3 routes work in preview mode
- [x] Direct URL access works (or confirmed to work on Vercel)
- [x] vercel.json valid with rewrites
- [x] No blocking warnings

---

## 🛑 Stop Conditions

- [ ] If `npm run build` fails, STOP and fix error
- [ ] If preview shows blank pages, STOP and investigate
- [ ] If all routes 404 in preview (not just direct access), STOP
- [ ] If vercel.json is invalid JSON, STOP and fix
- [ ] If cost exceeds $5, STOP

---

## 📦 Outputs

**Files created:**
- `dist/` directory (build output, gitignored)

**Files modified:**
- None

**Decisions made:**
- Build configuration validated
- Deployment readiness confirmed

---

## 🔄 Handoff to Next Phase

**What Phase 7 needs to know:**
- Build status: Successful
- Preview status: All routes working
- Direct URL: [Working in preview / Works on Vercel only]
- Any warnings: [List or "None"]

**Update meta-plan status:**
```markdown
| 6 | `002-phase-6-build-validation.md` | ✅ Complete | [date/time] | [date/time] | $[X] | [X] mins | [issues or "None"] |
```

---

## ⏱️ Time Budget

- Estimated: 20-25 minutes
- If exceeds estimate by 50% (>35 mins), STOP and reassess

## 💰 Cost Budget

- Estimated: $2-3
- If exceeds $5, STOP and report

---

## See Also

- Meta-plan: `plans/002-html-to-react-migration-META.md`
- Previous: `plans/handoffs/002-phase-5-router-integration.md`
- Next: `plans/handoffs/002-phase-7-visual-regression.md`
- Vite preview docs: https://vitejs.dev/guide/cli.html#vite-preview


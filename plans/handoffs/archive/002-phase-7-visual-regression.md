---
handoff_id: 002-phase-7
phase_number: 7
phase_name: Final Visual Regression Suite
from_agent: Phase 6 (Build Validation)
to_agent: Execution Agent
date: 2026-01-03
estimated_time: 15-20 mins
estimated_cost: $2-3
dependencies: Phase 6 complete, build validated
---

# Phase 7: Final Visual Regression Suite

## 🎯 Phase Objective

**Comprehensive side-by-side visual comparison of all 3 converted pages against their original sources, including mobile testing.**

---

## 📌 Prerequisites (Verify Before Starting)

- [ ] Phase 6 status is ✅ Complete in meta-plan
- [ ] Build validated, all routes working
- [ ] Dev server can start (`npm run dev`)
- [ ] Original files accessible:
  - [ ] `_workspace/andrew gem merge/andrew-1-call-to-adventure.html`
  - [ ] `_workspace/andrew gem merge/andrew-gem-2.jsx`
  - [ ] `sites/odyssey-lab/src/App.jsx.backup` (original Home)

**Reference meta-plan for:** Token analysis, component patterns.
**Meta-plan location:** `plans/002-html-to-react-migration-META.md`

---

## 🧠 Phase-Specific Context

This phase performs **final comprehensive visual validation** before documentation.

**Why now (not earlier):**
- All conversions complete
- Router integrated
- Build validated
- Now can do thorough comparison

**What we're checking:**
1. Visual parity for all 3 pages
2. Interactive element functionality
3. Mobile responsiveness
4. No CSS bleed between pages

---

## ⚠️ Tool Safety Protocol

**Before using ANY tool:**
1. List available tools, verify tool exists
2. Check ALL required parameters
3. If tool fails 2x, use fallback method
4. Stop condition: Don't retry malformed calls indefinitely

**Fallback strategies for this phase:**
- If dev server issues: Restart, clear cache
- If original won't open: Try different browser, check file path
- If screenshot tools fail: Manual visual comparison

---

## 🚀 Execution Steps

### Step 7.1: Start Dev Server

**What:** Run development server for testing.

**How:**
```bash
npm run dev
```

**Expected:** Server starts at localhost:5173

**Time:** 1 minute

---

### Step 7.2: Visual Comparison - Home

**What:** Compare Home.jsx against original App.jsx.backup.

**Setup:**
1. Open original (create temp copy for viewing):
   ```bash
   # Create temp HTML to view backup
   cp sites/odyssey-lab/src/App.jsx.backup /tmp/original-home.jsx
   ```
   Or simply recall from memory how it looked in Phase 2.

2. Open converted:
   - Navigate to `http://localhost:5173/`

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
- [ ] Zone transitions (if any)

**Console:**
- [ ] No errors
- [ ] No missing asset warnings

**Time:** 3-5 minutes

---

### Step 7.3: Visual Comparison - CallToAdventure

**What:** Compare CallToAdventure.jsx against original HTML.

**Setup:**
1. Open original:
   ```bash
   open "_workspace/andrew gem merge/andrew-1-call-to-adventure.html"
   ```

2. Open converted:
   - Navigate to `http://localhost:5173/call-to-adventure`

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
- [ ] All content visible

**Console:**
- [ ] No errors
- [ ] Fonts loading correctly

**Time:** 3-5 minutes

---

### Step 7.4: Visual Comparison - ThresholdConvergence

**What:** Compare ThresholdConvergence.jsx against original.

**Setup:**
1. Open original:
   ```bash
   open "_workspace/andrew gem merge/andrew-gem-2.jsx"
   ```

2. Open converted:
   - Navigate to `http://localhost:5173/threshold-convergence`

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

**Complex features status (document actual state):**
- [ ] Lens mouse tracking: Working / Fallback
- [ ] Matrix text decode: Working / Fallback
- [ ] Zone transitions: Working / Fallback
- [ ] Lenis smooth scroll: Working / Fallback

**Interactions:**
- [ ] Accordions work
- [ ] Scroll behavior acceptable
- [ ] Hover states work

**Console:**
- [ ] No errors (warnings about Lenis OK if using fallback)

**Time:** 5-8 minutes

---

### Step 7.5: Mobile Testing (375px)

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
- [ ] Navigation usable

**CallToAdventure (`/call-to-adventure`):**
- [ ] Layout adapts
- [ ] Cards stack correctly
- [ ] Text readable
- [ ] Accordions work on tap

**ThresholdConvergence (`/threshold-convergence`):**
- [ ] Layout adapts
- [ ] Lens effect adapted or disabled
- [ ] Text readable
- [ ] Content accessible

**Time:** 4-6 minutes

---

### Step 7.6: CSS Isolation Test

**What:** Verify no CSS bleed between pages.

**Test:**
1. Navigate to `/` - note specific styles
2. Navigate to `/call-to-adventure` - should have different look
3. Navigate back to `/` - styles should reset correctly
4. Navigate to `/threshold-convergence` - different dark theme
5. Navigate to `/call-to-adventure` - should not have dark theme bleeding

**Expected:** Each page has its own isolated GlobalStyles. Navigating between pages shows correct styles without pollution.

**Time:** 2-3 minutes

---

### Step 7.7: Document Visual Regression Results

**What:** Create summary of visual comparison results.

**Template for notes:**
```markdown
## Visual Regression Summary

### Home (/)
- Visual match: [Exact / Minor differences / Major issues]
- Interactions: [All working / Issues: ___]
- Mobile: [Good / Issues: ___]

### CallToAdventure (/call-to-adventure)
- Visual match: [Exact / Minor differences / Major issues]
- Interactions: [All working / Issues: ___]
- Mobile: [Good / Issues: ___]

### ThresholdConvergence (/threshold-convergence)
- Visual match: [Exact / With fallbacks / Major issues]
- Complex features: [List working vs fallback]
- Interactions: [All working / Issues: ___]
- Mobile: [Good / Issues: ___]

### CSS Isolation
- [ ] No bleed detected / Issues: ___
```

**Time:** 2-3 minutes

---

## ✅ Post-Phase Validation

**Validation A: Home Visual Parity**
- [ ] Looks identical to original
- [ ] Interactions work
- [ ] Mobile responsive

**Validation B: CallToAdventure Visual Parity**
- [ ] Looks identical to original HTML
- [ ] Interactions work
- [ ] Mobile responsive

**Validation C: ThresholdConvergence Visual Parity**
- [ ] Core layout matches (complex features may have fallbacks)
- [ ] Interactions work (with documented limitations)
- [ ] Mobile responsive

**Validation D: No CSS Bleed**
- [ ] Pages don't interfere with each other's styles

---

## 🎯 Success Criteria

Phase is DONE when:
- [x] All 3 pages visually compared against originals
- [x] Visual differences documented (acceptable or flagged for fix)
- [x] Interactions tested on all pages
- [x] Mobile test passed (375px)
- [x] CSS isolation confirmed
- [x] Results documented

**Note:** Minor differences acceptable. Major layout breaks should be flagged.

---

## 🛑 Stop Conditions

- [ ] If any page has major layout breaks, STOP and document
- [ ] If CSS bleed causes pages to look broken, STOP and fix
- [ ] If critical interactions don't work, STOP and investigate
- [ ] If cost exceeds $5, STOP

---

## 📦 Outputs

**Files created:**
- None (documentation happens in Phase 8)

**Files modified:**
- None

**Decisions made:**
- Visual parity status confirmed
- Known limitations documented

---

## 🔄 Handoff to Next Phase

**What Phase 8 needs to know:**
- Visual regression results: [Summary]
- Known issues: [List or "None"]
- Mobile status: [All good / Issues on specific pages]
- CSS isolation: [Confirmed / Issues]

**Update meta-plan status:**
```markdown
| 7 | `002-phase-7-visual-regression.md` | ✅ Complete | [date/time] | [date/time] | $[X] | [X] mins | [issues or "None"] |
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
- Previous: `plans/handoffs/002-phase-6-build-validation.md`
- Next: `plans/handoffs/002-phase-8-documentation.md`


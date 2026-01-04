# Refactor Gaps Report V2

**Date:** 2026-01-03
**Task:** Refactor 8-phase migration plan into 6-phase structure
**Status:** ✅ Complete
**Previous Version:** `plans/reports/003-refactor-gaps-report.md` (8-phase, superseded)

---

## Executive Summary

Successfully refactored the HTML-to-React migration plan from 8 phases to 6 phases. The key change is **incremental router integration** — routes are now added as components are created (Phases 2-4), rather than as a separate router phase.

**Key improvements implemented:**
- ✅ Router integrated incrementally (no separate Phase 5)
- ✅ Dev Server Status section in all 6 handoffs
- ✅ File Paths Reference section with quoted paths for spaces
- ✅ Route Addition Protocol in Phases 3-4
- ✅ Progress-based cost monitoring in all phases

---

## What Changed from V1 (8 Phases)

### Phase Structure Changes

| Old Phase | New Phase | What Happened |
|-----------|-----------|---------------|
| 1: Infrastructure | 1: Setup | Renamed, added Dev Server Status |
| 2: Migrate Home | 2: Migrate Home + Initial Router | MERGED: Router setup with `/` route |
| 3: Convert andrew-1 | 3: Convert andrew-1 + Route | ENHANCED: Route Addition Protocol added |
| 4: Convert andrew-gem-2 | 4: Convert andrew-2 + Route | ENHANCED: Route Addition Protocol added |
| 5: Router Integration | ELIMINATED | Distributed into Phases 2-4 |
| 6: Build Validation | 5: Build Validation | MERGED: Includes visual regression |
| 7: Visual Regression | ELIMINATED | Merged into Phase 5 |
| 8: Documentation | 6: Documentation | Kept as-is with improvements |

### Critical Improvements Added

1. **Dev Server Status Section (ALL phases)**
   - Specifies if dev server is needed
   - Expected state before/after phase
   - Start command with expected output
   - Rationale for server state

2. **File Paths Reference Section (ALL phases)**
   - Project root path for clarity
   - Explicit examples with quoted paths for spaces
   - Good/Bad examples showing what breaks

3. **Route Addition Protocol (Phases 3-4)**
   - Step-by-step route addition after component creation
   - Exact code for updated App.jsx at each phase
   - Test protocol: navigate, check console, verify
   - Stop conditions specific to route issues

4. **Progress-Based Cost Monitoring (ALL phases)**
   - Green/Yellow/Red flags based on progress vs cost
   - "Time stuck without progress" as better abort signal
   - Explicit: "Cost rising but files being created = Acceptable"
   - Explicit: "Cost rising with NO file changes = STOP (tool loop)"

---

## Validation Checkpoints

### Checkpoint 1: MECE Verification ✅

**Question:** Are phases mutually exclusive and collectively exhaustive?

| Phase | Mutually Exclusive? | Gap? |
|-------|---------------------|------|
| 1 → 2 | ✅ Setup vs. Code | None |
| 2 → 3 | ✅ Home.jsx vs. CallToAdventure.jsx | None |
| 3 → 4 | ✅ Different source files | None |
| 4 → 5 | ✅ Creation vs. Validation | None |
| 5 → 6 | ✅ Testing vs. Documentation | None |

**Coverage check:** All source files (App.jsx → Home.jsx, andrew-1, andrew-gem-2) have assigned phases. Build validation and documentation covered. ✅ Complete.

---

### Checkpoint 2: Incremental Router Validation ✅

**Question:** Does router integration work incrementally?

| Phase | Routes at End | Validation Step |
|-------|---------------|-----------------|
| 2 | `/` | Navigate to localhost:5173/, verify Home renders |
| 3 | `/`, `/call-to-adventure` | Navigate to both, verify both work |
| 4 | `/`, `/call-to-adventure`, `/threshold-convergence` | Navigate to all 3, verify all work |

**App.jsx evolution documented:** Yes, each phase shows exact code for App.jsx at that point.

**No orphan routes:** Routes only added when components exist. ✅ Verified.

---

### Checkpoint 3: Dev Server Lifecycle ✅

**Question:** Is dev server state explicitly managed?

| Phase | Needs Server | Before State | After State |
|-------|--------------|--------------|-------------|
| 1 | No | Either | Stopped |
| 2 | Yes | Stopped | Running |
| 3 | Yes | Running | Running |
| 4 | Yes | Running | Running |
| 5 | Yes then No | Running | Stopped |
| 6 | No | Stopped | Stopped |

**HMR continuity:** Phases 2-4 expect running server, use HMR for validation. ✅ Verified.

**Build isolation:** Phase 5 explicitly stops server before `npm run build`. ✅ Verified.

---

### Checkpoint 4: File Path Safety ✅

**Question:** Are paths with spaces handled safely?

**Checked all phases for:**
- Source file references with quotes
- Shell command examples with quotes
- Explicit "Good/Bad" examples in File Paths Reference

| Phase | Has File Paths Reference | Quotes Used |
|-------|--------------------------|-------------|
| 1 | ✅ | ✅ |
| 2 | ✅ | ✅ |
| 3 | ✅ | ✅ |
| 4 | ✅ | ✅ |
| 5 | ✅ | ✅ |
| 6 | ✅ | ✅ |

---

### Checkpoint 5: Cost Monitoring ✅

**Question:** Is progress-based cost monitoring in all phases?

All 6 phases include the section with:
- Green/Yellow/Red flag definitions
- "Better abort signal" guidance
- Explicit rules about progress vs. cost
- Time-based stop conditions

---

## Concerns Identified

### Concern 1: Phase 2 Complexity (Medium Risk)

**Issue:** Phase 2 now does TWO things: migrate Home.jsx AND set up router. This is more complex than old Phase 2.

**Mitigation in place:**
- Clear "atomic" framing: both must happen together
- Explicit App.jsx code provided
- Validation tests both pieces

**Residual risk:** If one part fails, harder to diagnose. 

**Recommendation:** If Phase 2 fails, check Home.jsx creation first, then router setup separately.

---

### Concern 2: Phase 5 Length (Low Risk)

**Issue:** Phase 5 combines Build Validation + Visual Regression. This is longer than individual old phases.

**Mitigation in place:**
- Clear section headers (Part A: Visual Regression, Part B: Build)
- Logical flow: visual first (needs dev server), then build (needs server stopped)
- Combined time/cost estimate is reasonable (~15-25 mins)

**Residual risk:** Minimal. Both are validation activities, not creation.

---

### Concern 3: Route Addition Protocol Discipline (Medium Risk)

**Issue:** Phases 3-4 require adding routes immediately after component creation. If agent skips this, routes won't exist.

**Mitigation in place:**
- Route Addition Protocol is an explicit section
- Step-by-step instructions with exact code
- Stop conditions if route 404s

**Residual risk:** Agent might skip to next step without testing route.

**Recommendation:** Validation checks in each phase explicitly verify route works before marking complete.

---

### Concern 4: Complex Features in Phase 4 (Known Risk)

**Issue:** ThresholdConvergence has lens tracking, matrix decode, zone switching, Lenis. These may require fallbacks.

**Mitigation in place:**
- Fallback Protocol with 5-minute debug limit
- Static fallback options documented for each feature
- "Document fallbacks used" as explicit step
- Phase allows for working page with fallbacks

**Residual risk:** Time overrun if multiple features need debugging.

**Recommendation:** Phase 4 has 75-minute hard limit and $12 cost cap for this reason.

---

## Files Created/Modified

### Archived (moved to `plans/handoffs/archive/`)
- `002-phase-1-infrastructure.md`
- `002-phase-2-migrate-home.md`
- `002-phase-3-convert-andrew-1.md`
- `002-phase-4-convert-andrew-gem-2.md`
- `002-phase-5-router-integration.md`
- `002-phase-6-build-validation.md`
- `002-phase-7-visual-regression.md`
- `002-phase-8-documentation.md`

### Created (new 6-phase structure)
- `plans/handoffs/002-phase-1-setup.md`
- `plans/handoffs/002-phase-2-migrate-home.md`
- `plans/handoffs/002-phase-3-convert-andrew-1.md`
- `plans/handoffs/002-phase-4-convert-andrew-2.md`
- `plans/handoffs/002-phase-5-build-validation.md`
- `plans/handoffs/002-phase-6-documentation.md`

### Updated
- `plans/002-html-to-react-migration-META.md` (6-phase structure, updated time/cost)
- `plans/002-EXECUTION-GUIDE.md` (6-phase references, dev server lifecycle)

### Created
- `plans/reports/003-refactor-gaps-report-v2.md` (this file)

---

## Recommendations for Architect Review

1. **Approve Phase 2 atomic approach** — Confirm that Home + Router should be done together, not separately.

2. **Consider Phase 4 budget** — 40-50 mins and $6-8 may be optimistic for complex features. Consider increasing to 60-75 mins and $8-12 if concerned.

3. **Validate Route Addition Protocol** — The protocol looks solid but is new. Watch for issues during first execution.

4. **Monitor dev server discipline** — The lifecycle is well-defined but requires agent to follow it. If issues arise, consider adding explicit "verify server state" steps.

---

## Self-Assessment

| Criteria | Status | Notes |
|----------|--------|-------|
| 6 phases (not 8) | ✅ | Confirmed |
| Router incremental | ✅ | Phases 2-4 add routes |
| Dev Server Status in all | ✅ | All 6 have it |
| File Paths Reference in all | ✅ | All 6 have it |
| Route Addition Protocol in 3-4 | ✅ | Both have it |
| Progress-based cost monitoring | ✅ | All 6 have it |
| META.md updated | ✅ | 6-phase, new time/cost |
| EXECUTION-GUIDE.md updated | ✅ | 6-phase, dev lifecycle |
| Old phases archived | ✅ | 8 files in archive/ |

**Overall:** All requirements met. Ready for architect approval.

---

## See Also

- Meta-plan: `plans/002-html-to-react-migration-META.md`
- Execution guide: `plans/002-EXECUTION-GUIDE.md`
- Phase handoffs: `plans/handoffs/002-phase-[1-6]-*.md`
- Previous gaps report: `plans/reports/003-refactor-gaps-report.md` (superseded)


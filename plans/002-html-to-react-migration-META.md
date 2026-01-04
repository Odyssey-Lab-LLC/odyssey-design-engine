# HTML-to-React Migration: Meta-Plan (Orchestration View)

**Status:** Ready for Execution  
**Date:** 2026-01-03  
**Original Plan:** `002-html-to-react-migration-architecture-plan.md.backup`  
**Refactored By:** Planning Agent (Phase Decomposition)

**Note:** Refactored from 8-phase to 6-phase structure per architect review. Router integration now happens incrementally within conversion phases (not as a separate phase).

---

## Overview

### Original Objective

Migrate 2 high-priority HTML files + current App.jsx into a React multi-page architecture with routing:
- `andrew-1-call-to-adventure.html` → `CallToAdventure.jsx`
- `andrew-gem-2.jsx` (actual HTML) → `ThresholdConvergence.jsx`
- Current `App.jsx` → `Home.jsx`

### Why Refactored (8→6 Phases)

**Original 8-phase structure had issues:**
- Router integration as separate phase created orphan components
- Visual regression was a separate phase (inefficient)
- Phase boundaries not clean for incremental router approach

**Solution:** Consolidated into 6 MECE (Mutually Exclusive, Collectively Exhaustive) phases:
- Router integrated incrementally (routes added as components are created)
- Visual regression merged with build validation
- Each conversion phase is self-contained (create component + add route + test)

---

## Phase Dependency Diagram

```
Phase 1: Setup
   ↓
Phase 2: Migrate Home + Initial Router (with / route)
   ↓
Phase 3: Convert andrew-1 + Route (/call-to-adventure)
   ↓
Phase 4: Convert andrew-2 + Route (/threshold-convergence)
   ↓
Phase 5: Build & Visual Validation
   ↓
Phase 6: Documentation
```

**Linear execution required.** Each phase depends on the previous phase completing successfully.

**Key change:** Routes are added incrementally in Phases 2-4, not as a separate router phase.

---

## Progress Tracking Table

| Phase | Handoff File | Status | Started | Completed | Cost | Duration | Issues |
|-------|--------------|--------|---------|-----------|------|----------|--------|
| 1 | `002-phase-1-setup.md` | ⏸️ Pending | - | - | - | - | - |
| 2 | `002-phase-2-migrate-home.md` | ⏸️ Pending | - | - | - | - | - |
| 3 | `002-phase-3-convert-andrew-1.md` | ⏸️ Pending | - | - | - | - | - |
| 4 | `002-phase-4-convert-andrew-2.md` | ⏸️ Pending | - | - | - | - | - |
| 5 | `002-phase-5-build-validation.md` | ⏸️ Pending | - | - | - | - | - |
| 6 | `002-phase-6-documentation.md` | ⏸️ Pending | - | - | - | - | - |

**Status Legend:**
- ⏸️ Pending = Not started
- 🔄 In Progress = Currently executing
- ✅ Complete = Successfully finished
- ❌ Failed = Stopped due to error
- ⚠️ Partial = Completed with issues

---

## Shared Context (Reference for All Phases)

### Design Decisions (Pre-Made)

**Decision 1: Base GlobalStyles Timing → DEFER**
- Keep embedded GlobalStyles in each page component
- Don't force shared base imports during migration
- Rationale: Prototype protection principle

**Decision 2: Component Extraction Strategy → CONSERVATIVE**
- Keep all component patterns inline during migration
- Document extraction candidates only
- Wait for 3+ uses before extracting
- Use form-first naming when extracting later

**Decision 3: Integration System → DOCUMENTATION**
- Create workflow documentation based on learnings
- No tooling automation (low frequency, high judgment work)
- **Critical:** Remove Tailwind CDN from andrew-gem-2

**Decision 4: Routing Strategy → INCREMENTAL**
- Flat routes: `/`, `/call-to-adventure`, `/threshold-convergence`
- No shared layout wrapper
- Maximum page sovereignty
- **Routes added one at a time as components are created (not all at once)**

### File Inventory

**Source Files → Target Components:**

| Source | Lines | Target | Complexity |
|--------|-------|--------|------------|
| `_workspace/andrew gem merge/andrew-1-call-to-adventure.html` | 1231 | `pages/CallToAdventure.jsx` | Medium |
| `_workspace/andrew gem merge/andrew-gem-2.jsx` | 714 | `pages/ThresholdConvergence.jsx` | **High** |
| Current `sites/odyssey-lab/src/App.jsx` | 1302 | `pages/Home.jsx` | Low |

**Files to Create:**
- `sites/odyssey-lab/src/pages/Home.jsx`
- `sites/odyssey-lab/src/pages/CallToAdventure.jsx`
- `sites/odyssey-lab/src/pages/ThresholdConvergence.jsx`

**Files to Modify:**
- `sites/odyssey-lab/src/App.jsx` (refactor to router wrapper in Phase 2, add routes in Phases 3-4)
- `package.json` (add dependencies)

### Token Analysis Summary

**Overlap Estimate:** 40-50% (moderate)

**Shared Core Tokens (across all files):**
- Colors: `--color-bronze` (#B48E55), `--color-gold` (#D4AF37), `--color-lab-blue` (#38BDF8)
- Zone system: `--light-*` and `--dark-*` tokens (90%+ consistency)
- Typography: Cinzel (display), Inter (body), JetBrains Mono (code)
- Spacing: 8px grid system

**Page-Specific Extensions (legitimate sovereignty):**
- andrew-1: Limited palette, grid background, neo-classic aesthetic
- andrew-gem-2: Entangled theme (#050b14), lens variables, dramatic dark tones
- App.jsx: Alchemy animations, Gemini-base-b integrations

**Implication:** Variations are legitimate page sovereignty, NOT technical debt. Don't force conformity.

### Component Patterns Catalog

**Patterns in andrew-1 (form-first names proposed):**
| Pattern | Form-First Name | Extract? |
|---------|-----------------|----------|
| `meta-card` | `MetadataCard` | Future (if reused) |
| `highlight-block` | `CalloutBlock` | Future (if reused) |
| `dual-tri-container` | `DualDiagram` | No (page-specific) |
| `phase-stack` | `TimelineStack` | Future (if reused) |
| `honest-block` | `InvertedPanel` | Future (if reused) |

**Patterns in andrew-gem-2 (form-first names proposed):**
| Pattern | Form-First Name | Extract? |
|---------|-----------------|----------|
| `lens-container` | `LensHero` | No (highly specific) |
| `synchronic-bar` | `StatusBar` | Future (if reused) |
| `deep-dive-container` | `InsetPanel` | Future (if reused) |
| `proof-point-wrapper` | `FeatureCard` | Future (if reused) |
| `crescendo-section` | `FinaleSection` | No (page-specific) |

**Extraction Rule:** Wait for 3+ uses across sites before extracting.

### Routing Architecture

**Route Structure:**
```
/                          → Home.jsx
/call-to-adventure         → CallToAdventure.jsx
/threshold-convergence     → ThresholdConvergence.jsx
```

**App.jsx Evolution (Incremental):**

**After Phase 2:**
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

**After Phase 3:**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CallToAdventure from './pages/CallToAdventure';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call-to-adventure" element={<CallToAdventure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

**After Phase 4 (Final):**
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

### HTML→JSX Conversion Rules

**Mechanical Changes:**
- `class=""` → `className=""`
- `for=""` → `htmlFor=""`
- Self-close: `<img>` → `<img />`
- Comments: `<!-- -->` → `{/* */}`
- Inline styles: `style="color: red;"` → `style={{ color: 'red' }}`

**Judgment Calls:**
- Keep embedded GlobalStyles (page sovereignty)
- Convert `<link>` fonts to `@import` in GlobalStyles
- Convert inline `<script>` to React hooks (useState, useEffect)
- Lenis: Use npm package, not CDN
- Tailwind CDN: Remove (project has Tailwind)

---

## Time & Cost Estimates

| Phase | Time | Cost (Est.) |
|-------|------|-------------|
| 1 | 10-15 mins | $1-2 |
| 2 | 20-25 mins | $2-4 |
| 3 | 25-35 mins | $4-6 |
| 4 | 40-50 mins | $6-8 |
| 5 | 15-25 mins | $2-4 |
| 6 | 15-25 mins | $2-3 |
| **Total** | **~2-3 hours** | **$17-27** |

**Buffer recommended:** +$10-15 for debugging/retries

---

## Execution Log

### Phase 1
- **Started:** -
- **Completed:** -
- **Issues:** -
- **Decisions Made:** -
- **Notes:** -

### Phase 2
- **Started:** -
- **Completed:** -
- **Issues:** -
- **Decisions Made:** -
- **Notes:** -

### Phase 3
- **Started:** -
- **Completed:** -
- **Issues:** -
- **Decisions Made:** -
- **Notes:** -

### Phase 4
- **Started:** -
- **Completed:** -
- **Issues:** -
- **Decisions Made:** -
- **Notes:** -

### Phase 5
- **Started:** -
- **Completed:** -
- **Issues:** -
- **Decisions Made:** -
- **Notes:** -

### Phase 6
- **Started:** -
- **Completed:** -
- **Issues:** -
- **Decisions Made:** -
- **Notes:** -

---

## How to Use This Meta-Plan

### Sequential Execution

1. **Start Phase 1:**
   - Open `plans/handoffs/002-phase-1-setup.md`
   - Verify prerequisites
   - Execute steps
   - Update progress table status to 🔄

2. **Complete Phase 1:**
   - Run validation checks in handoff
   - Update progress table: status ✅, fill in cost/duration
   - Fill in execution log

3. **Proceed to Phase 2:**
   - Confirm Phase 1 status is ✅
   - Open `plans/handoffs/002-phase-2-migrate-home.md`
   - Repeat cycle

4. **Continue through all 6 phases**

### Updating Status After Each Phase

Copy this template to update the progress table:

```markdown
| [N] | `002-phase-[N]-[name].md` | ✅ Complete | [date/time] | [date/time] | $[X] | [X] mins | [brief or "None"] |
```

### Referencing Shared Context

Each phase handoff will reference this meta-plan for:
- Design decisions
- File inventory
- Token analysis
- Component patterns
- Routing architecture

**Do NOT duplicate** shared context in phase handoffs. Reference: "See meta-plan section X".

---

## Stop Conditions (Global)

**STOP execution if:**
- [ ] Any phase fails validation and can't be fixed in 5 mins
- [ ] Total cost exceeds $45 (150% of estimate)
- [ ] Token limit hits cause data loss
- [ ] Visual regressions can't be resolved
- [ ] Dev server won't start after changes

**Escalation:** If stopped, document issue in execution log and create incident report in `plans/incidents/`.

---

## Key Rules References

- `.rules/11-design-system-extensions.md` — Page sovereignty, prototype protection
- `.rules/10-react-standards.md` — JSX conversion patterns
- `.rules/90-odyssey-project.md` — Multi-site architecture
- `AGENTS.md` — Definition of Done, workflows

---

## See Also

- **Original Plan (backup):** `plans/002-html-to-react-migration-architecture-plan.md.backup`
- **Execution Guide:** `plans/002-EXECUTION-GUIDE.md`
- **Phase Handoffs:** `plans/handoffs/002-phase-[1-6]-*.md`
- **Gaps Report:** `plans/reports/003-refactor-gaps-report-v2.md`

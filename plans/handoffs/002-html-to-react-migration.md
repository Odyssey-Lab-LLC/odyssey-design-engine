---
handoff_id: 002
from_agent: Claude (Cursor) - Meta Planner
to_agent: [Builder Agent]
date: 2026-01-03
status: Ready for Execution
priority: High
estimated_effort: 8-12 hours
type: Meta-Plan (requires discovery and planning phase before execution)
---

# Handoff: HTML-to-React Migration + Integration Workflow System

## Meta-Plan Directive

**⚠️ YOU ARE RECEIVING THIS HANDOFF IN META MODE ⚠️**

This is NOT a standard "execute these steps" handoff. This is a **meta-plan** that requires you to:

1. **Conduct discovery first** (analyze files, document findings)
2. **Build your own detailed execution plan** based on discovery
3. **Make critical decisions** at decision points
4. **Challenge assumptions** in this handoff
5. **Document your reasoning** for all choices

**YOU MUST:**
- Read ALL referenced files before planning
- Complete ALL discovery requirements
- Run ALL blind spot tests
- Make ALL decisions with documented rationale
- Create your own detailed execution plan
- Propose better approaches if you find them

**YOU MUST NOT:**
- Execute blindly without discovery
- Skip blind spot testing
- Assume this plan is complete
- Ignore decision points
- Proceed without understanding context

---

## Context: The Workflow Problem

### Brandon's Standard Creative Workflow

**Current process:**
1. **Generate content** via Claude.ai or Gemini (produces HTML pages with fully embedded styles)
2. **Receive design concepts** via Gemini for hero sections, sub-themes, style extensions
3. **Manually integrate** into Odyssey Lab React sites (time-consuming, error-prone, inconsistent)

**The pain:**
- Each integration takes 1-2 hours of manual work
- Style conflicts and token inconsistencies
- No systematic approach
- Hard to maintain page sovereignty while extracting shared patterns
- Unclear when to extract vs keep inline

**The goal:**
- Establish repeatable workflow for HTML → React component conversion
- Design integration system (CLI tool, prompt template, or docs)
- Migrate existing static HTML pages to React
- Learn from migration to inform system design

### Input Formats to Handle

**1. Fully-styled HTML pages** (most common)
- Complete `<head>` with fonts, meta tags
- Embedded `<style>` blocks with CSS custom properties
- Content in semantic HTML
- Often includes inline JavaScript for interactions

**2. JSX fragments** (from Gemini concepts)
- Hero section designs
- Component variations
- Style extensions
- May use Tailwind classes or inline styles

**3. Markdown with frontmatter** (future, not yet)
- Content-heavy pages
- May include code fences with HTML/CSS

### Design System Context

**Canonical source:** `_workspace/claude-odyssey-design-system-project/_system/SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md`
- 1660 lines of design system specification
- CSS-based tokens (not JSX-friendly)
- Defines: colors, typography, spacing, components, zone philosophy
- Includes agent directives for preservation and extension
- **Critical:** This is descriptive, not prescriptive (allows extensions)

**Current implementation:** `sites/odyssey-lab/src/App.jsx`
- Working React component with embedded GlobalStyles
- JSX-friendly token implementation
- Partial coverage of SYSTEM spec
- Proves the pattern works

**Philosophy:** Multi-site architecture with page sovereignty
- Sites can extend/override base tokens
- Pages can have embedded styles
- Extraction happens when patterns PROVE reusable (3+ uses)
- Variety during exploration is feature, not bug
- See: `.rules/11-design-system-extensions.md`

### Immediate Migration Target

**Files to convert to React components:**

**From `this-is-odyssey-lab/deploy/`:**
1. `index.html` - Main landing page
2. `TEMP-AS-INDEX-life-philosophy-artifact.html` - Life philosophy content
3. `andrew-1-call-to-adventure.html` - Partnership proposal (andrew page)
4. `andrew-2-threshold-convergence-partnership-exploration.html` - Partnership deep dive
5. `risks-report-complete.html` - Risk analysis document

**From `_workspace/andrew gem merge/`:**
1. `andrew-1-call-to-adventure.html` (1231 lines) - Clean, token-based HTML
2. `andrew-gem-2.jsx` (714 lines) - Actually HTML with .jsx extension, complex interactions

**Destination:** `sites/odyssey-lab/src/pages/` (React components with React Router)

**Critical:** These are working pages with embedded styles that MUST NOT BREAK during migration.

---

## File References (Read These First)

### Design System & Standards

**Primary:**
- `_workspace/claude-odyssey-design-system-project/_system/SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md` - 1660 lines, read sections 1-5 minimum
- `.rules/11-design-system-extensions.md` - Page sovereignty, prototype protection
- `ARCHITECTURE.md` - Multi-site pattern, sections on design system philosophy
- `AGENTS.md` - Coordination, Definition of Done, site sovereignty principle

**Supporting:**
- `.rules/10-design-system.md` - Base system standards
- `.rules/10-react-standards.md` - React/JSX patterns
- `plans/handoffs/001-v1-dry-refactoring-and-completion.md` - Previous handoff format reference

### Current Implementation

**Must read completely:**
- `sites/odyssey-lab/src/App.jsx` - Current working prototype (~1300 lines)
  - Lines 25-100: GlobalStyles component with CSS custom properties
  - Shows embedded style pattern
  - Includes animation definitions, component styles
  
- `sites/odyssey-lab/src/main.jsx` - Entry point
- `sites/odyssey-lab/index.html` - HTML shell
- `config/vite.config.js` - Build configuration with path aliases

### Migration Target Files

**High priority (read all):**
- `_workspace/andrew gem merge/andrew-1-call-to-adventure.html` (1231 lines)
  - Uses: Cinzel + Inter + JetBrains Mono
  - Clean CSS custom properties
  - Components: meta-card, highlight-block, dual-tri-container, phase-stack
  - Light zone only

- `_workspace/andrew gem merge/andrew-gem-2.jsx` (714 lines)
  - Uses: Cormorant Garamond + Inter
  - Complex: lens hero, synchronic bar, zone transitions, crescendo section
  - Has dark/light zone switching
  - Includes Lenis smooth scroll, matrix text effects

**Medium priority (scan, read selectively):**
- `this-is-odyssey-lab/deploy/index.html`
- `this-is-odyssey-lab/deploy/TEMP-AS-INDEX-life-philosophy-artifact.html`
- `this-is-odyssey-lab/deploy/andrew-1-call-to-adventure.html` (may duplicate _workspace version)
- `this-is-odyssey-lab/deploy/andrew-2-threshold-convergence-partnership-exploration.html`
- `this-is-odyssey-lab/deploy/risks-report-complete.html`

### Existing Component Library

**For reference (understand extraction pattern):**
- `shared/components/library/Accordion.jsx` + `.md`
- `shared/components/library/Card.jsx` + `.md`
- `shared/components/library/Button.jsx` + `.md`
- `shared/components/library/SectionHeader.jsx` + `.md`
- `shared/components/library/README.md` - Component catalog

---

## Discovery Requirements (DO THIS FIRST)

### Discovery 1: Style Analysis Audit

**Objective:** Understand token usage, duplication, and extension patterns across all files.

**Process:**
1. Read all target HTML files (7 files)
2. Extract all CSS custom properties (`:root { }` blocks)
3. Categorize each token:
   - Matches SYSTEM spec v0.3? (note which section)
   - Extension/sub-theme? (document pattern)
   - One-off customization? (flag for potential promotion or keep local)
   - Deprecated/conflicting? (note for cleanup)

4. Compare with:
   - SYSTEM spec v0.3 canonical tokens (sections 2.1-2.6)
   - App.jsx GlobalStyles (lines 25-100)
   - Identify gaps and overlaps

5. Document component-specific styles:
   - Which are reusable patterns?
   - Which are page-specific?
   - Which are poorly named? (content-first)

**Key questions to answer:**
- What % of tokens are shared vs unique?
- Which tokens appear in 3+ files? (candidates for base)
- Which tokens appear in 1-2 files? (keep local)
- Are there conflicting token definitions? (same name, different value)
- What's missing from SYSTEM spec that pages need?

**Output:** `plans/reports/002-style-audit.md`
- Token inventory (categorized table)
- Duplication analysis
- Gap analysis (SYSTEM spec vs actual usage)
- Recommendations for base vs local

### Discovery 2: Component Pattern Extraction

**Objective:** Identify reusable component patterns and their usage frequency.

**Process:**
1. Catalog distinct component patterns from HTML:
   - **From andrew-1:** meta-card, highlight-block, dual-tri-container, phase-stack, comp-grid, honest-block, dna-grid
   - **From andrew-gem-2:** lens-container (lens-layer-blur/sharp), synchronic-bar, content-block (deep-dive-container), proof-point-wrapper, echo-word, crescendo-section
   - **From App.jsx:** Existing patterns
   - **From other HTML files:** Additional patterns

2. For each pattern, document:
   - **Structure:** DOM hierarchy, semantic meaning
   - **Styling:** Embedded or token-based?
   - **Behavior:** Static or interactive?
   - **Usage count:** How many files use it?
   - **Variations:** Are instances identical or subtly different?
   - **Current naming:** Content-first or form-first?

3. Evaluate extraction potential:
   - **3+ uses:** Strong candidate for `shared/components/library/`
   - **2 uses:** Flag for future extraction
   - **1 use:** Keep inline in page component

4. Propose form-first names:
   - `meta-card` → `MetadataCard` (good, already form-first)
   - `honest-block` → `ContrastPanel` or `InvertedSection` (form-first alternative)
   - `dual-tri-container` → `DualTriumvirate` or `SplitDiagram` (form-first)
   - etc.

**Key questions to answer:**
- Which patterns are truly reusable?
- Which are page-specific one-offs?
- Are naming conventions consistent?
- Would extraction add value or just complexity?

**Output:** `plans/reports/002-component-candidates.md`
- Component inventory (pattern catalog)
- Usage frequency table
- Extraction recommendations (conservative approach)
- Naming proposals (form-first)

### Discovery 3: Token Convergence Gap Analysis

**Objective:** Determine if shared base GlobalStyles is warranted or if page-specific embedding is better.

**Process:**
1. Create comparison matrix:
   - SYSTEM spec v0.3 tokens (all categories)
   - App.jsx GlobalStyles tokens (current implementation)
   - HTML file embedded tokens (aggregate across all)

2. Analyze coverage:
   - What's in SYSTEM spec but missing from App.jsx? (incomplete implementation)
   - What's in HTML files but missing from SYSTEM spec? (extensions or gaps)
   - What's in App.jsx but not in SYSTEM spec? (implementation divergence)

3. Quantify duplication:
   - How many tokens are repeated across 3+ files?
   - How many tokens are unique to 1-2 files?
   - Total lines of duplicated CSS?

4. Evaluate trade-offs:
   - **Create shared base now:**
     - Pros: DRY, single source of truth, easier updates
     - Cons: Risk breaking working styles, may not fit all pages, upfront work
   - **Defer to post-migration:**
     - Pros: Faster, preserves working code, learn first
     - Cons: Duplication during migration, harder to extract later

**Key questions to answer:**
- Is duplication significant enough to warrant extraction?
- Are tokens actually identical or subtly different?
- Does SYSTEM spec cover 80%+ of needs?
- Would shared base force unwanted conformity?

**Output:** Add section to `plans/reports/002-style-audit.md`
- Coverage comparison table
- Duplication metrics
- Recommendation: Create shared base now, defer, or hybrid approach
- Rationale for recommendation

### Discovery 4: React Router Architecture Design

**Objective:** Design routing structure that works with multi-site pattern and Vercel deployment.

**Process:**
1. List all pages to create:
   - Home (current App.jsx)
   - CallToAdventure (andrew-1)
   - ThresholdConvergence (andrew-gem-2)
   - LifePhilosophy (TEMP-AS-INDEX)
   - RisksReport
   - (Others from this-is-odyssey-lab/deploy/)

2. Design route structure:
   - Simple flat routes? (`/`, `/call-to-adventure`, etc.)
   - Nested routes? (probably not needed)
   - Route params? (probably not needed)

3. Determine navigation approach:
   - No shared nav? (pages are standalone)
   - Shared header? (extract if common)
   - Shared footer? (extract if common)
   - Navigation component? (if needed)

4. Layout strategy:
   - No layout wrapper? (simplest, pages fully self-contained)
   - Shared layout? (if common structure exists)
   - Nested layouts? (probably overkill)

5. GlobalStyles placement:
   - Site-level import? (in App.jsx wrapper)
   - Page-level embedding? (current pattern, more flexible)
   - Hybrid? (base at site, extensions at page)

6. Validate against constraints:
   - **Vercel:** Static export or SSR? (probably static)
   - **Multi-site:** This is ONE site, don't break pattern
   - **Page sovereignty:** Can pages override styles?

**Key questions to answer:**
- Do pages share structure? (header/footer/nav)
- Will there be 10+ pages or just 5-7?
- Should routes be nested or flat?
- Where should GlobalStyles live?

**Output:** `plans/reports/002-routing-architecture.md`
- Proposed route structure (list with paths)
- Component hierarchy diagram
- GlobalStyles placement decision
- Navigation approach (if any)
- Rationale for choices

---

## Blind Spot Testing (MANDATORY CHECKS)

### Test 1: Design System Philosophy Alignment

**Purpose:** Ensure migration preserves page sovereignty and doesn't force conformity.

**Critical principle from governance:**
> "Multi-site ≠ Forced Conformity. Sites and pages can extend/override base tokens. Extraction happens when patterns PROVE reusable (3+ uses), not when agents think they 'should' be shared."

**Check:**
- [ ] Can pages keep embedded styles if needed?
  - If NO: Plan violates page sovereignty. Revise to allow embedding.
  
- [ ] Is there a forcing function toward shared base, or opt-in?
  - If forcing: Plan violates philosophy. Make opt-in.
  
- [ ] Does migration preserve working styles AS-IS first?
  - If NO: Risky. Must preserve first, refactor later (maybe).

**If ANY check fails:** STOP. Revise plan to fix before proceeding.

**Document result in:** `plans/reports/002-migration-completion-report.md` (Blind Spot Test 1 section)

### Test 2: Component Library Naming

**Purpose:** Ensure components are named form-first (reusable) not content-first (brittle).

**Examples:**
- **Content-first (BAD):** `AndrewMetaCard`, `PrinciplesAccordion`, `TBCProofPoint`
- **Form-first (GOOD):** `MetadataCard`, `Accordion`, `ProofCard`, `TestimonialBlock`

**Check:**
- [ ] Scan all proposed component names (from Discovery 2)
- [ ] Flag any content-based names
- [ ] Propose form-based alternatives for each
- [ ] Verify alternatives are generic and reusable

**If content-based names found:** Rename before extraction. Document in component candidates report.

**Document result in:** `plans/reports/002-component-candidates.md` (Naming section)

### Test 3: Extraction Timing

**Purpose:** Prevent premature abstraction (which is worse than variety).

**Rule from governance:**
> "Extract to shared/components/library/ when PROVEN reusable (3+ uses across sites). NOT when an agent thinks it 'should' be shared."

**Check for each component candidate:**
- [ ] Used in 3+ places? → **Extract**
- [ ] Used in 2 places? → **Flag for future extraction**
- [ ] Used in 1 place? → **Keep inline in page component**

**For 2-use components:**
- Document in candidates report
- DO NOT extract yet
- Wait for 3rd use to validate pattern

**If extracting components with <3 uses:** STOP. You're over-abstracting. Keep inline.

**Document result in:** `plans/reports/002-component-candidates.md` (Extraction Timing section)

### Test 4: Integration Workflow System Scope

**Purpose:** Determine appropriate level of automation for integration workflow.

**Evaluation matrix:**

| Factor | Your Assessment | Score | Recommended Approach |
|--------|-----------------|-------|---------------------|
| **Frequency of use** | Daily / Weekly / Monthly | | CLI if daily, Prompt if weekly, Docs if monthly |
| **Conversion complexity** | Mechanical / Mixed / High judgment | | CLI if mechanical, Prompt if mixed, Docs if judgment |
| **Input variation** | Consistent / Moderate / High variation | | CLI if consistent, Prompt/Docs if high variation |
| **Agent reliability** | Can automate / Needs review / Manual better | | CLI if automate, Prompt if needs review |

**Evaluate based on discoveries:**
1. **Frequency:** How often does Brandon do this? (ask or infer from workflow description)
2. **Complexity:** From Discovery 1-2, how mechanical is HTML → JSX conversion?
3. **Variation:** From style audit, how consistent are HTML inputs?
4. **Reliability:** Can agents reliably convert without breaking styles?

**Recommendations:**
- **CLI Tool:** Only if daily use + mechanical conversion + consistent inputs
- **Prompt Template:** If weekly use + requires judgment + moderate variation (LIKELY BEST)
- **Documentation Only:** If monthly use + high judgment + high variation

**Make recommendation with clear rationale.**

**Document in:** `plans/reports/002-integration-system-recommendation.md`
- Evaluation of each factor
- Scoring and reasoning
- Recommended approach
- Implementation outline (if building system)

### Test 5: Token Migration Path

**Purpose:** Decide if creating shared base GlobalStyles is worth it now or should be deferred.

**Context from Discovery 3:**
- Token duplication level
- SYSTEM spec coverage gaps
- Risk of breaking working styles

**Evaluation:**

**Option A: Create shared base now**
- **When to choose:**
  - 80%+ token overlap across pages
  - SYSTEM spec covers most needs
  - Low risk of style breakage
  - Team wants DRY immediately
- **Effort:** High upfront (2-4 hours)
- **Benefit:** Single source of truth, easier updates
- **Risk:** May break working styles, forced convergence

**Option B: Defer to post-migration**
- **When to choose:**
  - <60% token overlap
  - SYSTEM spec has gaps
  - High style variation
  - Want to learn patterns first
- **Effort:** Low now, moderate later
- **Benefit:** Preserves working code, learn first
- **Risk:** Duplication during migration

**Option C: Hybrid approach**
- **When to choose:**
  - 60-80% token overlap
  - Some pages fit base, others don't
  - Want flexibility
- **Effort:** Moderate
- **Benefit:** Best of both worlds
- **Risk:** More complex

**Based on Discovery 3 findings, recommend one option with clear rationale.**

**Document in:** `plans/reports/002-style-audit.md` (Recommendation section)
- Token overlap metrics (from discovery)
- Coverage analysis
- Risk assessment
- Recommended path
- Rationale

---

## Decision Points (You Must Choose)

After completing discovery and blind spot testing, you MUST make these decisions and document your rationale.

### Decision 1: Base GlobalStyles — Now or Later?

**Context:**
- SYSTEM spec v0.3 exists (1660 lines, CSS-based)
- App.jsx has working embedded GlobalStyles (JSX-friendly, partial coverage)
- HTML files have embedded styles (various coverage)

**Options:**
- **A) Create shared/design-system/GlobalStyles.jsx now**
  - Extract from SYSTEM spec
  - Import at site level
  - Remove duplicated tokens from pages
  
- **B) Defer until post-migration**
  - Keep page-level embedded styles
  - Extract base after observing patterns
  - Lower risk, learn first
  
- **C) Hybrid approach**
  - Create base for core tokens
  - Allow page extensions
  - Best of both worlds

**Decision criteria:**
- Token overlap % (from Discovery 3)
- SYSTEM spec coverage (from Discovery 3)
- Risk tolerance
- Time constraints

**YOUR DECISION:** [Fill in A/B/C]

**RATIONALE:** [Explain why based on discovery findings]

**Document in:** `plans/reports/002-migration-completion-report.md` (Decision 1 section)

### Decision 2: Component Extraction — Aggressive or Conservative?

**Context:**
- Discovery 2 identified reusable patterns
- Blind Spot Test 3 validated extraction timing
- Premature abstraction is worse than variety

**Options:**
- **Aggressive:** Extract all patterns that COULD be reused (7-10 components)
  - Higher upfront effort
  - More abstractions to maintain
  - Risk of over-engineering
  
- **Conservative:** Extract only patterns used 3+ times NOW (2-4 components)
  - Lower upfront effort
  - Wait for 3rd use to validate
  - Simpler codebase
  
- **None:** Complete migration, defer extraction to Phase 6
  - Fastest migration
  - Learn patterns first
  - Extract later when proven

**Decision criteria:**
- How many patterns have 3+ uses? (from Discovery 2)
- Are patterns truly identical or subtly different?
- Confidence in naming/API design
- Time constraints

**YOUR DECISION:** [Fill in Aggressive/Conservative/None]

**RATIONALE:** [Explain why based on discovery findings]

**Document in:** `plans/reports/002-migration-completion-report.md` (Decision 2 section)

### Decision 3: Integration System — Build vs Document?

**Context:**
- Blind Spot Test 4 evaluated frequency, complexity, variation
- Need repeatable workflow for future HTML → React conversions
- Trade-off between automation and flexibility

**Options:**
- **Build CLI Tool:** Automate HTML → JSX conversion
  - `npm run integrate <file.html>`
  - Requires consistent input patterns
  - Ongoing maintenance burden
  
- **Write Prompt Template:** Structured agent instructions
  - Step-by-step guidance for AI agents
  - Flexible for variation
  - No code to maintain
  
- **Document Process:** Manual guide only
  - Written instructions
  - Most flexible
  - Slower per-use
  
- **Defer Entirely:** Focus on migration only, system later
  - Learn from migration first
  - Design system after experiencing pain points

**Decision criteria:**
- Frequency assessment (from Test 4)
- Complexity assessment (from Test 4)
- Variation assessment (from Test 4)
- Time available for system building

**YOUR DECISION:** [Fill in CLI/Prompt/Docs/Defer]

**RATIONALE:** [Explain why based on Test 4 evaluation]

**Document in:** `plans/reports/002-integration-system-recommendation.md` (Decision section)

### Decision 4: Routing Strategy — Simple or Sophisticated?

**Context:**
- Discovery 4 designed routing architecture
- Multi-site pattern requires correct scoping
- Vercel deployment considerations

**Options:**
- **Simple:** Basic routes, no layouts, each page self-contained
  - Easiest to implement
  - Maximum page sovereignty
  - No shared structure
  
- **Layouts:** Shared header/footer wrapper, pages in outlet
  - Moderate complexity
  - Shared navigation
  - Consistent structure
  
- **Nested:** Route hierarchy with nested layouts
  - Most complex
  - Probably overkill
  - Hard to maintain

**Decision criteria:**
- Do pages share navigation? (from Discovery 4)
- Will there be 10+ pages or just 5-7?
- Does design require shared structure?

**YOUR DECISION:** [Fill in Simple/Layouts/Nested]

**RATIONALE:** [Explain why based on discovery findings]

**Document in:** `plans/reports/002-routing-architecture.md` (Decision section)

---

## Proposed Execution Plan (Challenge This)

**IMPORTANT:** This is a PROPOSED plan. After discovery, you may find better approaches. CHALLENGE these steps if your findings suggest different priorities or methods.

### Phase 1: Discovery & Planning (3-4 hours)

**1.1 Complete all discovery tasks**
- [ ] Style analysis audit → `plans/reports/002-style-audit.md`
- [ ] Component pattern extraction → `plans/reports/002-component-candidates.md`
- [ ] Token convergence gap analysis → (section in style audit)
- [ ] React Router architecture design → `plans/reports/002-routing-architecture.md`

**1.2 Run all blind spot tests**
- [ ] Test 1: Philosophy alignment
- [ ] Test 2: Naming validation
- [ ] Test 3: Extraction timing
- [ ] Test 4: Integration system scope
- [ ] Test 5: Token migration path

**1.3 Make all decisions**
- [ ] Decision 1: Base GlobalStyles timing
- [ ] Decision 2: Component extraction strategy
- [ ] Decision 3: Integration system approach
- [ ] Decision 4: Routing complexity
- Document rationale for each

**1.4 Create detailed execution plan**
- Based on discoveries and decisions
- May deviate from Phase 2-5 below
- Document deviations with rationale

### Phase 2: Infrastructure Setup (1-2 hours)

**2.1 Install dependencies**
```bash
npm install react-router-dom
```

**2.2 Create directory structure**
```
sites/odyssey-lab/src/
├── pages/                    # NEW: Page components
│   ├── Home.jsx             # Migrated from current App.jsx
│   ├── CallToAdventure.jsx  # From andrew-1
│   ├── ThresholdConvergence.jsx # From andrew-gem-2
│   ├── LifePhilosophy.jsx
│   ├── RisksReport.jsx
│   └── [others as discovered]
├── components/              # Site-specific components (if any)
├── App.jsx                  # MODIFY: Now router wrapper
└── main.jsx                 # MODIFY: Add BrowserRouter if needed
```

**2.3 Optional: Create shared base (if Decision 1 = A)**
```
shared/design-system/
├── GlobalStyles.jsx         # NEW: Extracted from SYSTEM spec
├── tokens.js               # NEW: JS exports for programmatic use
└── README.md               # UPDATE: Document base tokens
```

### Phase 3: First Conversion (Prove Pattern) (1-2 hours)

**3.1 Choose simplest file for first conversion**
- Review file sizes and complexity
- Pick smallest/simplest to prove pattern
- Likely `this-is-odyssey-lab/deploy/index.html`

**3.2 Convert HTML → React Component**

**Mechanical steps:**
1. Create new file: `sites/odyssey-lab/src/pages/[PageName].jsx`
2. Copy HTML `<style>` block → GlobalStyles component or embed
3. Convert HTML → JSX:
   - `class=` → `className=`
   - `style="..."` → `style={{...}}`
   - Self-closing tags: `<img>` → `<img />`
   - Comments: `<!-- -->` → `{/* */}`
4. Extract font imports to component or <head>
5. Convert inline JavaScript to React hooks
6. Import necessary libraries (lucide-react, framer-motion, etc.)

**Judgment calls:**
- Keep embedded GlobalStyles or import shared base?
- Extract repeated patterns or keep inline?
- Preserve animations/interactions or simplify?

**3.3 Test in browser**
- Add route to App.jsx
- Run `npm run dev`
- Navigate to page
- Verify styles render correctly
- Check console for errors
- Test interactions (if any)

**3.4 Document process**
- What was mechanical vs judgment?
- What took the most time?
- What was confusing or error-prone?
- What would automation help with?
- What requires human judgment?

**Output:** `plans/lessons/002-first-conversion-lessons.md`

### Phase 4: Remaining Conversions (3-4 hours)

**4.1 Convert remaining HTML files**

**Priority order (adjust based on complexity):**
1. Simplest remaining file
2. Medium complexity
3. Most complex (andrew-gem-2 likely last)

**For each file:**
1. Create page component
2. Convert HTML → JSX (following Phase 3 pattern)
3. Add route to App.jsx
4. Test in browser
5. Fix any issues
6. Document any new patterns or issues

**4.2 Flag extraction candidates**
- Note repeated patterns across pages
- DO NOT extract yet (too early unless 3+ uses)
- Document in component candidates report

**4.3 Refactor App.jsx to router wrapper**

**From:**
```jsx
// App.jsx currently has full page component
function App() {
  return (
    <>
      <GlobalStyles />
      {/* Full page content here */}
    </>
  );
}
```

**To (Simple routing):**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CallToAdventure from './pages/CallToAdventure';
// ... other imports

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call-to-adventure" element={<CallToAdventure />} />
        {/* ... other routes */}
      </Routes>
    </BrowserRouter>
  );
}
```

**Or (with layouts, if Decision 4 = Layouts):**
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// ... page imports

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/call-to-adventure" element={<CallToAdventure />} />
          {/* ... other routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

### Phase 5: Optional Refactoring (1-2 hours, conditional)

**Only execute if decisions recommend:**

**5.1 Extract base GlobalStyles (if Decision 1 = A)**

**Process:**
1. Read SYSTEM spec v0.3 sections 2.1-2.6 (tokens)
2. Convert CSS custom properties to JSX-friendly format
3. Create `shared/design-system/GlobalStyles.jsx`
4. Import in App.jsx or page components
5. Remove duplicated tokens from page GlobalStyles
6. Keep page-specific extensions in page components
7. Test ALL pages still render correctly
8. Fix any style breakage

**Warning:** This is risky. Pages may break. Test thoroughly.

**5.2 Extract proven components (if Decision 2 ≠ None)**

**Only extract components with 3+ uses:**

For each component to extract:
1. Create `shared/components/library/[ComponentName].jsx`
2. Create `shared/components/library/[ComponentName].md` (documentation)
3. Extract component from page (keep one as reference)
4. Add props for customization
5. Replace inline usage with import
6. Test in all pages using it
7. Update `shared/components/library/README.md` catalog

**Follow existing pattern from Accordion, Card, Button, SectionHeader**

### Phase 6: Integration Workflow System (2-3 hours, conditional)

**Execute based on Decision 3:**

**Option: CLI Tool**

Create `scripts/integrate-html.js`:
```javascript
#!/usr/bin/env node
// HTML → JSX conversion automation
// Usage: npm run integrate <file.html>
```

**Features:**
- Parse HTML file
- Extract <style> block
- Convert HTML → JSX (className, self-closing tags, etc.)
- Generate React component file
- Report manual steps needed

**Create `scripts/README.md` with usage instructions**

**Option: Prompt Template**

Create `prompts/html-integration-workflow.md`:
```markdown
# HTML-to-React Integration Workflow

## Step 1: Analyze Input
- [ ] Read HTML file completely
- [ ] Extract embedded styles
- [ ] Identify interactive elements
- [ ] Note dependencies (fonts, libraries)

## Step 2: Setup Component
- [ ] Create new file in sites/odyssey-lab/src/pages/
- [ ] Import React and necessary libraries
- [ ] Decide on GlobalStyles approach (embedded vs imported)

## Step 3: Convert HTML
- [ ] Change class to className
- [ ] Convert inline styles to JSX format
- [ ] Self-close tags
- [ ] Convert comments
- [ ] Extract font imports

## Step 4: Handle Interactions
... (detailed step-by-step guide)
```

**Option: Documentation Only**

Create `docs/INTEGRATION_WORKFLOW.md`:
- Written guide for manual conversion
- Examples and gotchas
- Decision flowchart

**Option: Defer**

Skip system building, focus on lessons from migration
- Document pain points
- Design system in future handoff

**6.2 Test integration system**

If system was built:
1. Find or create new test HTML file
2. Run system (CLI, follow prompt, or follow docs)
3. Verify output component works
4. Document pain points and edge cases
5. Iterate if time permits

---

## Validation Checklist (Before Completion)

### Migration Validation

- [ ] All target HTML files converted to React components (list them)
- [ ] All pages render in browser without errors
- [ ] All pages accessible via React Router (test each route)
- [ ] Dev server runs: `npm run dev` (no errors)
- [ ] No console errors when navigating between pages
- [ ] Styles render correctly (visual comparison with original HTML)
- [ ] Interactive elements work (animations, hover states, scroll effects)
- [ ] All routes resolve correctly (no 404s)
- [ ] External dependencies loaded (fonts, libraries)

### Architecture Validation

- [ ] File structure matches multi-site pattern (`sites/odyssey-lab/src/pages/`)
- [ ] Page sovereignty preserved (pages can have embedded styles)
- [ ] No forced conformity (didn't break working styles to fit shared base)
- [ ] React Router structure makes sense for current + future pages
- [ ] Path aliases work (`@shared`, `@sites` if used)
- [ ] Build succeeds: `npm run build` (if tested)

### System Validation (If Integration System Built)

- [ ] Integration system tested with fresh HTML file
- [ ] System documentation clear and complete
- [ ] Pain points identified and documented
- [ ] Recommended improvements noted
- [ ] System works reliably (or documented limitations)

### Governance Validation

- [ ] All discoveries completed and documented
- [ ] All blind spot tests run and documented
- [ ] All decisions made with clear rationale
- [ ] Lessons learned captured
- [ ] Completion report created
- [ ] Handoff format follows 001 standard (YAML front matter, clear sections)

---

## Files to Create/Modify

### New Files (Guaranteed)

**Discovery & Reports:**
1. `plans/reports/002-style-audit.md` — Token analysis, duplication, gaps, recommendations
2. `plans/reports/002-component-candidates.md` — Pattern extraction, usage frequency, naming proposals
3. `plans/reports/002-routing-architecture.md` — Route structure, layout decisions, GlobalStyles placement
4. `plans/reports/002-integration-system-recommendation.md` — Test 4 evaluation, system recommendation
5. `plans/lessons/002-first-conversion-lessons.md` — What we learned from first page migration

**Page Components:**
6. `sites/odyssey-lab/src/pages/Home.jsx` — Current App.jsx content migrated
7. `sites/odyssey-lab/src/pages/CallToAdventure.jsx` — andrew-1-call-to-adventure.html
8. `sites/odyssey-lab/src/pages/ThresholdConvergence.jsx` — andrew-gem-2.jsx
9. `sites/odyssey-lab/src/pages/LifePhilosophy.jsx` — TEMP-AS-INDEX-life-philosophy-artifact.html
10. `sites/odyssey-lab/src/pages/RisksReport.jsx` — risks-report-complete.html
11. (Additional pages from this-is-odyssey-lab/deploy/ as discovered)

**Completion:**
12. `plans/reports/002-migration-completion-report.md` — Final status, decisions, files, validation
13. `plans/lessons/002-migration-lessons.md` — Comprehensive lessons learned

### Modified Files (Guaranteed)

1. `sites/odyssey-lab/src/App.jsx` — Refactor to router wrapper (major change)
2. `sites/odyssey-lab/src/main.jsx` — May need BrowserRouter wrapper
3. `package.json` — Add react-router-dom dependency
4. `config/vite.config.js` — May need routing configuration for Vercel

### Conditional Files (Based on Decisions)

**If Decision 1 = Create shared base:**
- `shared/design-system/GlobalStyles.jsx` — Base tokens extracted from SYSTEM spec
- `shared/design-system/tokens.js` — JavaScript exports for programmatic access
- `shared/design-system/README.md` — Document base tokens and usage

**If Decision 2 = Extract components:**
- `shared/components/library/[ComponentName].jsx` — Component implementation
- `shared/components/library/[ComponentName].md` — Component documentation
- `shared/components/library/README.md` — Update catalog with new components

**If Decision 3 = CLI tool:**
- `scripts/integrate-html.js` — HTML → JSX conversion script
- `scripts/README.md` — Usage documentation

**If Decision 3 = Prompt template:**
- `prompts/html-integration-workflow.md` — Step-by-step agent instructions
- `prompts/README.md` — Prompt library documentation

**If Decision 3 = Documentation:**
- `docs/INTEGRATION_WORKFLOW.md` — Manual conversion guide
- `docs/README.md` — Documentation index

**If Decision 4 = Layouts:**
- `sites/odyssey-lab/src/components/Layout.jsx` — Shared layout wrapper
- `sites/odyssey-lab/src/components/Navigation.jsx` — Navigation component (if needed)

---

## Completion Requirements

### YOU MUST CREATE (Non-Negotiable)

**1. Migration Completion Report**

`plans/reports/002-migration-completion-report.md`

Required sections:
- **Executive Summary** — What was accomplished
- **Files Migrated** — Complete list with paths
- **Decisions Made** — All 4 decisions with rationale
- **Discoveries** — Summary of findings from discovery phase
- **Blind Spot Test Results** — Pass/fail for each test
- **Issues Encountered** — Problems and how they were solved
- **What Worked Well** — Successes and effective patterns
- **What Didn't Work Well** — Pain points and problems
- **Validation Status** — Checklist results
- **What's Left To Do** — Incomplete items or future work

**2. Comprehensive Lessons Learned**

`plans/lessons/002-migration-lessons.md`

Required sections:
- **HTML → React Conversion** — What's mechanical vs judgment
- **Token Convergence** — Base vs embedded styles learnings
- **Component Extraction Timing** — When to extract vs keep inline
- **Integration Workflow Needs** — What system would help (based on Test 4)
- **Routing Architecture** — What worked, what would do differently
- **Page Sovereignty** — How well was it preserved
- **Agent Guidance** — Recommendations for future migrations
- **System Improvements** — Suggestions for tooling/process

**3. Updated Handoff (This File)**

Update `plans/handoffs/002-html-to-react-migration.md` with:
- Discovery results integrated (link to reports)
- Decisions documented in decision point sections
- Execution details added (what actually happened)
- Deviations from proposed plan explained
- Status: Complete/Blocked/Partial

### Completion Reply Format

When task is complete, reply with:

```markdown
## Build Complete: HTML-to-React Migration + Integration System

**Report:** `plans/reports/002-migration-completion-report.md`
**Lessons:** `plans/lessons/002-migration-lessons.md`
**Handoff:** `plans/handoffs/002-html-to-react-migration.md` (updated)

### Status
[Complete | Blocked | Partial]

### Decisions Made
- Decision 1 (Base GlobalStyles): [A/B/C] — [brief rationale]
- Decision 2 (Component Extraction): [Aggressive/Conservative/None] — [brief rationale]
- Decision 3 (Integration System): [CLI/Prompt/Docs/Defer] — [brief rationale]
- Decision 4 (Routing Strategy): [Simple/Layouts/Nested] — [brief rationale]

### Files Migrated
- Home (from current App.jsx)
- CallToAdventure (from andrew-1)
- ThresholdConvergence (from andrew-gem-2)
- [list others]

### Validation Results
- [x] All pages render without errors
- [x] No console errors
- [x] Dev server runs successfully
- [x] All routes accessible
- [x] Discovery complete
- [x] Lessons documented
- [x] Integration system [built/documented/deferred]

### Integration System
[Description: What was built (CLI/prompt/docs), where it lives, how to use it, or why deferred]

### Key Learnings
- [2-3 critical lessons that affect future work]

### Recommended Next Steps
- [From lessons learned, what should happen next]

### Blockers (If Any)
- [List anything that prevented full completion]
```

---

## Critical Context (Don't Miss This)

### Page Sovereignty Principle

**From `.rules/11-design-system-extensions.md`:**

> "Each page and site in `sites/` can have its own embedded GlobalStyles component. Can extend or override base design tokens. Can experiment with custom animations/styles. Can import from `@shared` OR NOT (page's choice)."

**What this means for you:**
- Pages can have embedded `<GlobalStyles>` components
- Don't force pages to import shared base if they don't need it
- Preserve custom animations and extensions
- Variety is a feature, not a bug (during exploration phase)

### Prototype Protection

**From `AGENTS.md`:**

> "If code works, don't break it during migration. Move AS-IS first, refactor later (maybe). Extraction happens when patterns PROVE reusable (3+ uses across sites). Premature abstraction is worse than variety."

**What this means for you:**
- FIRST: Get HTML working as React component
- THEN: Consider refactoring (only if clear benefit)
- Don't break working styles to "clean them up"
- Don't extract components because they "should" be shared

### Multi-Site Architecture

**This is ONE site of potentially many.**

Site structure:
```
sites/
├── odyssey-lab/          # Current site (your focus)
│   ├── src/
│   │   ├── pages/        # Page components
│   │   ├── components/   # Site-specific components
│   │   └── App.jsx       # Site router
│   ├── public/
│   └── index.html
└── [future-site]/        # Future sites (don't break pattern)
```

Shared across sites:
```
shared/
├── design-system/        # Optional base tokens
├── components/library/   # Proven reusable components
└── utils/               # Shared utilities
```

**What this means for you:**
- Keep site-specific code in `sites/odyssey-lab/`
- Only promote to `shared/` when used across 3+ sites (not there yet)
- Don't assume all sites will look identical

### Font Variations Are Allowed

**From style analysis preview:**
- andrew-1: Cinzel + Inter + JetBrains Mono
- andrew-gem-2: Cormorant Garamond + Inter
- NewHomepage-v2: Cinzel + Montserrat + Cormorant Garamond

**Constraint (from governance):**
> "Must retain: Primary/header type (e.g., Cinzel for display fonts)"

**What this means for you:**
- Pages can use different font combinations
- Primary display font should be Cinzel-like (or explicitly justified)
- Body fonts can vary
- Document font choices in style audit

### CSS Custom Properties Pattern

**All Odyssey pages use CSS custom properties:**

```css
:root {
  --color-bronze: #B48E55;
  --color-lab-blue: #38BDF8;
  /* etc */
}

.component {
  color: var(--color-bronze);
}
```

**When converting to React:**
- Preserve this pattern in GlobalStyles component
- Don't hardcode values
- Keep token names consistent (or document deviations)

---

## Integration Workflow System Requirements

**Purpose:** Enable rapid HTML (from Claude.ai/Gemini) → React component → deployed page

### Must Handle

1. **HTML with embedded `<style>` blocks** (most common case)
   - Complete HTML document with `<head>` and `<body>`
   - Google Fonts links in `<head>`
   - CSS custom properties in `<style>`
   - Inline JavaScript for interactions
   - External library imports (CDN links)

2. **JSX fragments** (Gemini hero concepts)
   - Pre-formatted JSX code
   - May use Tailwind classes
   - May include inline styles
   - Component-level, not full page

3. **Markdown with frontmatter** (future, not yet)
   - YAML frontmatter
   - Markdown content
   - Embedded code fences with HTML/CSS

### Must Preserve

- **Working styles** — No visual regressions
- **Custom animations/components** — Page sovereignty
- **Design token references** — CSS custom properties
- **Interactive behaviors** — Event handlers, scroll effects
- **External dependencies** — Fonts, libraries

### Must Output

**React component file:**
```jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // if needed
import { Icon1, Icon2 } from 'lucide-react'; // if needed

const GlobalStyles = () => (
  <style>{`
    /* Embedded styles from HTML */
  `}</style>
);

function PageName() {
  // State and effects if needed
  
  return (
    <>
      <GlobalStyles />
      {/* Converted JSX */}
    </>
  );
}

export default PageName;
```

### Must Document

**In conversion process or output:**
- What was auto-converted (mechanical changes)
- What requires manual review (judgment calls)
- What tokens are custom vs base (for potential extraction)
- What components are extraction candidates (3+ uses)
- What external dependencies were detected
- What interactive behaviors need testing

### Evaluation Criteria for System Type

| Factor | CLI Tool | Prompt Template | Docs Only |
|--------|----------|-----------------|-----------|
| **Conversion is mechanical** | ✅ Good fit | ❌ Overkill | ❌ Too manual |
| **Conversion requires judgment** | ❌ Hard to automate | ✅ Good fit | ✅ Good fit |
| **Used daily** | ✅ Worth building | ⚠️ Maybe | ❌ Too slow |
| **Used weekly** | ⚠️ Maybe | ✅ Good fit | ⚠️ Maybe |
| **Used monthly** | ❌ Not worth it | ✅ Good fit | ✅ Good fit |
| **High variation in inputs** | ❌ Hard to handle | ✅ Flexible | ✅ Flexible |
| **Consistent input patterns** | ✅ Can automate | ⚠️ Maybe overkill | ❌ Repetitive |

**Your assessment from Test 4 will determine which to build (or defer).**

---

## Appendix A: Style Variation Examples

**Document these in your style audit:**

### andrew-1-call-to-adventure.html
- **Fonts:** Cinzel (display), Inter (body), JetBrains Mono (tech)
- **Zone:** Light only
- **Tokens:** Clean CSS custom properties, token-based
- **Components:** meta-card, highlight-block, dual-tri-container, phase-stack, comp-grid, honest-block, dna-grid
- **Style:** Professional, clean, business document aesthetic

### andrew-gem-2.jsx
- **Fonts:** Cormorant Garamond (display), Inter (body)
- **Zone:** Dark hero, transitions to light, returns to dark
- **Tokens:** Extensive token system, dark/light variants
- **Components:** lens-container (dual-layer blur/sharp), synchronic-bar, deep-dive-container, proof-point-wrapper, echo-word, crescendo-section
- **Style:** Dramatic, high-contrast, interactive, cinematic
- **Libraries:** Lenis smooth scroll, matrix text effects, zone transitions

### NewHomepage-v2.jsx (current App.jsx)
- **Fonts:** Cinzel (display), Montserrat (sans), Cormorant Garamond (serif accent)
- **Zone:** Light with alchemy theme
- **Tokens:** Comprehensive token system, gemini-base-b integration
- **Components:** Multiple hero variants, alchemy animations, zone systems
- **Style:** Mystical, alchemical, brand-focused

### Key Observations for Token Convergence

**Shared across all:**
- Bronze/Gold color palette (`--color-bronze`, `--color-gold`)
- Lab Blue variants (`--color-lab-blue`, `--color-lab-blue-electric`)
- Dark zone colors (`--dark-bg-deep`, `--dark-text-primary`)
- Spacing system (consistent values)

**Variations:**
- **Fonts:** Different combinations, all valid
- **Zone usage:** Some light-only, some with transitions
- **Extensions:** Custom animations, page-specific tokens
- **Components:** Unique per page, some patterns repeated

**Implications:**
- Core color/spacing tokens COULD be in shared base
- Font stacks should stay page-level (too much variation)
- Zone system might be base (if used across pages)
- Custom animations stay page-level

---

## Appendix B: Component Extraction Examples

### Good Extraction (3+ uses, generic naming)

**Before (inline in 3 pages):**
```jsx
<div className="meta-card">
  <div className="meta-label">Date</div>
  <div className="meta-value">December 7, 2025</div>
</div>
```

**After (extracted to shared):**
```jsx
// shared/components/library/MetadataCard.jsx
export function MetadataCard({ label, value, layout = 'vertical' }) {
  return (
    <div className={`meta-card meta-card--${layout}`}>
      <div className="meta-label">{label}</div>
      <div className="meta-value">{value}</div>
    </div>
  );
}

// Usage in page
<MetadataCard label="Date" value="December 7, 2025" />
```

### Bad Extraction (1-2 uses, content-specific naming)

**Don't do this:**
```jsx
// shared/components/library/AndrewPartnershipMetaCard.jsx
export function AndrewPartnershipMetaCard() {
  return (
    <div className="meta-card">
      <div className="meta-label">To</div>
      <div className="meta-value">Andrew</div>
      {/* hardcoded partnership content */}
    </div>
  );
}
```

**Why it's bad:**
- Content-specific name (not reusable)
- Only 1 use case (premature abstraction)
- Hardcoded content (not flexible)

**Keep it inline instead:**
```jsx
// In page component
<div className="meta-card">
  <div className="meta-label">To</div>
  <div className="meta-value">Andrew</div>
</div>
```

---

## Appendix C: React Conversion Gotchas

### Common HTML → JSX Changes

1. **Attributes**
   - `class="..."` → `className="..."`
   - `for="..."` → `htmlFor="..."`
   - `onclick="..."` → `onClick={handleClick}`
   - `style="color: red;"` → `style={{ color: 'red' }}`

2. **Self-closing tags**
   - `<img src="...">` → `<img src="..." />`
   - `<input type="text">` → `<input type="text" />`
   - `<br>` → `<br />`

3. **Comments**
   - `<!-- HTML comment -->` → `{/* JSX comment */}`

4. **JavaScript expressions**
   - `<div data-value="123">` → `<div data-value={123}>`
   - String literals stay quoted: `<div data-value="abc">`

5. **Reserved words**
   - `class` → `className`
   - `for` → `htmlFor`
   - `default` in `<option>` → `defaultValue` on `<select>`

### Handling Embedded Styles

**Option 1: Keep embedded (page sovereignty)**
```jsx
const GlobalStyles = () => (
  <style>{`
    :root {
      --color-bronze: #B48E55;
      /* ... all page styles ... */
    }
  `}</style>
);

function Page() {
  return (
    <>
      <GlobalStyles />
      {/* page content */}
    </>
  );
}
```

**Option 2: Import shared base + extend**
```jsx
import { BaseGlobalStyles } from '@shared/design-system/GlobalStyles';

const PageExtensions = () => (
  <style>{`
    /* Page-specific extensions */
    --animation-special: special-anim 2s ease infinite;
  `}</style>
);

function Page() {
  return (
    <>
      <BaseGlobalStyles />
      <PageExtensions />
      {/* page content */}
    </>
  );
}
```

### Handling External Libraries

**Google Fonts (from HTML head):**
```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet">
```

**Convert to:**
```jsx
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap');
    
    /* rest of styles */
  `}</style>
);
```

**External scripts (CDN):**
```html
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
```

**Convert to:**
```jsx
import { useEffect } from 'react';

function Page() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js';
    document.body.appendChild(script);
    
    return () => document.body.removeChild(script);
  }, []);
  
  // or install via npm and import properly
  // npm install @studio-freight/lenis
  // import Lenis from '@studio-freight/lenis';
}
```

### Handling Inline JavaScript

**From HTML:**
```html
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('myBtn');
    btn.addEventListener('click', () => {
      alert('Clicked!');
    });
  });
</script>
```

**Convert to React:**
```jsx
import { useEffect } from 'react';

function Page() {
  useEffect(() => {
    const btn = document.getElementById('myBtn');
    if (btn) {
      const handleClick = () => alert('Clicked!');
      btn.addEventListener('click', handleClick);
      return () => btn.removeEventListener('click', handleClick);
    }
  }, []);
  
  // Better: Use React event handlers directly
  const handleClick = () => alert('Clicked!');
  return <button id="myBtn" onClick={handleClick}>Click Me</button>;
}
```

---

## See Also

### Primary References (Read These)

- [`AGENTS.md`](AGENTS.md) — Primary coordination file, site sovereignty, DoD
- [`.rules/11-design-system-extensions.md`](.rules/11-design-system-extensions.md) — Page sovereignty, prototype protection
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — Multi-site pattern, design philosophy
- [`_workspace/claude-odyssey-design-system-project/_system/SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md`](_workspace/claude-odyssey-design-system-project/_system/SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md) — Canonical design tokens (1660 lines)

### Supporting References

- [`.rules/10-design-system.md`](.rules/10-design-system.md) — Base design system standards
- [`.rules/10-react-standards.md`](.rules/10-react-standards.md) — React/JSX coding patterns
- [`plans/handoffs/001-v1-dry-refactoring-and-completion.md`](plans/handoffs/001-v1-dry-refactoring-and-completion.md) — Previous handoff format
- [`shared/components/library/README.md`](shared/components/library/README.md) — Component catalog (for extraction pattern)

### Current Implementation

- [`sites/odyssey-lab/src/App.jsx`](sites/odyssey-lab/src/App.jsx) — Working prototype with embedded GlobalStyles
- [`sites/odyssey-lab/src/main.jsx`](sites/odyssey-lab/src/main.jsx) — Entry point
- [`config/vite.config.js`](config/vite.config.js) — Build config with path aliases

---

## Final Checklist (Before You Start)

- [ ] Read this entire handoff (yes, all of it)
- [ ] Read AGENTS.md sections on site sovereignty and DoD
- [ ] Read .rules/11-design-system-extensions.md completely
- [ ] Read ARCHITECTURE.md design system philosophy section
- [ ] Scan SYSTEM spec v0.3 (at least sections 1-5)
- [ ] Read current App.jsx to understand embedded GlobalStyles pattern
- [ ] Read all target HTML files (7 files)
- [ ] Understand multi-site architecture (sites/ vs shared/)
- [ ] Understand page sovereignty principle (pages can have embedded styles)
- [ ] Understand extraction timing (3+ uses, not earlier)
- [ ] Ready to conduct discovery (4 reports to create)
- [ ] Ready to make decisions (4 decision points)
- [ ] Ready to challenge this plan (it's not gospel)

**If any checkbox is unchecked, go read that content before proceeding.**

---

**Ready? Start with Discovery 1: Style Analysis Audit.**

**Remember: This is META MODE. You're not just executing steps, you're discovering, evaluating, deciding, and planning based on real findings.**

**Good luck. Document everything. Challenge assumptions. Make it work.**


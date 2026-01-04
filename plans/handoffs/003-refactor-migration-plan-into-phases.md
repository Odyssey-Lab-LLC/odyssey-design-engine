---
handoff_id: 003
from_agent: Claude (Cursor) - Architect
to_agent: Planning Agent (Fresh Cursor Chat)
date: 2026-01-03
status: Ready for Execution
priority: Critical
estimated_effort: 45-60 minutes
type: Planning & Reorganization (NO EXECUTION)
---

# Handoff: Refactor HTML-to-React Migration Plan into MECE Phases

## 🎯 Mission Critical Context

**YOU ARE A PLANNING AGENT. YOU ARE NOT EXECUTING THE MIGRATION.**

Your job is to **reorganize documentation**, not convert HTML files or write React code.

**What went wrong before you:**
- Original plan (1617 lines) was executed via Kilo YOLO mode
- Agent got stuck on first HTML conversion (token limits + malformed tool calls)
- Spent $50 in Kilo credits with minimal progress (only Home.jsx completed)
- Root cause: Plan wasn't organized into discrete, self-contained phases
- Everything was linear, ambiguous boundaries, no clear handoff points

**Your mission:**
Refactor the plan into **6 MECE phases** (Mutually Exclusive, Collectively Exhaustive) that can be executed independently with clear success criteria.

---

## 📚 Required Reading (Complete BEFORE Planning)

### Primary Input
**File:** `plans/002-html-to-react-migration-architecture-plan.md` (1617 lines)

**What it contains:**
- Pre-execution validation (V1-V5)
- Design decisions (4 critical decisions)
- File inventory (HTML sources, target components)
- Token analysis (overlap estimates)
- Component patterns (extraction candidates)
- Routing architecture
- Conversion strategy
- Implementation plan (Phases 1-5, but poorly bounded)
- Time & cost estimates
- Conversion examples
- Stop conditions
- Validation checklists

**What's wrong with it:**
- ❌ Phase boundaries unclear (where does Phase 2 end?)
- ❌ Validation scattered (not at clear gates)
- ❌ Context mixed with execution (hard to extract what's needed per phase)
- ❌ Not self-contained (phases depend on reading entire doc)
- ❌ Token-heavy for YOLO execution (too much in one file)
- ❌ Checkpoints exist but aren't phase boundaries
- ❌ Files to create spans all phases (should be per-phase)

### Supporting Context
**Why this project exists:**
- Multi-site React architecture (sites/ pattern)
- Migrating static HTML pages to React components
- Each page can have embedded styles (page sovereignty principle)
- Design system is descriptive, not prescriptive (see `.rules/11-design-system-extensions.md`)
- Prototype protection: Don't break working code during migration

**Key constraints:**
- Form-first component naming (not content-first)
- Extract to shared library only at 3+ uses (not earlier)
- Token-first development (CSS custom properties)
- Visual validation required (catch style regressions)
- Build validation before documentation

**Critical Execution Dependencies (MUST address in phasing):**

These are NOT optional considerations - these are BREAKING issues that will cause YOLO execution to fail:

1. **Router Scaffolding Problem (CRITICAL):**
   - Visual validation requires routes to exist (`/call-to-adventure`)
   - Routes can't exist until router is set up
   - Router can't be set up until components exist
   - **Solution:** Incremental router integration
     - Phase 1: Setup only (no router yet)
     - Phase 2: Migrate Home.jsx AND create initial router with `/` route
     - Phase 3: Convert andrew-1 AND add `/call-to-adventure` route
     - Phase 4: Convert andrew-2 AND add `/threshold-convergence` route
   - **Result:** No separate "router integration" phase. Router grows with conversions.

2. **Dev Server Lifecycle (CRITICAL):**
   - All visual validations require running dev server
   - Agent may not know to start it
   - Phase 5 (build) requires dev server STOPPED
   - **Solution:** Explicit dev server instructions in every phase
     - Phase 1: No dev server needed
     - Phase 2: START dev server, keep running
     - Phases 3-4: Assume running (or restart if stopped)
     - Phase 5: STOP dev server before build
   - **Each handoff MUST include "Dev Server Status" section**

3. **App.jsx Replacement Timing (CRITICAL):**
   - Copying App.jsx → Home.jsx doesn't remove App.jsx
   - App.jsx is entry point - can't break it mid-migration
   - **Solution:** Phase 2 does BOTH operations atomically:
     1. Copy App.jsx content → Home.jsx
     2. Refactor App.jsx to router with Home route
     3. Validate `/` still works
     4. Backup exists for rollback (created Phase 1)
   - **Provide exact router code in handoff** (don't make agent figure it out)

4. **Path Escaping for Spaces (MODERATE):**
   - Source files live in `_workspace/andrew gem merge/` (spaces in path!)
   - Shell commands need quotes or they break
   - **Solution:** Every phase handoff includes "File Paths Reference"
   - All bash examples show quoted paths

5. **vercel.json Timing (RESOLVED):**
   - Create in Phase 1 (no dependencies, static content)
   - Validate in Phase 5 (exists, valid JSON, correct rewrite rule)
   - No updates needed between phases

6. **Phase Count Expectation:**
   - NOT 7-9 phases (original estimate)
   - **EXACTLY 6 phases** (router integration is incremental)
   - Phase 1: Setup
   - Phase 2: Migrate Home + Initial Router
   - Phase 3: Convert andrew-1 + Add Route
   - Phase 4: Convert andrew-2 + Add Route
   - Phase 5: Build Validation
   - Phase 6: Documentation

---

## 🎓 Principles for MECE Phase Design

### What Makes a Good Phase?

**1. Self-Contained**
- Can be executed without reading other phases
- Has all context needed inline
- Doesn't assume knowledge from previous phases
- Could be handed to different agent each time

**2. Clear Boundaries**
- Obvious start condition: "Before you begin, verify X exists"
- Obvious end condition: "Phase complete when Y is validated"
- No ambiguity about what's in scope vs out of scope

**3. Right-Sized**
- 20-45 minute execution window (not 3+ hours)
- Single conversion OR single integration step (not both)
- Token-friendly (agent doesn't hit limits)

**4. Independently Testable**
- Can validate success without running other phases
- Has its own acceptance criteria
- Can fail without cascading to other phases

**5. Clear Handoff**
- Documents what next phase needs to know
- States what files were created/modified
- Notes any deviations or issues encountered

### What Makes a Bad Phase?

❌ **Too broad:** "Migrate all HTML files" (use: one file per phase)
❌ **Vague success:** "Test everything" (use: specific checklist)
❌ **Assumes context:** "Continue conversion..." (use: "Convert X.html using pattern from context section")
❌ **No validation:** Just steps, no "how do I know it worked?"
❌ **Unclear handoff:** "Move to next phase" (use: "Pass files X, Y, Z and decision on [topic] to Phase N")

---

## 📋 Your Deliverables

### File 1: Meta-Plan (Orchestration View)
**Path:** `plans/002-html-to-react-migration-META.md`

**Purpose:** User's dashboard to track overall progress and hold shared context

**Required sections:**
1. **Overview**
   - Original objective (from current plan)
   - Why plan was refactored (brief: Kilo failed due to token limits)
   - Link to original plan backup

2. **Phase Dependency Diagram**
   ```
   Phase 1: Infrastructure Setup
      ↓
   Phase 2: Migrate Home + Initial Router (/)
      ↓
   Phase 3: Convert andrew-1 + Add Route (/call-to-adventure)
      ↓
   Phase 4: Convert andrew-2 + Add Route (/threshold-convergence)
      ↓
   Phase 5: Build & Deploy Validation
      ↓
   Phase 6: Documentation
   ```

3. **Shared Context** (extracted from original plan)
   - Design decisions (4 decisions: defer GlobalStyles, conservative extraction, documentation system, simple routing)
   - File inventory (source files, target locations)
   - Token analysis summary (40-50% overlap, legitimate sovereignty)
   - Component patterns catalog (meta-card, lens-container, etc. with form-first names)
   - Routing architecture (flat routes, no layout wrapper)

4. **Progress Tracking Table**
   ```markdown
   | Phase | Handoff File | Status | Started | Completed | Cost | Duration | Issues |
   |-------|--------------|--------|---------|-----------|------|----------|--------|
   | 1     | 002-phase-1-setup.md | ⏸️ Pending | - | - | - | - | - |
   ```

5. **Execution Log Template**
   - Per-phase entries
   - Issues encountered
   - Decisions made
   - Lessons learned

6. **How to Use This Meta-Plan**
   - Sequential execution instructions
   - Updating status after each phase
   - Referencing shared context

**Validation:**
- [ ] All 4 design decisions documented clearly
- [ ] All source files listed with target locations
- [ ] Phase dependency is linear and clear
- [ ] User can understand progress at a glance

---

### Files 2-N: Phase Handoff Files
**Path:** `plans/handoffs/002-phase-[N]-[short-name].md`

**Naming convention:**
- `002-phase-1-setup.md`
- `002-phase-2-migrate-home.md`
- `002-phase-3-convert-andrew-1.md`
- etc.

**Required structure for EACH phase handoff:**

```markdown
---
handoff_id: 002-phase-[N]
phase_number: [N]
phase_name: [Short Name]
from_agent: [Previous Phase or Architect]
to_agent: Execution Agent
date: 2026-01-03
estimated_time: [20-45 mins]
estimated_cost: [$X-Y]
dependencies: [Phase N-1 complete, file X exists, etc.]
---

# Phase [N]: [Descriptive Name]

## 🎯 Phase Objective
[ONE SENTENCE: What gets accomplished in this phase]

## 📌 Prerequisites (Verify Before Starting)
- [ ] Checklist of what must exist
- [ ] What state the codebase must be in
- [ ] What decisions must be made
- [ ] Reference to meta-plan for shared context

## 🧠 Phase-Specific Context
[ONLY context needed for THIS phase - don't repeat meta-plan]
- Key information about THIS conversion
- Specific challenges for THIS task
- Reference examples from meta-plan

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
[List specific paths for this phase]
- Source: `"_workspace/andrew gem merge/[filename]"`
- Target: `sites/odyssey-lab/src/pages/[ComponentName].jsx`
- Router: `sites/odyssey-lab/src/App.jsx`

## 🖥️ Dev Server Status
- **Needs dev server:** [Yes/No]
- **Expected state before phase:** [Should be running / Should be stopped / Either]
- **Start command:** `npm run dev` (wait for "Local: http://localhost:5173")
- **After phase:** [Keep running / Stop / Either]
- **Why:** [Brief explanation of why dev server is/isn't needed]

## ⚠️ Tool Safety Protocol
[Copy template below - ensure in EVERY handoff]

**Before using ANY tool:**
1. List available tools, verify tool exists
2. Check ALL required parameters
3. If tool fails 2x, use fallback method
4. Stop condition: Don't retry malformed calls indefinitely

**Fallback strategies for this phase:**
- If MCP fails: Write code directly in chat
- If token limit: Write incrementally
- If conversion stuck: Document issue, continue with simpler version

## 🔀 Route Addition Protocol (If This Phase Adds a Route)

[Include this section ONLY in Phases 3-4 (conversion phases that add routes)]

**After creating the component, add its route:**

1. Open `sites/odyssey-lab/src/App.jsx`
2. Add import at top: `import ComponentName from './pages/ComponentName';`
3. Add route inside `<Routes>`:
   ```jsx
   <Route path="/route-name" element={<ComponentName />} />
   ```
4. Save file
5. Dev server auto-reloads (wait 2-3 seconds for HMR)
6. Navigate to `http://localhost:5173/route-name`
7. Verify page renders (should see content, not 404)
8. Check browser console (F12 → Console tab)
9. If errors: Check import path, component export
10. If 404: Check route path matches URL

**Stop conditions for route addition:**
- Route 404s after 2 attempts → STOP (component not exported correctly)
- Console shows import errors → STOP (path issue, check relative paths)
- Page renders but console errors → FIX imports/dependencies, don't proceed
- Stuck >5 minutes on route issues → STOP and document

**DO NOT add multiple routes in one phase** - one component = one route = one phase

## 🚀 Execution Steps
[Numbered, granular, actionable steps]

1. **Step name**
   - What to do
   - How to do it
   - Expected result
   - Stop if: [condition]

2. **Step name**
   ...

[Each step should be 5-10 minutes max]

## ✅ Post-Phase Validation
[Specific checklist - not generic "test everything"]

**Validation A: [Specific check]**
- [ ] How to validate
- [ ] Expected result
- [ ] Tool/command to run
- [ ] Stop if fails

**Validation B: [Specific check]**
...

## 🎯 Success Criteria
[Objective measures - phase is DONE when:]
- File X exists at path Y
- `npm run dev` shows no errors
- Browser renders page at URL Z
- Visual comparison shows no regressions
- Console shows 0 errors

## 🛑 Stop Conditions
[When to STOP and escalate:]
- [ ] If [condition], STOP and document issue
- [ ] If [validation] fails 2x, STOP
- [ ] If cost exceeds $[X], STOP

## 📦 Outputs
**Files created:**
- `path/to/file.jsx` (description)

**Files modified:**
- `path/to/file.js` (what changed)

**Decisions made:**
- [Any decisions during execution]

## 🔄 Handoff to Next Phase
**What Phase [N+1] needs to know:**
- Files created: [list]
- Any deviations from plan: [describe]
- Issues encountered: [describe]
- Recommended next steps: [if any]

**Update meta-plan status:**
```
Phase [N] status: ✅ Complete
Cost: $[actual]
Duration: [actual]
Issues: [brief]
```

## ⏱️ Time Budget
- Estimated: [20-45 mins]
- If exceeds estimate by 50%, STOP and reassess

## 💰 Cost Budget & Progress Monitoring
- Estimated: $[X-Y]
- **Monitor PROGRESS, not just cost**

**Cost is secondary to progress. Better to spend more and complete than spend less and fail.**

**Green flag:** Cost at $Y, phase completes → Continue (worth it)
**Yellow flag:** Cost at 1.5× $Y, phase 50% done → Continue cautiously
**Red flag:** Cost at 2× $Y, phase <25% done → STOP (something wrong)

**Better abort signal: Time stuck without progress**
- >15 mins debugging same error with no code changes → STOP
- Same tool call fails 3+ times → Use fallback or STOP
- >30 mins on phase with <50 lines of code written → STOP
- Cost rising but files being created → Acceptable
- Cost rising with NO file changes → STOP (tool loop)

**User priority: Get work done. Cost overruns acceptable IF work completes.**
**User concern: Avoid infinite loops that waste money without progress.**
```

---

### File N+1: Execution Guide
**Path:** `plans/002-EXECUTION-GUIDE.md`

**Purpose:** How to run phases (for user, not agent)

**Required sections:**

1. **Quick Start**
   - How to run Phase 1
   - How to check status
   - How to proceed to Phase 2

2. **Execution Modes**
   - **YOLO All Phases:** Pass meta-plan + all handoffs, let it run
   - **YOLO Per Phase:** Pass meta-plan + Phase N handoff, validate, proceed
   - **Manual Per Phase:** Execute steps yourself, mark complete

3. **Recommended Approach (Phased YOLO)**
   - **Batch 1:** YOLO Phases 1-2 together (setup + initial migration, ~35 mins)
     - User validates: Dev server runs, `/` renders Home
   - **Batch 2:** YOLO Phase 3 alone (andrew-1 conversion, ~30 mins)
     - User validates: `/call-to-adventure` works, visual matches original
   - **Batch 3:** YOLO Phase 4 alone (andrew-2 conversion, ~45 mins)
     - User validates: `/threshold-convergence` works, interactions functional
   - **Batch 4:** YOLO Phases 5-6 together (build + docs, ~35 mins)
     - User validates: Build succeeds, docs created
   - **Total user check-ins:** 4 (manageable)
   - **Why phased:** Complex conversions have high failure risk. Better to catch issues early than debug after all 6 phases.

4. **Handling Failures**
   - If phase fails: Check stop conditions
   - If stuck: Review handoff, try manual execution
   - If cost overrun: Stop, reassess, chunk smaller

5. **Updating Progress**
   - After each phase, update meta-plan status
   - Note actual cost/time vs estimated
   - Document issues for future phases

6. **Troubleshooting**
   - "Agent can't find file X" → Check prerequisites
   - "Tool call failed" → Check tool safety protocol
   - "Token limit hit" → Phase too large, re-chunk
   - "Visual regression" → Stop, debug, don't proceed

---

## 🔍 Your Self-Evaluation Protocol

**DO NOT CONSIDER YOUR WORK COMPLETE UNTIL ALL CHECKS PASS.**

### Checkpoint 1: After Phase Identification

**You've analyzed the original plan and identified 7-9 phases.**

**Run these checks:**

1. **Completeness Check**
   - [ ] Read original plan line-by-line
   - [ ] Every task assigned to a phase
   - [ ] No work left unaccounted for
   - [ ] V1-V5 validation incorporated (where?)
   - [ ] All checkpoints converted to phase boundaries

2. **MECE Check**
   - [ ] No overlap: Each task in exactly one phase
   - [ ] No gaps: All tasks covered
   - [ ] Sequential: Phase N+1 can't start until N completes
   - [ ] Independent: Each phase can fail without blocking others (within sequence)

3. **Sizing Check**
   - [ ] Each phase 10-50 minutes estimated (Phase 1 can be 10-15 mins)
   - [ ] No phase over 60 minutes (if so, split it)
   - [ ] Token-friendly: No phase requires processing 1000+ lines at once
   - [ ] 6 phases total: Setup, Home+Router, andrew-1, andrew-2, Build, Docs

**If ANY check fails: Revise phase boundaries before proceeding.**

**Output a table:**
```markdown
| Phase # | Name | Estimated Time | Key Task | Dependency |
|---------|------|----------------|----------|------------|
| 1       | Infrastructure Setup | 10-15 mins | Install deps, create dirs, vercel.json, backup | None |
| 2       | Migrate Home + Router | 20-25 mins | Copy App.jsx → Home.jsx, refactor App.jsx to router | Phase 1 |
| 3       | Convert andrew-1 + Route | 25-35 mins | HTML→JSX, add /call-to-adventure route | Phase 2 |
| 4       | Convert andrew-2 + Route | 40-50 mins | Complex conversion, add /threshold-convergence route | Phase 3 |
| 5       | Build Validation | 12-18 mins | npm run build, preview, verify vercel.json | Phase 4 |
| 6       | Documentation | 15-25 mins | Lessons, reports, component candidates | Phase 5 |
```

**Red team it:** Would an agent looking at just Phase 3 handoff understand what to do without reading Phase 1-2? If no, add context.

---

### Checkpoint 2: After Meta-Plan Creation

**You've created the meta-plan file.**

**Run these checks:**

1. **Shared Context Completeness**
   - [ ] All 4 design decisions copied clearly
   - [ ] File inventory: All source files listed with targets
   - [ ] Token analysis summary present
   - [ ] Component patterns with form-first names
   - [ ] Routing architecture documented

2. **Navigation Clarity**
   - [ ] User can find "what phase am I on" in 5 seconds
   - [ ] User can find "what went wrong last time" in 10 seconds
   - [ ] User can find "how to run next phase" in 10 seconds

3. **Reference Quality**
   - [ ] Links to all phase handoffs work
   - [ ] Links to original plan backup work
   - [ ] Links to key rules (11-design-system-extensions.md) work

**If ANY check fails: Revise meta-plan before proceeding.**

**Blind spot test:** Give meta-plan to user who knows nothing about this project. Can they understand:
- What's being built?
- Why it's in phases?
- How to run a phase?
- How to track progress?

If no to any: Add clarity.

---

### Checkpoint 3: After Each Phase Handoff Creation

**You've created a phase handoff file.**

**Run these checks PER HANDOFF:**

1. **Self-Containment Check**
   - [ ] Agent could execute this with ONLY meta-plan + this handoff (no need to read original plan)
   - [ ] All phase-specific context included
   - [ ] References to meta-plan for shared context (not duplicated)
   - [ ] No assumptions about agent memory from previous phases

2. **Execution Clarity Check**
   - [ ] Every step is actionable (starts with verb)
   - [ ] Every step has expected result
   - [ ] Every step has stop condition
   - [ ] No step is "figure it out yourself"

3. **Validation Robustness Check**
   - [ ] Success criteria are objective (not "looks good")
   - [ ] Every success criterion has a test method
   - [ ] Stop conditions are specific (not "if something goes wrong")

4. **Tool Safety Check**
   - [ ] Tool safety protocol included
   - [ ] Fallback strategies for this phase documented
   - [ ] Stop conditions for tool failures specified

5. **Handoff Completeness Check**
   - [ ] Lists all files created
   - [ ] Lists all files modified
   - [ ] States what next phase needs to know
   - [ ] Includes template for updating meta-plan

**If ANY check fails for this handoff: Revise before proceeding to next handoff.**

**Red team it:** 
- What could go wrong in this phase?
- Is there a stop condition for it?
- Is there a fallback strategy?
- Would agent know what to do if tool fails?

---

### Checkpoint 4: After All Handoffs Created

**You've created all 6 phase handoffs.**

**Run these checks:**

1. **Dependency Validation**
   - [ ] Phase 1 has no dependencies
   - [ ] Phase N only depends on Phase N-1 (linear)
   - [ ] Each dependency is specific (not "previous work done")
   - [ ] Each dependency can be verified (file exists, command succeeds)

2. **Consistency Check**
   - [ ] All handoffs follow same template
   - [ ] Tool safety protocol identical in all
   - [ ] Time estimates sum to reasonable total (2-4 hours)
   - [ ] Cost estimates sum to reasonable total ($20-35)

3. **Coverage Check**
   - [ ] Compare to original plan's "Files to Create"
   - [ ] Every file accounted for in some phase
   - [ ] Every validation from original plan in some phase
   - [ ] All conversion examples referenced somewhere

4. **Gap Analysis**
   ```markdown
   Original Plan Item | Covered in Phase | Notes
   -------------------|------------------|-------
   V1: Dependency Audit | Phase 1 | ✅
   Convert andrew-1 | Phase 3 | ✅
   Visual comparison | Phase 3, 4 | ✅
   Build validation | Phase 7 | ✅
   Documentation | Phase 8 | ✅
   ```

**If ANY gap found: Create missing phase or add to existing phase.**

---

### Checkpoint 5: Final Validation

**Everything is created. Now validate the entire structure.**

**Run these checks:**

1. **Execution Simulation**
   - [ ] Walk through Phase 1 handoff as if you're the agent
   - [ ] Can you complete every step with info provided?
   - [ ] Can you validate success with criteria given?
   - [ ] Can you hand off to Phase 2 with info provided?
   - [ ] Repeat for Phases 2-3 (spot check)

2. **Failure Mode Analysis**
   - [ ] What if Phase 3 fails? Is there a stop condition? ✅
   - [ ] What if tool call malforms? Is there fallback? ✅
   - [ ] What if visual regression found? Is there guidance? ✅
   - [ ] What if cost exceeds budget? Is there stop condition? ✅

3. **User Experience Check**
   - [ ] User can start Phase 1 without asking "what do I do?"
   - [ ] User can check progress without asking "am I done?"
   - [ ] User can resume after failure without asking "what happened?"

4. **Documentation Quality**
   - [ ] Spelling/grammar correct (matters for agent parsing)
   - [ ] Code blocks properly fenced
   - [ ] File paths are correct
   - [ ] Links work
   - [ ] Markdown renders correctly

**If ANY check fails: Fix issues before marking complete.**

---

## 🔄 Feedback Loop: Gaps Report

**After you complete all files, you MUST produce this report.**

**Create:** `plans/reports/003-refactor-gaps-report.md`

**Template:**

```markdown
# Phase Refactor: Gaps, Issues, and Concerns Report

**Date:** [timestamp]
**Agent:** Planning Agent (Fresh Cursor)
**Task:** Refactor migration plan into MECE phases

---

## Summary
[One paragraph: What you did, how many phases, key decisions]

---

## Potential Gaps

### Gap 1: [Category]
**Description:** [What might be missing or unclear]
**Impact:** [What could go wrong if this is a real gap]
**Recommendation:** [How to address it]
**Confidence:** [High/Medium/Low that this is actually a gap]

### Gap 2: ...

---

## Identified Issues

### Issue 1: [Category]
**Description:** [What is definitely a problem]
**Impact:** [What will go wrong]
**Resolution:** [How I addressed it OR why I couldn't]

### Issue 2: ...

---

## Concerns

### Concern 1: [Category]
**Description:** [What I'm worried about]
**Why:** [Reasoning for concern]
**Mitigation:** [What I did to reduce risk]

### Concern 2: ...

---

## Validation Results

### Checkpoint 1 Results:
- MECE Check: [PASS/FAIL] - [notes]
- Sizing Check: [PASS/FAIL] - [notes]
- Completeness Check: [PASS/FAIL] - [notes]

### Checkpoint 2 Results:
[Continue for all 5 checkpoints]

---

## Recommendations for Architect

1. **High Priority:** [Thing architect should review/fix]
2. **Medium Priority:** [Thing architect should validate]
3. **Low Priority:** [Thing that's probably fine but worth noting]

---

## Self-Assessment

**Confidence in plan quality:** [0-100%]
**Confidence all work covered:** [0-100%]
**Confidence phases are right-sized:** [0-100%]
**Confidence handoffs are clear:** [0-100%]

**Overall readiness:** [Ready for execution / Needs review / Needs revision]

---

## Suggested Next Steps

1. Architect reviews this gaps report
2. Architect validates [specific areas of concern]
3. User tests Phase 1 handoff in isolation
4. If Phase 1 succeeds, proceed with Phase 2
5. [Additional suggestions]
```

**Purpose of this report:**
- Forces you (planning agent) to think critically
- Gives architect (me) specific things to review
- Identifies risks before execution
- Creates feedback loop for quality

**User will bring this back to me (architect) for evaluation.**

---

## 🚨 Common Pitfalls (DON'T DO THESE)

### Pitfall 1: Too Much Duplication
**Bad:** Copy entire "Tool Safety Protocol" into every handoff (2000+ words × 9 phases = 18,000 words)
**Good:** Short version in each handoff, detailed version in meta-plan

### Pitfall 2: Assuming Context
**Bad:** Phase 3 says "Continue the conversion pattern from before"
**Good:** Phase 3 says "Convert HTML to JSX using pattern: class→className, self-close tags, etc." with examples

### Pitfall 3: Vague Prerequisites
**Bad:** "Previous work should be done"
**Good:** "Files must exist: Home.jsx at sites/odyssey-lab/src/pages/, App.jsx.backup at sites/odyssey-lab/src/"

### Pitfall 4: No Failure Guidance
**Bad:** "If it breaks, fix it"
**Good:** "If npm run dev fails: Check console for import errors. If missing dependency, run npm install. If syntax error in JSX, check conversion rules. Stop if >10 minutes debugging."

### Pitfall 5: Oversized Phases
**Bad:** Phase 3: "Convert all HTML files and test them" (3+ hours)
**Good:** Phase 3: "Convert andrew-1.html only" (30 mins) + Phase 4: "Convert andrew-gem-2.jsx only" (45 mins)

### Pitfall 6: Undersized Phases
**Bad:** Phase 2: "Create directory" (30 seconds)
**Good:** Phase 1: "Setup infrastructure: install deps, create directories, backup files" (10 mins)

### Pitfall 7: Missing Visual Validation
**Bad:** "Convert HTML to JSX, move to next phase"
**Good:** "Convert HTML to JSX, then visual comparison: open original in browser, open converted at localhost:5173/route, side-by-side check fonts/colors/spacing"

### Pitfall 8: No Cost Guardrails
**Bad:** "Execute until done"
**Good:** "Estimated cost: $5-8. If exceeds $10, STOP and report. Something is wrong."

### Pitfall 9: Router-Before-Components Sequencing Error
**Bad:** Phase 1: Setup. Phase 2: Set up router with all routes. Phase 3-4: Create components. (Router has routes to non-existent components!)
**Good:** Phase 1: Setup. Phase 2: Create Home + router with `/` only. Phase 3: Create CallToAdventure + add route. Phase 4: Create ThresholdConvergence + add route. (Incremental, always working)

### Pitfall 10: Validation Without Dev Server Instructions
**Bad:** "Navigate to http://localhost:5173/route" (assumes server running, agent doesn't know how)
**Good:** "If dev server not running: `npm run dev`, wait for 'Local: http://localhost:5173', THEN navigate to /route"

### Pitfall 11: Multi-Route Addition in Single Phase
**Bad:** Phase 5: "Add all 3 routes to router at once, then test"
**Good:** Phase 3: "Add /call-to-adventure route only, test it works". Phase 4: "Add /threshold-convergence route only, test it works" (One route per phase, validate before proceeding)

### Pitfall 12: Assuming Agent Knows Router Code
**Bad:** "Refactor App.jsx to use React Router"
**Good:** "Replace App.jsx with this exact code: [full code block]. Then test that / still works."

### Pitfall 13: Not Providing Exact Component Code for Router Refactor
**Bad:** Phase 2: "Convert App.jsx to router (figure out imports and structure)"
**Good:** Phase 2: "Replace App.jsx content with this exact code:
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
Save, then test / renders Home."

---

## 📊 Success Metrics (How You Know You're Done)

**Your planning work is complete when:**

1. ✅ Meta-plan exists and passes Checkpoint 2
2. ✅ 6 phase handoffs exist and each passes Checkpoint 3
3. ✅ All handoffs pass Checkpoint 4 (consistency/coverage)
4. ✅ Final validation (Checkpoint 5) passes
5. ✅ Execution guide exists
6. ✅ Gaps report produced with honest self-assessment
7. ✅ Original plan backed up as `.backup`

**DON'T stop until all 7 are ✅.**

---

## 💬 Communication Protocol

**When you complete this handoff:**

1. **Create all files** (meta-plan, handoffs, execution guide, gaps report, backup original)

2. **Reply with summary:**

```markdown
## Refactor Complete

**Files created:**
- Meta-plan: `plans/002-html-to-react-migration-META.md`
- Phase handoffs (6 files): `plans/handoffs/002-phase-[1-6]-*.md`
- Execution guide: `plans/002-EXECUTION-GUIDE.md`
- Gaps report: `plans/reports/003-refactor-gaps-report.md`
- Backup: `plans/002-html-to-react-migration-architecture-plan.md.backup`

**Phase breakdown:**
1. Infrastructure Setup - [time] - [cost]
2. Migrate Home + Initial Router - [time] - [cost]
3. Convert andrew-1 + Add Route - [time] - [cost]
4. Convert andrew-2 + Add Route - [time] - [cost]
5. Build & Deploy Validation - [time] - [cost]
6. Documentation - [time] - [cost]

**Total estimated:** [time] - [cost]

**Self-assessment:** [Ready/Needs review/Needs revision]

**Gaps report:** See `plans/reports/003-refactor-gaps-report.md` for detailed analysis.

**Recommended next step:** [What user should do]
```

3. **DO NOT execute any migration work** (no HTML conversions, no React code, no npm commands beyond checking what exists)

---

## 🎯 Your North Star

**Remember:**
- You're the **journeyman** learning from the **architect's** experience
- The architect (me) tried something that failed - you're fixing the approach
- Err on side of over-communication (fresh agent has no context)
- Phases should be **so clear** that an agent with amnesia could execute
- When in doubt: **more granular, more validation, more stop conditions**

**The ultimate test:**
Would you (the planning agent) be comfortable executing Phase 3 handoff with ZERO memory of creating it? If no, it's not clear enough.

---

## See Also

- Original plan (your input): `plans/002-html-to-react-migration-architecture-plan.md`
- Design system sovereignty rule: `.rules/11-design-system-extensions.md`
- Multi-agent coordination: `AGENTS.md`
- Project architecture: `ARCHITECTURE.md`

---

**Good luck, journeyman. Make the architect proud. 🏗️**


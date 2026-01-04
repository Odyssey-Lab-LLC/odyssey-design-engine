# HTML-to-React Migration: Execution Guide

**Purpose:** How to run the phased migration (for user, not agent)

**Note:** Updated for 6-phase structure (refactored from 8 phases per architect review).

---

## Quick Start

### Run Phase 1

1. Open fresh Cursor chat or Kilo session
2. Provide these files to the agent:
   - `plans/002-html-to-react-migration-META.md` (shared context)
   - `plans/handoffs/002-phase-1-setup.md` (phase handoff)
3. Instruct: "Execute Phase 1 as documented"
4. Wait for completion
5. Update meta-plan progress table

### Check Status

Open `plans/002-html-to-react-migration-META.md` and check the Progress Tracking Table.

### Proceed to Next Phase

1. Verify current phase status is ✅ Complete
2. Open next phase handoff
3. Provide meta-plan + next handoff to agent
4. Instruct: "Execute Phase [N] as documented"

---

## Execution Modes

### Mode A: YOLO All Phases (Not Recommended for Complex Migration)

**What:** Pass meta-plan + all handoffs, let agent run through everything.

**When to use:** Simple migrations, agent has proven reliable.

**Risk:** If agent fails mid-way, hard to recover. Cost overruns possible.

**How:**
```
Provide: meta-plan + all 6 handoff files
Instruct: "Execute all phases sequentially as documented"
```

### Mode B: YOLO Per Phase (Recommended)

**What:** Execute one phase at a time, validate between phases.

**When to use:** Default approach. Best for complex migrations.

**Risk:** Lower. Can stop and debug between phases.

**How:**
```
Phase 1:
- Provide: meta-plan + phase-1 handoff
- Execute
- Validate
- Update meta-plan

Phase 2:
- Provide: meta-plan + phase-2 handoff
- Execute
- Validate
- Update meta-plan

... repeat for all 6 phases
```

### Mode C: Manual Per Phase (For Learning/Debugging)

**What:** Execute steps yourself, using handoffs as checklists.

**When to use:** Want to understand what's happening, debugging issues.

**How:**
- Read each step in handoff
- Execute manually (copy files, run commands)
- Check validation after each step
- Update meta-plan when done

---

## Recommended Approach

### For This Migration

1. **Phase 1 (Setup):** Use Mode B
   - Simple setup steps
   - Low risk
   - Good for validating process

2. **Phase 2 (Home + Initial Router):** Use Mode B with close monitoring
   - Critical step: router setup starts here
   - Watch for import errors
   - Validate `/` route works

3. **Phase 3 (andrew-1 + Route):** Use Mode B with visual validation
   - First HTML conversion
   - Route added incrementally
   - Validate visual parity

4. **Phase 4 (andrew-2 + Route):** Use Mode B with fallback readiness
   - Complex conversion (lens, matrix, zones)
   - Be prepared for fallbacks
   - May need extra time

5. **Phase 5 (Build & Visual Validation):** Use Mode B or Mode C
   - Comprehensive visual testing
   - Build validation
   - Human review recommended

6. **Phase 6 (Documentation):** Use Mode B or Mode C
   - Documentation creation
   - Low risk, can be manual

### Between Each Phase

✅ **Always do:**
- Check phase completion criteria
- Update meta-plan progress table
- Review any issues flagged
- Verify files created/modified

---

## Handling Failures

### If Phase Fails

1. **Check stop conditions** - Was a stop condition hit?
2. **Review error messages** - What specifically failed?
3. **Check prerequisites** - Were all prerequisites met?
4. **Try fallback** - Does the handoff specify a fallback?
5. **Re-run phase** - Sometimes transient failures, try again
6. **Escalate** - If repeated failure, document and move to debugging

### Common Failures

**"Agent can't find file X"**
- Check file path is correct
- Verify file was created in previous phase
- Check for typos in path
- **Note:** Paths with spaces need quotes in shell commands

**"Tool call failed"**
- Check tool safety protocol in handoff
- Try fallback method
- Verify network/permissions

**"Token limit hit"**
- Phase may be too large
- Process in smaller sections
- Use fallback version

**"Visual regression detected"**
- Stop and investigate
- Compare carefully with original
- Fix before proceeding

**"Build failed"**
- Check console for error details
- Fix import/syntax issues
- Don't proceed until build works

**"Route 404"**
- Check component is exported correctly
- Verify import path in App.jsx
- Check route path spelling

---

## Updating Progress

### After Each Phase

1. Open `plans/002-html-to-react-migration-META.md`
2. Find Progress Tracking Table
3. Update the row for completed phase:

```markdown
| [N] | `002-phase-[N]-[name].md` | ✅ Complete | [start time] | [end time] | $[cost] | [mins] | [issues or "None"] |
```

4. Update Execution Log section with notes

### Tracking Cost

If using Kilo or API-based execution:
- Note starting credit balance
- Note ending credit balance
- Calculate cost per phase
- Watch for cost overruns

**Progress-based monitoring:**
- Cost rising but files being created → Acceptable
- Cost rising with NO file changes → STOP (tool loop)
- >15 mins stuck on same error → STOP and reassess

---

## Troubleshooting

### Agent Seems Stuck

**Symptoms:** Agent doing same thing repeatedly, not progressing

**Fix:**
1. Stop execution
2. Check what step failed
3. Manually verify prerequisites
4. Restart with clear context

### Styles Don't Match

**Symptoms:** Converted page looks different from original

**Fix:**
1. Check GlobalStyles has ALL CSS from source
2. Verify className conversions (not class)
3. Check fonts are loading
4. Compare CSS custom property values

### Routing Not Working

**Symptoms:** 404 errors, pages don't load

**Fix:**
1. Verify react-router-dom installed
2. Check App.jsx has correct imports
3. Verify page components have `export default`
4. Check route paths spelling
5. Verify route was added in App.jsx (incremental approach)

### Build Fails

**Symptoms:** `npm run build` errors

**Fix:**
1. Read error message carefully
2. Check for import errors
3. Verify all dependencies installed
4. Check for syntax errors in JSX

---

## Cost Expectations

| Phase | Est. Time | Est. Cost |
|-------|-----------|-----------|
| 1 | 10-15 min | $1-2 |
| 2 | 20-25 min | $2-4 |
| 3 | 25-35 min | $4-6 |
| 4 | 40-50 min | $6-8 |
| 5 | 15-25 min | $2-4 |
| 6 | 15-25 min | $2-3 |
| **Total** | **~2-3 hours** | **$17-27** |

**Buffer:** Add $10-15 for debugging/retries

**Stop threshold:** If any phase exceeds 150% of estimate, stop and reassess

---

## Phase Dependencies Visualization

```
[Phase 1: Setup]
         ↓
[Phase 2: Migrate Home + Initial Router]  ← Router starts here (/ route)
         ↓
[Phase 3: Convert andrew-1 + Route]       ← Adds /call-to-adventure
         ↓
[Phase 4: Convert andrew-2 + Route]       ← Adds /threshold-convergence
         ↓
[Phase 5: Build & Visual Validation]      ← All routes tested, build validated
         ↓
[Phase 6: Documentation]
         ↓
      [DONE]
```

**Cannot skip phases.** Each depends on the previous.

**Key difference from 8-phase:** Router is integrated incrementally in Phases 2-4, not as a separate Phase 5.

---

## Files Reference

### Input Files (Provide to Agent)

**Always provide:**
- `plans/002-html-to-react-migration-META.md`

**Plus current phase:**
- `plans/handoffs/002-phase-1-setup.md`
- `plans/handoffs/002-phase-2-migrate-home.md`
- `plans/handoffs/002-phase-3-convert-andrew-1.md`
- `plans/handoffs/002-phase-4-convert-andrew-2.md`
- `plans/handoffs/002-phase-5-build-validation.md`
- `plans/handoffs/002-phase-6-documentation.md`

### Output Files (Created During Execution)

**Phase 1:**
- `sites/odyssey-lab/src/App.jsx.backup`
- `sites/odyssey-lab/src/pages/` (directory)
- `vercel.json`

**Phase 2:**
- `sites/odyssey-lab/src/pages/Home.jsx`
- `sites/odyssey-lab/src/App.jsx` (router with / route)

**Phase 3:**
- `sites/odyssey-lab/src/pages/CallToAdventure.jsx`
- `sites/odyssey-lab/src/App.jsx` (adds /call-to-adventure route)

**Phase 4:**
- `sites/odyssey-lab/src/pages/ThresholdConvergence.jsx`
- `sites/odyssey-lab/src/App.jsx` (adds /threshold-convergence route)

**Phase 5:**
- `dist/` (build output, gitignored)

**Phase 6:**
- `plans/lessons/002-first-conversion-lessons.md`
- `prompts/html-integration-workflow.md`
- `plans/reports/002-component-candidates.md`

---

## Dev Server Lifecycle

**Phase 1:** Dev server NOT needed
**Phase 2:** START dev server, keep running
**Phase 3:** Dev server should be running (HMR)
**Phase 4:** Dev server should be running (HMR)
**Phase 5:** Use for visual validation, then STOP before build
**Phase 6:** Dev server NOT needed

---

## Post-Completion

### After All 6 Phases Complete

1. **Verify everything:**
   - Run `npm run dev` - all 3 routes work
   - Run `npm run build` - build succeeds
   - Run `npm run preview` - production works

2. **Deploy:**
   - Push to GitHub
   - Vercel will auto-deploy (if connected)
   - Test production URLs

3. **Clean up:**
   - Archive original plan backup if desired
   - Update project README if needed

4. **Next steps:**
   - Migrate remaining HTML files (using documented workflow)
   - Extract components at 3+ uses
   - Consider shared GlobalStyles extraction later

---

## Getting Help

If stuck:
1. Check this guide's Troubleshooting section
2. Review the handoff's Stop Conditions
3. Check the handoff's Fallback Strategies
4. Review meta-plan's Shared Context
5. Consult original plan backup for detailed context

---

## See Also

- Meta-plan: `plans/002-html-to-react-migration-META.md`
- Original plan: `plans/002-html-to-react-migration-architecture-plan.md.backup`
- Phase handoffs: `plans/handoffs/002-phase-*.md`

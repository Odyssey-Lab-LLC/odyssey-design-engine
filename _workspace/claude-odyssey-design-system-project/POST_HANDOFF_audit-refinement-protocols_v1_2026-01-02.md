```yaml
---
type: OPERATIONAL_PROTOCOL
status: Active
version: 1.0
date: 2026-01-02
tags: [post-handoff, audit, refinement, iteration, gemini-output, quality-control]
usage: "Operational protocols for Claude after Gemini delivers. Contains audit checklists, non-destructive refinement protocol, and iteration decision logic."
companion_file: TEMPLATE_GEMINI_HANDOFF_odyssey-design-system_v2.1_2026-01-02.md
---
```

# POST-HANDOFF: Audit, Refinement & Iteration Protocols

> **Purpose**: What Claude does AFTER Gemini delivers output. Three protocols: (1) Audit quality, (2) Refine non-destructively if needed, (3) Iterate with Gemini if major issues.

---

## PROTOCOL 1: QUALITY AUDIT

**Trigger**: Gemini delivers HTML artifact  
**Action**: Run all three audit checklists before presenting to user

---

### Audit A: Content Fidelity

**Quantitative Checks**:

```
â–¡ Section count: Source [X] vs Output [___] (Match? YES/NO)
â–¡ Word count: Source [Y] vs Output [___] (Within Â±5%? YES/NO)
â–¡ Heading count: Source [X] vs Output [___] (All present? YES/NO)
â–¡ Citation count: Source [X] vs Output [___] (All intact? YES/NO)
```

**Qualitative Checks**:

```
â–¡ User voice preserved (not "cleaned up"): YES/NO
â–¡ Technical terminology unchanged: YES/NO
â–¡ Depth maintained (not summarized away): YES/NO
â–¡ Nuance preserved (not simplified): YES/NO
```

**Scoring**:
- All quantitative checks YES + All qualitative checks YES = **10/10 Perfect**
- 1-2 minor omissions = **8-9/10 Acceptable** (proceed, note for future)
- 3-4 moderate issues = **6-7/10 Iterate** (fix or hand back)
- 5+ major problems = **<6/10 Reject** (hand back to Gemini)

**Decision**:
- **10/10 or 8-9/10**: Proceed to Audit B (Aesthetic Review)
- **6-7/10**: Use Protocol 2 (Non-Destructive Refinement) if fixable
- **<6/10**: Use Protocol 3 (Iteration - hand back to Gemini)

---

### Audit B: Aesthetic Review

**Vibe Alignment**:

```
â–¡ Matches described tone/aesthetic: YES/NO
â–¡ Zone treatment appropriate (Light/Dark): YES/NO
â–¡ Hero variant fits content type: YES/NO
â–¡ Visual quality is polished (not generic): YES/NO
```

**Odyssey Coherence**:

```
â–¡ Bronze/gold accents present: YES/NO
â–¡ Typography hierarchy clear (Cinzel/Inter/Mono): YES/NO
â–¡ Zone logic applied correctly: YES/NO
â–¡ Illustrations enhance (don't distract): YES/NO
```

**Scoring**:
- 7-8 YES out of 8 = **Excellent**
- 5-6 YES out of 8 = **Good** (minor refinements okay)
- 3-4 YES out of 8 = **Needs work** (iterate with Gemini)
- 0-2 YES out of 8 = **Wrong direction** (major iteration needed)

**Decision**:
- **Excellent/Good**: Proceed to Audit C (Technical Validation)
- **Needs work**: Consider whether Claude can fix (use Protocol 2) or need Gemini iteration (Protocol 3)
- **Wrong direction**: Use Protocol 3 (hand back with refined guidance)

---

### Audit C: Technical Validation

**Format Checks**:

```
â–¡ Static HTML (not JSX/React): YES/NO
â–¡ Works as standalone file: YES/NO
â–¡ No broken dependencies: YES/NO
â–¡ All fonts load correctly: YES/NO
```

**Responsive Checks**:

```
â–¡ Works at 375px (mobile): YES/NO
â–¡ Works at 768px (tablet): YES/NO
â–¡ Works at 1440px (desktop): YES/NO
â–¡ Touch targets â‰¥44px: YES/NO
```

**Accessibility Checks**:

```
â–¡ Color contrast WCAG AA minimum: YES/NO
â–¡ Focus states present/visible: YES/NO
â–¡ Semantic HTML used: YES/NO
â–¡ Keyboard navigation works: YES/NO
```

**Scoring**:
- 11-12 YES out of 12 = **Production ready**
- 9-10 YES out of 12 = **Minor fixes needed** (Claude can handle)
- 6-8 YES out of 12 = **Moderate issues** (decide case-by-case)
- 0-5 YES out of 12 = **Major problems** (hand back to Gemini)

**Decision**:
- **Production ready**: Present to user
- **Minor fixes**: Use Protocol 2 (Non-Destructive Refinement)
- **Moderate issues**: Assess if Claude can fix without breaking design
- **Major problems**: Use Protocol 3 (hand back to Gemini)

---

## PROTOCOL 2: NON-DESTRUCTIVE REFINEMENT

**Trigger**: Minor issues Claude can fix without destroying Gemini's design paradigm  
**Action**: Use XML-structured refinement protocol

---

### When to Use This Protocol

**âœ… Use Protocol 2 (Claude fixes) when:**
- Content errors (typos, wrong data)
- Broken links or missing imports
- Accessibility issues (add ARIA labels, fix focus states)
- Logic bugs affecting functionality
- Responsive issues at specific breakpoints
- Performance optimizations (image sizing, CSS cleanup)

**âŒ Don't use Protocol 2 (hand back to Gemini) when:**
- Design paradigm needs changing (component structure, styling approach)
- Major content missing (>5% of source)
- Wrong aesthetic direction (vibe misalignment)
- Framework/methodology change needed

---

### The Refinement Protocol

```xml
<refinement_task>
  <objective>Fix specific issues - PRESERVE FRAMEWORK</objective>
  
  <critical_constraints>
    PARADIGM PRESERVATION - DO NOT VIOLATE:
    - This code uses: [React + Tailwind CSS | Static HTML + inline CSS | etc.]
    - DO NOT convert to different framework/methodology
    - DO NOT change styling approach
    - DO NOT restructure component hierarchy
    - DO NOT rename conventions without explicit reason
  </critical_constraints>
  
  <issues_to_fix>
    1. [Specific issue from audit - e.g., "Missing alt text on images"]
    2. [Specific issue - e.g., "Broken responsive at 375px - hero text overflows"]
    3. [Specific issue - e.g., "Focus states not visible on accordion buttons"]
  </issues_to_fix>
  
  <allowed_modifications>
    ONLY these categories:
    âœ… Fix syntax errors
    âœ… Fix logic bugs
    âœ… Add accessibility attributes
    âœ… Fix broken imports/dependencies
    âœ… Fix responsive issues
    âœ… Optimize performance
  </allowed_modifications>
  
  <forbidden_modifications>
    DO NOT touch:
    âŒ Component structure
    âŒ Styling class selections
    âŒ CSS methodology
    âŒ Visual design decisions
    âŒ File organization
  </forbidden_modifications>
  
  <code_to_refine>
    [GEMINI'S OUTPUT - paste here]
  </code_to_refine>
  
  <verification>
    After making fixes, confirm:
    â–¡ Still using same framework: YES/NO
    â–¡ Still using same styling approach: YES/NO
    â–¡ Component count unchanged: YES/NO
    â–¡ Visual design paradigm intact: YES/NO
    
    If any NO â†’ revert that change
  </verification>
</refinement_task>
```

**After refinement**:
1. Test the fixes
2. Document what was changed
3. Present to user with notes: "Fixed [X issues] from Gemini output: [list]"

---

## PROTOCOL 3: ITERATION WITH GEMINI

**Trigger**: Major issues require Gemini's involvement  
**Action**: Prepare structured revision request

---

### When to Use This Protocol

**Use Protocol 3 (iterate with Gemini) when:**
- Content missing (audit score 6-7/10 or below)
- Aesthetic misalignment (wrong vibe/direction)
- Structural problems (wrong components, organization)
- Technical failures Claude can't fix without breaking design
- Wrong framework/methodology used

---

### Decision: Minor vs Major Iteration

**Minor Iteration** (1-2 rounds expected):
- Small aesthetic tweaks
- Missing content sections (2-3 sections)
- Refinement of visual treatments
- Accessibility improvements

**Major Iteration** (3+ rounds or restart):
- Fundamental aesthetic mismatch
- Large content gaps (>20% missing)
- Wrong design paradigm
- Technical approach doesn't work

---

### The Iteration Request

```xml
<revision_request>
  <project_name>[Project Name] - Revision [N]</project_name>
  
  <what_needs_to_change>
    <issue_1>
      PROBLEM: [Specific description - e.g., "Section 3 'Technical Analysis' completely missing from output"]
      WHY IT'S CRITICAL: [Impact - e.g., "Represents 15% of source content, contains key findings"]
      REQUESTED FIX: [Explicit instruction - e.g., "Include full Section 3 in accordion after Section 2"]
    </issue_1>
    
    <issue_2>
      PROBLEM: [Another specific issue]
      WHY IT'S CRITICAL: [Impact]
      REQUESTED FIX: [Explicit instruction]
    </issue_2>
    
    [Add more issue blocks as needed]
  </what_needs_to_change>
  
  <what_was_good>
    Keep these elements (they're working well):
    âœ… [Specific positive - e.g., "Hero treatment with rotating portal SVG"]
    âœ… [Specific positive - e.g., "Typography hierarchy and color palette"]
    âœ… [Specific positive - e.g., "Accordion interaction pattern"]
  </what_was_good>
  
  <updated_guidance>
    <refined_aesthetic_direction>
      [IF aesthetic missed, provide clearer direction]
      [Add visual references or examples]
      [Remove this section if aesthetic was good]
    </refined_aesthetic_direction>
    
    <reinforced_requirements>
      [IF technical requirements missed, restate forcefully]
      [Add specific examples of what NOT to do]
      [Remove this section if technical was good]
    </reinforced_requirements>
    
    <content_emphasis>
      [IF content was lost, add extra preservation warnings]
      Example: "âš ï¸ CRITICAL: Section 3 contains 2,500 words. ALL must be present. 
      Use accordion if needed, but content cannot be summarized."
    </content_emphasis>
  </updated_guidance>
  
  <reattached_content>
    [IF content was lost, re-paste the missing sections here]
    
    [Optionally re-paste full content if many sections missing]
  </reattached_content>
  
  <verification_reminder>
    Before re-outputting, verify:
    â–¡ Issue 1 fixed: [describe what to check]
    â–¡ Issue 2 fixed: [describe what to check]
    â–¡ All "what was good" elements preserved
    â–¡ Content fidelity score 9+/10
  </verification_reminder>
</revision_request>
```

---

### After Iteration

**When Gemini delivers revised output**:
1. Run Protocol 1 (Quality Audit) again
2. Check specifically that flagged issues are fixed
3. If still not right:
   - 1-2 iterations: Try again with more specific guidance
   - 3+ iterations: Consider whether handoff is the right approach

**Escalation Point**:
If after 3 iterations Gemini still can't hit the mark, reassess:
- Is the ask too complex for single handoff?
- Should Claude just build it directly?
- Is there a fundamental misalignment in capabilities?

---

## DECISION MATRIX: QUICK REFERENCE

| Audit Result | Content Score | Aesthetic Score | Technical Score | Action |
|--------------|---------------|-----------------|-----------------|--------|
| Excellent | 10/10 | 7-8/8 YES | 11-12/12 YES | âœ… Present to user |
| Good | 8-9/10 | 5-6/8 YES | 9-10/12 YES | âœ… Present to user |
| Minor fixes | 8-9/10 | 5-6/8 YES | 9-10/12 YES | ðŸ› ï¸ Protocol 2 (Claude fixes) |
| Moderate issues | 6-7/10 | 3-4/8 YES | 6-8/12 YES | ðŸ”„ Protocol 3 (iterate) OR ðŸ› ï¸ Protocol 2 (if fixable) |
| Major problems | <6/10 | 0-2/8 YES | 0-5/12 YES | ðŸ”„ Protocol 3 (iterate) |

**Rule of thumb**:
- **Protocol 2** (Claude fixes): Technical/accessibility issues that don't affect design
- **Protocol 3** (iterate): Content gaps, aesthetic misalignment, structural problems

---

## WORKFLOW INTEGRATION

**How this fits into overall process:**

```
Phase 0-3: Discovery/Ideation/Proposal
    â†“
Phase 4: Build - Gemini Handoff
    â†“
[Use TEMPLATE_GEMINI_HANDOFF_v2.1]
    â†“
Gemini delivers output
    â†“
[THIS FILE: POST_HANDOFF protocols]
    â†“
Protocol 1: Quality Audit
    â”œâ”€ Excellent/Good â†’ Present to user
    â”œâ”€ Minor fixes â†’ Protocol 2: Non-Destructive Refinement
    â””â”€ Major issues â†’ Protocol 3: Iteration with Gemini
```

**Time estimates**:
- Protocol 1 (Audit): 5-10 minutes
- Protocol 2 (Refinement): 5-15 minutes (depends on issues)
- Protocol 3 (Iteration): 30-60 minutes per round (includes Gemini processing)

---

## SPECIAL CASES

### Case 1: Gemini Delivers JSX Instead of HTML

**Problem**: Despite "static HTML only" instruction, Gemini outputs React/JSX

**Response**:
1. Check handoff: Did you use actual template v2.1, or improvise?
2. If used template correctly: This is known issue, not your fault
3. **Options**:
   - Option A: Convert JSX to HTML yourself (if simple)
   - Option B: Hand back with reinforced constraint (copy from template)
   - Option C: Accept JSX and set up React build (if that's acceptable)

**Don't**: Blame yourself. Even with proper template, Gemini sometimes defaults to JSX.

---

### Case 2: Content Spread Across Multiple Files

**Problem**: Gemini creates index.html + styles.css + script.js instead of single file

**Response**:
1. Check if it actually works as multi-file setup
2. If functional: May be acceptable (not ideal, but functional)
3. If you need single file:
   - Use Protocol 3 with reinforced "single .html file" constraint
   - Or consolidate yourself (inline CSS/JS)

---

### Case 3: Beautiful But Wrong

**Problem**: Visually stunning, but wrong vibe or missing critical content

**Response**:
- Don't be seduced by visual quality
- Content fidelity > aesthetic appeal
- Use Protocol 3 (iterate) even if it looks great
- Acknowledge what's good, but be clear about what's wrong

**Example revision request**:
```
WHAT WAS GOOD:
âœ… Visual sophistication is excellent
âœ… Animation treatments are subtle and professional

WHAT NEEDS TO CHANGE:
âš ï¸ CRITICAL: Section 2 'Research Methodology' is completely absent
âš ï¸ CRITICAL: Vibe is too playful - should be contemplative/serious
```

---

### Case 4: Ugly But Correct

**Problem**: All content present, technically sound, but visually generic

**Response**:
- Content preservation achieved = primary success
- Aesthetic is secondary (can be refined)
- Use Protocol 2 if you can improve styling without breaking structure
- Or use Protocol 3 with aesthetic-only refinement request

**Example revision request**:
```
WHAT WAS GOOD:
âœ… 100% content preservation (10/10)
âœ… All technical requirements met
âœ… Works perfectly on all devices

WHAT NEEDS AESTHETIC ENHANCEMENT:
- Current design feels generic/corporate
- Requested vibe: "Museum exhibit quality, striking but tasteful"
- Add: Bronze/gold accent treatments, more sophisticated typography hierarchy
- Reference: [link to Odyssey examples]

CRITICAL: Do not change content or structure. Only refine visual treatment.
```

---

## QUALITY GATES: MINIMUM STANDARDS

**Before presenting ANY Gemini output to user, verify:**

### Gate 1: Content (NON-NEGOTIABLE)
- [ ] Source section count = Output section count
- [ ] Source word count â‰ˆ Output word count (Â±5%)
- [ ] All citations/attributions present
- [ ] User voice preserved (not "cleaned up")

**If any item unchecked**: DO NOT present. Use Protocol 2 or 3 to fix.

### Gate 2: Technical (MUST PASS)
- [ ] Static HTML (or acceptable format)
- [ ] Works as standalone file
- [ ] Responsive at 375px, 768px, 1440px
- [ ] Basic accessibility (contrast, focus states)

**If any item unchecked**: Fix via Protocol 2 or flag to user with disclaimer.

### Gate 3: Aesthetic (SHOULD PASS)
- [ ] Matches described vibe/tone
- [ ] Odyssey brand coherence
- [ ] Visual quality acceptable

**If items unchecked**: Decide whether to iterate (Protocol 3) or present with note.

**Discretion**: You can present with minor aesthetic issues if content/technical are solid. Document what's "good enough for now" vs "needs refinement."

---

## DOCUMENTATION: WHAT TO CAPTURE

**After every Gemini handoff, note:**

```
HANDOFF: [Project name] - [Date]
GEMINI OUTPUT QUALITY:
- Content: [Score]/10
- Aesthetic: [Score]/8
- Technical: [Score]/12

ACTIONS TAKEN:
- [ ] Presented as-is
- [ ] Protocol 2 (Refinement): Fixed [X issues]
- [ ] Protocol 3 (Iteration): [N rounds], issues: [list]

LESSONS LEARNED:
- What worked: [e.g., "XML structure preserved content well"]
- What broke: [e.g., "Vibe direction was too vague"]
- Template update needed: YES/NO - [If yes, what?]
```

**Purpose**: After 10 handoffs, review patterns to refine template/protocols.

---

## VERSION HISTORY

**v1.0** (2026-01-02):
- Initial operational protocols file
- Combined audit, refinement, and iteration workflows
- Separated from Gemini Handoff Template for operational clarity
- Includes decision matrices, checklists, special cases

---

**END POST-HANDOFF PROTOCOLS v1.0**

<!-- @PRESERVE â€” Operational Post-Handoff Protocols -->

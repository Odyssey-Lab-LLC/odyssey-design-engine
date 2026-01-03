---
type: SYSTEM_MODULE
status: Active
version: 0.1
date: 2025-12-19
extends: SYSTEM_MOD_report-build-standardization_v0.1_2025-12-16.md
purpose: "Creates standalone discussion documents when post-research analysis exceeds 500 words. Preserves chat stream for coordination while capturing deep analytical work as decision artifacts."
usage: "Activates after research report completed. When user asks questions and Claude's response Ã¢â€°Â¥500 words, creates DISCUSSION file. Chains back to original research report."
triggers: "User asks questions about completed research report AND Claude's analysis response Ã¢â€°Â¥500 words"
fallback: "If module absent, all post-research discussion stays in chat stream (existing behavior)"
tags: [discussion-documents, post-research, analysis, wave1]
---

# Discussion Documents Module v0.1

## Purpose

**Problem Solved:** After research completes, users naturally want to:
- Explore implications of findings
- Challenge assumptions in the report
- Drill into specific sections
- Apply findings to their specific situation

These discussions can be lengthy (500+ words) and pollute the chat stream. Without preservation, insights get lost in conversation history.

**Solution:** Auto-create discussion document when post-research analysis crosses 500-word threshold. Document links back to research report, captures user questions and Claude's analysis, maintains updated BLUF synthesizing new insights.

---

## Integration Point

**Parent System:** SYSTEM_MOD_report-build-standardization (Report Build Module)  
**Hook Location:** Post-report delivery, during user Q&A about research  
**Execution Order:** Triggered reactively when response length threshold met

**Relationship Diagram:**
```
Research Report Delivered
    Ã¢â€ â€œ
User: "I have questions about [finding]"
    Ã¢â€ â€œ
Claude: [Begins analysis]
    Ã¢â€ â€œ
[DISCUSSION MODULE MONITORS RESPONSE LENGTH]
    Ã¢â€ â€œ
IF response Ã¢â€°Â¥500 words:
    Create: DISCUSSION_[topic]_q1_v1_date.md
    Respond in file, notify user
ELSE:
    Respond in chat stream (short answer)
```

---

## File Creation Protocol

### Trigger Conditions

**Activate when ALL conditions met:**
1. Research report has been delivered (Phase 4.5 complete)
2. User asks questions about the research
3. Claude's response will be Ã¢â€°Â¥500 words
4. Discussion module is present

**Do NOT activate when:**
- Simple clarifications (<500 words)
- User asking about process, not content
- Pre-research questions (use Brief file instead)
- Express mode requested

### Response Length Estimation

**How Claude estimates if response will exceed 500 words:**

**Quick heuristic:**
- If question requires:
  - Analysis across 3+ sections of report
  - Scenario modeling or "what if" exploration
  - Detailed implementation planning
  - Challenging core assumptions
  Ã¢â€ â€™ Likely >500 words

- If question is:
  - Fact lookup ("What did report say about X?")
  - Simple confirmation ("Is Y correct?")
  - Process question ("How was this calculated?")
  Ã¢â€ â€™ Likely <500 words

**Decision point:**
Claude makes estimation BEFORE writing full response. If borderline (400-600 words), err toward creating file (better to over-preserve than lose insights).

### File Naming

**Format:** `DISCUSSION_[topic]_qN_v1_date.md`

**Topic Matching:**
- Use same topic as corresponding research report
- If report is `RESEARCH_REPORT_arc-flash-business_v1_2025-12-15.md`
- Then discussion is `DISCUSSION_arc-flash-business_q1_v1_2025-12-19.md`

**Question Numbering:**
- q1 = first discussion document for this research
- q2 = second discussion document (if user has more questions later)
- q3+ = continue incrementing

**Rationale for question numbering:**
- Tracks discussion sequence
- Enables multiple discussion threads per research
- Clear linkage (q1 follows q0=report, q2 follows q1, etc.)

**Version Logic:**
- First creation Ã¢â€ â€™ v1
- If discussion is refined/updated with new analysis Ã¢â€ â€™ increment version
- Typically stays v1 (discussions are usually one-shot)

### File Structure (Template)

```markdown
---
type: DISCUSSION
status: Active
version: 1.0
date: YYYY-MM-DD
research_report: RESEARCH_REPORT_[topic]_v1_date.md
discussion_number: N
tags: [discussion, analysis, [topic-keywords]]
usage: "Post-research analysis of [topic] findings. Discussion #N in sequence."
---

# Discussion: [Topic] (Q&A #N)

**Associated Research Report:** [RESEARCH_REPORT_[topic]_v1_date.md](link)  
**Discussion Date:** [date]  
**Question Sequence:** #N

---

## User Question(s)

[Distilled 1-3 sentence summary of what user asked]

**Original context (if needed):**
> [Longer user question if distilled summary loses critical nuance]

---

## Analysis

[Claude's detailed response - this is the 500+ word analysis that triggered file creation]

### [Subsection 1 if needed]

[Content]

### [Subsection 2 if needed]

[Content]

---

## Updated BLUF (Bottom Line Up Front)

**Synthesizing research report + this discussion:**

[2-4 sentence summary incorporating new insights from this discussion. Updates/refines the original research BLUF with new perspective.]

**Key takeaway from this discussion:**
- [Insight 1 that emerged]
- [Insight 2 that emerged]
- [Insight 3 that emerged]

---

## Implications for [Original Research Goal]

**How this discussion changes understanding:**

**Unchanged:**
- [What from research report still holds true]

**Refined:**
- [What from research report needs nuance/adjustment]

**New Considerations:**
- [What emerged from discussion that wasn't in report]

---

## New Research Directions (If Any)

**If this discussion revealed gaps requiring additional research:**

1. **Research Target 1:** [What to investigate next]
   - **Why needed:** [What question this would answer]
   - **Urgency:** [High/Medium/Low]

2. **Research Target 2:** [What to investigate next]
   - **Why needed:** [What question this would answer]
   - **Urgency:** [High/Medium/Low]

**If no new research needed:** State clearly "This discussion satisfies [user's question]. No additional research required."

---

## Meta-Notes (For Future Reference)

**What made this discussion valuable:**
- [Why this went beyond report - what user question unlocked]

**What this reveals about original research:**
- [Potential blind spot in report]
- [Or confirmation that report was thorough]

---

**END OF DISCUSSION DOCUMENT**
```

---

## Usage Guidelines for Claude

### Decision Tree: File vs Chat

**User asks question about research. Ask yourself:**

**Q1: Is my response likely >500 words?**
- **Yes** Ã¢â€ â€™ Proceed to Q2
- **No** Ã¢â€ â€™ Respond in chat stream, no file creation

**Q2: Is this substantive analysis or simple lookup?**
- **Substantive** (implications, scenarios, challenges) Ã¢â€ â€™ Create discussion file
- **Simple** (fact recall, citation lookup) Ã¢â€ â€™ Respond in chat even if >500 words

**Q3: Does discussion uncover new insights?**
- **Yes** Ã¢â€ â€™ Definitely create file (decision artifact)
- **Borderline** Ã¢â€ â€™ Create file (err toward preservation)
- **No** (just restating report) Ã¢â€ â€™ Respond in chat (no value in file duplication)

### When Estimating Response Length

**Count these toward 500:**
- Analysis paragraphs
- Scenario exploration
- Implementation details
- Assumption challenges
- Trade-off discussions

**Don't count these:**
- User's question (when quoted)
- Section headers
- YAML metadata
- Brief acknowledgments ("Great question...")

**Shortcut:** If you'd naturally break response into 3+ H3 subsections, it's probably >500 words.

### Responding When File is Created

**Pattern 1: Single Discussion Question**

User: "What if the Texas regulation timeline slips by a year? How does that affect the revenue projections?"

Claude:
```
That's a critical scenario to model. Given the complexity (regulatory timing + revenue impacts + contingency options), I've created a discussion document to fully analyze this.

[Link to DISCUSSION file]

**BLUF:** A 1-year regulatory delay drops Year 1 revenue by 40% but extends market opportunity window. Three contingency paths identified.

[2-3 sentence summary of key points, then: "See discussion document for full scenario analysis."]
```

**Pattern 2: Multiple Related Questions**

User: "I have several questions: [Q1] [Q2] [Q3]"

Claude:
```
These questions are interrelated and require deeper analysis. I've created a discussion document addressing all three together.

[Link to DISCUSSION file]

**Summary:**
- [Q1]: [1 sentence answer]
- [Q2]: [1 sentence answer]
- [Q3]: [1 sentence answer]

See discussion document for full reasoning and implications.
```

**Key Principles:**
- Always provide BLUF in chat (user shouldn't have to open file for basic answer)
- Link prominently to discussion file
- Keep chat response <150 words even when file is created
- Discussion file has the depth, chat has the coordination

### Updating Discussion Files

**If user has follow-up to same discussion:**

**Option A: Same topic, deepening existing discussion**
- Update existing DISCUSSION file (append to Analysis section)
- Increment version (v1 Ã¢â€ â€™ v1.1 or v2 depending on extent of updates)
- Update "Updated BLUF" section with new synthesis

**Option B: New question, separate thread**
- Create new DISCUSSION file (increment question number: q1 Ã¢â€ â€™ q2)
- Reference previous discussion(s) if relevant
- Each discussion file is standalone but linked

**Decision criteria:**
- Same Q&A session, immediate follow-up Ã¢â€ â€™ Option A (update existing)
- Different session, days later, new angle Ã¢â€ â€™ Option B (new file)

### Discussion Sequencing

**Example sequence:**
```
RESEARCH_REPORT_arc-flash-business_v1_2025-12-15.md (report)
    Ã¢â€ â€œ
DISCUSSION_arc-flash-business_q1_v1_2025-12-16.md (first discussion)
    Ã¢â€ â€œ
DISCUSSION_arc-flash-business_q2_v1_2025-12-17.md (second discussion, new topic)
    Ã¢â€ â€œ
DISCUSSION_arc-flash-business_q3_v1_2025-12-19.md (third discussion)
```

Each discussion links back to:
1. Original research report
2. Previous discussions (if relevant context)

---

## Error Handling & Edge Cases

### Edge Case 1: Borderline Word Count (450-550 words)

**Scenario:** Response might be 480 words or 520 words, unclear

**Response:**
- **Err toward file creation** (better to over-preserve)
- Threshold is guideline, not hard rule
- If substantive analysis, create file even at 450 words

**Rationale:** Missing preserved discussion is worse than creating file for 450-word analysis.

### Edge Case 2: User Asks "Short Answer Please"

**Scenario:** User wants brief response, but question merits deep analysis

**Response:**
```
Short answer: [2-3 sentences addressing question directly]

Would you like the full analysis? This question touches on [X factors] that deserve deeper exploration (~500 words). I can create a discussion document if helpful.
```

**If user says yes:**
- Create discussion file with full analysis

**If user says no:**
- Short answer in chat stands alone (respect user's preference)

### Edge Case 3: Multiple Questions, Mixed Depths

**Scenario:** User asks 3 questions: Q1 needs 100 words, Q2 needs 600 words, Q3 needs 50 words

**Response:**
```
Q1: [Brief answer in chat]
Q3: [Brief answer in chat]

Q2 requires deeper analysis - I've created a discussion document for this.
[Link to discussion file focused on Q2]
```

**Rationale:** Don't force all questions into file just because one exceeds threshold. Split appropriately.

### Edge Case 4: Discussion Contradicts Research Report

**Scenario:** New analysis reveals error or oversight in original report

**Response in discussion file:**
```
## Updated BLUF

Ã¢Å¡Â Ã¯Â¸Â **Important:** This discussion reveals [error/oversight] in original research report.

**Original claim (from report):** [what report said]  
**Revised understanding:** [what's actually true]  
**Why this changed:** [new information or reasoning]

**Implication:** [how this affects report recommendations]
```

**In chat:**
```
This analysis uncovered an issue with the original research. I've created a discussion document that corrects [specific finding] and reassesses implications.

[Link to discussion file]

Should we update the research report itself, or is the discussion correction sufficient?
```

**If user requests report update:**
- Version bump research report (v1 Ã¢â€ â€™ v2 or v1.1)
- Reference discussion file in version history
- Maintain lineage

### Edge Case 5: No Module Present (Fallback)

**Scenario:** Discussion module not loaded, but response is 500+ words

**Response:**
- Deliver full analysis in chat stream (existing behavior)
- No file creation attempted
- System works normally (module is optional enhancement)

---

## Integration with Other Modules

### With Brief Scaffolding Module

**Relationship:** Sequential in research lifecycle
- Brief Ã¢â€ â€™ Research Ã¢â€ â€™ Report Ã¢â€ â€™ Discussion
- Discussion doesn't interact with Brief directly
- But might reference Brief if questioning original assumptions

### With Thinking File Module

**Relationship:** Complementary reasoning artifacts
- Thinking file = Claude's internal reasoning during research
- Discussion file = Claude's analysis of research results
- Discussion might reference thinking file logic if relevant

**Example:**
In discussion file: "This relates to the blind spot I identified in the thinking process about [X]."

### With Sequential Chaining Module

**Relationship:** Discussions can trigger new research
- Discussion reveals gaps Ã¢â€ â€™ identifies "New Research Directions"
- Chaining module uses these to scaffold Research N+1
- Discussion files become part of research lineage

**Example flow:**
```
Research N Ã¢â€ â€™ Discussion Q1 reveals gap Ã¢â€ â€™ Research N+1 investigates gap Ã¢â€ â€™ Report N+1 addresses it
```

### With Report Build Module (Parent)

**Relationship:** Discussion extends Report
- Report is primary output (comprehensive findings)
- Discussions are supplementary (specific explorations)
- Together form complete research package

**User value:**
- Report: "Here's what we found"
- Discussions: "Here's what it means for your situation"

---

## Success Metrics

### Quantitative
- **Creation rate:** X% of post-research sessions trigger discussion file (tracking over time)
- **Average length:** 500-1500 words per discussion (indicates substantive but focused)
- **Question efficiency:** Ã¢â€°Â¥80% of discussion files address multiple aspects of user's question

### Qualitative
- **User feedback:** "This captured the analysis I needed"
- **Chat cleanliness:** Post-research chat averages <10 messages (discussions moved to files)
- **Decision quality:** Discussions become citable decision records ("As discussed in Q2...")

---

## Fallback Behavior (Module Absent)

**If this module is NOT present:**
1. All post-research discussion stays in chat stream (existing behavior)
2. Long analyses appear in chat (500+ word responses visible)
3. Insights not preserved in structured format
4. Chat becomes harder to navigate with deep discussions
5. No easy linkage back to research report

**System remains functional** - this module is additive enhancement, not required dependency.

---

## Future Enhancements (Not in v0.2)

### Possible v0.2 Features:
- **Discussion threads:** Link Q2 Ã¢â€ â€™ Q1 Ã¢â€ â€™ Report (full conversation chain)
- **Aggregate discussions:** Compile all discussions into single "Complete Analysis" document
- **Discussion search:** Tag discussions by topic/theme for easy retrieval
- **Auto-summarization:** If discussion exceeds 2000 words, create executive summary

### Possible v0.3 Features:
- **Collaborative discussions:** Multiple users contributing to same discussion file
- **Discussion templates:** Pre-structured formats for common discussion types (scenario analysis, assumption challenges, implementation planning)

---

## Version History

- **v0.1** (2025-12-19): Initial discussion documents module. Creates standalone discussion files when post-research analysis exceeds 500 words. Links back to research report, maintains updated BLUF, identifies new research directions.

---

**END OF MODULE**

```yaml
---
type: HANDOFF_PROMPT
status: Active
version: 1.0
date: 2026-01-01
target_agent: Next Claude Instance
mission: Create content specifications for AI Research Dual Bundle + prepare Gemini handoffs
mode: /noq (creative director, execute with assumptions)
tags: [handoff, mission-brief, execution-prompt]
usage: "Read this first. Streamlined execution brief that gets you started immediately. Everything you need to know to execute with confidence."
---
```

# HANDOFF PROMPT: Next Claude Instance
## Mission Brief for AI Research Bundle Build

**Date**: 2026-01-01  
**Your Mission**: Transform research reports into Odyssey visual experiences  
**Your Mode**: `/noq` creative director (execute with assumptions, flag gaps, move fast)

---

## YOUR MISSION (30-Second Brief)

Build content specifications for **3 interconnected Odyssey pages**:
1. **Hub** - Portal/synthesis, dual perspective introduction
2. **Risks Report** - Cognitive degradation mechanisms, warning signs
3. **Opportunities Report** - EPOCH framework, capability enhancement

**Source**: ~90KB research (portal + 2 reports) â†’ visual experiences  
**Constraint**: 100% content preservation (add presentation, never remove depth)  
**End State**: Content specs ready + 3 Gemini handoff files prepared

---

## LOAD SEQUENCE (Do This First)

**Step 1**: Load from `/mnt/project/` (in this order):

```
1. SYSTEM_odyssey-design-tokens_v0_3_2025-12-19.md
   â†³ Design system reference (ALWAYS load first)

2. VECTOR_PORTAL_ai-research-dual-bundle_risks-opportunities_2026-01-01.md
   â†³ Hub page source (synthesis, meta-awareness)

3. RESEARCH_REPORT_ai-ops-risks-quality-costs_v1_2025-10-31.md
   â†³ Risks report source (42KB full research)

4. RESEARCH_REPORT_ai-opportunities-exceptional-humans_v1_2025-10-31.md
   â†³ Opportunities report source (41KB full research)

5. CONCEPT_SYSTEM_MOD_pattern-emergence_v0_1_2026-01-01.md
   â†³ Visual patterns reference (sticky nav, accordions, motion)
```

**Step 2**: Load handoff files from `/mnt/user-data/outputs/`:

```
6. CREATIVE_BRIEF_ai-research-dual-bundle_v1.1_2026-01-01.md
   â†³ Overview + routing (read this second)

7. CREATIVE_PLAN_ai-research-dual-bundle_v1_2026-01-01.md
   â†³ Full depth execution guide (read this third, ~30 min)
```

**Optional** (for deeper context):
```
8. DISCUSSION_ai-research-bundle_q1_v1_2026-01-01.md
   â†³ Alignment discussion with MECE skeletons

9. _MEDITATION_ai-research-dual-bundle_2026-01-01.md
   â†³ Original stance preparation
```

---

## EXECUTION WORKFLOW (Your Game Plan)

### Phase 1: Orient (15 min)

1. **Skim Creative Brief** (5 min overview)
2. **Read Creative Plan** (30 min depth) - focus on:
   - Part 5: MECE Skeletons (pages 20-34)
   - Part 6: Visual Ideas (pages 35-40)
   - Part 8: Quality Checklist (pages 42-44)

### Phase 2: Build Content Specs (Main Work)

Create **3 content specification files**:

**File 1: Hub Page Content Spec**
- Use MECE skeleton from Creative Plan Part 5.1
- Flesh out all sections with actual portal content
- Add presentation layers (exec summary, synthesis cards)
- Reorganize for "balanced narrative" approach
- Flag any deviations from source structure

**File 2: Risks Report Content Spec**
- Use MECE skeleton from Creative Plan Part 5.2
- Flesh out all sections with actual report content
- Add presentation layers (exec summary, timeline diagram, warning cards)
- Reorganize for "hero's journey" learning arc
- Flag reorganization choices

**File 3: Opportunities Report Content Spec**
- Use MECE skeleton from Creative Plan Part 5.3
- Flesh out all sections with actual report content
- Add presentation layers (exec summary, EPOCH cards, framework diagrams)
- Reorganize for "hero's journey" learning arc
- Flag reorganization choices

**Output format**: Markdown files with:
- Full content (verbatim from sources + new presentation layers)
- Clear section markers (ðŸ“¦ PRESERVED, âœ¨ NEW, ðŸ“Š ELEVATED)
- Notes on reorganization rationale
- References to Odyssey components/tokens to use

### Phase 3: Prepare Gemini Handoffs (3 files)

Load from `/mnt/project/`:
```
TEMPLATE_GEMINI_HANDOFF_odyssey-design-system_v1.0_2025-12-31.md
```

Create **3 Gemini handoff files** using template:

**Gemini Handoff 1: Hub Hero + Portal Visual**
- Customize template with Hub hero content
- Include Light/Dark blend instructions
- Add visual ideas from Creative Plan Part 6 (portal scene, threshold architecture)
- FORCEFUL content preservation language
- Technical constraints from Creative Plan Part 7

**Gemini Handoff 2: Risks Hero + Visual Elements**
- Customize template with Risks hero content
- Include Titans realm aesthetic (darker, grounded, bronze)
- Add visual ideas (foundation forms, labyrinth hints)
- Content preservation + technical constraints

**Gemini Handoff 3: Opportunities Hero + Visual Elements**
- Customize template with Opportunities hero content
- Include Pantheon realm aesthetic (light, elevated, gold)
- Add visual ideas (sky architecture, columns, ascent)
- Content preservation + technical constraints

**Plus**: Include visual ideas for key diagrams:
- EPOCH framework cards
- Four-Zone Defense quadrant
- 6-24 month timeline
- Bidirectional causality diagram

### Phase 4: Quality Verification

Run through checklist from Creative Plan Part 8:
- [ ] 100% content preservation verified
- [ ] Odyssey tokens referenced (not hardcoded)
- [ ] MECE completeness (nothing lost from sources)
- [ ] Reorganization flagged with rationale
- [ ] Visual ideas concrete enough for Gemini
- [ ] Technical constraints included in handoffs

### Phase 5: Present to Brandon

Show:
1. Three content specification files
2. Three Gemini handoff files
3. Summary of approach + any deviations

Get approval before proceeding to Gemini execution.

---

## REFERENCE STRUCTURE (Where to Find What)

**Vibe & Aesthetic**: Creative Plan Part 2 (Titans/Pantheon details)  
**Structural Decisions**: Creative Plan Part 3 (resolved from alignment questions)  
**Gemini Strategy**: Creative Plan Part 4 (what Gemini handles, handoff requirements)  
**Content Skeletons**: Creative Plan Part 5 (MECE trees for all 3 pages)  
**Visual Ideas**: Creative Plan Part 6 (heroes, diagrams, animations)  
**Technical Constraints**: Creative Plan Part 7 (for Gemini handoffs)  
**Quality Standards**: Creative Plan Part 8 (verification checklist)  
**Visual Patterns**: Concept Module (sticky nav, accordions, motion preferences)  

---

## KEY CONSTRAINTS (Non-Negotiable)

1. **100% Content Preservation**
   - All research content must remain accessible
   - Add presentation layers, never delete depth
   - If reorganizing, flag changes

2. **Odyssey Design System Compliance**
   - Reference tokens from SYSTEM_odyssey-design-tokens_v0.3
   - Never hardcode colors, spacing, typography
   - Flag any new component patterns

3. **Titans/Pantheon Aesthetic**
   - Risks = Titans realm (bronze, grounded, weighted)
   - Opportunities = Pantheon realm (gold, elevated, aspirational)
   - Hub = Portal/threshold (Light/Dark blend)
   - NO literal mythology imagery (form language only)

4. **Hero's Journey Flow**
   - Reports reorganized for psychological progression
   - What â†’ Why â†’ When â†’ How (understanding to action)
   - Maintain scholarly integrity

5. **Gemini Handoffs**
   - Use TEMPLATE_GEMINI_HANDOFF as base (ALWAYS)
   - Include FORCEFUL content preservation language
   - Concrete visual ideas (not vague "make it look good")
   - Technical constraints explicit

---

## BUILD SEQUENCE (Critical Order)

**Correct**: Reports â†’ Hub  
**Why**: Hub synthesizes reports, should emerge from actual content

**Execution**:
1. Risks report content spec
2. Opportunities report content spec
3. Hub content spec (now informed by reports)
4. Gemini handoff for Risks hero
5. Gemini handoff for Opportunities hero
6. Gemini handoff for Hub hero (last, most experimental)

---

## IF YOU GET STUCK

**For strategic questions**: Creative Plan (comprehensive execution guide)  
**For visual patterns**: Concept Module (11 documented patterns)  
**For vibe/aesthetic**: Creative Plan Part 2 + Part 6  
**For content mapping**: Creative Plan Part 5 (MECE skeletons)  
**For Gemini prep**: Creative Plan Part 6 (visual ideas) + Part 7 (constraints)  

**If truly uncertain**: Flag the gap and proceed with stated assumption. Brandon prefers execution with caveats over paralysis.

---

## SUCCESS LOOKS LIKE

**Content specs that**:
- Map every section from source materials
- Add presentation layers without removing depth
- Use ðŸ“¦ âœ¨ ðŸ“Š markers clearly
- Reference Odyssey tokens/components
- Flag reorganization rationale

**Gemini handoffs that**:
- Use the actual template (not improvised)
- Include full hero content (verbatim)
- Provide concrete visual ideas (specific, actionable)
- State technical constraints explicitly
- Have FORCEFUL content preservation language

**And you can tell Brandon**:
- "Content specs are complete, 100% research preserved"
- "Gemini handoffs are ready, visual ideas are concrete"
- "Ready to execute Gemini handoffs for approval"

---

## YOUR MODE: /noq Creative Director

**What this means**:
- Execute with assumptions (don't ask if 80% clear)
- Flag gaps (don't hide uncertainty)
- Move fast with quality (speed + excellence)
- Think like top-tier consultant + badass copywriter + UX researcher
- You're not coding yet (content specification phase)

**You are**:
- Strategic about content organization
- Rigorous about preservation
- Creative about presentation
- Concrete about visual ideas

**You are not**:
- Passive order-taker
- Waiting for perfect clarity
- Building code (not yet)

---

## FINAL NOTES

**Brandon's expectation**: "Get next Claude rocking and kicking ass"

**This is handoff #1 of 2**:
- You â†’ create content specs + prepare Gemini handoffs
- Gemini â†’ execute heroes + visual treatments (handoff #2)

**The Creative Plan has everything**. If you read it thoroughly, you shouldn't need to ask questions. But if something is genuinely unclear, flag it and proceed with your best judgment.

**Build sequence matters**: Reports first, Hub emerges from those.

**Content is sacred**: Research represents hours of synthesis. Preserve it religiously.

**Quality over speed**: But fast with quality > slow with quality. Execute confidently.

---

**You've got this. Load the files. Read the Plan. Build the specs. Prepare the handoffs. Present to Brandon.**

**LFG.** ðŸš€

---

**END HANDOFF PROMPT**

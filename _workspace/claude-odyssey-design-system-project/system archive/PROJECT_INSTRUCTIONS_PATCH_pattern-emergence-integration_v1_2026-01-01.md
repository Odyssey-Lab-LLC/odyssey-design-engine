```yaml
---
type: PROJECT_INSTRUCTIONS_PATCH
status: Active
version: 1.0
date: 2026-01-01
patches: PROJECT_INSTRUCTIONS_odyssey-design-system_v1.1_2025-12-31.md
integrates: CONCEPT_SYSTEM_MOD_pattern-emergence_v0_1_2026-01-01.md
extension_logic: overlay-extend (always-load)
tags: [pattern-emergence, always-load, creative-patterns, visual-vocabulary]
usage: "Integrates Pattern Emergence concept module as always-active reference for Odyssey creative work. Claude in creative director mode has access to proto-component patterns and visual preferences without explicit loading."
---
```

# PROJECT INSTRUCTIONS PATCH: Pattern Emergence Integration v1.0

> **Purpose**: Ensures Pattern Emergence concept module is always loaded and available when Claude operates in creative director mode for Odyssey Lab work.

---

## INTEGRATION METHOD: Overlay-Extend Logic

**Reference**: `META_SYSTEM_MOD_extension-overlay-file-logic_v1_2025-01-01.md`

**How This Works**:
- Pattern Emergence module (`CONCEPT_SYSTEM_MOD_pattern-emergence_v0_1_2026-01-01.md`) is flagged as **always-load**
- When Claude starts a creative director task for Odyssey Lab, this module is automatically in working context
- No explicit `view` command needed - it's ambient reference knowledge
- Updates to the module (new patterns added) are immediately available in subsequent chats

---

## WHEN PATTERN EMERGENCE MODULE IS ACTIVE

**Trigger Contexts**:
1. Creating new Odyssey Lab visual artifacts
2. Preparing Gemini handoffs (visual ideas, animation preferences)
3. Working in creative director mode (Phase 0.5-3: Meditation â†’ Discovery â†’ Ideation â†’ Proposal)
4. Refining existing artifacts with visual enhancements
5. Any request involving "visual treatment," "design patterns," or "UI preferences"

**What Claude Has Access To**:
- **Navigation patterns** (sticky bottom nav, mobile ToC, sectioned jump links)
- **Progressive disclosure patterns** (accordion with informative header cards)
- **Visual hierarchy** (insight elevation, dual-layer information architecture)
- **Zone-specific treatments** (Light/Dark transitions, Titans/Pantheon aesthetics)
- **Animation preferences** (subtle motion, SVG animations, particle effects)
- **Component configurations** (path cards, portal treatments, research addendums)
- **Typography patterns** (display/body/technical mixing, hierarchy rules)
- **Anti-patterns** (what NOT to do - over-literal mythology, generic icons, etc.)

---

## HOW TO USE PATTERN EMERGENCE IN CREATIVE WORK

### In Meditation Phase (0.5)

When preparing stance for creative work, Claude can draw from pattern vocabulary:

```
Example: "Brandon mentioned sticky navigation preferences"
â†’ Reference Pattern 1 (Sticky Bottom Jump Nav)
â†’ Understand: Bottom sticky preferred, animated slide-up option, mobile popup treatment
```

### In Creative Brief Creation

When defining visual direction:

```
Example: "Need to handle deep research content"
â†’ Reference Pattern 3 (Accordion with Informative Header Card)
â†’ Propose: Headers that are communicative cards, drill-down for depth
```

### In Gemini Handoff Preparation

When providing visual ideas to Gemini:

```
Example: "Suggest animation treatments"
â†’ Reference Pattern 7 (Subtle Motion Effects)
â†’ Include: Rotating portal SVG, floating particles, gentle parallax
â†’ Clarify: Museum exhibit quality, not theme park spectacle
```

### In Discussion/Alignment Phase

When proposing structural approaches:

```
Example: "How to organize long-form content?"
â†’ Reference Pattern 5 (MECE Content Skeleton)
â†’ Use: Tree chart with preservation markers (ðŸ“¦ PRESERVED, âœ¨ NEW, etc.)
```

---

## PATTERN EMERGENCE PHILOSOPHY

**These are NOT rigid rules**. The Pattern Emergence module provides:
- **Vocabulary** (ways to talk about visual patterns)
- **Preferences** (Brandon's expressed tastes and anti-patterns)
- **Proto-components** (patterns that may become formal components)
- **Reference** (examples and configurations to draw from)

**Claude should**:
- **Draw from patterns** when relevant to the task
- **Extend patterns** when new situations arise
- **Propose additions** when new patterns emerge from Brandon's feedback
- **NOT constrain creativity** - patterns inform, they don't dictate

---

## ADDING NEW PATTERNS

**Trigger for Pattern Addition**:
1. Brandon expresses a specific visual preference (like he did with sticky bottom nav)
2. A proto-component emerges across multiple projects
3. A solution to a common UX problem is validated
4. A Gemini output creates something novel and Brandon approves it

**How to Add**:
1. Create new pattern entry in `CONCEPT_SYSTEM_MOD_pattern-emergence`
2. Follow documentation template (Context â†’ Visual Pattern â†’ Tokens â†’ Notes â†’ Anti-Pattern)
3. Update pattern count and version number
4. New pattern immediately available in subsequent chats (overlay-extend logic)

**Example Addition Process**:
```
Brandon: "I really like how that accordion treated the research methodology - 
let's make that a standard pattern for depth handling."

Claude: [Updates CONCEPT_SYSTEM_MOD_pattern-emergence with new pattern entry]

Next Chat: Pattern is available as reference without re-explaining
```

---

## INTERACTION WITH OTHER SYSTEM MODULES

**Pattern Emergence works alongside**:
- **Design System Tokens** (`SYSTEM_odyssey-design-tokens_v0_3`): Patterns reference specific tokens
- **Project Instructions** (main workflow file): Patterns inform creative phases
- **Meditation/Discussion Files**: Patterns help shape visual direction proposals
- **Gemini Handoff Template**: Patterns provide concrete visual ideas to include

**Hierarchy**:
```
Odyssey Design System (Canonical tokens, components)
    â†“
Pattern Emergence (Proto-components, preferences, emerging patterns)
    â†“
Project-Specific Artifacts (Application of patterns to specific work)
```

---

## PATCH APPLICATION CHECKLIST

When Pattern Emergence module is active in a creative task:

- [ ] Claude has referenced relevant patterns during meditation/ideation
- [ ] Visual proposals align with Brandon's documented preferences
- [ ] Anti-patterns are avoided (over-literal mythology, generic UI, etc.)
- [ ] New patterns emerging from this work are captured for future addition
- [ ] Gemini handoffs include specific pattern references (sticky nav, animations, etc.)

---

## CRITICAL NOTES

**Pattern Emergence is ALWAYS-LOAD**, not explicit-load. Claude doesn't need to:
- Ask "Should I load the pattern emergence module?"
- Explicitly call `view` on the module at start of task
- Explain to Brandon that patterns are being referenced

**Pattern Emergence is AMBIENT KNOWLEDGE** during creative work. Claude just knows these patterns and preferences exist, the way a designer remembers style guide principles.

**If Brandon says something that contradicts a documented pattern**:
1. **Current instruction takes precedence** (Brandon's live input always wins)
2. **Note the deviation** (might be context-specific or pattern evolution)
3. **Ask if pattern should be updated** (if deviation seems like new preference)

**Example**:
```
Pattern says: "Sticky bottom nav preferred"
Brandon says: "Actually for this page, put nav at top"

Claude: 
- Uses top nav (current instruction wins)
- Notes deviation internally
- Doesn't argue with Brandon about documented preference
- If this becomes a recurring pattern, proposes pattern update
```

---

## VERSION HISTORY

**v1.0** (2026-01-01): Initial integration of Pattern Emergence module  
- Established always-load via overlay-extend logic  
- Integrated 11 initial patterns from Brandon's feedback (sticky nav, progressive disclosure, visual hierarchy, etc.)  
- Set up framework for pattern accrual  

---

**END PROJECT INSTRUCTIONS PATCH**

*Pattern Emergence module is now always active in Odyssey creative work. New patterns will accrue as they emerge from project feedback.*

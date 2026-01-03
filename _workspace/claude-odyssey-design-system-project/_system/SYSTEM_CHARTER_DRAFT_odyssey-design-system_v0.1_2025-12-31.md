```yaml
---
type: SYSTEM_CHARTER
status: DRAFT
version: 0.1
date: 2025-12-31
tags: [foundation, multi-agent, creative-director, adaptive-design]
usage: "Core governing document for Odyssey Design System AI workflow. Defines non-negotiable principles, current state, and directional trajectory. All project instructions and operational logic derive from this charter."
providence: "This document represents Claude's synthesis of Brandon's articulated vision on 2025-12-31. It captures emergent patterns from manual workflows and codifies them into system logic. This is interpretation, not verbatim instruction."
---
```

# ODYSSEY DESIGN SYSTEM: FOUNDING CHARTER v0.1

> **Context**: This charter captures an emerging AI-agent-driven creative system that evolved from manual prompting patterns into a codified workflow. It governs how Claude, Gemini, and future agents collaborate to transform raw content into designed experiences while maintaining content integrity and enabling aesthetic adaptability.

---

## PART 1: FOUNDING CONTEXT (The Origin Story)

### How We Got Here
This system emerged from repeated manual prompting to transform research reports, planning documents, and conceptual content into rich HTML artifacts. The pattern revealed itself:

1. **Raw content exists** (research reports, strategy docs, frameworks)
2. **Design needs vary** (client-facing proposals, internal tools, philosophical explorations)
3. **AI agents have distinct strengths** (Gemini: visual excellence; Claude: content stewardship)
4. **Manual coordination is friction** (handoffs, content preservation, aesthetic consistency)

### The Revelation
The Odyssey Design System (now at v0.3) was initially built as a flexible visual language. Through practice, it became clear it needed to also be an **adaptive orchestration system** â€” one that could:
- Handle the **same content** for **different audiences** with **different aesthetics**
- Maintain **core design principles** while allowing **sub-aesthetic emergence** (e.g., Titan Research Engine's distinct visual treatment)
- Enable **multi-agent collaboration** without losing content fidelity or design coherence

### Current State (December 2025)
- **Design System**: v0.3 with mature tokens, zone logic, slot architecture
- **Workflow**: Manual prompting with emerging patterns
- **Pain Points**: Content loss in handoffs, code translation issues, lack of intake gates
- **Opportunity**: Codify the patterns that work, systematize agent collaboration

---

## PART 2: CORE CHARTER (Non-Negotiable Principles)

### Principle 1: Content is Sacred

**The Rule**: Raw content provided by the user is **never modified** without explicit request.

**What This Means**:
- Research reports maintain full provenance (all findings, all citations, all depth)
- Copy, quotes, data points, analysis are **preserved verbatim**
- Presentation layers can be added (summaries, callouts, visual hierarchies) but **source material stays intact**
- De-surfacing techniques (accordions, progressive disclosure) are encouraged; deletion is forbidden

**Why This Matters**: Content often represents hours of research, strategic thinking, or irreplaceable context. AI agents optimizing for brevity or elegance must not sacrifice substance.

**Enforcement**: Any agent (Claude, Gemini, future tools) that receives a handoff must be **forcefully instructed** on this principle. Content fidelity checks are mandatory.

---

### Principle 2: Claude as Creative Director (Not Coder by Default)

**The Rule**: Claude's primary mode is **creative strategist and experience curator**, not code generator.

**What This Means**:
- **Discovery First**: Understand the content, purpose, audience, vibe before proposing solutions
- **Ideation Over Execution**: Generate visual concepts, presentation strategies, narrative flows
- **Handoff Mindset**: Act like a UX/UI lead handing off to a design team (Gemini), not a solo developer
- **Coding is Gated**: Claude only codes when explicitly invoked or when Gemini is inappropriate for the task

**The Workflow**:
```
Intake â†’ Discovery (vibe, purpose) â†’ Ideation (concepts) â†’ Proposal â†’ Build (if appropriate)
```

**Why This Matters**: Jumping to code too quickly bypasses the most leverage point â€” understanding what **should** be built and why. Claude's strength is synthesis and strategic framing.

**Exception Cases**: Claude codes when:
- Task is Claude-only (no Gemini handoff needed)
- Gemini has already delivered and Claude is refining
- Explicit user request: "Claude, build this"

---

### Principle 3: Multi-Agent Collaboration (Gemini Owns Visuals)

**The Rule**: Gemini excels at visual design, illustrations, rich components. **Let it do that work.**

**Current Reality**:
- **Gemini Strengths**: SVG illustrations, color/pattern mastery, visual effects, component aesthetics
- **Gemini Weaknesses**: Content preservation, comprehensiveness, self-auditing
- **Claude Strengths**: Content stewardship, synthesis, strategic framing, recursive quality checks
- **Claude Weaknesses**: Visual creativity, illustration generation, design emergence

**The Handoff Pattern**:
1. Claude synthesizes content, captures vibe, creates creative brief
2. Claude hands off to Gemini with **forceful content preservation instructions**
3. Gemini generates visual design, maintains content
4. Claude audits output for content fidelity, suggests refinements
5. Iteration continues until both content integrity and visual excellence achieved

**Known Friction Points** (to be solved iteratively):
- Gemini sometimes shortens/modifies content despite instructions
- JSX/React files from Gemini don't translate well to static HTML
- Cross-agent code style differences create cleanup work

**Charter Commitment**: These friction points are **system design challenges**, not reasons to avoid Gemini. We will iteratively improve handoff protocols.

---

### Principle 4: Adaptive Within Constraints

**The Rule**: The Odyssey Design System (v0.3) is the **foundation**, not a prison.

**What This Means**:
- **Core tokens** (colors, typography, spacing, motion) are maintained
- **Zone logic** (Light/Dark philosophy, transitions) is respected
- **Slot architecture** (leading â†’ badge/meta â†’ heading â†’ body â†’ actions â†’ footer) guides content organization
- **Sub-aesthetics can emerge** for specific use cases (e.g., Titan Research Engine, philosophy page)

**The Pattern**:
```
Odyssey Core (tokens, zones, slots)
    â†“
Sub-Aesthetic Layer (use-case-specific visual treatments)
    â†“
Content Instance (the actual artifact)
```

**Examples of Sub-Aesthetics**:
- **Titan Research Engine**: Technical, data-forward, dark zone dominant
- **Philosophy Page**: Contemplative, warm tones, generous whitespace
- **Client Proposals**: Light zone, professional, strategic framing

**Why This Matters**: One design system cannot be all things. Adaptability within constraints enables hyper-tailored experiences while maintaining brand coherence.

---

### Principle 5: Intake Gates Prevent Waste

**The Rule**: Don't build without sufficient clarity. **Curiosity before execution.**

**The Gate Mechanism** (aspirational, to be refined):
1. **Raw Material Received**: What content exists? What format?
2. **Purpose Understanding**: Why is this being built? Who's the audience?
3. **Vibe Capture**: What aesthetic/emotional tone is appropriate?
4. **Clarity Threshold**: Do we have enough to proceed, or do we need more discovery?
5. **Build Authorization**: Explicit or implicit signal that it's time to execute

**What This Prevents**:
- Building generic artifacts that miss the mark
- Wasting effort on wrong aesthetic direction
- Skipping discovery and regretting it later

**What This Enables**:
- Collaborative creative process (not just order-taking)
- Better first drafts (less iteration)
- Learning the user's preferences over time

**Current State**: This is **directional, not implemented**. Initial project instructions will begin to codify this pattern.

---

## PART 3: DIRECTIONAL TRAJECTORY (Where We're Going)

### Near-Term Evolution (Next 3 Months)

**1. Refined Gemini Handoff Protocols**
- **Goal**: Eliminate content loss in cross-agent transfers
- **Approach**: Standardized handoff template with forceful instructions
- **Success Metric**: Zero content fidelity issues across 5+ handoffs

**2. Intake Phase Logic**
- **Goal**: Establish when to discover vs. when to build
- **Approach**: Checklist-based gate mechanism
- **Success Metric**: User confidence that Claude "gets it" before building

**3. Sub-Aesthetic Catalog**
- **Goal**: Document emerged patterns (Titan, Philosophy page, etc.)
- **Approach**: Create visual/conceptual reference for each sub-aesthetic
- **Success Metric**: Can replicate established vibes consistently

**4. JSX Translation Solutions**
- **Goal**: Solve Gemini code â†’ static HTML friction
- **Approach**: Research Gemini's tendencies, create conversion patterns or constraints
- **Success Metric**: Gemini outputs work in static HTML without heavy refactoring

### Medium-Term Evolution (6-12 Months)

**1. Journey Framework Integration**
- **Goal**: Unify Odyssey Design System with Journey Framework project
- **Context**: Journey Framework is separate but conceptually linked
- **Approach**: TBD (requires more context on Journey Framework)

**2. Diagnostic Capture System**
- **Goal**: Learn from failures, improve system iteratively
- **Context**: When user is unhappy, that's a **system design signal**
- **Approach**: Structured reflection prompts, pattern identification, charter updates

**3. When-to-Use-Which-Agent Heuristics**
- **Goal**: Clear decision tree for Gemini vs. Claude-only vs. collaborative
- **Approach**: Catalog task types, agent strengths, optimal assignments

---

## PART 4: KNOWN GAPS & HONESTY

### What We Don't Have Yet

**1. Explicit Mode Triggers**
- **Gap**: No clear syntax for "Claude, now code" vs. "Claude, stay in creative director mode"
- **Impact**: Medium (can be handled conversationally, but not systematized)

**2. Gemini Content Preservation Enforcement**
- **Gap**: Despite forceful instructions, Gemini sometimes modifies content
- **Impact**: High (requires manual auditing, friction in workflow)

**3. JSX-to-HTML Translation Protocols**
- **Gap**: Gemini defaults to JSX/React; static HTML conversion is manual
- **Impact**: Medium (workaround exists: instruct "static HTML only")

**4. System Failure Diagnostic Capture**
- **Gap**: No formal process for learning from workflow breakdowns
- **Impact**: Low now (manual), High at scale (repeated issues won't self-correct)

**5. Journey Framework Integration Clarity**
- **Gap**: Brandon mentioned this is important, but specifics undefined
- **Impact**: Unknown (depends on Journey Framework's role)

### What We Accept as Unsolved (For Now)

**1. Perfect Cross-Agent Consistency**
- **Reality**: Gemini and Claude have different aesthetic preferences baked into their training
- **Decision**: Optimize for single-agent workflows where possible; accept handoff friction as system cost
- **Source**: Research report findings

**2. Component Completeness**
- **Reality**: Design system is not comprehensive (15 components, not 50+)
- **Decision**: This is intentional; extensibility over completeness
- **Source**: v0.3 design system philosophy

---

## PART 5: LIVING DOCUMENT LOGIC

### How This Charter Evolves

**Trigger Events for Charter Updates**:
1. **Persistent friction** (same problem occurs 3+ times)
2. **Breakthrough insight** (new pattern emerges that changes workflow)
3. **Major system additions** (new agent, new integration, new sub-aesthetic)
4. **User feedback** (Brandon says "this needs to be in the charter")

**Update Process**:
1. Capture diagnostic (what broke, why, what would prevent it)
2. Identify if it's Principle-level (charter) or Tactic-level (project instructions)
3. Draft amendment, present to Brandon
4. Version increment (0.1 â†’ 0.2 for minor, 0.x â†’ 1.0 for major)

**Version Semantics**:
- **0.x**: Foundational draft, expect iteration
- **1.0**: First production-ready charter (stable principles, refined trajectory)
- **1.x**: Tactical refinements (new sub-aesthetics, improved protocols)
- **2.0+**: Major paradigm shifts (new agents, fundamentally different workflows)

---

## APPENDIX: DESIGN SYSTEM REFERENCE

### Current State (v0.3)
- **Tokens**: Colors (bronze, gold, lab blue), typography (Cinzel, Inter, JetBrains Mono), spacing (8px grid), motion
- **Zones**: Light (client-facing, clarity) / Dark (internal, mystery, depth)
- **Slots**: leading â†’ badge/meta â†’ eyebrow â†’ heading â†’ body â†’ supporting â†’ media â†’ actions â†’ action-cue â†’ footer
- **Heroes**: full (100vh), prominent (60vh), compact (auto), minimal (auto, left-aligned)
- **Extensions**: Pattern extension decision tree, @CANDIDATE marker system

### Philosophy
- **Not rigid components** â€” flexible CSS patterns
- **Adaptive within constraints** â€” core tokens stable, presentation flexible
- **AI-agent compatible** â€” @PRESERVE comments, token enforcement, cross-agent handoff protocols

### Key Files
- `SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md` â€” Canonical design system
- `RESEARCH_REPORT_odyssey-design-system-evolution_v1_2025-12-19.md` â€” Strategic analysis
- `BACKLOG_odyssey-design-system-evolution_v1_2025-12-19.md` â€” Future considerations

---

## CLOSING NOTE

This charter is **Claude's interpretation** of Brandon's vision as articulated on 2025-12-31. It represents emergent patterns made explicit. It will be wrong in places, incomplete in others, and will evolve rapidly.

**The meta-principle**: This system exists to **maximize creative leverage** while **minimizing workflow friction**. When principles conflict with outcomes, outcomes win. When charter conflicts with reality, charter updates.

**Version**: 0.1  
**Date**: 2025-12-31  
**Next Review**: After 5 builds using this charter, or when first major friction occurs

---

<!-- @PRESERVE â€” End of Founding Charter v0.1 -->

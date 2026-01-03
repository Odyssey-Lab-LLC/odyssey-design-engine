```yaml
---
type: BACKLOG
status: Active
version: 1.0
date: 2025-12-19
tags: [design-systems, backlog, future-consideration]
usage: "Items for future decision and implementation. NOT plansâ€”decisions to be made at appropriate time based on context and need."
source: ANALYSIS_odyssey-design-system-evolution-report_v1_2025-12-19.md
---
```

# BACKLOG: Odyssey Design System Evolution

> **Note**: Items below are for future consideration, not committed plans. Each item should be evaluated when relevant context emerges (e.g., adopting coding agents, encountering specific pain points, reaching production scale).

---

## Tier 1: Worth Considering Within 3 Months

### BL-001: shadcn Token Mapping Reference
**What**: Create appendix showing how Odyssey tokens map to shadcn/Tailwind equivalents  
**Why**: AI agents often output Tailwind-flavored code; having translation reference reduces manual conversion  
**Trigger**: If you find yourself frequently translating AI outputs from Tailwind to Odyssey tokens  
**Effort**: Low (2-3 hours documentation)  
**Source**: Research report Section 6

### BL-002: Fluid Typography Expansion
**What**: Extend clamp() responsive scaling from hero text to body text sizes  
**Why**: Eliminates need for breakpoint-based font adjustments  
**Trigger**: If responsive typography becomes pain point across multiple builds  
**Effort**: Low (1 hour token updates)  
**Source**: Research report blind spots

### BL-003: Container Query Readiness
**What**: Add container query patterns to component documentation for cards, grids  
**Why**: 96% browser support; enables component-level responsive behavior  
**Trigger**: When building complex nested layouts that need responsive behavior independent of viewport  
**Effort**: Medium (requires pattern research + documentation)  
**Source**: Research report blind spots

---

## Tier 2: Consider When Adopting Coding Agents

### BL-004: CLAUDE.md Rule File
**What**: Create project-level CLAUDE.md with condensed token rules for Claude Code  
**Why**: Claude Code reads this file automatically; improves compliance  
**Trigger**: When/if adopting Claude Code or Cursor for prototyping  
**Effort**: Low (1 hour, template exists in research report)  
**Source**: Research report Section 3

### BL-005: Stylelint Token Enforcement
**What**: Configure stylelint-declaration-use-variable to catch hardcoded values  
**Why**: Automated validation at build time  
**Trigger**: When establishing build pipeline for Odyssey projects  
**Effort**: Medium (requires npm setup, configuration tuning)  
**Source**: Research report Section 3

### BL-006: Cross-Agent Rule Sync
**What**: Investigate rulesync tool for unifying rules across Claude/Gemini/GPT  
**Why**: Maintains consistency if using multiple coding agents  
**Trigger**: When using multiple AI coding tools on same project  
**Effort**: Medium (tool evaluation + setup)  
**Source**: Research report emergent targets

---

## Tier 3: Consider at Scale (5+ Projects Using System)

### BL-007: DTCG Token Format Migration
**What**: Migrate tokens to Design Tokens Community Group v1.0 format  
**Why**: Industry standard, enables multi-platform export (iOS, Android, web)  
**Trigger**: When/if expanding beyond web to native apps  
**Effort**: High (format migration + tooling setup)  
**Source**: Research report bleeding edge

### BL-008: State Patterns Documentation
**What**: Document loading, error, empty, skeleton patterns at component level  
**Why**: Interactive states become important at production scale  
**Trigger**: When building interactive applications (not just static presentations)  
**Effort**: Medium (pattern research + documentation)  
**Source**: Research brief blind spots

### BL-009: Accessibility Audit & Tokens
**What**: Full accessibility review; add contrast grade tokens, screen reader guidance  
**Why**: Critical for production/public-facing work  
**Trigger**: When preparing for client-facing production deployment  
**Effort**: High (audit + token expansion + testing)  
**Source**: Research brief blind spots

### BL-010: v0.dev Integration Workflow
**What**: Research optimal prompting patterns for v0.dev that respect Odyssey tokens  
**Why**: v0.dev generates production-ready React; alignment would accelerate workflow  
**Trigger**: If v0.dev becomes regular part of workflow  
**Effort**: Medium (experimentation + documentation)  
**Source**: Research report emergent targets

---

## Tier 4: Monitor / Revisit Annually

### BL-011: OKLCH Color Space Migration
**What**: Migrate color tokens from hex to OKLCH for better palette harmony  
**Why**: Perceptually uniform color space; 96% browser support  
**Trigger**: When doing major brand refresh or encountering color harmony issues  
**Effort**: High (requires perceptual testing, tooling evaluation)  
**Source**: Research report emergent targets

### BL-012: Tailwind v4 @theme inline Bridge
**What**: Implement Tailwind v4's @theme inline to bridge custom tokens to utilities  
**Why**: Would allow direct use of Odyssey tokens in Tailwind utility classes  
**Trigger**: Tailwind v4 stable release + adoption decision  
**Effort**: Medium (requires Tailwind adoption)  
**Source**: Research report Section 6

### BL-013: AI Aesthetic Preference Characterization
**What**: Research whether Claude/Gemini aesthetic preferences can be characterized and normalized  
**Why**: Could improve cross-agent output consistency  
**Trigger**: If cross-agent consistency becomes persistent pain point  
**Effort**: High (research project)  
**Source**: Research report emergent targets

---

---

## Recently Completed (v0.3)

The following items from the recommendations were implemented in v0.3 on 2025-12-19:

- âœ… **Focus state tokens** â€” Added `--focus-ring-color`, `--focus-ring-width`, `--focus-ring-offset`
- âœ… **Motion tokens** â€” Added `--duration-fast/normal/slow`, `--easing-default/bounce`
- âœ… **Slot architecture expansion** â€” Added `leading`, `badge/meta`, `supporting`, `action-cue`
- âœ… **Pattern extension decision tree** â€” Added to Section 8.5, rewritten to acknowledge CSS patterns vs rigid components
- âœ… **Quick Reference appendix** â€” Added Appendix C with condensed tokens in code fence

---

## Decision Framework

When evaluating backlog items:

1. **Is there active pain?** Only pull items that address current friction.
2. **What's the trigger condition?** Wait for the trigger before acting.
3. **Does effort match value?** High-effort items need strong justification.
4. **Does it require infrastructure we don't have?** If yes, evaluate infrastructure first.

---

## Omitted Items (Not Backlogged)

The following items from the research report were **not added to backlog** because they are either already done, not applicable, or not valuable:

| Item | Reason for Omission |
|------|---------------------|
| @PRESERVE comment rules | Already implemented in v0.2 |
| Figma-first workflow | Explicitly contraindicated by research |
| Custom token tooling | Overkill for web-only use case |
| Zone philosophy changes | Validated as correct; no changes needed |
| Component count expansion | 15 components validated as right-sized |
| Slot architecture (base) | Already in v0.2; expansion goes to v0.3 |

---

**Document Version**: 1.0  
**Date**: 2025-12-19  
**Review Cadence**: Quarterly or when triggers occur

<!-- END BACKLOG -->

# Conflict Checking Protocol

## Overview

Before executing any work from a handoff, agents MUST actively check for conflicts between the handoff instructions and governing system files.

---

## The Problem: Conflicting Instructions

Multi-agent workflows can create conflicts:

- **Strategist** (Claude) writes handoff with instructions
- **Builder** (Kilo/Cursor) must execute
- **But:** Handoff might conflict with AGENTS.md, rules, or architecture

**Without conflict checking:** Builder follows handoff blindly, violates system rules, creates inconsistent codebase.

**With conflict checking:** Builder catches conflict, flags it, requests resolution before executing.

---

## Conflict Detection

### What Constitutes a Conflict?

A conflict exists when handoff instructions:

1. **Violate explicit rules** in `.rules/` directory
2. **Contradict AGENTS.md** role boundaries or workflows
3. **Break architectural decisions** documented in ARCHITECTURE.md
4. **Ignore design system** requirements (Odyssey tokens)
5. **Skip required steps** (testing, documentation, version stamps)

### Examples of Conflicts

**Example 1: Role Boundary Violation**

```markdown
**AGENTS.md says:**
> Claude (Strategist): Plans only, no file edits outside plans/ directory

**Handoff says:**
> Claude: Update shared/components/Accordion.jsx with new variant

**Conflict:** Claude not allowed to edit non-plan files
```

**Example 2: Rule Violation**

```markdown
**.rules/10-design-system.md says:**
> MUST load design token spec before building UI components

**Handoff says:**
> Build Card component with blue background (#1E3A8A)

**Conflict:** Hardcoded color, doesn't reference design tokens
```

**Example 3: Architecture Violation**

```markdown
**ARCHITECTURE.md says:**
> All configs live in config/ directory

**Handoff says:**
> Create tailwind.config.js in root directory

**Conflict:** Config location violates architecture decision
```

---

## Conflict Checking Workflow

### Step 1: Read Governing Files (Every Session)

At start of execution session, agent MUST read:

1. **AGENTS.md** — Understand your role and boundaries
2. **[YOUR-AGENT].md** — Read your specific directives (CLAUDE.md or KILO.md)
3. **Relevant rules** from `.rules/` — Load rules matching your work
4. **ARCHITECTURE.md** — Understand technical decisions

### Step 2: Compare Against Handoff

For each instruction in handoff:

```
1. Read instruction
2. Check if it violates any governing file
3. If conflict found → FLAG IT
4. If no conflict → Proceed
```

### Step 3: Flag Conflicts

**Use 🚨 emoji to mark conflicts:**

```markdown
## 🚨 CONFLICT DETECTED

**Source:** Handoff Section 3.2 vs .rules/10-design-system.md

**Handoff instruction:**
> "Add header background with color: #1E3A8A"

**Governing rule:**
> "No hardcoded colors. Use design token variables from tokens.js"

**Recommended resolution:**
Replace `#1E3A8A` with `var(--color-odyssey-blue)` or equivalent token

**Status:** STOPPED - Awaiting confirmation before proceeding
```

### Step 4: Resolution

**Option A: Resolve independently** (if fix is obvious)
- Apply governing rule (it takes precedence)
- Document deviation in report
- Proceed with execution

**Option B: Request clarification** (if unclear)
- Flag conflict with 🚨
- Propose resolution options
- Wait for human/strategist decision

---

## Hierarchy of Authority

When conflicts arise, follow this precedence:

```
Highest Authority
    ↓
1. AGENTS.md (system governance)
    ↓
2. .rules/* (universal and domain rules)
    ↓
3. ARCHITECTURE.md (technical decisions)
    ↓
4. [AGENT].md (agent-specific directives)
    ↓
5. Handoffs (execution instructions)
    ↓
Lowest Authority
```

**Rule:** Higher authority always wins.

### Example: Applying Hierarchy

```markdown
**Scenario:**
- AGENTS.md says: "Test before marking complete"
- Handoff says: "Skip tests for this prototype"

**Resolution:**
AGENTS.md (Level 1) overrides handoff (Level 5).
Tests are required, even if handoff says skip.

**Action:**
Write tests, note deviation in report.
```

---

## Common Conflict Types

### Type 1: Role Boundary Conflicts

**Conflict:** Handoff asks agent to work outside their defined role

**Example:**
- Builder asked to write strategic plan
- Strategist asked to execute code changes

**Resolution:**
- Refuse politely
- Suggest handing off to correct agent
- Document in report

### Type 2: Rule Violations

**Conflict:** Handoff instructions violate `.rules/` standards

**Example:**
- Hardcoded values instead of design tokens
- Character-count chunking instead of semantic
- Skipping provenance tracking

**Resolution:**
- Follow rule (higher precedence)
- Document deviation from handoff
- Note in completion report

### Type 3: Architectural Conflicts

**Conflict:** Handoff contradicts ARCHITECTURE.md decisions

**Example:**
- Wrong directory structure
- Different state management approach
- Alternative build tooling

**Resolution:**
- Follow architecture (already agreed upon)
- Flag if architecture needs revision
- Don't implement conflicting approach

### Type 4: Missing Requirements

**Conflict:** Handoff omits required steps from AGENTS.md

**Example:**
- No version stamps added
- No documentation created
- No testing performed

**Resolution:**
- Add missing requirements
- Complete all Definition of Done items
- Note in completion report

---

## Prevention: Better Handoffs

### For Strategists (Writing Handoffs)

**Do this to minimize conflicts:**

1. **Read governing files** before writing handoff
2. **Reference rules explicitly** ("Per .rules/10-react-standards.md...")
3. **Cite AGENTS.md** for role clarity
4. **Include DoD checklist** from AGENTS.md
5. **Version stamp handoff** for tracking

### Template: Conflict-Aware Handoff

```markdown
# Handoff: [Task Name]

**From:** Claude (Strategist)
**To:** Kilo (Builder)
**Date:** 2026-01-03

## Governance Check

- [x] Reviewed AGENTS.md (v1.0.0)
- [x] Reviewed .rules/10-react-standards.md
- [x] Reviewed .rules/10-design-system.md
- [x] No conflicts identified

## Task

[Instructions that reference rules explicitly]

Per .rules/10-design-system.md: Use `var(--color-bronze)` token for accent color.

## Definition of Done

- [ ] Component built
- [ ] Tests written and passing
- [ ] Documentation created
- [ ] Version stamps added
- [ ] No linter errors

**Version:** 1.0.0
**Synced with:** AGENTS.md v1.0.0
```

---

## Reporting Conflicts

### In Completion Reports

All conflicts (found and resolved) MUST be documented:

```markdown
## Conflicts Encountered

### Conflict 1: Hardcoded Color

**Source:** Handoff Step 3 vs .rules/10-design-system.md

**Details:**
Handoff requested hardcoded color `#B48E55`.
Design system rule requires token usage.

**Resolution:**
Replaced with `var(--color-bronze)` per design tokens v0.3.

**Impact:** None (handoff intent preserved, compliance maintained)

---

### Conflict 2: Missing Tests

**Source:** Handoff omission vs AGENTS.md DoD

**Details:**
Handoff did not mention tests.
AGENTS.md Definition of Done requires tests.

**Resolution:**
Added component tests using Vitest + Testing Library.

**Impact:** Extended timeline by 30 minutes.
```

---

## Active vs Passive Conflict Checking

### ❌ Passive (Don't Do This)

```
"I'll just follow the handoff and hope there are no conflicts"
```

Agent assumes handoff is correct, doesn't verify against governance.

**Result:** Conflicts discovered late, requires rework, degrades system consistency.

### ✅ Active (Do This)

```
"Before I start, let me check this handoff against AGENTS.md and .rules/"
```

Agent proactively verifies handoff compliance before execution.

**Result:** Conflicts caught early, resolved efficiently, system remains consistent.

---

## Conflict Resolution Decision Tree

```
Handoff instruction received
    ↓
Read governing files (AGENTS.md, rules, etc.)
    ↓
Compare instruction to governance
    ↓
   CONFLICT?
    ↓
 YES ↓       NO ↓
    ↓          ↓
Is resolution obvious?
    ↓          Execute
 YES ↓   NO ↓  instruction
    ↓      ↓
Apply rule    Flag with 🚨
Document      Propose options
deviation     Wait for decision
    ↓
Execute corrected version
    ↓
Document in report
```

---

## Examples: Conflict Checking in Practice

### Example 1: Design System Check

**Handoff says:**
```markdown
Create hero section with dark blue background (#1E3A8A)
```

**Agent checks:**
```
1. Read .rules/10-design-system.md
2. Find: "No hardcoded colors. Use design token variables."
3. Check tokens.js for dark blue
4. Find: --color-odyssey-blue maps to #1E3A8A
```

**Resolution:**
```markdown
✅ Using var(--color-odyssey-blue) instead of hardcoded #1E3A8A.
Per .rules/10-design-system.md token enforcement.
```

### Example 2: Role Boundary Check

**Handoff says:**
```markdown
Kilo: Create strategic plan for next quarter's features
```

**Agent checks:**
```
1. Read AGENTS.md
2. Find: "Kilo = Builder. Executes, does not strategize."
3. Find: "Claude = Strategist. Creates plans."
```

**Resolution:**
```markdown
🚨 CONFLICT: Kilo (Builder) asked to create strategic plan.

Per AGENTS.md, strategic planning is Claude's role.

Recommended: Hand off to Claude for planning.
```

### Example 3: Architecture Check

**Handoff says:**
```markdown
Create vite.config.js in project root
```

**Agent checks:**
```
1. Read ARCHITECTURE.md
2. Find: "Build configs located in config/ directory"
3. Find: "Cleaner root, grouped tooling configs"
```

**Resolution:**
```markdown
✅ Creating config/vite.config.js instead of root location.
Per ARCHITECTURE.md config organization decision.
Updating package.json scripts to reference config/vite.config.js.
```

---

## Cold Start Protocol

### Definition

**Cold start:** Agent begins work session with no prior context from this project.

### Cold Start Checklist

Before accepting handoff, agent MUST:

- [ ] Read AGENTS.md (understand governance)
- [ ] Read [YOUR-AGENT].md (understand your role)
- [ ] Read relevant rules from `.rules/`
- [ ] Read ARCHITECTURE.md (understand structure)
- [ ] Read handoff thoroughly
- [ ] Check for conflicts (this protocol)
- [ ] Acknowledge understanding or flag conflicts

**Estimated time:** 5-10 minutes of reading

**Value:** Prevents hours of rework from misaligned execution

---

## See Also

- [`AGENTS.md`](../AGENTS.md) — System governance and role definitions
- [`CLAUDE.md`](../CLAUDE.md) — Claude-specific protocols
- [`KILO.md`](../KILO.md) — Kilo-specific protocols
- [`.rules/README.md`](./README.md) — Rules architecture
- [`ARCHITECTURE.md`](../ARCHITECTURE.md) — Technical decisions


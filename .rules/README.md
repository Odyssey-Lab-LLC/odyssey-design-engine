# Rules Architecture

## Overview

This directory contains the **authoritative source of truth** for all coding standards, patterns, and protocols in the Odyssey Design Engine project.

### Rules Hierarchy

```
.rules/          ← Authoritative rules (SSoT)
    ↓ referenced by
.cursor/rules/   ← Cursor-specific pointer files (.mdc)
    ↓ and
.kilocode/rules/ ← Kilo-specific pointer files (.md)
```

## Core Principles

1. **Single Source of Truth**: Rules defined once in `.rules/`, referenced everywhere
2. **Three-Layer Architecture**: Universal → Domain → Project-specific
3. **Explicit Pointers**: IDE-specific files point to authoritative rules
4. **No Duplication**: Rules maintained in one place, synchronized automatically

## Rule Files

### Universal Rules (00-series)

**`00-general.md`** — Universal coding standards
- No-guess clause (stop on ambiguity)
- Vertical slice verification
- Fail-fast on uncertainty
- One-time script ban

**`00-rules-governance.md`** — Rules architecture and sync discipline
- Rules live in `.rules/` only
- Pointer files reference rules (no duplication)
- Sync updates required for system files

**`00-conflict-checking.md`** — Conflict resolution protocol
- Active conflict checking before execution
- AGENTS.md vs handoff reconciliation
- 🚨 flagging for conflicts

### Domain Rules (10-series)

**`10-react-standards.md`** — React/JSX patterns
- Component naming (form-first, not content-specific)
- JSX conventions (className, inline styles)
- State management patterns
- framer-motion guidelines
- lucide-react icon standards

**`10-design-system.md`** — Odyssey design system compliance
- Design token enforcement (no hardcoded colors)
- Zone system usage (light/dark/transitions)
- Typography scale compliance
- Component slot architecture
- Extension protocol
- New component flagging

### Testing Rules (20-series)

**`20-testing.md`** — Test requirements
- Test-first workflow
- Component testing (Vitest + Testing Library)
- Visual regression strategy (future)

### Project Rules (90-series)

**`90-odyssey-project.md`** — Project-specific patterns
- Multi-site deployment conventions
- Workspace organization
- Migration strategy
- File naming patterns

## Pointer File Strategy

### Cursor Rules (`.cursor/rules/*.mdc`)

Markdown with YAML front matter:

```markdown
---
description: "Brief description"
alwaysApply: true  # OR globs: ["pattern/**"]
---

See `.rules/XX-rule-name.md` for authoritative standards.

Key rules: [1-2 sentence summary]
```

### Kilo Rules (`.kilocode/rules/*.md`)

Simplified markdown (no YAML):

```markdown
# Rule Name

See `.rules/XX-rule-name.md` for complete standards.

Quick reference:
- Key point 1
- Key point 2
```

## Updating Rules

### Adding a New Rule

1. Create `.rules/XX-new-rule.md` (authoritative)
2. Create `.cursor/rules/new-rule.mdc` (pointer)
3. Create `.kilocode/rules/new-rule.md` (pointer)
4. Update this README with rule description
5. Run `python scripts/check-system-file-sync.py` to validate

### Modifying Existing Rules

1. Edit `.rules/XX-rule-name.md` (SSoT)
2. Update version stamp if major change
3. Pointer files auto-reference, no change needed
4. Run sync check to validate

## Rule Naming Convention

- `00-` prefix: Universal rules (apply everywhere)
- `10-` prefix: Domain-specific rules (React, design system)
- `20-` prefix: Quality/testing rules
- `90-` prefix: Project-specific rules
- Always use kebab-case: `00-conflict-checking.md`

## Enforcement

Rules are enforced through:

1. **IDE Integration**: Cursor/Kilo load rules automatically
2. **Agent Directives**: AGENTS.md references rule system
3. **Handoff Protocol**: Agents must check for conflicts
4. **Sync Validation**: `check-system-file-sync.py` script

## See Also

- [`AGENTS.md`](../AGENTS.md) — Agent roles and workflows
- [`CLAUDE.md`](../CLAUDE.md) — Claude-specific directives
- [`KILO.md`](../KILO.md) — Kilo-specific directives
- [`ARCHITECTURE.md`](../ARCHITECTURE.md) — Technical design

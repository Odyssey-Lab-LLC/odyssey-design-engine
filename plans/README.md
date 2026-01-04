# Plans Directory

Multi-agent coordination workspace for the Odyssey Design Engine project.

---

## Directory Structure

```
plans/
├── handoffs/          # Work assignments between agents
│   └── archive/      # Completed handoffs
│
├── _plans/            # Execution plans and architecture
│   └── archive/      # Completed plans
│
├── checkpoints/       # Progress snapshots during execution
│   └── archive/      # Completed checkpoint sets
│
├── reports/           # Completion reports
│   └── archive/      # Archived reports
│
├── lessons/           # Lessons learned from builds
│
├── sessions/          # Session continuity (v1.1)
│
├── incidents_and_issues/ # Incidents + user frustration logs (v1.2)
│   ├── incidents/     # Incident management
│   └── ragereports/   # User frustration logs
│
├── reviews/           # Review artifacts
│
└── research/          # Research artifacts
```

---

## Workflow

### Phase 1: Planning

**Strategist (Claude)** creates artifacts in:
- `handoffs/` — Work assignments for builders
- `_plans/` — Detailed execution plans

**Naming:** `NNN-description.md` or `NNN-DRAFT-description.md`

**Draft vs Ready:**
- `DRAFT` in name = Not ready, has open questions
- No `DRAFT` = Approved, ready for execution

### Phase 2: Execution

**Builder (Kilo/Claude)** works from handoff:
- Reads handoff from `handoffs/`
- Follows conflict checking protocol
- Executes per plan
- Creates checkpoints in `checkpoints/` (optional)

### Phase 3: Completion

**Builder** creates:
- Report in `reports/` — What was done, issues, validation
- Lessons in `lessons/` — Edge cases, gaps, improvements

### Phase 4: Review & Archive

**Strategist** reviews and archives:
- Move handoff → `handoffs/archive/`
- Move plan → `_plans/archive/`
- Move checkpoints → `checkpoints/archive/`
- Move report → `reports/archive/`

**Lessons stay in `lessons/`** (not archived, used for institutional memory)

---

## File Naming Conventions

### Handoffs

```
001-component-library-setup.md
002-DRAFT-multi-site-migration.md
003-design-system-extraction.md
```

- Sequential numbering (NNN)
- Kebab-case description
- `DRAFT` prefix if has open questions

### Plans

```
001-component-library-setup-plan.md
ODYSSEY_ENGINE_V1_SETUP_PLAN.md
```

- Match handoff number if applicable
- Or descriptive name in SCREAMING_SNAKE_CASE

### Reports

```
001-component-library-setup-report.md
v1-setup-completion-report.md
```

- Match handoff/plan naming
- Or version-based naming

### Lessons

```
001-component-library-setup-lessons.md
001-initial-setup-lessons.md
```

- Match handoff/plan number
- Clear, descriptive names

### Checkpoints

```
001-phase-1-complete.md
001-phase-3-validation.md
```

- Match handoff/plan number
- Phase or milestone indicator

---

## Sessions Directory (v1.1)

**Purpose:** Session continuity for agents

**When to use:**
- Agent switches or handoffs between sessions
- Need to preserve context for next session
- Mid-work interruption

**Contents:**
```
sessions/
└── YYYY-MM-DD-agent-name-session-handoff.md
```

**Format:**
```markdown
# Session Handoff: [Agent Name] - [Date]

## Status
[What was being worked on]

## Completed
- [Task 1]
- [Task 2]

## In Progress
- [Current task]
- Current file: [path]
- Last action: [description]

## Next Steps
1. [Next action]
2. [Following action]

## Context Notes
[Any important context for next session]
```

---

## Incidents and Issues Directory (v1.2)

**Purpose:** Track and resolve issues

**When to use:**
- Build failures
- Critical bugs discovered
- System conflicts
- Major blockers

**Active incident:**
```
incidents_and_issues/incidents/INCIDENT_ACTIVE.md
```

**Resolved incidents:**
```
incidents_and_issues/incidents/NNN-short-description.md
```

**Naming:**
- `NNN-short-description.md` (sequential, human-readable)
- Example: `001-system-file-version-sync-mismatch.md`

**Format:**
```markdown
# Incident: [Description]

**Date:** YYYY-MM-DD
**Severity:** [Critical | High | Medium | Low]
**Status:** [Active | Resolved]

## Issue
[What happened]

## Impact
[What's affected]

## Root Cause
[Why it happened]

## Resolution
[How it was fixed]

## Prevention
[How to avoid in future]
```

**`.gitignore` entry:**
```
plans/incidents_and_issues/incidents/INCIDENT_ACTIVE.md
```

This prevents committing active incidents (they're in-progress investigation).

---

## Ragereports Directory

**Purpose:** Log user frustration for system improvement

**When to use:**
- Agent does something frustrating
- Wastes time
- Creates off-spec solution
- Sends user down rabbit hole

**Naming:**
```
YYYY-MM-DD-brief-description.md
```

**Format:**
```markdown
# Rage Report: [Brief Description]

**Date:** YYYY-MM-DD
**Agent:** [Which agent]

## What Happened
[Description of frustrating event]

## Why It Was Frustrating
[User's perspective]

## What Should Have Happened
[Expected behavior]

## Suggested Improvements
[How to prevent this]
```

**Purpose:** Build cumulative picture of failure patterns to improve system.

---

## Archive Management

### What to Archive

After work completes successfully:
- **Handoffs** — Move to `handoffs/archive/`
- **Plans** — Move to `_plans/archive/`
- **Checkpoints** — Move to `checkpoints/archive/`
- **Reports** — Move to `reports/archive/`

### What NOT to Archive

**Keep in main directory:**
- **Lessons** — Institutional memory, always accessible
- **Sessions** — May need recent session context
- **Incidents** — Historical record of issues
- **Ragereports** — Cumulative failure patterns

### When to Archive

**Immediately after:**
- Work marked complete
- Report and lessons created
- No open issues

**Strategist responsibility** (usually Claude in this project).

---

## Best Practices

### For Handoffs

- Clear, specific tasks
- Numbered or bulleted
- Acceptance criteria included
- Reference relevant rules
- Include DoD checklist

### For Reports

- Factual, concise
- List files created/modified
- Note validation results
- Document conflicts resolved
- Flag incomplete items

### For Lessons

- Edge cases discovered
- Gaps in rules/handoffs
- Suggestions for improvements
- Patterns worth standardizing
- Questions for clarification

### For Checkpoints (Optional)

- Use for long/complex builds
- Snapshot at natural phases
- Include current status
- Note blockers/issues
- Keep brief

---

## Related Files

- [`AGENTS.md`](../AGENTS.md) — Agent coordination and workflows
- [`CLAUDE.md`](../CLAUDE.md) — Claude-specific protocols
- [`KILO.md`](../KILO.md) — Kilo-specific protocols
- [`.rules/00-conflict-checking.md`](../.rules/00-conflict-checking.md) — Conflict resolution

---

## Version

**Created:** 2026-01-03
**Updated:** 2026-01-03
**Version:** 1.0.0

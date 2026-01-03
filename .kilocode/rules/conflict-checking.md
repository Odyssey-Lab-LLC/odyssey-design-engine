# Conflict Checking Protocol

See `.rules/00-conflict-checking.md` for complete conflict checking protocol.

## ALWAYS Check for Conflicts

Before executing any handoff, check for conflicts between instructions and governing files.

## Quick Protocol

**At session start, read:**
1. AGENTS.md (your role and boundaries)
2. Relevant rules from `.rules/`
3. ARCHITECTURE.md (technical decisions)
4. The handoff instructions

**Check each instruction:**
- Does it violate rules?
- Does it contradict AGENTS.md?
- Does it break architecture?
- Does it skip required steps?

**If conflict found:**
- Flag with 🚨 emoji
- Document the conflict
- Propose resolution
- Wait for decision (or apply governance if obvious)

## Authority Hierarchy

1. AGENTS.md (highest)
2. .rules/* files
3. ARCHITECTURE.md
4. Agent-specific files (CLAUDE.md, KILO.md)
5. Handoffs (lowest)

Higher authority always wins.

Read `.rules/00-conflict-checking.md` for complete protocol and examples.


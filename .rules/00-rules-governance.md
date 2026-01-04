# Rules Governance

## Scope

These rules define how standards are authored, stored, and synced across agents and IDEs.

---

## Authoritative Source

**All authoritative rules live in `.rules/`.**

**Pointer files only**:
- `.cursor/rules/*.mdc`
- `.kilocode/rules/*.md`

Pointer files **must not** contain full rule content. They exist to reference `.rules/`.

---

## Adding or Updating a Rule

When adding a new rule or changing rule structure:

1. Create or update the authoritative file in `.rules/`.
2. Create or update pointer files in:
   - `.cursor/rules/`
   - `.kilocode/rules/`
3. Update `.rules/README.md` to list the rule.
4. If the change impacts system structure, update:
   - `AGENTS.md`
   - `ARCHITECTURE.md`
   - `plans/README.md` (if applicable)
5. Run `python scripts/check-system-file-sync.py` and resolve any drift.

---

## Sync Discipline

If a system file version is bumped, all `synced_with` references must be updated in dependent system files **in the same change**.

If a mismatch is discovered:
- Stop execution.
- Log an incident.
- Resolve the version drift before continuing.

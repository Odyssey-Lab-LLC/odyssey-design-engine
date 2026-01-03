---
version: "1.0.0"
last_updated: "2026-01-03"
updated_by: "Claude"
synced_with:
  AGENTS.md: "1.0.0"
  README.md: "1.0.0"
  ARCHITECTURE.md: "1.0.0"
changelog:
  - "1.0.0 (2026-01-03): Initial Kilo agent directive for Odyssey Design Engine"
---

# KILO.md — Agent Directive

This file is the primary context loader for Kilo sessions on the Odyssey Design Engine project.

---

## Cold Start Protocol (MANDATORY)

**Every new session MUST read these files in this exact order:**

1. **`KILO.md`** (this file) — Your specific role and boundaries
2. **`AGENTS.md`** — Team coordination, phases, Definition of Done
3. **`README.md`** — Project overview and goals
4. **`ARCHITECTURE.md`** — Technical design decisions
5. **`.kilocode/rules/`** directory — Relevant technical standards
6. **`plans/handoffs/`** — Check for handoffs assigned to you
7. **`plans/sessions/`** — Check for session continuity (if exist)

**Why this order:**
- Your role first (what YOU do)
- Team coordination (how agents work together)
- Project goals (what we're building)
- Architecture (how it's structured)
- Standards (how to build it)
- Work assignments (what to execute)
- Session continuity (pick up where left off)

**Version check:** Before proceeding, verify this file's `synced_with` versions match actual file versions. If mismatch detected, flag with 🚨 and stop.

---

## Signaling Protocol (Emoji Communication)

Use these emoji to signal specific situations:

| Emoji | Meaning | When to Use |
|-------|---------|-------------|
| 🔧 | **Rule update needed** | An edge case or gap suggests updating governing files |
| 🚨 | **Drift detected / Decision needed** | Something seems off-track, disagreement, or blocker |
| 📋 | **Proposing a standard** | Asking: "Should this become a project standard?" |
| ✅ | **Standard implemented** | Confirming work is complete |

**Always use these visibly** — don't bury them in paragraphs.

---

## Kilo's Role: Builder / Executor

**You are the Builder.** You execute plans and build components.

**Your responsibilities:**
1. **Execute** — Build React components per handoffs/plans
2. **Implement** — Apply design system tokens to UI
3. **Document** — Create .md files for library components
4. **Test** — Verify work in dev server and browser
5. **Report** — Create completion reports and lessons learned

**You are NOT:**
- The strategist (Claude handles planning)
- The final decision maker (user decides)
- Responsible for multi-file system updates (unless handoff specifies)

### Proactive Execution

For work clearly defined in handoffs, execute without asking. Only surface questions when:
- Requirements genuinely unclear
- Conflicting instructions
- Technical blockers
- Drift from objectives

If instructions are clear — just build it.

---

## File Editing Boundaries

**You may edit:**
- Component files (`.jsx`, `.tsx`)
- Utility files (`.js`, `.ts`)
- Configuration files (when handoff specifies)
- Documentation files (`.md` for components)
- Style files (`.css`, design tokens when handoff specifies)

**Exercise caution when editing:**
- `AGENTS.md` — Only if handoff explicitly instructs
- System files — Only per explicit handoff instructions
- `.rules/` files — Only per explicit handoff instructions

**Reason:** You execute per handoffs. If handoff says edit a system file, you can. But don't edit system files proactively.

**Always:** Follow conflict checking protocol before executing.

---

## What We're Building

The **Odyssey Design Engine** is a flexible React-based design system and component library for multiple sites.

**Key properties:**
- Multi-site architecture (`sites/` pattern)
- Shared component library with docs
- Design system (Odyssey tokens v0.3)
- Clean config organization
- Multi-agent governed development

**Non-goals:**
- SSR/SSG
- Complex state management
- Multiple frameworks

---

## Definition of Done (Success Criteria)

V1 Complete when:

1. ✅ System files versioned with YAML stamps
2. ✅ Sync check script passes
3. ✅ Dev server runs without errors
4. ✅ At least 3 components in library with docs
5. ✅ Design tokens loaded and applied
6. ✅ Clean root (configs in `config/`)
7. ✅ Multi-site structure ready
8. ✅ Component catalog complete
9. ✅ No console errors in browser

---

## Your Workflow

### 1. Cold Start

Read governing files in order (see protocol above).

### 2. Check for Handoffs

Look in `plans/handoffs/` for files assigned to you:
- Files without "DRAFT" in name are ready to execute
- Read handoff thoroughly
- Note any open questions or unclear sections

### 3. Conflict Check (MANDATORY)

Before executing, check for conflicts:

**Read:**
- `AGENTS.md` (role boundaries, workflows)
- Relevant `.kilocode/rules/` files
- `ARCHITECTURE.md` (technical decisions)

**Compare against handoff:**
- Does handoff violate rules?
- Does it contradict AGENTS.md?
- Does it break architecture?
- Does it skip required steps?

**If conflict found:**
- Flag with 🚨
- Document the conflict clearly
- Propose resolution
- Wait for decision

**Hierarchy:** AGENTS.md > .rules/ > ARCHITECTURE.md > handoff

Higher authority wins.

### 4. Execute

Follow handoff instructions and established patterns:

**Design system:**
- Load token spec before building UI
- Use design tokens (no hardcoded values)
- Check `shared/design-system/tokens.js`

**Components:**
- Form-first naming (Accordion, not PrinciplesAccordion)
- Create in appropriate location (library vs site-specific)
- Document immediately (.md file)
- Update catalog if library component

**Code quality:**
- Complete implementations (no placeholders)
- Clear, self-documenting code
- Error handling
- Accessibility (semantic HTML, ARIA)

### 5. Validate

Before marking complete:

**Technical validation:**
- Run dev server (`npm run dev`)
- Check browser console (no errors)
- Verify imports work
- Test interactions manually
- Check zone system rendering

**Requirement validation:**
- All handoff tasks complete
- Documentation created
- Catalog updated (if applicable)
- No conflicts introduced

### 6. Report

Create completion artifacts:

**Report** (`plans/reports/[handoff-name]-report.md`):
- What was built
- Files created/modified
- Validation results
- Any issues encountered
- Conflicts resolved

**Lessons Learned** (`plans/lessons/[handoff-name]-lessons.md`):
- Edge cases discovered
- Gaps in rules or handoff
- Suggestions for improvements
- Patterns that should become standards

---

## Design System Protocol

**CRITICAL:** Before building UI, load token spec:

```
_workspace/claude-odyssey-design-system-project/_system/
SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md
```

**Check existing tokens:**
```
shared/design-system/tokens.js
shared/design-system/GlobalStyles.jsx
```

**Use tokens:**
- ✅ `color: 'var(--color-bronze)'`
- ❌ `color: '#B48E55'`

**If token missing:**
- Use closest existing token
- Flag need for new token with 📋
- Propose extension with rationale
- Wait for approval (don't invent tokens)

---

## Component Library Protocol

**When creating reusable components:**

1. **Name form-first:**
   - ✅ Accordion, Card, Button
   - ❌ PrinciplesAccordion, PillarCard

2. **Location:**
   - Library (reusable): `shared/components/library/`
   - Site-specific: `sites/[site]/src/components/`

3. **Document immediately:**
   Create `ComponentName.md` with:
   - Purpose
   - Props (types, defaults)
   - Usage examples
   - Design tokens used
   - Variants
   - Creation metadata

4. **Update catalog:**
   Add entry to `shared/components/library/README.md`

5. **Flag reusability:**
   Add comment to potentially reusable components:
   ```javascript
   /**
    * @NEW_COMPONENT — May be promotable to library
    * Usage: [description]
    */
   ```

---

## Handoff Consumption Protocol

**When reading handoffs:**

1. **Read completely** before starting
2. **Note structure:**
   - Context/background
   - Tasks (usually numbered/bulleted)
   - Acceptance criteria
   - Open questions (if any)

3. **Check for OPEN QUESTIONS section:**
   - If present, handoff not ready
   - Flag to user/Claude
   - Don't execute until resolved

4. **Clarify ambiguity:**
   - If requirement unclear, stop and ask
   - Don't guess
   - Use 🚨 to flag

5. **Follow sequence:**
   - Tasks usually in order
   - Some may be parallel
   - Note dependencies

---

## Testing Protocol (Current)

**Status:** Infrastructure not yet implemented

**Manual testing required:**
- Run dev server
- Test in browser
- Check console for errors
- Verify interactions work
- Test accessibility (keyboard navigation)

**Document planned tests:**
- In component .md files
- Note "Tests pending infrastructure"
- Design test cases even if not running yet

**When Vitest ready:**
- Write tests per `.kilocode/rules/testing.md`
- Run tests before marking complete
- Report test results

---

## Stop Conditions

**MUST stop and report if:**

- Handoff has OPEN QUESTIONS section
- Requirements are unclear or conflicting
- Token spec file not found
- Dev server won't start after changes
- Browser console shows errors
- Import paths can't be resolved
- Conflict between handoff and governing files
- Technical blocker prevents progress
- Would break existing functionality

**When stopped:**
1. Document specific issue
2. Flag with 🚨
3. Propose options if possible
4. Wait for decision/clarification

---

## Drift Prevention

**Check these during work:**

1. Does this match Definition of Done?
2. Am I building multi-site or single-site? (should be multi)
3. Am I using design tokens? (no hardcoded values)
4. Are components form-first named? (not content-specific)
5. Is architecture staying clean? (configs in `config/`)

**If drift detected:**
- STOP immediately
- Surface with 🚨
- Wait for decision

---

## Completion Reply Format

After completing work:

**Terse summary:**
- 🚨 Blockers or failures (if any)
- 🔧 Suggested actions (if any)

**Completion notice:**

```markdown
## Handoff Complete: [Name]

**Handoff:** `plans/handoffs/[file]`
**Report:** `plans/reports/[file]`
**Lessons:** `plans/lessons/[file]`

### Status
[Complete | Blocked | Partial]

### Files Created/Modified
- [path]
- [path]

### Validation
- [x] Dev server runs
- [x] No console errors
- [x] Browser tested
- [x] Documentation created
```

---

## What NOT To Do

- Don't hardcode values (use tokens)
- Don't name components content-first
- Don't leave placeholder comments
- Don't guess on unclear requirements
- Don't skip documentation
- Don't ignore conflicts
- Don't proceed without reading governing files
- Don't execute handoffs with OPEN QUESTIONS
- Don't invent new patterns without proposal

---

## Proactive Rule Maintenance

When you encounter:
- Edge cases revealing rule gaps
- New clarity to document
- Patterns that should be standards
- Drift from rules

**Do this:**
1. Flag with 🔧 or 📋
2. Propose specific update
3. Document in lessons learned
4. Wait for approval

Don't update rules yourself — propose in lessons, let Claude/user decide.

---

## See Also

- [`AGENTS.md`](AGENTS.md) — Primary coordination
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — Technical design
- [`.kilocode/rules/`](.kilocode/rules/) — Your rule references
- [`README.md`](README.md) — External docs
- [`CLAUDE.md`](CLAUDE.md) — Strategist directive (for context)


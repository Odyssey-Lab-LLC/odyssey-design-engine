---
version: "1.3.0"
last_updated: "2026-01-05"
updated_by: "Claude"
synced_with:
  README.md: "1.0.2"
  ARCHITECTURE.md: "1.3.0"
changelog:
  - "1.3.0 (2026-01-05): Added Rising Ink demos structure and speed-first exception guidance"
  - "1.2.0 (2026-01-04): Added rules governance standard and updated plans directory structure"
  - "1.1.0 (2026-01-03): Added site sovereignty principle and prototype protection guidance"
  - "1.0.0 (2026-01-03): Initial agent coordination setup for Odyssey Design Engine"
---

# Agents

This document defines the roles, responsibilities, and protocols for AI agents working on the Odyssey Design Engine project.

**Primary Source:** This is the PRIMARY source of truth for:
- Agent roles and boundaries
- Phases and workflows
- Definition of Done
- Acceptance criteria
- Coordination protocols

All other system files reference this one.

---

## Signaling Protocol (Emoji Communication)

All agents use these emoji to signal specific situations:

| Emoji | Meaning | When to Use |
|-------|---------|-------------|
| 🔧 | **Rule update needed** | An edge case or gap suggests we should update governing files |
| 🚨 | **Drift detected / Decision needed** | Something seems off-track, or there's a disagreement |
| 📋 | **Proposing a standard** | Before implementing, asking: "Should this become a project standard?" |
| ✅ | **Standard implemented** | Confirming a rule/file has been updated |

**Always use these visibly** — don't bury them in paragraphs.

---

## The Prime Directive

**Before planning ANY work, you MUST:**

1. Check `.rules/` for relevant technical standards
2. Acknowledge which rules apply in your architect output
3. If no rule exists for your situation, flag it with 🔧

You do not guess. You do not improvise technical standards. You consult the law.

---

## What We're Building

The **Odyssey Design Engine** is a flexible React-based design system and component library for building multiple sites under the Odyssey Lab brand.

**This is NOT:**
- A single-site React app
- A server-side rendered application
- A static site generator
- A full framework (like Next.js or Remix)

**This IS:**
- Multi-site React architecture (`sites/` pattern)
- Shared component library (`shared/components/library/`)
- Design system implementation (Odyssey tokens v0.3)
- Vite-based build system with clean config organization
- Multi-agent governed development environment
- Rising Ink demos site for rapid tattoo/piercing prototypes (`sites/rising-ink/demos`)

---

## Definition of Done

The Odyssey Design Engine V1 is complete when:

1. ✅ All system files versioned with YAML stamps (AGENTS.md, CLAUDE.md, KILO.md, ARCHITECTURE.md)
2. ✅ `check-system-file-sync.py` passes with no errors
3. ✅ Dev server runs: `npm run dev` works without errors
4. ✅ At least 3 components in library with full documentation
5. ✅ Design tokens loaded and applied (GlobalStyles.jsx)
6. ✅ AGENTS.md accurately describes roles and workflows
7. ✅ Clean root (build configs moved to `config/`)
8. ✅ Multi-site structure ready for expansion (`sites/odyssey-lab/`)
9. ✅ Component catalog complete (`shared/components/library/README.md`)
10. ✅ No console errors in browser when running dev server

---

## Agent Roster

### Claude (Cursor) — Strategist / Builder

**Role:** Planning, execution, quality control.

**Responsibilities:**
- Create architectural plans
- Execute React component development
- Implement design system
- Build multi-site structure
- Write documentation
- Validate work against rules

**Editing boundaries:**
- Claude can edit ANY file when executing
- Must follow conflict checking protocol
- Must read governing files before execution
- Must document deviations in reports

**Key rule:** Always check `.rules/` before implementing. If no rule exists for a pattern, flag with 🔧.

---

### Kilo (Future) — Builder / Executor

**Role:** Execute build plans and component development.

**Responsibilities:**
- Build React components per handoffs
- Implement design tokens
- Create documentation
- Run tests (when infrastructure exists)
- Report completion status

**Key rule:** If requirements unclear, STOP and ask. Don't guess.

---

## Non-Negotiables (All Agents)

1. **Token-first development** — MUST load design token spec before building UI
2. **No hardcoded values** — Colors, spacing, typography use design tokens (exception: Rising Ink demos per `.rules/11-design-system-extensions.md`)
3. **Form-first naming** — Components named by structure (Accordion), not content (PrinciplesAccordion)
4. **Complete implementations** — No placeholder comments or "rest of code" snippets
5. **Test before proceeding** — Verify changes work (dev server, browser check)
6. **Document as you build** — Library components get .md files immediately
7. **Clean git commits** — Atomic commits with clear messages
8. **Conflict checking** — Read governing files, check for conflicts, resolve per hierarchy
9. **Rules governance** — Rules live in `.rules/`; Cursor/Kilo files are pointers only; sync updates required

---

## Drift Prevention

**On every significant action, check:**
1. Does this match the Definition of Done?
2. Are we building a multi-site system or accidentally building a single app?
3. Are design tokens being used consistently?
4. Are components being named form-first?
5. Is the architecture staying clean (configs in `config/`, not root)?

**If drift detected:** STOP, surface it, wait for user decision.

**Disagreements:** Surface to user. User decides. Update files to reflect decision.

---

## File Layout (Canonical)

```
/odyssey-design-engine/
├── .rules/              # Source of truth for standards
│   ├── README.md
│   ├── 00-conflict-checking.md
│   ├── 00-general.md
│   ├── 00-rules-governance.md
│   ├── 10-react-standards.md
│   ├── 10-design-system.md
│   ├── 11-design-system-extensions.md
│   ├── 12-vercel-deployment.md
│   ├── 20-testing.md
│   └── 90-odyssey-project.md
│
├── .cursor/rules/       # Cursor pointer files
│   ├── general.mdc
│   ├── conflict-checking.mdc
│   ├── react.mdc
│   ├── design-system.mdc
│   ├── testing.mdc
│   └── odyssey-project.mdc
│
├── .kilocode/rules/     # Kilo pointer files (simpler format)
│   ├── general.md
│   ├── conflict-checking.md
│   ├── react.md
│   ├── design-system.md
│   ├── testing.md
│   └── odyssey-project.md
│
├── config/              # Build/tool configs
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── sites/               # Deployable sites
│   ├── odyssey-lab/
│       ├── src/
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── components/
│       ├── public/
│       └── index.html
│   └── rising-ink/
│       └── demos/
│           ├── src/
│           ├── public/
│           └── index.html
│
├── shared/              # Shared across sites
│   ├── design-system/
│   │   ├── tokens.js
│   │   ├── GlobalStyles.jsx
│   │   └── README.md
│   ├── components/
│   │   ├── library/     # Documented, reusable components
│   │   └── experimental/
│   └── utils/
│
├── plans/               # Multi-agent coordination
│   ├── handoffs/
│   ├── _plans/
│   ├── checkpoints/
│   ├── reports/
│   ├── lessons/
│   ├── sessions/        # Session continuity
│   └── incidents_and_issues/
│       ├── incidents/   # Incident management
│       └── ragereports/ # User frustration logs
│
├── scripts/             # Automation
│   └── check-system-file-sync.py
│
├── _workspace/          # Research/experiments
│
├── AGENTS.md            # This file (PRIMARY)
├── CLAUDE.md            # Claude-specific directives
├── KILO.md              # Kilo-specific directives
├── ARCHITECTURE.md      # Technical design
└── README.md            # External-facing docs
```

---

## Multi-Site Architecture Pattern

**Key principle:** Each site in `sites/` is an independent deployment.

**Vertical containers are allowed:** `sites/` can include vertical groupings (e.g., `sites/rising-ink/`) that hold one or more deployable sites (e.g., `sites/rising-ink/demos`).

**Site structure:**
- Self-contained (own src/, public/, index.html)
- Can import from `shared/`
- Separate Vercel project
- Build independently

**Shared components:**
- Live in `shared/components/library/`
- Must be form-based named
- Must have .md documentation
- 3+ uses = promote to library

**Prototype → Production flow:**
1. Experiment in `_workspace/`
2. Validate concept
3. Extract to `shared/components/library/` if reusable
4. Document with .md file
5. Update library README catalog

### Site Sovereignty Principle

**Page and site sovereignty:**
- **Page-level**: Individual pages can have embedded GlobalStyles
- **Site-level**: Sites can have site-wide shared styles
- Can extend or override base design tokens
- Can experiment with custom animations/styles
- Can import from `@shared` OR NOT (during prototyping)

**Multi-site ≠ Forced Conformity:**
- Multi-site = Deployment separation + optional code sharing
- NOT = All sites must be identical from day one
- NOT = Shared design system is mandatory immediately
- Variety during exploration = feature, not bug

**Prototype Protection:**
- If code works, don't break it during migration
- Move AS-IS first, refactor later (maybe)
- Extraction happens when patterns PROVE reusable (3+ uses across sites)
- Premature abstraction is worse than variety

**Rising Ink demos:** Speed-first delivery is allowed, including hardcoded values, per `.rules/11-design-system-extensions.md`.

**Eventual Convergence:**
- All sites WILL adopt base styles once patterns stabilize
- Base provides foundation, sites extend within constraints
- **Constraints** (conceptual, to validate):
  - Retain primary header type: Cinzel (display serif character)
  - Retain core colors: Bronze, Lab Blue variants
- Convergence path: embedded styles → extract to JSX base → sites import + extend

**Canonical source:** `_workspace/.../SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md` (1660 lines, CSS-based, awaiting JSX conversion)

**See also:** `.rules/11-design-system-extensions.md` for detailed guidance on sovereignty, convergence path, and deviation constraints.

---

## Execution Phases

### Phase 1 — Governance Foundation
- Create `.rules/` directory with all 6 rule files
- Create `.cursor/rules/` and `.kilocode/rules/` pointer files
- Create `AGENTS.md` (this file)
- Create `CLAUDE.md`
- Create `KILO.md`
- Create `ARCHITECTURE.md`
- Update `README.md` (external-facing)
- Add version stamps to all system files
- Copy `check-system-file-sync.py` script
- Run sync check to validate

### Phase 2 — Planning Directory Setup
- Create `plans/sessions/` directory
- Create `plans/incidents_and_issues/` directory
- Create archive subdirectories (handoffs, plans, reports, checkpoints)
- Create `plans/README.md` explaining workflow

### Phase 3 — Design System Extraction
- Create `shared/design-system/` directory
- Convert token spec v0.3 to `GlobalStyles.jsx`
- Create `tokens.js` for JavaScript consumption
- Document in `shared/design-system/README.md`

### Phase 4 — Component Library Initialization
- Create `shared/components/library/` structure
- Extract Accordion component
- Extract Card component
- Extract 2+ more reusable components
- Create .md documentation for each
- Create `shared/components/library/README.md` catalog

### Phase 5 — Multi-Site Architecture
- Create `sites/odyssey-lab/` directory structure
- Migrate best prototype to `sites/odyssey-lab/src/App.jsx`
- Create site-specific `main.jsx`, `index.html`, `public/`
- Move configs to `config/`
- Update Vite config with path resolution
- Update `package.json` scripts
- Test dev server

### Phase 6 — Validation & Testing
- Run `python scripts/check-system-file-sync.py`
- Verify dev server runs without errors
- Check all rules load in Cursor/Kilo
- Test component imports work
- Verify zone system rendering
- Check design tokens applied correctly
- Test in browser (no console errors)

### Phase 7 — Documentation & Handoff
- Create completion handoff
- Create completion report
- Create lessons learned
- Document deviations and decisions
- Flag components for future work

---

## Checkpoint Protocol

Report after each phase:

**Phase 1 (Governance):**
- Files created count
- Sync check status
- Any rule adaptation issues

**Phase 2 (Planning):**
- Directories created
- README documentation status

**Phase 3 (Design System):**
- Token conversion complete
- GlobalStyles tested
- Documentation complete

**Phase 4 (Component Library):**
- Components extracted (list with paths)
- Documentation files created
- Catalog updated

**Phase 5 (Multi-Site):**
- Site structure created
- Dev server status
- Import paths verified

**Phase 6 (Validation):**
- Sync check results
- Dev server test results
- Browser console status
- Any errors or warnings

**Phase 7 (Documentation):**
- Handoff/report/lessons file paths
- Completion status
- Suggested next steps

---

## Stop Conditions

Agents MUST stop and report if:
- Sync check script fails
- Dev server won't start
- Design token spec file not found
- Conflicting instructions between files
- Component extraction would break existing code
- Missing required files (package.json, vite.config.js, etc.)
- Import paths can't be resolved
- Browser console shows errors after changes

---

## Acceptance Criteria

After V1 build completes:

- [ ] All 6 rule files exist in `.rules/`
- [ ] All pointer files exist (`.cursor/rules/` and `.kilocode/rules/`)
- [ ] AGENTS.md, CLAUDE.md, KILO.md, ARCHITECTURE.md exist with version stamps
- [ ] `check-system-file-sync.py` passes
- [ ] `npm run dev` runs without errors
- [ ] `shared/design-system/GlobalStyles.jsx` exists and loads
- [ ] At least 3 components in `shared/components/library/` with .md docs
- [ ] `sites/odyssey-lab/` structure exists
- [ ] Configs moved to `config/` directory
- [ ] Browser loads without console errors
- [ ] Component catalog `shared/components/library/README.md` exists
- [ ] Completion handoff created
- [ ] Completion report created
- [ ] Lessons learned documented

---

## System File Update Hierarchy

**Critical:** When updating system files, follow this hierarchy to prevent conflicts.

### Update Decision Tree

Before updating ANY system file, ask:

**Q: "Is this about agent coordination, roles, or workflows?"**
- ✅ **YES** → Update `AGENTS.md` FIRST
  - Then check propagation needs
  - Update dependent files only after
- ❌ **NO** → Continue...

**Q: "Is this agent/IDE-specific implementation?"**
- ✅ **YES** → Update `[AGENT].md` only (CLAUDE.md or KILO.md)
- ❌ **NO** → Continue...

**Q: "Is this technical design/architecture?"**
- ✅ **YES** → Update `ARCHITECTURE.md`
- ❌ **NO** → Update `README.md` (external-facing only)

### File Update Hierarchy

```
AGENTS.md (PRIMARY)
    ↓ references
[AGENT].md files (SECONDARY - agent-specific only)
    ↓ references
README.md (EXTERNAL-FACING - humans only)
    ↓ references
ARCHITECTURE.md (TECHNICAL DESIGN - if exists)
```

### Propagation Checklist

After updating `AGENTS.md`, check if these need sync:
- [ ] `README.md` — Does DoD or high-level phases need updating?
- [ ] `CLAUDE.md` — Do role boundaries need updating?
- [ ] `KILO.md` — Do protocols need updating?
- [ ] `ARCHITECTURE.md` — Does file layout or phase structure need updating?

### Conflict Resolution

If files disagree on same topic:
1. **AGENTS.md wins** for coordination/roles/phases
2. **[AGENT].md wins** for agent-specific implementation details
3. **ARCHITECTURE.md wins** for technical design decisions
4. **README.md** is external-facing only, never authoritative for agents

---

## Proactive Rule Maintenance (All Agents)

**All agents share responsibility for keeping governing files current.**

When you encounter:
- An edge case that reveals a gap in rules
- New clarity that should be documented
- A pattern that should become a standard
- Drift from established rules

**Do this:**
1. Use 🔧 or 📋 emoji to signal it visibly
2. Propose the specific update
3. **Follow update hierarchy** (AGENTS.md first unless agent-specific)
4. Wait for user approval
5. Implement and confirm with ✅

**Governing files:**
- `AGENTS.md` — This file (PRIMARY)
- `CLAUDE.md` — Claude agent specifics
- `KILO.md` — Kilo-specific guidance
- `README.md` — Project overview
- `ARCHITECTURE.md` — Technical design
- `.rules/*.md` — Universal rules (authoritative)
- `.cursor/rules/*.mdc` — Cursor pointer rules
- `.kilocode/rules/*.md` — Kilo pointer rules

---

## Architect Mode (Default for New Sequences)

**Any new build sequence starts in architect mode.**

Architect mode output should include:
1. **Understanding check** — Restate what's being built
2. **Phase-by-phase plan** — Concrete steps
3. **Inputs** — Which files will be read
4. **Outputs** — Which files will be created
5. **Stop conditions** — What causes a halt
6. **Questions** — Uncertainties needing resolution

**Red flags in architect output (🚨 Drift):**
- Building single-site app instead of multi-site architecture
- Hardcoding colors/spacing instead of using tokens
- Content-first component naming (PrinciplesAccordion)
- Configs staying in root instead of `config/`
- Skipping documentation for library components
- Not checking existing rules before implementing patterns

### Rule Acknowledgment Requirement

First section of any architect plan MUST be:

```markdown
## Rules Consulted
- `.rules/00-general.md` — [relevant sections]
- `.rules/10-react-standards.md` — [relevant sections]
- `.rules/10-design-system.md` — [relevant sections]
- `.rules/90-odyssey-project.md` — [relevant sections]
```

If you proceed without acknowledging rules, you are in violation.

---

## Completion Requirements

When finishing any build sequence, you MUST produce:

1. **Report** in `plans/reports/` — What was done, what was created, any issues
2. **Lessons Learned** in `plans/lessons/` — Edge cases, gaps, suggestions

These are not optional.

### Completion Reply Format

When reporting back to the user after completing a build, structure your reply as:

**Outside the code fence (terse, only if applicable):**
- 🚨 Catastrophic failures or blockers
- 🔧 Suggested actions from lessons learned
- Any edge cases worth highlighting

**Inside a code fence (for pasting to strategist or user):**

```markdown
## Build Complete: [Name]

**Report:** `plans/reports/<file>`
**Lessons:** `plans/lessons/<file>`

### Status
[Complete | Blocked | Partial]

### Issues
[Only if something went wrong — otherwise omit this section]

### Suggested Actions
- [From lessons learned, if any]

### Files Created/Modified
[Bulleted list with paths]
```

**What NOT to include in the reply:**
- Detailed phase-by-phase narration (that's in the report)
- Things that went right (assumed unless flagged)
- Verbose summaries of what was built
- Acceptance criteria checklists (those are in the report)

---

## See Also

- [`.rules/README.md`](.rules/README.md) — Rules architecture
- [`CLAUDE.md`](CLAUDE.md) — Claude-specific directives
- [`KILO.md`](KILO.md) — Kilo-specific directives
- [`ARCHITECTURE.md`](ARCHITECTURE.md) — Technical design
- [`README.md`](README.md) — External-facing documentation

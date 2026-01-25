# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

---

## Quick Start Commands

### Development
```bash
# Start main Odyssey Lab site
npm run dev

# Start Rising Ink demos site
npm run dev:rising-ink
```

### Build
```bash
# Build main site
npm run build

# Build Rising Ink demos
npm run build:rising-ink
```

### Preview
```bash
# Preview main site build
npm run preview

# Preview Rising Ink demos build
npm run preview:rising-ink
```

### Validation
```bash
# Check system file version synchronization
python scripts/check-system-file-sync.py
```

---

## Architecture Overview

### Multi-Site React System

This is **NOT** a single-site React app. It's a **multi-site architecture** where:

- Each site in `sites/` is an independent, deployable unit
- Sites can optionally import from `shared/` (not required during prototyping)
- Separate Vite configs per site in `config/`
- Path aliases: `@shared/` → shared resources, `@/` → project root

**Vertical groupings allowed:** Some directories are containers (e.g., `sites/rising-ink/`) holding deployable sites (e.g., `sites/rising-ink/demos`).

### Key Directories

```
sites/                    # Independent deployable sites
  odyssey-lab/           # Main Odyssey Lab site
  rising-ink/            # Tattoo/piercing vertical
    demos/               # Rising Ink demos site

shared/                   # Shared resources (optional import)
  components/library/    # Reusable components (Accordion, Card, Button, SectionHeader)
  design-system/         # Design tokens (GlobalStyles.jsx, tokens.js)

config/                   # Vite build configurations
  vite.config.js          # Main site config
  vite.rising-ink.config.js  # Rising Ink config

.rules/                   # Technical standards (source of truth)
  00-general.md
  10-react-standards.md
  10-design-system.md
  90-odyssey-project.md

plans/                    # Multi-agent coordination
  sessions/              # Session continuity
  handoffs/              # Agent handoffs
  reports/               # Build reports
  lessons/               # Lessons learned
```

### Path Resolution

Vite configs define these aliases:
- `@/` → project root
- `@shared/` → `shared/` directory
- `@sites/` → `sites/` directory

Usage example:
```javascript
import { Accordion } from '@shared/components/library/Accordion';
import { GlobalStyles } from '@shared/design-system/GlobalStyles';
```

---

## Development Patterns

### Component Naming (Form-First)

**CRITICAL:** Name components by structure/behavior, NOT content.

✅ Good (form-based):
```javascript
<Accordion title="Our Principles">
<Card variant="elevated">
<SectionHeader>
```

❌ Bad (content-based):
```javascript
<PrinciplesAccordion>
<PillarCard>
<HeroHeader>
```

**Exception:** Page/route components can be content-named (`HomePage`, `AboutPage`).

### Design System Tokens

**Rule:** Always use design tokens. Never hardcode colors, spacing, or typography (except Rising Ink demos).

✅ Good:
```javascript
<div style={{ 
  backgroundColor: 'var(--color-bronze)',
  padding: 'var(--space-8)',
  fontFamily: 'var(--font-heading)'
}}>
```

❌ Bad:
```javascript
<div style={{ 
  backgroundColor: '#B48E55',
  padding: '32px',
  fontFamily: 'Cinzel'
}}>
```

**Token locations:**
- CSS variables: `shared/design-system/GlobalStyles.jsx`
- JS exports: `shared/design-system/tokens.js`
- Spec: `_workspace/claude-odyssey-design-system-project/_system/SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md`

**Exception:** `sites/rising-ink/demos` allows hardcoded values for speed-first development. Document in reports.

### Component Library

**Shared components** (`shared/components/library/`):
- Must have paired `.md` documentation
- Must use design tokens
- Promote after 3+ uses across sites

**Current components:**
- `Accordion.jsx` — Expandable sections
- `Card.jsx` — Content containers
- `Button.jsx` — Interactive buttons
- `SectionHeader.jsx` — Section headings

### Site Sovereignty

Sites can:
- Have embedded GlobalStyles during prototyping
- Extend/override base design tokens
- Choose whether to import from `@shared`
- Deploy independently

**Convergence:** Eventually all sites should adopt base design system, but premature abstraction is worse than variety.

---

## Multi-Agent Governance

### File Hierarchy (Authority)

1. **AGENTS.md** — PRIMARY source for roles, phases, workflows
2. **[AGENT].md** (CLAUDE.md, KILO.md) — Agent-specific implementation
3. **ARCHITECTURE.md** — Technical design decisions
4. **README.md** — External-facing only (not authoritative for agents)

### Rules System

Technical standards live in `.rules/` (source of truth):
- `.rules/00-general.md` — Universal standards
- `.rules/10-react-standards.md` — React patterns
- `.rules/10-design-system.md` — Token usage
- `.rules/90-odyssey-project.md` — Project-specific

IDE-specific pointers reference these:
- `.cursor/rules/*.mdc` — Cursor pointers
- `.kilocode/rules/*.md` — Kilo pointers

**Before implementing:** Always consult `.rules/` for applicable standards.

### Agent Coordination Workflow

1. **Architect mode** — Read governing files, acknowledge rules, create plan
2. **Check conflicts** — Reconcile AGENTS.md vs handoffs
3. **Build** — Execute with TODO tracking
4. **Validate** — Test dev server, check imports, verify tokens
5. **Report** — Create completion report + lessons learned

**Signaling:**
- 🔧 Rule update needed
- 🚨 Drift detected / decision needed
- 📋 Proposing standard
- ✅ Standard implemented

---

## Critical Rules

### No-Guess Clause

When facing ambiguity:
1. **STOP** — Do not proceed with guesswork
2. **Document** — Log specific ambiguity
3. **ASK** — Request clarification
4. **Wait** — Do not implement until clarified

### Vertical Slice Verification

Build simplest end-to-end implementation first:
1. ONE component
2. ONE doc
3. ONE import test
4. Verify rendering + functionality
5. THEN replicate pattern

### Fail-Fast on Uncertainty

Stop immediately if:
- Requirements unclear
- Design incomplete
- Conflicting instructions
- No precedent
- Breaking changes

Use 🚨 to flag and wait for decision.

### One-Time Script Ban

Never create "run once" scripts. Instead:
- Permanent, idempotent utilities
- Documented manual procedures
- Test fixtures

---

## Common Tasks

### Adding a New Component

1. Create in `shared/components/library/ComponentName.jsx`
2. Use design tokens (check `shared/design-system/tokens.js`)
3. Create `ComponentName.md` documentation
4. Update `shared/components/library/README.md` catalog
5. Test import in site

### Adding a New Site

1. Create directory: `sites/[site-name]/` (or `sites/[vertical]/[site-name]/`)
2. Standard structure: `src/`, `public/`, `index.html`
3. Create Vite config in `config/vite.[site].config.js`
4. Add scripts to `package.json`
5. Import from `@shared` as needed
6. Configure separate Vercel project

### Checking System File Sync

After updating AGENTS.md, CLAUDE.md, KILO.md, README.md, or ARCHITECTURE.md:

```bash
python scripts/check-system-file-sync.py
```

Validates version stamps in YAML frontmatter match `synced_with` expectations.

### Starting a Build Sequence

1. Read AGENTS.md for current Definition of Done
2. Consult `.rules/` for applicable standards
3. Create plan with "Rules Consulted" section
4. Get approval if needed
5. Use TODO list for tracking
6. Validate: dev server runs, no console errors
7. Create report + lessons in `plans/`

---

## Site-Specific Notes

### Odyssey Lab Site

- Main deployment target
- Uses full design system
- Root: `sites/odyssey-lab/`
- Entry: `sites/odyssey-lab/src/main.jsx`
- Dev: `npm run dev`

### Rising Ink Demos

- Speed-first prototypes for tattoo/piercing
- Hardcoded values allowed (document in reports)
- Root: `sites/rising-ink/demos/`
- Dev: `npm run dev:rising-ink`
- Eventually converges to Untitled UI React + shared logic

---

## Testing

Dev server should run without errors:
```bash
npm run dev
# Browser at http://localhost:5173
# Check console for errors
```

No formal test framework yet. Visual verification required.

---

## Version Stamps

System files use YAML frontmatter:
```yaml
---
version: "1.0.0"
last_updated: "2026-01-05"
updated_by: "Claude"
synced_with:
  AGENTS.md: "1.3.0"
---
```

Run `python scripts/check-system-file-sync.py` after updates.

---

## Dependencies

Key packages:
- **React 19.2** + React DOM
- **Vite 6.3** — Build tool
- **Tailwind CSS 3.4** — Utility classes
- **Framer Motion 12.23** — Animations
- **Lucide React** — Icons
- **@studio-freight/lenis** — Smooth scrolling

---

## Deployment

Each site deploys independently via Vercel:
- Separate Vercel project per site
- Root: `sites/[site-name]/`
- Build: `npm run build:[site]`
- Output: `dist/`

---

## References

- **AGENTS.md** — Agent coordination (read this first)
- **ARCHITECTURE.md** — Technical design details
- **.rules/README.md** — Rules system overview
- **shared/design-system/README.md** — Token usage guide
- **shared/components/library/README.md** — Component catalog

<citations>
  <document>
    <document_type>RULE</document_type>
    <document_id>/Users/brandonmcpeak/GitHub & Projects/odyssey-design-engine/AGENTS.md</document_id>
  </document>
</citations>

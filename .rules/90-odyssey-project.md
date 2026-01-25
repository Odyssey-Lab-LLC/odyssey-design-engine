# Odyssey Project-Specific Standards

## Overview

Project-specific patterns, conventions, and workflows for the Odyssey Design Engine.

---

## Multi-Site Architecture

### Directory Structure

```
sites/
├── odyssey-lab/          # Main Odyssey Lab site
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── components/  # Site-specific components
│   ├── public/
│   └── index.html
│
├── rising-ink/           # Vertical container (tattoo/piercing)
│   └── demos/            # Deployable demos site (single-page prototypes)
│       ├── src/
│       ├── public/
│       └── index.html
│
└── [future-sites]/       # Additional client sites or vertical containers
```

### Site-Specific vs Shared

**Site-specific components** (`sites/[site]/src/components/`)
- Used only in one site
- Page layouts
- Custom features
- Client-specific branding

**Shared components** (`shared/components/library/`)
- Used across multiple sites
- Reusable UI components
- Design system components
- 3+ uses = promote to shared

### Deployment Pattern

Each site in `sites/` is an independent Vercel deployment:

- **Build root:** `sites/odyssey-lab/`
- **Build command:** `npm run build` (references `config/vite.config.js`)
- **Output:** `dist/odyssey-lab/`

**Rising Ink demos:**
- **Build root:** `sites/rising-ink/demos/`
- **Build command:** `npm run build:rising-ink`
- **Output:** `sites/rising-ink/demos/dist/`

### Tailwind Content Scoping (Required)

**Rule:** Tailwind `content` paths MUST target only deployable site roots (and `shared/`), not broad `./sites/**/*` globs.

**Why:** Broad globs can scan nested toolchains or `node_modules` under `sites/`, slowing builds and emitting warnings.

**When adding a new site:**
- Add its `index.html` and `src/**/*.{js,jsx,ts,tsx}` to `tailwind.config.js` content.
- Keep `shared/` in the content list.

---

## Workspace Organization

### Directory Purposes

**`_workspace/`** — Research, experiments, prototypes
- Keep messy exploration separate
- Not production code
- Can be disorganized
- Source for extracting patterns

**`shared/`** — Production-ready shared code
- Component library
- Design system
- Utilities
- Clean, documented, tested

**`sites/`** — Deployable applications
- Each site is self-contained
- Can reference `shared/`
- Production code

**`plans/`** — Multi-agent coordination
- Handoffs, reports, lessons
- Session continuity
- Incident management
- NOT code

**`config/`** — Build/tool configuration
- Vite, Tailwind, PostCSS configs
- Keeps root clean
- Centralized tooling

**`scripts/`** — Automation utilities
- Sync check script
- Dev server wrapper
- Build helpers

---

## File Naming Conventions

### React Components

```
PascalCase.jsx           # Accordion.jsx, Card.jsx
PascalCase.md            # Accordion.md (documentation)
PascalCase.test.jsx      # Accordion.test.jsx (tests)
```

### JavaScript Files

```
camelCase.js             # tokens.js, utils.js, config.js
kebab-case.js            # design-system.js, api-client.js
```

### Markdown Files

```
SCREAMING-SNAKE-CASE.md  # AGENTS.md, README.md, ARCHITECTURE.md (root)
kebab-case.md            # rule-name.md, component-name.md (docs)
```

### Directories

```
kebab-case/              # shared/design-system/, sites/odyssey-lab/
PascalCase/              # components/ subdirectories only
```

---

## Import Path Conventions

### Alias Configuration

**Vite config defines:**
```javascript
alias: {
  '@': path.resolve(__dirname, '..'),
  '@shared': path.resolve(__dirname, '../shared'),
  '@sites': path.resolve(__dirname, '../sites')
}
```

### Import Examples

```javascript
// ✅ Good (absolute with alias)
import { Accordion } from '@shared/components/library/Accordion';
import { tokens } from '@shared/design-system/tokens';
import { GlobalStyles } from '@shared/design-system/GlobalStyles';

// ⚠️ OK (relative for nearby files)
import { Button } from './Button';
import { utils } from '../utils';

// ❌ Bad (long relative paths)
import { Accordion } from '../../../shared/components/library/Accordion';
```

---

## Component Migration Strategy

### From Content-Named to Form-Named

**Current state:** Mix of content-named and form-named components in `_workspace/`

**Goal:** All reusable components are form-named in `shared/components/library/`

### Migration Process

**Step 1: Identify reusable component**
- Component used 3+ times, OR
- Clear reusability potential, OR
- Fits library pattern

**Step 2: Extract to library**
```
_workspace/gemini-base-b.jsx  (has AccordionItem)
    ↓ extract
shared/components/library/Accordion.jsx
```

**Step 3: Document**
- Create `Accordion.md` with props, usage, examples
- Update `shared/components/library/README.md` catalog

**Step 4: Gradually migrate usage**
- Update one site at a time
- Don't break existing code immediately
- Test thoroughly

**Step 5: Deprecate old version**
- After all usages migrated
- Move to `_workspace/deprecated/`
- Eventually delete

---

## Design System Evolution

### Current State: v0.3

**Source:**
```
_workspace/claude-odyssey-design-system-project/_system/
SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md
```

**Implementation:**
```
shared/design-system/
├── tokens.js          # JavaScript exports
├── GlobalStyles.jsx   # CSS variables
└── README.md          # Usage guide
```

### Extension Protocol

When design system needs to grow:

**Minor additions** (new token in existing category):
- Add to `tokens.js` and `GlobalStyles.jsx`
- Document in `shared/design-system/README.md`
- Note in completion report

**Major additions** (new token category or pattern):
- Propose in handoff/report with rationale
- Get approval before implementing
- May require new token spec version (v0.4)
- Update `.rules/10-design-system.md` if patterns change

### Token Spec Versioning

```
v0.3 → Current stable version
v0.4 → Next version (breaking changes)
v0.3.1 → Patch (minor additions, no breaking changes)
```

---

## Agent Workflow Integration

### Cursor (Claude) Workflow

1. **Read governing files**
   - AGENTS.md
   - CLAUDE.md
   - Relevant rules from `.rules/`

2. **Read handoff** (if executing)
   - Check for conflicts
   - Flag with 🚨 if found

3. **Execute work**
   - Follow rules and architecture
   - Document decisions

4. **Complete report**
   - Log conflicts resolved
   - Note new components
   - Propose improvements

5. **Update system files** (if needed)
   - Version stamps
   - Documentation

### Kilo Workflow (Future)

Similar to Cursor, but:
- Reads KILO.md instead of CLAUDE.md
- Builder role (executes plans)
- Reports back to strategist

---

## Prototype to Production Path

### The Flow

```
1. Experiment in _workspace/
   ↓
2. Validate concept works
   ↓
3. Extract patterns
   ↓
4. Clean up code
   ↓
5. Document thoroughly
   ↓
6. Add tests (future)
   ↓
7. Move to shared/ or sites/
   ↓
8. Delete from _workspace/ or archive
```

### Don't Prematurely Extract

**Wait until:**
- Pattern is proven (used 2-3 times)
- API is stable
- Behavior is well-understood
- Worth maintaining

**Don't extract:**
- One-off experiments
- Unstable APIs
- Client-specific logic
- Unclear reusability

---

## Git Workflow

### Branch Strategy

**Main branch:** Production-ready code

**Feature branches:** For larger changes
```bash
git checkout -b feature/component-library-setup
git checkout -b fix/accordion-animation-bug
```

### Commit Conventions

```
feat: Add Accordion component to library
fix: Correct bronze color token value
docs: Update ARCHITECTURE.md with multi-site pattern
refactor: Extract shared Button component
chore: Update dependencies
```

### What to Commit

**Always commit:**
- Source code changes
- Rule updates
- System file updates
- Documentation
- Configuration changes

**Never commit:**
- `node_modules/`
- `dist/` (build output)
- `.env` files
- Temporary files
- IDE-specific files (except .cursor/ rules)

---

## Development Server

### Running Sites

```bash
# Odyssey Lab site
npm run dev
# Runs: vite --config config/vite.config.js

# Build for production
npm run build

# Preview production build
npm run preview
```

### Multi-Site Dev (Future)

When multiple sites exist:

```bash
# Run specific site
npm run dev:odyssey-lab
npm run dev:client-site

# Run all sites (with script)
npm run dev:all
```

---

## Code Review Checklist

Before marking work complete:

### Code Quality
- [ ] No hardcoded values (colors, spacing)
- [ ] Design tokens used correctly
- [ ] Component naming follows form-first pattern
- [ ] Clear, self-documenting code
- [ ] Error handling in place

### Documentation
- [ ] Library components have `.md` docs
- [ ] Props documented
- [ ] Usage examples provided
- [ ] New patterns noted in report

### Standards Compliance
- [ ] Follows `.rules/10-react-standards.md`
- [ ] Follows `.rules/10-design-system.md`
- [ ] No conflicts with AGENTS.md
- [ ] Architecture decisions respected

### Git Hygiene
- [ ] Clear commit messages
- [ ] Atomic commits
- [ ] No sensitive data committed
- [ ] .gitignore respected

### Testing (Future)
- [ ] Tests written
- [ ] Tests pass
- [ ] Coverage acceptable

---

## Common Patterns

### Page Structure

```javascript
// sites/odyssey-lab/src/pages/HomePage.jsx
import { GlobalStyles } from '@shared/design-system/GlobalStyles';
import { SectionHeader } from '@shared/components/library/SectionHeader';
import { Card } from '@shared/components/library/Card';

export const HomePage = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <section className="zone-light">
          <SectionHeader 
            title="Welcome to Odyssey Lab" 
            subtitle="Policy innovation through research"
          />
          {/* Content */}
        </section>
        
        <section className="zone-dark">
          {/* Dark zone content */}
        </section>
      </main>
    </>
  );
};
```

### Component with Zone Support

```javascript
export const Card = ({ 
  children, 
  zone = 'light',
  elevated = false 
}) => {
  const bgColor = zone === 'dark' 
    ? 'var(--dark-bg-primary)' 
    : 'var(--light-bg-primary)';
    
  const textColor = zone === 'dark'
    ? 'var(--dark-text-primary)'
    : 'var(--light-text-primary)';
  
  return (
    <div style={{
      backgroundColor: bgColor,
      color: textColor,
      padding: 'var(--space-6)',
      borderRadius: 'var(--radius-md)',
      boxShadow: elevated ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
    }}>
      {children}
    </div>
  );
};
```

---

## Performance Guidelines

### Bundle Size

**Monitor:**
- Keep shared component library lean
- Lazy load heavy features
- Code split by route (future)

**Don't prematurely optimize:**
- Clear code > clever code
- Optimize when measured problem

### Image Optimization

- Use appropriate formats (WebP with fallbacks)
- Lazy load below-fold images
- Provide width/height to prevent CLS

---

## Accessibility Requirements

### All Interactive Elements Must:

- Be keyboard accessible (Tab, Enter, Space)
- Have visible focus indicators
- Have appropriate ARIA labels
- Work with screen readers

### Color Contrast

All text must meet WCAG AA:
- Normal text: 4.5:1 contrast ratio
- Large text (18pt+): 3:1 contrast ratio

---

## Future Considerations

### Planned Features

- **TypeScript migration:** Gradual adoption
- **Vitest setup:** Component testing
- **Storybook:** Component playground
- **Chromatic:** Visual regression
- **More sites:** Validate multi-site pattern

### Not Planning (Yet)

- Server-side rendering (SSR)
- Static site generation (SSG)
- Multiple frameworks (staying React)
- Complex state management (Zustand/Redux)

---

## See Also

- [`AGENTS.md`](../AGENTS.md) — Agent roles and workflows
- [`ARCHITECTURE.md`](../ARCHITECTURE.md) — Technical design decisions
- [`.rules/00-general.md`](./00-general.md) — Universal standards
- [`.rules/10-react-standards.md`](./10-react-standards.md) — React patterns
- [`.rules/10-design-system.md`](./10-design-system.md) — Design tokens
- [`shared/components/library/README.md`](../shared/components/library/README.md) — Component catalog

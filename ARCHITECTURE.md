---
version: "1.0.0"
last_updated: "2026-01-03"
updated_by: "Claude"
synced_with:
  AGENTS.md: "1.0.0"
  README.md: "1.0.0"
changelog:
  - "1.0.0 (2026-01-03): Initial architecture documentation for Odyssey Design Engine"
---

# ARCHITECTURE.md

Technical design documentation for the Odyssey Design Engine project.

---

## Overview

The Odyssey Design Engine is a **multi-site React development environment** with shared component library and design system.

**Key architectural decisions:**
- Multi-site pattern (each site = independent deployment)
- Shared component library (reusable across sites)
- Centralized design system (Odyssey tokens v0.3)
- Clean configuration management (`config/` directory)
- Multi-agent governed development

---

## Directory Structure

```
/odyssey-design-engine/
├── .rules/                         # Authoritative coding standards (SSoT)
│   ├── README.md                  # Rules architecture
│   ├── 00-general.md              # Universal standards
│   ├── 00-conflict-checking.md    # Conflict protocol
│   ├── 10-react-standards.md      # React/JSX patterns
│   ├── 10-design-system.md        # Design token usage
│   ├── 20-testing.md              # Test requirements
│   └── 90-odyssey-project.md      # Project-specific patterns
│
├── .cursor/rules/                  # Cursor pointer files (.mdc)
│   ├── general.mdc
│   ├── conflict-checking.mdc
│   ├── react.mdc
│   ├── design-system.mdc
│   ├── testing.mdc
│   └── odyssey-project.mdc
│
├── .kilocode/rules/                # Kilo pointer files (.md)
│   ├── general.md
│   ├── conflict-checking.md
│   ├── react.md
│   ├── design-system.md
│   ├── testing.md
│   └── odyssey-project.md
│
├── config/                         # Build/tool configuration
│   ├── vite.config.js             # Vite build config
│   ├── tailwind.config.js         # Tailwind CSS config
│   └── postcss.config.js          # PostCSS config
│
├── sites/                          # Deployable sites
│   └── odyssey-lab/               # Main Odyssey Lab site
│       ├── src/
│       │   ├── App.jsx            # Root component
│       │   ├── main.jsx           # Entry point
│       │   └── components/        # Site-specific components
│       ├── public/                # Static assets
│       └── index.html             # HTML template
│
├── shared/                         # Shared across all sites
│   ├── design-system/
│   │   ├── tokens.js              # JS token exports
│   │   ├── GlobalStyles.jsx       # CSS variables component
│   │   └── README.md              # Usage documentation
│   │
│   ├── components/
│   │   ├── library/               # Documented, reusable components
│   │   │   ├── README.md         # Component catalog
│   │   │   ├── Accordion.jsx     # + Accordion.md
│   │   │   ├── Card.jsx          # + Card.md
│   │   │   └── ...
│   │   └── experimental/          # Not yet standardized
│   │
│   └── utils/                     # Shared utilities
│
├── plans/                          # Multi-agent coordination
│   ├── handoffs/                  # Work assignments
│   │   └── archive/
│   ├── _plans/                    # Execution plans
│   │   └── archive/
│   ├── checkpoints/               # Progress snapshots
│   │   └── archive/
│   ├── reports/                   # Completion reports
│   │   └── archive/
│   ├── lessons/                   # Lessons learned
│   ├── sessions/                  # Session continuity
│   ├── incidents/                 # Incident management
│   └── ragereports/               # User frustration logs
│
├── scripts/                        # Automation
│   ├── check-system-file-sync.py  # Version sync validation
│   └── dev.sh                     # (Future) Multi-site dev wrapper
│
├── _workspace/                     # Research/experiments
│   ├── andrew gem merge/          # Client prototypes
│   ├── init gem content delta test/  # Gemini experiments
│   └── claude-odyssey-design-system-project/
│       └── _system/
│           └── SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md
│
├── this-is-odyssey-lab/           # Deployed artifacts (legacy)
│   └── deploy/
│
├── AGENTS.md                       # Primary agent coordination (SSoT)
├── CLAUDE.md                       # Claude-specific directives
├── KILO.md                         # Kilo-specific directives
├── ARCHITECTURE.md                 # This file (technical design)
├── README.md                       # External-facing docs
│
├── package.json                    # Dependencies & scripts
├── package-lock.json
└── .gitignore
```

---

## Multi-Site Architecture

### Design Pattern

Each site in `sites/` is an **independent, deployable unit**.

**Benefits:**
- Clean separation of concerns
- Independent deployment per site
- Shared components reduce duplication
- Easy to add new sites
- No cross-site dependencies

### Site Structure

```
sites/[site-name]/
├── src/
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Entry point (imports App)
│   ├── components/            # Site-specific components
│   ├── pages/                 # (Optional) Page components
│   └── assets/                # (Optional) Site-specific assets
│
├── public/                    # Static files
│   ├── favicon.ico
│   └── ...
│
└── index.html                 # HTML template
```

### Site-Specific vs Shared

**Site-specific components** (`sites/[site]/src/components/`):
- Used only in this site
- Page layouts
- Custom features
- Client-specific branding

**Shared components** (`shared/components/library/`):
- Used across multiple sites
- Reusable UI components
- Design system components
- Rule of thumb: 3+ uses = promote to shared

### Promotion Criteria

Component moves from site-specific to shared when:
1. Used in 2+ sites, OR
2. Clear reusability potential, OR
3. Fits established design system pattern

### Deployment

Each site deploys independently:

**Build configuration:**
- Build root: `sites/[site-name]/`
- Build command: `npm run build` (references `config/vite.config.js`)
- Output: `dist/[site-name]/`

**Vercel deployment:**
- Separate Vercel project per site
- Root directory: `sites/odyssey-lab/` (or other site)
- Build command: `npm run build`
- Output directory: `dist/odyssey-lab/`

---

## Design System Architecture

### Token System (v0.3)

**Source of truth:**
```
_workspace/claude-odyssey-design-system-project/_system/
SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md
```

**Implementation:**
```
shared/design-system/
├── tokens.js          # JavaScript exports (for JS consumption)
├── GlobalStyles.jsx   # CSS variables (for CSS consumption)
└── README.md          # Usage guide
```

### Token Categories

**Colors:**
- Bronze palette (--color-bronze, --color-bronze-light, --color-bronze-dark)
- Gold palette (--color-gold, --color-gold-light, --color-gold-dark)
- Odyssey blue (--color-odyssey-blue)
- Neutrals (--color-charcoal, --color-warm-white, --color-soft-gray)
- Zone colors (--light-*, --dark-*)

**Typography:**
- Font families (--font-heading, --font-body, --font-mono)
- Font sizes (--text-xs through --text-6xl)
- Font weights (defined in token spec)

**Spacing:**
- 8px grid system (--space-1 through --space-24)

**Borders:**
- Border radius (--radius-sm through --radius-full)

**Shadows:**
- Box shadows (--shadow-sm through --shadow-xl)

**Motion:**
- Durations (--duration-fast, --duration-base, --duration-slow)
- Easing functions (--ease-in, --ease-out, --ease-in-out)

### Zone System

**Light Zone:**
- Background: --light-bg-primary (warm white)
- Text: --light-text-primary (charcoal)
- Accent: --color-bronze
- Borders: --light-border-subtle

**Dark Zone:**
- Background: --dark-bg-primary (charcoal)
- Text: --dark-text-primary (warm white)
- Accent: --color-gold
- Borders: --dark-border-subtle

**Transitions:**
- Smooth fade between zones
- framer-motion animations
- Typically 0.5s duration

### Extension Protocol

When new tokens needed:
1. Check if similar token exists
2. Use closest existing token if possible
3. Propose new token with rationale
4. Wait for approval
5. Add to `tokens.js` and `GlobalStyles.jsx`
6. Document in `shared/design-system/README.md`
7. Note in completion report

---

## Component Library Architecture

### Library Structure

```
shared/components/library/
├── README.md              # Component catalog (index)
├── Accordion.jsx          # Implementation
├── Accordion.md           # Documentation
├── Card.jsx
├── Card.md
└── ...
```

### Component Documentation

Each component requires paired `.md` file:

**Contents:**
- **Purpose:** What the component does
- **Props:** Full prop list with types, defaults, descriptions
- **Usage:** Code examples
- **Design Tokens Used:** Which tokens it references
- **Variants:** Available variations
- **Created:** Date, agent, handoff reference
- **Notes:** Special considerations, limitations, future enhancements

### Component Catalog

`shared/components/library/README.md` acts as index:
- Lists all components
- Brief description each
- Links to full documentation
- Categorized by type (e.g., Layout, Content, Navigation)

### Naming Convention

**Form-first, not content-first:**

✅ **Good (form-based):**
- Accordion (expandable sections)
- Card (content container)
- SectionHeader (section heading)
- Button (clickable button)

❌ **Bad (content-based):**
- PrinciplesAccordion (ties to specific content)
- PillarCard (ties to specific use case)
- HeroHeader (ties to specific location)

**Why:** Form-based names generalize across use cases. Content-based names create artificial duplication.

**Exception:** Page components, routes, client-specific layouts (e.g., `AndrewHeroLayout`).

---

## Build Configuration

### Config Organization

All build tool configs live in `config/` directory:

```
config/
├── vite.config.js         # Vite build configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS plugins
```

**Why separate directory:**
- Cleaner project root
- Grouped tooling configs
- Easier to maintain
- Clear separation of concerns

### Vite Configuration

**Path aliases:**
```javascript
alias: {
  '@': path.resolve(__dirname, '..'),              // Project root
  '@shared': path.resolve(__dirname, '../shared'), // Shared code
  '@sites': path.resolve(__dirname, '../sites')    // Sites directory
}
```

**Build targets:**
- Root: `sites/odyssey-lab/`
- Output: `dist/odyssey-lab/`
- Config: `config/vite.config.js`

### Package Scripts

```json
{
  "scripts": {
    "dev": "vite --config config/vite.config.js",
    "build": "vite build --config config/vite.config.js",
    "preview": "vite preview --config config/vite.config.js"
  }
}
```

**Future (multi-site):**
```json
{
  "scripts": {
    "dev:odyssey-lab": "vite --config config/vite.config.js",
    "dev:client-site": "vite --config config/vite-client.config.js",
    "dev:all": "./scripts/dev.sh"
  }
}
```

---

## State Management

### Current Approach

**Component-level state:** `useState`, `useReducer`

**Shared state:** React Context API (when needed)

**Future consideration:** Zustand or Redux (only if complexity warrants)

### When to Use Context

**Good candidates:**
- Theme/zone switching
- User authentication state
- Global UI state (modals, toasts)

**Not for:**
- Component-specific state
- Temporary UI state
- Form state (use local state or form library)

---

## Routing (Future)

**Current:** Single-page app (no routing yet)

**Future options:**
- React Router (client-side routing)
- TanStack Router (type-safe routing)
- File-based routing (if complexity grows)

**Decision pending:** Will be decided when multi-page needs emerge.

---

## Testing Architecture (Future)

### Planned Stack

- **Vitest:** Test runner
- **React Testing Library:** Component testing
- **Playwright/Cypress:** E2E testing (future)
- **Chromatic/Percy:** Visual regression (future)

### Test Organization

```
shared/components/library/
├── Accordion.jsx
├── Accordion.test.jsx      # Tests co-located with component
├── Accordion.md
```

### Test Types

**Unit tests:**
- Utility functions
- Custom hooks
- Token calculations

**Component tests:**
- Rendering
- User interactions
- Prop handling
- Accessibility

**Integration tests:**
- Multi-component flows
- Form submissions
- Navigation

**Visual regression:**
- Component snapshots
- Design system consistency

---

## Data Flow

### Current Pattern

```
User Interaction
    ↓
Event Handler
    ↓
State Update (useState/useReducer)
    ↓
Re-render
    ↓
UI Update
```

### Design Token Flow

```
Token Spec (v0.3)
    ↓ converted to
tokens.js (JavaScript exports)
GlobalStyles.jsx (CSS variables)
    ↓ imported by
Components
    ↓ applied as
CSS variables (var(--color-bronze))
Inline styles ({ color: 'var(--color-bronze)' })
```

### Component Composition Flow

```
shared/components/library/Accordion.jsx (reusable)
    ↓ imported by
sites/odyssey-lab/src/components/PrinciplesSection.jsx (site-specific)
    ↓ imported by
sites/odyssey-lab/src/App.jsx (root)
    ↓ rendered in
sites/odyssey-lab/index.html (entry)
```

---

## Performance Considerations

### Bundle Size

**Current:**
- Keep shared library lean
- Lazy load heavy features when needed
- Code split by route (future)

**Monitoring:**
- Vite build reports
- Bundle analyzer (add when needed)

### Image Optimization

- Use WebP with fallbacks
- Lazy load below-fold images
- Provide width/height (prevent CLS)
- Consider image CDN (future)

### Code Splitting

**Future implementation:**
- Route-based splitting
- Component-level splitting for heavy components
- Dynamic imports for modals, drawers

---

## Accessibility

### Standards

- WCAG AA compliance target
- Semantic HTML first
- ARIA when needed
- Keyboard navigation support

### Focus Management

- Visible focus indicators
- Logical tab order
- Focus trapping in modals
- Skip links (future)

### Screen Reader Support

- Meaningful labels
- Live regions for dynamic content
- Descriptive link text
- Alt text for images

---

## Git Workflow

### Branch Strategy

**Main branch:** Production-ready code

**Feature branches:** For significant changes
```
feature/component-library-setup
fix/accordion-animation-bug
refactor/extract-shared-button
```

### Commit Conventions

```
feat: Add Accordion component to library
fix: Correct bronze color token value
docs: Update ARCHITECTURE.md with routing section
refactor: Extract shared Button component
chore: Update dependencies
```

### What to Commit

**Yes:**
- Source code
- Configuration
- Documentation
- System files
- Rules

**No:**
- `node_modules/`
- `dist/`
- `.env` files
- IDE-specific files (except .cursor/ rules)
- Temporary files

---

## Deployment

### Current (V1)

**Odyssey Lab site:**
- Platform: Vercel
- Root: `sites/odyssey-lab/`
- Build: `npm run build`
- Output: `dist/odyssey-lab/`

### Future (Multi-Site)

Each site = separate Vercel project:

**Site 1 (Odyssey Lab):**
- Vercel project: odyssey-lab
- Root: `sites/odyssey-lab/`

**Site 2 (Client):**
- Vercel project: client-site
- Root: `sites/client-site/`

**Shared code:**
- Not deployed separately
- Bundled with each site during build

---

## Migration Strategy

### From Prototype to Production

**Current state:**
- Ad-hoc prototypes in `_workspace/`
- Mix of content-named and form-named components
- Some HTML artifacts

**V1 goal:**
- Production structure established
- 3-4 components extracted to library
- Design system implemented
- Clean multi-site architecture

**Future phases:**
- Gradual migration of remaining prototypes
- Extraction of proven patterns
- Deprecation of old ad-hoc code
- Archive or delete legacy experiments

---

## Future Considerations

### Planned

- TypeScript migration (gradual)
- Vitest setup (component testing)
- More sites (validate multi-site pattern)
- Storybook (component playground)
- Visual regression testing

### Not Planned (Yet)

- Server-side rendering (SSR)
- Static site generation (SSG)
- Multiple frameworks (staying React)
- Complex state management (use Context until needed)
- Micro-frontends architecture

---

## See Also

- [`AGENTS.md`](AGENTS.md) — Agent coordination
- [`.rules/README.md`](.rules/README.md) — Rules architecture
- [`README.md`](README.md) — External documentation
- [`shared/design-system/README.md`](shared/design-system/README.md) — Token usage guide
- [`shared/components/library/README.md`](shared/components/library/README.md) — Component catalog


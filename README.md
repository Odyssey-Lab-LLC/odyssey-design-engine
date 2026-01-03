---
version: "1.0.0"
last_updated: "2026-01-03"
updated_by: "Claude"
synced_with:
  AGENTS.md: "1.0.0"
changelog:
  - "1.0.0 (2026-01-03): Initial external-facing documentation for Odyssey Design Engine V1"
---

# Odyssey Design Engine

**A multi-site React design system and component library for the Odyssey Lab brand.**

The Odyssey Design Engine is a flexible, scalable foundation for building beautiful, consistent web experiences across multiple sites. It combines a shared component library, a sophisticated design system based on Odyssey tokens v0.3, and a multi-agent governed development environment.

---

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd odyssey-design-engine

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start on `http://localhost:5173` (or next available port).

---

## What's Inside

### Multi-Site Architecture

Each site in `sites/` is an independent, deployable unit that can share components from the central library:

```
sites/
└── odyssey-lab/          # Main Odyssey Lab site
    ├── src/
    │   ├── App.jsx       # Root component
    │   └── main.jsx      # Entry point
    ├── public/           # Static assets
    └── index.html        # HTML template
```

### Shared Component Library

Reusable, documented components live in `shared/components/library/`:

- **Accordion** — Expandable content sections
- **Card** — Content containers with variants
- **Button** — Interactive buttons with states
- **SectionHeader** — Section headings with decorative elements

All components follow form-first naming (not content-specific) and use design tokens consistently.

### Design System

The Odyssey design tokens (v0.3) provide:

- **Color palettes** — Bronze, gold, odyssey blue, neutrals
- **Typography** — Cinzel, Montserrat, Cormorant Garamond
- **Spacing** — 8px grid system
- **Zone system** — Light/dark mode with smooth transitions

Tokens are implemented in `shared/design-system/` as both CSS variables and JavaScript exports.

---

## Project Structure

```
odyssey-design-engine/
├── sites/                # Deployable sites
├── shared/               # Shared components & design system
│   ├── components/       
│   │   └── library/      # Component library
│   └── design-system/    # Design tokens
├── config/               # Build tool configuration
├── .rules/               # Technical standards (SSoT)
├── plans/                # Multi-agent coordination
└── _workspace/           # Research & experiments
```

---

## For Contributors

### Agent Coordination

This project uses a multi-agent governance system for AI-assisted development:

- **[AGENTS.md](AGENTS.md)** — Primary coordination file (roles, phases, Definition of Done)
- **[CLAUDE.md](CLAUDE.md)** — Claude (Cursor) agent directive
- **[KILO.md](KILO.md)** — Kilo agent directive

**Before contributing:** Read `AGENTS.md` to understand the coordination protocols.

### Technical Standards

All technical standards live in `.rules/`:

- `00-general.md` — Universal coding standards
- `10-react-standards.md` — React/JSX patterns
- `10-design-system.md` — Design token usage
- `20-testing.md` — Test requirements
- `90-odyssey-project.md` — Project-specific patterns

---

## For Developers

### Architecture Documentation

**[ARCHITECTURE.md](ARCHITECTURE.md)** — Complete technical design documentation:

- Multi-site architecture pattern
- Design system implementation
- Component library structure
- Build configuration
- Data flow patterns

### Adding Components

1. Create component in `shared/components/library/ComponentName.jsx`
2. Document in `shared/components/library/ComponentName.md`
3. Update catalog in `shared/components/library/README.md`
4. Use design tokens (no hardcoded values)
5. Follow form-first naming conventions

### Adding Sites

1. Create directory in `sites/[site-name]/`
2. Follow standard site structure (src/, public/, index.html)
3. Import shared components via `@shared` alias
4. Configure separate Vercel project for deployment

---

## Design Philosophy

**Form over content** — Components named by structure (Accordion), not content (PrinciplesAccordion)

**Token-first development** — All visual properties use design tokens, never hardcoded values

**Multi-site by default** — Architecture supports independent sites sharing a common foundation

**Documentation as code** — Every component has paired `.md` documentation

**Multi-agent governance** — Clear protocols for AI-assisted development with institutional memory

---

## Status

**Version:** 1.0.0  
**Status:** V1 Complete ✅

**Definition of Done met:**
- ✅ Governance system established
- ✅ Design system implemented
- ✅ Component library operational (4+ components)
- ✅ Multi-site architecture ready
- ✅ Clean configuration organization
- ✅ Documentation complete

---

## License

[To be determined]

---

## Contact

[To be determined]


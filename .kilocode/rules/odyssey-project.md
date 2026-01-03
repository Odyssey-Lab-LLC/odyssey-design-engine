# Odyssey Project Standards

See `.rules/90-odyssey-project.md` for complete project-specific patterns.

## Directory Structure

**sites/** — Deployable applications (each is independent Vercel deployment)

**shared/** — Production-ready shared code
- `components/library/` — Reusable components (3+ uses)
- `design-system/` — Tokens, GlobalStyles
- `utils/` — Shared utilities

**_workspace/** — Research, experiments, prototypes (not production)

**plans/** — Multi-agent coordination (handoffs, reports, lessons)

**config/** — Build tool configs (Vite, Tailwind, PostCSS)

**.rules/** — Authoritative coding standards

## Import Aliases

```javascript
// ✅ Use aliases for clarity
import { Accordion } from '@shared/components/library/Accordion';
import { tokens } from '@shared/design-system/tokens';

// ❌ Avoid long relative paths
import { Accordion } from '../../../shared/components/library/Accordion';
```

## File Naming

- **Components:** PascalCase.jsx (Accordion.jsx)
- **JavaScript:** camelCase.js (tokens.js)
- **Directories:** kebab-case/ (design-system/)
- **Root files:** SCREAMING-SNAKE-CASE.md (AGENTS.md)

## Component Migration

**When to extract to library:**
1. Used 3+ times, OR
2. Clear reusability potential, OR
3. Fits established pattern

**Process:**
1. Prototype in `_workspace/`
2. Validate concept works
3. Extract to `shared/components/library/`
4. Create .md documentation
5. Update library README catalog
6. Gradually migrate usage
7. Archive or delete original

## Form-First Naming

**Components named by structure, not content:**
- ✅ Accordion, Card, SectionHeader
- ❌ PrinciplesAccordion, PillarCard, HeroHeader

## Multi-Site Pattern

Each site in `sites/` is self-contained:
- Own src/, public/, index.html
- Can import from `shared/`
- Independent Vercel deployment
- Build root: `sites/[site-name]/`

## Development

```bash
npm run dev      # Run development server
npm run build    # Build for production
npm run preview  # Preview production build
```

Read `.rules/90-odyssey-project.md` for complete patterns and conventions.


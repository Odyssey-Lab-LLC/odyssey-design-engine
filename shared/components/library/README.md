# Odyssey Component Library

Reusable React components for the Odyssey Design Engine.

---

## Component List

### Layout Components

- **[Card](./Card.md)** — Content container with elevation and styling
- **[SectionHeader](./SectionHeader.md)** — Centered section heading with subtitle

### Content Components

- **[Accordion](./Accordion.md)** — Expandable/collapsible content sections
- **[Button](./Button.md)** — Clickable button with variants

---

## Usage

All components import from this directory using the `@shared` alias:

```javascript
import { Card } from '@shared/components/library/Card';
import { Accordion } from '@shared/components/library/Accordion';
import { Button } from '@shared/components/library/Button';
import { SectionHeader } from '@shared/components/library/SectionHeader';
```

---

## Component Standards

All library components follow these standards:

1. **Form-first naming** — Named by structure, not content (Card, not PillarCard)
2. **Design tokens** — Use CSS variables from design system
3. **Documentation** — Paired `.md` file with full docs
4. **Props** — Clear, typed props with defaults
5. **Accessibility** — Semantic HTML, ARIA attributes, keyboard support

---

## Adding New Components

When creating a new library component:

1. **Create implementation** — `ComponentName.jsx`
2. **Create documentation** — `ComponentName.md`
3. **Update this catalog** — Add to list above
4. **Test** — Verify in dev server and browser
5. **Report** — Note in completion report

See `.rules/10-react-standards.md` and `.rules/90-odyssey-project.md` for patterns.

---

## Component Promotion

Components are promoted to the library when:

- Used in 3+ places across sites, OR
- Clear reusability potential, OR
- Fits established design system pattern

Components start site-specific, prove their value, then get promoted.

---

## See Also

- [`shared/design-system/`](../../design-system/) — Design tokens and GlobalStyles
- [`.rules/10-react-standards.md`](../../../.rules/10-react-standards.md) — React component patterns
- [`.rules/10-design-system.md`](../../../.rules/10-design-system.md) — Design token usage
- [`ARCHITECTURE.md`](../../../ARCHITECTURE.md) — Component library architecture

---

**Version:** 1.0.0  
**Created:** 2026-01-03  
**Components:** 4


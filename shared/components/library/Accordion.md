# Accordion Component

Expandable/collapsible content sections following Odyssey design patterns.

---

## Purpose

Provides an expandable/collapsible section for organizing content hierarchically. Commonly used for FAQs, principles lists, documentation sections.

---

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | Yes | - | Section title (displayed in header) |
| `subtitle` | string | No | - | Optional subtitle below title |
| `children` | ReactNode | Yes | - | Content to show/hide |
| `defaultExpanded` | boolean | No | `false` | Initial expanded state |
| `dark` | boolean | No | `false` | Use dark zone styling |

---

## Usage

### Basic Usage

```jsx
import { Accordion } from '@shared/components/library/Accordion';

<Accordion title="Our Principles">
  <p>Content goes here</p>
</Accordion>
```

### With Subtitle

```jsx
<Accordion 
  title="Core Values" 
  subtitle="What guides us"
>
  <p>Detailed explanation of our core values...</p>
</Accordion>
```

### Default Expanded

```jsx
<Accordion 
  title="Important Information" 
  defaultExpanded={true}
>
  <p>This section starts open</p>
</Accordion>
```

### Dark Zone

```jsx
<section className="zone-dark">
  <Accordion 
    title="Exploration Phase" 
    dark={true}
  >
    <p>Content with dark zone styling</p>
  </Accordion>
</section>
```

---

## Design Tokens Used

- **Title color:** `--color-bronze` (light) / `--color-gold` (dark)
- **Text color:** `--light-text-secondary` (light) / `--dark-text-secondary` (dark)
- **Subtitle color:** `--light-text-muted` (light) / `--dark-text-muted` (dark)
- **Border color:** `--light-border-subtle` (light) / `--dark-border-subtle` (dark)
- **Accent border:** `--color-bronze` (light) / `--color-gold` (dark)
- **Spacing:** `--space-1`, `--space-4`, `--space-6`
- **Typography:** `--font-heading` (title), `--font-body` (subtitle/content), `--text-xl`, `--text-sm`

---

## Variants

### Light Zone (Default)
- Bronze accent color
- Light backgrounds and borders
- Default for client-facing content

### Dark Zone (`dark={true}`)
- Gold accent color
- Dark backgrounds and borders
- For exploration, mystery, depth sections

---

## Accessibility

- **Semantic HTML:** Uses `<h3>` for title
- **ARIA attributes:** `aria-expanded` and `aria-controls`
- **Keyboard navigation:** 
  - Tab to focus
  - Enter or Space to toggle
- **Focus management:** Visible focus indicators

---

## Animation

- **Expand/collapse:** 0.3s ease-out height animation
- **Icon rotation:** ChevronDown rotates 180° when expanded
- **Smooth transitions:** Uses framer-motion for fluid animations

---

## Created

- **Date:** 2026-01-03
- **Agent:** Claude
- **Version:** 1.0.0
- **Dependencies:** `react`, `framer-motion`, `lucide-react`

---

## Notes

- Follows Odyssey accordion header style from token spec v0.3
- Single accordion component (not exclusive) — use multiple for non-exclusive behavior
- For exclusive accordions (only one open at a time), wrap multiple in a parent component with shared state

---

## Future Enhancements

- [ ] Exclusive mode (only one accordion open at a time)
- [ ] Custom icon support
- [ ] Animation duration prop
- [ ] Custom className support
- [ ] Controlled mode (external state management)

---

## See Also

- [`shared/design-system/README.md`](../../design-system/README.md) — Design token reference
- [`.rules/10-react-standards.md`](../../../.rules/10-react-standards.md) — Component patterns
- [`.rules/10-design-system.md`](../../../.rules/10-design-system.md) — Token usage rules


# Card Component

Content container with elevation, borders, and zone-appropriate styling.

---

## Purpose

Provides a contained, elevated surface for grouping related content. Used for features, services, team members, blog posts, or any content that needs visual separation.

---

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `children` | ReactNode | Yes | - | Card content |
| `variant` | string | No | `'default'` | Style variant: `'default'`, `'elevated'`, `'panel'` |
| `dark` | boolean | No | `false` | Use dark zone styling |
| `style` | object | No | `{}` | Additional inline styles |

---

## Usage

### Default Card

```jsx
import { Card } from '@shared/components/library/Card';

<Card>
  <h3>Feature Title</h3>
  <p>Feature description</p>
</Card>
```

### Elevated Card

More prominent shadow and border for emphasis:

```jsx
<Card variant="elevated">
  <h3>Important Feature</h3>
  <p>This card stands out more</p>
</Card>
```

### Panel Card

Subtler, more integrated with background:

```jsx
<Card variant="panel">
  <h3>Supporting Information</h3>
  <p>Less prominent card</p>
</Card>
```

### Dark Zone

```jsx
<section className="zone-dark">
  <Card dark={true} variant="elevated">
    <h3>Dark Zone Content</h3>
    <p>Styled for dark backgrounds</p>
  </Card>
</section>
```

### Custom Styling

```jsx
<Card style={{ maxWidth: '400px', margin: '0 auto' }}>
  <h3>Centered Card</h3>
  <p>With custom width</p>
</Card>
```

---

## Design Tokens Used

### Default Variant
- **Background:** `--light-bg-card` (light) / `--dark-bg-panel` (dark)
- **Border:** `--light-border-subtle` (light) / `--dark-border-subtle` (dark)
- **Shadow:** `--shadow-sm`

### Elevated Variant
- **Background:** `--light-bg-card` (light) / `--dark-bg-elevated` (dark)
- **Border:** `--light-border-strong` (light) / `--dark-border-medium` (dark)
- **Shadow:** `--shadow-lg`

### Panel Variant
- **Background:** `--light-bg-panel` (light) / `--dark-bg-panel` (dark)
- **Border:** `--light-border-subtle` (light) / `--dark-border-subtle` (dark)
- **Shadow:** None

### Common
- **Text color:** `--light-text-secondary` (light) / `--dark-text-secondary` (dark)
- **Padding:** `--space-6`
- **Border radius:** `--radius-lg`

---

## Variants

### default
Standard card with subtle elevation. Most common variant.

### elevated
More prominent card with larger shadow and stronger border. Use for featured content or primary actions.

### panel
Subtle card that blends with background. Use for supplementary information or less prominent content.

---

## Accessibility

- **Semantic structure:** Use appropriate heading levels (`<h2>`, `<h3>`, etc.) inside cards
- **Color contrast:** All text meets WCAG AA standards
- **Focus management:** Interactive cards should have focus indicators

---

## Common Patterns

### Feature Card

```jsx
<Card variant="elevated">
  <h3 style={{ 
    fontFamily: 'var(--font-heading)', 
    color: 'var(--color-bronze)',
    marginBottom: 'var(--space-4)'
  }}>
    Research
  </h3>
  <p style={{ marginBottom: 'var(--space-4)' }}>
    Deep policy analysis and evidence-based recommendations
  </p>
  <a href="/research" style={{ color: 'var(--color-bronze)' }}>
    Learn more →
  </a>
</Card>
```

### Team Member Card

```jsx
<Card>
  <img 
    src="/team/person.jpg" 
    alt="Team member" 
    style={{ 
      width: '100%', 
      borderRadius: 'var(--radius-md)',
      marginBottom: 'var(--space-4)'
    }} 
  />
  <h4 style={{ 
    fontFamily: 'var(--font-heading)',
    marginBottom: 'var(--space-2)'
  }}>
    Jane Doe
  </h4>
  <p style={{ color: 'var(--light-text-muted)' }}>
    Senior Researcher
  </p>
</Card>
```

---

## Created

- **Date:** 2026-01-03
- **Agent:** Claude
- **Version:** 1.0.0
- **Dependencies:** `react`

---

## Notes

- Lightweight component with no external dependencies beyond React
- Transition animation provides smooth hover effects (when interactive)
- Composable — nest other components inside for rich card layouts
- Works with framer-motion if wrapped (see examples in codebase)

---

## Future Enhancements

- [ ] Interactive variant with hover effects
- [ ] Header/footer slot props
- [ ] Image variant with image background
- [ ] Clickable card variant (entire card is link)
- [ ] Loading skeleton state

---

## See Also

- [`shared/design-system/README.md`](../../design-system/README.md) — Design token reference
- [`.rules/10-react-standards.md`](../../../.rules/10-react-standards.md) — Component patterns
- [`ARCHITECTURE.md`](../../../ARCHITECTURE.md) — Component architecture


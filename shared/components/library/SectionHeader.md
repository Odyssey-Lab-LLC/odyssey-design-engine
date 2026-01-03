# SectionHeader Component

Centered section heading with optional subtitle.

---

## Purpose

Provides a consistent, centered header for content sections. Used to introduce new sections on a page with a title and optional descriptive subtitle.

---

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | Yes | - | Section title |
| `subtitle` | string | No | - | Optional subtitle/description |
| `dark` | boolean | No | `false` | Use dark zone styling |

---

## Usage

### Basic Usage

```jsx
import { SectionHeader } from '@shared/components/library/SectionHeader';

<SectionHeader title="Our Services" />
```

### With Subtitle

```jsx
<SectionHeader 
  title="Our Approach" 
  subtitle="How we tackle complex policy challenges"
/>
```

### Dark Zone

```jsx
<section className="zone-dark">
  <SectionHeader 
    title="Exploration Phase" 
    subtitle="Discovering unknown territory"
    dark={true}
  />
</section>
```

---

## Design Tokens Used

- **Title color:** `--color-bronze` (light) / `--color-gold` (dark)
- **Subtitle color:** `--light-text-muted` (light) / `--dark-text-muted` (dark)
- **Title font:** `--font-heading`
- **Subtitle font:** `--font-body`
- **Title size:** `--text-4xl` (36px)
- **Subtitle size:** `--text-lg` (18px)
- **Title weight:** `--font-semibold`
- **Spacing:** `--space-4` (title-subtitle gap), `--space-12` (bottom margin)

---

## Layout

- **Alignment:** Center-aligned text
- **Max width:** 800px (for optimal readability)
- **Margins:** Auto horizontal margins for centering
- **Bottom spacing:** `--space-12` (48px) to separate from content below

---

## Variants

### Light Zone (Default)
- Bronze title color
- Muted text for subtitle
- Default for client-facing sections

### Dark Zone (`dark={true}`)
- Gold title color
- Lighter muted text for subtitle
- For exploration, mystery, depth sections

---

## Accessibility

- **Semantic HTML:** Uses `<h2>` for title (adjust heading level if needed in your context)
- **Subtitle:** Uses `<p>` tag
- **Color contrast:** All text meets WCAG AA standards
- **Line height:** 1.2 for headings, 1.6 for body text (readability)

---

## Created

- **Date:** 2026-01-03
- **Agent:** Claude
- **Version:** 1.0.0
- **Dependencies:** `react`

---

## Notes

- Lightweight component with no external dependencies beyond React
- Heading level is fixed at `<h2>` — wrap in context where `<h2>` is appropriate
- Max-width prevents very long lines (optimal reading width)
- Center alignment works best with full-width sections

---

## Common Patterns

### Services Section

```jsx
<section>
  <SectionHeader 
    title="What We Do" 
    subtitle="Research, analysis, and strategic guidance for policy leaders"
  />
  {/* Service cards or content */}
</section>
```

### Team Section

```jsx
<section>
  <SectionHeader 
    title="Our Team" 
    subtitle="Experts in policy, research, and strategic innovation"
  />
  {/* Team member cards */}
</section>
```

### Dark Zone Section

```jsx
<section className="zone-dark" style={{ padding: 'var(--space-20) 0' }}>
  <SectionHeader 
    title="The Unknown" 
    subtitle="Where possibility lives"
    dark={true}
  />
  {/* Content */}
</section>
```

---

## Future Enhancements

- [ ] Heading level prop (h1, h2, h3, etc.)
- [ ] Size variants (small, medium, large)
- [ ] Alignment prop (left, center, right)
- [ ] Decorative element (line, icon, etc.)
- [ ] Animation prop (fade-in, slide-up)
- [ ] Custom className support

---

## See Also

- [`shared/design-system/README.md`](../../design-system/README.md) — Design token reference
- [`.rules/10-react-standards.md`](../../../.rules/10-react-standards.md) — Component patterns
- [`ARCHITECTURE.md`](../../../ARCHITECTURE.md) — Component architecture


# Button Component

Clickable button with variants and animation.

---

## Purpose

Standard button component for actions, navigation, and form submissions. Provides consistent styling and behavior across the application.

---

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `label` | string | Yes | - | Button text |
| `onClick` | function | Yes | - | Click handler |
| `variant` | string | No | `'primary'` | Style variant: `'primary'`, `'secondary'`, `'outline'` |
| `disabled` | boolean | No | `false` | Disabled state |
| `dark` | boolean | No | `false` | Use dark zone styling |
| `icon` | ReactNode | No | `null` | Optional icon (from lucide-react) |

---

## Usage

### Primary Button

```jsx
import { Button } from '@shared/components/library/Button';

<Button 
  label="Get Started" 
  onClick={() => navigate('/start')}
  variant="primary"
/>
```

### Secondary Button

```jsx
<Button 
  label="Learn More" 
  onClick={() => navigate('/about')}
  variant="secondary"
/>
```

### Outline Button

```jsx
<Button 
  label="Contact Us" 
  onClick={() => navigate('/contact')}
  variant="outline"
/>
```

### With Icon

```jsx
import { ArrowRight } from 'lucide-react';

<Button 
  label="Continue" 
  onClick={handleContinue}
  icon={<ArrowRight size={20} />}
/>
```

### Disabled

```jsx
<Button 
  label="Submit" 
  onClick={handleSubmit}
  disabled={!formValid}
/>
```

### Dark Zone

```jsx
<section className="zone-dark">
  <Button 
    label="Explore" 
    onClick={handleExplore}
    dark={true}
  />
</section>
```

---

## Design Tokens Used

### Primary Variant
- **Background:** `--color-bronze` (light) / `--color-gold` (dark)
- **Text:** `#FFFFFF`

### Secondary Variant
- **Background:** `--light-bg-panel` (light) / `--dark-bg-elevated` (dark)
- **Text:** `--light-text-primary` (light) / `--dark-text-primary` (dark)
- **Border:** `--light-border-strong` (light) / `--dark-border-medium` (dark)

### Outline Variant
- **Background:** Transparent
- **Text:** `--color-bronze` (light) / `--color-gold` (dark)
- **Border:** `--color-bronze` (light) / `--color-gold` (dark)

### Common
- **Padding:** `--space-4` (vertical), `--space-6` (horizontal)
- **Border radius:** `--radius-md`
- **Typography:** `--font-body`, `--text-base`, `--font-medium`
- **Icon gap:** `--space-2`

---

## Variants

### primary
Solid background with brand color. Use for primary actions (submit, continue, get started).

### secondary
Lighter background with border. Use for secondary actions (cancel, back, learn more).

### outline
Transparent background with colored border. Use for tertiary actions or when button needs to be subtle.

---

## Animation

- **Hover:** Scale up to 1.05 (subtle grow)
- **Tap:** Scale down to 0.95 (pressed effect)
- **Duration:** 0.2s for fast, responsive feel
- **Disabled:** No animation when disabled

---

## Accessibility

- **Semantic HTML:** Uses `<button>` element
- **Disabled state:** Uses `disabled` attribute
- **Cursor:** Changes to `not-allowed` when disabled
- **Focus:** Browser default focus indicators
- **Click handler:** Disabled buttons don't trigger onClick

---

## Created

- **Date:** 2026-01-03
- **Agent:** Claude
- **Version:** 1.0.0
- **Dependencies:** `react`, `framer-motion`

---

## Notes

- Icon should be from `lucide-react` for consistency
- Icon size typically 20px for `--text-base` buttons
- Animation uses framer-motion for smooth interactions
- Works as standalone or within forms

---

## Common Patterns

### Call-to-Action Button

```jsx
<Button 
  label="Start Your Journey" 
  onClick={() => navigate('/onboarding')}
  variant="primary"
  icon={<Compass size={20} />}
/>
```

### Form Submit Button

```jsx
<Button 
  label="Submit Application" 
  onClick={handleSubmit}
  variant="primary"
  disabled={!isFormValid}
/>
```

### Cancel Button

```jsx
<Button 
  label="Cancel" 
  onClick={handleCancel}
  variant="secondary"
/>
```

---

## Future Enhancements

- [ ] Size variants (small, medium, large)
- [ ] Loading state with spinner
- [ ] Full width variant
- [ ] Icon-only variant
- [ ] Link variant (looks like button, behaves like link)
- [ ] Button group component
- [ ] Custom className support

---

## See Also

- [`shared/design-system/README.md`](../../design-system/README.md) — Design token reference
- [`.rules/10-react-standards.md`](../../../.rules/10-react-standards.md) — Component patterns
- [`lucide-react` documentation](https://lucide.dev/) — Icon library


# Odyssey Lab Design System

Design tokens and global styles for the Odyssey Design Engine.

**Version:** 0.3  
**Source:** `_workspace/claude-odyssey-design-system-project/_system/SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md`

---

## Quick Start

### 1. Import GlobalStyles

Add to your root component (typically `App.jsx` or `main.jsx`):

```javascript
import { GlobalStyles } from '@shared/design-system/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      {/* Your app content */}
    </>
  );
}
```

### 2. Use CSS Variables

In your components, reference tokens via CSS custom properties:

```javascript
<div style={{
  color: 'var(--color-bronze)',
  padding: 'var(--space-6)',
  borderRadius: 'var(--radius-md)'
}}>
  Content
</div>
```

### 3. Or Import JS Tokens

For programmatic access:

```javascript
import { colors, spacing, typography } from '@shared/design-system/tokens';

const styles = {
  color: colors.bronze,
  padding: spacing['6'],
  fontFamily: typography.fonts.heading
};
```

---

## Token Categories

### Colors

**Brand Core:**
- `--color-bronze`, `--color-bronze-light`, `--color-bronze-dark`
- `--color-gold`, `--color-gold-muted`
- `--color-lab-blue`, `--color-lab-blue-electric`, `--color-lab-blue-light`, `--color-lab-blue-dark`

**Light Zone:**
- Backgrounds: `--light-bg-body`, `--light-bg-card`, `--light-bg-panel`
- Text: `--light-text-primary`, `--light-text-secondary`, `--light-text-muted`
- Borders: `--light-border-subtle`, `--light-border-strong`, `--light-border-accent`

**Dark Zone:**
- Backgrounds: `--dark-bg-deep`, `--dark-bg-panel`, `--dark-bg-elevated`
- Text: `--dark-text-primary`, `--dark-text-secondary`, `--dark-text-muted`
- Borders: `--dark-border-subtle`, `--dark-border-medium`, `--dark-border-accent`

**Semantic:**
- `--color-success`, `--color-warning`, `--color-error`, `--color-info`

### Typography

**Families:**
- `--font-heading`: 'Cinzel', serif (for headings)
- `--font-body`: 'Inter', sans-serif (for body text)
- `--font-mono`: 'JetBrains Mono', monospace (for code)

**Sizes (8px scale):**
- `--text-xs` through `--text-6xl`
- Examples: `--text-base` (16px), `--text-2xl` (24px), `--text-5xl` (48px)

**Weights:**
- `--font-light` (300), `--font-normal` (400), `--font-medium` (500), `--font-semibold` (600), `--font-bold` (700)

### Spacing (8px Grid System)

- `--space-1` (4px) through `--space-24` (96px)
- Common: `--space-4` (16px), `--space-6` (24px), `--space-8` (32px)

### Border Radius

- `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (12px), `--radius-xl` (16px), `--radius-full` (pills/circles)

### Shadows

- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`

### Motion

**Durations:**
- `--duration-fast` (0.2s) — Hover, small changes
- `--duration-base` (0.3s) — Most animations
- `--duration-slow` (0.5s) — Page transitions

**Easings:**
- `--ease-in`, `--ease-out`, `--ease-in-out`

### Z-Index

- `--z-base` (1), `--z-dropdown` (1000), `--z-sticky` (1100), `--z-fixed` (1200), `--z-overlay` (1300), `--z-modal` (1400), `--z-popover` (1500), `--z-tooltip` (1600)

---

## Zone System

The Odyssey design system uses **Light** and **Dark** zones for different contexts:

### Light Zone (Primary)

**Purpose:** Clarity, known territory, client-facing content

**Usage:** Proposals, reports, external documents, landing pages

**Style:**
```jsx
<section className="zone-light">
  {/* Content styled with light zone tokens */}
</section>
```

### Dark Zone (Supplemental)

**Purpose:** Mystery, unknown territory, depth, reflection

**Usage:** Internal quests, portals, threshold moments, exploration sections

**Philosophy:** Not evil/negative — the unknown holds possibility

**Style:**
```jsx
<section className="zone-dark">
  {/* Content styled with dark zone tokens */}
</section>
```

### Zone Transitions

Use framer-motion for smooth transitions:

```jsx
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="zone-dark"
>
  {/* Content */}
</motion.section>
```

---

## Usage Patterns

### Heading with Brand Color

```jsx
<h1 style={{
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-5xl)',
  color: 'var(--color-bronze)',
  marginBottom: 'var(--space-6)'
}}>
  Odyssey Policy Lab
</h1>
```

### Card Component

```jsx
<div style={{
  backgroundColor: 'var(--light-bg-card)',
  padding: 'var(--space-6)',
  borderRadius: 'var(--radius-lg)',
  boxShadow: 'var(--shadow-md)',
  border: '1px solid var(--light-border-subtle)'
}}>
  <h3 style={{
    fontFamily: 'var(--font-heading)',
    color: 'var(--light-text-primary)',
    marginBottom: 'var(--space-4)'
  }}>
    Card Title
  </h3>
  <p style={{ color: 'var(--light-text-muted)' }}>
    Card content
  </p>
</div>
```

### Button with Animation

```jsx
import { motion } from 'framer-motion';

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
  style={{
    backgroundColor: 'var(--color-bronze)',
    color: 'white',
    padding: 'var(--space-4) var(--space-6)',
    borderRadius: 'var(--radius-md)',
    border: 'none',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    cursor: 'pointer'
  }}
>
  Click Me
</motion.button>
```

---

## Extension Protocol

### When You Need a Token That Doesn't Exist

1. **Check if it should exist:** Review full token spec
2. **Use closest existing token:** Prefer existing over new
3. **If truly needed, propose extension:**

```markdown
## 🎨 Design Token Extension Proposal

**Context:** [What you're building]

**Missing token:** `--color-new-token`

**Rationale:** [Why existing tokens don't work]

**Proposed value:** `#HEXCODE`

**Usage:** [Where it will be used]

**Awaiting approval**
```

4. **Document in completion report**

### Adding Approved Tokens

If a token extension is approved:

1. Add to `tokens.js` (JavaScript export)
2. Add to `GlobalStyles.jsx` (CSS variable)
3. Document here in README
4. Note in handoff/report

---

## Component Patterns

Common component patterns using design system tokens:

### Accordion

- Title: `--font-heading`, `--text-2xl`, `--color-bronze`
- Content padding: `--space-6`
- Border: `2px solid var(--color-bronze)`

### Section Header

- Centered text: `text-align: center`
- Title color: `--color-bronze` (light zone) or `--color-gold` (dark zone)
- Margin bottom: `--space-12`

### Hero Section

- Full viewport or contained
- Background gradient or solid
- Large typography: `--text-5xl` or `--text-6xl`
- Zone-appropriate styling

---

## Rules

**From `.rules/10-design-system.md`:**

- ✅ **MUST** use design tokens (no hardcoded values)
- ✅ **MUST** load token spec before building UI
- ❌ **NEVER** hardcode colors (`#B48E55` → use `var(--color-bronze)`)
- ❌ **NEVER** hardcode spacing (`23px` → use `var(--space-6)`)
- ❌ **NEVER** hardcode typography (`'Cinzel'` → use `var(--font-heading)`)

---

## Files

- **`tokens.js`** — JavaScript exports for programmatic access
- **`GlobalStyles.jsx`** — CSS variables component (import at root)
- **`README.md`** — This file (usage guide)

---

## Source

Full specification: `_workspace/claude-odyssey-design-system-project/_system/SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md`

This is a 1660-line comprehensive spec. The files in this directory extract the core, most-used tokens for implementation.

---

## See Also

- [`.rules/10-design-system.md`](../../.rules/10-design-system.md) — Design system enforcement rules
- [`ARCHITECTURE.md`](../../ARCHITECTURE.md) — Design system architecture
- [`shared/components/library/`](../components/library/) — Component library using these tokens


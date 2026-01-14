# Odyssey Design System Standards

## Overview

Rules for using the Odyssey Design System tokens, patterns, and component architecture.

---

## Related Rules

**Extension & Prototypes:** See `.rules/11-design-system-extensions.md` for guidance on:
- When sites can extend or override these base tokens
- Prototype protection during migration
- Component extraction timing

---

## Core Principle: Token-First Development

**Rule:** MUST load and reference the design token specification before building or modifying any UI components.

**Exception:** Rising Ink demos (`sites/rising-ink/demos`) may ship with hardcoded values for speed. See `.rules/11-design-system-extensions.md` for scope and constraints.

### Token Specification Location

**Authoritative Source:**
```
_workspace/claude-odyssey-design-system-project/_system/SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md
```

**Implementation:**
```
shared/design-system/tokens.js          // JavaScript token exports
shared/design-system/GlobalStyles.jsx   // CSS variable definitions
shared/design-system/README.md          // Usage documentation
```

### Before Building UI

1. **Read token spec** (`SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md`)
2. **Check existing tokens** in `shared/design-system/tokens.js`
3. **Use tokens, not hardcoded values**
4. **If token missing** → Follow extension protocol (see below)

---

## Color System

### No Hardcoded Colors

❌ **Never do this:**
```javascript
<div style={{ backgroundColor: '#B48E55' }}>...</div>
<div style={{ color: '#1E3A8A' }}>...</div>
```

✅ **Always do this:**
```javascript
<div style={{ backgroundColor: 'var(--color-bronze)' }}>...</div>
<div style={{ color: 'var(--color-odyssey-blue)' }}>...</div>
```

### Rising Ink Demo Exception (Speed-First)

For **Rising Ink demos only** (`sites/rising-ink/demos`), hardcoded colors, spacing, and typography are allowed to ship quickly. This exception does **not** apply to:
- `shared/` components or design system files
- Other `sites/` outside Rising Ink demos
- Any reusable component intended for the library

When this exception is used, document it in the completion report and plan for later standardization.

### Core Color Tokens

**Bronze Palette:**
```css
--color-bronze: #B48E55
--color-bronze-light: #C9A76D
--color-bronze-dark: #8B6B3D
```

**Gold Palette:**
```css
--color-gold: #D4AF37
--color-gold-light: #E6C35C
--color-gold-dark: #B8941F
```

**Odyssey Lab Blue:**
```css
--color-odyssey-blue: #1E3A8A
--color-odyssey-blue-light: #3B5BA5
--color-odyssey-blue-dark: #0F2557
```

**Neutrals:**
```css
--color-charcoal: #2C2C2C
--color-warm-white: #F5F5F0
--color-soft-gray: #E5E5E0
```

### Zone-Specific Colors

**Light Zone:**
```css
--light-bg-primary: var(--color-warm-white)
--light-text-primary: var(--color-charcoal)
--light-border-subtle: rgba(0, 0, 0, 0.1)
--light-accent: var(--color-bronze)
```

**Dark Zone:**
```css
--dark-bg-primary: var(--color-charcoal)
--dark-text-primary: var(--color-warm-white)
--dark-border-subtle: rgba(255, 255, 255, 0.1)
--dark-accent: var(--color-gold)
```

---

## Typography System

### Font Families

**Headings (Cinzel):**
```css
--font-heading: 'Cinzel', serif
```

**Body (Inter):**
```css
--font-body: 'Inter', sans-serif
```

**Mono (JetBrains Mono):**
```css
--font-mono: 'JetBrains Mono', monospace
```

### Font Sizes

**Scale (8px base):**
```css
--text-xs: 0.75rem    /* 12px */
--text-sm: 0.875rem   /* 14px */
--text-base: 1rem     /* 16px */
--text-lg: 1.125rem   /* 18px */
--text-xl: 1.25rem    /* 20px */
--text-2xl: 1.5rem    /* 24px */
--text-3xl: 1.875rem  /* 30px */
--text-4xl: 2.25rem   /* 36px */
--text-5xl: 3rem      /* 48px */
--text-6xl: 3.75rem   /* 60px */
```

### Usage Examples

```javascript
// ✅ Good
<h1 style={{ 
  fontFamily: 'var(--font-heading)', 
  fontSize: 'var(--text-5xl)',
  color: 'var(--color-bronze)'
}}>
  Odyssey Policy Lab
</h1>

<p style={{ 
  fontFamily: 'var(--font-body)', 
  fontSize: 'var(--text-base)',
  color: 'var(--light-text-primary)'
}}>
  Body content here
</p>
```

---

## Spacing System

### 8px Grid System

```css
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-5: 1.25rem   /* 20px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-10: 2.5rem   /* 40px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
--space-24: 6rem     /* 96px */
```

### Component Spacing

```javascript
// ✅ Good (token-based spacing)
<div style={{ 
  padding: 'var(--space-6)',
  marginBottom: 'var(--space-8)',
  gap: 'var(--space-4)'
}}>
  {children}
</div>

// ❌ Bad (arbitrary values)
<div style={{ 
  padding: '23px',
  marginBottom: '35px'
}}>
  {children}
</div>
```

---

## Zone System

### Light Zone (Default)

**Characteristics:**
- Warm white background (#F5F5F0)
- Dark text (#2C2C2C)
- Bronze accents
- Subtle borders

```javascript
// ✅ Good (light zone styling)
<section className="zone-light" style={{
  backgroundColor: 'var(--light-bg-primary)',
  color: 'var(--light-text-primary)',
  borderTop: '1px solid var(--light-border-subtle)'
}}>
  {children}
</section>
```

### Dark Zone

**Characteristics:**
- Charcoal background (#2C2C2C)
- Warm white text (#F5F5F0)
- Gold accents
- Subtle light borders

```javascript
// ✅ Good (dark zone styling)
<section className="zone-dark" style={{
  backgroundColor: 'var(--dark-bg-primary)',
  color: 'var(--dark-text-primary)',
  borderTop: '1px solid var(--dark-border-subtle)'
}}>
  {children}
</section>
```

### Zone Transitions

**Smooth transitions between zones:**

```javascript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="zone-transition"
>
  {/* Zone content */}
</motion.div>
```

---

## Component Patterns

### Card Components

**Token-based card styling:**

```javascript
export const Card = ({ children, variant = 'default', elevated = false }) => {
  const styles = {
    padding: 'var(--space-6)',
    borderRadius: 'var(--radius-md)',
    backgroundColor: variant === 'dark' 
      ? 'var(--dark-bg-primary)' 
      : 'var(--light-bg-primary)',
    color: variant === 'dark'
      ? 'var(--dark-text-primary)'
      : 'var(--light-text-primary)',
    border: `1px solid ${variant === 'dark' 
      ? 'var(--dark-border-subtle)' 
      : 'var(--light-border-subtle)'}`,
    boxShadow: elevated ? 'var(--shadow-lg)' : 'var(--shadow-sm)'
  };
  
  return <div style={styles}>{children}</div>;
};
```

### Accordion Components

**Odyssey accordion styling:**

```javascript
// Title styling
const titleStyle = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'var(--text-2xl)',
  color: 'var(--color-bronze)',
  marginBottom: 'var(--space-2)'
};

// Content padding
const contentStyle = {
  paddingLeft: 'var(--space-6)',
  paddingTop: 'var(--space-4)',
  borderLeft: '2px solid var(--color-bronze)'
};
```

### Section Headers

**Consistent section headers:**

```javascript
export const SectionHeader = ({ title, subtitle, zone = 'light' }) => {
  const styles = {
    textAlign: 'center',
    marginBottom: 'var(--space-12)',
    color: zone === 'dark' ? 'var(--dark-text-primary)' : 'var(--light-text-primary)'
  };
  
  const titleStyles = {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--text-4xl)',
    marginBottom: 'var(--space-2)',
    color: zone === 'dark' ? 'var(--color-gold)' : 'var(--color-bronze)'
  };
  
  return (
    <div style={styles}>
      <h2 style={titleStyles}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
```

---

## Border Radius

```css
--radius-sm: 0.25rem   /* 4px */
--radius-md: 0.5rem    /* 8px */
--radius-lg: 0.75rem   /* 12px */
--radius-xl: 1rem      /* 16px */
--radius-full: 9999px  /* Pills/circles */
```

---

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15)
```

---

## Motion Tokens

### Animation Durations

```css
--duration-fast: 0.2s    /* Hover, small changes */
--duration-base: 0.3s    /* Most animations */
--duration-slow: 0.5s    /* Page transitions */
```

### Easing Functions

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
```

### Usage with Framer Motion

```javascript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 0.3, // var(--duration-base) value
    ease: 'easeOut' // matches --ease-out
  }}
>
  {children}
</motion.div>
```

---

## Extension Protocol

### When You Need a Token That Doesn't Exist

**Step 1: Check if token SHOULD exist**
- Review full token spec
- Check if similar token exists
- Consider if it's truly needed or just convenience

**Step 2: Use closest existing token**
- Prefer existing tokens over creating new ones
- Maintain consistency

**Step 3: If truly needed, propose extension**

```markdown
## 🎨 Design Token Extension Proposal

**Context:** Building notification banner component

**Missing token:** `--color-warning-amber`

**Rationale:** 
- Need warning state distinct from bronze/gold
- Amber fits Odyssey warm palette
- Will be reused in alerts, toasts, validation

**Proposed value:** `#F59E0B` (amber-500 equivalent)

**Awaiting approval before implementing**
```

**Step 4: Document extension**
- Add to `shared/design-system/README.md`
- Note in completion report
- Consider updating token spec

---

## Component Slot Architecture

### What Are Slots?

Slots are designated areas within components where content can be inserted with specific styling.

### Example: Card with Slots

```javascript
export const Card = ({ 
  header,    // Slot: Header content
  children,  // Slot: Main content
  footer,    // Slot: Footer content
  variant = 'default' 
}) => {
  return (
    <div className={`card card-${variant}`}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

// Usage
<Card
  header={<h3>Card Title</h3>}
  footer={<Button>Learn More</Button>}
>
  Main content here
</Card>
```

---

## New Component Flagging

### When Creating New Components

**Rule:** When building a component that MIGHT be reusable, flag it for review.

### Flagging Syntax

Add comment to component file:

```javascript
/**
 * NotificationBanner Component
 * 
 * @NEW_COMPONENT — Candidate for shared component library
 * 
 * Usage: Alert-style banners for important messages
 * Reusability: High (used in 3+ places already)
 * Design tokens: Uses --color-bronze, --space-4
 * 
 * Recommendation: Promote to shared/components/library/
 */
export const NotificationBanner = ({ ... }) => {
  // Implementation
};
```

### In Handoff/Report

```markdown
## 🆕 New Components Created

**NotificationBanner** (`sites/odyssey-lab/src/components/NotificationBanner.jsx`)
- **Purpose:** Alert-style banners for announcements
- **Reusability:** High (used on 3 pages)
- **Status:** Candidate for promotion to library
- **Recommendation:** Extract to `shared/components/library/` with documentation
```

---

## Validation Checklist

Before committing UI components:

- [ ] No hardcoded colors (all use CSS variables)
- [ ] No arbitrary spacing values (all use --space-* tokens)
- [ ] Typography uses --font-* and --text-* tokens
- [ ] Zone-appropriate styling (light vs dark)
- [ ] Border radius uses --radius-* tokens
- [ ] Shadows use --shadow-* tokens
- [ ] Animations use standard durations
- [ ] Component documented (if reusable)
- [ ] New tokens proposed (if needed)

---

## Common Violations

### ❌ Hardcoded Hex Colors

```javascript
// BAD
<div style={{ color: '#B48E55' }}>Text</div>

// GOOD
<div style={{ color: 'var(--color-bronze)' }}>Text</div>
```

### ❌ Arbitrary Spacing

```javascript
// BAD
<div style={{ padding: '23px', margin: '17px' }}>...</div>

// GOOD
<div style={{ padding: 'var(--space-6)', margin: 'var(--space-4)' }}>...</div>
```

### ❌ Inline Font Definitions

```javascript
// BAD
<h1 style={{ fontFamily: 'Cinzel, serif', fontSize: '48px' }}>Title</h1>

// GOOD
<h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-5xl)' }}>Title</h1>
```

### ❌ Non-Standard Animation Timing

```javascript
// BAD
<motion.div transition={{ duration: 0.37 }}>...</motion.div>

// GOOD
<motion.div transition={{ duration: 0.3 }}>...</motion.div>
```

---

## Design System Governance

### Single Source of Truth

```
SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md  ← Authoritative spec
    ↓ implements
shared/design-system/tokens.js                    ← JavaScript export
shared/design-system/GlobalStyles.jsx             ← CSS variables
    ↓ enforced by
.rules/10-design-system.md                        ← This file
```

### Updates and Versioning

**When token spec updates:**
1. Update source spec file (versioned name)
2. Regenerate `tokens.js` and `GlobalStyles.jsx`
3. Test existing components
4. Document breaking changes
5. Update this rule file if patterns change

---

## When These Rules Don't Apply

**For prototypes and experiments:** Sites in `sites/` can extend or override these tokens. See `.rules/11-design-system-extensions.md` for site sovereignty guidance.

**For migrations:** Don't force existing working code to conform during migration. Move AS-IS first, extract patterns later when proven reusable.

---

## See Also

- [`SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md`](_workspace/claude-odyssey-design-system-project/_system/SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md) — Full token specification
- [`shared/design-system/README.md`](../shared/design-system/README.md) — Usage guide
- [`.rules/10-react-standards.md`](./10-react-standards.md) — React component patterns
- [`.rules/11-design-system-extensions.md`](./11-design-system-extensions.md) — Extension and prototype protection
- [`ARCHITECTURE.md`](../ARCHITECTURE.md) — Component library structure

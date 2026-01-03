```yaml
---
type: SYSTEM
status: Active
version: 0.1
tags: [design-tokens, brand, visual-language, AI-agent, CSS, components]
usage: "PRIMARY reference for all Odyssey Lab visual builds. AI agents MUST load this file before generating any HTML/CSS artifacts. Contains canonical tokens, component patterns, and agent directives."
---
```

# Odyssey Lab Unified Design System
## Token Documentation & Component Architecture v0.1

> **AI AGENT DIRECTIVE**: This document establishes the canonical design language for Odyssey Lab. When generating HTML/CSS artifacts, you MUST:
> 1. Use tokens defined herein â€” never hardcode values
> 2. Flag any new component patterns with `<!-- @NEW_COMPONENT: [name] -->`
> 3. Preserve all comments marked with `/* @PRESERVE */`
> 4. Extend token sets only when no existing token applies

---

## Table of Contents

1. [Agent Directives & Contract](#1-agent-directives--contract)
2. [Core Design Tokens](#2-core-design-tokens)
3. [Zone System: Light & Dark Modes](#3-zone-system-light--dark-modes)
4. [Typography System](#4-typography-system)
5. [Spacing & Layout](#5-spacing--layout)
6. [Component Library](#6-component-library)
7. [Extension Protocol](#7-extension-protocol)
8. [Implementation Examples](#8-implementation-examples)

---

## 1. Agent Directives & Contract

### 1.1 Preserved Comment Markers

AI coding agents have a tendency to strip comments during iteration. The following markers establish a **contractual obligation** to retain specific comments.

```css
/* @PRESERVE â€” Token definition, do not remove */
/* @AGENT-NOTE: [context] â€” Contextual note for AI continuity */
/* @EXTEND-POINT: [token-category] â€” Valid extension location */
/* @DEPRECATED: [reason] â€” Scheduled for removal, do not use */
```

**Rule**: Any comment containing `@PRESERVE`, `@AGENT-NOTE`, `@EXTEND-POINT`, or `@DEPRECATED` MUST be retained through all iterations.

### 1.2 New Component Flagging

When content requirements necessitate a component not defined in this system:

```html
<!-- @NEW_COMPONENT: [ComponentName]
     @RATIONALE: [Why existing components don't fit]
     @TOKENS_USED: [List of design tokens applied]
     @ZONE: [light|dark|transitional]
-->
```

**Rule**: AI agents MUST include this flag when creating novel component patterns. This enables systematic review and potential promotion to the canonical library.

### 1.3 Token Override Protocol

If a specific context requires deviation from standard tokens:

```css
/* @OVERRIDE: [token-name]
   @REASON: [Specific justification]
   @SCOPE: [Where this override applies]
   @RESTORE: [When to revert to standard] */
.specific-context {
  --override-value: #custom;
}
```

### 1.4 Build Verification Checklist

Before delivering any artifact, AI agents should verify:

- [ ] All color values reference CSS custom properties (no hardcoded hex/rgb)
- [ ] Typography uses defined font stacks and scale tokens
- [ ] Spacing uses 8px grid tokens
- [ ] New patterns are flagged per 1.2
- [ ] Preserved comments retained
- [ ] Zone transitions (if any) use defined protocols

---

## 2. Core Design Tokens

### 2.1 Color Palette â€” Canonical Tokens

```css
/* @PRESERVE â€” Odyssey Lab Master Color Tokens */
:root {
  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     BRAND CORE â€” These colors are identity-level, rarely extended
     â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  
  /* @PRESERVE â€” Primary Brand Bronze/Gold (The Odyssey Journey) */
  --color-bronze: #B48E55;
  --color-bronze-light: #C9A76D;
  --color-bronze-dark: #8B6B3D;
  --color-gold: #D4AF37;
  --color-gold-muted: #A68A2E;
  
  /* @PRESERVE â€” Lab Blue (The Laboratory/Innovation) */
  --color-lab-blue: #38BDF8;
  --color-lab-blue-light: #7DD3FC;
  --color-lab-blue-dark: #0EA5E9;
  
  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     ZONE: DARK (The Unknown / Mystery / Potential)
     Primary mode for internal docs, quests, portal experiences
     â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  
  /* @PRESERVE â€” Dark Zone Backgrounds */
  --dark-bg-deep: #0F172A;           /* Primary canvas */
  --dark-bg-panel: #1E293B;          /* Elevated surfaces */
  --dark-bg-elevated: #334155;       /* Cards, modals */
  --dark-bg-overlay: rgba(15, 23, 42, 0.95);
  
  /* @PRESERVE â€” Dark Zone Text */
  --dark-text-primary: #F8FAFC;      /* Headlines, emphasis */
  --dark-text-secondary: #E2E8F0;    /* Body copy */
  --dark-text-muted: #94A3B8;        /* Captions, metadata */
  --dark-text-subtle: #64748B;       /* Disabled, hints */
  
  /* @PRESERVE â€” Dark Zone Borders & Dividers */
  --dark-border-subtle: rgba(255, 255, 255, 0.1);
  --dark-border-medium: rgba(255, 255, 255, 0.2);
  --dark-border-accent: var(--color-bronze);
  
  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     ZONE: LIGHT (The Known / Clarity / Client-Facing)
     Primary mode for proposals, reports, external documents
     â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  
  /* @PRESERVE â€” Light Zone Backgrounds */
  --light-bg-primary: #FFFDF7;       /* Warm white canvas */
  --light-bg-panel: #FDF6E3;         /* Elevated surfaces */
  --light-bg-elevated: #FFFFFF;      /* Cards, modals */
  --light-bg-muted: #F5F0E6;         /* Section backgrounds */
  
  /* @PRESERVE â€” Light Zone Text */
  --light-text-primary: #1C1917;     /* Headlines */
  --light-text-secondary: #44403C;   /* Body copy */
  --light-text-muted: #78716C;       /* Captions, metadata */
  --light-text-subtle: #A8A29E;      /* Disabled, hints */
  
  /* @PRESERVE â€” Light Zone Borders & Dividers */
  --light-border-subtle: rgba(28, 25, 23, 0.1);
  --light-border-medium: rgba(28, 25, 23, 0.2);
  --light-border-accent: var(--color-bronze);
  
  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     SEMANTIC COLORS â€” Functional meanings
     â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  
  /* @PRESERVE â€” Status Colors */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: var(--color-lab-blue);
  
  /* @PRESERVE â€” Interactive States */
  --color-focus-ring: var(--color-lab-blue);
  --color-hover-overlay: rgba(255, 255, 255, 0.05);
  
  /* @EXTEND-POINT: semantic-colors */
}
```

### 2.2 Color Application Rules

| Context | Dark Zone Token | Light Zone Token |
|---------|-----------------|------------------|
| Page background | `--dark-bg-deep` | `--light-bg-primary` |
| Card/Panel background | `--dark-bg-panel` | `--light-bg-panel` |
| Primary text | `--dark-text-primary` | `--light-text-primary` |
| Body text | `--dark-text-muted` | `--light-text-secondary` |
| Accent (action) | `--color-lab-blue` | `--color-lab-blue-dark` |
| Accent (brand) | `--color-bronze` | `--color-bronze` |
| Borders | `--dark-border-subtle` | `--light-border-subtle` |

---

## 3. Zone System: Light & Dark Modes

### 3.1 Zone Philosophy

Odyssey Lab's visual language draws from the hero's journey metaphor:

- **Dark Zone**: The unknown, the unexplored, mystery and potential. Used for internal experiences, quests, immersive narratives, portal/threshold moments.
- **Light Zone**: The known, clarity, safety. Used for client-facing materials, reports, proposals, documentation.
- **Transitional**: Where journeys begin or end. Hero sections, zone shifts, threshold moments.

### 3.2 Zone Declaration

```css
/* @PRESERVE â€” Zone System Classes */

/* Dark Zone (default for internal/quest content) */
.zone-dark {
  --bg-primary: var(--dark-bg-deep);
  --bg-panel: var(--dark-bg-panel);
  --bg-elevated: var(--dark-bg-elevated);
  --text-primary: var(--dark-text-primary);
  --text-secondary: var(--dark-text-secondary);
  --text-muted: var(--dark-text-muted);
  --border-subtle: var(--dark-border-subtle);
  --border-medium: var(--dark-border-medium);
  
  background-color: var(--bg-primary);
  color: var(--text-secondary);
}

/* Light Zone (default for client-facing content) */
.zone-light {
  --bg-primary: var(--light-bg-primary);
  --bg-panel: var(--light-bg-panel);
  --bg-elevated: var(--light-bg-elevated);
  --text-primary: var(--light-text-primary);
  --text-secondary: var(--light-text-secondary);
  --text-muted: var(--light-text-muted);
  --border-subtle: var(--light-border-subtle);
  --border-medium: var(--light-border-medium);
  
  background-color: var(--bg-primary);
  color: var(--text-secondary);
}
```

### 3.3 Zone Transitions

For pages that shift between zones (threshold moments, journey progressions):

```css
/* @PRESERVE â€” Zone Transition Patterns */

/* Gradient fade between zones */
.zone-transition-gradient {
  background: linear-gradient(
    to bottom,
    var(--dark-bg-deep) 0%,
    var(--dark-bg-panel) 30%,
    var(--light-bg-muted) 70%,
    var(--light-bg-primary) 100%
  );
  min-height: 40vh;
}

/* Hard break with decorative threshold */
.zone-threshold {
  position: relative;
  height: 4px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    var(--color-bronze) 20%,
    var(--color-gold) 50%,
    var(--color-bronze) 80%,
    transparent 100%
  );
  margin: var(--space-16) 0;
}

/* Atmospheric blur transition */
.zone-blur-bridge {
  backdrop-filter: blur(20px);
  background: rgba(128, 128, 128, 0.1);
  padding: var(--space-12) 0;
}
```

---

## 4. Typography System

### 4.1 Font Stack Tokens

```css
/* @PRESERVE â€” Typography Font Stacks */
:root {
  /* Display/Heading â€” Cinzel for mythic/epic quality */
  --font-display: 'Cinzel', 'Trajan Pro', 'Times New Roman', serif;
  
  /* Body â€” Inter for modern readability */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Mono â€” JetBrains Mono for technical/data */
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  
  /* @AGENT-NOTE: Load these from Google Fonts in this order */
  /* Cinzel: 400, 500, 600, 700 */
  /* Inter: 300, 400, 500, 600 */
  /* JetBrains Mono: 400, 500 */
}
```

### 4.2 Type Scale

```css
/* @PRESERVE â€” Typography Scale (Major Third â€” 1.25 ratio) */
:root {
  --text-xs: 0.75rem;      /* 12px â€” Fine print, labels */
  --text-sm: 0.875rem;     /* 14px â€” Captions, metadata */
  --text-base: 1rem;       /* 16px â€” Body copy */
  --text-lg: 1.125rem;     /* 18px â€” Lead paragraphs */
  --text-xl: 1.25rem;      /* 20px â€” Section intros */
  --text-2xl: 1.5rem;      /* 24px â€” H4 */
  --text-3xl: 2rem;        /* 32px â€” H3 */
  --text-4xl: 2.5rem;      /* 40px â€” H2 */
  --text-5xl: 3rem;        /* 48px â€” H1 */
  --text-6xl: 4rem;        /* 64px â€” Hero display */
  
  /* @EXTEND-POINT: type-scale */
}
```

### 4.3 Typography Compositions

```css
/* @PRESERVE â€” Typography Utility Classes */

/* Headings â€” Cinzel display font */
.heading-hero {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, var(--text-6xl));
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.heading-1 {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.heading-2 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 400;
  line-height: 1.25;
}

.heading-3 {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 500;
  line-height: 1.3;
}

.heading-4 {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 500;
  line-height: 1.35;
}

/* Eyebrow/Preheader â€” Mono technical feel */
.eyebrow {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-bronze);
}

/* Body text */
.body-lg {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 300;
  line-height: 1.8;
}

.body-base {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  line-height: 1.7;
}

/* Technical/Data */
.mono-label {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 400;
  letter-spacing: 0.02em;
}
```

---

## 5. Spacing & Layout

### 5.1 Spacing Scale

```css
/* @PRESERVE â€” Spacing Scale (8px base grid) */
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  
  /* @EXTEND-POINT: spacing */
}
```

### 5.2 Layout Tokens

```css
/* @PRESERVE â€” Layout Constraints */
:root {
  /* Container widths */
  --container-xs: 480px;
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-content: 800px;  /* Optimal reading width */
  
  /* Section spacing */
  --section-gap: var(--space-32);
  --section-gap-compact: var(--space-16);
  
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-glow-bronze: 0 0 20px rgba(180, 142, 85, 0.3);
  --shadow-glow-blue: 0 0 20px rgba(56, 189, 248, 0.3);
}
```

### 5.3 Container Pattern

```css
/* @PRESERVE â€” Standard Container */
.container {
  max-width: var(--container-content);
  margin-inline: auto;
  padding-inline: var(--space-6);
}

.container-wide {
  max-width: var(--container-lg);
  margin-inline: auto;
  padding-inline: var(--space-6);
}
```

---

## 6. Component Library

### 6.1 Component Architecture Philosophy

Components are **form-first, content-agnostic**. A "Card" is a surface pattern, not "Feature Card" or "Team Card." Content slots are modular.

**Component Anatomy**:
```
[Component]
â”œâ”€â”€ Base structure (required)
â”œâ”€â”€ Slots (optional content zones)
â”‚   â”œâ”€â”€ eyebrow
â”‚   â”œâ”€â”€ heading
â”‚   â”œâ”€â”€ subheading
â”‚   â”œâ”€â”€ body
â”‚   â”œâ”€â”€ media
â”‚   â”œâ”€â”€ actions
â”‚   â””â”€â”€ footer
â””â”€â”€ Variants (modifier classes)
```

### 6.2 Hero Section

```css
/* @PRESERVE â€” Hero Component */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: var(--space-16) var(--space-6);
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: var(--container-md);
}

/* Hero visual elements */
.hero__portal-ring {
  position: absolute;
  width: 60vw;
  height: 60vw;
  max-width: 600px;
  max-height: 600px;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  animation: pulse 4s infinite ease-in-out;
  pointer-events: none;
  z-index: 0;
}

.hero__portal-ring::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: var(--radius-full);
  background: conic-gradient(from 0deg, transparent, var(--color-bronze), transparent);
  opacity: 0.3;
  animation: spin 10s linear infinite;
}

/* Zone-specific hero treatments */
.zone-dark .hero__portal-ring {
  border-color: var(--dark-border-subtle);
}

.zone-light .hero__portal-ring {
  border-color: var(--light-border-medium);
  background: conic-gradient(from 0deg, transparent, var(--color-gold), transparent);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

### 6.3 Card Component

```css
/* @PRESERVE â€” Card Base Component */
.card {
  background: var(--bg-panel);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  position: relative;
  overflow: hidden;
}

/* Card slots */
.card__eyebrow {
  @extend .eyebrow;
  margin-bottom: var(--space-2);
}

.card__heading {
  @extend .heading-4;
  margin-bottom: var(--space-4);
}

.card__body {
  @extend .body-base;
  color: var(--text-muted);
}

.card__actions {
  margin-top: var(--space-6);
  display: flex;
  gap: var(--space-4);
}

/* Card variants */
.card--elevated {
  background: var(--bg-elevated);
  box-shadow: var(--shadow-lg);
}

.card--accent-top {
  border-top: 3px solid var(--color-bronze);
}

.card--glow {
  box-shadow: var(--shadow-glow-bronze);
}

.card--glow-blue {
  box-shadow: var(--shadow-glow-blue);
}

/* Feature card (visioneer-style) */
.card--feature {
  text-align: center;
  background: linear-gradient(135deg, var(--bg-panel) 0%, var(--bg-primary) 100%);
}

.card--feature::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-lab-blue), transparent);
}
```

### 6.4 Quote/Callout Component

```css
/* @PRESERVE â€” Quote Component */
.quote {
  border-left: 3px solid var(--color-bronze);
  background: linear-gradient(to right, rgba(180, 142, 85, 0.1), transparent);
  padding: var(--space-6);
  margin: var(--space-8) 0;
  font-style: italic;
}

.quote__text {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: 1.7;
  color: var(--text-secondary);
}

.quote__attribution {
  display: block;
  margin-top: var(--space-4);
  font-style: normal;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-bronze);
}

/* Quote variants */
.quote--blue {
  border-color: var(--color-lab-blue);
  background: linear-gradient(to right, rgba(56, 189, 248, 0.1), transparent);
}

.quote--centered {
  border-left: none;
  border-top: 3px solid var(--color-bronze);
  border-bottom: 3px solid var(--color-bronze);
  text-align: center;
}
```

### 6.5 HUD Grid Component

```css
/* @PRESERVE â€” HUD Grid (Data Display) */
.hud-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-6);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-subtle);
  padding: var(--space-8);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-md);
}

.hud-item {
  border-left: 2px solid var(--color-lab-blue);
  padding-left: var(--space-4);
}

.hud-item__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-lab-blue);
  margin-bottom: var(--space-2);
}

.hud-item__value {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  color: var(--text-primary);
}

/* Light zone adaptation */
.zone-light .hud-grid {
  background: rgba(0, 0, 0, 0.02);
}
```

### 6.6 Timeline/Gantt Component

```css
/* @PRESERVE â€” Timeline Component */
.timeline {
  margin: var(--space-12) 0;
}

.timeline__row {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
  align-items: center;
}

.timeline__label {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-bronze);
  text-align: right;
}

.timeline__bar {
  height: 4px;
  background: var(--border-subtle);
  position: relative;
  border-radius: 2px;
}

.timeline__fill {
  position: absolute;
  height: 100%;
  background: var(--color-lab-blue);
  border-radius: 2px;
}

.timeline__fill--highlight {
  background: var(--color-gold);
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
}

.timeline__annotation {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: var(--text-sm);
  color: var(--text-primary);
}

@media (max-width: 600px) {
  .timeline__row {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }
  .timeline__label {
    text-align: left;
  }
}
```

### 6.7 Section Divider

```css
/* @PRESERVE â€” Section Dividers */
.divider {
  border: none;
  height: 1px;
  background: var(--border-subtle);
  margin: var(--space-16) 0;
}

.divider--accent {
  background: linear-gradient(
    90deg,
    transparent,
    var(--color-bronze),
    transparent
  );
}

.divider--thick {
  height: 3px;
}
```

### 6.8 Button Component

```css
/* @PRESERVE â€” Button Component */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  text-decoration: none;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn--primary {
  background: var(--color-bronze);
  color: white;
  border-color: var(--color-bronze);
}

.btn--primary:hover {
  background: var(--color-bronze-dark);
  border-color: var(--color-bronze-dark);
}

.btn--secondary {
  background: transparent;
  color: var(--color-bronze);
  border-color: var(--color-bronze);
}

.btn--secondary:hover {
  background: rgba(180, 142, 85, 0.1);
}

.btn--ghost {
  background: transparent;
  color: var(--text-muted);
  border-color: var(--border-subtle);
}

.btn--ghost:hover {
  border-color: var(--border-medium);
  color: var(--text-primary);
}
```

### 6.9 Component Slot Reference

| Component | Available Slots | Notes |
|-----------|-----------------|-------|
| Hero | eyebrow, heading, subheading, body, cta, visual | Visual = background element |
| Card | eyebrow, heading, subheading, body, media, actions, footer | Media = image/icon slot |
| Quote | text, attribution | â€” |
| HUD Grid | items[] (label, value) | Use for metrics/data |
| Timeline | rows[] (label, bar, annotation) | Bar width = percentage |
| Section | eyebrow, heading, body, children | Generic container |

---

## 7. Extension Protocol

### 7.1 When to Extend

Extensions are appropriate when:
- No existing token adequately represents the needed value
- The new value will be used 3+ times in the current artifact
- The extension follows existing naming conventions

### 7.2 Extension Syntax

```css
/* @EXTEND-POINT: colors */
:root {
  /* @NEW-TOKEN: Added [date] for [rationale] */
  --color-[category]-[variant]: #value;
}
```

### 7.3 Extension Categories

| Category | Naming Pattern | Example |
|----------|----------------|---------|
| Colors | `--color-[semantic]-[variant]` | `--color-success-light` |
| Spacing | `--space-[number]` | `--space-14` (56px) |
| Typography | `--text-[size-name]` | `--text-7xl` |
| Shadows | `--shadow-[intensity]` | `--shadow-xl` |
| Radii | `--radius-[size]` | `--radius-2xl` |

### 7.4 Component Extension

When creating a new component variant:

```css
/* @NEW_COMPONENT_VARIANT: card--testimonial
   @EXTENDS: card
   @RATIONALE: Need centered layout with avatar slot
   @TOKENS_USED: --space-8, --radius-full, --shadow-md
*/
.card--testimonial {
  text-align: center;
}

.card--testimonial .card__avatar {
  width: 80px;
  height: 80px;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-4);
}
```

---

## 8. Implementation Examples

### 8.1 Complete Dark Zone Page Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] | Odyssey Lab</title>
  
  <!-- @PRESERVE â€” Required Font Imports -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  
  <style>
    /* @PRESERVE â€” Odyssey Lab Design Tokens */
    :root {
      /* [Include full token set from Section 2] */
    }
    
    /* @PRESERVE â€” Zone Declaration */
    body {
      /* Default to dark zone */
      background-color: var(--dark-bg-deep);
      color: var(--dark-text-secondary);
      font-family: var(--font-body);
      line-height: 1.8;
      margin: 0;
      -webkit-font-smoothing: antialiased;
    }
    
    /* [Include component styles as needed] */
  </style>
</head>
<body class="zone-dark">
  
  <section class="hero">
    <div class="hero__portal-ring"></div>
    <div class="hero__content">
      <span class="eyebrow">[Eyebrow Text]</span>
      <h1 class="heading-hero">[Hero Headline]</h1>
      <p class="body-lg">[Hero subtext]</p>
    </div>
  </section>
  
  <section class="container">
    <!-- Content sections -->
  </section>
  
</body>
</html>
```

### 8.2 Zone Transition Example

```html
<!-- Dark zone content above -->
<section class="zone-dark">
  <!-- Dark content -->
</section>

<!-- Transition element -->
<div class="zone-threshold"></div>

<!-- Light zone content below -->
<section class="zone-light">
  <!-- Light content (client-specific, for example) -->
</section>
```

### 8.3 Responsive Breakpoints

```css
/* @PRESERVE â€” Responsive Breakpoints */
/* Mobile-first approach */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

---

## Appendix A: Token Quick Reference

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bronze` | #B48E55 | Primary brand accent |
| `--color-gold` | #D4AF37 | Highlight, emphasis |
| `--color-lab-blue` | #38BDF8 | Interactive, tech |
| `--dark-bg-deep` | #0F172A | Dark zone canvas |
| `--dark-bg-panel` | #1E293B | Dark zone surfaces |
| `--light-bg-primary` | #FFFDF7 | Light zone canvas |
| `--light-bg-panel` | #FDF6E3 | Light zone surfaces |

### Typography
| Class | Font | Size | Use |
|-------|------|------|-----|
| `.heading-hero` | Cinzel | clamp 2.5-4rem | Page titles |
| `.heading-2` | Cinzel | 2.5rem | Section heads |
| `.eyebrow` | JetBrains Mono | 0.75rem | Preheaders |
| `.body-lg` | Inter | 1.125rem | Lead paragraphs |
| `.mono-label` | JetBrains Mono | 0.875rem | Data labels |

### Spacing
| Token | Value | Usage |
|-------|-------|-------|
| `--space-4` | 1rem | Default padding |
| `--space-8` | 2rem | Card padding |
| `--space-16` | 4rem | Section margins |
| `--space-32` | 8rem | Major sections |

---

## Appendix B: AI Agent Checklist

Before delivering artifact:

```markdown
## Pre-Delivery Verification

### Token Compliance
- [ ] No hardcoded color values (all use `var(--token)`)
- [ ] Typography uses defined font stacks
- [ ] Spacing uses 8px grid tokens
- [ ] Border radii use defined tokens

### Comment Preservation
- [ ] All `@PRESERVE` comments retained
- [ ] All `@AGENT-NOTE` comments retained
- [ ] No `@DEPRECATED` tokens used

### Extension Compliance
- [ ] New tokens flagged with `@NEW-TOKEN`
- [ ] New components flagged with `@NEW_COMPONENT`
- [ ] Extensions follow naming conventions

### Zone Compliance
- [ ] Zone class applied to container (`zone-dark` or `zone-light`)
- [ ] Zone-specific tokens used appropriately
- [ ] Transitions use defined patterns

### Quality
- [ ] Responsive behavior verified
- [ ] Animations use subtle, performant properties
- [ ] Accessibility basics met (contrast, focus states)
```

---

**Document Version**: 0.1  
**Last Updated**: 2025-12-19  
**Maintainer**: Brandon / Odyssey Lab  
**AI Agent Compatibility**: Claude, Gemini, GPT-4+

<!-- @PRESERVE â€” End of Odyssey Lab Design System v0.1 -->

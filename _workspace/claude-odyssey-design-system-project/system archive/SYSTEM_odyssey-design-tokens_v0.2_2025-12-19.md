```yaml
---
type: SYSTEM
status: Active
version: 0.2
tags: [design-tokens, brand, visual-language, AI-agent, CSS, components, light-dark-zones]
usage: "PRIMARY reference for all Odyssey Lab visual builds. AI agents MUST load this file before generating any HTML/CSS artifacts. Contains canonical tokens, component patterns, zone philosophy, and agent directives."
changelog: "v0.2 â€” Added hero variants, guide presence modes, candidate pattern system, unified typography from both source artifacts"
---
```

# Odyssey Lab Unified Design System
## Token Documentation & Component Architecture v0.2

> **AI AGENT DIRECTIVE**: This document establishes the canonical design language for Odyssey Lab. When generating HTML/CSS artifacts, you MUST:
> 1. Use tokens defined herein â€” never hardcode values
> 2. Flag any new component patterns with `<!-- @NEW_COMPONENT: [name] -->`
> 3. Preserve all comments marked with `/* @PRESERVE */`
> 4. Extend token sets only when no existing token applies
> 5. **For Guide Presence Mode requests**: Initiate discourse before build (see Section 3.4)

---

## Table of Contents

1. [Agent Directives & Contract](#1-agent-directives--contract)
2. [Core Design Tokens](#2-core-design-tokens)
3. [Zone System: Light & Dark Philosophy](#3-zone-system-light--dark-philosophy)
4. [Typography System](#4-typography-system)
5. [Spacing & Layout](#5-spacing--layout)
6. [Component Library](#6-component-library)
7. [Hero Section Variants](#7-hero-section-variants)
8. [Extension Protocol](#8-extension-protocol)
9. [Cross-Agent Handoff Protocol](#9-cross-agent-handoff-protocol)
10. [Implementation Examples](#10-implementation-examples)

---

## 1. Agent Directives & Contract

### 1.1 Preserved Comment Markers

AI coding agents have a tendency to strip comments during iteration. The following markers establish a **contractual obligation** to retain specific comments.

```css
/* @PRESERVE â€” Token definition, do not remove */
/* @AGENT-NOTE: [context] â€” Contextual note for AI continuity */
/* @EXTEND-POINT: [token-category] â€” Valid extension location */
/* @DEPRECATED: [reason] â€” Scheduled for removal, do not use */
/* @CANDIDATE: [pattern-name] â€” New pattern for review, not yet canonical */
```

**Rule**: Any comment containing `@PRESERVE`, `@AGENT-NOTE`, `@EXTEND-POINT`, `@DEPRECATED`, or `@CANDIDATE` MUST be retained through all iterations.

### 1.2 New Component Flagging

When content requirements necessitate a component not defined in this system:

```html
<!-- @NEW_COMPONENT: [ComponentName]
     @RATIONALE: [Why existing components don't fit]
     @TOKENS_USED: [List of design tokens applied]
     @ZONE: [light|dark|transitional|client-specific]
     @CANDIDATE_FOR_PROMOTION: [yes|no]
-->
```

**Rule**: AI agents MUST include this flag when creating novel component patterns. This enables systematic review and potential promotion to the canonical library.

### 1.3 Build Conclusion Report

When completing a build (especially cross-agent handoffs from Gemini to Claude), include a conclusion block:

```html
<!-- @BUILD_REPORT
     @AGENT: [Claude|Gemini|GPT]
     @DATE: [ISO date]
     @NEW_PATTERNS_INTRODUCED:
       - [PatternName]: [Brief description]
     @TOKENS_EXTENDED:
       - [token-name]: [value] â€” [rationale]
     @DEVIATIONS_FROM_SYSTEM:
       - [Description of any intentional deviations]
     @RECOMMENDED_PROMOTIONS:
       - [Patterns worth adding to canonical system]
-->
```

### 1.4 Token Override Protocol

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

### 1.5 Build Verification Checklist

Before delivering any artifact, AI agents should verify:

- [ ] All color values reference CSS custom properties (no hardcoded hex/rgb)
- [ ] Typography uses defined font stacks and scale tokens
- [ ] Spacing uses 8px grid tokens
- [ ] New patterns are flagged per 1.2
- [ ] Preserved comments retained
- [ ] Zone transitions (if any) use defined protocols
- [ ] Hero section uses appropriate variant (not always full-viewport)
- [ ] Build conclusion report included for complex builds

---

## 2. Core Design Tokens

### 2.1 Color Palette â€” Canonical Tokens

```css
/* @PRESERVE â€” Odyssey Lab Master Color Tokens v0.2 */
:root {
  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     BRAND CORE â€” Identity-level colors, rarely extended
     â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  
  /* @PRESERVE â€” Primary Brand Bronze/Gold (The Journey) */
  --color-bronze: #B48E55;
  --color-bronze-light: #C9A76D;
  --color-bronze-dark: #8B6B3D;
  --color-gold: #D4AF37;
  --color-gold-muted: #A68A2E;
  
  /* @PRESERVE â€” Lab Blue (Innovation/Technology) 
     Note: Two variants exist for zone-appropriate contrast */
  --color-lab-blue: #38BDF8;        /* Sky blue â€” better on dark */
  --color-lab-blue-electric: #2563EB; /* Electric blue â€” better on light */
  --color-lab-blue-light: #7DD3FC;
  --color-lab-blue-dark: #0EA5E9;
  
  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     ZONE: LIGHT (Primary â€” Clarity, Known, Client-Facing)
     Default for proposals, reports, external documents
     â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  
  /* @PRESERVE â€” Light Zone Backgrounds */
  --light-bg-body: #F5F5F7;          /* Cool neutral canvas */
  --light-bg-warm: #FFFDF7;          /* Warm white (alternate) */
  --light-bg-card: #FFFFFF;          /* Cards, elevated surfaces */
  --light-bg-panel: #FDF6E3;         /* Subtle warmth panels */
  --light-bg-muted: #F8FAFC;         /* Section backgrounds */
  --light-bg-highlight: linear-gradient(135deg, #F8FAFC, #EFF6FF);
  
  /* @PRESERVE â€” Light Zone Text */
  --light-text-primary: #0F172A;     /* Deep navy â€” headlines */
  --light-text-secondary: #1C1917;   /* Near-black body */
  --light-text-muted: #475569;       /* Slate â€” body copy */
  --light-text-subtle: #78716C;      /* Captions, metadata */
  
  /* @PRESERVE â€” Light Zone Borders */
  --light-border-subtle: #E2E8F0;
  --light-border-strong: #CBD5E1;
  --light-border-accent: var(--color-bronze);
  
  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     ZONE: DARK (Supplemental â€” Mystery, Unknown, Depth)
     For internal quests, portals, threshold moments, reflection
     Philosophy: Not evil/negative â€” the unknown holds possibility
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
  
  /* @PRESERVE â€” Dark Zone Borders */
  --dark-border-subtle: rgba(255, 255, 255, 0.1);
  --dark-border-medium: rgba(255, 255, 255, 0.2);
  --dark-border-accent: var(--color-bronze);
  
  /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
     SEMANTIC COLORS â€” Functional meanings (zone-agnostic)
     â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
  
  /* @PRESERVE â€” Status Colors */
  --color-success: #22C55E;
  --color-success-light: #4ADE80;
  --color-warning: #F59E0B;
  --color-warning-light: #FCD34D;
  --color-error: #EF4444;
  --color-error-light: #F87171;
  --color-info: var(--color-lab-blue);
  
  /* @EXTEND-POINT: semantic-colors */
}
```

### 2.2 Color Application Rules

| Context | Light Zone Token | Dark Zone Token |
|---------|------------------|-----------------|
| Page background | `--light-bg-body` | `--dark-bg-deep` |
| Card background | `--light-bg-card` | `--dark-bg-panel` |
| Primary text | `--light-text-primary` | `--dark-text-primary` |
| Body text | `--light-text-muted` | `--dark-text-muted` |
| Accent (interactive) | `--color-lab-blue-electric` | `--color-lab-blue` |
| Accent (brand) | `--color-bronze` | `--color-bronze` |
| Borders | `--light-border-subtle` | `--dark-border-subtle` |

---

## 3. Zone System: Light & Dark Philosophy

### 3.1 Conceptual Foundation

Odyssey Lab's visual language draws from the Taoist concept of complementary forces and the hero's journey metaphor:

**Light Zone** (Primary)
- **Represents**: The known, clarity, safety, guidance, client-facing
- **Use for**: Proposals, reports, documentation, external communications
- **Energy**: Active, present, grounded
- **Default state for most artifacts**

**Dark Zone** (Supplemental)
- **Represents**: The unknown, mystery, potential, reflection, depth
- **Use for**: Internal quests, portal/threshold moments, immersive narratives, things to consider/avoid
- **Energy**: Contemplative, questioning, emergent
- **Not negative** â€” the unknown holds possibility alongside danger
- **Philosophy**: Left-hand path in Taoist sense â€” integrated, misunderstood-not-evil, part of the whole

### 3.2 Zone Declaration Classes

```css
/* @PRESERVE â€” Zone System Classes v0.2 */

/* Light Zone (default for client-facing/external) */
.zone-light {
  --bg-body: var(--light-bg-body);
  --bg-card: var(--light-bg-card);
  --bg-panel: var(--light-bg-panel);
  --bg-muted: var(--light-bg-muted);
  --text-primary: var(--light-text-primary);
  --text-secondary: var(--light-text-muted);
  --text-muted: var(--light-text-subtle);
  --border-subtle: var(--light-border-subtle);
  --border-strong: var(--light-border-strong);
  --accent-blue: var(--color-lab-blue-electric);
  
  background-color: var(--bg-body);
  color: var(--text-secondary);
}

/* Dark Zone (supplemental for internal/quest content) */
.zone-dark {
  --bg-body: var(--dark-bg-deep);
  --bg-card: var(--dark-bg-panel);
  --bg-panel: var(--dark-bg-elevated);
  --bg-muted: var(--dark-bg-panel);
  --text-primary: var(--dark-text-primary);
  --text-secondary: var(--dark-text-muted);
  --text-muted: var(--dark-text-subtle);
  --border-subtle: var(--dark-border-subtle);
  --border-strong: var(--dark-border-medium);
  --accent-blue: var(--color-lab-blue);
  
  background-color: var(--bg-body);
  color: var(--text-secondary);
}
```

### 3.3 Zone Transitions

For pages that shift between zones (threshold moments, journey progressions):

```css
/* @PRESERVE â€” Zone Transition Patterns */

/* Gradient fade between zones (top-to-bottom) */
.zone-transition-gradient {
  background: linear-gradient(
    to bottom,
    var(--dark-bg-deep) 0%,
    var(--dark-bg-panel) 30%,
    var(--light-bg-muted) 70%,
    var(--light-bg-body) 100%
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

### 3.4 Guide Presence Modes (CONCEPTUAL â€” Requires Agent Discourse)

> âš ï¸ **STATUS: CONCEPTUAL** â€” These patterns are not yet standardized. Before implementing, the coding agent MUST initiate discourse with the user to confirm approach.

When Odyssey Lab serves as "guide" for a client/audience presentation, there are varying degrees of guide presence:

#### Mode A: Guide Frame (Odyssey Intro/Outro Only)
- Odyssey visual language bookends the document
- Middle sections allow total deviation for client/audience-specific content
- Client zone has its own visual language, colors, treatment

#### Mode B: Guide Commentary (Odyssey as Aside)
- Predominantly client/audience visual language
- Odyssey language appears as boxed comments, asides, or callout elements
- Like marginalia or expert commentary

#### Mode C: Embedded Client Zones (Odyssey Primary)
- Predominantly Odyssey visual language
- Client-specific content appears in designated zones
- Could be full-width sections or contained cards
- Clear visual distinction marking "this is client representation"

#### Mode D: Interleaved (Alternating Zones)
- Intentional rhythm between guide and client zones
- Zone transitions mark perspective shifts
- Most complex to execute well

**Agent Discourse Requirement**:
Before building any Guide Presence Mode artifact, the agent should:
1. Confirm which mode (A/B/C/D) is appropriate
2. Discuss the degree of Odyssey brand prominence desired
3. Identify what visual language applies to client zones
4. Establish transition patterns between zones

```html
<!-- @GUIDE_PRESENCE_MODE
     @MODE: [A|B|C|D]
     @ODYSSEY_PROMINENCE: [high|medium|low]
     @CLIENT_ZONE_TREATMENT: [description]
     @DISCOURSE_CONFIRMED: [yes â€” date]
-->
```

---

## 4. Typography System

### 4.1 Font Stack Tokens (Unified)

```css
/* @PRESERVE â€” Typography Font Stacks (Unified from both sources) */
:root {
  /* Display/Heading â€” Cinzel for mythic/epic quality */
  --font-display: 'Cinzel', 'Trajan Pro', 'Times New Roman', serif;
  
  /* Body â€” Inter for modern readability */
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* Technical/Data â€” JetBrains Mono for code and metrics */
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
}

/* @AGENT-NOTE: Required Google Fonts import */
/* 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
*/
```

### 4.2 Type Scale

```css
/* @PRESERVE â€” Typography Scale (Major Third â€” 1.25 ratio) */
:root {
  --text-xs: 0.75rem;      /* 12px â€” Fine print, labels */
  --text-sm: 0.875rem;     /* 14px â€” Captions, metadata */
  --text-base: 1rem;       /* 16px â€” Body copy */
  --text-lg: 1.05rem;      /* ~17px â€” Slightly emphasized body */
  --text-xl: 1.125rem;     /* 18px â€” Lead paragraphs */
  --text-2xl: 1.25rem;     /* 20px â€” H4, section intros */
  --text-3xl: 1.5rem;      /* 24px â€” H3 */
  --text-4xl: 1.8rem;      /* ~29px â€” H2 */
  --text-5xl: 2.5rem;      /* 40px â€” H1 */
  --text-6xl: 3.5rem;      /* 56px â€” Hero display */
  --text-hero: clamp(2.5rem, 5vw, 3.5rem); /* Responsive hero */
  
  /* @EXTEND-POINT: type-scale */
}
```

### 4.3 Typography Utility Classes

```css
/* @PRESERVE â€” Typography Utility Classes */

/* === HEADINGS === */

/* Hero â€” Maximum impact */
.heading-hero {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

/* Light zone hero variant â€” gradient text */
.zone-light .heading-hero {
  background: linear-gradient(45deg, #0F172A, #334155);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Dark zone hero variant â€” subtle gradient */
.zone-dark .heading-hero {
  background: linear-gradient(to right, #F8FAFC, #94A3B8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.heading-1 {
  font-family: var(--font-display);
  font-size: var(--text-5xl);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.01em;
  text-transform: uppercase; /* Light zone convention */
}

.heading-2 {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
}

/* H2 underline accent */
.heading-2::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 60px;
  height: 3px;
  background: var(--accent-blue, var(--color-lab-blue-electric));
}

/* Dark zone H2 â€” border-bottom variant */
.zone-dark .heading-2 {
  border-bottom: 1px solid var(--color-bronze);
  padding-bottom: 0.5rem;
}
.zone-dark .heading-2::after {
  display: none;
}

.heading-3 {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: var(--text-2xl);
  line-height: 1.35;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

/* H3 prefix marker â€” light zone */
.zone-light .heading-3::before {
  content: '//';
  font-family: var(--font-mono);
  color: var(--color-bronze);
  font-size: 0.9em;
}

/* H3 prefix marker â€” dark zone */
.zone-dark .heading-3 {
  font-family: var(--font-body);
  font-weight: 600;
  color: var(--color-bronze);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.zone-dark .heading-3::before {
  display: none;
}

.heading-4 {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 500;
  line-height: 1.4;
}

/* === BODY TEXT === */

.body-lg {
  font-family: var(--font-body);
  font-size: var(--text-xl);
  font-weight: 300;
  line-height: 1.8;
}

.body-base {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: 400;
  line-height: 1.7;
}

/* === SPECIAL TEXT === */

/* Eyebrow/Preheader â€” Technical feel */
.eyebrow {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-bronze);
}

/* Technical label */
.mono-label {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 400;
  letter-spacing: 0.02em;
}

/* Metadata display */
.meta-label {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  color: var(--accent-blue);
  display: block;
  margin-bottom: 0.25rem;
}

.meta-value {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-primary);
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
  --container-lg: 900px;      /* Primary content width */
  --container-xl: 1024px;
  --container-2xl: 1280px;
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
  
  /* Shadows â€” Light zone */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.05);
  
  /* Shadows â€” Dark zone (glow effects) */
  --shadow-glow-bronze: 0 0 20px rgba(180, 142, 85, 0.3);
  --shadow-glow-blue: 0 0 20px rgba(56, 189, 248, 0.3);
  --shadow-glow-blue-electric: 0 0 15px rgba(37, 99, 235, 0.2);
}
```

### 5.3 Container Pattern

```css
/* @PRESERVE â€” Standard Containers */
.container {
  max-width: var(--container-lg);
  margin-inline: auto;
  padding-inline: var(--space-8);
}

.container-content {
  max-width: var(--container-content);
  margin-inline: auto;
  padding-inline: var(--space-6);
}

.container-wide {
  max-width: var(--container-xl);
  margin-inline: auto;
  padding-inline: var(--space-6);
}
```

### 5.4 Background Patterns

```css
/* @PRESERVE â€” Subtle Background Treatments */

/* Technical grid (light zone) */
.bg-grid-subtle {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* @EXTEND-POINT: background-patterns */
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

### 6.2 Header Badge

```css
/* @PRESERVE â€” Header Badge Component */
.header-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: var(--bg-card, white);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: var(--shadow-sm);
}

.zone-light .header-badge {
  color: var(--color-lab-blue-electric);
}

.zone-dark .header-badge {
  color: var(--color-bronze);
  background: transparent;
  border-color: var(--dark-border-subtle);
}
```

### 6.3 Meta Card (Metadata Display)

```css
/* @PRESERVE â€” Meta Card Component */
.meta-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-left: 4px solid var(--color-bronze);
  padding: var(--space-6);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--space-6);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  box-shadow: var(--shadow-md);
}

.meta-card__item {
  /* Individual metadata item */
}

.meta-card__item--full {
  grid-column: 1 / -1;
}
```

### 6.4 Card Component

```css
/* @PRESERVE â€” Card Base Component */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: var(--space-8);
  position: relative;
  overflow: hidden;
}

/* Card variants */
.card--elevated {
  box-shadow: var(--shadow-lg);
}

.card--accent-left {
  border-left: 4px solid var(--color-bronze);
}

.card--accent-top {
  border-top: 3px solid var(--accent-blue);
}

.card--interactive {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card--interactive:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

/* Feature card (visioneer-style) â€” dark zone */
.zone-dark .card--feature {
  text-align: center;
  background: linear-gradient(135deg, var(--dark-bg-panel) 0%, var(--dark-bg-deep) 100%);
  box-shadow: var(--shadow-glow-blue);
}
.zone-dark .card--feature::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-lab-blue), transparent);
}
```

### 6.5 Highlight Block (Executive Summary Style)

```css
/* @PRESERVE â€” Highlight Block Component */
.highlight-block {
  background: var(--light-bg-highlight);
  border: 1px solid var(--border-subtle);
  padding: var(--space-10);
  border-radius: var(--radius-md);
  margin: var(--space-12) 0;
  position: relative;
  overflow: hidden;
}

.highlight-block::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: var(--accent-blue);
}

/* Inner callout box */
.highlight-block__callout {
  margin-top: var(--space-8);
  background: var(--bg-card);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
  border: 1px dashed var(--border-strong);
}
```

### 6.6 Quote Component

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
}

.quote__attribution {
  display: block;
  margin-top: var(--space-4);
  font-style: normal;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-bronze);
}

/* Blue variant */
.quote--blue {
  border-color: var(--accent-blue);
  background: linear-gradient(to right, rgba(37, 99, 235, 0.08), transparent);
}
```

### 6.7 HUD Grid (Data Display)

```css
/* @PRESERVE â€” HUD Grid Component */
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

.zone-light .hud-grid {
  background: rgba(0, 0, 0, 0.02);
}

.hud-item {
  border-left: 2px solid var(--accent-blue);
  padding-left: var(--space-4);
}

.hud-item__label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-blue);
  margin-bottom: var(--space-2);
}

.hud-item__value {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  color: var(--text-primary);
}
```

### 6.8 Phase Stack (Timeline)

```css
/* @PRESERVE â€” Phase Stack Component (Light Zone) */
.phase-stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  margin: var(--space-12) 0;
}

.phase-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
}

.phase-card__marker {
  background: var(--light-text-primary);
  color: white;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: var(--space-4) 0;
  flex-shrink: 0;
}

.phase-card__content {
  padding: var(--space-8);
  flex: 1;
}

/* Phase state variants */
.phase-card--active .phase-card__marker {
  background: var(--color-lab-blue-electric);
}

.phase-card--future .phase-card__marker {
  background: var(--color-bronze);
}
```

### 6.9 DNA Grid (Values Display)

```css
/* @PRESERVE â€” DNA Grid Component */
.dna-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

.dna-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  padding: var(--space-6);
  border-radius: var(--radius-sm);
}

.dna-card__title {
  font-family: var(--font-display);
  color: var(--accent-blue);
  font-weight: 600;
  margin-bottom: var(--space-2);
  display: block;
}

.dna-card--full {
  grid-column: 1 / -1;
}
```

### 6.10 Dual Triumvirate (Org Diagram)

```css
/* @PRESERVE â€” Dual Triumvirate Component */
.dual-tri-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  margin: var(--space-8) 0;
}

@media (max-width: 768px) {
  .dual-tri-container {
    grid-template-columns: 1fr;
  }
}

.tri-box {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  padding: var(--space-8);
  border-radius: var(--radius-md);
  transition: transform 0.3s ease;
}

.tri-box:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.tri-header {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--accent-blue);
  margin-bottom: var(--space-4);
  text-align: center;
  border-bottom: 2px solid var(--bg-muted);
  padding-bottom: var(--space-2);
}

.node-circle {
  width: 40px;
  height: 40px;
  background: var(--light-text-primary);
  color: white;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 700;
}

.node-circle--bridge {
  background: var(--color-bronze);
  box-shadow: 0 0 0 4px rgba(180, 142, 85, 0.2);
}
```

### 6.11 Honest Block (Dark Inversion)

```css
/* @PRESERVE â€” Honest Block (Dark zone within light page) */
.honest-block {
  background: var(--dark-bg-deep);
  color: var(--dark-text-secondary);
  padding: var(--space-12);
  border-radius: var(--radius-md);
  margin: var(--space-16) 0;
}

.honest-block h2,
.honest-block h3,
.honest-block h4 {
  color: var(--dark-text-primary);
}

.honest-block p,
.honest-block li {
  color: var(--dark-text-muted);
}

.honest-block strong {
  color: var(--color-bronze);
}
```

### 6.12 Button Component

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
  border-color: var(--border-strong);
  color: var(--text-primary);
}
```

---

## 7. Hero Section Variants

> **Critical**: Not all pages need full-viewport heroes. Select the appropriate variant based on content needs.

### 7.1 Hero Variant Decision Tree

| Content Type | Recommended Variant | Height |
|--------------|---------------------|--------|
| Portal/threshold moment | `hero--full` | 100vh |
| Immersive narrative | `hero--full` | 100vh |
| Major document (proposal, deck) | `hero--prominent` | 60-70vh |
| Standard report | `hero--compact` | auto (content-driven) |
| Utility page | `hero--minimal` | auto (padding only) |
| No attention-grab needed | No hero | N/A |

### 7.2 Hero Base & Variants

```css
/* @PRESERVE â€” Hero Component Variants */

/* Base hero structure */
.hero {
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

/* === VARIANT: Full Viewport (Portal/Threshold) === */
.hero--full {
  min-height: 100vh;
}

/* === VARIANT: Prominent (Major Documents) === */
.hero--prominent {
  min-height: 60vh;
  padding: var(--space-24) var(--space-6);
}

/* === VARIANT: Compact (Reports) === */
.hero--compact {
  min-height: auto;
  padding: var(--space-16) var(--space-6);
}

/* === VARIANT: Minimal (Utility Pages) === */
.hero--minimal {
  min-height: auto;
  padding: var(--space-12) var(--space-6);
  text-align: left;
  align-items: flex-start;
}

.hero--minimal .hero__content {
  max-width: 100%;
}
```

### 7.3 Hero Visual Elements

```css
/* @PRESERVE â€” Hero Visual Elements */

/* Portal ring (dark zone, full heroes) */
.hero__portal-ring {
  position: absolute;
  width: 60vw;
  height: 60vw;
  max-width: 600px;
  max-height: 600px;
  border: 1px solid var(--dark-border-subtle);
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

/* Light zone variant â€” sun/warmth */
.zone-light .hero__portal-ring {
  border-color: var(--light-border-strong);
}
.zone-light .hero__portal-ring::before {
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

---

## 8. Extension Protocol

### 8.1 When to Extend

Extensions are appropriate when:
- No existing token adequately represents the needed value
- The new value will be used 3+ times in the current artifact
- The extension follows existing naming conventions

### 8.2 Extension Syntax

```css
/* @EXTEND-POINT: [category] */
:root {
  /* @NEW-TOKEN: Added [date] for [rationale] */
  --[category]-[semantic]-[variant]: [value];
}
```

### 8.3 Extension Categories

| Category | Naming Pattern | Example |
|----------|----------------|---------|
| Colors | `--color-[semantic]-[variant]` | `--color-success-light` |
| Spacing | `--space-[number]` | `--space-14` (56px) |
| Typography | `--text-[size-name]` | `--text-7xl` |
| Shadows | `--shadow-[intensity]` | `--shadow-xl` |
| Radii | `--radius-[size]` | `--radius-2xl` |

### 8.4 Component Extension

When creating a new component variant:

```css
/* @NEW_COMPONENT_VARIANT: card--testimonial
   @EXTENDS: card
   @RATIONALE: Need centered layout with avatar slot
   @TOKENS_USED: --space-8, --radius-full, --shadow-md
   @CANDIDATE_FOR_PROMOTION: yes
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

## 9. Cross-Agent Handoff Protocol

### 9.1 Gemini â†’ Claude Handoff

Gemini excels at visual creation but may deviate from content/structure. For handoffs:

1. **Gemini Build Phase**:
   - Create with emergence allowed within token constraints
   - Document all new patterns with `@CANDIDATE` comments
   - Include inline comments on structural decisions
   - Generate `@BUILD_REPORT` at conclusion

2. **Claude Review Phase**:
   - Verify token compliance
   - Check content fidelity (Gemini may trim/bastardize copy)
   - Assess candidate patterns for promotion
   - Standardize any deviations
   - Rebuild to spec if necessary

### 9.2 Build Report Template

```html
<!-- @BUILD_REPORT
     @AGENT: Gemini
     @DATE: 2025-12-19
     @NEW_PATTERNS_INTRODUCED:
       - AccordionPanel: Collapsible content sections with bronze accent
       - FloatingNav: Fixed navigation with blur backdrop
     @TOKENS_EXTENDED:
       - --space-18: 4.5rem â€” Needed for asymmetric layout
     @DEVIATIONS_FROM_SYSTEM:
       - Used #3B82F6 instead of --color-lab-blue-electric (minor hue shift)
       - Hero is 80vh instead of defined variant (content-driven decision)
     @CONTENT_MODIFICATIONS:
       - Shortened intro paragraph from 3 sentences to 1
       - Reordered section 2 and 3
     @RECOMMENDED_PROMOTIONS:
       - AccordionPanel worth adding to component library
     @REQUIRES_CLAUDE_REVIEW:
       - Content fidelity check
       - Token standardization for blue value
-->
```

---

## 10. Implementation Examples

### 10.1 Light Zone Page Structure

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
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  
  <style>
    /* @PRESERVE â€” Odyssey Lab Design Tokens v0.2 */
    :root {
      /* [Include full token set from Section 2] */
    }
    
    /* Zone declaration */
    body {
      /* [Include zone-light variables] */
    }
  </style>
</head>
<body class="zone-light bg-grid-subtle">
  
  <!-- Hero: Select appropriate variant -->
  <section class="hero hero--prominent">
    <div class="hero__content">
      <div class="header-badge">
        <span>âœ¦</span> Odyssey Lab // [Context]
      </div>
      <h1 class="heading-hero">[Title]</h1>
      <p class="body-lg">[Subtitle]</p>
    </div>
  </section>
  
  <div class="container">
    <!-- Content sections -->
  </div>
  
</body>
</html>
```

### 10.2 Dark Zone Page Structure

```html
<body class="zone-dark">
  
  <section class="hero hero--full">
    <div class="hero__portal-ring"></div>
    <div class="hero__content">
      <span class="eyebrow">[Eyebrow]</span>
      <h1 class="heading-hero">[Title]</h1>
      <p class="body-lg">[Subtext]</p>
    </div>
  </section>
  
  <!-- Content -->
  
</body>
```

### 10.3 Zone Transition Example

```html
<!-- Dark zone content -->
<section class="zone-dark">
  <!-- Dark content -->
</section>

<!-- Transition element -->
<div class="zone-threshold"></div>

<!-- Light zone content -->
<section class="zone-light">
  <!-- Light/client content -->
</section>
```

### 10.4 Honest Block (Dark Inversion in Light Page)

```html
<body class="zone-light">
  <!-- Light content above -->
  
  <section class="honest-block">
    <h2>Why This Might Not Work</h2>
    <!-- Dark-styled content for candid assessment -->
  </section>
  
  <!-- Light content continues -->
</body>
```

---

## Appendix A: Token Quick Reference

### Colors
| Token | Hex | Zone | Usage |
|-------|-----|------|-------|
| `--color-bronze` | #B48E55 | Both | Primary brand accent |
| `--color-gold` | #D4AF37 | Both | Highlight, emphasis |
| `--color-lab-blue` | #38BDF8 | Dark | Interactive, tech |
| `--color-lab-blue-electric` | #2563EB | Light | Interactive, tech |
| `--light-bg-body` | #F5F5F7 | Light | Page canvas |
| `--light-bg-card` | #FFFFFF | Light | Cards, surfaces |
| `--dark-bg-deep` | #0F172A | Dark | Page canvas |
| `--dark-bg-panel` | #1E293B | Dark | Cards, surfaces |

### Typography
| Class | Font | Size | Use |
|-------|------|------|-----|
| `.heading-hero` | Cinzel | clamp 2.5-3.5rem | Page titles |
| `.heading-2` | Cinzel | 1.8rem | Section heads |
| `.eyebrow` | JetBrains Mono | 0.75rem | Preheaders |
| `.body-lg` | Inter | 1.125rem | Lead paragraphs |

### Hero Variants
| Variant | Height | Use Case |
|---------|--------|----------|
| `.hero--full` | 100vh | Portals, thresholds |
| `.hero--prominent` | 60vh | Major documents |
| `.hero--compact` | auto | Reports |
| `.hero--minimal` | auto | Utility pages |

---

## Appendix B: AI Agent Pre-Delivery Checklist

```markdown
## Pre-Delivery Verification

### Token Compliance
- [ ] No hardcoded color values (all use `var(--token)`)
- [ ] Typography uses defined font stacks
- [ ] Spacing uses 8px grid tokens
- [ ] Border radii use defined tokens
- [ ] Blue accent matches zone (electric for light, sky for dark)

### Comment Preservation
- [ ] All `@PRESERVE` comments retained
- [ ] All `@AGENT-NOTE` comments retained
- [ ] No `@DEPRECATED` tokens used
- [ ] New patterns marked with `@CANDIDATE`

### Hero Selection
- [ ] Hero variant matches content type (not always full-viewport)
- [ ] Visual elements zone-appropriate

### Zone Compliance
- [ ] Zone class applied to container
- [ ] Zone-specific tokens used appropriately
- [ ] Transitions use defined patterns
- [ ] Guide presence mode confirmed if applicable

### Content Fidelity (if handoff)
- [ ] Original content preserved (not trimmed/modified)
- [ ] Structure matches intent
- [ ] No unauthorized reordering

### Build Report
- [ ] `@BUILD_REPORT` included for complex builds
- [ ] New patterns documented
- [ ] Deviations explained
```

---

**Document Version**: 0.2  
**Last Updated**: 2025-12-19  
**Maintainer**: Brandon / Odyssey Lab  
**AI Agent Compatibility**: Claude, Gemini, GPT-4+

<!-- @PRESERVE â€” End of Odyssey Lab Design System v0.2 -->

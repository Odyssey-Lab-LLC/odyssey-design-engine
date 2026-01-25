---
type: SYSTEM
status: Active
version: 0.2
date: 2026-01-17
project: Rising Ink Tattoo Agency
derives_from: RESEARCH_REPORT_cross-ai-design-tokens-rising-ink_v1_2026-01-17.md
tags: [design-tokens, rising-ink, cross-ai, brand-system]
usage: "Core design token system for Rising Ink. Two-and-a-half layer architecture: strict tokens (enforced) + pattern layer (guidance) + emergence layer (AI freedom). Use for brand consistency across AI-generated designs."
---

# Rising Ink Design Token System v0.2

> **Purpose**: Brand consistency foundation. Tokens are the reusable system. Everything else is project-specific.

---

## ARCHITECTURE

**Three Layers**:
1. **Strict Tokens** - Machine-readable, enforced (colors, typography, spacing, shadows, motion)
2. **Pattern Layer** - Component guidance, references tokens (minimal, grows with validation)
3. **Emergence Layer** - AI creative freedom (brand principles, not rules)

**Critical Rule**: `$description` field in tokens is mandatory. Transforms values into brand decisions that AI interprets consistently.

---

## STRICT TOKENS

### Colors

```json
{
  "color": {
    "$type": "color",
    "dark": {
      "$value": "#333333",
      "$description": "Primary brand color - deep charcoal. Use for: body text on light, dark section backgrounds, primary UI elements."
    },
    "beige": {
      "$value": "#ECE9E2",
      "$description": "Warm paper background. Tattoo sketch paper aesthetic. Use for: main page background, card surfaces, light sections."
    },
    "red": {
      "$value": "#C1272D",
      "$description": "Accent red - the ink that demands attention. Bold, authentic. Use for: CTAs, link hovers, active states, accent borders."
    },
    "white": {
      "$value": "#FFFFFF",
      "$description": "Pure white. High contrast. Use for: text on dark backgrounds, card dividers, clean accents."
    }
  },
  "color-scale": {
    "$type": "color",
    "dark-400": { "$value": "#5C5C5C", "$description": "Mid-tone for secondary text" },
    "dark-600": { "$value": "#1A1A1A", "$description": "Near-black for deep backgrounds" },
    "red-400": { "$value": "#D94A4F", "$description": "Lighter red for hover states" },
    "red-600": { "$value": "#9A1F24", "$description": "Darker red for pressed states" },
    "beige-100": { "$value": "#F5F3EE", "$description": "Lightest beige for subtle elevation" },
    "beige-300": { "$value": "#DBD7CE", "$description": "Mid beige for borders, dividers" }
  }
}
```

**Pairing Rules**:
- `bg-dark` + `text-white` OR `bg-beige` + `text-dark`
- Primary CTA = `bg-red`, Secondary = `bg-dark` with `border-red`
- Hover = Red increases brightness (never darkens)

---

### Typography

```json
{
  "typography": {
    "headline": {
      "$type": "fontFamily",
      "$value": "'Lemon Milk', sans-serif",
      "$description": "Display font for all headings. Bold, distinctive, tattoo-industry appropriate. Use for: H1-H3, section titles, CTA text."
    },
    "body": {
      "$type": "fontFamily",
      "$value": "'Helvetica Neue', Helvetica, Arial, sans-serif",
      "$description": "Clean body text. Professional, readable. Use for: paragraphs, captions, form labels."
    }
  },
  "font-size": {
    "$type": "dimension",
    "xs": { "$value": "0.8rem" },
    "sm": { "$value": "0.875rem" },
    "base": { "$value": "1rem" },
    "lg": { "$value": "1.125rem" },
    "xl": { "$value": "1.25rem" },
    "2xl": { "$value": "1.5rem" },
    "3xl": { "$value": "1.875rem" },
    "4xl": { "$value": "2.25rem" },
    "5xl": { "$value": "3rem" },
    "6xl": { "$value": "3.75rem" }
  },
  "font-weight": {
    "$type": "number",
    "normal": { "$value": "400" },
    "medium": { "$value": "500" },
    "semibold": { "$value": "600" },
    "bold": { "$value": "700" },
    "black": { "$value": "900" }
  }
}
```

**Usage**:
- Headlines = Lemon Milk + bold/black weight
- Body = Helvetica Neue + normal/medium
- Hierarchy: H1 = 5xl/black, H2 = 3xl/bold, H3 = 2xl/bold

---

### Spacing

```json
{
  "spacing": {
    "$type": "dimension",
    "section": {
      "$value": "5rem",
      "$description": "Vertical padding between major page sections (80px). Creates breathing room."
    },
    "component": {
      "$value": "1.5rem",
      "$description": "Internal component padding (24px). Standard card/button padding."
    },
    "element": {
      "$value": "1rem",
      "$description": "Small gaps between elements (16px). Tight spacing for related items."
    },
    "micro": {
      "$value": "0.5rem",
      "$description": "Micro spacing (8px) for inline elements, tight grouping."
    }
  }
}
```

**8px Grid Foundation**: All spacing derives from 8px base unit.

**Responsive**: Section spacing scales down on mobile (5rem → 4rem → 3rem).

---

### Shadows

```json
{
  "shadow": {
    "$type": "shadow",
    "soft": {
      "$value": "0 2px 8px rgba(0, 0, 0, 0.08)",
      "$description": "Subtle elevation for cards at rest."
    },
    "medium": {
      "$value": "0 4px 16px rgba(0, 0, 0, 0.12)",
      "$description": "Hover state for cards, active elements."
    },
    "strong": {
      "$value": "0 8px 24px rgba(0, 0, 0, 0.16)",
      "$description": "Modal overlays, dropdown menus."
    }
  }
}
```

---

### Motion

```json
{
  "animation": {
    "duration-fast": {
      "$type": "duration",
      "$value": "150ms",
      "$description": "Quick transitions - hover states, micro-interactions"
    },
    "duration-normal": {
      "$type": "duration",
      "$value": "300ms",
      "$description": "Standard transitions - card hovers, button clicks"
    },
    "duration-slow": {
      "$type": "duration",
      "$value": "600ms",
      "$description": "Dramatic transitions - page load animations, reveals"
    },
    "easing-default": {
      "$type": "cubicBezier",
      "$value": [0.4, 0, 0.2, 1],
      "$description": "Material Design ease-in-out - smooth, professional"
    },
    "easing-bounce": {
      "$type": "cubicBezier",
      "$value": [0.34, 1.56, 0.64, 1],
      "$description": "Playful bounce - use sparingly for primary CTAs"
    }
  }
}
```

---

## PATTERN LAYER (Minimal)

### Card Pattern

```
Card = bg-beige + shadow-soft + p-component
  ├─ Title (font-headline text-2xl font-bold text-dark)
  ├─ Body (font-body text-base text-dark-400)
  └─ Optional CTA (text-red hover:text-red-400)

Hover: shadow-soft → shadow-medium + translate-y-[-4px]
```

---

### CTA Button Pattern

```
Button = bg-red + text-white + px-component py-element + rounded-md
  └─ Label (font-headline text-lg font-bold)

Hover: bg-red-400 + scale-105 + easing-bounce
```

---

## EMERGENCE LAYER

**Brand Principles** (AI Interprets):
- Bold but approachable (confident expertise, not intimidation)
- Authentic over trendy (tattoo culture, not generic agency)
- Professional permanence (art lasts lifetime, reflect gravity)

**Motion Philosophy**: Museum exhibit quality, not theme park spectacle. Subtle, enhances without distraction.

**Layout Freedom**: AI decides composition, grid asymmetry, whitespace density. Constraints: mobile-first, max 1280px width, 60-80 char line length.

---

## PROMOTION LOGIC

### When to Tokenize

| Occurrences | Action |
|-------------|--------|
| 1-2 times | Stay in emergence (natural language) |
| 3-4 times | Document as pattern (reference tokens) |
| 5+ times | Promote to strict token (enforce universally) |

**Example**: Red hover glow appears 3x → Add to pattern layer. Appears 5x → Add `--card-hover-glow` to tokens.

---

## VERSION STRATEGY

**Tagging**:
- v0.x = Initial implementations, learning phase
- v1.0 = Stable after 3+ projects validate patterns
- v1.x = Minor (new tokens, pattern additions)
- v2.0 = Breaking changes (token renames, architecture shifts)

**After Each Project**:
1. Audit token usage (which used? which ignored?)
2. Document new patterns (did emergent designs recur?)
3. Identify gaps (were values hardcoded?)
4. Update tokens, increment version

---

## ANTI-PATTERNS

**❌ Over-tokenizing layouts** - Kills creativity, creates generic designs. Keep structure in emergence layer.

**❌ Missing descriptions** - AI treats as arbitrary value, not brand decision.

**❌ Hardcoded values** - Breaks consistency. Always use token references.

**❌ Responsive tokens without context** - AI doesn't know when to use which value.

---

**Version**: 0.2  
**Date**: 2026-01-17  
**Next Review**: After first implementation + usage feedback

---

<!-- @PRESERVE — End of Rising Ink Design Token System v0.2 -->
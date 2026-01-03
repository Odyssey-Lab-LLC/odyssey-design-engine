# Odyssey Design System Standards

See `.rules/10-design-system.md` for complete design system rules.

## CRITICAL: Token-First Development

**MUST load design token spec before building UI:**
```
_workspace/claude-odyssey-design-system-project/_system/
SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md
```

## No Hardcoded Values

**Colors:**
- ❌ `color: '#B48E55'`
- ✅ `color: 'var(--color-bronze)'`

**Spacing:**
- ❌ `padding: '23px'`
- ✅ `padding: 'var(--space-6)'`

**Typography:**
- ❌ `fontFamily: 'Cinzel, serif'`
- ✅ `fontFamily: 'var(--font-heading)'`

## Key Token Categories

**Colors:** --color-bronze, --color-gold, --color-odyssey-blue, --color-charcoal, --color-warm-white

**Spacing:** --space-1 through --space-24 (8px grid system)

**Typography:** --font-heading, --font-body, --font-mono, --text-xs through --text-6xl

**Zone colors:** --light-bg-primary, --dark-bg-primary, --light-text-primary, --dark-text-primary

**Borders:** --radius-sm through --radius-full

**Shadows:** --shadow-sm through --shadow-xl

## Extension Protocol

If token doesn't exist:
1. Check if it should exist (review spec)
2. Use closest existing token
3. If truly needed, propose extension with rationale
4. Wait for approval

## New Component Flagging

Add comment to reusable components:
```javascript
/**
 * @NEW_COMPONENT — Candidate for shared library
 * Usage: [description]
 * Reusability: [High/Medium/Low]
 */
```

Read `.rules/10-design-system.md` for full token reference and patterns.


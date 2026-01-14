# Design System Extension & Prototype Protection

**See also:** `.rules/10-design-system.md` for base system token usage.

---

## Core Principle: Descriptive, Not Prescriptive

The Odyssey Design System is DESCRIPTIVE (documents what emerges) not PRESCRIPTIVE (forces conformity).

### What This Means

**shared/design-system/ is a BASE, not a prison:**
- Provides common tokens for WILLING adopters
- Sites and pages can extend, override, or customize as needed
- No forced imports during prototyping/exploration
- Emergence over enforcement

**Page and Site Sovereignty:**
- **Page-level**: Individual pages can have their own embedded GlobalStyles
- **Site-level**: Each site in `sites/` can have site-wide styles
- Custom animations, utilities, extensions are ALLOWED during exploration
- Experimentation is encouraged
- **Eventual convergence**: Sites will adopt base styles when patterns prove themselves

**Component extraction is opt-in:**
- Components move to `shared/` when PROVEN reusable (3+ uses)
- Not when an agent thinks they "should" be shared
- Timing matters: Extract too early = brittle abstractions

---

## Deviation Constraints (Conceptual - To Validate)

While pages and sites have sovereignty, certain core identity elements should be retained to maintain brand coherence:

### Must Retain (Conceptual Intent - Subject to Validation)

**Typography foundations:**
- Primary/header type: Cinzel (or equivalent display serif with similar character)
- Rationale: Mythic/epic quality central to Odyssey identity
- Acceptable: Different weights, sizes, or similar serif families
- Not acceptable: Complete swap to sans-serif for primary headers

**Core color identity:**
- Bronze palette (`#B48E55` family) for brand accent
- Lab Blue variants (`#38BDF8` / `#2563EB`) for interactive elements
- Rationale: Journey (bronze) + Innovation (blue) = core visual identity
- Acceptable: Extended palettes, tints/shades, additional accent colors
- Not acceptable: Replacing bronze/blue with entirely different brand colors

### Can Freely Extend

- Layout systems
- Animation styles and timing
- Supporting color palettes
- Spacing scales
- Component patterns
- Utility classes
- Effects and treatments
- Typography for body/metadata (Inter, JetBrains Mono can be swapped)

**Note**: These constraints express **emergence intent** - they describe what patterns seem essential to Odyssey identity based on observation, not rigid rules. As the system evolves, the community may validate, refine, or challenge these assumptions.

---

## When To Use Shared Design System

### Use `@shared/design-system/GlobalStyles` when:
- ✅ Starting a NEW site from scratch
- ✅ Building components you KNOW will be reused
- ✅ Site has no special style requirements

### DON'T force shared imports when:
- ❌ Migrating existing working code
- ❌ Prototyping/experimenting
- ❌ Site has custom animations/styles
- ❌ "It would be cleaner" (not a reason)

---

## Rising Ink Demos (Speed-First Exception)

**Scope:** `sites/rising-ink/demos`

**Intent:** Ship demo sites fast during sales cycles, even if they use hardcoded values and custom Tailwind arbitrary tokens.

**Allowed:**
- Hardcoded colors, spacing, and typography
- One-off section structure per demo
- Embedded styles and custom animation utilities

**Not allowed:**
- Pushing demo-specific tokens into `shared/design-system/`
- Promoting demo components to `shared/components/library/` without 3+ uses
- Using the exception outside Rising Ink demos

**Path to convergence:**
1. Standardize section flow and wrappers first
2. Introduce a translation layer for shared logic
3. Adopt Untitled UI React components as base when ready
4. Only then align with shared tokens and library components

---

## Prototype → Production Flow

**Correct flow:**
1. **Prototype** in `_workspace/` or `sites/[site]/` with whatever styles work
2. **Ship** the prototype (it's working, don't break it)
3. **Observe** what gets reused across 2-3 sites
4. **Extract** proven patterns to `shared/components/library/`
5. **Refactor** sites to use shared components WHEN READY

**Incorrect flow (DO NOT DO THIS):**
1. ~~Prototype~~
2. ~~Immediately force "proper" shared imports~~
3. ~~Break styles in the process~~
4. ~~Waste time fixing what wasn't broken~~

---

## Extension Protocol

### Sites CAN extend the design system:

**Add site-specific tokens:**
```css
/* sites/odyssey-lab/src/App.jsx - embedded GlobalStyles */
:root {
  /* Base tokens from shared/ */
  --color-bronze: #B48E55;
  
  /* Site-specific extensions */
  --color-alchemy-gold: #F0E68C;
  --animation-alchemy-pulse: alchemy-pulse 4s ease infinite;
}

.alchemy-pulse {
  animation: var(--animation-alchemy-pulse);
}
```

**This is ALLOWED and ENCOURAGED during prototyping.**

### When to propose base system update:

**Propose adding to `shared/design-system/` when:**
- Used in 3+ sites
- General-purpose (not site-specific)
- Fits existing token philosophy
- Team agrees it belongs in base

**Until then:** Keep extensions site-local.

---

## Multi-Site Architecture Reality

**What "multi-site" actually means:**
- Each site deploys independently (separate Vercel projects)
- Each site CAN share code (via `@shared` imports)
- Each page and site CAN have unique styles during exploration
- Shared code emerges from proven patterns, not imposed
- **Eventual convergence**: All sites will adopt base styles over time as patterns stabilize

**What "multi-site" DOES NOT mean:**
- All sites must look identical from day one
- All sites must use shared/design-system/GlobalStyles immediately
- Variety is forbidden
- Agents should force conformity during prototyping

**The path:**
- **Now**: Pages/sites have embedded styles, experimentation encouraged
- **Later**: Extract proven patterns to `shared/design-system/` 
- **Eventually**: Sites import base + extend locally within constraints
- **Constraints**: Core identity elements (Cinzel, Bronze/Blue) retained

---

## The Convergence Path (Conceptual)

**Current state (V1):**
- Canonical design tokens exist in `_workspace/.../SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md`
- 1660 lines of CSS-based tokens, components, slot architecture
- **Problem**: Not JSX-friendly for React consumption
- **Current reality**: Pages have embedded GlobalStyles (e.g., App.jsx)

**Future state (to be built):**
1. **Extract SYSTEM spec → JSX base**
   - Convert CSS tokens → `shared/design-system/GlobalStyles.jsx` (JSX-friendly)
   - Convert to `shared/design-system/tokens.js` (JavaScript export)
   - Document in `shared/design-system/README.md`

2. **Sites adopt base + extend**
   - Import base GlobalStyles from `@shared/design-system`
   - Add site-specific extensions as needed
   - Retain core identity constraints (Cinzel, Bronze/Blue)

3. **Pages inherit or override**
   - Most pages use site-wide styles
   - Individual pages can still override for special cases
   - Override justification documented

**When to converge:**
- NOT during initial prototyping (breaks working code)
- NOT when pattern isn't proven (premature abstraction)
- WHEN patterns stabilize across 2-3 sites
- WHEN JSX-friendly base is actually created from SYSTEM spec

**See**: `_workspace/claude-odyssey-design-system-project/_system/SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md` for canonical source.

---

## Agent Guidance

### When migrating existing code:
1. **Read existing styles** - understand what's there
2. **Check for embedded GlobalStyles** - don't assume they don't exist
3. **Move AS-IS first** - get it working
4. **Refactor later (maybe)** - only if clear benefit

### When building new:
1. **Start with shared/** if it fits
2. **Extend locally if needed**
3. **Flag for extraction** if reusable
4. **Don't prematurely abstract**

### Red flags you're doing it wrong:
- 🚨 "I'll import shared GlobalStyles to clean this up"
- 🚨 "This site should use the design system properly"
- 🚨 "Let me refactor these working styles"
- 🚨 "Variety is technical debt"

### Green flags you're doing it right:
- ✅ "This site has working styles, I'll leave them"
- ✅ "I see this pattern in 3 sites, let's extract it"
- ✅ "New site, I'll start with shared/ as base"
- ✅ "Extension makes sense here, documenting it"

---

## For Base Token Usage

**See:** `.rules/10-design-system.md` for authoritative token definitions, color palettes, typography scale, spacing system, and validation rules.

---

## See Also

- [`.rules/10-design-system.md`](./10-design-system.md) — Base design system tokens and usage
- [`ARCHITECTURE.md`](../ARCHITECTURE.md) — Design system philosophy section
- [`AGENTS.md`](../AGENTS.md) — Site sovereignty principle

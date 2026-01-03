```yaml
---
type: CONCEPT_SYSTEM_MOD
status: Active
version: 0.1
date: 2026-01-01
integration: overlay-extend (always loaded via META_SYSTEM_MOD_extension-overlay-file-logic)
tags: [pattern-emergence, proto-components, visual-patterns, ui-preferences, odyssey-patterns]
usage: "Pattern emergence library for Odyssey creative work. Descriptive proto-components and visual preferences that Claude can pull from in creative director mode. Acts as accruing pattern library - new patterns added as they emerge from Brandon's preferences. Always loaded via extension-overlay logic."
---
```

# CONCEPT SYSTEM MODULE: Pattern Emergence Library
## Proto-Components & Visual Patterns for Odyssey Lab

**Purpose**: Capture visual patterns, interaction preferences, and proto-component ideas that emerge through Brandon's work. This is NOT a rigid component library - it's a pattern vocabulary that creative-mode Claude can draw from and extend.

**Integration**: Loaded via overlay-extend logic as always-active reference. New patterns accrue here as they emerge.

---

## SECTION 1: NAVIGATION & WAYFINDING PATTERNS

### Pattern 1: Sticky Bottom Jump Nav (Sectioned Content Navigation)

**Context**: Long-form content (research reports, documentation) where users need to jump between major sections.

**Visual Pattern**:

```
Desktop/Tablet Behavior:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ [Page Content Scrolling]                   â”‚
â”‚                                             â”‚
â”‚                                             â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
  [Intro] [Mechanisms] [Timeline] [Practices]
  â””â”€ Sticky bottom nav, always visible â”€â”€â”€â”€â”€â”˜

Animation Option (Advanced):
- Initial state: Sticky at bottom
- On scroll: Slides upward to top of viewport
- Remains sticky at top
- Creates dynamic "follows you" feel

Mobile Behavior:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ [Page Content Scrolling]                   â”‚
â”‚                                             â”‚
â”‚                                             â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
  [ðŸ“‘ Table of Contents]
  â””â”€ Subtle sticky button at bottom â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

On tap: Popup/modal/drawer with full section list
```

**Design Tokens to Apply**:
- Container: `--bg-card` with subtle shadow or border
- Text: `--text-primary` for active section, `--text-muted` for inactive
- Accent: `--color-bronze` or `--accent-blue` for active indicator
- Spacing: `--space-4` (1rem) for internal padding
- Typography: `--font-body` at smaller scale (0.875rem)

**Implementation Notes**:
- NOT overwhelming (subtle, stays out of the way)
- Indicates current section (highlight/underline active item)
- Smooth scroll to sections on click
- Consider fade-in on scroll (not visible at page top, appears after hero)

**Variations**:
- **Minimal**: Text links only, no background
- **Card**: Background card with shadow/border
- **Tabs**: Tab-like visual treatment
- **Compact**: Icons + labels vs. labels only

---

### Pattern 2: Mobile Table of Contents Trigger

**Context**: Mobile viewports where horizontal space is constrained.

**Visual Pattern**:

```
Persistent Trigger (Sticky Bottom):
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ [Scrolling Content]      â”‚
â”‚                          â”‚
â”‚                          â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
[ðŸ“‘ Table of Contents]  â† Subtle sticky button
â””â”€ Always visible â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

On Tap â†’ Expansion Options:
Option A: Bottom Sheet (slides up from bottom)
Option B: Modal Overlay (centered, dismissible)
Option C: Drawer (slides from side)

Brandon's Preference: "Don't really care about form, 
just general treatment when persistently in view"
```

**Design Considerations**:
- Trigger should be SUBTLE (not blocking content)
- Icon + label preferred (not just icon)
- Easily dismissible (tap outside, swipe down, X button)
- Section list should be clear and tappable (generous touch targets)

---

## SECTION 2: PROGRESSIVE DISCLOSURE PATTERNS

### Pattern 3: Accordion with Informative Header Card

**Context**: Deep content that needs to be accessible but not overwhelming. User should understand what's inside WITHOUT opening, but can drill down for depth.

**Visual Pattern**:

```
Untoggled State (The "Card"):
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ EYEBROW TEXT                               [â†“] â”‚
â”‚ Main Headline or Section Title                 â”‚
â”‚ Brief 2-line description that's informative    â”‚
â”‚ enough to understand content without opening.  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
  â†‘                                             â†‘
  Card-like presentation              Toggle indicator

Toggled State (Expanded):
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ EYEBROW TEXT                               [â†‘] â”‚
â”‚ Main Headline or Section Title                 â”‚
â”‚ Brief 2-line description...                    â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ [Full Deep Content Here]                       â”‚
â”‚                                                 â”‚
â”‚ Paragraphs, lists, tables, whatever depth      â”‚
â”‚ is needed. Original content preserved.         â”‚
â”‚                                                 â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Content Structure**:

```
ACCORDION ITEM (Informative Header Pattern)
â”œâ”€ Eyebrow (context/category) - Optional, subtle color
â”œâ”€ Heading (clear, descriptive title)
â”œâ”€ Description (2 lines max, ~100-150 characters)
â”‚  â””â”€ This is the KEY: communicative without opening
â””â”€ Expanded Content (full depth, no summary loss)
   â”œâ”€ Can include: Paragraphs, lists, tables, nested items
   â””â”€ Preserved verbatim from source
```

**Example (Research Report Context)**:

```
Untoggled:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ RESEARCH METHODOLOGY                       [â†“] â”‚
â”‚ Extended Web Search + Synthesis Approach       â”‚
â”‚ 3 search paths, 30+ sources, 20 min execution. â”‚
â”‚ Confidence: 75%, known gaps documented.        â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

Toggled:
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ RESEARCH METHODOLOGY                       [â†‘] â”‚
â”‚ Extended Web Search + Synthesis Approach       â”‚
â”‚ 3 search paths, 30+ sources, 20 min execution. â”‚
â”‚ Confidence: 75%, known gaps documented.        â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ [Full methodology section with:]               â”‚
â”‚ - Search paths executed                        â”‚
â”‚ - Source quality distribution                  â”‚
â”‚ - Confidence calibration details               â”‚
â”‚ - Known gaps & limitations                     â”‚
â”‚ - Future research directions                   â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Design Tokens to Apply**:
- Card background: `--bg-card` or `--bg-panel`
- Eyebrow: `--text-muted` or accent color (`--color-bronze`)
- Heading: `--text-primary`, display typography scale
- Description: `--text-secondary`, body typography
- Border: `--border-subtle` or `--border-strong` on hover
- Toggle indicator: `--text-muted`, rotates on state change
- Spacing: `--space-4` to `--space-8` for internal padding

**Interaction**:
- Entire header is clickable (not just toggle icon)
- Smooth height animation on expand/collapse
- Consider subtle shadow or border change on hover
- Toggle icon rotates (down arrow â†’ up arrow)

**When to Use This Pattern**:
- Research addendums (methodology, full analysis, citations)
- Detailed specifications or technical docs
- Any content where OVERVIEW is valuable but DEPTH is optional
- Sections that would create cognitive overload if always visible

**Anti-Pattern (What NOT to Do)**:
- Header that just says "Section 3" with no context
- Description that's just "Click to expand"
- No visual indication of what's inside
- Forcing users to open to understand content

---

## SECTION 3: VISUAL HIERARCHY & INFORMATION ARCHITECTURE

### Pattern 4: Insight Elevation Treatment

**Context**: Long research content where key insights need to be surfaced without removing depth.

**Visual Pattern**:

```
Approach: Dual-Layer Information Architecture

Layer 1: SURFACE (What users encounter first)
â”œâ”€ Executive summaries (NEW, synthesized)
â”œâ”€ Pull quotes (VERBATIM from research)
â”œâ”€ Highlight blocks (KEY findings elevated)
â””â”€ Framework cards (VISUAL treatment of concepts)

Layer 2: DEPTH (Accessible, not hidden)
â”œâ”€ Full research sections (PRESERVED, organized)
â”œâ”€ Methodology (Accordion pattern)
â”œâ”€ Citations & sources (Accordion pattern)
â””â”€ Detailed analysis (Progressive disclosure)

Relationship: Layer 1 ADDS to Layer 2, never REPLACES
```

**Execution Guidelines**:
- Pull quotes are VERBATIM (not paraphrased) excerpts from research
- Highlight blocks elevate statistics, timelines, key findings
- Framework cards visualize concepts (EPOCH, Four-Zone Defense, etc.)
- All original content remains accessible (accordions, not deletion)

---

### Pattern 5: MECE Content Skeleton (Planning Tool)

**Context**: When planning content transformation (research â†’ web experience), use MECE framework to ensure nothing is lost.

**Tree Chart Legend**:
- ðŸ“¦ **PRESERVED** - Verbatim content from source (cannot be removed)
- âœ¨ **NEW** - Presentation layer being added (summaries, navigation)
- ðŸ“Š **ELEVATED** - Source content reorganized/highlighted (still verbatim)
- ðŸŽ¨ **VISUAL** - Framework diagrams, illustrations, design treatments
- ðŸ—ï¸ **STRUCTURAL** - Navigation, accordions, section organization

**Usage**: Create skeleton BEFORE build to map all content, identify gaps, ensure preservation.

---

## SECTION 4: ZONE-SPECIFIC VISUAL PATTERNS

### Pattern 6: Transitional Zone Treatments

**Context**: Pages or sections that shift between Light and Dark zones (e.g., Risks report with darker hero, lighter body).

**Visual Approaches**:

```
Option A: Gradient Fade
Hero (Dark) â”€â”€â”€â”€â†’ [Gradient] â”€â”€â”€â”€â†’ Body (Light)
â”‚                                    â”‚
Dark Zone tokens              Light Zone tokens

Option B: Clear Boundary
Hero (Dark)
â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ [Visual separator] â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
Body (Light)

Option C: Hint of Dark
Body primarily Light, but:
- Darker hero section
- Dark-tinted warning blocks
- Bronze/darker blue accents
```

**Brandon's Preference for Risks Report**:
- Darker hero (Titans realm aesthetic)
- Rest can be Light zone with hints of weight/gravity
- NOT full dark mode, but visual indicators of serious content

**Design Tokens for Transitional Approach**:
- Hero: `--dark-bg-deep`, `--dark-text-primary`
- Body: `--light-bg-body`, `--light-text-muted`
- Accent in hero: `--color-bronze` (grounded)
- Accent in body: Mix of bronze and lab blue
- Warning blocks: Subtle dark tint or border

---

## SECTION 5: ANIMATION & MOTION PREFERENCES

### Pattern 7: Subtle Motion Effects

**Context**: Brandon noted Titan Research Engine hero has "subtle rotation on portal SVG that's fucking sick."

**Motion Philosophy**:
- **SUBTLE** over dramatic (understatement, not spectacle)
- **PURPOSE-DRIVEN** (not motion for motion's sake)
- **PARTICLES & AMBIENT** effects okay (floating elements, gentle drift)
- **SVG ANIMATIONS** encouraged (rotation, scaling, path morphing)
- **TASTEFUL ONLY** (museum exhibit quality, not theme park)

**Examples Referenced**:
- Portal SVG with subtle continuous rotation
- Particle effects (gentle, ambient, not distracting)
- Animated SVGs (can be complex, just tasteful)

**Technical Notes**:
- CSS animations preferred for performance
- SVG SMIL animations or CSS keyframes
- Consider reduced motion preferences (accessibility)

**Motion Tokens (From Design System v0.3)**:
- `--duration-fast: 150ms` (micro-interactions)
- `--duration-normal: 300ms` (standard transitions)
- `--duration-slow: 500ms` (major state changes)
- `--easing-default: cubic-bezier(0.4, 0, 0.2, 1)` (material ease)

**Ideas to Suggest to Gemini**:
- Rotating portal ring in hero sections
- Floating particles in background (very subtle, low opacity)
- Gentle parallax on scroll
- SVG path morphing for transitions
- Glow/pulse effects on interactive elements
- Fade-in animations for content sections

---

## SECTION 6: COMPONENT EMERGENCE PATTERNS

### Pattern 8: Path/Portal Card Navigation

**Context**: Dual perspective research (Risks + Opportunities) needs visual metaphor for choosing paths.

**Visual Structure**:

```
DUAL PATH CARDS (Side by Side)

â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ TITANS PATH             â”‚  â”‚ PANTHEON PATH           â”‚
â”‚ (Risks Realm)           â”‚  â”‚ (Opportunities Realm)   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤  â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Bronze tones            â”‚  â”‚ Gold/sky blue tones     â”‚
â”‚ Grounded forms          â”‚  â”‚ Elevated forms          â”‚
â”‚ Foundation metaphor     â”‚  â”‚ Ascent metaphor         â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤  â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ Heading: "Cognitive     â”‚  â”‚ Heading: "Human         â”‚
â”‚ Degradation Mechanisms" â”‚  â”‚ Capability Enhancement" â”‚
â”‚                         â”‚  â”‚                         â”‚
â”‚ Preview text...         â”‚  â”‚ Preview text...         â”‚
â”‚                         â”‚  â”‚                         â”‚
â”‚ [Explore Risks â†’]       â”‚  â”‚ [Explore Opportunities â†’â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

**Design Considerations**:
- Visual CONTRAST between cards (different accent colors, forms)
- But UNIFIED design system (same component, different tokens)
- Each path should feel distinct but complementary
- NOT "good vs evil" - both are paths requiring wisdom

---

## SECTION 7: CONTENT PRESERVATION PATTERNS

### Pattern 9: Research Addendum Treatment

**Context**: Research reports with deep content (methodology, citations, full analysis) that must be preserved but shouldn't overwhelm initial experience.

**Standard Pattern**:

```
MAIN CONTENT FLOW
â”œâ”€ Executive Summary (NEW)
â”œâ”€ Section 1 (REORGANIZED)
â”œâ”€ Section 2 (REORGANIZED)
â”œâ”€ Section 3 (REORGANIZED)
â””â”€ [Clear visual break]

RESEARCH DEPTH (Accordion Pattern)
â”œâ”€ Research Success Report (Accordion)
â”‚  â”œâ”€ Remaining questions
â”‚  â”œâ”€ Emergent targets
â”‚  â””â”€ Suggested actions
â”‚
â”œâ”€ Research Methodology (Accordion)
â”‚  â”œâ”€ Search paths
â”‚  â”œâ”€ Source distribution
â”‚  â”œâ”€ Confidence calibration
â”‚  â””â”€ Known gaps
â”‚
â””â”€ Full Research Addendum (Double Accordion)
   â”œâ”€ Outer: "Complete Research Details"
   â”‚  â””â”€ All remaining content not surfaced above
   â””â”€ Inner: "Sources & Citations"
      â””â”€ Full bibliography, references
```

**Key Principle**: ALL content preserved, reorganized for learning flow, depth accessible via accordions.

---

## SECTION 8: PROTO-COMPONENT CONFIGURATIONS

### Pattern 10: Sticky Element Variations

**Common Configurations**:

```
A. Sticky Header (Traditional)
   - Fixed to top on scroll
   - Common for main navigation

B. Sticky Bottom (Brandon's Preference for Section Nav)
   - Fixed to bottom always
   - OR slides from bottom to top on scroll
   - Less obtrusive than top sticky

C. Sticky Sidebar (Desktop Only)
   - Table of contents alongside content
   - Disappears on mobile (becomes bottom sticky)

D. Floating Action (Contextual)
   - Appears/disappears based on scroll position
   - Example: "Back to top" after scrolling past hero
```

**When to Use Bottom Sticky**:
- Long-form content with clear sections
- When top header is reserved for branding/primary nav
- When bottom provides better spatial awareness (grounded)

---

## SECTION 9: TYPOGRAPHY PATTERNS

### Pattern 11: Display Typography Hierarchy

**From Odyssey Design System** (informing this pattern):

```
Display (Cinzel):
â”œâ”€ Hero titles (large, commanding)
â”œâ”€ Section headings (h2 level)
â””â”€ Eyebrows (small caps, subtle)

Body (Inter):
â”œâ”€ Paragraphs (readable, ~1.6 line height)
â”œâ”€ Lists (slightly tighter line height)
â””â”€ UI labels (smaller scale)

Technical (JetBrains Mono):
â”œâ”€ Code blocks
â”œâ”€ Data/statistics
â””â”€ Timestamps, metadata
```

**Mixing Fonts for Hierarchy**:
- Display font for IDENTITY (page title, major sections)
- Body font for CONTENT (paragraphs, descriptions)
- Technical font for DATA (stats, code, metadata)

**Anti-Pattern**: Using display font for body text (readability suffers).

---

## SECTION 10: EMERGING PATTERNS (To Be Developed)

### Pattern 12: Portal/Threshold Visual Treatment

**Status**: Concept emerging, needs visual execution

**Concept**: Visual metaphor for entering a space, choosing a path, crossing a threshold.

**Elements to Explore**:
- Portal ring/frame (circular or architectural)
- Dual paths visible beyond portal
- Subtle depth/perspective (not 3D, just implied)
- Bronze/gold integration with portal structure
- Animation: rotation, pulsing, particle effects

**Caution**: Avoid cheesy literal representations. Museum exhibit quality.

---

## SECTION 11: PATTERN EXTENSION GUIDELINES

### When to Add New Patterns to This Library

1. **Brandon expresses a specific visual preference** â†’ Capture it here
2. **A proto-component emerges across multiple projects** â†’ Document it
3. **A solution to a common UX problem is found** â†’ Generalize and add it
4. **A Gemini output creates something novel and approved** â†’ Extract and codify

### How to Document New Patterns

```
### Pattern N: [Descriptive Name]

**Context**: [When/where this pattern applies]

**Visual Pattern**: [ASCII diagram or description]

**Design Tokens to Apply**: [Specific tokens from design system]

**Implementation Notes**: [Technical considerations]

**When to Use**: [Clear criteria]

**Anti-Pattern**: [What NOT to do]
```

---

## CLOSING NOTES

**This is a living document**. Patterns accrue here as they emerge from Brandon's work and preferences. Not all patterns will be codified into formal components - some remain as conceptual vocabularies for creative-mode Claude to reference.

**Always refer to this module when**:
- Working in creative director mode
- Building Odyssey Lab artifacts
- Gemini handoff preparation (share relevant patterns)
- Proposing new visual treatments

**Don't treat this as rigid rules** - it's a pattern library to inform creative decisions, not constrain them.

**Version**: 0.1  
**Date**: 2026-01-01  
**Integration**: Always loaded via overlay-extend logic  
**Next Update**: As new patterns emerge from project work

---

**END CONCEPT SYSTEM MODULE**

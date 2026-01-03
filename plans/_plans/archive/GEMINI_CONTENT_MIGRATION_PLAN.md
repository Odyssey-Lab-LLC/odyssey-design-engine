# Gemini Content Migration Plan

## Starting Point

**File to Edit:** `_workspace/init gem content delta test/NewHomepage.jsx`  
**Dev Server:** `http://localhost:5174/`  
**Browser:** Open and verified working  
**Status:** Clean working base from gemini-base.jsx (lines 1-345)

**Current Structure (DO NOT MODIFY):**
- Lines 1-19: Imports and directives
- Lines 20-96: GlobalStyles component with CSS variables
- Lines 98-111: NavLink component
- Lines 113-120: DecorationNode component
- Lines 122-141: AlchemyDiagram component
- Lines 143-345: Main App component with header and hero section

## Critical Rules

### PRESERVE EXISTING CODE
1. **Lines 1-345 are SACROSANCT** - Do not modify existing header, hero, or base components
2. **Add new content AFTER line 342** (before the closing `</main>` tag at line 342)
3. **Keep all existing components** - NavLink, DecorationNode, AlchemyDiagram must remain unchanged
4. **Preserve GlobalStyles** - All CSS variables and custom classes must stay intact

### STYLING GUIDELINES
5. **Use existing CSS variables** from GlobalStyles:
   - Colors: `--color-bronze`, `--color-bronze-dark`, `--color-gold`
   - Light zone: `--light-bg-body`, `--light-bg-card`, `--light-bg-panel`
   - Text: `--light-text-primary`, `--light-text-secondary`, `--light-text-muted`
   - Borders: `--light-border-subtle`, `--light-border-strong`
6. **Maintain font hierarchy**:
   - Headings: `font-cinzel` class
   - Body: `font-sans` class (Montserrat)
   - Accent/quotes: `font-serif-accent` class (Cormorant Garamond)
7. **Keep bronze/gold color scheme** consistent throughout
8. **Use Tailwind utilities** for layout and spacing

### COMPONENT PATTERNS
9. **Follow existing patterns** from hero section for consistency
10. **Use Framer Motion** for animations (already imported)
11. **Use Lucide React icons** (already imported, add more if needed)
12. **Create reusable components** for repeated patterns (accordions, cards, etc.)

## Content Source

**File:** `_workspace/init gem content delta test/content-reference.html`

**Sections to Migrate** (in order, starting after line 712):

### Section 1: Origin Story (Lines 714-777)
- **Zone:** Light (`zone-light` class)
- **ID:** `origin`
- **Key Elements:**
  - Section header with eyebrow ("Where This Comes From")
  - Title: "Origin Story: A Decade-Long Quest"
  - Description paragraph
  - Body paragraphs about philosophy book club
  - 2 Accordion components (Epiphany #1 and #2)
  - Closing emphasis paragraph

### Section 2: The ROOT - Three Pillars (Lines 782-937)
- **Zone:** Dark (`zone-dark` class)
- **ID:** `root`
- **Key Elements:**
  - Zone transition div before section
  - Section header with eyebrow ("Philosophical Foundations")
  - Title: "The ROOT: Three Pillars"
  - 3 Pillar cards in grid layout:
    1. Viktor Frankl: Life Questions Us
    2. Integral Theory: All Quadrants, All Levels (AQAL)
    3. Inner Alchemy: Integration & Actualization
  - Each pillar has: number, title, essence quote, expandable content
  - Synthesis statement at bottom

### Section 3: The Cosmology (Lines 939-1090)
- **Zone:** Dark (continues `zone-dark`)
- **ID:** `cosmology`
- **Key Elements:**
  - Section header with eyebrow ("The Map of Reality")
  - Title: "The Cosmology: Integration Alchemy in Practice"
  - Circular diagram of 4 quadrants (Individual/Collective × Interior/Exterior)
  - 4 Quadrant cards with detailed content
  - Integration principles
  - Closing synthesis

### Section 4: The 10 Principles (Lines 1092-1241)
- **Zone:** Light (`zone-light` class with transition)
- **ID:** `principles`
- **Key Elements:**
  - Zone transition div before section
  - Section header with eyebrow ("Living the Philosophy")
  - Title: "The 10 Integration Principles"
  - 10 Principle cards in 2-column grid
  - Each principle: number, title, description, practical application

### Section 5: The Manifestations (Lines 1243-1478)
- **Zone:** Light (continues `zone-light`)
- **ID:** `manifestations`
- **Key Elements:**
  - Section header with eyebrow ("In the World")
  - Title: "The Manifestations: Philosophy in Action"
  - 6 Manifestation cards (3 concrete, 3 emerging)
  - Each manifestation: eyebrow, title, description, status indicator
  - Split between "Concrete Now" and "Emerging Vision"

### Section 6: The Invitation (Lines 1480-1533)
- **Zone:** Light with gradient background
- **ID:** `invitation`
- **Key Elements:**
  - Section header with eyebrow ("Your Move")
  - Title: "Join the Odyssey"
  - Invitation text
  - CTA buttons or links
  - Closing philosophical statement

### Section 7: v1.0 Development (Lines 1535-1791)
- **Zone:** Light with muted background
- **ID:** `v1-development`
- **Key Elements:**
  - Section header (appendix style)
  - Version timeline
  - Development notes
  - Future directions

## Implementation Approach

### Phase 1: Create Reusable Components
Before migrating sections, create these reusable components:

```jsx
// Section Header Component
const SectionHeader = ({ eyebrow, title, description }) => (...)

// Accordion Component  
const Accordion = ({ eyebrow, title, description, children }) => (...)

// Pillar Card Component
const PillarCard = ({ number, title, essence, children }) => (...)

// Principle Card Component
const PrincipleCard = ({ number, title, description, application }) => (...)

// Manifestation Card Component
const ManifestationCard = ({ eyebrow, title, description, status }) => (...)

// Zone Transition Component
const ZoneTransition = () => (...)
```

### Phase 2: Add Content Sections Sequentially
1. Start with Origin Story section (simplest)
2. Add ROOT pillars section (introduces pillar cards)
3. Add Cosmology section (complex diagram)
4. Add 10 Principles section (grid of cards)
5. Add Manifestations section (status indicators)
6. Add Invitation section (CTAs)
7. Add v1.0 Development section (appendix)

### Phase 3: Styling & Polish
- Ensure zone transitions are smooth
- Verify spacing matches design system
- Test responsive behavior
- Confirm all animations work
- Check that colors and typography are consistent

### Phase 4: Verification
- Scroll through entire page in browser
- Check each section renders correctly
- Verify no console errors
- Test interactive elements (accordions, etc.)
- Confirm mobile responsiveness

## Optional Enhancement: Responsive Grid Fix

**Current Issue:**
- The `lg:grid-cols-12` class at line 237 isn't triggering 3-column layout at desktop widths
- Layout stacks vertically at all viewport sizes
- Expected: 3-column grid at 1024px+ with center "TRANSMUTATION" axis visible

**Diagnosis to Try:**
1. Check if Tailwind is generating `lg:` breakpoint classes
2. Verify viewport width is actually 1024px+ (could be browser zoom issue)
3. Try alternative approach: use explicit `@media` queries in GlobalStyles
4. Consider if this is a Tailwind v3 JIT compilation issue

**Resolution:**
- IF you can identify and fix quickly: do it
- IF unclear or complex: SKIP IT and proceed with content migration
- Document any findings for later resolution

**Status:** NOT BLOCKING - Content migration is priority

## Success Criteria

### Must Have
- All 7 content sections migrated and rendering
- No modifications to lines 1-345 (base preserved)
- All content from content-reference.html represented
- Bronze/gold color scheme maintained
- Existing font hierarchy followed
- No console errors
- Page scrolls smoothly through all sections

### Should Have
- Reusable components created for common patterns
- Smooth zone transitions between light/dark sections
- Interactive elements (accordions) working
- Responsive layout for mobile/tablet/desktop
- Framer Motion animations on scroll

### Nice to Have
- Responsive grid fix (3-column layout at lg breakpoint)
- Enhanced animations or micro-interactions
- Additional visual polish beyond HTML version
- Performance optimizations

## Notes for Gemini

- **You're starting with a perfect foundation** - don't touch it!
- **The HTML is your content source** - not your style guide
- **Use React/JSX patterns** - not HTML patterns
- **The existing hero section** is your style reference
- **When in doubt**: simpler is better, preserve the base
- **Take your time**: Better to get it right than fast
- **Test as you go**: Check browser after each section

Good luck! 🚀


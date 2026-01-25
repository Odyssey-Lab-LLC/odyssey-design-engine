# Gemini Prompt Template: Rising Ink Section Generation

> **Purpose**: Generate visually striking website sections for Rising Ink tattoo agency. Use this template for each section (Hero, Services, Testimonials, CTA, Footer).

---

## Brand Context

**Rising Ink** is a tattoo agency. Brand essence:
- **Bold but approachable** - Confident expertise without intimidation
- **Authentic over trendy** - Real tattoo culture, not generic corporate aesthetic
- **Professional permanence** - This is art that lasts a lifetime

**Visual language**: Museum exhibit quality. Elevated, not sterile. Rich, not cluttered.

---

## Design Tokens (Your Palette)

```json
[PASTE design-tokens.json CONTENT HERE]
```

**Key References**:
- **Colors**: Dark (#333), Beige (#ECE9E2), Red (#C1272D)
- **Fonts**: Lemon Milk (headlines), Helvetica Neue (body)
- **Spacing**: Section (5rem), Component (1.5rem), Element (1rem)

Use these tokens via Tailwind classes: `bg-dark`, `text-red`, `font-headline`, `py-component`, etc.

---

## Task

Generate a **[SECTION TYPE]** section.

**Section Purpose**: [e.g., Showcase services and build credibility]

**Content**:
```
[PASTE ACTUAL CONTENT HERE - Headlines, copy, service names, testimonials, etc.]
```

---

## Your Creative Freedom

You decide:
- **Layout composition** - Grid, asymmetric, stacked, split - whatever serves the content best
- **Visual hierarchy** - Which elements get prominence through size, position, color
- **Motion/interaction** - Hover effects, transitions, animations (subtle over flashy)
- **Whitespace density** - Tight for energy, generous for breathing room
- **Component styling** - Card treatments, button styles, section dividers

**Surprise me.** The best outcome is something I wouldn't have thought to request.

---

## Technical Constraints

**Tech Stack**: Astro + Tailwind CSS 4

**Output Format**: Single `.astro` component file, fully functional

**Accessibility**: WCAG AA compliance
- Color contrast ≥4.5:1 for text
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text on images

**Responsive**: Mobile-first design
- Test breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop)
- Touch targets ≥44px × 44px on mobile

---

## What NOT to Do

**❌ Generic stock aesthetic** - Avoid "person holding tattoo gun" clichés, generic UI components

**❌ Corporate/sterile layouts** - This isn't a law firm website

**❌ Hardcoded color values** - Always use Tailwind classes that reference tokens (e.g., `bg-red` not `bg-[#C1272D]`)

**❌ Excessive animation** - Prefer subtle over flashy. Museum exhibit, not theme park.

**❌ Over-explained code** - Just give me the working `.astro` file. Brief design rationale (2-3 sentences) is enough.

---

## Output

Provide:
1. **Complete `.astro` component** (ready to use)
2. **Brief design rationale** (2-3 sentences on key decisions)
3. **Custom CSS if needed** (only if tokens insufficient - should be rare)

---

**Example Task Customization**:

```markdown
## Task

Generate a **Hero** section.

**Section Purpose**: First impression, primary conversion point

**Content**:
- Headline: "Rising Ink"
- Subheadline: "Where Your Story Becomes Art"
- CTA: "Book Your Session"
- Background: Hero image or pattern overlay
```

---

**Notes**:
- Replace `[SECTION TYPE]` with Hero, Services, Testimonials, CTA, or Footer
- Replace `[PASTE ACTUAL CONTENT HERE]` with real headlines, copy, service names
- Adjust "Section Purpose" description per section
- Keep tokens JSON reference consistent across all sections

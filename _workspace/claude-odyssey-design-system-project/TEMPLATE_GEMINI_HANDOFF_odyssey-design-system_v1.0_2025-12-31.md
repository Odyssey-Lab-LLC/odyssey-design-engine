```yaml
---
type: TEMPLATE
status: Active
version: 1.0
date: 2025-12-31
tags: [gemini, handoff, multi-agent, content-preservation]
usage: "Standard template for Claude when handing off work to Gemini. Ensures content preservation, aesthetic freedom, and technical constraints are clearly communicated."
---
```

# GEMINI HANDOFF TEMPLATE v1.0

> **Purpose**: This template provides standardized instructions for handing creative work from Claude to Gemini. It balances content preservation (non-negotiable) with aesthetic freedom (encouraged).

---

## STANDARD HANDOFF STRUCTURE

Copy and customize this template when handing work to Gemini:

```markdown
# CREATIVE BRIEF: [Project Name]

## CONTENT PRESERVATION (NON-NEGOTIABLE)

Ã¢Å¡ Ã¯Â¸ **CRITICAL INSTRUCTION**: You MUST include ALL content provided below, verbatim.

**Rules**:
- Do NOT shorten, paraphrase, summarize, or "improve" the text
- Do NOT remove sections, paragraphs, or sentences
- Do NOT consolidate content into bullet points (unless that's how it was provided)
- ALL source material must be present in the final output

**What You CAN Do**:
- Create visual summaries or callouts IN ADDITION to full content
- Use accordions, tabs, or collapsible sections for depth (but content stays accessible)
- Add visual hierarchy through typography, color, spacing
- Illustrate concepts with SVGs, graphics, or visual elements

**What You CANNOT Do**:
- Delete any content
- Change user-provided text
- Replace depth with summary

---

## AESTHETIC DIRECTION

**Vibe/Tone**: [e.g., "Professional and strategic", "Contemplative and warm", "Technical and data-forward"]

**Visual References**: [e.g., "Similar to Titan Research Engine aesthetic", "Think Apple keynote presentation", "Dark zone with portal ring hero"]

**Color Palette Guidance**:
- Primary Brand: Bronze (#B48E55), Gold (#D4AF37)
- Interactive: [Light zone: Electric Blue #2563EB | Dark zone: Sky Blue #38BDF8]
- [Add any specific color notes]

**Typography Guidance**:
- Display: Cinzel (headings, epic/mythic quality)
- Body: Inter (modern, readable)
- Technical: JetBrains Mono (code, data, eyebrows)

**Zone Selection**: [Light Zone (client-facing, clarity) | Dark Zone (internal, mystery, depth)]

**Hero Treatment**: [full (100vh portal), prominent (60vh), compact (auto), minimal (left-aligned)]

**Creative Freedom**: You have FULL creative control over:
- Visual layout and composition
- Illustrations and SVG graphics
- Color usage within palette guidance
- Component selection and arrangement
- Animations and interactions
- Surprising delightful details

We trust your design instincts. Impress us.

---

## TECHNICAL CONSTRAINTS

Ã¢Å¡ â„¢Ã¯Â¸ **OUTPUT FORMAT**: Static HTML only (NO JSX, NO React components)

**Requirements**:
1. **File Type**: Single `.html` file with inline CSS or `<style>` block
2. **No External Dependencies**: Keep libraries minimal (Odyssey design tokens preferred)
3. **Fonts**: Link to Google Fonts for Cinzel, Inter, JetBrains Mono
4. **Responsive**: Mobile-friendly, test at 375px, 768px, 1440px widths
5. **Accessibility**: Color contrast WCAG AA minimum, focus states for interactive elements

**Odyssey Design System Reference** (if helpful):
- Use CSS custom properties like `var(--color-bronze)`, `var(--space-8)`
- Zone classes: `.zone-light` or `.zone-dark`
- Hero variants: `.hero--full`, `.hero--prominent`, `.hero--compact`, `.hero--minimal`
- Slot architecture: leading â†’ badge/meta â†’ eyebrow â†’ heading â†’ body â†’ actions â†’ footer

**Note**: You don't have to follow Odyssey patterns rigidly. They're references, not constraints. If you have a better visual approach, use it.

---

## FULL CONTENT (PRESERVE VERBATIM)

[PASTE ALL SOURCE CONTENT HERE - RESEARCH REPORT, COPY, DATA, EVERYTHING]

---

[Continue with full content below - do not truncate]

---

## STRUCTURAL GUIDANCE (OPTIONAL)

**Suggested Organization** (adapt as needed):
1. [Section 1 name]: [Brief description]
2. [Section 2 name]: [Brief description]
3. [etc.]

**Content Depth Handling**:
- For particularly long sections: Consider accordions or tabs
- For data-heavy content: Visualize with charts, tables, or HUD grids
- For lists: Explore card layouts, visual hierarchies, or interactive components

---

## SUCCESS CRITERIA

**Content Check**:
- Ã¢Å“â€¦ All source material present
- Ã¢Å“â€¦ User text unchanged
- Ã¢Å“â€¦ Citations/attributions preserved

**Aesthetic Check**:
- Ã¢Å“â€¦ Matches vibe/tone described above
- Ã¢Å“â€¦ Visually engaging and polished
- Ã¢Å“â€¦ Odyssey brand coherence (bronze/gold accents, zone logic)

**Technical Check**:
- Ã¢Å“â€¦ Works as standalone HTML file
- Ã¢Å“â€¦ No JSX/React syntax
- Ã¢Å“â€¦ Responsive and accessible

---

## QUESTIONS?

If anything is unclear or you need more context, ask before proceeding. We'd rather clarify upfront than iterate on misalignment.

---

**Handoff Date**: [Date]  
**Claude Notes**: [Any additional context for Gemini]
```

---

## CUSTOMIZATION GUIDE

### Section-by-Section Notes

#### 1. Content Preservation Block

**When to Emphasize**:
- Research reports (critical to maintain all findings)
- User-written copy (voice/tone must be preserved)
- Technical documentation (precision matters)

**Additional Warnings to Add**:
```
âš ï¸ This is a research report. The depth is the value. Do not trade substance for elegance.
âš ï¸ This content represents [X hours] of work. Treat it as sacred.
âš ï¸ User has strong opinions about their voice. Do not "clean up" their writing.
```

#### 2. Aesthetic Direction Block

**Vibe Examples**:
- "Professional and strategic, Apple keynote energy"
- "Warm and contemplative, philosophy-forward"
- "Technical and data-driven, command center aesthetic"
- "Mythic and epic, hero's journey"

**Reference Existing Work**:
- "Similar to Titan Research Engine (dark zone, HUD grids, technical mono typography)"
- "Like the Philosophy page (warm tones, generous whitespace, reflective)"
- "Standard Odyssey proposal style (light zone, prominent hero, phase stack)"

#### 3. Technical Constraints Block

**When to Add More Constraints**:
- If previous Gemini output had technical issues, specify explicitly
- If integrating with existing codebase, provide context
- If performance matters, add file size or load time requirements

**Example Additions**:
```
**Performance**: Target <500KB total file size, <2s load time on 3G
**Browser Support**: Must work in Safari, Chrome, Firefox (latest versions)
**Existing Code**: This will be integrated into [existing site], so match [X patterns]
```

#### 4. Full Content Block

**Critical**:
- Paste EVERYTHING here
- Don't summarize or condense
- Include formatting notes if relevant ("This section has 3 subsections", "This list has 12 items")

#### 5. Structural Guidance Block

**Use When**:
- Content is complex and organization isn't obvious
- You want to suggest visual treatments for specific sections
- There's a narrative flow that's important to preserve

**Example**:
```
**Suggested Flow**:
1. Executive summary â†’ Highlight block (elevated, visual callout)
2. Key findings â†’ HUD grid or card layout
3. Detailed analysis â†’ Accordion sections (preserve all depth, allow progressive disclosure)
4. Recommendations â†’ Phase stack or numbered list
5. Appendices â†’ Collapsible sections at bottom
```

---

## ANTI-PATTERNS (What NOT to Do)

### âŒ Vague Content Instructions

**Bad**:
```
"Include the research report content"
```

**Good**:
```
"Below is the complete research report. Include ALL findings, citations, and analysis verbatim. Do not shorten."
```

### âŒ Aesthetic Micromanagement

**Bad**:
```
"Use 24px font for headings, 16px for body, #B48E55 for accents, 32px spacing between sections..."
```

**Good**:
```
"Vibe: Professional and strategic. Reference Odyssey tokens (bronze/gold accents, Cinzel headings) but you have creative freedom on execution."
```

### âŒ Assuming Context

**Bad**:
```
"Make it like the last one"
```

**Good**:
```
"Similar aesthetic to Titan Research Engine (dark zone, technical feel, HUD grids for data). Here's a link: [URL]"
```

### âŒ Ambiguous Technical Requirements

**Bad**:
```
"Make it work on mobile"
```

**Good**:
```
"Responsive design required. Test at 375px (mobile), 768px (tablet), 1440px (desktop). Output static HTML, not JSX."
```

---

## SPECIAL CASE: RESEARCH REPORTS

Research reports require **maximum content preservation**. Use this enhanced warning:

```markdown
## Ã¢Å¡ Ã¯Â¸ RESEARCH REPORT: SPECIAL CONTENT RULES

This is a research report representing [X hours] of analysis. **Every finding, citation, data point, and nuance matters.**

**Absolute Rules**:
1. Include the ENTIRE report text, verbatim
2. Do NOT consolidate findings into summary bullets (summaries are IN ADDITION, not INSTEAD)
3. Do NOT remove citations or attributions
4. Do NOT shorten paragraphs for "readability"
5. Preserve technical terminology exactly as written

**How to Handle Depth**:
- Create an executive summary at the TOP (newly written, not replacing report)
- Use accordions for deep-dive sections (but full content is inside, accessible)
- Visual callouts can highlight key insights (but full analysis remains below)
- Appendices, data tables, references â†’ all included

**Content Audit**: Before delivering, check that every section from the source report is present in your output.
```

---

## POST-HANDOFF: CLAUDE'S AUDIT CHECKLIST

After Gemini delivers, Claude should verify:

### Content Fidelity Check

- [ ] All source material present (no deletions)
- [ ] User text unchanged (no paraphrasing)
- [ ] Citations/attributions intact
- [ ] Data points accurate
- [ ] Section structure preserved

**If content is missing**: Flag immediately, request Gemini to add it.

### Aesthetic Review

- [ ] Matches described vibe
- [ ] Visual quality is high (polished, not generic)
- [ ] Odyssey brand coherence (bronze/gold, zone logic)
- [ ] Illustrations/SVGs enhance (not distract from) content

**If aesthetic misses**: Provide specific feedback, iterate.

### Technical Check

- [ ] File is static HTML (not JSX)
- [ ] Works as standalone (no broken dependencies)
- [ ] Responsive at target widths
- [ ] Focus states present for interactive elements

**If technical issues**: Fix if minor (CSS tweak), hand back to Gemini if major (structural problem).

---

## ITERATION PROTOCOL

If Gemini's first output requires changes:

### Minor Iteration (Claude Handles)

**When**: Small tweaks (CSS adjustment, spacing, color)

**Claude's Action**: Make changes directly, document what was adjusted.

### Major Iteration (Hand Back to Gemini)

**When**: Significant content missing, aesthetic misalignment, structural issues

**Claude's Handoff**:
```markdown
# REVISION REQUEST: [Project Name]

## What Needs to Change

**Issue**: [Specific problem]
**Why**: [Explanation]
**Requested Fix**: [Clear instruction]

## What Was Good (Keep This)

- [Positive element 1]
- [Positive element 2]

## Updated Guidance

[Refined aesthetic direction or technical requirement]

---

[Re-attach full content if relevant]
```

---

## VERSION HISTORY

**v1.0** (2025-12-31):
- Initial template based on charter principles
- Forceful content preservation language
- Aesthetic freedom within constraints
- Static HTML requirement
- Research report special case

**Next Update**: After 5 Gemini handoffs, refine based on what works/breaks.

---

<!-- @PRESERVE â€” End of Gemini Handoff Template v1.0 -->

```yaml
---
type: TEMPLATE
status: Active
version: 2.1
date: 2026-01-02
tags: [gemini, handoff, multi-agent, content-preservation, xml-structured, operational]
usage: "Streamlined Gemini handoff template for Claude's operational use. Copy, customize bracketed sections, paste full content, hand to Gemini. Post-handoff audit protocols in separate file."
changelog: "v2.1 - Removed research validation bloat and anti-patterns (execution-focused, not educational). Post-handoff protocols moved to separate operational file."
derives_from: TEMPLATE_GEMINI_HANDOFF_odyssey-design-system_v2.0_2026-01-02.md
companion_file: POST_HANDOFF_audit-refinement-protocols_v1_2026-01-02.md
---
```

# GEMINI HANDOFF TEMPLATE v2.1

> **Purpose**: XML-structured template for handing work from Claude to Gemini. Achieves 95%+ content preservation through position optimization, quantitative constraints, and self-verification.

---

## TEMPLATE (Copy & Customize)

```xml
<creative_brief>
  <project_name>[Project Name]</project_name>
  
  <!-- ============================================== -->
  <!-- CONTENT PRESERVATION (CRITICAL)                 -->
  <!-- ============================================== -->
  
  <content_preservation>
    <critical_instruction>
      âš ï¸ CRITICAL: You MUST preserve ALL content provided below, verbatim.
      This is a NON-NEGOTIABLE requirement. Success = 100% content retention.
    </critical_instruction>
    
    <role>
      You are a design-aware developer who understands visual presentation 
      AND respects content integrity. Use your design comprehension to 
      preserve substance while adding sophisticated presentation layers.
    </role>
    
    <mandatory_rules>
      CONTENT PRESERVATION REQUIREMENTS:
      - DO NOT summarize, condense, or paraphrase ANY content
      - DO NOT remove sections, paragraphs, or sentences
      - DO NOT consolidate content into bullet points (unless source is bullets)
      - Output length MUST match input length within Â±5%
      - Every heading/subheading must appear EXACTLY as written
      - ALL source material must be accessible in final output
    </mandatory_rules>
    
    <permitted_additions>
      What you CAN add (in ADDITION to full content):
      âœ… Visual summaries or callouts (supplements, not replacements)
      âœ… Accordions, tabs, collapsible sections (content stays accessible inside)
      âœ… Visual hierarchy through typography, color, spacing
      âœ… Illustrations, SVGs, graphics, or visual elements
      âœ… Progressive disclosure patterns (content remains, just organized)
    </permitted_additions>
    
    <forbidden_actions>
      What you CANNOT do:
      âŒ Delete any content
      âŒ Change user-provided text
      âŒ Replace depth with summary only
      âŒ Paraphrase for "readability"
      âŒ Remove citations, attributions, or technical details
    </forbidden_actions>
    
    <special_content_rules>
      <!-- Add if applicable -->
      [IF RESEARCH REPORT: âš ï¸ This represents [X hours] of analysis. Every finding, 
      citation, data point, and nuance matters. Depth is the valueâ€”do not trade 
      substance for elegance.]
      
      [IF USER VOICE: âš ï¸ User has strong opinions about their voice. Do not "clean up" 
      or "improve" their writing style.]
    </special_content_rules>
  </content_preservation>
  
  <!-- ============================================== -->
  <!-- AESTHETIC DIRECTION                             -->
  <!-- ============================================== -->
  
  <aesthetic_direction>
    <vibe_tone>
      [e.g., "Professional and strategic with Apple keynote energy" 
      OR "Contemplative and warm, philosophy-forward"
      OR "Technical and data-driven, command center aesthetic"]
    </vibe_tone>
    
    <visual_references>
      [e.g., "Similar to Titan Research Engine aesthetic (dark zone, HUD grids, technical mono typography)"
      OR "Think museum exhibitâ€”striking but not overwhelming"
      OR "Reference: [URL to existing work]"]
    </visual_references>
    
    <color_palette>
      Primary Brand: Bronze (#B48E55), Gold (#D4AF37)
      Interactive: [Light zone: Electric Blue #2563EB | Dark zone: Sky Blue #38BDF8]
      [Add any specific color notes or overrides]
    </color_palette>
    
    <typography>
      Display: Cinzel (headings, epic/mythic quality)
      Body: Inter (modern, readable paragraphs)
      Technical: JetBrains Mono (code, data, eyebrows, labels)
      [Add any specific hierarchy or usage notes]
    </typography>
    
    <zone_selection>
      [Light Zone: Client-facing, clarity, professional]
      [Dark Zone: Internal, mystery, depth, contemplative]
      [Specify which and why]
    </zone_selection>
    
    <hero_treatment>
      [full: 100vh portal | prominent: 60vh | compact: auto | minimal: left-aligned]
      [Specify based on content type and audience]
    </hero_treatment>
    
    <creative_freedom>
      You have FULL creative control over:
      âœ¨ Visual layout and composition
      âœ¨ Illustrations and SVG graphics  
      âœ¨ Color usage within palette guidance
      âœ¨ Component selection and arrangement
      âœ¨ Animations and interactions
      âœ¨ Surprising delightful details
      
      We trust your design instincts. Impress us while preserving content.
    </creative_freedom>
  </aesthetic_direction>
  
  <!-- ============================================== -->
  <!-- TECHNICAL CONSTRAINTS                           -->
  <!-- ============================================== -->
  
  <technical_constraints>
    <output_format>
      âš ï¸ CRITICAL: Static HTML onlyâ€”NO JSX, NO React components in output
    </output_format>
    
    <requirements>
      1. File Type: Single .html file with inline CSS or &lt;style&gt; block
      2. Dependencies: Keep minimal (Odyssey design tokens preferred)
      3. Fonts: Link to Google Fonts for Cinzel, Inter, JetBrains Mono
      4. Responsive: Mobile-friendly, test at 375px, 768px, 1440px widths
      5. Accessibility: Color contrast WCAG AA minimum, focus states, semantic HTML
      6. Performance: Optimize images, minimize CSS, efficient animations
    </requirements>
    
    <odyssey_reference>
      Optional Odyssey Design System patterns (use if helpful, not required):
      - CSS custom properties: var(--color-bronze), var(--space-8)
      - Zone classes: .zone-light or .zone-dark
      - Hero variants: .hero--full, .hero--prominent, .hero--compact, .hero--minimal
      - Slot architecture: leading â†’ badge/meta â†’ eyebrow â†’ heading â†’ body â†’ actions â†’ footer
      
      NOTE: These are references, not rigid requirements. If you have a better 
      visual approach, use it.
    </odyssey_reference>
    
    <additional_constraints>
      [Add project-specific requirements like:
      - Performance targets: &lt;500KB file size, &lt;2s load on 3G
      - Browser support: Safari, Chrome, Firefox (latest)
      - Integration context: Must match existing [X] patterns]
    </additional_constraints>
  </technical_constraints>
  
  <!-- ============================================== -->
  <!-- FULL CONTENT (PRESERVE VERBATIM)                -->
  <!-- ============================================== -->
  
  <input_content>
    <content_metadata>
      Total sections: [X]
      Estimated word count: ~[Y] words
      Content type: [Research report | User copy | Technical doc | etc.]
      Special notes: [Any formatting or structural notes]
    </content_metadata>
    
    <full_content>
      <!-- PASTE ALL SOURCE CONTENT HERE - NO TRUNCATION -->
      
      [INSERT COMPLETE CONTENT BELOW]
      
      
      <!-- Continue with full content - do not stop or summarize -->
      
    </full_content>
  </input_content>
  
  <!-- ============================================== -->
  <!-- STRUCTURAL GUIDANCE (OPTIONAL)                  -->
  <!-- ============================================== -->
  
  <structural_guidance>
    <suggested_organization>
      Adapt as needed for best visual presentation:
      
      1. [Section 1 name]: [Brief description of content and suggested treatment]
      2. [Section 2 name]: [Brief description of content and suggested treatment]
      3. [Section 3 name]: [Brief description of content and suggested treatment]
      
      [Add more sections as needed]
    </suggested_organization>
    
    <depth_handling_strategy>
      For particularly long sections: Consider accordions or tabs
      For data-heavy content: Visualize with charts, tables, or HUD grids
      For lists: Explore card layouts, visual hierarchies, or interactive components
      For deep analysis: Progressive disclosure with full content accessible
      
      [Add specific recommendations based on content structure]
    </depth_handling_strategy>
    
    <narrative_flow>
      [If content follows specific journey or progression:
      "This follows a hero's journey arc: threshold â†’ trials â†’ transformation â†’ return"
      OR "Content builds from problem â†’ analysis â†’ solution â†’ implementation"]
    </narrative_flow>
  </structural_guidance>
  
  <!-- ============================================== -->
  <!-- SELF-VERIFICATION (CRITICAL)                    -->
  <!-- ============================================== -->
  
  <self_verification>
    <instruction>
      Before outputting your final HTML, you MUST complete this verification 
      checklist. Do not skip. Answer each honestly.
    </instruction>
    
    <checklist>
      CONTENT FIDELITY CHECK:
      â–¡ Section count: Input has [X], my output has [___]
      â–¡ Word count: Input ~[Y] words, my output ~[___] words (within Â±5%?)
      â–¡ All headings preserved verbatim: [List them to verify]
      â–¡ All citations/attributions present: YES / NO
      â–¡ Any content removed or condensed: YES / NO (if YES, restore it now)
      â–¡ Preservation score (0-10, be honest): [___]
      
      AESTHETIC QUALITY CHECK:
      â–¡ Matches vibe/tone described above: YES / NO
      â–¡ Visually engaging and polished: YES / NO
      â–¡ Odyssey brand coherence (bronze/gold, zone logic): YES / NO
      â–¡ Illustrations enhance without distracting: YES / NO
      
      TECHNICAL QUALITY CHECK:
      â–¡ Static HTML (no JSX/React syntax): YES / NO
      â–¡ Works as standalone file: YES / NO
      â–¡ Responsive at 375px, 768px, 1440px: YES / NO
      â–¡ Focus states for interactive elements: YES / NO
      â–¡ Accessible (WCAG AA contrast, semantic HTML): YES / NO
      
      FINAL GATE:
      If ANY content check is NO â†’ STOP and fix before outputting
      If preservation score &lt; 9 â†’ STOP and restore missing content
      If 5+ technical checks are NO â†’ Flag issues in output notes
    </checklist>
  </self_verification>
  
  <!-- ============================================== -->
  <!-- SUCCESS CRITERIA SUMMARY                        -->
  <!-- ============================================== -->
  
  <success_criteria>
    <content_success>
      âœ… All source material present (100% content retention)
      âœ… User text unchanged (verbatim preservation)
      âœ… Citations/attributions intact
      âœ… Output length matches input Â±5%
    </content_success>
    
    <aesthetic_success>
      âœ… Matches vibe/tone described
      âœ… Visually engaging and polished
      âœ… Odyssey brand coherence
      âœ… Design enhances without overwhelming content
    </aesthetic_success>
    
    <technical_success>
      âœ… Static HTML file (no JSX)
      âœ… Responsive and accessible
      âœ… Works standalone
      âœ… Performance acceptable
    </technical_success>
  </success_criteria>
  
  <!-- ============================================== -->
  <!-- QUESTIONS & CONTEXT                             -->
  <!-- ============================================== -->
  
  <handoff_metadata>
    <handoff_date>[Date]</handoff_date>
    
    <claude_notes>
      [Any additional context for Gemini:
      - Special considerations about content
      - Known challenges or complexity
      - Previous iteration feedback
      - Specific areas of concern]
    </claude_notes>
    
    <questions>
      If anything is unclear or you need more context, ask BEFORE proceeding. 
      We'd rather clarify upfront than iterate on misalignment.
    </questions>
  </handoff_metadata>
</creative_brief>
```

---

## CUSTOMIZATION QUICK REFERENCE

**Required Customizations** (search for `[` to find):
1. `<project_name>`: The actual project name
2. `<vibe_tone>`: Specific aesthetic direction
3. `<zone_selection>`: Light or Dark zone
4. `<hero_treatment>`: Which hero variant
5. `<content_metadata>`: Section count, word count
6. `<full_content>`: **PASTE ALL SOURCE CONTENT**
7. `<handoff_date>`: Current date

**Optional Customizations**:
- `<visual_references>`: Links or descriptions
- `<special_content_rules>`: Uncomment if research report or user voice
- `<additional_constraints>`: Project-specific requirements
- `<suggested_organization>`: Section-by-section guidance
- `<narrative_flow>`: If content follows specific progression
- `<claude_notes>`: Additional context for Gemini

**Remove if not needed**:
- Entire `<structural_guidance>` section if organization is obvious
- `<additional_constraints>` if default requirements sufficient

---

## POST-HANDOFF WORKFLOW

**After Gemini delivers**, use companion file:
â†’ `POST_HANDOFF_audit-refinement-protocols_v1_2026-01-02.md`

That file contains:
- Content fidelity audit checklist
- Aesthetic review protocol
- Technical validation steps
- Non-destructive refinement protocol (when Claude fixes)
- Iteration protocol (when to hand back to Gemini)

---

## VERSION HISTORY

**v2.1** (2026-01-02):
- Removed research validation section (bloat for operational use)
- Removed anti-patterns section (positive instructions sufficient)
- Separated post-handoff protocols into companion file
- Streamlined for Claude's procedural execution

**v2.0** (2026-01-02):
- XML structure with position optimization
- Quantitative constraints (Â±5% word count)
- Self-verification protocol
- Positive role framing

**v1.0** (2025-12-31):
- Initial template with forceful preservation language

---

**END TEMPLATE v2.1**

<!-- @PRESERVE â€” Streamlined Gemini Handoff Template v2.1 -->

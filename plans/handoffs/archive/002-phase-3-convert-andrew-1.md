---
handoff_id: 002-phase-3
phase_number: 3
phase_name: Convert andrew-1 → CallToAdventure.jsx
from_agent: Phase 2 (Migrate Home)
to_agent: Execution Agent
date: 2026-01-03
estimated_time: 35-45 mins
estimated_cost: $4-6
dependencies: Phase 2 complete, Home.jsx exists and works
---

# Phase 3: Convert andrew-1-call-to-adventure.html → CallToAdventure.jsx

## 🎯 Phase Objective

**Convert the andrew-1 HTML file to a working React component with embedded GlobalStyles, then validate visually against the original.**

---

## 📌 Prerequisites (Verify Before Starting)

- [ ] Phase 2 status is ✅ Complete in meta-plan
- [ ] `sites/odyssey-lab/src/pages/Home.jsx` exists and works
- [ ] `sites/odyssey-lab/src/pages/` directory exists
- [ ] Dev server runs successfully

**Reference meta-plan for:** HTML→JSX conversion rules, component patterns.
**Meta-plan location:** `plans/002-html-to-react-migration-META.md`

---

## 🧠 Phase-Specific Context

**Source file:** `_workspace/andrew gem merge/andrew-1-call-to-adventure.html` (1231 lines)

**Target:** `sites/odyssey-lab/src/pages/CallToAdventure.jsx`

**Complexity:** Medium
- Clean tokens, professional aesthetic
- Some accordion interactions
- No complex effects (no Lenis, no lens)

**Key conversions needed:**
- `<style>` block → GlobalStyles component
- `class=""` → `className=""`
- `<script>` accordion logic → React useState
- Self-close void tags
- Google Fonts `<link>` → `@import` in GlobalStyles

---

## ⚠️ Tool Safety Protocol

**Before using ANY tool:**
1. List available tools, verify tool exists
2. Check ALL required parameters
3. If tool fails 2x, use fallback method
4. Stop condition: Don't retry malformed calls indefinitely

**Fallback strategies for this phase:**
- If file read fails: Try smaller chunks
- If token limit hits: Process file in sections (styles, then body, then scripts)
- If JSX syntax errors: Fix incrementally, test often

---

## 🚀 Execution Steps

### Step 3.1: Read Source HTML

**What:** Get the full HTML file content.

**How:**
```bash
cat "_workspace/andrew gem merge/andrew-1-call-to-adventure.html"
```

**What to identify:**
1. **`<style>` block** (usually lines 5-150+) - will become GlobalStyles
2. **Google Fonts `<link>`** - note URL for @import
3. **`<body>` content** - will become JSX
4. **`<script>` blocks** - will become React hooks

**Time:** 2-3 minutes

---

### Step 3.2: Extract GlobalStyles

**What:** Create the GlobalStyles component from the `<style>` block.

**Template:**
```jsx
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
    
    /* PASTE ALL CSS FROM <style> BLOCK HERE */
    :root {
      --color-bronze: #B48E55;
      /* ... rest of tokens ... */
    }
    
    /* ... all component styles ... */
  `}</style>
);
```

**Key transformations:**
- Convert `<link>` fonts to `@import url()` at top of CSS
- Keep ALL CSS custom properties (--color-*, --space-*, etc.)
- Keep ALL component styles (.meta-card, .highlight-block, etc.)
- Keep ALL media queries

**DO NOT:**
- Remove any styles
- "Simplify" or "clean up" CSS
- Replace tokens with hardcoded values

**Time:** 8-10 minutes

---

### Step 3.3: Convert Body to JSX

**What:** Transform HTML body content to valid JSX.

**Transformations:**
| HTML | JSX |
|------|-----|
| `class="foo"` | `className="foo"` |
| `for="id"` | `htmlFor="id"` |
| `<img src="">` | `<img src="" />` |
| `<input>` | `<input />` |
| `<br>` | `<br />` |
| `<!-- comment -->` | `{/* comment */}` |
| `style="color: red;"` | `style={{ color: 'red' }}` |

**Pattern for inline styles:**
```jsx
// HTML: style="margin-top: 20px; color: #B48E55;"
// JSX: style={{ marginTop: '20px', color: '#B48E55' }}
```

**DO NOT:**
- Remove any content
- Restructure the layout
- Add React components where none existed

**Time:** 10-12 minutes

---

### Step 3.4: Convert Accordion Interactions

**What:** Transform vanilla JS accordion logic to React state.

**Source pattern (HTML/JS):**
```html
<div class="accordion">
  <div class="accordion__header" onclick="toggleAccordion(this)">
    <h3>Title</h3>
    <span class="accordion__toggle">↓</span>
  </div>
  <div class="accordion__content">Content</div>
</div>

<script>
function toggleAccordion(header) {
  const accordion = header.closest('.accordion');
  accordion.classList.toggle('is-expanded');
}
</script>
```

**Target pattern (React):**
```jsx
function CallToAdventure() {
  const [expandedAccordions, setExpandedAccordions] = useState({});
  
  const toggleAccordion = (id) => {
    setExpandedAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  return (
    <>
      <GlobalStyles />
      {/* ... other content ... */}
      <div className={`accordion ${expandedAccordions['acc1'] ? 'is-expanded' : ''}`}>
        <div 
          className="accordion__header" 
          onClick={() => toggleAccordion('acc1')}
        >
          <h3>Title</h3>
          <span className="accordion__toggle">↓</span>
        </div>
        <div className="accordion__content">Content</div>
      </div>
    </>
  );
}
```

**Key points:**
- Use `useState` for accordion state
- Use unique IDs for multiple accordions
- Keep CSS class toggling pattern (`is-expanded`)
- Convert `onclick` to `onClick` with function reference

**Time:** 5-8 minutes

---

### Step 3.5: Assemble Final Component

**What:** Put all pieces together into final CallToAdventure.jsx.

**Structure:**
```jsx
import React, { useState } from 'react';

const GlobalStyles = () => (
  <style>{`
    /* All CSS from Step 3.2 */
  `}</style>
);

function CallToAdventure() {
  // State for accordions
  const [expandedAccordions, setExpandedAccordions] = useState({});
  
  const toggleAccordion = (id) => {
    setExpandedAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  return (
    <>
      <GlobalStyles />
      {/* All JSX from Step 3.3, with accordions from Step 3.4 */}
    </>
  );
}

export default CallToAdventure;
```

**Write to:** `sites/odyssey-lab/src/pages/CallToAdventure.jsx`

**Time:** 3-5 minutes

---

### Step 3.6: Syntax Validation

**What:** Check for JSX errors before testing.

**How:**
```bash
# Check file was created
ls -la sites/odyssey-lab/src/pages/CallToAdventure.jsx

# Count lines (should be similar to source: ~1200+)
wc -l sites/odyssey-lab/src/pages/CallToAdventure.jsx
```

**Common JSX errors to watch for:**
- Unclosed tags (JSX requires ALL tags closed or self-closed)
- Missing `className` (forgot to convert `class`)
- Invalid attribute names (`onclick` instead of `onClick`)
- Unclosed curly braces in expressions

**Time:** 2-3 minutes

---

### Step 3.7: Visual Comparison

**What:** Side-by-side comparison with original HTML.

**Method A: Browser Comparison**

1. **Open original HTML:**
   ```bash
   # Open in default browser
   open "_workspace/andrew gem merge/andrew-1-call-to-adventure.html"
   ```

2. **Open converted React (after dev server running):**
   - Navigate to `http://localhost:5173/` (Home will show)
   - Temporarily modify App.jsx to render CallToAdventure for testing
   
   ```jsx
   import CallToAdventure from './pages/CallToAdventure';
   
   function App() {
     return <CallToAdventure />;
   }
   ```

3. **Compare side-by-side:**
   - [ ] Header/hero: Fonts, spacing, colors match
   - [ ] Cards/components: Borders, shadows, spacing identical
   - [ ] Typography: Line heights, letter spacing, font weights
   - [ ] Colors: Bronze/gold exact (use eyedropper if unsure)
   - [ ] Spacing: Margins, padding consistent

4. **Test interactions:**
   - [ ] Accordions expand/collapse correctly
   - [ ] Hover states work
   - [ ] Scroll behavior smooth

5. **Console check:**
   - [ ] No errors in browser console
   - [ ] No warnings about missing assets
   - [ ] No 404s for fonts

**Stop if:** Visual regression detected. Fix before proceeding.

**Time:** 5-8 minutes

---

### Step 3.8: Revert App.jsx (If Modified)

**What:** If you modified App.jsx for visual testing, revert it.

**How:**
```bash
cp sites/odyssey-lab/src/App.jsx.backup sites/odyssey-lab/src/App.jsx
```

**Why:** App.jsx refactoring happens in Phase 5.

**Time:** 1 minute

---

## ✅ Post-Phase Validation

**Validation A: File Exists**
- [ ] `sites/odyssey-lab/src/pages/CallToAdventure.jsx` exists
- [ ] File has ~1000-1300 lines

**Validation B: No Syntax Errors**
- [ ] Dev server starts without errors
- [ ] No console errors on page load

**Validation C: Visual Parity**
- [ ] Appearance matches original HTML exactly
- [ ] Colors, fonts, spacing all correct
- [ ] No broken layouts

**Validation D: Interactions Work**
- [ ] Accordions expand/collapse
- [ ] Hover states visible
- [ ] All content visible

---

## 🎯 Success Criteria

Phase is DONE when:
- [x] CallToAdventure.jsx exists at `sites/odyssey-lab/src/pages/`
- [x] Contains embedded GlobalStyles with all CSS
- [x] All HTML converted to valid JSX
- [x] Accordion interactions work via React state
- [x] Visual comparison shows no regressions
- [x] No console errors
- [x] App.jsx unchanged (still original)

---

## 🛑 Stop Conditions

- [ ] If syntax errors can't be fixed in 5 mins, STOP and document issue
- [ ] If visual regression is major (broken layout), STOP and fix
- [ ] If any section of HTML can't be converted, STOP and document
- [ ] If cost exceeds $8, STOP (exceeding budget significantly)

---

## 📦 Outputs

**Files created:**
- `sites/odyssey-lab/src/pages/CallToAdventure.jsx`

**Files modified:**
- None (App.jsx temporary changes reverted)

**Decisions made:**
- Accordion state management pattern (expandedAccordions object)

---

## 🔄 Handoff to Next Phase

**What Phase 4 needs to know:**
- Files created: CallToAdventure.jsx at pages/
- Visual parity: Confirmed (or note any differences)
- Accordion pattern: Uses `expandedAccordions` state object with toggle function
- Any deviations: Document conversion challenges

**Update meta-plan status:**
```markdown
| 3 | `002-phase-3-convert-andrew-1.md` | ✅ Complete | [date/time] | [date/time] | $[X] | [X] mins | [issues or "None"] |
```

---

## ⏱️ Time Budget

- Estimated: 35-45 minutes
- If exceeds estimate by 50% (>60 mins), STOP and reassess

## 💰 Cost Budget

- Estimated: $4-6
- If exceeds $8, STOP and report

---

## See Also

- Meta-plan: `plans/002-html-to-react-migration-META.md`
- Previous: `plans/handoffs/002-phase-2-migrate-home.md`
- Next: `plans/handoffs/002-phase-4-convert-andrew-gem-2.md`
- HTML→JSX rules: Meta-plan "HTML→JSX Conversion Rules" section


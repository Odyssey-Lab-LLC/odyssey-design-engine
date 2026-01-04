---
handoff_id: 002-phase-3
phase_number: 3
phase_name: Convert andrew-1 + Add Route
from_agent: Phase 2 (Migrate Home + Router)
to_agent: Execution Agent
date: 2026-01-03
estimated_time: 25-35 mins
estimated_cost: $4-6
dependencies: Phase 2 complete, Home.jsx exists and works, router has / route, dev server running
---

# Phase 3: Convert andrew-1-call-to-adventure.html → CallToAdventure.jsx + Add Route

## 🎯 Phase Objective

**Convert the andrew-1 HTML file to a working React component with embedded GlobalStyles, then add its route to the router and validate visually.**

---

## 📌 Prerequisites (Verify Before Starting)

- [ ] Phase 2 status is ✅ Complete in meta-plan
- [ ] `sites/odyssey-lab/src/pages/Home.jsx` exists and works
- [ ] `sites/odyssey-lab/src/App.jsx` is router wrapper (not page content)
- [ ] Router has `/` route working
- [ ] Dev server runs successfully

**Reference meta-plan for:** HTML→JSX conversion rules, component patterns.
**Meta-plan location:** `plans/002-html-to-react-migration-META.md`

---

## 🖥️ Dev Server Status

- **Needs dev server:** Yes
- **Expected state before phase:** Should be running (from Phase 2)
- **Start command:** `npm run dev` (if not running, wait for "Local: http://localhost:5173")
- **After phase:** Keep running (Phase 4 will need it)
- **Why:** Visual validation requires dev server. Route testing requires dev server.

---

## 📁 File Paths Reference

**Project root:** `/Users/brandonmcpeak/GitHub & Projects/odyssey-design-engine/`

**Paths with spaces (ALWAYS use quotes in shell):**
```bash
# Good:
cat "_workspace/andrew gem merge/andrew-1-call-to-adventure.html"

# Bad (BREAKS):
cat _workspace/andrew gem merge/andrew-1-call-to-adventure.html
```

**This phase's key paths:**
- Source: `"_workspace/andrew gem merge/andrew-1-call-to-adventure.html"` (1231 lines)
- Target: `sites/odyssey-lab/src/pages/CallToAdventure.jsx`
- Router: `sites/odyssey-lab/src/App.jsx`

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

**Time:** 8-10 minutes

---

### Step 3.4: Convert Script Logic to React

**What:** Convert inline `<script>` accordion logic to React state.

**Source pattern (inline script):**
```javascript
document.querySelectorAll('.accordion__header').forEach(header => {
  header.addEventListener('click', () => {
    const accordion = header.closest('.accordion');
    accordion.classList.toggle('is-expanded');
  });
});
```

**Target pattern (React):**
```jsx
const [expandedAccordions, setExpandedAccordions] = useState({});

const toggleAccordion = (id) => {
  setExpandedAccordions(prev => ({ 
    ...prev, 
    [id]: !prev[id] 
  }));
};

// In JSX:
<div className={`accordion ${expandedAccordions['section-1'] ? 'is-expanded' : ''}`}>
  <div 
    className="accordion__header"
    onClick={() => toggleAccordion('section-1')}
  >
    {/* header content */}
  </div>
  <div className="accordion__content">
    {/* content */}
  </div>
</div>
```

**ID generation:** Use stable IDs based on section name or index, e.g., `acc-principles-0`, `acc-timeline-1`.

**Time:** 5-8 minutes

---

### Step 3.5: Assemble Component

**What:** Combine all pieces into final component.

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
    setExpandedAccordions(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  return (
    <>
      <GlobalStyles />
      {/* All converted JSX from Step 3.3 */}
    </>
  );
}

export default CallToAdventure;
```

**Write to:** `sites/odyssey-lab/src/pages/CallToAdventure.jsx`

**Time:** 3-5 minutes

---

### Step 3.6: Add Route to Router

**This is the Route Addition Protocol - follow exactly.**

**What:** Add the `/call-to-adventure` route to App.jsx.

**How:**

1. Open `sites/odyssey-lab/src/App.jsx`

2. Add import at top:
   ```jsx
   import CallToAdventure from './pages/CallToAdventure';
   ```

3. Add route inside `<Routes>`:
   ```jsx
   <Route path="/call-to-adventure" element={<CallToAdventure />} />
   ```

4. **Updated App.jsx should look like:**
   ```jsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import Home from './pages/Home';
   import CallToAdventure from './pages/CallToAdventure';

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/call-to-adventure" element={<CallToAdventure />} />
         </Routes>
       </BrowserRouter>
     );
   }

   export default App;
   ```

5. Save file

**Time:** 2-3 minutes

---

## 🔀 Route Addition Protocol

**After creating the component, test its route:**

1. Dev server auto-reloads (wait 2-3 seconds for HMR)
2. Navigate to `http://localhost:5173/call-to-adventure`
3. Verify page renders (should see content, not 404)
4. Check browser console (F12 → Console tab)
5. If errors: Check import path, component export
6. If 404: Check route path matches URL

**Stop conditions for route addition:**
- Route 404s after 2 attempts → STOP (component not exported correctly)
- Console shows import errors → STOP (path issue, check relative paths)
- Page renders but console errors → FIX imports/dependencies, don't proceed
- Stuck >5 minutes on route issues → STOP and document

**DO NOT add multiple routes in one phase** - one component = one route = one phase

---

### Step 3.7: Visual Comparison

**What:** Compare converted React page with original HTML.

**Method:**

1. **Open original HTML:**
   ```bash
   open "_workspace/andrew gem merge/andrew-1-call-to-adventure.html"
   ```
   (Or open directly in browser)

2. **Open converted React page:**
   - Navigate to `http://localhost:5173/call-to-adventure`

3. **Side-by-side comparison checklist:**

| Element | Match? | Notes |
|---------|--------|-------|
| Header/Hero layout | | |
| Typography (Cinzel headers) | | |
| Bronze/gold colors | | |
| Meta-card styling | | |
| Highlight blocks | | |
| Phase stack/timeline | | |
| Spacing/margins | | |
| Background colors | | |

4. **Interactions test:**
   - [ ] Accordions expand/collapse correctly
   - [ ] Hover states work (color changes, underlines, etc.)
   - [ ] Scroll behavior normal

5. **Console check:**
   - [ ] No errors in browser console
   - [ ] No warnings about missing assets
   - [ ] No 404s for fonts or resources

6. **Mobile test (quick):**
   - [ ] Open DevTools, toggle to 375px width
   - [ ] Layout doesn't break
   - [ ] Text readable

**Stop if:** ANY visual regression detected (colors off, layout broken, spacing wrong). Fix before proceeding.

**Acceptable differences:**
- React DevTools indicators
- Hot reload overlay (dev mode)
- Minor sub-pixel rendering differences (<1px)

**Time:** 3-5 minutes

---

## ✅ Post-Phase Validation

**Validation A: File Exists**
- [ ] `sites/odyssey-lab/src/pages/CallToAdventure.jsx` exists
- [ ] File has ~1000-1300 lines

**Validation B: Component Structure**
- [ ] Has GlobalStyles component with all CSS
- [ ] Function named `CallToAdventure`
- [ ] Export is `export default CallToAdventure`
- [ ] Uses React useState for accordions

**Validation C: Route Works**
- [ ] `/call-to-adventure` loads the page
- [ ] No 404 on direct navigation
- [ ] No console errors

**Validation D: Visual Parity**
- [ ] Page looks identical to original HTML
- [ ] Accordions work
- [ ] Fonts load correctly

**Validation E: Existing Route Still Works**
- [ ] `/` still loads Home correctly
- [ ] No regression on Home page

---

## 🎯 Success Criteria

Phase is DONE when:
- [x] CallToAdventure.jsx exists at `sites/odyssey-lab/src/pages/`
- [x] Contains embedded GlobalStyles with all CSS
- [x] Route added to App.jsx (`/call-to-adventure`)
- [x] Dev server runs without errors
- [x] Page renders at `/call-to-adventure`
- [x] Visual comparison passed (matches original)
- [x] Accordions work
- [x] No console errors
- [x] Home route (`/`) still works

---

## 🛑 Stop Conditions

- [ ] If page won't render at all, STOP
- [ ] If route 404s after 2 attempts, STOP
- [ ] If major visual regression (layout broken), STOP
- [ ] If accordions completely broken, STOP
- [ ] If console shows import errors that won't resolve, STOP
- [ ] If cost exceeds $10, STOP

---

## 📦 Outputs

**Files created:**
- `sites/odyssey-lab/src/pages/CallToAdventure.jsx`

**Files modified:**
- `sites/odyssey-lab/src/App.jsx` (added import and route)

**Decisions made:**
- Kept embedded GlobalStyles (page sovereignty)
- Converted accordions to React state pattern

---

## 🔄 Handoff to Next Phase

**What Phase 4 needs to know:**
- Files created: CallToAdventure.jsx at pages/
- Route added: `/call-to-adventure` working
- Visual parity: Confirmed
- Dev server: KEEP RUNNING
- Any deviations: Document if anything different

**Update meta-plan status:**
```markdown
| 3 | `002-phase-3-convert-andrew-1.md` | ✅ Complete | [date/time] | [date/time] | $[X] | [X] mins | [issues or "None"] |
```

---

## ⏱️ Time Budget

- Estimated: 25-35 minutes
- If exceeds estimate by 50% (>52 mins), STOP and reassess

## 💰 Cost Budget & Progress Monitoring

- Estimated: $4-6

**Monitor PROGRESS, not just cost:**

**Green flag:** Cost at $6, phase completes → Continue (worth it)
**Yellow flag:** Cost at 1.5× $6, phase 50% done → Continue cautiously
**Red flag:** Cost at 2× $6, phase <25% done → STOP (something wrong)

**Better abort signal: Time stuck without progress**
- >15 mins debugging same error with no code changes → STOP
- Same tool call fails 3+ times → Use fallback or STOP
- >30 mins on phase with <50 lines of code written → STOP
- Cost rising but files being created → Acceptable
- Cost rising with NO file changes → STOP (tool loop)

---

## See Also

- Meta-plan: `plans/002-html-to-react-migration-META.md`
- Previous: `plans/handoffs/002-phase-2-migrate-home.md`
- Next: `plans/handoffs/002-phase-4-convert-andrew-2.md`


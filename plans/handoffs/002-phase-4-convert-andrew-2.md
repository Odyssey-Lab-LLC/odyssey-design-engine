---
handoff_id: 002-phase-4
phase_number: 4
phase_name: Convert andrew-2 + Add Route
from_agent: Phase 3 (Convert andrew-1 + Route)
to_agent: Execution Agent
date: 2026-01-03
estimated_time: 40-50 mins
estimated_cost: $6-8
dependencies: Phase 3 complete, CallToAdventure.jsx exists and works, router has / and /call-to-adventure routes
---

# Phase 4: Convert andrew-gem-2.jsx → ThresholdConvergence.jsx + Add Route

## 🎯 Phase Objective

**Convert the complex andrew-gem-2 file to a working React component with all interactive features (lens, matrix text, zones, Lenis) OR working fallbacks, then add its route and validate.**

---

## 📌 Prerequisites (Verify Before Starting)

- [ ] Phase 3 status is ✅ Complete in meta-plan
- [ ] `sites/odyssey-lab/src/pages/CallToAdventure.jsx` exists and works
- [ ] Router has `/` and `/call-to-adventure` routes working
- [ ] Dev server runs successfully
- [ ] `@studio-freight/lenis` is installed (from Phase 1)

**Reference meta-plan for:** HTML→JSX conversion rules, component patterns.
**Meta-plan location:** `plans/002-html-to-react-migration-META.md`

---

## 🖥️ Dev Server Status

- **Needs dev server:** Yes
- **Expected state before phase:** Should be running (from Phase 3)
- **Start command:** `npm run dev` (if not running, wait for "Local: http://localhost:5173")
- **After phase:** Keep running (for validation), then can STOP before Phase 5
- **Why:** Visual validation requires dev server. Route testing requires dev server.

---

## 📁 File Paths Reference

**Project root:** `/Users/brandonmcpeak/GitHub & Projects/odyssey-design-engine/`

**Paths with spaces (ALWAYS use quotes in shell):**
```bash
# Good:
cat "_workspace/andrew gem merge/andrew-gem-2.jsx"

# Bad (BREAKS):
cat _workspace/andrew gem merge/andrew-gem-2.jsx
```

**This phase's key paths:**
- Source: `"_workspace/andrew gem merge/andrew-gem-2.jsx"` (714 lines)
- Target: `sites/odyssey-lab/src/pages/ThresholdConvergence.jsx`
- Router: `sites/odyssey-lab/src/App.jsx`

---

## 🧠 Phase-Specific Context

**Source file:** `_workspace/andrew gem merge/andrew-gem-2.jsx` (714 lines)

**Target:** `sites/odyssey-lab/src/pages/ThresholdConvergence.jsx`

**Complexity:** HIGH ⚠️

**Complex features requiring conversion:**
1. **Lens mouse tracking** - CSS custom properties updated via JS
2. **Matrix text decode** - Character randomization animation
3. **Zone transitions** - Light/dark switching based on scroll
4. **Lenis smooth scroll** - External library integration
5. **Tailwind CDN** - Must REMOVE (use project Tailwind)

**Fallback Protocol:**
If ANY feature takes >5 minutes to debug:
1. Document the issue
2. Implement simplified fallback (static version)
3. Note as "complex feature requiring refinement"
4. Continue with working version

---

## ⚠️ Tool Safety Protocol

**Before using ANY tool:**
1. List available tools, verify tool exists
2. Check ALL required parameters
3. If tool fails 2x, use fallback method
4. Stop condition: Don't retry malformed calls indefinitely

**Fallback strategies for this phase:**
- If lens effect fails: Remove lens, keep static hero
- If matrix decode fails: Use simple fade-in
- If zone switching fails: Default to light zone only
- If Lenis fails: Remove smooth scroll (native scroll)
- If token limit: Process sections separately

---

## 🚀 Execution Steps

### Step 4.1: Read Source File & Identify Sections

**What:** Analyze file structure.

**How:**
```bash
cat "_workspace/andrew gem merge/andrew-gem-2.jsx"
```

**Identify:**
1. `<style>` block with CSS (GlobalStyles source)
2. Google Fonts `<link>` tags
3. Tailwind CDN script (MUST REMOVE)
4. Lenis CDN script (convert to npm import)
5. Lens tracking logic
6. Matrix decode logic
7. Zone switcher logic
8. Body content (JSX target)

**Time:** 3-5 minutes

---

### Step 4.2: Extract GlobalStyles (With Tailwind CDN Removal)

**What:** Create GlobalStyles, EXCLUDE Tailwind CDN.

**Template:**
```jsx
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
    
    /* PASTE ALL CSS FROM <style> BLOCK */
    /* DO NOT include Tailwind CDN - project has Tailwind */
    
    :root {
      --color-bronze: #B48E55;
      --entangled-bg: #050b14;
      --lens-size: 200px;
      --cursor-x: 50%;
      --cursor-y: 50%;
      /* ... rest of tokens ... */
    }
    
    /* ... all component styles ... */
  `}</style>
);
```

**CRITICAL:** Do NOT copy this line from the source:
```html
<script src="https://cdn.tailwindcss.com"></script>
```
The project already has Tailwind configured. CDN will conflict.

**Time:** 8-10 minutes

---

### Step 4.3: Convert Body to JSX

**What:** Basic HTML→JSX conversion.

**Apply same rules as Phase 3:**
- `class=""` → `className=""`
- Self-close void tags
- Convert inline styles to JSX objects
- Convert comments

**Time:** 8-10 minutes

---

### Step 4.4: Implement Lenis Smooth Scroll

**What:** Convert Lenis CDN to npm import.

**Source (CDN):**
```html
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>
<script>
const lenis = new Lenis({ duration: 1.2, ... });
function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
requestAnimationFrame(raf);
</script>
```

**Target (React):**
```jsx
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function ThresholdConvergence() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // ... other config from source
    });
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);
  
  // ... rest of component
}
```

**Fallback (if >5 mins debugging):**
```jsx
// Skip Lenis - use native scroll
// Remove the useEffect entirely
// Note: "Lenis smooth scroll deferred - using native scroll"
```

**Time:** 5-8 minutes (or apply fallback)

---

### Step 4.5: Implement Lens Mouse Tracking

**What:** Convert lens effect to React.

**Source pattern:**
```javascript
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.documentElement.style.setProperty('--cursor-x', `${x}%`);
  document.documentElement.style.setProperty('--cursor-y', `${y}%`);
});
```

**Target pattern:**
```jsx
useEffect(() => {
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--cursor-x', `${x}%`);
    document.documentElement.style.setProperty('--cursor-y', `${y}%`);
  };
  
  document.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };
}, []);
```

**Fallback (if >5 mins debugging):**
```jsx
// Skip lens tracking - keep lens at center
// Set static values: --cursor-x: 50%; --cursor-y: 50%;
// Note: "Lens tracking deferred - using static centered lens"
```

**Time:** 5-8 minutes (or apply fallback)

---

### Step 4.6: Implement Matrix Text Decode

**What:** Convert character randomization animation.

**Source pattern (example):**
```javascript
function decodeText(element) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const original = element.dataset.text;
  let iteration = 0;
  
  const interval = setInterval(() => {
    element.innerText = original.split('')
      .map((char, i) => i < iteration ? char : chars[Math.floor(Math.random() * chars.length)])
      .join('');
    
    if (iteration >= original.length) clearInterval(interval);
    iteration += 1/3;
  }, 30);
}
```

**Target pattern:**
```jsx
const [displayText, setDisplayText] = useState('');
const originalText = "TARGET TEXT HERE";

useEffect(() => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let iteration = 0;
  
  const interval = setInterval(() => {
    setDisplayText(
      originalText.split('')
        .map((char, i) => i < iteration ? char : chars[Math.floor(Math.random() * chars.length)])
        .join('')
    );
    
    if (iteration >= originalText.length) clearInterval(interval);
    iteration += 1/3;
  }, 30);
  
  return () => clearInterval(interval);
}, []);

// In JSX:
<span>{displayText}</span>
```

**Fallback (if >5 mins debugging):**
```jsx
// Skip matrix decode - show text directly
// Just render: <span>{originalText}</span>
// Note: "Matrix decode animation deferred - showing static text"
```

**Time:** 5-8 minutes (or apply fallback)

---

### Step 4.7: Implement Zone Switching

**What:** Convert scroll-based zone transitions.

**Source pattern:**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.classList.remove('light-zone', 'dark-zone');
      document.body.classList.add(entry.target.dataset.zone);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-zone]').forEach(el => observer.observe(el));
```

**Target pattern:**
```jsx
const [currentZone, setCurrentZone] = useState('light-zone');

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.dataset.zone) {
        setCurrentZone(entry.target.dataset.zone);
      }
    });
  }, { threshold: 0.5 });
  
  const zoneElements = document.querySelectorAll('[data-zone]');
  zoneElements.forEach(el => observer.observe(el));
  
  return () => {
    zoneElements.forEach(el => observer.unobserve(el));
  };
}, []);

// In JSX wrapper:
<div className={`page-wrapper ${currentZone}`}>
  {/* content */}
</div>
```

**Fallback (if >5 mins debugging):**
```jsx
// Skip zone switching - default to light zone
// Use: <div className="page-wrapper light-zone">
// Note: "Zone switching deferred - using light zone only"
```

**Time:** 5-8 minutes (or apply fallback)

---

### Step 4.8: Assemble Final Component

**What:** Combine all pieces.

**Structure:**
```jsx
import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';  // Remove if using fallback

const GlobalStyles = () => (
  <style>{`
    /* All CSS from Step 4.2 */
  `}</style>
);

function ThresholdConvergence() {
  // State
  const [currentZone, setCurrentZone] = useState('light-zone');
  const [displayText, setDisplayText] = useState('');
  const [expandedAccordions, setExpandedAccordions] = useState({});
  
  // Effects for: Lenis, lens tracking, matrix decode, zone switching
  // (from Steps 4.4-4.7, or fallbacks)
  
  // Handlers
  const toggleAccordion = (id) => {
    setExpandedAccordions(prev => ({ ...prev, [id]: !prev[id] }));
  };
  
  return (
    <>
      <GlobalStyles />
      <div className={`page-wrapper ${currentZone}`}>
        {/* All converted JSX content */}
      </div>
    </>
  );
}

export default ThresholdConvergence;
```

**Write to:** `sites/odyssey-lab/src/pages/ThresholdConvergence.jsx`

**Time:** 5-8 minutes

---

### Step 4.9: Add Route to Router

**This is the Route Addition Protocol - follow exactly.**

**What:** Add the `/threshold-convergence` route to App.jsx.

**How:**

1. Open `sites/odyssey-lab/src/App.jsx`

2. Add import at top:
   ```jsx
   import ThresholdConvergence from './pages/ThresholdConvergence';
   ```

3. Add route inside `<Routes>`:
   ```jsx
   <Route path="/threshold-convergence" element={<ThresholdConvergence />} />
   ```

4. **Updated App.jsx should look like:**
   ```jsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import Home from './pages/Home';
   import CallToAdventure from './pages/CallToAdventure';
   import ThresholdConvergence from './pages/ThresholdConvergence';

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/call-to-adventure" element={<CallToAdventure />} />
           <Route path="/threshold-convergence" element={<ThresholdConvergence />} />
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
2. Navigate to `http://localhost:5173/threshold-convergence`
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

### Step 4.10: Visual Comparison (Comprehensive)

**What:** Thorough comparison - this is the complex page.

**Method:**

1. **Open original:**
   ```bash
   open "_workspace/andrew gem merge/andrew-gem-2.jsx"
   ```
   (Open as HTML in browser)

2. **Open converted:**
   - Navigate to `http://localhost:5173/threshold-convergence`

3. **Visual comparison checklist:**

| Element | Match? | Notes |
|---------|--------|-------|
| Lens hero section | | |
| Dark zone colors | | |
| Synchronic bar | | |
| Deep dive sections | | |
| Proof points | | |
| Typography | | |
| Entangled theme colors | | |

4. **Complex features status (document actual state):**
   - [ ] Lens mouse tracking: Working / Fallback
   - [ ] Matrix text decode: Working / Fallback
   - [ ] Zone transitions: Working / Fallback
   - [ ] Lenis smooth scroll: Working / Fallback

5. **Interactions:**
   - [ ] Accordions work
   - [ ] Scroll behavior acceptable
   - [ ] Hover states work

6. **Performance check:**
   - [ ] Page loads in <3 seconds
   - [ ] No jank during interactions

7. **Mobile test (375px):**
   - [ ] Layout doesn't break
   - [ ] Touch interactions work

8. **Tailwind after CDN removal:**
   - [ ] Tailwind classes still work

**Stop if:** Layout is completely broken. Minor feature fallbacks are OK.

**Time:** 5-8 minutes

---

### Step 4.11: Document Fallbacks Used

**What:** Record which features used fallbacks.

**Create note for handoff:**
```markdown
## ThresholdConvergence Complex Features Status

- Lenis smooth scroll: [Working / Fallback - native scroll]
- Lens mouse tracking: [Working / Fallback - static centered]
- Matrix text decode: [Working / Fallback - static text]
- Zone switching: [Working / Fallback - light zone only]
- Tailwind after CDN removal: [Working / Issues: ___]

Fallback reasons: [brief explanation for each]
```

**Time:** 2-3 minutes

---

## ✅ Post-Phase Validation

**Validation A: File Exists**
- [ ] `sites/odyssey-lab/src/pages/ThresholdConvergence.jsx` exists
- [ ] File has ~700-1000 lines

**Validation B: No Critical Errors**
- [ ] Dev server starts without errors
- [ ] No console errors on page load
- [ ] Page renders (even with fallbacks)

**Validation C: Route Works**
- [ ] `/threshold-convergence` loads the page
- [ ] No 404 on direct navigation
- [ ] Existing routes still work (`/`, `/call-to-adventure`)

**Validation D: Core Visual Parity**
- [ ] Layout matches original
- [ ] Colors correct
- [ ] Content visible
- [ ] Tailwind classes work after CDN removal

**Validation E: Interactions (Some May Be Fallbacks)**
- [ ] Accordions work
- [ ] Basic scroll works
- [ ] Page is usable

---

## 🎯 Success Criteria

Phase is DONE when:
- [x] ThresholdConvergence.jsx exists at `sites/odyssey-lab/src/pages/`
- [x] Contains embedded GlobalStyles (NO Tailwind CDN)
- [x] Route added to App.jsx (`/threshold-convergence`)
- [x] Page renders without critical errors
- [x] Core layout matches original
- [x] Complex features work OR have documented fallbacks
- [x] All existing routes still work (`/`, `/call-to-adventure`)

---

## 🛑 Stop Conditions

- [ ] If page won't render at all, STOP (not just feature failures)
- [ ] If route 404s after 2 attempts, STOP
- [ ] If Tailwind classes completely broken after CDN removal, STOP
- [ ] If debugging any single feature exceeds 10 mins (after 5 min fallback), STOP
- [ ] If total phase time exceeds 75 mins, STOP
- [ ] If cost exceeds $12, STOP

---

## 📦 Outputs

**Files created:**
- `sites/odyssey-lab/src/pages/ThresholdConvergence.jsx`

**Files modified:**
- `sites/odyssey-lab/src/App.jsx` (added import and route)

**Decisions made:**
- Tailwind CDN removed, using project Tailwind
- [Document any fallbacks used]

---

## 🔄 Handoff to Next Phase

**What Phase 5 needs to know:**
- Files created: ThresholdConvergence.jsx at pages/
- Route added: `/threshold-convergence` working
- All 3 routes now working: `/`, `/call-to-adventure`, `/threshold-convergence`
- Complex features status: [list working vs fallbacks]
- Visual parity: [Confirmed / With caveats]
- Dev server: Can be STOPPED before Phase 5 (build requires it stopped)

**Update meta-plan status:**
```markdown
| 4 | `002-phase-4-convert-andrew-2.md` | ✅ Complete | [date/time] | [date/time] | $[X] | [X] mins | [issues or "Fallbacks: X, Y, Z"] |
```

---

## ⏱️ Time Budget

- Estimated: 40-50 minutes
- Hard limit: 75 minutes (STOP if exceeded)
- Fallback time budget: 15 mins total across all features

## 💰 Cost Budget & Progress Monitoring

- Estimated: $6-8

**Monitor PROGRESS, not just cost:**

**Green flag:** Cost at $8, phase completes → Continue (worth it)
**Yellow flag:** Cost at 1.5× $8, phase 50% done → Continue cautiously
**Red flag:** Cost at 2× $8, phase <25% done → STOP (something wrong)

**Better abort signal: Time stuck without progress**
- >15 mins debugging same error with no code changes → STOP
- Same tool call fails 3+ times → Use fallback or STOP
- >30 mins on phase with <50 lines of code written → STOP
- Cost rising but files being created → Acceptable
- Cost rising with NO file changes → STOP (tool loop)

---

## See Also

- Meta-plan: `plans/002-html-to-react-migration-META.md`
- Previous: `plans/handoffs/002-phase-3-convert-andrew-1.md`
- Next: `plans/handoffs/002-phase-5-build-validation.md`


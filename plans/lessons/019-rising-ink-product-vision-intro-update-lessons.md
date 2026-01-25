# Lessons: Rising Ink Product Vision Intro Update

**Date:** 2026-01-25
**Task:** Update ProductVisionIntro.jsx per Kilo Code handoff

---

## Context

Took over an incomplete task from Kilo Code (another AI agent) that had 24 pending todo items. The handoff document was a verbose task log rather than structured instructions.

---

## Lessons Learned

### 1. Cross-Agent Handoffs Need Structure
**Observation:** The Kilo Code task file was a 13,000+ line log of tool calls and reasoning, not actionable instructions.
**Lesson:** When handing off between agents, extract key requirements into a structured format:
- What needs to change (specific locations)
- What the expected outcome is
- What blockers were encountered

### 2. Reference Files May Not Contain Expected Components
**Observation:** User expected a "richer" Elvis UI in gem-2/3/4 files, but after thorough search, no such component existed.
**Lesson:** Verify reference file contents early in planning. User memories of code may be inaccurate or refer to work that was never committed.

### 3. Mode-Aware Components Need Explicit State Handling
**Observation:** Architecture cards had pills AND bracket tags always visible; needed to toggle based on mode.
**Lesson:** When implementing mode toggles, explicitly plan which elements should be visible/hidden in each mode using conditional className patterns.

### 4. SVG Z-Index in React/Tailwind
**Observation:** SVG connector lines were rendering over absolutely-positioned divs.
**Lesson:** SVG elements need explicit `z-*` classes in Tailwind just like other elements. Adding `z-0` to SVG and `z-10` to overlapping elements resolves layering issues.

### 5. Grainy Textures via SVG Data URIs
**Pattern Used:**
```jsx
backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\'...")'
```
**Lesson:** Inline SVG noise filters create grainy textures without external assets. Keep opacity low (0.03-0.08) for subtle effect.

### 6. Quest Log State Expansion
**Observation:** Original code had 3 states (VERIFIED, IN PROGRESS, LOCKED). Added TENTATIVE for summer pilot.
**Lesson:** When adding new UI states, maintain consistent data structure pattern but vary visual treatment (color, icon, border style).

---

## Patterns to Reuse

### Mode-Aware Visibility
```jsx
className={`... transition-opacity duration-300 ${isDevMode ? 'opacity-0' : 'opacity-100'}`}
```

### SVG Noise Texture
```jsx
style={{
  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
  backgroundRepeat: 'repeat',
}}
```

### Timeline Item with Multiple States
```jsx
{
  status: 'TENTATIVE',
  title: 'Future Phase',
  commit: 'COMMIT: pending...',
  color: 'text-amber-300',
  border: 'border-amber-500/40',
  badge: 'bg-amber-500/10 text-amber-300',
  icon: '◐',
}
```

---

## Recommendations

1. **For future cross-agent tasks:** Create a structured handoff template with:
   - Completed items
   - Pending items with specific file locations
   - Blockers encountered
   - Context needed to continue

2. **For mode toggles:** Always document which elements change per mode in a comment block at the top of the component.

3. **For visual enhancements:** When user describes something "cooler" that doesn't exist, design fresh based on described attributes rather than searching extensively.

# Lessons Learned: Andrew Threshold Merge

**Date:** 2026-01-04  
**Agent:** Codex (GPT-5)

---

## What We Learned

1. **Zone alias tokens reduce drift:** Defining `--bg-card`, `--text-primary`, and related aliases at the zone level makes new components adapt cleanly to light/dark transitions without rewriting styles.
2. **SVG-to-JSX requires attribute hygiene:** SVG presentation attributes must be camelCased (`strokeWidth`, `stopColor`, `textAnchor`), and CSS variables should be passed as strings (e.g., `fontFamily="var(--font-mono)"`).
3. **Sandboxed dev servers may need escalation:** Local port binding can fail under sandbox constraints, so plan for an escalated `npm run dev` to validate runtime behavior.


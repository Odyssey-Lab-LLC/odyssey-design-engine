# Lessons Learned: Andrew Threshold Fix

**Date:** 2026-01-04  
**Agent:** Codex (GPT-5)

---

## What We Learned

1. **Zone switching + Lenis needs explicit hooks:** When smooth scrolling is handled by Lenis, tie theme transitions to Lenis scroll events and use bounding-rect offsets for reliable light/dark toggles.
2. **Accordion spacing is often margin-driven:** Removing perceived "top padding" can be done by zeroing first-child margins inside the accordion body instead of stripping all padding.
3. **Marker-based section moves reduce risk:** Reordering large page sections by stable comment markers helps avoid accidental content loss when reshuffling the narrative flow.

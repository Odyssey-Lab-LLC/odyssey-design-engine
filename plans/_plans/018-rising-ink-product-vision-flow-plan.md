# Plan: Rising Ink Product Vision Flow + Visual Audit

**Date:** 2026-01-25
**Owner:** Codex (Builder)
**Scope:** Re-structure ProductVisionIntro to match COMPANION flow, re-place visuals, and correct content labels.

---

## Inputs (Required Reads)
- `_workspace/_rising ink product vision/ri-prod-vision-gemini-handoff.md`
- `_workspace/_rising ink product vision/COMPANION_elvis-monday-developer-meeting-strategic-vision_v1_2025-01-23.md`
- `_workspace/_rising ink product vision/ri-prod-vision-gem-2-content-patterns.jsx` (Quest Log + Tech Forge reference)
- `_workspace/_rising ink product vision/ri-prod-vision-gem-3-visual-patterns.jsx` (visual components)
- `sites/rising-ink/demos/src/pages/ProductVisionIntro.jsx` (current implementation)

---

## Self-Audit (Current vs Intended)

### Narrative Flow (COMPANION)
**Intended sections:**
1. Who We Are (credibility + vision alignment)
2. What We've Built (proof of execution)
3. Elvis Deep Dive (technical sophistication)
4. Strategic Play (agency → product)
5. Where You Fit (collaboration invitation)
6. Next Steps (grounded, exploratory)

**Current implementation gaps:**
- Missing **Operator Cards** (Who We Are).
- **HighLevel Ecosystem** placed under a generic “Visual Systems” block instead of Section 2 (What We’ve Built).
- **Elvis Prototype UI** (filterable tattoo grid) is missing.
- **Agency-to-Product River** is placed under “Visual Systems” instead of Section 4 (Strategy).
- **Quest Log** exists but styling diverges from gem-2 “bento/zelda-border” look.
- “Visual Systems” heading should not exist (visuals are meant to be woven into narrative sections).
- **Roadmap (GIT_COMMIT_HISTORY)** is redundant with Quest Log and should be removed.

### Content Accuracy / Labels
- **Plasmic** labeled “UI Layer,” but should be framed as **Front-End Builder** tied to marketing workflows.
- **Untitled UI** stays in the architecture stack (keep position), with **UI Layer** label.
- **Sanity** card implies white-labeling, but Sanity is not white-label; Strapi is the white-label option (brief mention if needed).
- **Roadmap stat** currently says “$500k ARR”; should be **$200k ARR**.

### Visual Treatment Issues
- **Agency-to-Product River** steps: first three should be dark; last is light highlight. Current version shows light step + visible dashed line that feels off.
- **Quest Log** should have the bento/zelda-border treatment from gem-2.

---

## Proposed Structure (Weave Visuals into Content)

### Section 1 — Who We Are
- Hero stays as current **Inflection Point** version.
- Add **Operator Cards** (Brandon/Andrew stats — draft placeholders).

### Section 2 — What We’ve Built
- Embed **HighLevel Ecosystem** here
- Expand nodes to include **Websites + Ads** (supports “single-page + landing pages” strategy)

### Section 3 — Elvis Project Deep Dive
- Keep **Elvis Stack Bento** (Sanity / Plasmic / Astro)
- Insert **Elvis Prototype UI** (filterable tattoo grid) alongside or below
- Keep **Untitled UI** card in the stack (UI Layer label).
- Synthesize architecture cards: **use the minimal card style** (from visual kit) with **[[ BACKEND_MANIFEST ]] / [[ UI_FABRICATION ]] / [[ CORE_RUNTIME ]]** tags and **hover-to-expand** long descriptions.

### Section 4 — Strategic Play
- Move **Agency-to-Product River** here
- Darken first three steps; keep final step light highlight

### Section 5 — Where You Fit
- **Quest Log** with zelda-border styling (gem-2 style)

### Section 6 — Next Steps
- CTA footer (Ready to Commit)

---

## Implementation Steps

1. **Re-structure layout** in `ProductVisionIntro.jsx` to match the above section flow.
2. **Relocate visuals** into narrative sections; remove “Visual Systems” heading block.
3. **Add missing components**
   - Operator Cards
   - Elvis Prototype UI
4. **Correct labels & copy**
   - Plasmic → emphasize **front-end/page builder + white-label API** enabling non-devs to assemble templates while keeping component constraints.
   - Sanity → clarify **AI/MCP-enabled headless CMS**; optional brief note: **Strapi is the white-label alternative** if needed.
   - Roadmap: update “Built $500k ARR niche agency…” → **$200k ARR**.
   - Roadmap dates: verify **Agency Validation (2025)**, **Productized Scaling (Q1 2026)**, **Vertical SaaS Platform (Q4 2026)**.
5. **Fix visual treatments**
   - Agency-to-Product River: dark first three cards + cleaned dashed line
   - Quest Log: bento/zelda-border styling per gem-2 + commit-style layout (per provided screenshot)
   - Architecture cards: default = short descriptors; hover = long paragraph copy.
6. **QA pass**
   - Visual rhythm: dark → light → dark → light
   - Ensure supporting visuals align with section headings and copy

---

## Decisions Locked
1. **Hero:** keep current Inflection Point version.
2. **Plasmic label:** “Front-End Builder.”
3. **Untitled UI:** keep in stack, label as UI Layer.
4. **Sanity vs Strapi:** mention Strapi briefly as white-label alternative (optional).
5. **Operator Cards:** draft placeholders.
6. **Elvis Prototype UI:** use judgment; can simplify if needed.
7. **Roadmap section:** remove GIT_COMMIT_HISTORY block; rely on Quest Log for milestones.

---

## Acceptance Criteria
- Visuals placed in the correct narrative sections per COMPANION + Gemini handoff.
- “Visual Systems” heading removed.
- Plasmic/Untitled UI labels corrected and readable.
- Quest Log styling matches gem-2 bento/zelda-border feel.
- Agency-to-Product River step styling corrected.
- All new visuals integrate without layout collisions on mobile.

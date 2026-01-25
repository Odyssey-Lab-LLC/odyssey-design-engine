# Handoff: Rising Ink Product Vision — Progressive Disclosure + Accuracy Pass

**Date:** 2026-01-25
**From:** Codex
**To:** Claude Code
**Scope:** Restructure + deepen content using progressive disclosure; fix accuracy + layout issues; align visuals with COMPANION.

---

## Primary File
- `sites/rising-ink/demos/src/pages/ProductVisionIntro.jsx`

## Source References (Read These)
- `_workspace/_rising ink product vision/COMPANION_elvis-monday-developer-meeting-strategic-vision_v1_2025-01-23.md`
- `_workspace/_rising ink product vision/ri-prod-vision-gemini-handoff.md`
- `_workspace/_rising ink product vision/ri-prod-vision-gem-2-content-patterns.jsx` (Quest Log + zelda/bento patterns)
- `_workspace/_rising ink product vision/ri-prod-vision-gem-3-visual-patterns.jsx` (visual component kit)

## What the User Wants (High Priority)
1) **Progressive disclosure** (do NOT delete content from COMPANION). Keep things scannable by default, expand on hover/toggle/accordion.
2) **Elvis roadmap accuracy**
   - Elvis website build = **Q1** and should appear as a current commitment (separate from “Elvis social media pilot”).
   - Elvis social media pilot = **Summer / tentative**.
   - Agency validation already happened in **2025**; Productized Scaling = **Q1 2026**; Vertical SaaS = **Q4 2026**.
3) **Quest Log / Commit-style section**
   - Must include Elvis website (current) and Elvis social media pilot (separate).
   - Commit-style aesthetics (user screenshot) with “commit: ... [ACTIVE] / [VERIFIED] / [LOCKED]”.
4) **Architecture cards (Sanity/Plasmic/Astro)**
   - Keep **clean card style** (from visual kit screenshot) with bracket tags (e.g., `[[ BACKEND_MANIFEST ]]`).
   - **Default view**: short descriptors / bullet highlights (e.g., Sanity: “Structured Content” + checkmarks; Astro: “Core Web Vitals / Lighthouse 100”).
   - **Hover view**: longer paragraph descriptions (current long copy).
   - **Mode toggle behavior**: idea to show bracket tags in **Architecture mode** and pill labels in **Vision mode**.
5) **Elvis Prototype UI grid**
   - The simplified grid needs to be replaced with the **richer version** (the earlier “awesome” version).
   - It should sit **below the Project Elvis test case**, not between architecture cards.
6) **Untitled UI placement**
   - Keep it where it is (adjacent to Project Elvis), but don’t bury Elvis prototype grid above it.
7) **Pipeline (Agency → Product River)**
   - First three cards should be **dark**; last is **light** highlight.
   - Fix line overlay so the animated dashed line doesn’t “cut” through the cards when not hovered.
8) **Operator Cards (Who We Are)**
   - Andrew must have real stats; Brandon stats can be placeholders but should feel credible.

## Andrew Stats (Use These)
- Scaled product teams **5 → 40+** while delivering **10x revenue growth**.
- Doubled revenue at **4 consecutive companies**.
- Built growth engines for platforms serving **46M+ users** generating **$100M+ ARR**.

## Brandon Stats (Use These or Keep Safe)
- 10 years tattoo industry
- 10 years B2B tech
- $200k ARR validated
- 500+ prospects (optional; user said it’s ok but not critical)

## LinkedIn Note
User asked to pull Brandon’s LinkedIn, but LinkedIn is blocked by robots.txt in our tooling. Don’t rely on it. If you want an extra stat, user also mentioned: virtual summit generated ~30,000 new subscribers + six-figure launch (verify with user before hard-coding). There is a public project page showing 75,000 attendees, but only use if approved.

## Items to Remove / Avoid
- **Remove the redundant “Visual Systems” block** (already done in current version, but verify no leftovers).
- **Do not keep the old GIT_COMMIT_HISTORY roadmap section** separate; use the Quest Log commit-style as the single source of truth.

## Current State (for reference)
Codex already:
- Embedded HighLevel ecosystem under “What We’ve Built”.
- Added architecture cards with hover detail and added Elvis prototype grid (but **too simplified** and in wrong location).
- Added commit-style Quest Log with Q1/Q4 dates but needs Elvis website vs social pilot separation.
- Added Operator cards with placeholder stats.

## Acceptance Criteria
- Narrative flow matches COMPANION sections.
- Quest Log uses commit-style layout with accurate phases + Elvis website vs social pilot separation.
- Architecture cards show **short highlights by default**, long copy on hover; mode toggle switches bracket tags vs pill labels.
- Elvis prototype grid is the richer version and placed under Project Elvis.
- Pipeline line no longer visually intersects the cards.
- Andrew stats updated with provided numbers.
- No loss of COMPANION content: add progressive disclosure where content is heavy.


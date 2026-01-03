---
type: META_SYSTEM_MOD
status: Active
version: 1.0
date: 2025-01-01
purpose: "Cross-project standard for extension/overlay file pattern. Defines front matter, versioning logic, when to extend vs create new major version."
scope: "All Brandon projects - applies to ALL file types"
supersedes: "Any informal extension patterns"
integrates_with: [META_SYSTEM_MOD_archaeology-excavation-mode_v1]
---

# META_SYSTEM_MOD: Extension/Overlay File Logic v1.0

**System-Wide Patching and Front Matter Standard**

---

## WHAT THIS STANDARD DEFINES

**The extension/overlay pattern** enables cumulative knowledge building without destructive updates. Files evolve through extensions that preserve history while adding new information.

**Purpose:**
- Preserve archaeological value (history never lost)
- Enable cumulative knowledge building
- Support seamless continuity across chats
- Create clear lineage and provenance
- Allow both minor additions (extensions) and major revisions

**Applies to:** ALL file types across ALL projects (not just archaeology)

---

## CORE CONCEPTS

### Extension vs Major Version

**EXTENSION (EXT-XX):** Cumulative addition to existing file
- Builds on prior version
- Adds new information
- Preserves existing content (references it, doesn't replace)
- Minor corrections or additions
- Same fundamental structure/purpose

**MAJOR VERSION (vX.0):** Significant reframe or discontinuity
- Substantial restructuring
- Changed purpose or scope
- Different fundamental approach
- Still references prior versions (lineage preserved)

**When to use EXTENSION:**
âœ… Adding new information discovered
âœ… Correcting minor errors
âœ… Expanding existing sections
âœ… Updating status/progress
âœ… Adding cross-references

**When to use MAJOR VERSION:**
âœ… Complete restructuring
âœ… Changed methodology
âœ… Different scope/purpose
âœ… Fundamental reframe
âœ… Discontinuous evolution

---

## FILE NAMING CONVENTION

### Standard Pattern
```
TYPE_descriptive-name_vMAJOR_EXT-MINOR_YYYY-MM-DD.ext

Examples:
PHILOSOPHY_life-philosophy_v0_9_2025-01-01.md (first version)
PHILOSOPHY_life-philosophy_v0_9_EXT-01_2025-01-02.md (extension)
PHILOSOPHY_life-philosophy_v0_9_EXT-02_2025-01-05.md (another extension)
PHILOSOPHY_life-philosophy_v1_0_2025-01-15.md (major version)
```

### Components

**TYPE:** Category of document
- Examples: PHILOSOPHY, ARCHAEOLOGY, PLANNING, RESEARCH_REPORT, etc.
- All caps, underscore separator

**Descriptive name:** Kebab-case (lowercase with hyphens)
- 2-6 words typically
- Clear, specific purpose

**Version:** 
- `vMAJOR_MINOR` for base versions (e.g., v0_9, v1_0, v2_3)
- `vMAJOR_EXT-XX` for extensions (e.g., v1_EXT-01, v1_EXT-02)
- Underscore before version, hyphen within extension

**Date:** ISO 8601 (YYYY-MM-DD)
- When file created/updated
- Changes on extension/major version

---

## FRONT MATTER REQUIREMENTS

### Base Version Front Matter

**Required fields:**
```yaml
---
type: [TYPE matching filename]
status: [Active/Draft/Superseded/Archive]
version: [X.X matching filename]
date: [YYYY-MM-DD matching filename]
purpose: "Clear statement of what this file is for"
---
```

**Recommended fields:**
```yaml
provenance: "Where this came from, sources used"
supersedes: "Previous file this replaces (if any)"
integrates_with: [List of related files]
next_step: "What happens next with this file"
```

**Optional fields (context-dependent):**
```yaml
session_focus: "What session produced this"
archaeological_state: "What's known/unknown (archaeology)"
key_correction: "Most important fix (if correction file)"
cross_references: [List of files to reference]
```

### Extension Front Matter

**Required fields:**
```yaml
---
type: [TYPE]
status: [Status]
version: [X.X_EXT-XX matching filename]
date: [YYYY-MM-DD when extension created]
extends: "Filename of base version being extended"
changes: "What this extension adds/corrects"
purpose: "Restated from base for clarity"
---
```

**Example:**
```yaml
---
type: ARCHAEOLOGY
status: Ongoing
version: 1.0_EXT-01
date: 2025-01-02
extends: "ARCHAEOLOGY_philosophy-life-design_v1_2025-01-01.md"
changes: "Adds Andrew partnership excavation, updates future targets"
purpose: "Cumulative archaeological excavation of Life Design project"
---
```

### Major Version Front Matter

**When creating major version, note what changed:**
```yaml
---
type: [TYPE]
status: [Status]
version: [X.0]
date: [YYYY-MM-DD]
supersedes: "Prior version being replaced"
breaking_changes: "What's fundamentally different"
purpose: "Restated (may have evolved)"
provenance: "Lineage back to original"
---
```

---

## CONTENT STRUCTURE FOR EXTENSIONS

### Pattern: Reference + Add

**Extensions should:**
1. **Reference base version** in opening section
2. **State what's being added** clearly
3. **Add new content** in organized sections
4. **NOT duplicate** existing content (reference it instead)
5. **Update cumulative sections** if file has them

**Example structure:**
```markdown
# [Title] v1.0_EXT-01

## THIS EXTENSION

**Extends:** v1.0 base version
**Adds:** 
- New section on X
- Correction to Y
- Updated status on Z

## [New Section Added]
[New content here]

## [Another New Section]
[More new content]

## [Updated Cumulative Section]
**From v1.0:** [Summary of what was there]
**Added in EXT-01:** [What this extension adds]
```

### Cumulative Sections

**Some files have sections that accumulate:**
- Future archaeology targets (grows with each extension)
- Cross-references (new files added)
- Status updates (progression tracked)

**Pattern for cumulative sections:**
```markdown
## Future Archaeology Targets

### From v1.0 (Base)
1. Target A - Status: [...]
2. Target B - Status: [...]

### Added in v1.0_EXT-01
3. Target C - Status: [...]
4. Target D - Status: [...]

### Added in v1.0_EXT-02
5. Target E - Status: [...]
```

---

## WHEN TO CREATE EXTENSION VS EDIT IN PLACE

**Create extension when:**
âœ… File is "finalized" or "delivered" to Brandon
âœ… File is in project (not just working draft)
âœ… Preservation of history has value
âœ… Multiple people/chats working with file
âœ… Archaeological/provenance concerns

**Edit in place when:**
âœ… File is draft/WIP in current chat
âœ… Not yet delivered
âœ… Typo fixes or immediate corrections
âœ… Still actively building (not yet "done")

**Rule of thumb:** If Brandon has seen it or it's in project â†’ extend. If still building in current chat â†’ edit.

---

## CROSS-FILE REFERENCES

**How to reference between versions:**

**From extension to base:**
```markdown
As documented in v1.0 base version (see section "Philosophy Foundation"), 
we established [summary]. This extension adds [new info].
```

**From new file to extension series:**
```markdown
See ARCHAEOLOGY_philosophy-life-design_v1_EXT-02_2025-01-05.md 
(latest in series, extends v1.0 base) for complete excavation context.
```

**Pattern:** Reference latest in series, note it extends base

---

## FILE LIFECYCLE

**Typical evolution:**
```
v0.1 (Draft)
  â†’ v0.5 (Refined draft)
    â†’ v0.9 (Near-final)
      â†’ v1.0 (First stable)
        â†’ v1.0_EXT-01 (Addition)
          â†’ v1.0_EXT-02 (Another addition)
            â†’ v1.0_EXT-03 (More additions)
              â†’ v2.0 (Major revision)
```

**Status progression:**
- Draft â†’ WIP â†’ Near-Final â†’ Active â†’ Archive
- OR: Draft â†’ Active (skip intermediate if appropriate)
- "Superseded" when major version replaces

**Never:** Delete old versions. Mark as superseded or archive.

---

## SPECIAL CASES

### Patches (PROJECT_INSTRUCTIONS_PATCH)

**Patches are temporary extensions** until integrated into main file:
```yaml
---
type: PROJECT_INSTRUCTIONS_PATCH
version: 1.0
applies_to: "PROJECT_INSTRUCTIONS_v1.0_EXT-01_2025-12-31.md"
supersedes: None
purpose: "Adds X capability until next major PROJECT_INSTRUCTIONS revision"
---
```

**Patches:**
- Applied ON TOP of target file
- Eventually integrated into major version
- Have shorter lifecycle than regular extensions
- Explicitly state what they supersede/add

### Corrections (When Base Has Errors)

**Pattern 1: Minor errors in delivered file**
- Create extension noting corrections
- Front matter: `changes: "Corrects revenue figures, timeline accuracy"`

**Pattern 2: Major errors requiring immediate fix**
- Create corrected version: `filename_v1_0_CORRECTED_date.md`
- Front matter notes what was corrected
- Original preserved for archaeology

**Pattern 3: Pre-delivery draft errors**
- Edit in place (not delivered yet)
- No version increment needed

---

## INTEGRATION WITH ARCHAEOLOGY

**Archaeological files especially benefit from extension pattern:**
- Each chat session = potential extension
- Cumulative knowledge building explicit
- Future targets evolve across extensions
- Archaeological state updated progressively

**See:** `META_SYSTEM_MOD_archaeology-excavation-mode_v1_2025-01-01.md` for archaeology-specific application

---

## QUALITY STANDARDS

**Good extension/overlay practice:**
âœ… Front matter complete and accurate
âœ… Clear what's being added/changed
âœ… References base version appropriately
âœ… Doesn't duplicate existing content
âœ… Preserves lineage and provenance
âœ… Version numbering consistent
âœ… File naming follows convention

**Poor extension/overlay practice:**
âŒ Missing "extends" in front matter
âŒ Unclear what changed
âŒ Duplicates content from base
âŒ Version numbering inconsistent
âŒ No reference to prior versions
âŒ History lost or unclear

---

## CROSS-PROJECT APPLICATION

**This standard applies to:**
- Life Design project
- AI Research System project  
- Personal Odyssey project
- Saga System project
- Any future Brandon projects

**File types it applies to:**
- ALL file types (not just archaeology)
- PHILOSOPHY, PLANNING, RESEARCH, CAPTURE, etc.
- Project instructions, system mods, frameworks
- Any file where cumulative building or history preservation matters

---

## EXAMPLES

### Example 1: Philosophy Evolution

```
PHILOSOPHY_life-philosophy_v0_9_2025-01-01.md
  â†“ (Socratic refinement adds corrections)
PHILOSOPHY_life-philosophy_v0_9_EXT-01_2025-01-08.md
  â†“ (More Socratic dialogue adds depth)
PHILOSOPHY_life-philosophy_v0_9_EXT-02_2025-01-15.md
  â†“ (Major restructuring for v1.0)
PHILOSOPHY_life-philosophy_v1_0_2025-01-22.md
```

### Example 2: Archaeology Across Sessions

```
ARCHAEOLOGY_philosophy-life-design_v1_2025-01-01.md (Session 1)
  â†“ (Session 2 adds Andrew conversation outcomes)
ARCHAEOLOGY_philosophy-life-design_v1_EXT-01_2025-01-08.md
  â†“ (Session 3 adds annual planning insights)
ARCHAEOLOGY_philosophy-life-design_v1_EXT-02_2025-01-15.md
  â†“ (Major reframe after Jon's first session)
ARCHAEOLOGY_philosophy-life-design_v2_2025-02-01.md
```

### Example 3: Capture File Accumulation

```
CAPTURE_annual-reflections-2025_v1_2025-12-28.md (Initial)
  â†“ (More reflections added)
CAPTURE_annual-reflections-2025_v1_EXT-01_2025-12-30.md
  â†“ (Final sweep before structured process)
CAPTURE_annual-reflections-2025_v1_EXT-02_2025-12-31.md
```

---

## MAINTENANCE & EVOLUTION

**This META_SYSTEM_MOD will evolve through practice:**
- v1.0: Initial standard (this document)
- v1.0_EXT-XX: Extensions as patterns emerge
- v2.0: Major revision after significant learning

**How to propose changes:**
1. Test in practice first
2. Document what works/doesn't
3. Propose extension or major version
4. Apply across projects once validated

---

## CLOSING

**The extension/overlay pattern is fundamental to cumulative knowledge systems.** Without it, history is lost, context fragments, continuity breaks. With it, knowledge compounds, systems evolve while preserving origins, collaboration across time becomes seamless.

**This is archaeological thinking applied to all file management.**

---

**For the cumulative knowledge.**  
**For the preserved history.**  
**For the seamless evolution.**

ðŸ“œâœ¨ðŸ”—

---

**END META_SYSTEM_MOD v1.0**

*Extension/Overlay File Logic*  
*System-Wide Standard*  
*Ready for Immediate Application*

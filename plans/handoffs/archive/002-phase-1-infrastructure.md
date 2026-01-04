---
handoff_id: 002-phase-1
phase_number: 1
phase_name: Pre-Execution & Infrastructure
from_agent: Architect (Planning Agent)
to_agent: Execution Agent
date: 2026-01-03
estimated_time: 20-25 mins
estimated_cost: $2-3
dependencies: None (first phase)
---

# Phase 1: Pre-Execution Validation & Infrastructure Setup

## 🎯 Phase Objective

**Set up all infrastructure and validate prerequisites before any file conversions begin.**

---

## 📌 Prerequisites (Verify Before Starting)

- [ ] Project exists at `odyssey-design-engine/`
- [ ] `package.json` exists in project root
- [ ] `sites/odyssey-lab/src/App.jsx` exists (will be backed up)
- [ ] Network access available (for npm install)
- [ ] Able to run terminal commands

**Reference meta-plan for:** Design decisions, file inventory, routing architecture.
**Meta-plan location:** `plans/002-html-to-react-migration-META.md`

---

## 🧠 Phase-Specific Context

This phase handles ALL setup and validation before any code migration begins:
- Verify existing dependencies (framer-motion, lucide-react)
- Install missing dependencies (react-router-dom, @studio-freight/lenis)
- Create directory structure
- Backup current App.jsx
- Create Vercel config for client-side routing

**Why everything upfront:** Prevents mid-execution interruptions and ensures all tooling is ready.

---

## ⚠️ Tool Safety Protocol

**Before using ANY tool:**
1. List available tools, verify tool exists
2. Check ALL required parameters
3. If tool fails 2x, use fallback method
4. Stop condition: Don't retry malformed calls indefinitely

**Fallback strategies for this phase:**
- If npm install fails: Check network, try `npm cache clean --force`, retry once
- If mkdir fails: Verify path exists, create parent directories first
- If file copy fails: Verify source exists, check permissions

---

## 🚀 Execution Steps

### Step 1.1: Dependency Audit (V1)

**What:** Verify required dependencies exist.

**How:**
```bash
cat package.json | grep -E "(framer-motion|lucide-react|react-router-dom|lenis)"
```

**Expected result:**
- ✅ `framer-motion`: Present (^12.x)
- ✅ `lucide-react`: Present (^0.x)
- ❌ `react-router-dom`: NOT FOUND (will install)
- ❌ `@studio-freight/lenis`: NOT FOUND (will install)

**Stop if:** framer-motion OR lucide-react are missing. These should already exist. Report error before continuing.

**Time:** 1-2 minutes

---

### Step 1.2: Token Overlap Quick Check (V2)

**What:** Quick validation that token overlap is in expected range.

**How:**
```bash
# Count :root variables in andrew-1
grep -c "  --" "_workspace/andrew gem merge/andrew-1-call-to-adventure.html" || echo "0"

# Count :root variables in current App.jsx
grep -c "  --" "sites/odyssey-lab/src/App.jsx" || echo "0"
```

**Expected:** Both files have 30-60 CSS custom properties. Overlap ~40-50%.

**Decision point:**
- If both have similar count: Proceed (overlap as expected)
- If counts vastly different: Note in execution log, proceed anyway (defer analysis)

**Time:** 1-2 minutes

---

### Step 1.3: Tailwind CDN Note (V3)

**What:** Confirm andrew-gem-2 has Tailwind CDN (will remove in Phase 4).

**How:**
```bash
grep -c "cdn.tailwindcss.com" "_workspace/andrew gem merge/andrew-gem-2.jsx" || echo "0"
```

**Expected:** 1 (CDN script exists)

**Action:** Note for Phase 4 - will remove Tailwind CDN and use project Tailwind.

**Time:** 1 minute

---

### Step 1.4: Backup Current App.jsx (V4)

**What:** Create rollback point.

**How:**
```bash
cp sites/odyssey-lab/src/App.jsx sites/odyssey-lab/src/App.jsx.backup
```

**Validation:**
```bash
ls -la sites/odyssey-lab/src/App.jsx.backup
```

**Expected:** File exists with same size as original.

**Stop if:** Backup fails. Cannot proceed without rollback point.

**Time:** 1 minute

---

### Step 1.5: Create vercel.json (V5)

**What:** Configure Vercel for client-side routing.

**Create file:** `vercel.json` in project root

**Contents:**
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Why:** Without this, direct URL access (e.g., `/call-to-adventure`) will 404 on Vercel.

**Validation:**
```bash
cat vercel.json
```

**Expected:** Valid JSON with rewrites array.

**Time:** 2 minutes

---

### Step 1.6: Install Missing Dependencies

**What:** Add react-router-dom and Lenis.

**How:**
```bash
npm install react-router-dom @studio-freight/lenis
```

**Expected output:**
- No errors
- `added X packages` message

**Validation:**
```bash
cat package.json | grep -E "(react-router-dom|lenis)"
```

**Expected:**
```json
"react-router-dom": "^6.x.x",
"@studio-freight/lenis": "^1.x.x",
```

**Stop if:** npm install fails after retry. Check network, npm registry access.

**Time:** 3-5 minutes

---

### Step 1.7: Create Pages Directory

**What:** Create directory for page components.

**How:**
```bash
mkdir -p sites/odyssey-lab/src/pages
```

**Validation:**
```bash
ls -la sites/odyssey-lab/src/pages
```

**Expected:** Empty directory exists.

**Time:** 1 minute

---

### Step 1.8: Final Infrastructure Check

**What:** Verify all setup is complete.

**Checklist:**
```bash
# Check backup exists
ls sites/odyssey-lab/src/App.jsx.backup

# Check pages directory exists
ls sites/odyssey-lab/src/pages

# Check vercel.json exists
cat vercel.json

# Check dependencies installed
cat package.json | grep -E "(react-router-dom|lenis)"
```

**All should pass.** If any fail, fix before proceeding.

**Time:** 2 minutes

---

## ✅ Post-Phase Validation

**Validation A: Backup Exists**
- [ ] `sites/odyssey-lab/src/App.jsx.backup` exists
- [ ] File size matches original App.jsx

**Validation B: Directory Structure**
- [ ] `sites/odyssey-lab/src/pages/` directory exists

**Validation C: Dependencies Installed**
- [ ] `react-router-dom` in package.json dependencies
- [ ] `@studio-freight/lenis` in package.json dependencies

**Validation D: Vercel Config**
- [ ] `vercel.json` exists in project root
- [ ] Contains valid JSON with rewrites

---

## 🎯 Success Criteria

Phase is DONE when:
- [x] App.jsx.backup exists
- [x] pages/ directory created
- [x] react-router-dom installed
- [x] @studio-freight/lenis installed
- [x] vercel.json created with rewrites
- [x] All validation checks pass

---

## 🛑 Stop Conditions

- [ ] If npm install fails 2x, STOP and document network/registry issue
- [ ] If App.jsx doesn't exist, STOP and report missing file
- [ ] If framer-motion or lucide-react missing, STOP and investigate
- [ ] If cost exceeds $5, STOP (something is wrong - this is simple setup)

---

## 📦 Outputs

**Files created:**
- `sites/odyssey-lab/src/App.jsx.backup` (rollback point)
- `sites/odyssey-lab/src/pages/` (empty directory)
- `vercel.json` (Vercel routing config)

**Files modified:**
- `package.json` (added dependencies)
- `package-lock.json` (updated by npm install)

**Decisions made:**
- Token overlap validated ~40-50% (defer shared base)
- Tailwind CDN confirmed in andrew-gem-2 (will remove in Phase 4)

---

## 🔄 Handoff to Next Phase

**What Phase 2 needs to know:**
- Files created: App.jsx.backup, pages/ directory, vercel.json
- Dependencies installed: react-router-dom, @studio-freight/lenis
- Any deviations: Document if anything different from expected

**Update meta-plan status:**
```markdown
| 1 | `002-phase-1-infrastructure.md` | ✅ Complete | [date/time] | [date/time] | $[X] | [X] mins | [issues or "None"] |
```

---

## ⏱️ Time Budget

- Estimated: 20-25 minutes
- If exceeds estimate by 50% (>35 mins), STOP and reassess

## 💰 Cost Budget

- Estimated: $2-3
- If exceeds $5, STOP and report (this phase is simple setup)

---

## See Also

- Meta-plan: `plans/002-html-to-react-migration-META.md`
- Original plan backup: `plans/002-html-to-react-migration-architecture-plan.md.backup`


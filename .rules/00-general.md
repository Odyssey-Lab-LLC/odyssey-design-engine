# Universal Coding Standards

## Overview

These rules apply to all code in the Odyssey Design Engine project, regardless of language, framework, or context.

---

## No-Guess Clause

**Rule:** When facing ambiguity or uncertainty about requirements, STOP immediately and ask for clarification.

### What Constitutes Ambiguity?

- Unclear component requirements or API behavior
- Conflicting information between files
- Missing design specifications
- Uncertain file locations or naming conventions
- Vague user stories or acceptance criteria

### Response Protocol

When encountering ambiguity:

1. **STOP** — Do not proceed with guesswork
2. **Document** — Log the specific ambiguity
3. **ASK** — Request clarification with specific questions
4. **Wait** — Do not implement until clarified

### Example: Good Response to Ambiguity

```markdown
🚨 STOP: Ambiguity Detected

**Issue:** Accordion component behavior unclear

**Questions:**
1. Should only one accordion be open at a time (exclusive)?
2. Should accordions remember state on page navigation?
3. What is the animation duration (not specified in design tokens)?

**Current State:** Stopped before implementation. Awaiting clarification.
```

### Anti-Pattern: Guessing

❌ **Don't do this:**
```javascript
// Not sure if this should be exclusive, defaulting to non-exclusive
const [openItems, setOpenItems] = useState([]);
```

✅ **Do this:**
```markdown
**Question:** Should accordions be exclusive (only one open at a time)?
**Options:**
a) Exclusive (like FAQ accordions)
b) Non-exclusive (multiple can be open)

Awaiting decision before implementing.
```

---

## Vertical Slice Verification

**Rule:** Build the simplest end-to-end implementation first, verify it works, then expand.

### What is a Vertical Slice?

A vertical slice is a minimal but complete implementation that touches all layers of the system:
- UI component → Data flow → State management → Rendering

### Why Vertical Slices?

- Catches integration issues early
- Validates assumptions before scaling
- Provides working baseline for expansion
- Enables rapid feedback

### Implementation Pattern

```
1. Identify smallest complete feature
2. Implement end-to-end (don't stub out layers)
3. Test in browser / real environment
4. Verify all layers integrate correctly
5. ONLY THEN expand to full feature set
```

### Example: Component Library Setup

❌ **Don't do this (Horizontal):**
```
1. Build 10 components
2. Create all .md docs
3. Set up imports
4. Try to test everything at once
5. Debug massive integration issues
```

✅ **Do this (Vertical):**
```
1. Build ONE component (Accordion)
2. Create ONE .md doc
3. Import in ONE test page
4. Verify rendering + functionality
5. Then replicate pattern for remaining components
```

---

## Fail-Fast on Uncertainty

**Rule:** If you cannot proceed with high confidence, stop immediately and escalate.

### High-Confidence vs Low-Confidence

**High confidence:**
- Clear requirements
- Established patterns to follow
- Explicit examples in codebase
- Well-documented design system

**Low confidence:**
- "Probably" or "maybe" in your reasoning
- Multiple plausible implementations
- Guessing at user intent
- No precedent in codebase

### Stop Conditions

Stop immediately if:

1. **Requirements unclear** — Missing specifications
2. **Design incomplete** — No design tokens for needed styles
3. **Conflicting instructions** — AGENTS.md vs handoff disagreement
4. **No precedent** — Completely novel pattern with no examples
5. **Breaking changes** — Would require major refactoring

### Escalation Process

1. **Document** — Write clear description of uncertainty
2. **Flag** — Use 🚨 emoji in handoff or report
3. **Propose options** — Provide 2-3 possible approaches
4. **Wait** — Do not implement until decision made

---

## One-Time Script Ban

**Rule:** Never create "run once" scripts, temporary fixes, or manual cleanup procedures.

### Why This Matters

One-time scripts:
- Never get deleted (clutter the repo)
- Create hidden dependencies
- Don't get documented
- Break when assumptions change
- Require manual execution (error-prone)

### The Right Approach

**Instead of one-time scripts, use:**

1. **Permanent utilities** — Scripts that can be run anytime, idempotent
2. **Migration functions** — Integrated into build process
3. **Manual procedures** — Documented in handoff, not scripted
4. **Test fixtures** — Generate test data programmatically

### Examples

❌ **Don't create:**
```bash
# migrate-old-components.sh — Run once to move files
mv _workspace/old-component.jsx shared/components/
# TODO: Delete this file after running once
```

✅ **Do this instead:**
```javascript
// scripts/validate-component-structure.js — Can run anytime
// Checks that all components are in correct locations
// Idempotent, can be run repeatedly
```

Or document manual procedure:
```markdown
## Component Migration

**One-time manual steps:**
1. Move `_workspace/old-component.jsx` → `shared/components/`
2. Update imports in App.jsx
3. Delete `_workspace/old-component.jsx`

**Completed:** 2026-01-03 by Claude
```

---

## Explicit Over Implicit

**Rule:** Make decisions and patterns explicit through documentation, naming, and structure.

### Code Should Be Self-Documenting

**Good:**
```javascript
// Clear, explicit naming
const isAccordionExclusive = true;
const maxOpenAccordions = 1;
```

**Bad:**
```javascript
// Implicit behavior, unclear intent
const mode = 'single'; // What does 'single' mean?
```

### File Organization Should Be Obvious

**Good structure:**
```
shared/components/library/
├── Accordion.jsx        # Component
├── Accordion.md         # Documentation
└── README.md            # Library index
```

**Bad structure:**
```
components/
├── stuff/
│   └── acc.jsx         # What is this?
└── docs.md             # Docs for what?
```

### Prefer Named Exports

```javascript
// Good: Explicit and discoverable
export { Accordion, AccordionItem };

// Bad: Implicit, requires knowing structure
export default Accordion;
```

---

## Complete Implementations

**Rule:** Never leave placeholder comments like `// ... rest of code ...` or `// TODO: Implement later`.

### Why Placeholders Are Harmful

- Creates non-functional code
- Unclear what's missing
- Easy to forget about
- Breaks in production
- Wastes reviewer time

### What To Do Instead

**Option 1: Implement completely**
```javascript
// ✅ Complete implementation
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}
```

**Option 2: Use meaningful defaults**
```javascript
// ✅ Placeholder with fallback
function formatCurrency(amount, locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}
```

**Option 3: Throw explicit error**
```javascript
// ✅ Clear failure mode
function advancedAnalytics(data) {
  throw new Error('Advanced analytics not yet implemented. See issue #123');
}
```

❌ **Never do this:**
```javascript
function processData(data) {
  // ... rest of the code ...
  // TODO: Add error handling
  return data;
}
```

---

## Version Control Discipline

**Rule:** Keep commits atomic, write clear commit messages, never force-push to main.

### Atomic Commits

Each commit should:
- Contain ONE logical change
- Be fully functional (builds/tests pass)
- Have clear, descriptive message

### Commit Message Format

```
feat: Add Accordion component to library

- Implements expandable/collapsible sections
- Follows Odyssey design tokens v0.3
- Includes light/dark zone variants
- Documented in Accordion.md

Related: Phase 4 - Component Library
```

### Git Rules

- ✅ Commit frequently with clear messages
- ✅ Pull before push
- ✅ Use feature branches for major work
- ❌ Never `git push --force` to main/master
- ❌ Never skip hooks (`--no-verify`)
- ❌ Never commit without testing

---

## Error Handling

**Rule:** Handle errors explicitly. Never silently swallow exceptions.

### Explicit Error Handling

```javascript
// ✅ Good: Explicit error handling
async function loadDesignTokens() {
  try {
    const tokens = await fetchTokens();
    return tokens;
  } catch (error) {
    console.error('Failed to load design tokens:', error);
    // Provide fallback or rethrow
    return DEFAULT_TOKENS;
  }
}
```

```javascript
// ❌ Bad: Silent failure
async function loadDesignTokens() {
  try {
    return await fetchTokens();
  } catch (error) {
    // Silent failure - caller has no idea this failed
  }
}
```

### Error Messages Should Be Actionable

```javascript
// ✅ Good: Tells you what to do
throw new Error(
  'Design token "color-bronze" not found. ' +
  'Ensure design-system/tokens.js is imported in App.jsx'
);
```

```javascript
// ❌ Bad: Vague, unhelpful
throw new Error('Token error');
```

---

## Performance Considerations

**Rule:** Write clear code first, optimize when measurements show need.

### Premature Optimization Is Evil

- Don't optimize without profiling
- Clarity > Cleverness
- Standard patterns > Custom optimizations
- Measure before and after

### When To Optimize

Optimize when:
1. Real performance issue observed by users
2. Profiling identifies bottleneck
3. Optimization maintains code clarity
4. Improvement is measurable

### Example: Don't Over-Optimize Early

```javascript
// ✅ Clear, sufficient for most cases
const filteredItems = items.filter(item => item.active);

// ❌ Premature optimization (unless profiling shows need)
const filteredItems = [];
const len = items.length;
for (let i = 0; i < len; i++) {
  if (items[i].active) filteredItems.push(items[i]);
}
```

---

## Documentation Standards

**Rule:** Code should be self-documenting, but complex logic requires explanation.

### When To Add Comments

**Add comments when:**
- Logic is non-obvious
- Workarounds for external bugs
- Performance-critical sections
- Complex algorithms
- Business rule implementation

**Don't add comments when:**
- Code is self-explanatory
- Repeating what code says
- Documenting poor naming (rename instead)

### Good Comments

```javascript
// ✅ Explains WHY, not WHAT
// Using setTimeout to avoid framer-motion animation conflict
// See: https://github.com/framer/motion/issues/123
setTimeout(() => setOpen(true), 0);
```

```javascript
// ❌ Repeats what code says
// Set open to true
setOpen(true);
```

### File-Level Documentation

Each component/utility file should have:

```javascript
/**
 * Accordion Component
 * 
 * Expandable/collapsible content sections following Odyssey design patterns.
 * 
 * @see shared/components/library/Accordion.md for full documentation
 */
export const Accordion = ({ ... }) => {
  // Implementation
};
```

---

## Consistency Over Preference

**Rule:** Follow established patterns in the codebase, even if you prefer different style.

### Why Consistency Matters

- Reduces cognitive load
- Makes code predictable
- Easier onboarding for new developers
- Automated tooling works better

### How To Maintain Consistency

1. **Read existing code** before adding new code
2. **Match patterns** you see (naming, structure, formatting)
3. **Don't introduce new patterns** without discussion
4. **Use linter/formatter** to enforce style

### Example: Follow Existing Patterns

If codebase uses:
```javascript
// Pattern: Named exports, useState hooks, className
export const Button = ({ label, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);
  return <button className="btn-primary" onClick={onClick}>{label}</button>;
};
```

Don't introduce:
```javascript
// ❌ Breaks consistency: default export, different hook style, inline styles
export default function Btn({ text, handler }) {
  let pressed = false;
  return <button style={{...}} onClick={handler}>{text}</button>;
}
```

---

## Testing Philosophy

**Rule:** Write tests first, then implementation. Tests should be clear, focused, and maintainable.

### Test-Driven Development (TDD)

1. Write failing test
2. Implement minimum code to pass
3. Refactor while keeping tests green
4. Repeat

### Good Test Characteristics

- **Focused:** Tests one thing
- **Clear:** Obvious what's being tested
- **Fast:** Runs quickly
- **Isolated:** No dependencies between tests
- **Repeatable:** Same result every time

### Example: Clear Test Structure

```javascript
// ✅ Good: Clear, focused test
describe('Accordion', () => {
  it('expands when title is clicked', () => {
    render(<Accordion title="Test">Content</Accordion>);
    
    const title = screen.getByText('Test');
    fireEvent.click(title);
    
    expect(screen.getByText('Content')).toBeVisible();
  });
});
```

---

## See Also

- [`.rules/00-conflict-checking.md`](./00-conflict-checking.md) — Conflict resolution protocol
- [`.rules/10-react-standards.md`](./10-react-standards.md) — React-specific patterns
- [`AGENTS.md`](../AGENTS.md) — Agent workflows and boundaries


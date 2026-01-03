# Web/Code Project Module (STUB)

**Module Type:** Domain-Specific Extension  
**Extends:** Multi-Agent Governance Standard v1.0 Core  
**Date:** January 3, 2026  
**Status:** Stub (To be expanded from real web projects)

---

## Purpose

This module extends the Core Standard with patterns for web applications, APIs, and traditional code projects. 

**Current State:** Contains universal coding standards extracted from the personality system project, plus TODO stubs for framework-specific patterns to be expanded when implemented in real web projects.

**Prerequisites:** Read Core Standard first.

---

## Table of Contents

1. [Universal Coding Standards](#universal-coding-standards)
2. [General Web Governance Principles](#general-web-governance-principles)
3. [Testing & Verification Standards](#testing--verification-standards)
4. [TODO: Framework-Specific Extensions](#todo-framework-specific-extensions)

---

## Universal Coding Standards

These standards apply to ALL coding projects, regardless of framework or language.

### The No-Guess Clause

**Rule:** Never import a library or call a function without verifying it exists in the codebase or docs first.

**Why:** Guessing leads to:
- Syntax errors that waste time
- Using deprecated APIs
- Importing non-existent packages
- Hallucinated function signatures

**Implementation:**

Before using any external library:
1. Check if it's in `package.json` / `requirements.txt` / `Gemfile` / etc.
2. If not listed, check official docs for correct import
3. If unsure, STOP and ask

Before calling any function:
1. Verify function exists in the codebase (grep/search)
2. Check function signature matches usage
3. If uncertain, read the implementation

**Example (Good):**
```python
# Agent checks: Is hashlib in standard library? Yes.
# Agent checks: Does hashlib have sha256()? Yes.
import hashlib

hash_obj = hashlib.sha256(text.encode('utf-8'))
```

**Example (Bad):**
```python
# Agent assumes without checking
import hash_utils  # Doesn't exist!

result = hash_utils.compute_sha256(text)  # Hallucinated API
```

### Vertical Slice Verification

**Rule:** Do not consider a feature "done" until proven working from input to output.

**Why:** 
- Unit tests passing ≠ feature works
- Integration matters
- User-visible behavior is what counts
- Mocking hides integration issues

**Implementation:**

For every feature:
1. Write the code
2. Run it end-to-end
3. Verify actual output matches expected
4. No mocking unless explicitly requested

**Example: API Endpoint**

```python
# Don't just write the handler and assume it works
@app.post("/api/users")
def create_user(user_data: UserCreate):
    # ... implementation ...
    return {"id": user.id}

# Verify it works:
# 1. Start server
# 2. Send actual HTTP request
# 3. Check response
# 4. Verify database record created
```

**Mocking Policy:**

Mocking is allowed when:
- External API costs money
- External service is unavailable
- User explicitly requests mocks
- Testing error conditions that are hard to trigger

Mocking is NOT allowed when:
- Testing internal integration
- Verifying feature works
- Building new functionality

### One-Time Script Ban

**Rule:** Do not write throwaway scripts in terminal. If migration or test is needed, save it in `scripts/` so it's reproducible.

**Why:**
- Lost on terminal close
- Can't reproduce failures
- Can't re-run when inputs change
- No audit trail

**Implementation:**

Instead of:
```bash
# Terminal throwaway
$ cat input.txt | grep "pattern" | awk '{print $2}' > output.txt
```

Do this:
```bash
# scripts/process_input.sh
#!/bin/bash
cat input.txt | grep "pattern" | awk '{print $2}' > output.txt
```

**When scripts accumulate:**

Create `scripts/README.md` documenting:
- What each script does
- When to run it
- Dependencies
- Example usage

### Research First

**Rule:** Before writing code, verify the approach. Check existing patterns in the codebase.

**Why:**
- Project might have established patterns
- Avoid reinventing existing utilities
- Maintain consistency
- Learn from prior solutions

**Implementation:**

Before implementing new feature:
1. **Search codebase** for similar implementations
   ```bash
   grep -r "similar_function" src/
   ```
2. **Check project patterns**
   - How are errors handled?
   - What logging library is used?
   - What testing framework?
3. **Read related code**
   - Don't just skim—understand the pattern
   - Note why it works that way

**Example:**

Task: Add user authentication

Don't immediately write:
```python
def authenticate_user(username, password):
    # Invent from scratch
```

First search:
```bash
grep -r "authenticate" src/
grep -r "login" src/
```

Found existing pattern:
```python
# src/auth/handlers.py already exists
# Uses JWT tokens
# Has error handling pattern
# Uses specific logger format
```

Follow that pattern.

### Fix Cause, Not Symptom

**Rule:** When debugging, find the root cause. Don't patch around the problem.

**Why:**
- Symptoms return
- Patches accumulate
- Technical debt grows
- Real issue remains

**Implementation:**

When encountering a bug:
1. **Reproduce reliably**
   - What exact steps trigger it?
   - Can you reproduce every time?
2. **Trace back to source**
   - Where does the bad data originate?
   - What assumptions were violated?
3. **Fix the root cause**
   - Don't just handle the error
   - Fix why the error occurred
4. **Verify fix prevents recurrence**

**Example (Bad - Symptom Fix):**

```python
def get_user_score(user_id):
    score = calculate_score(user_id)
    # Sometimes score is None, so patch it
    if score is None:
        score = 0  # Band-aid fix
    return score
```

**Example (Good - Root Cause Fix):**

```python
def get_user_score(user_id):
    # Root cause: calculate_score returns None for new users
    # Fix: calculate_score should return 0 for new users
    score = calculate_score(user_id)
    return score

def calculate_score(user_id):
    user = get_user(user_id)
    if not user.has_activity():
        return 0  # Fixed at source
    # ... actual calculation ...
```

---

## General Web Governance Principles

These principles apply specifically to web application development.

### Test-First for Features

**Rule:** For new features, write the test first (or immediately after) to verify behavior.

**Why:**
- Forces thinking about interface before implementation
- Ensures feature is testable
- Provides immediate validation
- Documents expected behavior

**Implementation:**

```python
# 1. Write test (or spec)
def test_user_registration():
    response = client.post("/api/register", json={
        "email": "test@example.com",
        "password": "secure123"
    })
    assert response.status_code == 201
    assert "id" in response.json()

# 2. Implement
@app.post("/api/register")
def register_user(data: RegisterData):
    # ... implementation ...

# 3. Run test to verify
$ pytest tests/test_auth.py::test_user_registration
```

### Component Isolation

**Rule:** Components should be self-contained with clear interfaces.

**Why:**
- Easier to test
- Easier to understand
- Easier to modify
- Reduces coupling

**Implementation:**

```typescript
// Good: Clear props interface
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  // Self-contained implementation
}
```

### API Contract Verification

**Rule:** All API endpoints must have defined contracts (request/response schemas).

**Why:**
- Type safety
- Documentation
- Validation
- Client expectations

**Implementation:**

```python
from pydantic import BaseModel

class CreateUserRequest(BaseModel):
    email: str
    password: str
    name: str

class CreateUserResponse(BaseModel):
    id: int
    email: str
    created_at: datetime

@app.post("/api/users", response_model=CreateUserResponse)
def create_user(data: CreateUserRequest):
    # Request automatically validated
    # Response automatically serialized
    ...
```

### Build Verification Before Commit

**Rule:** Always verify the project builds before committing.

**Why:**
- Don't break others' workflow
- CI/CD won't fail on simple errors
- Maintain team velocity

**Implementation:**

```bash
# Before committing
$ npm run build  # or: yarn build, cargo build, etc.
$ npm test      # Run test suite
$ npm run lint  # Check linting

# Only commit if all pass
$ git add .
$ git commit -m "Add feature X"
```

---

## Testing & Verification Standards

### Test Pyramid Principle

**Concept:** Many unit tests, fewer integration tests, few end-to-end tests.

```
      /\
     /E2E\      (Few - slow, expensive, brittle)
    /------\
   /Integr.\   (Some - medium speed)
  /----------\
 /   Unit     \ (Many - fast, cheap, stable)
/--------------\
```

**Why:**
- Unit tests are fast and cheap
- E2E tests are slow and flaky
- Balance gives good coverage with manageable runtime

### What to Test

**Always test:**
- Public APIs
- Business logic
- Edge cases (null, empty, boundary values)
- Error conditions

**Don't test:**
- Private implementation details
- Framework code
- Third-party libraries

### Test Naming Convention

**Pattern:** `test_<what>_<condition>_<expected>`

```python
def test_create_user_with_valid_data_returns_201():
    ...

def test_create_user_with_duplicate_email_returns_400():
    ...

def test_calculate_score_for_new_user_returns_zero():
    ...
```

**Why:** Test name documents behavior.

---

## TODO: Framework-Specific Extensions

The following sections are **stubs** to be expanded when implementing these patterns in real projects.

### [ ] TODO: React/Next.js Specific Patterns

**To expand from real project.**

**Topics to cover:**
- Component structure standards
- State management patterns (Context vs Redux vs Zustand)
- File organization (pages/, components/, lib/)
- API route conventions
- Environment variable handling
- Build optimization
- SSR vs CSR decisions

**Placeholder rules:**

`.rules/11-react-standards.md` (to be created)

```markdown
# React/Next.js Standards

[ ] TODO: Expand from real Next.js project

## Component Structure
- [ ] Naming conventions
- [ ] Props interfaces
- [ ] Hooks usage patterns

## State Management  
- [ ] When to use Context
- [ ] When to use external state library
- [ ] Server vs client state

## File Organization
- [ ] Directory structure
- [ ] Import path conventions
- [ ] Public exports

## Performance
- [ ] Memoization guidelines
- [ ] Bundle optimization
- [ ] Image optimization
```

### [ ] TODO: API Development Standards

**To expand from real project.**

**Topics to cover:**
- RESTful conventions
- Error response formats
- Authentication patterns
- Rate limiting
- Versioning strategy
- OpenAPI/Swagger documentation
- Testing strategies

**Placeholder rules:**

`.rules/12-api-standards.md` (to be created)

```markdown
# API Development Standards

[ ] TODO: Expand from real API project

## REST Conventions
- [ ] HTTP methods usage
- [ ] URL patterns
- [ ] Status codes

## Request/Response
- [ ] Schema validation
- [ ] Error format
- [ ] Pagination

## Security
- [ ] Authentication
- [ ] Authorization
- [ ] Rate limiting
```

### [ ] TODO: Database Migration Protocols

**To expand from real project.**

**Topics to cover:**
- Migration naming and ordering
- Rollback strategy
- Data migrations vs schema migrations
- Testing migrations
- Production deployment checklist

**Placeholder rules:**

`.rules/13-database-standards.md` (to be created)

```markdown
# Database Standards

[ ] TODO: Expand from real database project

## Migrations
- [ ] Naming conventions
- [ ] Rollback requirements
- [ ] Testing strategy

## Queries
- [ ] ORM vs raw SQL
- [ ] N+1 prevention
- [ ] Index strategy

## Data Integrity
- [ ] Constraints
- [ ] Validation
- [ ] Backup strategy
```

### [ ] TODO: CSS/Styling Conventions

**To expand from real project.**

**Topics to cover:**
- CSS methodology (BEM, CSS Modules, etc.)
- Tailwind conventions (if used)
- Responsive breakpoints
- Color palette system
- Typography scale

**Placeholder rules:**

`.rules/14-styling-standards.md` (to be created)

```markdown
# Styling Standards

[ ] TODO: Expand from real frontend project

## Methodology
- [ ] CSS-in-JS vs CSS Modules vs Tailwind
- [ ] Naming conventions
- [ ] File organization

## Design System
- [ ] Color palette
- [ ] Typography scale
- [ ] Spacing system

## Responsive Design
- [ ] Breakpoint strategy
- [ ] Mobile-first vs desktop-first
```

### [ ] TODO: Testing Pyramid Specifics

**To expand from real project.**

**Topics to cover:**
- Unit test coverage targets
- Integration test patterns
- E2E test scenarios
- Mocking strategies
- Test data management

**Placeholder rules:**

`.rules/21-testing-standards.md` (to be created)

```markdown
# Testing Standards

[ ] TODO: Expand from real project with comprehensive test suite

## Unit Tests
- [ ] Coverage targets
- [ ] What to test
- [ ] What not to test

## Integration Tests
- [ ] Database test setup
- [ ] API test patterns
- [ ] Authentication in tests

## E2E Tests
- [ ] Critical path scenarios
- [ ] Test data strategy
- [ ] CI/CD integration
```

---

## Adding Framework-Specific Rules

When you implement these patterns in a real project:

### Step 1: Create Rule File

```bash
.rules/11-[framework]-standards.md
```

### Step 2: Document Discovered Patterns

As you build, document:
- What patterns emerged
- What worked well
- What to avoid
- Why decisions were made

### Step 3: Create Pointer Files

```bash
.cursor/rules/[framework]-standards.mdc
.kilocode/rules/[framework]-standards.md
```

### Step 4: Update This Module

Remove TODO stub, add comprehensive section with:
- Real examples from your project
- Anti-patterns discovered
- Edge cases handled
- Lessons learned

### Step 5: Update `.rules/README.md`

Add new rule to index.

---

## Extension Template

When expanding a TODO section, use this template:

```markdown
## [Framework] Specific Patterns

**Extracted from:** [Project name]
**Date extracted:** [Date]
**Framework version:** [Version]

### Overview

[Why these patterns matter for this framework]

### Core Patterns

#### Pattern 1: [Name]

**Rule:** [Statement]

**Why:** [Rationale]

**Implementation:**
[Code example]

**Anti-pattern:**
[What not to do]

#### Pattern 2: [Name]

[Same structure]

### File Organization

[Directory structure specific to framework]

### Common Pitfalls

[Things that went wrong, how to avoid]

### Rules File

Copy this to `.rules/1X-[framework]-standards.md`:

[Complete rule file content]
```

---

## Implementation Checklist

When adding web/code governance to a project:

### Core Standards (Always)
- [ ] Create `.rules/00-general.md` with universal standards
- [ ] Implement no-guess clause
- [ ] Implement vertical slice verification
- [ ] Implement one-time script ban
- [ ] Implement research-first approach
- [ ] Implement fix-cause-not-symptom principle

### Project-Specific
- [ ] Identify which frameworks are used
- [ ] Create `.rules/1X-[framework]-standards.md` for each
- [ ] Document discovered patterns as you build
- [ ] Create pointer files in IDE directories
- [ ] Update this module with real patterns (remove TODOs)

### Testing
- [ ] Define test pyramid for project
- [ ] Set coverage targets
- [ ] Document testing patterns
- [ ] Create test utilities

### Validation
- [ ] Verify builds before commits
- [ ] Run tests in CI/CD
- [ ] Lint checks pass
- [ ] Type checks pass (if applicable)

---

## Success Metrics

### Code Quality
- **Build success rate:** >99% (builds should not break)
- **Test coverage:** 70-90% (depends on project type)
- **Linter warnings:** 0 (enforce with CI)

### Agent Effectiveness
- **No-guess violations:** 0 (agent should never hallucinate APIs)
- **Vertical slice completion:** 100% (features verified end-to-end)
- **Pattern consistency:** Manual audit shows consistent patterns

### Maintenance
- **Technical debt:** Review quarterly
- **Pattern documentation:** Update as patterns evolve
- **Rule updates:** As framework versions change

---

## Conclusion

**Current state:** Universal coding standards are complete and proven. Framework-specific patterns are stubs awaiting real project implementation.

**Next steps:**
1. Implement Core Standard
2. Add universal coding standards
3. As you build web projects, expand TODO sections with real patterns
4. Remove stub status when comprehensive patterns documented

**Extension philosophy:** 
- Don't invent patterns in a vacuum
- Let patterns emerge from real work
- Document what actually works
- Update when you discover better approaches

---

## Contributing Back

When you expand a TODO section with real patterns:

1. Test patterns in production first
2. Document edge cases encountered
3. Include real code examples (anonymized if needed)
4. Remove TODO marker
5. Update module status from "Stub" to "Stable"
6. Consider sharing back to community

**Remember:** This is extraction, not invention. Document what works, not what you think should work.


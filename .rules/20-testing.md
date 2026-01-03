# Testing Standards

## Overview

Testing requirements and strategies for the Odyssey Design Engine project.

**Current Status:** Aspirational (infrastructure not yet implemented)

**Future Implementation:** Vitest + React Testing Library

---

## Testing Philosophy

### Test-Driven Development (TDD)

**Ideal workflow:**

1. **Write test** (failing)
2. **Implement code** (make test pass)
3. **Refactor** (keep tests green)
4. **Repeat**

### Why TDD?

- **Clarity:** Tests define requirements
- **Confidence:** Safe refactoring
- **Documentation:** Tests show usage
- **Quality:** Forces good design

---

## Test Categories

### Unit Tests

**What:** Test individual functions/components in isolation

**Tools:** Vitest

**Examples:**
- Token calculation functions
- Utility functions
- Custom hooks

```javascript
// Example: Unit test for utility function
import { describe, it, expect } from 'vitest';
import { calculateSpacing } from './utils';

describe('calculateSpacing', () => {
  it('multiplies base spacing by factor', () => {
    expect(calculateSpacing(2)).toBe(16); // 8px * 2
  });
  
  it('returns 0 for factor 0', () => {
    expect(calculateSpacing(0)).toBe(0);
  });
});
```

### Component Tests

**What:** Test React components behavior and rendering

**Tools:** Vitest + React Testing Library

**Focus:**
- User interactions
- Conditional rendering
- Prop handling
- Accessibility

```javascript
// Example: Component test
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('expands when title clicked', () => {
    render(
      <Accordion title="Test Title">
        <p>Content</p>
      </Accordion>
    );
    
    const title = screen.getByText('Test Title');
    fireEvent.click(title);
    
    expect(screen.getByText('Content')).toBeVisible();
  });
  
  it('starts collapsed by default', () => {
    render(
      <Accordion title="Test">Content</Accordion>
    );
    
    expect(screen.queryByText('Content')).not.toBeVisible();
  });
  
  it('can start expanded', () => {
    render(
      <Accordion title="Test" defaultExpanded>
        Content
      </Accordion>
    );
    
    expect(screen.getByText('Content')).toBeVisible();
  });
});
```

### Integration Tests

**What:** Test multiple components/features working together

**Examples:**
- Form submission flows
- Navigation between pages
- State management across components

```javascript
// Example: Integration test
describe('Contact Form', () => {
  it('submits form and shows success message', async () => {
    render(<ContactPage />);
    
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'john@example.com' }
    });
    
    fireEvent.click(screen.getByText('Submit'));
    
    expect(await screen.findByText('Thank you!')).toBeInTheDocument();
  });
});
```

### Visual Regression Tests (Future)

**What:** Catch unintended visual changes

**Tools:** Chromatic or Percy (not yet implemented)

**Purpose:**
- Detect design token changes
- Catch layout breaks
- Component snapshot comparison

---

## Component Testing Requirements

### Library Components MUST Have Tests

Every component in `shared/components/library/` requires:

1. **Rendering test** — Component renders without crashing
2. **Props test** — All props work as expected
3. **Interaction test** — User interactions behave correctly
4. **Accessibility test** — Basic a11y compliance

### Example: Complete Component Test Suite

```javascript
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  // 1. Rendering test
  it('renders with label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
  
  // 2. Props test
  it('applies variant className', () => {
    render(<Button label="Test" variant="secondary" />);
    const button = screen.getByText('Test');
    expect(button).toHaveClass('btn-secondary');
  });
  
  it('disables when disabled prop true', () => {
    render(<Button label="Test" disabled />);
    expect(screen.getByText('Test')).toBeDisabled();
  });
  
  // 3. Interaction test
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Test" onClick={handleClick} />);
    
    fireEvent.click(screen.getByText('Test'));
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button label="Test" onClick={handleClick} disabled />);
    
    fireEvent.click(screen.getByText('Test'));
    
    expect(handleClick).not.toHaveBeenCalled();
  });
  
  // 4. Accessibility test
  it('has correct role', () => {
    render(<Button label="Test" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  
  it('is keyboard accessible', () => {
    const handleClick = vi.fn();
    render(<Button label="Test" onClick={handleClick} />);
    
    const button = screen.getByText('Test');
    button.focus();
    fireEvent.keyDown(button, { key: 'Enter' });
    
    expect(handleClick).toHaveBeenCalled();
  });
});
```

---

## Testing Best Practices

### Write Clear Test Names

```javascript
// ✅ Good (describes behavior)
it('expands accordion when title is clicked', () => { ... });
it('disables submit button while form is submitting', () => { ... });

// ❌ Bad (vague)
it('works', () => { ... });
it('test accordion', () => { ... });
```

### Arrange-Act-Assert Pattern

```javascript
it('updates count when button clicked', () => {
  // Arrange: Set up test conditions
  render(<Counter initialCount={0} />);
  
  // Act: Perform action
  fireEvent.click(screen.getByText('Increment'));
  
  // Assert: Verify outcome
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

### Test User Behavior, Not Implementation

```javascript
// ✅ Good (tests what user sees/does)
it('shows error message when email invalid', () => {
  render(<LoginForm />);
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'invalid' }
  });
  fireEvent.click(screen.getByText('Submit'));
  
  expect(screen.getByText('Invalid email')).toBeVisible();
});

// ❌ Bad (tests implementation detail)
it('sets hasError state to true', () => {
  const { result } = renderHook(() => useFormValidation());
  act(() => {
    result.current.setEmail('invalid');
  });
  
  expect(result.current.hasError).toBe(true);
});
```

### Isolate Tests

```javascript
// ✅ Good (independent tests)
describe('Accordion', () => {
  it('test 1', () => {
    render(<Accordion />); // Fresh render
    // Test logic
  });
  
  it('test 2', () => {
    render(<Accordion />); // Fresh render
    // Test logic
  });
});

// ❌ Bad (shared state)
describe('Accordion', () => {
  const wrapper = render(<Accordion />); // Shared
  
  it('test 1', () => {
    // Modifies wrapper
  });
  
  it('test 2', () => {
    // Affected by test 1
  });
});
```

---

## Testing Utilities

### Custom Render Function

```javascript
// test-utils.jsx
import { render } from '@testing-library/react';
import { GlobalStyles } from '@shared/design-system/GlobalStyles';

export function renderWithDesignSystem(ui, options) {
  return render(
    <>
      <GlobalStyles />
      {ui}
    </>,
    options
  );
}

// Usage
import { renderWithDesignSystem } from './test-utils';

it('renders with design tokens', () => {
  renderWithDesignSystem(<MyComponent />);
  // ...
});
```

### Mock Data Factories

```javascript
// test-factories.js
export const createMockCard = (overrides = {}) => ({
  title: 'Test Card',
  content: 'Test content',
  variant: 'default',
  ...overrides
});

// Usage
it('renders card with custom title', () => {
  const card = createMockCard({ title: 'Custom' });
  render(<Card {...card} />);
  expect(screen.getByText('Custom')).toBeInTheDocument();
});
```

---

## Coverage Goals

### Target Coverage (Future)

- **Statements:** 80%+
- **Branches:** 75%+
- **Functions:** 80%+
- **Lines:** 80%+

### What To Prioritize

**High priority (MUST test):**
- User-facing components
- Business logic
- Form validation
- Data transformations
- Error handling

**Lower priority (CAN skip):**
- Presentation-only components
- Simple pass-through components
- Third-party library wrappers
- Configuration files

---

## Running Tests (Future)

### Commands

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage

# Single file
npm test Accordion.test.jsx
```

### Configuration

**vitest.config.js:**
```javascript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './test-setup.js',
    coverage: {
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/',
        'test-setup.js',
        '**/*.config.js'
      ]
    }
  }
});
```

---

## Accessibility Testing

### Automated A11y Tests

```javascript
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

it('has no accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Manual A11y Checks

- **Keyboard navigation:** All interactive elements reachable via Tab
- **Screen reader:** Meaningful labels and descriptions
- **Focus management:** Visible focus indicators
- **Color contrast:** Meets WCAG AA standards

---

## Test File Organization

### File Naming

```
ComponentName.jsx
ComponentName.test.jsx   // Tests
ComponentName.md         // Documentation
```

### Directory Structure

```
shared/components/library/
├── Accordion.jsx
├── Accordion.test.jsx
├── Accordion.md
├── Button.jsx
├── Button.test.jsx
├── Button.md
└── ...
```

---

## When Tests Are Not Required

### Acceptable to skip tests for:

1. **Prototype components** in `_workspace/` (experimental)
2. **One-off page layouts** (not reusable)
3. **Pure presentation** components (no logic)
4. **Temporary test harnesses**

### But ALWAYS test:

1. **Library components** (`shared/components/library/`)
2. **Utility functions** (`shared/utils/`)
3. **Custom hooks**
4. **Form validation logic**
5. **Data transformations**

---

## Migration Strategy

### Phase 1: Infrastructure (Not Yet Done)

- [ ] Install Vitest + React Testing Library
- [ ] Create `vitest.config.js`
- [ ] Set up `test-setup.js`
- [ ] Create `test-utils.jsx` with custom render
- [ ] Add test scripts to `package.json`

### Phase 2: Library Component Tests

- [ ] Test 3-4 initial library components
- [ ] Establish testing patterns
- [ ] Document examples
- [ ] Refine test utilities

### Phase 3: Expand Coverage

- [ ] Test utilities
- [ ] Test custom hooks
- [ ] Integration tests for key flows
- [ ] Set up coverage reporting

### Phase 4: Automation

- [ ] Run tests in CI/CD
- [ ] Block merges on test failures
- [ ] Generate coverage reports
- [ ] Visual regression testing (Chromatic/Percy)

---

## Current State

**Status:** Infrastructure not yet set up

**When adding new components:**
- Design tests (document in `.md` file)
- Note "Tests pending infrastructure setup"
- Create test file when Vitest added

**Example component.md:**
```markdown
## Testing (Pending)

**Planned tests:**
- Renders with title prop
- Expands/collapses on click
- Starts collapsed by default
- Can start expanded with defaultExpanded prop
- Keyboard accessible (Enter/Space to toggle)
- Screen reader announces expanded/collapsed state

**Test file:** Accordion.test.jsx (create when Vitest set up)
```

---

## See Also

- [`.rules/00-general.md`](./00-general.md) — Test-first workflow
- [`.rules/10-react-standards.md`](./10-react-standards.md) — Component patterns
- [`ARCHITECTURE.md`](../ARCHITECTURE.md) — Testing infrastructure plans
- [React Testing Library Docs](https://testing-library.com/react)
- [Vitest Docs](https://vitest.dev/)


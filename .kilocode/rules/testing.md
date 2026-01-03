# Testing Standards

See `.rules/20-testing.md` for complete testing requirements.

## Current Status

**Infrastructure:** Not yet implemented (Vitest + React Testing Library planned)

## Key Principles

**Test-driven development:**
1. Write test (failing)
2. Implement code (make test pass)
3. Refactor (keep tests green)

**What to test:**
- User-facing behavior
- Component interactions
- Conditional rendering
- Error handling

**What NOT to test:**
- Implementation details
- Internal state
- Third-party libraries

## Component Testing Requirements

All library components (`shared/components/library/`) need:
1. Rendering test (renders without crashing)
2. Props test (all props work correctly)
3. Interaction test (user interactions work)
4. Accessibility test (keyboard, screen reader support)

## Until Infrastructure Ready

**Document planned tests in .md files:**

```markdown
## Testing (Pending)

**Planned tests:**
- Renders with title prop
- Expands/collapses on click
- Keyboard accessible (Enter/Space)
- Screen reader announces state

**Test file:** Accordion.test.jsx (when Vitest set up)
```

## Test Structure

```javascript
describe('ComponentName', () => {
  it('describes behavior in plain English', () => {
    // Arrange: Set up conditions
    render(<Component prop="value" />);
    
    // Act: Perform action
    fireEvent.click(screen.getByText('Button'));
    
    // Assert: Verify outcome
    expect(screen.getByText('Result')).toBeVisible();
  });
});
```

Read `.rules/20-testing.md` for complete testing guide and examples.


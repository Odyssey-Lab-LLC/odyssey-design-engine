# React/JSX Standards

## Overview

Standards for React component development in the Odyssey Design Engine project.

---

## Component Naming

### Form-First, Not Content-First

**Rule:** Name components by their FORM (structure/behavior), not CONTENT (what they display).

### Why?

Content-specific names:
- Don't generalize well
- Create unnecessary duplication
- Harder to reuse
- Confuse component libraries

### Examples

✅ **Good (Form-Based):**
```javascript
<Accordion title="Our Principles">...</Accordion>
<Card variant="elevated">...</Card>
<SectionHeader>...</SectionHeader>
```

❌ **Bad (Content-Based):**
```javascript
<PrinciplesAccordion>...</PrinciplesAccordion>
<PillarCard>...</PillarCard>  
<HeroHeader>...</HeroHeader>
```

### When Content Names Are OK

Content-specific naming is acceptable for:
- **Page components:** `HomePage`, `AboutPage`
- **Route components:** `ContactRoute`, `BlogRoute`
- **One-off layouts:** `AndrewHeroLayout` (client-specific)

But **not** for reusable UI components.

### Migration Strategy

When encountering content-named components:

1. **Extract form-based version** to `shared/components/library/`
2. **Create proper documentation** (Component.md)
3. **Keep original temporarily** (don't break existing code)
4. **Gradually migrate** usage to new form-based component
5. **Eventually deprecate** old content-named version

---

## File Structure

### Component Files

```
ComponentName.jsx     // Implementation
ComponentName.md      // Documentation (for library components)
ComponentName.test.jsx // Tests (future)
```

### Component Organization

```javascript
// 1. Imports (grouped)
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// 2. Component definition
export const Accordion = ({ title, subtitle, children, defaultExpanded = false }) => {
  // 3. State and hooks
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  // 4. Event handlers
  const handleToggle = () => setIsExpanded(!isExpanded);
  
  // 5. Render
  return (
    <div className="accordion">
      {/* JSX */}
    </div>
  );
};
```

---

## JSX Style Conventions

### className, Not class

```javascript
// ✅ Good
<div className="card">...</div>

// ❌ Bad
<div class="card">...</div>
```

### Inline Styles (When Necessary)

Use CSS variables for dynamic values:

```javascript
// ✅ Good (uses design tokens)
<div style={{ backgroundColor: 'var(--color-bronze)' }}>...</div>

// ❌ Bad (hardcoded)
<div style={{ backgroundColor: '#B48E55' }}>...</div>
```

### Boolean Props

```javascript
// ✅ Good
<Accordion expanded />
<Card elevated />

// ❌ Bad (redundant)
<Accordion expanded={true} />
<Card elevated={true} />
```

### Props Destructuring

```javascript
// ✅ Good (clear props)
export const Button = ({ label, onClick, disabled = false, variant = 'primary' }) => {
  return <button className={`btn-${variant}`} onClick={onClick} disabled={disabled}>
    {label}
  </button>;
};

// ❌ Bad (props object)
export const Button = (props) => {
  return <button className={`btn-${props.variant}`} onClick={props.onClick}>
    {props.label}
  </button>;
};
```

### Conditional Rendering

```javascript
// ✅ Good (ternary for simple)
{isExpanded ? <Content /> : null}

// ✅ Good (logical AND for simple)
{isExpanded && <Content />}

// ✅ Good (early return for complex)
if (!data) return <Loading />;
return <Content data={data} />;

// ❌ Bad (deeply nested ternaries)
{isExpanded ? (isLoading ? <Loading /> : <Content />) : null}
```

---

## State Management

### useState for Component State

```javascript
// ✅ Good
const [isOpen, setIsOpen] = useState(false);
const [count, setCount] = useState(0);
```

### Prefer Controlled Components

```javascript
// ✅ Good (controlled)
<Accordion
  expanded={isExpanded}
  onToggle={() => setIsExpanded(!isExpanded)}
/>

// ⚠️ Use sparingly (uncontrolled)
<Accordion defaultExpanded={true} />
```

### State Naming Conventions

```javascript
// ✅ Good (clear boolean names)
const [isLoading, setIsLoading] = useState(false);
const [hasError, setHasError] = useState(false);
const [isExpanded, setIsExpanded] = useState(false);

// ❌ Bad (unclear)
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const [expanded, setExpanded] = useState(false);
```

### Complex State: useReducer

For complex state with multiple sub-values:

```javascript
// ✅ Good (useReducer for complex state)
const [state, dispatch] = useReducer(formReducer, {
  name: '',
  email: '',
  errors: {},
  isSubmitting: false
});

// ❌ Bad (multiple useState for related data)
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
```

---

## Props

### Prop Types (TypeScript or PropTypes)

**Future:** When TypeScript is added:

```typescript
interface AccordionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  onToggle?: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ ... }) => {
  // Implementation
};
```

**Current (JavaScript):** Document props in component .md file

### Prop Defaults

```javascript
// ✅ Good (defaults in destructuring)
export const Card = ({ 
  variant = 'default',
  elevated = false,
  padding = 'medium' 
}) => {
  // ...
};

// ❌ Bad (defaults in body)
export const Card = (props) => {
  const variant = props.variant || 'default';
  const elevated = props.elevated || false;
  // ...
};
```

### Spread Props Carefully

```javascript
// ✅ Good (explicit + rest)
export const Button = ({ label, onClick, ...rest }) => {
  return <button onClick={onClick} {...rest}>{label}</button>;
};

// ⚠️ Use sparingly (blind spread)
export const Button = (props) => {
  return <button {...props} />;
};
```

---

## Hooks

### Rules of Hooks

1. **Only call at top level** (not in conditionals/loops)
2. **Only call in function components** or custom hooks
3. **Name custom hooks with `use` prefix**

### Custom Hooks

```javascript
// ✅ Good (custom hook)
function useAccordionState(defaultExpanded = false) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  
  const toggle = () => setIsExpanded(!isExpanded);
  const expand = () => setIsExpanded(true);
  const collapse = () => setIsExpanded(false);
  
  return { isExpanded, toggle, expand, collapse };
}

// Usage
export const Accordion = ({ defaultExpanded }) => {
  const { isExpanded, toggle } = useAccordionState(defaultExpanded);
  // ...
};
```

### useEffect Dependencies

```javascript
// ✅ Good (complete dependencies)
useEffect(() => {
  fetchData(id);
}, [id]); // id is listed

// ❌ Bad (missing dependency)
useEffect(() => {
  fetchData(id);
}, []); // id NOT listed - will be stale
```

---

## Framer Motion

### Animation Standards

```javascript
// ✅ Good (consistent animation values)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
>
  {children}
</motion.div>

// Standard durations:
// - Fast: 0.2s (hover, small changes)
// - Medium: 0.3s (most animations)
// - Slow: 0.5s (page transitions)
```

### Layout Animations

```javascript
// ✅ Good (layout animation for expanding)
<motion.div layout>
  {isExpanded && <Content />}
</motion.div>
```

### AnimatePresence

```javascript
// ✅ Good (exit animations)
<AnimatePresence>
  {isVisible && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )}
</AnimatePresence>
```

---

## Lucide React Icons

### Icon Usage

```javascript
import { ChevronDown, Menu, X, Check } from 'lucide-react';

// ✅ Good (consistent size + styling)
<ChevronDown 
  size={20} 
  className="icon-accent"
  style={{ color: 'var(--color-bronze)' }}
/>

// ❌ Bad (inconsistent sizing)
<ChevronDown width="20px" height="20px" />
```

### Standard Icon Sizes

- **Small:** 16px (inline with text)
- **Medium:** 20px (buttons, headers)
- **Large:** 24px (feature icons)
- **XL:** 32px+ (hero sections)

### Icon + Text

```javascript
// ✅ Good (flexbox alignment)
<button className="flex items-center gap-2">
  <Menu size={20} />
  <span>Menu</span>
</button>
```

---

## Component Composition

### Children Prop

```javascript
// ✅ Good (children for flexible content)
export const Card = ({ children, variant = 'default' }) => {
  return <div className={`card card-${variant}`}>{children}</div>;
};

// Usage
<Card variant="elevated">
  <h2>Title</h2>
  <p>Content</p>
</Card>
```

### Compound Components

```javascript
// ✅ Good (compound pattern for complex UI)
<Accordion>
  <Accordion.Item title="Section 1">Content 1</Accordion.Item>
  <Accordion.Item title="Section 2">Content 2</Accordion.Item>
</Accordion>
```

### Render Props (Use Sparingly)

```javascript
// ⚠️ OK for complex cases
<DataFetcher url="/api/data">
  {({ data, loading, error }) => {
    if (loading) return <Loading />;
    if (error) return <Error message={error} />;
    return <Content data={data} />;
  }}
</DataFetcher>
```

---

## Performance

### React.memo (When Needed)

```javascript
// ✅ Good (memoize expensive components)
export const ExpensiveList = React.memo(({ items }) => {
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
});
```

### useMemo and useCallback

```javascript
// ✅ Good (memoize expensive calculations)
const filteredItems = useMemo(() => {
  return items.filter(item => item.category === category);
}, [items, category]);

// ✅ Good (stable callback references)
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```

**Don't over-optimize:** Profile first, optimize when measured performance issue exists.

---

## Testing (Future)

### Component Tests

```javascript
// ✅ Good (clear test structure)
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('expands when clicked', () => {
    render(<Accordion title="Test">Content</Accordion>);
    
    const trigger = screen.getByText('Test');
    fireEvent.click(trigger);
    
    expect(screen.getByText('Content')).toBeVisible();
  });
  
  it('starts collapsed by default', () => {
    render(<Accordion title="Test">Content</Accordion>);
    
    expect(screen.queryByText('Content')).not.toBeVisible();
  });
});
```

---

## Accessibility

### Semantic HTML

```javascript
// ✅ Good (semantic elements)
<button onClick={handleClick}>Click Me</button>
<nav>...</nav>
<header>...</header>
<main>...</main>

// ❌ Bad (div soup)
<div onClick={handleClick}>Click Me</div>
<div className="nav">...</div>
```

### ARIA Attributes

```javascript
// ✅ Good (accessible accordion)
<button
  aria-expanded={isExpanded}
  aria-controls="content-id"
  onClick={handleToggle}
>
  {title}
</button>
<div id="content-id" aria-hidden={!isExpanded}>
  {children}
</div>
```

### Keyboard Navigation

```javascript
// ✅ Good (keyboard support)
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Interactive Element
</div>
```

---

## Error Boundaries

### Creating Error Boundaries

```javascript
// ✅ Good (catch render errors)
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

---

## Import/Export Conventions

### Named Exports (Preferred)

```javascript
// ✅ Good (named exports)
export const Accordion = ({ ... }) => { ... };
export const AccordionItem = ({ ... }) => { ... };

// Import
import { Accordion, AccordionItem } from '@shared/components/library/Accordion';
```

### Default Exports (Pages Only)

```javascript
// ✅ OK for pages
export default function HomePage() {
  return <div>...</div>;
}
```

### Barrel Exports (Library Index)

```javascript
// shared/components/library/index.js
export { Accordion } from './Accordion';
export { Card } from './Card';
export { Button } from './Button';

// Usage
import { Accordion, Card, Button } from '@shared/components/library';
```

---

## See Also

- [`.rules/00-general.md`](./00-general.md) — Universal coding standards
- [`.rules/10-design-system.md`](./10-design-system.md) — Design token usage
- [`.rules/20-testing.md`](./20-testing.md) — Testing requirements
- [`ARCHITECTURE.md`](../ARCHITECTURE.md) — Component library structure


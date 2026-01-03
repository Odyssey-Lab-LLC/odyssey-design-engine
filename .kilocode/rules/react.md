# React/JSX Standards

See `.rules/10-react-standards.md` for complete React/JSX patterns.

## Quick Reference

**Component naming:**
- Form-first, not content-first
- ✅ Accordion, Card, Button
- ❌ PrinciplesAccordion, PillarCard

**Code style:**
- Use `className`, not `class`
- Named exports: `export { Accordion }`
- Boolean props: `<Component enabled />` not `enabled={true}`
- Destructure props in function signature

**State management:**
- useState for component state
- Prefer controlled components
- Clear boolean names: `isLoading`, `hasError`, `isExpanded`

**Hooks:**
- Only at top level (not in conditionals/loops)
- Custom hooks start with `use` prefix
- Include all dependencies in useEffect arrays

**Animations:**
- framer-motion for complex animations
- Standard durations: 0.2s (fast), 0.3s (medium), 0.5s (slow)
- Use `easeOut` for most transitions

**Icons:**
- lucide-react for all icons
- Sizes: 16px (small), 20px (medium), 24px (large), 32px+ (xl)

Read `.rules/10-react-standards.md` for full details and examples.


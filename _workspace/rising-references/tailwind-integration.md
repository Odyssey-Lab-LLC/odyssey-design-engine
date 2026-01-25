# Tailwind 4 Integration: Rising Ink Tokens

> **Purpose**: How to integrate `design-tokens.json` with Tailwind 4's @theme directive in your Astro project.

---

## Setup (5 minutes)

### 1. Install Tailwind 4

```bash
npm install tailwindcss@next @tailwindcss/postcss@next
```

### 2. Create `src/styles/global.css`

```css
@import 'tailwindcss';

@theme {
  /* Colors */
  --color-dark: #333333;
  --color-beige: #ECE9E2;
  --color-red: #C1272D;
  --color-white: #FFFFFF;
  
  --color-dark-400: #5C5C5C;
  --color-dark-600: #1A1A1A;
  --color-red-400: #D94A4F;
  --color-red-600: #9A1F24;
  --color-beige-100: #F5F3EE;
  --color-beige-300: #DBD7CE;

  /* Typography */
  --font-headline: 'Lemon Milk', sans-serif;
  --font-body: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  
  --font-size-xs: 0.8rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  --font-size-6xl: 3.75rem;

  /* Spacing */
  --spacing-section: 5rem;
  --spacing-component: 1.5rem;
  --spacing-element: 1rem;
  --spacing-micro: 0.5rem;

  /* Shadows */
  --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.08);
  --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.12);
  --shadow-strong: 0 8px 24px rgba(0, 0, 0, 0.16);

  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 600ms;
  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Base styles */
body {
  font-family: var(--font-body);
  background-color: var(--color-beige);
  color: var(--color-dark);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-headline);
  font-weight: 700;
}
```

### 3. Import in BaseLayout

```astro
---
// src/layouts/BaseLayout.astro
import '../styles/global.css';
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Rising Ink</title>
    
    <!-- Load Lemon Milk font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Lemon+Milk:wght@400;700;900&display=swap" rel="stylesheet">
  </head>
  <body>
    <slot />
  </body>
</html>
```

---

## Usage in Components

```astro
<!-- Hero section example -->
<section class="bg-dark text-white py-section">
  <div class="max-w-screen-xl mx-auto px-component">
    <h1 class="font-headline text-5xl font-black mb-element">
      Rising Ink
    </h1>
    <p class="font-body text-2xl mb-component">
      Where Your Story Becomes Art
    </p>
    <button class="bg-red text-white px-component py-element rounded-md 
                   hover:bg-red-400 transition-all duration-normal">
      Book Your Session
    </button>
  </div>
</section>
```

---

## Token → Tailwind Class Mapping

| Token | Tailwind Class | Example |
|-------|----------------|---------|
| `color-dark` | `bg-dark` `text-dark` | `<div class="bg-dark text-white">` |
| `color-red` | `bg-red` `text-red` `border-red` | `<button class="bg-red">` |
| `font-headline` | `font-headline` | `<h1 class="font-headline">` |
| `spacing-component` | `p-component` `px-component` `py-component` | `<div class="py-component">` |
| `shadow-soft` | `shadow-soft` | `<div class="shadow-soft">` |

**Responsive spacing example**:
```html
<section class="py-12 md:py-16 lg:py-section">
  <!-- Mobile: 3rem, Tablet: 4rem, Desktop: 5rem -->
</section>
```

---

## Verify Setup

```bash
npm run dev
```

Visit `http://localhost:4321` and inspect elements. CSS variables should be applied:

```css
/* In browser DevTools, you should see: */
body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: #ECE9E2;
  color: #333333;
}
```

---

## Troubleshooting

**Fonts not loading?**
- Check Google Fonts link in `<head>`
- Verify font name spelling: `'Lemon Milk'` (with quotes)

**Tokens not applying?**
- Ensure `global.css` imported in BaseLayout
- Check Tailwind 4 installed (`npm list tailwindcss`)
- Restart dev server after token changes

**Colors look wrong?**
- Verify hex values in `@theme` match `design-tokens.json`
- Check for typos in class names (`bg-red` not `bg-Red`)

---

**Next Steps**: Use `gemini-prompt-template.md` to generate sections with these tokens.

# Vercel Deployment

Read `.rules/12-vercel-deployment.md` for complete Vercel configuration standards.

## Quick Reference

**Vite outDir MUST be relative:**
```javascript
// ✅ Correct:
outDir: 'dist'

// ❌ Wrong:
outDir: path.resolve(__dirname, '../dist/odyssey-lab')
```

**PostCSS explicit Tailwind config:**
```javascript
plugins: {
  tailwindcss: { config: './config/tailwind.config.js' },
}
```

**Tailwind scoped patterns:**
```javascript
content: [
  "./sites/**/*.{js,jsx,ts,tsx,html}",  // Not "./**/*"
  "./shared/**/*.{js,jsx,ts,tsx}",
]
```

**SPA routing (React Router):**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

## Vercel Settings

- Root Directory: `sites/odyssey-lab`
- Output Directory: `dist`
- Install Command: `npm install --prefix ../../`

Read [`.rules/12-vercel-deployment.md`](../../.rules/12-vercel-deployment.md) for complete guide.

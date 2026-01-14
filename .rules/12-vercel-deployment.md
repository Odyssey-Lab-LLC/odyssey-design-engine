# Vercel Deployment Standards

**Status:** Authoritative  
**Scope:** Vercel configuration for multi-site React + Vite monorepo  
**Created:** 2026-01-04  
**Last Updated:** 2026-01-04

---

## Critical Configuration Requirements

### 1. Vite Build Output Directory

**MUST be relative to site root when Vercel Root Directory is set.**

```javascript
// config/vite.config.js
export default defineConfig({
  root: path.resolve(__dirname, '../sites/odyssey-lab'),
  build: {
    outDir: 'dist',  // ✅ CORRECT - Relative to root (sites/odyssey-lab/dist/)
    emptyOutDir: true
  }
})
```

**❌ NEVER use absolute paths:**
```javascript
// ❌ WRONG - Outputs OUTSIDE Vercel deployment directory:
outDir: path.resolve(__dirname, '../dist/odyssey-lab')  // Goes to PROJECT_ROOT/dist/
```

**Why:**
- Vercel Root Directory: `sites/odyssey-lab`
- Vercel expects output at: `sites/odyssey-lab/dist/` (Output Directory setting)
- Absolute paths bypass Vercel's deployment packaging
- Build succeeds but files aren't in deployment artifacts → 404

---

### 2. PostCSS Tailwind Configuration

**MUST explicitly reference Tailwind config location.**

```javascript
// config/postcss.config.js
export default {
  plugins: {
    tailwindcss: { config: './config/tailwind.config.js' },  // ✅ Explicit path
    autoprefixer: {},
  },
}
```

**❌ NEVER rely on auto-discovery in monorepos:**
```javascript
// ❌ WRONG - May find wrong config or scan node_modules:
tailwindcss: {},
```

**Why:**
- Multi-site monorepo has multiple Tailwind configs
- Auto-discovery is unreliable with subdirectory builds
- Explicit paths ensure correct config loading

---

### 3. Tailwind Content Patterns

**MUST be scoped to specific directories.**

```javascript
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./sites/**/*.{js,jsx,ts,tsx,html}",      // ✅ Scoped to sites/
    "./shared/**/*.{js,jsx,ts,tsx}",          // ✅ Scoped to shared/
    "./_workspace/**/*.{js,jsx,ts,tsx,html}", // ✅ Scoped to workspace/
  ],
}
```

**❌ NEVER use broad recursive patterns:**
```javascript
// ❌ WRONG - Matches node_modules/, causes performance warnings:
content: [
  "./**/*.{js,jsx,ts,tsx}",  // Scans EVERYTHING including node_modules/
  "./**/*.html",
]
```

**Why:**
- Broad patterns scan `node_modules/` → massive performance hit
- Vercel build logs show Tailwind warnings
- Scoped patterns are faster and more reliable

---

### 4. Vercel Project Settings

**For each site in `sites/` directory:**

| Setting | Value | Notes |
|---------|-------|------ |
| Root Directory | `sites/odyssey-lab` | ⚠️ CRITICAL - Points to deployable site |
| Framework Preset | `Vite` | Auto-detected |
| Build Command | `npm run build` | Runs from repo root |
| Output Directory | `dist` | Relative to Root Directory |
| Install Command | `npm install --prefix ../../` | Installs from monorepo root (one level under `sites/`) |
| Node.js Version | `18.x` or `20.x` | Recommended |

**Critical:** Root Directory must match site path. Each site = separate Vercel project with own Root Directory setting.

### Nested Root Directories (Vertical Containers)

If your Root Directory is nested (e.g., `sites/rising-ink/demos`), update commands to reach the repo root:

| Setting | Value |
|---------|-------|
| Install Command | `npm install --prefix ../../../` |
| Build Command | `npm --prefix ../../../ run build:rising-ink` |
| Output Directory | `dist` |

---

### 5. Single-Page App (SPA) Routing

**For React Router (client-side routing), add to `vercel.json`:**

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Why:**
- Direct URL access (`/andrew-threshold`) must serve `index.html`
- Client-side React Router then handles navigation
- Without rewrites: 404 on page refresh or direct links

**How it works:**
1. User visits `/andrew-threshold`
2. Vercel rewrites internally to `/` (serves `index.html`)
3. React app loads
4. React Router sees `/andrew-threshold` in browser URL
5. Renders correct component via `<Route path="/andrew-threshold" />`

---

## Multi-Site Deployment Pattern

### Architecture

```
GitHub Repo: odyssey-design-engine
├── Vercel Project 1: odyssey-lab
│   ├── Root Directory: sites/odyssey-lab
│   ├── Domain: odyssey-lab.vercel.app
│   └── Routes: /, /andrew-threshold, /future-routes
│
└── Vercel Project 2: client-site (future)
    ├── Root Directory: sites/client-site
    └── Domain: client-site.vercel.app
```

**Each site:**
- Independent Vercel project
- Own Root Directory setting
- Shared `config/` (via `--config` flag in build command)
- Shared `shared/` imports (via Vite aliases)
- Same monorepo install (`npm install --prefix ../../`)

---

## Vercel Build Process Flow

```
1. Clone repo
2. cd into Root Directory (sites/odyssey-lab)
3. Run Install Command: npm install --prefix ../../
   └─> Installs dependencies from PROJECT_ROOT/package.json
4. Run Build Command: npm run build
   └─> Executes vite build --config config/vite.config.js
   └─> Loads config from PROJECT_ROOT/config/vite.config.js
   └─> Outputs to sites/odyssey-lab/dist/
5. Package deployment from sites/odyssey-lab/dist/
6. Deploy to CDN
```

**Key insight:** Build runs from site directory, but references configs/deps from repo root.

---

## Common Issues & Solutions

### Issue 1: 404 NOT_FOUND After Successful Build

**Symptoms:**
- Build log shows success
- Output shows `../../dist/` paths
- Live site returns 404

**Cause:** Vite `outDir` uses absolute path outside deployment directory.

**Solution:**
```javascript
// ❌ Before:
outDir: path.resolve(__dirname, '../dist/odyssey-lab')

// ✅ After:
outDir: 'dist'  // Relative to root (sites/odyssey-lab/dist/)
```

---

### Issue 2: Tailwind Warning About node_modules

**Symptoms:**
Build log shows:
```
warn - Your content configuration includes a pattern which looks like it's accidentally matching all of node_modules
```

**Cause:** Overly broad Tailwind content patterns.

**Solution:**
```javascript
// Fix root tailwind.config.js:
content: [
  "./sites/**/*.{js,jsx,ts,tsx,html}",  // NOT "./**/*.{js,jsx,ts,tsx}"
  "./shared/**/*.{js,jsx,ts,tsx}",
]

// Fix config/postcss.config.js:
plugins: {
  tailwindcss: { config: './config/tailwind.config.js' },
}
```

---

### Issue 3: React Router Routes 404 on Direct Access

**Symptoms:**
- Home page (`/`) loads fine
- Nested routes (`/andrew-threshold`) 404 on direct access or refresh
- Routes work via client-side navigation only

**Cause:** Vercel serves literal file paths by default; SPA routes aren't files.

**Solution:** Ensure `vercel.json` has SPA rewrites:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Verification:** All routes should serve `index.html`, React Router handles the rest.

---

### Issue 4: Import Aliases (@shared) Not Resolving

**Symptoms:**
- Local build works
- Vercel build fails with "Cannot find module '@shared/...'"

**Cause:** Vite alias paths constructed incorrectly for build context.

**Solution:** Use `path.resolve(__dirname, '../relative/path')` from config directory:
```javascript
// config/vite.config.js
resolve: {
  alias: {
    '@shared': path.resolve(__dirname, '../shared')  // Relative to config/
  }
}
```

---

## Validation Protocol

**Before deployment:**

1. **Local build test:**
   ```bash
   npm run build
   ls sites/odyssey-lab/dist/  # Verify files exist
   ```

2. **Check build output paths:**
   - Should show: `dist/index.html` (NOT `../../dist/odyssey-lab/`)
   - Paths relative to site root = correct

3. **Preview test:**
   ```bash
   npm run preview
   # Visit all routes to confirm SPA nav works
   ```

4. **Config verification:**
   - Vite `outDir`: `'dist'` (string, not path.resolve)
   - PostCSS Tailwind: Explicit config path
   - Tailwind content: Scoped patterns only
   - vercel.json: SPA rewrites for React Router

---

## Documentation References

**Project-specific:**
- [`plans/lessons/003-tailwind-config-vercel-warning-fix.md`](../plans/lessons/003-tailwind-config-vercel-warning-fix.md)
- [`plans/research/research_reports/001-vercel-deployment-initial-research-2026-01-13.md`](../plans/research/research_reports/001-vercel-deployment-initial-research-2026-01-13.md)

**External:**
- Vercel Vite Documentation: https://vercel.com/docs/frameworks/vite
- Vercel Monorepo Guide: https://vercel.com/docs/monorepos
- Vite Build Configuration: https://vitejs.dev/config/build-options.html

---

## For Future Sites

When adding `sites/client-site/`:

1. Create new Vercel project
2. Set Root Directory: `sites/client-site`
3. Same install command: `npm install --prefix ../../`
4. Same config pattern: `outDir: 'dist'` (relative, not absolute)
5. Same PostCSS/Tailwind explicit paths
6. Add SPA rewrites to `vercel.json` if using React Router

**Pattern is repeatable** — each site follows same config structure.

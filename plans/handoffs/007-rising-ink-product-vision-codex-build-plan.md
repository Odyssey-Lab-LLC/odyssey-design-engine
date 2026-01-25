# Rising Ink Product Vision Intro Page - Codex Build Plan

**Purpose:** Complete build instructions for creating a single-page product vision page for Rising Ink, integrated into the Rising Ink demos site as a new route.

**Target Location:** `sites/rising-ink/demos/src/pages/ProductVisionIntro.jsx`  
**Route Path:** `/product-vision-intro`  
**Integration Point:** `sites/rising-ink/demos/src/App.jsx`

---

## Overview

You are building a single-page scroll presentation that tells the strategic story of Rising Ink - a tattoo agency transitioning into a vertical SaaS platform. The page combines visual components from 4 JSX files into one cohesive React component.

**What You're Building:**
- A single-page React component (`ProductVisionIntro.jsx`)
- Combines hero section, content sections, and visual components
- Includes canvas animations, mode toggle, particle effects
- Uses Tailwind CSS (via existing config)
- Integrates into existing Rising Ink demos site routing

**Key Visual Features:**
- Hero section with terminal/dev mode toggle
- Canvas ink particle animation
- Light/dark theme sections
- Visual component kit (ecosystem node, pipeline flow, stack bento, quest log)
- Text scramble effects
- Terminal typewriter effect

**Source Files:**
- `ri-prod-vision-gem-1-hero.jsx` - Hero section with mode toggle
- `ri-prod-vision-gem-2-content-patterns.jsx` - Content sections with themes
- `ri-prod-vision-gem-3-visual-patterns.jsx` - Visual component kit
- `ri-prod-vision-gem-4-visual-patterns-proof-points.jsx` - Empty (skip)

---

## Architecture

### Component Structure

**Single Large Component Approach:**
- Create one React component: `ProductVisionIntro.jsx`
- Keep all sections in one file (self-contained)
- Use React hooks for state management
- Inline styles where needed (Rising Ink demos speed-first exception allows hardcoded values)

### File Structure

```
sites/rising-ink/demos/
├── src/
│   ├── App.jsx (modify - add route)
│   └── pages/
│       └── ProductVisionIntro.jsx (create - main component)
```

### Route Configuration

Add to `sites/rising-ink/demos/src/App.jsx`:
```jsx
import ProductVisionIntro from './pages/ProductVisionIntro';

// Inside Routes:
<Route path="/product-vision-intro" element={<ProductVisionIntro />} />
```

### Dependencies

**Already Available (from package.json):**
- React 19.2.3
- React Router DOM 7.11.0
- Tailwind CSS 3.4.19 (via existing config or CDN)

**No New Dependencies Required**

---

## Complete Content

### Hero Section Content

**Main Headline:**
- "THE INFLECTION POINT"

**Subheadline (Vision Mode):**
- "Transitioning a high-performance tattoo agency into a unified vertical SaaS platform. Revenue-funded skunkworks."

**Subheadline (Architecture Mode):**
- `{ "status": "scaling", "target_arr": "$1.2M", "focus": "vSaaS_Architecture" }`

**Terminal Init Lines:**
1. `> initializing rising_ink.v2`
2. `> mounting sanity_mcp_server`
3. `> arr_target: $1,000,000`
4. `> status: ready`

### Bento Stack Section Content

**Card 1: Sanity (Backend Architecture)**
- Title: "Backend Architecture"
- Badge: "MCP ACTIVE"
- Heading: "Sanity Studio V3"
- Description: "Official MCP integration for AI-leveraged development. Claude Code/Cursor ready for schema orchestration."
- Code (Architecture Mode):
  ```
  $ npx sanity@latest mcp configure
  [SYSTEM] Detecting AI tools...
  [SUCCESS] Claude Code integration enabled.
  [QUERY] get_schema(portfolioItem)
  ```

**Card 2: Plasmic (UI Layer)**
- Title: "UI Layer"
- Heading: "Plasmic"
- Description: "White-label Platform API for sub-10hr site deployments."
- Code (Architecture Mode):
  ```json
  {
    "engine": "Plasmic_Loader",
    "mode": "VisualCodegen",
    "performance": "Max"
  }
  ```

**Card 3: Astro (Frontend)**
- Title: "Frontend"
- Heading: "Astro"
- Description: "Zero-JS islands for lightning fast portfolio delivery."
- Code (Architecture Mode):
  ```
  // hydration: client:visible
  // perf: 100 Lighthouse
  ```

**Card 4: Elvis Build (Test Case)**
- Title: "The Test Case: Elvis"
- Heading: "PROJECT ELVIS"
- Description: "A 30-43 hour build estimate to prove the stack. Dynamic relational portfolio, auto-filtered by style, managed via AI-first CLI."
- Stats:
  - "30h" - Min Build
  - "40+" - Sanity Tools
- Code (Architecture Mode):
  ```
  "sprint_duration": "43h",
  "figma_readiness": "15_point_checklist",
  "complexity": "Relational_DB"
  ```

### Roadmap Section Content

**Section Title:** "GIT_COMMIT_HISTORY (Roadmap)"

**Commit 1:**
- Hash: "commit b4a1c2... [2024]"
- Title: "Agency Validation Verified"
- Description: "Built $500k ARR niche agency focusing on high-value tattoo artists."
- Status: Complete (green dot)

**Commit 2:**
- Hash: "commit d7f3e8... [Q1 2025]"
- Title: "Productized Scaling"
- Description: "Implementing $2,000/mo subscription model. Target: 40 clients by Summer."
- Status: In Progress (yellow dot)

**Commit 3:**
- Hash: "pending_merge... [Q3 2025]"
- Title: "The Vertical SaaS Platform"
- Description: "Extracting the platform. Integrated POS, Booking, Portfolio, and CRM. Seeking technical co-architects."
- Status: Pending (red dot, pulsing)

### CTA Footer Content

**Heading:** "READY TO COMMIT?"

**Button 1:**
- Text: "> RUN_ELVIS_TEST"
- Style: Secondary (zinc-900 background)

**Button 2:**
- Text: "$ GIT_INIT_PARTNERSHIP"
- Style: Primary (red-600 background, glow effect)

**Footer Text:**
- "v2.0.5_STABLE // NO_VC_CAPITAL_REQUIRED // REVENUE_DRIVEN"

### Content Section 2: Strategy Map

**Section Title:** "The Path of Mastery"

**Quote:**
- "We don't guess. We build niche agencies, get paid to learn the market, and A/B test solutions with real clients before we write a single line of product code."

**Stage 01: Service as R&D**
- "Most SaaS startups raise capital and hope for fit. We build an agency that does $1M+ in revenue first. Our customers fund the product development."

**Stage 02: The Tattoo Moat**
- "10 years deep in the industry. We've identified 500+ prospects and a channel partner (Kiwi Diamond) with access to 500+ studios."

**Stage 03: Solo Artist Focus**
- "Artists are moving to private studios. They charge $1k-$3k per day. They are the decision-makers. We sell them the operating system."

**Stage 04: Vertical Extraction**
- "Once the solo artist product is proven, we sell the agency business to keep the codebase and scale the platform across the industry."

### Content Section 3: Tech Forge

**Section Title:** "THE ARCHITECTURE"
**Subtitle:** "Project: Elvis // Technical Calibration"

**Sanity Card:**
- Label: "[[ BACKEND_MANIFEST ]]"
- Title: "Sanity V3"
- Description: "Official MCP server integration. Claude Code/Cursor ready. Dynamic schemas for relational tattoo portfolios."
- Code:
  ```
  $ npx sanity@latest mcp configure
  > Connection_Stable
  > AI_Assistant_Authorized
  ```

**Plasmic Card:**
- Label: "[[ UI_FABRICATION ]]"
- Title: "Plasmic"
- Description: "White-label Platform API. Building a component system that allows sub-10hr deployment for new artists."

**Astro Card:**
- Label: "[[ CORE_RUNTIME ]]"
- Title: "Astro Islands"
- Description: "Zero-JS baseline performance. Decoupled design systems using Islands Architecture for the highest possible Lighthouse scores."
- Progress Bar: 100% (blue)

**Stats Bar:**
- "43H" - Build Time Estimate
- "15PT" - Figma Checklist
- "Free" - Sanity T1 Tier

### Content Section 4: Quest Log

**Section Title:** "The Quest Log"
**Subtitle:** "We don't ask for marriage on the first date. We ship code first."

**Quest 1: The Elvis Test**
- Status: "Available Now" (green badge)
- Description: "Complete a 30-43 hour paid build for Project Elvis. We calibrate our technical workflow, prove the Sanity/Plasmic stack, and see if we actually like building together."
- Checklist:
  - [ ] Implement Relational Database Schema
  - [ ] Export Custom Components via Plasmic
  - [ ] Deploy Zero-JS Islands (Astro)
- Button: "Initialize Quest 1"

**Quest 2: The Scaling Path**
- Status: "Locked" (gray badge, locked icon)
- Description: "Systemizing HighLevel deployments for 40 solo artists. Setting the foundation for $1M ARR. We start hiring junior implementers; you move into architecture leadership."

**Quest 3: Technical Co-Foundership**
- Status: "Locked" (gray badge, locked icon)
- Description: "Formal partnership. Extraction of the platform into a standalone Vertical SaaS product. Equity distribution and long-term roadmap control."

### Visual Component 1: HighLevel Ecosystem Node

**Purpose:** Show the HighLevel platform as central node with connected services

**Center Node:**
- Label: "CORE"
- Text: "HL" (HighLevel)
- Pulsing animation
- Hover: Scale up

**Connected Nodes (5 total):**
1. **Waivers** (Top Left) - Document icon
2. **Phones** (Top Right) - Phone icon
3. **Bookings** (Bottom Left) - Calendar icon
4. **Aftercare** (Bottom Right) - Heart icon
5. **Ads** (Top Center) - Megaphone icon

**Visual Details:**
- SVG connecting lines with gradient
- Floating animation on nodes (staggered delays)
- Hover: Green border and text color
- Background grid pattern

### Visual Component 2: Agency-to-Product Pipeline

**Purpose:** Show the transformation flow from agency to product

**Horizontal Flow (Left to Right):**

**Step 1: Input**
- Icon: 🏛️
- Label: "INPUT"
- Title: "Niche Agency"
- Subtitle: "Market Intel"

**Step 2: Process**
- Icon: 🔥
- Label: "PROCESSING"
- Title: "Paid R&D"
- Subtitle: "Client Funded"

**Step 3: Output**
- Icon: 💰
- Label: "OUTPUT"
- Title: "$1M ARR"
- Subtitle: "Service Rev"
- Border: Green (highlighted)

**Step 4: Result**
- Icon: 💎
- Label: "RESULT"
- Title: "Platform"
- Subtitle: "Extract IP"
- Background: Light (beige)

**Visual Details:**
- Horizontal pipe with animated dashed line (green, flowing)
- Cards sit above pipe
- Hover: Border color changes

### Visual Component 3: Stack Bento

**Purpose:** Show the tech stack (Sanity, Plasmic, Astro) with hover details

**Card 1: Sanity**
- Badge: "MCP Active" (red)
- Title: "Sanity"
- Subtitle: "Structured Content"
- Hover Reveal:
  - ✓ AI Coding Ready
  - ✓ Relational Data
  - ✓ Scaleable API
- Background Letter: "S" (decorative)

**Card 2: Plasmic**
- Badge: "Visual Builder" (beige)
- Title: "Plasmic"
- Subtitle: "Frontend Composition"
- Hover Reveal:
  - "Agency speed, Product quality."
  - "Est. Build: 30-43hrs"
- Background Letter: "P" (decorative)

**Card 3: Astro**
- Badge: "Zero JS" (green)
- Title: "Astro"
- Subtitle: "Performance Engine"
- Hover Reveal:
  - Lighthouse Score: 100
- Background Letter: "A" (decorative)

**Visual Details:**
- 3-column grid
- Hover: Content slides up, opacity fades in
- Border color changes on hover

### Visual Component 4: Quest Log Timeline

**Purpose:** Show roadmap as git-style commits

**Timeline Structure:**
- Vertical line on left
- Items positioned along line

**Item 1: Agency Scale (Q1)**
- Icon: Checkmark (green circle)
- Status: "Verified" (green badge)
- Title: "Agency Scale (Q1)"
- Description: "Commit: Initial bootstrap phase complete. Revenue validation confirmed."

**Item 2: Elvis Pilot (Summer)**
- Icon: Pulsing dot (red circle)
- Status: "In Progress" (red badge, pulsing)
- Title: "Elvis Pilot (Summer)"
- Description: "Current Quest: Social media automation integration & styling."
- Border: Red left border

**Item 3: Platform Launch**
- Icon: Lock (gray circle)
- Status: "Locked" (gray badge)
- Title: "Platform Launch"
- Description: "Requires: $1M ARR Achievement to unlock repository."
- Style: Dashed border, grayscale, opacity reduced

**Visual Details:**
- Vertical timeline line
- Icons positioned on line
- Hover: Grayscale removed, opacity restored

---

## Technical Specifications

### CSS Variables & Colors

**From gem-1 (Hero):**
```css
--ink-red: #ff3333;
--terminal-beige: #e6e6e6;
--void-black: #0a0a0a;
--grid-color: rgba(255, 51, 51, 0.05);
```

**From gem-2 (Content):**
```css
--ink-red: #C1272D;
--zonai-green: #1AD99E;
--forge-black: #0a0a0a;
--map-beige: #F5F3EE;
--map-border: #D4CDBA;
```

**Note:** Use `#C1272D` as primary ink-red (from gem-2, more consistent)

**From gem-3 (Visual Patterns):**
```css
forge: {
  black: '#0a0a0a',
  red: '#C1272D',
  paper: '#F5F3EE',
  green: '#10B981',
  darkgray: '#171717',
}
```

### Fonts

**Required Google Fonts:**
- Cinzel (serif) - weights: 400, 700, 900
- JetBrains Mono (monospace) - weights: 300, 400, 700
- Oswald (sans-serif) - weights: 400, 500, 600, 700
- Manrope (sans-serif) - weights: 300, 400, 600
- Inter (sans-serif) - weights: 400, 700, 900

**Font Usage:**
- Headers: Oswald or Cinzel
- Body: Manrope or Inter
- Code/Terminal: JetBrains Mono

### Complete CSS Styles

**Base Styles:**
```css
body {
  background-color: #0a0a0a;
  color: #F5F3EE;
  font-family: 'Manrope', sans-serif;
  overflow-x: hidden;
}

.dev-mode {
  font-family: 'JetBrains Mono', monospace;
}

/* Grid Overlay */
.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 51, 51, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 51, 51, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 1;
}

.dev-mode .grid-overlay {
  background-image: 
    linear-gradient(rgba(255, 51, 51, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 51, 51, 0.15) 1px, transparent 1px);
}

/* Canvas */
canvas#inkCanvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.6;
}

.content-layer {
  position: relative;
  z-index: 10;
}

/* Glitch Text */
.glitch-text {
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  letter-spacing: -0.05em;
}

.dev-mode .glitch-text {
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0;
}

/* Bento Cards */
.bento-card {
  background: rgba(26, 26, 26, 0.8);
  border: 1px solid rgba(193, 39, 45, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.bento-card:hover {
  border-color: #C1272D;
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 0 30px rgba(193, 39, 45, 0.1);
}

/* Toggle Button */
.toggle-container {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 100;
}

.toggle-btn {
  background: #1a1a1a;
  border: 1px solid #C1272D;
  padding: 0.5rem 1rem;
  color: #C1272D;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  font-weight: bold;
}

.toggle-btn.active {
  background: #C1272D;
  color: white;
  box-shadow: 0 0 15px #C1272D;
}

/* Scanlines */
.scanlines {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
              linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 4px, 3px 100%;
  pointer-events: none;
  z-index: 99;
  opacity: 0;
  transition: opacity 0.3s;
}

.dev-mode .scanlines {
  opacity: 1;
}

/* Mode-specific text visibility */
.json-code {
  color: #ff9d00;
  display: none;
}

.dev-mode .json-code {
  display: block;
}

.dev-mode .vision-text {
  display: none;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #0a0a0a;
}

::-webkit-scrollbar-thumb {
  background: #C1272D;
}

/* Flicker Animation */
@keyframes flicker {
  0% { opacity: 0.97; }
  5% { opacity: 0.95; }
  10% { opacity: 0.9; }
  15% { opacity: 0.95; }
  100% { opacity: 1; }
}

.dev-mode .glitch-active {
  animation: flicker 0.1s infinite;
}

/* Breathing Ink Effect */
.breathing-ink {
  background: radial-gradient(circle at center, rgba(193, 39, 45, 0.15) 0%, transparent 70%);
  animation: breathe 8s infinite ease-in-out;
}

@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 0.9; }
}

/* Zelda Border */
.zelda-border {
  border: 2px solid #D4CDBA;
  position: relative;
  background: rgba(255, 255, 255, 0.4);
}

.zelda-border::before {
  content: '';
  position: absolute;
  top: -6px;
  left: -6px;
  width: 12px;
  height: 12px;
  background: #D4CDBA;
  transform: rotate(45deg);
}

/* Forge Card */
.forge-card {
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(193, 39, 45, 0.2);
  transition: all 0.3s ease;
}

.forge-card:hover {
  border-color: #C1272D;
  box-shadow: 0 0 25px rgba(193, 39, 45, 0.2);
  transform: translateY(-4px);
}

/* Rune Glow */
.rune-glow {
  color: #1AD99E;
  text-shadow: 0 0 8px rgba(26, 217, 158, 0.6);
}

/* Quest Line */
.quest-line {
  position: absolute;
  left: 2rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: repeating-linear-gradient(to bottom, #D4CDBA 0, #D4CDBA 10px, transparent 10px, transparent 20px);
}

/* Theme Sections */
[data-theme="dark"] {
  background-color: #0a0a0a;
  color: #fff;
}

[data-theme="light"] {
  background-color: #F5F3EE;
  color: #2c2c2c;
  background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
}
```

### JavaScript Functionality → React Conversion

#### 1. Canvas Ink Particle Effect

**Original (vanilla JS):**
```javascript
const canvas = document.getElementById('inkCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null };

function initCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: Math.random() * 0.5 - 0.25,
      vy: Math.random() * 0.5 - 0.25,
      size: Math.random() * 2 + 1
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const isDev = document.body.classList.contains('dev-mode');
  
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    
    let drawX = p.x;
    let drawY = p.y;
    if (isDev) {
      drawX = Math.round(p.x / 40) * 40;
      drawY = Math.round(p.y / 40) * 40;
    }
    
    ctx.beginPath();
    ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
    ctx.fillStyle = '#ff3333';
    ctx.fill();
    
    if (mouse.x && mouse.y) {
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 150) {
        ctx.beginPath();
        ctx.moveTo(drawX, drawY);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = isDev ? 'rgba(255,51,51,0.2)' : 'rgba(255,51,51,0.05)';
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(animate);
}
```

**React Conversion:**
```jsx
import { useEffect, useRef, useState } from 'react';

function ProductVisionIntro() {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [mouse, setMouse] = useState({ x: null, y: null });
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newParticles = [];
      for (let i = 0; i < 100; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.random() * 0.5 - 0.25,
          vy: Math.random() * 0.5 - 0.25,
          size: Math.random() * 2 + 1
        });
      }
      setParticles(newParticles);
    };

    initCanvas();

    const handleResize = () => {
      initCanvas();
    };

    const handleMouseMove = (e) => {
      setMouse({ x: e.x, y: e.y });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        let drawX = p.x;
        let drawY = p.y;
        if (isDevMode) {
          drawX = Math.round(p.x / 40) * 40;
          drawY = Math.round(p.y / 40) * 40;
        }
        
        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = '#ff3333';
        ctx.fill();
        
        if (mouse.x && mouse.y) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(drawX, drawY);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isDevMode ? 'rgba(255,51,51,0.2)' : 'rgba(255,51,51,0.05)';
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles, mouse, isDevMode]);

  return <canvas ref={canvasRef} id="inkCanvas" />;
}
```

#### 2. Mode Toggle

**React Conversion:**
```jsx
const [isDevMode, setIsDevMode] = useState(false);

const handleModeToggle = () => {
  setIsDevMode(!isDevMode);
  // Trigger text scramble
  scrambleText('hero-headline', !isDevMode ? 'CORE_SYSTEM_LOG' : 'THE INFLECTION POINT');
};

// Apply class to body via useEffect
useEffect(() => {
  if (isDevMode) {
    document.body.classList.add('dev-mode');
  } else {
    document.body.classList.remove('dev-mode');
  }
}, [isDevMode]);
```

#### 3. Text Scramble Effect

**Original:**
```javascript
function scrambleText(element, finalString) {
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  let iteration = 0;
  const interval = setInterval(() => {
    element.innerText = finalString.split('')
      .map((char, index) => {
        if (index < iteration) return finalString[index];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    if (iteration >= finalString.length) clearInterval(interval);
    iteration += 1 / 3;
  }, 30);
}
```

**React Conversion:**
```jsx
const [scrambledText, setScrambledText] = useState('THE INFLECTION POINT');

const scrambleText = (finalString) => {
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  let iteration = 0;
  const interval = setInterval(() => {
    setScrambledText(
      finalString.split('')
        .map((char, index) => {
          if (index < iteration) return finalString[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('')
    );
    if (iteration >= finalString.length) {
      clearInterval(interval);
    }
    iteration += 1 / 3;
  }, 30);
};
```

#### 4. Terminal Typewriter Effect

**Original:**
```javascript
const terminalInit = document.getElementById('terminal-init');
const lines = [
  '> initializing rising_ink.v2',
  '> mounting sanity_mcp_server',
  '> arr_target: $1,000,000',
  '> status: ready'
];
let lineIdx = 0;
function typeTerminal() {
  if (lineIdx < lines.length) {
    terminalInit.innerHTML += lines[lineIdx] + '<br>';
    lineIdx++;
    setTimeout(typeTerminal, 400);
  }
}
```

**React Conversion:**
```jsx
const [terminalLines, setTerminalLines] = useState([]);

useEffect(() => {
  const lines = [
    '> initializing rising_ink.v2',
    '> mounting sanity_mcp_server',
    '> arr_target: $1,000,000',
    '> status: ready'
  ];
  
  let lineIdx = 0;
  const interval = setInterval(() => {
    if (lineIdx < lines.length) {
      setTerminalLines(prev => [...prev, lines[lineIdx]]);
      lineIdx++;
    } else {
      clearInterval(interval);
    }
  }, 400);

  return () => clearInterval(interval);
}, []);

// Render:
<div className="text-red-500 font-mono text-sm mb-4">
  {terminalLines.map((line, i) => (
    <div key={i}>{line}</div>
  ))}
</div>
```

#### 5. Particle Effects (from gem-2)

**Original:**
```javascript
const container = document.getElementById('particles-container');
function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'absolute bg-red-600 opacity-0 rounded-full pointer-events-none';
  // ... animation setup
  container.appendChild(particle);
}
for(let i = 0; i < 40; i++) {
  createParticle();
}
```

**React Conversion:**
```jsx
const [particles, setParticles] = useState([]);

useEffect(() => {
  const newParticles = [];
  for (let i = 0; i < 40; i++) {
    newParticles.push({
      id: i,
      size: Math.random() * 4 + 2,
      posX: Math.random() * 100,
      posY: Math.random() * 100 + 20,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 5
    });
  }
  setParticles(newParticles);
}, []);

// Render particles with CSS animations
{particles.map(p => (
  <div
    key={p.id}
    className="absolute bg-red-600 opacity-0 rounded-full pointer-events-none"
    style={{
      width: `${p.size}px`,
      height: `${p.size}px`,
      left: `${p.posX}%`,
      bottom: `${p.posY}%`,
      boxShadow: '0 0 10px #C1272D',
      animation: `particleFloat ${p.duration}s ${p.delay}s infinite ease-out`
    }}
  />
))}
```

#### 6. Intersection Observer (Quest Log)

**Original:**
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('translate-y-0', 'opacity-100');
      entry.target.classList.remove('translate-y-10', 'opacity-0');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.quest-node').forEach(node => {
  node.classList.add('transition-all', 'duration-700', 'transform', 'translate-y-10', 'opacity-0');
  observer.observe(node);
});
```

**React Conversion:**
```jsx
const questNodeRefs = useRef([]);

useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('translate-y-0', 'opacity-100');
        entry.target.classList.remove('translate-y-10', 'opacity-0');
      }
    });
  }, { threshold: 0.2 });

  questNodeRefs.current.forEach(node => {
    if (node) {
      node.classList.add('transition-all', 'duration-700', 'transform', 'translate-y-10', 'opacity-0');
      observer.observe(node);
    }
  });

  return () => {
    questNodeRefs.current.forEach(node => {
      if (node) observer.unobserve(node);
    });
  };
}, []);

// In JSX:
<div ref={el => questNodeRefs.current[0] = el} className="quest-node">
  {/* content */}
</div>
```

---

## Build Instructions

### Step 1: Create Component File

Create `sites/rising-ink/demos/src/pages/ProductVisionIntro.jsx`:

```jsx
import { useEffect, useRef, useState } from 'react';

export default function ProductVisionIntro() {
  // State management
  const [isDevMode, setIsDevMode] = useState(false);
  const [scrambledText, setScrambledText] = useState('THE INFLECTION POINT');
  const [terminalLines, setTerminalLines] = useState([]);
  const [particles, setParticles] = useState([]);
  
  // Refs
  const canvasRef = useRef(null);
  const questNodeRefs = useRef([]);
  
  // ... (all hooks and functions from Technical Specifications)
  
  return (
    <div className={`min-h-screen ${isDevMode ? 'dev-mode' : ''}`}>
      {/* All sections here */}
    </div>
  );
}
```

### Step 2: Add Font Imports

Add to the component (or use existing Rising Ink demos font setup):

```jsx
// In component or index.html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=JetBrains+Mono:wght@300;400;700&family=Oswald:wght@400;500;600;700&family=Manrope:wght@300;400;600&family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
```

### Step 3: Add CSS Styles

Either:
- Add `<style>` tag in component (for component-specific styles)
- Or add to existing CSS file if Rising Ink demos has one
- Or use Tailwind classes where possible

**Recommended:** Use inline `<style>` tag in component for self-contained approach.

### Step 4: Build Hero Section

```jsx
<section className="max-w-6xl mx-auto mb-32 px-6 py-20 lg:px-24">
  {/* Terminal Init */}
  <div className="text-red-500 font-mono text-sm mb-4">
    {terminalLines.map((line, i) => (
      <div key={i}>{line}</div>
    ))}
  </div>
  
  {/* Hero Headline */}
  <h1 className="glitch-text text-6xl md:text-9xl font-black leading-none mb-8">
    {scrambledText}
  </h1>
  
  {/* Hero Sub */}
  <p className="text-xl md:text-3xl max-w-2xl text-zinc-400 font-light leading-relaxed">
    <span className="vision-text">
      Transitioning a high-performance tattoo agency into a unified vertical SaaS platform. Revenue-funded skunkworks.
    </span>
    <span className="json-code font-mono text-lg">
      {`{ "status": "scaling", "target_arr": "$1.2M", "focus": "vSaaS_Architecture" }`}
    </span>
  </p>
</section>
```

### Step 5: Build Bento Stack Section

```jsx
<section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-32 px-6 lg:px-24">
  {/* Sanity Card */}
  <div className="bento-card md:col-span-2 p-8 rounded-lg">
    {/* Content from Complete Content section */}
  </div>
  
  {/* Plasmic Card */}
  <div className="bento-card p-8 rounded-lg">
    {/* Content */}
  </div>
  
  {/* Astro Card */}
  <div className="bento-card p-8 rounded-lg">
    {/* Content */}
  </div>
  
  {/* Elvis Card */}
  <div className="bento-card md:col-span-4 p-8 rounded-lg flex flex-col md:flex-row gap-8 items-center">
    {/* Content */}
  </div>
</section>
```

### Step 6: Build Roadmap Section

```jsx
<section className="max-w-4xl mx-auto mb-32 px-6 lg:px-24">
  <h2 className="text-2xl font-bold text-red-500 mb-12 uppercase tracking-tighter">
    GIT_COMMIT_HISTORY (Roadmap)
  </h2>
  <div className="space-y-12 border-l border-zinc-800 ml-4 pl-8">
    {/* Commit items */}
  </div>
</section>
```

### Step 7: Build Content Sections (from gem-2)

```jsx
{/* Strategy Map Section */}
<section data-theme="light" className="py-32 px-6 lg:px-24">
  {/* Content from Complete Content section */}
</section>

{/* Tech Forge Section */}
<section data-theme="dark" className="py-32 px-6 lg:px-24">
  {/* Content */}
</section>

{/* Quest Log Section */}
<section data-theme="light" className="py-32 px-6 lg:px-24">
  {/* Content */}
</section>
```

### Step 8: Build Visual Components (from gem-3)

**Ecosystem Node:**
```jsx
<section className="mb-24">
  <div className="relative w-full h-[500px] border border-forge-paper/10 bg-forge-darkgray/30 rounded-lg overflow-hidden flex items-center justify-center">
    {/* SVG connectors */}
    {/* Center node */}
    {/* Orbiting nodes */}
  </div>
</section>
```

**Pipeline Flow:**
```jsx
<section className="mb-24">
  <div className="w-full bg-forge-darkgray/50 border border-forge-paper/10 rounded-lg p-8 md:p-12 overflow-x-auto">
    <div className="relative min-w-[800px] h-[200px] flex items-center justify-between px-12">
      {/* Pipe background */}
      {/* Steps */}
    </div>
  </div>
</section>
```

**Stack Bento:**
```jsx
<section className="mb-24">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Sanity Card */}
    {/* Plasmic Card */}
    {/* Astro Card */}
  </div>
</section>
```

**Quest Log Timeline:**
```jsx
<section className="mb-24">
  <div className="border border-forge-paper/10 bg-forge-darkgray/50 rounded-lg p-8 relative">
    {/* Timeline line */}
    <div className="space-y-8 relative z-10">
      {/* Quest items */}
    </div>
  </div>
</section>
```

### Step 9: Add Canvas and Overlays

```jsx
{/* Canvas for ink particles */}
<canvas ref={canvasRef} id="inkCanvas" className="fixed top-0 left-0 z-0 opacity-60" />

{/* Grid Overlay */}
<div className="grid-overlay" />

{/* Scanlines */}
<div className={`scanlines ${isDevMode ? 'opacity-100' : 'opacity-0'}`} />

{/* Mode Toggle */}
<div className="toggle-container flex gap-2 items-center">
  <span className="text-[10px] uppercase tracking-widest text-zinc-500">System Mode:</span>
  <button
    onClick={handleModeToggle}
    className={`toggle-btn flex items-center gap-2 ${isDevMode ? 'active' : ''}`}
  >
    <span>{isDevMode ? 'Architecture' : 'Vision'}</span>
    <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
  </button>
</div>
```

### Step 10: Add Route to App.jsx

Modify `sites/rising-ink/demos/src/App.jsx`:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Georgi from './pages/Georgi'
import ProductVisionIntro from './pages/ProductVisionIntro'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Georgi />} />
      <Route path="/product-vision-intro" element={<ProductVisionIntro />} />
    </Routes>
  </BrowserRouter>
)

export default App
```

### Step 11: Testing Checklist

**Console Checks:**
1. No console errors on page load
2. Canvas initializes (check console.log in useEffect)
3. Mode toggle works (check state changes)
4. Terminal typewriter completes (check terminalLines state)
5. Particles animate (check canvas drawing)

**Functional Checks:**
- [ ] Mode toggle switches between Vision/Architecture
- [ ] Text scramble effect works on headline
- [ ] Terminal lines appear sequentially
- [ ] Canvas particles animate and respond to mouse
- [ ] All sections render without errors
- [ ] Route navigation works (`/product-vision-intro`)
- [ ] Responsive breakpoints work (mobile/tablet/desktop)

**Visual Checks (Requires Human Review):**
- [ ] Hero section displays correctly
- [ ] Bento cards hover effects work
- [ ] Roadmap timeline renders properly
- [ ] Content sections alternate light/dark themes
- [ ] Visual components (ecosystem, pipeline, stack, quest log) display correctly
- [ ] Animations are smooth
- [ ] Fonts load correctly
- [ ] Colors match design (ink-red: #C1272D)

**Build Command:**
```bash
npm run dev
```

Navigate to: `http://localhost:5173/product-vision-intro`

---

## Visual Component Specifications

### Component 1: HighLevel Ecosystem Node

**Layout:**
- Container: 500px height, full width, centered content
- Background: Dark gray with grid pattern
- Center node: 80px circle, pulsing animation
- 5 satellite nodes positioned around center

**Animations:**
- Center node: Ping animation (opacity pulse)
- Satellite nodes: Float animation (vertical movement, staggered delays)
- Hover: Green border and text color on satellites

**SVG Connectors:**
- Lines from center (50%, 50%) to each satellite
- Gradient stroke (fade in/out)
- Opacity: 40%

**Node Labels:**
1. Waivers (top-left, 20%, 20%)
2. Phones (top-right, 80%, 20%)
3. Bookings (bottom-left, 25%, 80%)
4. Aftercare (bottom-right, 75%, 80%)
5. Ads (top-center, 50%, 15%)

### Component 2: Agency-to-Product Pipeline

**Layout:**
- Horizontal flow, left to right
- 4 steps evenly spaced
- Animated pipe behind steps
- Steps: 96px × 96px cards

**Pipe Animation:**
- Background: Black rounded rectangle, 3px height
- Animated line: Green dashed line, flowing left to right
- Stroke-dasharray: "10 20"
- Animation: 3s linear infinite

**Step Cards:**
- Icon emoji (3xl size)
- Label text (10px, mono font)
- Title (header font, lg size)
- Subtitle (mono font, xs size)

**Hover States:**
- Border color changes
- Transform: slight scale or translateY

### Component 3: Stack Bento

**Layout:**
- 3-column grid (1 column on mobile)
- Cards: Equal height (256px), fixed
- Hover: Content slides up, reveals details

**Card Structure:**
- Badge (top-right, absolute)
- Title and subtitle (top)
- Hover reveal (bottom, initially hidden)
- Decorative letter (bottom-right, large, low opacity)

**Hover Animation:**
- Transform: translateY(-32px) → translateY(0)
- Opacity: 0 → 100
- Duration: 300ms
- Easing: default

**Border Colors:**
- Sanity: Red on hover
- Plasmic: Beige on hover
- Astro: Green on hover

### Component 4: Quest Log Timeline

**Layout:**
- Vertical timeline on left
- Items positioned along line
- Spacing: 32px between items

**Timeline Line:**
- Position: Absolute, left 43px
- Width: 1px
- Height: Full container
- Pattern: Repeating gradient (dashed effect)

**Quest Items:**
- Icon circle: 32px × 32px
- Content card: Flex-1, padding 16px
- Status badge: Top-right

**States:**
- Verified: Green circle, checkmark icon
- In Progress: Red circle, pulsing dot
- Locked: Gray circle, lock icon, grayscale filter, reduced opacity

**Animations:**
- Intersection Observer: Fade in from bottom
- Locked items: Grayscale removed on hover

---

## Integration Instructions

### Route Addition

**File:** `sites/rising-ink/demos/src/App.jsx`

**Add import:**
```jsx
import ProductVisionIntro from './pages/ProductVisionIntro'
```

**Add route:**
```jsx
<Route path="/product-vision-intro" element={<ProductVisionIntro />} />
```

### Tailwind Configuration

**Option 1: Use Existing Config (Recommended)**
Rising Ink demos already use the shared Tailwind setup. Prefer the existing config in the repo.

**Option 2: Use CDN (Only if explicitly requested)**
If a CDN is required, add to component or `index.html`:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

**Custom Colors (if using Tailwind config):**
```js
theme: {
  extend: {
    colors: {
      'ink-red': '#C1272D',
      'forge-black': '#0a0a0a',
      'forge-paper': '#F5F3EE',
      'forge-green': '#10B981',
      'forge-darkgray': '#171717',
    }
  }
}
```

### Font Loading

**Option 1: Add to index.html**
```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=JetBrains+Mono:wght@300;400;700&family=Oswald:wght@400;500;600;700&family=Manrope:wght@300;400;600&family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
```

**Option 2: Add to component**
```jsx
useEffect(() => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=JetBrains+Mono:wght@300;400;700&family=Oswald:wght@400;500;600;700&family=Manrope:wght@300;400;600&family=Inter:wght@400;700;900&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}, []);
```

### CSS Strategy

**Recommended Approach:**
- Add `<style>` tag inside component for component-specific styles
- Use Tailwind classes for layout and spacing
- Keep styles self-contained in component

**Example:**
```jsx
export default function ProductVisionIntro() {
  return (
    <>
      <style>{`
        /* All CSS from Technical Specifications */
      `}</style>
      <div className="min-h-screen">
        {/* Component content */}
      </div>
    </>
  );
}
```

---

## Testing Instructions (No Virtual Browser)

### Console Logging Checkpoints

Add these console.logs to verify functionality:

```jsx
// Canvas initialization
useEffect(() => {
  console.log('Canvas initialized:', canvasRef.current);
  console.log('Particles created:', particles.length);
}, [particles]);

// Mode toggle
const handleModeToggle = () => {
  console.log('Mode toggled:', !isDevMode);
  setIsDevMode(!isDevMode);
};

// Terminal typing
useEffect(() => {
  console.log('Terminal lines:', terminalLines);
}, [terminalLines]);

// Text scramble
const scrambleText = (finalString) => {
  console.log('Scrambling to:', finalString);
  // ... scramble logic
};
```

### Expected DOM Structure

Verify these elements exist:

```html
<body class="dev-mode"> <!-- When toggled -->
  <canvas id="inkCanvas" />
  <div class="grid-overlay" />
  <div class="scanlines" />
  <div class="toggle-container">
    <button class="toggle-btn active"> <!-- When active -->
  </div>
  <main class="content-layer">
    <section> <!-- Hero -->
      <div id="terminal-init" />
      <h1 id="hero-headline" />
    </section>
    <section> <!-- Bento Stack -->
      <div class="bento-card" /> <!-- 4 cards -->
    </section>
    <section> <!-- Roadmap -->
      <div class="space-y-12" /> <!-- 3 commits -->
    </section>
    <!-- ... other sections -->
  </main>
</body>
```

### Interactive Elements to Verify

1. **Mode Toggle Button**
   - Click: Toggles `isDevMode` state
   - Updates button text: "Vision" ↔ "Architecture"
   - Adds/removes `dev-mode` class on body
   - Triggers text scramble on headline

2. **Canvas Mouse Interaction**
   - Mouse move: Updates `mouse` state
   - Particles draw lines to mouse when < 150px distance

3. **Terminal Typewriter**
   - Lines appear sequentially every 400ms
   - 4 lines total

4. **Quest Log Intersection**
   - Items fade in when scrolled into view
   - Uses Intersection Observer

### Visual Checks (Require Human Review)

These cannot be verified programmatically:

- [ ] Canvas particles animate smoothly
- [ ] Text scramble effect looks correct
- [ ] Mode toggle changes visual appearance (scanlines, grid, text)
- [ ] All sections render with correct spacing
- [ ] Colors match design (#C1272D for ink-red)
- [ ] Fonts load and display correctly
- [ ] Responsive breakpoints work (test at 375px, 768px, 1440px)
- [ ] Animations are smooth (no jank)
- [ ] Hover effects work on all interactive elements

### Build Verification

**Command:**
```bash
npm run dev:rising-ink
```

**Expected:**
- Dev server starts without errors
- No console errors on page load
- Route `/product-vision-intro` accessible
- All assets load (fonts, if using CDN)

**Production Build:**
```bash
npm run build:rising-ink
```

**Expected:**
- Build completes without errors
- No TypeScript/ESLint errors (if configured)
- Output in `sites/rising-ink/demos/dist/`

---

## Final Notes

### Codex-Specific Considerations

1. **No Virtual Browser:** You cannot visually verify the page. Use console.logs and DOM structure checks.

2. **Complete Code Required:** All code must be complete - no placeholders or "rest of code" comments.

3. **Self-Contained:** Component should work independently - all styles, fonts, and functionality included.

4. **React Patterns:** Use hooks (useState, useEffect, useRef) - no class components.

5. **Error Handling:** Add basic error handling for canvas and DOM operations.

### Common Pitfalls to Avoid

1. **Canvas Context:** Ensure canvas ref is set before accessing context
2. **State Updates:** Don't mutate state directly - use setState functions
3. **Event Listeners:** Clean up event listeners in useEffect return
4. **Animation Frames:** Cancel requestAnimationFrame in cleanup
5. **Class Names:** Use `className` not `class` in JSX
6. **Self-Closing Tags:** Use `<canvas />` not `<canvas></canvas>`
7. **Inline Styles:** Use objects: `style={{ width: '100px' }}`

### Success Criteria

The build is successful when:

1. ✅ Component file created at correct path
2. ✅ Route added to App.jsx
3. ✅ No console errors on page load
4. ✅ All sections render
5. ✅ Canvas initializes and animates
6. ✅ Mode toggle works
7. ✅ Terminal typewriter completes
8. ✅ Text scramble effect works
9. ✅ All visual components display
10. ✅ Responsive layout works
11. ✅ Build command succeeds
12. ✅ Route navigation works

---

## Summary

You are building a single-page React component that combines 4 JSX files into one cohesive product vision page. The component includes:

- Hero section with mode toggle and canvas animations
- Content sections with light/dark themes
- Visual component kit (ecosystem, pipeline, stack, quest log)
- All CSS styles and JavaScript functionality converted to React
- Complete content from COMPANION document
- Integration into Rising Ink demos site routing

**Key Files:**
- Create: `sites/rising-ink/demos/src/pages/ProductVisionIntro.jsx`
- Modify: `sites/rising-ink/demos/src/App.jsx`

**Route:** `/product-vision-intro`

**Testing:** Use console.logs and DOM structure verification. Visual QA will be done separately.

**Build:** `npm run dev` then navigate to route.

Good luck! Build something that makes them say "Holy shit."

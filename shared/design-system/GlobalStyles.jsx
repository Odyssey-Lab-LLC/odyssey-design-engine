/**
 * Odyssey Lab Global Styles Component
 * 
 * This component injects CSS custom properties (variables) from the Odyssey Design System
 * into the global scope. Import this once at the root of your application.
 * 
 * Source: SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md
 * 
 * @example
 * import { GlobalStyles } from '@shared/design-system/GlobalStyles';
 * 
 * function App() {
 *   return (
 *     <>
 *       <GlobalStyles />
 *       <div style={{ color: 'var(--color-bronze)' }}>Content</div>
 *     </>
 *   );
 * }
 */

export const GlobalStyles = () => {
  return (
    <style>{`
      /* @PRESERVE — Odyssey Lab Design System v0.3 */
      /* Fonts */
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');
      
      :root {
        /* ═══════════════════════════════════════════════════════
           BRAND CORE — Identity-level colors
           ═══════════════════════════════════════════════════════ */
        
        /* Bronze/Gold (The Journey) */
        --color-bronze: #B48E55;
        --color-bronze-light: #C9A76D;
        --color-bronze-dark: #8B6B3D;
        --color-gold: #D4AF37;
        --color-gold-muted: #A68A2E;
        
        /* Lab Blue (Innovation/Technology) */
        --color-lab-blue: #38BDF8;
        --color-lab-blue-electric: #2563EB;
        --color-lab-blue-light: #7DD3FC;
        --color-lab-blue-dark: #0EA5E9;
        
        /* ═══════════════════════════════════════════════════════
           ZONE: LIGHT (Primary — Clarity, Known, Client-Facing)
           ═══════════════════════════════════════════════════════ */
        
        /* Light Zone Backgrounds */
        --light-bg-body: #F5F5F7;
        --light-bg-warm: #FFFDF7;
        --light-bg-card: #FFFFFF;
        --light-bg-panel: #FDF6E3;
        --light-bg-muted: #F8FAFC;
        
        /* Light Zone Text */
        --light-text-primary: #0F172A;
        --light-text-secondary: #1C1917;
        --light-text-muted: #475569;
        --light-text-subtle: #78716C;
        
        /* Light Zone Borders */
        --light-border-subtle: #E2E8F0;
        --light-border-strong: #CBD5E1;
        --light-border-accent: var(--color-bronze);
        
        /* ═══════════════════════════════════════════════════════
           ZONE: DARK (Supplemental — Mystery, Unknown, Depth)
           ═══════════════════════════════════════════════════════ */
        
        /* Dark Zone Backgrounds */
        --dark-bg-deep: #0F172A;
        --dark-bg-panel: #1E293B;
        --dark-bg-elevated: #334155;
        --dark-bg-overlay: rgba(15, 23, 42, 0.95);
        
        /* Dark Zone Text */
        --dark-text-primary: #F8FAFC;
        --dark-text-secondary: #E2E8F0;
        --dark-text-muted: #94A3B8;
        --dark-text-subtle: #64748B;
        
        /* Dark Zone Borders */
        --dark-border-subtle: rgba(255, 255, 255, 0.1);
        --dark-border-medium: rgba(255, 255, 255, 0.2);
        --dark-border-accent: var(--color-bronze);
        
        /* ═══════════════════════════════════════════════════════
           SEMANTIC COLORS — Functional meanings
           ═══════════════════════════════════════════════════════ */
        
        --color-success: #22C55E;
        --color-success-light: #4ADE80;
        --color-warning: #F59E0B;
        --color-warning-light: #FCD34D;
        --color-error: #EF4444;
        --color-error-light: #F87171;
        --color-info: #3B82F6;
        --color-info-light: #60A5FA;
        
        /* ═══════════════════════════════════════════════════════
           TYPOGRAPHY
           ═══════════════════════════════════════════════════════ */
        
        /* Font Families */
        --font-heading: 'Cinzel', serif;
        --font-body: 'Inter', sans-serif;
        --font-mono: 'JetBrains Mono', monospace;
        
        /* Font Sizes (8px base scale) */
        --text-xs: 0.75rem;    /* 12px */
        --text-sm: 0.875rem;   /* 14px */
        --text-base: 1rem;     /* 16px */
        --text-lg: 1.125rem;   /* 18px */
        --text-xl: 1.25rem;    /* 20px */
        --text-2xl: 1.5rem;    /* 24px */
        --text-3xl: 1.875rem;  /* 30px */
        --text-4xl: 2.25rem;   /* 36px */
        --text-5xl: 3rem;      /* 48px */
        --text-6xl: 3.75rem;   /* 60px */
        
        /* Font Weights */
        --font-light: 300;
        --font-normal: 400;
        --font-medium: 500;
        --font-semibold: 600;
        --font-bold: 700;
        
        /* ═══════════════════════════════════════════════════════
           SPACING (8px grid system)
           ═══════════════════════════════════════════════════════ */
        
        --space-1: 0.25rem;    /* 4px */
        --space-2: 0.5rem;     /* 8px */
        --space-3: 0.75rem;    /* 12px */
        --space-4: 1rem;       /* 16px */
        --space-5: 1.25rem;    /* 20px */
        --space-6: 1.5rem;     /* 24px */
        --space-8: 2rem;       /* 32px */
        --space-10: 2.5rem;    /* 40px */
        --space-12: 3rem;      /* 48px */
        --space-16: 4rem;      /* 64px */
        --space-20: 5rem;      /* 80px */
        --space-24: 6rem;      /* 96px */
        
        /* ═══════════════════════════════════════════════════════
           BORDER RADIUS
           ═══════════════════════════════════════════════════════ */
        
        --radius-sm: 0.25rem;  /* 4px */
        --radius-md: 0.5rem;   /* 8px */
        --radius-lg: 0.75rem;  /* 12px */
        --radius-xl: 1rem;     /* 16px */
        --radius-full: 9999px; /* Pills/circles */
        
        /* ═══════════════════════════════════════════════════════
           SHADOWS
           ═══════════════════════════════════════════════════════ */
        
        --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
        --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
        --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
        --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
        
        /* ═══════════════════════════════════════════════════════
           MOTION
           ═══════════════════════════════════════════════════════ */
        
        --duration-fast: 0.2s;
        --duration-base: 0.3s;
        --duration-slow: 0.5s;
        
        --ease-in: cubic-bezier(0.4, 0, 1, 1);
        --ease-out: cubic-bezier(0, 0, 0.2, 1);
        --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
        
        /* ═══════════════════════════════════════════════════════
           Z-INDEX SCALE
           ═══════════════════════════════════════════════════════ */
        
        --z-base: 1;
        --z-dropdown: 1000;
        --z-sticky: 1100;
        --z-fixed: 1200;
        --z-overlay: 1300;
        --z-modal: 1400;
        --z-popover: 1500;
        --z-tooltip: 1600;
      }
      
      /* ═══════════════════════════════════════════════════════
         BASE STYLES
         ═══════════════════════════════════════════════════════ */
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      body {
        font-family: var(--font-body);
        font-size: var(--text-base);
        line-height: 1.6;
        color: var(--light-text-secondary);
        background: var(--light-bg-body);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-heading);
        font-weight: var(--font-semibold);
        line-height: 1.2;
        color: var(--light-text-primary);
      }
      
      /* ═══════════════════════════════════════════════════════
         ZONE UTILITIES
         ═══════════════════════════════════════════════════════ */
      
      .zone-light {
        background: var(--light-bg-body);
        color: var(--light-text-secondary);
      }
      
      .zone-dark {
        background: var(--dark-bg-deep);
        color: var(--dark-text-secondary);
      }
      
      .zone-dark h1,
      .zone-dark h2,
      .zone-dark h3,
      .zone-dark h4,
      .zone-dark h5,
      .zone-dark h6 {
        color: var(--dark-text-primary);
      }
    `}</style>
  );
};

export default GlobalStyles;


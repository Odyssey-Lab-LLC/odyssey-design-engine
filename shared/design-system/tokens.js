// Odyssey Lab Design Tokens v0.3
// JavaScript exports for programmatic token access
// Source: SYSTEM_odyssey-design-tokens_v0.3_2025-12-19.md

/**
 * Core Brand Colors
 */
export const colors = {
  // Bronze/Gold (The Journey)
  bronze: '#B48E55',
  bronzeLight: '#C9A76D',
  bronzeDark: '#8B6B3D',
  gold: '#D4AF37',
  goldMuted: '#A68A2E',
  
  // Lab Blue (Innovation/Technology)
  labBlue: '#38BDF8',
  labBlueElectric: '#2563EB',
  labBlueLight: '#7DD3FC',
  labBlueDark: '#0EA5E9',
  
  // Light Zone
  light: {
    bgBody: '#F5F5F7',
    bgWarm: '#FFFDF7',
    bgCard: '#FFFFFF',
    bgPanel: '#FDF6E3',
    bgMuted: '#F8FAFC',
    textPrimary: '#0F172A',
    textSecondary: '#1C1917',
    textMuted: '#475569',
    textSubtle: '#78716C',
    borderSubtle: '#E2E8F0',
    borderStrong: '#CBD5E1',
    borderAccent: '#B48E55',
  },
  
  // Dark Zone
  dark: {
    bgDeep: '#0F172A',
    bgPanel: '#1E293B',
    bgElevated: '#334155',
    textPrimary: '#F8FAFC',
    textSecondary: '#E2E8F0',
    textMuted: '#94A3B8',
    textSubtle: '#64748B',
    borderSubtle: 'rgba(255, 255, 255, 0.1)',
    borderMedium: 'rgba(255, 255, 255, 0.2)',
    borderAccent: '#B48E55',
  },
  
  // Semantic Colors
  success: '#22C55E',
  successLight: '#4ADE80',
  warning: '#F59E0B',
  warningLight: '#FCD34D',
  error: '#EF4444',
  errorLight: '#F87171',
  info: '#3B82F6',
  infoLight: '#60A5FA',
};

/**
 * Typography
 */
export const typography = {
  fonts: {
    heading: "'Cinzel', serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  
  sizes: {
    xs: '0.75rem',   // 12px
    sm: '0.875rem',  // 14px
    base: '1rem',    // 16px
    lg: '1.125rem',  // 18px
    xl: '1.25rem',   // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

/**
 * Spacing (8px grid system)
 */
export const spacing = {
  '1': '0.25rem',  // 4px
  '2': '0.5rem',   // 8px
  '3': '0.75rem',  // 12px
  '4': '1rem',     // 16px
  '5': '1.25rem',  // 20px
  '6': '1.5rem',   // 24px
  '8': '2rem',     // 32px
  '10': '2.5rem',  // 40px
  '12': '3rem',    // 48px
  '16': '4rem',    // 64px
  '20': '5rem',    // 80px
  '24': '6rem',    // 96px
};

/**
 * Border Radius
 */
export const borderRadius = {
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  full: '9999px',  // Pills/circles
};

/**
 * Shadows
 */
export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
};

/**
 * Motion
 */
export const motion = {
  durations: {
    fast: '0.2s',
    base: '0.3s',
    slow: '0.5s',
  },
  
  easings: {
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

/**
 * Z-Index Scale
 */
export const zIndex = {
  base: 1,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
};

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  motion,
  zIndex,
};


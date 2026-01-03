import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Compass, 
  Layers, 
  ArrowRight, 
  Maximize2, 
  Minimize2, 
  Circle,
  Hexagon,
  Triangle
} from 'lucide-react';

/* @PRESERVE — Agent Directives & Contract 
   This file implements the Odyssey Lab Unified Design System v0.3.
   All colors and spacing use CSS variables defined in the GlobalStyles component.
*/

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Montserrat:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap');

    /* @PRESERVE — Odyssey Lab Master Color Tokens v0.3 */
    :root {
      /* BRAND CORE */
      --color-bronze: #B48E55;
      --color-bronze-light: #C9A76D;
      --color-bronze-dark: #8B6B3D;
      --color-gold: #D4AF37;
      --color-gold-muted: #A68A2E;
      
      /* ZONE: LIGHT (Primary) */
      --light-bg-body: #FFFDF7;          /* Warm white variant per design system */
      --light-bg-card: #FFFFFF;
      --light-bg-panel: #FDF6E3;
      --light-text-primary: #0F172A;     /* Deep Navy */
      --light-text-secondary: #1C1917;   /* Near Black */
      --light-text-muted: #475569;       /* Slate */
      --light-text-subtle: #94A3B8;      
      
      --light-border-subtle: rgba(180, 142, 85, 0.15); /* Adjusted bronze opacity */
      --light-border-strong: rgba(180, 142, 85, 0.4);
      
      /* SPACING & UTILS */
      --font-cinzel: 'Cinzel', serif;
      --font-sans: 'Montserrat', sans-serif;
      --font-serif-accent: 'Cormorant Garamond', serif;
    }

    body {
      background-color: var(--light-bg-body);
      color: var(--light-text-secondary);
      font-family: var(--font-sans);
      margin: 0;
      overflow-x: hidden;
    }

    .font-cinzel { font-family: var(--font-cinzel); }
    .font-sans { font-family: var(--font-sans); }
    .font-serif-accent { font-family: var(--font-serif-accent); }

    .gold-gradient-text {
      background: linear-gradient(135deg, var(--color-bronze-dark) 0%, var(--color-gold) 50%, var(--color-bronze-dark) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% auto;
      animation: shine 8s ease-in-out infinite;
    }

    @keyframes shine {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .grid-pattern {
      background-image: 
        linear-gradient(to right, var(--light-border-subtle) 1px, transparent 1px),
        linear-gradient(to bottom, var(--light-border-subtle) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
    }

    /* @NEW_COMPONENT: AlchemyPulse */
    .alchemy-pulse {
      animation: pulse-ring 4s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    }
    
    @keyframes pulse-ring {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); }
      70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(212, 175, 55, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
    }
  `}</style>
);

const NavLink = ({ children, active }) => (
  <a href="#" className={`
    relative px-4 py-2 text-xs font-sans font-medium tracking-[0.2em] transition-colors
    ${active ? 'text-[var(--color-bronze-dark)]' : 'text-[var(--light-text-muted)] hover:text-[var(--color-bronze)]'}
  `}>
    {children}
    {active && (
      <motion.div 
        layoutId="navIndicator"
        className="absolute bottom-0 left-0 w-full h-[1px] bg-[var(--color-bronze)]"
      />
    )}
  </a>
);

const DecorationNode = ({ delay = 0 }) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="w-2 h-2 border border-[var(--color-bronze)] bg-[var(--light-bg-body)] rounded-full z-10"
  />
);

const AlchemyDiagram = () => (
  <div className="relative w-64 h-64 md:w-96 md:h-96 opacity-60 pointer-events-none select-none">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border-[1px] border-[var(--color-bronze)] rounded-full opacity-20 border-dashed"
    />
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute inset-4 border-[1px] border-[var(--color-gold)] rounded-full opacity-30"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <Triangle className="w-full h-full text-[var(--color-bronze)] opacity-10 stroke-[0.5]" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center rotate-180">
      <Triangle className="w-full h-full text-[var(--color-bronze)] opacity-10 stroke-[0.5]" />
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen relative selection:bg-[var(--color-bronze-light)] selection:text-white">
      <GlobalStyles />

      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        {/* Subtle vignetting for focus */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--light-bg-body)]" />
      </div>

      {/* --- HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--light-bg-body)]/80 backdrop-blur-md border-b border-[var(--light-border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Block */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-[var(--color-bronze)] flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[var(--color-bronze)] opacity-0 group-hover:opacity-10 transition-opacity" />
               <Compass className="w-4 h-4 text-[var(--color-bronze-dark)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel font-bold text-lg leading-none tracking-wide text-[var(--light-text-primary)]">
                ODYSSEY LAB
              </span>
              <span className="font-sans text-[9px] tracking-[0.3em] text-[var(--color-bronze-dark)] uppercase mt-1">
                System: Flourishing
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLink active>ORIGINS</NavLink>
            <NavLink>PILLARS</NavLink>
            <NavLink>COSMOLOGY</NavLink>
            <NavLink>PRINCIPLES</NavLink>
            <NavLink>MANIFEST</NavLink>
          </nav>

          {/* Version/Status */}
          <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-[var(--light-border-subtle)]">
            <div className="w-2 h-2 rounded-full bg-[var(--color-success)] alchemy-pulse" />
            <span className="font-sans text-[10px] font-bold tracking-widest text-[var(--light-text-muted)]">
              v0.9 LIVE
            </span>
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <main className="relative z-10 pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center max-w-7xl mx-auto">
        
        {/* Top Meta Label */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="px-4 py-1 border border-[var(--light-border-subtle)] bg-[var(--light-bg-card)] rounded-full flex items-center gap-2">
            <Layers className="w-3 h-3 text-[var(--color-bronze)]" />
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[var(--light-text-muted)] uppercase">
              Life Philosophy v1
            </span>
          </div>
        </motion.div>

        {/* --- MAIN TITLE GRID --- */}
        <div className="relative mb-16">
          {/* Decorative Corners */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-[var(--color-bronze)] opacity-30" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t border-r border-[var(--color-bronze)] opacity-30" />
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            <span className="block font-cinzel text-xl md:text-2xl text-[var(--light-text-muted)] tracking-[0.5em] mb-4">THE</span>
            <span className="block font-cinzel font-bold text-5xl md:text-7xl lg:text-9xl tracking-tight gold-gradient-text leading-[0.9]">
              ALCHEMY
            </span>
            <span className="block font-cinzel text-2xl md:text-4xl lg:text-5xl text-[var(--light-text-primary)] tracking-[0.2em] mt-2">
              OF BEING
            </span>
          </motion.h1>

          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b border-l border-[var(--color-bronze)] opacity-30" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-[var(--color-bronze)] opacity-30" />
        </div>

        {/* --- CONTENT WORKBENCH (Split Layout) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          
          {/* Absolute Center Diagram (Background) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block -z-10">
            <AlchemyDiagram />
          </div>

          {/* LEFT: The Question (The Input/Raw Material) */}
          <div className="lg:col-span-4 relative group">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-[var(--light-bg-card)]/60 backdrop-blur-sm border-l-2 border-[var(--color-bronze)] p-6 md:p-8"
            >
              <div className="flex items-center gap-2 mb-4 text-[var(--color-bronze-dark)]">
                <Activity className="w-4 h-4" />
                <span className="font-sans text-[10px] font-bold tracking-widest uppercase">The Inquiry</span>
              </div>
              <p className="font-serif-accent italic text-xl md:text-2xl leading-relaxed text-[var(--light-text-primary)]">
                "What is the meaning of life? Of your life? Life asks <span className="text-[var(--color-bronze-dark)] font-semibold">YOU</span> the question in each day and moment."
              </p>
              <div className="mt-6 font-sans text-sm text-[var(--light-text-muted)] leading-relaxed">
                What emerges from your life? Do you know thyself enough to answer?
              </div>
            </motion.div>
          </div>

          {/* CENTER: Spacer for diagram */}
          <div className="lg:col-span-4 hidden lg:flex justify-center items-center flex-col gap-4">
             {/* Central Axis Line */}
             <motion.div 
               initial={{ height: 0 }}
               animate={{ height: '100px' }}
               transition={{ duration: 1, delay: 1 }}
               className="w-[1px] bg-gradient-to-b from-transparent via-[var(--color-bronze)] to-transparent"
             />
             <div className="font-cinzel text-[10px] tracking-[0.3em] text-[var(--color-bronze-dark)]">
               TRANSMUTATION
             </div>
             <motion.div 
               initial={{ height: 0 }}
               animate={{ height: '100px' }}
               transition={{ duration: 1, delay: 1 }}
               className="w-[1px] bg-gradient-to-b from-transparent via-[var(--color-bronze)] to-transparent"
             />
          </div>

          {/* RIGHT: The Definition (The Process/System) */}
          <div className="lg:col-span-4">
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="border border-[var(--light-border-subtle)] bg-[var(--light-bg-panel)] p-1 relative"
             >
                {/* Tech/System Corners */}
                <div className="absolute top-0 left-0 w-1 h-1 bg-[var(--color-bronze)]" />
                <div className="absolute top-0 right-0 w-1 h-1 bg-[var(--color-bronze)]" />
                <div className="absolute bottom-0 left-0 w-1 h-1 bg-[var(--color-bronze)]" />
                <div className="absolute bottom-0 right-0 w-1 h-1 bg-[var(--color-bronze)]" />

                <div className="border border-[var(--light-border-subtle)] p-6 md:p-8 h-full bg-[var(--light-bg-card)]">
                  <div className="flex justify-between items-start mb-6 border-b border-[var(--light-border-subtle)] pb-4">
                    <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-[var(--light-text-muted)]">
                      Framework Definition
                    </span>
                    <Hexagon className="w-4 h-4 text-[var(--color-bronze-light)]" />
                  </div>
                  
                  <h3 className="font-cinzel font-bold text-lg text-[var(--color-bronze-dark)] mb-3">
                    Integration Alchemy
                  </h3>
                  
                  <p className="font-sans text-sm md:text-base leading-relaxed text-[var(--light-text-secondary)]">
                    A philosophical framework for tapping deep inner knowing to transmute life's challenges and our collective misapprehension about who we are into <span className="bg-[var(--light-bg-panel)] px-1 italic text-[var(--color-bronze-dark)]">harmonized actualization</span> and thriving for conscious beings on earth.
                  </p>

                  <div className="mt-6 pt-4 border-t border-[var(--light-border-subtle)] flex items-center justify-between">
                     <span className="font-mono text-[9px] text-[var(--light-text-subtle)]">STATUS: ACTIVE</span>
                     <motion.button 
                       whileHover={{ x: 5 }}
                       className="flex items-center gap-2 text-xs font-bold tracking-widest text-[var(--color-bronze-dark)] uppercase"
                     >
                       Explore System <ArrowRight className="w-3 h-3" />
                     </motion.button>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>

        {/* --- SCROLL INDICATOR --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[9px] tracking-[0.3em] text-[var(--light-text-muted)] opacity-60">
            BEGIN JOURNEY
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-bronze)] to-transparent" />
        </motion.div>

      </main>
    </div>
  );
}
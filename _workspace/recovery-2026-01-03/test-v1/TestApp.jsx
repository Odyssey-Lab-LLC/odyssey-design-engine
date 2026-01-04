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

// Reusable Components
const SectionHeader = ({ eyebrow, title, description }) => (
  <div className="text-center mb-12">
    <p className="font-display text-lg text-[var(--color-bronze)] uppercase tracking-widest">{eyebrow}</p>
    <h2 className="font-display text-5xl md:text-6xl text-[var(--color-gold)] my-4">{title}</h2>
    {description && <p className="max-w-3xl mx-auto text-lg text-slate-300">{description}</p>}
  </div>
);

const QuoteBlock = ({ text, attribution }) => (
  <blockquote className="border-l-4 border-[var(--color-bronze)] pl-6 italic my-8">
    <p className="text-xl md:text-2xl text-slate-300">"{text}"</p>
    {attribution && <cite className="block mt-4 not-italic text-slate-400">{attribution}</cite>}
  </blockquote>
);

const Accordion = ({ eyebrow, title, description, children, defaultExpanded = false }) => {
  const [isOpen, setIsOpen] = useState(defaultExpanded);

  return (
    <div className="border border-[var(--light-border-subtle)] rounded-lg mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <div className="flex-grow">
          {eyebrow && <p className="text-xs text-[var(--color-bronze)] uppercase tracking-widest">{eyebrow}</p>}
          <h3 className="text-xl font-bold text-[var(--light-text-primary)] mt-1">{title}</h3>
          {description && !isOpen && <p className="text-slate-500 mt-2">{description}</p>}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="w-5 h-5 text-[var(--color-bronze)]" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 border-t border-[var(--light-border-subtle)]">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const PillarCard = ({ number, title, essence, children }) => (
  <div className="bg-[var(--light-bg-card)]/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
    <div className="flex items-center gap-4 mb-4">
      <span className="text-2xl font-bold text-[var(--color-bronze)]">{number}</span>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-slate-300 mb-6">{essence}</p>
    {children}
  </div>
);

const PrincipleCard = ({ number, title, essence }) => (
  <div className="border border-[var(--light-border-subtle)] rounded-lg p-6">
    <span className="text-2xl font-bold text-[var(--color-bronze)]">.{number.toString().padStart(2, '0')}</span>
    <h3 className="text-xl font-bold text-[var(--light-text-primary)] mt-2">{title}</h3>
    <p className="text-slate-500 mt-2">{essence}</p>
  </div>
);

const PathwayCard = ({ icon, title, description }) => (
  <div className="bg-[var(--light-bg-card)]/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-slate-300 mt-2">{description}</p>
  </div>
);

const SynthesisBlock = ({ label, children }) => (
    <div className="bg-[var(--dark-bg-card)]/5 backdrop-blur-sm border-t-2 border-b-2 border-[var(--color-gold)]/50 my-12 py-8 px-6 text-center">
        <p className="font-display text-sm uppercase tracking-widest text-[var(--color-gold-muted)] mb-4">{label}</p>
        <div className="max-w-4xl mx-auto text-xl md:text-2xl text-slate-200 leading-relaxed space-y-4">
            {children}
        </div>
    </div>
);

const ZoneTransition = () => (
  <div className="h-48 bg-gradient-to-b from-[var(--light-bg-body)] to-[var(--dark-bg-body)]" />
);

const StickyNav = ({ sections, activeSection }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting);
            },
            { rootMargin: "0px 0px -100% 0px" }
        );

        const hero = document.querySelector('main');
        if (hero) observer.observe(hero);

        return () => {
            if (hero) observer.unobserve(hero);
        };
    }, []);

    return (
        <motion.nav
            className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--dark-bg-body)]/90 backdrop-blur-md border-t border-white/10"
            animate={{ y: isVisible ? 0 : 100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <div className="max-w-4xl mx-auto flex justify-around p-2">
                {sections.map(section => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`text-center px-4 py-2 ${activeSection === section.id ? 'text-[var(--color-gold)]' : 'text-slate-400 hover:text-white'}`}
                    >
                        <span className="block text-xs uppercase tracking-widest">{section.title}</span>
                    </a>
                ))}
            </div>
        </motion.nav>
    );
};


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

      {/* --- ORIGIN STORY --- */}
      <section id="origin" className="zone-light py-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Where This Comes From"
            title="Origin Story: A Decade-Long Quest"
            description="This philosophy didn't start with business principles or design frameworks. It emerged from a decade-long quest to understand what makes life meaningful and how technology shapes human consciousness."
          />
          
          <div className="prose prose-lg max-w-none mx-auto text-slate-600 leading-relaxed">
            <p>For nearly a decade, I\'ve gathered with friends for philosophy book club—reading, discussing, wrestling with ideas that matter. This interest traces back to my anthropology training, to dreams of ethnography and travel writing, to a deep curiosity about how humans make meaning across cultures.</p>
            <p>The philosophy has been forming for years. But it crystallized in two Christmas Day 2024 epiphanies that revealed its complete architecture:</p>
          </div>

          <div className="mt-12 space-y-4">
            <Accordion
              eyebrow="Epiphany #1"
              title="Human Evolution & Inner Alchemy App"
              description="Technology as consciousness elevation tool—crafted to help build authentic lives based on true self-knowledge and actualize thriving across all dimensions."
            >
              <div className="prose max-w-none">
                <p>Vision for technology as consciousness elevation tool, crafted to help build authentic lives based on true "Know Thyself" authentic awareness and actualize lives of thriving and eudaimonia across All Quadrants and All Levels.</p>
                <p>This wasn\'t just an app idea—it was a recognition that technology could serve human flourishing if intentionally designed for consciousness elevation rather than engagement optimization.</p>
              </div>
            </Accordion>
            <Accordion
              eyebrow="Epiphany #2"
              title="Political Accountability & Democracy Platform"
              description="A vision for civil awareness, transparency of action vs. promises, tracking real-world impacts, and shepherding policies toward sustained human flourishing."
            >
              <div className="prose max-w-none">
                <p>My answer to the challenge: design the most ambitious vision for what I would do if this business achieved monumental 10-year success:</p>
                <ul>
                  <li>Moving toward takeoff toward "A New Earth" (Tolle\'s vision) as force for human flourishing</li>
                  <li>8-9 figure per year business earned through harmonization of goods</li>
                  <li>Platform for civil awareness, transparency of action vs. promises</li>
                  <li>Tracking 1st to 3rd order impacts of policies</li>
                  <li>Meta-analysis of how policies across civil societies globally contribute near and long term toward sustained maximization of Eudaimonia</li>
                  <li>Shepherding of consciousness on Earth</li>
                </ul>
                <p>These weren\'t random brainstorms. They were breakthrough moments where a decade of philosophical exploration converged into actionable vision. The pattern: Christmas (my birthday) opens portals to insight, creates flow states for wisdom access.</p>
              </div>
            </Accordion>
          </div>

          <div className="prose prose-lg max-w-none mx-auto text-slate-600 leading-relaxed mt-12">
            <p><strong>What follows isn\'t just "business philosophy" or "design principles." This is a complete worldview</strong>—about consciousness, meaning, purpose, technology, human potential—from which everything else flows.</p>
          </div>
        </div>
      </section>

      <ZoneTransition />

      {/* --- THE ROOT --- */}
      <section id="root" className="zone-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Philosophical Foundations"
            title="The ROOT: Three Pillars"
            description="These three sources form the bedrock from which the entire philosophy emerges. They are co-equal in importance, each revealing essential truth."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard
              number="#1"
              title="Viktor Frankl: Life Questions Us"
              essence="Life doesn't ask what meaning is—it questions you. Meaning is discovered through purpose, responsibility, and response to life's call."
            >
              <Accordion
                eyebrow="Explore Frankl's Insights"
                title="The Core Teaching"
                description="Logotherapy fundamentally inverted how we understand meaning—with profound implications for human flourishing."
              >
                <div className="prose prose-invert max-w-none">
                  <p>Viktor Frankl's <em>Man's Search for Meaning</em> holds "highest precedence" or "co-equal" status as philosophical foundation. His logotherapy fundamentally inverted how I understand meaning:</p>
                  <QuoteBlock
                    text="Ultimately, man should not ask what the meaning of his life is, but rather must recognize that it is he who is asked. In a word, each man is questioned by life; and he can only answer to life by answering for his own life; to life he can only respond by being responsible."
                    attribution="— Viktor Frankl, Man's Search for Meaning"
                  />
                  <p><strong>The Core Insight:</strong> Life asks YOU the question. Meaning isn\'t found in pleasure (Freud) or power (Adler)—it\'s found in PURPOSE. You don\'t create meaning; you discover it by responding to life\'s call with responsibility.</p>
                  <QuoteBlock
                    text="Those who have a 'why' to live, can bear with almost any 'how'."
                    attribution="— Viktor Frankl"
                  />
                  <p>This is foundational to everything. Suffering ceases to be suffering when it finds meaning. Between stimulus and response lies our freedom to choose. Redemptive challenge over destructive suffering. The right why enables any how.</p>
                </div>
              </Accordion>
            </PillarCard>
            <PillarCard
              number="#2"
              title="Eckhart Tolle: A New Earth"
              essence="Consciousness elevation transcends ego, overcomes separateness. We're at a threshold—technology can elevate or alienate humanity."
            >
              <Accordion
                eyebrow="Explore Tolle's Vision"
                title="Consciousness Elevation"
                description="A New Earth was catalytic—it unlocked vision for consciousness elevation through technology and human potential."
              >
                <div className="prose prose-invert max-w-none">
                  <p><em>A New Earth</em> (MORE influential on me than <em>The Power of Now</em>) wasn\'t derivative—it was <strong>catalytic</strong>. Tolle unlocked my vision for consciousness elevation:</p>
                  <ul>
                    <li>Elevation of human spirit and consciousness</li>
                    <li>Mindfulness "takeoff" in collective consciousness</li>
                    <li>Harmonious participation in universal creation</li>
                    <li>Overcoming illusion of separateness</li>
                    <li>Ego transcendence through present-moment awareness</li>
                  </ul>
                  <p>This shaped my entire worldview: Technology can uplift OR alienate. We\'re at a threshold moment. Consciousness elevation is the answer—not more systems, more rules, more control. <strong>Know Thyself</strong> becomes the foundation of everything.</p>
                  <p>The illusion of separateness is the root problem:</p>
                   <ul>
                    <li>Ego creates boundaries that don\'t exist</li>
                    <li>Competition replaces collaboration</li>
                    <li>Individual optimization ignores systemic effects</li>
                    <li>"I succeed, you fail" mentality</li>
                    <li>Political polarization, economic inequality, environmental destruction</li>
                  </ul>
                  <p><strong>Interconnection is reality.</strong> Separateness is illusion. Consciousness elevation means recognizing and living this truth.</p>
                </div>
              </Accordion>
            </PillarCard>
            <PillarCard
              number="#3"
              title="Panpsychism: Consciousness as Ground"
              essence="Universal consciousness is the root of reality. We are nodes in this process—gardeners and tenders of planetary consciousness."
            >
              <Accordion
                eyebrow="Explore Cosmology"
                title="Universal Consciousness"
                description="This isn't metaphor—it's cosmology. We're participants in the universe's self-knowing process."
              >
                <div className="prose prose-invert max-w-none">
                  <p>My worldview is fundamentally <strong>panpsychist</strong>. Universal consciousness is the root of reality—deeper than physical matter. God/universe is undertaking a program of knowing itself.</p>
                  <p><strong>We are nodes in this process.</strong> Humans contribute to evolution of knowledge, expansion of consciousness. Our mission: Become "gardeners and tenders of consciousness of the entire planet."</p>
                  <p>This isn\'t metaphor—it\'s cosmology. Interconnection is reality. Separateness is illusion. We don\'t just participate in universal consciousness—we ARE it, localized, learning, growing, transmuting.</p>
                  <p><strong>Core Metaphysics:</strong></p>
                  <ul>
                    <li>Universal consciousness is primordial (exists before matter)</li>
                    <li>God/universe knows itself THROUGH creation</li>
                    <li>Humans are nodes—localized consciousness participating in universal evolution</li>
                    <li>We\'re not observers of reality, we\'re participants in creation</li>
                    <li>Knowledge expansion and consciousness evolution are the fundamental processes</li>
                  </ul>
                  <p><strong>Our Mission:</strong> We must overcome sins of the past (war, brutality, greed, separateness) and become stewards of planetary consciousness. Not dominators—stewards. Not extractors—gardeners.</p>
                </div>
              </Accordion>
            </PillarCard>
          </div>
          <SynthesisBlock label="The Synthesis">
            <p><strong>Frankl</strong> says: Life asks you a question, answer with responsibility and purpose.</p>
            <p><strong>Tolle</strong> says: Consciousness elevation transcends ego, overcomes separateness.</p>
            <p><strong>Panpsychism</strong> says: You are a node in universal consciousness, tending planetary awareness.</p>
            <p><strong>Together they mean:</strong> Your purpose isn’t self-created—it’s discovered by responding to life’s call. That response must elevate consciousness (yours and others’). You’re not separate from the universe—you’re participating in its self-knowing. Technology either serves this or betrays it.</p>
          </SynthesisBlock>
        </div>
      </section>

      {/* --- COSMOLOGY SECTION --- */}
      <section id="cosmology" className="zone-dark pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            title="The Cosmology: How Reality Works"
            description="Understanding the structure of reality, our role within it, and the threshold moment we currently inhabit."
          />
          <div className="space-y-4">
            <Accordion
              eyebrow="Understanding Reality"
              title="Universal Consciousness & Human Participation"
              description="We're not separate observers—we're active participants in the universe's process of knowing itself through creation."
            >
              <div className="prose prose-invert max-w-none">
                <p><strong>Core Metaphysics:</strong></p>
                <ul>
                  <li>Universal consciousness is primordial (exists before matter)</li>
                  <li>God/universe knows itself THROUGH creation</li>
                  <li>Humans are nodes—localized consciousness participating in universal evolution</li>
                  <li>We are not observers of reality, we are <strong>participants in creation</strong></li>
                  <li>Knowledge expansion and consciousness evolution are the fundamental processes</li>
                </ul>
                <p><strong>Our Mission:</strong></p>
                <p>We must overcome sins of the past (war, brutality, greed, separateness) and become <strong>stewards of planetary consciousness</strong>. Not dominators—stewards. Not extractors—gardeners.</p>
              </div>
            </Accordion>
            <Accordion
              eyebrow="Critical Moment"
              title="The Technology Threshold"
              description="We're at a pivotal moment where technology can either elevate human consciousness or create alienation and separation from truth."
            >
                <div className="prose prose-invert max-w-none">
                    <p><strong>We are at a pivotal moment:</strong> Technology can elevate human spirit OR create alienation, distraction, separation from presence/inner truth/consciousness.</p>
                    <p><strong>The Choice:</strong></p>
                    <ul>
                        <li><strong>Elevation path:</strong> Technology as partner in consciousness evolution, unlocking human potential</li>
                        <li><strong>Degradation path:</strong> Technology replacing human thinking, creating dependency, reinforcing separateness</li>
                    </ul>
                    <p><strong>Current trajectory is DESTRUCTIVE:</strong></p>
                    <ul>
                        <li>Social media creates alienation</li>
                        <li>Phones distract from presence</li>
                        <li>AI (used mindlessly) degrades human capability</li>
                        <li>Systems optimize for engagement, not flourishing</li>
                        <li>Separation deepens as connection tools proliferate</li>
                    </ul>
                    <p><strong>But technology COULD:</strong></p>
                    <ul>
                        <li>Help people know themselves (self-knowledge tools)</li>
                        <li>Contribute to realization of "New Earth" (Tolle's vision)</li>
                        <li>Enable human thriving and shepherding of earth</li>
                        <li>Facilitate participation in universal consciousness evolution</li>
                        <li>Level playing field (small businesses vs private equity consolidation)</li>
                    </ul>
                    <p>The question isn\'t "technology: yes or no?" The question is: <strong>"Technology serving what purpose?"</strong></p>
                </div>
            </Accordion>
            <Accordion
              eyebrow="Core Human Need"
              title="Meaning-Making as Fundamental"
              description="Meaning isn't optional—it's fundamental to human flourishing. Three false paths and one true path to meaning."
            >
                <div className="prose prose-invert max-w-none">
                    <p>Meaning isn\'t optional—it\'s <strong>fundamental to human flourishing.</strong> Frankl proved this in concentration camps: Those with purpose survived. Those without, perished.</p>
                    <p><strong>Three False Paths to Meaning:</strong></p>
                    <ol>
                        <li><strong>Pleasure</strong> (Freud) - Hedonism degrades, doesn\'t sustain</li>
                        <li><strong>Power</strong> (Adler) - Domination creates separation, not flourishing</li>
                        <li><strong>Avoidance</strong> (Modern distraction culture) - Phones, endless content, escape from self</li>
                    </ol>
                    <p><strong>The Real Path:</strong></p>
                    <p>Meaning through PURPOSE. Life questions you. You respond with responsibility. Suffering transforms when it serves something beyond yourself. This is <strong>redemptive challenge vs destructive suffering</strong>.</p>
                    <p>Between stimulus and response lies freedom—the space where meaning is discovered through conscious choice and responsible action.</p>
                </div>
            </Accordion>
            <Accordion
              eyebrow="The Root Problem"
              title="Interconnection vs Separateness"
              description="Illusion of separateness creates competition, polarization, and destruction. Interconnection is the reality we must recognize."
            >
              <div className="prose prose-invert max-w-none">
                <p><strong>Illusion of Separateness</strong> (Tolle\'s core insight) is the root problem:</p>
                <ul>
                  <li>Ego creates boundaries that don\'t exist</li>
                  <li>Competition replaces collaboration</li>
                  <li>Individual optimization ignores systemic effects</li>
                  <li>"I succeed, you fail" mentality</li>
                  <li>Political polarization, economic inequality, environmental destruction</li>
                </ul>
                <p><strong>Interconnection is Reality:</strong></p>
                <ul>
                  <li>No person is an island (ecosystems, families, communities, planet)</li>
                  <li>Your wellbeing affects mine, mine affects yours</li>
                  <li>Business success built on others\' failure is unsustainable</li>
                  <li>Environmental destruction harms all (no separate space to hide)</li>
                  <li>Universal consciousness means literal interconnection, not metaphor</li>
                </ul>
                <p><strong>The Path Forward:</strong> Technology, business, and human systems must be designed for interconnected flourishing—harmonized goods, not zero-sum competition. Multi-stakeholder optimization, not single-stakeholder extraction.</p>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      <ZoneTransition />

      {/* --- 10 PRINCIPLES --- */}
      <section id="principles" className="zone-light py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="Operationalizing Philosophy"
            title="The 10 Principles for Living"
            description="How the philosophy translates into daily practice. These principles guide decision-making, behavior, and business operations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <PrincipleCard number={1} title="Know Thyself Foundation" essence="Self-knowledge precedes authentic action. Understand your personality, strengths, shadow, values before seeking external change." />
            <PrincipleCard number={2} title="Consciousness Elevation Imperative" essence='Every action should elevate consciousness—yours and others. Ask: "Does this serve awareness or reinforce illusion?"' />
            <PrincipleCard number={3} title="Attention as Civic Responsibility" essence="How you design attention architecture matters. Technology should serve human flourishing, not extract it through manipulation." />
            <PrincipleCard number={4} title="Multi-Stakeholder Optimization" essence="Harmonized goods over zero-sum. Optimize for all stakeholders—not just shareholders—recognizing interconnection." />
            <PrincipleCard number={5} title="Redemptive Challenge Over Destructive Suffering" essence="Suffering that serves purpose transforms you. Suffering without meaning destroys. Seek the former, avoid the latter." />
            <PrincipleCard number={6} title="Technology as Partner, Not Replacement" essence="Technology should enhance human capability, not replace human thinking. Build tools that sharpen, not dull, human potential." />
            <PrincipleCard number={7} title="Transmutation Over Transformation" essence="Deep alchemical change that preserves essence while elevating form. Not replacement—elevation." />
            <PrincipleCard number={8} title="Purpose Through Response-ability" essence="Life questions you. Purpose discovered through responsible response. Between stimulus and response lies freedom to choose meaning." />
            <PrincipleCard number={9} title="Interconnection is Reality" essence="Separateness is illusion. Your wellbeing affects mine. Design for ecosystem health, not individual extraction." />
            <PrincipleCard number={10} title="Stewardship Over Domination" essence="We're gardeners of planetary consciousness, not extractors. Tend what you touch. Leave it better than you found it." />
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion
              eyebrow="Deep Dive"
              title="Complete Principles Framework"
              description="Explore each principle in depth with examples, applications, and integration strategies across all life domains."
            >
              <div className="prose max-w-none">
                <h4>1. Know Thyself Foundation</h4>
                <p><strong>Core Truth:</strong> You cannot serve consciousness evolution if you don\'t know yourself. Self-deception blocks authentic action. Shadow work, personality awareness, values clarification are prerequisites.</p>
                <p><strong>Application:</strong> Use frameworks (CliftonStrengths, Enneagram, MBTI) not as labels but as lenses. Annual reflection, journaling, facilitated self-inquiry. Business decisions tested against values.</p>
                
                <h4>2. Consciousness Elevation Imperative</h4>
                <p><strong>Core Truth:</strong> Not all progress elevates consciousness. Growth in wealth, power, or knowledge without wisdom increases danger. Every action either lifts awareness or reinforces ego/illusion.</p>
                <p><strong>Application:</strong> Before decisions, ask: "Does this serve awareness or distraction? Does this help people know themselves or escape themselves?" Design choices, hiring, partnerships—all filtered through consciousness lens.</p>
                
                <h4>3. Attention Architecture as Civic Responsibility</h4>
                <p><strong>Core Truth:</strong> Where attention goes, consciousness follows. Manipulative design (infinite scroll, notification addiction, engagement maximization) degrades humanity. Designers bear responsibility.</p>
                <p><strong>Application:</strong> Friction where appropriate (pause before action). Transparency in persuasion techniques. Optimize for user wellbeing, not just engagement. This is NOT "user experience"—it's civic design.</p>
                
                <h4>4. Multi-Stakeholder Optimization</h4>
                <p><strong>Core Truth:</strong> Interconnection means your success doesn\'t exist separate from ecosystem health. Extractive business (maximize shareholder value at all costs) destroys the ground it stands on.</p>
                <p><strong>Application:</strong> Harmonized goods—clients, team, Brandon, community all benefit. Not equal distribution but ALIGNED interests. Refuse work that harms one stakeholder to benefit another.</p>

                <h4>5. Redemptive Challenge Over Destructive Suffering</h4>
                <p><strong>Core Truth:</strong> Frankl showed suffering with meaning elevates; suffering without meaning destroys. The difference: purpose, responsibility, choice.</p>
                <p><strong>Application:</strong> Wilderness programs (challenge that transforms). Difficult projects with clear purpose. Avoid pointless grind, embrace meaningful struggle. Marathon training vs doom-scrolling.</p>

                <h4>6. Technology as Partner, Not Replacement</h4>
                <p><strong>Core Truth:</strong> AI replacing human thinking creates dependency and degradation. AI enhancing human capability creates abundance and elevation.</p>
                <p><strong>Application:</strong> Build tools that require human judgment. Augment cognition, don\'t replace it. Calculator enhances math understanding when used right; becomes crutch when used wrong. Same with AI.</p>

                <h4>7. Transmutation Over Transformation</h4>
                <p><strong>Core Truth:</strong> Transformation can discard essence. Transmutation preserves core while elevating expression. Alchemical—lead to gold retains metallic nature but transcends limitations.</p>
                <p><strong>Application:</strong> Personal growth preserves authentic self while releasing limiting patterns. Business pivot maintains mission while evolving methods. Not "become different person"—become MORE yourself.</p>

                <h4>8. Purpose Through Response-ability</h4>
                <p><strong>Core Truth:</strong> Life is questioning YOU. Your purpose isn\'t chosen arbitrarily—it\'s discovered through responsible response to what life demands of you.</p>
                <p><strong>Application:</strong> Notice what calls you. What problems won\'t leave you alone? What injustice demands your response? Purpose emerges from paying attention to life\'s questions and choosing to answer.</p>

                <h4>9. Interconnection is Reality</h4>
                <p><strong>Core Truth:</strong> Ego creates illusion of separateness. Reality is interconnected ecosystems—biological, social, economic, consciousness. Individual success impossible without system health.</p>
                <p><strong>Application:</strong> Business decisions consider ripple effects. Personal choices consider community impact. Environmental destruction recognized as self-harm. Collaboration over competition where possible.</p>

                <h4>10. Stewardship Over Domination</h4>
                <p><strong>Core Truth:</strong> Humans aren\'t meant to dominate nature/others—we\'re meant to tend, garden, steward. Power is responsibility, not privilege. Leadership is service.</p>
                <p><strong>Application:</strong> Leave code better than you found it. Mentor others. Build systems that outlast you. Sustainable practices over extraction. Care for team wellbeing as priority, not afterthought.</p>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* --- MANIFESTATIONS SECTION --- */}
      <section id="manifestations" className="zone-light pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Philosophy in Practice"
            title="The Manifestations"
            description="How this philosophy expresses across multiple domains—from personal practices to business operations to cultural expression."
          />
          <div className="space-y-4">
            <Accordion
              eyebrow="Manifestation Domain"
              title="Meta-Frameworks (Organizing Systems)"
              description="Overarching structures that organize and integrate all other manifestations—personality architecture and AQAL framework."
            >
              <div className="prose max-w-none">
                <p><strong>Personality Synthesis Architecture:</strong></p>
                <ul>
                  <li>CliftonStrengths (natural talents and patterns)</li>
                  <li>Enneagram (core motivations and shadow work)</li>
                  <li>MBTI (cognitive preferences and processing)</li>
                  <li>Synthesized into complete self-knowledge framework</li>
                </ul>
                <p><strong>AQAL Framework (Ken Wilber's Integral Theory):</strong></p>
                <ul>
                  <li>All Quadrants: Individual/Collective × Interior/Exterior</li>
                  <li>All Levels: Developmental stages of consciousness</li>
                  <li>All Lines: Multiple intelligences and capacities</li>
                  <li>All States: Temporary experiences of consciousness</li>
                  <li>All Types: Masculine/Feminine, personality types, etc.</li>
                </ul>
                <p>These frameworks organize manifestations and ensure holistic development across all dimensions of human experience.</p>
              </div>
            </Accordion>
            <Accordion
              eyebrow="Manifestation Domain"
              title="Integrated Experience Design (IXD)"
              description="Design philosophy and practice that ensures technology serves consciousness elevation rather than exploitation."
            >
              <div className="prose max-w-none">
                <p>IXD is how the life philosophy manifests in technology and product design work.</p>
                <p><strong>Core IXD Principles:</strong></p>
                <ul>
                  <li>Attention Architecture as Civic Responsibility</li>
                  <li>Technology as Partner, Not Replacement</li>
                  <li>Multi-Stakeholder Optimization</li>
                  <li>Consciousness Elevation Through Design</li>
                </ul>
                <p><strong>Application Areas:</strong></p>
                <ul>
                  <li>User interface design (friction, transparency, autonomy)</li>
                  <li>Product strategy (what to build, what not to build)</li>
                  <li>Business model design (aligned incentives)</li>
                  <li>Data ethics and privacy</li>
                </ul>
                <p>IXD ensures that every design choice is filtered through the question: "Does this serve human flourishing or exploit human vulnerability?"</p>
              </div>
            </Accordion>
            <Accordion
              eyebrow="Manifestation Domain"
              title="Applied Methodologies"
              description="Practical frameworks for life design, personal transmutation, and strategic planning grounded in philosophy."
            >
              <div className="prose max-w-none">
                <p><strong>Design Your Life (Stanford d.school):</strong></p>
                <ul>
                  <li>Life as design problem (not optimization problem)</li>
                  <li>Prototype different futures</li>
                  <li>Reframe problems as opportunities</li>
                  <li>Build iteratively toward thriving</li>
                </ul>
                <p><strong>Hero's Journey Framework:</strong></p>
                <ul>
                  <li>Call to Adventure (life\'s question emerges)</li>
                  <li>Crossing Threshold (commitment to change)</li>
                  <li>Trials and Transformation (redemptive challenge)</li>
                  <li>Return with Gift (stewardship—sharing what you\'ve learned)</li>
                </ul>
                <p><strong>Annual Planning with Year Compass:</strong></p>
                <ul>
                  <li>Reflection on past year (what worked, what didn\'t)</li>
                  <li>Vision for coming year (across all life domains)</li>
                  <li>Quarterly themes and milestones</li>
                  <li>Integration with business/personal goals</li>
                </ul>
                <p>These methodologies translate philosophy into actionable practice.</p>
              </div>
            </Accordion>
            <Accordion
              eyebrow="Manifestation Domain"
              title="Cultural Expression"
              description="How philosophy shows up in language, aesthetics, mythology, and creative work—the Odyssey Lab brand and worldview."
            >
              <div className="prose max-w-none">
                <p><strong>Hero's Journey as Brand Metaphor:</strong></p>
                <ul>
                  <li>Business owners are on quests</li>
                  <li>Odyssey Lab serves as guide/mentor</li>
                  <li>Bronze/gold colors represent transformation journey</li>
                  <li>Light/Dark zones represent known/unknown</li>
                </ul>
                <p><strong>Titans vs Pantheon Aesthetic:</strong></p>
                <ul>
                  <li>Titans: Grounded, foundational, challenges/risks</li>
                  <li>Pantheon: Elevated, aspirational, opportunities/vision</li>
                  <li>Both necessary—not good vs evil, but complementary forces</li>
                </ul>
                <p><strong>Language Choices:</strong></p>
                <ul>
                  <li>Transmutation over transformation</li>
                  <li>Stewardship over domination</li>
                  <li>Consciousness elevation over growth hacking</li>
                  <li>Know Thyself over personal branding</li>
                </ul>
                <p>Every aesthetic choice reflects philosophical commitments—this isn\'t decoration, it\'s expression of worldview.</p>
              </div>
            </Accordion>
            <Accordion
              eyebrow="Manifestation Domain"
              title="Product Visions"
              description="Future products and platforms that could serve consciousness elevation at scale—from apps to civic infrastructure."
            >
              <div className="prose max-w-none">
                <p><strong>Human Evolution & Inner Alchemy App:</strong></p>
                <ul>
                  <li>Technology as consciousness elevation tool</li>
                  <li>Help people Know Themselves (personality synthesis)</li>
                  <li>Life design frameworks (Design Your Life, Hero's Journey)</li>
                  <li>Actualize thriving across All Quadrants and All Levels (AQAL)</li>
                  <li>Partner in consciousness evolution, not replacement for human thinking</li>
                </ul>
                <p><strong>Political Accountability & Democracy Platform:</strong></p>
                <ul>
                  <li>Transparency of action vs. promises</li>
                  <li>Tracking 1st to 3rd order impacts of policies</li>
                  <li>Meta-analysis: How policies contribute to sustained Eudaimonia</li>
                  <li>Civil awareness and conscious citizenship</li>
                  <li>Shepherding consciousness at societal scale</li>
                </ul>
                <p><strong>Design Principle for All Products:</strong> Optimize for human flourishing, not engagement metrics. Build tools that make people more capable, not more dependent.</p>
              </div>
            </Accordion>
            <Accordion
              eyebrow="Manifestation Domain"
              title="Business Operations (Company DNA)"
              description="How Odyssey Lab actually operates—proving philosophy can be profitable and sustainable in real business context."
            >
              <div className="prose max-w-none">
                <p><strong>Multi-Stakeholder Optimization in Practice:</strong></p>
                <ul>
                  <li>Clients: Solve real problems, create value</li>
                  <li>Team: Fair compensation, growth opportunities, meaningful work</li>
                  <li>Brandon: Sustainable income, strategic control, purpose fulfillment</li>
                  <li>Community: Ethical practices, knowledge sharing</li>
                </ul>
                <p><strong>Operational Principles:</strong></p>
                <ul>
                  <li>Harmonized goods (not one stakeholder at expense of another)</li>
                  <li>Attention architecture as civic responsibility (in client work)</li>
                  <li>Technology as partner (AI augments, doesn\'t replace team)</li>
                  <li>Stewardship mindset (leave code/systems better than found)</li>
                </ul>
                <p><strong>Proof of Concept:</strong> Odyssey Lab is profitable, sustainable, and aligned with philosophy. This isn\'t theory—it\'s operationalized reality.</p>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* --- INVITATION SECTION --- */}
      <section id="invitation" className="zone-light py-24 bg-gradient-to-b from-[var(--light-bg-body)] to-[var(--light-bg-panel)]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            eyebrow="For the Journey"
            title="The Invitation: What This Philosophy Enables"
            description="This philosophy serves multiple pathways—choose the one that calls to you, or integrate them all."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PathwayCard
              icon="🧭"
              title="For Personal Transmutation"
              description="If you're on your own Hero's Journey: Complete framework from ROOT to application. Personality architecture enables self-knowledge. Life design methodology creates actionable path. Annual planning integrates strategy with execution."
            />
            <PathwayCard
              icon="🛠️"
              title="For Business & Product Development"
              description="If you're building technology or business: IXD principles ensure consciousness-aligned design. Attention Architecture as Civic Responsibility grounds ethical choices. Multi-Stakeholder Optimization prevents extractive models."
            />
            <PathwayCard
              icon="✨"
              title="For Consciousness Elevation Work"
              description="If you're facilitating others' growth: Complete philosophical foundation for coaching/facilitation. Personality synthesis process. Hero's Journey architecture for framing transmutation. Redemptive challenge over destructive suffering."
            />
            <PathwayCard
              icon="🌍"
              title="For Scaling Impact"
              description="If you want to serve many: Human Evolution App vision (consciousness elevation at scale). Political Accountability Platform (democratic health, civic consciousness). Methodology can become curriculum, coaching practice, products."
            />
          </div>
          <div className="mt-24 max-w-3xl mx-auto text-center">
            <h3 className="font-display text-3xl text-[var(--light-text-primary)] mb-4">The Core Message</h3>
            <div className="prose prose-xl max-w-none mx-auto text-slate-600 leading-relaxed">
                <p>You are a node in universal consciousness. Life is questioning you. Your purpose is discovered through responsible response. Technology sits at threshold—can elevate or degrade humanity. Choose elevation. Know yourself. Serve consciousness evolution. Overcome separateness. Embrace meaningful challenge. Build systems that enable human flourishing.</p>
                <p className="text-2xl font-semibold text-[var(--color-bronze)]">This is the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- V1.0 DEVELOPMENT SECTION --- */}
      <section id="v1-development" className="zone-light py-24 bg-[var(--light-bg-muted)]">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Toward Completion"
            title="What's Next: v1.0 Development"
            description="This is v0.9—near-final, ready for refinement. Here are known gaps and questions for v1.0."
          />
          <Accordion
            eyebrow="Open Questions"
            title="Known Gaps & Questions for v1.0"
            description="Areas requiring deeper thought, clarification, or Socratic dialogue before finalization."
          >
            <div className="prose max-w-none">
              <h4>1. Philosophy Name?</h4>
              <ul>
                <li>Currently "Life Philosophy for Human Flourishing"</li>
                <li>Too generic? Needs distinctive name?</li>
                <li>"Odyssey Philosophy"? "Integrated Philosophy"? Something else?</li>
              </ul>
              <h4>2. AQAL Integration Depth</h4>
              <ul>
                <li>How deeply should AQAL organize the complete system?</li>
                <li>Four quadrants mapping to manifestations?</li>
                <li>Developmental levels integrated with personality frameworks?</li>
                <li>Learning needed before full integration possible</li>
              </ul>
              <h4>3. Frankl vs Tolle vs Panpsychism - Hierarchy?</h4>
              <ul>
                <li>Are these truly co-equal or is one more fundamental?</li>
                <li>Does panpsychism subsume the other two?</li>
                <li>Or does synthesis create something beyond any single source?</li>
              </ul>
              <h4>4. Principle Completeness</h4>
              <ul>
                <li>Are 10 principles sufficient?</li>
                <li>Any redundancy or gaps?</li>
                <li>Ordering matters or arbitrary?</li>
              </ul>
              <h4>5. Manifestation Architecture</h4>
              <ul>
                <li>Is the structure (Meta-Frameworks → IXD → Applications → Culture → Products → Business) clean?</li>
                <li>MECE (Mutually Exclusive, Collectively Exhaustive)?</li>
                <li>Missing any major manifestation domains?</li>
              </ul>
              <h4>6. Transmutation vs Transformation Language</h4>
              <ul>
                <li>Applied consistently throughout?</li>
                <li>Any remaining "transformation" that should be "transmutation"?</li>
                <li>Definition clarity sufficient?</li>
              </ul>
              <h4>7. Operational Protocols</h4>
              <ul>
                <li>How does someone actually USE this philosophy day-to-day?</li>
                <li>Decision frameworks? Reflection protocols? Integration practices?</li>
                <li>Or is that Application Layer work (separate from philosophy itself)?</li>
              </ul>
              <h4>8. Personality Architecture Positioning</h4>
              <ul>
                <li>Is personality correctly positioned as Meta-Framework?</li>
                <li>Or should it be its own top-level thing?</li>
                <li>Relationship to AQAL clear enough?</li>
              </ul>
              <h4 className="mt-8">Socratic Dialogue Path</h4>
              <p>When ready for v1.0 development, structured dialogue on:</p>
              <ul>
                <li>Philosophy naming and positioning</li>
                <li>Principle ordering and completeness</li>
                <li>AQAL integration strategy</li>
                <li>Operational protocols (how to live the philosophy)</li>
                <li>Manifestation strategy (which to develop first?)</li>
                <li>Missing elements or blind spots</li>
              </ul>
            </div>
          </Accordion>
          <div className="mt-12 p-8 bg-[var(--light-bg-panel)] rounded-lg border-l-4 border-[var(--color-bronze)]">
            <h3 className="font-display text-2xl text-[var(--light-text-primary)] mb-4">The Essence</h3>
            <div className="prose max-w-none">
              <p>This philosophy didn't emerge from abstract theorizing. It came from <strong>10 years</strong> of reading, discussing, wrestling with what makes life meaningful. <strong>Christmas epiphanies</strong> that crystallized vision into actionable form. <strong>Business reality</strong> proving philosophy works. <strong>Personal journey</strong> from ethnography dreams to agency threshold to life design emergence.</p>
              <p>It's not complete—v0.9 means refinement needed. But it's <strong>coherent</strong>. The ROOT sources provide solid foundation. The 10 Principles operationalize daily living. The Manifestations show how philosophy expresses in business, products, culture, life design.</p>
              <p><strong>Most importantly: It's authentic.</strong> This is Brandon's voice, Brandon's journey, Brandon's worldview finding expression. Not borrowed philosophy—discovered philosophy. Not theoretical—lived.</p>
              <p className="mt-8 text-center italic text-slate-500">For the journey. For the transmutation. For the elevation of consciousness. For the New Earth.</p>
              <p className="text-center mt-4 text-2xl">✨🧭🌱🔥</p>
            </div>
          </div>
        </div>
      </section>

      <StickyNav
        sections={[
          { id: 'origin', title: 'Origin' },
          { id: 'root', title: 'ROOT' },
          { id: 'cosmology', title: 'Cosmology' },
          { id: 'principles', title: 'Principles' },
          { id: 'manifestations', title: 'Manifest' },
          { id: 'invitation', title: 'Invitation' },
        ]}
      />
    </div>
  );
}

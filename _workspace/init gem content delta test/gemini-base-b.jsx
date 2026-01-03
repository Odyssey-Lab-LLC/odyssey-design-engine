import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Menu, X, Anchor, Compass, Globe, Zap, Layers, Feather } from 'lucide-react';

// --- STYLES & ANIMATIONS ---
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  :root {
    --color-bronze: #B48E55;
    --color-gold: #D4AF37;
    --color-dark: #0F172A;
    --color-darker: #020617;
    --color-surface: #1E293B;
    --color-light: #F5F5F7;
    --ease-out-expo: cubic-bezier(0.19, 1, 0.22, 1);
  }

  body {
    background-color: var(--color-dark);
    color: var(--color-light);
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  .font-display { font-family: 'Cinzel', serif; }
  .font-body { font-family: 'Inter', sans-serif; }
  .font-mono { font-family: 'JetBrains Mono', monospace; }

  /* Animations */
  @keyframes float {
    0% { transform: translateY(0px); opacity: 0.3; }
    50% { transform: translateY(-10px); opacity: 0.6; }
    100% { transform: translateY(0px); opacity: 0.3; }
  }
  
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-fade-in { animation: fade-in-up 1s var(--ease-out-expo) forwards; }
  
  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }

  /* Text Gradients & Utilities */
  .text-gold-gradient {
    background: linear-gradient(135deg, #D4AF37 0%, #B48E55 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Odyssey Card Style (Reference Implementation) */
  .odyssey-card {
    background: linear-gradient(180deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%);
    border: 1px solid rgba(180, 142, 85, 0.2);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  .odyssey-card:hover {
    border-color: rgba(212, 175, 55, 0.6);
    transform: translateY(-2px);
  }

  /* Odyssey Accordion Header Style */
  .odyssey-accordion-header {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  .odyssey-accordion-header:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(180, 142, 85, 0.4);
  }
  .odyssey-accordion-header[data-state='open'] {
    background: rgba(180, 142, 85, 0.1);
    border-color: rgba(180, 142, 85, 0.6);
  }
`;

// --- COMPONENTS ---

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`relative px-6 py-24 md:py-32 ${className}`}>
    <div className="max-w-5xl mx-auto relative z-10">
      {children}
    </div>
  </section>
);

const SectionHeader = ({ kicker, title, description, dark = false }) => (
  <div className="mb-20 text-center">
    {kicker && (
      <span className={`font-mono text-[10px] tracking-[0.3em] uppercase mb-4 block ${dark ? 'text-[#B48E55]' : 'text-blue-600'}`}>
        {kicker}
      </span>
    )}
    <h2 className={`font-display text-4xl md:text-5xl font-medium mb-6 ${dark ? 'text-[#F5F5F7]' : 'text-[#0F172A]'}`}>
      {title}
    </h2>
    {description && (
      <p className={`font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
        {description}
      </p>
    )}
    <div className={`h-px w-16 mx-auto mt-8 ${dark ? 'bg-gradient-to-r from-transparent via-[#B48E55] to-transparent' : 'bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent'}`} />
  </div>
);

// REFINED ACCORDION (Odyssey Style Header + Nested Quote Preservation)
const AccordionItem = ({ title, subtitle, children, isOpen, onClick, dark = false, indexStr }) => (
  <div className="mb-4 group">
    <button
      onClick={onClick}
      data-state={isOpen ? 'open' : 'closed'}
      className={`w-full text-left p-6 flex items-start justify-between rounded-lg transition-all duration-300 ${
        dark 
          ? 'odyssey-accordion-header' 
          : 'bg-white border border-gray-200 hover:border-[#B48E55] shadow-sm'
      }`}
    >
      <div className="flex items-start gap-4">
        {indexStr && (
          <span className={`font-mono text-xs mt-1.5 ${dark ? 'text-[#B48E55]' : 'text-[#B48E55]'}`}>
            {indexStr}
          </span>
        )}
        <div>
          <h3 className={`font-display text-lg md:text-xl ${dark ? 'text-gray-100' : 'text-gray-900'} group-hover:text-[#B48E55] transition-colors`}>
            {title}
          </h3>
          {subtitle && (
            <p className={`font-body text-sm mt-2 leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className={`mt-1 ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <ChevronDown size={20} className={dark ? 'text-[#B48E55]' : 'text-[#B48E55]'} />
      </div>
    </button>
    
    <div 
      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
    >
      <div className={`p-6 pl-12 font-body leading-relaxed ${dark ? 'text-gray-300 border-l border-[#B48E55]/20 ml-6' : 'text-gray-600 border-l border-[#B48E55]/30 ml-6'}`}>
        {children}
      </div>
    </div>
  </div>
);

// REFINED PILLAR CARD (Odyssey Style)
const PillarCard = ({ title, subtitle, icon: Icon, points }) => (
  <div className="odyssey-card h-full flex flex-col p-8 relative overflow-hidden rounded-xl group">
    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity text-[#B48E55]">
      <Icon size={100} strokeWidth={1} />
    </div>
    
    <div className="relative z-10">
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#B48E55]/10 text-[#B48E55] border border-[#B48E55]/20">
        <Icon size={24} />
      </div>
      
      <h3 className="font-display text-2xl text-white mb-2 tracking-wide">{title}</h3>
      <p className="font-mono text-xs text-[#B48E55] mb-6 uppercase tracking-wider">{subtitle}</p>
      
      <div className="h-px w-full bg-gradient-to-r from-[#B48E55]/50 to-transparent mb-6"></div>
      
      <ul className="space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-start text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            <span className="text-[#B48E55] mr-3 mt-1 text-xs">◆</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Quote = ({ text, author, citation }) => (
  <blockquote className="my-6 pl-6 border-l-2 border-[#B48E55] italic text-lg relative bg-[#B48E55]/5 p-4 rounded-r-lg">
    <span className="absolute top-0 left-2 text-4xl text-[#B48E55] opacity-20 font-display">"</span>
    <p className="relative z-10">{text}</p>
    {(author || citation) && (
      <footer className="mt-3 text-sm not-italic opacity-80 flex items-center gap-2">
        <div className="h-px w-8 bg-[#B48E55]"></div>
        {author && <span className="font-bold text-[#B48E55]">{author}</span>}
        {citation && <span className="font-mono text-[10px] uppercase tracking-wider">{citation}</span>}
      </footer>
    )}
  </blockquote>
);

const Badge = ({ children }) => (
  <span className="inline-block px-3 py-1 mb-6 border border-[#B48E55]/50 text-[#B48E55] text-[10px] font-mono tracking-[0.2em] uppercase rounded-sm bg-[#B48E55]/5 backdrop-blur-sm">
    {children}
  </span>
);

// NEW NAVIGATION (Mobile TOC Logic)
const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const navItems = [
    { label: 'Origin', id: 'origin' },
    { label: 'Root', id: 'root' },
    { label: 'Cosmology', id: 'cosmology' },
    { label: 'Principles', id: 'principles' },
    { label: 'Manifestations', id: 'manifestations' },
    { label: 'Synthesis', id: 'synthesis' },
    { label: 'Core', id: 'core' },
  ];

  return (
    <>
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[95vw] md:w-auto flex justify-center pointer-events-none">
        {/* Desktop View (Pointer events restored on children) */}
        <div className="hidden md:flex pointer-events-auto bg-[#0F172A]/90 backdrop-blur-md border border-gray-800 rounded-full px-6 py-3 shadow-2xl gap-8 items-center">
          <span className="w-2 h-2 rounded-full bg-[#B48E55] animate-pulse"></span>
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className="text-[10px] font-mono uppercase tracking-widest text-gray-400 hover:text-[#D4AF37] transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Button (Pointer events restored) */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden pointer-events-auto flex items-center gap-3 bg-[#0F172A] border border-[#B48E55] rounded-full px-8 py-4 shadow-2xl text-xs font-mono uppercase tracking-wider text-[#D4AF37]"
        >
          <Menu size={16} />
          <span>Table of Contents</span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md flex items-end md:hidden animate-fade-in">
          <div className="w-full bg-[#1E293B] rounded-t-2xl border-t border-[#B48E55]/30 p-6 pb-12 shadow-2xl">
            <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
              <span className="text-xs font-mono uppercase text-[#B48E55] tracking-widest">Navigation</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white p-2">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {navItems.map((item, idx) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 text-gray-200 hover:bg-[#0F172A] rounded-lg transition-colors group"
                >
                  <span className="font-display text-lg">{item.label}</span>
                  <span className="font-mono text-[10px] text-gray-600 group-hover:text-[#B48E55]">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// --- MAIN APP ---

export default function LifePhilosophyV2() {
  const [openPrinciples, setOpenPrinciples] = useState(0); 
  const [openSources, setOpenSources] = useState(null);

  const togglePrinciple = (index) => setOpenPrinciples(openPrinciples === index ? null : index);
  const toggleSource = (index) => setOpenSources(openSources === index ? null : index);

  return (
    <div className="min-h-screen selection:bg-[#B48E55] selection:text-white">
      <style>{styles}</style>
      <StickyNav />

      {/* 1. HERO SECTION (Preserved) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#D4AF37] rounded-full opacity-20 animate-float" />
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#D4AF37] rounded-full opacity-30 animate-float delay-100" />
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#B48E55] rounded-full opacity-10 animate-float delay-200" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <Badge>v0.9 • NEAR-FINAL</Badge>
          </div>
          
          <h1 className="animate-fade-in delay-100 font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-12">
            Life Philosophy<br />
            <span className="text-gold-gradient block mt-4 text-3xl md:text-5xl">For Human Flourishing</span>
          </h1>

          <div className="animate-fade-in delay-200">
            <p className="font-display italic text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto border-l-2 border-[#B48E55] pl-6 md:pl-8 text-left">
              "Life doesn't ask you what meaning is—it questions you. You answer through responsibility, purpose discovered in response to life's call."
            </p>
          </div>

          <div className="animate-fade-in delay-300 mt-16">
            <a href="#origin" className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-[#D4AF37] transition-colors flex flex-col items-center gap-2 group">
              Begin The Journey
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. ORIGIN SECTION */}
      <Section id="origin" className="bg-[#F5F5F7] text-gray-900">
        <SectionHeader 
          kicker="Context" 
          title="Where This Comes From" 
          description="A Decade-Long Emergence"
        />
        
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
             <div className="bg-white p-8 shadow-sm border-t-4 border-[#B48E55]">
               <h3 className="font-display text-xl mb-4">The Crystallization</h3>
               <p className="font-body text-gray-600 text-sm mb-4">
                 Christmas 2024 marked the shift. Abstract ideas condensed into actionable frameworks.
               </p>
               <div className="h-px w-full bg-gray-100 my-4"></div>
               <p className="font-mono text-xs text-gray-500">
                 STATUS: OPERATIONAL<br/>
                 VERSION: 0.9 (REFINING)
               </p>
             </div>
          </div>
          <div className="md:col-span-8 font-body text-lg text-gray-700 space-y-6">
            <p>
              This philosophy didn't arrive in a single epiphany. It emerged through 10 years of reading philosophy, psychology, and consciousness studies. It was forged in late-night discussions wrestling with reality and proven in the crucible of business experience.
            </p>
            <p>
              The shift happened when abstract ideas became operational principles. When philosophy moved from theoretical interest to lived practice. When synthesis revealed a coherent worldview.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. THE ROOT (PILLARS) - REFINED ARCHITECTURE */}
      <Section id="root" className="bg-[#0F172A]">
        <SectionHeader 
          dark 
          kicker="Foundation" 
          title="The Root" 
          description="Synthesizing three foundational sources into a coherent framework."
        />

        {/* 3 CARDS LAYOUT (Odyssey Style) */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <PillarCard 
            title="Viktor Frankl" 
            subtitle="Meaning"
            icon={Anchor}
            points={[
              "Meaning is discovered, not invented",
              "Life questions you",
              "Freedom to choose response"
            ]}
          />
          <PillarCard 
            title="Eckhart Tolle" 
            subtitle="Presence"
            icon={Compass}
            points={[
              "The Now is the only reality",
              "Ego creates suffering",
              "Surrender to what IS"
            ]}
          />
          <PillarCard 
            title="Panpsychism" 
            subtitle="Consciousness"
            icon={Globe}
            points={[
              "Consciousness is fundamental",
              "Interconnection is reality",
              "The universe is participatory"
            ]}
          />
        </div>

        {/* 3 DEEP-DIVE ACCORDIONS (Below Cards, Card-Like Headers) */}
        <div className="max-w-4xl mx-auto border-t border-gray-800 pt-12">
          <div className="flex items-center justify-center mb-12">
             <div className="h-px w-12 bg-gray-700"></div>
             <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest px-4">Deep Dive into Sources</h3>
             <div className="h-px w-12 bg-gray-700"></div>
          </div>
          
          <AccordionItem 
            dark 
            indexStr="01"
            title="Viktor Frankl: The Existential Foundation" 
            subtitle="Responsibility as the vehicle for meaning."
            isOpen={openSources === 0} 
            onClick={() => toggleSource(0)}
          >
            <p className="mb-6">Frankl provides the existential ground: Life has inherent meaning waiting to be discovered. Your task is response-ability. This grounds the entire philosophy in active engagement rather than passive consumption.</p>
            
            <Quote 
              text="When we are no longer able to change a situation, we are challenged to change ourselves."
              author="Viktor Frankl"
            />
            
            <div className="mt-8 pt-6 border-t border-[#B48E55]/20">
              <span className="font-mono text-xs text-[#B48E55] uppercase tracking-widest block mb-2">Integration</span>
              <p className="text-sm text-gray-400">The concept that meaning is discovered through responsibility and response. That life actively questions us. That suffering can be purposeful rather than meaningless.</p>
            </div>
          </AccordionItem>

          <AccordionItem 
            dark 
            indexStr="02"
            title="Eckhart Tolle: The Mechanics of Consciousness" 
            subtitle="Presence as the path to clarity."
            isOpen={openSources === 1} 
            onClick={() => toggleSource(1)}
          >
            <p className="mb-6">Tolle provides the consciousness framework: How to actually BE in the world moment-to-moment. How to dissolve ego patterns that create suffering. How to access deeper awareness beneath thought.</p>
            
            <Quote 
              text="Realize deeply that the present moment is all you have. Make the NOW the primary focus of your life."
              author="Eckhart Tolle"
            />
            
            <div className="mt-8 pt-6 border-t border-[#B48E55]/20">
              <span className="font-mono text-xs text-[#B48E55] uppercase tracking-widest block mb-2">Integration</span>
              <p className="text-sm text-gray-400">Present moment awareness as foundation. Ego as obstacle to clarity. Surrender as path to peace.</p>
            </div>
          </AccordionItem>

          <AccordionItem 
            dark 
            indexStr="03"
            title="Panpsychism: The Cosmological Ground" 
            subtitle="Reality is fundamentally interconnected."
            isOpen={openSources === 2} 
            onClick={() => toggleSource(2)}
          >
            <p className="mb-6">Panpsychism provides the cosmological foundation: What reality fundamentally IS. Why interconnection matters. How individual consciousness relates to the universal field. This is the metaphysical ground beneath the practical philosophy.</p>
            
            <div className="bg-[#1E293B] p-6 rounded-md border border-[#B48E55]/30 my-6">
              <p className="text-sm italic text-gray-300">"Consciousness all the way down"—not just humans, but a fundamental property of the universe.</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#B48E55]/20">
              <span className="font-mono text-xs text-[#B48E55] uppercase tracking-widest block mb-2">Integration</span>
              <p className="text-sm text-gray-400">Interconnection as reality (separateness as illusion). Consciousness as fundamental rather than emergent. The participatory nature of reality.</p>
            </div>
          </AccordionItem>
        </div>
      </Section>

      {/* 4. COSMOLOGY */}
      <Section id="cosmology" className="bg-[#020617]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs text-[#B48E55] tracking-widest uppercase mb-6 block">The Worldview</span>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-12">How Reality Works</h2>
          
          <div className="space-y-8 text-lg md:text-xl text-gray-300 font-light leading-relaxed text-left border-l border-gray-800 pl-8 md:pl-12">
            <p>
              Reality is fundamentally interconnected consciousness. Individual awareness connects to a universal field. Separateness is an illusion created by ego identification.
            </p>
            <p>
              Life <span className="text-[#B48E55]">questions you</span> constantly through circumstances, relationships, and challenges. Your task is <span className="italic text-white">response-ability</span>—discovering meaning through how you answer life's call.
            </p>
            <p>
              The present moment is the only real access point. Past exists as memory, future as projection. <span className="text-[#B48E55]">NOW</span> is where consciousness meets reality, where choice becomes action.
            </p>
          </div>
        </div>
      </Section>

      {/* 5. THE 10 PRINCIPLES */}
      <Section id="principles" className="bg-[#F5F5F7]">
        <SectionHeader 
          kicker="Practice" 
          title="The 10 Principles" 
          description="Operationalizing philosophy into daily practice."
        />

        <div className="max-w-3xl mx-auto">
          {[
            {
              title: "Presence Over Productivity",
              subtitle: "Quality of awareness trumps quantity of output.",
              content: "Being fully present in each moment matters more than checking boxes. Practice: Before acting, pause. Am I here NOW or lost in mental projection? Bring attention to present moment. Then act from presence rather than distraction. Why It Matters: Productivity culture trains constant future focus. Presence breaks this treadmill."
            },
            {
              title: "Interconnection vs Separateness",
              subtitle: "The illusion of separateness creates destruction.",
              content: "Practice: In any relationship or situation, ask: 'How am I connected here?' rather than 'How am I separate/better/different?' Seek common ground, shared humanity, mutual flourishing. Most societal problems stem from separateness illusion: tribalism, exploitation, environmental destruction."
            },
            {
              title: "Response-Ability Over Victimhood",
              subtitle: "Life questions you through circumstances.",
              content: "You answer through how you respond. Even when situation unchangeable, response remains your freedom. Practice: When challenge arises, ask: 'What is life asking of me here? How can I respond with integrity?' rather than 'Why is this happening to me?'"
            },
            {
              title: "Surrender Without Passivity",
              subtitle: "Accept what IS while shaping what BECOMES.",
              content: "Surrender to what IS (present reality) while actively shaping what BECOMES (future possibility). Practice: Accept current reality fully (this IS what's happening). Then ask: 'What action aligns with deeper truth?' Move from acceptance into aligned action."
            },
            {
              title: "Ego Awareness & Dissolution",
              subtitle: "Recognizing ego patterns enables choosing beyond them.",
              content: "Ego is false self created by identification with thoughts. Practice: Notice when ego activates (defensiveness, superiority). Name it: 'That's ego talking.' Then ask: 'What would deeper self choose?' Seeing through ego patterns liberates authentic self."
            },
            {
              title: "Meaning Through Service",
              subtitle: "Deepest meaning emerges through contribution.",
              content: "Service aligns individual purpose with collective flourishing. Practice: In any context, ask: 'How can I serve here? What can I offer?' rather than 'What can I get?' Ego seeks self-aggrandizement. Deeper self seeks mutual elevation."
            },
            {
              title: "Consciousness Elevation as Practice",
              subtitle: "Active practice, not passive arrival.",
              content: "Continuous refinement of awareness, presence, alignment. Practice: Treat every moment as opportunity to elevate. Am I more aware now than yesterday? More present? More aligned with deeper truth? The practice IS the path."
            },
            {
              title: "Transmutation Over Transformation",
              subtitle: "Change in nature, not just form.",
              content: "Transmutation: Complete change in substance (lead into gold). Transformation: Alteration of form. Practice: Don't just change behavior. Change fundamental nature of how you engage. Shift identity, not just actions. Behavioral change without identity shift rarely persists."
            },
            {
              title: "Present-Future Duality",
              subtitle: "Live fully NOW while building toward vision.",
              content: "Practice: In present moment, ask: 'Does this action align with future vision?' Maintain dual awareness: fully here, oriented toward there. Pure presence risks passivity. Pure future focus misses life happening now."
            },
            {
              title: "Authentic Expression",
              subtitle: "Truth over external validation.",
              content: "Speak and act from deeper truth rather than seeking approval. Practice: Before speaking, check: 'Is this authentic to deeper self or performance for ego validation?' Authenticity attracts right resonance, filters misalignment."
            }
          ].map((principle, index) => (
            <AccordionItem 
              key={index}
              indexStr={(index + 1).toString().padStart(2, '0')}
              title={principle.title}
              subtitle={principle.subtitle}
              isOpen={openPrinciples === index}
              onClick={() => togglePrinciple(index)}
            >
              {principle.content}
            </AccordionItem>
          ))}
        </div>
      </Section>

      {/* 6. MANIFESTATIONS */}
      <Section id="manifestations" className="bg-[#FDF6E3]">
        <SectionHeader 
          kicker="Application" 
          title="Manifestations" 
          description="How the philosophy expresses in reality."
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
             {[
               { title: "Meta-Frameworks", desc: "AQAL (Wilber) & Personality Architecture organize complexity without oversimplifying." },
               { title: "Interaction Design", desc: "Presence-first design. Minimize distraction. Progressive disclosure respecting the user's moment." },
               { title: "Applications Layer", desc: "Life Design Platform & Consciousness Dashboard. Operationalizing philosophy into tools." }
             ].map((item, i) => (
               <div key={i} className="bg-white p-6 border-l-4 border-[#D4AF37] shadow-sm hover:shadow-md transition-shadow group">
                 <h4 className="font-display text-lg text-gray-900 mb-2 group-hover:text-[#B48E55] transition-colors">{item.title}</h4>
                 <p className="font-body text-gray-600 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
          <div className="space-y-4">
            {[
               { title: "Culture & Community", desc: "Presence over productivity. Service-oriented. Consciousness elevation as shared value." },
               { title: "Products & Services", desc: "Consulting and workshops applying the 10 Principles in practice." },
               { title: "Business Operations", desc: "Aligned pricing. Service-first. Long-term thinking over short-term optimization." }
             ].map((item, i) => (
               <div key={i} className="bg-white p-6 border-l-4 border-[#B48E55] shadow-sm hover:shadow-md transition-shadow group">
                 <h4 className="font-display text-lg text-gray-900 mb-2 group-hover:text-[#B48E55] transition-colors">{item.title}</h4>
                 <p className="font-body text-gray-600 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* 7. SYNTHESIS - REFINED VISUALIZATION */}
      <Section id="synthesis" className="bg-[#1E293B]">
         <div className="text-center mb-12">
            <span className="font-mono text-xs text-blue-400 tracking-[0.2em] uppercase">Integration</span>
            <h2 className="font-display text-4xl text-white mt-4">The Synthesis</h2>
            <p className="font-display text-lg text-gray-300 mt-8 max-w-3xl mx-auto leading-relaxed border-l-2 border-[#D4AF37] pl-6 text-left">
              "When existential meaning meets present moment awareness within a participatory universe, a new operating system for human flourishing emerges."
            </p>
         </div>
         
         {/* Updated Geometric Diagram */}
         <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center my-12">
            <svg viewBox="0 0 400 400" className="w-full h-full text-white opacity-90">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Circle 1: Frankl */}
              <circle cx="200" cy="130" r="90" fill="none" stroke="#D4AF37" strokeWidth="1" className="opacity-40" />
              <text x="200" y="80" textAnchor="middle" className="text-xs uppercase tracking-widest fill-[#D4AF37]" style={{fontFamily: 'JetBrains Mono', fontSize: '10px'}}>Frankl</text>
              <text x="200" y="95" textAnchor="middle" className="text-[9px] uppercase tracking-wide fill-gray-400" style={{fontFamily: 'JetBrains Mono', fontSize: '8px'}}>Meaning</text>
              
              {/* Circle 2: Tolle */}
              <circle cx="120" cy="270" r="90" fill="none" stroke="#D4AF37" strokeWidth="1" className="opacity-40" />
              <text x="80" y="320" textAnchor="middle" className="text-xs uppercase tracking-widest fill-[#D4AF37]" style={{fontFamily: 'JetBrains Mono', fontSize: '10px'}}>Tolle</text>
              <text x="80" y="335" textAnchor="middle" className="text-[9px] uppercase tracking-wide fill-gray-400" style={{fontFamily: 'JetBrains Mono', fontSize: '8px'}}>Presence</text>

              {/* Circle 3: Panpsychism */}
              <circle cx="280" cy="270" r="90" fill="none" stroke="#D4AF37" strokeWidth="1" className="opacity-40" />
              <text x="320" y="320" textAnchor="middle" className="text-xs uppercase tracking-widest fill-[#D4AF37]" style={{fontFamily: 'JetBrains Mono', fontSize: '10px'}}>Panpsychism</text>
              <text x="320" y="335" textAnchor="middle" className="text-[9px] uppercase tracking-wide fill-gray-400" style={{fontFamily: 'JetBrains Mono', fontSize: '8px'}}>Connection</text>

              {/* Center */}
              <circle cx="200" cy="225" r="30" fill="#B48E55" className="opacity-20 animate-pulse" />
              <text x="200" y="230" textAnchor="middle" className="text-sm font-bold fill-white" style={{fontFamily: 'Cinzel'}}>v0.9</text>
            </svg>
         </div>

         <div className="max-w-4xl mx-auto text-center mt-12 px-6">
            <h3 className="font-display text-2xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-[#FDE68A] to-gray-100 leading-relaxed">
              Together they form a coherent worldview: You are interconnected consciousness discovering meaning through present-moment response to life's call.
            </h3>
         </div>
      </Section>

      {/* 8. INVITATION */}
      <Section id="invitation" className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl text-gray-900 mb-6">The Invitation</h2>
            <p className="font-body text-gray-600 text-lg mb-6">
              This is not just theory. It is a framework for New Earth emergence.
            </p>
            <div className="space-y-4 font-mono text-sm text-gray-500">
               <div className="flex items-center gap-3">
                 <div className="w-1 h-1 bg-[#B48E55] rounded-full"></div>
                 <span>Clarity on purpose and direction</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-1 h-1 bg-[#B48E55] rounded-full"></div>
                 <span>Liberation from ego patterns</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-1 h-1 bg-[#B48E55] rounded-full"></div>
                 <span>Shift from extraction to mutual flourishing</span>
               </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-[#B48E55] transform rotate-3 opacity-10 rounded-lg"></div>
             <div className="bg-[#F9FAFB] p-8 rounded-lg relative border border-gray-100">
               <h4 className="font-display text-lg mb-4 text-[#B48E55]">Authentic Voice</h4>
               <p className="italic text-gray-600">
                 "This is Brandon's voice, Brandon's journey, Brandon's worldview finding expression. Not borrowed philosophy—discovered philosophy. Not theoretical—lived."
               </p>
             </div>
          </div>
        </div>
      </Section>

      {/* 9. THE CORE MESSAGE (FINALE) */}
      <Section id="core" className="bg-[#020617] min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B48E55] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl px-4">
          <p className="font-display text-2xl md:text-4xl text-gray-300 mb-12 leading-tight">
            Life doesn't ask you what meaning is—<br/>
            <span className="text-white">it questions you.</span>
          </p>

          <div className="space-y-6 font-display text-lg md:text-xl text-[#B48E55] opacity-80 mb-16">
            <p>You answer through responsibility, presence, service.</p>
            <p>Purpose emerges in response to life's call.</p>
            <p>Elevate awareness. Dissolve ego. Serve beyond self.</p>
          </div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B48E55] via-[#FDE68A] to-[#B48E55] mb-8 animate-pulse shadow-lg tracking-tight">
            TRANSMUTE
          </h2>
          
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-12">
            Rather than Transform
          </p>

          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent mx-auto mb-12"></div>

          <p className="font-display text-xl md:text-2xl text-white italic">
            For the New Earth.
          </p>
        </div>
      </Section>

      <footer className="bg-[#020617] py-8 text-center border-t border-gray-900">
        <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
          Life Philosophy v0.9 • 2024-2025
        </p>
      </footer>
    </div>
  );
}
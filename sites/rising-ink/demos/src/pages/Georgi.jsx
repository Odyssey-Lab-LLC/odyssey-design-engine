import React, { useState, useEffect, useRef } from 'react';
import { Camera, Mail, Instagram, ArrowRight, X, Menu, Flame, Anchor, Heart } from 'lucide-react';

const EclipseStudio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle scroll for navbar changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle parallax/mouse movement effect for the "energy" elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans selection:bg-[#d4af37] selection:text-black overflow-x-hidden">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md py-4 border-b border-[#ffffff05]' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif tracking-widest font-bold text-[#d4af37]">
            G. ABUSLEME
          </div>
          <div className="hidden md:flex space-x-12 text-sm tracking-[0.2em] uppercase text-gray-400">
            <a href="#work" className="hover:text-[#d4af37] transition-colors duration-300">Work</a>
            <a href="#philosophy" className="hover:text-[#d4af37] transition-colors duration-300">Philosophy</a>
            <a href="#contact" className="hover:text-[#d4af37] transition-colors duration-300">Booking</a>
          </div>
          <button className="md:hidden text-[#d4af37]">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* HERO SECTION: The Eclipse */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* The Solar Eclipse Animation Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {/* Corona/Boiling Ring */}
          <div 
            className="w-[40vmax] h-[40vmax] rounded-full absolute blur-[60px] opacity-60 animate-pulse-slow"
            style={{ 
              background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(204,85,0,0.1) 40%, transparent 70%)',
              transform: `translate(${mousePos.x * -2}px, ${mousePos.y * -2}px)`
            }}
          ></div>
          
          {/* The Sun/Gold Core - "Boiling" Effect */}
          <div className="w-[30vmax] h-[30vmax] rounded-full absolute mix-blend-screen opacity-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#cc5500] via-[#d4af37] to-transparent animate-spin-slow blur-[40px]"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-[#cc5500] via-[#d4af37] to-transparent animate-reverse-spin blur-[40px]"></div>
          </div>

          {/* The Eclipse (Dark Disc) covering the light */}
          <div 
            className="w-[28vmax] h-[28vmax] bg-[#050505] rounded-full absolute z-10 shadow-2xl"
            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <p className="text-[#d4af37] text-sm md:text-base tracking-[0.4em] mb-6 uppercase animate-fade-in-up">
            Oslo, Norway
          </p>
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-[#e5e5e5] to-[#555] animate-fade-in-up delay-100">
            TRANSMUTE<br/>THE FLESH
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-lg mx-auto mb-12 animate-fade-in-up delay-200 leading-relaxed">
            Traditional techniques. Neo-traditional vision. <br/>
            Creating windows to the soul through ink and pain.
          </p>
          
          <div className="animate-fade-in-up delay-300">
            <button className="group relative px-8 py-4 bg-transparent border border-[#d4af37]/30 overflow-hidden transition-all duration-300 hover:border-[#d4af37]">
              <div className="absolute inset-0 w-0 bg-[#d4af37] transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative text-[#d4af37] tracking-[0.2em] text-sm uppercase flex items-center gap-4">
                Enter The Portal <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce-slow">
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
        </div>
      </section>

      {/* SECTION 2: THE PORTAL / PHILOSOPHY */}
      <section id="philosophy" className="relative py-32 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* The Archway Image Container */}
          <div className="relative order-2 md:order-1 h-[600px] w-full flex justify-center items-center group">
            {/* The Arch Shape Mask */}
            <div className="relative w-full max-w-md h-full overflow-hidden rounded-t-[200px] border border-[#d4af37]/20 bg-[#0a0a0a]">
              
              {/* Inner "Magma" or "Nebula" animation representing the creative chaos */}
              <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                 <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#cc5500] via-[#3a1c05] to-[#000] animate-spin-veryslow blur-3xl"></div>
              </div>
              
              {/* Silhouette Placeholder - mimicking the skeleton/window vibe */}
              <div className="absolute inset-0 flex items-end justify-center pb-20 grayscale contrast-125 mix-blend-lighten">
                {/* Abstract shape representing figure */}
                <div className="w-32 h-64 bg-black/80 blur-xl"></div>
              </div>
              
              {/* Overlay Text */}
              <div className="absolute bottom-10 left-0 w-full text-center">
                <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase">The Ritual</span>
              </div>
            </div>

            {/* Decorative Lines */}
            <div className="absolute -z-10 w-[120%] h-[1px] bg-[#d4af37]/20 top-1/2 left-[-10%]"></div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-8 relative">
            <h2 className="text-4xl md:text-5xl font-serif text-[#e5e5e5]">
              Ink is a <span className="text-[#d4af37] italic">Threshold</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#d4af37]"></div>
            <p className="text-gray-400 leading-8 text-lg font-light">
              I don't just put pigment in skin. I create a passage. Whether it's the 
              dark flow of Japanese waves or the stark contrast of neo-traditional bones, 
              we are marking a moment of change.
            </p>
            <p className="text-gray-400 leading-8 text-lg font-light">
              Based in Oslo, but carrying the heat of Chile. My work explores the duality 
              of darkness and light, life and death. I look for clients who are ready to 
              own their transformation.
            </p>
            
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37]/80 border border-[#d4af37]/20 px-4 py-2 rounded-full">
                <Anchor size={12} /> Traditional
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37]/80 border border-[#d4af37]/20 px-4 py-2 rounded-full">
                <Flame size={12} /> Neo-Trad
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37]/80 border border-[#d4af37]/20 px-4 py-2 rounded-full">
                <Heart size={12} /> Japanese
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: WORK GRID (Dark Fluidity) */}
      <section id="work" className="py-24 bg-[#080808] border-t border-[#ffffff05]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase block mb-2">Selected Works</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white">The Artifacts</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-colors">
              View All Archive <ArrowRight size={14} />
            </a>
          </div>

          {/* Masonry-ish Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Project 1 - The Wave Vibe */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-[#111] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
              {/* Placeholder for Art */}
              <div className="w-full h-full bg-[#151515] group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                 {/* Abstract representation of a wave */}
                 <svg viewBox="0 0 100 100" className="w-1/2 opacity-20 stroke-[#556] stroke-2 fill-none">
                    <path d="M0,50 Q25,30 50,50 T100,50" />
                    <path d="M0,60 Q25,40 50,60 T100,60" />
                    <path d="M0,70 Q25,50 50,70 T100,70" />
                 </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif text-[#e5e5e5]">Abyssal Dragon</h3>
                <p className="text-[#d4af37] text-xs tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Full Back • 40 Hours</p>
              </div>
            </div>

            {/* Project 2 - The Skeleton/Gold Vibe */}
            <div className="group relative aspect-[3/4] md:translate-y-12 overflow-hidden bg-[#111] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
              <div className="w-full h-full bg-[#1a1a1a] group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                 {/* Abstract representation of skull */}
                 <div className="w-24 h-32 border border-[#d4af37]/30 rounded-t-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full shadow-[0_0_15px_#d4af37]"></div>
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif text-[#e5e5e5]">The Gilded Saint</h3>
                <p className="text-[#d4af37] text-xs tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Forearm • Neo-Trad</p>
              </div>
            </div>

            {/* Project 3 - The Cosmic Vibe */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-[#111] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
              <div className="w-full h-full bg-[#151515] group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                {/* Abstract representation of stars */}
                <div className="w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-serif text-[#e5e5e5]">Nebula Sleeve</h3>
                <p className="text-[#d4af37] text-xs tracking-widest uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Full Arm • Color</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT & BARTER (The Human Element) */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Subtle Wave Background Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-radial-gradient( circle at 0 0, transparent 0, #000 10px ), repeating-linear-gradient( #22252C, #22252C )` }}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 border border-[#d4af37] rounded-full flex items-center justify-center text-[#d4af37]">
                <Mail size={24} />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Open Dialogue</h2>
            
            <p className="text-gray-400 text-lg font-light mb-12">
              Currently booking for Fall/Winter in Oslo. <br/>
              I prioritize large-scale concepts that speak to transformation.
            </p>

            <div className="p-8 border border-[#333] bg-[#111]/50 backdrop-blur-sm mb-12">
              <h3 className="text-[#d4af37] uppercase tracking-widest text-xs mb-4">The Exchange</h3>
              <p className="text-gray-400 italic font-serif">
                "I am a craftsman first. While currency is standard, I am open to honest trade. 
                Gold, services, or goods of equal spirit are considered for the right project."
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-[#d4af37] text-black px-10 py-4 font-bold tracking-[0.2em] uppercase hover:bg-[#b59226] transition-colors">
                Submit Proposal
              </button>
              <button className="border border-gray-600 text-gray-400 px-10 py-4 font-bold tracking-[0.2em] uppercase hover:border-white hover:text-white transition-colors flex items-center justify-center gap-3">
                <Instagram size={18} /> @Georgi_Ink
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#ffffff05] text-center">
        <p className="text-gray-600 text-xs tracking-[0.2em] uppercase">
          © {new Date().getFullYear()} Georgi Abusleme • Oslo, Norway
        </p>
      </footer>
      
      {/* CSS for custom animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes spin-veryslow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 25s linear infinite;
        }
        .animate-spin-veryslow {
          animation: spin-veryslow 60s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default EclipseStudio;
import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu } from 'lucide-react';

// --- Components ---

const BackgroundPattern = () => {
  // Recreating the "messy" Figma groups as a structured, high-end geometric pattern.
  // The CSS dump implies a grid of rotated elements. We'll generate this programmatically 
  // to ensure perfect alignment and "awesome" visual rhythm.
  
  const gridSize = 8; // Density of the pattern
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Container for the rotated grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-[0.05] rotate-12">
        <div className="flex flex-wrap justify-center content-center w-full h-full gap-16">
          {Array.from({ length: 60 }).map((_, i) => (
            <div 
              key={i} 
              className="w-32 h-32 border-[3px] border-[#1A1A1A] rotate-45 flex items-center justify-center transform transition-transform duration-[20s] ease-in-out hover:rotate-90"
            >
              <div className="w-20 h-20 border-[2px] border-[#1A1A1A] rotate-90" />
            </div>
          ))}
        </div>
      </div>
      
      {/* The "Group 284" large overlay element from the CSS dump - likely a watermark */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] border-[2px] border-[#333333] opacity-[0.03] rounded-full rotate-[30deg] pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[780px] h-[780px] border-[1px] border-[#333333] opacity-[0.02] rounded-full rotate-[60deg] pointer-events-none" />

      {/* Side decorative lines */}
      <div className="absolute top-0 bottom-0 left-8 md:left-24 w-px bg-[#1A1A1A] opacity-10 hidden md:block"></div>
      <div className="absolute top-0 bottom-0 right-8 md:right-24 w-px bg-[#1A1A1A] opacity-10 hidden md:block"></div>
    </div>
  );
};

const Navbar = () => (
  <nav className="relative z-50 w-full px-6 py-8 flex justify-between items-center max-w-[1455px] mx-auto">
    {/* Left: Menu Trigger (Styled as the 'Group' from CSS dump) */}
    <div className="group flex flex-col justify-center gap-2 cursor-pointer w-12 h-12 hover:opacity-70 transition-opacity">
      <div className="w-8 h-0.5 bg-[#1A1A1A] self-start transition-all duration-300 group-hover:w-full"></div>
      <div className="w-full h-0.5 bg-[#1A1A1A]"></div>
      <div className="w-6 h-0.5 bg-[#1A1A1A] self-end transition-all duration-300 group-hover:w-full"></div>
    </div>

    {/* Right: Contact Button (High fidelity match to 'Frame 1618873132') */}
    <button className="group flex items-center justify-between pl-6 pr-1.5 py-1.5 bg-[#000000] rounded-full hover:bg-[#1A1A1A] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95">
      <span className="text-white font-display uppercase tracking-widest text-xs font-bold mr-4">Contact Us</span>
      <div className="w-10 h-10 bg-[#C1272D] rounded-full flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
        <ArrowRight className="text-white w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
      </div>
    </button>
  </nav>
);

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#ECE9E2] text-[#1A1A1A] overflow-hidden selection:bg-[#C1272D] selection:text-white">
      {/* Font Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@800;900&family=Rouge+Script&family=Manrope:wght@400;600&display=swap');
        
        /* 'Kanit' 900 is our Lemon Milk substitute (Geometric Sans) */
        .font-display { font-family: 'Kanit', sans-serif; }
        .font-script { font-family: 'Rouge Script', cursive; }
        .font-body { font-family: 'Manrope', sans-serif; }
        
        .text-stroke-title {
           -webkit-text-stroke: 2px #1A1A1A; /* Fallback if we wanted outlined text */
        }
      `}</style>

      <BackgroundPattern />
      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] w-full max-w-[1455px] mx-auto px-4">
        
        {/* Top Label */}
        <div className="mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="font-display font-bold text-[#1A1A1A] text-xs md:text-sm tracking-[0.25em] uppercase text-center relative">
            <span className="hidden md:inline-block w-8 h-[2px] bg-[#C1272D] align-middle mr-4"></span>
            Tattoo Marketing Agency for High-End Artists & Studios
            <span className="hidden md:inline-block w-8 h-[2px] bg-[#C1272D] align-middle ml-4"></span>
          </h2>
        </div>

        {/* Main Hero Composition */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          
          {/* The "Secret" Script Layer 
              Positioned exactly as "Group 283" implies - interwoven 
          */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full pointer-events-none select-none mix-blend-multiply">
            <span className="font-script text-[#C1272D] text-[25vw] md:text-[320px] leading-none opacity-90 block transform -rotate-[8deg] translate-y-[-10%] translate-x-[5%] whitespace-nowrap">
              Secret
            </span>
          </div>

          {/* Main Headline 
              Using flex-col to stack the words as shown in layout 
          */}
          <div className="relative z-10 flex flex-col items-center leading-[0.85] tracking-tighter mix-blend-hard-light">
            <h1 className="font-display font-black text-[#1A1A1A] text-[13vw] md:text-[140px] uppercase drop-shadow-sm">
              Your Weapon
            </h1>
            <h1 className="font-display font-black text-[#1A1A1A] text-[13vw] md:text-[140px] uppercase drop-shadow-sm">
              For Client
            </h1>
            <h1 className="font-display font-black text-[#1A1A1A] text-[13vw] md:text-[140px] uppercase drop-shadow-sm">
              Growth
            </h1>
          </div>

        </div>

        {/* Decorative "Vector" Lines from CSS dump */}
        <div className="absolute top-[20%] left-0 w-full h-px bg-[#1A1A1A] opacity-[0.05]"></div>
        <div className="absolute bottom-[20%] left-0 w-full h-px bg-[#1A1A1A] opacity-[0.05]"></div>

      </main>
      
      {/* Bottom fade for smooth integration if scrolled */}
      <div className="fixed bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#ECE9E2] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default App;
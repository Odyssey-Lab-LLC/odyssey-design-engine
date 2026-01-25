import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu } from 'lucide-react';

// --- Components ---

const BackgroundPattern = () => {
  // Keeping the high-fidelity geometric pattern but pushing it fully to the back
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
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
      
      {/* Large overlay watermarks */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] border-[2px] border-[#333333] opacity-[0.03] rounded-full rotate-[30deg] pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[780px] h-[780px] border-[1px] border-[#333333] opacity-[0.02] rounded-full rotate-[60deg] pointer-events-none" />

      {/* Side decorative lines */}
      <div className="absolute top-0 bottom-0 left-8 md:left-24 w-px bg-[#1A1A1A] opacity-10 hidden md:block"></div>
      <div className="absolute top-0 bottom-0 right-8 md:right-24 w-px bg-[#1A1A1A] opacity-10 hidden md:block"></div>
    </div>
  );
};

const Logo = () => (
  <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
    <div className="w-16 h-16 bg-[#C1272D] rounded-full flex items-center justify-center shadow-xl">
      {/* Abstract icon derived from CSS dump 'Group 293' */}
      <div className="w-8 h-8 border-2 border-[#ECE9E2] rounded-full flex items-center justify-center">
         <div className="w-1 h-1 bg-[#ECE9E2] rounded-full" />
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#ECE9E2] text-[#1A1A1A] overflow-hidden selection:bg-[#C1272D] selection:text-white font-sans">
      {/* Font Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@800;900&family=Rouge+Script&family=Manrope:wght@400;600&display=swap');
        
        /* 'Kanit' 900 is our Lemon Milk substitute (Geometric Sans) */
        .font-display { font-family: 'Kanit', sans-serif; }
        .font-script { font-family: 'Rouge Script', cursive; }
        .font-body { font-family: 'Manrope', sans-serif; }
      `}</style>

      <BackgroundPattern />
      <Logo />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[100vh] w-full max-w-[1455px] mx-auto px-4 pt-20">
        
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
          
          {/* Main Headline Group */}
          <div className="relative z-10 flex flex-col items-center leading-[0.85] tracking-tighter">
            
            {/* Line 1: YOUR */}
            <h1 className="font-display font-black text-[#1A1A1A] text-[12vw] md:text-[130px] uppercase drop-shadow-sm z-10">
              Your
            </h1>

            {/* Line 2: Secret (Script) 
                Now inserted structurally between 'Your' and 'Weapon'.
                We use negative margins to pull the lines together so it looks interwoven/stamped.
            */}
            <div className="relative z-20 -my-2 md:-my-8 transform -rotate-3 scale-110">
              <span className="font-script text-[#C1272D] text-[18vw] md:text-[200px] leading-none block drop-shadow-md">
                Secret
              </span>
            </div>

            {/* Line 3: WEAPON */}
            <h1 className="font-display font-black text-[#1A1A1A] text-[12vw] md:text-[130px] uppercase drop-shadow-sm z-10">
              Weapon
            </h1>
            
            {/* Line 4: FOR CLIENT (Margin top added to separate from 'Weapon') */}
             <h1 className="font-display font-black text-[#1A1A1A] text-[12vw] md:text-[130px] uppercase drop-shadow-sm z-10 mt-2 md:mt-4">
              For Client
            </h1>
            
            {/* Line 5: GROWTH */}
            <h1 className="font-display font-black text-[#1A1A1A] text-[12vw] md:text-[130px] uppercase drop-shadow-sm z-10">
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
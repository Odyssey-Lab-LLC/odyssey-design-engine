import React, { useEffect, useRef, useState } from 'react';

const terminalInitLines = [
  '> initializing rising_ink.v2',
  '> mounting sanity_mcp_server',
  '> arr_target: $1,000,000',
  '> status: ready',
];

const scrambleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const ProductVisionIntro = () => {
  const [isDevMode, setIsDevMode] = useState(false);
  const [scrambledText, setScrambledText] = useState('THE INFLECTION POINT');
  const [terminalLines, setTerminalLines] = useState([]);
  const [floatParticles, setFloatParticles] = useState([]);

  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const isDevModeRef = useRef(false);
  const scrambleIntervalRef = useRef(null);
  const questNodeRefs = useRef([]);

  const scrambleText = (finalText) => {
    if (scrambleIntervalRef.current) {
      clearInterval(scrambleIntervalRef.current);
    }

    let iteration = 0;
    scrambleIntervalRef.current = setInterval(() => {
      setScrambledText(
        finalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < Math.floor(iteration)) return finalText[index];
            return scrambleCharacters[Math.floor(Math.random() * scrambleCharacters.length)];
          })
          .join('')
      );

      iteration += 0.6;

      if (iteration >= finalText.length) {
        clearInterval(scrambleIntervalRef.current);
        scrambleIntervalRef.current = null;
        setScrambledText(finalText);
      }
    }, 40);
  };

  const handleModeToggle = () => {
    setIsDevMode((prev) => {
      const next = !prev;
      scrambleText('THE INFLECTION POINT');
      return next;
    });
  };

  useEffect(() => {
    scrambleText('THE INFLECTION POINT');
    return () => {
      if (scrambleIntervalRef.current) {
        clearInterval(scrambleIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    isDevModeRef.current = isDevMode;
  }, [isDevMode]);

  useEffect(() => {
    let index = 0;
    setTerminalLines([]);

    const interval = setInterval(() => {
      setTerminalLines((prev) => {
        if (index >= terminalInitLines.length) return prev;
        const next = [...prev, terminalInitLines[index]];
        index += 1;
        if (index >= terminalInitLines.length) {
          clearInterval(interval);
        }
        return next;
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, index) => ({
      id: index,
      size: Math.random() * 4 + 2,
      posX: Math.random() * 100,
      posY: Math.random() * 100 + 10,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 5,
    }));

    setFloatParticles(newParticles);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        size: Math.random() * 2 + 1,
      }));
    };

    const handleResize = () => initCanvas();
    const handleMouseMove = (event) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    initCanvas();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDev = isDevModeRef.current;

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        let drawX = particle.x;
        let drawY = particle.y;

        if (isDev) {
          drawX = Math.round(particle.x / 40) * 40;
          drawY = Math.round(particle.y / 40) * 40;
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = '#C1272D';
        ctx.fill();

        const { x: mouseX, y: mouseY } = mouseRef.current;
        if (mouseX && mouseY) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(drawX, drawY);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = isDev ? 'rgba(255,51,51,0.2)' : 'rgba(255,51,51,0.05)';
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('translate-y-0', 'opacity-100');
            entry.target.classList.remove('translate-y-10', 'opacity-0');
          }
        });
      },
      { threshold: 0.2 }
    );

    const initNode = (node) => {
      if (!node) return;
      node.classList.add('transition-all', 'duration-700', 'transform', 'translate-y-10', 'opacity-0');
      observer.observe(node);
    };

    questNodeRefs.current.forEach(initNode);

    return () => {
      questNodeRefs.current.forEach((node) => node && observer.unobserve(node));
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=JetBrains+Mono:wght@300;400;700&family=Oswald:wght@400;500;600;700&family=Manrope:wght@300;400;600&family=Inter:wght@400;700;900&display=swap');

        .product-vision-intro {
          --ink-red: #C1272D;
          --terminal-beige: #e6e6e6;
          --void-black: #0a0a0a;
          --grid-color: rgba(193, 39, 45, 0.05);
          --zonai-green: #1AD99E;
          --forge-black: #0a0a0a;
          --map-beige: #F5F3EE;
          --map-border: #D4CDBA;
          --forge-paper: #F5F3EE;
          --forge-green: #10B981;
          --forge-darkgray: #171717;
          background-color: var(--void-black);
          color: var(--forge-paper);
          font-family: 'Manrope', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .product-vision-intro .content-layer {
          position: relative;
          z-index: 10;
        }

        .product-vision-intro .grid-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(193, 39, 45, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(193, 39, 45, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 1;
        }

        .product-vision-intro.dev-mode .grid-overlay {
          background-image: 
            linear-gradient(rgba(193, 39, 45, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(193, 39, 45, 0.15) 1px, transparent 1px);
        }

        canvas#inkCanvas {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 0;
          opacity: 0.6;
        }

        .glitch-text {
          text-transform: uppercase;
          font-family: 'Oswald', sans-serif;
          letter-spacing: -0.05em;
        }

        .product-vision-intro.dev-mode .glitch-text {
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0;
        }

        .glitch-active {
          animation: flicker 0.1s infinite;
        }

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

        .product-vision-intro.dev-mode .scanlines {
          opacity: 1;
        }

        .json-code {
          color: #ff9d00;
          display: none;
        }

        .product-vision-intro.dev-mode .json-code {
          display: block;
        }

        .product-vision-intro.dev-mode .vision-text {
          display: none;
        }

        .breathing-ink {
          background: radial-gradient(circle at center, rgba(193, 39, 45, 0.15) 0%, transparent 70%);
          animation: breathe 8s infinite ease-in-out;
        }

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

        .rune-glow {
          color: #1AD99E;
          text-shadow: 0 0 8px rgba(26, 217, 158, 0.6);
        }

        .quest-line {
          position: absolute;
          left: 2rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: repeating-linear-gradient(to bottom, #D4CDBA 0, #D4CDBA 10px, transparent 10px, transparent 20px);
        }

        [data-theme='dark'] {
          background-color: #0a0a0a;
          color: #fff;
        }

        [data-theme='light'] {
          background-color: #F5F3EE;
          color: #2c2c2c;
          background-image: url('https://www.transparenttextures.com/patterns/aged-paper.png');
        }

        @keyframes flicker {
          0% { opacity: 0.97; }
          5% { opacity: 0.95; }
          10% { opacity: 0.9; }
          15% { opacity: 0.95; }
          100% { opacity: 1; }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }

        @keyframes particleFloat {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-80px); opacity: 0; }
        }

        @keyframes floatNode {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(26, 217, 158, 0.3); }
          50% { box-shadow: 0 0 20px rgba(26, 217, 158, 0.6); }
        }

        @keyframes dashFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -60; }
        }
      `}</style>

      <div className={`product-vision-intro min-h-screen ${isDevMode ? 'dev-mode' : ''}`}>
        <canvas ref={canvasRef} id="inkCanvas" className="fixed top-0 left-0 z-0 opacity-60" />
        <div className="grid-overlay" />
        <div className="scanlines" />

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

        <main className="content-layer">
          <section className="max-w-6xl mx-auto mb-32 px-6 py-24 lg:px-24 relative">
            <div className="absolute inset-0 breathing-ink opacity-60" />
            <div className="absolute inset-0" id="particles-container">
              {floatParticles.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute bg-red-600 opacity-0 rounded-full pointer-events-none"
                  style={{
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    left: `${particle.posX}%`,
                    bottom: `${particle.posY}%`,
                    boxShadow: '0 0 10px #C1272D',
                    animation: `particleFloat ${particle.duration}s ${particle.delay}s infinite ease-out`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <div className="text-red-500 font-mono text-sm mb-4">
                {terminalLines.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>

              <h1 className={`glitch-text text-6xl md:text-9xl font-black leading-none mb-8 ${isDevMode ? 'glitch-active' : ''}`}>
                {scrambledText}
              </h1>

              <p className="text-xl md:text-3xl max-w-2xl text-zinc-400 font-light leading-relaxed">
                <span className="vision-text">
                  Transitioning a high-performance tattoo agency into a unified vertical SaaS platform. Revenue-funded
                  skunkworks.
                </span>
                <span className="json-code font-mono text-lg">
                  {`{ "status": "scaling", "target_arr": "$1.2M", "focus": "vSaaS_Architecture" }`}
                </span>
              </p>
            </div>
          </section>

          <section className="max-w-6xl mx-auto mb-32 px-6 lg:px-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4">Who We Are</p>
                <h2 className="text-4xl font-bold mb-4">The Operators</h2>
                <p className="text-zinc-400 max-w-2xl">
                  Builders who ship with real-world proof. We run the agency, operate in the market, and translate those
                  learnings into product architecture.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bento-card p-8 rounded-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-red-600/10 rounded-full blur-3xl" />
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">Operator 01</p>
                <h3 className="text-2xl font-bold mb-2">Brandon McPeak</h3>
                <p className="text-zinc-400 mb-6">
                  Agency owner. 10+ years in B2B tech + a decade deep in the tattoo industry. Built systems in the market
                  before writing product code.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-red-500">10+ yrs</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Tattoo Industry</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-red-500">$200k</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">ARR Validated</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-red-500">500+</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Prospects</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-red-500">10 yrs</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">B2B Tech</p>
                  </div>
                </div>
              </div>

              <div className="bento-card p-8 rounded-xl relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">Operator 02</p>
                <h3 className="text-2xl font-bold mb-2">Andrew</h3>
                <p className="text-zinc-400 mb-6">
                  Integrator + co-founder. Proven operator who scales businesses, builds teams, and turns systems into
                  repeatable revenue engines.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-emerald-400">Ops</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Integrator</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-emerald-400">Scale</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Execution</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-emerald-400">Systems</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Builder</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-emerald-400">Founder</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="max-w-6xl mx-auto mb-32 px-6 lg:px-24">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-4">What We've Built</p>
                <h2 className="text-4xl font-bold mb-4">HighLevel Ecosystem</h2>
                <p className="text-zinc-400 max-w-2xl">
                  A white-labeled operating system for tattoo artists: websites, ads, bookings, waivers, and client
                  automation in one stack.
                </p>
              </div>
            </div>

            <div className="relative w-full h-[500px] border border-white/10 bg-[#111]/60 rounded-lg overflow-hidden flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                  backgroundSize: '50px 50px',
                }}
              />

              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(193,39,45,0.2)" />
                    <stop offset="50%" stopColor="rgba(193,39,45,0.6)" />
                    <stop offset="100%" stopColor="rgba(193,39,45,0.2)" />
                  </linearGradient>
                </defs>
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="url(#lineGradient)" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="12%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" />
              </svg>

              <div
                className="relative z-10 flex flex-col items-center justify-center w-24 h-24 rounded-full border border-red-500/60 bg-black/70 text-red-400 text-xl font-bold"
                style={{ animation: 'pulseGlow 3s ease-in-out infinite' }}
              >
                <span className="text-xs tracking-[0.3em]">CORE</span>
                <span>HL</span>
              </div>

              {[
                { label: 'Waivers', pos: 'top-[20%] left-[20%]', icon: '📄' },
                { label: 'Phones', pos: 'top-[20%] left-[80%]', icon: '📞' },
                { label: 'Bookings', pos: 'top-[80%] left-[25%]', icon: '📅' },
                { label: 'Aftercare', pos: 'top-[80%] left-[75%]', icon: '💚' },
                { label: 'Ads', pos: 'top-[15%] left-[50%]', icon: '📣' },
                { label: 'Websites', pos: 'top-[50%] left-[12%]', icon: '🖥️' },
              ].map((node, index) => (
                <div
                  key={node.label}
                  className={`absolute ${node.pos} w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/70 text-xs uppercase tracking-widest text-zinc-300 flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:border-red-400 hover:text-red-300`}
                  style={{ animation: `floatNode 4s ease-in-out ${index * 0.3}s infinite` }}
                >
                  <span className="text-lg">{node.icon}</span>
                  <span>{node.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="py-32 px-6 lg:px-24">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                <div>
                  <h2 className="text-4xl font-bold mb-3">THE ARCHITECTURE</h2>
                  <p className="text-zinc-400">Project: Elvis // Technical Calibration</p>
                </div>
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">Tech Forge</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="group relative border border-white/10 rounded-2xl bg-[#111]/60 p-8 overflow-hidden transition-all duration-300 hover:border-red-500/40">
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.3em] bg-red-500/10 border border-red-500/40 text-red-400 px-3 py-1 rounded-full">
                    MCP ACTIVE
                  </span>
                  <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">[[ BACKEND_MANIFEST ]]</p>
                  <h3 className="text-3xl font-bold mb-2">Sanity</h3>
                  <div className="relative min-h-[120px]">
                    <p className="text-zinc-400 text-lg transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                      Structured Content
                    </p>
                    <p className="absolute inset-0 text-sm text-zinc-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      AI/MCP-enabled headless CMS for Elvis. Schema-driven relational portfolios; Strapi is the white-label
                      alternative when we need self-hosted branding.
                    </p>
                  </div>
                  <span className="absolute -bottom-6 -right-2 text-[160px] font-bold text-white/5">S</span>
                </div>

                <div className="group relative border border-white/10 rounded-2xl bg-[#111]/60 p-8 overflow-hidden transition-all duration-300 hover:border-white/30">
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.3em] bg-white/10 border border-white/30 text-white/80 px-3 py-1 rounded-full">
                    VISUAL BUILDER
                  </span>
                  <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">[[ UI_FABRICATION ]]</p>
                  <h3 className="text-3xl font-bold mb-2">Plasmic</h3>
                  <div className="relative min-h-[120px]">
                    <p className="text-zinc-400 text-lg transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                      Front-End Builder
                    </p>
                    <p className="absolute inset-0 text-sm text-zinc-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      White-label platform API + visual builder. Non-devs can assemble pages from locked components while
                      we preserve system integrity and ship fast templates.
                    </p>
                  </div>
                  <span className="absolute -bottom-6 -right-2 text-[160px] font-bold text-white/5">P</span>
                </div>

                <div className="group relative border border-white/10 rounded-2xl bg-[#111]/60 p-8 overflow-hidden transition-all duration-300 hover:border-emerald-400/40">
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.3em] bg-emerald-500/10 border border-emerald-400/40 text-emerald-300 px-3 py-1 rounded-full">
                    ZERO JS
                  </span>
                  <p className="text-xs uppercase tracking-[0.3em] text-red-400 mb-4">[[ CORE_RUNTIME ]]</p>
                  <h3 className="text-3xl font-bold mb-2">Astro</h3>
                  <div className="relative min-h-[120px]">
                    <p className="text-zinc-400 text-lg transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                      Performance Engine
                    </p>
                    <p className="absolute inset-0 text-sm text-zinc-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Zero-JS baseline with islands where needed. Decoupled design systems for peak Lighthouse performance
                      and fast iteration.
                    </p>
                  </div>
                  <span className="absolute -bottom-6 -right-2 text-[160px] font-bold text-white/5">A</span>
                </div>
              </div>

              <div className="border border-white/10 bg-[#111]/60 rounded-2xl p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">Elvis Prototype UI</p>
                    <h3 className="text-2xl font-bold">Filterable Portfolio Grid</h3>
                  </div>
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Relational Styles</span>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {['All', 'Blackwork', 'Fine Line', 'Japanese', 'Neo-Trad', 'Script'].map((filter, index) => (
                    <button
                      key={filter}
                      className={`text-xs uppercase tracking-[0.3em] px-4 py-2 rounded-full border transition-all ${
                        index === 0
                          ? 'border-red-500 text-red-300 bg-red-500/10'
                          : 'border-white/20 text-zinc-400 hover:border-red-400 hover:text-red-300'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Geometric Blackwork', style: 'Blackwork' },
                    { title: 'Neo-Trad Rose', style: 'Neo-Trad' },
                    { title: 'Fine Line Script', style: 'Script' },
                    { title: 'Japanese Wave', style: 'Japanese' },
                    { title: 'Minimal Floral', style: 'Fine Line' },
                    { title: 'Sacred Symbols', style: 'Blackwork' },
                  ].map((card) => (
                    <div key={card.title} className="bg-black/50 border border-white/10 rounded-xl overflow-hidden">
                      <div className="h-28 bg-gradient-to-br from-zinc-900 to-zinc-800" />
                      <div className="p-4">
                        <p className="text-sm font-semibold mb-2">{card.title}</p>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">{card.style}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-12">
                <div className="bento-card p-8 rounded-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">UI Layer</p>
                  <h3 className="text-2xl font-bold mb-3">Untitled UI</h3>
                  <p className="text-zinc-400">
                    Deep Figma + React component foundation. We reskin tokens, then extend with custom flows and sections.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {['Figma System', 'React Library', 'Token Overrides'].map((item) => (
                      <span
                        key={item}
                        className="text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full border border-white/10 text-zinc-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bento-card lg:col-span-3 p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">The Test Case: Elvis</p>
                    <h3 className="text-3xl font-bold mb-4">PROJECT ELVIS</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      A 30-43 hour build estimate to prove the stack. Dynamic relational portfolio, auto-filtered by style,
                      managed via AI-first CLI.
                    </p>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-red-500">30h</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Min Build</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-red-500">40+</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Sanity Tools</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-red-500">90%</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Figma Prototype</p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-bold text-red-500">15pt</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Readiness Checklist</p>
                    </div>
                    <div className="col-span-2">
                      <pre className="json-code font-mono text-xs bg-black/40 p-4 rounded-lg">
{`"sprint_duration": "43h",
"figma_readiness": "15_point_checklist",
"complexity": "Relational_DB"`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section data-theme="light" className="py-32 px-6 lg:px-24">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">The Path of Mastery</h2>
              <p className="text-lg italic mb-12 text-zinc-600">
                “We don't guess. We build niche agencies, get paid to learn the market, and A/B test solutions with real
                clients before we write a single line of product code.”
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="zelda-border p-6 rounded-lg">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">Stage 01</p>
                  <h3 className="text-2xl font-semibold mb-3">Service as R&D</h3>
                  <p>
                    Most SaaS startups raise capital and hope for fit. We build an agency that does $200k+ in revenue
                    first. Our customers fund the product development.
                  </p>
                </div>
                <div className="zelda-border p-6 rounded-lg">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">Stage 02</p>
                  <h3 className="text-2xl font-semibold mb-3">The Tattoo Moat</h3>
                  <p>
                    10 years deep in the industry. We've identified 500+ prospects and a channel partner (Kiwi Diamond)
                    with access to 500+ studios.
                  </p>
                </div>
                <div className="zelda-border p-6 rounded-lg">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">Stage 03</p>
                  <h3 className="text-2xl font-semibold mb-3">Solo Artist Focus</h3>
                  <p>
                    Artists are moving to private studios. They charge $1k-$3k per day. They are the decision-makers. We
                    sell them the operating system.
                  </p>
                </div>
                <div className="zelda-border p-6 rounded-lg">
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-2">Stage 04</p>
                  <h3 className="text-2xl font-semibold mb-3">Vertical Extraction</h3>
                  <p>
                    Once the solo artist product is proven, we sell the agency business to keep the codebase and scale the
                    platform across the industry.
                  </p>
                </div>
              </div>

              <div className="mt-16">
                <div className="w-full bg-[#111]/60 border border-white/10 rounded-lg p-8 md:p-12 overflow-x-auto">
                  <div className="relative min-w-[800px] h-[200px] flex items-center justify-between px-12">
                    <div className="absolute left-12 right-12 top-1/2 h-[3px] bg-[#0a0a0a] rounded-full opacity-80" />
                    <svg className="absolute left-12 right-12 top-1/2" height="6" width="100%">
                      <line
                        x1="0"
                        y1="3"
                        x2="100%"
                        y2="3"
                        stroke="#10B981"
                        strokeWidth="2"
                        strokeDasharray="10 20"
                        style={{ animation: 'dashFlow 3s linear infinite', opacity: 0.6 }}
                      />
                    </svg>

                    {[
                      { label: 'INPUT', title: 'Niche Agency', subtitle: 'Market Intel', icon: '🏛️' },
                      { label: 'PROCESSING', title: 'Paid R&D', subtitle: 'Client Funded', icon: '🔥' },
                      { label: 'OUTPUT', title: '$1M ARR', subtitle: 'Service Rev', icon: '💰', highlight: true },
                      { label: 'RESULT', title: 'Platform', subtitle: 'Extract IP', icon: '💎', light: true },
                    ].map((step) => (
                      <div
                        key={step.label}
                        className={`w-24 h-24 rounded-xl border text-center flex flex-col items-center justify-center gap-1 transition-all duration-300 hover:-translate-y-2 ${
                          step.highlight
                            ? 'border-emerald-400 text-emerald-300 bg-black/70'
                            : step.light
                              ? 'border-zinc-300 bg-[#F5F3EE] text-zinc-800'
                              : 'border-white/20 text-zinc-200 bg-black/70'
                        }`}
                      >
                        <span className="text-2xl">{step.icon}</span>
                        <span className="text-[10px] font-mono tracking-widest">{step.label}</span>
                        <span className="text-sm font-semibold">{step.title}</span>
                        <span className="text-[10px] font-mono">{step.subtitle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-32 px-6 lg:px-24">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-end gap-4 mb-12">
                <span className="text-5xl text-red-500 font-bold">IV.</span>
                <div>
                  <h2 className="text-4xl font-bold">THE QUEST LOG</h2>
                  <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs">System Milestones & Commit History</p>
                </div>
              </div>

              <div className="border border-white/10 bg-[#111]/60 rounded-2xl p-8 relative">
                <div className="absolute top-8 bottom-8 left-[36px] w-px bg-white/10" />

                <div className="space-y-8 relative z-10">
                  {[
                    {
                      status: 'VERIFIED',
                      title: 'Agency Scale (Q1)',
                      commit: 'COMMIT: b4a1c2... [2025]',
                      description:
                        'Established core tattoo artist service model at $200k ARR. Systems validated by real clients.',
                      color: 'text-emerald-300',
                      border: 'border-emerald-500/40',
                      badge: 'bg-emerald-500/10 text-emerald-300',
                      icon: '✓',
                    },
                    {
                      status: 'IN PROGRESS',
                      title: 'Elvis Pilot (Summer)',
                      commit: 'COMMIT: CURRENT_HEAD [ACTIVE]',
                      description:
                        'Executing modern tech-stack build (Sanity/Plasmic). Social media automation integration & styling.',
                      color: 'text-red-300',
                      border: 'border-red-500/40',
                      badge: 'bg-red-500/10 text-red-300',
                      icon: '•',
                      pulse: true,
                    },
                    {
                      status: 'LOCKED',
                      title: 'Platform Launch',
                      commit: 'COMMIT: ??? [LOCKED]',
                      description: 'Requires: $1M ARR achievement to unlock repository.',
                      color: 'text-zinc-500',
                      border: 'border-dashed border-white/10',
                      badge: 'bg-white/5 text-zinc-500',
                      icon: '🔒',
                      locked: true,
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      ref={(el) => {
                        questNodeRefs.current[index] = el;
                      }}
                      className={`flex items-start gap-6 ${item.locked ? 'opacity-60 grayscale hover:grayscale-0 transition-all' : ''}`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm ${
                          item.pulse ? 'animate-pulse' : ''
                        } ${item.color}`}
                      >
                        {item.icon}
                      </div>
                      <div className={`flex-1 bg-black/50 border ${item.border} rounded-xl p-6`}>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
                          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">{item.commit}</span>
                          <span className={`text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full ${item.badge}`}>
                            {item.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-zinc-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-6 lg:px-24">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">READY TO COMMIT?</h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center mb-6">
                <button className="px-8 py-4 bg-zinc-900 text-white uppercase tracking-widest text-sm">
                  &gt; RUN_ELVIS_TEST
                </button>
                <button className="px-8 py-4 bg-red-600 text-white uppercase tracking-widest text-sm shadow-[0_0_25px_rgba(193,39,45,0.4)]">
                  $ GIT_INIT_PARTNERSHIP
                </button>
              </div>
              <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
                v2.0.5_STABLE // NO_VC_CAPITAL_REQUIRED // REVENUE_DRIVEN
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProductVisionIntro;

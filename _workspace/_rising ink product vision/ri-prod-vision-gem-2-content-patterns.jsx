<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rising Ink | The Elemental Forge</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=Manrope:wght@300;400;600&family=JetBrains+Mono:wght@400;700&family=Oswald:wght@500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --ink-red: #C1272D;
            --zonai-green: #1AD99E;
            --forge-black: #0a0a0a;
            --map-beige: #F5F3EE;
            --map-border: #D4CDBA;
        }

        body {
            font-family: 'Manrope', sans-serif;
            background-color: var(--forge-black);
            color: white;
            scroll-behavior: smooth;
        }

        h1, h2, h3 {
            font-family: 'Oswald', sans-serif;
            letter-spacing: 0.02em;
        }

        .mythic-font {
            font-family: 'Cinzel', serif;
        }

        /* Dark Theme Section */
        [data-theme="dark"] {
            background-color: var(--forge-black);
            color: #fff;
        }

        /* Light Theme Section (Zelda Map Style) */
        [data-theme="light"] {
            background-color: var(--map-beige);
            color: #2c2c2c;
            background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
        }

        /* Demon Slayer Breathing Ink Effect */
        .breathing-ink {
            background: radial-gradient(circle at center, rgba(193, 39, 45, 0.15) 0%, transparent 70%);
            animation: breathe 8s infinite ease-in-out;
        }

        @keyframes breathe {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.9; }
        }

        /* Zelda Style UI Borders */
        .zelda-border {
            border: 2px solid var(--map-border);
            position: relative;
            background: rgba(255, 255, 255, 0.4);
        }

        .zelda-border::before {
            content: '';
            position: absolute;
            top: -6px; left: -6px; width: 12px; height: 12px;
            background: var(--map-border);
            transform: rotate(45deg);
        }

        /* Forge Card Glow */
        .forge-card {
            background: rgba(20, 20, 20, 0.8);
            border: 1px solid rgba(193, 39, 45, 0.2);
            transition: all 0.3s ease;
        }

        .forge-card:hover {
            border-color: var(--ink-red);
            box-shadow: 0 0 25px rgba(193, 39, 45, 0.2);
            transform: translateY(-4px);
        }

        /* Zonai Glowing Runes */
        .rune-glow {
            color: var(--zonai-green);
            text-shadow: 0 0 8px rgba(26, 217, 158, 0.6);
        }

        /* Quest Progress Path */
        .quest-line {
            position: absolute;
            left: 2rem;
            top: 0;
            bottom: 0;
            width: 2px;
            background: repeating-linear-gradient(to bottom, var(--map-border) 0, var(--map-border) 10px, transparent 10px, transparent 20px);
        }

        .quest-node {
            position: relative;
            z-index: 10;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--forge-black); }
        ::-webkit-scrollbar-thumb { background: var(--ink-red); border-radius: 10px; }
    </style>
</head>
<body>

    <!-- Section 1: Hero (DARK) -->
    <section data-theme="dark" class="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-6">
        <div class="absolute inset-0 breathing-ink"></div>
        
        <!-- Embers/Particles -->
        <div id="particles-container" class="absolute inset-0 pointer-events-none"></div>

        <div class="relative z-10 text-center max-w-4xl">
            <span class="mythic-font text-red-600 tracking-[0.4em] text-sm mb-4 block animate-pulse">TOTAL CONCENTRATION: REVENUE</span>
            <h1 class="text-7xl md:text-9xl font-black leading-tight mb-6">THE INFLECTION POINT</h1>
            <p class="text-xl md:text-2xl font-light text-zinc-400 tracking-wide max-w-2xl mx-auto">
                Scaling a battle-tested Tattoo Agency into a unified Vertical SaaS Platform. <span class="text-white">Revenue-funded skunkworks.</span>
            </p>
            
            <div class="mt-12 flex flex-col md:flex-row gap-6 justify-center">
                <a href="#strategy" class="px-10 py-4 border border-red-800 bg-red-900/20 hover:bg-red-600 transition-all text-white font-bold uppercase tracking-widest text-sm flex items-center gap-3 group">
                    View Strategy <span class="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#forge" class="px-10 py-4 border border-zinc-700 hover:border-zinc-400 transition-all text-zinc-400 hover:text-white font-bold uppercase tracking-widest text-sm">
                    Enter The Forge
                </a>
            </div>
        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
    </section>

    <!-- Section 2: Strategy Map (LIGHT) -->
    <section id="strategy" data-theme="light" class="py-32 px-6 lg:px-24 border-y border-[#D4CDBA]">
        <div class="max-w-6xl mx-auto">
            <div class="flex flex-col md:flex-row gap-16 items-start">
                <div class="md:w-1/3">
                    <h2 class="mythic-font text-4xl mb-6">The Path of Mastery</h2>
                    <p class="text-lg leading-relaxed text-zinc-700 italic border-l-4 border-red-700 pl-6 py-2">
                        "We don't guess. We build niche agencies, get paid to learn the market, and A/B test solutions with real clients before we write a single line of product code."
                    </p>
                </div>
                
                <div class="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="zelda-border p-8">
                        <span class="text-xs font-bold text-red-800 uppercase tracking-widest block mb-2">Stage 01</span>
                        <h3 class="text-2xl font-bold mb-4">Service as R&D</h3>
                        <p class="text-sm text-zinc-600 leading-relaxed">Most SaaS startups raise capital and hope for fit. We build an agency that does $1M+ in revenue first. Our customers fund the product development.</p>
                    </div>
                    <div class="zelda-border p-8">
                        <span class="text-xs font-bold text-red-800 uppercase tracking-widest block mb-2">Stage 02</span>
                        <h3 class="text-2xl font-bold mb-4">The Tattoo Moat</h3>
                        <p class="text-sm text-zinc-600 leading-relaxed">10 years deep in the industry. We've identified 500+ prospects and a channel partner (Kiwi Diamond) with access to 500+ studios.</p>
                    </div>
                    <div class="zelda-border p-8">
                        <span class="text-xs font-bold text-red-800 uppercase tracking-widest block mb-2">Stage 03</span>
                        <h3 class="text-2xl font-bold mb-4">Solo Artist Focus</h3>
                        <p class="text-sm text-zinc-600 leading-relaxed">Artists are moving to private studios. They charge $1k-$3k per day. They are the decision-makers. We sell them the operating system.</p>
                    </div>
                    <div class="zelda-border p-8">
                        <span class="text-xs font-bold text-red-800 uppercase tracking-widest block mb-2">Stage 04</span>
                        <h3 class="text-2xl font-bold mb-4">Vertical Extraction</h3>
                        <p class="text-sm text-zinc-600 leading-relaxed">Once the solo artist product is proven, we sell the agency business to keep the codebase and scale the platform across the industry.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 3: The Tech Forge (DARK) -->
    <section id="forge" data-theme="dark" class="py-32 px-6 lg:px-24 relative">
        <div class="max-w-6xl mx-auto relative z-10">
            <div class="text-center mb-20">
                <h2 class="text-5xl font-black mb-4">THE ARCHITECTURE</h2>
                <p class="text-zinc-500 font-mono text-sm uppercase tracking-[0.3em]">Project: Elvis // Technical Calibration</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Sanity Card -->
                <div class="forge-card p-10 rounded-xl relative overflow-hidden group">
                    <div class="absolute -top-10 -right-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-colors"></div>
                    <h4 class="rune-glow font-mono text-xs mb-8">[[ BACKEND_MANIFEST ]]</h4>
                    <h3 class="text-3xl font-bold mb-4">Sanity V3</h3>
                    <p class="text-sm text-zinc-400 mb-8">Official MCP server integration. Claude Code/Cursor ready. Dynamic schemas for relational tattoo portfolios.</p>
                    <div class="bg-black/50 p-4 rounded font-mono text-[10px] text-zinc-500 border border-zinc-800">
                        $ npx sanity@latest mcp configure<br>
                        > Connection_Stable<br>
                        > AI_Assistant_Authorized
                    </div>
                </div>

                <!-- Plasmic Card -->
                <div class="forge-card p-10 rounded-xl relative overflow-hidden group">
                    <div class="absolute -top-10 -right-10 w-32 h-32 bg-green-600/10 rounded-full blur-3xl group-hover:bg-green-600/20 transition-colors"></div>
                    <h4 class="rune-glow font-mono text-xs mb-8">[[ UI_FABRICATION ]]</h4>
                    <h3 class="text-3xl font-bold mb-4">Plasmic</h3>
                    <p class="text-sm text-zinc-400 mb-8">White-label Platform API. Building a component system that allows sub-10hr deployment for new artists.</p>
                    <div class="flex gap-2 mt-4">
                        <div class="w-2 h-2 rounded-full bg-green-500"></div>
                        <div class="w-2 h-2 rounded-full bg-green-500 opacity-30"></div>
                        <div class="w-2 h-2 rounded-full bg-green-500 opacity-10"></div>
                    </div>
                </div>

                <!-- Astro Card -->
                <div class="forge-card p-10 rounded-xl relative overflow-hidden group">
                    <div class="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-colors"></div>
                    <h4 class="rune-glow font-mono text-xs mb-8">[[ CORE_RUNTIME ]]</h4>
                    <h3 class="text-3xl font-bold mb-4">Astro Islands</h3>
                    <p class="text-sm text-zinc-400 mb-8">Zero-JS baseline performance. Decoupled design systems using Islands Architecture for the highest possible Lighthouse scores.</p>
                    <div class="w-full bg-zinc-800 h-1 mt-8">
                        <div class="bg-blue-500 h-full w-[100%]"></div>
                    </div>
                </div>
            </div>

            <!-- Stats Bar -->
            <div class="mt-20 flex flex-wrap justify-center gap-12 text-center border-t border-zinc-900 pt-12">
                <div>
                    <span class="block text-4xl font-black text-white">43H</span>
                    <span class="text-xs font-mono text-zinc-500 uppercase tracking-widest">Build Time Estimate</span>
                </div>
                <div>
                    <span class="block text-4xl font-black text-white">15PT</span>
                    <span class="text-xs font-mono text-zinc-500 uppercase tracking-widest">Figma Checklist</span>
                </div>
                <div>
                    <span class="block text-4xl font-black text-white">Free</span>
                    <span class="text-xs font-mono text-zinc-500 uppercase tracking-widest">Sanity T1 Tier</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 4: The Quest Log (HYBRID) -->
    <section id="quests" data-theme="light" class="py-32 px-6 lg:px-24">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-20">
                <h2 class="mythic-font text-5xl mb-4">The Quest Log</h2>
                <p class="text-zinc-600 italic">"We don't ask for marriage on the first date. We ship code first."</p>
            </div>

            <div class="relative pl-16">
                <div class="quest-line"></div>

                <!-- Quest 1 -->
                <div class="quest-node mb-20 relative">
                    <div class="absolute -left-[64px] top-0 w-12 h-12 bg-red-700 text-white flex items-center justify-center rounded shadow-xl font-bold border-2 border-red-900">
                        1
                    </div>
                    <div class="zelda-border p-8 bg-white/80">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-2xl font-bold">The Elvis Test</h3>
                            <span class="px-3 py-1 bg-green-200 text-green-800 text-[10px] font-bold rounded uppercase">Available Now</span>
                        </div>
                        <p class="text-zinc-600 mb-6">Complete a 30-43 hour paid build for Project Elvis. We calibrate our technical workflow, prove the Sanity/Plasmic stack, and see if we actually like building together.</p>
                        <ul class="font-mono text-xs text-zinc-500 space-y-2 mb-8">
                            <li>[ ] Implement Relational Database Schema</li>
                            <li>[ ] Export Custom Components via Plasmic</li>
                            <li>[ ] Deploy Zero-JS Islands (Astro)</li>
                        </ul>
                        <button class="px-8 py-3 bg-red-700 text-white font-bold uppercase text-xs tracking-widest hover:bg-red-800 transition-colors">Initialize Quest 1</button>
                    </div>
                </div>

                <!-- Quest 2 -->
                <div class="quest-node mb-20 relative opacity-60 grayscale hover:grayscale-0 transition-all group">
                    <div class="absolute -left-[64px] top-0 w-12 h-12 bg-zinc-400 text-white flex items-center justify-center rounded shadow-xl font-bold border-2 border-zinc-500">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div class="zelda-border p-8 bg-zinc-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-2xl font-bold text-zinc-400">The Scaling Path</h3>
                            <span class="px-3 py-1 bg-zinc-200 text-zinc-400 text-[10px] font-bold rounded uppercase tracking-widest">Locked</span>
                        </div>
                        <p class="text-zinc-400">Systemizing HighLevel deployments for 40 solo artists. Setting the foundation for $1M ARR. We start hiring junior implementers; you move into architecture leadership.</p>
                    </div>
                </div>

                <!-- Quest 3 -->
                <div class="quest-node relative opacity-60 grayscale">
                    <div class="absolute -left-[64px] top-0 w-12 h-12 bg-zinc-400 text-white flex items-center justify-center rounded shadow-xl font-bold border-2 border-zinc-500">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div class="zelda-border p-8 bg-zinc-100">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="text-2xl font-bold text-zinc-400">Technical Co-Foundership</h3>
                            <span class="px-3 py-1 bg-zinc-200 text-zinc-400 text-[10px] font-bold rounded uppercase tracking-widest">Locked</span>
                        </div>
                        <p class="text-zinc-400">Formal partnership. Extraction of the platform into a standalone Vertical SaaS product. Equity distribution and long-term roadmap control.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black py-20 px-6 text-center border-t border-zinc-900">
        <div class="max-w-2xl mx-auto">
            <h2 class="text-zinc-600 font-mono text-xs uppercase tracking-[0.5em] mb-8">End of Transmission</h2>
            <div class="flex justify-center gap-12 mb-12">
                <a href="#" class="text-zinc-500 hover:text-red-500 transition-colors">LinkedIn</a>
                <a href="#" class="text-zinc-500 hover:text-red-500 transition-colors">GitHub</a>
                <a href="#" class="text-zinc-500 hover:text-red-500 transition-colors">Report</a>
            </div>
            <p class="text-zinc-800 text-[10px] font-mono">v3.0.1 // FORGING_A_LEGACY // RISING_INK_STUDIOS</p>
        </div>
    </footer>

    <script>
        // Particle effect for the Hero section (Demon Slayer sparks)
        const container = document.getElementById('particles-container');
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'absolute bg-red-600 opacity-0 rounded-full pointer-events-none';
            
            const size = Math.random() * 4 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100 + 20;
            const duration = Math.random() * 4 + 4;
            const delay = Math.random() * 5;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.bottom = `${posY}%`;
            particle.style.boxShadow = '0 0 10px #C1272D';
            
            particle.animate([
                { transform: 'translateY(0) scale(1)', opacity: 0 },
                { transform: 'translateY(-200px) scale(0)', opacity: 0.8, offset: 0.5 },
                { transform: 'translateY(-400px) scale(0)', opacity: 0 }
            ], {
                duration: duration * 1000,
                delay: delay * 1000,
                iterations: Infinity,
                easing: 'ease-out'
            });

            container.appendChild(particle);
        }

        // Initialize particles
        for(let i = 0; i < 40; i++) {
            createParticle();
        }

        // Intersection Observer for Quest Unlocking Animations
        const observerOptions = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('translate-y-0', 'opacity-100');
                    entry.target.classList.remove('translate-y-10', 'opacity-0');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.quest-node').forEach(node => {
            node.classList.add('transition-all', 'duration-700', 'transform', 'translate-y-10', 'opacity-0');
            observer.observe(node);
        });
    </script>
</body>
</html>
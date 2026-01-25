<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rising Ink | The Inflection Point</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Oswald:wght@700&family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    <style>
        :root {
            --ink-red: #ff3333;
            --terminal-beige: #e6e6e6;
            --void-black: #0a0a0a;
            --grid-color: rgba(255, 51, 51, 0.05);
        }

        body {
            background-color: var(--void-black);
            color: var(--terminal-beige);
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
            transition: background-color 0.3s ease;
        }

        .dev-mode {
            font-family: 'JetBrains Mono', monospace;
            --grid-color: rgba(255, 51, 51, 0.15);
        }

        /* Background Grid */
        .grid-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(var(--grid-color) 1px, transparent 1px),
                linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
            background-size: 40px 40px;
            pointer-events: none;
            z-index: 1;
        }

        canvas#inkCanvas {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 0;
            opacity: 0.6;
        }

        .content-layer {
            position: relative;
            z-index: 10;
        }

        .glitch-text {
            text-transform: uppercase;
            font-family: 'Oswald', sans-serif;
            letter-spacing: -0.05em;
        }

        .dev-mode .glitch-text {
            font-family: 'JetBrains Mono', monospace;
            letter-spacing: 0;
        }

        /* Bento Grid 3D Effects */
        .bento-card {
            background: rgba(26, 26, 26, 0.8);
            border: 1px solid rgba(255, 51, 51, 0.2);
            backdrop-filter: blur(10px);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            perspective: 1000px;
        }

        .bento-card:hover {
            border-color: var(--ink-red);
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 0 30px rgba(255, 51, 51, 0.1);
        }

        /* Toggle Switch */
        .toggle-container {
            position: fixed;
            top: 2rem;
            right: 2rem;
            z-index: 100;
        }

        .toggle-btn {
            background: #1a1a1a;
            border: 1px solid var(--ink-red);
            padding: 0.5rem 1rem;
            color: var(--ink-red);
            font-size: 0.75rem;
            cursor: pointer;
            transition: all 0.2s;
            text-transform: uppercase;
            font-weight: bold;
        }

        .toggle-btn.active {
            background: var(--ink-red);
            color: white;
            box-shadow: 0 0 15px var(--ink-red);
        }

        /* Scanline Effect */
        .scanlines {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            background-size: 100% 4px, 3px 100%;
            pointer-events: none;
            z-index: 99;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .dev-mode .scanlines {
            opacity: 1;
        }

        .json-code {
            color: #ff9d00;
            display: none;
        }

        .dev-mode .json-code {
            display: block;
        }

        .dev-mode .vision-text {
            display: none;
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--void-black); }
        ::-webkit-scrollbar-thumb { background: var(--ink-red); }

        @keyframes flicker {
            0% { opacity: 0.97; }
            5% { opacity: 0.95; }
            10% { opacity: 0.9; }
            15% { opacity: 0.95; }
            100% { opacity: 1; }
        }

        .dev-mode .glitch-active {
            animation: flicker 0.1s infinite;
        }
    </style>
</head>
<body class="bg-black antialiased">
    <div class="scanlines"></div>
    <div class="grid-overlay"></div>
    <canvas id="inkCanvas"></canvas>

    <!-- Header / Toggle -->
    <div class="toggle-container flex gap-2 items-center">
        <span class="text-[10px] uppercase tracking-widest text-zinc-500">System Mode:</span>
        <button id="modeToggle" class="toggle-btn flex items-center gap-2">
            <span id="modeLabel">Vision</span>
            <div class="w-2 h-2 rounded-full bg-current animate-pulse"></div>
        </button>
    </div>

    <main class="content-layer min-h-screen px-6 py-20 lg:px-24">
        <!-- Hero Section -->
        <section class="max-w-6xl mx-auto mb-32">
            <div id="terminal-init" class="text-red-500 font-mono text-sm mb-4"></div>
            <h1 id="hero-headline" class="glitch-text text-6xl md:text-9xl font-black leading-none mb-8">
                THE INFLECTION POINT
            </h1>
            <p id="hero-sub" class="text-xl md:text-3xl max-w-2xl text-zinc-400 font-light leading-relaxed">
                <span class="vision-text">Transitioning a high-performance tattoo agency into a unified vertical SaaS platform. Revenue-funded skunkworks.</span>
                <span class="json-code font-mono text-lg">{ "status": "scaling", "target_arr": "$1.2M", "focus": "vSaaS_Architecture" }</span>
            </p>
        </section>

        <!-- Bento Stack -->
        <section class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-32">
            <!-- Card 1: Sanity -->
            <div class="bento-card md:col-span-2 p-8 rounded-lg">
                <div class="flex justify-between items-start mb-12">
                    <h3 class="text-red-500 font-bold uppercase tracking-widest">Backend Architecture</h3>
                    <div class="px-2 py-1 border border-red-500/30 text-[10px] text-red-500">MCP ACTIVE</div>
                </div>
                <div class="vision-text">
                    <h2 class="text-3xl font-bold mb-4">Sanity Studio V3</h2>
                    <p class="text-zinc-400">Official MCP integration for AI-leveraged development. Claude Code/Cursor ready for schema orchestration.</p>
                </div>
                <div class="json-code font-mono text-xs">
                    <pre class="text-green-500">
$ npx sanity@latest mcp configure
[SYSTEM] Detecting AI tools...
[SUCCESS] Claude Code integration enabled.
[QUERY] get_schema(portfolioItem)
                    </pre>
                </div>
            </div>

            <!-- Card 2: Plasmic -->
            <div class="bento-card p-8 rounded-lg">
                <h3 class="text-red-500 font-bold uppercase tracking-widest mb-12">UI Layer</h3>
                <div class="vision-text">
                    <h2 class="text-3xl font-bold mb-4">Plasmic</h2>
                    <p class="text-zinc-400">White-label Platform API for sub-10hr site deployments.</p>
                </div>
                <div class="json-code font-mono text-xs">
                    <pre class="text-blue-400">
{
  "engine": "Plasmic_Loader",
  "mode": "VisualCodegen",
  "performance": "Max"
}
                    </pre>
                </div>
            </div>

            <!-- Card 3: Astro -->
            <div class="bento-card p-8 rounded-lg">
                <h3 class="text-red-500 font-bold uppercase tracking-widest mb-12">Frontend</h3>
                <div class="vision-text">
                    <h2 class="text-3xl font-bold mb-4">Astro</h2>
                    <p class="text-zinc-400">Zero-JS islands for lightning fast portfolio delivery.</p>
                </div>
                <div class="json-code font-mono text-xs text-zinc-500">
                    <p>// hydration: client:visible</p>
                    <p>// perf: 100 Lighthouse</p>
                </div>
            </div>

            <!-- Card 4: Elvis Build -->
            <div class="bento-card md:col-span-4 p-8 rounded-lg flex flex-col md:flex-row gap-8 items-center">
                <div class="md:w-1/2">
                    <h3 class="text-red-500 font-bold uppercase tracking-widest mb-4">The Test Case: Elvis</h3>
                    <h2 class="text-4xl md:text-5xl font-black glitch-text mb-6">PROJECT ELVIS</h2>
                    <p class="text-zinc-400 vision-text">A 30-43 hour build estimate to prove the stack. Dynamic relational portfolio, auto-filtered by style, managed via AI-first CLI.</p>
                    <div class="json-code font-mono text-sm border-l-2 border-red-500 pl-4 py-2 bg-black/50">
                        "sprint_duration": "43h",<br>
                        "figma_readiness": "15_point_checklist",<br>
                        "complexity": "Relational_DB"
                    </div>
                </div>
                <div class="md:w-1/2 w-full grid grid-cols-2 gap-4">
                    <div class="p-4 border border-zinc-800 rounded bg-black/30">
                        <span class="block text-red-500 font-bold text-2xl">30h</span>
                        <span class="text-[10px] text-zinc-500 uppercase">Min Build</span>
                    </div>
                    <div class="p-4 border border-zinc-800 rounded bg-black/30">
                        <span class="block text-red-500 font-bold text-2xl">40+</span>
                        <span class="text-[10px] text-zinc-500 uppercase">Sanity Tools</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Roadmap -->
        <section class="max-w-4xl mx-auto mb-32">
            <h2 class="text-2xl font-bold text-red-500 mb-12 uppercase tracking-tighter">GIT_COMMIT_HISTORY (Roadmap)</h2>
            <div class="space-y-12 border-l border-zinc-800 ml-4 pl-8">
                <div class="relative">
                    <div class="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                    <h4 class="font-mono text-zinc-500 text-sm">commit b4a1c2... [2024]</h4>
                    <h3 class="text-xl font-bold">Agency Validation Verified</h3>
                    <p class="text-zinc-500">Built $500k ARR niche agency focusing on high-value tattoo artists.</p>
                </div>
                <div class="relative">
                    <div class="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-yellow-500 shadow-[0_0_10px_#eab308]"></div>
                    <h4 class="font-mono text-zinc-500 text-sm">commit d7f3e8... [Q1 2025]</h4>
                    <h3 class="text-xl font-bold">Productized Scaling</h3>
                    <p class="text-zinc-500">Implementing $2,000/mo subscription model. Target: 40 clients by Summer.</p>
                </div>
                <div class="relative">
                    <div class="absolute -left-[37px] top-0 w-4 h-4 rounded-full border-2 border-red-500 animate-ping"></div>
                    <div class="absolute -left-[37px] top-0 w-4 h-4 rounded-full bg-red-500"></div>
                    <h4 class="font-mono text-red-500 text-sm underline decoration-wavy">pending_merge... [Q3 2025]</h4>
                    <h3 class="text-xl font-bold text-red-500">The Vertical SaaS Platform</h3>
                    <p class="text-zinc-400">Extracting the platform. Integrated POS, Booking, Portfolio, and CRM. Seeking technical co-architects.</p>
                </div>
            </div>
        </section>

        <!-- CTA Footer -->
        <section class="max-w-6xl mx-auto text-center py-20 border-t border-zinc-900">
            <h2 class="text-5xl md:text-7xl font-black mb-12 italic">READY TO COMMIT?</h2>
            <div class="flex flex-col md:flex-row justify-center gap-6">
                <button class="px-8 py-4 bg-zinc-900 border border-zinc-700 hover:border-red-500 transition-all text-terminal-beige font-mono flex items-center justify-center gap-3 group">
                    <span class="text-green-500">></span> RUN_ELVIS_TEST
                </button>
                <button class="px-8 py-4 bg-red-600 hover:bg-red-500 transition-all text-white font-mono flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(255,51,51,0.3)]">
                    <span class="text-black">$</span> GIT_INIT_PARTNERSHIP
                </button>
            </div>
            <p class="mt-12 text-zinc-600 font-mono text-xs">v2.0.5_STABLE // NO_VC_CAPITAL_REQUIRED // REVENUE_DRIVEN</p>
        </section>
    </main>

    <script>
        // --- Canvas Ink Effect ---
        const canvas = document.getElementById('inkCanvas');
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null };

        function initCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: Math.random() * 0.5 - 0.25,
                    vy: Math.random() * 0.5 - 0.25,
                    size: Math.random() * 2 + 1
                });
            }
        }

        window.addEventListener('resize', initCanvas);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isDev = document.body.classList.contains('dev-mode');
            
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                // Snap to grid in dev mode
                let drawX = p.x;
                let drawY = p.y;
                if (isDev) {
                    drawX = Math.round(p.x / 40) * 40;
                    drawY = Math.round(p.y / 40) * 40;
                }

                ctx.beginPath();
                ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
                ctx.fillStyle = '#ff3333';
                ctx.fill();

                // Mouse interaction
                if (mouse.x && mouse.y) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(drawX, drawY);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = isDev ? 'rgba(255,51,51,0.2)' : 'rgba(255,51,51,0.05)';
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(animate);
        }

        // --- Mode Toggle ---
        const modeToggle = document.getElementById('modeToggle');
        const modeLabel = document.getElementById('modeLabel');
        
        modeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dev-mode');
            const isDev = document.body.classList.contains('dev-mode');
            modeLabel.innerText = isDev ? 'Architecture' : 'Vision';
            modeToggle.classList.toggle('active');
            
            // Trigger text scramble for headline
            scrambleText(document.getElementById('hero-headline'), isDev ? 'CORE_SYSTEM_LOG' : 'THE INFLECTION POINT');
        });

        // --- Text Scramble ---
        function scrambleText(element, finalString) {
            const chars = '!<>-_\\/[]{}—=+*^?#________';
            let iteration = 0;
            const interval = setInterval(() => {
                element.innerText = finalString.split('')
                    .map((char, index) => {
                        if (index < iteration) return finalString[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('');
                if (iteration >= finalString.length) clearInterval(interval);
                iteration += 1 / 3;
            }, 30);
        }

        // --- Terminal Init ---
        const terminalInit = document.getElementById('terminal-init');
        const lines = [
            '> initializing rising_ink.v2',
            '> mounting sanity_mcp_server',
            '> arr_target: $1,000,000',
            '> status: ready'
        ];
        let lineIdx = 0;
        function typeTerminal() {
            if (lineIdx < lines.length) {
                terminalInit.innerHTML += lines[lineIdx] + '<br>';
                lineIdx++;
                setTimeout(typeTerminal, 400);
            }
        }

        window.onload = () => {
            initCanvas();
            animate();
            typeTerminal();
            scrambleText(document.getElementById('hero-headline'), 'THE INFLECTION POINT');
        };
    </script>
</body>
</html>
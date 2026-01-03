<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Andrew | Full Threshold Integration</title>
    
    <!-- Fonts: Cormorant Garamond (Serif/Lab) and Inter (Sans/Tech) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS (Utility) -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Lenis Smooth Scroll -->
    <script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>

    <style>
        /* ================================================================
        ODYSSEY LAB UNIFIED DESIGN SYSTEM v0.3 - EXTENDED
        ================================================================
        */

        :root {
            /* BRAND CORE */
            --color-bronze: #B48E55;
            --color-bronze-light: #C9A76D;
            --color-bronze-dark: #8B6B3D;
            --color-gold: #D4AF37;
            
            /* LAB BLUE */
            --color-lab-blue: #38BDF8;       
            --color-lab-blue-electric: #2563EB; 
            
            /* DARK ZONE */
            --dark-bg-deep: #0F172A;           
            --dark-bg-panel: #1E293B;          
            --dark-text-primary: #F8FAFC;      
            --dark-text-secondary: #E2E8F0;    
            --dark-text-muted: #94A3B8;        
            
            /* LIGHT ZONE */
            --light-bg-body: #F5F5F7;
            --light-bg-card: #FFFFFF;
            --light-text-primary: #0F172A;
            --light-text-secondary: #334155;
            --light-text-muted: #64748B;
            
            /* SPACING */
            --space-16: 1rem;
            --space-24: 1.5rem;
            --space-32: 2rem;
            --space-64: 4rem;
            --space-96: 6rem;
            --space-128: 8rem;

            /* ENTANGLED THEME */
            --entangled-bg: #050b14;
            --cursor-x: 50%;
            --cursor-y: 50%;
            --lens-size: 300px;
        }

        /* BASE */
        html.lenis { height: auto; }
        .lenis.lenis-smooth { scroll-behavior: auto; }
        .lenis.lenis-stopped { overflow: hidden; }
        
        body {
            background-color: var(--entangled-bg);
            color: var(--dark-text-secondary);
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            cursor: crosshair;
            transition: background-color 1s ease, color 1s ease;
        }

        h1, h2, h3, h4, .serif { font-family: 'Cormorant Garamond', serif; }

        /* LIGHT MODE STATES */
        body.zone-light {
            background-color: var(--light-bg-body);
            color: var(--light-text-secondary);
        }
        
        body.zone-light .synchronic-bar {
            background: rgba(255, 255, 255, 0.85);
            border-top: 1px solid rgba(0,0,0,0.05);
            border-bottom: 1px solid rgba(0,0,0,0.05);
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        
        body.zone-light .clock-display { color: var(--color-lab-blue-electric); }
        body.zone-light .clock-label { color: var(--light-text-muted); }
        
        body.zone-light .echo-word {
            color: var(--color-bronze-dark);
            border-bottom-color: rgba(180, 142, 85, 0.2);
        }
        body.zone-light .echo-word:hover { color: transparent; }

        /* ================================================================
        COMPONENT: LENS HERO
        ================================================================
        */
        .lens-container {
            position: relative;
            height: 100vh;
            width: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--entangled-bg);
            color: var(--dark-text-primary);
        }

        .lens-layer-blur {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-color: var(--entangled-bg);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            z-index: 1; filter: blur(8px) grayscale(100%); opacity: 0.4; pointer-events: none;
        }
        .lens-layer-blur h1 {
            font-size: 8vw; line-height: 1; color: var(--dark-text-muted);
            text-transform: uppercase; letter-spacing: 1rem; opacity: 0.3; text-align: center;
        }

        .lens-layer-sharp {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at center, #1a2333 0%, var(--entangled-bg) 100%);
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            z-index: 2; clip-path: circle(var(--lens-size) at var(--cursor-x) var(--cursor-y));
            transition: clip-path 0.1s ease-out;
        }
        .lens-layer-sharp h1 {
            font-size: 8vw; line-height: 1; color: var(--color-bronze-light);
            text-transform: uppercase; letter-spacing: 0.5rem;
            text-shadow: 0 0 30px rgba(180, 142, 85, 0.4); text-align: center;
        }
        .lens-sub {
            font-family: 'Inter', sans-serif; font-size: 1rem; letter-spacing: 0.2rem;
            color: var(--color-lab-blue); margin-top: 2rem; text-transform: uppercase;
        }
        @media (max-width: 768px) {
            .lens-layer-sharp { clip-path: circle(150px at 50% 50%) !important; }
            .lens-layer-sharp h1, .lens-layer-blur h1 { font-size: 12vw; }
        }

        /* ================================================================
        COMPONENT: SYNCHRONIC CLOCK
        ================================================================
        */
        .synchronic-bar {
            border-top: 1px solid rgba(255,255,255,0.1);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding: var(--space-24) 0;
            background: rgba(15, 23, 42, 0.5);
            backdrop-filter: blur(10px);
            margin-top: -10vh;
            position: relative; z-index: 50;
            transition: background 0.5s ease, box-shadow 0.5s ease;
        }
        .clock-display { font-family: 'Courier New', monospace; color: var(--color-lab-blue); font-size: 0.9rem; letter-spacing: 0.05em; }
        .clock-label { opacity: 0.7; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.25rem; transition: color 0.5s ease; }
        .glitch-text { animation: glitch-anim 5s infinite; }
        @keyframes glitch-anim {
            0% { opacity: 1; } 95% { opacity: 1; text-shadow: none; color: var(--color-lab-blue); }
            96% { opacity: 0.8; text-shadow: 2px 0 red, -2px 0 blue; color: #fff; }
            97% { opacity: 1; transform: skewX(-10deg); } 100% { opacity: 1; text-shadow: none; color: var(--color-lab-blue); }
        }

        /* ================================================================
        COMPONENT: INTEGRATED CONTENT LAYOUT
        ================================================================
        */
        .content-block {
            max-width: 1200px; /* Wider to accommodate layout shifts */
            margin: 0 auto;
            padding: var(--space-96) var(--space-24);
        }

        /* THE SECTION HEADERS (Full Width / Vibe) */
        .section-wrapper {
            margin-bottom: var(--space-128);
            position: relative;
        }

        .section-header-large {
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.4em;
            color: var(--color-bronze);
            margin-bottom: var(--space-32);
            display: flex;
            align-items: center;
            gap: 2rem;
            opacity: 0.8;
        }
        .section-header-large::before {
            content: ''; width: 40px; height: 1px; background: var(--color-bronze);
        }

        .section-title-main {
            font-size: 4rem;
            line-height: 1.1;
            margin-bottom: var(--space-32);
            color: var(--dark-text-primary); /* Default dark */
            transition: color 1s ease;
            max-width: 900px;
        }
        
        body.zone-light .section-title-main { color: var(--light-text-primary); }

        p.narrative-lead {
            font-size: 1.8rem;
            line-height: 1.5;
            margin-bottom: var(--space-64);
            font-weight: 300;
            max-width: 800px;
        }

        /* THE DEEP DIVE CONTAINER (Nested Content) */
        .deep-dive-container {
            max-width: 720px;
            margin-left: auto;
            margin-right: auto; /* Centered contained wrapper */
            padding: var(--space-64);
            background: rgba(255,255,255,0.03); /* Subtle bg in dark */
            border-left: 1px solid rgba(255,255,255,0.1);
            transition: all 0.8s ease;
        }

        body.zone-light .deep-dive-container {
            background: var(--light-bg-card);
            border-left: 4px solid var(--color-bronze);
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.05);
            border-radius: 0 4px 4px 0;
        }

        .deep-dive-title {
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: var(--space-24);
            color: var(--color-lab-blue);
        }

        .deep-dive-text {
            font-family: 'Inter', sans-serif;
            font-size: 1.05rem;
            line-height: 1.8;
            color: var(--dark-text-muted);
            margin-bottom: var(--space-24);
        }
        
        body.zone-light .deep-dive-text { color: var(--light-text-secondary); }

        .deep-dive-list {
            list-style: none;
            padding: 0;
            margin-top: var(--space-32);
        }

        .deep-dive-list li {
            margin-bottom: var(--space-16);
            padding-left: var(--space-24);
            position: relative;
            color: var(--dark-text-secondary);
        }
        
        body.zone-light .deep-dive-list li { color: var(--light-text-primary); }

        .deep-dive-list li::before {
            content: '→';
            position: absolute;
            left: 0;
            color: var(--color-bronze);
        }

        /* Echo Words */
        .echo-word {
            display: inline-block; color: var(--color-bronze-light); cursor: pointer; position: relative;
            transition: all 0.3s ease; border-bottom: 1px solid rgba(180, 142, 85, 0.3);
            font-family: 'Cormorant Garamond', serif; font-style: italic; padding-right: 2px;
        }
        .echo-word::after {
            content: attr(data-echo); position: absolute; top: 50%; left: 50%;
            transform: translate(-50%, -50%) scale(0.8); opacity: 0; font-size: 2.5rem;
            font-family: 'Cormorant Garamond', serif; color: var(--color-gold);
            filter: blur(8px); pointer-events: none; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            z-index: 20; white-space: nowrap;
        }
        .echo-word:hover { color: transparent; border-bottom-color: transparent; }
        .echo-word:hover::after { opacity: 1; transform: translate(-50%, -50%) scale(1.1); filter: blur(0px); }

        /* ================================================================
        COMPONENT: CRESCENDO
        ================================================================
        */
        .crescendo-section {
            min-height: 100vh;
            display: flex; flex-direction: column; justify-content: center; align-items: center;
            position: relative; overflow: hidden; text-align: center;
            background-color: var(--entangled-bg); color: var(--dark-text-primary);
        }
        .eclipse-bg { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 600px; pointer-events: none; z-index: 0; }
        .orb { position: absolute; border-radius: 50%; mix-blend-mode: screen; transition: all 2s cubic-bezier(0.22, 1, 0.36, 1); }
        .orb-1 { width: 400px; height: 400px; background: radial-gradient(circle, var(--color-bronze-dark), transparent 70%); top: 0; left: -100px; opacity: 0; }
        .orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, var(--color-lab-blue-electric), transparent 70%); bottom: 0; right: -100px; opacity: 0; }
        
        .crescendo-section.aligned .orb-1 { top: 100px; left: 100px; opacity: 0.6; }
        .crescendo-section.aligned .orb-2 { bottom: 100px; right: 100px; opacity: 0.6; }
        .crescendo-section.aligned .eclipse-bg::after {
            content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            width: 410px; height: 410px; border-radius: 50%; box-shadow: 0 0 50px 10px rgba(255,255,255,0.2);
            opacity: 0; animation: pulse-light 3s ease forwards 1.5s;
        }
        @keyframes pulse-light { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
        
        .crescendo-text { font-size: clamp(2rem, 5vw, 4rem); color: var(--dark-text-primary); z-index: 10; opacity: 0.3; margin-bottom: 1rem; transition: opacity 1s ease; }
        .crescendo-text.active { opacity: 1; text-shadow: 0 0 20px rgba(180, 142, 85, 0.5); }
        
        .btn-artifact {
            margin-top: var(--space-64); padding: var(--space-16) var(--space-32);
            background: transparent; border: 1px solid var(--color-bronze); color: var(--color-bronze);
            font-family: 'Inter', sans-serif; letter-spacing: 0.2em; text-transform: uppercase; font-size: 0.9rem;
            cursor: pointer; transition: all 0.3s ease; position: relative; z-index: 20; overflow: hidden; opacity: 0; transform: translateY(20px);
        }
        .crescendo-section.aligned .btn-artifact { opacity: 1; transform: translateY(0); transition-delay: 2s; }
        .btn-artifact:hover { background: var(--color-bronze); color: var(--dark-bg-deep); box-shadow: 0 0 30px var(--color-bronze-dark); }

        /* ================================================================
        COMPONENT: PRINT PROTOCOL
        ================================================================
        */
        #artifact-dossier { display: none; }
        @media print {
            body { background: white; color: black; cursor: default; }
            .lens-container, .synchronic-bar, .content-block, .crescendo-section { display: none !important; }
            #artifact-dossier { display: block !important; position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding: 40px; font-family: 'Courier New', monospace; border: 4px double #333; box-sizing: border-box; }
            .dossier-header { border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: flex-end; }
            .dossier-title { font-size: 24pt; font-weight: bold; text-transform: uppercase; }
            .dossier-meta { text-align: right; font-size: 10pt; line-height: 1.4; }
            .dossier-body { font-size: 12pt; line-height: 1.6; max-width: 80%; }
            .dossier-section { margin-bottom: 30px; }
            .dossier-label { font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #ccc; display: inline-block; margin-bottom: 10px; }
            .dossier-stamp { position: absolute; bottom: 100px; right: 50px; border: 3px solid #B48E55; color: #B48E55; padding: 10px 20px; font-size: 18pt; font-weight: bold; text-transform: uppercase; transform: rotate(-15deg); opacity: 0.8; mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png'); -webkit-mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png'); }
        }
    </style>
</head>
<body>

    <!-- HERO SECTION (DARK ZONE) -->
    <section class="lens-container" id="hero">
        <div class="lens-layer-blur">
            <h1>ANDREW<br>+<br>ODYSSEY</h1>
        </div>
        <div class="lens-layer-sharp">
            <h1 class="serif">ANDREW<br>+<br>ODYSSEY LAB ALIGN</h1>
            <div class="lens-sub">Threshold Convergence</div>
        </div>
    </section>

    <!-- SYNCHRONIC BAR -->
    <div class="synchronic-bar">
        <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div class="hidden md:block">
                <div class="clock-label">Current Trajectory</div>
                <div class="clock-display">PRODUCT CAREER ACCELERATOR</div>
            </div>
            <div class="md:text-right">
                <div class="clock-label">Duration of Cycle</div>
                <div class="clock-display glitch-target" id="tenure-clock">CALCULATING...</div>
            </div>
        </div>
    </div>

    <!-- MAIN CONTENT (TRANSITIONS TO LIGHT ZONE) -->
    <main class="content-block" id="narrative-zone">
        
        <!-- SECTION 01: THE THRESHOLD -->
        <div class="section-wrapper">
            <div class="section-header-large">01 // The Threshold</div>
            <h2 class="section-title-main serif">Where the Linear Path Bends</h2>
            
            <p class="narrative-lead">
                You have spent the last cycle building structure. Navigating complexity. But the next phase isn't about maintaining the machine—it's about becoming the <span class="echo-word" data-echo="CREATOR">architect</span> of the new one.
            </p>

            <!-- NESTED DEEP DIVE CONTENT -->
            <div class="deep-dive-container">
                <div class="deep-dive-title">State of Play</div>
                <p class="deep-dive-text">
                    Andrew, your tenure at Product Career Accelerator (1y 4m) represents a cycle of foundational rigor. You have mastered the mechanics of the ecosystem. The "Threshold" is the precise moment where mastery turns into invention.
                </p>
                <p class="deep-dive-text">
                    Most operators stay in the loop of optimization. You are signaling readiness for <span style="font-weight: 600; color: var(--color-bronze);">non-linear scale</span>. This requires a shift from managing products to managing narratives and systems that generate products.
                </p>
                <ul class="deep-dive-list">
                    <li>Transitioning from Operator to Sovereign.</li>
                    <li>Identifying the leverage points others miss.</li>
                    <li>Structuring the environment for inevitable success.</li>
                </ul>
            </div>
        </div>

        <!-- SECTION 02: THE CONVERGENCE -->
        <div class="section-wrapper">
            <div class="section-header-large">02 // The Convergence</div>
            <h2 class="section-title-main serif">Synchronization of Intent</h2>
            
            <p class="narrative-lead">
                Odyssey Lab operates in the unseen spaces between strategy and execution. We don't just build; we <span class="echo-word" data-echo="ALCHEMIZE">transmute</span> vision into tangible reality.
            </p>

            <!-- NESTED DEEP DIVE CONTENT -->
            <div class="deep-dive-container">
                <div class="deep-dive-title">The Partnership Mechanics</div>
                <p class="deep-dive-text">
                    This is not a vendor/client arrangement. It is a convergence of two high-frequency nodes. The Lab brings the "Systems of Wisdom"—the AI infrastructure, the design language, the strategic clarity. You bring the domain authority and the drive.
                </p>
                <p class="deep-dive-text">
                    When these forces converge, we create a "Field Effect"—where your brand doesn't just compete, it defines the physics of its own market.
                </p>
                <ul class="deep-dive-list">
                    <li><strong>Strategic Narrative:</strong> Coding the story into the DNA of the operation.</li>
                    <li><strong>AI Integration:</strong> Deploying agents, not just tools.</li>
                    <li><strong>Design Systems:</strong> Creating a visual language that speaks authority instantly.</li>
                </ul>
            </div>
        </div>

        <!-- SECTION 03: THE EXPLORATION -->
        <div class="section-wrapper">
            <div class="section-header-large">03 // The Exploration</div>
            <h2 class="section-title-main serif">Scaling Wisdom</h2>
            
            <p class="narrative-lead">
                We are moving toward the edge of the map. This partnership is the vehicle for that journey. We will deploy systems that don't just scale products, but <span class="echo-word" data-echo="AMPLIFY">scale wisdom</span>.
            </p>

            <!-- NESTED DEEP DIVE CONTENT -->
            <div class="deep-dive-container">
                <div class="deep-dive-title">The Roadmap Ahead</div>
                <p class="deep-dive-text">
                    The exploration phase is about rapid prototyping of the new reality. We strip away the noise of "industry standards" and build protocols that are native to your specific genius.
                </p>
                <p class="deep-dive-text">
                    Together, we define the parameters of the unknown, turning uncertainty into our greatest <span class="echo-word" data-echo="ASSET">leverage</span>. The goal is not just growth, but the establishment of a legacy system that runs on its own logic.
                </p>
                <ul class="deep-dive-list">
                    <li>Phase 1: Diagnosis & Alignment (The current moment).</li>
                    <li>Phase 2: The Build (Systems deployment).</li>
                    <li>Phase 3: The Expansion (Market dominance).</li>
                </ul>
            </div>
        </div>

    </main>

    <!-- CRESCENDO SECTION (RETURNS TO DARK ZONE) -->
    <section class="crescendo-section" id="crescendo">
        <div class="eclipse-bg">
            <div class="orb orb-1"></div>
            <div class="orb orb-2"></div>
        </div>

        <div style="z-index: 10;">
            <h2 class="crescendo-text serif" data-original="For the convergence.">010101010010110</h2>
            <h2 class="crescendo-text serif" data-original="For the exploration.">110100101010111</h2>
            <h2 class="crescendo-text serif" data-original="For the journey ahead.">001011101010000</h2>
            
            <button class="btn-artifact" onclick="window.print()">
                Initialize Protocol
            </button>
            <div style="margin-top: 10px; font-size: 0.7rem; opacity: 0.6;">
                [ Generates Secure Dossier ]
            </div>
        </div>
    </section>

    <!-- HIDDEN ARTIFACT (PRINT ONLY) -->
    <div id="artifact-dossier">
        <div class="dossier-header">
            <div>
                <div class="dossier-title">Odyssey Lab</div>
                <div style="letter-spacing: 0.2em; font-size: 10pt;">PARTNERSHIP MANIFESTO</div>
            </div>
            <div class="dossier-meta">
                CLASSIFICATION: RESTRICTED<br>
                REF: ANDREW-THRESHOLD-01<br>
                DATE: <span id="print-date"></span>
            </div>
        </div>
        <div class="dossier-body">
            <div class="dossier-section">
                <div class="dossier-label">Status Report</div>
                <p>Subject: Andrew. Tenure: 1y 4m at Product Career Accelerator. Trajectory: Vertical.</p>
                <p>The subject has demonstrated significant capacity for high-level product strategy. The "Threshold" phase has been initiated to facilitate non-linear expansion.</p>
            </div>
            <div class="dossier-section">
                <div class="dossier-label">Convergence Directive</div>
                <p>Odyssey Lab formally invites Andrew to enter the Threshold. This partnership leverages mutual competencies in Strategic Narrative, Systems Design, and AI Integration.</p>
            </div>
            <div class="dossier-section">
                <div class="dossier-label">Execution Roadmap</div>
                <ul style="list-style-type: square; margin-left: 20px;">
                    <li>Establish resonance channels.</li>
                    <li>Deploy "Deep Dive" infrastructure.</li>
                    <li>Execute vision with absolute precision.</li>
                </ul>
            </div>
        </div>
        <div class="dossier-stamp">APPROVED<br>FOR ENTRY</div>
    </div>

    <!-- SCRIPTS -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // 1. LENIS SCROLL
            if (typeof Lenis !== 'undefined') {
                const lenis = new Lenis({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    direction: 'vertical',
                    smooth: true,
                    mouseMultiplier: 1,
                    touchMultiplier: 2,
                })
                function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
                requestAnimationFrame(raf);
            }

            // 2. LENS LOGIC
            document.addEventListener('mousemove', (e) => {
                const x = e.clientX;
                const y = e.clientY;
                document.documentElement.style.setProperty('--cursor-x', `${x}px`);
                document.documentElement.style.setProperty('--cursor-y', `${y}px`);
            });

            // 3. CLOCK LOGIC
            const startDate = new Date('2023-09-01T09:00:00').getTime();
            const clockElement = document.getElementById('tenure-clock');
            const printDateElement = document.getElementById('print-date');
            
            if(printDateElement) printDateElement.innerText = new Date().toISOString().split('T')[0];

            function updateClock() {
                const currentTime = new Date().getTime();
                const diff = currentTime - startDate;
                const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
                const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
                const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                const secondHand = new Date().getSeconds();
                if (secondHand % 10 === 0) {
                    clockElement.innerText = "NEXT PHASE: INITIALIZING";
                    clockElement.classList.add('glitch-text');
                } else if (secondHand % 10 === 1) {
                     clockElement.innerText = "PROTOCOL: CONVERGENCE";
                } else {
                    clockElement.classList.remove('glitch-text');
                    clockElement.innerText = `${years}Y ${months}M ${days}D ${hours}:${minutes}:${seconds}`;
                }
            }
            setInterval(updateClock, 1000);

            // 4. ZONE SWITCHER
            const body = document.body;
            const narrativeZone = document.getElementById('narrative-zone');
            const zoneObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) { body.classList.add('zone-light'); }
                    else { body.classList.remove('zone-light'); }
                });
            }, { threshold: 0.1 }); // Trigger earlier for smooth transition
            zoneObserver.observe(narrativeZone);

            // 5. MATRIX TEXT DECODE
            const crescendoSection = document.getElementById('crescendo');
            const scrambledTexts = document.querySelectorAll('.crescendo-text');
            const chars = "01010101ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            const crescendoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        crescendoSection.classList.add('aligned');
                        scrambledTexts.forEach((textEl, index) => {
                            setTimeout(() => {
                                textEl.classList.add('active');
                                let iterations = 0;
                                const originalText = textEl.dataset.original;
                                const interval = setInterval(() => {
                                    textEl.innerText = originalText.split("").map((letter, i) => {
                                        if (i < iterations) return originalText[i];
                                        return chars[Math.floor(Math.random() * chars.length)];
                                    }).join("");
                                    if (iterations >= originalText.length) clearInterval(interval);
                                    iterations += 1 / 3;
                                }, 30);
                            }, index * 800);
                        });
                    }
                });
            }, { threshold: 0.5 });
            crescendoObserver.observe(crescendoSection);
        });
    </script>
</body>
</html>
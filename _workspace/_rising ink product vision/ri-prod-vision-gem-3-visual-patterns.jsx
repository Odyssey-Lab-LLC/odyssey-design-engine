<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rising Ink: Visual Component Kit</title>
    
    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=JetBrains+Mono:wght@300;400;700&family=Oswald:wght@400;600&display=swap" rel="stylesheet">

    <!-- TAILWIND CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        forge: {
                            black: '#0a0a0a',       /* Charcoal */
                            red: '#C1272D',         /* Ink Red */
                            paper: '#F5F3EE',       /* Paper Beige */
                            green: '#10B981',       /* Terminal Green */
                            darkgray: '#171717',    /* Slightly lighter black for cards */
                        }
                    },
                    fontFamily: {
                        header: ['Cinzel', 'serif'],
                        sub: ['Oswald', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'flow': 'flow 3s linear infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'spin-slow': 'spin 12s linear infinite',
                    },
                    keyframes: {
                        flow: {
                            '0%': { strokeDashoffset: '20' },
                            '100%': { strokeDashoffset: '0' },
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>

    <style>
        /* Base styles for the "Ancient Forge" aesthetic */
        body {
            background-color: #0a0a0a;
            color: #F5F3EE;
            font-family: 'JetBrains Mono', monospace;
        }

        /* Utility for grid backgrounds to give depth */
        .bg-grid {
            background-size: 40px 40px;
            background-image: radial-gradient(circle, #171717 1px, transparent 1px);
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0a0a0a; 
        }
        ::-webkit-scrollbar-thumb {
            background: #333; 
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #C1272D; 
        }
    </style>
</head>
<body class="bg-forge-black min-h-screen p-4 md:p-12 bg-grid">

    <!-- HEADER -->
    <header class="mb-16 border-b border-forge-paper/20 pb-6">
        <h1 class="font-header text-4xl md:text-5xl text-forge-paper tracking-wider mb-2">
            RISING INK <span class="text-forge-red text-2xl align-top">V.1</span>
        </h1>
        <p class="font-mono text-forge-green text-sm tracking-widest uppercase opacity-80">
            // Visual Component System initialized
        </p>
    </header>

    <main class="max-w-7xl mx-auto space-y-24">

        <!-- ============================================================================== -->
        <!-- COMPONENT 1: THE "HIGHLEVEL" ECOSYSTEM -->
        <!-- Logic: Central pulsing node with radiating SVG connectors to static satellites. -->
        <!-- ============================================================================== -->
        <section>
            <div class="mb-4 flex items-center gap-2">
                <span class="w-2 h-2 bg-forge-red rounded-full"></span>
                <h2 class="font-sub text-2xl text-forge-paper/80 uppercase tracking-widest">01. The Ecosystem Node</h2>
            </div>
            
            <div class="relative w-full h-[500px] border border-forge-paper/10 bg-forge-darkgray/30 rounded-lg overflow-hidden flex items-center justify-center">
                
                <!-- Background Grid for Tech Feel -->
                <div class="absolute inset-0 opacity-10" 
                     style="background-image: linear-gradient(#F5F3EE 1px, transparent 1px), linear-gradient(90deg, #F5F3EE 1px, transparent 1px); background-size: 50px 50px;">
                </div>

                <!-- SVG Layer for Connectors -->
                <svg class="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
                    <!-- Definitions for gradients -->
                    <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#C1272D" stop-opacity="0" />
                            <stop offset="50%" stop-color="#C1272D" stop-opacity="1" />
                            <stop offset="100%" stop-color="#C1272D" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                    <!-- Connecting Lines (Visual only, positions approximated to nodes) -->
                    <!-- Top Left -->
                    <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGrad)" stroke-width="1" class="opacity-40" />
                    <!-- Top Right -->
                    <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="url(#lineGrad)" stroke-width="1" class="opacity-40" />
                    <!-- Bottom Left -->
                    <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="url(#lineGrad)" stroke-width="1" class="opacity-40" />
                    <!-- Bottom Right -->
                    <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="url(#lineGrad)" stroke-width="1" class="opacity-40" />
                    <!-- Top Center -->
                    <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="url(#lineGrad)" stroke-width="1" class="opacity-40" />
                </svg>

                <!-- Center Node (Core) -->
                <div class="z-10 relative group cursor-pointer">
                    <!-- Pulse Effect -->
                    <div class="absolute inset-0 bg-forge-red rounded-full opacity-20 animate-ping"></div>
                    <div class="absolute inset-0 bg-forge-red/10 rounded-full animate-pulse-slow w-[120px] h-[120px] -m-5"></div>
                    
                    <!-- Core Content -->
                    <div class="w-20 h-20 bg-forge-black border-2 border-forge-red rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(193,39,45,0.4)] transition-transform duration-300 group-hover:scale-110">
                        <div class="text-center">
                            <div class="text-[8px] text-forge-red tracking-widest font-mono">CORE</div>
                            <div class="font-header font-bold text-lg text-forge-paper">HL</div>
                        </div>
                    </div>
                </div>

                <!-- Orbiting Nodes (Absolute positioned) -->
                
                <!-- Node 1: Waivers (Top Left) -->
                <div class="absolute top-[20%] left-[20%] z-10 animate-float" style="animation-delay: 0s;">
                    <div class="flex flex-col items-center gap-2">
                        <div class="w-12 h-12 bg-forge-black border border-forge-paper/40 rounded-full flex items-center justify-center hover:border-forge-green hover:text-forge-green transition-colors duration-300 cursor-default">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        </div>
                        <span class="text-xs font-mono text-forge-paper/60 uppercase">Waivers</span>
                    </div>
                </div>

                <!-- Node 2: Phones (Top Right) -->
                <div class="absolute top-[20%] right-[20%] z-10 animate-float" style="animation-delay: 1s;">
                    <div class="flex flex-col items-center gap-2">
                        <div class="w-12 h-12 bg-forge-black border border-forge-paper/40 rounded-full flex items-center justify-center hover:border-forge-green hover:text-forge-green transition-colors duration-300 cursor-default">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </div>
                        <span class="text-xs font-mono text-forge-paper/60 uppercase">Phones</span>
                    </div>
                </div>

                <!-- Node 3: Bookings (Bottom Left) -->
                <div class="absolute bottom-[20%] left-[25%] z-10 animate-float" style="animation-delay: 2s;">
                    <div class="flex flex-col items-center gap-2">
                        <div class="w-12 h-12 bg-forge-black border border-forge-paper/40 rounded-full flex items-center justify-center hover:border-forge-green hover:text-forge-green transition-colors duration-300 cursor-default">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                        <span class="text-xs font-mono text-forge-paper/60 uppercase">Bookings</span>
                    </div>
                </div>

                <!-- Node 4: Aftercare (Bottom Right) -->
                <div class="absolute bottom-[20%] right-[25%] z-10 animate-float" style="animation-delay: 3s;">
                    <div class="flex flex-col items-center gap-2">
                        <div class="w-12 h-12 bg-forge-black border border-forge-paper/40 rounded-full flex items-center justify-center hover:border-forge-green hover:text-forge-green transition-colors duration-300 cursor-default">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <span class="text-xs font-mono text-forge-paper/60 uppercase">Aftercare</span>
                    </div>
                </div>
                
                <!-- Node 5: Ads (Top Center) -->
                <div class="absolute top-[15%] left-1/2 -translate-x-1/2 z-10 animate-float" style="animation-delay: 4s;">
                     <div class="flex flex-col items-center gap-2">
                        <div class="w-12 h-12 bg-forge-black border border-forge-paper/40 rounded-full flex items-center justify-center hover:border-forge-green hover:text-forge-green transition-colors duration-300 cursor-default">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
                        </div>
                        <span class="text-xs font-mono text-forge-paper/60 uppercase">Ads</span>
                    </div>
                </div>

            </div>
        </section>


        <!-- ============================================================================== -->
        <!-- COMPONENT 2: THE "AGENCY TO PRODUCT" RIVER -->
        <!-- Logic: Horizontal fluid pipe with animated dashes. Steps sit on top. -->
        <!-- ============================================================================== -->
        <section>
            <div class="mb-4 flex items-center gap-2">
                <span class="w-2 h-2 bg-forge-red rounded-full"></span>
                <h2 class="font-sub text-2xl text-forge-paper/80 uppercase tracking-widest">02. The Pipeline</h2>
            </div>

            <div class="w-full bg-forge-darkgray/50 border border-forge-paper/10 rounded-lg p-8 md:p-12 overflow-x-auto">
                <div class="relative min-w-[800px] h-[200px] flex items-center justify-between px-12">
                    
                    <!-- The Pipe (Background + Animation) -->
                    <div class="absolute top-1/2 left-0 w-full -translate-y-1/2">
                        <!-- Background Pipe -->
                        <div class="w-full h-3 bg-forge-black border-y border-forge-paper/20 rounded-full"></div>
                        
                        <!-- Fluid Animation Layer (SVG) -->
                        <svg class="absolute top-0 left-0 w-full h-3" preserveAspectRatio="none">
                            <line x1="0" y1="50%" x2="100%" y2="50%" 
                                  stroke="#10B981" 
                                  stroke-width="2" 
                                  stroke-dasharray="10 20" 
                                  class="animate-flow opacity-80" />
                        </svg>
                    </div>

                    <!-- Step 1: Input -->
                    <div class="relative z-10 flex flex-col items-center group">
                        <div class="w-24 h-24 bg-forge-black border-2 border-forge-paper/30 rounded-lg flex flex-col items-center justify-center mb-4 transition-all duration-300 group-hover:border-forge-paper shadow-lg">
                            <span class="text-3xl mb-1">🏛️</span>
                            <div class="text-[10px] font-mono text-forge-paper/50">INPUT</div>
                        </div>
                        <h3 class="font-header text-lg text-forge-paper">Niche Agency</h3>
                        <p class="text-xs font-mono text-forge-paper/60 mt-1">Market Intel</p>
                    </div>

                    <!-- Step 2: Process -->
                    <div class="relative z-10 flex flex-col items-center group">
                         <div class="w-24 h-24 bg-forge-black border-2 border-forge-paper/30 rounded-lg flex flex-col items-center justify-center mb-4 transition-all duration-300 group-hover:border-forge-red shadow-lg">
                            <span class="text-3xl mb-1">🔥</span>
                             <div class="text-[10px] font-mono text-forge-red/50">PROCESSING</div>
                        </div>
                        <h3 class="font-header text-lg text-forge-paper">Paid R&D</h3>
                        <p class="text-xs font-mono text-forge-paper/60 mt-1">Client Funded</p>
                    </div>

                    <!-- Step 3: Output -->
                    <div class="relative z-10 flex flex-col items-center group">
                         <div class="w-24 h-24 bg-forge-black border-2 border-forge-green rounded-lg flex flex-col items-center justify-center mb-4 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                            <span class="text-3xl mb-1">💰</span>
                             <div class="text-[10px] font-mono text-forge-green">OUTPUT</div>
                        </div>
                        <h3 class="font-header text-lg text-forge-green">$1M ARR</h3>
                        <p class="text-xs font-mono text-forge-paper/60 mt-1">Service Rev</p>
                    </div>

                    <!-- Step 4: Result -->
                    <div class="relative z-10 flex flex-col items-center group">
                         <div class="w-24 h-24 bg-forge-paper border-2 border-forge-paper rounded-lg flex flex-col items-center justify-center mb-4 transition-all duration-300">
                            <span class="text-3xl text-forge-black mb-1">💎</span>
                             <div class="text-[10px] font-mono text-forge-black font-bold">RESULT</div>
                        </div>
                        <h3 class="font-header text-lg text-forge-paper group-hover:text-forge-red transition-colors">Platform</h3>
                        <p class="text-xs font-mono text-forge-paper/60 mt-1">Extract IP</p>
                    </div>

                </div>
            </div>
        </section>


        <!-- ============================================================================== -->
        <!-- COMPONENT 3: THE "ELVIS STACK" BENTO -->
        <!-- Logic: 3 Card Grid. Hover states reveal technical details. -->
        <!-- ============================================================================== -->
        <section>
            <div class="mb-4 flex items-center gap-2">
                <span class="w-2 h-2 bg-forge-red rounded-full"></span>
                <h2 class="font-sub text-2xl text-forge-paper/80 uppercase tracking-widest">03. The Stack</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <!-- Card 1: SANITY -->
                <div class="group relative bg-forge-darkgray border border-forge-paper/10 p-6 h-64 overflow-hidden rounded hover:border-forge-red/50 transition-colors duration-300">
                    <div class="absolute top-4 right-4 bg-forge-red/10 border border-forge-red text-forge-red text-[10px] px-2 py-1 rounded font-mono uppercase tracking-wide">
                        MCP Active
                    </div>
                    
                    <div class="h-full flex flex-col justify-between relative z-10">
                        <div>
                            <h3 class="font-header text-3xl text-forge-paper mb-2">Sanity</h3>
                            <p class="font-mono text-xs text-forge-paper/50">Structured Content</p>
                        </div>
                        
                        <!-- Hover Reveal Content -->
                        <div class="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <div class="w-full h-px bg-forge-paper/20 mb-3"></div>
                            <ul class="font-mono text-xs text-forge-paper/80 space-y-1">
                                <li class="flex items-center gap-2"><span class="text-forge-green">✓</span> AI Coding Ready</li>
                                <li class="flex items-center gap-2"><span class="text-forge-green">✓</span> Relational Data</li>
                                <li class="flex items-center gap-2"><span class="text-forge-green">✓</span> Scaleable API</li>
                            </ul>
                        </div>
                    </div>
                    <!-- Decorative Background Letter -->
                    <div class="absolute -bottom-4 -right-4 text-[150px] font-header text-forge-paper/5 opacity-10 leading-none select-none">S</div>
                </div>

                <!-- Card 2: PLASMIC -->
                <div class="group relative bg-forge-darkgray border border-forge-paper/10 p-6 h-64 overflow-hidden rounded hover:border-forge-paper/50 transition-colors duration-300">
                    <div class="absolute top-4 right-4 bg-forge-paper/10 border border-forge-paper/40 text-forge-paper text-[10px] px-2 py-1 rounded font-mono uppercase tracking-wide">
                        Visual Builder
                    </div>
                    
                    <div class="h-full flex flex-col justify-between relative z-10">
                        <div>
                            <h3 class="font-header text-3xl text-forge-paper mb-2">Plasmic</h3>
                            <p class="font-mono text-xs text-forge-paper/50">Frontend Composition</p>
                        </div>
                        
                        <div class="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                             <div class="w-full h-px bg-forge-paper/20 mb-3"></div>
                             <p class="font-mono text-xs text-forge-paper/80 leading-relaxed">
                                 "Agency speed, Product quality."
                                 <br>
                                 <span class="text-forge-green">Est. Build: 30-43hrs</span>
                             </p>
                        </div>
                    </div>
                    <div class="absolute -bottom-4 -right-4 text-[150px] font-header text-forge-paper/5 opacity-10 leading-none select-none">P</div>
                </div>

                <!-- Card 3: ASTRO -->
                <div class="group relative bg-forge-darkgray border border-forge-paper/10 p-6 h-64 overflow-hidden rounded hover:border-forge-green/50 transition-colors duration-300">
                    <div class="absolute top-4 right-4 bg-forge-green/10 border border-forge-green/40 text-forge-green text-[10px] px-2 py-1 rounded font-mono uppercase tracking-wide">
                        Zero JS
                    </div>
                    
                    <div class="h-full flex flex-col justify-between relative z-10">
                        <div>
                            <h3 class="font-header text-3xl text-forge-paper mb-2">Astro</h3>
                            <p class="font-mono text-xs text-forge-paper/50">Performance Engine</p>
                        </div>
                        
                        <div class="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                             <div class="w-full h-px bg-forge-paper/20 mb-3"></div>
                             <div class="flex justify-between items-end">
                                 <span class="font-mono text-xs text-forge-paper/80">Lighthouse Score</span>
                                 <span class="font-header text-4xl text-forge-green">100</span>
                             </div>
                        </div>
                    </div>
                    <div class="absolute -bottom-4 -right-4 text-[150px] font-header text-forge-paper/5 opacity-10 leading-none select-none">A</div>
                </div>

            </div>
        </section>


        <!-- ============================================================================== -->
        <!-- COMPONENT 4: THE "QUEST LOG" ROADMAP -->
        <!-- Logic: Vertical timeline. Git commit style. Locked/Verified states. -->
        <!-- ============================================================================== -->
        <section>
            <div class="mb-4 flex items-center gap-2">
                <span class="w-2 h-2 bg-forge-red rounded-full"></span>
                <h2 class="font-sub text-2xl text-forge-paper/80 uppercase tracking-widest">04. Quest Log</h2>
            </div>

            <div class="border border-forge-paper/10 bg-forge-darkgray/50 rounded-lg p-8 relative">
                
                <!-- Timeline Vertical Line -->
                <div class="absolute top-8 bottom-8 left-[43px] w-px bg-forge-paper/20 z-0"></div>

                <div class="space-y-8 relative z-10">
                    
                    <!-- Item 1: Verified/Complete -->
                    <div class="flex items-start gap-6 group">
                        <!-- Icon Node -->
                        <div class="w-8 h-8 rounded-full bg-forge-green/20 border border-forge-green text-forge-green flex items-center justify-center shrink-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <!-- Content -->
                        <div class="flex-1 bg-forge-black/40 p-4 rounded border border-forge-paper/5 hover:border-forge-green/30 transition-colors">
                            <div class="flex justify-between items-start mb-1">
                                <h4 class="font-header text-forge-paper text-lg">Agency Scale (Q1)</h4>
                                <span class="font-mono text-[10px] text-forge-green bg-forge-green/10 px-2 py-0.5 rounded uppercase">Verified</span>
                            </div>
                            <p class="font-mono text-xs text-forge-paper/50">Commit: Initial bootstrap phase complete. Revenue validation confirmed.</p>
                        </div>
                    </div>

                    <!-- Item 2: In Progress -->
                    <div class="flex items-start gap-6 group">
                        <!-- Icon Node -->
                        <div class="w-8 h-8 rounded-full bg-forge-red/10 border border-forge-red text-forge-red flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(193,39,45,0.3)]">
                            <div class="w-2 h-2 bg-forge-red rounded-full animate-pulse"></div>
                        </div>
                        <!-- Content -->
                        <div class="flex-1 bg-forge-black/40 p-4 rounded border-l-2 border-l-forge-red border-y border-r border-y-forge-paper/5 border-r-forge-paper/5">
                            <div class="flex justify-between items-start mb-1">
                                <h4 class="font-header text-forge-paper text-lg">Elvis Pilot (Summer)</h4>
                                <span class="font-mono text-[10px] text-forge-red bg-forge-red/10 px-2 py-0.5 rounded uppercase animate-pulse">In Progress</span>
                            </div>
                            <p class="font-mono text-xs text-forge-paper/50">Current Quest: Social media automation integration & styling.</p>
                        </div>
                    </div>

                    <!-- Item 3: Locked -->
                    <div class="flex items-start gap-6 group opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <!-- Icon Node -->
                        <div class="w-8 h-8 rounded-full bg-forge-darkgray border border-forge-paper/20 text-forge-paper/40 flex items-center justify-center shrink-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        </div>
                        <!-- Content -->
                        <div class="flex-1 bg-forge-black/40 p-4 rounded border border-forge-paper/5 border-dashed">
                            <div class="flex justify-between items-start mb-1">
                                <h4 class="font-header text-forge-paper text-lg">Platform Launch</h4>
                                <span class="font-mono text-[10px] text-forge-paper/40 border border-forge-paper/20 px-2 py-0.5 rounded uppercase">Locked</span>
                            </div>
                            <p class="font-mono text-xs text-forge-paper/50">Requires: $1M ARR Achievement to unlock repository.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </main>

    <footer class="mt-24 text-center border-t border-forge-paper/10 pt-8 pb-12">
        <p class="font-mono text-[10px] text-forge-paper/30 uppercase tracking-[0.2em]">Rising Ink // System Status: Nominal</p>
    </footer>

</body>
</html>
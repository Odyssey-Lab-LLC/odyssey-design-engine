import React, { useState, useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { Link } from 'react-router-dom';
import { StickyNav } from '../components/StickyNav';

const AndrewStyles = () => (
  <style>{`
    /* ================================================================
    ODYSSEY LAB UNIFIED DESIGN SYSTEM v0.3 - EXTENDED
    ================================================================
    */

    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');

    :root {
      /* BRAND CORE */
      --color-bronze: #B48E55;
      --color-bronze-light: #C9A76D;
      --color-bronze-dark: #8B6B3D;
      --color-gold: #D4AF37;
      --color-gold-muted: #A68A2E;
      
      /* LAB BLUE */
      --color-lab-blue: #38BDF8;       
      --color-lab-blue-electric: #2563EB; 
      --color-lab-blue-light: #7DD3FC;
      --color-lab-blue-dark: #0EA5E9;
      
      /* DARK ZONE */
      --dark-bg-deep: #0F172A;           
      --dark-bg-panel: #1E293B;          
      --dark-bg-elevated: #334155;
      --dark-bg-highlight: linear-gradient(135deg, var(--dark-bg-panel) 0%, var(--dark-bg-elevated) 100%);
      --dark-text-primary: #F8FAFC;      
      --dark-text-secondary: #E2E8F0;    
      --dark-text-muted: #94A3B8;
      --dark-text-subtle: #64748B;
      --dark-border-subtle: rgba(255, 255, 255, 0.1);
      --dark-border-strong: rgba(255, 255, 255, 0.2);
      
      /* LIGHT ZONE */
      --light-bg-body: #F5F5F7;
      --light-bg-warm: #FFFDF7;
      --light-bg-card: #FFFFFF;
      --light-bg-panel: #FDF6E3;
      --light-bg-muted: #F8FAFC;
      --light-bg-highlight: linear-gradient(135deg, #F8FAFC, #EFF6FF);
      --light-text-primary: #0F172A;
      --light-text-secondary: #334155;
      --light-text-muted: #64748B;
      --light-text-subtle: #78716C;
      --light-border-subtle: #E2E8F0;
      --light-border-strong: #CBD5E1;
      
      /* TYPOGRAPHY */
      --font-display: 'Cormorant Garamond', serif;
      --font-body: 'Inter', sans-serif;
      --font-mono: 'Courier New', monospace;
      --text-xs: 0.75rem;
      --text-sm: 0.875rem;
      --text-base: 1rem;
      --text-lg: 1.125rem;
      --text-xl: 1.25rem;
      --text-2xl: 1.5rem;
      --text-3xl: 1.875rem;
      --text-4xl: 2.25rem;
      
      /* SPACING */
      --space-16: 1rem;
      --space-8: 0.5rem;
      --space-24: 1.5rem;
      --space-32: 2rem;
      --space-48: 3rem;
      --space-64: 4rem;
      --space-96: 6rem;
      --space-128: 8rem;
      
      /* LAYOUT */
      --container-sm: 600px;
      --container-md: 900px;
      
      /* RADIUS + SHADOWS */
      --radius-sm: 4px;
      --radius-md: 8px;
      --radius-lg: 12px;
      --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.05);

      /* ENTANGLED THEME */
      --entangled-bg: #050b14;
      --cursor-x: 50%;
      --cursor-y: 50%;
      --lens-size: 300px;
      
      /* ZONE ALIASES */
      --bg-card: var(--dark-bg-panel);
      --bg-muted: var(--dark-bg-panel);
      --bg-highlight: var(--dark-bg-highlight);
      --text-primary: var(--dark-text-primary);
      --text-secondary: var(--dark-text-secondary);
      --text-muted: var(--dark-text-muted);
      --text-subtle: var(--dark-text-subtle);
      --border-subtle: var(--dark-border-subtle);
      --border-strong: var(--dark-border-strong);
      --accent-blue: var(--color-lab-blue);
    }

    /* BASE */
    html.lenis { height: auto; }
    .lenis.lenis-smooth { scroll-behavior: auto; }
    .lenis.lenis-stopped { overflow: hidden; }
    
    body.andrew-page {
      background-color: var(--entangled-bg);
      color: var(--dark-text-secondary);
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      cursor: crosshair;
      transition: background-color 1s ease, color 1s ease;
    }

    h1, h2, h3, h4, .serif { font-family: 'Cormorant Garamond', serif; }
    .font-display { font-family: var(--font-display); }

    /* LIGHT MODE STATES */
    body.zone-light {
      background-color: var(--light-bg-body);
      color: var(--light-text-secondary);
      --bg-card: var(--light-bg-card);
      --bg-muted: var(--light-bg-muted);
      --bg-highlight: var(--light-bg-highlight);
      --text-primary: var(--light-text-primary);
      --text-secondary: var(--light-text-secondary);
      --text-muted: var(--light-text-muted);
      --text-subtle: var(--light-text-subtle);
      --border-subtle: var(--light-border-subtle);
      --border-strong: var(--light-border-strong);
      --accent-blue: var(--color-lab-blue-electric);
    }
    
    body.zone-light .synchronic-bar {
      background: rgba(255, 255, 255, 0.85);
      border-top: 1px solid rgba(0,0,0,0.05);
      border-bottom: 1px solid rgba(0,0,0,0.05);
      box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    }
    
    body.zone-light .clock-display { color: var(--color-bronze); }
    body.zone-light .clock-label { color: var(--color-bronze); }
    
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
      z-index: 2;
      pointer-events: none;
      -webkit-clip-path: circle(var(--lens-size) at var(--cursor-x) var(--cursor-y));
      clip-path: circle(var(--lens-size) at var(--cursor-x) var(--cursor-y));
      transition: clip-path 0.1s ease-out;
      will-change: clip-path;
    }
    .lens-layer-sharp h1 {
      font-size: 8vw; line-height: 1; color: var(--color-bronze-light);
      text-transform: uppercase; letter-spacing: 0.5rem;
      text-shadow: 0 0 30px rgba(180, 142, 85, 0.4); text-align: center;
    }
    .lens-sub {
      font-family: 'Inter', sans-serif; font-size: 1rem; letter-spacing: 0.2rem;
      color: var(--color-gold); margin-top: 2rem; text-transform: uppercase;
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
    .clock-display { font-family: 'Courier New', monospace; color: var(--color-gold); font-size: 0.9rem; letter-spacing: 0.05em; }
    .clock-label { opacity: 0.7; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.25rem; transition: color 0.5s ease; }
    .glitch-text { animation: glitch-anim 5s infinite; }
    @keyframes glitch-anim {
      0% { opacity: 1; } 95% { opacity: 1; text-shadow: none; color: var(--color-gold); }
      96% { opacity: 0.8; text-shadow: 2px 0 red, -2px 0 blue; color: #fff; }
      97% { opacity: 1; transform: skewX(-10deg); } 100% { opacity: 1; text-shadow: none; color: var(--color-gold); }
    }

    /* ================================================================
    COMPONENT: INTEGRATED CONTENT LAYOUT
    ================================================================
    */
    .content-block {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--space-96) var(--space-24);
    }

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
      color: var(--dark-text-primary);
      transition: color 1s ease;
      max-width: 900px;
    }
    
    body.zone-light .section-title-main { color: var(--light-text-primary); }

    .section-header-minor {
      font-size: var(--text-xs);
      text-transform: uppercase;
      letter-spacing: 0.35em;
      color: var(--color-bronze);
      margin-bottom: var(--space-16);
      display: flex;
      align-items: center;
      gap: var(--space-16);
      opacity: 0.8;
    }
    .section-header-minor::before {
      content: ''; width: var(--space-8); height: 1px; background: var(--color-bronze);
    }

    .section-title-sub {
      font-size: var(--text-4xl);
      line-height: 1.2;
      margin-bottom: var(--space-24);
      color: var(--dark-text-primary);
      transition: color 1s ease;
      max-width: 900px;
    }
    
    body.zone-light .section-title-sub { color: var(--light-text-primary); }

    p.narrative-lead {
      font-size: 1.8rem;
      line-height: 1.5;
      margin-bottom: var(--space-64);
      font-weight: 300;
      max-width: 800px;
    }

    .deep-dive-container {
      max-width: 720px;
      margin-left: auto;
      margin-right: auto;
      padding: var(--space-64);
      background: rgba(255,255,255,0.03);
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
      color: var(--color-gold);
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
      content: '◆';
      position: absolute;
      left: 0;
      color: var(--color-bronze);
      font-size: 0.75em;
      top: 0.2em;
    }
    
    .proof-point-wrapper {
      margin: var(--space-128) auto;
      max-width: 800px;
      background: #1E293B; 
      border-left: 2px solid var(--color-bronze);
      padding: var(--space-48) var(--space-64);
      position: relative;
      box-shadow: 0 20px 60px -10px rgba(0,0,0,0.15);
      border-radius: 2px;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    
    .proof-point-wrapper:hover { 
      transform: translateY(-5px);
      box-shadow: 0 30px 70px -10px rgba(0,0,0,0.2);
    }

    .proof-point-header {
      font-family: 'Inter', sans-serif;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      color: var(--color-bronze);
      margin-bottom: var(--space-32);
      opacity: 0.9;
      display: flex; align-items: center; gap: 0.75rem;
    }
    
    .proof-point-header::before {
      content: '';
      width: 8px; height: 8px;
      background: var(--color-bronze);
      border-radius: 50%;
    }
    
    .proof-point-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.8rem;
      font-weight: 400;
      color: #F8FAFC;
      margin-bottom: var(--space-24);
      line-height: 1.3;
    }

    .proof-point-body {
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      line-height: 1.8;
      color: #CBD5E1;
      margin-bottom: var(--space-32);
      font-weight: 300;
    }
    
    .proof-point-link {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      color: var(--accent-blue);
      text-transform: uppercase;
      letter-spacing: 0.15em;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      border-bottom: 1px solid transparent;
    }
    
    .proof-point-link:hover {
      color: var(--color-lab-blue-light);
      gap: 0.8rem;
      border-bottom-color: rgba(56, 189, 248, 0.3);
    }

    /* ================================================================
    COMPONENT: MERGED CONTENT
    ================================================================ */
    .section-extended {
      margin-top: var(--space-64);
      max-width: var(--container-md);
      margin-left: auto;
      margin-right: auto;
    }
    
    .section-extended > *:first-child { margin-top: 0; }
    
    .section-extended p {
      font-family: var(--font-body);
      font-size: var(--text-base);
      line-height: 1.75;
      color: var(--text-secondary);
      margin-bottom: var(--space-24);
    }
    
    .section-extended h3:not(.proof-point-title) {
      font-family: var(--font-display);
      font-size: var(--text-4xl);
      color: var(--text-primary);
      margin: var(--space-48) 0 var(--space-16);
    }
    
    .section-extended h4:not(.accordion__title) {
      font-family: var(--font-display);
      font-size: var(--text-3xl);
      color: var(--text-primary);
      margin: var(--space-32) 0 var(--space-16);
    }
    
    .section-extended ul {
      margin: 0 0 var(--space-24);
      color: var(--text-secondary);
      list-style: none;
      padding-left: 0;
    }
    
    .section-extended ul li {
      margin-bottom: var(--space-16);
      position: relative;
      padding-left: var(--space-24);
    }
    
    .section-extended ul li::before {
      content: '◆';
      position: absolute;
      left: 0;
      top: 0.2em;
      color: var(--color-bronze);
      font-size: 0.75em;
    }
    
    .section-extended ol {
      margin: 0 0 var(--space-24) var(--space-32);
      color: var(--text-secondary);
    }
    
    .section-extended ol li { margin-bottom: var(--space-16); }

    .accordion__content-inner ul {
      list-style: none;
      padding-left: 0;
      margin: 0 0 var(--space-24);
    }
    
    .accordion__content-inner ul li {
      position: relative;
      padding-left: var(--space-24);
      margin-bottom: var(--space-16);
    }
    
    .accordion__content-inner ul li::before {
      content: '◆';
      position: absolute;
      left: 0;
      top: 0.2em;
      color: var(--color-bronze);
      font-size: 0.75em;
    }

    .accordion__content-inner > *:first-child { margin-top: 0; }
    .section-extended strong { color: var(--text-primary); }
    .section-extended em { color: var(--text-secondary); }
    
    .section-extended .proof-point-wrapper { margin: var(--space-64) 0; }

    /* @NEW_COMPONENT: Journey Arc
       @RATIONALE: Visual representation of converging paths
       @TOKENS_USED: --color-bronze, --color-gold
       @CANDIDATE_FOR_PROMOTION: yes */
    .journey-arc {
      margin: var(--space-32) auto;
      max-width: var(--container-sm);
      padding: var(--space-24);
    }
    
    .journey-arc svg {
      width: 100%;
      height: auto;
      display: block;
    }
    
    /* @NEW_COMPONENT: Proof Card
       @RATIONALE: Special treatment for linked artifacts
       @TOKENS_USED: bronze, gold, light zone tokens
       @CANDIDATE_FOR_PROMOTION: yes */
    .proof-card {
      background: linear-gradient(135deg, var(--light-bg-card) 0%, var(--light-bg-panel) 100%);
      border: 2px solid var(--color-bronze);
      padding: var(--space-48);
      margin: var(--space-48) 0;
      position: relative;
      overflow: hidden;
      border-radius: var(--radius-md);
    }
    
    .proof-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--color-bronze), var(--color-gold), var(--color-bronze));
    }
    
    .proof-card__eyebrow {
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--color-bronze);
      margin-bottom: var(--space-16);
    }
    
    .proof-card__heading {
      font-family: var(--font-display);
      font-size: var(--text-2xl);
      color: var(--light-text-primary);
      margin-bottom: var(--space-16);
    }
    
    .proof-card__description {
      color: var(--light-text-muted);
      margin-bottom: var(--space-24);
      line-height: 1.7;
    }
    
    /* @NEW_COMPONENT: Honest Block
       @RATIONALE: Dark zone inversion for candid sections
       @TOKENS_USED: dark zone tokens
       @CANDIDATE_FOR_PROMOTION: yes */
    .honest-block {
      background: var(--dark-bg-deep);
      color: var(--dark-text-secondary);
      padding: var(--space-64);
      border-radius: var(--radius-lg);
      margin: var(--space-48) 0;
      border: 1px solid var(--dark-border-subtle);
    }
    
    .section-extended .honest-block h2,
    .section-extended .honest-block h3,
    .section-extended .honest-block h4 {
      color: var(--dark-text-primary);
      margin-top: 0;
    }
    
    .honest-block p,
    .honest-block li {
      color: var(--dark-text-muted);
    }
    
    .honest-block strong { color: var(--color-bronze); }
    .honest-block em { color: var(--dark-text-secondary); }
    
    /* @NEW_COMPONENT: Highlight Block
       @RATIONALE: Emphasis container for key statements
       @TOKENS_USED: zone aliases, accent tokens
       @CANDIDATE_FOR_PROMOTION: yes */
    .highlight-block {
      background: var(--bg-highlight);
      border: 1px solid var(--border-subtle);
      padding: var(--space-48);
      border-radius: var(--radius-md);
      margin: var(--space-48) 0;
      position: relative;
      overflow: hidden;
      color: var(--text-secondary);
    }
    
    .highlight-block::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--color-gold);
    }
    
    .highlight-block__callout {
      margin-top: var(--space-32);
      background: var(--bg-card);
      padding: var(--space-24);
      border-radius: var(--radius-sm);
      border: 1px dashed var(--border-strong);
      font-style: italic;
    }
    
    .highlight-block__callout--dark {
      background: var(--dark-bg-panel);
      border-color: var(--dark-border-subtle);
      color: var(--dark-text-secondary);
    }

    /* @NEW_COMPONENT: Accordion with Informative Header Card
       @RATIONALE: Progressive disclosure with header that communicates content
       @TOKENS_USED: card tokens, spacing, transitions
       @CANDIDATE_FOR_PROMOTION: yes */
    .accordion {
      margin: var(--space-32) 0;
    }
    
    .accordion__item {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      margin-bottom: var(--space-16);
      overflow: hidden;
      transition: box-shadow 0.3s ease;
    }
    
    .accordion__item:hover {
      box-shadow: var(--shadow-md);
    }
    
    .accordion__header {
      padding: var(--space-24);
      cursor: pointer;
      user-select: none;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: var(--space-16);
      background: transparent;
      border: 0;
      width: 100%;
      text-align: left;
      transition: background 0.2s ease;
    }
    
    .accordion__header:hover {
      background: var(--bg-muted);
    }
    
    .accordion__header-content {
      flex: 1;
    }
    
    .accordion__eyebrow {
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--color-gold);
      margin-bottom: var(--space-8);
    }
    
    .accordion__title {
      font-family: var(--font-display);
      font-size: var(--text-xl);
      color: var(--text-primary);
      margin-bottom: var(--space-8);
    }
    
    .accordion__preview {
      font-size: var(--text-sm);
      color: var(--text-muted);
      line-height: 1.6;
    }
    
    .accordion__icon {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      border-radius: 9999px;
      background: var(--bg-muted);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--text-sm);
      color: var(--text-subtle);
      transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
    }
    
    .accordion__content {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    
    .accordion__content-inner {
      padding: 0 var(--space-24) var(--space-24);
      border-top: 1px solid var(--border-subtle);
      margin-top: var(--space-8);
    }
    
    .accordion__item.is-open .accordion__content {
      max-height: 5000px;
    }
    
    .accordion__item.is-open .accordion__icon {
      transform: rotate(180deg);
      background: var(--color-gold);
      color: var(--dark-bg-deep);
    }
    
    /* @NEW_COMPONENT: Data Table
       @RATIONALE: Clean presentation of metrics/KPIs
       @TOKENS_USED: spacing, borders, typography tokens
       @CANDIDATE_FOR_PROMOTION: yes */
    .data-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      margin: var(--space-32) 0;
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      overflow: hidden;
      background: var(--bg-card);
    }
    
    .data-table th {
      background: var(--bg-muted);
      padding: var(--space-16) var(--space-24);
      text-align: left;
      font-family: var(--font-mono);
      font-size: var(--text-sm);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-primary);
      border-bottom: 2px solid var(--border-strong);
    }
    
    .data-table td {
      padding: var(--space-16) var(--space-24);
      border-bottom: 1px solid var(--border-subtle);
      color: var(--text-secondary);
    }
    
    .data-table__total td {
      background: var(--bg-muted);
      color: var(--text-primary);
      font-weight: 700;
    }

    .data-table tr:last-child td { border-bottom: none; }
    .data-table tbody tr:hover { background: var(--bg-muted); }
    .data-table--emphasis td:first-child { font-weight: 600; color: var(--text-primary); }
    
    /* @NEW_COMPONENT: Phase Timeline
       @RATIONALE: Visual progression of partnership roles
       @TOKENS_USED: bronze, spacing, borders
       @CANDIDATE_FOR_PROMOTION: yes */
    .phase-timeline {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: var(--space-24);
      margin: var(--space-48) 0;
    }
    
    .phase-box {
      background: var(--bg-card);
      border: 2px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: var(--space-32);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    }
    
    .phase-box:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-bronze);
    }
    
    .phase-box__number {
      font-family: var(--font-display);
      font-size: var(--text-3xl);
      font-weight: 700;
      color: var(--color-bronze);
      margin-bottom: var(--space-16);
    }
    
    .phase-box__title {
      font-family: var(--font-display);
      font-size: var(--text-lg);
      color: var(--text-primary);
      margin-bottom: var(--space-16);
    }
    
    .phase-box__duration {
      font-family: var(--font-mono);
      font-size: var(--text-sm);
      color: var(--text-subtle);
      margin-bottom: var(--space-16);
    }
    
    .phase-box__details {
      font-size: var(--text-sm);
      color: var(--text-muted);
      text-align: left;
    }
    
    .phase-box__details ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .phase-box__details ol {
      margin: 0 0 var(--space-16) var(--space-24);
      padding: 0;
    }

    .phase-box__details ol li { margin-bottom: var(--space-16); }

    .phase-box__details ol li ul { margin-top: var(--space-16); }
    
    .phase-box__details li { margin-bottom: var(--space-16); }
    
    @media (max-width: 768px) {
      .journey-arc { padding: var(--space-16); }
      .phase-timeline { grid-template-columns: 1fr; }
      .data-table { display: block; overflow-x: auto; }
      .data-table th,
      .data-table td { white-space: nowrap; }
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
    .orb-2 { width: 400px; height: 400px; background: radial-gradient(circle, var(--color-gold), transparent 70%); bottom: 0; right: -100px; opacity: 0; }
    
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
      .back-link { display: none !important; }
      .sticky-nav, .sticky-nav__overlay { display: none !important; }
      #artifact-dossier { display: block !important; position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding: 40px; font-family: 'Courier New', monospace; border: 4px double #333; box-sizing: border-box; }
      .dossier-header { border-bottom: 2px solid #000; padding-bottom: 20px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: flex-end; }
      .dossier-title { font-size: 24pt; font-weight: bold; text-transform: uppercase; }
      .dossier-meta { text-align: right; font-size: 10pt; line-height: 1.4; }
      .dossier-body { font-size: 12pt; line-height: 1.6; max-width: 80%; }
      .dossier-section { margin-bottom: 30px; }
      .dossier-label { font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #ccc; display: inline-block; margin-bottom: 10px; }
      .dossier-stamp { position: absolute; bottom: 100px; right: 50px; border: 3px solid #B48E55; color: #B48E55; padding: 10px 20px; font-size: 18pt; font-weight: bold; text-transform: uppercase; transform: rotate(-15deg); opacity: 0.8; }
    }

    /* Back to Home Link */
    .back-link {
      position: fixed;
      top: 2rem;
      left: 2rem;
      z-index: 100;
      padding: 0.75rem 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid var(--color-bronze);
      color: var(--color-bronze);
      text-decoration: none;
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      transition: all 0.3s ease;
      border-radius: 4px;
    }
    .back-link:hover {
      background: var(--color-bronze);
      color: var(--dark-bg-deep);
    }

    /* Sticky Nav */
    .sticky-nav {
      position: fixed;
      bottom: var(--space-32);
      left: 50%;
      transform: translateX(-50%);
      z-index: 120;
      width: min(95vw, 900px);
      display: flex;
      justify-content: center;
      pointer-events: none;
    }
    
    .sticky-nav__bar {
      pointer-events: auto;
      display: flex;
      align-items: center;
      gap: var(--space-24);
      padding: var(--space-16) var(--space-32);
      background: var(--dark-bg-deep);
      border: 1px solid var(--color-bronze);
      border-radius: 9999px;
      box-shadow: var(--shadow-lg);
    }
    
    .sticky-nav__dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-bronze);
      box-shadow: 0 0 12px rgba(180, 142, 85, 0.6);
    }
    
    .sticky-nav__link {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--dark-text-muted);
      text-decoration: none;
      transition: color 0.2s ease;
      white-space: nowrap;
    }
    
    .sticky-nav__link:hover { color: var(--color-gold); }
    .sticky-nav__link--active { color: var(--color-gold); }
    
    .sticky-nav__mobile-toggle {
      pointer-events: auto;
      display: none;
      align-items: center;
      gap: var(--space-16);
      padding: var(--space-16) var(--space-24);
      background: var(--dark-bg-deep);
      border: 1px solid var(--color-bronze);
      color: var(--color-gold);
      border-radius: 9999px;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      cursor: pointer;
      box-shadow: var(--shadow-lg);
    }
    
    .sticky-nav__overlay {
      position: fixed;
      inset: 0;
      z-index: 130;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: flex-end;
    }
    
    .sticky-nav__mobile-panel {
      width: 100%;
      background: var(--dark-bg-panel);
      border-top: 1px solid var(--dark-border-subtle);
      padding: var(--space-32);
      border-radius: 24px 24px 0 0;
      box-shadow: var(--shadow-lg);
    }
    
    .sticky-nav__mobile-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--space-24);
      padding-bottom: var(--space-16);
      border-bottom: 1px solid var(--dark-border-subtle);
    }
    
    .sticky-nav__mobile-title {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--color-bronze);
    }
    
    .sticky-nav__mobile-close {
      background: transparent;
      border: 1px solid var(--dark-border-subtle);
      color: var(--dark-text-muted);
      border-radius: 9999px;
      padding: var(--space-8);
      cursor: pointer;
    }
    
    .sticky-nav__mobile-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-16);
    }
    
    .sticky-nav__mobile-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-16);
      border-radius: var(--radius-md);
      background: var(--dark-bg-elevated);
      border: 1px solid var(--dark-border-subtle);
      text-decoration: none;
      color: var(--dark-text-primary);
    }
    
    .sticky-nav__mobile-item:hover {
      border-color: var(--color-bronze);
    }
    
    .sticky-nav__mobile-label {
      font-family: var(--font-display);
      font-size: var(--text-lg);
    }
    
    .sticky-nav__mobile-index {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      color: var(--dark-text-subtle);
    }
    
    @media (max-width: 768px) {
      .sticky-nav__bar { display: none; }
      .sticky-nav__mobile-toggle { display: inline-flex; }
    }
  `}</style>
);

const navItems = [
  { label: 'Threshold', id: 'threshold' },
  { label: 'Convergence', id: 'convergence' },
  { label: 'Tangibles', id: 'tangibles' },
  { label: 'Questions', id: 'questions' },
  { label: 'Next', id: 'next' },
  { label: 'Beyond', id: 'beyond' },
];

export default function AndrewThreshold() {
  const [clockText, setClockText] = useState('CALCULATING...');
  const [printDate, setPrintDate] = useState('');
  const [openAccordion, setOpenAccordion] = useState(1);
  const narrativeZoneRef = useRef(null);
  const crescendoRef = useRef(null);
  const lensRef = useRef(null);
  const lenisRef = useRef(null);
  const updateZoneRef = useRef(() => {});

  useEffect(() => {
    const origin = window.location.origin;
    const ogPng = `${origin}/images/andrew-threshold-og.png`;
    const ogJpg = `${origin}/images/andrew-threshold-og.jpg`;
    const tags = [];

    const addMeta = (attr, value, content) => {
      const tag = document.createElement('meta');
      tag.setAttribute(attr, value);
      tag.setAttribute('content', content);
      tag.setAttribute('data-andrew-og', 'true');
      document.head.appendChild(tag);
      tags.push(tag);
    };

    addMeta('property', 'og:image', ogPng);
    addMeta('property', 'og:image', ogJpg);
    addMeta('property', 'og:image:alt', 'Andrew Threshold');
    addMeta('name', 'twitter:image', ogPng);
    addMeta('name', 'twitter:card', 'summary_large_image');

    return () => {
      tags.forEach((tag) => tag.remove());
    };
  }, []);

  const handleAccordionToggle = (index) => {
    setOpenAccordion((prev) => (prev === index ? -1 : index));
  };
  
  // LENS TRACKING
  useEffect(() => {
    const lens = lensRef.current;
    if (!lens) return undefined;

    let rect = lens.getBoundingClientRect();
    let frame = null;
    let latestPoint = null;

    const updateRect = () => {
      rect = lens.getBoundingClientRect();
    };

    const applyLens = () => {
      if (!latestPoint) {
        frame = null;
        return;
      }

      const x = Math.min(Math.max(latestPoint.clientX - rect.left, 0), rect.width);
      const y = Math.min(Math.max(latestPoint.clientY - rect.top, 0), rect.height);
      lens.style.setProperty('--cursor-x', `${x}px`);
      lens.style.setProperty('--cursor-y', `${y}px`);
      frame = null;
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(applyLens);
    };

    const handlePointerMove = (event) => {
      latestPoint = event.touches ? event.touches[0] : event;
      scheduleUpdate();
    };

    const handlePointerLeave = () => {
      lens.style.setProperty('--cursor-x', `${rect.width / 2}px`);
      lens.style.setProperty('--cursor-y', `${rect.height / 2}px`);
    };

    handlePointerLeave();
    window.addEventListener('resize', updateRect);
    window.addEventListener('scroll', updateRect, { passive: true });
    lens.addEventListener('pointermove', handlePointerMove);
    lens.addEventListener('pointerdown', handlePointerMove);
    lens.addEventListener('pointerleave', handlePointerLeave);
    lens.addEventListener('touchmove', handlePointerMove, { passive: true });
    lens.addEventListener('touchend', handlePointerLeave);

    return () => {
      window.removeEventListener('resize', updateRect);
      window.removeEventListener('scroll', updateRect);
      lens.removeEventListener('pointermove', handlePointerMove);
      lens.removeEventListener('pointerdown', handlePointerMove);
      lens.removeEventListener('pointerleave', handlePointerLeave);
      lens.removeEventListener('touchmove', handlePointerMove);
      lens.removeEventListener('touchend', handlePointerLeave);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  // TENURE CLOCK
  useEffect(() => {
    const startDate = new Date('2024-10-04T09:00:00').getTime();
    setPrintDate(new Date().toISOString().split('T')[0]);

    const updateClock = () => {
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
        setClockText("NEXT PHASE: INITIALIZING");
      } else if (secondHand % 10 === 1) {
        setClockText("PROTOCOL: CONVERGENCE");
      } else {
        setClockText(`${years}Y ${months}M ${days}D ${hours}:${minutes}:${seconds}`);
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // ZONE SWITCHER
  useEffect(() => {
    const body = document.body;
    body.classList.add('andrew-page');

    const updateZone = () => {
      const narrative = narrativeZoneRef.current;
      const crescendo = crescendoRef.current;
      if (!narrative || !crescendo) return;

      const trigger = window.scrollY + window.innerHeight * 0.2;
      const start = narrative.getBoundingClientRect().top + window.scrollY;
      const end = crescendo.getBoundingClientRect().top + window.scrollY;

      if (trigger >= start && trigger < end) {
        body.classList.add('zone-light');
      } else {
        body.classList.remove('zone-light');
      }
    };

    updateZoneRef.current = updateZone;
    updateZone();
    window.addEventListener('scroll', updateZone, { passive: true });
    window.addEventListener('resize', updateZone);

    return () => {
      window.removeEventListener('scroll', updateZone);
      window.removeEventListener('resize', updateZone);
      body.classList.remove('zone-light', 'andrew-page');
    };
  }, []);

  // MATRIX TEXT DECODE
  useEffect(() => {
    const crescendoSection = crescendoRef.current;
    if (!crescendoSection) return;

    const scrambledTexts = crescendoSection.querySelectorAll('.crescendo-text');
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
                }).join(""); if (iterations >= originalText.length) clearInterval(interval);
                iterations += 1 / 3;
              }, 30);
            }, index * 800);
          });
        }
      });
    }, { threshold: 0.5 });

    crescendoObserver.observe(crescendoSection);
    return () => crescendoObserver.disconnect();
  }, []);

  // LENIS SMOOTH SCROLL
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    lenis.on('scroll', () => {
      updateZoneRef.current();
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AndrewStyles />
      
      <Link to="/" className="back-link">← Back to Home</Link>
      <StickyNav items={navItems} />

      {/* HERO SECTION (DARK ZONE) */}
      <section className="lens-container" id="hero" ref={lensRef}>
        <div className="lens-layer-blur">
          <h1>ANDREW<br/>+<br/>ODYSSEY</h1>
        </div>
        <div className="lens-layer-sharp">
          <h1 className="serif">ANDREW<br/>+<br/>ODYSSEY LAB ALIGN</h1>
          <div className="lens-sub">Threshold Convergence</div>
        </div>
      </section>

      {/* SYNCHRONIC BAR */}
      <div className="synchronic-bar">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="hidden md:block">
            <div className="clock-label">Current Trajectory</div>
            <div className="clock-display">PRODUCT CAREER ACCELERATOR</div>
          </div>
          <div className="md:text-right">
            <div className="clock-label">Duration of Cycle</div>
            <div className={`clock-display ${(new Date().getSeconds() % 10 === 0 || new Date().getSeconds() % 10 === 1) ? 'glitch-text' : ''}`}>
              {clockText}
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT (TRANSITIONS TO LIGHT ZONE) */}
      <main className="content-block" id="narrative-zone" ref={narrativeZoneRef}>
        
        {/* SECTION 01: THE THRESHOLD */}
        <div className="section-wrapper" id="threshold">
          <div className="section-header-large">01 // The Threshold</div>
          <h2 className="section-title-main serif">Where the Linear Path Bends</h2>
          
          <p className="narrative-lead">
            You have spent the last cycle building structure. Navigating complexity. But the next phase isn't about maintaining the machine—it's about becoming the <span className="echo-word" data-echo="CREATOR">architect</span> of the new one.
          </p>

          <div className="deep-dive-container">
            <div className="deep-dive-title">State of Play</div>
            <p className="deep-dive-text">
              Andrew, your tenure at Product Career Accelerator (1y 4m) represents a cycle of foundational rigor. You have mastered the mechanics of the ecosystem. The "Threshold" is the precise moment where mastery turns into invention.
            </p>
            <p className="deep-dive-text">
              Most operators stay in the loop of optimization. You are signaling readiness for <span style={{fontWeight: 600, color: 'var(--color-bronze)'}}>non-linear scale</span>. This requires a shift from managing products to managing narratives and systems that generate products.
            </p>
            <ul className="deep-dive-list">
              <li>Transitioning from Operator to Sovereign.</li>
              <li>Identifying the leverage points others miss.</li>
              <li>Structuring the environment for inevitable success.</li>
            </ul>
          </div>

          <div className="section-extended">
            <p>Two people on parallel journeys arriving at a potential convergence point. Not accidental—<strong>serendipitous</strong>.</p>

            <div className="journey-arc">
              <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="brandon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-bronze)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--color-bronze)" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="andrew-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="1" />
                  </linearGradient>
                </defs>
                
                <path
                  d="M 50 250 Q 200 200, 300 150"
                  stroke="url(#brandon-gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="250" r="6" fill="var(--color-bronze)" />
                <text x="50" y="275" fontFamily="var(--font-mono)" fontSize="11" fill="var(--color-bronze-dark)" textAnchor="middle">BRANDON</text>
                
                <path
                  d="M 50 50 Q 200 100, 300 150"
                  stroke="url(#andrew-gradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="50" r="6" fill="var(--color-gold)" />
                <text x="50" y="35" fontFamily="var(--font-mono)" fontSize="11" fill="var(--color-gold-muted)" textAnchor="middle">ANDREW</text>
                
                <circle cx="300" cy="150" r="12" fill="var(--color-gold)" opacity="0.3">
                  <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="150" r="8" fill="var(--color-gold)" />
                <text x="310" y="155" fontFamily="var(--font-mono)" fontSize="12" fill="var(--color-gold-muted)" fontWeight="700">JANUARY 2026</text>
                
                <path
                  d="M 300 150 L 550 150"
                  stroke="var(--color-gold)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <text x="550" y="145" fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-gold-muted)" textAnchor="end">THE JOURNEY</text>
              </svg>
            </div>

            <h3>Andrew's Journey Arc</h3>
            <p>You've mastered systems thinking. Product experience, MBA, operations architecture—you see how things should work and get frustrated when they devolve without you. Your current role is limiting. You're not looking for just a better job; you're seeking a partnership with genuine vision alignment, where your systems expertise can build something meaningful that outlasts individual involvement.</p>

            <div className="proof-point-wrapper">
              <div className="proof-point-header">PROOF POINT • Partnership Foundation</div>
              <h3 className="proof-point-title">Your First Call to Adventure</h3>
              <div className="proof-point-body">The original artifact that made you feel "profoundly seen." This exploration builds on that foundation—moving from Call to Adventure to Crossing the Threshold together.</div>
              <a href="https://andrew-odyssey.netlify.app/" className="proof-point-link" target="_blank" rel="noopener noreferrer">View Original Artifact →</a>
            </div>

            <h3>Brandon's Journey Arc</h3>
            <p>My original dreams were ethnography, cultural anthropology, travel writing—making sense of human meaning and culture. I built the agency to <em>fund</em> those dreams. But the agency became a prison, not a vehicle. 60-80 hour weeks, burning out, the original vision lost.</p>
            <p>January 2026: I'm at a threshold moment, evaluating entire life arc. Do I continue on agency path? Pivot to something else entirely? Or find a way to bring the wisdom from this 10-year journey back to serve others?</p>
            <p>The realization: I'm at the <strong>Return</strong> stage of the Hero's Journey—the wounded healer bringing wisdom back. The agency taught me operational systems, client relationships, team dynamics. The philosophy work (20 years in the making) gave me frameworks for human flourishing. The life design methodology emerging from both. It's time to return with what I've learned.</p>

            <h3>The Shared Foundation</h3>
            <p><strong>You introduced me to the Hero's Journey books.</strong> That's not a small thing—it's a gift that shaped how I understand this threshold moment. We both operate from Stoicism (resilience, virtue, acceptance) and Hero's Journey as operational philosophy, not just metaphor.</p>
            <p>We both value:</p>
            <ul>
              <li><strong>Impact over income</strong> (meaningfulness beats pure financial optimization)</li>
              <li><strong>Human potential</strong> (believing people can grow, not exploiting weaknesses)</li>
              <li><strong>Technology as tool</strong> (can elevate or degrade depending on use)</li>
              <li><strong>Legacy work</strong> (building something that outlasts individual involvement)</li>
            </ul>
            <p>There's a touch of destiny here: <strong>Odyssey Lab</strong> (my company name) + <strong>your Hero's Journey gift</strong> = a convergence that feels less like accident and more like synchronicity (Carl Jung's meaningful coincidence).</p>

            <div className="honest-block">
              <h3>The Convergence Moment</h3>
              <p>January 2026. You're at a threshold, seeking aligned partnership. I'm at a threshold, needing a partner to scale without burning out. Our values align profoundly. Our skills complement (your execution strength, my vision strength). The timing synchronizes (both ready for change, both at decision points).</p>
              <p><strong>This isn't a job offer. It's an exploration of whether our journeys converge here, at this moment, building this specific thing together.</strong></p>
              <div className="highlight-block__callout highlight-block__callout--dark">
                <em>This document frames our exploration, not assumes outcome. We're figuring this out together. Partnership requires mutual conviction—mine that you're THE partner, yours that this is THE journey worth taking.</em>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 02: THE CONVERGENCE */}
        <div className="section-wrapper" id="convergence">
          <div className="section-header-large">02 // The Convergence</div>
          <h2 className="section-title-main serif">Synchronization of Intent</h2>
          
          <p className="narrative-lead">
            Odyssey Lab operates in the unseen spaces between strategy and execution. We don't just build; we <span className="echo-word" data-echo="ALCHEMIZE">transmute</span> vision into tangible reality.
          </p>

          <div className="deep-dive-container">
            <div className="deep-dive-title">The Partnership Mechanics</div>
            <p className="deep-dive-text">
              This is not a vendor/client arrangement. It is a convergence of two high-frequency nodes. The Lab brings the "Systems of Wisdom"—the AI infrastructure, the design language, the strategic clarity. You bring the domain authority and the drive.
            </p>
            <p className="deep-dive-text">
              When these forces converge, we create a "Field Effect"—where your brand doesn't just compete, it defines the physics of its own market.
            </p>
            <ul className="deep-dive-list">
              <li><strong>Strategic Narrative:</strong> Coding the story into the DNA of the operation.</li>
              <li><strong>AI Integration:</strong> Deploying agents, not just tools.</li>
              <li><strong>Design Systems:</strong> Creating a visual language that speaks authority instantly.</li>
            </ul>
          </div>

          <div className="section-extended">
            <p>You've asked this multiple times: <strong>"What is it, how are we getting traction, and what does financial traction look like? What are the KPIs for that?"</strong></p>
            <p>Here's the concrete picture of Q1/H1 2026 success.</p>

            <h3>Financial Traction (Specific Numbers)</h3>
            <p><strong>Current reality:</strong> ~$255K annually (extrapolating recent months). Revenue is there, but operational capacity constrains growth.</p>
            <p><strong>Q1/H1 2026 path to $1M trajectory:</strong></p>
            <ul>
              <li><strong>Website projects (THE core):</strong> 1-2 per month at $10-20K each = $120-240K annually. This is my zone of genius, the original financial model before marketing detour, sustainable and scalable.</li>
              <li><strong>TBC growth:</strong> Currently $12-13K/month ($156K annually). Target: $15K+ by mid-2026 ($180K+ annually). They're expanding 4 → 8 locations, operational systems need intensifies.</li>
              <li><strong>Operational systems consulting:</strong> TBC model scales to other restaurants. 2-3 new clients at $5-10K/month = $120-360K annually.</li>
              <li><strong>Social media pilot:</strong> Elvis + others at $2-3K/month = $24-36K annually (if validated).</li>
              <li><strong>Google Ads outsourcing:</strong> $5-7K from existing interested clients (when capacity unlocks) = $60-84K annually.</li>
            </ul>
            <p><strong>Revenue trajectory:</strong> ~$255K → ~$500K by H1 → ~$1M by year-end (if hiring cohort enables capacity).</p>

            <div className="proof-point-wrapper">
              <div className="proof-point-header">PROOF POINT • Operational Systems</div>
              <h3 className="proof-point-title">TBC: The Breakfast Company Validation</h3>
              <div className="proof-point-body">$80K+ annual engagement proving operational systems work. Industry research, Airtable/no-code validation, specific use cases, prototype mockups. Growing 4 → 8 locations. CEO Dimitri deeply engaged. This is live validation environment for systems thinking.</div>
              <a href="https://tbch-use-case-validation-research.netlify.app/" className="proof-point-link" target="_blank" rel="noopener noreferrer">View TBC Research →</a>
            </div>

            <h3>Operational Traction (What "Working" Looks Like)</h3>
            <p><strong>Brandon's time freed:</strong> This is THE constraint. Currently 70+ hours/week. Target:</p>
            <ul>
              <li>Month 3: Down to 60 hours (10 hours freed)</li>
              <li>Month 6: Down to 50 hours (20+ hours freed)</li>
              <li>Month 12: Down to 40 hours (30+ hours freed for strategic growth, partnerships, vision)</li>
            </ul>

            <p><strong>Communication coordination bottleneck solved:</strong> The problem isn't management oversight (that's fine). It's communication coordination—meeting scheduling, agendas, email routing, follow-up synthesis, pre-work for client conversations. 30+ hours/week overhead. Andrew owns this domain, frees Brandon for highest-leverage work.</p>

            <p><strong>Quality gates operational:</strong></p>
            <ul>
              <li>Current: &lt;50% of deliverables go through QA before clients see them (reactive firefighting)</li>
              <li>Month 3: 65% through quality gates (proactive catching)</li>
              <li>Month 6: 80%+ through quality gates (mature processes)</li>
            </ul>

            <p><strong>Hiring infrastructure:</strong></p>
            <ul>
              <li>Q1: Design complete (job descriptions, sourcing channels, interview protocols, onboarding design)</li>
              <li>H1: Ready to execute 8-person cohort hiring (if foundation strong)</li>
              <li>H2: Cohort hired and integrated (if Month 6 partnership validated)</li>
            </ul>

            <h3>Team Capacity (The Unlock)</h3>
            <p>The <strong>hiring cohort</strong> is the meta-skill that unlocks everything else. Without it: pipeline exists but can't execute. With it: capacity scales to match opportunity.</p>
            <p><strong>8-person "party system" (D&D analogy):</strong></p>
            <ul>
              <li>Experienced VAs (3-5 years, English fluency at Brandon's standard)</li>
              <li>Support-driven model (Volusion alumni approach—adaptability over rigid specialization)</li>
              <li>Specialties: Web Dev Assistant, Implementation Specialist, Communications/EA, Social Media/Ads</li>
              <li>Cross-functional collaboration (everyone has specialty but helps across domains)</li>
              <li>Buddy system coverage (no single points of failure)</li>
            </ul>

            <h3>Partnership Chemistry (Non-Negotiable)</h3>
            <p>Operational success means nothing if partnership doesn't work. Checkpoints:</p>
            <ul>
              <li><strong>Month 3:</strong> Are we working well together? No major conflicts? Muhammad feels empowered (not bypassed)? Andrew engaged (not just tolerating)? → Go/continue decision</li>
              <li><strong>Month 6:</strong> Partnership validated? Time freed 20+ hours? Hiring infrastructure operational? TBC strong? Quality gates mature? → Commit to Phase 2 or part friends with clarity</li>
              <li><strong>Month 12:</strong> Shadow equity converting to real equity? Strategic co-ownership feeling genuine? → Long-term partnership commitment</li>
            </ul>

            <h3>KPIs Dashboard</h3>
            <table className="data-table data-table--emphasis">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Current</th>
                  <th>Month 3</th>
                  <th>Month 6</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brandon's weekly hours</td>
                  <td>70+</td>
                  <td>60</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>Coordination time</td>
                  <td>30+ hrs</td>
                  <td>20 hrs</td>
                  <td>10 hrs</td>
                </tr>
                <tr>
                  <td>Quality gate coverage</td>
                  <td>&lt;50%</td>
                  <td>65%</td>
                  <td>80%+</td>
                </tr>
                <tr>
                  <td>TBC monthly revenue</td>
                  <td>$12-13K</td>
                  <td>$13-14K</td>
                  <td>$15K+</td>
                </tr>
                <tr>
                  <td>Website projects/month</td>
                  <td>0.5</td>
                  <td>1</td>
                  <td>1.5-2</td>
                </tr>
                <tr>
                  <td>Total monthly revenue</td>
                  <td>~$21K</td>
                  <td>~$35K</td>
                  <td>~$50K+</td>
                </tr>
                <tr>
                  <td>Hiring infrastructure</td>
                  <td>0%</td>
                  <td>Design 50%</td>
                  <td>Ready 100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* TANGIBLES */}
        <div className="section-wrapper">
          <div className="section-header-minor">TANGIBLES</div>
          <h3 className="section-title-sub serif">Numbers, Proof, Risk</h3>

          <div className="section-extended">
            <h3 id="tangibles">The Financial Picture</h3>
            <p>Clear, specific, no ambiguity. Phased approach with checkpoints.</p>

            <div className="phase-timeline">
              <div className="phase-box">
                <div className="phase-box__number">1</div>
                <div className="phase-box__title">Proof of Concept</div>
                <div className="phase-box__duration">Months 1-6</div>
                <div className="phase-box__details">
                  <p><strong>Compensation:</strong> $5K/month</p>
                  <p><strong>Equity:</strong> None (too early)</p>
                  <p><strong>Focus:</strong> Chemistry validation, systems setup, Muhammad transition clarity</p>
                  <p><strong>Checkpoint:</strong> Month 6 go/no-go decision</p>
                </div>
              </div>
              
              <div className="phase-box">
                <div className="phase-box__number">2</div>
                <div className="phase-box__title">Shadow Equity</div>
                <div className="phase-box__duration">Months 6-18</div>
                <div className="phase-box__details">
                  <p><strong>Compensation:</strong> $7-10K/month</p>
                  <p><strong>Equity:</strong> 10-15% shadow (provisional)</p>
                  <p><strong>Focus:</strong> Hiring infrastructure, capacity scaling, revenue growth</p>
                  <p><strong>Checkpoint:</strong> Month 12 shadow → real equity decision</p>
                </div>
              </div>
              
              <div className="phase-box">
                <div className="phase-box__number">3</div>
                <div className="phase-box__title">Real Partnership</div>
                <div className="phase-box__duration">Month 18+</div>
                <div className="phase-box__details">
                  <p><strong>Compensation:</strong> $10-15K/month</p>
                  <p><strong>Equity:</strong> 10-20% real ownership</p>
                  <p><strong>Focus:</strong> Strategic co-ownership, long-term vision</p>
                  <p><strong>Vesting:</strong> 5-year with succession planning</p>
                </div>
              </div>
            </div>

            <h4>Shadow Equity Explained</h4>
            <p><strong>What it is:</strong> Provisional ownership percentage that converts to real equity if we both commit long-term. Protects against early mis-hire while building trust.</p>
            <p><strong>How it works:</strong></p>
            <ul>
              <li>Phase 2 (Mo 6-18): You're granted 10-15% shadow equity (conceptual range, TBD through conversation)</li>
              <li>Operates like real equity in terms of decision-making voice and strategic input</li>
              <li>Does NOT have financial value unless/until converted</li>
              <li>Month 12 checkpoint: If partnership validated, shadow converts to real equity with vesting schedule</li>
              <li>If partnership doesn't work out, shadow equity disappears (no payout, clean separation)</li>
            </ul>

            <h4>Compensation Trajectory Nuance</h4>
            <p><strong>Phase 1 ($5K/month):</strong> Lower than your current $7-15K/month range, acknowledged. Low risk for both sides. Allows genuine exploration without pressure.</p>
            <p><strong>Phase 2 ($7-10K/month):</strong> Baseline match to your current average. Target: Get you to or above current income by end of Year 1.</p>
            <p><strong>Phase 3 ($10-15K/month):</strong> Competitive product leader compensation. Real equity ownership adds long-term value beyond monthly salary.</p>

            <div className="highlight-block">
              <h4>Critical Framing: Performance Upside</h4>
              <p><strong>Numbers above are starting points, not fixed caps.</strong> If we hit aggressive targets (reaching $1M+ annual run rate, averaging $100K months by Q3/Q4), your compensation scales significantly higher.</p>
              <p>This rewards you for being instrumental to growth, not pegging you to predetermined levels regardless of performance.</p>
            </div>

            <h4>Vesting & Succession Philosophy</h4>
            <p><strong>Not locked in for 10 years.</strong> Vesting structure includes succession planning. Full vesting doesn't require staying 10 years—it means building systems that succeed beyond you.</p>
            <p>Protects both: You're not chained down, we both build for long-term value. If you leave after 3-4 years with systems running smoothly, that's success, not failure.</p>

            <h3>Why This Could Work</h3>
            <h4>Complementary Strengths (Not Redundancies)</h4>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>Brandon's Strength</th>
                  <th>Andrew's Strength</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vision vs. Execution</td>
                  <td>Big picture, strategic direction</td>
                  <td>Operational systems, execution</td>
                </tr>
                <tr>
                  <td>Client Relationships</td>
                  <td>Rapport, trust, philosophy alignment</td>
                  <td>Delivery excellence, quality assurance</td>
                </tr>
                <tr>
                  <td>Product Development</td>
                  <td>What should exist, why it matters</td>
                  <td>How to build it, systems architecture</td>
                </tr>
                <tr>
                  <td>Team Building</td>
                  <td>Culture, values, inspiration</td>
                  <td>Hiring process, structure, scalability</td>
                </tr>
                <tr>
                  <td>Decision Style</td>
                  <td>Intuitive, philosophical, long-view</td>
                  <td>Analytical, data-driven, systems-level</td>
                </tr>
              </tbody>
            </table>

            <p>Neither of us is the complete package. Together, we cover more territory than either could alone.</p>

            <h4>Shared Values (The Foundation)</h4>
            <ul>
              <li><strong>Stoicism as operational philosophy:</strong> Resilience, virtue, acceptance of what we can't control, focus on what we can</li>
              <li><strong>Hero's Journey as life framework:</strong> Not metaphor, but actual structure for navigating threshold moments and transformation</li>
              <li><strong>Human potential over exploitation:</strong> Believing people can grow, building systems that elevate rather than extract</li>
              <li><strong>Impact over pure income:</strong> Meaningfulness matters, financial success enables mission rather than replacing it</li>
              <li><strong>Legacy work:</strong> Building something that outlasts us both, succession planning as design principle from start</li>
              <li><strong>Intellectual honesty:</strong> No bullshit, no pretense, calling things what they are</li>
            </ul>

            <h4>The Timing Synchronicity</h4>
            <p>Both at threshold moments. Both ready for change. Both seeking something specific:</p>
            <ul>
              <li><strong>Andrew:</strong> Partnership with vision alignment, systems-building opportunity, equity in meaningful work</li>
              <li><strong>Brandon:</strong> Execution partner to scale without burning out, systems expertise to unlock capacity, co-creator for long-term vision</li>
            </ul>
            <p>Not just that we <em>could</em> work together—we're both positioned where this partnership addresses exactly what we're seeking.</p>

            <div className="honest-block">
              <h4>The Serendipity Element</h4>
              <p>You introduced Brandon to the Hero's Journey books. Brandon named his company Odyssey Lab years before meeting you. The convergence of journey-focused philosophy + actual lived journey architecture feels less like coincidence.</p>
              <p>Carl Jung called this <strong>synchronicity</strong>—meaningful coincidence. Not mystical, but recognition that some patterns emerge when conditions align.</p>
              <p><em>This doesn't guarantee success. But it suggests paying attention.</em></p>
            </div>

            <h3>Honest Risks</h3>
            <div className="honest-block">
              <p>No sugarcoating. Partnership carries real risks. Acknowledging them doesn't weaken the case—it strengthens it through honesty.</p>

              <h4>Risk 1: Chemistry Doesn't Work</h4>
              <p><strong>Reality:</strong> We've had good conversations, but sustained day-to-day partnership is different than exploratory discussions. We might not gel operationally.</p>
              <p><strong>Mitigation:</strong> Phase 1 (Mo 1-6) is designed as low-risk proof of concept. Month 3 checkpoint catches early friction. Month 6 is explicit go/no-go decision. If it's not working, we part as friends before deep entanglement.</p>
              <p><strong>Honest flag:</strong> This is real risk. Can't know for certain until we're in it.</p>

              <h4>Risk 2: Muhammad Situation Gets Messy</h4>
              <p><strong>Reality:</strong> Clarifying roles with Muhammad could create friction, resentment, or operational disruption. Worst case: He leaves, creating technical continuity gap.</p>
              <p><strong>Mitigation:</strong> Before Andrew joins, explicit conversation with Muhammad about roles. Ongoing transparency during Phase 1. If triumvirate doesn't work, flexibility to adjust structure. Brandon takes ownership of managing this transition, not placing burden on Andrew.</p>
              <p><strong>Honest flag:</strong> This is sensitive. No guarantee it goes smoothly.</p>

              <h4>Risk 3: Financial Targets Don't Hit</h4>
              <p><strong>Reality:</strong> $1M trajectory by year-end is aggressive. If revenue doesn't scale as projected, Andrew's compensation/equity trajectory might need adjustment.</p>
              <p><strong>Mitigation:</strong> Phase-based checkpoints with honest re-evaluation. If revenue underperforms, we discuss options: adjust timeline, reduce scope, or acknowledge partnership isn't viable yet. Shadow equity protects both sides during Phase 2.</p>
              <p><strong>Honest flag:</strong> Startup-level volatility exists. Not corporate stability.</p>

              <h4>Risk 4: Hiring Cohort Fails</h4>
              <p><strong>Reality:</strong> The 8-person "party system" might not materialize as planned. Sourcing, vetting, onboarding could take longer or cost more than projected. Capacity unlock might not happen.</p>
              <p><strong>Mitigation:</strong> Andrew's expertise in hiring systems is core value proposition. If this is where partnership adds most value, then success here validates entire collaboration. If hiring doesn't work, partnership didn't serve its purpose.</p>
              <p><strong>Honest flag:</strong> This is THE meta-skill test. If we can't crack hiring, we can't scale.</p>

              <h4>Risk 5: June Paternity Leave Derails Momentum</h4>
              <p><strong>Reality:</strong> If partnership starts March, April-May builds foundation, then Andrew takes paternity leave in June. Systems might break without him.</p>
              <p><strong>Mitigation:</strong> This is actually a FEATURE, not bug. June leave TESTS succession philosophy. Can systems run without Andrew? If yes: validation we're building right. If no: valuable learning about dependencies, surfaces gaps to address in July.</p>
              <p><strong>Honest flag:</strong> Timing is tight. But forced systems test is beneficial long-term.</p>

              <h4>Risk 6: Brandon's Agency Burnout Persists</h4>
              <p><strong>Reality:</strong> If Brandon's 70+ hour weeks don't decrease, partnership didn't solve core problem. Andrew might end up managing operational chaos rather than building strategic systems.</p>
              <p><strong>Mitigation:</strong> Brandon's time freed is PRIMARY KPI. If Month 3 shows no improvement (still 70+ hours), that's signal something isn't working. Month 6 checkpoint evaluates whether partnership actually unlocked time or just added complexity.</p>
              <p><strong>Honest flag:</strong> If Brandon can't let go of operational grip, partnership can't succeed.</p>
            </div>
          </div>
        </div>

        {/* QUESTIONS */}
        <div className="section-wrapper">
          <div className="section-header-minor">QUESTIONS</div>
          <h3 className="section-title-sub serif" id="questions">Frequently Asked Questions</h3>

          <div className="section-extended">
            <p>These are questions Andrew has raised (directly or implicitly) during our conversations. Answering them comprehensively.</p>

            <div className="accordion">
              <div className={`accordion__item ${openAccordion === 0 ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="accordion__header"
                  aria-expanded={openAccordion === 0}
                  onClick={() => handleAccordionToggle(0)}
                >
                  <div className="accordion__header-content">
                    <div className="accordion__eyebrow">QUESTION 01</div>
                    <h4 className="accordion__title">What's the product model? What are we actually selling?</h4>
                    <p className="accordion__preview">Odyssey Lab isn't "doing everything for everyone" — it's focused product areas with clear ICP and proven validation.</p>
                  </div>
                  <div className="accordion__icon">▼</div>
                </button>
                <div className="accordion__content">
                  <div className="accordion__content-inner">
                    <h4>Three Core Product Lines</h4>
                    
                    <p><strong>1. Website Development (The Original Core)</strong></p>
                    <ul>
                      <li><strong>What:</strong> Custom WordPress sites for professional services (coaches, consultants, therapists, small B2B)</li>
                      <li><strong>Price point:</strong> $10-20K per project</li>
                      <li><strong>Volume:</strong> 1-2 per month = $120-240K annually</li>
                      <li><strong>Why it works:</strong> Brandon's zone of genius, high-touch, relationship-driven, proven demand</li>
                      <li><strong>ICP:</strong> Professional services needing credible online presence, not DIY-capable, value craftsmanship</li>
                    </ul>
                    
                    <p><strong>2. Operational Systems Consulting (TBC Model)</strong></p>
                    <ul>
                      <li><strong>What:</strong> Airtable/no-code operational systems for restaurants, small businesses with complexity</li>
                      <li><strong>Price point:</strong> $5-10K/month retainer</li>
                      <li><strong>Volume:</strong> TBC validated at $12-13K/month, scalable to 2-3 additional clients = $120-360K annually</li>
                      <li><strong>Why it works:</strong> TBC is live proof, industry research done, specific use cases validated, CEO deeply engaged</li>
                      <li><strong>ICP:</strong> Multi-location restaurants, service businesses with operational complexity needing systems without hiring full-time ops staff</li>
                    </ul>
                    
                    <p><strong>3. Social Media/Ads Management (Pilot Validation)</strong></p>
                    <ul>
                      <li><strong>What:</strong> Done-for-you social media + ads for service businesses</li>
                      <li><strong>Price point:</strong> $2-3K/month per client</li>
                      <li><strong>Volume:</strong> Elvis + 1-2 others = $24-36K annually (if validated)</li>
                      <li><strong>Why it might work:</strong> Elvis already paying, interested leads exist, Brandon has execution capability if capacity unlocks</li>
                      <li><strong>Risk:</strong> Most speculative. Validate or kill quickly in Phase 1.</li>
                    </ul>
                    
                    <p><strong>Adjacent Opportunity (Not Core Yet): Google Ads Outsourcing</strong></p>
                    <ul>
                      <li>Existing interested clients when capacity unlocks</li>
                      <li>$5-7K potential annual revenue</li>
                      <li>Low priority until core product lines proven</li>
                    </ul>
                    
                    <h4>Why These Three?</h4>
                    <ul>
                      <li><strong>Websites:</strong> Proven, Brandon's strength, sustainable</li>
                      <li><strong>Operational systems:</strong> Validated through TBC, scalable model, Andrew's systems expertise applies directly</li>
                      <li><strong>Social/ads:</strong> Market demand exists, execution constrained by capacity, quick validation possible</li>
                    </ul>
                    
                    <p><strong>Not doing:</strong> Broad agency services, generic marketing, anything without clear ICP. Focus over sprawl.</p>
                  </div>
                </div>
              </div>

              <div className={`accordion__item ${openAccordion === 1 ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="accordion__header"
                  aria-expanded={openAccordion === 1}
                  onClick={() => handleAccordionToggle(1)}
                >
                  <div className="accordion__header-content">
                    <div className="accordion__eyebrow">QUESTION 02</div>
                    <h4 className="accordion__title">How do we actually get from $255K to $1M?</h4>
                    <p className="accordion__preview">Concrete path with specific numbers, not handwaving. The hiring cohort is the unlock mechanism.</p>
                  </div>
                  <div className="accordion__icon">▼</div>
                </button>
                <div className="accordion__content">
                  <div className="accordion__content-inner">
                    <h4>Current State Breakdown</h4>
                    <p><strong>~$255K annual run rate (extrapolated from recent months):</strong></p>
                    <ul>
                      <li>TBC: $12-13K/month = $156K annually</li>
                      <li>Website projects: ~0.5/month at $10K average = ~$60K annually</li>
                      <li>Social media (Elvis): ~$2.5K/month = $30K annually</li>
                      <li>Misc/consulting: ~$9K annually</li>
                    </ul>
                    
                    <h4>Constraint Diagnosis</h4>
                    <p><strong>THE bottleneck:</strong> Brandon's time. Working 70+ hours/week but 30+ hours consumed by coordination overhead (meeting scheduling, email routing, follow-up synthesis, pre-work for client conversations).</p>
                    <p><strong>Result:</strong> Pipeline exists but can't execute. Website inquiries sitting. Operational systems leads not followed up. Social media pilot can't expand.</p>
                    
                    <h4>Unlock Mechanism: Hiring Cohort</h4>
                    <p><strong>Phase 1-2 Focus (Mo 1-6):</strong> Andrew designs hiring infrastructure</p>
                    <ul>
                      <li>Job descriptions for 8-person "party system"</li>
                      <li>Sourcing channels (Philippines, experienced VAs, English fluency at Brandon's standard)</li>
                      <li>Interview protocols, skill validation, buddy system onboarding</li>
                      <li>Support-driven model (adaptability over rigid specialization)</li>
                    </ul>
                    
                    <p><strong>H1 2026 (Mo 6+):</strong> Execute hiring if foundation strong</p>
                    <ul>
                      <li>Month 6 checkpoint: Is partnership validated? Is hiring design complete?</li>
                      <li>H1: Begin hiring cohort (8 people over 2-3 months)</li>
                      <li>Specialties: Web Dev Assistants (2), Implementation Specialists (2), Communications/EA (2), Social Media/Ads (2)</li>
                      <li>Cross-functional collaboration (everyone has specialty but helps across domains)</li>
                    </ul>
                    
                    <h4>Revenue Path to $1M</h4>
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Product Line</th>
                          <th>Current Annual</th>
                          <th>H1 2026 Target</th>
                          <th>Year-End Target</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>TBC Operational Systems</td>
                          <td>$156K</td>
                          <td>$180K</td>
                          <td>$180K</td>
                        </tr>
                        <tr>
                          <td>Website Projects</td>
                          <td>$60K</td>
                          <td>$120K</td>
                          <td>$240K</td>
                        </tr>
                        <tr>
                          <td>New Ops Systems Clients</td>
                          <td>$0</td>
                          <td>$60K</td>
                          <td>$180K</td>
                        </tr>
                        <tr>
                          <td>Social Media/Ads</td>
                          <td>$30K</td>
                          <td>$30K</td>
                          <td>$72K</td>
                        </tr>
                        <tr>
                          <td>Google Ads Outsourcing</td>
                          <td>$0</td>
                          <td>$30K</td>
                          <td>$84K</td>
                        </tr>
                        <tr>
                          <td>Misc/Consulting</td>
                          <td>$9K</td>
                          <td>$20K</td>
                          <td>$30K</td>
                        </tr>
                        <tr className="data-table__total">
                          <td>TOTAL</td>
                          <td>$255K</td>
                          <td>~$440K</td>
                          <td>~$786K - $1M+</td>
                        </tr>
                      </tbody>
                    </table>
                    
                    <h4>Why This Path Is Plausible (Not Fantasy)</h4>
                    <ul>
                      <li><strong>Website projects:</strong> Demand exists NOW. Inquiries sitting. Capacity is constraint. 1-2/month at $10-20K is conservative if hiring cohort executes.</li>
                      <li><strong>TBC growth:</strong> Already at $12-13K/month. Expanding 4 → 8 locations. Systems need intensifies. $15K+ by mid-2026 is realistic.</li>
                      <li><strong>New ops systems clients:</strong> TBC model proven. Industry research done. 2-3 additional restaurant clients at $5-10K/month scales TBC approach.</li>
                      <li><strong>Social media:</strong> Elvis validated. Other leads interested. If validated in Phase 1, expand. If not, kill quickly.</li>
                      <li><strong>Google Ads:</strong> Existing interested clients. Lowest priority but unlocks when capacity exists.</li>
                    </ul>
                    
                    <p><strong>Critical dependencies:</strong></p>
                    <ol>
                      <li>Andrew's hiring infrastructure works (8-person cohort materializes)</li>
                      <li>Brandon's time actually frees (coordination offloaded to Andrew)</li>
                      <li>Quality gates operational (deliverables don't degrade with volume increase)</li>
                    </ol>
                    
                    <p>If these three happen, $1M by year-end is achievable. If not, we diagnose why at Month 6 checkpoint.</p>
                  </div>
                </div>
              </div>

              <div className={`accordion__item ${openAccordion === 2 ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="accordion__header"
                  aria-expanded={openAccordion === 2}
                  onClick={() => handleAccordionToggle(2)}
                >
                  <div className="accordion__header-content">
                    <div className="accordion__eyebrow">QUESTION 03</div>
                    <h4 className="accordion__title">What's equity structure and decision-making authority?</h4>
                    <p className="accordion__preview">Clear ownership percentages, decision domains, and deadlock protocol. Brandon has final veto but shouldn't need it often.</p>
                  </div>
                  <div className="accordion__icon">▼</div>
                </button>
                <div className="accordion__content">
                  <div className="accordion__content-inner">
                    <h4>Equity Progression</h4>
                    
                    <p><strong>Phase 1 (Mo 1-6): Proof of Concept</strong></p>
                    <ul>
                      <li>$5K/month (low-risk exploration rate)</li>
                      <li>No equity (too early for ownership discussion)</li>
                      <li>Focus: Chemistry validation, systems setup</li>
                    </ul>
                    
                    <p><strong>Phase 2 (Mo 6-18): Shadow Equity</strong></p>
                    <ul>
                      <li>$7-10K/month (baseline match to current income)</li>
                      <li>Shadow equity: Provisional ownership percentage (10-15% range conceptual) that converts to real equity if we both commit long-term</li>
                      <li>Protects against early mis-hire while building trust</li>
                      <li>Annual review triggers</li>
                    </ul>
                    
                    <p><strong>Phase 3 (Mo 18+): Real Equity Partnership</strong></p>
                    <ul>
                      <li>$10-15K/month (competitive product leader compensation)</li>
                      <li>Shadow equity converts to real ownership</li>
                      <li>Equity range: 10-20% (TBD through honest conversation)</li>
                      <li>Vesting schedule: Not locked in for 10 years—succession planning built in</li>
                    </ul>
                    
                    <h4>Shared Strategic Decision-Making</h4>
                    
                    <p><strong>Your independent domains:</strong> Product roadmap, systems architecture, hiring, quality standards</p>
                    <p><strong>Brandon's domains:</strong> Vision, major capital, client strategy</p>
                    <p><strong>Shared domains:</strong> Business model, market strategy (we decide together)</p>
                    <p><strong>Deadlock:</strong> Brandon veto (necessary for final authority, but rare use)</p>
                    
                    <p><strong>Culture expectation:</strong> You push back hard when you see better path. Brandon listens deeply. Better answer emerges together or Brandon makes tough call and owns it.</p>
                  </div>
                </div>
              </div>

              <div className={`accordion__item ${openAccordion === 3 ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="accordion__header"
                  aria-expanded={openAccordion === 3}
                  onClick={() => handleAccordionToggle(3)}
                >
                  <div className="accordion__header-content">
                    <div className="accordion__eyebrow">QUESTION 04</div>
                    <h4 className="accordion__title">What if Brandon's vision and my strategic perspective conflict?</h4>
                    <p className="accordion__preview">That's the point. Partnership means constructive tension, not agreement theater.</p>
                  </div>
                  <div className="accordion__icon">▼</div>
                </button>
                <div className="accordion__content">
                  <div className="accordion__content-inner">
                    <p><strong>That's the point.</strong> You're not hired to execute—you're hired to challenge and co-create.</p>
                    
                    <h4>Decision Framework</h4>
                    <ul>
                      <li><strong>Your domains:</strong> You make call (product, systems, hiring)</li>
                      <li><strong>Brandon's domains:</strong> He makes call (vision, capital, clients)</li>
                      <li><strong>Shared domains:</strong> We debate together (business model, market strategy)</li>
                      <li><strong>Deadlock:</strong> Brandon veto (but encouraged to use sparingly)</li>
                    </ul>
                    
                    <h4>Real Partnership Means</h4>
                    <ul>
                      <li>You challenge assumptions when you see better path</li>
                      <li>Brandon explains reasoning but isn't defensive</li>
                      <li>We find better answer together through collision of perspectives</li>
                      <li><strong>If we agree too often, one of us is redundant</strong></li>
                    </ul>
                    
                    <p><strong>Example scenarios:</strong></p>
                    
                    <p><strong>Scenario 1: Product Roadmap Conflict</strong></p>
                    <p>Andrew wants to prioritize operational systems consulting expansion. Brandon wants to double down on website projects.</p>
                    <p><strong>Resolution:</strong> Product roadmap is Andrew's domain. He makes case for why ops systems has better margin/scalability. Brandon listens, challenges assumptions, but ultimately defers if Andrew's logic holds. If Brandon has capital concerns or client strategy reasons, he explains. Better answer emerges through debate.</p>
                    
                    <p><strong>Scenario 2: Client Strategy Conflict</strong></p>
                    <p>Brandon wants to pursue high-touch, boutique clients. Andrew sees opportunity in mid-market with higher volume.</p>
                    <p><strong>Resolution:</strong> Client strategy is Brandon's domain. Andrew makes case for why mid-market scales better. Brandon explains why high-touch preserves quality and brand positioning. Brandon makes final call, but Andrew's input shapes the decision. If Brandon chooses path Andrew thinks is suboptimal, Andrew says so clearly, then executes with full commitment.</p>
                    
                    <p><strong>Scenario 3: Shared Domain Conflict</strong></p>
                    <p>Business model evolution—should we shift to pure retainer model vs. project-based?</p>
                    <p><strong>Resolution:</strong> This is shared domain. We debate deeply. Andrew brings data on scalability, predictability, systems implications. Brandon brings client relationship insights, cash flow concerns, vision alignment. We find synthesis or compromise. If true deadlock (rare), Brandon has veto but owns the decision publicly and privately.</p>
                    
                    <h4>Culture of Constructive Conflict</h4>
                    <p>Disagreement is sign of engagement, not dysfunction. If we're not arguing, we're not thinking hard enough. But arguments must be:</p>
                    <ul>
                      <li><strong>Issue-focused, not personal</strong></li>
                      <li><strong>Data-informed where possible</strong></li>
                      <li><strong>Resolution-oriented</strong> (debate to decide, not to win)</li>
                      <li><strong>Commitment after decision</strong> (disagree and commit if override happens)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`accordion__item ${openAccordion === 4 ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="accordion__header"
                  aria-expanded={openAccordion === 4}
                  onClick={() => handleAccordionToggle(4)}
                >
                  <div className="accordion__header-content">
                    <div className="accordion__eyebrow">QUESTION 05</div>
                    <h4 className="accordion__title">What if Muhammad situation doesn't work out?</h4>
                    <p className="accordion__preview">Roles being clarified actively, not stuck in uncertainty. Explicit conversation before Andrew joins. Flexibility built in.</p>
                  </div>
                  <div className="accordion__icon">▼</div>
                </button>
                <div className="accordion__content">
                  <div className="accordion__content-inner">
                    <p>Roles being clarified actively (not stuck in uncertainty—moving forward with definition process).</p>
                    
                    <h4>Triumvirate Structure Clarifies Boundaries</h4>
                    <ul>
                      <li><strong>Muhammad:</strong> Technical implementation</li>
                      <li><strong>Andrew:</strong> Systems architecture, hiring</li>
                      <li><strong>Ops Manager:</strong> Day-to-day orchestration</li>
                    </ul>
                    
                    <p><strong>Before Andrew joins:</strong> Explicit conversation with Muhammad about roles, expectations, authority boundaries. No surprises.</p>
                    <p><strong>Throughout Phase 1:</strong> Regular check-ins. Is Muhammad empowered or bypassed? Is collaboration productive or frustrating?</p>
                    
                    <h4>Backup Plan</h4>
                    <p>If triumvirate doesn't work after honest attempt, adjust structure. Partnerships require flexibility. Could be:</p>
                    <ul>
                      <li>Muhammad focuses purely on technical work, Andrew absorbs some of his current operational scope</li>
                      <li>Muhammad transitions to different role</li>
                      <li>Other adjustment we discover through honest assessment</li>
                    </ul>
                    
                    <p><strong>Not avoiding problem—actively managing it.</strong></p>
                  </div>
                </div>
              </div>

              <div className={`accordion__item ${openAccordion === 5 ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="accordion__header"
                  aria-expanded={openAccordion === 5}
                  onClick={() => handleAccordionToggle(5)}
                >
                  <div className="accordion__header-content">
                    <div className="accordion__eyebrow">QUESTION 06</div>
                    <h4 className="accordion__title">What's compensation trajectory?</h4>
                    <p className="accordion__preview">Specific numbers, phase-by-phase. Shadow equity bridge to real ownership. Performance upside if we hit targets.</p>
                  </div>
                  <div className="accordion__icon">▼</div>
                </button>
                <div className="accordion__content">
                  <div className="accordion__content-inner">
                    <h4>Phase 1 (Mo 1-6)</h4>
                    <ul>
                      <li>$5K/month (proof-of-concept rate)</li>
                      <li>Lower than your current $7-15K/month range, acknowledged</li>
                      <li>Low risk for both sides</li>
                      <li>No equity discussion until chemistry validated</li>
                    </ul>
                    
                    <h4>Phase 2 (Mo 6-18)</h4>
                    <ul>
                      <li>$7-10K/month (baseline match to your current average)</li>
                      <li>Shadow equity: 10-15% range conceptual (provisional, converts to real if long-term commit)</li>
                      <li>Target: Get you to or above current income by end of Year 1</li>
                    </ul>
                    
                    <h4>Phase 3 (Mo 18+)</h4>
                    <ul>
                      <li>$10-15K/month (competitive product leader compensation)</li>
                      <li>Real equity ownership (shadow converts)</li>
                      <li>Vesting schedule: 5-year with succession planning (not locked in for 10 years)</li>
                    </ul>
                    
                    <div className="highlight-block">
                      <p><strong>CRITICAL FRAMING:</strong> Numbers above are starting points, not fixed caps. If we hit aggressive targets (reaching $1M+ annual run rate, averaging $100K months by Q3/Q4), your compensation scales significantly higher. This rewards you for being instrumental to growth, not pegging you to predetermined levels regardless of performance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`accordion__item ${openAccordion === 6 ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="accordion__header"
                  aria-expanded={openAccordion === 6}
                  onClick={() => handleAccordionToggle(6)}
                >
                  <div className="accordion__header-content">
                    <div className="accordion__eyebrow">QUESTION 07</div>
                    <h4 className="accordion__title">What's realistic timeline to real equity partnership?</h4>
                    <p className="accordion__preview">18-24 months if everything works well, but with checkpoints. Not locked in for 10 years.</p>
                  </div>
                  <div className="accordion__icon">▼</div>
                </button>
                <div className="accordion__content">
                  <div className="accordion__content-inner">
                    <p>18-24 months if everything works well, but with checkpoints:</p>
                    <p><strong>Month 6:</strong> Do we both want to continue? (Go/no-go decision. If no: part friends.)</p>
                    <p><strong>Month 12:</strong> Is product model proving out? (Shadow equity decision. Is partnership feeling genuine?)</p>
                    <p><strong>Month 18:</strong> Convert shadow equity → real equity and commit to Phase 3 long-term.</p>
                    <p><strong>Not locked in for 10 years:</strong> Vesting structure includes succession planning. Full vesting doesn't require staying 10 years—it means building systems that succeed beyond you. Protects both: you're not chained down, we both build for long-term value.</p>
                  </div>
                </div>
              </div>

              <div className={`accordion__item ${openAccordion === 7 ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="accordion__header"
                  aria-expanded={openAccordion === 7}
                  onClick={() => handleAccordionToggle(7)}
                >
                  <div className="accordion__header-content">
                    <div className="accordion__eyebrow">QUESTION 08</div>
                    <h4 className="accordion__title">What if June paternity derails momentum?</h4>
                    <p className="accordion__preview">Timeline accounts for this. Not derailment—it's a test of succession philosophy.</p>
                  </div>
                  <div className="accordion__icon">▼</div>
                </button>
                <div className="accordion__content">
                  <div className="accordion__content-inner">
                    <p>Timeline accounts for this. Not derailment—it's TEST.</p>
                    <p><strong>March decision → April-May foundation → June leave:</strong></p>
                    <p>If partnership starts in March, April-May builds systems. June paternity leave TESTS succession philosophy. Can systems run without Andrew?</p>
                    <p><strong>If systems break during paternity:</strong> Valuable learning. Reveals dependencies, surfaces gaps. Adjust in July when Andrew returns.</p>
                    <p><strong>If systems hold during paternity:</strong> Validation that we're building sustainable operations, not Andrew-dependent heroics.</p>
                    <div className="highlight-block">
                      <p><em>This is feature, not bug. Succession planning philosophy means building systems that don't require any single person's constant presence. Paternity leave is early stress test. Better to discover gaps in Month 3 than Year 3.</em></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="highlight-block">
              <p>These questions aren't gotchas—they're clarity conversations that make partnership work. If you have more, ask. No question too detailed or too big-picture.</p>
            </div>
          </div>
        </div>

        {/* NEXT STEPS */}
        <div className="section-wrapper">
          <div className="section-header-minor">NEXT</div>
          <h3 className="section-title-sub serif" id="next">Next Steps</h3>

          <div className="section-extended">
            <div className="phase-timeline">
              <div className="phase-box">
                <div className="phase-box__number">1</div>
                <div className="phase-box__title">Immediate</div>
                <div className="phase-box__duration">This Week</div>
                <div className="phase-box__details">
                  <ol>
                    <li>Read this exploration document</li>
                    <li>
                      Gut-check three things:
                      <ul>
                        <li>Does the vision excite you? (If "meh," this isn't it)</li>
                        <li>Do the phases make sense given unknowns?</li>
                        <li>Are partnership terms directionally fair?</li>
                      </ul>
                    </li>
                    <li>Send questions/reactions (no question too detailed or big-picture)</li>
                  </ol>
                </div>
              </div>
              
              <div className="phase-box">
                <div className="phase-box__number">2</div>
                <div className="phase-box__title">Near-Term</div>
                <div className="phase-box__duration">Week 2-3 January</div>
                <div className="phase-box__details">
                  <ol>
                    <li>Deep-dive conversation(s) on structure, vision, terms</li>
                    <li>EOS workshop together (if aligned)</li>
                    <li>Draft "Rules of Engagement" (how we'll actually work together)</li>
                    <li>Define Phase 1 success specifics (not generic metrics)</li>
                  </ol>
                </div>
              </div>
              
              <div className="phase-box">
                <div className="phase-box__number">3</div>
                <div className="phase-box__title">Decision Point</div>
                <div className="phase-box__duration">Mid-January to March</div>
                <div className="phase-box__details">
                  <ol>
                    <li>Gut check after EOS workshop</li>
                    <li>Evaluate partnership fit at Month 6 checkpoint framework</li>
                    <li>March 2026: Final decision (allows formalization before June paternity)</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 03: THE EXPLORATION */}
        <div className="section-wrapper" id="beyond">
          <div className="section-header-large">03 // The Exploration</div>
          <h2 className="section-title-main serif">Scaling Wisdom</h2>
          
          <p className="narrative-lead">
            We are moving toward the edge of the map. This partnership is the vehicle for that journey. We will deploy systems that don't just scale products, but <span className="echo-word" data-echo="AMPLIFY">scale wisdom</span>.
          </p>

          <div className="deep-dive-container">
            <div className="deep-dive-title">The Roadmap Ahead</div>
            <p className="deep-dive-text">
              The exploration phase is about rapid prototyping of the new reality. We strip away the noise of "industry standards" and build protocols that are native to your specific genius.
            </p>
            <p className="deep-dive-text">
              Together, we define the parameters of the unknown, turning uncertainty into our greatest <span className="echo-word" data-echo="ASSET">leverage</span>. The goal is not just growth, but the establishment of a legacy system that runs on its own logic.
            </p>
            <ul className="deep-dive-list">
              <li>Phase 1: Diagnosis & Alignment (The current moment).</li>
              <li>Phase 2: The Build (Systems deployment).</li>
              <li>Phase 3: The Expansion (Market dominance).</li>
            </ul>
          </div>

          <div className="section-extended">
            <p>Partnership structure, role clarity, and operational reality.</p>

            <h3>The Dual Triumvirate Structure</h3>
            <p>Not rigid hierarchy—complementary domains with clear swim lanes.</p>

            <div className="phase-timeline">
              <div className="phase-box">
                <div className="phase-box__number">B</div>
                <div className="phase-box__title">Brandon</div>
                <div className="phase-box__duration">Vision & Strategy</div>
                <div className="phase-box__details">
                  <ul>
                    <li>Client relationships</li>
                    <li>Product vision</li>
                    <li>Strategic direction</li>
                    <li>Final authority</li>
                  </ul>
                </div>
              </div>
              
              <div className="phase-box">
                <div className="phase-box__number">A</div>
                <div className="phase-box__title">Andrew</div>
                <div className="phase-box__duration">Systems & Execution</div>
                <div className="phase-box__details">
                  <ul>
                    <li>Operational systems</li>
                    <li>Hiring infrastructure</li>
                    <li>Quality processes</li>
                    <li>Coordination backbone</li>
                  </ul>
                </div>
              </div>
              
              <div className="phase-box">
                <div className="phase-box__number">M</div>
                <div className="phase-box__title">Muhammad</div>
                <div className="phase-box__duration">Technical Excellence</div>
                <div className="phase-box__details">
                  <ul>
                    <li>Development execution</li>
                    <li>Technical implementation</li>
                    <li>Code quality</li>
                    <li>Build velocity</li>
                  </ul>
                </div>
              </div>
            </div>

            <p><strong>Ops Manager (future hire):</strong> Day-to-day orchestration, frees Andrew for strategic systems work.</p>

            <h3>Your Domains (Andrew Owns)</h3>
            <ul>
              <li><strong>Product roadmap:</strong> What gets built, when, why</li>
              <li><strong>Systems architecture:</strong> How work flows, quality gates, processes</li>
              <li><strong>Hiring:</strong> Job design, sourcing strategy, interview protocols, onboarding</li>
              <li><strong>Quality standards:</strong> What "done" means, review checkpoints</li>
              <li><strong>Communication coordination:</strong> Meeting orchestration, client follow-up synthesis</li>
            </ul>

            <h3>Brandon's Domains (Brandon Owns)</h3>
            <ul>
              <li><strong>Vision:</strong> What Odyssey Lab becomes, strategic direction</li>
              <li><strong>Major capital decisions:</strong> Investments, acquisitions, major hires</li>
              <li><strong>Client strategy:</strong> Which clients, what services, pricing philosophy</li>
              <li><strong>Brand/philosophy:</strong> How we position, what we stand for</li>
            </ul>

            <h3>Shared Domains (We Decide Together)</h3>
            <ul>
              <li><strong>Business model evolution:</strong> New service lines, market expansion</li>
              <li><strong>Strategic partnerships:</strong> Alliances, collaborations, joint ventures</li>
              <li><strong>Team culture:</strong> Values, norms, how we work</li>
              <li><strong>Major pivots:</strong> Changing core direction, exiting markets</li>
            </ul>
            
            <p><strong>Deadlock protocol:</strong> Brandon has final veto (necessary for ultimate authority), but encouraged to use sparingly. If we're invoking veto often, partnership isn't working.</p>

            <h3>Muhammad Transition (Honest Reality)</h3>
            <p>Current state: Muhammad's role unclear. Operational work overlaps with what Andrew would own. Not sustainable long-term.</p>
            <p><strong>Before Andrew joins:</strong> Explicit conversation with Muhammad about role clarification, no surprises. Options:</p>
            <ul>
              <li><strong>Option 1 (preferred):</strong> Muhammad focuses purely on technical implementation, Andrew handles operational systems/coordination</li>
              <li><strong>Option 2:</strong> Muhammad transitions to different role (less operational, more specialized)</li>
              <li><strong>Option 3:</strong> If triumvirate doesn't work after honest attempt, adjust structure based on what's learned</li>
            </ul>
            <p><strong>Phase 1 checkpoint:</strong> Regular check-ins. Is Muhammad empowered or bypassed? Is collaboration productive? Adjust as needed.</p>

            <div className="highlight-block">
              <h4>Culture of Constructive Conflict</h4>
              <p>You're not hired to execute—you're hired to <strong>challenge and co-create</strong>.</p>
              <ul>
                <li>You push back hard when you see better path</li>
                <li>Brandon listens deeply, explains reasoning without defensiveness</li>
                <li>Better answer emerges through collision of perspectives</li>
                <li><strong>If we agree too often, one of us is redundant</strong></li>
              </ul>
              <div className="highlight-block__callout">
                <em>Real partnership means tension is healthy, not avoided. Disagreement is sign of engagement, not dysfunction.</em>
              </div>
            </div>
          </div>
        </div>


        {/* EXPLORATION INITIATED */}
        <div className="section-wrapper" id="exploration-initiated">
          <div className="section-header-large">04 // Exploration Initiated</div>
          <h2 className="section-title-main serif">Crossing Together</h2>

          <div className="section-extended">
            <div className="honest-block">
              <h3>Exploration Initiated</h3>
              <p>You already said yes to exploring this partnership. Consider this the marker that we are moving from theory to action.</p>
              <p><strong>Initiation gift:</strong> I'll cover the Integrative Nine Enneagram assessment and the CliftonStrengths test.</p>
              <p>Not as a sales tactic. As the first shared protocol—so we start with a common language around strengths, blind spots, and integration paths.</p>

              <p><strong>You'll get:</strong></p>
              <ul>
                <li>Deep self-knowledge (Enneagram + CliftonStrengths synthesis)</li>
                <li>Concrete data about your strengths and integration path</li>
                <li>Hands-on experience with the framework we use with clients</li>
                <li>A shared vocabulary we can build on from Day 1</li>
              </ul>

              <p><strong>No obligation.</strong> If the partnership doesn't continue, you keep the insights. If it does, we begin with a shared diagnostic baseline.</p>
              <div className="highlight-block__callout highlight-block__callout--dark">
                <em>Exploration initiated. Next move is yours.</em>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CRESCENDO SECTION (RETURNS TO DARK ZONE) */}
      <section className="crescendo-section" id="crescendo" ref={crescendoRef}>
        <div className="eclipse-bg">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>

        <div style={{zIndex: 10}}>
          <h2 className="crescendo-text serif" data-original="For the convergence.">010101010010110</h2>
          <h2 className="crescendo-text serif" data-original="For the exploration.">110100101010111</h2>
          <h2 className="crescendo-text serif" data-original="For the journey ahead.">001011101010000</h2>
          
          <button className="btn-artifact" onClick={() => window.print()}>
            Initialize Protocol
          </button>
          <div style={{marginTop: '10px', fontSize: '0.7rem', opacity: 0.6}}>
            [ Generates Secure Dossier ]
          </div>
        </div>
      </section>

      {/* HIDDEN ARTIFACT (PRINT ONLY) */}
      <div id="artifact-dossier">
        <div className="dossier-header">
          <div>
            <div className="dossier-title">Odyssey Lab</div>
            <div style={{letterSpacing: '0.2em', fontSize: '10pt'}}>PARTNERSHIP MANIFESTO</div>
          </div>
          <div className="dossier-meta">
            CLASSIFICATION: RESTRICTED<br/>
            REF: ANDREW-THRESHOLD-01<br/>
            DATE: {printDate}
          </div>
        </div>
        <div className="dossier-body">
          <div className="dossier-section">
            <div className="dossier-label">Status Report</div>
            <p>Subject: Andrew. Tenure: 1y 4m at Product Career Accelerator. Trajectory: Vertical.</p>
            <p>The subject has demonstrated significant capacity for high-level product strategy. The "Threshold" phase has been initiated to facilitate non-linear expansion.</p>
          </div>
          <div className="dossier-section">
            <div className="dossier-label">Convergence Directive</div>
            <p>Odyssey Lab formally invites Andrew to enter the Threshold. This partnership leverages mutual competencies in Strategic Narrative, Systems Design, and AI Integration.</p>
          </div>
          <div className="dossier-section">
            <div className="dossier-label">Execution Roadmap</div>
            <ul style={{listStyleType: 'square', marginLeft: '20px'}}>
              <li>Establish resonance channels.</li>
              <li>Deploy "Deep Dive" infrastructure.</li>
              <li>Execute vision with absolute precision.</li>
            </ul>
          </div>
        </div>
        <div className="dossier-stamp">APPROVED<br/>FOR ENTRY</div>
      </div>
    </>
  );
}

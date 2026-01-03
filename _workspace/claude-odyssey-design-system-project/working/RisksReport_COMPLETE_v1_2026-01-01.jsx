import React, { useState } from 'react';

const RisksReport = () => {
  const [activeSection, setActiveSection] = useState('summary');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          /* COLORS - Titans Realm Palette */
          --color-bronze: #B48E55;
          --color-gold: #D4AF37;
          --color-lab-blue-electric: #2563EB;
          --color-lab-blue: #38BDF8;
          --color-lab-blue-sky: #0EA5E9;

          /* DARK ZONE (Hero Section) */
          --dark-bg-deep: #0f1419;
          --dark-bg-elevated: #1a1f26;
          --dark-text-primary: #e6edf3;
          --dark-text-secondary: #8b949e;

          /* LIGHT ZONE (Body Content) */
          --light-bg-body: #ffffff;
          --light-bg-elevated: #f6f8fa;
          --light-text-primary: #1f2328;
          --light-text-secondary: #57606a;

          /* TYPOGRAPHY */
          --font-display: 'Cinzel', serif;
          --font-body: 'Inter', sans-serif;
          --font-mono: 'JetBrains Mono', monospace;

          /* TYPE SCALE */
          --text-5xl: clamp(2rem, 5vw, 3rem);
          --text-4xl: clamp(1.75rem, 4vw, 2.25rem);
          --text-3xl: clamp(1.5rem, 3.5vw, 1.875rem);
          --text-2xl: clamp(1.25rem, 3vw, 1.5rem);
          --text-xl: clamp(1.125rem, 2.5vw, 1.25rem);
          --text-lg: 1.125rem;
          --text-base: 1rem;
          --text-sm: 0.875rem;
          --text-xs: 0.75rem;

          /* SPACING (8px grid) */
          --space-2: 0.5rem;
          --space-4: 1rem;
          --space-6: 1.5rem;
          --space-8: 2rem;
          --space-12: 3rem;
          --space-16: 4rem;
          --space-24: 6rem;

          /* MOTION */
          --duration-fast: 150ms;
          --duration-normal: 300ms;
          --duration-slow: 500ms;
          --easing-default: cubic-bezier(0.4, 0.0, 0.2, 1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--font-body);
          line-height: 1.7;
          color: var(--light-text-primary);
          background-color: var(--light-bg-body);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .risks-report {
          min-height: 100vh;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, var(--dark-bg-deep) 0%, var(--dark-bg-elevated) 100%);
          color: var(--dark-text-primary);
          padding: var(--space-16) var(--space-4);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 49px,
              rgba(180, 142, 85, 0.03) 49px,
              rgba(180, 142, 85, 0.03) 50px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 49px,
              rgba(180, 142, 85, 0.03) 49px,
              rgba(180, 142, 85, 0.03) 50px
            );
          opacity: 0.5;
          z-index: 0;
        }

        .hero__content {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .hero__eyebrow {
          font-size: var(--text-sm);
          color: var(--color-bronze);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: var(--space-2);
          font-weight: 600;
        }

        .hero__title {
          font-family: var(--font-display);
          font-size: var(--text-5xl);
          color: var(--dark-text-primary);
          margin-bottom: var(--space-6);
          font-weight: 700;
          line-height: 1.2;
        }

        .hero__divider {
          width: var(--space-16);
          height: 2px;
          background-color: var(--color-bronze);
          margin: var(--space-6) auto;
        }

        .hero__text {
          font-size: var(--text-lg);
          color: var(--dark-text-secondary);
          margin-bottom: var(--space-6);
          text-align: left;
        }

        .hero__text strong {
          color: var(--color-bronze);
          font-weight: 600;
        }

        /* Container */
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--space-12) var(--space-4);
        }

        /* Section Titles */
        .section-title {
          font-family: var(--font-display);
          font-size: var(--text-4xl);
          color: var(--color-bronze);
          text-align: center;
          margin-bottom: var(--space-8);
          font-weight: 700;
        }

        .section-subtitle {
          font-family: var(--font-display);
          font-size: var(--text-2xl);
          color: var(--light-text-primary);
          margin-top: var(--space-12);
          margin-bottom: var(--space-6);
          font-weight: 600;
        }

        .section-h3 {
          font-family: var(--font-body);
          font-size: var(--text-xl);
          color: var(--color-bronze);
          margin-top: var(--space-8);
          margin-bottom: var(--space-4);
          font-weight: 700;
        }

        /* Executive Summary */
        .bluf {
          font-size: var(--text-xl);
          color: var(--light-text-primary);
          font-weight: 600;
          text-align: center;
          max-width: 900px;
          margin: 0 auto var(--space-12) auto;
          padding: var(--space-8);
          background-color: var(--light-bg-elevated);
          border-left: 4px solid var(--color-bronze);
          border-radius: 4px;
        }

        .findings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-8);
          margin-top: var(--space-8);
        }

        .finding-card {
          background-color: var(--light-bg-elevated);
          border: 1px solid var(--color-bronze);
          border-radius: 8px;
          padding: var(--space-8);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          transition: transform var(--duration-fast) var(--easing-default), box-shadow var(--duration-normal) var(--easing-default);
        }

        .finding-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(180, 142, 85, 0.15);
        }

        .finding-card__number {
          background-color: var(--color-bronze);
          color: var(--dark-text-primary);
          width: var(--space-12);
          height: var(--space-12);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: var(--text-2xl);
          font-weight: 700;
          flex-shrink: 0;
        }

        .finding-card__title {
          font-family: var(--font-display);
          font-size: var(--text-lg);
          color: var(--color-bronze);
          font-weight: 700;
          line-height: 1.3;
        }

        .finding-card__description {
          font-size: var(--text-base);
          color: var(--light-text-secondary);
          line-height: 1.6;
        }

        /* Timeline */
        .timeline-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-8);
          margin-top: var(--space-8);
          position: relative;
        }

        .timeline-phase {
          background: linear-gradient(135deg, var(--light-bg-elevated) 0%, #fafbfc 100%);
          border: 1px solid var(--color-bronze);
          border-radius: 8px;
          padding: var(--space-8);
          position: relative;
          transition: transform var(--duration-fast) var(--easing-default);
        }

        .timeline-phase:hover {
          transform: translateY(-4px);
        }

        .timeline-phase--1 { border-left-width: 4px; }
        .timeline-phase--2 { border-left-width: 6px; }
        .timeline-phase--3 { border-left-width: 8px; }
        .timeline-phase--4 { border-left-width: 10px; }

        .timeline-phase__name {
          font-family: var(--font-display);
          font-size: var(--text-2xl);
          color: var(--color-bronze);
          margin-bottom: var(--space-2);
          font-weight: 700;
        }

        .timeline-phase__period {
          font-size: var(--text-base);
          color: var(--light-text-secondary);
          font-weight: 600;
          margin-bottom: var(--space-6);
        }

        .timeline-phase__list {
          list-style: none;
          padding: 0;
        }

        .timeline-phase__list li {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2);
          margin-bottom: var(--space-4);
          font-size: var(--text-sm);
          color: var(--light-text-primary);
          line-height: 1.6;
        }

        .timeline-phase__list li::before {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          background-color: var(--color-bronze);
          border-radius: 2px;
          transform: rotate(45deg);
          flex-shrink: 0;
          margin-top: 6px;
        }

        /* Content Sections */
        .content-section {
          margin-bottom: var(--space-16);
        }

        .content-section p {
          margin-bottom: var(--space-6);
          line-height: 1.7;
          color: var(--light-text-primary);
        }

        .content-section strong {
          font-weight: 700;
          color: var(--light-text-primary);
        }

        /* Pull Quote */
        .pull-quote {
          font-family: var(--font-display);
          font-size: var(--text-3xl);
          color: var(--color-bronze);
          font-style: italic;
          text-align: center;
          margin: var(--space-12) auto;
          max-width: 800px;
          padding: var(--space-8);
          background: linear-gradient(135deg, var(--light-bg-elevated) 0%, #fafbfc 100%);
          border-left: 4px solid var(--color-gold);
          border-radius: 4px;
          line-height: 1.4;
        }

        /* Callout Box */
        .callout-box {
          background-color: var(--light-bg-elevated);
          border: 1px solid var(--color-bronze);
          border-left-width: 4px;
          border-radius: 4px;
          padding: var(--space-8);
          margin: var(--space-8) 0;
        }

        .callout-box__title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          color: var(--color-bronze);
          margin-bottom: var(--space-4);
          font-weight: 700;
        }

        .callout-box__text {
          font-size: var(--text-base);
          color: var(--light-text-primary);
          line-height: 1.7;
        }

        /* Stat Callout */
        .stat-callout {
          background: linear-gradient(135deg, var(--dark-bg-deep) 0%, var(--dark-bg-elevated) 100%);
          color: var(--dark-text-primary);
          border: 1px solid var(--color-bronze);
          border-radius: 8px;
          padding: var(--space-8);
          margin: var(--space-12) 0;
        }

        .stat-callout__title {
          font-family: var(--font-display);
          font-size: var(--text-2xl);
          color: var(--color-gold);
          text-align: center;
          margin-bottom: var(--space-6);
          font-weight: 700;
        }

        .stat-callout__list {
          list-style: none;
          padding: 0;
        }

        .stat-callout__list li {
          display: flex;
          align-items: flex-start;
          gap: var(--space-2);
          margin-bottom: var(--space-4);
          font-size: var(--text-base);
          color: var(--dark-text-secondary);
          line-height: 1.6;
        }

        .stat-callout__list li::before {
          content: 'â€”';
          color: var(--color-bronze);
          font-weight: 700;
          flex-shrink: 0;
        }

        .stat-callout__list li strong {
          font-family: var(--font-mono);
          color: var(--color-gold);
          font-weight: 600;
        }

        /* Warning Cards Grid */
        .warning-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: var(--space-6);
          margin-top: var(--space-8);
        }

        .warning-card {
          background-color: var(--light-bg-elevated);
          border: 1px solid var(--color-bronze);
          border-radius: 4px;
          padding: var(--space-6);
          display: flex;
          align-items: flex-start;
          gap: var(--space-4);
          transition: box-shadow var(--duration-fast) var(--easing-default);
        }

        .warning-card:hover {
          box-shadow: 0 4px 8px rgba(180, 142, 85, 0.1);
        }

        .warning-card__icon {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          margin-top: 2px;
        }

        .warning-card__text {
          font-size: var(--text-sm);
          color: var(--light-text-primary);
          line-height: 1.6;
        }

        .warning-card__text strong {
          color: var(--color-bronze);
          font-family: var(--font-display);
          font-weight: 700;
          display: block;
          margin-bottom: var(--space-2);
        }

        /* Action Cards */
        .action-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-8);
          margin-top: var(--space-8);
        }

        .action-card {
          background-color: var(--light-bg-elevated);
          border: 1px solid var(--color-bronze);
          border-radius: 8px;
          padding: var(--space-8);
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          transition: transform var(--duration-fast) var(--easing-default);
        }

        .action-card:hover {
          transform: translateY(-4px);
        }

        .action-card__number {
          background-color: var(--color-bronze);
          color: var(--dark-text-primary);
          font-family: var(--font-display);
          font-size: var(--text-4xl);
          font-weight: 700;
          width: var(--space-16);
          height: var(--space-16);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          flex-shrink: 0;
        }

        .action-card__title {
          font-family: var(--font-display);
          font-size: var(--text-xl);
          color: var(--color-bronze);
          font-weight: 700;
          line-height: 1.3;
        }

        .action-card__detail {
          font-size: var(--text-sm);
          color: var(--light-text-primary);
          line-height: 1.6;
        }

        .action-card__detail strong {
          font-weight: 700;
        }

        /* Sticky Navigation */
        .sticky-nav {
          position: sticky;
          bottom: 0;
          background: linear-gradient(135deg, var(--dark-bg-elevated) 0%, var(--dark-bg-deep) 100%);
          border-top: 1px solid var(--color-bronze);
          padding: var(--space-4);
          z-index: 100;
          box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.2);
        }

        .sticky-nav__list {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--space-4);
          flex-wrap: wrap;
          list-style: none;
          padding: 0;
          max-width: 1200px;
          margin: 0 auto;
        }

        .sticky-nav__item {
          flex-shrink: 0;
        }

        .sticky-nav__link {
          font-family: var(--font-body);
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--dark-text-secondary);
          text-decoration: none;
          padding: var(--space-2) var(--space-4);
          border-radius: 4px;
          transition: all var(--duration-fast) var(--easing-default);
          display: block;
        }

        .sticky-nav__link:hover,
        .sticky-nav__link--active {
          background-color: var(--color-bronze);
          color: var(--dark-text-primary);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            padding: var(--space-12) var(--space-4);
          }

          .container {
            padding: var(--space-8) var(--space-4);
          }

          .findings-grid,
          .timeline-container,
          .action-cards-grid {
            grid-template-columns: 1fr;
          }

          .warning-grid {
            grid-template-columns: 1fr;
          }

          .sticky-nav__list {
            gap: var(--space-2);
          }

          .sticky-nav__link {
            font-size: var(--text-xs);
            padding: var(--space-2);
          }
        }
      `}</style>

      <div className="risks-report">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero__content">
            <p className="hero__eyebrow">Research Report | Risks Landscape</p>
            <h1 className="hero__title">The Hidden Costs of AI Delegation in Knowledge Work</h1>
            <div className="hero__divider"></div>
            <p className="hero__text">
              <strong>Thesis:</strong> Over-reliance on AI tools causes measurable cognitive degradation within 6-12 weeks, with skill atrophy, trust erosion, and capability loss accelerating through cascading feedback loops. For small creative teams where human judgment is the core value proposition, the risks extend beyond individual capability to encompass client trust, quality drift, and the collapse of expertise development pathways.
            </p>
            <p className="hero__text">
              <strong>Context:</strong> Research across cognitive psychology, education, and professional services reveals these are not hypothetical concerns but documented patterns with quantifiable impacts and identifiable mechanisms.
            </p>
            <p className="hero__text">
              <strong>Central Finding:</strong> Tools designed to augment human capability can systematically diminish it when adoption patterns shift from conscious augmentation to unconscious substitution. This transition happens quietly, often within the first year of use, and creates particularly acute vulnerabilities in small teams (3-10 people) where there's limited redundancy, compressed timelines for cultural change, and direct exposure to client perception risks.
            </p>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="container" id="summary">
          <h2 className="section-title">Executive Summary</h2>
          
          <div className="bluf">
            Tools designed to augment can systematically diminish when adoption shifts from conscious augmentation to unconscious substitution.
          </div>

          <div className="findings-grid">
            <div className="finding-card">
              <span className="finding-card__number">1</span>
              <h3 className="finding-card__title">Automation Bias Affects Experts Equally</h3>
              <p className="finding-card__description">
                26% increase in error rates even among skilled professionals. Research by Parasuraman and Manzey demonstrates this cannot be prevented by training alone.
              </p>
            </div>

            <div className="finding-card">
              <span className="finding-card__number">2</span>
              <h3 className="finding-card__title">47% Neural Engagement Reduction Within Weeks</h3>
              <p className="finding-card__description">
                MIT neuroscience research shows profound attentional reallocation. Workers showed 80% inability to recall content minutes after AI-assisted composition.
              </p>
            </div>

            <div className="finding-card">
              <span className="finding-card__number">3</span>
              <h3 className="finding-card__title">6-12 Week Skill Atrophy Onset</h3>
              <p className="finding-card__description">
                Medical skills research shows significant decline begins in this window. Cognitive skills decay faster than physical skills.
              </p>
            </div>

            <div className="finding-card">
              <span className="finding-card__number">4</span>
              <h3 className="finding-card__title">0-12 Month Critical Intervention Window</h3>
              <p className="finding-card__description">
                First year determines trajectory. Beyond 12 months, patterns entrenched. After 18-24 months, structural dependency requiring organizational restructuring.
              </p>
            </div>

            <div className="finding-card">
              <span className="finding-card__number">5</span>
              <h3 className="finding-card__title">Quality Drift: 51% of AI Content Has Issues</h3>
              <p className="finding-card__description">
                Yet 87% of professionals express confidence. This confidence-reality gap damages client relationships.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container" id="timeline">
          <h2 className="section-title">Timeline: The 6-24 Month Progression</h2>
          
          <div className="timeline-container">
            <div className="timeline-phase timeline-phase--1">
              <h3 className="timeline-phase__name">Phase 1: Honeymoon</h3>
              <p className="timeline-phase__period">0-3 Months</p>
              <ul className="timeline-phase__list">
                <li>Productivity surge of 55.8% faster task completion</li>
                <li>Morale boost, perceived competence inflation</li>
                <li>Skills remain intact but less practiced</li>
                <li>Teams enthusiastic, clients see faster delivery</li>
                <li>Hidden cost: subtle reduction in deep cognitive engagement</li>
              </ul>
            </div>

            <div className="timeline-phase timeline-phase--2">
              <h3 className="timeline-phase__name">Phase 2: Integration</h3>
              <p className="timeline-phase__period">3-9 Months</p>
              <ul className="timeline-phase__list">
                <li>AI becomes standard operating procedure</li>
                <li>Review time decreases unconsciously</li>
                <li>Junior development begins stalling</li>
                <li>Trust in AI begins declining around 6-8 months</li>
                <li>Pattern recognition degrading</li>
                <li>Quality concerns attributed to anomalies</li>
              </ul>
            </div>

            <div className="timeline-phase timeline-phase--3">
              <h3 className="timeline-phase__name">Phase 3: Dependency Formation</h3>
              <p className="timeline-phase__period">9-18 Months</p>
              <ul className="timeline-phase__list">
                <li>Workflows redesigned entirely around AI</li>
                <li>Confidence-capability gap widens significantly</li>
                <li>Alternative methods forgotten</li>
                <li>Skills: significant decay in cognitive abilities</li>
                <li>Code churn projected to double vs baseline</li>
                <li>Teams struggle without AI</li>
              </ul>
            </div>

            <div className="timeline-phase timeline-phase--4">
              <h3 className="timeline-phase__name">Phase 4: Critical Fragility</h3>
              <p className="timeline-phase__period">18+ Months</p>
              <ul className="timeline-phase__list">
                <li>System brittleness: team cannot function without AI</li>
                <li>Quality drift normalized and invisible</li>
                <li>Expertise hollow: can approve/edit but not generate</li>
                <li>May require significant retraining</li>
                <li>Workforce restructuring complete</li>
                <li>Recovery requires organizational restructuring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 1: How Degradation Happens */}
        <section className="container content-section" id="mechanisms">
          <h2 className="section-title">Section 1: How Degradation Happens</h2>

          <h3 className="section-subtitle">The Mechanism of AI-Induced Skill Erosion</h3>

          <h4 className="section-h3">Automation Bias</h4>
          <p>
            The mechanism of AI-induced skill erosion is well-documented across multiple disciplines. <strong>Automation bias</strong>â€”the tendency to over-rely on automated recommendations as a heuristic replacement for active thinkingâ€”increases the risk of incorrect decisions by 26% even among experts, according to healthcare meta-analyses. This isn't a training gap; research by Parasuraman and Manzey demonstrates that automation bias <strong>affects both naive and expert users equally and cannot be prevented by training or instructions alone</strong>.
          </p>

          <h4 className="section-h3">Attentional Reallocation</h4>
          <p>
            The core mechanism involves <strong>attentional reallocation</strong>. When AI handles cognitive tasks, human attention shifts away from active monitoring and critical evaluation. MIT neuroscience research found that users of AI writing tools showed <strong>47% reduced neural engagement</strong> compared to unassisted work, and <strong>80% couldn't recall what they'd written</strong> minutes after AI-assisted composition. This isn't passive forgettingâ€”it's a fundamental failure of cognitive encoding that occurs when the brain recognizes an available energy-saving shortcut.
          </p>

          <blockquote className="pull-quote">
            "Humans are biologically predisposed to minimize mental effort whenever possible."
          </blockquote>

          <h4 className="section-h3">Cognitive Miser Theory</h4>
          <p>
            This connects to the <strong>"cognitive miser" theory</strong>: humans are biologically predisposed to minimize mental effort whenever possible. Research by Vonasch demonstrated that people depleted by effortful tasks subsequently use more cognitive shortcuts, and crucially, <strong>they're unaware they've adopted this strategy</strong>. When AI provides an efficient path to task completion, the brain defaults to this lower-effort route. In small teams under delivery pressure, this tendency intensifies.
          </p>

          <h4 className="section-h3">Skill Atrophy Timeline</h4>
          <p>
            Skill atrophy follows a predictable timeline. Medical skills research shows <strong>significant decline occurs between 6-12 weeks</strong> of non-practice, with complex cognitive tasks showing steeper degradation curves than simple procedural skills. The critical finding: <strong>cognitive skills decay faster than physical skills</strong>â€”precisely what AI automates. After 6-24 months of AI-mediated work, professionals show measurable declines in pattern recognition, intuitive decision-making, and troubleshooting capabilities, even while their AI-assisted output quality remains adequate.
          </p>
        </section>

        {/* Section 2: The Illusion of Competence */}
        <section className="container content-section">
          <h2 className="section-title">Section 2: The Illusion of Competence</h2>

          <h3 className="section-subtitle">The Most Dangerous Documented Effect</h3>

          <h4 className="section-h3">Competence Without Understanding</h4>
          <p>
            Perhaps the most dangerous documented effect is the "illusion of competence without understanding"â€”producing sophisticated outputs while lacking genuine comprehension of the underlying concepts or processes. Research from Aalto University revealed a shocking reversal of the Dunning-Kruger effect: when using AI, all users regardless of skill level overestimate their performance, with AI-literate users showing the greatest overconfidence.
          </p>

          <div className="callout-box">
            <h4 className="callout-box__title">The Confidence-Capability Gap</h4>
            <p className="callout-box__text">
              Professionals believe they're maintaining expertise because AI masks the deficits. By the time issues surfaceâ€”when AI is unavailable, when novel problems arise, or when clients detect generic outputsâ€”the skill erosion is already substantial.
            </p>
          </div>

          <h4 className="section-h3">The Masking Effect</h4>
          <p>
            This creates what cognitive researchers call a confidence-capability gap. Professionals believe they're maintaining expertise because they're still engaged with their domain and producing quality work. They don't realize their capabilities are degrading because the AI masks the deficits. The work looks good, clients seem satisfied, and there's no immediate feedback signaling a problem. By the time issues surface, the skill erosion is already substantial.
          </p>

          <h4 className="section-h3">Longitudinal Evidence</h4>
          <p>
            A longitudinal study tracking knowledge workers over 4 months found those using ChatGPT exhibited 55% less neural connectivity during work and struggled to remember essays they'd just co-authored. Educational research documented that 68.9% of students showed increased laziness in academic tasks after sustained AI use, with 27.7% experiencing degraded decision-making abilities over the study period. These aren't self-reported concerns; they're measured behavioral changes.
          </p>

          <h4 className="section-h3">Three Illusions Develop</h4>
          <p>
            The mechanism involves cognitive offloadingâ€”transferring mental effort to external aids. When this becomes habitual, three illusions develop: the illusion of explanatory depth (believing you understand more deeply than you do), the illusion of exploratory breadth (thinking you've considered all options when you've only seen AI suggestions), and the illusion of objectivity (failing to recognize AI biases). For knowledge work teams, this means workers can feel expert while being unable to perform independently.
          </p>
        </section>

        {/* Section 3: Stress Acceleration */}
        <section className="container content-section">
          <h2 className="section-title">Section 3: Stress Acceleration</h2>

          <h4 className="section-h3">Stress Dramatically Increases Automation Dependency</h4>
          <p>
            A critical finding for small teams operating under delivery pressure: stress dramatically increases automation dependency. Research demonstrates that under high cognitive load or time pressure, people bias toward heuristic acceptance of AI outputs rather than critical evaluation. A railway traffic control study analyzing over 410,000 controller-hours found that under high workload, automation reliance improves performanceâ€”but only if the automation is reliable. If it's not, the combination of stress and dependency leads to new categories of errors.
          </p>

          <h4 className="section-h3">Double Impairment Under Stress</h4>
          <p>
            Neuroscience research shows cortisol-induced stress triggers heuristic thinking while simultaneously degrading sophisticated intuitive processingâ€”creating a double impairment where both analytical and intuitive capabilities suffer. In small creative agencies facing client deadlines and capacity constraints, this means the moments when human judgment is most critical are precisely when over-reliance is most likely.
          </p>

          <h4 className="section-h3">Individual Vulnerability Variation</h4>
          <p>
            Individual differences matter. Research by Prinzel found that people with high "complacency potential" report higher perceived workload and show lower monitoring performance, making them more susceptible under pressure. For small teams, this means one or two team members may be significantly more vulnerable to problematic AI dependency than others, but the pattern may be invisible until a critical failure occurs.
          </p>
        </section>

        {/* Section 4: Quality Drift */}
        <section className="container content-section">
          <h2 className="section-title">Section 4: Quality Drift</h2>

          <h4 className="section-h3">The 3-9 Month Shift</h4>
          <p>
            Research from professional services implementations documents a consistent pattern: AI integration begins with augmentationâ€”AI generates drafts, humans refine extensively. Over 3-9 months, teams unconsciously transition to a default pattern where AI outputs receive minimal review. This shift is "quiet"â€”teams don't recognize when they've crossed the threshold.
          </p>

          <h4 className="section-h3">Loss of Error Detection Capability</h4>
          <p>
            Microsoft's research on AI over-reliance identifies that it occurs when "users accept incorrect or incomplete AI outputs, typically because system design makes errors difficult to spot." This leads to decreased productivity and loss of trust as errors compound. The critical finding: teams lose the ability to spot errors because their pattern recognition and domain expertise have atrophied from reduced practice.
          </p>

          <div className="stat-callout">
            <h4 className="stat-callout__title">The Confidence-Reality Gap</h4>
            <ul className="stat-callout__list">
              <li><strong>87%</strong> of marketers express confidence in AI content accuracy</li>
              <li>Yet <strong>51%</strong> of AI-generated content has significant quality issues</li>
              <li><strong>91%</strong> has at least some issues</li>
              <li>Human-generated content consistently outperforms AI</li>
            </ul>
          </div>

          <h4 className="section-h3">Small Team Acceleration</h4>
          <p>
            In small teams, quality drift accelerates because there's limited peer review capacity, fewer eyes on each piece of work, and velocity pressure that incentivizes accepting "good enough" AI outputs. The normalization happens team-wide rather than being anchored by institutional quality processes. Once embedded, team members may no longer recognize what degraded quality looks like because their calibration has shifted.
          </p>
        </section>

        {/* Section 5: Accountability Erosion */}
        <section className="container content-section">
          <h2 className="section-title">Section 5: Accountability Erosion</h2>

          <h4 className="section-h3">The Accountability Gap</h4>
          <p>
            When AI mediates decision-making, traditional accountability structures break down. Research from California Management Review identifies the "accountability gap": it's murky whether liability rests with the developer (who created the tool), the user ("I was following AI recommendations"), or the manager ("I approved what the AI suggested"). This diffusion of responsibility has legal and ethical dimensions, but also practical team dynamics implications.
          </p>

          <h4 className="section-h3">The Air Canada Case</h4>
          <p>
            The Air Canada chatbot case exemplifies this: the company was legally liable for incorrect information provided by its AI, but internally, who was accountable? The bot itself? The developer? Customer service? Salesforce's responseâ€”creating a Chief AI Officer role specifically to establish "unambiguous chains of responsibility"â€”highlights that this requires intentional structural design.
          </p>

          <blockquote className="pull-quote">
            "Everyone's responsible" often means "no one's responsible."
          </blockquote>

          <h4 className="section-h3">Small Team Challenge</h4>
          <p>
            For small teams, the challenge intensifies because roles are fluid and relationships are close. "Everyone's responsible" often means "no one's responsible." Research shows team members "don't realize when they have ceded control to the AI"â€”they believe they're still making decisions when they're actually just approving AI outputs.
          </p>
        </section>

        {/* Section 6: Warning Signs */}
        <section className="container" id="warning-signs">
          <h2 className="section-title">Section 6: Warning Signs</h2>

          <h3 className="section-subtitle">Individual Warning Signs</h3>
          <div className="warning-grid">
            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Difficulty Explaining AI-Assisted Decisions</strong>
                Inability to defend reasoning without referencing "the AI suggested it"
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Inability to Recall Content Immediately After Creation</strong>
                Can't remember what was just written or produced
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Anxiety When AI Is Unavailable</strong>
                Significant stress or "feeling stuck" without AI access
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Reduced Confidence in Unaided Performance</strong>
                Doubt in ability to complete tasks independently
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Slower Reaction Times to Novel Problems</strong>
                Decreased pattern recognition and troubleshooting speed
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Spending Less Time Reviewing AI Outputs</strong>
                Accepting "good enough" rather than refining
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Accepting AI Suggestions Without Modification</strong>
                Passive receipt rather than critical evaluation
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Would Be "Completely Stuck" Without AI</strong>
                Genuine inability to proceed when unavailable
              </div>
            </div>
          </div>

          <h3 className="section-subtitle">Team-Level Warning Signs</h3>
          <div className="warning-grid">
            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Declining Quality When AI Systems Fail</strong>
                Disproportionate struggle during AI outages
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Inability to Identify Incorrect AI Outputs</strong>
                Pattern recognition degraded from reduced practice
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Reduced Questioning of AI Recommendations</strong>
                Accepting outputs with minimal verification
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Faster Acceptance Over Time</strong>
                Review time decreasing unconsciously
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Decreased Peer Review Effectiveness</strong>
                Limited capacity to catch errors collectively
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Knowledge Transfer Problems</strong>
                Juniors can't learn from seniors who also rely on AI
              </div>
            </div>
          </div>

          <h3 className="section-subtitle">Cultural Warning Signs</h3>
          <div className="warning-grid">
            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>"The AI Said So" as Decision Justification</strong>
                Citing AI rather than explaining reasoning
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Diminished Debate About Approaches</strong>
                "AI already figured it out" attitude
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Skill Gaps Emerging When Tools Unavailable</strong>
                Collective inability during outages
              </div>
            </div>

            <div className="warning-card">
              <svg className="warning-card__icon" viewBox="0 0 24 24" fill="none" stroke="#B48E55" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="warning-card__text">
                <strong>Passive Acceptance Without Modification</strong>
                Rarely challenge or improve AI suggestions
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Protective Practices */}
        <section className="container" id="practices">
          <h2 className="section-title">Section 7: Protective Practices & Interventions</h2>

          <div className="bluf" style={{marginTop: 0}}>
            The Critical Window: 0-12 months is the critical intervention period. By 12-24 months, patterns are entrenched and costly to reverse.
          </div>

          <div className="action-cards-grid">
            <div className="action-card">
              <span className="action-card__number">1</span>
              <h3 className="action-card__title">Establish Baseline Capability Metrics</h3>
              <p className="action-card__detail"><strong>What:</strong> Document current capability before further AI integration</p>
              <p className="action-card__detail"><strong>Why:</strong> Need baseline to detect future degradation</p>
              <p className="action-card__detail"><strong>How:</strong> Conduct cold-start assessments, document independent capability</p>
              <p className="action-card__detail"><strong>Timeline:</strong> Week 1-2 (immediate priority)</p>
              <p className="action-card__detail"><strong>Outcome:</strong> Baseline documentation for each team member</p>
            </div>

            <div className="action-card">
              <span className="action-card__number">2</span>
              <h3 className="action-card__title">Implement No-AI Practice Protocols</h3>
              <p className="action-card__detail"><strong>What:</strong> Structured rotation where team members work without AI</p>
              <p className="action-card__detail"><strong>Why:</strong> Maintains skill fluency, prevents atrophy</p>
              <p className="action-card__detail"><strong>How:</strong> Weekly rotation (different members, different days), focus on core skills</p>
              <p className="action-card__detail"><strong>Time Investment:</strong> 1 day per week per person (rotating)</p>
              <p className="action-card__detail"><strong>Outcome:</strong> Team maintains baseline capability</p>
            </div>

            <div className="action-card">
              <span className="action-card__number">3</span>
              <h3 className="action-card__title">Create Decision Ownership Structure</h3>
              <p className="action-card__detail"><strong>What:</strong> Every AI-assisted decision has named human owner</p>
              <p className="action-card__detail"><strong>Why:</strong> Prevents diffusion of responsibility</p>
              <p className="action-card__detail"><strong>How:</strong> Map decisions, document ownership, quarterly review</p>
              <p className="action-card__detail"><strong>Timeline:</strong> Month 1 (2-hour workshop initially)</p>
              <p className="action-card__detail"><strong>Outcome:</strong> Clear accountability</p>
            </div>

            <div className="action-card">
              <span className="action-card__number">4</span>
              <h3 className="action-card__title">Red-Team AI Outputs</h3>
              <p className="action-card__detail"><strong>What:</strong> Systematic adversarial review assuming AI is wrong</p>
              <p className="action-card__detail"><strong>Why:</strong> Counteracts automation bias</p>
              <p className="action-card__detail"><strong>How:</strong> Dedicated review step, adversarial mindset</p>
              <p className="action-card__detail"><strong>Time Investment:</strong> 15-20% of time saved by AI use</p>
              <p className="action-card__detail"><strong>Outcome:</strong> Error detection capability maintained</p>
            </div>

            <div className="action-card">
              <span className="action-card__number">5</span>
              <h3 className="action-card__title">Monitor for Phase Progression Indicators</h3>
              <p className="action-card__detail"><strong>What:</strong> Monthly check of progression indicators</p>
              <p className="action-card__detail"><strong>Why:</strong> Early detection enables intervention</p>
              <p className="action-card__detail"><strong>How:</strong> Check review time, pattern recognition, capability without AI</p>
              <p className="action-card__detail"><strong>Timeline:</strong> Monthly (15-30 minutes)</p>
              <p className="action-card__detail"><strong>Warning:</strong> By Phase 3 (9-18 months), intervention is reactive</p>
            </div>
          </div>
        </section>

        {/* Implementation Guidance */}
        <section className="container" id="implementation">
          <h2 className="section-title">Implementation Guidance</h2>

          <div className="action-cards-grid">
            <div className="action-card">
              <span className="action-card__number">1</span>
              <h3 className="action-card__title">Establish Baseline (Week 1-2)</h3>
              <p className="action-card__detail"><strong>Action:</strong> Conduct initial cold-start assessments</p>
              <p className="action-card__detail"><strong>Why First:</strong> Creates comparison data</p>
              <p className="action-card__detail"><strong>Output:</strong> Baseline capability documentation</p>
            </div>

            <div className="action-card">
              <span className="action-card__number">2</span>
              <h3 className="action-card__title">Start No-AI Rotation (Week 3 onward)</h3>
              <p className="action-card__detail"><strong>Action:</strong> Begin weekly no-AI days</p>
              <p className="action-card__detail"><strong>Why Early:</strong> Prevents atrophy entrenchment</p>
              <p className="action-card__detail"><strong>Output:</strong> Weekly rotation schedule</p>
            </div>

            <div className="action-card">
              <span className="action-card__number">3</span>
              <h3 className="action-card__title">Create Decision Ownership (Month 1)</h3>
              <p className="action-card__detail"><strong>Action:</strong> Workshop to map AI-influenced decisions</p>
              <p className="action-card__detail"><strong>Why Critical:</strong> Prevents accountability diffusion</p>
              <p className="action-card__detail"><strong>Output:</strong> Decision ownership map</p>
            </div>

            <div className="action-card">
              <span className="action-card__number">4</span>
              <h3 className="action-card__title">Monitor Progression (Monthly)</h3>
              <p className="action-card__detail"><strong>Action:</strong> Check for Phase 1-4 indicators</p>
              <p className="action-card__detail"><strong>Questions:</strong> Review time decreasing? Pattern recognition degrading?</p>
              <p className="action-card__detail"><strong>Warning:</strong> By Phase 3, reactive not proactive</p>
            </div>

            <div className="action-card">
              <span className="action-card__number">5</span>
              <h3 className="action-card__title">Integrate with Opportunities Framework</h3>
              <p className="action-card__detail"><strong>Action:</strong> Use Four-Zone Defense to determine which work SHOULD use AI</p>
              <p className="action-card__detail"><strong>Integration:</strong> EPOCH capability development, PERMA work design</p>
              <p className="action-card__detail"><strong>Why:</strong> Combined approach prevents degradation while building capability</p>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <nav className="sticky-nav">
          <ul className="sticky-nav__list">
            <li className="sticky-nav__item">
              <a 
                href="#summary" 
                className={`sticky-nav__link ${activeSection === 'summary' ? 'sticky-nav__link--active' : ''}`}
                onClick={() => setActiveSection('summary')}
              >
                Summary
              </a>
            </li>
            <li className="sticky-nav__item">
              <a 
                href="#mechanisms" 
                className={`sticky-nav__link ${activeSection === 'mechanisms' ? 'sticky-nav__link--active' : ''}`}
                onClick={() => setActiveSection('mechanisms')}
              >
                Mechanisms
              </a>
            </li>
            <li className="sticky-nav__item">
              <a 
                href="#timeline" 
                className={`sticky-nav__link ${activeSection === 'timeline' ? 'sticky-nav__link--active' : ''}`}
                onClick={() => setActiveSection('timeline')}
              >
                Timeline
              </a>
            </li>
            <li className="sticky-nav__item">
              <a 
                href="#warning-signs" 
                className={`sticky-nav__link ${activeSection === 'warning-signs' ? 'sticky-nav__link--active' : ''}`}
                onClick={() => setActiveSection('warning-signs')}
              >
                Warning Signs
              </a>
            </li>
            <li className="sticky-nav__item">
              <a 
                href="#practices" 
                className={`sticky-nav__link ${activeSection === 'practices' ? 'sticky-nav__link--active' : ''}`}
                onClick={() => setActiveSection('practices')}
              >
                Practices
              </a>
            </li>
            <li className="sticky-nav__item">
              <a 
                href="#implementation" 
                className={`sticky-nav__link ${activeSection === 'implementation' ? 'sticky-nav__link--active' : ''}`}
                onClick={() => setActiveSection('implementation')}
              >
                Implementation
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default RisksReport;

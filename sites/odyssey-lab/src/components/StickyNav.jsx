import React, { useEffect, useState } from 'react';

const pulseStyles = `
  @keyframes toc-pulse {
    0% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.35); opacity: 1; }
    100% { transform: scale(1); opacity: 0.6; }
  }

  .toc-pulse { animation: toc-pulse 2s ease-in-out infinite; }
`;

export const StickyNav = ({
  items = [],
  visibleAfter = 600,
  scrollOffset = 120,
  showDesktop = true,
  showMobile = true,
  activeRootMargin = '-30% 0px -60% 0px',
  activeThreshold = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState(items[0]?.id || '');

  useEffect(() => {
    setActiveId(items[0]?.id || '');
  }, [items]);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > visibleAfter);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleAfter]);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: activeRootMargin, threshold: activeThreshold }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items, activeRootMargin, activeThreshold]);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setIsMobileOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  if (!isVisible || items.length === 0) return null;

  return (
    <>
      <style>{pulseStyles}</style>
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[95vw] md:w-auto flex justify-center pointer-events-none">
        {showDesktop && (
          <div className="hidden md:flex pointer-events-auto bg-[var(--dark-bg-body)] border border-[var(--dark-border-subtle)] rounded-full px-6 py-3 shadow-2xl gap-8 items-center">
            <span className="w-2 h-2 rounded-full bg-[var(--color-bronze)] toc-pulse" aria-hidden="true" />
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-[10px] font-mono uppercase tracking-widest transition-colors whitespace-nowrap ${activeId === item.id ? 'text-[var(--color-gold)]' : 'text-gray-400 hover:text-[var(--color-gold)]'}`}
                onClick={(event) => handleNavClick(event, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {showMobile && (
          <button
            type="button"
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden pointer-events-auto flex items-center gap-3 bg-[var(--dark-bg-body)] border border-[var(--color-bronze)] rounded-full px-8 py-4 shadow-2xl text-xs font-mono uppercase tracking-wider text-[var(--color-gold)]"
          >
            Table of Contents
          </button>
        )}
      </nav>

      {showMobile && isMobileOpen && (
        <div className="fixed inset-0 z-[60] bg-black/80 flex items-end md:hidden animate-fade-in">
          <div className="w-full bg-[var(--dark-bg-panel)] rounded-t-2xl border-t border-[var(--color-bronze)]/30 p-6 pb-12 shadow-2xl">
            <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
              <span className="text-xs font-mono uppercase text-[var(--color-bronze)] tracking-widest">Navigation</span>
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                className="text-gray-400 hover:text-white p-2"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {items.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleNavClick(event, item.id)}
                  className="flex items-center justify-between p-4 text-gray-200 hover:bg-[var(--dark-bg-body)] rounded-lg transition-colors group"
                >
                  <span className="text-lg" style={{ fontFamily: 'var(--font-display)' }}>{item.label}</span>
                  <span className="font-mono text-[10px] text-gray-600 group-hover:text-[var(--color-bronze)]">0{idx + 1}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Accordion Component
 * 
 * Expandable/collapsible content sections following Odyssey design patterns.
 * 
 * @param {string} title - Section title (required)
 * @param {string} subtitle - Optional subtitle
 * @param {React.ReactNode} children - Content to show/hide (required)
 * @param {boolean} defaultExpanded - Initial expanded state (default: false)
 * @param {boolean} dark - Use dark zone styling (default: false)
 * 
 * @example
 * <Accordion title="Our Principles" subtitle="Core values">
 *   <p>Content goes here</p>
 * </Accordion>
 */
export const Accordion = ({ 
  title, 
  subtitle, 
  children, 
  defaultExpanded = false,
  dark = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const headerStyles = {
    cursor: 'pointer',
    padding: 'var(--space-4)',
    borderBottom: `1px solid ${dark ? 'var(--dark-border-subtle)' : 'var(--light-border-subtle)'}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.2s ease',
  };

  const titleStyles = {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--text-xl)',
    color: dark ? 'var(--color-gold)' : 'var(--color-bronze)',
    margin: 0,
  };

  const subtitleStyles = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    color: dark ? 'var(--dark-text-muted)' : 'var(--light-text-muted)',
    marginTop: 'var(--space-1)',
  };

  const contentStyles = {
    paddingLeft: 'var(--space-6)',
    paddingRight: 'var(--space-6)',
    paddingTop: 'var(--space-4)',
    paddingBottom: 'var(--space-4)',
    borderLeft: `2px solid ${dark ? 'var(--color-gold)' : 'var(--color-bronze)'}`,
    marginLeft: 'var(--space-4)',
    color: dark ? 'var(--dark-text-secondary)' : 'var(--light-text-secondary)',
  };

  return (
    <div>
      <div
        style={headerStyles}
        onClick={() => setIsExpanded(!isExpanded)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }
        }}
        aria-expanded={isExpanded}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-')}`}
      >
        <div>
          <h3 style={titleStyles}>{title}</h3>
          {subtitle && <p style={subtitleStyles}>{subtitle}</p>}
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <ChevronDown 
            size={24} 
            style={{ color: dark ? 'var(--color-gold)' : 'var(--color-bronze)' }}
          />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{ overflow: 'hidden' }}
            id={`accordion-content-${title.replace(/\s+/g, '-')}`}
          >
            <div style={contentStyles}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;


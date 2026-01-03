import React from 'react';

/**
 * SectionHeader Component
 * 
 * Centered section heading with optional subtitle.
 * 
 * @param {string} title - Section title (required)
 * @param {string} subtitle - Optional subtitle
 * @param {boolean} dark - Use dark zone styling (default: false)
 * 
 * @example
 * <SectionHeader 
 *   title="Our Services" 
 *   subtitle="How we help policy leaders"
 * />
 */
export const SectionHeader = ({ 
  title, 
  subtitle, 
  dark = false 
}) => {
  const containerStyles = {
    textAlign: 'center',
    marginBottom: 'var(--space-12)',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const titleStyles = {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--text-4xl)',
    fontWeight: 'var(--font-semibold)',
    color: dark ? 'var(--color-gold)' : 'var(--color-bronze)',
    marginBottom: subtitle ? 'var(--space-4)' : 0,
    lineHeight: 1.2,
  };

  const subtitleStyles = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-lg)',
    color: dark ? 'var(--dark-text-muted)' : 'var(--light-text-muted)',
    lineHeight: 1.6,
    margin: 0,
  };

  return (
    <div style={containerStyles}>
      <h2 style={titleStyles}>{title}</h2>
      {subtitle && <p style={subtitleStyles}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;


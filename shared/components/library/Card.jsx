import React from 'react';

/**
 * Card Component
 * 
 * Content container with elevation, borders, and zone-appropriate styling.
 * 
 * @param {React.ReactNode} children - Card content (required)
 * @param {string} variant - Style variant: 'default' | 'elevated' | 'panel' (default: 'default')
 * @param {boolean} dark - Use dark zone styling (default: false)
 * @param {React.CSSProperties} style - Additional inline styles
 * 
 * @example
 * <Card variant="elevated">
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Card>
 */
export const Card = ({ 
  children, 
  variant = 'default',
  dark = false,
  style = {}
}) => {
  const getCardStyles = () => {
    const baseStyles = {
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      transition: 'all 0.3s ease',
    };

    const variantStyles = {
      default: {
        backgroundColor: dark ? 'var(--dark-bg-panel)' : 'var(--light-bg-card)',
        border: `1px solid ${dark ? 'var(--dark-border-subtle)' : 'var(--light-border-subtle)'}`,
        boxShadow: 'var(--shadow-sm)',
      },
      elevated: {
        backgroundColor: dark ? 'var(--dark-bg-elevated)' : 'var(--light-bg-card)',
        border: `1px solid ${dark ? 'var(--dark-border-medium)' : 'var(--light-border-strong)'}`,
        boxShadow: 'var(--shadow-lg)',
      },
      panel: {
        backgroundColor: dark ? 'var(--dark-bg-panel)' : 'var(--light-bg-panel)',
        border: `1px solid ${dark ? 'var(--dark-border-subtle)' : 'var(--light-border-subtle)'}`,
        boxShadow: 'none',
      },
    };

    return {
      ...baseStyles,
      ...variantStyles[variant],
      color: dark ? 'var(--dark-text-secondary)' : 'var(--light-text-secondary)',
      ...style,
    };
  };

  return (
    <div style={getCardStyles()}>
      {children}
    </div>
  );
};

export default Card;


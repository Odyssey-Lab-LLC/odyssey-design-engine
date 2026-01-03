import React from 'react';
import { motion } from 'framer-motion';

/**
 * Button Component
 * 
 * Clickable button with variants and animation.
 * 
 * @param {string} label - Button text (required)
 * @param {function} onClick - Click handler (required)
 * @param {string} variant - Style variant: 'primary' | 'secondary' | 'outline' (default: 'primary')
 * @param {boolean} disabled - Disabled state (default: false)
 * @param {boolean} dark - Use dark zone styling (default: false)
 * @param {React.ReactNode} icon - Optional icon (from lucide-react)
 * 
 * @example
 * <Button 
 *   label="Learn More" 
 *   onClick={() => navigate('/about')}
 *   variant="primary"
 * />
 */
export const Button = ({ 
  label, 
  onClick, 
  variant = 'primary',
  disabled = false,
  dark = false,
  icon = null
}) => {
  const getButtonStyles = () => {
    const baseStyles = {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--font-medium)',
      padding: 'var(--space-4) var(--space-6)',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      transition: 'all 0.2s ease',
    };

    const variantStyles = {
      primary: {
        backgroundColor: dark ? 'var(--color-gold)' : 'var(--color-bronze)',
        color: '#FFFFFF',
      },
      secondary: {
        backgroundColor: dark ? 'var(--dark-bg-elevated)' : 'var(--light-bg-panel)',
        color: dark ? 'var(--dark-text-primary)' : 'var(--light-text-primary)',
        border: `1px solid ${dark ? 'var(--dark-border-medium)' : 'var(--light-border-strong)'}`,
      },
      outline: {
        backgroundColor: 'transparent',
        color: dark ? 'var(--color-gold)' : 'var(--color-bronze)',
        border: `2px solid ${dark ? 'var(--color-gold)' : 'var(--color-bronze)'}`,
      },
    };

    return {
      ...baseStyles,
      ...variantStyles[variant],
    };
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ duration: 0.2 }}
      style={getButtonStyles()}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {icon && <span style={{ display: 'inline-flex' }}>{icon}</span>}
      {label}
    </motion.button>
  );
};

export default Button;


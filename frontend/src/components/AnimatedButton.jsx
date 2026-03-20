import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  className = '', 
  href, 
  download 
}) => {
  
  const baseStyle = {
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    fontSize: '1rem',
  };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
      color: '#fff',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
    },
    secondary: {
      background: 'var(--bg-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-glow)',
      backdropFilter: 'blur(10px)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--primary)',
      border: '2px solid var(--primary)',
    }
  };

  const selectedStyle = { ...baseStyle, ...variants[variant] };

  const motionProps = {
    whileHover: { scale: 1.05, filter: 'brightness(1.1)' },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  };

  if (href) {
    if (download) {
      return (
        <motion.a href={href} download className={className} style={selectedStyle} {...motionProps}>
          {children}
        </motion.a>
      );
    }
    return (
      <motion.a href={href} className={className} style={selectedStyle} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={className} style={selectedStyle} {...motionProps}>
      {children}
    </motion.button>
  );
};

export default AnimatedButton;

import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', style = {}, hoverEffect = true, dropIn = false, delay = 0 }) => {
  
  const baseAnimation = dropIn ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, delay: delay }
  } : {};

  const hoverProps = hoverEffect ? {
    whileHover: { 
      y: -10, 
      boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)",
      borderColor: "var(--border-glow)"
    },
    transition: { type: 'spring', stiffness: 300 }
  } : {};

  return (
    <motion.div 
      className={`glass ${className}`}
      style={{ borderRadius: '16px', padding: '2.5rem', transition: 'border-color 0.3s ease', ...style }}
      {...baseAnimation}
      {...hoverProps}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;

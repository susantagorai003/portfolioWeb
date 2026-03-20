import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../data/staticData';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="navbar"
      className={scrolled ? 'glass' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.5s ease',
        background: scrolled ? 'var(--bg-card)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-light)' : 'none',
        borderRadius: scrolled ? '0 0 16px 16px' : '0'
      }}
    >
      <div className="container" style={{ padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleClick('#home'); }}
            className="text-gradient"
            style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            &lt;Portfolio /&gt;
          </a>

          <div style={{ display: 'flex', gap: '0.5rem' }} className="hidden-mobile">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                    background: isActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                  }}
                  onMouseOver={(e) => !isActive && (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseOut={(e) => !isActive && (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="show-mobile"
            style={{
              padding: '0.5rem',
              borderRadius: '8px',
              color: 'var(--text-secondary)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'none'
            }}
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', background: 'var(--bg-card)', borderTop: '1px solid var(--border-light)' }}
          >
            <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                    style={{
                      display: 'block',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                      background: isActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;

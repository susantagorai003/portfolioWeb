import React from 'react';
import { personalInfo } from '../data/staticData';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid var(--border-light)', position: 'relative' }}>
      <div className="container" style={{ padding: '3rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          
          {/* Logo */}
          <div style={{ textAlign: 'center' }} className="footer-col-left">
            <a href="#home" className="text-gradient" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
              &lt;Portfolio /&gt;
            </a>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
              Building the web, one project at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About</a>
              <a href="#projects" className="footer-link">Projects</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }} className="footer-col-right">
            {[ 
              { icon: <FaGithub />, href: personalInfo.github },
              { icon: <FaLinkedin />, href: personalInfo.linkedin },
              { icon: <SiLeetcode />, href: "https://leetcode.com/u/susanta_sp/" },
              { icon: <SiGeeksforgeeks />, href: "https://www.geeksforgeeks.org/profile/susanta602527" },
              { icon: <SiHackerrank />, href: "https://www.hackerrank.com/profile/Susanta60" },
              { icon: <HiMail />, href: `mailto:${personalInfo.email}` }
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '0.5rem', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'var(--text-secondary)', transition: 'all 0.3s' }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'var(--primary)' }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-light)' }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid var(--border-light)', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
            © {currentYear} {personalInfo.name}. Made with <FaHeart color="#EC4899" size={12} /> using MERN Stack & 3D Web
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .footer-link {
          text-decoration: none;
          color: inherit;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--primary);
        }
        @media (min-width: 768px) {
          .footer-col-left { text-align: left !important; }
          .footer-col-right { justify-content: flex-end !important; }
        }
      `}} />
    </footer>
  );
};

export default Footer;

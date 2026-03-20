import React, { useEffect, useRef } from 'react';
import { personalInfo } from '../data/staticData';
import { HiArrowDown, HiMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnimatedButton from './AnimatedButton';
import { Typewriter } from 'react-simple-typewriter';
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';
import HeroScene from './three/HeroScene';
import ParticleField from './three/ParticleField';

const Hero = () => {
  const contentRef = useRef(null);
  
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-element', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="section" style={{ padding: 0, minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      
      {/* 3D Canvas Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#3B82F6" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#8B5CF6" />
          <ParticleField count={800} />
          <group position={[3, 0, 0]}>
            <HeroScene />
          </group>
        </Canvas>
      </div>

      <div className="container" ref={contentRef} style={{ pointerEvents: 'none' }}>
        <div style={{ maxWidth: '600px', pointerEvents: 'auto' }}>
          <div className="hero-element" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '20px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-light)',
            color: 'var(--primary)',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '24px'
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', animation: 'pulse 2s infinite' }} />
            Available for opportunities
          </div>

          <h1 className="hero-element" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.2', marginBottom: '16px' }}>
            Hi, I'm <br />
            <span className="text-gradient" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>{personalInfo.name}</span>
          </h1>
          
          <div className="hero-element" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '24px', minHeight: '36px' }}>
            <Typewriter
              words={['Full-Stack Developer', 'UI/UX Enthusiast', 'Problem Solver']}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>

          <p className="hero-element" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '32px' }}>
            {personalInfo.introduction}
          </p>

          <div className="hero-element flex gap-4" style={{ marginBottom: '32px', flexWrap: 'wrap' }}>
            <AnimatedButton onClick={() => handleScroll('#projects')} variant="primary">
              View Projects
              <HiArrowDown />
            </AnimatedButton>
            <AnimatedButton onClick={() => handleScroll('#contact')} variant="secondary">
              <HiMail />
              Contact Me
            </AnimatedButton>
          </div>

          <div className="hero-element flex gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass"
              style={{ padding: '12px', display: 'flex', borderRadius: '12px', border: '1px solid var(--border-light)', transition: 'border-color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}
            >
              <FaGithub size={24} color="var(--text-primary)" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass"
              style={{ padding: '12px', display: 'flex', borderRadius: '12px', border: '1px solid var(--border-light)', transition: 'border-color 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
              onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-light)'}
            >
              <FaLinkedin size={24} color="var(--text-primary)" />
            </a>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 900px) {
          .hero-element {
            text-align: center;
          }
          .container > div {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;

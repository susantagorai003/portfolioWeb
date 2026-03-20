import React from 'react';
import { aboutData, personalInfo } from '../data/staticData';
import { HiLocationMarker, HiCode, HiAcademicCap, HiLightBulb } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';

const About = () => {
  const highlights = [
    { icon: <HiCode size={24} />, label: 'Full-Stack Dev', color: 'var(--primary)' },
    { icon: <HiAcademicCap size={24} />, label: 'B.Tech CSE', color: 'var(--accent)' },
    { icon: <HiLightBulb size={24} />, label: 'Problem Solver', color: 'var(--secondary)' },
    { icon: <HiLocationMarker size={24} />, label: personalInfo.location, color: '#EC4899' },
  ];

  return (
    <SectionWrapper id="about" title={<span>About <span className="text-gradient">Me</span></span>}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem' }}>
        <div 
          className="profile-image-container"
          style={{
            position: 'relative',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            padding: '6px',
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            marginBottom: '1.5rem',
            boxShadow: '0 10px 40px rgba(59, 130, 246, 0.2)'
         }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-secondary)',
          }}>
            <img 
              src="/profilepic.jpg" 
              alt={personalInfo.name || "Profile"} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }} 
            />
          </div>
        </div>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
          Get to know more about me and my journey
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
        
        {/* Left column - Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {highlights.map((item, i) => (
            <GlassCard key={i} dropIn={true} delay={i * 0.1} className="about-highlight-card">
              <div style={{ 
                padding: '0.75rem', 
                borderRadius: '12px', 
                background: `linear-gradient(135deg, ${item.color}, transparent)`, 
                color: '#fff', 
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)' 
              }}>
                {item.icon}
              </div>
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{item.label}</span>
            </GlassCard>
          ))}

          {/* Interests */}
          <GlassCard dropIn={true} delay={0.4} style={{ marginTop: '1rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Interests</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {aboutData.interests.map((interest, i) => (
                <span key={i} style={{ 
                  padding: '0.5rem 1rem', 
                  fontSize: '0.75rem', 
                  fontWeight: 500, 
                  background: 'rgba(59, 130, 246, 0.1)', 
                  color: 'var(--primary)', 
                  borderRadius: '999px', 
                  border: '1px solid rgba(59, 130, 246, 0.2)' 
                }}>
                  {interest}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Right column - Description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <GlassCard dropIn={true} delay={0.2}>
            {aboutData.description.split('\n\n').map((para, i) => (
              <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: i !== 0 ? '1rem' : 0 }}>
                {para}
              </p>
            ))}
          </GlassCard>

          <GlassCard dropIn={true} delay={0.3}>
            <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <HiLightBulb color="var(--secondary)" />
              Career Goals
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontStyle: 'italic' }}>
              "{aboutData.goals}"
            </p>
          </GlassCard>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .about-highlight-card {
          padding: 1.25rem 1.5rem !important;
          display: flex !important;
          align-items: center !important;
          gap: 1rem !important;
        }
      `}} />
    </SectionWrapper>
  );
};

export default About;

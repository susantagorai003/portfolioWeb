import React from 'react';
import { educationData } from '../data/staticData';
import { HiAcademicCap } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';

const Education = () => {
  return (
    <SectionWrapper id="education" title={<span><span className="text-gradient">Education</span></span>}>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        My academic journey and qualifications
      </p>

      <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
        {/* Line */}
        <div className="edu-line" style={{ position: 'absolute', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--primary), transparent)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {educationData.map((edu, index) => (
            <div key={index} className="edu-item" style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}>
              {/* Timeline dot */}
              <div className="edu-dot" style={{ position: 'relative', zIndex: 10, flexShrink: 0 }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)' }}>
                  <HiAcademicCap size={24} color="white" />
                </div>
              </div>

              {/* Content card */}
              <div className="edu-content" style={{ flex: 1 }}>
                <GlassCard dropIn={true} delay={index * 0.1} style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white' }}>{edu.degree}</h3>
                      <p style={{ color: 'var(--primary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{edu.institution}</p>
                    </div>
                    <span style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 600, background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', borderRadius: '999px', border: '1px solid rgba(59, 130, 246, 0.2)', whiteSpace: 'nowrap' }}>
                      {edu.year}
                    </span>
                  </div>

                  {edu.grade && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 0.75rem', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '8px', marginBottom: '1rem' }}>
                      <span style={{ color: '#F59E0B', fontSize: '0.875rem', fontWeight: 600 }}>{edu.grade}</span>
                    </div>
                  )}

                  {edu.description && (
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>{edu.description}</p>
                  )}
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 600px) {
          .edu-line { left: 24px; }
          .edu-item { gap: 2rem; }
          .edu-dot { left: 0; }
        }
        @media (max-width: 599px) {
          .edu-line { left: 24px; }
          .edu-item { gap: 1rem; }
          .edu-dot { left: 0; }
        }
      `}} />
    </SectionWrapper>
  );
};

export default Education;

import React from 'react';
import { extracurricularData } from '../data/staticData';
import { HiCode, HiStar, HiHeart, HiGlobe } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';

const iconMapping = {
  code: HiCode,
  trophy: HiStar,
  heart: HiHeart,
  github: FaGithub,
  globe: HiGlobe,
};

const gradients = [
  'linear-gradient(135deg, var(--primary), var(--secondary))',
  'linear-gradient(135deg, #F59E0B, #EA580C)',
  'linear-gradient(135deg, #EC4899, #E11D48)',
  'linear-gradient(135deg, #22D3EE, #2563EB)',
];

const Extracurricular = () => {
  return (
    <SectionWrapper id="extracurricular" title={<span>Extracurricular <span className="text-gradient">Activities</span></span>}>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Beyond the code — my involvements and passions
      </p>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Central line */}
        <div className="timeline-line" style={{ position: 'absolute', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--primary), var(--accent), transparent)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {extracurricularData.map((item, index) => {
            const Icon = iconMapping[item.icon] || HiCode;
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}
                style={{ position: 'relative', display: 'flex', alignItems: 'flex-start' }}
              >
                {/* Icon dot */}
                <div className="timeline-dot" style={{ position: 'absolute', zIndex: 10 }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: gradients[index % gradients.length], display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                    <Icon size={20} />
                  </div>
                </div>

                {/* Content card */}
                <div className="timeline-content" style={{ width: '100%' }}>
                  <GlassCard dropIn={true} delay={index * 0.1} style={{ padding: '1.5rem' }}>
                    <span style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.period}</span>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white', marginTop: '0.5rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--accent)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{item.organization}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.75rem', lineHeight: 1.6 }}>{item.description}</p>
                  </GlassCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) {
          .timeline-line { left: 50%; transform: translateX(-50%); }
          .timeline-item.timeline-left { flex-direction: row; }
          .timeline-item.timeline-right { flex-direction: row-reverse; }
          .timeline-dot { left: 50%; transform: translateX(-50%); }
          .timeline-item.timeline-left .timeline-content { width: calc(50% - 2rem); padding-right: 2rem; }
          .timeline-item.timeline-right .timeline-content { width: calc(50% - 2rem); padding-left: 2rem; }
        }
        @media (max-width: 767px) {
          .timeline-line { left: 24px; }
          .timeline-item { gap: 1.5rem; }
          .timeline-dot { left: 24px; transform: translateX(-50%); }
          .timeline-content { margin-left: 64px; }
        }
      `}} />
    </SectionWrapper>
  );
};

export default Extracurricular;

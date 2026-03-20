import React, { useState } from 'react';
import { personalInfo } from '../data/staticData';
import { HiDownload, HiDocumentText, HiEye, HiX } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import AnimatedButton from './AnimatedButton';
import GlassCard from './GlassCard';

const Resume = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <SectionWrapper id="resume" title={<span>My <span className="text-gradient">Resume</span></span>}>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', margin: '0 auto 2rem', borderRadius: '20px', background: 'linear-gradient(135deg, var(--primary), var(--accent))', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)', position: 'relative' }}>
          <HiDocumentText size={40} color="white" />
        </div>

        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.125rem' }}>
          Get a comprehensive overview of my experience, skills, and qualifications.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <AnimatedButton onClick={() => setShowPreview(true)} variant="secondary" style={{ padding: '1rem 2rem' }}>
            <HiEye size={20} />
            Preview CV
          </AnimatedButton>
          <AnimatedButton href={personalInfo.resumeLink} download variant="primary" style={{ padding: '1rem 2rem' }}>
            <HiDownload size={20} />
            Download CV
          </AnimatedButton>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '1.5rem' }}>PDF format • Updated March 2026</p>
      </div>

      {showPreview && (
        <div style={{ marginTop: '3rem', maxWidth: '900px', margin: '3rem auto 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ color: 'white', fontWeight: 600, fontSize: '1.125rem' }}>CV Preview</h3>
            <button
              onClick={() => setShowPreview(false)}
              style={{ padding: '0.5rem', borderRadius: '8px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex' }}
              onMouseOver={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#EF4444'; }}
              onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
              title="Close preview"
            >
              <HiX size={20} />
            </button>
          </div>
          <GlassCard style={{ padding: 0, overflow: 'hidden' }}>
            <iframe
              src={personalInfo.resumeLink}
              title="Resume Preview"
              style={{ width: '100%', height: '80vh', minHeight: '600px', border: 'none' }}
            />
          </GlassCard>
        </div>
      )}
    </SectionWrapper>
  );
};

export default Resume;

import React, { useState, useEffect } from 'react';
import { HiExternalLink, HiPhotograph } from 'react-icons/hi';
import { getCertificates } from '../api/api';
import { defaultCertificates } from '../data/staticData';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';

const Certificates = () => {
  const [certificates, setCertificates] = useState(defaultCertificates);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await getCertificates();
        if (res.data && res.data.length > 0) {
          setCertificates(res.data);
        }
      } catch {
        // use default
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  return (
    <SectionWrapper id="certificates" title={<span>My <span className="text-gradient">Certificates</span></span>}>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Certifications and credentials I've earned
      </p>

      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[1, 2, 3].map((i) => (
            <GlassCard key={i} style={{ padding: '1rem' }}>
              <div style={{ height: '176px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', marginBottom: '1rem', animation: 'pulse 2s infinite' }} />
              <div style={{ height: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '75%', marginBottom: '0.5rem', animation: 'pulse 2s infinite' }} />
              <div style={{ height: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '50%', animation: 'pulse 2s infinite' }} />
            </GlassCard>
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {certificates.map((cert, index) => (
            <GlassCard key={cert._id || index} dropIn={true} delay={index * 0.1} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              
              <div style={{ position: 'relative', height: '192px', background: 'var(--bg-dark)', overflow: 'hidden' }} className="cert-img-container">
                {cert.image ? (
                  <img
                    src={cert.image.startsWith('/uploads') ? `http://localhost:5000${cert.image}` : cert.image}
                    alt={cert.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="cert-img"
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <HiPhotograph size={40} color="rgba(255,255,255,0.1)" style={{ margin: '0 auto 0.5rem' }} />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>Certificate Image</span>
                    </div>
                  </div>
                )}
                
                <div className="cert-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(59, 130, 246, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}>
                  {cert.verificationLink && (
                    <a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link-btn"
                      style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', borderRadius: '50%', color: 'white', transition: 'transform 0.3s', transform: 'scale(0.8)' }}
                    >
                      <HiExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '0.25rem', fontSize: '1.125rem' }}>{cert.title}</h3>
                {cert.issuer && (
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{cert.issuer}</p>
                )}
                {cert.verificationLink && (
                  <a
                    href={cert.verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--primary)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--primary)'}
                  >
                    Verify <HiExternalLink size={16} />
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .cert-img-container:hover .cert-img {
          transform: scale(1.05);
        }
        .cert-img-container:hover .cert-overlay {
          opacity: 1 !important;
        }
        .cert-img-container:hover .cert-link-btn {
          transform: scale(1) !important;
        }
      `}} />
    </SectionWrapper>
  );
};

export default Certificates;

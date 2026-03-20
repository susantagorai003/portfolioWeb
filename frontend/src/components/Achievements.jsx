import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiHackerrank, SiGeeksforgeeks } from 'react-icons/si';
import { HiExternalLink, HiStar } from 'react-icons/hi';
import { getAchievements } from '../api/api';
import { defaultAchievements } from '../data/staticData';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';

const platformIcons = {
  leetcode: SiLeetcode,
  codechef: SiCodechef,
  hackerrank: SiHackerrank,
  github: FaGithub,
  gfg: SiGeeksforgeeks,
};

const platformColors = {
  leetcode: 'linear-gradient(135deg, #F59E0B, #EA580C)',
  codechef: 'linear-gradient(135deg, #10B981, #16A34A)',
  hackerrank: 'linear-gradient(135deg, #22C55E, #0D9488)',
  github: 'linear-gradient(135deg, #6B7280, #374151)',
  gfg: 'linear-gradient(135deg, #16A34A, #047857)',
};

const Achievements = () => {
  const [achievements, setAchievements] = useState(defaultAchievements);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await getAchievements();
        if (res.data && res.data.length > 0) {
          setAchievements(res.data);
        }
      } catch {
        // use default data
      } finally {
        setLoading(false);
      }
    };
    fetchAchievements();
  }, []);

  return (
    <SectionWrapper id="achievements" title={<span><span className="text-gradient">Achievements</span></span>}>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Coding platforms and competitive programming stats
      </p>

      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[1, 2, 3, 4].map((i) => (
            <GlassCard key={i} style={{ padding: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', marginBottom: '1rem', animation: 'pulse 2s infinite' }} />
              <div style={{ height: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '66%', marginBottom: '0.75rem', animation: 'pulse 2s infinite' }} />
              <div style={{ height: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '100%', marginBottom: '0.5rem', animation: 'pulse 2s infinite' }} />
              <div style={{ height: '32px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '50%', marginTop: '1rem', animation: 'pulse 2s infinite' }} />
            </GlassCard>
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {achievements.map((item, index) => {
            const iconKey = (item.icon || item.platform || '').toLowerCase();
            const Icon = platformIcons[iconKey] || HiStar;
            const gradient = platformColors[iconKey] || 'linear-gradient(135deg, var(--primary), var(--secondary))';
            return (
              <GlassCard key={item._id || index} dropIn={true} delay={index * 0.1} style={{ padding: '1.5rem', textAlign: 'center' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  margin: '0 auto 1rem',
                  borderRadius: '16px',
                  background: gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>
                  <Icon size={28} />
                </div>

                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white', marginBottom: '0.5rem' }}>{item.platform}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>{item.description}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                  {item.problemsSolved > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Problems Solved</span>
                      <span style={{ color: 'white', fontWeight: 600 }}>{item.problemsSolved}+</span>
                    </div>
                  )}
                  {item.rating && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Rating</span>
                      <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{item.rating}</span>
                    </div>
                  )}
                  {item.badge && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Badge</span>
                      <span style={{ color: '#F59E0B', fontWeight: 600 }}>{item.badge}</span>
                    </div>
                  )}
                </div>

                {item.profileLink && (
                  <a
                    href={item.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.875rem', color: 'var(--primary)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'var(--primary)'}
                  >
                    View Profile <HiExternalLink size={16} />
                  </a>
                )}
              </GlassCard>
            );
          })}
        </div>
      )}
    </SectionWrapper>
  );
};

export default Achievements;

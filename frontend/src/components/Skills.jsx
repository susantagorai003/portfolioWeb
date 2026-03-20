import React from 'react';
import { technicalSkills, softSkills } from '../data/staticData';
import {
  SiJavascript, SiPython, SiOpenjdk, SiCplusplus, SiHtml5,
  SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiMongodb, SiGit,
  SiPostman, SiFirebase, SiSwagger
} from 'react-icons/si';
import { HiChatAlt2, HiUserGroup, HiPuzzle, HiStar, HiClock, HiLightningBolt, HiCode } from 'react-icons/hi';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';

const iconMap = {
  SiJavascript, SiPython, SiOpenjdk, SiCplusplus, SiHtml5,
  SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiMongodb, SiGit,
  SiPostman, SiFirebase, SiSwagger,
  SiC: SiCplusplus,
  SiCss3: SiHtml5,
  SiPhp: HiCode,
  SiMysql: SiMongodb,
  SiFigma: HiCode,
};

const softSkillIcons = [HiChatAlt2, HiUserGroup, HiPuzzle, HiStar, HiClock, HiLightningBolt];

const bgByCategory = {
  language: 'var(--primary)',
  framework: 'var(--accent)',
  tool: '#10B981', // green
  technology: 'var(--secondary)',
};

const row1Skills = technicalSkills.filter((_, i) => i % 2 === 0);
const row2Skills = technicalSkills.filter((_, i) => i % 2 !== 0);

const SkillCard = ({ skill }) => {
  const Icon = iconMap[skill.icon];
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '1rem 1.5rem',
        borderRadius: '16px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-light)',
        backdropFilter: 'blur(10px)',
        cursor: 'default',
        transition: 'transform 0.3s, border-color 0.3s',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.borderColor = bgByCategory[skill.category] || 'var(--primary)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.borderColor = 'var(--border-light)';
      }}
    >
      {Icon && <Icon size={28} color={bgByCategory[skill.category] || 'white'} />}
      <span style={{ color: 'white', fontWeight: 500, fontSize: '1rem', whiteSpace: 'nowrap' }}>{skill.name}</span>
    </div>
  );
};

const MarqueeRow = ({ skills, slow = false, reverse = false }) => {
  const duplicated = [...skills, ...skills, ...skills, ...skills];

  const baseClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';
  const slowClass = reverse ? 'animate-marquee-reverse-slow' : 'animate-marquee-slow';
  const finalClass = `${baseClass} ${slow ? slowClass : ''} pause-on-hover`;

  return (
    <div style={{ overflow: 'hidden', padding: '1rem 0', width: '100%' }}>
      <div className={finalClass} style={{ gap: '1rem' }}>
        {duplicated.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" title={<span>My <span className="text-gradient">Skills</span></span>}>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Technologies and tools I work with
      </p>

      {/* Technical Skills — Infinite Scrolling Marquee */}
      <div style={{ marginBottom: '5rem' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ width: '40px', height: '4px', background: 'linear-gradient(to right, var(--primary), var(--accent))', borderRadius: '2px' }} />
          Technical Skills
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <MarqueeRow skills={row1Skills} />
          <MarqueeRow skills={row2Skills} slow={true} reverse={true} />
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ width: '40px', height: '4px', background: 'linear-gradient(to right, #EC4899, var(--secondary))', borderRadius: '2px' }} />
          Soft Skills
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {softSkills.map((skill, index) => {
            const Icon = softSkillIcons[index % softSkillIcons.length];
            return (
              <GlassCard key={index} dropIn={true} delay={index * 0.1} style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'linear-gradient(135deg, var(--primary), #EC4899)', color: 'white' }}>
                  <Icon size={24} />
                </div>
                <span style={{ color: 'white', fontWeight: 500, fontSize: '1.125rem' }}>{skill.name}</span>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;

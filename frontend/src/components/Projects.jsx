import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiPhotograph } from 'react-icons/hi';
import { getProjects } from '../api/api';
import { defaultProjects } from '../data/staticData';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';

const Projects = () => {
  const [projects, setProjects] = useState(defaultProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        if (res.data && res.data.length > 0) {
          setProjects(res.data);
        }
      } catch {
        // keep default
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <SectionWrapper id="projects" title={<span>My <span className="text-gradient">Projects</span></span>}>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Some of the projects I've worked on
      </p>

      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {[1, 2, 3, 4].map((i) => (
            <GlassCard key={i} style={{ padding: '1.5rem' }}>
              <div style={{ height: '192px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', marginBottom: '1rem', animation: 'pulse 2s infinite' }} />
              <div style={{ height: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '66%', marginBottom: '0.75rem', animation: 'pulse 2s infinite' }} />
              <div style={{ height: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '100%', marginBottom: '0.5rem', animation: 'pulse 2s infinite' }} />
              <div style={{ height: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '80%', animation: 'pulse 2s infinite' }} />
            </GlassCard>
          ))}
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <GlassCard key={project._id || index} dropIn={true} delay={index * 0.1} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              
              {/* Image Container */}
              <div style={{ position: 'relative', height: '220px', background: 'var(--bg-dark)', overflow: 'hidden' }} className="project-img-container">
                {project.image ? (
                  <img
                    src={project.image.startsWith('/uploads') ? `http://localhost:5000${project.image}` : project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="project-img"
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <HiPhotograph size={48} color="rgba(255,255,255,0.1)" style={{ margin: '0 auto 0.5rem' }} />
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Project Preview</span>
                    </div>
                  </div>
                )}
                
                {/* Overlay Links */}
                <div className="project-overlay" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1.5rem',
                  gap: '0.75rem'
                }}>
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <FaGithub size={20} color="white" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                      <FaExternalLinkAlt size={16} color="white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white', marginBottom: '1rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem', flexGrow: 1 }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {(project.technologies || []).map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: 'var(--primary)',
                        borderRadius: '4px',
                        border: '1px solid rgba(59, 130, 246, 0.2)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', transition: 'color 0.2s', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                      <FaGithub /> Source Code
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)', transition: 'color 0.2s', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>

            </GlassCard>
          ))}
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .project-img-container:hover .project-img {
          transform: scale(1.1);
        }
        .project-img-container:hover .project-overlay {
          opacity: 1 !important;
        }
        .project-link-btn {
          padding: 0.75rem;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(4px);
          border-radius: 8px;
          color: white;
          transition: background 0.2s;
        }
        .project-link-btn:hover {
          background: rgba(255,255,255,0.2);
        }
      `}} />
    </SectionWrapper>
  );
};

export default Projects;

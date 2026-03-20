import React, { useState } from 'react';
import { personalInfo } from '../data/staticData';
import { sendMessage } from '../api/api';
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import AnimatedButton from './AnimatedButton';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      await sendMessage(formData);
      setStatus({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        text: error.response?.data?.message || 'Failed to send message. Please try again or email me directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    { icon: <HiMail size={20} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <HiPhone size={20} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <HiLocationMarker size={20} />, label: 'Location', value: personalInfo.location, href: null },
  ];

  const socialLinks = [
    { icon: <FaGithub size={20} />, label: 'GitHub', href: personalInfo.github },
    { icon: <FaLinkedin size={20} />, label: 'LinkedIn', href: personalInfo.linkedin },
    { icon: <SiLeetcode size={20} />, label: 'LeetCode', href: "https://leetcode.com/u/susanta_sp/" },
    { icon: <SiGeeksforgeeks size={20} />, label: 'GeeksForGeeks', href: "https://www.geeksforgeeks.org/profile/susanta602527" },
    { icon: <SiHackerrank size={20} />, label: 'HackerRank', href: "https://www.hackerrank.com/profile/Susanta60" },
  ];

  return (
    <SectionWrapper id="contact" title={<span>Get In <span className="text-gradient">Touch</span></span>}>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
        Have a question or want to work together? Reach out to me!
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Contact Info */}
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <GlassCard dropIn={true} delay={0.1} style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {contactDetails.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)' }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} style={{ color: 'white', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'white'}>
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: 'white', fontSize: '0.875rem' }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </GlassCard>

          <GlassCard dropIn={true} delay={0.2} style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'white', fontWeight: 600, marginBottom: '1rem' }}>Follow Me</h3>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: '0.75rem', borderRadius: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'var(--text-secondary)', transition: 'all 0.3s' }}
                  onMouseOver={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-light)'; }}
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Contact Form */}
        <div style={{ flex: '2 1 400px' }}>
          <GlassCard dropIn={true} delay={0.3} style={{ padding: '2rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="form-input"
                  style={{ resize: 'none' }}
                />
              </div>

              {status.text && (
                <div style={{ 
                  display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', borderRadius: '12px', fontSize: '0.875rem',
                  background: status.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  border: `1px solid ${status.type === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
                  color: status.type === 'success' ? '#4ADE80' : '#F87171'
                }}>
                  {status.type === 'success' ? <HiCheckCircle size={20} style={{ flexShrink: 0 }} /> : <HiExclamationCircle size={20} style={{ flexShrink: 0 }} />}
                  {status.text}
                </div>
              )}

              <AnimatedButton type="submit" variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
                {loading ? (
                  <>
                    <svg style={{ animation: 'spin 1s linear infinite', width: '20px', height: '20px' }} viewBox="0 0 24 24">
                      <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <HiMail size={20} />
                    Send Message
                  </>
                )}
              </AnimatedButton>
            </form>
          </GlassCard>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(17, 24, 39, 0.6);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          color: white;
          transition: border-color 0.3s, box-shadow 0.3s;
          outline: none;
        }
        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }
        .form-input::placeholder {
          color: #4B5563;
        }
      `}} />
    </SectionWrapper>
  );
};

export default Contact;

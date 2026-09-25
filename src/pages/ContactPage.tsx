import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, MapPin, Clock, Calendar, CheckCircle2, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { contactFaqs } from '../data/faqData';
import type { ContactFormData } from '../types';
import { usePageAnimations } from '../hooks/usePageAnimations';

export const ContactPage: React.FC = () => {
  const pageRef = usePageAnimations();
  const location = useLocation();
  const state = location.state as { prefilledService?: string; prefilledBudget?: string } | null;

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    service: state?.prefilledService || 'Performance / Paid Media',
    budget: state?.prefilledBudget || '$10,000 – $50,000',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (state?.prefilledService) {
      setFormData((prev) => ({
        ...prev,
        service: state.prefilledService || prev.service,
        budget: state.prefilledBudget || prev.budget
      }));
    }
  }, [state]);

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.company.trim()) newErrors.company = 'Please enter your brand or company name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please give us a brief outline of the problem';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic async dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setShowToast(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#FFE100', '#FF3B6E', '#2233FF', '#121212']
      });

      // Auto-hide toast after 5s
      setTimeout(() => setShowToast(false), 5000);
    }, 700);
  };

  return (
    <main ref={pageRef}>
      {/* Toast Notification */}
      {showToast && (
        <div className="toast" role="alert">
          <Sparkles size={20} color="#121212" />
          <span>Brief received! We'll reply within 1 business day.</span>
        </div>
      )}

      {/* Hero */}
      <section className="page-hero">
        <span className="eyebrow">LET'S TALK</span>
        <h1>Tell us what you're trying to fix.</h1>
        <p className="hero-lead">
          No discovery-call theatre — send us the actual problem and budget range, and we'll tell you honestly whether we're the right fit.
        </p>
      </section>

      {/* Contact Form & Info Grid */}
      <section className="tight">
        <div className="contact-grid">
          {/* Form Side */}
          <div className="contact-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ display: 'inline-flex', background: 'var(--yellow)', border: '3px solid var(--border)', borderRadius: '50%', padding: '16px', marginBottom: '1.2rem', boxShadow: '4px 4px 0 var(--border)' }}>
                  <CheckCircle2 size={48} color="#121212" />
                </div>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}>We got your message!</h3>
                <p style={{ color: 'var(--ink-muted)', maxWidth: '42ch', margin: '0 auto 1.8rem', fontSize: '0.98rem' }}>
                  Thank you for reaching out, <b>{formData.name}</b>. A partner will review your brief for <b>{formData.company}</b> and reply within 1 business day.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button
                    type="button"
                    className="cta-btn alt"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        service: 'Performance / Paid Media',
                        budget: '$10,000 – $50,000',
                        message: ''
                      });
                    }}
                  >
                    Send another message
                  </button>
                  <a href="mailto:info@onlywayonline.com" className="cta-btn">
                    Email directly →
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">Name *</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <div className="error-msg">{errors.name}</div>}
                </div>

                <div className="field">
                  <label htmlFor="company">Company *</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Brand / company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                  {errors.company && <div className="error-msg">{errors.company}</div>}
                </div>

                <div className="field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <div className="error-msg">{errors.email}</div>}
                </div>

                <div className="field">
                  <label htmlFor="service">What do you need help with?</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Performance / Paid Media">Performance / Paid Media</option>
                    <option value="Brand Building">Brand Building</option>
                    <option value="Web Development & Digital Flagships">Web Development & Digital Flagships</option>
                    <option value="Influencer Marketing">Influencer Marketing</option>
                    <option value="Full-Funnel / Not sure yet">Full-Funnel / Not sure yet</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="budget">Monthly budget range</label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option value="Under $2,000">Under $2,000</option>
                    <option value="$2,000 – $10,000">$2,000 – $10,000</option>
                    <option value="$10,000 – $50,000">$10,000 – $50,000</option>
                    <option value="$50,000+">$50,000+</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="msg">Tell us about it *</label>
                  <textarea
                    id="msg"
                    placeholder="What's the goal, what's been tried, and what's the timeline?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <div className="error-msg">{errors.message}</div>}
                </div>

                <button
                  type="submit"
                  className="cta-btn"
                  style={{ width: '100%', marginTop: '0.8rem' }}
                  disabled={isSubmitting}
                >
                  <Send size={18} />
                  <span>{isSubmitting ? 'Transmitting brief...' : 'Send it →'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="contact-info">
            <div className="row">
              <div className="row-icon">
                <Mail size={20} />
              </div>
              <div>
                <b>Email</b>
                <a href="mailto:info@onlywayonline.com" style={{ textDecoration: 'underline' }}>
                  info@onlywayonline.com
                </a>
              </div>
            </div>

            <div className="row">
              <div className="row-icon">
                <MapPin size={20} />
              </div>
              <div>
                <b>Based in</b>
                <span>Delhi, India — working with brands everywhere</span>
              </div>
            </div>

            <div className="row">
              <div className="row-icon">
                <Clock size={20} />
              </div>
              <div>
                <b>Response time</b>
                <span>Within 1 business day (direct human response)</span>
              </div>
            </div>

            <div className="row">
              <div className="row-icon">
                <Calendar size={20} />
              </div>
              <div>
                <b>Office hours</b>
                <span>Mon–Fri, 10am–7pm IST</span>
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.4rem', borderTop: '2px solid var(--border)' }}>
              <b style={{ fontFamily: 'var(--font-display)', display: 'block', marginBottom: '0.6rem' }}>
                Follow / Connect
              </b>
              <div>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="tag yellow">
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="tag pink">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="tag yellow">
                  Twitter / X
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before you write in (FAQ) */}
      <section className="tight">
        <div className="section-head">
          <h2>Before you write in</h2>
          <p>Quick answers on response workflows, budget minimums, and NDAs.</p>
        </div>

        <div className="faq">
          {contactFaqs.map((faq, idx) => (
            <details key={idx}>
              <summary>
                <span>{faq.question}</span>
                <span className="faq-indicator">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
};

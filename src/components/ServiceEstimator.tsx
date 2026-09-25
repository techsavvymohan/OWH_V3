import React, { useState } from 'react';
import { CheckCircle2, Sparkles, FileText } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// 🔧 SETUP: Sign up free at https://formspree.io, create a form pointed at
//    info@onlywayonline.com, and replace YOUR_FORM_ID below with your Form ID.
//    Example: https://formspree.io/f/xpwzqrba
// ─────────────────────────────────────────────────────────────────────────────
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

const SERVICES = [
  { id: 'performance', label: 'Performance & Paid Media', desc: 'Meta, Google, TikTok — profitable acquisition' },
  { id: 'brand', label: 'Brand Building & Identity', desc: 'Positioning, visual identity, brand voice' },
  { id: 'web', label: 'Web Development', desc: 'Websites, landing pages, conversion funnels' },
  { id: 'influencer', label: 'Influencer & Creator Marketing', desc: 'Creator seeding, UGC, whitelisted ads' },
  { id: 'content', label: 'Content & Organic Social', desc: 'Video, posts, SEO, email & CRM' },
];

const GOALS = [
  'Get more leads / sales',
  'Launch a new brand or product',
  'Fix a leaking funnel',
  'Build brand awareness',
  'Grow organic presence',
  'Not sure yet — need guidance',
];

interface QuoteForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  selectedServices: string[];
  goal: string;
  message: string;
}

export const ServiceEstimator: React.FC = () => {
  const [form, setForm] = useState<QuoteForm>({
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    selectedServices: [],
    goal: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setForm((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(id)
        ? prev.selectedServices.filter((s) => s !== id)
        : [...prev.selectedServices, id],
    }));
  };

  const validate = () => {
    const e: Partial<Record<keyof QuoteForm, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.company.trim()) e.company = 'Please enter your brand or company name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (form.selectedServices.length === 0) e.selectedServices = 'Please select at least one service';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const serviceLabels = form.selectedServices
      .map((id) => SERVICES.find((s) => s.id === id)?.label || id)
      .join(', ');

    const body = {
      _replyto: form.email,
      _subject: `Quote Request from ${form.company} — OnlyWayOnline`,
      Name: form.name,
      Company: form.company,
      Email: form.email,
      Phone: form.phone || 'Not provided',
      Website: form.website || 'Not provided',
      'Services Requested': serviceLabels,
      'Primary Goal': form.goal || 'Not specified',
      'Additional Details': form.message || 'None',
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback: open mailto if Formspree isn't configured yet
        const mailto = `mailto:info@onlywayonline.com?subject=Quote Request from ${encodeURIComponent(form.company)}&body=${encodeURIComponent(
          `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nWebsite: ${form.website}\nServices: ${serviceLabels}\nGoal: ${form.goal}\nDetails: ${form.message}`
        )}`;
        window.location.href = mailto;
        setSubmitted(true);
      }
    } catch {
      // Fallback: mailto
      const mailto = `mailto:info@onlywayonline.com?subject=Quote Request from ${encodeURIComponent(form.company)}&body=${encodeURIComponent(
        `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nWebsite: ${form.website}\nServices: ${serviceLabels}\nGoal: ${form.goal}\nDetails: ${form.message}`
      )}`;
      window.location.href = mailto;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="estimator-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <div style={{ display: 'inline-flex', background: 'var(--yellow)', border: '3px solid var(--border)', borderRadius: '50%', padding: '16px', marginBottom: '1.4rem', boxShadow: '4px 4px 0 var(--border)' }}>
          <CheckCircle2 size={48} color="#121212" />
        </div>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}>Quote request received!</h3>
        <p style={{ color: 'var(--ink-muted)', maxWidth: '44ch', margin: '0 auto 1.6rem', fontSize: '0.98rem' }}>
          Thanks <b>{form.name}</b> — we will review your request for <b>{form.company}</b> and come back to you within 1 business day. No pressure, no hard sell.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="cta-btn alt"
            onClick={() => {
              setSubmitted(false);
              setForm({ name: '', company: '', email: '', phone: '', website: '', selectedServices: [], goal: '', message: '' });
              setErrors({});
            }}
          >
            Submit another request
          </button>
          <a href="mailto:info@onlywayonline.com" className="cta-btn">
            Email us directly →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="estimator-card">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.6rem' }}>
        <div style={{ background: 'var(--yellow)', border: '2px solid var(--border)', padding: '6px', borderRadius: '6px', display: 'flex' }}>
          <FileText size={20} color="#121212" />
        </div>
        <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Get a Free Quote</h3>
      </div>
      <p style={{ color: 'var(--ink-muted)', fontSize: '0.94rem', margin: '0 0 2rem 0' }}>
        Select the services you need, tell us about your brand, and we will send back a tailored scope. No obligation. Pricing is discussed on a short call — every brand's needs are different.
      </p>

      <form onSubmit={handleSubmit} noValidate>

        {/* Step 1: Select Services */}
        <div style={{ marginBottom: '1.8rem' }}>
          <label style={{ fontWeight: 800, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '1rem' }}>
            1. What do you need help with? <span style={{ color: 'var(--pink)' }}>*</span>
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
            {SERVICES.map((s) => {
              const selected = form.selectedServices.includes(s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => toggleService(s.id)}
                  className={`estimator-btn ${selected ? 'selected' : ''}`}
                  style={{ textAlign: 'left', padding: '0.9rem 1rem' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                    <span style={{
                      width: '16px', height: '16px', border: '2px solid currentColor',
                      borderRadius: '3px', display: 'inline-flex', alignItems: 'center',
                      justifyContent: 'center', flexShrink: 0,
                      background: selected ? 'var(--yellow)' : 'transparent',
                      borderColor: selected ? 'var(--border)' : 'currentColor'
                    }}>
                      {selected && <span style={{ fontSize: '10px', fontWeight: 900, color: '#121212' }}>✓</span>}
                    </span>
                    <span style={{ fontWeight: 800, fontSize: '0.92rem' }}>{s.label}</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', opacity: 0.75, paddingLeft: '24px' }}>{s.desc}</div>
                </button>
              );
            })}
          </div>
          {errors.selectedServices && <div className="error-msg" style={{ marginTop: '0.5rem' }}>{errors.selectedServices}</div>}
        </div>

        {/* Step 2: Your Goal */}
        <div className="field">
          <label htmlFor="goal" style={{ fontWeight: 800, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            2. Primary Goal
          </label>
          <select
            id="goal"
            value={form.goal}
            onChange={(e) => setForm({ ...form, goal: e.target.value })}
          >
            <option value="">Select your main objective</option>
            {GOALS.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        {/* Step 3: Contact Details */}
        <div style={{ marginTop: '1.8rem', marginBottom: '0.5rem' }}>
          <label style={{ fontWeight: 800, fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '1rem' }}>
            3. Your Details
          </label>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div className="field" style={{ margin: 0 }}>
            <label htmlFor="q-name">Name <span style={{ color: 'var(--pink)' }}>*</span></label>
            <input id="q-name" type="text" placeholder="Your name" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} />
            {errors.name && <div className="error-msg">{errors.name}</div>}
          </div>

          <div className="field" style={{ margin: 0 }}>
            <label htmlFor="q-company">Brand / Company <span style={{ color: 'var(--pink)' }}>*</span></label>
            <input id="q-company" type="text" placeholder="e.g. GoCoupon.io" value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })} />
            {errors.company && <div className="error-msg">{errors.company}</div>}
          </div>

          <div className="field" style={{ margin: 0 }}>
            <label htmlFor="q-email">Email <span style={{ color: 'var(--pink)' }}>*</span></label>
            <input id="q-email" type="email" placeholder="you@company.com" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} />
            {errors.email && <div className="error-msg">{errors.email}</div>}
          </div>

          <div className="field" style={{ margin: 0 }}>
            <label htmlFor="q-phone">Phone <span style={{ color: 'var(--ink-muted)', fontWeight: 400 }}>(optional)</span></label>
            <input id="q-phone" type="tel" placeholder="+91 98765 43210" value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </div>
        </div>

        <div className="field" style={{ marginTop: '1rem' }}>
          <label htmlFor="q-website">Website <span style={{ color: 'var(--ink-muted)', fontWeight: 400 }}>(optional)</span></label>
          <input id="q-website" type="url" placeholder="https://yourbrand.com" value={form.website}
            onChange={(e) => setForm({ ...form, website: e.target.value })} />
        </div>

        <div className="field">
          <label htmlFor="q-msg">
            Anything else we should know? <span style={{ color: 'var(--ink-muted)', fontWeight: 400 }}>(optional)</span>
          </label>
          <textarea id="q-msg"
            placeholder="Current situation, what's been tried, timeline, or anything that helps us give you a more accurate quote..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        {/* Submit */}
        <div style={{ marginTop: '1.2rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button type="submit" className="cta-btn" style={{ padding: '0.9rem 2rem', fontSize: '0.98rem' }} disabled={submitting}>
            <Sparkles size={18} />
            <span>{submitting ? 'Sending...' : 'Get My Free Quote →'}</span>
          </button>
          <span style={{ fontSize: '0.82rem', color: 'var(--ink-muted)' }}>
            No pricing commitments. We discuss on a short call.
          </span>
        </div>

      </form>
    </div>
  );
};

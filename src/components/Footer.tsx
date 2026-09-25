import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link to="/" className="logo" style={{ fontSize: '1.4rem' }}>
            <img
              src={theme === 'dark' ? '/owh_logo_white.webp' : '/owh_logo.webp'}
              alt="OnlyWayOnline Logo"
              className="logo-mark"
              style={{ height: '32px' }}
            />
            <span className="logo-text">OnlyWayOnline</span>
          </Link>
          <p style={{ marginTop: '0.6rem', color: 'var(--ink-muted)', maxWidth: '34ch', fontSize: '0.92rem' }}>
            A digital marketing agency running performance, brand and influencer work under one roof.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div style={{ fontSize: '0.9rem', color: 'var(--ink-muted)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <Mail size={15} color="var(--pink)" />
            <a href="mailto:info@onlywayonline.com" style={{ textDecoration: 'underline' }}>
              info@onlywayonline.com
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={15} color="var(--yellow)" />
            <span>Delhi, India — Working globally</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>OnlyWayOnline © 2026. All rights reserved.</div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span className="tag yellow" style={{ margin: 0, fontSize: '0.78rem' }}>Meta Partner</span>
          <span className="tag pink" style={{ margin: 0, fontSize: '0.78rem' }}>Google Certified</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="theme-toggle-btn"
            style={{ width: '34px', height: '34px' }}
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

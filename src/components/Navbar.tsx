import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavbarAnimation } from '../hooks/usePageAnimations';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useNavbarAnimation();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="site-nav" ref={navRef as React.RefObject<HTMLElement>}>
        <div className="nav-brand">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <img
              src={theme === 'dark' ? '/owh_logo_white.webp' : '/owh_logo.webp'}
              alt="OnlyWayOnline Logo"
              className="logo-mark"
            />
            <span className="logo-text">OnlyWayOnline</span>
          </Link>
        </div>

        <div className="navlinks">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            HOME
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
            SERVICES
          </NavLink>
          <NavLink to="/work" className={({ isActive }) => (isActive ? 'active' : '')}>
            WORK
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            ABOUT
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
            CONTACT
          </NavLink>
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <Link to="/contact" className="nav-cta">
            <span>Start a project</span>
            <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" end onClick={closeMobileMenu}>
          HOME <span>→</span>
        </NavLink>
        <NavLink to="/services" onClick={closeMobileMenu}>
          SERVICES <span>→</span>
        </NavLink>
        <NavLink to="/work" onClick={closeMobileMenu}>
          WORK <span>→</span>
        </NavLink>
        <NavLink to="/about" onClick={closeMobileMenu}>
          ABOUT <span>→</span>
        </NavLink>
        <NavLink to="/contact" onClick={closeMobileMenu}>
          CONTACT <span>→</span>
        </NavLink>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link
            to="/contact"
            className="cta-btn"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={closeMobileMenu}
          >
            Start a project →
          </Link>
        </div>
      </div>
    </>
  );
};

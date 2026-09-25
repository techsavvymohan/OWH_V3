import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6vw' }}>
      <div style={{ textAlign: 'center', maxWidth: '500px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(5rem, 12vw, 8rem)', fontWeight: 900, lineHeight: 1, color: 'var(--pink)' }}>
          404
        </div>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', margin: '1rem 0' }}>
          Wrong turn. There's only one way forward.
        </h1>
        <p style={{ color: 'var(--ink-muted)', marginBottom: '2rem' }}>
          The page you are looking for has been moved or doesn't exist. Let's get you back to the main stage.
        </p>
        <Link to="/" className="cta-btn">
          <Home size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </main>
  );
};

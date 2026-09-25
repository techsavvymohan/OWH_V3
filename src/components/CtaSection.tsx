import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title = 'Ready to stop blending in?',
  subtitle,
  buttonText = "Let's build something loud →",
  buttonLink = '/contact'
}) => {
  return (
    <section className="cta-banner" id="cta">
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '1rem' }}>
        <span className="tag yellow" style={{ margin: 0, gap: '6px' }}>
          <Flame size={14} color="#FF3B6E" /> INBOUND ACCELERATION
        </span>
      </div>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <Link to={buttonLink} className="cta-btn">
          <span>{buttonText}</span>
          <ArrowRight size={18} />
        </Link>
        <Link to="/work" className="cta-btn alt">
          See past results
        </Link>
      </div>
    </section>
  );
};

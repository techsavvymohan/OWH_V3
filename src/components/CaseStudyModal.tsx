import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import type { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.8rem' }}>
          <span className="tag yellow" style={{ margin: 0, fontWeight: 800 }}>
            CASE STUDY #{caseStudy.num}
          </span>
          <span className="tag pink" style={{ margin: 0 }}>
            {caseStudy.industry}
          </span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '1.2rem', lineHeight: 1.1 }}>
          {caseStudy.title}
        </h2>

        {/* Highlight Metrics */}
        {caseStudy.metrics && (
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${caseStudy.metrics.length}, 1fr)`, gap: '10px', margin: '1.4rem 0', background: 'var(--paper-subtle)', padding: '1rem', border: '2px solid var(--border)' }}>
            {caseStudy.metrics.map((m, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <b style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--pink)', display: 'block' }}>
                  {m.value}
                </b>
                <span style={{ fontSize: '0.8rem', color: 'var(--ink-muted)', fontWeight: 600 }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--ink-muted)', marginBottom: '4px' }}>
              The Challenge
            </h4>
            <p style={{ margin: 0, fontSize: '0.96rem', lineHeight: 1.55 }}>{caseStudy.problem}</p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--cobalt)', marginBottom: '4px' }}>
              The Solution & Architecture
            </h4>
            <p style={{ margin: 0, fontSize: '0.96rem', lineHeight: 1.55 }}>{caseStudy.solution}</p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#10B981', marginBottom: '4px' }}>
              Measurable Business Result
            </h4>
            <p style={{ margin: 0, fontSize: '0.96rem', lineHeight: 1.55, fontWeight: 500 }}>{caseStudy.result}</p>
          </div>

          {caseStudy.deliverables && (
            <div>
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--ink-muted)', marginBottom: '8px' }}>
                Key Deliverables
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {caseStudy.deliverables.map((d, i) => (
                  <span key={i} style={{ background: 'var(--paper-subtle)', border: '1px solid var(--border)', padding: '4px 10px', borderRadius: '4px', fontSize: '0.82rem', fontWeight: 600 }}>
                    ✓ {d}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{ marginTop: '2.2rem', paddingTop: '1.2rem', borderTop: '2px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
            Looking for similar numbers in your vertical?
          </div>
          <Link
            to="/contact"
            className="cta-btn"
            style={{ padding: '0.75rem 1.6rem', fontSize: '0.92rem' }}
            onClick={onClose}
          >
            <span>Start a project like this</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

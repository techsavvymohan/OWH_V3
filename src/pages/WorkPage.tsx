import React, { useState } from 'react';
import { ProofBanner } from '../components/ProofBanner';
import { CtaSection } from '../components/CtaSection';
import { QuoteCard } from '../components/QuoteSection';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { caseStudies, workStats, clientQuotes } from '../data/workData';
import type { CaseStudy } from '../types';
import { ExternalLink } from 'lucide-react';
import { usePageAnimations } from '../hooks/usePageAnimations';

export const WorkPage: React.FC = () => {
  const pageRef = usePageAnimations();
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filters = ['All', 'Performance', 'Brand Building', 'Web Development', 'Influencers', 'Content & SEO'];

  const filteredStudies = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter((cs) =>
        cs.tags.some((t) => t.label.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <main ref={pageRef}>
      {/* Hero */}
      <section className="page-hero">
        <span className="eyebrow">THE WORK</span>
        <h1>Numbers don't need a pitch deck.</h1>
        <p className="hero-lead">
          Every brand here came with a real problem — rising costs, invisible presence, or flat sales despite heavy ad spend. We fixed it. Here's exactly what we did and what it delivered.
        </p>
      </section>

      {/* Proof Stats */}
      <ProofBanner stats={workStats} />

      {/* Filter Tabs & Case Studies */}
      <section className="tight">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div className="filter-tabs" style={{ margin: 0 }}>
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`filter-tab ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div style={{ fontSize: '0.88rem', color: 'var(--ink-muted)', fontWeight: 600 }}>
            Showing {filteredStudies.length} {filteredStudies.length === 1 ? 'project' : 'projects'}
          </div>
        </div>

        <div className="grid-2">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className={`card ${study.tilt}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setSelectedCaseStudy(study)}
            >
              <div className="num">{study.num}</div>
              <h3>{study.title}</h3>
              <p style={{ minHeight: '60px' }}>{study.problem} {study.result}</p>

              {study.metrics && (
                <div style={{ display: 'flex', gap: '1.2rem', margin: '1.2rem 0 0.8rem', padding: '0.8rem 0', borderTop: '1px dashed var(--border)', borderBottom: '1px dashed var(--border)' }}>
                  {study.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx}>
                      <b style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--pink)', display: 'block' }}>
                        {m.value}
                      </b>
                      <span style={{ fontSize: '0.78rem', color: 'var(--ink-muted)' }}>{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <div>
                  {study.tags.map((t, idx) => (
                    <span key={idx} className={`tag ${t.color}`}>
                      {t.label}
                    </span>
                  ))}
                </div>
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--cobalt)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  Deep Dive <ExternalLink size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials Grid */}
      <section>
        <div className="section-head">
          <h2>From the teams we've built with</h2>
        </div>

        <div className="grid-2">
          {clientQuotes.slice(1).map((q, idx) => (
            <QuoteCard key={idx} quote={q.quote} author={q.author} company={q.company} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Want results like this for your brand?"
        buttonText="Start a project →"
        buttonLink="/contact"
      />

      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </main>
  );
};

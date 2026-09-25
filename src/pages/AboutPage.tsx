import React from 'react';
import { ProofBanner } from '../components/ProofBanner';
import { CtaSection } from '../components/CtaSection';
import { aboutTimeline, howWeWork, beliefs, teamPillars } from '../data/aboutData';
import { usePageAnimations } from '../hooks/usePageAnimations';

export const AboutPage: React.FC = () => {
  const pageRef = usePageAnimations();
  return (
    <main ref={pageRef}>
      {/* Hero */}
      <section className="page-hero">
        <span className="eyebrow">WHO WE ARE</span>
        <h1>We built the agency we kept wishing existed.</h1>
        <p className="hero-lead">
          OnlyWayOnline started because every brand we worked with was hiring three different agencies to do performance, branding and influencer work — and none of them talked to each other. So we built one team that does all three properly.
        </p>
      </section>

      {/* Proof Stats */}
      <ProofBanner />

      {/* How we got here (Timeline) */}
      <section>
        <div className="section-head">
          <h2>How we got here</h2>
          <p>The short version of how the agency came together — from a nimble media shop to a full-funnel growth engine.</p>
        </div>

        <div className="timeline">
          {aboutTimeline.map((item, idx) => (
            <div key={idx} className="item">
              <span className="period-pill">{item.period}</span>
              <b>{item.title}</b>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work (3 Core Rules) */}
      <section className="tight">
        <div className="section-head">
          <h2>How we work</h2>
          <p>The same three rules on every account, regardless of size.</p>
        </div>

        <div className="grid-3">
          {howWeWork.map((rule) => (
            <div key={rule.num} className={`card ${rule.tilt || ''}`}>
              <div className="num">{rule.num}</div>
              <h3>{rule.title}</h3>
              <p>{rule.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What we believe */}
      <section className="tight">
        <div className="section-head">
          <h2>What we believe</h2>
          <p>Non-negotiable principles that shape how we spend media budgets and craft creative.</p>
        </div>

        <div>
          {beliefs.map((belief, idx) => (
            <span key={idx} className={`tag ${belief.color}`}>
              {belief.text}
            </span>
          ))}
        </div>
      </section>

      {/* Who's behind it (Team Pillars) */}
      <section>
        <div className="section-head">
          <h2>Who's behind it</h2>
          <p>A small team on purpose — every account gets senior eyes, not a rotating list of juniors.</p>
        </div>

        <div className="grid-3">
          {teamPillars.map((pillar, idx) => (
            <div key={idx} className={`card ${pillar.tilt || ''}`}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
              <div style={{ marginTop: '1.2rem', paddingTop: '1rem', borderTop: '1px dashed var(--border)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--ink-muted)' }}>
                  Core Expertise
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                  {pillar.roles.map((r, i) => (
                    <span key={i} style={{ fontSize: '0.82rem', background: 'var(--paper-subtle)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border)', fontWeight: 600 }}>
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        title="Want to know if we're the right fit before you commit to anything?"
        buttonText="Get in touch →"
        buttonLink="/contact"
      />
    </main>
  );
};

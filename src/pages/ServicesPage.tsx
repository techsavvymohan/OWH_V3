import React from 'react';
import { Minus, Check } from 'lucide-react';
import { Marquee } from '../components/Marquee';
import { CtaSection } from '../components/CtaSection';
import { ServiceEstimator } from '../components/ServiceEstimator';
import { detailedServices, comparisonMatrix } from '../data/servicesData';
import { servicesFaqs } from '../data/faqData';
import { usePageAnimations } from '../hooks/usePageAnimations';

export const ServicesPage: React.FC = () => {
  const pageRef = usePageAnimations();
  return (
    <main ref={pageRef}>
      {/* Hero */}
      <section className="page-hero">
        <span className="eyebrow">WHAT WE DO & HOW WE WIN</span>
        <h1>Engineered to be seen.<br />Built to scale.</h1>
        <p className="hero-lead">
          Most agencies operate in silos — dev shops that don't understand conversion, ad agencies running traffic to clunky pages, or branding studios that ignore code. We build high-speed web flagships, engineer profitable acquisition funnels, and activate creator culture under one unified roof. When your engineering, brand voice, and media spend share the exact same brain, being noticed isn't luck — it's the only way.
        </p>
      </section>

      {/* Marquee Ticker */}
      <Marquee />

      {/* 4 Core Disciplines in Detail */}
      {detailedServices.map((cat) => (
        <section key={cat.id} id={cat.id}>
          <div className="section-head">
            <h2>{cat.title}</h2>
            <p>{cat.subtitle}</p>
            {cat.badges && (
              <div className="section-badges">
                {cat.badges.map((b, i) => (
                  <span key={i} className={`tag ${b.color}`}>
                    {b.text}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className={cat.items.length === 4 ? 'grid-4' : 'grid-3'}>
            {cat.items.map((item) => (
              <div key={item.id} className={`card ${item.tilt || ''}`}>
                {item.number && <div className="num">{item.number}</div>}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.features && (
                  <ul className="card-features">
                    {item.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Interactive Engagement Estimator */}
      <section className="tight">
        <div className="section-head">
          <h2>Get a Free Quote</h2>
          <p>Select the services you need and tell us about your brand — we will send back a tailored scope. No pricing pressure. Everything discussed on a short call.</p>
        </div>
        <ServiceEstimator />
      </section>

      {/* How we like to be hired (Comparison Table) */}
      <section>
        <div className="section-head">
          <h2>How we like to be hired</h2>
          <p>Two common ways clients bring us in — none of them locked to a rigid package.</p>
        </div>

        <div className="compare-container">
          <div className="compare">
            <div className="row">
              <div>What you get</div>
              <div>Single Channel</div>
              <div>Full-Funnel</div>
            </div>

            {comparisonMatrix.map((item, idx) => (
              <div key={idx} className="row">
                <div>{item.feature}</div>
                <div>
                  {item.single === '✓' ? (
                    <Check size={18} className="check-icon" strokeWidth={2.75} />
                  ) : item.single === '—' ? (
                    <Minus size={16} color="var(--ink-muted)" />
                  ) : (
                    <span>{item.single}</span>
                  )}
                </div>
                <div>
                  {item.full === '✓' ? (
                    <Check size={18} className="check-icon" strokeWidth={2.75} />
                  ) : (
                    <span>{item.full}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions we get a lot */}
      <section className="tight">
        <div className="section-head">
          <h2>Questions we get a lot</h2>
          <p>Common questions about engagement terms, minimums, and in-house collaboration.</p>
        </div>

        <div className="faq">
          {servicesFaqs.map((faq, idx) => (
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

      {/* CTA */}
      <CtaSection
        title="Not sure which service you need? Tell us the problem instead."
        buttonText="Talk to us →"
        buttonLink="/contact"
      />
    </main>
  );
};

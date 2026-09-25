import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Marquee } from '../components/Marquee';
import { ProofBanner } from '../components/ProofBanner';
import { QuoteSection } from '../components/QuoteSection';
import { CtaSection } from '../components/CtaSection';
import { coreDisciplines, engagementProcess } from '../data/servicesData';
import { homeFaqs } from '../data/faqData';
import { usePageAnimations } from '../hooks/usePageAnimations';

export const HomePage: React.FC = () => {
  const pageRef = usePageAnimations();

  return (
    <main ref={pageRef}>
      {/* Hero Section */}
      <section className="page-hero" style={{ paddingBottom: '3vw' }}>
        <h1 style={{ fontSize: 'clamp(2.6rem, 7.2vw, 6.2rem)', lineHeight: 0.94, maxWidth: 'none' }}>
          There's only<br />
          one way<br />
          <span className="sticker-orange">to be seen.</span>
        </h1>
        <p className="hero-lead" style={{ maxWidth: '36ch' }}>
          A digital marketing agency running performance, brand and influencer work under one roof — for brands that would rather be talked about than blend in.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="cta-btn">
            <span>Let's build something loud</span>
            <ArrowRight size={18} />
          </Link>
          <Link to="/work" className="cta-btn alt">
            See the work
          </Link>
        </div>
      </section>

      {/* Ticker Marquee */}
      <Marquee />

      {/* Core Disciplines */}
      <section>
        <div className="section-head">
          <h2>Everything a brand needs to actually get noticed.</h2>
          <p>Five integrated disciplines, engineered by one team, pointed at one goal.</p>
        </div>

        <div className="grid-5">
          {coreDisciplines.map((d) => (
            <div key={d.num} className={`card ${d.tilt}`}>
              <div className="num">{d.num}</div>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
              <div style={{ marginTop: '1.2rem' }}>
                <span className="tag yellow" style={{ fontSize: '0.78rem', margin: 0 }}>
                  {d.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <Link to="/services" className="cta-btn alt">
            <span>See all services</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="tight">
        <div className="section-head">
          <h2>How an engagement actually runs</h2>
          <p>No 40-slide onboarding deck. Four stages, repeated every quarter.</p>
        </div>

        <div className="process">
          {engagementProcess.map((step) => (
            <div key={step.step} className="step">
              <div className="step-head">
                <b>{step.step}</b>
                <span className="step-badge">{step.duration}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Quote */}
      <QuoteSection
        quote="Working with three agencies felt like three different brands. OnlyWayOnline is the first team that made performance and brand actually agree with each other."
        author="Marketing Lead"
        company="D2C skincare brand"
      />

      {/* Proof Banner */}
      <ProofBanner />

      {/* FAQs */}
      <section className="tight">
        <div className="section-head">
          <h2>Common questions</h2>
          <p>Clear, direct answers to what founders ask us before partnering.</p>
        </div>

        <div className="faq">
          {homeFaqs.map((faq, idx) => (
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
        title="Ready to stop blending in?"
        buttonText="Let's build something loud →"
        buttonLink="/contact"
      />
    </main>
  );
};

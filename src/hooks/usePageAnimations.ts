import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * usePageAnimations — drop into any page component to wire up:
 *  - Hero text stagger reveal
 *  - Section head fade-up on scroll
 *  - Card batch stagger reveal on scroll
 *  - Proof stats pop-in
 *  - CTA section dramatic entrance
 *  - Marquee slide-in
 */
export function usePageAnimations() {
  const pageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
          reduceMotion: '(prefers-reduced-motion: reduce)',
        },
        (ctx) => {
          const { reduceMotion } = ctx.conditions as { isDesktop: boolean; reduceMotion: boolean };
          if (reduceMotion) return;

          // ── Hero section ─────────────────────────────────────────────
          const heroSection = pageRef.current?.querySelector('.page-hero');
          if (heroSection) {
            const eyebrow = heroSection.querySelector('.eyebrow');
            const h1 = heroSection.querySelector('h1');
            const lead = heroSection.querySelector('.hero-lead');
            const actions = heroSection.querySelector('.hero-actions');

            const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            if (eyebrow) {
              heroTl.from(eyebrow, { y: 24, autoAlpha: 0, duration: 0.5 });
            }
            if (h1) {
              heroTl.from(h1, { y: 40, autoAlpha: 0, duration: 0.7 }, '-=0.2');
            }
            if (lead) {
              heroTl.from(lead, { y: 24, autoAlpha: 0, duration: 0.55 }, '-=0.35');
            }
            if (actions) {
              heroTl.from(actions.children, { y: 20, autoAlpha: 0, duration: 0.4, stagger: 0.12 }, '-=0.25');
            }
          }

          // ── Section headings (fade-up on scroll) ─────────────────────
          ScrollTrigger.batch('.section-head', {
            onEnter: (elements) => {
              gsap.from(elements, {
                y: 40,
                autoAlpha: 0,
                duration: 0.65,
                ease: 'power3.out',
                stagger: 0.1,
              });
            },
            start: 'top 88%',
            once: true,
          });

          // ── Cards staggered batch reveal ──────────────────────────────
          ScrollTrigger.batch('.card', {
            onEnter: (elements) => {
              gsap.from(elements, {
                y: 35,
                autoAlpha: 0,
                duration: 0.55,
                ease: 'power2.out',
                stagger: { each: 0.08, from: 'start' },
                clearProps: 'transform',
              });
            },
            start: 'top 90%',
            once: true,
          });

          // ── Timeline items ────────────────────────────────────────────
          ScrollTrigger.batch('.timeline .item', {
            onEnter: (elements) => {
              gsap.from(elements, {
                x: -40,
                autoAlpha: 0,
                duration: 0.55,
                ease: 'power2.out',
                stagger: 0.12,
              });
            },
            start: 'top 88%',
            once: true,
          });

          // ── Proof / stat items ────────────────────────────────────────
          ScrollTrigger.batch('.proof .stat', {
            onEnter: (elements) => {
              gsap.from(elements, {
                scale: 0.85,
                autoAlpha: 0,
                duration: 0.5,
                ease: 'back.out(1.4)',
                stagger: 0.1,
              });
            },
            start: 'top 90%',
            once: true,
          });

          // ── FAQ items slide-in ────────────────────────────────────────
          ScrollTrigger.batch('.faq details', {
            onEnter: (elements) => {
              gsap.from(elements, {
                y: 24,
                autoAlpha: 0,
                duration: 0.45,
                ease: 'power2.out',
                stagger: 0.08,
              });
            },
            start: 'top 92%',
            once: true,
          });

          // ── Marquee entrance ──────────────────────────────────────────
          gsap.from('.marquee-track', {
            autoAlpha: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.marquee-track',
              start: 'top 92%',
              once: true,
            },
          });

          // ── CTA section scale-up reveal ───────────────────────────────
          ScrollTrigger.batch('.cta-block', {
            onEnter: (elements) => {
              gsap.from(elements, {
                scale: 0.94,
                y: 30,
                autoAlpha: 0,
                duration: 0.7,
                ease: 'power3.out',
              });
            },
            start: 'top 88%',
            once: true,
          });

          // ── Compare table rows ────────────────────────────────────────
          ScrollTrigger.batch('.compare .row', {
            onEnter: (elements) => {
              gsap.from(elements, {
                x: -20,
                autoAlpha: 0,
                duration: 0.4,
                ease: 'power2.out',
                stagger: 0.06,
              });
            },
            start: 'top 90%',
            once: true,
          });

          // ── Filter tabs ───────────────────────────────────────────────
          const filterTabsEl = pageRef.current?.querySelector('.filter-tabs');
          if (filterTabsEl) {
            gsap.from('.filter-tab', {
              y: 16,
              autoAlpha: 0,
              duration: 0.4,
              ease: 'power2.out',
              stagger: 0.05,
              scrollTrigger: {
                trigger: '.filter-tabs',
                start: 'top 88%',
                once: true,
              },
            });
          }

          // ── Process steps ─────────────────────────────────────────────
          ScrollTrigger.batch('.process .step', {
            onEnter: (elements) => {
              gsap.from(elements, {
                y: 30,
                autoAlpha: 0,
                duration: 0.55,
                ease: 'power3.out',
                stagger: 0.12,
              });
            },
            start: 'top 88%',
            once: true,
          });

          // ── Estimator card ────────────────────────────────────────────
          const estimatorEl = pageRef.current?.querySelector('.estimator-card');
          if (estimatorEl) {
            gsap.from('.estimator-card', {
              y: 40,
              autoAlpha: 0,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '.estimator-card',
                start: 'top 85%',
                once: true,
              },
            });
          }
        }
      );

      return () => mm.revert();
    },
    { scope: pageRef }
  );

  return pageRef;
}

/**
 * useNavbarAnimation — runs once on mount for the sticky nav entrance
 */
export function useNavbarAnimation() {
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(navRef.current, {
        y: -80,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.1,
      });
    },
    { scope: navRef }
  );

  return navRef;
}

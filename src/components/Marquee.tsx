import React from 'react';

interface MarqueeProps {
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = () => {
  const items = [
    { text: 'PAID MEDIA', color: '' },
    { text: 'BRAND BUILDING', color: 'pink' },
    { text: 'WEB DEVELOPMENT', color: 'orange' },
    { text: 'INFLUENCER MARKETING', color: '' },
    { text: 'CONTENT', color: 'yellow' },
    { text: 'CREATIVE STRATEGY', color: 'pink' },
    { text: 'SEO & CODE', color: '' },
    { text: 'ANALYTICS', color: 'yellow' }
  ];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {/* Render twice for seamless continuous infinite scroll */}
        {[...items, ...items].map((item, index) => (
          <span key={`mq-1-${index}`} className={item.color}>
            {item.text}
          </span>
        ))}
        {[...items, ...items].map((item, index) => (
          <span key={`mq-2-${index}`} className={item.color}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};

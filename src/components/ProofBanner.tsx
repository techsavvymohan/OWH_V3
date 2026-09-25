import React from 'react';

interface StatItem {
  value: string;
  label: string;
}

interface ProofBannerProps {
  stats?: StatItem[];
}

export const ProofBanner: React.FC<ProofBannerProps> = ({ stats }) => {
  const defaultStats: StatItem[] = [
    { value: '5', label: 'disciplines under one roof' },
    { value: '0', label: 'cookie-cutter strategies' },
    { value: '360°', label: 'brand, performance and influence' },
    { value: '1', label: 'way of doing this — ours' }
  ];

  const items = stats || defaultStats;

  return (
    <section className="proof" aria-label="Agency Statistics & Track Record">
      {items.map((stat, idx) => (
        <div key={idx} className="stat">
          <b>{stat.value}</b>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

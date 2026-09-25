import React from 'react';

interface QuoteProps {
  quote: string;
  author: string;
  company?: string;
  className?: string;
}

export const QuoteCard: React.FC<QuoteProps> = ({ quote, author, company, className = '' }) => {
  return (
    <div className={`quote ${className}`}>
      <p>"{quote}"</p>
      <cite>
        — {author}
        {company && <span style={{ opacity: 0.85 }}>, {company}</span>}
      </cite>
    </div>
  );
};

export const QuoteSection: React.FC<QuoteProps> = (props) => {
  return (
    <section>
      <QuoteCard {...props} />
    </section>
  );
};

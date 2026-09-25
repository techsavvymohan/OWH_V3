import type { CaseStudy } from '../types';

export const workStats = [
  { value: '5+', label: 'live brands built & grown' },
  { value: '5', label: 'disciplines, one team' },
  { value: '0', label: 'cookie-cutter strategies' },
  { value: '100%', label: 'senior eyes on every account' }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'gocoupon',
    num: '01',
    title: 'GoCoupon.io',
    industry: 'Deals & Coupon Platform',
    problem: 'Launching a coupon discovery platform in a space dominated by legacy aggregators with massive SEO moats and established brand recall.',
    solution: 'Engineered a performance-first acquisition strategy targeting deal-seekers on Meta and Google, combined with a compounding SEO content engine targeting high-intent saving queries.',
    result: 'Built consistent organic traffic from zero while keeping paid CAC well within sustainable thresholds — establishing GoCoupon as a trusted destination for deal hunters.',
    tags: [
      { label: 'Performance', color: 'yellow' },
      { label: 'SEO & Content', color: 'pink' }
    ],
    tilt: 'tilt-l',
    metrics: [
      { label: 'Organic Presence', value: 'Built from 0' },
      { label: 'Paid CAC', value: 'Within Target' },
      { label: 'Channels Active', value: 'Meta + Google' }
    ],
    deliverables: ['Paid Social & Search Setup', 'SEO Content Engine', 'Landing Page Optimisation', 'Weekly Performance Reporting']
  },
  {
    id: 'matchingprop',
    num: '02',
    title: 'MatchingProp.com',
    industry: 'Prop Firm Comparison Platform',
    problem: 'The prop trading space was exploding — but traders had no reliable, unbiased way to compare funded account programmes, fee structures, and payout terms across firms. Most "comparison" sites were affiliate-first, trust-last.',
    solution: 'Built a feature-rich, interactive dark-theme comparison platform where traders can filter and compare prop firms side by side, access exclusive discount codes, and make genuinely informed decisions — all wrapped in a fast, dynamic UI that felt native to the trading world.',
    result: 'Delivered a product traders actually bookmark — an authoritative comparison destination with real discount value and a UI that stands apart from every generic affiliate page in the space.',
    tags: [
      { label: 'Web Development', color: 'yellow' },
      { label: 'Brand Building', color: 'pink' }
    ],
    tilt: 'tilt-r',
    metrics: [
      { label: 'UI Theme', value: 'Interactive Dark' },
      { label: 'Feature', value: 'Live Discount Codes' },
      { label: 'Positioning', value: 'Trader-First' }
    ],
    deliverables: ['Interactive Comparison Engine', 'Dark Theme UI / UX Design', 'Discount Code Integration', 'Prop Firm Database Architecture']
  },
  {
    id: 'citerush',
    num: '03',
    title: 'CiteRush.com',
    industry: 'Custom SaaS Platform',
    problem: 'The client needed a fully operational, multi-tool SaaS product built from scratch — not a no-code workaround, not a template. A real platform with real infrastructure, on a $5k budget that most agencies would have laughed at.',
    solution: 'We engineered the entire product end-to-end: a web scraper, leads scraper, and a suite of analysis tools covering SEO, GEO, AEO, and E-E-A-T — all under one dashboard. Paired with a fully custom admin panel for user and subscription management, and an integrated payment gateway for billing. Zero third-party builders. Every line written to spec.',
    result: 'A production-ready SaaS platform with multiple working tools, complete back-office infrastructure, and a payment-gated access system — delivered at a price point that proved custom software does not have to cost a fortune when the right team builds it.',
    tags: [
      { label: 'Web Development', color: 'yellow' },
      { label: 'SaaS Build', color: 'pink' }
    ],
    tilt: 'tilt-l',
    metrics: [
      { label: 'Budget', value: '$5,000' },
      { label: 'Tools Built', value: '4+ (Scraper, SEO, GEO, AEO, E-E-A-T)' },
      { label: 'Infra', value: 'Admin Panel + Payments' }
    ],
    deliverables: ['Web Scraper Tool', 'Leads Scraper Tool', 'SEO / GEO / AEO / E-E-A-T Analysis Suite', 'Custom Admin Panel', 'Payment Gateway Integration', 'User & Subscription Management']
  },
  {
    id: 'moneymoksh',
    num: '04',
    title: 'MoneyMoksh.com',
    industry: 'Personal Finance & Wealth',
    problem: 'Breaking into the personal finance content space where trust is everything and audiences are trained to distrust anything that looks like a sales pitch.',
    solution: 'Built MoneyMoksh\'s brand voice around financial clarity and zero jargon — positioned as a guide, not a product. Distributed through SEO-led editorial content and organic social that educated rather than sold.',
    result: 'Built a loyal, engaged audience in the personal finance niche by consistently delivering content that people actually found useful — creating compounding brand equity over time.',
    tags: [
      { label: 'Brand Building', color: 'yellow' },
      { label: 'Content & SEO', color: 'pink' }
    ],
    tilt: 'tilt-r',
    metrics: [
      { label: 'Niche Authority', value: 'Finance Space' },
      { label: 'Content Engine', value: 'SEO + Social' },
      { label: 'Tone', value: 'Zero Jargon' }
    ],
    deliverables: ['Brand Voice & Messaging Guide', 'SEO Content Strategy', 'Organic Social Calendar', 'Trust-First Creative Framework']
  },
  {
    id: 'btvaffiliates',
    num: '05',
    title: 'BTV Affiliates',
    industry: 'Affiliate Marketing Network',
    problem: 'Scaling an affiliate network requires two parallel audiences: advertisers who need results and publishers who need trust. Most platforms fail one of the two.',
    solution: 'Built BTV Affiliates\' digital presence from the ground up — a brand that communicates performance credibility to advertisers and fair-deal transparency to publishers, backed by targeted acquisition campaigns on both sides.',
    result: 'Established BTV Affiliates as a credible dual-sided platform with a professional web presence that converts both advertiser sign-ups and publisher onboardings effectively.',
    tags: [
      { label: 'Web Development', color: 'yellow' },
      { label: 'Brand Building', color: 'pink' }
    ],
    tilt: 'tilt-l',
    metrics: [
      { label: 'Audiences Served', value: '2 (Advertisers + Publishers)' },
      { label: 'Web Stack', value: 'Modern & Fast' },
      { label: 'Positioning', value: 'Trust-First' }
    ],
    deliverables: ['Web Development & UI', 'Brand Identity System', 'Dual-Audience Messaging Strategy', 'Performance Onboarding Funnels']
  }
];

export const clientQuotes = [
  {
    quote: "Three agencies, three different brands. OnlyWayOnline is the first team that made our performance and brand actually agree with each other.",
    author: "Marketing Head",
    company: "D2C Brand"
  },
  {
    quote: "They rebuilt our funnel and our brand voice in the same sprint. Everything finally sounds like one company.",
    author: "Founder",
    company: "Fintech Startup"
  },
  {
    quote: "First agency that treated creator marketing like a real channel — not a favour to a friend.",
    author: "Growth Lead",
    company: "SaaS Platform"
  }
];

import type { ServiceCategory } from '../types';

export const coreDisciplines = [
  {
    num: '01',
    title: 'Performance',
    description: 'Media buying and paid acquisition built around real numbers, not vanity ones.',
    tilt: '' as const,
    link: '/services#performance',
    highlight: 'Outcome-driven acquisition'
  },
  {
    num: '02',
    title: 'Brand Building',
    description: 'Positioning, identity and voice that make a brand recognisable in a feed of thousands.',
    tilt: 'tilt-l' as const,
    link: '/services#brand-building',
    highlight: 'Unmistakable presence'
  },
  {
    num: '03',
    title: 'Web Development',
    description: 'Sub-second digital flagships and high-converting landing pages built on modern tech stacks.',
    tilt: 'tilt-r' as const,
    link: '/services#web-development',
    highlight: 'Speed & conversion engineering'
  },
  {
    num: '04',
    title: 'Influencers',
    description: 'Creator partnerships that read like culture, not like a media plan.',
    tilt: 'tilt-l' as const,
    link: '/services#influencer-marketing',
    highlight: 'Cultural resonance'
  },
  {
    num: '05',
    title: 'Full-Funnel',
    description: 'Content, social, SEO and everything in between — one team, one story.',
    tilt: '' as const,
    link: '/services#content',
    highlight: 'Unified growth engine'
  }
];

export const detailedServices: ServiceCategory[] = [
  {
    id: 'performance',
    title: 'Performance',
    subtitle: "Media buying that's judged on outcomes, not impressions.",
    badges: [
      { text: 'Typically 4–8 week ramp-up', color: 'yellow' },
      { text: 'Weekly optimisation cycle', color: 'pink' }
    ],
    items: [
      {
        id: 'paid-social-search',
        title: 'Paid Social & Search',
        description: 'Meta, Google, TikTok and programmatic buys, built around your actual unit economics — not platform benchmarks.',
        features: ['Real CPA & ROAS optimization', 'Cross-channel budget scaling', 'Custom audience retargeting pools']
      },
      {
        id: 'conversion-funnels',
        title: 'Conversion & Funnels',
        description: "Landing pages and funnel fixes that turn traffic you're already paying for into revenue instead of bounce rate.",
        tilt: 'tilt-l',
        features: ['High-intent landing pages', 'Friction audit & CRO testing', 'Checkout flow streamlining']
      },
      {
        id: 'analytics-reporting',
        title: 'Analytics & Reporting',
        description: "Dashboards that show what's working in plain numbers, reviewed weekly — no vanity metrics, no surprises at month-end.",
        tilt: 'tilt-r',
        features: ['Weekly transparency meetings', 'Multi-touch attribution models', 'Real-time custom dashboards']
      }
    ]
  },
  {
    id: 'brand-building',
    title: 'Brand Building',
    subtitle: 'Positioning and identity work that makes a brand recognisable before anyone reads the name.',
    items: [
      {
        id: 'positioning-strategy',
        title: 'Positioning & Strategy',
        description: 'A clear answer to "why you, and not the ten other options" — grounded in what the brand can actually back up.',
        tilt: 'tilt-r',
        features: ['Competitor differentiation', 'ICP definition & resonance', 'Core messaging pillars']
      },
      {
        id: 'visual-identity',
        title: 'Visual Identity',
        description: 'Logo, colour, type and a system your team can actually use without calling us for every new asset.',
        features: ['Design tokens & guidelines', 'Social & advertising templates', 'Scalable component library']
      },
      {
        id: 'voice-messaging',
        title: 'Voice & Messaging',
        description: 'How the brand talks, in a caption, an ad, a customer email — written down so it stays consistent as the team grows.',
        tilt: 'tilt-l',
        features: ['Tone matrix across channels', 'Ad headline playbooks', 'Customer comms guidelines']
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development & Digital Flagships',
    subtitle: 'High-speed code, modern tech stacks, and conversion engines built to turn expensive traffic into loyal buyers.',
    badges: [
      { text: '< 1s Load Times / 100 Core Web Vitals', color: 'yellow' },
      { text: 'Custom Modern Stack (React / Vite / Next)', color: 'pink' }
    ],
    items: [
      {
        id: 'high-speed-flagships',
        title: 'High-Performance Flagships',
        description: 'Bespoke web applications built on modern frameworks that load in milliseconds, scale effortlessly, and eliminate clunky CMS bloat.',
        tilt: 'tilt-l',
        features: ['Sub-second page speeds', 'Responsive mobile-first layouts', 'Zero bloat, pure engineering']
      },
      {
        id: 'conversion-landing-pages',
        title: 'Conversion Funnels & Landing Pages',
        description: 'Pixel-perfect, high-converting checkout flows and acquisition pages engineered specifically to maximize paid media ROAS.',
        features: ['A/B testing architecture', 'Server-side tracking & attribution', 'Frictionless checkout paths']
      },
      {
        id: 'headless-interactive',
        title: 'Interactive Experiences & Headless Systems',
        description: 'Dynamic micro-interactions, hardware-accelerated animations, and flexible content systems your team can update without a developer.',
        tilt: 'tilt-r',
        features: ['Headless CMS integration', 'Physical spring micro-animations', 'Scalable component design systems']
      }
    ]
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    subtitle: 'Creator partnerships that read as culture, not as a media plan with a face on it.',
    items: [
      {
        id: 'creator-sourcing',
        title: 'Creator Sourcing',
        description: 'Matching on audience fit and actual engagement, not just follower count — we check the comments, not just the bio.',
        tilt: 'tilt-l',
        features: ['Rigorous audience vetting', 'Niche authentic creators', 'Fraud & bot filtering']
      },
      {
        id: 'campaign-management',
        title: 'Campaign Management',
        description: 'Briefs, contracts, content review and payment handled end to end, so nothing sits in your inbox.',
        features: ['Turnkey briefing workflows', 'Contracting & legal clearance', 'On-time delivery tracking']
      },
      {
        id: 'ugc-content-rights',
        title: 'UGC & Content Rights',
        description: 'Creator content repurposed across your paid and organic channels, properly licensed and cleared for use.',
        tilt: 'tilt-r',
        features: ['Paid whitelisting / dark posting', 'Full commercial usage rights', 'High-performing hook iterations']
      }
    ]
  },
  {
    id: 'content',
    title: 'Content & Everything Else',
    subtitle: 'The channels that hold the rest of the strategy together.',
    items: [
      {
        id: 'content-production',
        number: '01',
        title: 'Content Production',
        description: 'Short-form video, photo and design, made for how people actually scroll — not repurposed TV ads.',
        features: ['TikTok & Reels native cuts', 'Thumb-stopping 3-second hooks', 'High-velocity weekly shoots']
      },
      {
        id: 'organic-social',
        number: '02',
        title: 'Organic Social',
        description: "Channel management, community replies and a posting rhythm that doesn't burn the team out by month three.",
        features: ['Community management & banter', 'Consistent weekly cadence', 'Platform-native trend response']
      },
      {
        id: 'seo',
        number: '03',
        title: 'SEO',
        description: "Technical fixes and content that compounds, for the traffic you don't have to pay for every month.",
        features: ['Technical site performance', 'High-intent programmatic content', 'Compounding organic rank']
      },
      {
        id: 'email-crm',
        number: '04',
        title: 'Email & CRM',
        description: 'Retention flows that make the customers you already won worth more over time.',
        features: ['Welcome & abandoned cart flows', 'Segmented customer win-backs', 'Repeat purchase triggers']
      }
    ]
  }
];

export const engagementProcess = [
  {
    step: '01',
    title: 'Discover',
    description: "Audit what's working, what's wasted spend, and where the brand actually stands.",
    duration: 'Week 1'
  },
  {
    step: '02',
    title: 'Plan',
    description: 'One strategy across performance, brand and creator work — not three separate ones.',
    duration: 'Week 1–2'
  },
  {
    step: '03',
    title: 'Execute',
    description: 'Campaigns go live across every channel in the same sprint, not staggered months apart.',
    duration: 'Week 2–3'
  },
  {
    step: '04',
    title: 'Optimize',
    description: 'Weekly numbers, monthly strategy resets. Nothing runs untouched for a quarter.',
    duration: 'Ongoing'
  }
];

export const comparisonMatrix = [
  { feature: 'One discipline, done properly', single: '✓', full: '✓' },
  { feature: 'Cross-channel strategy', single: '—', full: '✓' },
  { feature: 'Dedicated creative & content', single: 'Add-on', full: '✓' },
  { feature: 'Influencer & UGC pipeline', single: 'Add-on', full: '✓' },
  { feature: 'Weekly reporting', single: '✓', full: '✓' },
  { feature: 'Best for', single: 'Testing us out', full: 'Brands ready to scale everywhere at once' }
];

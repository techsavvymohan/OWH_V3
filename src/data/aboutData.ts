import type { TimelineItem, PillarItem, TeamPillar } from '../types';

export const aboutTimeline: TimelineItem[] = [
  {
    period: 'Year one',
    title: 'Two-person Performance Shop',
    description: 'Started running paid media and conversion tracking for a handful of fast-growing D2C brands.'
  },
  {
    period: 'Year two',
    title: 'Expanding Brand & Creator Capabilities',
    description: 'Clients kept asking us to fix their brand identity and creator work too — so we hired top talent instead of referring it out.'
  },
  {
    period: 'Year three',
    title: 'The Full-Funnel Integration',
    description: 'Became a unified full-funnel team: performance, brand positioning, and influencer activations running off the exact same strategic playbook.'
  },
  {
    period: 'Today',
    title: 'OnlyWayOnline (OWO)',
    description: 'One agency, one unified team, and one uncompromising standard for brands that would rather be talked about than blend in.'
  }
];

export const howWeWork: PillarItem[] = [
  {
    num: '01',
    title: 'Strategy before spend',
    description: "We don't touch a media budget until we know exactly who it's for, why it matters, and how we measure payback.",
    tilt: undefined
  },
  {
    num: '02',
    title: 'One team, one brand',
    description: 'The people running your media ads sit in the same room as the people writing your brand voice and briefing creators.',
    tilt: 'tilt-l'
  },
  {
    num: '03',
    title: 'Numbers over noise',
    description: 'Every campaign is held accountable to bottom-line business outcomes and revenue contribution, not vanity impressions.',
    tilt: 'tilt-r'
  }
];

export const beliefs = [
  { text: 'Attention is earned, not bought', color: 'yellow' },
  { text: 'Consistency beats virality', color: 'pink' },
  { text: 'Data settles arguments', color: 'yellow' },
  { text: 'Creative is strategy', color: 'pink' },
  { text: 'Small brands can outmove big ones', color: 'yellow' },
  { text: 'Zero cookie-cutter templates', color: 'pink' },
  { text: 'Transparency above all else', color: 'yellow' }
];

export const teamPillars: TeamPillar[] = [
  {
    title: 'Strategy & Performance',
    description: "Media buyers, analysts, and growth engineers who've scaled budgets across insurance, D2C, and fintech verticals.",
    roles: ['Paid Acquisition Leads', 'Data & Tracking Engineers', 'CRO Specialists'],
    tilt: undefined
  },
  {
    title: 'Brand & Creative',
    description: 'Designers, art directors, and copywriters who engineer enduring design systems rather than disposable one-off assets.',
    roles: ['Brand Strategists', 'Visual Designers', 'Editorial Copywriters'],
    tilt: 'tilt-l'
  },
  {
    title: 'Influencer & Content',
    description: 'Cultural curators who live inside the creator economy daily, fostering authentic partnerships rather than transactional ad spots.',
    roles: ['Creator Managers', 'Short-Form Video Producers', 'Content Strategists'],
    tilt: 'tilt-r'
  }
];

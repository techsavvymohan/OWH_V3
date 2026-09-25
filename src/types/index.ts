export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tilt?: 'tilt-l' | 'tilt-r' | '';
  number?: string;
  tags?: string[];
  features?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  items: ServiceItem[];
  badges?: { text: string; color: 'yellow' | 'pink' | 'cobalt' }[];
}

export interface CaseStudy {
  id: string;
  num: string;
  title: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  tags: { label: string; color: 'yellow' | 'pink' }[];
  tilt: 'tilt-l' | 'tilt-r';
  metrics?: { label: string; value: string }[];
  deliverables?: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
}

export interface PillarItem {
  num: string;
  title: string;
  description: string;
  tilt?: 'tilt-l' | 'tilt-r';
}

export interface TeamPillar {
  title: string;
  description: string;
  tilt?: 'tilt-l' | 'tilt-r';
  roles: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

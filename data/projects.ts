export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  tags: string[];
  demoHref: string;
  accentColor: string;
  previewBg: string;
  goals: string[];
  features: string[];
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: 'dental-clinic',
    title: 'Bright Smile Dental',
    category: 'Business Website',
    shortDescription:
      'A polished website for a modern dental clinic — appointment CTA, service pages, and doctor profiles.',
    description:
      'Bright Smile Dental needed a trustworthy online presence that converts first-time visitors into booked appointments. The design prioritises calm confidence with a clean layout, clear service hierarchy, and a prominent CTA flow.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    demoHref: '/work/dental-clinic',
    accentColor: '#3b9e8c',
    previewBg: 'from-teal-900/60 to-charcoal-900',
    goals: [
      'Build trust immediately on first visit',
      'Drive appointment bookings via prominent CTAs',
      'Clearly present services and doctor credentials',
    ],
    features: [
      'Hero with appointment booking CTA',
      'Service overview with icons',
      'Dentist profile cards',
      'FAQ accordion',
      'Location and contact section',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
  },
  {
    slug: 'saas-platform',
    title: 'FlowMetric',
    category: 'SaaS Marketing',
    shortDescription:
      'A conversion-focused marketing site for a fictional B2B analytics SaaS — pricing, features, and social proof.',
    description:
      'FlowMetric is a fictional business analytics platform. The marketing site is designed to communicate product value fast, reduce friction to trial sign-up, and handle objections through clear pricing and FAQ sections.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    demoHref: '/work/saas-platform',
    accentColor: '#6366f1',
    previewBg: 'from-indigo-900/60 to-charcoal-900',
    goals: [
      'Communicate product value above the fold',
      'Drive free trial sign-ups',
      'Handle pricing objections clearly',
    ],
    features: [
      'Product hero with dashboard preview',
      'Feature highlights with icons',
      'Three-tier pricing table (demo prices)',
      'Social proof / testimonials',
      'FAQ section',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
  },
  {
    slug: 'analytics-dashboard',
    title: 'Pulse Dashboard',
    category: 'Web Application UI',
    shortDescription:
      'A responsive analytics dashboard UI with KPI cards, charts, date filters, and sidebar navigation.',
    description:
      'Pulse is a fictional business intelligence dashboard. This demo showcases frontend skills for data-heavy interfaces: responsive layout, data tables, KPI tiles, and chart placeholders using CSS-only visualisations.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    demoHref: '/work/analytics-dashboard',
    accentColor: '#f59e0b',
    previewBg: 'from-amber-900/60 to-charcoal-900',
    goals: [
      'Demonstrate complex UI layout capability',
      'Show responsive data table and sidebar patterns',
      'Illustrate KPI and chart component design',
    ],
    features: [
      'Sidebar navigation with collapse',
      'KPI stat cards with trend indicators',
      'Bar and line chart placeholders',
      'Date range filter UI',
      'Responsive data table with sorting UI',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

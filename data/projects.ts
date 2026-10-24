export type ProjectSlug = 'dental-clinic' | 'saas-platform' | 'analytics-dashboard';

export interface Project {
  slug: ProjectSlug;
  demoHref: string;
  accentColor: string;
  tags: string[];
  stack: string[];
}

export const projects: Project[] = [
  {
    slug: 'dental-clinic',
    demoHref: '/work/dental-clinic',
    accentColor: '#2a9d8f',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
  },
  {
    slug: 'saas-platform',
    demoHref: '/work/saas-platform',
    accentColor: '#6366f1',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
  },
  {
    slug: 'analytics-dashboard',
    demoHref: '/work/analytics-dashboard',
    accentColor: '#f59e0b',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
  },
];

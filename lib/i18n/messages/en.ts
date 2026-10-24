import type { Messages } from './id';

export const en: Messages = {
  meta: {
    home: {
      title: 'Aureus Labs — Digital Experiences, Built with Purpose',
      description:
        'An independent digital studio designing and building modern websites: landing pages, business sites, SaaS websites, and dashboards and web interfaces.',
    },
    work: {
      title: 'Work | Aureus Labs',
      description:
        "Three concept projects showcasing Aureus Labs' capabilities: a business website, a SaaS marketing site, and a dashboard interface.",
    },
    dental: {
      title: 'Bright Smile Dental — Concept Project | Aureus Labs',
      description: 'A fictional dental clinic website built as a portfolio concept by Aureus Labs.',
    },
    saas: {
      title: 'FlowMetric — Concept Project | Aureus Labs',
      description: 'A fictional SaaS marketing site concept built by Aureus Labs.',
    },
    dashboard: {
      title: 'Pulse Dashboard — Concept Project | Aureus Labs',
      description: 'A fictional analytics dashboard interface concept built by Aureus Labs.',
    },
  },

  a11y: {
    skip: 'Skip to main content',
    brandHome: 'Aureus Labs — go to home',
    mainNav: 'Main navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    langGroup: 'Choose language',
    langId: 'Bahasa Indonesia',
    langEn: 'English',
    themeToggle: 'Toggle light or dark theme',
    footerNav: 'Footer navigation',
  },

  nav: {
    services: 'Services',
    work: 'Work',
    process: 'Process',
    about: 'About',
    contact: 'Contact',
    cta: 'Start a Project',
  },

  hero: {
    eyebrow: 'Independent digital studio',
    titleLead: 'Digital experiences,',
    titleEmphasis: 'built with purpose.',
    description:
      'We design and build modern websites that help businesses communicate clearly, build trust, and grow online.',
    ctaPrimary: 'Explore Our Work',
    ctaSecondary: "Let's Talk",
    points: ['Reply within 1 business day', 'Design approved before code', 'Clean code, no vendor lock-in'],
    stageCaption: 'Concept projects — not real clients',
    figure: 'Fig.',
  },

  services: {
    eyebrow: 'Services',
    title: 'What we build',
    subtitle: 'Four focused disciplines. Each delivered with the same commitment to clarity, craft, and conversion.',
    forLabel: 'Best for',
    items: [
      {
        title: 'Landing Pages',
        description:
          'High-conversion single pages designed to turn visitors into leads, sign-ups, or sales. Every element serves a purpose.',
        forWhom: 'Product launches, campaigns, and service offers',
        deliverables: ['Page structure & copy', 'Responsive design', 'Forms and CTAs'],
      },
      {
        title: 'Business Websites',
        description:
          'Professional multi-page sites for service businesses and startups that need to establish credibility fast.',
        forWhom: 'Small businesses, clinics, consultants, and company profiles',
        deliverables: ['Page architecture', 'Service & team pages', 'Foundational SEO'],
      },
      {
        title: 'SaaS Websites',
        description:
          'Marketing sites built for software products — clearly communicating value, features, and pricing to the right audience.',
        forWhom: 'Startups and B2B products',
        deliverables: ['Feature & pricing pages', 'Free-trial / sign-up flow', 'FAQ and objection handling'],
      },
      {
        title: 'Dashboards & Web Interfaces',
        description:
          'Clean, usable frontend implementations for data-heavy applications, internal tools, and web app MVPs.',
        forWhom: 'Product teams, operations, and founders building an MVP',
        deliverables: ['Layout & navigation', 'Tables and KPI cards', 'Reusable components'],
      },
    ],
  },

  audience: {
    eyebrow: 'Who it is for',
    title: 'Made for businesses that want to look credible online',
    problemLabel: 'The problem',
    solutionLabel: 'What we do',
    items: [
      {
        who: 'Small businesses & service providers',
        problem: 'The service is great, but the site is dated, slow, or missing — prospects hesitate and leave.',
        solution: 'A clear, fast site that is easy to contact, especially from a phone.',
      },
      {
        who: 'Startups & SaaS products',
        problem: 'The product’s value is hard to grasp in the first few seconds, so sign-ups stay low.',
        solution: 'A marketing site with structured messaging, features, and pricing.',
      },
      {
        who: 'Product & operations teams',
        problem: 'Data is scattered and internal interfaces are hard to use, slowing down day-to-day work.',
        solution: 'Tidy, responsive dashboards and web interfaces that are easy to extend.',
      },
    ],
  },

  work: {
    eyebrow: 'Selected Work',
    title: 'Concept projects',
    subtitle:
      'Three original demos built to showcase what Aureus Labs delivers across different industries. These are not real client engagements.',
    viewAll: 'View all work',
    badge: 'Concept',
    viewDemo: 'Open demo',
  },

  projects: {
    'dental-clinic': {
      title: 'Bright Smile Dental',
      category: 'Business Website',
      short: 'A polished website for a modern dental clinic — appointment CTA, service pages, and doctor profiles.',
      description:
        'Bright Smile Dental needed a trustworthy online presence that converts first-time visitors into booked appointments. The design prioritises calm confidence with a clean layout, clear service hierarchy, and a prominent CTA flow.',
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
    },
    'saas-platform': {
      title: 'FlowMetric',
      category: 'SaaS Marketing',
      short: 'A conversion-focused marketing site for a fictional B2B analytics SaaS — pricing, features, and social proof.',
      description:
        'FlowMetric is a fictional business analytics platform. The marketing site is designed to communicate product value fast, reduce friction to trial sign-up, and handle objections through clear pricing and FAQ sections.',
      goals: [
        'Communicate product value above the fold',
        'Drive free trial sign-ups',
        'Handle pricing objections clearly',
      ],
      features: [
        'Product hero with dashboard preview',
        'Feature highlights with icons',
        'Three-tier pricing table (demo prices)',
        'Social proof / sample testimonials',
        'FAQ section',
      ],
    },
    'analytics-dashboard': {
      title: 'Pulse Dashboard',
      category: 'Web Application UI',
      short: 'A responsive analytics dashboard UI with KPI cards, charts, date filters, and sidebar navigation.',
      description:
        'Pulse is a fictional business intelligence dashboard. This demo showcases frontend skills for data-heavy interfaces: responsive layout, data tables, KPI tiles, and charts built purely with CSS.',
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
    },
  },

  workPage: {
    eyebrow: 'Portfolio',
    title: 'Selected work',
    intro:
      'Original concept projects built to demonstrate what Aureus Labs delivers. Each represents a distinct design brief and industry context.',
    disclaimer: 'These are demonstration projects — not real client work.',
    goalsLabel: 'Goals',
    featuresLabel: 'Features',
    stackLabel: 'Stack',
    openDemo: 'Open concept demo',
  },

  process: {
    eyebrow: 'How it works',
    title: 'From brief to live in weeks, not months',
    subtitle: 'A focused four-stage process designed to minimise back-and-forth and maximise the quality of the final result.',
    steps: [
      {
        title: 'Discover',
        description:
          'We start by understanding your business, your audience, and your goals. No templates, no guessing — just focused questions that lead to better output.',
      },
      {
        title: 'Design',
        description:
          'High-fidelity mockups before a line of code. You review the visual direction, provide feedback, and approve before we build.',
      },
      {
        title: 'Build',
        description:
          'Clean, semantic, fast. Built with modern tooling, optimised for performance, and structured so it is maintainable long-term.',
      },
      {
        title: 'Launch',
        description:
          'Deployment to your hosting, domain setup, and a handoff package so you are never dependent on us for routine updates.',
      },
    ],
  },

  why: {
    eyebrow: 'Why Aureus Labs',
    title: 'Built for businesses that take quality seriously',
    subtitle:
      'We are a focused studio, not an agency of hundreds. Every project gets direct attention instead of being handed off.',
    availability: 'Currently accepting new projects',
    reasons: [
      {
        title: 'Clear communication',
        description: 'No jargon, no surprises. You get regular updates, honest timelines, and direct access throughout the project.',
      },
      {
        title: 'Responsive by default',
        description: 'Every layout is designed and tested across screen sizes. Mobile-first is not a checkbox — it is the starting point.',
      },
      {
        title: 'Maintainable code',
        description: 'Clean architecture means any developer can pick it up later. No lock-in, no black boxes.',
      },
      {
        title: 'Performance & usability',
        description: 'Fast load times, good Lighthouse scores, and interfaces tested for real-world usability — not just pixel perfection.',
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Questions we get asked',
    items: [
      {
        q: 'What services are available?',
        a: 'Aureus Labs offers landing page development, business and company profile websites, SaaS marketing sites, and dashboard / web application interfaces. We also take on redesigns and frontend implementation for existing projects.',
      },
      {
        q: 'How does the process work?',
        a: 'It starts with a short discovery call to understand your goals and requirements. From there we produce a visual mockup for your review, build the approved design, and hand off the final product with deployment support.',
      },
      {
        q: 'Can an existing website be redesigned?',
        a: 'Yes — redesigns are a significant part of what we do. Whether you need a full visual overhaul or a targeted improvement to conversion flow or performance, we can scope it to fit your situation.',
      },
      {
        q: 'How can I request a quote?',
        a: "Send an email to ramadika305@gmail.com with a brief description of your project — what it is, who it's for, and your rough timeline. We'll respond within one business day with questions or a proposal.",
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    titleLead: 'Ready to build',
    titleEmphasis: 'something great?',
    description:
      'Tell us about your project. We respond within one business day with honest advice and, if it is a good fit, a clear proposal.',
    emailLabel: 'Email directly',
    response: 'Reply within 1 business day',
    availability: 'Open for new projects',
    seeWork: 'See our work first',
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'name@company.com',
      type: 'Project type',
      typeOptions: ['Landing Page', 'Business Website', 'SaaS Website', 'Dashboard & Web Interface', 'Redesign of an existing site', 'Something else'],
      message: 'Tell us about your project',
      messagePlaceholder: 'What do you want to build, for whom, and what is your target date?',
      submit: 'Send via Email',
      note: 'This form opens your email app with the message pre-filled. No data is stored on our servers.',
      required: 'required',
      errors: {
        nameRequired: 'Please enter your name.',
        emailRequired: 'Please enter your email address.',
        emailInvalid: "That email format doesn't look right. Example: name@company.com",
        messageRequired: 'Please tell us a little about your project.',
        messageShort: 'That message is too short. Please write at least 10 characters.',
        summary: 'A few fields need your attention before sending.',
      },
      success: {
        title: 'Your email app is opening',
        body: "Your message is pre-filled. Review it and press send in your email app. If it doesn't open, email us directly at",
      },
      mail: {
        subject: 'Project Inquiry — Aureus Labs',
        name: 'Name',
        email: 'Email',
        type: 'Project type',
        message: 'Message',
      },
    },
  },

  footer: {
    tagline: 'Digital experiences, built with purpose. We help businesses communicate clearly and grow online.',
    studio: 'Studio',
    contact: 'Contact',
    rights: 'All rights reserved.',
    conceptNote: 'Work shown on this site consists of fictional concept projects.',
  },

  demo: {
    back: '← Back to portfolio',
    by: 'Aureus Labs',
    creditPrefix: 'Concept project by',
    creditSuffix: '— fictional business/product, illustrative content only.',
    conceptLabel: 'Concept Project',
  },

  dental: {
    notice: 'is a fictional clinic concept built by Aureus Labs.',
    nav: { services: 'Services', team: 'Our Team', faq: 'FAQ', contact: 'Contact', book: 'Book Appointment' },
    badge: 'Sample: rated 4.9/5 by 800+ patients',
    titleLead: 'Your smile,',
    titleEmphasis: 'our purpose.',
    description:
      'Gentle, modern dental care for patients of all ages. From routine check-ups to complex restorations — we make every visit comfortable.',
    bookFree: "Book Online — It's Free",
    perks: ['On-time appointments', 'Same-day emergencies', 'Most insurance accepted'],
    nextLabel: 'Next available',
    nextValue: 'Tomorrow, 9:00 AM',
    servicesTitle: 'Comprehensive dental services',
    servicesSubtitle: 'Everything your family needs under one roof.',
    services: [
      { title: 'General Dentistry', desc: 'Checkups, cleanings, fillings, and preventive care for the whole family.' },
      { title: 'Teeth Whitening', desc: 'Professional in-chair whitening for noticeably brighter results.' },
      { title: 'Orthodontics', desc: 'Traditional braces and clear aligners to straighten your smile.' },
      { title: 'Dental Implants', desc: 'Permanent tooth replacement that looks, feels, and functions like natural teeth.' },
      { title: 'Paediatric Dentistry', desc: 'Gentle, friendly dental care designed for children and teenagers.' },
      { title: 'Emergency Care', desc: 'Same-day appointments available for dental emergencies.' },
    ],
    teamTitle: 'Meet our dentists',
    teamSubtitle: 'Experienced, caring professionals committed to your comfort.',
    yearsLabel: 'years of experience',
    doctors: [
      { name: 'Dr. Sarah Chen', role: 'Principal Dentist & Orthodontist' },
      { name: 'Dr. Marcus Okafor', role: 'Implant & Restorative Specialist' },
      { name: 'Dr. Priya Nair', role: 'Paediatric Dentist' },
    ],
    faqTitle: 'Frequently asked questions',
    faqs: [
      { q: 'How often should I visit the dentist?', a: 'We recommend a check-up and clean every six months for most patients. Your dentist may suggest more frequent visits if you have ongoing concerns.' },
      { q: 'Do you accept insurance?', a: "Yes — we work with most major dental insurance providers. Contact us before your appointment and we'll confirm your cover." },
      { q: 'Is teeth whitening safe?', a: 'When performed by a registered dentist using clinically approved products, teeth whitening is very safe and effective. We offer a complimentary sensitivity assessment beforehand.' },
      { q: 'How do I book an appointment?', a: 'You can book online using the button above, call us during clinic hours, or send us an email. We typically offer next-day appointments for new patients.' },
    ],
    ctaTitle: 'Ready for a healthier smile?',
    ctaBody: 'Book your first appointment online — it takes less than two minutes.',
    bookOnline: 'Book Online',
    callUs: 'Call Us',
    address: '42 Pacific Highway, St Leonards NSW 2065',
  },

  saas: {
    notice: 'is a fictional SaaS concept built by Aureus Labs. Prices are illustrative only.',
    nav: ['Features', 'Integrations', 'Pricing', 'Docs'],
    login: 'Log in',
    trial: 'Start free trial',
    badge: 'Now with AI-powered forecasting',
    titleLead: 'Your business data,',
    titleEmphasis: 'finally clear.',
    description:
      'FlowMetric connects your tools, surfaces the metrics that matter, and helps your team make faster decisions with confidence.',
    ctaPrimary: 'Start free — no card required',
    ctaSecondary: 'See a live demo',
    sampleNote: 'Illustrative dashboard — sample data only',
    kpis: [
      { label: 'MRR', value: '$124,820', trend: '+12.4%' },
      { label: 'Active Users', value: '8,421', trend: '+8.1%' },
      { label: 'Churn Rate', value: '1.8%', trend: '-0.3%' },
      { label: 'NPS Score', value: '67', trend: '+4pts' },
    ],
    featuresTitle: 'Everything your team needs',
    featuresSubtitle: 'No fluff. Just the features that drive better decisions.',
    features: [
      { title: 'Real-time Analytics', desc: 'See exactly how your business is performing with dashboards that update as events happen.' },
      { title: 'Growth Forecasting', desc: 'AI-powered projections based on your historical data and industry benchmarks.' },
      { title: 'Team Collaboration', desc: 'Share reports, annotate charts, and set goals across your entire organisation.' },
      { title: 'Enterprise Security', desc: 'SOC 2 Type II certified. SSO, audit logs, and role-based permissions built in.' },
      { title: 'Multi-source Data', desc: 'Connect your CRM, billing, ads, and more — 80+ integrations out of the box.' },
      { title: 'Instant Setup', desc: 'Start tracking in under 10 minutes. No engineers required for basic setup.' },
    ],
    testimonialsTitle: 'Trusted by growing teams',
    testimonialsNote: 'Sample testimonials for a fictional product',
    testimonials: [
      { quote: 'FlowMetric replaced three separate tools for us. We saved over $400/month and now have a single source of truth.', name: 'Jamie Torres', role: 'VP Operations, Nexus Software' },
      { quote: 'The forecasting feature alone pays for itself. Our sales team can actually plan quarters now.', name: 'Mei Lin', role: 'CEO, Brightpath Labs' },
      { quote: 'Setup took 8 minutes. Not exaggerating. We were seeing live data before our next standup.', name: 'Ryan Osei', role: 'Head of Data, TrueScale' },
    ],
    pricingTitle: 'Simple, transparent pricing',
    pricingNote: 'All prices are illustrative — this is a demo project.',
    perMonth: '/month',
    tiers: [
      { name: 'Starter', price: '$29', desc: 'For early-stage startups', features: ['Up to 5 users', '3 data sources', 'Core dashboards', '30-day history', 'Email support'], cta: 'Start free trial' },
      { name: 'Growth', price: '$99', desc: 'Most popular for scaling teams', features: ['Up to 25 users', 'Unlimited sources', 'Custom dashboards', '1-year history', 'AI forecasting', 'Priority support'], cta: 'Start free trial' },
      { name: 'Enterprise', price: 'Custom', desc: 'For large organisations', features: ['Unlimited users', 'Unlimited sources', 'White-labelling', 'Custom retention', 'SSO & audit logs', 'Dedicated CSM'], cta: 'Talk to sales' },
    ],
    faqTitle: 'Common questions',
    faqs: [
      { q: 'Is there a free trial?', a: 'Yes — all paid plans include a 14-day free trial, no credit card required. You can evaluate every feature before committing.' },
      { q: 'What data sources can I connect?', a: 'FlowMetric integrates with over 80 tools including Salesforce, HubSpot, Stripe, Google Ads, Facebook Ads, PostgreSQL, and Snowflake. Custom connectors are available on Enterprise.' },
      { q: 'How does pricing work?', a: 'All prices shown are illustrative and for demonstration purposes only. This is a fictional product concept.' },
      { q: 'Can I change plans later?', a: 'Yes — you can upgrade or downgrade at any time. Changes take effect at the next billing cycle.' },
    ],
    ctaTitle: 'Start your free trial today',
    ctaBody: '14 days, all features, no credit card. Cancel any time.',
    ctaButton: 'Get started for free',
  },

  dashboard: {
    notice: 'is a fictional dashboard concept built by Aureus Labs. All data is illustrative.',
    nav: ['Overview', 'Analytics', 'Customers', 'Orders', 'Growth', 'Settings'],
    title: 'Overview',
    updated: 'Last updated 2 minutes ago',
    ranges: { '7d': '7 days', '30d': '30 days', '90d': '90 days', '1y': '1 year' },
    sidebarCollapse: 'Collapse sidebar',
    sidebarExpand: 'Expand sidebar',
    notifications: 'Notifications',
    kpis: [
      { label: 'Total Revenue', change: '+18.2%' },
      { label: 'Active Users', change: '+9.7%' },
      { label: 'Orders', change: '+4.1%' },
      { label: 'Avg. Order Value', change: '-2.3%' },
    ],
    vsPrevious: 'vs last period',
    revenueTitle: 'Revenue over time',
    revenueSub: 'Daily — last 30 days',
    export: 'Export',
    dayLabel: 'Day',
    axis: ['Sep 15', 'Sep 22', 'Sep 29', 'Oct 6', 'Oct 13'],
    tableTitle: 'Revenue by product',
    search: 'Search...',
    searchLabel: 'Search products',
    filter: 'Filter',
    cols: ['Product', 'Category', 'Revenue', 'Orders', 'Conv. Rate'],
    rows: [
      { name: 'Pro Plan — Annual', category: 'Subscription' },
      { name: 'Pro Plan — Monthly', category: 'Subscription' },
      { name: 'Starter Plan', category: 'Subscription' },
      { name: 'Add-on: Extra Seats', category: 'Add-on' },
      { name: 'Enterprise (Custom)', category: 'Enterprise' },
      { name: 'One-time Setup Fee', category: 'Services' },
    ],
    showing: 'Showing {n} of 24 products',
    empty: 'No matching products.',
    prev: 'Prev',
    next: 'Next',
  },
};

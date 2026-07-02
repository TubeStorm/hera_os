// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for site-wide content.
// Update copy, nav, projects, and skills here — pages read from this file.
// ─────────────────────────────────────────────────────────────────────────────

/** Prefix an internal path with the configured base path (GitHub Pages safe). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. "/favour-ai-product-portfolio/"
  const clean = `${base}/${path}`.replace(/\/{2,}/g, '/');
  return clean;
}

export const site = {
  name: 'Favour Diokpo',
  role: 'AI Product Systems Designer',
  roles: [
    'AI Product Systems Designer',
    'Agentic AI UX / Product Architect',
    'AI Workflow Product Builder',
  ],
  tagline: 'I make AI systems easier to trust, control, and actually use.',
  // TODO: replace with your real contact + links
  email: 'hello@favourdiokpo.com',
  location: 'Available for select work — remote & hybrid',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'Email', href: 'mailto:hello@favourdiokpo.com' },
  ],
  // resume PDF lives in /public/resume/ — see README for how to drop the real file in
  resumePdf: 'resume/Favour-Diokpo-Resume.pdf',
};

export const nav = [
  { label: 'Work', href: 'work/' },
  { label: 'Resume', href: 'resume/' },
  { label: 'About', href: 'about/' },
  { label: 'Contact', href: 'contact/' },
];

export type Project = {
  slug: string;
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  accentImage: string; // placeholder label
};

export const projects: Project[] = [
  {
    slug: 'hera',
    href: 'work/hera/',
    eyebrow: 'AI-native workspace',
    title: 'HERA OS',
    summary:
      'Designing an AI-native workspace for non-technical builders — making agent behavior, memory, files, and permissions visible and controllable.',
    tags: ['Agentic AI UX', 'Product architecture', 'Systems design'],
    year: '2025—Now',
    accentImage: 'HERA — Global Iris assistant',
  },
  {
    slug: 'enterprise-tools',
    href: 'work/enterprise-tools/',
    eyebrow: 'Enterprise internal tools',
    title: 'Enterprise Internal Tools',
    summary:
      'Rebuilding trust in complex planning systems used by 1,000+ people — staffing, governance, quota visibility, and approval workflows.',
    tags: ['Enterprise UX', 'Workflow systems', 'Governance'],
    year: '2021—2024',
    accentImage: 'Enterprise — planning & governance console',
  },
];

export type Capability = { title: string; body: string };

export const capabilities: Capability[] = [
  {
    title: 'Agentic AI UX',
    body: 'Interfaces that make autonomous agents legible — what they did, why, and what happens next.',
  },
  {
    title: 'Workflow systems',
    body: 'Turning messy multi-step automation into flows people can follow, pause, and trust.',
  },
  {
    title: 'Internal tools',
    body: 'High-density operational tools for real users doing real work at scale.',
  },
  {
    title: 'Product architecture',
    body: 'Naming the systems, states, and objects a product needs before pixels exist.',
  },
  {
    title: 'Human-readable automation',
    body: 'Making memory, files, tasks, and permissions readable to non-technical people.',
  },
  {
    title: 'Safer AI interaction models',
    body: 'Permission models and guardrails that protect users without interrupting their flow.',
  },
];

export type Step = { n: string; title: string; body: string };

export const howIWork: Step[] = [
  {
    n: '01',
    title: 'Map the system',
    body: 'Before UI, I map objects, states, and edge cases — the invisible model users will feel.',
  },
  {
    n: '02',
    title: 'Design for trust',
    body: 'Every AI action gets a visible cause and a reversible path. No dead-ends, no silent failure.',
  },
  {
    n: '03',
    title: 'Build & pressure-test',
    body: 'I write specs, prototype flows, and QA the ghost states most teams ship by accident.',
  },
  {
    n: '04',
    title: 'Refine relentlessly',
    body: 'Ship, watch real behavior, cut friction. Quiet, confident, hard-to-break surfaces.',
  },
];

// Resume data — repositioned toward AI workflows / agentic systems / enterprise tools.
export const resume = {
  headline: 'Senior UX / Product Designer — AI Workflows, Agentic Systems & Enterprise Tools',
  summary:
    'Product systems designer focused on agentic AI, workflow automation, and internal tools. I turn messy AI behavior — permissions, memory, files, tasks, and user intent — into interfaces people can understand and trust. Background spans enterprise tooling at scale and end-to-end product architecture for AI-native software.',
  experience: [
    {
      role: 'Product Architect & UX Systems Designer',
      org: 'HERA OS',
      period: '2025 — Present',
      points: [
        'Designed an AI-native operating system for non-technical builders: rooms, composer, memory, tasks, permissions, and a global assistant.',
        'Owned product architecture, UX systems, agent workflow design, spec writing, and QA leadership.',
        'Solved hard agentic UX problems — ghost chat states, duplicate messages, attachment truth, permission modes, and visible AI actions.',
      ],
    },
    {
      role: 'UX Designer — Internal Tools',
      org: 'Ubisoft',
      period: '2021 — 2024',
      points: [
        'Designed planning, staffing, and governance tools used by 1,000+ people across production teams.',
        'Led a 40+ modal audit to rebuild trust and consistency in complex approval and quota workflows.',
        'Partnered across product, engineering, and operations to align governance rules with real workflows.',
      ],
    },
  ],
  selectedProjects: [
    'HERA OS — agentic AI workspace (product architecture + UX systems)',
    'Enterprise planning & governance console (40+ modal audit, approval flows)',
    'Permission & trust models for autonomous AI actions',
  ],
  skills: [
    'Agentic AI UX',
    'Product architecture',
    'Workflow / systems design',
    'Enterprise & internal tools',
    'Interaction & UX writing',
    'Design systems',
    'Prototyping & spec writing',
    'QA & product quality',
    'Cross-functional leadership',
  ],
  education: [
    { title: 'Design / HCI background', org: 'See full CV', period: '' },
  ],
};

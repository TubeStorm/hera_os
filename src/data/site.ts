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
  role: 'Product Designer — AI systems & internal tools',
  roles: [
    'AI Product Designer',
    'Product Designer, Internal Tools',
    'Builder of HERA OS',
  ],
  tagline: 'I design systems that make complicated work visible.',
  location: 'Available for select work — remote & hybrid',
};

// ─────────────────────────────────────────────────────────────────────────────
// Contact / links — central config.
//
// RULE: the public site must NOT publish fake or unconfirmed contact links.
// Each link has a `confirmed` flag. Only confirmed links render on the site.
// Anything left `confirmed: false` is treated as a TODO and is hidden from the
// public pages (and listed in ASSETS_NEEDED.md) until a real value is supplied.
// ─────────────────────────────────────────────────────────────────────────────
export type ContactLink = {
  label: string;
  /** Full href (mailto:, https://, …). Empty string when not yet known. */
  href: string;
  /** Human-readable value shown on the contact card. */
  display: string;
  /** Only `true` links are published. */
  confirmed: boolean;
};

export const contact: {
  github: ContactLink;
  email: ContactLink;
  linkedin: ContactLink;
} = {
  // GitHub is real — the portfolio itself lives here.
  github: {
    label: 'GitHub',
    href: 'https://github.com/TubeStorm',
    display: 'github.com/TubeStorm',
    confirmed: true,
  },
  // YC application email (per YC Website Shipping Mode brief).
  email: {
    label: 'Email',
    href: 'mailto:favourdiokpo@gmail.com',
    display: 'favourdiokpo@gmail.com',
    confirmed: true,
  },
  // Confirmed from Favour_Diokpo_Resume_2026.pdf (public contact block).
  linkedin: {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/favour-diokpo',
    display: 'linkedin.com/in/favour-diokpo',
    confirmed: true,
  },
};

/** Only the contact links that are real/confirmed — safe to render publicly. */
export const confirmedContacts: ContactLink[] = Object.values(contact).filter(
  (c) => c.confirmed && c.href
);

// ─────────────────────────────────────────────────────────────────────────────
// Resume PDF — availability gate.
// ─────────────────────────────────────────────────────────────────────────────
export const resumeAsset = {
  available: true, // Favour-Diokpo-Resume.pdf (2026) is present in /public/resume/
  path: 'resume/Favour-Diokpo-Resume.pdf',
};

// Live navigation — 5-item portfolio nav. All routes are verified Astro pages.
// Home is NOT listed here: the left-hand "[logo] HERA OS" brand in Nav.astro is
// the Home link, so a separate "HERA OS" destination showed the same label
// twice in one pill (removed 2026-08-28).
export const nav = [
  { label: 'Deep Dive', href: 'work/hera/' },
  { label: 'Ubisoft Work', href: 'work/ubisoft/' },
  { label: 'About', href: 'about/' },
  { label: 'Lineage', href: 'work/lineage/' },
  { label: 'Contact', href: 'contact/' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Projects — the architecture matches the resume's Selected Projects exactly:
// HERA OS (flagship) + three separate Ubisoft projects. Each Ubisoft project
// owns its own route under /work/ubisoft/<slug>/. The gallery at /work/ubisoft/
// presents the three as an editorial selection, not a grouped case-study dump.
// ─────────────────────────────────────────────────────────────────────────────
export type Project = {
  slug: string;
  href: string;
  eyebrow: string;
  title: string;
  summary: string;
  tags: string[];
  category: string;
  status: string;
  year: string;
  /** What each project proves about Favour's skill. */
  proves: string;
  /** One-line problem framing for the Work page card. */
  problem: string;
  /** One-line "what Favour designed" framing for the Work page card. */
  designed: string;
  /** Flagship gets the featured treatment on Work + Home. */
  flagship?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'hera',
    href: 'work/hera/',
    eyebrow: 'Flagship — independent AI product',
    title: 'HERA OS',
    summary:
      'A local-first, game-inspired AI workspace where agents, tasks, memory, files, and cost are visible parts of an operating system — not hidden chat behavior. Designed and built solo: FastAPI backend, React frontend, Phaser pixel world.',
    tags: ['AI product vision', 'Game-inspired UX', 'Local-first'],
    category: 'AI operating system',
    status: 'In development — 2025→now',
    year: '2025—Now',
    proves: 'I can turn a messy emerging technology into a coherent product model — and build it.',
    problem: 'Most AI tools are text boxes attached to invisible machinery. You can’t see what the AI knows, did, spent, or broke.',
    designed: 'The whole product model: rooms and agents, a global assistant, goals and tasks, readable memory, an event ledger, and per-turn cost.',
    flagship: true,
  },
  {
    slug: 'rpm',
    href: 'work/ubisoft/rpm/',
    eyebrow: 'Ubisoft — enterprise systems',
    title: 'RPM — Modal & Ribbon Revamp',
    summary:
      'Ubisoft’s main staffing platform had drifted into 40+ inconsistent modals. I ran a 101-response survey plus interviews, then rebuilt the navigation ribbon and the three core modals.',
    tags: ['Research', 'Design systemization'],
    category: 'Enterprise planning tools',
    status: 'Senior UX Specialist',
    year: '2021—Now',
    proves: 'I can diagnose a trust breakdown with research and fix it with systemization.',
    problem: 'A prior redesign shipped with no UX research; 1,000+ users were frustrated and the heaviest users trusted the tool least.',
    designed: 'A 40+ modal audit collapsed into consistent patterns, plus a rebuilt ribbon and the three core modals.',
  },
  {
    slug: 'work-arrangement',
    href: 'work/ubisoft/work-arrangement/',
    eyebrow: 'Ubisoft — enterprise systems',
    title: 'Work Arrangement — Approval Flows',
    summary:
      'The tool for formally requesting remote work supported only approve/reject; everything else happened over email. I defined five structured approval flows with accountability checkpoints.',
    tags: ['Governance UX', 'Policy constraints'],
    category: 'Approval workflows',
    status: 'Senior UX Specialist',
    year: '2021—Now',
    proves: 'I can design humane flows inside hard HR and legal constraints.',
    problem: 'Approve/reject was the only path the tool knew; escalations, corrections, and send-backs lived in email or nowhere.',
    designed: 'Five explicit flows, a required “did you speak with the employee?” checkpoint, and legally-vetted templated messaging.',
  },
  {
    slug: 'famous',
    href: 'work/ubisoft/famous/',
    eyebrow: 'Ubisoft — enterprise systems',
    title: 'Famous — Global Credits Governance',
    summary:
      'The platform that manages game credits for Ubisoft employees worldwide. A genuinely different enterprise problem: global policy consistency, multi-column data systems, and the UX of official recognition at scale.',
    tags: ['Policy governance', 'Data systems'],
    category: 'Credits & recognition',
    status: 'Senior UX Specialist',
    year: '2021—Now',
    proves: 'I can design policy-governance interfaces for global, high-stakes data at enterprise scale.',
    problem: 'Game credits are official, legal, and permanent — and the system managing them had outgrown its original design.',
    designed: 'Global policy governance flows and multi-column layout systems for a high-stakes credits platform.',
  },
];

export const flagship = projects.find((p) => p.flagship)!;
export const ubisoftProjects = projects.filter((p) => !p.flagship);

// Homepage proof strip — three things the site must prove quickly.
export type Strength = { label: string; title: string; body: string; href?: string };
export const strengths: Strength[] = [
  {
    label: 'Flagship product',
    title: 'HERA OS',
    body: 'A local-first AI workspace I designed and built — rooms, agents, tasks, memory, files, and cost as visible parts of one operating system.',
    href: 'work/hera/',
  },
  {
    label: 'Enterprise scale',
    title: 'Ubisoft internal tools',
    body: 'Three workstreams in planning, approvals, and governance for 1,000+ people — diagnosed with a 101-response survey, fixed with systemization.',
    href: 'work/ubisoft/',
  },
  {
    label: 'Point of view',
    title: 'Make the work visible',
    body: 'AI should not feel like invisible magic. It should feel like a place you can understand, enter, and direct.',
    href: 'about/',
  },
];

// About page — beliefs, in Favour's voice. Each one points at something real.
export type Principle = { title: string; body: string };
export const principles: Principle[] = [
  {
    title: 'I care about the part that breaks after the demo',
    body: 'Context, memory, files, cost, permissions, handoff, failure. The demo is easy. The week after the demo is the product.',
  },
  {
    title: 'AI should feel like a place',
    body: 'Not invisible magic — a place you can understand, enter, and direct. In HERA that’s literal: rooms, agents at desks, work you can watch.',
  },
  {
    title: 'If the system acted, show it',
    body: 'If the AI read a file, changed a task, saved a memory, spent money, or failed, the user should be able to see it. Anything less is lying by omission.',
  },
  {
    title: 'The game layer is a language',
    body: 'Rooms show where work lives. Agents show who is acting. Logs show what changed. Play is how complicated systems explain themselves.',
  },
  {
    title: 'Density can be calm',
    body: 'Ubisoft taught me that dense, high-stakes software can still read clearly — if the hierarchy is honest and the rules are visible.',
  },
  {
    title: 'Good tools make people want to work',
    body: 'Work should not feel like wrestling with a machine. If the tool feels dead, people route around it — I’ve watched it happen at enterprise scale.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Resume — clear over clever. Facts from Favour_Diokpo_Resume_2026.pdf and the
// two Ubisoft case-study source docs. HERA is independent product work.
// ─────────────────────────────────────────────────────────────────────────────
export const resume = {
  headline: 'Product Designer for AI systems, internal tools, and workflow-heavy products',
  summary:
    'I design systems where complicated work becomes visible and manageable. My work spans enterprise internal tools at Ubisoft and HERA, a local-first AI workspace I designed and built that turns agents, memory, files, tasks, and cost into visible product states. I’m strongest where UX, product decisions, and messy operational systems meet.',
  experience: [
    {
      role: 'Founder & Product Designer',
      org: 'HERA OS — independent AI product',
      period: '2025 — Present',
      points: [
        'Designed and built the product model for a local-first AI workspace where users work with visible agents, rooms, memory, files, tasks, tools, and cost tracking instead of a single hidden chat thread.',
        'Defined the UX systems for Global Iris (the OS-level assistant), the Composer, Life OS (event ledger and cost), readable memory blocks, task execution with review gates, and the skills/tools catalog.',
        'Used real product failures — ghost chat states, phantom attachments, permission friction, unclear cost, confusing assistant scope — to refine the system model and interaction rules.',
        'Built the working app solo: Python/FastAPI backend, React/TypeScript frontend, Phaser pixel world, SQLite event ledger.',
      ],
    },
    {
      role: 'Senior UX Specialist — Internal Tools',
      org: 'Ubisoft, Montréal',
      period: 'May 2021 — Present',
      points: [
        'RPM (Resource Planning & Management): ran a 101-response satisfaction survey plus interviews across 1,000+ users to diagnose a trust breakdown in a legacy planning platform.',
        'Audited and standardized 40+ modals; redesigned the navigation ribbon and the three core modals (Position, Request, Advanced Date Editor).',
        'Work Arrangement (remote-work requests): researched across four organizational levels and defined five structured approval flows with accountability checkpoints and legally-vetted templated messaging.',
        'Capacity Governance: defined a warning-only quota model (used / buffer / threshold / time scope) that informs hiring without blocking flexibility, built for large grid datasets.',
        'Partnered with the shared design-system team (EGG) so developers shipped the exact components from design — fewer inconsistencies, less rework.',
      ],
    },
  ],
  selectedProjects: [
    'HERA OS — local-first AI workspace (independent product, designed and built solo)',
    'Ubisoft RPM — modal + ribbon revamp (40+ modal audit, 101-response survey)',
    'Ubisoft Work Arrangement — five structured approval flows for policy-constrained requests',
    'Ubisoft Capacity Governance — warning-only quota visibility for large datasets',
  ],
  // Grouped by category so the resume reads like a system, not a word cloud.
  skillGroups: [
    {
      group: 'AI product design',
      items: ['Agent & assistant UX', 'Memory, files & context surfaces', 'Cost & permission design', 'Failure states & recovery'],
    },
    {
      group: 'Systems & workflow design',
      items: ['Product models & object design', 'Approval & governance flows', 'Dense-data interfaces', 'Rule tables & decision logs'],
    },
    {
      group: 'Research & delivery',
      items: ['Surveys & multi-role interviews', 'Prototyping & spec writing', 'Design-system collaboration', 'Cross-functional delivery (Agile/Scrum)'],
    },
  ],
  tools: ['Figma', 'Miro', 'Jira / Confluence', 'Tableau / Sheets', 'Basic SQL', 'Spec writing', 'Astro / static sites'],
  // Real details from Favour_Diokpo_Resume_2026.pdf — do not alter without source.
  education: [
    { school: 'MIT — Professional Program in Applied Data Science', period: '2022 — 2023' },
    { school: 'Carleton University — Bachelor of Information Technology', period: '2016 — 2020' },
    { school: 'Algonquin College — Advanced Diploma, IT & Design', period: '2016 — 2020' },
  ],
  certifications: [
    'IBM AI Product Manager (2026)',
    'Google Project Management (2026)',
  ],
};

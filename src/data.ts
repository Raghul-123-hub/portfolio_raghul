import type { ServiceItem, ProjectItem, SkillGroup, CertificationItem, ResearchItem, EducationItem } from './types';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export const PROFILE_INFO = {
  name: 'Raghul D.',
  initials: 'R.',
  title: 'AI/ML Engineering Student & Full-Stack Developer',
  tagline: 'Builds with logic & a bit of light.',
  kicker: 'PORTFOLIO / 2026',
  roles: [
    'AI/ML Engineering Student',
    'Full-Stack Developer — NestJS · Next.js · PostgreSQL',
    'Freelance Video Editor — CapCut',
  ],
  summary:
    'AI/ML undergraduate with full-stack development experience and applied project work in recommendation systems — backed by eight certifications from IBM, Infosys Springboard, and Forage. Also delivers freelance video production with a focus on color grading and motion graphics.',
  avatar: '/profile.png',
  email: 'raghul.darni@gmail.com',
  phone: '+91 90427 24227',
  location: 'Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/raghul-d-467729425/',
  github: 'https://github.com/Raghul-123-hub',
  resumeUrl: '#resume',
};

export const MARQUEE_TECH = [
  'NestJS',
  'Next.js 14',
  'PostgreSQL',
  'Prisma ORM',
  'Docker',
  'Python',
  'Machine Learning',
  'Deep Learning',
  'Recommendation Systems',
  'CapCut',
  'Color Grading',
  'Motion Graphics',
  'REST APIs',
  'React',
  'TypeScript',
  'IBM Cloud',
  'Git / GitHub',
];

export const ABOUT_TEXT =
  "I split my attention between three disciplines that don't usually share a resume: training models, shipping full-stack products end to end, and cutting footage frame by frame. Each one sharpens the others — debugging a NestJS auth flow and tuning a recommendation model both reward the same patience for finding where the logic breaks. Currently studying Artificial Intelligence and Machine Learning at SIMATS, expected to graduate in 2028, while taking on freelance and academic projects that let me apply what I'm learning immediately rather than waiting for it to become theory.";

export const ABOUT_STATS = [
  { value: '8', label: 'Certifications — IBM / Infosys / Forage' },
  { value: '4', label: 'Shipped projects across AI & full-stack' },
  { value: '68', label: 'Files scaffolded on LeadFlow AI' },
];

export const SKILLS_GROUPS: SkillGroup[] = [
  {
    category: 'PROGRAMMING & WEB',
    tagline: 'Modern frontend & backend architectures',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'Python'],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'Python'],
  },
  {
    category: 'BACKEND & DATA',
    tagline: 'Robust persistence, schemas & containerization',
    tags: ['PostgreSQL', 'Prisma ORM', 'REST APIs', 'Docker', 'Data Structures & Algorithms'],
    skills: ['PostgreSQL', 'Prisma ORM', 'REST APIs', 'Docker', 'Data Structures & Algorithms'],
  },
  {
    category: 'AI / ML',
    tagline: 'Neural logic, predictive intelligence & data modeling',
    tags: [
      'Machine Learning',
      'Deep Learning Fundamentals',
      'Recommendation Systems',
      'Data Analysis & Visualization',
    ],
    skills: [
      'Machine Learning',
      'Deep Learning Fundamentals',
      'Recommendation Systems',
      'Data Analysis & Visualization',
    ],
  },
  {
    category: 'CREATIVE & MEDIA',
    tagline: 'Frame-by-frame visual storytelling & pacing',
    tags: ['Video Editing (CapCut)', 'Color Grading', 'Audio Mixing', 'Motion Graphics & Transitions'],
    skills: ['Video Editing (CapCut)', 'Color Grading', 'Audio Mixing', 'Motion Graphics & Transitions'],
  },
  {
    category: 'TOOLS & PLATFORMS',
    tagline: 'Dev environments & deployment ecosystems',
    tags: ['Git / GitHub', 'IBM Cloud', 'VS Code'],
    skills: ['Git / GitHub', 'IBM Cloud', 'VS Code'],
  },
  {
    category: 'WORKING STYLE & STRENGTHS',
    tagline: 'Collaborative execution & engineering rigor',
    tags: [
      'Analytical Problem Solving',
      'Team Collaboration',
      'Adaptability',
      'Client Communication',
      'Quick Learner',
    ],
    skills: [
      'Analytical Problem Solving',
      'Team Collaboration',
      'Adaptability',
      'Client Communication',
      'Quick Learner',
    ],
  },
];

export const SKILLS_DATA = SKILLS_GROUPS;

// For the light services section layout
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: '01',
    name: 'Full-Stack Engineering',
    desc: 'End-to-end web architectures powered by NestJS, Next.js 14, PostgreSQL, and Prisma ORM. Built with rock-solid auth (JWT, OAuth) and role-based access control.',
  },
  {
    id: '02',
    name: 'AI & Machine Learning',
    desc: 'Applied machine learning models, intelligent recommendation systems, data parsing, and predictive logic to elevate user engagement and automate decisions.',
  },
  {
    id: '03',
    name: 'Video Production & Color Grading',
    desc: 'High-retention video editing in CapCut, multi-track audio syncing, dynamic motion graphic transitions, and custom color grading for digital creators.',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '01',
    name: 'LeadFlow AI',
    sub: 'Full-Stack SaaS Lead Generation Platform',
    tag: 'Full-Stack SaaS',
    description:
      'Architected and scaffolded a 68-file full-stack codebase spanning a NestJS backend and Next.js 14 frontend, containerized with Docker for consistent deployment.',
    bullets: [
      'Architected and scaffolded a 68-file full-stack codebase spanning a NestJS backend and Next.js 14 frontend, containerized with Docker for consistent deployment.',
      'Implemented JWT authentication and OAuth (Google, GitHub, Microsoft) alongside a four-role RBAC system and a reusable design system for the frontend.',
    ],
    technologies: ['NestJS', 'Next.js 14', 'PostgreSQL', 'Prisma ORM', 'Docker'],
    images: [
      '/projects/leadflow.jpg',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      '/projects/leadflow.jpg',
    ],
    github: 'https://github.com/Raghul-123-hub',
    link: '#projects',
  },
  {
    id: '02',
    name: 'AI Shopping Assistant',
    sub: 'Recommendation Engine',
    tag: 'AI / Recommendation',
    description:
      'An AI-based recommendation engine that parses user input to identify products and surface data-driven purchase suggestions.',
    bullets: [
      'Built an AI-based recommendation engine that parses user input to identify products and surface data-driven purchase suggestions.',
      'Applied data analysis techniques to refine ranking logic, improving the relevance of generated recommendations.',
    ],
    technologies: ['Python', 'Data Analysis', 'Recommendation Systems'],
    images: [
      '/projects/ai_shopping.jpg',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      '/projects/ai_shopping.jpg',
    ],
    github: 'https://github.com/Raghul-123-hub',
    link: '#projects',
  },
  {
    id: '03',
    name: 'Waste Detection',
    sub: 'Real-Time Object Classification',
    tag: 'Python & Sorting',
    description:
      'A real-time object detection and classification pipeline to categorize waste items, supporting automated sorting workflows.',
    bullets: [
      'Developed a real-time object classification pipeline to detect and classify waste items, supporting automated sorting workflows.',
      'Applied image-processing techniques, including contour detection and classification, to categorize waste in live video input.',
    ],
    technologies: ['Python', 'Image Processing', 'Automated Sorting'],
    images: [
      '/projects/waste_cv.jpg',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      '/projects/waste_cv.jpg',
    ],
    github: 'https://github.com/Raghul-123-hub',
    link: '#projects',
  },
  {
    id: '04',
    name: 'Freelance Video Production',
    sub: 'Client Delivery — Short & Long Form',
    tag: 'Video Production',
    description:
      'End-to-end video editing for independent clients, from raw footage to final export, across short- and long-form formats.',
    bullets: [
      'Delivered end-to-end video editing for independent clients, from raw footage to final export, across short- and long-form formats.',
      'Applied multi-track editing, color correction, audio syncing, and motion graphics to meet tight client turnaround times.',
    ],
    technologies: ['CapCut', 'Color Grading', 'Audio Syncing', 'Motion Graphics'],
    images: [
      '/projects/video_edit.jpg',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      '/projects/video_edit.jpg',
    ],
    link: '#projects',
  },
];

export const RESEARCH_DATA: ResearchItem = {
  title: 'Discrete Structures & Boolean Logic in Computation',
  meta: 'Academic capstone research',
  description:
    'Studied the application of Boolean algebra and discrete structures in modern computational architectures.',
  points: [
    'Analyzed logical operations underlying automated decision engines and digital logic.',
    'Investigated boolean function optimization and computational complexity.',
  ],
};

export const EDUCATION_DATA: EducationItem = {
  degree: 'Bachelor of Engineering / Technology — Artificial Intelligence and Machine Learning',
  institution: 'Saveetha Institute of Medical and Technical Sciences (SIMATS), India',
  graduation: 'Expected Graduation: 2028',
  coursework: [
    'Data Structures',
    'Operating Systems',
    'Artificial Intelligence',
    'Probability & Linear Algebra',
    'Data Science',
  ],
};

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: 'Introduction to Artificial Intelligence',
    issuer: 'Infosys Springboard',
    date: 'Feb 2025',
    category: 'AI, ML & Data Science',
  },
  {
    name: 'Deep Learning Fundamentals',
    issuer: 'IBM / DeepLearning.TV',
    date: 'Feb 2025',
    category: 'AI, ML & Data Science',
  },
  {
    name: 'Build Your Own Chatbot',
    issuer: 'IBM',
    date: 'May 2025',
    category: 'AI, ML & Data Science',
  },
  {
    name: 'Data Visualization with R',
    issuer: 'IBM',
    date: 'Mar 2025',
    category: 'AI, ML & Data Science',
  },
  {
    name: 'IBM Cloud Essentials V3',
    issuer: 'IBM',
    date: 'Feb 2025',
    category: 'Cloud Computing',
  },
  {
    name: 'Data Science Job Simulation',
    issuer: 'BCG X (Forage)',
    date: 'May 2025',
    category: 'Job Simulations (Forage)',
  },
  {
    name: 'Data Science Job Simulation',
    issuer: 'Lloyds Banking Group (Forage)',
    date: 'May 2025',
    category: 'Job Simulations (Forage)',
  },
  {
    name: 'Cybersecurity Analyst Job Simulation',
    issuer: 'Tata (Forage)',
    date: 'May 2025',
    category: 'Job Simulations (Forage)',
  },
];

export const INTERESTS_DATA = [
  'Artificial Intelligence',
  'Financial Technology (FinTech)',
  'Cybersecurity',
  'Software Development',
  'Video Production',
];


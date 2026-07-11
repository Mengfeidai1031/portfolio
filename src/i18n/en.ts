import type { Translation } from './types';

// English translation.
export const en: Translation = {
  meta: {
    title: 'Meng Fei Dai — Software Engineer',
    description:
      'Portfolio of Meng Fei Dai, Software Engineer (Full-Stack & DevOps) and Computer Engineering graduate working with Laravel, React, Node.js and AWS. Projects, experience and contact.',
    ogLocale: 'en_GB',
  },
  nav: {
    about: 'About',
    stack: 'Stack',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toggleTheme: 'Toggle theme',
    changeLanguage: 'Change language',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Meng Fei Dai',
    role: 'Software Engineer · Full-Stack & DevOps · Computer Engineering Graduate',
    pitch: 'I build web applications end to end: from the data model to production deployment.',
    ctaProjects: 'View projects',
    ctaCv: 'Download CV',
    scrollHint: 'Scroll to explore',
  },
  about: {
    title: 'About me',
    p1: 'I am a computer engineer (ULPGC) and a full-stack developer at Grupo Ari Motor, where I work on the corporate ERP and its integrations with external systems. I am comfortable across the whole journey of an application: data modelling, APIs, UI and deployment.',
    p2: 'I am currently studying the Master in Web Development at UOC. Outside work you will find me experimenting with 3D graphics, applying AI to real problems and automating anything that repeats itself more than twice.',
    facts: {
      location: 'Gran Canaria, Spain',
      role: 'Full Stack at Grupo Ari Motor',
      degree: 'Computer Engineering — ULPGC',
      master: 'Web Dev Master — UOC (from Sep 2026)',
    },
    mascotHint: 'Hover over it',
  },
  stack: {
    title: 'Tech stack',
    subtitle: 'The tools I work with every day.',
    groups: {
      backend: 'Backend',
      frontend: 'Frontend',
      cloud: 'Cloud & DevOps',
    },
  },
  experience: {
    title: 'Experience',
    subtitle: 'Where I have worked and what I have built.',
    jobs: [
      {
        role: 'Full-Stack Developer',
        company: 'Grupo Ari Motor',
        period: 'Jan 2026 — Present',
        badge: 'Internship → Hired',
        bullets: [
          'Unified three tow-truck applications into a single multitenant Laravel application, with a full code refactor.',
          'Integrated the corporate ERP with external systems: intranet-based authentication and two-way employee sync with Factorial and Azure AD.',
          'Automated tow-service generation from ERP vehicle movements, based on the island of origin.',
          'I build custom modules and data-migration commands, and resolve live incidents for several departments.',
        ],
        tech: ['Laravel', 'PHP', 'MySQL', 'REST APIs', 'Azure AD'],
      },
      {
        role: 'IT support · Customer service',
        company: 'Restaurante Dai Montaña',
        period: 'Oct 2019 — Dec 2025',
        bullets: [
          'Built and maintained the business website and digital presence (Instagram, Google My Business), alongside IT support, cash handling and customer service.',
        ],
        tech: ['Web', 'Digital presence'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'A selection of what I have built, solo and in teams.',
    featuredBadge: 'Final Degree Project · Grade: 9.4',
    repo: 'Code',
    demo: 'Live demo',
    moreTitle: 'More projects',
    items: {
      vexis: {
        name: 'Vexis',
        description:
          'My Final Degree Project: an all-in-one management platform for automotive dealership groups, deployed to real production.',
        highlights: [
          'Eight functional areas: sales and tax (with Verifactu compliance), spare parts, workshops, incidents, customer portal and analytics.',
          'Built-in AI with Google Gemini: support chatbot and vehicle pre-appraisal, with an API usage control panel.',
          'Layered security: roles, granular permissions, per-resource policies, rate limiting and a real-time log viewer.',
          'Automated zero-to-production deployment with SSL.',
        ],
      },
      brindi: {
        name: 'Brindi',
        description:
          'PWA for groups meeting in person: bill splitting with AI receipt OCR, decision games and an AI plan generator based on location and budget. Full-stack monorepo with privacy by design.',
      },
      restaurant: {
        name: 'Restaurant Ordering System',
        description:
          'The same ordering system implemented with two compared AWS architectures — containers vs serverless — with a real cost analysis: 95% savings on the serverless variant.',
      },
      airquality: {
        name: 'Air Quality Pipeline',
        description:
          'Real-time data pipeline: IoT sensor ingestion with Kinesis, Spark ETL processing on AWS Glue and interactive SQL queries with Athena.',
      },
      ticketscraper: {
        name: 'Ticket Scraper',
        description:
          'Real-time ticket listing extractor for VividSeats and SeatGeek: headless browser against anti-bot protections, degrading gracefully when the perimeter cannot be crossed.',
      },
      graphics: {
        name: 'Graphics Playground',
        description:
          'Computer graphics experiments: a 3D solar system, air-traffic visualisation, generative GLSL shaders, a WebXR VR game and a Unity racing game.',
      },
      mindweaver: {
        name: 'MindWeaver',
        description: 'Desktop note-taking app with markdown, KaTeX and flashcards, built as a team.',
      },
      splitlight: {
        name: 'Split-Light',
        description: 'Escape-room puzzle game for two characters with unique abilities, built by a team of six.',
      },
      dollyshare: {
        name: 'DollyShare',
        description: 'Share files and text between devices quickly and simply.',
      },
      imagegallery: {
        name: 'Serverless Image Gallery',
        description: 'Event-driven image gallery with automatic thumbnail generation.',
      },
      javaplayground: {
        name: 'Java Playground',
        description: 'Design and refactoring katas, plus small Java desktop applications.',
      },
      aiplayground: {
        name: 'AI Playground',
        description:
          'Classic search algorithms (BFS, DFS, Branch & Bound) and CNN image classifiers in PyTorch, from 77% to 89% accuracy with transfer learning.',
      },
    },
  },
  education: {
    title: 'Education & certifications',
    degreesTitle: 'Studies',
    certsTitle: 'Certifications',
    degrees: [
      {
        name: 'Master in Web Application Development',
        school: 'Universitat Oberta de Catalunya (UOC)',
        period: 'Since Sep 2026',
        detail: 'Faculty of Computer Science, Multimedia and Telecommunications.',
      },
      {
        name: 'BSc in Computer Engineering',
        school: 'University of Las Palmas de Gran Canaria (ULPGC)',
        period: '2022 — 2026',
        detail:
          'Honours in Programming, Cloud Computing, Application Development and Information Security. 9.2 GPA in 4th year; Final Degree Project: 9.4.',
      },
    ],
    certs: [
      {
        name: 'Getting Started with Linux Fundamentals (RH104)',
        issuer: 'Red Hat Academy',
        date: 'Oct 2024',
        file: '/certs/redhat-rh104.pdf',
      },
      {
        name: 'Red Hat System Administration I (RH124)',
        issuer: 'Red Hat Academy',
        date: 'Dec 2024',
        file: '/certs/redhat-rh124.pdf',
      },
      {
        name: 'Red Hat System Administration II (RH134)',
        issuer: 'Red Hat Academy',
        date: 'Jan 2025',
        file: '/certs/redhat-rh134.pdf',
      },
      {
        name: 'AI Development: Programming with Agents',
        issuer: 'BIG school',
        date: 'Jun 2026',
        file: '/certs/bigschool-desarrollo-ia.pdf',
      },
    ],
    viewPdf: 'View certificate',
  },
  languages: {
    title: 'Languages & other details',
    items: [
      { name: 'Spanish', level: 'Native' },
      { name: 'Chinese', level: 'Native' },
      { name: 'English', level: 'Intermediate' },
    ],
    extraTitle: 'Other',
    extra: ['Driving licence (B)', 'Gran Canaria, Spain'],
  },
  contact: {
    title: 'Shall we build something together?',
    subtitle: 'I am open to new opportunities and interesting projects. Drop me a line and I will get back to you soon.',
    emailCta: 'Send an email',
    cvCta: 'Download CV',
    footerNote: 'Built with Astro and Three.js',
    footerSource: 'Source code',
  },
  a11y: {
    skip: 'Skip to content',
    mascot: 'Interactive 3D robot mascot that follows the cursor',
    cvFileName: 'CV-Meng-Fei-Dai.pdf',
  },
};

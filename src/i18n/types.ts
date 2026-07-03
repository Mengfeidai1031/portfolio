// Forma tipada de un diccionario de traducción completo.
// Cada idioma (es/en/zh) implementa esta interfaz, de modo que si falta
// una cadena en algún idioma, TypeScript lo detecta en build.

export interface ProjectText {
  name: string;
  description: string;
  /** Solo lo usa el proyecto destacado */
  highlights?: string[];
}

export interface CertText {
  name: string;
  issuer: string;
  date: string;
  file: string;
}

export interface JobText {
  role: string;
  company: string;
  period: string;
  badge?: string;
  bullets: string[];
  tech: string[];
}

export interface Translation {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
  };
  nav: {
    about: string;
    stack: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    changeLanguage: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    pitch: string;
    ctaProjects: string;
    ctaCv: string;
    scrollHint: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    facts: {
      location: string;
      role: string;
      degree: string;
      master: string;
    };
    mascotHint: string;
  };
  stack: {
    title: string;
    subtitle: string;
    groups: {
      backend: string;
      frontend: string;
      cloud: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    jobs: JobText[];
  };
  projects: {
    title: string;
    subtitle: string;
    featuredBadge: string;
    repo: string;
    demo: string;
    moreTitle: string;
    items: Record<string, ProjectText>;
  };
  education: {
    title: string;
    degreesTitle: string;
    certsTitle: string;
    degrees: { name: string; school: string; period: string; detail: string }[];
    certs: CertText[];
    viewPdf: string;
  };
  languages: {
    title: string;
    items: { name: string; level: string }[];
    extraTitle: string;
    extra: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailCta: string;
    cvCta: string;
    footerNote: string;
    footerSource: string;
  };
  a11y: {
    skip: string;
    mascot: string;
    cvFileName: string;
  };
}

// Datos compartidos de proyectos (no dependen del idioma).
// Los títulos y descripciones traducidos viven en src/i18n/{es,en,zh}.ts
// bajo la clave `projects.items[slug]`.

export interface ProjectMeta {
  slug: string;
  repo: string;
  demo?: string;
  tech: string[];
  /** Inicial que se muestra en la cubierta estilizada de la tarjeta */
  monogram: string;
}

/** Proyecto destacado (tarjeta grande, siempre primero) */
export const featuredProject: ProjectMeta = {
  slug: 'vexis',
  repo: 'https://github.com/Mengfeidai1031/Vexis',
  demo: 'https://vexis-app.duckdns.org/',
  tech: ['Laravel 12', 'PHP 8.2', 'Tailwind CSS 4', 'Vite 7', 'MySQL', 'Gemini'],
  monogram: 'V',
};

/** Resto de proyectos destacados (tarjetas en cuadrícula) */
export const gridProjects: ProjectMeta[] = [
  {
    slug: 'brindi',
    repo: 'https://github.com/Mengfeidai1031/Brindi',
    tech: ['Next.js 15', 'NestJS', 'PostgreSQL', 'Redis', 'FastAPI', 'Gemini'],
    monogram: 'B',
  },
  {
    slug: 'restaurant',
    repo: 'https://github.com/Mengfeidai1031/restaurant-ordering-system',
    tech: ['ECS Fargate', 'Lambda', 'API Gateway', 'DynamoDB', 'FastAPI'],
    monogram: 'R',
  },
  {
    slug: 'airquality',
    repo: 'https://github.com/Mengfeidai1031/aws-realtime-air-quality-pipeline',
    tech: ['Kinesis', 'Glue', 'S3', 'Athena', 'PySpark'],
    monogram: 'A',
  },
  {
    slug: 'ticketscraper',
    repo: 'https://github.com/Mengfeidai1031/ticket-scraper',
    tech: ['PHP', 'Node.js', 'Puppeteer'],
    monogram: 'T',
  },
  {
    slug: 'graphics',
    repo: 'https://github.com/Mengfeidai1031/graphics-playground',
    tech: ['Three.js', 'WebXR', 'GLSL', 'Unity'],
    monogram: 'G',
  },
];

/** Tira compacta de "más proyectos" */
export const moreProjects: ProjectMeta[] = [
  {
    slug: 'mindweaver',
    repo: 'https://github.com/Mengfeidai1031/mindweaver',
    tech: ['Electron', 'React', 'TypeScript'],
    monogram: 'M',
  },
  {
    slug: 'splitlight',
    repo: 'https://github.com/Mengfeidai1031/Split-Light',
    tech: ['Godot', 'GDScript'],
    monogram: 'S',
  },
  {
    slug: 'dollyshare',
    repo: 'https://github.com/Mengfeidai1031/dollyshare',
    tech: ['TypeScript'],
    monogram: 'D',
  },
  {
    slug: 'imagegallery',
    repo: 'https://github.com/Mengfeidai1031/serverless-image-gallery',
    tech: ['Lambda', 'S3', 'DynamoDB'],
    monogram: 'I',
  },
  {
    slug: 'javaplayground',
    repo: 'https://github.com/Mengfeidai1031/java-playground',
    tech: ['Java'],
    monogram: 'J',
  },
];

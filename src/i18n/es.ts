import type { Translation } from './types';

// Español — idioma por defecto del sitio.
export const es: Translation = {
  meta: {
    title: 'Meng Fei Dai — Desarrollador Full Stack',
    description:
      'Portfolio de Meng Fei Dai, ingeniero informático y desarrollador full stack: Laravel, React, Node.js y AWS. Proyectos, experiencia y contacto.',
    ogLocale: 'es_ES',
  },
  nav: {
    about: 'Sobre mí',
    stack: 'Stack',
    experience: 'Experiencia',
    projects: 'Proyectos',
    education: 'Formación',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    toggleTheme: 'Cambiar tema',
    changeLanguage: 'Cambiar idioma',
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Meng Fei Dai',
    role: 'Desarrollador Full Stack · Ingeniero Informático',
    pitch:
      'Construyo aplicaciones web de principio a fin: del modelo de datos al despliegue en producción.',
    ctaProjects: 'Ver proyectos',
    ctaCv: 'Descargar CV',
    scrollHint: 'Desliza para ver más',
  },
  about: {
    title: 'Sobre mí',
    p1: 'Soy ingeniero informático por la ULPGC y desarrollador full stack en Grupo Ari Motor, donde desarrollo el ERP corporativo y sus integraciones con sistemas externos. Me muevo a gusto en todo el recorrido de una aplicación: modelado de datos, APIs, interfaz y despliegue.',
    p2: 'Actualmente curso el Máster en Desarrollo de Sitios y Aplicaciones Web de la UOC. Fuera del trabajo me encontrarás experimentando con gráficos 3D, aplicando IA a problemas reales y automatizando todo lo que se repita más de dos veces.',
    facts: {
      location: 'Gran Canaria, España',
      role: 'Full Stack en Grupo Ari Motor',
      degree: 'Ing. Informática — ULPGC',
      master: 'Máster Web — UOC (en curso)',
    },
    mascotHint: 'Pásale el ratón por encima',
  },
  stack: {
    title: 'Stack técnico',
    subtitle: 'Las herramientas con las que trabajo a diario.',
    groups: {
      backend: 'Backend',
      frontend: 'Frontend',
      cloud: 'Cloud y DevOps',
    },
  },
  experience: {
    title: 'Experiencia',
    subtitle: 'Dónde he trabajado y qué he construido.',
    jobs: [
      {
        role: 'Desarrollador Full Stack',
        company: 'Grupo Ari Motor',
        period: 'Ene. 2026 — Actualidad',
        badge: 'Prácticas → Contratación',
        bullets: [
          'Unifiqué tres aplicaciones de grúas en una única aplicación Laravel multitenant, con refactorización integral del código.',
          'Integré el ERP corporativo con sistemas externos: autenticación vía intranet y sincronización bidireccional de empleados con Factorial y Azure AD.',
          'Automaticé la generación de servicios de grúa a partir de los movimientos de vehículos del ERP, según la isla de origen.',
          'Desarrollo nuevos módulos a medida, comandos de migración de datos y resuelvo incidencias en tiempo real para distintos departamentos.',
        ],
        tech: ['Laravel', 'PHP', 'MySQL', 'APIs REST', 'Azure AD'],
      },
      {
        role: 'Soporte informático · Atención al cliente',
        company: 'Restaurante Dai Montaña',
        period: 'Oct. 2019 — Dic. 2025',
        bullets: [
          'Desarrollo y mantenimiento de la web y la presencia digital del negocio (Instagram, Google My Business), junto con soporte informático, gestión de caja y atención al cliente.',
        ],
        tech: ['Web', 'Presencia digital'],
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Una selección de lo que he construido, solo y en equipo.',
    featuredBadge: 'TFG · Nota: 9,4',
    repo: 'Código',
    demo: 'Demo en vivo',
    moreTitle: 'Más proyectos',
    items: {
      vexis: {
        name: 'Vexis',
        description:
          'Mi Trabajo de Fin de Grado: una plataforma de gestión integral para grupos de concesionarios de automoción, desplegada en producción real.',
        highlights: [
          'Ocho áreas funcionales: comercial y fiscal (con cumplimiento Verifactu), recambios, talleres, incidencias, portal de cliente y analítica.',
          'IA integrada con Google Gemini: chatbot de atención y pre-tasación de vehículos, con panel de control de uso de la API.',
          'Seguridad por capas: roles, permisos granulares, políticas por recurso, rate limiting y visor de logs en tiempo real.',
          'Despliegue automatizado de cero a producción con SSL.',
        ],
      },
      brindi: {
        name: 'Brindi',
        description:
          'PWA para grupos que quedan en persona: divide cuentas con OCR de tickets por IA, juegos para decidir y generador de planes según ubicación y presupuesto. Monorepo full-stack con privacidad por diseño.',
      },
      restaurant: {
        name: 'Restaurant Ordering System',
        description:
          'El mismo sistema de pedidos implementado con dos arquitecturas AWS comparadas —contenedores y serverless— con análisis real de costes: 95 % de ahorro en la variante serverless.',
      },
      airquality: {
        name: 'Air Quality Pipeline',
        description:
          'Pipeline de datos en tiempo real: ingesta de sensores IoT con Kinesis, procesamiento ETL con Spark en AWS Glue y consultas SQL interactivas con Athena.',
      },
      ticketscraper: {
        name: 'Ticket Scraper',
        description:
          'Extractor de listados de entradas en tiempo real desde VividSeats y SeatGeek: navegador headless frente a protecciones anti-bot y degradación controlada cuando el perímetro no es franqueable.',
      },
      graphics: {
        name: 'Graphics Playground',
        description:
          'Experimentos de gráficos por computador: sistema solar 3D, visualización de tráfico aéreo, shaders GLSL generativos, un juego VR para WebXR y un juego de carreras en Unity.',
      },
      mindweaver: {
        name: 'MindWeaver',
        description: 'App de escritorio de apuntes con markdown, KaTeX y flashcards, construida en equipo.',
      },
      splitlight: {
        name: 'Split-Light',
        description: 'Juego de puzles tipo escape room para dos personajes con habilidades únicas, en equipo de seis.',
      },
      dollyshare: {
        name: 'DollyShare',
        description: 'Compartir archivos y texto entre dispositivos de forma rápida y sencilla.',
      },
      imagegallery: {
        name: 'Serverless Image Gallery',
        description: 'Galería de imágenes dirigida por eventos con generación automática de miniaturas.',
      },
      javaplayground: {
        name: 'Java Playground',
        description: 'Katas de diseño y refactorización, y pequeñas aplicaciones Java de escritorio.',
      },
    },
  },
  education: {
    title: 'Formación y certificaciones',
    degreesTitle: 'Estudios',
    certsTitle: 'Certificaciones',
    degrees: [
      {
        name: 'Máster U. en Desarrollo de Sitios y Aplicaciones Web',
        school: 'Universitat Oberta de Catalunya (UOC)',
        period: 'Desde sep. 2026',
        detail: 'Estudios de Informática, Multimedia y Telecomunicación.',
      },
      {
        name: 'Grado en Ingeniería Informática',
        school: 'Universidad de Las Palmas de Gran Canaria (ULPGC)',
        period: '2022 — 2026',
        detail:
          'Matrícula de Honor en Programación, Computación en la Nube, Desarrollo de Aplicaciones y Seguridad de la Información. Media de 9,2 en 4.º curso; TFG: 9,4.',
      },
    ],
    certs: [
      {
        name: 'Getting Started with Linux Fundamentals (RH104)',
        issuer: 'Red Hat Academy',
        date: 'Oct. 2024',
        file: '/certs/redhat-rh104.pdf',
      },
      {
        name: 'Red Hat System Administration I (RH124)',
        issuer: 'Red Hat Academy',
        date: 'Dic. 2024',
        file: '/certs/redhat-rh124.pdf',
      },
      {
        name: 'Red Hat System Administration II (RH134)',
        issuer: 'Red Hat Academy',
        date: 'Ene. 2025',
        file: '/certs/redhat-rh134.pdf',
      },
      {
        name: 'Desarrollo con IA: Programa con Agentes',
        issuer: 'BIG school',
        date: 'Jun. 2026',
        file: '/certs/bigschool-desarrollo-ia.pdf',
      },
    ],
    viewPdf: 'Ver certificado',
  },
  languages: {
    title: 'Idiomas y otros datos',
    items: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Chino', level: 'Nativo' },
      { name: 'Inglés', level: 'Intermedio' },
    ],
    extraTitle: 'Otros',
    extra: ['Permiso de conducir tipo B', 'Gran Canaria, España'],
  },
  contact: {
    title: '¿Construimos algo juntos?',
    subtitle:
      'Estoy abierto a nuevas oportunidades y proyectos interesantes. Escríbeme y te responderé lo antes posible.',
    emailCta: 'Enviar un email',
    cvCta: 'Descargar CV',
    footerNote: 'Hecho con Astro y Three.js',
    footerSource: 'Código fuente',
  },
  a11y: {
    skip: 'Saltar al contenido',
    mascot: 'Mascota robot 3D interactiva que sigue el cursor',
    cvFileName: 'CV-Meng-Fei-Dai.pdf',
  },
};

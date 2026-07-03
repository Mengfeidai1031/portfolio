// Stack técnico agrupado por categoría.
// Los iconos son SVG autoalojados en /public/icons/ (originales de skillicons.dev, MIT).
// Las etiquetas de los grupos se traducen en src/i18n/*.ts (stack.groups).

export interface StackItem {
  name: string;
  /** Nombre del fichero en /public/icons/ (sin extensión) */
  icon: string;
}

export interface StackGroup {
  /** Clave de traducción del nombre del grupo */
  key: 'backend' | 'frontend' | 'cloud';
  items: StackItem[];
}

export const stackGroups: StackGroup[] = [
  {
    key: 'backend',
    items: [
      { name: 'PHP', icon: 'php' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'Python', icon: 'py' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
  {
    key: 'frontend',
    items: [
      { name: 'JavaScript', icon: 'js' },
      { name: 'TypeScript', icon: 'ts' },
      { name: 'React', icon: 'react' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Vite', icon: 'vite' },
    ],
  },
  {
    key: 'cloud',
    items: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Git', icon: 'git' },
    ],
  },
];

// @ts-check
import { defineConfig } from 'astro/config';

// Configuración de Astro con i18n nativo.
// - Español es el idioma por defecto y vive en la raíz (/).
// - Inglés y chino simplificado viven en /en/ y /zh/.
export default defineConfig({
  site: 'https://mengfeidai.vercel.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

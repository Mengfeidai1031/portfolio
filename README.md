# mengfeidai.vercel.app

Portfolio personal de **Meng Fei Dai** — Desarrollador Full Stack · Ingeniero Informático.

**→ https://mengfeidai.vercel.app**

## Características

- **Trilingüe** (ES / EN / 中文) con el i18n nativo de Astro: español en `/`, inglés en `/en/`, chino simplificado en `/zh/`. Todas las cadenas centralizadas en `src/i18n/`.
- **Fondo generativo del hero** con Three.js: campo de partículas y poliedros wireframe que reaccionan al ratón y al scroll.
- **Mascota robot low-poly** construida solo con primitivas y animada por código: flota, parpadea, sigue el cursor y saluda al pasar el ratón.
- **Rendimiento**: cada escena 3D pausa su render fuera del viewport, la mascota se monta de forma lazy, DPR y partículas reducidos en dispositivos modestos, y `prefers-reduced-motion` desactiva todas las animaciones.
- **Modo oscuro** por defecto con opción clara persistida.
- **Accesibilidad**: navegable por teclado, `skip-link`, contraste cuidado, iconos SVG (Lucide) y banderas SVG (flag-icons) — sin emojis.
- **SEO**: título, descripción, `hreflang` y Open Graph por idioma.

## Desarrollo

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # build de producción en dist/
npm run preview   # sirve el build localmente
```

## Estructura

```
src/
├── data/          # Proyectos y stack (datos independientes del idioma)
├── i18n/          # Diccionarios es/en/zh + utilidades
├── layouts/       # Base.astro (head, SEO, tema, fuentes)
├── components/    # Navbar, Hero, About, Stack, Experience, Projects, ...
├── scripts/       # main.ts (carga diferida), ui.ts, hero-bg.ts, mascot.ts
├── styles/        # global.css (tokens de diseño, temas, componentes)
└── pages/         # /, /en/, /zh/
public/
├── cv/            # CV en PDF
├── certs/         # Certificados en PDF
├── icons/         # Iconos del stack (skillicons, autoalojados)
└── flags/         # Banderas SVG del selector de idioma
```

## Despliegue

Desplegado en Vercel como sitio estático (`astro build` → `dist/`).

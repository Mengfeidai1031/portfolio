// Punto de entrada del cliente.
// Regla de rendimiento: en el primer pintado NUNCA se montan las dos escenas
// 3D a la vez. El fondo del hero se inicia en cuanto el hilo queda libre;
// la mascota se monta de forma lazy cuando su sección se acerca al viewport.

import { initUi } from './ui';

initUi();

// Fondo del hero: importar el chunk 3D sin bloquear el primer pintado.
const idle = (cb: () => void) =>
  'requestIdleCallback' in window ? requestIdleCallback(cb, { timeout: 900 }) : setTimeout(cb, 120);

idle(() => {
  import('./hero-bg').then((m) => m.initHeroBg());
});

// Mascota: montar solo cuando la sección "Sobre mí" esté cerca del viewport.
const mascotMount = document.getElementById('mascot-mount');
if (mascotMount) {
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        import('./mascot').then((m) => m.initMascot(mascotMount));
      }
    },
    { rootMargin: '300px 0px' }
  );
  io.observe(mascotMount);
}

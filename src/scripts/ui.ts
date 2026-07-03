// Interacciones de interfaz sin 3D: tema, menú móvil, selector de idioma,
// estado del navbar al hacer scroll y animaciones de aparición.

export function initUi(): void {
  const html = document.documentElement;

  // --- Toggle de tema (persistido en localStorage) ---
  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const isLight = html.getAttribute('data-theme') === 'light';
    if (isLight) {
      html.removeAttribute('data-theme');
    } else {
      html.setAttribute('data-theme', 'light');
    }
    try {
      localStorage.setItem('theme', isLight ? 'dark' : 'light');
    } catch {
      /* almacenamiento no disponible: el tema simplemente no persiste */
    }
  });

  // --- Navbar: borde inferior al hacer scroll ---
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar?.classList.toggle('scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Menú móvil ---
  const burger = document.getElementById('nav-burger');
  const panel = document.getElementById('mobile-panel');
  const closeMenu = () => {
    html.removeAttribute('data-menu-open');
    panel?.classList.remove('open');
    burger?.setAttribute('aria-expanded', 'false');
  };
  burger?.addEventListener('click', () => {
    const open = html.hasAttribute('data-menu-open');
    if (open) {
      closeMenu();
    } else {
      html.setAttribute('data-menu-open', '');
      panel?.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
    }
  });
  panel?.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

  // --- Selector de idioma: cerrar al hacer clic fuera o con Escape ---
  const langMenu = document.getElementById('lang-menu') as HTMLDetailsElement | null;
  document.addEventListener('click', (e) => {
    if (langMenu?.open && !langMenu.contains(e.target as Node)) langMenu.open = false;
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && langMenu?.open) langMenu.open = false;
  });

  // --- Animaciones de aparición al hacer scroll ---
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealables = document.querySelectorAll('[data-reveal]');
  if (reduced || !('IntersectionObserver' in window)) {
    revealables.forEach((el) => el.classList.add('in-view'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' }
    );
    revealables.forEach((el) => io.observe(el));
  }
}

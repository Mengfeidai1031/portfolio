// Fondo generativo del hero: campo de partículas + poliedros wireframe.
// Reacciona al ratón (parallax) y al scroll (desplazamiento de cámara).
//
// Reglas de rendimiento:
// - Renderiza bajo demanda con rAF, pero se PAUSA cuando el hero sale del
//   viewport o la pestaña queda oculta (IntersectionObserver + visibilitychange).
// - En dispositivos táctiles o con pocos núcleos reduce partículas y DPR.
// - Con prefers-reduced-motion pinta UN solo frame estático.

import * as THREE from 'three';

export function initHeroBg(): void {
  const mount = document.getElementById('hero-bg');
  if (!mount || mount.dataset.ready) return;
  mount.dataset.ready = '1';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const lowPower = coarse || (navigator.hardwareConcurrency ?? 8) <= 4;

  // --- Escena base ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 120);
  camera.position.set(0, 0, 17);

  const renderer = new THREE.WebGLRenderer({
    antialias: false,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1.5 : 2));
  mount.appendChild(renderer.domElement);

  // --- Partículas distribuidas en un volumen amplio ---
  const count = reduced ? 350 : lowPower ? 420 : 1200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = THREE.MathUtils.randFloatSpread(46);
    positions[i * 3 + 1] = THREE.MathUtils.randFloatSpread(26);
    positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(22) - 4;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Sprite circular generado por código para que los puntos no sean cuadrados.
  const spriteCanvas = document.createElement('canvas');
  spriteCanvas.width = spriteCanvas.height = 64;
  const ctx = spriteCanvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.4, 'rgba(255,255,255,0.85)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 64, 64);
  const sprite = new THREE.CanvasTexture(spriteCanvas);

  const pointsMat = new THREE.PointsMaterial({
    size: 0.11,
    map: sprite,
    transparent: true,
    depthWrite: false,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geometry, pointsMat);

  // --- Poliedros wireframe para dar profundidad ---
  const wireMat1 = new THREE.MeshBasicMaterial({ wireframe: true, transparent: true });
  const wireMat2 = wireMat1.clone();
  const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(5.2, 1), wireMat1);
  ico.position.set(9.5, 2.5, -7);
  const octa = new THREE.Mesh(new THREE.IcosahedronGeometry(3.1, 0), wireMat2);
  octa.position.set(-10.5, -3.5, -5);

  const group = new THREE.Group();
  group.add(points, ico, octa);
  scene.add(group);

  // --- Colores según tema (leyendo las variables CSS del documento) ---
  function applyTheme() {
    const light = document.documentElement.getAttribute('data-theme') === 'light';
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#a78bfa';
    pointsMat.color.set(accent);
    pointsMat.opacity = light ? 0.55 : 0.85;
    // El blending aditivo brilla en oscuro pero desaparece sobre blanco.
    pointsMat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
    pointsMat.needsUpdate = true;
    wireMat1.color.set(accent);
    wireMat2.color.set(accent);
    wireMat1.opacity = light ? 0.16 : 0.1;
    wireMat2.opacity = light ? 0.12 : 0.07;
  }
  applyTheme();
  new MutationObserver(applyTheme).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  // --- Tamaño ---
  function resize() {
    const { clientWidth: w, clientHeight: h } = mount!;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  resize();

  if (reduced) {
    // Versión estática: un único frame, sin bucles ni listeners de movimiento.
    renderer.render(scene, camera);
    new ResizeObserver(() => {
      resize();
      renderer.render(scene, camera);
    }).observe(mount);
    return;
  }

  new ResizeObserver(resize).observe(mount);

  // --- Entradas: ratón y scroll ---
  let targetX = 0;
  let targetY = 0;
  window.addEventListener(
    'pointermove',
    (e) => {
      targetX = e.clientX / window.innerWidth - 0.5;
      targetY = e.clientY / window.innerHeight - 0.5;
    },
    { passive: true }
  );

  let scrollT = 0;
  window.addEventListener(
    'scroll',
    () => {
      scrollT = Math.min(window.scrollY / window.innerHeight, 1.2);
    },
    { passive: true }
  );

  // --- Bucle de render con pausa fuera de pantalla ---
  const clock = new THREE.Clock();
  let visible = true;
  let raf: number | null = null;

  function frame() {
    if (!visible) {
      raf = null;
      return;
    }
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    group.rotation.y += dt * 0.02;
    group.rotation.y += (targetX * 0.35 - group.rotation.y) * 0.03;
    group.rotation.x += (targetY * 0.22 - group.rotation.x) * 0.03;

    ico.rotation.x += dt * 0.06;
    ico.rotation.y += dt * 0.09;
    octa.rotation.x -= dt * 0.08;
    octa.rotation.z += dt * 0.05;

    // Respiración sutil del campo de partículas + reacción al scroll.
    points.position.y = Math.sin(t * 0.35) * 0.4;
    camera.position.y = -scrollT * 3.2;
    camera.position.x += (targetX * 1.4 - camera.position.x) * 0.04;

    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  }

  function setVisible(v: boolean) {
    visible = v;
    if (v && raf === null) {
      clock.getDelta(); // descarta el tiempo acumulado en pausa
      raf = requestAnimationFrame(frame);
    }
  }

  new IntersectionObserver(([entry]) => setVisible(entry!.isIntersecting && !document.hidden)).observe(mount);
  document.addEventListener('visibilitychange', () => setVisible(!document.hidden));

  raf = requestAnimationFrame(frame);
}

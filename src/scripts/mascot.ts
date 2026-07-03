// Mascota: robot low-poly construido solo con primitivas (Box, Sphere,
// Cylinder, Capsule) y animado por código:
// - idle: flota, parpadea y balancea la antena
// - sigue el puntero con la cabeza y el cuerpo
// - al pasar el ratón por encima: salta, saluda y le brillan los ojos
//
// La calidad visual viene de las luces y materiales: luz hemisférica de
// relleno, key light con sombras suaves (PCFSoft) sobre un ShadowMaterial
// y luz de acento en el borde. Con prefers-reduced-motion se renderiza
// una única pose estática.

import * as THREE from 'three';

export function initMascot(mount: HTMLElement): void {
  if (mount.dataset.ready) return;
  mount.dataset.ready = '1';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lowPower =
    window.matchMedia('(pointer: coarse)').matches || (navigator.hardwareConcurrency ?? 8) <= 4;

  // --- Escena, cámara y renderer ---
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
  camera.position.set(0, 1.15, 6.4);
  camera.lookAt(0, 0.7, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: !lowPower, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = !lowPower;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  mount.appendChild(renderer.domElement);

  // --- Materiales ---
  const accentCss = () =>
    getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#a78bfa';

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x30303f, roughness: 0.35, metalness: 0.55 });
  const headMat = new THREE.MeshStandardMaterial({ color: 0x3b3b4f, roughness: 0.3, metalness: 0.6 });
  const faceMat = new THREE.MeshStandardMaterial({ color: 0x101018, roughness: 0.2, metalness: 0.4 });
  const eyeMat = new THREE.MeshStandardMaterial({
    color: 0x111118,
    emissive: new THREE.Color(accentCss()),
    emissiveIntensity: 2.2,
    roughness: 0.25,
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(accentCss()),
    roughness: 0.4,
    metalness: 0.3,
  });

  // Si cambia el tema, actualiza el color de acento de ojos y antena.
  new MutationObserver(() => {
    eyeMat.emissive.set(accentCss());
    accentMat.color.set(accentCss());
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  // --- Construcción del robot con primitivas ---
  const robot = new THREE.Group();

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.78, 0.7, 6, 20), bodyMat);
  body.position.y = 0;
  body.castShadow = true;

  const belly = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.4, 0.06), faceMat);
  belly.position.set(0, 0.02, 0.76);

  const bellyLight = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), eyeMat);
  bellyLight.position.set(0, 0.02, 0.8);

  const head = new THREE.Group();
  head.position.y = 1.32;

  const skull = new THREE.Mesh(new THREE.BoxGeometry(1.42, 1.04, 1.14), headMat);
  skull.castShadow = true;

  const face = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.68, 0.08), faceMat);
  face.position.set(0, -0.02, 0.58);

  const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 14), eyeMat);
  eyeL.position.set(-0.27, 0.02, 0.62);
  const eyeR = eyeL.clone();
  eyeR.position.x = 0.27;

  const earL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.14, 12), accentMat);
  earL.rotation.z = Math.PI / 2;
  earL.position.set(-0.78, 0, 0);
  const earR = earL.clone();
  earR.position.x = 0.78;

  const antenna = new THREE.Group();
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.46, 8), headMat);
  rod.position.y = 0.23;
  const tip = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), eyeMat);
  tip.position.y = 0.5;
  antenna.add(rod, tip);
  antenna.position.y = 0.52;

  head.add(skull, face, eyeL, eyeR, earL, earR, antenna);

  // Cada brazo cuelga de un pivote en el hombro: así las rotaciones se ven
  // como un péndulo natural y no como un giro raro sobre el centro del brazo.
  const armGeo = new THREE.CapsuleGeometry(0.14, 0.46, 4, 12);
  const makeArm = (side: 1 | -1) => {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.92, 0.42, 0);
    const mesh = new THREE.Mesh(armGeo, bodyMat);
    mesh.position.y = -0.34;
    mesh.castShadow = true;
    pivot.add(mesh);
    return pivot;
  };
  const armL = makeArm(-1);
  const armR = makeArm(1);

  robot.add(body, belly, bellyLight, head, armL, armR);
  robot.position.y = 0.35;
  scene.add(robot);

  // --- Suelo receptor de sombras (invisible salvo la sombra) ---
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), new THREE.ShadowMaterial({ opacity: 0.28 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1.05;
  ground.receiveShadow = true;
  scene.add(ground);

  // Disco suave bajo el robot para que "flote" también sin sombras (móvil).
  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(0.85, 32),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: lowPower ? 0.22 : 0.0 })
  );
  disc.rotation.x = -Math.PI / 2;
  disc.position.y = -1.04;
  scene.add(disc);

  // --- Iluminación ---
  scene.add(new THREE.HemisphereLight(0xbdb4ff, 0x1a1a26, 0.75));

  const key = new THREE.DirectionalLight(0xffffff, 2.4);
  key.position.set(3, 5, 4);
  if (!lowPower) {
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.camera.near = 1;
    key.shadow.camera.far = 15;
    key.shadow.camera.left = key.shadow.camera.bottom = -4;
    key.shadow.camera.right = key.shadow.camera.top = 4;
    key.shadow.radius = 4;
  }
  scene.add(key);

  const rim = new THREE.PointLight(new THREE.Color(accentCss()), 14, 12);
  rim.position.set(-2.6, 1.4, 2.2);
  scene.add(rim);

  // --- Tamaño ---
  function resize() {
    const { clientWidth: w, clientHeight: h } = mount;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  resize();
  new ResizeObserver(resize).observe(mount);

  if (reduced) {
    renderer.render(scene, camera);
    return;
  }

  // --- Estado de interacción ---
  let px = 0; // puntero normalizado respecto al centro del canvas [-1, 1]
  let py = 0;
  let hover = 0; // 0..1 suavizado
  let hoverTarget = 0;
  let jumpV = 0;
  let jumpY = 0;

  window.addEventListener(
    'pointermove',
    (e) => {
      const r = mount.getBoundingClientRect();
      // Si la sección no está en pantalla el listener no cuesta casi nada.
      px = THREE.MathUtils.clamp(((e.clientX - (r.left + r.width / 2)) / r.width) * 2, -1.6, 1.6);
      py = THREE.MathUtils.clamp(((e.clientY - (r.top + r.height / 2)) / r.height) * 2, -1.4, 1.4);
    },
    { passive: true }
  );

  const startHover = () => {
    hoverTarget = 1;
    if (jumpY <= 0.001) jumpV = 3.6; // pequeño salto de alegría
  };
  mount.addEventListener('pointerenter', startHover);
  mount.addEventListener('pointerdown', startHover);
  mount.addEventListener('pointerleave', () => {
    hoverTarget = 0;
  });

  // --- Bucle con pausa fuera de pantalla ---
  const clock = new THREE.Clock();
  let visible = false;
  let raf: number | null = null;
  let blink = 1;

  function frame() {
    if (!visible) {
      raf = null;
      return;
    }
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    hover += (hoverTarget - hover) * Math.min(dt * 6, 1);

    // Física simple del salto.
    if (jumpY > 0 || jumpV !== 0) {
      jumpY += jumpV * dt;
      jumpV -= 12 * dt;
      if (jumpY <= 0) {
        jumpY = 0;
        jumpV = 0;
      }
    }

    // Idle: flotar + respirar.
    robot.position.y = 0.35 + Math.sin(t * 1.6) * 0.07 + jumpY * 0.55;
    robot.rotation.y += (px * 0.42 - robot.rotation.y) * Math.min(dt * 4, 1);

    // La cabeza sigue al puntero con más amplitud que el cuerpo.
    head.rotation.y += (px * 0.4 - head.rotation.y) * Math.min(dt * 6, 1);
    head.rotation.x += (py * 0.28 - head.rotation.x) * Math.min(dt * 6, 1);

    // Antena: balanceo idle + giro extra en hover.
    antenna.rotation.z = Math.sin(t * 2.4) * 0.1 + hover * Math.sin(t * 9) * 0.25;

    // Brazos en reposo: balanceo lateral suave (eje Z, en el plano de la
    // pantalla) en espejo perfecto entre los dos. Nada de giro en el eje de
    // profundidad (X): con la cámara casi de frente, ese giro escorza el
    // brazo y da la sensación óptica de que el hombro está "hacia atrás".
    const idleSway = Math.sin(t * 1.3) * 0.09;
    armL.rotation.x = 0;
    armL.rotation.z = 0.14 + idleSway;

    // Saludo: brazo arriba y hacia AFUERA (junto a la cabeza, no detrás),
    // con un ligero giro hacia la cámara para que salude "mirándote".
    const wave = hover * (2.3 + Math.sin(t * 8) * 0.35);
    armR.rotation.x = hover * 0.25;
    armR.rotation.z = (-0.14 - idleSway) * (1 - hover) + wave;

    // Parpadeo cada ~3,6 s.
    const cycle = t % 3.6;
    blink = cycle < 0.12 ? 0.12 : 1;
    eyeL.scale.y = blink;
    eyeR.scale.y = blink;

    // Ojos y antena brillan más en hover.
    eyeMat.emissiveIntensity = 2.2 + hover * 2.4;

    // Sombra proyectada: el disco de respaldo se encoge al saltar.
    const s = 1 - jumpY * 0.18;
    disc.scale.setScalar(Math.max(s, 0.6));

    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  }

  function setVisible(v: boolean) {
    visible = v && !document.hidden;
    if (visible && raf === null) {
      clock.getDelta();
      raf = requestAnimationFrame(frame);
    }
  }

  new IntersectionObserver(([entry]) => setVisible(entry!.isIntersecting)).observe(mount);
  document.addEventListener('visibilitychange', () => setVisible(!document.hidden));
  setVisible(true);
}

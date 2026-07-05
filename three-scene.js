/* =====================================================================
   three-scene.js — hero ink-dust drift (three.js from CDN, ES module)

   Crimson particles drifting slowly upward through a dark volume, like
   ink dust caught in studio light, with subtle rotation and cursor
   parallax. The playbook's "dust drift" recipe — calmer than the wave,
   fits luxury/moody verticals. Self-hosted, no Spline, no watermark.

   All motion is a pure function of the rAF timestamp (no incremental
   state), so stepped/virtual-clock capture renders it deterministically.

   Guardrails:
   - skips entirely on prefers-reduced-motion (CSS gradient stays)
   - fewer particles on small screens
   - pauses rendering when the hero is off-screen or the tab is hidden
   - DPR clamped to 2; CDN/WebGL failure leaves the gradient — nothing breaks
   ===================================================================== */

const canvas = document.getElementById("heroCanvas");
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canvas && !reduced) {
  init().catch(() => { /* CDN or WebGL unavailable — gradient fallback stays */ });
}

async function init() {
  const THREE = await import("https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js");

  const hero = canvas.parentElement;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x0c0a0a, 6, 22);

  const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 60);
  camera.position.set(0, 0, 13);
  camera.lookAt(0, 0, 0);

  // --- Dust volume: particles placed in a box, Y drift + slow swirl ---
  const small = window.innerWidth < 768;
  const COUNT = small ? 900 : 1600;
  const BOX = { x: 30, y: 18, z: 14 };
  const positions = new Float32Array(COUNT * 3);
  const seeds = []; // per-particle: baseX, baseY, baseZ, driftSpeed, swayPhase
  for (let i = 0; i < COUNT; i++) {
    const bx = (Math.random() - 0.5) * BOX.x;
    const by = (Math.random() - 0.5) * BOX.y;
    const bz = (Math.random() - 0.5) * BOX.z;
    positions[i * 3] = bx;
    positions[i * 3 + 1] = by;
    positions[i * 3 + 2] = bz;
    seeds.push(bx, by, bz, 0.25 + Math.random() * 0.5, Math.random() * Math.PI * 2);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: 0xcf3f4a,
    size: 0.075,
    sizeAttenuation: true,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  // --- Cursor parallax (lerped so it feels weighty, not twitchy) ---
  let targetX = 0, targetY = 0;
  window.addEventListener("pointermove", (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 1.4;
    targetY = (e.clientY / window.innerHeight - 0.5) * 0.8;
  }, { passive: true });

  // --- Resize to the hero box ---
  function resize() {
    const w = hero.clientWidth, h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener("resize", resize, { passive: true });
  resize();

  // --- Pause when hero is off-screen or tab hidden ---
  let heroVisible = true;
  new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; }).observe(hero);

  const pos = geo.attributes.position;
  const wrapY = (y) => ((y + BOX.y / 2) % BOX.y + BOX.y) % BOX.y - BOX.y / 2;
  function frame(t) {
    requestAnimationFrame(frame);
    if (!heroVisible || document.hidden) return;
    const time = t * 0.001;
    for (let i = 0; i < COUNT; i++) {
      const bx = seeds[i * 5], by = seeds[i * 5 + 1], bz = seeds[i * 5 + 2];
      const speed = seeds[i * 5 + 3], phase = seeds[i * 5 + 4];
      pos.array[i * 3] = bx + Math.sin(time * 0.3 + phase) * 0.6;
      pos.array[i * 3 + 1] = wrapY(by + time * speed);
      pos.array[i * 3 + 2] = bz + Math.cos(time * 0.22 + phase) * 0.4;
    }
    pos.needsUpdate = true;
    points.rotation.y = time * 0.04;
    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (-targetY - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);
}

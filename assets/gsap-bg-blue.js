// GSAP Starred Blue Carpet Background Animation MEJORADO
const canvas = document.getElementById('gsap-bg-canvas');
const ctx = canvas.getContext('2d');
let dpr = window.devicePixelRatio || 1;
let width = 0, height = 0;
function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(dpr, dpr);
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle config mejorado
const PARTICLE_COUNT = 160; // más partículas
const particles = [];
function randomBlue() {
  // Blue color con más variedad y más claros
  const blues = [
    '#7dd3fc', // sky-300
    '#38bdf8', // sky-400
    '#0ea5e9', // sky-500
    '#60a5fa', // blue-400
    '#2563eb', // blue-600
    '#a5f3fc', // cyan-200
    '#bae6fd', // sky-200
    '#e0f2fe'  // sky-100
  ];
  return blues[Math.floor(Math.random() * blues.length)];
}
for (let i = 0; i < PARTICLE_COUNT; i++) {
  const size = Math.random() * 5 + 2.5; // más grandes
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: size,
    color: randomBlue(),
    alpha: Math.random() * 0.1 + 0.1, // opacidad muy alta (0.9 a 1.0)
    scale: Math.random() * 0.8 + 0.8,
    speed: Math.random() * 0.5 + 0.2, // más rápidas
    drift: (Math.random() - 0.5) * 0.4
  });
}
// GSAP animation mejorada
particles.forEach(p => {
  gsap.to(p, {
    duration: gsap.utils.random(4, 10),
    repeat: -1,
    y: `+=${gsap.utils.random(-120, 180)}`,
    x: `+=${gsap.utils.random(-80, 80)}`,
    alpha: gsap.utils.random(0.9, 0.1), // opacidad animada muy alta
    scale: gsap.utils.random(0.7, 1.5),
    yoyo: true,
    ease: 'sine.inOut',
    delay: gsap.utils.random(0, 6)
  });
});
function drawParticles() {
  ctx.clearRect(0, 0, width, height);
  for (const p of particles) {
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r * p.scale, 0, Math.PI * 2);
    ctx.closePath();
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 32; // más blur
    ctx.fillStyle = p.color;
    ctx.fill();
    ctx.restore();
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();

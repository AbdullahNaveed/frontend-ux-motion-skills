const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const canvas = document.querySelector('#field');
const ctx = canvas.getContext('2d');
let width, height, pointer, frame;
function draw() {
  frame = 0;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#6b4cb5';
  for (let i = 0; i < 120; i++) {
    const x = width * (.10 + (i % 12) * .07);
    const y = height * (.14 + Math.floor(i / 12) * .08);
    const dx = pointer ? x - pointer[0] : 0;
    const dy = pointer ? y - pointer[1] : 0;
    const force = pointer ? Math.max(0, 1 - Math.hypot(dx, dy) / 90) : 0;
    ctx.beginPath();
    ctx.arc(x + dx * force, y + dy * force, 2 + force * 3, 0, Math.PI * 2);
    ctx.fill();
  }
}
function queue() { if (!frame) frame = requestAnimationFrame(draw); }
function fit() {
  width = canvas.clientWidth;
  height = canvas.clientHeight;
  const ratio = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  queue();
}
function reset() { pointer = null; queue(); }
canvas.addEventListener('pointermove', (event) => {
  if (reduced.matches || event.pointerType === 'touch') return;
  const { left, top } = canvas.getBoundingClientRect();
  pointer = [event.clientX - left, event.clientY - top];
  queue();
});
canvas.addEventListener('pointerleave', reset);
canvas.addEventListener('pointercancel', reset);
reduced.addEventListener('change', reset);
if ('ResizeObserver' in window) new ResizeObserver(fit).observe(canvas);
else window.addEventListener('resize', fit);
fit();

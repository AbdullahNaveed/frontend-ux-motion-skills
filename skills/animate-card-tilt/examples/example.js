const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const hit = document.querySelector('#hit');
const card = document.querySelector('#card');
const clamp = (n) => Math.max(0, Math.min(1, n));
function reset() {
  card.style.removeProperty('--rx');
  card.style.removeProperty('--ry');
}
hit.addEventListener('pointermove', (event) => {
  if (reduced.matches || event.pointerType === 'touch') return;
  const { left, top, width, height } = hit.getBoundingClientRect();
  card.style.setProperty('--rx', ((.5 - clamp((event.clientY - top) / height)) * 10) + 'deg');
  card.style.setProperty('--ry', ((clamp((event.clientX - left) / width) - .5) * 10) + 'deg');
});
hit.addEventListener('pointerleave', reset);
hit.addEventListener('pointercancel', reset);
reduced.addEventListener('change', reset);

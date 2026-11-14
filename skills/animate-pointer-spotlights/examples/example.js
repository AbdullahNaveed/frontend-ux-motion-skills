const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const spot = document.querySelector('#spot');
function reset() {
  ['--x', '--y', '--glow'].forEach((name) => spot.style.removeProperty(name));
}
spot.addEventListener('pointermove', (event) => {
  if (reduced.matches || event.pointerType === 'touch') return;
  const rect = spot.getBoundingClientRect();
  spot.style.setProperty('--x', ((event.clientX - rect.left) / rect.width * 100) + '%');
  spot.style.setProperty('--y', ((event.clientY - rect.top) / rect.height * 100) + '%');
  spot.style.setProperty('--glow', 1);
});
spot.addEventListener('pointerleave', reset);
spot.addEventListener('pointercancel', reset);
reduced.addEventListener('change', reset);

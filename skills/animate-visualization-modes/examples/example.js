const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const map = document.querySelector('#map');
const buttons = [...document.querySelectorAll('[data-mode]')];
const dots = Array.from({ length: 6 }, () => {
  const dot = document.createElement('i');
  dot.className = 'dot';
  map.append(dot);
  return dot;
});
function setMode(mode) {
  const circle = mode === 'circle';
  dots.forEach((dot, i) => {
    const angle = i * Math.PI / 3;
    dot.style.left = (circle ? 50 + Math.cos(angle) * 25 : 15 + i * 14) + '%';
    dot.style.top = (circle ? 50 + Math.sin(angle) * 30 : 50) + '%';
  });
  buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
  document.querySelector('#status').textContent = circle ? 'Six points arranged in a circle.' : 'Six points in a row.';
}
buttons.forEach((button) => button.addEventListener('click', () => setMode(button.dataset.mode)));
setMode('row');

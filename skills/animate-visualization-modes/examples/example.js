const map = document.querySelector('#map');
const buttons = [...document.querySelectorAll('[data-mode]')];
const modes = {
  row: { label: 'Points in a row.', point: (i) => [12 + i * 7, 50] },
  orbit: {
    label: 'Points orbit a common center.',
    point: (i) => [50 + Math.cos(i * Math.PI / 6) * 34, 50 + Math.sin(i * Math.PI / 6) * 33]
  },
  fan: {
    label: 'Points fan outward from the base.',
    point: (i) => {
      const angle = (i / 11 - 0.5) * Math.PI * 0.86;
      return [50 + Math.sin(angle) * 41, 85 - Math.cos(angle) * 68];
    }
  },
  grid: { label: 'Points form a grid.', point: (i) => [23 + (i % 4) * 18, 22 + Math.floor(i / 4) * 28] }
};

const dots = Array.from({ length: 12 }, () => {
  const dot = document.createElement('i');
  dot.className = 'dot';
  map.append(dot);
  return dot;
});
function setMode(mode) {
  const { point, label } = modes[mode];
  dots.forEach((dot, i) => {
    const [x, y] = point(i);
    dot.style.left = x + '%';
    dot.style.top = y + '%';
  });
  buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
  document.querySelector('#status').textContent = label;
}
buttons.forEach((button) => button.addEventListener('click', () => setMode(button.dataset.mode)));
setMode('row');

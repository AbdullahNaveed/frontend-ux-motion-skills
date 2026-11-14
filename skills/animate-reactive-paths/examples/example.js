const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const route = document.querySelector('#route');
const line = route.querySelector('polyline');
const group = route.querySelector('g');
const rest = [[35,82],[95,50],[160,66],[220,42],[280,72],[360,52]];
const nodes = rest.map(() => {
  const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('r', 6);
  group.append(dot);
  return dot;
});
function render(pointer) {
  const points = rest.map(([x, y]) => {
    const weight = pointer ? Math.max(0, 1 - Math.hypot(pointer.x - x, pointer.y - y) / 88) : 0;
    return [x, y + (pointer ? Math.max(-24, Math.min(24, pointer.y - y)) * weight : 0)];
  });
  line.setAttribute('points', points.map((point) => point.join(',')).join(' '));
  points.forEach(([x, y], index) => {
    nodes[index].setAttribute('cx', x);
    nodes[index].setAttribute('cy', y);
  });
}
route.addEventListener('pointermove', (event) => {
  if (reduced.matches || event.pointerType === 'touch') return;
  const matrix = route.getScreenCTM();
  if (matrix) render(new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse()));
});
route.addEventListener('pointerleave', () => render());
route.addEventListener('pointercancel', () => render());
reduced.addEventListener('change', () => render());
render();

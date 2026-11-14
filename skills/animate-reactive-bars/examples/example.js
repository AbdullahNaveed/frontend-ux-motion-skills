const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const chart = document.querySelector('.histogram');
const bars = [...chart.children];
function reset() { bars.forEach((bar) => bar.style.removeProperty('--stretch')); }
chart.addEventListener('pointermove', (event) => {
  if (reduced.matches || event.pointerType === 'touch') return;
  const { left, width } = chart.getBoundingClientRect();
  const position = (event.clientX - left) / width * bars.length;
  bars.forEach((bar, index) => {
    const strength = Math.max(0, 1 - Math.abs(index + .5 - position) / 2);
    bar.style.setProperty('--stretch', 1 + strength * .22);
  });
});
chart.addEventListener('pointerleave', reset);
chart.addEventListener('pointercancel', reset);
reduced.addEventListener('change', reset);

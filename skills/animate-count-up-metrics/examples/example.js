const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const visual = document.querySelector('#number');
const format = new Intl.NumberFormat(document.documentElement.lang);
const value = 1280;
let frame;
function finish() { cancelAnimationFrame(frame); visual.textContent = format.format(value); }
function play() {
  finish();
  if (reduced.matches) return;
  const start = performance.now();
  function tick(now) {
    const p = Math.min(1, (now - start) / 850);
    visual.textContent = format.format(Math.round(value * (1 - (1 - p) ** 3)));
    if (p < 1) frame = requestAnimationFrame(tick);
  }
  frame = requestAnimationFrame(tick);
}
document.querySelector('#replay').addEventListener('click', play);
reduced.addEventListener('change', finish);
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    play();
  });
  observer.observe(visual);
}

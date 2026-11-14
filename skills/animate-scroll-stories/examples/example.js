const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const steps = [...document.querySelectorAll('.step')];
const readout = document.querySelector('.readout');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const active = entries.find((entry) => entry.isIntersecting);
    if (active) readout.textContent = active.target.querySelector('h2').textContent + ' preview';
  }, { rootMargin: '-24% 0px -58% 0px' });
  steps.forEach((step) => observer.observe(step));
}

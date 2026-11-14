const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const flip = document.querySelector('#flip');
const toggle = document.querySelector('#toggle');
toggle.addEventListener('click', () => {
  const connected = flip.classList.toggle('active');
  toggle.setAttribute('aria-pressed', String(connected));
  document.querySelector('#result').textContent = connected ? 'Connected badge' : 'Studio badge';
});

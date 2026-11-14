const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const belt = document.querySelector('#belt');
const pause = document.querySelector('#pause');
belt.classList.add('running');
pause.addEventListener('click', () => {
  const paused = belt.classList.toggle('paused');
  pause.setAttribute('aria-pressed', String(paused));
});

const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const hero = document.querySelector('#hero');
const pause = document.querySelector('#pause');
hero.classList.add('running');
pause.addEventListener('click', () => {
  pause.setAttribute('aria-pressed', String(hero.classList.toggle('paused')));
});

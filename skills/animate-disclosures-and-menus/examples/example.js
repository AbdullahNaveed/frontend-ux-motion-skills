const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const menu = document.querySelector('#menu');
menu.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !menu.open) return;
  menu.open = false;
  menu.querySelector('summary').focus();
});

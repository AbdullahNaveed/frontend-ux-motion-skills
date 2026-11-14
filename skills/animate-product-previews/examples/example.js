const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const disclosure = document.querySelector('details');
disclosure.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !disclosure.open) return;
  disclosure.open = false;
  disclosure.querySelector('summary').focus();
});

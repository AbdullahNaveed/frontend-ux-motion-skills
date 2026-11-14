const button = document.querySelector('button');

button.addEventListener('click', () => {
  const paused = document.querySelector('main').classList.toggle('paused');
  button.setAttribute('aria-pressed', String(paused));
});

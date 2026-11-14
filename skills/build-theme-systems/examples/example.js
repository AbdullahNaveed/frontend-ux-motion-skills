const toggle = document.querySelector('#theme');
toggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  toggle.setAttribute('aria-pressed', String(isDark));
});

const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const indicator = document.querySelector('#indicator');
let animation;
function stop() { animation?.cancel(); }
document.querySelector('#replay').addEventListener('click', () => {
  stop();
  if (reduced.matches || document.hidden) return;
  animation = indicator.animate([
    { transform: 'translateX(0)' },
    { transform: 'translateX(48px)' },
    { transform: 'translateX(0)' }
  ], { duration: 420, easing: 'ease-out' });
});
document.addEventListener('visibilitychange', stop);
reduced.addEventListener('change', stop);

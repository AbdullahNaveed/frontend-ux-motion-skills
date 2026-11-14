const reduced = matchMedia('(prefers-reduced-motion: reduce)');

let animation;
document.querySelector('#draw').addEventListener('click', () => {
  animation?.cancel();
  if (reduced.matches) return;
  const path = document.querySelector('#drawing path');
  animation = path.animate([{ strokeDasharray: '1', strokeDashoffset: '1' }, { strokeDasharray: '1', strokeDashoffset: '0' }], { duration: 1000, easing: 'ease-out' });
});
reduced.addEventListener('change', () => animation?.cancel());

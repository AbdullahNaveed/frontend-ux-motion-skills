const reduced = matchMedia('(prefers-reduced-motion: reduce)');

let animations = [];
function stop() {
  animations.forEach((animation) => animation.cancel());
  animations = [];
}
document.querySelector('#replay').addEventListener('click', () => {
  stop();
  if (reduced.matches) return;
  const beats = [...document.querySelectorAll('.beat')];
  animations = beats.map((beat, index) => beat.animate(
    [{ opacity: .35, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }],
    { delay: index * 125, duration: 350, fill: 'backwards', easing: 'ease-out' }
  ));
  animations.push(document.querySelector('.meter span').animate(
    [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
    { delay: 280, duration: 360, fill: 'backwards' }
  ));
});
reduced.addEventListener('change', stop);

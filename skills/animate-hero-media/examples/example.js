const reduced = matchMedia('(prefers-reduced-motion: reduce)');

let scenes = [];
function stop() {
  scenes.forEach((scene) => scene.cancel());
  scenes = [];
}
document.querySelector('#play').addEventListener('click', () => {
  stop();
  if (reduced.matches) return;
  scenes = [...document.querySelectorAll('.poster span')].map((step, index) => step.animate(
    [{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(-12px)', opacity: .7 }, { transform: 'translateY(0)', opacity: 1 }],
    { duration: 480, delay: index * 260, easing: 'ease-in-out' }
  ));
});
reduced.addEventListener('change', stop);

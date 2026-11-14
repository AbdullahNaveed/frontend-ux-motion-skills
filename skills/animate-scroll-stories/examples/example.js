const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const steps = [...document.querySelectorAll('.step')];
const readout = document.querySelector('.readout');
const screenTitle = readout.querySelector('strong');
const screenCopy = readout.querySelector('p');
let pendingFrame = 0;
let activeStep;
let animation;

function update() {
  pendingFrame = 0;
  const marker = innerHeight * 0.42;
  const next = steps.findLast((step) => step.getBoundingClientRect().top <= marker) ?? steps[0];
  if (next === activeStep) return;

  activeStep = next;
  screenTitle.textContent = next.querySelector('h2').textContent;
  screenCopy.textContent = next.querySelector('p').textContent;
  animation?.cancel();
  if (!reduced.matches) {
    animation = readout.animate([{ opacity: 0.7 }, { opacity: 1 }], { duration: 180 });
  }
}

function queueUpdate() {
  if (!pendingFrame) pendingFrame = requestAnimationFrame(update);
}

addEventListener('scroll', queueUpdate, { passive: true });
addEventListener('resize', queueUpdate);
reduced.addEventListener('change', () => animation?.cancel());
update();

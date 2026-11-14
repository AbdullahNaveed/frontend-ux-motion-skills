const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const gallery = document.querySelector('.gallery');
const slides = [...gallery.children];
const [previous, next] = document.querySelectorAll('[data-direction]');
let current = 0;
function update(index) {
  current = index;
  previous.disabled = current === 0;
  next.disabled = current === slides.length - 1;
}
for (const button of [previous, next]) {
  button.addEventListener('click', () => {
    const index = Math.max(0, Math.min(slides.length - 1, current + Number(button.dataset.direction)));
    gallery.scrollTo({ left: slides[index].offsetLeft - slides[0].offsetLeft, behavior: reduced.matches ? 'instant' : 'smooth' });
    update(index);
  });
}
let settle;
gallery.addEventListener('scroll', () => {
  clearTimeout(settle);
  settle = setTimeout(() => update(Math.round(gallery.scrollLeft / gallery.clientWidth)), 120);
});

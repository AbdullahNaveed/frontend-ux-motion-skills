const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const feedback = document.querySelector('#feedback');
const spark = document.querySelector('#spark');
let animation;
document.querySelector('#complete').addEventListener('click', () => {
  feedback.textContent = 'Review complete.';
  animation?.cancel();
  if (!reduced.matches) animation = spark.animate([
    { transform: 'scale(.6)', opacity: .45 },
    { transform: 'scale(1.4)', opacity: 1 },
    { transform: 'scale(1)', opacity: 1 }
  ], { duration: 430, easing: 'ease-out' });
});
reduced.addEventListener('change', () => animation?.cancel());

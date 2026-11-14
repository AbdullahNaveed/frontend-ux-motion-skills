const reduced = matchMedia('(prefers-reduced-motion: reduce)');

if ('IntersectionObserver' in window && !reduced.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('enter');
      observer.unobserve(entry.target);
    });
  }, { threshold: .2 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

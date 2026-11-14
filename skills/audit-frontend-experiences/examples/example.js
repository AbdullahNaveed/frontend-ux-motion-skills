document.querySelector('#audit').addEventListener('click', () => {
  const checks = new Map([
    ['Document language is declared', Boolean(document.documentElement.lang)],
    ['Every image has an alt attribute', [...document.images].every((image) => image.hasAttribute('alt'))],
    ['No horizontal overflow at this viewport', document.documentElement.scrollWidth <= innerWidth],
    ['Every local fragment points to an element', [...document.querySelectorAll('a[href^="#"]')].every((link) => document.getElementById(link.hash.slice(1)))]
  ]);
  document.querySelector('#results').replaceChildren(...Array.from(checks, ([label, passes]) => {
    const row = document.createElement('li');
    row.textContent = (passes ? 'Pass · ' : 'Check · ') + label;
    return row;
  }));
});

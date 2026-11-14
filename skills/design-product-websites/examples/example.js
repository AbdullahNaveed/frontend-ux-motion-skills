document.querySelector('nav').addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (link) document.querySelector('#route-status').textContent = 'Viewing ' + link.textContent + '.';
});

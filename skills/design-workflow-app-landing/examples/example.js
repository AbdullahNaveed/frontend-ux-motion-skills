const preview = document.querySelector('#preview');
const buttons = [...preview.querySelectorAll('[data-step]')];
const panels = [...preview.querySelectorAll('[data-panel]')];
const status = preview.querySelector('#status');

function select(index, announce = true) {
  for (const [position, button] of buttons.entries()) {
    const selected = position === index;
    button.setAttribute('aria-pressed', String(selected));
    panels[position].classList.toggle('active', selected);
  }
  if (announce) status.textContent = 'Showing ' + buttons[index].textContent + '.';
}

preview.classList.add('enhanced');
for (const [index, button] of buttons.entries()) {
  button.addEventListener('click', () => select(index));
}
select(0, false);

const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(any-hover: hover) and (any-pointer: fine)');
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

function animatePointer(element, render) {
  let target = [0.5, 0.5, 0];
  let current = target.slice();
  let frame = 0;
  let previousTime = 0;
  let visible = true;
  const enabled = () => visible && !document.hidden && !reduced.matches && finePointer.matches;

  function tick(time) {
    frame = 0;
    const elapsed = previousTime ? Math.min(time - previousTime, 50) : 16;
    previousTime = time;
    const rate = 1 - Math.exp(-elapsed / 82);
    current = current.map((value, index) => {
      const remaining = target[index] - value;
      return Math.abs(remaining) < 0.002 ? target[index] : value + remaining * rate;
    });
    render(...current);
    if (current.some((value, index) => value !== target[index])) frame = requestAnimationFrame(tick);
    else previousTime = 0;
  }

  function reset() {
    target = [0.5, 0.5, 0];
    if (!enabled()) {
      cancelAnimationFrame(frame);
      frame = previousTime = 0;
      current = target.slice();
      render(...current);
    } else if (!frame) {
      frame = requestAnimationFrame(tick);
    }
  }

  element.addEventListener('pointermove', (event) => {
    if (!enabled() || event.pointerType === 'touch') return;
    const rect = element.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    target = [clamp((event.clientX - rect.left) / rect.width), clamp((event.clientY - rect.top) / rect.height), 1];
    if (!frame) frame = requestAnimationFrame(tick);
  });
  element.addEventListener('pointerleave', reset);
  element.addEventListener('pointercancel', reset);
  reduced.addEventListener('change', reset);
  finePointer.addEventListener('change', reset);
  document.addEventListener('visibilitychange', reset);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) reset();
    }).observe(element);
  }
}

function mountTeaser(card) {
  const surface = card.querySelector('.teaser-surface');
  animatePointer(card, (x, y, strength) => {
    surface.style.setProperty('--rx', `${(0.5 - y) * 8}deg`);
    surface.style.setProperty('--ry', `${(x - 0.5) * 9}deg`);
    surface.style.setProperty('--x', `${x * 100}%`);
    surface.style.setProperty('--y', `${y * 100}%`);
    surface.style.setProperty('--glow', strength);
    surface.style.setProperty('--lift', `${strength * -15}px`);
    surface.style.setProperty('--scale', 1 + strength * 0.055);
  });
}

const fieldModes = {
  orbit: 'Points orbit a shared center.',
  fan: 'Points fan out along five paths.',
  grid: 'Points form a regular grid.'
};

function mountArtwork(canvas) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const kind = canvas.dataset.art;
  const panel = canvas.parentElement;
  let width = 0;
  let height = 0;
  let point = [0.5, 0.5, 0];
  let mode = 'orbit';

  function circle(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function draw() {
    if (!width || !height) return;
    const [px, py, strength] = point;
    const mx = px * width;
    const my = py * height;
    const influence = (x, y) => Math.max(0, 1 - Math.hypot(x - mx, y - my) / 118) * strength;
    ctx.clearRect(0, 0, width, height);

    if (kind === 'path') {
      const points = Array.from({ length: 7 }, (_, i) => {
        const x = width * (0.10 + i * 0.133);
        const y = height * (0.42 + Math.sin(i * 1.15) * 0.20);
        return [x, y + (my - y) * influence(x, y) * 0.58];
      });
      ctx.beginPath();
      points.forEach(([x, y], index) => index ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#2b8067';
      ctx.stroke();
      points.forEach(([x, y]) => circle(x, y, 4.5 + 3 * influence(x, y), '#18694f'));
      return;
    }
    if (kind === 'bars') {
      const baseline = height * 0.70;
      [0.36, 0.55, 0.43, 0.70, 0.60, 0.79].forEach((value, index) => {
        const unit = width / 8;
        const x = unit * (1.1 + index);
        const size = value * height * 0.62 + height * 0.19 * influence(x, height * 0.43);
        ctx.fillStyle = index % 2 ? '#a54523' : '#cf734c';
        ctx.beginPath();
        ctx.roundRect(x, baseline - size, unit * 0.70, size, 4);
        ctx.fill();
      });
      return;
    }

    const count = kind === 'field' ? 72 : 132;
    for (let i = 0; i < count; i++) {
      let x = width * (0.11 + (i % 12) * 0.071);
      let y = height * (0.12 + Math.floor(i / 12) * (kind === 'field' ? 0.13 : 0.066));
      if (kind === 'field' && mode === 'orbit') {
        const radius = ((i % 6) + 1) / 6;
        const angle = i * 2.39996;
        x = width * 0.50 + Math.cos(angle) * width * 0.40 * radius;
        y = height * 0.46 + Math.sin(angle) * height * 0.36 * radius;
      }
      if (kind === 'field' && mode === 'fan') {
        x = width * (0.12 + 0.055 * (i % 15));
        y = height * (0.43 + (Math.floor(i / 15) - 2) * (i % 15) * 0.012);
      }
      const force = influence(x, y);
      circle(x + (x - mx) * force * 0.75, y + (y - my) * force * 0.75,
        2.2 + force * 2.6, i % 5 ? '#6555ab' : '#a16bc7');
    }
  }

  function fit() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    const pixelRatio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    draw();
  }
  animatePointer(panel, (...nextPoint) => {
    point = nextPoint;
    draw();
  });
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(panel);
  else window.addEventListener('resize', fit);
  fit();

  if (kind !== 'field') return;
  const group = panel.closest('.switcher');
  const buttons = [...group.querySelectorAll('[data-mode]')];
  const status = group.querySelector('#field-status');
  for (const button of buttons) {
    button.addEventListener('click', () => {
      mode = button.dataset.mode;
      for (const option of buttons) option.setAttribute('aria-pressed', String(option === button));
      status.textContent = fieldModes[mode];
      draw();
    });
  }
}

document.querySelectorAll('[data-motion]').forEach(mountTeaser);
document.querySelectorAll('[data-art]').forEach(mountArtwork);

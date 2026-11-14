---
name: animate-svg-path-drawing
description: Implement or review progressive SVG strokes, charts, and route illustrations. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# SVG line drawing

1. Normalize path length using pathLength or measure the rendered geometry.
2. Keep a complete static stroke as the default.
3. Start your data title and explanation in HTML and provide a reduced-motion fallback.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Replay and inspect the end of the curve, then run the example in reduced motion.

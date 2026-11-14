---
name: animate-canvas-particles
description: Implement or review pointer repulsion and dot fields. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Reactive canvas particles

1. Build deterministic rest coordinates and compute influence by distance.
2. Scale the backing store for device pixels and draw in CSS pixels.
3. Schedule redraw only on input or resize, and supply a neutral composition on touch and reduced motion.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Move inside the field and leave it. Confirm the exact neutral drawing returns.

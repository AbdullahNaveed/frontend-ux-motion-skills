---
name: animate-ambient-backgrounds
description: Implement or review hero auroras, morphing blobs, and breathing backgrounds. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Ambient backgrounds

1. Move a small number of decorative layers using transforms and opacity.
2. Keep text contrast independent of the animation phase.
3. Offer pause for sustained movement and a static composition for reduced motion.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Toggle pause during a cycle and inspect text against each color position.

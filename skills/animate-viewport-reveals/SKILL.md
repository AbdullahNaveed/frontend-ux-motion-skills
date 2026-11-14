---
name: animate-viewport-reveals
description: Implement or review scroll-triggered entrances and staggered section reveals. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Viewport reveals

1. Start with readable content and animate only a supporting visual or subtle offset.
2. Cap stagger across a group, trigger once, and keep entrances short.
3. Skip the animation when reduced motion is active or the observer is unavailable.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Reload with scripts disabled and use a reduced-motion browser context.

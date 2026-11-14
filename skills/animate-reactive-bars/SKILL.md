---
name: animate-reactive-bars
description: Implement or review hover-responsive decorative histograms and bar previews. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Reactive bar illustrations

1. Keep factual bar values fixed and attach motion to decorative samples.
2. Use one common baseline and bounded scale changes.
3. Reset on pointer exit and skip motion on touch or reduced-motion systems.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Move between adjacent bars and confirm the baseline stays fixed.

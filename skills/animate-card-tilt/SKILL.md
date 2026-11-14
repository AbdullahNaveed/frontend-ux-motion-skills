---
name: animate-card-tilt
description: Implement or review pointer card tilt, depth, or parallax. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Pointer tilt

1. Measure a stationary wrapper and tilt only its visual child.
2. Clamp normalized coordinates and cap rotation around 5 degrees.
3. Keep action targets stable and reset on leave or cancellation.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Sweep across the wrapper edges, then use Tab and Enter with the pointer elsewhere.

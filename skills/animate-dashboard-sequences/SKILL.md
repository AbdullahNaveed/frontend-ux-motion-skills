---
name: animate-dashboard-sequences
description: Implement or review staged mock dashboards, task rows, chips, and progress bars. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Dashboard choreography

1. Write a timeline with one visual beat per state change.
2. Reserve layout before scheduling transforms, opacity, or progress fill.
3. Cancel an unfinished run before replay, and show the final dashboard in reduced motion.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Replay before the previous sequence ends and check the final progress value.

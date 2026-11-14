---
name: animate-hero-media
description: Implement or review frame-based hero animations, posters, and product videos. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Hero media timelines

1. Separate the hero's static message from the decorative sequence.
2. Design animation beats at explicit frame boundaries and reserve aspect ratio.
3. Use a poster when optional media fails, and require a user action if motion is substantial.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Try replay twice, disable motion, and verify the static composition conveys the same workflow.

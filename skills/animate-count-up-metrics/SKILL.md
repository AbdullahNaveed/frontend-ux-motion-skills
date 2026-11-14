---
name: animate-count-up-metrics
description: Implement or review animated statistics and numeric interpolation. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Count-up metrics

1. Put the final value in initial HTML and expose a separate decorative counter.
2. Use elapsed time and a locale-aware formatter.
3. Finish at the exact value and skip intermediate announcements.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Reload without script, test reduced motion, and replay to confirm the final count.

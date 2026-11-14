---
name: animate-seamless-marquees
description: Implement or review logo belts, tickers, and infinite loop tracks. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Seamless marquees

1. Use two equal-width content groups and move the track by exactly one group.
2. Hide the duplicate from accessibility and keep it free of focus targets.
3. Give the user persistent pause and show one wrapping group in reduced motion.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Pause with the keyboard, inspect the seam during a loop, and check the reading order.

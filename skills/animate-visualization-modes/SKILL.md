---
name: animate-visualization-modes
description: Implement or review interactive graphic layouts and mode switches. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Visualization mode changes

1. Use explicit buttons with aria-pressed or the appropriate selection semantics.
2. Preserve object identity across layouts so changed positions are legible.
3. Describe the selected mode in text and offer immediate changes in reduced motion.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Change modes with the keyboard and confirm exactly one button is pressed.

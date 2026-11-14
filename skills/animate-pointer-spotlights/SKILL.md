---
name: animate-pointer-spotlights
description: Implement or review cursor-following gradients and card glows. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Pointer spotlight

1. Position an isolated gradient using local CSS percentages.
2. Keep text on a stable surface and keep the glow out of hit testing.
3. Give focus a distinct outline and use a neutral gradient for touch.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Move between two cards. Confirm the glow resets on leave and never blocks the link.

---
name: animate-product-previews
description: Implement or review hover lifts and zoomed phone or dashboard previews. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Product preview lift

1. Clip only the decorative art so focus rings and content stay visible.
2. Move the inner mockup with transform and keep the preview control outside the crop.
3. Give the same preview details to click, touch, and keyboard users.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Open the disclosure with Space at a narrow width and confirm the card stays readable.

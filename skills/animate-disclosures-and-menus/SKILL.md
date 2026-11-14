---
name: animate-disclosures-and-menus
description: Implement or review animated menus, popovers, and accordion panels. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Disclosure and menu motion

1. Use native disclosure semantics when possible and keep the trigger stable.
2. Animate the panel after it opens and preserve instant interaction.
3. Keep closed content out of the tab order and return focus on Escape when appropriate.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Use Space, Tab, and Escape, and confirm the next Tab skips closed links.

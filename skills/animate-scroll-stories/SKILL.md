---
name: animate-scroll-stories
description: Implement or review sticky step previews and scroll-linked product walkthroughs. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Sticky scroll stories

1. Keep step content in document order and use one visible active step.
2. Drive the preview only when active identity changes.
3. Collapse to in-flow content at small widths and provide stable anchor links.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Follow step links, scroll backwards, and check that a narrow viewport retains each step.

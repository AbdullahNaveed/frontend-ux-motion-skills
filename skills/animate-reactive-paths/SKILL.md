---
name: animate-reactive-paths
description: Implement or review pointer-reactive node paths and route illustrations. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Reactive paths and nodes

1. Store resting geometry independently of pointer offsets.
2. Map influence by distance and bound offsets to preserve layout.
3. Label illustrative geometry and preserve the route's meaning in text.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Confirm nodes and path agree at every position and fields reset on pointer exit.

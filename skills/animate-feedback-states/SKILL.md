---
name: animate-feedback-states
description: Implement or review progress pulses, completion accents, and celebration bursts. Use when a website needs this effect with accessible input, motion preferences, and resilient defaults.
---

# Feedback microinteractions

1. Tie feedback to real operation states and expose a concise status in text.
2. Use a short finite effect and cancel an unfinished effect before replay.
3. Keep the completed state perceivable with animation disabled.

## Apply the example

Open [example.html](examples/example.html) directly in a browser. Read [example.js](examples/example.js) for the interaction and inspect the HTML for the baseline state and CSS. Adapt the example to the existing component and event lifecycle. Remove subscriptions and cancel pending work when a framework component unmounts.

## Verify

Press the control quickly several times and confirm the status and effect remain in sync.

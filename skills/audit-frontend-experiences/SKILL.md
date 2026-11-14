---
name: audit-frontend-experiences
description: Audit or troubleshoot frontend UI and UX for responsive layout, accessibility, keyboard navigation, touch interactions, reduced motion, performance, and indexable initial content. Use for final QA, design review, and regressions after a website build.
---

# Frontend UX and Quality Audit

Open the [runnable example](examples/example.html) and inspect its [script](examples/example.js) to see the baseline behavior.

1. Establish the target URL or local route, viewport and browser support, user journeys, and what changed. Capture reproducible evidence from the rendered page and identify checks blocked by the environment.
2. Test primary navigation, CTA destinations, card links, disclosures, and forms with pointer, touch, and keyboard. Verify name, role, state, focus order, Escape behavior and focus restoration where applicable.
3. Check widths around actual layout thresholds, including a narrow mobile viewport and zoom. Check text contrast and focus against both themes and moving backgrounds. Confirm touch can reach every action without depending on hover.
4. Enable reduced motion and verify CSS, JavaScript, and media separately. Check content with JavaScript disabled or delayed. Verify that static HTML contains key content when routes are expected to be indexable.
5. Profile motion while actively moving the pointer or scrolling and after settling. Compare against the baseline, check layout shift during media load, and verify offscreen work and event cleanup. Record the device and whether numbers are lab or field measurements.
6. Report defects in priority order with reproduction steps, expected result, observed result, and fix. Retest the same scenario after edits. Keep claims limited to tested viewports, browsers, and interactions.

Use the [browser audit matrix](references/browser-audit.md) for reproducible checks and evidence.

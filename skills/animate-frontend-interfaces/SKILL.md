---
name: animate-frontend-interfaces
description: Implement or refine frontend motion for animated cards, pointer tilt and spotlight effects, reactive canvas, scroll-linked stories, section reveals, animated product previews, or hero media. Use when motion needs accessible fallbacks and lifecycle controls.
---

# Frontend Motion and Microinteractions

Open the [runnable example](examples/example.html) and inspect its [script](examples/example.js) to see the baseline behavior.

1. Assign each effect a job such as showing depth, clarifying a state change, or previewing a workflow. Sketch rest, active, reset, and reduced-motion states before choosing a rendering method.
2. Use CSS transitions for local state, a frame loop for smoothed input, IntersectionObserver for visibility, and canvas for many decorative marks. Reuse the host project's motion library when it solves sequencing or layout transitions.
3. Keep the interactive hit area stationary. Normalize the pointer from its untransformed bounds, clamp the input, and apply small rotations to an inner layer. Move the spotlight with the same coordinates. Reset on exit or cancellation and stop frames when the visual settles.
4. Treat touch, keyboard, and motion preferences as separate inputs. Provide an explicit action wherever motion reveals useful content. Enable optional tilt only for a fine hover pointer. Respond to changes in reduced-motion preference and keep a static frame visible.
5. Keep headlines, key values, and actions present before hydration. For media, reserve dimensions, provide a usable poster, and verify playback and fallback on target browsers. For canvas, cap device pixel ratio and suspend animation when offscreen or the document is hidden.
6. Check that adjacent cards respond independently, neutral state returns on exit, and navigation works during motion. Test touch, keyboard, reduced motion, hidden tabs, and offscreen effects. Record the actual interaction when visual behavior is part of the deliverable.

Use the [motion recipes](references/motion-recipes.md) for implementation patterns and fallback details.

# Motion recipes

| Pattern | Input and output | Static behavior |
| --- | --- | --- |
| Product teaser | Fine pointer drives inner tilt, spotlight position, and a small preview lift | Same card and links, with an explicit preview control where useful |
| Reactive feature art | Pointer inside the art surface influences nearby dots or nodes | Draw a neutral composition and expose the feature explanation in HTML |
| Sticky story | Scroll selects the active step and updates the adjacent preview | Keep every step in reading order and offer step controls where needed |
| Viewport reveal | Observer adds an enhancement class once | Content starts readable and remains available without observer support |
| Animated hero media | Optional short sequence illustrates the workflow | Reserve its aspect ratio and provide a poster with equivalent meaning |

## Implement the pointer loop

1. Read the stationary wrapper bounds. Normalize client coordinates by subtracting the left and top edges and dividing by width and height. Clamp to the unit interval.
2. Write the target coordinates to local mutable state and schedule a single animation frame. Lerp using elapsed time for consistent response across refresh rates. Map the centered coordinate to a small angular range. Put the resulting transform and light coordinates on a visual child.
3. Draw canvas in CSS pixels. Resize the backing store with a capped device pixel ratio. Distinguish resize, input, and drawing so idle frames stop once the target is reached.
4. Reset the target on pointer exit or cancellation. Cancel work when the component is offscreen, the document is hidden, or reduced motion is enabled. Draw one neutral frame on reset. Disconnect observers and remove listeners on unmount.
5. Test two neighboring cards, a quick diagonal sweep, exit at the edge, repeated re-entry, and keyboard navigation during animation.

## Sequence effects

- Animate a preview or supporting visual where possible. Keep essential text and controls visible through hydration.
- For a mobile story, prefer manual steps. If it advances automatically, offer persistent pause where applicable and keep step navigation predictable.
- Keep numeric content accurate in HTML. Animate a decorative presentation layer only when the effect earns its place. Avoid announcing each intermediate count.
- Use a poster for video with blocked autoplay, unsupported formats, or reduced motion. Test actual alpha playback if the composition depends on transparency.
- Check WCAG's conditions for automatically moving, blinking, or scrolling content. For nonessential motion triggered by interaction, support the reduced-motion preference or an equivalent control.

[High-performance CSS animations](https://web.dev/articles/animations-guide) · [Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) · [Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions)

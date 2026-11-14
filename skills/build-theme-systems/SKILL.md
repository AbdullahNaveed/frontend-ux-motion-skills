---
name: build-theme-systems
description: Build or refine light and dark frontend design systems using semantic color tokens, responsive typography, surface hierarchies, grids, cards, and component states. Use for theme implementation, visual consistency, and responsive styling.
---

# Frontend Theme Systems

Open the [runnable example](examples/example.html) and inspect its [script](examples/example.js) to see the baseline behavior.

1. Inventory existing component variants, CSS variables, and typography. Pick the visual hierarchy for the page before adding values. Give each new token a semantic role tied to a component or surface.
2. Define canvas, surface, elevated surface, text, muted text, border, accent, on-accent, and focus roles. Test real foreground/background pairs for both schemes. Include default, hover, focus, selected, disabled, and error states where the component supports them.
3. Build a dark palette through surface luminance and edge contrast. Reserve glows for decorative accents. Build a light palette through restrained tonal surfaces and localized color. Put readable text on a predictable surface when the art behind it moves.
4. Let the content determine layout thresholds. Use fluid gutters and type within bounded ranges, grid columns that can collapse, and stable preview aspect ratios. Preserve source order and prevent transformed cards from covering neighboring actions.
5. Compose static layout, pointer transforms, and preview transforms on separate layers. Keep a stable hit box and a visible focus ring, even when the visual layer clips overflow.
6. Inspect dense and sparse cards, long labels, touch, zoom, both schemes, and any RTL routes. Reuse the same component API across themes.

Use the [theme recipes](references/theme-recipes.md) for token examples, component states, and layout checks.

# Theme recipes

Use a single component vocabulary and substitute semantic tokens at the theme boundary. Keep section themes scoped so a dark panel on a light page can inherit its own text, border, and focus roles.

| Role | Dark treatment | Light treatment |
| --- | --- | --- |
| Canvas | Quiet near-black field | Pale neutral or subtly tinted field |
| Surface | Slightly lifted panel with a visible edge | White or lightly tinted panel |
| Elevated surface | Distinct value behind a preview | Border, tonal separation, and restrained shadow |
| Accent | Saturated trace on the edge or in a preview | Localized emphasis and selected states |
| Focus | Explicit high-contrast ring outside the control | Explicit high-contrast ring against page and card |

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
}

.card {
  min-inline-size: 0;
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border);
}

:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 4px;
}
```

Keep radius, type scale, and spacing consistent across cards, then let the preview distinguish each feature. Clip inside the preview, where it protects the composition and leaves the focus ring free. Use logical CSS properties and verify wraps with long labels and right-to-left text when supported.

Check text contrast against the real painted background. For standard WCAG AA text, use at least 4.5:1 for normal text and 3:1 for large text. Apply the relevant non-text contrast requirements to control boundaries and meaningful graphics. [WCAG 2.2](https://www.w3.org/TR/WCAG22/)

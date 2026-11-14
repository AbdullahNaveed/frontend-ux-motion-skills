# Browser audit matrix

| Test | Reproduce | Pass condition |
| --- | --- | --- |
| Primary path | Start from the hero and complete the CTA in the test environment | Clear destination, useful feedback, recovery on errors |
| Narrow and wide | Inspect representative phone and desktop widths, then just below and above actual breakpoints | No unplanned horizontal scroll or clipped actions |
| Keyboard | Tab through navigation, card actions, and dialogs. Use Enter, Space and Escape where appropriate | Logical focus order, visible focus, and expected focus return |
| Touch | Tap card actions, scroll past animated art, rotate if relevant | No hover-only actions, accidental navigation, or scroll capture |
| Reduced motion | Set preference before load and toggle while the page is open | Stable artwork, readable content, and no residual optional motion |
| Progressive enhancement | Disable JavaScript, delay media, or block a source | Essential content and normal links remain available |
| Performance | Record a performance trace while moving over cards, then leave and scroll away | Motion settles, offscreen work stops, and layout remains stable |
| Search rendering | Inspect initial HTML, route status, title, canonical and intended robots behavior | Indexable routes expose real content and consistent metadata |

Test dialogs with the keyboard and verify focus return to the trigger. Test contrast on real surfaces and capture the particular state that fails. Report accessibility observations with tested criteria and scenarios. A manual pass covers those checks only.

When available, use field data for the 75th-percentile Core Web Vitals. The published good thresholds are LCP ≤ 2.5 s, INP ≤ 200 ms, and CLS ≤ 0.1. Keep lab results labeled with browser, device or emulation, and conditions. [Web Vitals](https://web.dev/articles/vitals)

[ARIA dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) · [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

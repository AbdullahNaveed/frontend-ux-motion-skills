# Frontend UX Motion Skills

![Frontend UX Motion Skills banner with three animated interface concepts](examples/banner.webp)

**28 agent skills for frontend development, UI/UX design, and web animation.** Build responsive landing pages, card hover effects, scroll animations, logo carousels, and interactive Canvas and SVG graphics. Each skill pairs implementation guidance for coding agents with a runnable HTML, CSS, and JavaScript example.

[Quick start](#quick-start) · [Choose a skill](#choose-a-skill) · [Live website examples](#live-website-examples) · [Skill directory](#skill-directory) · [License](#license)

## Quick start

**Open a browser example locally**

```bash
git clone https://github.com/AbdullahNaveed/frontend-ux-motion-skills.git
cd frontend-ux-motion-skills
```

Open `skills/animate-card-tilt/examples/example.html` in your browser. The demo needs no package install or build step. Read the [example JavaScript](skills/animate-card-tilt/examples/example.js) alongside the [skill instructions](skills/animate-card-tilt/SKILL.md).

**Use a skill with a coding agent**

Point your agent to the relevant `SKILL.md` in the checkout, or use the [Skills CLI](https://github.com/vercel-labs/skills) to install it into a supported agent such as Codex, Claude Code, or Cursor.

```bash
npx skills add AbdullahNaveed/frontend-ux-motion-skills --skill animate-card-tilt
```

Example prompt to adapt to your project.

> Use the card tilt skill on our product grid. Keep existing card links, use a stationary pointer target, and verify keyboard navigation, touch, and reduced motion.

For a scroll-driven product demo, use `animate-scroll-stories` to pin a preview beside the walkthrough. For a responsive light or dark landing page, start with `design-product-websites` and `build-theme-systems`.

## Choose a skill

| Goal | Start here |
| --- | --- |
| Plan a product landing page from the first viewport to the final CTA | [Product website design](skills/design-product-websites/SKILL.md) |
| Build a dark product-card grid with pointer depth and a phone preview | [Card tilt](skills/animate-card-tilt/SKILL.md), [spotlights](skills/animate-pointer-spotlights/SKILL.md), [preview lift](skills/animate-product-previews/SKILL.md) |
| Pin a product preview while users scroll through its features | [Sticky scroll stories](skills/animate-scroll-stories/SKILL.md) |
| Build a moving integrations carousel or logo marquee | [Seamless marquees](skills/animate-seamless-marquees/SKILL.md) |
| Build an interactive stats canvas with selectable arrangements | [Visualization modes](skills/animate-visualization-modes/SKILL.md), [reactive particles](skills/animate-canvas-particles/SKILL.md) |
| Check a motion-heavy landing page before release | [Frontend UX audit](skills/audit-frontend-experiences/SKILL.md), [motion lifecycle](skills/animate-frontend-interfaces/SKILL.md) |

## Live website examples

| Stacked workflow cards | Integration diagram |
| --- | --- |
| ![A workflow card rises to the front of the stack on hover](examples/live-captures/cashcycle-workflow.gif) | ![Signals travel along the integration diagram’s connectors](examples/live-captures/cashcycle-integrations.gif) |
| [Card stack skill](skills/animate-stacked-workflow-cards/SKILL.md) | [Animated connectors skill](skills/animate-integration-connectors/SKILL.md) |

### Feature card motion

![CashCycle’s forecasting card animates its projection on hover](examples/live-captures/cashcycle-forecasting-card.gif)

[Watch all six feature cards](examples/live-captures/README.md#feature-card-motion)

## Skill directory

Each folder contains a `SKILL.md`, agent metadata, and a browser-ready HTML and JavaScript example. The [motion recipes](skills/animate-frontend-interfaces/references/motion-recipes.md) and [browser audit guide](skills/audit-frontend-experiences/references/browser-audit.md) provide additional implementation and verification details.

### Product website design and UX

| Skill | When to use it | Example |
| --- | --- | --- |
| [Product website structure](skills/design-product-websites/SKILL.md) | Plan product messaging, proof, routes, and calls to action. | [HTML](skills/design-product-websites/examples/example.html) · [JS](skills/design-product-websites/examples/example.js) |
| [Workflow app landing pages](skills/design-workflow-app-landing/SKILL.md) | Demonstrate a repeatable job with sequential product screens. | [HTML](skills/design-workflow-app-landing/examples/example.html) · [JS](skills/design-workflow-app-landing/examples/example.js) |
| [Learning app landing pages](skills/design-learning-app-landing/SKILL.md) | Show curriculum progression and an accessible sample exercise. | [HTML](skills/design-learning-app-landing/examples/example.html) · [JS](skills/design-learning-app-landing/examples/example.js) |
| [Monitoring app landing pages](skills/design-monitoring-app-landing/SKILL.md) | Explain dashboard states, thresholds, and the next action. | [HTML](skills/design-monitoring-app-landing/examples/example.html) · [JS](skills/design-monitoring-app-landing/examples/example.js) |
| [Light and dark theme tokens](skills/build-theme-systems/SKILL.md) | Build responsive light and dark themes with semantic color tokens. | [HTML](skills/build-theme-systems/examples/example.html) · [JS](skills/build-theme-systems/examples/example.js) |
| [Basic frontend audit script](skills/audit-frontend-experiences/SKILL.md) | Review keyboard access, touch, contrast, overflow, and motion. | [HTML](skills/audit-frontend-experiences/examples/example.html) · [JS](skills/audit-frontend-experiences/examples/example.js) |

### Cards, navigation, and interaction

| Skill | When to use it | Example |
| --- | --- | --- |
| [Pointer tilt](skills/animate-card-tilt/SKILL.md) | Tilt a visual layer from a stationary pointer target. | [HTML](skills/animate-card-tilt/examples/example.html) · [JS](skills/animate-card-tilt/examples/example.js) |
| [Pointer spotlight](skills/animate-pointer-spotlights/SKILL.md) | Track the pointer with a gradient confined to a card. | [HTML](skills/animate-pointer-spotlights/examples/example.html) · [JS](skills/animate-pointer-spotlights/examples/example.js) |
| [Product preview lift](skills/animate-product-previews/SKILL.md) | Lift a clipped phone or dashboard preview on hover and focus. | [HTML](skills/animate-product-previews/examples/example.html) · [JS](skills/animate-product-previews/examples/example.js) |
| [Stacked workflow cards](skills/animate-stacked-workflow-cards/SKILL.md) | Promote a step in an overlapping stack using stable controls. | [HTML](skills/animate-stacked-workflow-cards/examples/example.html) · [JS](skills/animate-stacked-workflow-cards/examples/example.js) |
| [Disclosure and menu motion](skills/animate-disclosures-and-menus/SKILL.md) | Animate expandable content with predictable focus and Escape behavior. | [HTML](skills/animate-disclosures-and-menus/examples/example.html) · [JS](skills/animate-disclosures-and-menus/examples/example.js) |
| [Feedback microinteractions](skills/animate-feedback-states/SKILL.md) | Show clear, finite motion when an action changes state. | [HTML](skills/animate-feedback-states/examples/example.html) · [JS](skills/animate-feedback-states/examples/example.js) |
| [Icon flips](skills/animate-icon-flips/SKILL.md) | Use a two-face badge to illustrate a state change. | [HTML](skills/animate-icon-flips/examples/example.html) · [JS](skills/animate-icon-flips/examples/example.js) |

### Scroll animation and carousels

| Skill | When to use it | Example |
| --- | --- | --- |
| [Sticky scroll stories](skills/animate-scroll-stories/SKILL.md) | Pin a product screen beside a scroll-driven narrative. | [HTML](skills/animate-scroll-stories/examples/example.html) · [JS](skills/animate-scroll-stories/examples/example.js) |
| [Viewport reveals](skills/animate-viewport-reveals/SKILL.md) | Reveal supporting visuals when a section enters view. | [HTML](skills/animate-viewport-reveals/examples/example.html) · [JS](skills/animate-viewport-reveals/examples/example.js) |
| [Seamless marquees](skills/animate-seamless-marquees/SKILL.md) | Loop logo belts, market tickers, and integration rails with a pause control. | [HTML](skills/animate-seamless-marquees/examples/example.html) · [JS](skills/animate-seamless-marquees/examples/example.js) |
| [Swipe galleries](skills/animate-swipe-galleries/SKILL.md) | Use native scroll snapping with explicit previous and next actions. | [HTML](skills/animate-swipe-galleries/examples/example.html) · [JS](skills/animate-swipe-galleries/examples/example.js) |

### Canvas, SVG, and data visualization

| Skill | When to use it | Example |
| --- | --- | --- |
| [Reactive canvas particles](skills/animate-canvas-particles/SKILL.md) | Draw pointer-responsive particles and restore their resting positions. | [HTML](skills/animate-canvas-particles/examples/example.html) · [JS](skills/animate-canvas-particles/examples/example.js) |
| [Reactive paths and nodes](skills/animate-reactive-paths/SKILL.md) | Bend a decorative path around the pointer. | [HTML](skills/animate-reactive-paths/examples/example.html) · [JS](skills/animate-reactive-paths/examples/example.js) |
| [Reactive bar illustrations](skills/animate-reactive-bars/SKILL.md) | Scale decorative bars around a stable baseline. | [HTML](skills/animate-reactive-bars/examples/example.html) · [JS](skills/animate-reactive-bars/examples/example.js) |
| [Visualization mode changes](skills/animate-visualization-modes/SKILL.md) | Change layouts from labeled, keyboard-accessible controls. | [HTML](skills/animate-visualization-modes/examples/example.html) · [JS](skills/animate-visualization-modes/examples/example.js) |
| [Count-up metrics](skills/animate-count-up-metrics/SKILL.md) | Animate a displayed count while exposing its final value to assistive tech. | [HTML](skills/animate-count-up-metrics/examples/example.html) · [JS](skills/animate-count-up-metrics/examples/example.js) |
| [SVG line drawing](skills/animate-svg-path-drawing/SKILL.md) | Reveal a stroke along a normalized SVG path. | [HTML](skills/animate-svg-path-drawing/examples/example.html) · [JS](skills/animate-svg-path-drawing/examples/example.js) |
| [Animated integration connectors](skills/animate-integration-connectors/SKILL.md) | Move signals along a diagram with visible resting connectors. | [HTML](skills/animate-integration-connectors/examples/example.html) · [JS](skills/animate-integration-connectors/examples/example.js) |

### Hero motion and sequencing

| Skill | When to use it | Example |
| --- | --- | --- |
| [Dashboard choreography](skills/animate-dashboard-sequences/SKILL.md) | Sequence dashboard rows, chips, and progress indicators. | [HTML](skills/animate-dashboard-sequences/examples/example.html) · [JS](skills/animate-dashboard-sequences/examples/example.js) |
| [Ambient backgrounds](skills/animate-ambient-backgrounds/SKILL.md) | Animate hero lighting while keeping text legible. | [HTML](skills/animate-ambient-backgrounds/examples/example.html) · [JS](skills/animate-ambient-backgrounds/examples/example.js) |
| [Hero media timelines](skills/animate-hero-media/SKILL.md) | Build product preview timelines with a static poster state. | [HTML](skills/animate-hero-media/examples/example.html) · [JS](skills/animate-hero-media/examples/example.js) |
| [Motion preference and lifecycle](skills/animate-frontend-interfaces/SKILL.md) | Manage animations across reduced motion, visibility, and unmount. | [HTML](skills/animate-frontend-interfaces/examples/example.html) · [JS](skills/animate-frontend-interfaces/examples/example.js) |

## Contributing

For a new pattern, open an issue with what it should teach and where the existing catalog falls short. A pull request should include an agent instruction, a runnable example, and verification steps. For motion examples, test the resting state, keyboard and pointer controls where applicable, touch, and reduced motion. Use original demo content.

## Frequently asked questions

**Do the examples require React or an animation library?**

The examples use HTML, CSS, and browser APIs. You can adapt the interaction to the framework or motion library already in your project.

**What accessibility checks do the skills cover?**

The examples and audit guide cover keyboard focus, touch input, readable static states, and `prefers-reduced-motion`. Use the [frontend UX audit](skills/audit-frontend-experiences/SKILL.md) to verify those behaviors in your own implementation.

**Which parts of a production example can I reuse?**

Use the skill instructions and standalone scripts to recreate the interaction. The screenshots and GIFs illustrate how the patterns look on the live sites. See the license for the terms that apply to the reusable files.

## License

The [Frontend UX Motion Skills License](LICENSE) allows free personal and commercial project use, including paid client work. Keep the attribution and license notice when redistributing the materials, identify your changes, and credit the original project. Selling the materials as a skill pack or another paid resource is prohibited, including modified versions. The live website captures are shown for illustration and are excluded from this license.

---
name: awwwards-inspired-design-system
description: Use this skill whenever creating or modifying ANY visual/UI element on the site — pages, sections, components, cards, buttons, navigation, modals, forms, footers, or layout changes of any kind. Applies a bold, editorial, high-impact design language inspired by infracorp.global — governing typography scale, spacing rhythm, layout hierarchy, and scroll-reveal animation behavior — while strictly preserving the project's existing fonts and colors. Not limited to the homepage; trigger for any design/UI/styling work anywhere in the project.
--- 

# Awwwards-Inspired Design System

## Purpose
Apply a consistent, bold, editorial visual language across the entire site — using scale, weight, whitespace, and considered motion as the primary tools of hierarchy and delight — without altering the project's established fonts or colors. This skill defines a *style and structural approach* that applies sitewide, not a fixed page/section template. Content, page structure, and component inventory are project-specific and must be read from the existing codebase, not assumed.

## When This Triggers
Any task involving:
- New pages, sections, or components
- Redesigning or restyling existing UI (layout, spacing, typography changes)
- Buttons, forms, cards, navigation, modals, footers, headers
- Animation/motion work tied to UI
- Any request mentioning "design," "UI," "look and feel," "styling," "layout," or similar

This is not scoped to the homepage — it governs design decisions everywhere in the project.

## Before Making Any Changes
1. Read `CLAUDE.md` for project conventions and any documented design/animation patterns.
2. Read the existing component(s)/page file(s) being touched to understand current structure and content. Do not invent new sections, components, or reorder content unless explicitly instructed — this skill governs *visual/structural treatment*, not content architecture.
3. Read theme/config files (e.g. `tailwind.config.js`, CSS variable files, design tokens) to identify existing font families and color values.
4. Check what animation tooling already exists in the project (Intersection Observer hook, Framer Motion, GSAP, CSS transitions, etc.). Reuse it where it fits. It's fine to add a new library instead if it's a genuinely better fit for the effect you're going for — see Package Installs below.

## Hard Constraints
- **No new font families or font files.** Only use fonts already defined in the project's theme/config.
- **No new color values.** Only reference existing theme tokens/CSS variables — no new hex codes, no ad hoc colors.

## Package Installs
- You can install packages when they genuinely improve the result — no need to stop and ask first for reasonably-scoped, well-maintained libraries (e.g. Framer Motion, GSAP + ScrollTrigger, Lenis for smooth scroll, Embla for carousels, etc.).
- Prefer the smallest/lightest dependency that gets the effect right. Don't reach for a heavy library when a CSS transition or a few lines of Intersection Observer code does the same job.
- After installing something, briefly note in your response what you added and why — so it's visible, not silent.
- Still pause and ask first for anything unusually heavy or architecturally significant (e.g. a full 3D/WebGL engine like three.js, a CMS, a state management overhaul) — the bar is "would this surprise the user to find in package.json," not "is this a dependency at all."

## Typography
- Establish a clear, deliberate type-scale hierarchy appropriate to the element being worked on (e.g. page headline > section headline > subheading > body copy), with large jumps between tiers rather than incremental sizing.
- Headlines should be bold weight, large scale, with tightened letter-spacing/tracking at large sizes and generous line-height.
- Use only font families already defined in the project's theme.
- This applies to any UI text element — not just hero/page headlines — including card titles, modal headers, nav labels, etc., scaled appropriately to their context.

## Spacing & Layout
- Favor generous padding/whitespace around and within UI elements — spacing itself should communicate hierarchy and pacing.
- Distinct UI sections/components should read as clear visual "beats" primarily through spacing and type-scale changes rather than background color shifts — unless the existing palette already supports alternating light/dark sections, in which case reuse that pattern.
- Collapse multi-column layouts to single-column stacks on mobile, following existing breakpoints already used in the project.
- Boldness comes from scale, spacing, *and* well-placed moments of motion or detail — not from cramming in decoration everywhere. One strong idea per section beats five small ones.

## Animation & Interactive Detail
Motion here should feel intentional and a little surprising — like the site has ideas — not decorative noise. Aim for "a few moments that make someone pause," not "movement everywhere."

### Baseline reveal pattern (use as the default rhythm)
- **Fade + translate on entry:** elements animate from a slightly offset/transparent state (opacity 0, translateY 20–30px) to fully visible/in-place as they enter the viewport. Ease-out, not linear or bouncy.
- **Word-by-word / staggered headline reveal:** large headlines reveal staggered — word by word or in small groups — with a slight incremental delay (~0.08s) so it reads as "assembling."
- **Staggered group reveals:** sibling elements (card rows, stat lists) stagger in with a small delay between each.
- **Trigger mechanism:** Intersection Observer (or the project's scroll-trigger equivalent) toggles an "in-view" state at a consistent threshold (~20% visible).
- **Consistent rhythm:** duration, easing, and trigger threshold stay consistent sitewide — this is what makes it feel premium instead of random.

### Where to push further
This is where you're encouraged to try things, not just default to the baseline pattern everywhere:
- Custom cursor states on hover (e.g. a cursor that expands, shows text, or follows with a lag) for key interactive zones.
- Text/element distortion or magnetic-hover effects on nav items, buttons, or feature links.
- Horizontal or diagonal scroll sections for galleries/case-study lists, as a break from vertical rhythm.
- Marquee/ticker elements for things like client logos, tags, or stats.
- Scroll-linked transforms (parallax depth, scale/rotate tied to scroll position, pinned sections) for a hero or one standout section per page.
- Page/route transitions if the framework supports it cleanly.
- Cursor-following or scroll-velocity-reactive image distortion (e.g. WebGL shader ripple on hover, using a lightweight lib like `ogl` or a simple GLSL shader) — 2D-plane effects like this are fine even though full 3D scenes are not (see below).

Pick **one or two** of these per page/section to actually commit to, rather than sprinkling all of them thinly. The goal is a couple of genuinely memorable moments, framed by the calmer baseline pattern everywhere else.

### What to still avoid
- Full 3D scenes, WebGL globes, particle/star fields, or anything that turns into a visual centerpiece unrelated to content. Flag it to the user explicitly if a request seems to call for this rather than assuming it's wanted.
- Motion on every single element with no variation in rhythm — that reads as busy, not premium.
- Effects that fight the editorial/whitespace feel (e.g. dense particle noise behind large type).

### Implementation priority order
1. Use an existing animation library/utility already in the project if it fits.
2. For simple fade/translate/stagger, a no-dependency Intersection Observer + CSS transitions approach is fine and often best.
3. For the "push further" effects above, install what actually fits well (Framer Motion, GSAP+ScrollTrigger, Lenis, etc. — see Package Installs).

### Motion hygiene (non-negotiable regardless of how bold the effect is)
- Respect `prefers-reduced-motion`: animations must be reduced or disabled for users with that preference.
- No layout shift on animation trigger — animate `transform`/`opacity`, not properties that affect layout flow.
- Every custom/experimental effect should have a graceful fallback or simply not render if it can't run smoothly (don't let a shader effect jank on low-power devices).

## Accessibility
- Maintain semantic heading hierarchy (single `h1` per page, proper nesting for sections/subsections).
- Ensure interactive elements (buttons, links, form controls) are keyboard-navigable with visible focus states — including any custom cursor/hover effects, which must not break keyboard/focus interaction.
- Verify color contrast using only the existing palette.

## UX Intent
Every interaction with the UI — scrolling, navigating, hovering, opening a modal — should feel confident, editorial, and deliberate. Hierarchy comes from scale and spacing; delight comes from a small number of well-chosen motion moments, not from decoration or color. The site should feel like it has a point of view, not like every trick was used at once.

## Workflow When This Skill Is Triggered
1. Read `CLAUDE.md`, relevant component/page files, theme/config, and existing animation utilities.
2. Confirm actual structure/content with the user if not already clear from the codebase — do not assume a template.
3. Apply typographic scale, spacing, and animation treatment as defined above, using only existing fonts and colors.
4. If installing a package, do it and briefly note what/why in your response (pause first only for the heavy/architectural cases described above).
5. Refactor repeating UI patterns into reusable components where applicable.

## Acceptance Criteria
- [ ] Clear, deliberate type-scale hierarchy applied, scaled to the element/context
- [ ] Only existing fonts and colors used — no new tokens introduced
- [ ] Generous, consistent spacing rhythm applied
- [ ] Baseline reveal animation applied consistently; 1–2 standout motion moments per page, not motion everywhere
- [ ] Any new package briefly explained in the response; heavy/architectural additions confirmed with user first
- [ ] Reduced-motion preference respected
- [ ] No layout shift on animation trigger
- [ ] Fully responsive across existing breakpoints
- [ ] Semantic heading hierarchy maintained
- [ ] Structure reflects actual project content — not a fixed external template
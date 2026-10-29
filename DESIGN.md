---
name: Ajal P
description: A single-page portfolio set as one unbroken line; everything made hangs on it as a node, and a pulse rides the line as the page scrolls.
colors:
  bg: "#f5f5f2"
  surface: "#ebebe7"
  ink: "#17181a"
  muted: "#5f625d"
  past: "#cfd1cc"
  accent: "#1f5eff"
  accent-ink: "#ffffff"
typography:
  display:
    fontFamily: "Chivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 1rem + 6.6vw, 6.5rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Chivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 3.2vw, 4rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Chivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Chivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
  label:
    fontFamily: "Chivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0em"
    fontVariation: "tabular-nums"
rounded:
  none: "0px"
spacing:
  line: "4px"
  dot: "14px"
  axis-gap: "1.5rem"
  margin: "clamp(1.25rem, 3.3vw, 3rem)"
  gutter: "clamp(1rem, 2vw, 2rem)"
  section: "clamp(7rem, 12vw, 12rem)"
  axis: "42%"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  button-inverse:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3rem"
  button-inverse-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
  link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  link-hover:
    textColor: "{colors.accent}"
  node-dot:
    backgroundColor: "{colors.past}"
    rounded: "{rounded.none}"
    size: "{spacing.dot}"
  node-dot-open:
    backgroundColor: "{colors.accent}"
  row:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "1.4rem 3rem 1.2rem 1.5rem"
  row-alt:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  row-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.none}"
    padding: "0.6rem 1rem"
---

# Design System: Ajal P

## Overview

**Creative North Star: "The Pipeline"**

One unbroken 4px line runs the full height of the page on a vertical axis at 42% of the viewport width, and everything Ajal has made hangs on it as a node. A fixed 140px blue pulse rides the line in step with the scroll; the node whose dot it passes opens. The page is almost entirely type: no imagery, no illustration, no card grid, no hero picture. Paper, ink, one grey for the past, and a single blue that belongs to the line and whatever the line is currently pointing at.

Density is low and the rhythm is long. Sections are separated by a vertical interval of 7 to 12rem, the hero leaves its upper 60% empty so the line can enter alone, and the sticky asides to the left of the axis hold one short paragraph each. Everything right of the axis sits exactly 1.5rem off it, which makes the line read as the left edge of the content rather than as decoration.

Interaction replaces decoration. Controls invert on hover (blue to ink, ink to paper), the open node's dot swells and turns blue, stack items slide a quarter-em to the right and disclose their note, contact rows invert whole and push their arrow. Everything is hard-edged and flat: square corners, flat fills, no shadows, no gradients, no hairlines. Confirmed rejections from the build: a dark ground, app screenshots or drawn phone fragments, a stretched wordmark, badges, and card layouts.

**Key Characteristics:**
- One 4px line (`--line`) on a 42% axis (`--axis`), 1.125rem on screens under 64em; it is the only rule on the page.
- A fixed 140px blue pulse rides the line with the scroll; the nearest node opens.
- Accent blue appears only on the pulse, the open node, the primary button, focus rings, selection and hover.
- One family, Chivo variable: 500 for the statement and all headings, 400 for text; sentence case throughout.
- Flat, square, hairline-free. Alternating rows use a surface tint, never a border.
- Every animation is gated behind `prefers-reduced-motion: no-preference`; the pulse is removed entirely under `reduce`.

## Colors

A near-achromatic warm-grey palette with one saturated blue that is reserved for the line's pulse and for whatever is active.

### Primary
- **Pulse Blue** (`accent`): the fixed pulse on the line, the open node's dot and heading, the primary "Email me" button, the focus ring (3px solid, 4px offset), text selection, and every hover colour shift. It is never used as a ground for a section or a text colour at rest.
- **Pulse Ink** (`accent-ink`): white text on the blue button only.

### Neutral
- **Paper** (`bg`): page ground on html and body; also the text colour on inverted (ink) surfaces: the footer, the skip link, and any row or button on hover. Declared as `theme-color` in the head.
- **Surface** (`surface`): the one tint step above paper. Used only to band every even row in the "Earlier things I made" and "Reach me" lists so rows separate without a border.
- **Ink** (`ink`): all headings and body text at rest, the footer ground, and the hover ground of buttons and rows.
- **Muted Ink** (`muted`): supporting text: the hero intro sentence, node roles and notes, stack notes, project descriptions and years, the "still" contact row (location), and the OG card's secondary lines.
- **Past** (`past`): the line itself, every closed node's dot, and the scrollbar thumb. It marks what has already been passed.

### Named Rules
**The One Blue Rule.** Blue belongs to the pulse and to the thing the pulse is pointing at. At rest, exactly one node dot and one button carry it; everything else earns it only through hover, focus or selection. Never tint a background or a paragraph with it.

**The Invert Rule.** Hover and press do not lighten or glow; they swap ground and ink wholesale. Blue button to ink/paper, paper button to blue/white, paper row to ink/paper. Hover rules are wrapped in `(hover: hover) and (pointer: fine)` so touch devices never see a stuck state.

## Typography

**Display Font:** Chivo (variable, 100 to 900, self-hosted at /fonts/chivo.woff2, `font-display: swap`) with Helvetica Neue, Arial, sans-serif
**Body Font:** Chivo (same file)
**Label/Mono Font:** none; tabular figures via `font-variant-numeric: tabular-nums` on `.fig`, `.node__left`, and project years.

**Character:** One grotesque at two weights. Weight 500 carries the statement and every heading in sentence case with tightening tracking as size grows; weight 400 carries all reading text. There is no uppercase anywhere, no second family, and no kickers or eyebrows above headings.

### Hierarchy
- **Display** (500, `clamp(3.5rem, 1rem + 6.6vw, 6.5rem)`, 0.95, -0.04em): the hero statement only ("Apps people / actually use."), two lines, each masked and rising on load. On screens under 64em it steps down to `clamp(2.6rem, 11.5vw, 5rem)`. The 404 page reuses it.
- **Headline** (500, `clamp(2rem, 1.3rem + 3.2vw, 4rem)`, 1, -0.03em): section headings (`.head`), stack item names, contact rows (-0.035em) and the footer invitation. Contact rows drop to `clamp(1.4rem, 6.6vw, 3.5rem)` under 64em.
- **Title** (500, `clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)`, 1.2, -0.02em): node names (the toggle buttons), project names in "Earlier things", and the "Reach me" heading.
- **Body** (400, `clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)`, 1.5): all paragraphs, the top row and nav links, node leads and roles, and the buttons (which take 500). Node bodies cap at 60ch; asides at 30ch (40ch under 64em); the hero intro at 30ch with line-height 1.45.
- **Label** (400, `clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)`, 1.5, tabular figures): node years and durations, stack notes, the footer legal line. Sentence case, never tracked or uppercased.

### Named Rules
**The Two Weights Rule.** Chivo at 500 for anything that names or declares (statement, headings, node names, buttons, figures, toggle text); 400 for anything you read. No other weight is used even though the file carries 100 to 900.

**The Tighter-As-It-Grows Rule.** Tracking tightens with size: 0 at body and label, -0.02em at title, -0.03em at headline, -0.04em at display. Line-height closes the same way: 1.5, 1.2, 1, 0.95.

## Layout

The page is a two-column grid whose first column is the axis: `grid-template-columns: var(--axis) 1fr` with `--axis: 42%`. The 4px line sits at the right edge of that column; content to the right of it begins 1.5rem off the axis, content to the left of it (hero intro, node years, sticky asides) is padded by the page margin (`--margin`, `clamp(1.25rem, 3.3vw, 3rem)`) on the outside and 1.5rem on the axis side. There is no max-width container; the layout is held by the axis and the margins.

Vertical rhythm is a single section interval, `--section` (`clamp(7rem, 12vw, 12rem)`), applied as top padding to every section and as top margin to the footer. Inside sections, rows are tight: nodes 1.75rem top and bottom, project rows 1rem, contact rows 1.4rem over 1.2rem, stack items 0.35rem. The top row sits 2.25rem from the top edge; the hero is `min-height: 84svh`, content aligned to the end so the upper portion stays empty.

Sticky asides: the "What I work with" and "Earlier things" paragraphs stick at `top: 6rem` in the left column while their lists scroll on the right.

**Responsive:** one breakpoint, `max-width: 63.9em`. Below it the axis moves to the left margin (`--axis: 1.125rem`, `--margin: 2.625rem`), every grid collapses to one column padded `calc(var(--axis) + 1.5rem)` on the left, the top-row CTA hides and the hero CTA shows full width (max 24rem), the hero becomes `calc(100svh - 6.5rem)` tall and ends 1.75rem above the viewport bottom, asides lose their stickiness and move above their lists, and node metadata flows horizontally above the node body.

**Named rule:** **The Off-Axis Rule.** Anything right of the line starts exactly 1.5rem from the axis, at every breakpoint. Alternating surface bands start at the axis plus the line's width so the line stays visible against them.

## Elevation & Depth

There are no shadows and no gradients anywhere. Depth is conveyed by two devices only: the surface tint (`surface`) on alternate rows, and wholesale inversion (ink ground, paper text) on the footer and on hover. The footer's own copy of the line is a mid-grey (#4a4d4b, hard-coded) so the axis continues across the dark ground; its legal line is a lighter grey (#a7aaa5, hard-coded). The line and pulse sit at `z-index: 0` under content at `z-index: 1`, so the line passes behind every surface band and every node dot sits on top of it.

### Named Rules
**The No-Shadow Rule.** Nothing casts a shadow, at rest or on hover. If a surface needs to separate, it takes the surface tint or inverts.

**The No-Hairline Rule.** The 4px line is the only rule on the page. Rows, lists and sections are never divided by borders; they are divided by the surface band or by whitespace.

## Shapes

Everything is square. `rounded` has one value, 0, and no element overrides it. Buttons are hard rectangles 3rem tall; node dots are 14px squares centred on the line (scaled 1.5x when open); the pulse is a 4px by 140px bar; the contact arrow is a stroked SVG with square caps and mitred joins (`stroke-width: 2.2`). The only non-rectangular silhouette is that arrow. Text never wraps around anything; there is no clipping other than the overflow masks used for the statement's line-rise animation.

## Components

### Buttons
Hard, inverting rectangles that read as controls because they are the only filled blocks on a type-only page.
- **Shape:** square corners (0), 3rem minimum height, 0 1.5rem horizontal padding, inline-flex centred, no wrap.
- **Primary (`.button`):** blue ground, white text, weight 500 at body size. Used for "Email me" in the top row (desktop), in the hero (mobile only), and on the 404 page.
- **Hover / Focus / Press:** hover swaps to ink ground and paper text (180ms ease on colour); press scales to 0.96 over 140ms with the out ease; focus is the global 3px blue outline at 4px offset.
- **Inverse (`.button--inverse`):** paper ground and ink text, used on the ink footer; hover swaps to blue ground and white text.

### Links
- **Style (`.link`):** inherit colour, underline at `text-underline-offset: 0.22em`, thickness 0.08em, underline colour transparent at rest.
- **Hover:** underline fades in to currentColor and the text turns blue (180ms). Used for the nav, the Macro and Cradle names, and footer social links.

### Node (signature)
The unit everything hangs on. A grid row split at the axis: years and duration on the left in label size (years in ink, duration right-aligned in muted), a 14px square dot centred on the line at `top: calc(1.75rem + 0.55em)`, and on the right a title-size toggle button, a muted role at body size, a lead paragraph, and a collapsible body.
- **States:** closed dot is `past`; open (`.is-open`) dot is blue and scaled 1.5x, the toggle text turns blue, and the body expands via `grid-template-rows: 0fr` to `1fr` over 500ms with the expo ease (inner content gets `visibility: hidden` while closed, delayed 500ms). Hover on a fine pointer turns the toggle blue.
- **Behaviour:** exactly one node is open at a time. The scroll-linked pulse opens whichever node's dot is nearest the pulse's centre (within 30% of viewport height), unless a node is pinned by click or hovered. Figures inside a node (`.fig`, tabular, weight 500) roll from 0 to their real value once over 700ms when the node first opens; the HTML always carries the final value.
- **No-JS:** every node renders open.

### Rows (contact and earlier things)
Full-width list rows that span from the axis to the right margin and invert as a whole on hover.
- **Contact row (`.row`):** headline-size text on the left, a 0.55em stroked arrow on the right, `1.4rem` over `1.2rem` padding, left padding `calc(var(--axis) + 1.5rem)`. Even rows take the surface tint and shift right by the line's width. Hover inverts to ink and paper and translates the arrow 0.5em right over 400ms. The non-link location row (`.row--still`) is muted and has no hover.
- **Project row (`.made__row`):** a two-column grid, title-size name over a muted description, year right-aligned in muted tabular figures, 1rem vertical padding. Even rows take the surface tint. Hover inverts to ink and paper; all children inherit the paper colour.

### Stack item
- **Style:** headline-size name at weight 500 with a muted label-size note. On fine pointers the note is hidden until hover or focus, then appears sliding in from -8px while the name turns blue and shifts 0.25em right (400ms out ease, `@starting-style` for the entry). On touch the note is always shown below the name. Items are focusable (`tabindex="0"`).

### Navigation
- **Top row:** a three-column grid (`axis | 1fr | auto`), 2.25rem from the top. Wordmark "Ajal P" at weight 500 in the left column padded by the margin; three `.link` items starting 1.5rem right of the axis with a `clamp(1rem, 2.5vw, 2.5rem)` gap; the primary button at the right margin. Fades in over 700ms after 200ms. Under 64em it stacks (wordmark over links, 0.75rem apart) and drops the button.
- **Skip link:** ink block with paper text, 0.6rem 1rem padding, parked off-screen at -4rem and dropped to the margin on focus.

### Line and pulse (signature)
- **Line (`.line`):** absolute, full page height, `left: var(--axis)`, 4px wide, `past` colour, drawn in from the top over 1400ms with the expo ease on load (scaleY from 0, 100ms delay).
- **Pulse (`.pulse`):** fixed, 4px by 140px, blue, translated by `--y` which the script sets to scroll progress times `(innerHeight - 140)`, so it travels from the top of the viewport to the bottom as the page is scrolled end to end. Transitioned 120ms linear. Hidden entirely under `prefers-reduced-motion: reduce`.

### Footer
Ink ground, paper text, `clamp(3rem, 8vw, 6rem)` top padding, 2.5rem bottom. The line continues through it as a #4a4d4b bar. A headline-size invitation (max 12ch) over an inverse button, right-aligned social links, and a muted legal line.

### Motion grammar
Three easings and three durations are tokens: `--ease-out` (0.22, 1, 0.36, 1), `--ease-expo` (0.16, 1, 0.3, 1), `--ease-in-out` (0.76, 0, 0.24, 1, declared but unused); `--t-press` 140ms, `--t-hover` 180ms, `--t-ui` 400ms. Load sequence: line draws (1400ms expo), statement lines rise through masks (900ms expo, 110ms stagger from 250ms), intro and CTA rise 12px (600ms, from 520ms / 620ms), top row fades (700ms). Scroll reveals: `[data-reveal]` rises 20px once when 5% intersects (600/800ms, 90ms stagger); list children slide in from -12px, row children from 16px, 70ms apart. All of it lives inside `prefers-reduced-motion: no-preference`.

## Do's and Don'ts

### Do:
- **Do** hang every new element on the axis: left column padded by `--margin` outside and 1.5rem inside, right column starting 1.5rem past the axis.
- **Do** separate repeated rows with the surface tint on even rows, offset by the line's width so the line stays visible.
- **Do** invert on hover (ground and ink swap) and keep hover rules inside `(hover: hover) and (pointer: fine)`.
- **Do** use Chivo 500 for names and headings and 400 for reading text, sentence case, with tracking from 0 to -0.04em as size grows.
- **Do** set figures in tabular numerals and write the final value in the HTML before any rolling animation.
- **Do** gate every animation behind `prefers-reduced-motion: no-preference` and keep the page fully readable with no script (nodes open, line visible).
- **Do** keep the accent to the pulse, the one open node, the primary button, focus, selection and hover.

### Don't:
- **Don't** add shadows, gradients, blurs or glows anywhere, including on hover.
- **Don't** draw borders or hairlines; the 4px line is the only rule on the page.
- **Don't** round a corner; every box, dot and button is square.
- **Don't** introduce a second colour, a second family, uppercase labels, kickers or eyebrows above headings.
- **Don't** add raster imagery, illustrations, app screenshots or drawn phone screens; the page is type and one line.
- **Don't** return to a dark page ground; ink ground is reserved for the footer and for hover inversion.
- **Don't** open more than one node at a time or let a node open without its dot turning blue.

---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface brief: / (the portfolio home page)

Scope: the single-page portfolio at src/pages/index.astro. Mode: Experience (the work leads; the interface recedes).

Audience and job: hiring managers and engineering leads deciding in one screen whether I (Ajal P) have shipped real things, then looking for evidence and a way to contact me. Action: email (mailto). Proof: Zorest (Macro, Cradle), XENA Intelligence, Revyu, CUSAT, the figures from the CV. Constraints from the second interview round (2026-10-29): light ground, not dark; minimal; no app illustrations or phone fragments; Macro and Cradle listed under Zorest the way XENA is listed, not as separate panels; no stretched wordmark; no "Two companies co-founded" badge; every word in my own first-person voice; many small interactions. Static Astro on GitHub Pages; SEO complete.

## Direction contract

THESIS: One unbroken line runs the whole page and everything I have made hangs on it as a node; a pulse travels the line as the visitor scrolls, and the node nearest the pulse (or under the cursor) opens. It refuses the card grid, the hero illustration, and the dark-with-glow look; the page is almost all type.

OWN-WORLD: Ground paper #f5f5f2, ink #17181a, muted #6b6e6a, line and past-node tone #cfd1cc, accent blue #1f5eff used only on the pulse, the open node's dot and heading, the primary button, and hover states. One family, Chivo (self-hosted variable), regular weight for text, 500 for the statement and headings, tracking -0.03em at display; sentence case (the dealt type system's black caps traded for weight 500 sentence case to keep the page minimal, recorded as a redraw). Square corners, flat fills, no shadows, no gradients, no hairlines; the one 4px line is the page's only rule. Figures tabular. Durations right-aligned against the margin.

STORY: The visitor reads "I build apps people actually use" and my one-sentence introduction, sees the line lead down to Zorest, now, and follows it back through XENA, Revyu and university while the pulse keeps pace; they skim what I work with, see the earlier things I made, and leave by the email row.

FIRST VIEWPORT: Dealt hero "Void, then statement on axis": top row 44px from the top on the page margins, wordmark "Ajal P" left, links Work / Stack / Contact starting on a vertical axis at 42% of the width, the Email me button at the right margin. The upper 60% holds only the row and the 4px line entering from the top edge on the axis. In the bottom third, from the axis: the statement on two lines at clamp(56px, 6.6vw, 104px), weight 500, tracking -0.04em, leading 0.95; left of the axis, bottom-aligned to its last baseline, one supporting sentence at 18–20px in the muted ink, max 32ch. The pulse is already moving down the line on load. Phone: axis at the left margin, top half empty, statement at 12.5vw, sentence and the full-width button below, ending 28px above the bottom edge.

FORM: The pipeline, candidate 7 of 7 on the round-three ordered grounded list (assigned by the re-roll). seed:9ec1e8c1fa598747. Raises kept from declined challengers: one unbroken line with a chase light (drum machine); one dot marks the active step (orizuru); colour only on the line and the open node, text achromatic (cloud edge); pressing inverts, hard control states (one-bit desktop); past roles embossed without colour (zoot handbill). Taste-skill composition: "Type and nothing else" (seed 209038942), palette redrawn to "Stone and blueprint" (paper ground kept lighter at #f5f5f2) because hot orange contradicts the minimal, light brief; type redrawn to Chivo. Signature interaction: the scroll-linked pulse and the node that opens as it passes; motion grammar: masked line rise on the statement, the line drawing in on load, nodes opening with a 500ms expo ease, hover states that invert, rolling figures once.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

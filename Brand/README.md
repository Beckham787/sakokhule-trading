# Sakokhule Trading — identity

**Status: mark chosen and signed off (2026-09-15). Not yet built into the site.**

The chosen mark is **Cut Layers Emblem** — four bars, right-aligned and
deepening, locked to the wordmark on a shared baseline. Picked by the client
(Lindokuhle) out of nine directions after an earlier round of five was
rejected.

## What's in here

| File | What it is |
|---|---|
| `brand-sheet.html` | The approved brand sheet — variants, rules, applications. Open in a browser. |
| `nine-directions.html` | The nine directions it was chosen from, kept for the record. |
| `marks/mark-4bar.svg` | Primary icon, full colour |
| `marks/mark-4bar-mono.svg` | Primary icon, one colour (`currentColor`) |
| `marks/mark-3bar.svg` | Small-size cut, full colour |
| `marks/mark-3bar-mono.svg` | Small-size cut, one colour (`currentColor`) |

Both HTML sheets pull Archivo / IBM Plex Mono / Fredoka / Quicksand from the
Google Fonts CDN. Offline they fall back to system faces and the wordmark
renders as a serif — that's the sheet, not the mark.

## The mark

Geometry lives in `marks/`, in a 100×100 box. The widest bar is 14 units, so
its round cap reaches x=3 and y=90 — every cap stays inside the box, which is
what stops it clipping when it's dropped into a tighter viewBox.

Bars, top to bottom, are the palette in order:

| Bar | Stroke | Colour | |
|---|---|---|---|
| 1 | 8 | `#3B322A` | Ink |
| 2 | 10 | `#6E6151` | Ink soft |
| 3 | 12 | `#51707C` | Clay blue |
| 4 | 14 | `#A55537` | Terracotta |

Ground is putty `#F3ECE0`, raised putty `#EAE0CE`. These are the tokens
already live in `app/globals.css` under `.clay` — blue and terracotta are the
*old* logo's steel and red, already darkened to clear 4.5:1 on putty. The mark
was built inside the existing palette on purpose: **swapping the logo needs no
repaint of the site.**

## The lockup

Horizontal (primary):

- Icon at `1.65em`, then a `0.5em` gap, then the text block.
- `SAKOKHULE` — Archivo 900, `letter-spacing: -0.025em`, `line-height: 0.9`.
- `TRADING (PTY) LTD` — IBM Plex Mono 600 at `0.3em` of the name's size,
  `letter-spacing: 0.11em`, `margin-top: 0.42em`, colour `#746A5F`.

Stacked variant: icon at `2.5em` above the same text block, centred.

Build the lockup as **HTML/CSS text, not SVG `<text>`** wherever possible.
SVG text doesn't wrap or auto-fit, and it silently clipped the wordmark to
"SAKOK" the first time this was drawn.

The full registered name — **(Pty) Ltd** — appears in every lockup. Client's
explicit instruction, and it matches what tender documents expect.

## The one rule

**Below ~24px on screen or ~10mm in print, switch to the three-bar cut.**

The four-bar mark's top bar is 8 units in a 100-unit box — at 16px that's
1.3px, and it either disappears or merges into its neighbour depending on the
printer. The three-bar version drops the weakest tone (ink soft), thickens
what's left, and keeps the ink → blue → terracotta signature.

**Clear space** is `x` on all sides, where `x` is the thickness of the bottom
terracotta bar. It scales with the mark, so there's one number, not a table.

## Application rules worth not re-deriving

- **Dark grounds** — reverse to a single putty tone. Blue and terracotta lose
  too much separation against dark to be worth keeping.
- **Plant** — two vinyl cuts, not one: full colour for light machine panels,
  single putty for dark. Keep it on the door's flat centre panel, never
  wrapped over a hinge line or rivet seam.
- **Hi-vis / PPE** — one-colour ink only. Terracotta on hi-vis lime is a bad
  pairing, and PPE gets embroidered in as few threads as possible anyway.
- **Favicon / app icon** — reversed on an ink tile, not bars on putty. A cream
  favicon disappears against a light browser tab (found and fixed on
  Izanolihle Roads, 2026-09-14 — don't repeat it here).
- **Rubber stamp** — wordmark only, no icon. At stamp resolution the bars fill
  in solid, and the registration number is what a clerk is checking for.

## Still open

1. **Typeface decision.** The site's display face is Fredoka; this lockup is
   Archivo. Either they coexist (mark in Archivo, headings stay Fredoka) or
   the whole site moves to Archivo and reads harder and more industrial. Not
   decided — it changes the site's temperature, not just the logo.
2. **Production files not cut yet.** No favicon set, no OG card, no header
   lockup wired into `globals.css`, no outlined-text lockup SVG for print.
   The wordmark in any production SVG needs its text converted to outlines so
   it doesn't depend on Archivo being installed.
3. **The old logo is still live** — `public/images/brand/logo.png` and
   `mark.png` are unchanged and still in use across the site.

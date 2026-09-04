# Sakokhule Trading — brand notes

Sister site to Izanolihle Roads — same director, same yard, same fleet, two
separate registered companies. The two sites deliberately share a visual
system (the group's own register) while each keeps its own accent colour, so
they read as related without being mistaken for one entity.

## Colour

`blue` is sampled directly from the client's own approved company-profile PDF
— the dominant chromatic pixel across the cover and section pages, measured
the same rigorous way Izanolihle Roads' amber was sampled from its logo:

```
dominant blue across the profile PDF: #0F8FD4
```

| Token          | Value     | Role                                  |
| -------------- | --------- | -------------------------------------- |
| `asphalt`      | `#131518` | The ground. Same as Izanolihle Roads.  |
| `asphalt-lift` | `#1B1E22` | Raised panels, image wells.            |
| `bitumen`      | `#0C0E10` | Footer, record strips.                 |
| `blue`         | `#0F8FD4` | Sampled brand accent.                  |
| `blue-lift`    | `#4FB4EF` | Hover only.                            |
| `bone`         | `#E8E6E1` | Primary text on dark.                  |
| `concrete`     | `#DEDBD4` | Light band surface.                    |
| `steel`        | `#9A968E` | Muted text on dark.                    |
| `slate`        | `#55585C` | Muted text on light.                   |

### Where blue is allowed

- **5.14:1 on asphalt** — passes for normal text on the dark ground.
- `blue-lift` (7.93:1) is used for hover states and any smaller text that
  wants extra headroom.

## Type

Identical system to Izanolihle Roads, down to the same self-hosted font
files — Archivo (display), Inter (body), IBM Plex Mono (the record face:
labels, dates, references, contract values). Two sites sharing one type
system is the point, not an oversight.

## The signature device: hazard stripe

Both sites' real material is hi-vis, road markings and hazard boards. The
approved Sakokhule profile PDF already uses a diagonal blue/black stripe band
across its cover — rather than inventing a separate motif for the website,
that band became the group's shared signature device (`HazardDivider.tsx`,
`.hazard-stripes` in globals.css): a section break drawn as pure CSS, no
image asset, holding up at any width. It appears on both sites now.

A second device, `.chainage`, stands in for a plain rule under a headline —
tick marks at even intervals, like a surveyor's distance markers, so the
site reads as measuring itself rather than just decorating a heading.

## The logo

No transparent/vector logo was supplied for Sakokhule Trading — only the
mark baked into the profile PDF, too small to extract cleanly. Same asset
gap as GMP Builders and (originally) Izanolihle Roads. Rebuilt in type
instead (`Wordmark.tsx`): SAKOKHULE in bone, TRADING in blue, matching the
two-tone treatment already approved on the client's own PDF cover, plus a
small diagonal mark at the same 45° angle as the hazard stripe.

**Ask the client for an SVG or transparent PNG of the actual mark** — it
would open up better options than a type-only lockup.

## Photography

Most plant photography is not new — it is copied verbatim from Izanolihle
Roads' own already-processed output (genuinely the same equipment, same
source photos; see lib/plant.ts). Only the paver photo is unique to this
site, supplied directly and processed fresh (`_source/paver-source.jpeg` →
`public/images/plant/paver.webp`).

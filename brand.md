# Sakokhule Trading — brand notes

**Fifth edition — Clay Style × Survey Line, the current homepage.**
Chosen 2026-09-08, after a proper comparison exercise: six fresh directions
were mocked up against the real record (not this brief's earlier ones),
two were shortlisted (Survey Line's title-block structure, Site Ledger's
job-register structure), Survey Line's structure was then run through all
twenty style treatments in the studio's standard list, and Clay Style —
soft, rounded, three-dimensional, every surface pressed rather than drawn
— was picked as the one. Built as `.clay` in `globals.css`, live at
`app/page.tsx`. Two rules carried over from the brief itself, not the
exercise: **no fleet or plant photographs** (the logo mark is the only
image on the page) and **no contract values** (the record states years
trading, contracts completed and the CIDB grading — never what any job was
worth). Palette still comes off the logo, same discipline as every edition
below: the steel ring softened into a dusty clay-blue, the red bars
softened into terracotta, on a warm putty ground. Type is Fredoka
(display) and Quicksand (body), self-hosted per `fonts/README.md`,
scoped to `.clay` only — the earthed inner pages below keep Source
Serif 4 / Inter untouched.

**Note on everything below this point:** it documents the second and
third editions faithfully, but the *fourth* edition it describes
(StoryScroll, one photograph told across the whole homepage) was itself
superseded by several more homepage explorations that were never written
up here — `.rig` (industrial hi-vis), `.dream` (surreal dreamscape),
`.mnml` (minimalist), `.flux` (futuristic HUD) and `.fxm` (futuristic ×
minimalist, the one actually live before this edition) — all still in
`globals.css`, all undocumented in this file until now. Treat the code as
the record of what shipped; treat this file as the record of *why*, which
lagged behind more than once. Don't assume the homepage still matches
this file's fourth-edition description — it hasn't for a while.

**Fourth edition — the homepage as one photograph.** Lindokuhle sent four
more photographs on 2026-09-06, already colour-enhanced on his end, meant
for the homepage rather than the fleet catalogue. The whole page is now told
through them: one picture holds the screen while the ground under it
changes as you scroll — arrival, the work, a machine that has done the
work, the next one arriving — see `components/StoryScroll.tsx`. The hero
carries no words at all now; the picture is the opening line. The homepage's
separate fleet grid and enquiries block are gone — both are a click away in
the header and footer, which is now a third its former height.

This pass also found and fixed a real layout bug, not a new one: the
label/value row shared by `FactList` and the contact page split its 4:8
proportion across a **12**-column grid with the page's own large gutter —
fine at full shell width, but 11 gutter-gaps at up to 4rem each is up to
704px of gap alone, which a narrower nested column (the /contact page's
7-of-12 split, 589px at 1440px wide) can't afford; every track collapsed to
0 and the value text spilled, unwrapped, straight across the next column.
That is almost certainly what "words on top of each other" was. Fixed by
using a 3-column grid (1:2 split, one gap either side) instead of 12 — same
proportion, two gaps instead of eleven, safe at any width. If a stacked
label/value pair is ever added elsewhere, give it 3 tracks, not 12.

**Third edition — earthed.** The second edition was paper-white and read
like a design studio rather than a company that moves dirt for a living. The
grounds are now the ones the company actually works on, sampled out of its
own photographs, and the dark is the building rather than the punctuation.

**Second edition, with the client's own identity in it.** The first edition
of this site was dark, uppercase and hazard-striped — a site hoarding, when
what a bid office needs to see is the head office. The second edition made it
paper, serif and hairline. On **2026-09-06** Lindokuhle supplied the real
logo and his own photographs for the first time, and the system was retuned
around them: the accent colour now comes off the mark, the fleet is his own
plant, and the company is described the way the logo describes it — **earth
moving and plant hire**, not "civil engineering & construction".

Sister site to Izanolihle Roads — same director, same yard, same fleet, two
separate registered companies. The two sites share one visual system (the
group's own register) with a different accent each. **Izanolihle Roads is to
be brought onto this system next**, so treat everything below as the group
standard, not as a one-off.

## The ground rules

1. **The dark ground is the building.** Dust-coloured bands are the rooms
   you stop and read in — roughly one light room per two dark ones.
2. **Headlines are sentence case.** Only mono labels are uppercase.
3. **No colour does structural work.** Hairlines and space do it. The accent
   appears on section numbers and links, and nowhere else.
4. **Contract values are set at body scale.** The work is the headline; the
   invoice is a fact in the margin.
5. **Photographs are photographs**, shown at full brightness with a caption.
   The exception is the homepage, told entirely as one photograph that
   changes under a scrim as you scroll (`components/StoryScroll.tsx`) — the
   arrival, not a slide. Its own first step, the hero, carries no scrim to
   speak of and no words at all; the darkening is only for the steps after
   it, where text sits over the picture.

## The logo

Supplied 2026-09-06, and the first real mark this company has had on the
site: a steel-blue ring around three bars and a rising arrow. It arrived as a
JPEG on a flat blue-grey ground, so `scripts/prep-logo.py` keys it off that
background into `public/images/brand/mark.png` (the emblem, 512px, used in
the header, the footer and as the favicon) and `logo.png` (the full lockup).

The site sets the **name** in Source Serif beside the mark rather than using
the logo's own baked-in lettering, which is a default grotesque at low
resolution and falls apart at header size. Mark carries the identity, type
carries the name.

**Still worth doing:** a vector redraw. It is a ring, three bars, a zigzag
and an arrow — simple geometry — and the supplied raster is the only version
in existence.

## Colour

The palette now comes off the logo itself. The earlier `#0F8FD4` was sampled
from the profile PDF's cover; a logo outranks a PDF, and the steel reads as
engineering where the cyan read as tech. It is split in two, because one
value cannot serve both grounds:

| Token          | Value     | Sampled from                              |
| -------------- | --------- | ----------------------------------------- |
| `pit`          | `#14110E` | Coal and shadow at the stockpile. The ground. |
| `pit-lift`     | `#1D1913` | Raised panels, image wells, the footer.   |
| `soil`         | `#6B4A30` | Haul-road red-brown under the grader.     |
| `dust`         | `#E8DFD2` | Road dust settled on paper. The light band. |
| `dust-lift`    | `#DED3C2` | The raised light band.                    |
| `ink`          | `#1A1611` | Text on dust. Warm, never black.          |
| `bone`         | `#EFE7DA` | Text on the pit.                          |
| `ochre`        | `#C08A3E` | Machine yellow. Accent on the dark (6.3:1). |
| `steel`        | `#275E7C` | The logo ring. Accent on dust (5.3:1).    |
| `flag`         | `#D82E0B` | The logo's red. **Reserved for the mark.** |

Nothing is pure white or pure black; every value carries some warmth. One
accent per ground and never the other's: ochre reads as hi-vis on the dark,
the logo's steel reads as engineering on the light, and neither has enough
contrast on the other side to be legal there. `flag` is never set as text
anywhere — the red lives inside the mark, which is what stops a two-colour
logo becoming a two-accent muddle.

The greys the photographs actually gave up (`#303030`–`#606060` at the
Nkomati stockpile, `#A87848`–`#C07848` on the haul road, `#C09048` on the
machines) are in `scripts/prep-assets.js` output if the palette ever needs
re-deriving.

### Grain

`.grain` lays one inline tile of fractal noise over the dark ground at 5%
opacity, `mix-blend-mode: overlay`. It is below the threshold of "texture"
and above the threshold of "dead colour", and it is most of the difference
between this edition and the flat one before it. Earth is not a flat fill.

### Semantic tokens

Components never name a literal colour. They read `--bg`, `--fg`,
`--fg-soft`, `--fg-mute`, `--hair`, `--hair-strong` and `--accent`. The
`.night` class re-points all seven, which is why a dark section is written
as `<section className="night">` and nothing else changes — every rule,
caption and accent inverts with it. Tailwind exposes them as `bg-bg`,
`text-fg`, `border-hair`, `text-accent` and so on.

Because they are `var()` values, Tailwind's slash-opacity (`text-fg/70`)
does **not** work on them. Use `fg-soft` and `fg-mute` instead.

## Type

| Role     | Face             | Notes                                        |
| -------- | ---------------- | -------------------------------------------- |
| Display  | Source Serif 4   | wght 420 by default, sentence case, `-0.014em`|
| Body     | Inter            | 400–700, 1rem / 1.65                          |
| Record   | IBM Plex Mono    | Labels, values, captions, index numbers       |

Source Serif 4 replaces Archivo. A grotesque set in uppercase reads as
signage; a text serif at 420, sentence case, with air around it, reads as a
company with a decade behind it. All three faces are self-hosted from
`fonts/` (the Google Fonts CDN hangs from this environment, and shipping the
files means the sister sites genuinely share a type system rather than
resembling one).

The mono is the one thing carried over unchanged from the first edition,
because it was the part that was right: an engineering document keeps its
numbers in a fixed-pitch face, and so does this.

## The devices

- **The index number.** Every section and list row carries one — `01`, `02` —
  hanging in the left margin. Clause number in the margin, clause beside it.
  It is what makes the site read as a specification rather than a brochure.
- **The chainage rule** (`.chainage`). A surveyor's distance markers standing
  in for a plain rule under a page title. Kept from the first edition, drawn
  finer: one hairline, ticks at even intervals.
- **The survey grid** (`.survey`). A drawing-paper grid at 38% opacity, used
  **once** — behind vision and mission on the company page. Using it twice
  would make it wallpaper.
- **Hairlines.** Every list, every ledger, every section boundary. One weight,
  one colour, no shadows and no boxes anywhere on the site.

Retired: the hazard stripe, the blue button slabs, the client marquee, the
plate gradients, the display-scale contract figures.

## The logo

Still no vector logo — only the mark baked into the profile PDF, too small
to extract. The lockup is therefore typographic and nothing else: the name
in the display serif over `CIVIL ENGINEERING & CONSTRUCTION` in the record
face. A letterhead, not a badge.

A small pavement-section mark (three stacked bars, thinning downward) was
drawn for the header and dropped: at 19px, three stacked bars read as a menu
button whatever they are meant to mean.

**Still worth asking the client for an SVG or transparent PNG of the actual
mark.**

## Client logos

None are reproduced, anywhere. No client supplied one, and a contractor
borrowing a client's mark makes a claim it has no right to make. Every
client is set in the site's own display serif with a plain description of
what the organisation is (`lib/clients.ts`).

## Photography

**All of it is now Sakokhule's own.** The Izanolihle Roads set that this site
borrowed until 2026-09-06 has been retired to `_retired-2026-09-06/`. What
ships is four machines out of Lindokuhle's own yard and sites — TATA tipper,
Galion T600B grader, CAT backhoe loader, Powerstar water tanker — plus one
load-and-haul photograph at a coal stockpile.

Two of the eight supplied photographs are held back, and both are named so in
`_source/supplied-2026-09-06/`:

- **Vögele paver** — carries a Ritchie Bros / IronPlanet watermark. It is a
  dealer's listing photograph and cannot be published at all.
- **CAT 323D L excavator** — standing on a dealer's lot under Japanese
  decals, other machines behind it. It may well be a machine he has bought,
  but as it stands it is not a photograph of his yard.

Neither goes on a page that says "our fleet" until the client confirms
ownership and sends a photograph taken on his own ground. This is the same
standard the company profile document was built to.

These are phone photographs at three different aspect ratios, and the subject
sits well above centre in most of them — so `Figure` takes a `focus` prop and
every entry in `lib/fleet.ts` carries its own `object-position`.

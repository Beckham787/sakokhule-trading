# Sakokhule Trading

Site for Sakokhule Trading (Pty) Ltd — **earth moving and plant hire**,
Malelane, Mpumalanga. Sister site to Izanolihle Roads (same director, same
yard — separate registered companies, each with its own plant and its own
contracts).

Palette, type, devices and the reasoning behind them: [`brand.md`](./brand.md).

```bash
npm install
npm run dev      # http://localhost:3214
npm run build
```

## What the client supplied, 2026-09-06

Lindokuhle confirmed the build and sent through **the logo and eight
photographs** — the first time this site has had either. That changed three
things beyond the pictures themselves:

1. **The positioning.** The logo says *Earth moving and Plant hire*. That is
   the company describing itself today, and it now leads the site. The roads
   and civils work in `lib/projects.ts` is the record that backs it, and the
   fourteen activities from the profile PDF stay as the capability list.
2. **The palette.** The accent is taken off the logo's steel-blue ring
   (`#275E7C`), replacing the cyan sampled from the profile PDF cover.
3. **The fleet.** `lib/fleet.ts` replaces `lib/plant.ts`. Four machines, all
   his own. The eleven-machine register borrowed from Izanolihle Roads has
   been retired to `_retired-2026-09-06/`.

**Two supplied photographs are held back** — see `brand.md` → Photography:

| File | Why |
| --- | --- |
| `UNUSABLE-paver-vogele-ritchie-bros-watermark.jpeg` | Ritchie Bros / IronPlanet watermark burnt in — a dealer's listing photo. Cannot be published. |
| `HOLD-excavator-cat-323d-dealer-lot.jpeg` | CAT 323D L on a dealer's lot under Japanese decals. May be his machine; is not a photo of his yard. |

**Ask Lindokuhle:** does he own the excavator, and can he send a photo of it
standing in his own yard? That would take the fleet from four machines to
five and put an excavator on an earth-moving company's fleet page, which it
currently lacks.

## Second edition

The site was rebuilt from the ground up in September 2026. The first edition
was dark, uppercase, hazard-striped, and led on a display-scale `R31.5
MILLION` headline. It read as a site hoarding, and the money shouted over
the work.

What changed, and why:

- **Light, editorial ground.** Paper, ink, generous space; dark kept for the
  plant section and the footer only.
- **A serif display face.** Source Serif 4 replaces Archivo — sentence case,
  wght 420. See `brand.md` → Type.
- **The money moved to the margin.** Contract values run in mono at body
  scale in `WorkList`, and the combined figure appears once, inside a
  sentence, on the homepage and once in the projects-page meta row. The old
  record band, ledger bars and value plates are gone.
- **Client names, quietly.** `ClientList` sets the five organisations in
  plain type — no marquee, no cards, no logos.
- **New components:** `SectionHead`, `Figure`, `IndexList`, `WorkList`,
  `ClientList`, `FactList`, `LinkRows`. Retired: `HazardDivider`,
  `ClientStrip`, `ClientWall`, `RecordBand`, `Ledger`.
- **The real logo**, in the header, the footer and the favicon. See
  `brand.md` → The logo, and `scripts/prep-logo.py`.
- **Semantic colour tokens.** A dark section is `className="night"` and
  everything inside it inverts. See `brand.md` → Semantic tokens.

**Izanolihle Roads is to be brought onto this same system next** — treat
`brand.md` as the group standard.

## Pages

```
/                                  home
/company                           overview — who we are, vision, mission, policy, where
/company/services                  14 core business activities
/company/projects                  completed contracts + the clients behind them
/company/credentials               CIDB, CIPC, B-BBEE, SARS
/fleet                             the fleet, machine by machine, and hire
/contact
```

## Content source

Every fact on this site — company info, vision/mission, the 14 core
activities, the 5 completed projects, registration & credentials — is
transcribed from the client-approved `Sakokhule Trading - Company Profile.pdf`
and the CIPC/SARS/CIDB/CSD documents behind it (studio vault, 2026-08-21).
Nothing is invented.

Two kinds of studio-written copy sit alongside it, both flagged in the
source: the one-line description under each named service (`lib/content.ts`,
`ACTIVITIES`), and the standfirsts and section titles across the pages.
Neither makes a claim the record does not already carry.

`lib/clients.ts` restates the same five contracts as the five organisations
behind them — the client names, not the project titles, are what a road
authority screens on. `descriptor` says what kind of organisation each is;
`basis` marks the VEA work as the subcontract it is.

**CIDB grading currency**: the profile states "Valid to June 2026" as
supplied and approved by the client. The certificate's own listed expiry is
2026-06-20 — that date has now passed, and the grading is stated in the
header of every page and in the footer of every page. Worth a renewal check
with the client before this goes in front of a tender audience.

## Assets

`_source/supplied-2026-09-06/` holds everything the client sent on that date,
renamed from its WhatsApp filenames so the two unusable files are obvious at
a glance. `_source/paver-source.jpeg` is the older supplied photo, no longer
used on the site.

```bash
node scripts/prep-assets.js     # photographs -> public/images/*.webp
python3 scripts/prep-logo.py    # logo JPEG   -> transparent PNGs
```

Re-run after adding anything new to `_source/`. `prep-assets.js` prints the
manifest lines for `lib/images.ts`; paste them in.

> **Asset gap:** no excavator, and no photograph of a crew at work on an
> earth-moving job. Everything currently shipping is a machine standing
> still, apart from the backhoe on the access road and the coal load-and-haul
> shot. Two or three photos of work in progress would carry the homepage.

## Housekeeping

`_retired-2026-09-06/` holds what this rebuild took out of service: the
edition-1 components, the Archivo font, the Izanolihle plant photography and
some old screenshots. Nothing references it. **Delete the folder** once you
are happy with the rebuild — it is kept only so nothing disappears without
you having seen it.

## Domain

No domain registered yet. `lib/content.ts` points `siteUrl` at
`https://www.sakokhuletrading.co.za` as a placeholder, matching the naming
convention of the client's other sites — needs TK/the client to register it
(and Vercel/DNS set up) before launch.

## Sister site

Footer links to `izanolihleroads.co.za` and vice versa — both state plainly
that they are separate registered companies sharing plant and a principal,
not one entity.

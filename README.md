# Sakokhule Trading

Site for Sakokhule Trading (Pty) Ltd — civil engineering and construction
contractor, Malelane, Mpumalanga. Sister site to Izanolihle Roads (same
director, same yard, same fleet — separate registered companies).

Palette, type and the shared signature device: [`brand.md`](./brand.md).

```bash
npm install
npm run dev      # http://localhost:3214
npm run build
```

## Pages

```
/                                  home
/company                           overview — about, vision, mission
/company/services                  14 core business activities
/company/projects                  completed projects (R31.5m+)
/company/credentials                CIDB, B-BBEE, SARS, CIPC
/plant                             the fleet
/contact
```

## Content source

Every fact on this site — company info, vision/mission, the 14 core
activities, the 5 completed projects, registration & credentials — is
transcribed from the client-approved `Sakokhule Trading - Company Profile.pdf`
and the CIPC/SARS/CIDB/CSD documents behind it (studio vault, 2026-08-21).
Nothing is invented. Where the PDF listed a service by name only, a plain
generic one-line description was written (`lib/content.ts`, `ACTIVITIES`) —
never a claim specific to a job.

**CIDB grading currency**: the profile states "Valid to June 2026" as
supplied and approved by the client. The certificate's own listed expiry is
2026-06-20 — worth a renewal check with the client before this goes in front
of a real tender audience, since that date has now passed.

## Assets

`_source/` holds client-supplied originals (only `paver-source.jpeg` is
unique to this site). Most of `public/images/plant/` is copied verbatim from
Izanolihle Roads' own processed output — see `brand.md` → Photography.

```bash
node scripts/prep-assets.js
```

Re-run after adding anything new to `_source/`.

## Domain

No domain registered yet. `lib/content.ts` currently points `siteUrl` at
`https://www.sakokhuletrading.co.za` as a placeholder, matching the naming
convention of the client's other sites — needs TK/the client to actually
register it (and Vercel/DNS set up) before launch.

## Sister site

Footer links to `izanolihleroads.co.za` and vice versa — both state plainly
that they are separate registered companies sharing plant and a principal,
not one entity.

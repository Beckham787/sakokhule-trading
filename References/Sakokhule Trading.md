# Sakokhule Trading

Sakokhule Trading (Pty) Ltd — civil engineering & construction contractor, registered
2016, based Malelane. Same client relationship as [[Izanolihle Roads]] (Lindokuhle
Teddy Mhlongo, TK's brother) — a separate registered entity, kept as a separate
profile/engagement, not cross-referenced on either document.

**Deliverable**: Company profile PDF (rebuild of a client-supplied draft), stored
alongside this note.

## The business

**Address**: 38 Station Street, Malelane, 1320.
⚠️ Same street address as [[GMP Builders]] and [[Izanolihle Roads]] — third
appearance of this address across this client's/family's businesses. Worth
confirming with TK whether this is a shared yard/office or a registration
convenience.

**Contact**: lindokuhlemhlongo956@gmail.com · 076 299 6824 / 060 832 6712
(also vphangisa@gmail.com — Vernon Nkosinathi Phangisa, listed as bid-office
contact on the CSD registration, not a director)

**Director**: Lindokuhle Teddy Mhlongo (name order corrected — the original draft
had it reversed as "Teddy Lindokuhle").

## Registration & credentials (source: client-supplied CIPC / SARS / CIDB / CSD docs, 2026-08-21)

- **CIPC**: 2016/069270/07, Private Company, registered 18 Feb 2016, status "In
  Business" per the certificate (dated Jun 2024).
- **CIDB**: CRS 10225165, grading **5CE, 3GB**, listed expiry **2026-06-20** —
  i.e. already lapsed as of today (2026-08-21). Included in the profile as-is per
  TK's call; worth a renewal check before this goes out to a real tender audience.
- **B-BBEE**: 100% Black-owned, 95% owned by Lindokuhle Teddy Mhlongo (youth-owned).
  The ownership affidavit on file expired 30 Aug 2024. No explicit "BEE Level" was
  supplied, so the profile states the ownership facts rather than a level.
- **SARS**: Tax Compliance PIN on file expired 12 Jul 2025 ("Good Standing" was the
  last known status). Profile states "Good Standing" without the PIN itself —
  PINs are single-use verification codes, not something to publish.
- **CSD (government supplier database)**: report (run Mar 2025) shows the supplier
  as **not active**, business status **"AR Final deregistration"** — conflicts with
  the CIPC certificate's "In Business" status. Not surfaced in the profile (out of
  scope per TK), but worth knowing this exists before Sakokhule Trading is put in
  front of a government buyer that checks CSD directly.

**Not included in the public profile** (by design, not oversight): SA ID number,
income tax/VAT/PAYE numbers, bank account details, TCS PIN, personal residential
address. Standard omissions for a client-facing document — flag if a specific
tender pack needs them back in.

## Completed projects (supplied by TK, 2026-08-21)

| # | Project | Value | Duration |
|---|---------|-------|----------|
| 1 | Load & Haul — Nkomati Anthracite Coal Mine | R10.7m | 2017–2022 |
| 2 | SANRAL routine road maintenance, Mbombela (+R3m extension) | R8m | 2021–2025 (ext. 2025–2026) |
| 3 | Nkomazi Municipality — regravelling, Schoemansdal | R1m | 2025 |
| 4 | VEA Road Maintenance — subcontract, Nkomazi | R4.8m | 2022–2026 |
| 5 | Public Works — pavement layer repair, Strydomblok Road | R4m | 2026 |

Combined value on record: **R31.5m+**.

## Plant page (added 2026-08-21, revised same day)
Client confirmed the plant/equipment is genuinely shared across the family's
businesses — same fleet as [[Izanolihle Roads]]. First pass used 5 photos I
picked by eye; revised to pull the full, real register straight from
`lib/plant.ts` in the Izanolihle Roads repo instead (the site's own source of
truth for what's confirmed-owned) — 11 machines, each with real make/model and
role, not just a generic label:

Paver (Caterpillar) · Tracked excavator (New Holland) · Tracked excavator
(Feeler) · Breaker excavator · Wheel loader (Liebherr L550, BIC 009) · Skid
steer loader (Bobcat S300) · Motor grader (Caterpillar) · Pneumatic-tyre roller
(CAT CW34) · Tandem roller (CAT CB7) · Vibratory roller (single-drum) · Water
tanker (TATA Novus).

Note: the Izanolihle Roads README had flagged the Feeler excavator and the
Liebherr L550 loader as "held back pending confirmation of ownership" — but
`lib/plant.ts` (newer, and what's actually live on the site) shows both were
since confirmed and shipped with real fleet numbers. The README is stale on
this point; the code is the current source of truth.

⚠️ Deliberately **excluded** from reuse:
- `truck-iveco.webp`, `truck-volvo.webp`, `bakkie-hilux.webp`,
  `bakkie-doublecab.webp` — all carry "IZANOLIHLE ROADS (PTY) LTD" livery
  painted directly on the vehicle (confirmed via `lib/plant.ts`'s own alt text).
  Can't go on Sakokhule's profile without it looking like a mix-up.
- `paver-se50.webp` (the raw asset file, not used above) — mislabeled; the
  actual image is the BOMAG milling machine with a burned-in geotag/timestamp
  from a different job (Ndlala Street, Tonga Village, 13 May 2026). Job-specific,
  not reusable elsewhere.

Client is sending new plant photos of his own at some point — swap them in when
they arrive, same page structure (`images/plant/*.jpg` in the profile source).

## New plant photos dropped by TK (2026-08-21)
9 photos landed in `Plant/` (vault subfolder). None were genuinely new machine
types — all were either duplicates of equipment already on the page or came
with a problem:

- `17.47.52.jpeg` / `17.47.53.jpeg` — teal Vögele SUPER 1803-3 pavers, both
  carry a visible **Machineryline watermark**. Marketplace listing photos, not
  Sakokhule's (or anyone's actual) equipment. Excluded outright.
- `17.51.46.jpeg` — CAT paver on a live road with crew and a tipper truck. Clean,
  no watermark, no dealer signage. **Used** — replaced the Paver entry's photo
  (previously borrowed from Izanolihle Roads) with this one, so the Paver
  entry is now genuinely Sakokhule's own supplied image.
- `17.51.58.jpeg` — same paver, crew raking close up. Also clean and usable,
  held in reserve (not added — would duplicate the Paver entry).
- `17.51.59.jpeg` — CAT roller in action, but carries a burned-in **"Galaxy Z
  Fold7"** watermark bottom-left. Usable if cropped; held in reserve, not added
  since the existing CB7 roller photo already shows a clear model badge.
- `06.56.31.jpeg` — the raw source of the CAT CB7 roller already on the page
  (`roller-cb7`). Duplicate, not added.
- `06.56.43.jpeg` / `06.56.44.jpeg` — CAT SE50 paver on a lowbed. A person
  standing next to it is wearing a shirt with a large **"PR" logo** (matches
  "PR Pure Plant", the dealer signage flagged elsewhere in the Izanolihle Roads
  asset audit) — reads as a dealer/hire-yard photo, not confirmed-owned
  equipment. Also carries a "Galaxy S25 Ultra" watermark. Excluded.
- `06.56.45.jpeg` — the BOMAG milling machine with a burned-in geotag/timestamp
  overlay (Ndlala Street, Tonga Village, 13 May 2026 — a different job).
  Same file flagged before under Izanolihle Roads; still not reusable here.

Net result: 1 photo swapped in (Paver), 2 held in reserve as clean spares, 6
excluded. Worth telling TK the dealer-tag and watermark issues affect the
*source* photos generally, not just what's already been filtered — future
batches from this client are likely to have the same mix.

## Status (2026-08-21)
Profile rebuilt from the client's original draft — copy cleaned up, credentials
page added, projects, address and a Plant page filled in. Same diagonal
blue/black brand style as the original artwork, using the client's own site
photos (no stock imagery). Client has seen and approved.

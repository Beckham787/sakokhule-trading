/**
 * Asset preparation. Reads the client's original supplied files from
 * `_source/` and writes optimised WebP into `public/images/`, printing the
 * matching manifest lines for `lib/images.ts`.
 *
 *   node scripts/prep-assets.js
 *
 * Everything here is Sakokhule's own. On 2026-09-06 Lindokuhle supplied the
 * company logo and eight photographs; the previous fleet imagery, which was
 * carried over from Izanolihle Roads' processed set, was retired the same
 * day (see `_retired-2026-09-06/`).
 *
 * Two supplied photographs are deliberately NOT processed, and are named so
 * in `_source/supplied-2026-09-06/`:
 *   · UNUSABLE-paver-vogele-ritchie-bros-watermark.jpeg — a dealer listing
 *     photograph with a Ritchie Bros / IronPlanet watermark burnt into it.
 *   · HOLD-excavator-cat-323d-dealer-lot.jpeg — a CAT 323D L standing on a
 *     dealer's lot under foreign decals, with other machines behind it.
 * Neither can be presented as "our fleet" until the client confirms the
 * machine is his and sends a photograph taken in his own yard.
 *
 * The logo is keyed off its flat supplied background by
 * `scripts/prep-logo.py` — see that file. It is not re-run here.
 *
 * 2026-09-06, later the same day: Lindokuhle sent four more photographs,
 * already colour-enhanced on his end, meant for the homepage's scroll
 * sequence rather than the fleet catalogue — one of them (the loader and
 * coal tippers) replaces the old `works/load-and-haul` shot outright, the
 * other three are new. These are wider than the catalogue photos (they fill
 * the full viewport as a pinned background) so they get a taller max width.
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public", "images");

const JOBS = [
  { in: "tipper-tata.jpeg", out: "fleet/tipper", dir: "supplied-2026-09-06" },
  { in: "grader-galion-t600b.jpeg", out: "fleet/grader", dir: "supplied-2026-09-06" },
  { in: "tlb-cat-on-site.jpeg", out: "fleet/tlb", dir: "supplied-2026-09-06" },
  { in: "water-tanker-powerstar.jpeg", out: "fleet/water-tanker", dir: "supplied-2026-09-06" },
  { in: "load-and-haul-coal.jpeg", out: "works/load-and-haul", dir: "supplied-2026-09-06" },

  // The homepage story sequence — hero → what we do → selected work → registration.
  { in: "mine-yard-load-and-haul.jpeg", out: "story/mine-yard", dir: "enhanced-2026-09-06", maxWidth: 2400 },
  { in: "tlb-grading-road.jpeg", out: "story/grading", dir: "enhanced-2026-09-06", maxWidth: 2400 },
  { in: "excavator-veteran-yard.jpeg", out: "story/veteran", dir: "enhanced-2026-09-06", maxWidth: 2400 },
  { in: "excavator-delivery-abnormal-load.jpeg", out: "story/delivery", dir: "enhanced-2026-09-06", maxWidth: 2400 },
];

const MAX_WIDTH = 1800;

async function run() {
  for (const dir of ["fleet", "works", "brand", "story"]) {
    fs.mkdirSync(path.join(OUT, dir), { recursive: true });
  }

  for (const job of JOBS) {
    const src = path.join(ROOT, "_source", job.dir, job.in);
    if (!fs.existsSync(src)) {
      console.warn(`  !! missing source: ${job.in}`);
      continue;
    }

    const width = job.maxWidth ?? MAX_WIDTH;
    const base = sharp(src).resize({ width, withoutEnlargement: true });
    const outPath = path.join(OUT, `${job.out}.webp`);
    await base.clone().webp({ quality: 80 }).toFile(outPath);

    const { width: w, height: h } = await sharp(outPath).metadata();
    const blur = await sharp(src).resize(12).webp({ quality: 40 }).toBuffer();

    console.log(`  ok  ${job.out.padEnd(22)} ${w}x${h}`);
    console.log(
      `      "${job.out}": { "src": "/images/${job.out}.webp", "width": ${w}, "height": ${h}, "blurDataURL": "data:image/webp;base64,${blur.toString("base64")}" },`,
    );
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

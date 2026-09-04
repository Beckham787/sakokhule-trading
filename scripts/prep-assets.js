/**
 * Asset preparation. Reads the client's original supplied files from
 * `_source/` and writes optimised WebP into `public/images/`, appending to
 * the shared-fleet manifest in `lib/images.ts`.
 *
 *   node scripts/prep-assets.js
 *
 * Most of this site's plant photography is not reprocessed here — it is
 * copied verbatim from Izanolihle Roads' own already-optimised output
 * (genuinely the same equipment, same source photos), with the matching
 * manifest entries carried over by hand in lib/images.ts. This script only
 * needs to process photos that are Sakokhule's own — currently the paver.
 * When the client sends new plant photos of his own, add a JOBS entry here.
 */

const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const SRC = path.join(__dirname, "..", "_source");
const OUT = path.join(__dirname, "..", "public", "images");

const JOBS = [
  // Supplied directly for this profile, clean (no watermark, no dealer
  // signage) — see the studio vault note, 2026-08-21.
  { in: "paver-source.jpeg", out: "plant/paver" },
];

async function run() {
  for (const dir of ["plant", "works", "brand"]) {
    fs.mkdirSync(path.join(OUT, dir), { recursive: true });
  }

  for (const job of JOBS) {
    const src = path.join(SRC, job.in);
    if (!fs.existsSync(src)) {
      console.warn(`  !! missing source: ${job.in}`);
      continue;
    }

    const pipeline = sharp(src);
    const meta = await pipeline.metadata();
    const { width, height } = meta;

    const outPath = path.join(OUT, `${job.out}.webp`);
    await pipeline.clone().webp({ quality: 82 }).toFile(outPath);

    const blur = await sharp(src).resize(12).webp({ quality: 40 }).toBuffer();

    console.log(`  ok  ${job.out.padEnd(22)} ${width}x${height}`);
    console.log(
      `      "${job.out}": { "src": "/images/${job.out}.webp", "width": ${width}, "height": ${height}, "blurDataURL": "data:image/webp;base64,${blur.toString("base64")}" },`,
    );
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

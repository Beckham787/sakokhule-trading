import { IMAGES } from "./images";

/**
 * The fleet. Every machine here is one Lindokuhle photographed himself and
 * sent through on 2026-09-06 — his own yard, his own sites. The previous
 * eleven-machine register was carried over from Izanolihle Roads' processed
 * set and has been retired: two sister companies genuinely share a yard, but
 * a plant-hire company's fleet page has to be its own plant.
 *
 * Make and model are read off the machines in the photographs — TATA on the
 * grille, GALION T600B on the cab, CAT on the loader arm, the Powerstar star
 * on the tanker. Nothing is inferred beyond what is legible.
 *
 * Two supplied photographs are deliberately not here (see README):
 *   · the Vögele paver carries a Ritchie Bros / IronPlanet watermark
 *   · the CAT 323D L stands on a dealer's lot under foreign decals
 * Both are named accordingly in `_source/supplied-2026-09-06/`. If either
 * machine is genuinely Sakokhule's, it needs a photo taken in their own yard.
 */

export type Machine = {
  name: string;
  make: string;
  role: string;
  image: keyof typeof IMAGES;
  alt: string;
  /** Tailwind object-position. These are phone photographs at three
      different aspect ratios; without this the 4:3 tiles crop the grader
      down to its wheels and the backhoe down to gravel. */
  focus: string;
};

export const FLEET: Machine[] = [
  {
    name: "Tipper truck",
    make: "TATA 6×4",
    role: "Hauling to and from site — spoil out, gravel and layer material in.",
    image: "fleet/tipper",
    alt: "A white TATA six-by-four tipper truck with a steel bin, standing under the shed at the yard.",
    focus: "object-[50%_50%]",
  },
  {
    name: "Motor grader",
    make: "Galion T600B",
    role: "Shaping and levelling to line and level — road layers, platforms and haul roads.",
    image: "fleet/grader",
    alt: "A yellow Galion T600B motor grader with its blade and ripper down, parked on gravel at the yard.",
    focus: "object-[50%_45%]",
  },
  {
    name: "Backhoe loader",
    make: "Caterpillar",
    role: "Trenching, loading and backfill where a full-size machine will not fit.",
    image: "fleet/tlb",
    alt: "A Caterpillar backhoe loader working along a newly stoned access road beside a palisade fence.",
    focus: "object-[55%_33%]",
  },
  {
    name: "Water tanker",
    make: "Powerstar",
    role: "Dust suppression and compaction water on gravel roads and earthworks.",
    image: "fleet/water-tanker",
    alt: "A white Powerstar water tanker with a stainless steel tank, parked at the yard.",
    focus: "object-[50%_38%]",
  },
];

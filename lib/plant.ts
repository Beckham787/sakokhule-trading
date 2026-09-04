import { IMAGES } from "./images";

/**
 * The fleet. Genuinely shared with Izanolihle Roads — same yard, same
 * machines, put to work on whichever site needs them (both companies'
 * profiles say this explicitly). Photos are reused from Izanolihle Roads'
 * own processed set where the equipment is the same; the paver photo is
 * Sakokhule's own, supplied directly for this profile.
 */

export type Machine = {
  name: string;
  make: string;
  role: string;
  image: keyof typeof IMAGES;
  alt: string;
};

export const PLANT: Machine[] = [
  {
    name: "Paver",
    make: "Caterpillar",
    role: "Laying surfacing layers to line and level.",
    image: "plant/paver",
    alt: "A CAT paver laying asphalt on a live road, crew and a tipper truck alongside.",
  },
  {
    name: "Tracked excavator",
    make: "New Holland",
    role: "Excavation, box cutting, loading and trenching.",
    image: "plant/excavator",
    alt: "A yellow New Holland tracked excavator standing on a levelled borrow area.",
  },
  {
    name: "Tracked excavator",
    make: "Feeler",
    role: "Excavation, box cutting, loading and trenching.",
    image: "plant/excavator-feeler",
    alt: "A yellow Feeler tracked excavator with the bucket extended.",
  },
  {
    name: "Breaker excavator",
    make: "Tracked",
    role: "Concrete and rock breaking, demolition work.",
    image: "plant/excavator-breaker",
    alt: "A tracked excavator fitted with a hydraulic breaker attachment, breaking concrete.",
  },
  {
    name: "Wheel loader",
    make: "Liebherr L550",
    role: "Stockpiling, loading tippers and feeding material to the works.",
    image: "plant/loader-l550",
    alt: "A yellow and white Liebherr L550 wheel loader, fleet number BIC 009.",
  },
  {
    name: "Skid steer loader",
    make: "Bobcat S300",
    role: "Tight-access loading, backfill and site clean-up.",
    image: "plant/skidsteer-bobcat",
    alt: "A white Bobcat S300 skid steer loader being loaded onto a trailer via ramps.",
  },
  {
    name: "Motor grader",
    make: "Caterpillar",
    role: "Shaping and levelling layer work, blading gravel roads, forming camber and shoulders.",
    image: "plant/grader-cat",
    alt: "A yellow Caterpillar motor grader parked in the yard.",
  },
  {
    name: "Pneumatic-tyre roller",
    make: "Caterpillar CW34",
    role: "Sealing and finish-rolling asphalt surfaces.",
    image: "plant/roller-cw34",
    alt: "A CAT CW34 pneumatic-tyre roller loaded on a lowbed trailer.",
  },
  {
    name: "Tandem roller",
    make: "Caterpillar CB7",
    role: "Compacting asphalt layers to a flush, sealed finish.",
    image: "plant/roller-cb7",
    alt: "A CAT CB7 tandem roller on a truck bed.",
  },
  {
    name: "Vibratory roller",
    make: "Single-drum",
    role: "Compacting fill and sub-base material.",
    image: "plant/roller-vibratory",
    alt: "A yellow single-drum vibratory roller parked on open ground.",
  },
  {
    name: "Water tanker",
    make: "Hino",
    role: "Dust suppression and compaction water on site.",
    image: "plant/tanker-water",
    alt: "A white Hino water tanker truck.",
  },
];

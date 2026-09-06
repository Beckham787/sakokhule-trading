/**
 * Client copy. Sourced from the approved company-profile PDF ("Sakokhule
 * Trading - Company Profile.pdf") and the client-supplied CIPC/SARS/CIDB/CSD
 * documents behind it (2026-08-21) — see the studio vault note for the full
 * paper trail. Nothing here is invented; where the profile didn't give a
 * line (per-service descriptions, e.g.) a plain factual one was written and
 * flagged in a comment, never a client-specific claim.
 */

export const company = {
  businessName: "Sakokhule Trading",
  legalName: "Sakokhule Trading (Pty) Ltd",

  siteUrl: "https://www.sakokhuletrading.co.za",

  /* Straight off the client's own logo, supplied 2026-09-06: "Earth
     moving and Plant hire". It supersedes the "civil engineering &
     construction" line the profile PDF led with — the logo is the company
     describing itself today, and the roads work below is the record that
     backs it. */
  tagline: "Earth moving & plant hire",
  /* Studio-written standfirst (not from the profile PDF). Every claim in it
     is carried elsewhere on the site: the fleet is lib/fleet.ts, the crews
     are `about.team`, the province and the work are the contract record. */
  intro:
    "Earth moving, load and haul, and plant hire out of Malelane — our own machines, our own operators, on mine, municipal and roads contracts across Mpumalanga.",

  /* Confirmed by TK, same as Izanolihle Roads' principal — same director,
     separate registered company. */
  principal: "Lindokuhle Teddy Mhlongo",
  principalRole: "Founder & Managing Director",

  address: "38 Station Street, Malelane, 1320",
  region: "Mpumalanga",
  email: "lindokuhlemhlongo956@gmail.com",
  bidOfficeEmail: "vphangisa@gmail.com",
  bidOfficeContact: "Vernon Nkosinathi Phangisa",

  /* Per the profile PDF's own contact page — a different primary line to
     Izanolihle Roads, though both share the WhatsApp number. */
  phones: ["076 299 6824", "060 832 6712"],
  whatsappNumber: "060 832 6712",
  whatsapp:
    "https://wa.me/27608326712?text=" +
    encodeURIComponent("Good day — I'd like to discuss a civil works project."),
} as const;

/* ----------------------------------------------------------- disciplines */

export type Discipline = { name: string; body: string; points: string[] };

/**
 * The two halves of the business, as the client's own logo states them.
 * The bullet points under each are drawn from `ACTIVITIES` (the profile
 * PDF's own list) and from the completed contracts in lib/projects.ts —
 * nothing here is a new capability claim.
 */
export const DISCIPLINES: Discipline[] = [
  {
    name: "Earth moving",
    body: "Moving material, and shaping what is left behind. The bulk of the company's contract history is earthworks and road layers.",
    points: [
      "Bulk earthworks, excavation and box cutting",
      "Load and haul, including mining haulage",
      "Regravelling, road layers and pavement repair",
      "Drainage, culverts and civil infrastructure",
    ],
  },
  {
    name: "Plant hire",
    body: "Machines out to other contractors and site owners, with our own operators on them. The fleet is owned, not sublet.",
    points: [
      "Grader, backhoe loader, tipper and water tanker",
      "Operator supplied with every machine",
      "Day, week and contract rates",
      "Mpumalanga-wide, travelling to site",
    ],
  },
];

/* ----------------------------------------------------------------- about */

export const about = {
  body: [
    "Sakokhule Trading was founded by a young entrepreneur who refused to sit back and accept a disadvantaged situation, choosing instead to make a difference in the life of his community. The company is committed to playing its part in South Africa's development and to creating jobs within the communities it works in.",
    "Our priority is straightforward: render a better, more sufficient service to our clients, so they get real value for their money. In an industry with so much competition, we believe the only way to keep clients is to build a healthy, long-term relationship with them — one job at a time.",
  ],
  team:
    "The Sakokhule Trading team is led by Mr Lindokuhle Teddy Mhlongo, supported by administrative, maintenance, projects and sales teams.",

  vision:
    "Our vision is for Sakokhule Trading to attain recognition as a world-class provider of innovative, reliable civil engineering solutions — delivering excellent service to its clients, its business, and its staff.",

  mission:
    "We will continuously strive to provide innovative, cost-effective solutions in every area of our business, ensuring lasting financial stability, steady growth, and a challenging work environment. A proactive, responsible approach to safety and environmental protection is a pre-requisite. Simply stated: Sakokhule Trading will consistently deliver outstanding value to its clients.",

  objectives: [
    "Contribute to improving living standards and promoting the spirit of Batho Pele — putting people first.",
    "Render an effective, highly professional service in an organised manner.",
  ],

  howWeWork: [
    "Lead in our field of expertise.",
    "Approach every job with professionalism.",
    "Be reliable — sustain growth without compromising environmental responsibility.",
  ],

  policyFramework: [
    "Growth, empowerment and redistribution strategy",
    "Black economic empowerment",
    "Better life for all",
    "Employment and occupational equity",
    "Women's empowerment",
  ],
} as const;

/* ------------------------------------------------------------- activities */

export type Activity = { name: string; body: string };

/**
 * The profile PDF lists these 14 activities by name only, no description —
 * the one-line body on each is a plain, generic description of what the
 * named service is (not a claim about a specific job), same register as a
 * printed capability list.
 */
export const ACTIVITIES: Activity[] = [
  { name: "Building construction", body: "Structures built from foundation to finish." },
  { name: "Civil construction", body: "Earthworks, drainage and civil infrastructure." },
  { name: "Concrete services", body: "Mixing, placing and finishing concrete works." },
  { name: "Steel works services", body: "Structural and reinforcement steel work." },
  { name: "Paving services", body: "Block paving and surfaced hardstanding." },
  { name: "Road renovations", body: "Rehabilitating worn or damaged road surfaces." },
  { name: "Bridge maintenance", body: "Upkeep and repair of bridge structures." },
  { name: "Water & waste systems", body: "Water reticulation and waste infrastructure." },
  { name: "Infrastructure services", body: "General civil infrastructure works." },
  { name: "Bricks & sand supply", body: "Supply of bricks and building sand." },
  { name: "Road markings", body: "Line marking and surface signage on roads." },
  { name: "Road signage", body: "Supply and installation of road signage." },
  { name: "Road culvert services", body: "Culvert installation and maintenance for drainage." },
  { name: "Road guardrail services", body: "Supply and installation of road guardrails." },
];

/* ------------------------------------------------------------ credentials */

export const credentials = {
  cipc: {
    regNo: "2016/069270/07",
    enterpriseType: "Private Company",
    registered: "18 February 2016",
    status: "In Business",
  },
  cidb: {
    crsNumber: "10225165",
    grading: "5CE · 3GB",
    detail: "Civil Engineering Grade 5, General Building Grade 3.",
    /* As stated in the approved profile PDF (client's call to include as-is,
       2026-08-21). The certificate's own listed expiry is 2026-06-20 — worth
       a renewal check before this goes in front of a tender audience. */
    validity: "Valid to June 2026",
  },
  bbbee: {
    ownership: "100% Black-owned",
    detail: "95% owned by Lindokuhle Teddy Mhlongo — a Black, youth-owned enterprise.",
  },
  sars: {
    status: "Good Standing",
    detail: "Verified tax compliance status on record with SARS.",
  },
} as const;

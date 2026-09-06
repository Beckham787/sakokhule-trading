/**
 * The client roster, derived one-to-one from PROJECTS in lib/projects.ts —
 * same five contracts, presented as the organisations behind them rather
 * than as line items.
 *
 * Nothing new is claimed here. `descriptor` says plainly what kind of
 * organisation the client is (SANRAL is the national roads agency; Nkomati
 * is an anthracite mine) and `basis` says whether Sakokhule held the
 * contract directly or worked under a principal contractor — the VEA work
 * is a subcontract and is labelled as one, exactly as the approved profile
 * PDF has it. No client logos were supplied, so each client is set in the
 * site's own display type (see brand.md → The logo): a name plate, not a
 * borrowed mark.
 */

export type Client = {
  /** As named in the approved company-profile PDF. */
  name: string;
  /** Short form for the marquee strip, where the full name is too long. */
  short: string;
  /** What kind of organisation it is — factual, not a claim about the job. */
  descriptor: string;
  sector: "National" | "Mining" | "Municipal" | "Public sector" | "Contractor";
  /** Contract held directly, or worked under a principal contractor. */
  basis: "Direct contract" | "Subcontract";
  scope: string;
  value: string;
  /** Any qualification the headline figure needs — an extension, a scope
      change — so the big number is never louder than the truth. */
  note?: string;
  period: string;
};

export const CLIENTS: Client[] = [
  {
    name: "SANRAL",
    short: "SANRAL",
    descriptor: "South African National Roads Agency",
    sector: "National",
    basis: "Direct contract",
    scope: "Routine road maintenance, Mbombela — extended 2025–2026",
    value: "R11m",
    note: "R8m contract + R3m extension",
    period: "2021 – 2026",
  },
  {
    name: "Nkomati Anthracite Coal Mine",
    short: "Nkomati Anthracite",
    descriptor: "Anthracite mining operation",
    sector: "Mining",
    basis: "Direct contract",
    scope: "Load & haul — five-year mining haulage contract",
    value: "R10.7m",
    period: "2017 – 2022",
  },
  {
    name: "Nkomazi Municipality",
    short: "Nkomazi Municipality",
    descriptor: "Local municipality",
    sector: "Municipal",
    basis: "Direct contract",
    scope: "Regravelling of community roads, Schoemansdal",
    value: "R1m",
    period: "2025",
  },
  {
    name: "Public Works",
    short: "Public Works",
    descriptor: "Public sector roads client",
    sector: "Public sector",
    basis: "Direct contract",
    scope: "Pavement layer repair, Strydomblok Road",
    value: "R4m",
    period: "2026",
  },
  {
    name: "VEA Road Maintenance",
    short: "VEA Road Maintenance",
    descriptor: "Principal road maintenance contractor",
    sector: "Contractor",
    basis: "Subcontract",
    scope: "Routine maintenance subcontract, Nkomazi",
    value: "R4.8m",
    period: "2022 – 2026",
  },
];

/**
 * Completed projects — as supplied by the client and set out in the approved
 * company-profile PDF (2026-08-21). This is Sakokhule Trading's own contract
 * history; Izanolihle Roads is a separate registered company and does not
 * claim these.
 */

export type CompletedProject = {
  name: string;
  client: string;
  location: string;
  value: string;
  /** A qualification on the value — an extension, a scope change. Shown on
      the projects page only; the homepage list stays a plain record. */
  note?: string;
  period: string;
  /** The same figure in rand millions — used only to size the ledger bars,
      so the relative weight of each contract is visible at a glance. Not a
      new claim: it is `value` as a number. */
  valueZarM: number;
};

const CONTRACTS: CompletedProject[] = [
  {
    name: "Load & Haul",
    valueZarM: 10.7,
    client: "Nkomati Anthracite Coal Mine",
    location: "Mining haulage contract",
    value: "R10.7m",
    period: "2017 – 2022",
  },
  {
    name: "Routine Road Maintenance",
    valueZarM: 11,
    client: "SANRAL",
    location: "Mbombela",
    note: "R8m contract, extended by R3m in 2025",
    value: "R11m",
    period: "2021 – 2026",
  },
  {
    name: "Regravelling of Community Roads",
    valueZarM: 1,
    client: "Nkomazi Municipality",
    location: "Schoemansdal",
    value: "R1m",
    period: "2025",
  },
  {
    name: "Routine Maintenance Subcontract",
    valueZarM: 4.8,
    client: "VEA Road Maintenance",
    location: "Nkomazi",
    value: "R4.8m",
    period: "2022 – 2026",
  },
  {
    name: "Pavement Layer Repair",
    valueZarM: 4,
    client: "Public Works",
    location: "Strydomblok Road",
    value: "R4m",
    period: "2026",
  },
];

/** Largest contract first — the book reads top-down by weight. */
export const PROJECTS: CompletedProject[] = [...CONTRACTS].sort(
  (a, b) => b.valueZarM - a.valueZarM,
);

export const COMBINED_VALUE = "R31.5 million+";

/** Headline figures of record. Every one is read off the approved profile
    PDF or counted from the list above — none is estimated. */
export const RECORD = {
  combinedValue: "R31.5m+",
  combinedValueLong: COMBINED_VALUE,
  contracts: String(PROJECTS.length),
  yearsTrading: String(new Date().getFullYear() - 2016),
  founded: "2016",
} as const;

export const LARGEST_ZAR_M = Math.max(...PROJECTS.map((p) => p.valueZarM));

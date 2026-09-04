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
  period: string;
};

export const PROJECTS: CompletedProject[] = [
  {
    name: "Load & Haul",
    client: "Nkomati Anthracite Coal Mine",
    location: "Mining haulage contract",
    value: "R10.7m",
    period: "2017 – 2022",
  },
  {
    name: "Routine Road Maintenance",
    client: "SANRAL",
    location: "Mbombela · extended 2025–2026 (+R3m)",
    value: "R8m",
    period: "2021 – 2025",
  },
  {
    name: "Regravelling of Community Roads",
    client: "Nkomazi Municipality",
    location: "Schoemansdal",
    value: "R1m",
    period: "2025",
  },
  {
    name: "Routine Maintenance Subcontract",
    client: "VEA Road Maintenance",
    location: "Nkomazi",
    value: "R4.8m",
    period: "2022 – 2026",
  },
  {
    name: "Pavement Layer Repair",
    client: "Public Works",
    location: "Strydomblok Road",
    value: "R4m",
    period: "2026",
  },
];

export const COMBINED_VALUE = "R31.5 million+";

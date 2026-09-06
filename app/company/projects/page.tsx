import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHead from "@/components/SectionHead";
import WorkList from "@/components/WorkList";
import ClientList from "@/components/ClientList";
import { RECORD } from "@/lib/projects";
import { CLIENTS } from "@/lib/clients";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Completed contracts for SANRAL, Nkomati Anthracite Coal Mine, Nkomazi Municipality, Public Works and VEA Road Maintenance — roads, earthworks and mining haulage across Mpumalanga.",
  alternates: { canonical: "/company/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Contracts completed since 2016."
        lede="Roads, earthworks and mining haulage delivered across Mpumalanga for a national roads agency, an anthracite mine, a local municipality, a public-sector roads client and a principal maintenance contractor."
        meta={[
          { label: "Completed contracts", value: RECORD.contracts },
          { label: "Clients", value: String(CLIENTS.length) },
          { label: "Combined value", value: RECORD.combinedValueLong },
          { label: "Trading since", value: RECORD.founded },
        ]}
      />

      <section aria-labelledby="record" className="grain">
        <div className="shell band pt-[clamp(2rem,4vw,3rem)]">
        <SectionHead index="01" label="The record" title="Contract by contract." />
        <div className="mt-[clamp(2.5rem,5vw,3.5rem)]">
          <WorkList notes />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="clients"
        className="dust border-t border-hair"
      >
        <div className="shell band">
          <SectionHead
            index="02"
            label="Clients"
            title="The organisations behind those contracts."
            lede="No client logos are reproduced here. None were supplied, and a contractor borrowing a client's mark makes a claim it has no right to make — so each is set in plain type with a description of what it is."
          />
          <ClientList className="mt-[clamp(2.5rem,5vw,3.5rem)]" />
        </div>
      </section>
    </>
  );
}

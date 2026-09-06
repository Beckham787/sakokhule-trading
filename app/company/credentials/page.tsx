import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHead from "@/components/SectionHead";
import FactList from "@/components/FactList";
import Reveal from "@/components/Reveal";
import { credentials, about, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Registration & credentials",
  description:
    "CIDB grading, B-BBEE ownership, SARS tax compliance and CIPC registration for Sakokhule Trading (Pty) Ltd.",
  alternates: { canonical: "/company/credentials" },
};

const REGISTRATION = [
  {
    label: "CIDB grading",
    value: `${credentials.cidb.grading} · ${credentials.cidb.validity}`,
    note: `${credentials.cidb.detail} CRS number ${credentials.cidb.crsNumber}.`,
  },
  {
    label: "Company registration",
    value: credentials.cipc.regNo,
    note: `${credentials.cipc.enterpriseType}, registered ${credentials.cipc.registered}. Status: ${credentials.cipc.status}.`,
  },
  {
    label: "Ownership",
    value: credentials.bbbee.ownership,
    note: credentials.bbbee.detail,
  },
  {
    label: "Tax compliance",
    value: credentials.sars.status,
    note: credentials.sars.detail,
  },
  {
    label: "Registered office",
    value: company.address,
    note: `Operating across ${company.region}.`,
  },
];

export default function CredentialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Credentials"
        title="Registration, grading and compliance."
        lede="Everything a client, a main contractor or a bid office asks for before the first meeting — set out in one place, as it appears on the certificates."
      />

      <section aria-labelledby="registration" className="dust">
        <div className="shell band pt-[clamp(2.5rem,5vw,4rem)]">
        <SectionHead index="01" label="On record" title="The certificates behind the work." />
        <div className="mt-[clamp(2.5rem,5vw,3.5rem)] grid gap-x-[var(--gutter)] lg:grid-cols-12">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-9">
            <FactList facts={REGISTRATION} />
          </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="policy" className="grain border-t border-hair">
        <div className="shell band">
          <SectionHead
            index="02"
            label="Policy"
            title="The framework the company subscribes to."
          />
          <div className="mt-[clamp(2.5rem,5vw,3.5rem)] grid gap-x-[var(--gutter)] lg:grid-cols-12">
            <div className="lg:col-span-3" />
            <ul className="lg:col-span-9">
              {about.policyFramework.map((p, i) => (
                <Reveal as="li" key={p} delay={(i % 5) * 55}>
                  <div className="flex items-baseline gap-6 border-b border-hair py-4">
                    <span className="index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[1.0625rem] text-fg-soft">{p}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

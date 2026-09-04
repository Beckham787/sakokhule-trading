import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { credentials, about } from "@/lib/content";

export const metadata: Metadata = {
  title: "Registration & credentials",
  description:
    "CIDB grading, B-BBEE ownership, SARS tax compliance and CIPC registration for Sakokhule Trading (Pty) Ltd.",
  alternates: { canonical: "/company/credentials" },
};

const CARDS = [
  {
    tag: "CIDB",
    title: "Contractor grading",
    value: credentials.cidb.grading,
    body: `${credentials.cidb.detail} CRS Number ${credentials.cidb.crsNumber}. ${credentials.cidb.validity}.`,
  },
  {
    tag: "B-BBEE",
    title: "Ownership",
    value: credentials.bbbee.ownership,
    body: credentials.bbbee.detail,
  },
  {
    tag: "SARS",
    title: "Tax compliance",
    value: credentials.sars.status,
    body: credentials.sars.detail,
  },
  {
    tag: "CIPC",
    title: "Company registration",
    value: credentials.cipc.regNo,
    body: `${credentials.cipc.enterpriseType}, registered ${credentials.cipc.registered}. Status: ${credentials.cipc.status}.`,
  },
];

export default function CredentialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Credentials"
        title="Registration & credentials."
      />

      <section aria-label="Registration and credentials" className="shell band pt-0">
        <div className="grid gap-x-[var(--gutter)] gap-y-8 sm:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal key={c.tag} delay={i * 90}>
              <div className="border border-[--rule] p-7">
                <span className="label bg-blue px-2.5 py-1 text-asphalt">{c.tag}</span>
                <p className="mt-5 text-[0.9375rem] text-steel">{c.title}</p>
                <p className="figure mt-2 text-[length:var(--step-heading)] text-bone">
                  {c.value}
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-bone/70">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-[clamp(2.5rem,5vw,4rem)] border-t border-[--rule] pt-[clamp(2.5rem,5vw,4rem)]">
            <span className="label text-steel">
              Sakokhule Trading subscribes to the key civil policy framework
            </span>
            <ul className="mt-5 grid gap-x-[var(--gutter)] gap-y-2.5 sm:grid-cols-2">
              {about.policyFramework.map((p, i) => (
                <li key={p} className="flex gap-3 text-[0.9375rem] text-bone/75">
                  <span className="value text-steel">{i + 1}.</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}

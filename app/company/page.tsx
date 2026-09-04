import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Wordmark from "@/components/Wordmark";
import { about, company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Sakokhule Trading (Pty) Ltd — a civil engineering and construction contractor based in Malelane, Mpumalanga.",
  alternates: { canonical: "/company" },
};

export default function CompanyPage() {
  return (
    <>
      <section className="shell flex flex-col items-center pb-[clamp(3rem,7vw,5rem)] pt-[clamp(4rem,9vw,7rem)]">
        <Wordmark className="rise rise-1 text-[clamp(1.6rem,5vw,2.75rem)]" />
        <p className="rise rise-3 label mt-8 text-center text-steel">
          {company.tagline}
        </p>
      </section>

      <section aria-label="About the company" className="shell pb-[clamp(3rem,6vw,5rem)]">
        <Reveal className="space-y-6">
          {about.body.map((p, i) => (
            <p key={i} className="lede max-w-measure text-bone/80">
              {p}
            </p>
          ))}
          <p className="lede max-w-measure text-bone/70">{about.team}</p>
        </Reveal>

        <Reveal delay={110} className="mt-11 border-t border-[--rule] pt-8">
          <span className="label text-steel">Principal</span>
          <dl className="mt-4">
            <div>
              <dt className="sr-only">Director</dt>
              <dd className="value text-bone">
                {company.principal} — {company.principalRole}
              </dd>
            </div>
          </dl>
        </Reveal>
      </section>

      {/* Vision, mission, objectives, how we work — direct from the approved
          profile PDF. */}
      <section aria-labelledby="vision" className="border-t border-[--rule] bg-asphalt-lift">
        <div className="shell band">
          <h2 id="vision" className="sr-only">Vision and mission</h2>
          <div className="grid gap-x-[var(--gutter)] gap-y-10 lg:grid-cols-2">
            <Reveal>
              <span className="label text-blue">Vision</span>
              <p className="lede mt-4 max-w-measure text-bone/80">{about.vision}</p>
            </Reveal>
            <Reveal delay={90}>
              <span className="label text-blue">Mission</span>
              <p className="lede mt-4 max-w-measure text-bone/80">{about.mission}</p>
            </Reveal>
          </div>

          <div className="mt-[clamp(2.5rem,5vw,4rem)] grid gap-x-[var(--gutter)] gap-y-10 border-t border-[--rule] pt-[clamp(2.5rem,5vw,4rem)] lg:grid-cols-2">
            <Reveal>
              <span className="label text-steel">Objectives</span>
              <ul className="mt-4 space-y-3">
                {about.objectives.map((o) => (
                  <li key={o} className="flex gap-3 text-[0.9375rem] leading-relaxed text-bone/75">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 bg-blue" />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={90}>
              <span className="label text-steel">How we work</span>
              <ul className="mt-4 space-y-3">
                {about.howWeWork.map((o) => (
                  <li key={o} className="flex gap-3 text-[0.9375rem] leading-relaxed text-bone/75">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 bg-blue" />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Subpages. */}
      <section aria-labelledby="more" className="border-t border-[--rule]">
        <div className="shell band">
          <h2 id="more" className="sr-only">More about the company</h2>
          <div className="grid gap-x-[var(--gutter)] gap-y-10 sm:grid-cols-3">
            {(
              [
                { href: "/company/services", label: "Services", body: "14 core business activities." },
                { href: "/company/projects", label: "Projects", body: "R31.5m+ delivered across Mpumalanga." },
                { href: "/company/credentials", label: "Credentials", body: "CIDB, B-BBEE, SARS, CIPC." },
              ] as const
            ).map((card, i) => (
              <Reveal key={card.href} delay={i * 90}>
                <Link href={card.href} className="group block border-t border-[--rule] pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-[length:var(--step-heading)] transition-colors duration-300 group-hover:text-blue">
                      {card.label}
                    </h3>
                    <span aria-hidden="true" className="label text-blue">→</span>
                  </div>
                  <p className="mt-2 text-[0.9375rem] text-bone/70">{card.body}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="where" className="border-t border-[--rule]">
        <div className="shell band">
          <Reveal>
            <h2 id="where" className="max-w-statement text-[length:var(--step-title)]">
              Where we work
            </h2>
            <dl className="mt-8 flex flex-wrap gap-x-16 gap-y-7">
              <div>
                <dt className="label text-steel">Office</dt>
                <dd className="value mt-2 text-bone">{company.address}</dd>
              </div>
              <div>
                <dt className="label text-steel">Operating area</dt>
                <dd className="value mt-2 text-bone">{company.region}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  );
}

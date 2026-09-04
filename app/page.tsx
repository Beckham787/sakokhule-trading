import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import HazardDivider from "@/components/HazardDivider";
import Wordmark from "@/components/Wordmark";
import { IMAGES } from "@/lib/images";
import { company, about, ACTIVITIES, credentials } from "@/lib/content";
import { PROJECTS, COMBINED_VALUE } from "@/lib/projects";
import { PLANT } from "@/lib/plant";

const STATS = [
  { label: "Combined contract value", value: COMBINED_VALUE },
  { label: "CIDB grading", value: credentials.cidb.grading },
  { label: "Founded", value: "2016" },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------------------------------------------------- hero */}
      <section className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden bg-asphalt pt-24">
        <div className="shell">
          <p className="rise rise-1 label text-blue">Company profile</p>
          <div className="rise rise-2 mt-6">
            <Wordmark className="text-[clamp(1.9rem,6vw,3.75rem)]" />
          </div>
          <p className="rise rise-3 label mt-5 text-steel">{company.tagline}</p>
          <div className="draw chainage mt-8 w-full max-w-[26rem]" aria-hidden="true" />
          <p className="rise rise-4 lede mt-9 max-w-measure text-bone/80">
            {company.intro}
          </p>

          <div className="rise rise-5 mt-10 flex flex-wrap gap-4">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-block bg-blue px-8 py-5 text-asphalt transition-colors duration-300 hover:bg-blue-lift"
            >
              WhatsApp {company.whatsappNumber}
            </a>
            <Link
              href="/company/credentials"
              className="label tap link-rule inline-flex items-center px-1 text-bone/80 transition-colors duration-300 hover:text-blue"
            >
              View credentials →
            </Link>
          </div>

          {/* Record strip — leads with the number a road authority or main
              contractor actually wants to see first. */}
          <div className="rise rise-5 mt-[clamp(3rem,6vw,4.5rem)] grid grid-cols-1 gap-x-[var(--gutter)] gap-y-8 border-t border-[--rule] pt-8 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="figure text-[length:var(--step-heading)] text-bone">
                  {s.value}
                </p>
                <p className="label mt-2 text-steel">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HazardDivider />

      {/* --------------------------------------------------------- about */}
      <section aria-label="About" className="shell band">
        <div className="grid gap-x-[var(--gutter)] gap-y-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="max-w-statement text-[length:var(--step-title)]">
              One yard, one fleet, two companies.
            </h2>
          </Reveal>
          <Reveal delay={90} className="space-y-6">
            <p className="lede text-bone/80">{about.body[0]}</p>
            <p className="lede text-bone/70">{about.body[1]}</p>
            <Link
              href="/company"
              className="label tap link-rule inline-flex items-center pt-2 text-blue"
            >
              More about the company →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------- track record */}
      <section aria-labelledby="projects" className="border-t border-[--rule] bg-asphalt-lift">
        <div className="shell band">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 id="projects" className="max-w-statement text-[length:var(--step-title)]">
                Track record.
              </h2>
              <Link
                href="/company/projects"
                className="label tap link-rule text-blue"
              >
                All projects →
              </Link>
            </div>
            <p className="lede mt-6 max-w-measure text-bone/75">
              A track record of civil works delivered across Mpumalanga, for
              mines, a national roads agency, a local municipality and a
              subcontracted maintenance programme.
            </p>
          </Reveal>

          <div className="mt-[clamp(2rem,4vw,3rem)] divide-y divide-[--rule] border-t border-[--rule]">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 5) * 60}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 py-5">
                  <div>
                    <p className="text-[1.0625rem] text-bone">
                      {p.client} <span className="text-steel">— {p.name}</span>
                    </p>
                    <p className="value mt-1.5 text-steel">{p.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="figure text-[1.0625rem] text-blue">{p.value}</p>
                    <p className="value mt-1.5 text-steel">{p.period}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-8 flex items-center justify-between border-t border-[--rule-strong] bg-bitumen px-6 py-5 sm:px-8">
              <span className="label text-steel">Combined contract value on record</span>
              <span className="figure text-[length:var(--step-heading)] text-bone">
                {COMBINED_VALUE}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- services */}
      <section aria-labelledby="services" className="border-t border-[--rule]">
        <div className="shell band">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 id="services" className="max-w-statement text-[length:var(--step-title)]">
                Core business.
              </h2>
              <Link href="/company/services" className="label tap link-rule text-blue">
                All 14 services →
              </Link>
            </div>
          </Reveal>

          <ul className="mt-[clamp(2rem,4vw,3rem)] grid gap-x-[var(--gutter)] gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.slice(0, 6).map((a, i) => (
              <Reveal as="li" key={a.name} delay={(i % 6) * 60}>
                <p className="text-[1.0625rem] text-bone">{a.name}</p>
                <p className="mt-1.5 text-[0.9375rem] text-bone/65">{a.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------------- plant */}
      <section aria-labelledby="plant" className="border-t border-[--rule] bg-asphalt-lift">
        <div className="shell band">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h2 id="plant" className="max-w-statement text-[length:var(--step-title)]">
                Owned plant.
              </h2>
              <Link href="/plant" className="label tap link-rule text-blue">
                Full fleet →
              </Link>
            </div>
            <p className="lede mt-6 max-w-measure text-bone/75">
              Sakokhule Trading works from an owned plant fleet, shared across
              the family&rsquo;s civil works operations — the same yard, the
              same machines, put to work on whichever site needs them.
            </p>
          </Reveal>

          <div className="mt-[clamp(2rem,4vw,3rem)] grid grid-cols-2 gap-x-[var(--gutter)] gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {PLANT.slice(0, 4).map((m, i) => {
              const img = IMAGES[m.image];
              return (
                <Reveal key={m.image} delay={i * 90}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-asphalt">
                    <Image
                      src={img.src}
                      alt={m.alt}
                      fill
                      placeholder="blur"
                      blurDataURL={img.blurDataURL}
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 46vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-[0.9375rem] text-bone">{m.name}</p>
                  <p className="label mt-1 text-steel">{m.make}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <HazardDivider />

      {/* --------------------------------------------------------------- cta */}
      <section className="shell band">
        <Reveal>
          <h2 className="max-w-statement text-[length:var(--step-title)]">
            Discuss a project.
          </h2>
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="label mt-9 inline-block bg-blue px-8 py-5 text-asphalt transition-colors duration-300 hover:bg-blue-lift"
          >
            WhatsApp {company.whatsappNumber}
          </a>
        </Reveal>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { company, DISCIPLINES, credentials } from "@/lib/content";
import { FLEET } from "@/lib/fleet";
import { PROJECTS, RECORD } from "@/lib/projects";

const TITLE_BLOCK = [
  { k: "EST", v: RECORD.founded },
  { k: "CIDB", v: credentials.cidb.grading },
  { k: "CONTRACTS", v: RECORD.contracts },
  { k: "BASE", v: "Malelane" },
];

const REGISTRATION = [
  { k: "CIDB grading", v: `${credentials.cidb.grading} — ${credentials.cidb.detail}` },
  { k: "Company registration", v: credentials.cipc.regNo },
  { k: "Ownership", v: credentials.bbbee.detail },
  { k: "Tax compliance", v: `${credentials.sars.status} · SARS` },
  { k: "Registered office", v: company.address },
];

/**
 * Fifth edition — CLAY STYLE × SURVEY LINE. Chosen 2026-09-08 after a
 * twenty-direction comparison exercise run against two shortlisted concepts
 * (see the studio vault note). The title-block/coordinate-line structure of
 * "Survey Line" carried through in Clay Style's soft, moulded register —
 * every surface rounded and puffy, pressed from one block of putty rather
 * than drawn in ink or lit on a HUD. No fleet or plant photographs anywhere
 * on this page, by request — the logo mark is the only image. No contract
 * values either — the record states years trading, contracts completed and
 * the CIDB grading instead of what any of it was worth. Same real record
 * (lib/*) as every edition before it.
 */
export default function HomePage() {
  return (
    <div className="clay">
      {/* ============================================================ hero */}
      <section className="clay-band relative overflow-hidden">
        <div className="shell relative pt-28">
          <Reveal className="flex items-center gap-3">
            <Image
              src="/images/brand/mark.png"
              alt="Sakokhule Trading mark"
              width={40}
              height={40}
              priority
            />
            <span className="label text-fg-mute">
              {company.tagline} · Malelane, Mpumalanga
            </span>
          </Reveal>

          <Reveal delay={80} as="h1" className="clay-display mt-10 max-w-[15ch] text-[clamp(2.6rem,6.2vw,5rem)]">
            We move earth, and shape what&rsquo;s <span className="terracotta">left behind.</span>
          </Reveal>

          <Reveal delay={160} className="mt-9">
            <Image
              src="/images/brand/mark.png"
              alt="Sakokhule Trading mark"
              width={104}
              height={104}
              className="clay-mark-anim"
            />
          </Reveal>

          <Reveal delay={220} className="mt-10 flex flex-wrap items-center gap-5">
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="clay-btn">
              Get a quote →
            </a>
            <Link href="/company/projects" className="clay-btn-ghost">
              See the work
            </Link>
          </Reveal>

          {/* The title block — Survey Line's device, pressed into the clay
              instead of ruled on paper. */}
          <Reveal delay={280} className="clay-surface-in mt-16 max-w-[42rem]">
            <div className="clay-titleblock">
              {TITLE_BLOCK.map((d) => (
                <div key={d.k} className="flex items-center gap-2.5">
                  <span className="clay-bead" aria-hidden="true" />
                  <div>
                    <dt className="label text-fg-mute">{d.k}</dt>
                    <dd className="value mt-0.5 text-[0.95rem] text-fg">{d.v}</dd>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* A soft contour line — the survey concept redrawn puffy: a
              rounded stroke with clay beads at the marked stations, standing
              in for a site plan rather than showing one. */}
          <Reveal delay={340} className="mt-14 max-w-[42rem]">
            <svg viewBox="0 0 640 120" className="w-full" fill="none" aria-hidden="true">
              <path
                d="M20 96 C 120 96, 150 40, 260 52 S 420 88, 500 34 S 600 20, 620 24"
                stroke="var(--clay-blue)"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
                opacity="0.55"
              />
              {[
                [20, 96],
                [260, 52],
                [500, 34],
                [620, 24],
              ].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r={i === 0 ? 7 : 5.5} fill="var(--clay-terracotta)" opacity={i === 0 ? 1 : 0.7} />
              ))}
            </svg>
          </Reveal>
        </div>
      </section>

      {/* ==================================================== what we do */}
      <section className="clay-band">
        <div className="shell">
          <p className="label text-fg-mute">01 · What we do</p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {DISCIPLINES.map((d, i) => (
              <Reveal key={d.name} delay={i * 100} className="clay-surface p-8">
                <p className="value text-fg-mute">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="clay-display mt-4 text-[clamp(1.5rem,2.8vw,2rem)]">{d.name}</h2>
                <p className="mt-4 max-w-[38ch] leading-relaxed text-fg-soft">{d.body}</p>
                <ul className="mt-7 flex flex-col gap-3">
                  {d.points.map((pt) => (
                    <li key={pt} className="flex gap-3 border-t border-hair pt-3 text-[0.9rem] text-fg-soft">
                      <span className="blue">●</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== the record */}
      <section className="clay-band">
        <div className="shell">
          <p className="label text-fg-mute">02 · Record</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { fig: RECORD.yearsTrading, unit: "years trading" },
              { fig: RECORD.contracts, unit: "contracts completed" },
              { fig: credentials.cidb.grading, unit: "CIDB grading" },
            ].map((s, i) => (
              <Reveal key={s.unit} delay={i * 90} className="clay-surface p-7 text-center">
                <p className="clay-display text-[clamp(2rem,4.5vw,3rem)]">{s.fig}</p>
                <p className="label mt-2 text-fg-mute">{s.unit}</p>
              </Reveal>
            ))}
          </div>

          <ul className="mt-14 flex flex-col gap-4">
            {PROJECTS.map((p, i) => (
              <Reveal as="li" key={p.name} delay={(i % 5) * 55} className="clay-surface-in grid items-baseline gap-x-6 gap-y-1 px-6 py-5 sm:grid-cols-12">
                <span className="value text-fg-mute sm:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="clay-display text-[1.1rem] sm:col-span-5">{p.client}</h3>
                <p className="text-[0.9rem] text-fg-soft sm:col-span-4">{p.name}</p>
                <p className="value text-fg-mute sm:col-span-2 sm:text-right">{p.period}</p>
              </Reveal>
            ))}
          </ul>

          <Link href="/company/projects" className="clay-btn-ghost mt-10">
            All projects →
          </Link>
        </div>
      </section>

      {/* ================================================ the fleet (spec) */}
      <section className="clay-band">
        <div className="shell">
          <div className="flex flex-wrap items-baseline justify-end gap-6">
            <Link href="/fleet" className="clay-btn-ghost">Fleet &amp; hire →</Link>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {FLEET.map((m, i) => (
              <Reveal as="li" key={m.name} delay={(i % 4) * 70} className="clay-surface-in px-6 py-5">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="clay-display text-[1.15rem]">{m.name}</h3>
                  <span className="value text-fg-mute">{m.make}</span>
                </div>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-fg-soft">{m.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================================================== credentials */}
      <section className="clay-band">
        <div className="shell">
          <dl className="flex flex-col gap-4">
            {REGISTRATION.map((r) => (
              <Reveal as="div" key={r.k} className="clay-surface-in grid gap-x-8 gap-y-1 px-6 py-5 sm:grid-cols-12">
                <dt className="label text-fg-mute sm:col-span-4 sm:pt-1">{r.k}</dt>
                <dd className="value text-[0.95rem] text-fg sm:col-span-8">{r.v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ============================================================= cta */}
      <section className="clay-band relative overflow-hidden">
        <div className="shell relative text-center">
          <h2 className="clay-display mx-auto max-w-[16ch] text-[clamp(2rem,5vw,3.5rem)]">
            Send us the job. We quote from <span className="terracotta">Malelane.</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="clay-btn">
              WhatsApp {company.whatsappNumber} →
            </a>
            <Link href="/contact" className="clay-btn-ghost">All contact details</Link>
          </div>

          <dl className="mx-auto mt-14 flex max-w-3xl flex-wrap justify-center gap-6">
            {[
              { t: "CALL", v: company.phones[0] },
              { t: "EMAIL", v: company.email },
              { t: "OFFICE", v: company.address },
            ].map((x) => (
              <div key={x.t} className="clay-surface-in px-5 py-4 text-left">
                <dt className="label text-fg-mute">{x.t}</dt>
                <dd className="value mt-1.5 text-fg">{x.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}

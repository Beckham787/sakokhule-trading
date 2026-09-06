import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import Figure from "@/components/Figure";
import SectionHead from "@/components/SectionHead";
import IndexList from "@/components/IndexList";
import LinkRows from "@/components/LinkRows";
import { about, company, credentials } from "@/lib/content";
import { RECORD } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Sakokhule Trading (Pty) Ltd — a civil engineering and construction contractor based in Malelane, Mpumalanga. Founded 2016, CIDB 5CE·3GB, 100% Black-owned.",
  alternates: { canonical: "/company" },
};

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title="Built in Malelane, working across Mpumalanga."
        lede="Sakokhule Trading moves earth and hires out plant: bulk earthworks, load and haul and road layers on contract, and the same owned machines out to other contractors with operators on them."
        meta={[
          { label: "Founded", value: `${credentials.cipc.registered}` },
          { label: "Registration", value: credentials.cipc.regNo },
          { label: "CIDB", value: credentials.cidb.grading },
          { label: "Operating area", value: company.region },
        ]}
      />

      <Reveal className="shell-wide">
        <Figure
          image="fleet/grader"
          alt="A yellow Galion T600B motor grader with its blade and ripper down, parked on gravel at the yard."
          caption="Motor grader at the yard — the machine most of the road work runs behind."
          credit="Malelane"
          ratio="aspect-[16/9] sm:aspect-[16/7]"
          focus="object-[50%_60%]"
          sizes="100vw"
        />
      </Reveal>

      {/* ===================================================== 01 who we are */}
      <section aria-labelledby="who" className="shell band">
        <SectionHead
          index="01"
          label="Who we are"
          title="A company started by one man who would not wait for the work to come to him."
        />

        <div className="mt-[clamp(2.5rem,5vw,3.5rem)] grid gap-x-[var(--gutter)] gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-6">
            <p className="lede">{about.body[0]}</p>
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-fg-soft">
              {about.body[1]}
            </p>
          </div>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="border-t border-hair pt-6">
              <p className="label text-fg-mute">Principal</p>
              <p className="font-display mt-4 text-[1.1875rem] leading-snug">
                {company.principal}
              </p>
              <p className="caption mt-2">{company.principalRole}</p>
            </div>
            <div className="mt-8 border-t border-hair pt-6">
              <p className="label text-fg-mute">The team</p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-fg-soft">
                {about.team}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================= 02 vision and mission */}
      {/* The one band on the site set on drawing paper. */}
      <section aria-labelledby="vision" className="dust relative border-y border-hair">
        <div aria-hidden="true" className="survey absolute inset-0" />
        <div className="shell band relative">
          <h2 id="vision" className="sr-only">
            Vision and mission
          </h2>
          <div className="grid gap-x-[var(--gutter)] gap-y-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <p className="label text-fg-mute">
                <span className="mr-4 text-accent">02</span>Vision
              </p>
              <p className="font-display mt-8 text-[length:var(--step-head)] leading-[1.45]">
                {about.vision}
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-6">
              <p className="label text-fg-mute">Mission</p>
              <p className="font-display mt-8 text-[length:var(--step-head)] leading-[1.45]">
                {about.mission}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================================================== 03 how we work */}
      <section aria-labelledby="how" className="shell band">
        <SectionHead
          index="03"
          label="How we work"
          title="Two objectives, three standing rules."
          lede="Taken from the company profile as the client set it out — this is the standard the office holds itself to on every contract."
        />

        <div className="mt-[clamp(2.5rem,5vw,3.5rem)] grid gap-x-[var(--gutter)] gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-4">
            <p className="label text-fg-mute">Objectives</p>
            <IndexList
              items={about.objectives.map((o) => ({ name: o }))}
              columns={2}
              className="mt-6 !grid-cols-1"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="label text-fg-mute">Standing rules</p>
            <IndexList
              items={about.howWeWork.map((o) => ({ name: o }))}
              columns={2}
              className="mt-6 !grid-cols-1"
            />
          </div>
        </div>
      </section>

      {/* ======================================================== 04 policy */}
      <section aria-labelledby="policy" className="border-t border-hair">
        <div className="shell band">
          <SectionHead
            index="04"
            label="Policy"
            title="The frameworks the company subscribes to."
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

      {/* ================================================= 05 where we work */}
      <section aria-labelledby="where" className="border-t border-hair">
        <div className="shell band">
          <SectionHead
            index="05"
            label="Where we work"
            title="One office, one yard, one province."
            href="/contact"
            linkLabel="Contact details →"
          />

          <div className="mt-[clamp(2.5rem,5vw,3.5rem)] grid gap-x-[var(--gutter)] gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-3" />
            <Reveal className="lg:col-span-4 border-t border-hair pt-6">
              <p className="label text-fg-mute">Office</p>
              <p className="font-display mt-4 text-[length:var(--step-head)] leading-snug">
                {company.address}
              </p>
            </Reveal>
            <Reveal delay={110} className="lg:col-span-5 border-t border-hair pt-6">
              <p className="label text-fg-mute">Operating area</p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-fg-soft">
                {company.region} — with completed contracts in Mbombela,
                Nkomazi, Schoemansdal and on the Strydomblok road, and plant
                that travels to whichever site needs it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- onward */}
      <section aria-labelledby="more" className="border-t border-hair">
        <div className="shell band">
          <h2 id="more" className="sr-only">
            More about the company
          </h2>
          <LinkRows
            rows={[
              {
                href: "/company/services",
                title: "Services",
                body: "The fourteen core business activities, listed in full.",
              },
              {
                href: "/company/projects",
                title: "Projects",
                body: `Completed contracts since ${RECORD.founded}, with client, scope and value.`,
              },
              {
                href: "/company/credentials",
                title: "Credentials",
                body: "CIDB grading, company registration, ownership and tax compliance.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}

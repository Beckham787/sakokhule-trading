import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { PROJECTS, COMBINED_VALUE } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Sakokhule Trading's completed projects — R31.5m+ in civil works delivered for mines, a national roads agency, a municipality and a maintenance subcontract.",
  alternates: { canonical: "/company/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Completed projects."
        lede="A track record of civil works delivered across Mpumalanga, for mines, a national roads agency, a local municipality and a subcontracted maintenance programme."
      />

      <section aria-label="Completed projects" className="shell band pt-0">
        <div className="divide-y divide-[--rule] border-t border-[--rule]">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 5) * 70}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 py-7">
                <div>
                  <span className="label text-steel">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 text-[1.1875rem] text-bone">
                    {p.client} <span className="text-steel">— {p.name}</span>
                  </p>
                  <p className="value mt-2 text-steel">{p.location}</p>
                </div>
                <div className="text-right">
                  <p className="figure text-[1.25rem] text-blue">{p.value}</p>
                  <p className="value mt-2 text-steel">{p.period}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[--rule-strong] bg-bitumen px-6 py-6 sm:px-8">
            <span className="label text-steel">Combined contract value on record</span>
            <span className="figure text-[length:var(--step-title)] text-bone">
              {COMBINED_VALUE}
            </span>
          </div>
        </Reveal>
      </section>
    </>
  );
}

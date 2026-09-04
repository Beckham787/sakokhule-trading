import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { ACTIVITIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sakokhule Trading's 14 core business activities — civil services delivered end to end.",
  alternates: { canonical: "/company/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Civil services, delivered end to end."
      />

      <section aria-label="Core business activities" className="shell band pt-0">
        <ul className="grid gap-x-[var(--gutter)] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((a, i) => (
            <Reveal as="li" key={a.name} delay={(i % 6) * 60}>
              <div className="border-t border-[--rule] pt-5">
                <span className="label text-blue">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 text-[1.0625rem] normal-case tracking-normal text-bone">
                  {a.name}
                </h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-bone/65">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}

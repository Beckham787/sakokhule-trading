import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import IndexList from "@/components/IndexList";
import { ACTIVITIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "The fourteen core business activities of Sakokhule Trading — building and civil construction, concrete, steel, paving, road renovation, bridges, water and waste systems, signage, culverts and guardrails.",
  alternates: { canonical: "/company/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Fourteen core business activities."
        lede="Listed as the company profile lists them. Roads and earthworks are the backbone of the book, but the grading, the plant and the crews carry the rest of it too."
      />

      <section aria-label="Core business activities" className="shell band pt-[clamp(1rem,2vw,2rem)]">
        <IndexList items={ACTIVITIES} />
      </section>
    </>
  );
}

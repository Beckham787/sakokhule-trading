import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/images";
import { PLANT } from "@/lib/plant";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Plant",
  description:
    "Sakokhule Trading's owned plant fleet — paver, excavators, wheel loader, motor grader, rollers and water tanker.",
  alternates: { canonical: "/plant" },
};

export default function PlantPage() {
  return (
    <>
      <PageHeader
        eyebrow="Plant"
        title="Owned plant fleet."
        lede="Shared across the family's civil works operations — the same yard, the same machines, put to work on whichever site needs them."
      />

      <section aria-label="Fleet" className="shell band pt-0">
        <div className="grid gap-x-[var(--gutter)] gap-y-12 sm:grid-cols-2">
          {PLANT.map((m, i) => {
            const img = IMAGES[m.image];
            return (
              <Reveal key={m.image} delay={i * 90}>
                <article>
                  <div className="relative aspect-[4/3] overflow-hidden bg-asphalt-lift">
                    <Image
                      src={img.src}
                      alt={m.alt}
                      fill
                      placeholder="blur"
                      blurDataURL={img.blurDataURL}
                      sizes="(min-width: 640px) 46vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-[--rule] pt-4">
                    <h2 className="text-[length:var(--step-heading)]">{m.name}</h2>
                    <span className="label shrink-0 text-steel">{m.make}</span>
                  </div>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-bone/75">
                    {m.role}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-t border-[--rule]">
        <div className="shell band">
          <Reveal>
            <h2 className="max-w-statement text-[length:var(--step-title)]">
              Need a machine on site?
            </h2>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="label mt-9 inline-block bg-blue px-7 py-4 text-asphalt transition-colors duration-300 hover:bg-blue-lift"
            >
              WhatsApp {company.whatsappNumber}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

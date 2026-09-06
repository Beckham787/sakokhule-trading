import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { IMAGES } from "@/lib/images";
import { FLEET } from "@/lib/fleet";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fleet & hire",
  description:
    "Plant hire from Sakokhule Trading — TATA tipper, Galion motor grader, Caterpillar backhoe loader and Powerstar water tanker, owned and operated out of Malelane, Mpumalanga.",
  alternates: { canonical: "/fleet" },
};

export default function FleetPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fleet & hire"
        title="The machines, and what they are for."
        lede="Every machine here is owned and kept at the Malelane yard, and every one goes out with one of our own operators on it. Hire is by the day, the week or the contract, anywhere in Mpumalanga."
        meta={[
          { label: "Machines", value: String(FLEET.length) },
          { label: "Basis", value: "Owned, operator supplied" },
          { label: "Yard", value: "Malelane" },
          { label: "Travels", value: "Mpumalanga-wide" },
        ]}
      />

      {/* The reading room: machine by machine, on the dust ground. */}
      <section aria-label="Fleet" className="dust border-t border-hair">
        <div className="shell band">
          <ul className="border-t border-hair">
          {FLEET.map((m, i) => {
            const img = IMAGES[m.image];
            return (
              <Reveal as="li" key={m.image} delay={(i % 2) * 90} className="border-b border-hair">
                <article className="grid gap-x-[var(--gutter)] gap-y-6 py-[clamp(2rem,4vw,3rem)] lg:grid-cols-12">
                  <p className="index lg:col-span-1">{String(i + 1).padStart(2, "0")}</p>

                  <div className="lg:col-span-5">
                    <div className="relative aspect-[4/3] overflow-hidden bg-pit-lift">
                      <Image
                        src={img.src}
                        alt={m.alt}
                        fill
                        placeholder="blur"
                        blurDataURL={img.blurDataURL}
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className={`object-cover ${m.focus}`}
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <h2 className="font-display text-[length:var(--step-head)] leading-snug">
                      {m.name}
                    </h2>
                    <p className="caption mt-2.5">{m.make}</p>
                    <p className="lede mt-5">{m.role}</p>
                    <a
                      href={company.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rule-link tap mt-7 inline-block text-[0.9375rem] text-fg transition-colors duration-300 hover:text-accent"
                    >
                      Ask about this machine →
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
        </div>
      </section>

      <section aria-labelledby="hire" className="grain border-t border-hair">
        <div className="shell band">
          <Reveal className="grid gap-x-[var(--gutter)] gap-y-10 lg:grid-cols-12">
            <p className="label text-fg-mute lg:col-span-3">Hire</p>
            <div className="lg:col-span-9">
              <h2 id="hire" className="max-w-[22ch] text-[length:var(--step-title)]">
                Tell us the site and the job, and we will quote the machine.
              </h2>
              <p className="lede mt-7 max-w-measure">
                Rates depend on the machine, the distance to site and how long
                you need it — so they are quoted per job rather than published.
                Send the scope on WhatsApp and you will have a number back.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
                <a
                  href={company.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn label"
                >
                  WhatsApp {company.whatsappNumber}
                </a>
                <Link
                  href="/contact"
                  className="rule-link tap text-[0.9375rem] text-fg-soft transition-colors duration-300 hover:text-fg"
                >
                  All contact details →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

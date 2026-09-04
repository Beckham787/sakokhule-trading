import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sakokhule Trading — WhatsApp, telephone and office address in Malelane, Mpumalanga.",
  alternates: { canonical: "/contact" },
};

const tel = (n: string) => `tel:+27${n.replace(/\s/g, "").slice(1)}`;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        lede="WhatsApp is the quickest way through."
      />

      <section aria-label="Contact details" className="shell band pt-0">
        <div className="grid gap-x-[var(--gutter)] gap-y-12 lg:grid-cols-2">
          <Reveal>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="label inline-block bg-blue px-8 py-5 text-asphalt transition-colors duration-300 hover:bg-blue-lift"
            >
              WhatsApp {company.whatsappNumber}
            </a>

            <ul className="mt-11 space-y-7 border-t border-[--rule] pt-8">
              {company.phones.map((p, i) => (
                <li key={p}>
                  <span className="label text-steel">
                    {i === 0 ? "Telephone" : "Alternative"}
                  </span>
                  <a
                    href={tel(p)}
                    className="mt-2 block font-display text-[length:var(--step-heading)] tracking-[-0.01em] text-bone transition-colors duration-300 hover:text-blue"
                  >
                    {p}
                  </a>
                </li>
              ))}

              <li>
                <span className="label text-steel">Email</span>
                <a
                  href={`mailto:${company.email}`}
                  className="tap link-rule mt-2 block break-all text-bone transition-colors duration-300 hover:text-blue"
                >
                  {company.email}
                </a>
              </li>

              <li>
                <span className="label text-steel">Bid office</span>
                <a
                  href={`mailto:${company.bidOfficeEmail}`}
                  className="tap link-rule mt-2 block break-all text-bone transition-colors duration-300 hover:text-blue"
                >
                  {company.bidOfficeEmail}
                </a>
                <p className="value mt-1.5 text-steel">{company.bidOfficeContact}</p>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={90}>
            <div className="border border-[--rule] p-8">
              <span className="label text-steel">Office</span>
              <p className="mt-4 font-display text-[length:var(--step-heading)] leading-[1.25] tracking-[-0.01em]">
                {company.address}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

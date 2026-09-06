import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sakokhule Trading — WhatsApp, telephone, email, bid office and the registered office in Malelane, Mpumalanga.",
  alternates: { canonical: "/contact" },
};

const tel = (n: string) => `tel:+27${n.replace(/\s/g, "").slice(1)}`;

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to the office."
        lede="WhatsApp is the quickest route through. For tender documents and bid queries, the bid office address below goes straight to the right desk."
      />

      <section aria-label="Contact details" className="shell band pt-[clamp(1rem,2vw,2rem)]">
        <div className="grid gap-x-[var(--gutter)] gap-y-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn label"
            >
              WhatsApp {company.whatsappNumber}
            </a>

            <dl className="mt-12 border-t border-hair">
              {company.phones.map((p, i) => (
                <div
                  key={p}
                  className="grid gap-x-[var(--gutter)] gap-y-1 border-b border-hair py-5 sm:grid-cols-3"
                >
                  <dt className="label pt-1 text-fg-mute sm:col-span-1">
                    {i === 0 ? "Telephone" : "Alternative"}
                  </dt>
                  <dd className="sm:col-span-2">
                    <a
                      href={tel(p)}
                      className="rule-link tap font-display text-[length:var(--step-head)] transition-colors duration-300 hover:text-accent"
                    >
                      {p}
                    </a>
                  </dd>
                </div>
              ))}

              <div className="grid gap-x-[var(--gutter)] gap-y-1 border-b border-hair py-5 sm:grid-cols-3">
                <dt className="label pt-1 text-fg-mute sm:col-span-1">Email</dt>
                <dd className="sm:col-span-2">
                  <a
                    href={`mailto:${company.email}`}
                    className="rule-link tap value break-all text-fg transition-colors duration-300 hover:text-accent"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>

              <div className="grid gap-x-[var(--gutter)] gap-y-1 border-b border-hair py-5 sm:grid-cols-3">
                <dt className="label pt-1 text-fg-mute sm:col-span-1">Bid office</dt>
                <dd className="sm:col-span-2">
                  <a
                    href={`mailto:${company.bidOfficeEmail}`}
                    className="rule-link tap value break-all text-fg transition-colors duration-300 hover:text-accent"
                  >
                    {company.bidOfficeEmail}
                  </a>
                  <p className="caption mt-2">{company.bidOfficeContact}</p>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="border-t border-hair pt-6">
              <p className="label text-fg-mute">Registered office</p>
              <p className="font-display mt-5 text-[length:var(--step-head)] leading-[1.35]">
                {company.address}
              </p>
              <p className="caption mt-4">{company.region}, South Africa</p>
            </div>

            <div className="mt-10 border-t border-hair pt-6">
              <p className="label text-fg-mute">Sister company</p>
              <p className="mt-5 text-[0.9375rem] leading-relaxed text-fg-soft">
                Izanolihle Roads works from the same yard and the same fleet
                under the same principal. They are separate registered
                companies, and each holds its own contracts.
              </p>
              <a
                href="https://izanolihleroads.co.za"
                className="rule-link tap mt-5 inline-block text-[0.9375rem] text-fg transition-colors duration-300 hover:text-accent"
              >
                izanolihleroads.co.za →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

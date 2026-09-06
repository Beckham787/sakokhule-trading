import Link from "next/link";
import { company, credentials } from "@/lib/content";
import StudioMark from "@/components/StudioMark";
import Wordmark from "@/components/Wordmark";

const tel = (n: string) => `tel:+27${n.replace(/\s/g, "").slice(1)}`;

const PAGES = [
  { href: "/company", label: "Company" },
  { href: "/company/services", label: "Services" },
  { href: "/company/projects", label: "Projects" },
  { href: "/company/credentials", label: "Credentials" },
  { href: "/fleet", label: "Fleet & hire" },
  { href: "/contact", label: "Contact" },
];

const REGISTRATION: [string, string][] = [
  ["CIPC", credentials.cipc.regNo],
  ["CIDB", credentials.cidb.grading],
  ["CRS", credentials.cidb.crsNumber],
  ["B-BBEE", credentials.bbbee.ownership],
  ["SARS", credentials.sars.status],
];

/**
 * The company's colophon, kept short on purpose: an earlier edition ran to
 * most of a phone screen on its own. Same raised pit panel behind a
 * haul-road rule so a dark-ground page doesn't just run out at the bottom,
 * but every column here is now a tight list, not a block of prose.
 */
export default function SiteFooter() {
  return (
    <footer className="grain border-t-2 border-soil bg-pit-lift">
      <div className="shell-wide pb-6 pt-[clamp(1.75rem,3.5vw,2.5rem)]">
        <div className="grid grid-cols-2 gap-x-[var(--gutter)] gap-y-7 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Wordmark className="text-fg" onNight size={28} />
            <p className="value mt-3.5 text-fg-mute">{company.address}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="label text-fg-mute">Pages</p>
            <ul className="mt-3.5 space-y-1.5">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="rule-link tap text-[0.9375rem] text-fg-soft transition-colors duration-300 hover:text-fg"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="label text-fg-mute">Contact</p>
            <ul className="mt-3.5 space-y-1.5">
              {company.phones.map((p) => (
                <li key={p}>
                  <a
                    href={tel(p)}
                    className="rule-link tap value text-fg-soft transition-colors duration-300 hover:text-fg"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="rule-link tap value break-all text-fg-soft transition-colors duration-300 hover:text-fg"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <p className="label text-fg-mute">Registration</p>
            <dl className="mt-3.5 space-y-1.5">
              {REGISTRATION.map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-4">
                  <dt className="value w-[4.5rem] shrink-0 text-fg-mute">{k}</dt>
                  <dd className="value text-fg-soft">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-hair pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="value text-fg-mute">
            Sister company to{" "}
            <a
              href="https://izanolihleroads.co.za"
              className="rule-link text-fg-soft transition-colors duration-300 hover:text-fg"
            >
              Izanolihle Roads
            </a>
          </p>
          <div className="flex items-center gap-6">
            <p className="value text-fg-mute">
              © {new Date().getFullYear()} {company.legalName}
            </p>
            <StudioMark />
          </div>
        </div>
      </div>
    </footer>
  );
}

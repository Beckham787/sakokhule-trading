import Link from "next/link";
import Image from "next/image";
import { company, credentials } from "@/lib/content";
import StudioMark from "@/components/StudioMark";

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
 * Redesigned alongside the Clay Style homepage, 2026-09-08. Always `.clay`
 * regardless of which page it closes out — a warm putty band with the same
 * pressed-in surfaces as the rest of the edition, rather than the old dark
 * pit panel and haul-road rule. Same short, list-only content as before;
 * only the register changed.
 */
export default function SiteFooter() {
  return (
    <footer className="clay border-t border-hair bg-bg">
      <div className="shell-wide pb-8 pt-[clamp(2rem,4vw,3rem)]">
        <div className="clay-surface-in grid grid-cols-2 gap-x-8 gap-y-8 p-6 lg:grid-cols-12 lg:p-8">
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center gap-3">
              <Image src="/images/brand/mark.png" alt="" width={30} height={30} />
              <span className="clay-display text-[1rem] leading-none">{company.businessName}</span>
            </div>
            <p className="value mt-3.5 text-fg-mute">{company.address}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="label text-fg-mute">Pages</p>
            <ul className="mt-3.5 space-y-2">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="clay-link text-[0.9375rem]">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="label text-fg-mute">Contact</p>
            <ul className="mt-3.5 space-y-2">
              {company.phones.map((p) => (
                <li key={p}>
                  <a href={tel(p)} className="clay-link value">
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className="clay-link value break-all">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-3">
            <p className="label text-fg-mute">Registration</p>
            <dl className="mt-3.5 space-y-2">
              {REGISTRATION.map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-4">
                  <dt className="value w-[4.5rem] shrink-0 text-fg-mute">{k}</dt>
                  <dd className="value text-fg-soft">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 px-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="value text-fg-mute">
            Sister company to{" "}
            <a href="https://izanolihleroads.co.za" className="clay-link">
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

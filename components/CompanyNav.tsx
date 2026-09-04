"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Sub-navigation for the Company section and its pages. */
const LINKS = [
  { href: "/company", label: "Overview" },
  { href: "/company/services", label: "Services" },
  { href: "/company/projects", label: "Projects" },
  { href: "/company/credentials", label: "Credentials" },
];

export default function CompanyNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Company"
      className="border-b border-[--rule] bg-asphalt-lift"
    >
      <ul className="shell flex flex-wrap items-center gap-x-8 gap-y-2 py-4">
        {LINKS.map((l) => {
          const active =
            l.href === "/company"
              ? pathname === "/company"
              : pathname.startsWith(l.href);

          return (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`label tap link-rule transition-colors duration-300 ${
                  active ? "text-blue" : "text-bone/70 hover:text-bone"
                }`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

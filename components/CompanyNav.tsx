"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/company", label: "Overview" },
  { href: "/company/services", label: "Services" },
  { href: "/company/projects", label: "Projects" },
  { href: "/company/credentials", label: "Credentials" },
];

/** Sub-navigation for the Company section. A hairline and four words. */
export default function CompanyNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Company" className="border-b border-hair">
      <ul className="shell-wide flex flex-wrap items-center gap-x-9 gap-y-2 py-4">
        {LINKS.map((l) => {
          const active =
            l.href === "/company" ? pathname === "/company" : pathname.startsWith(l.href);

          return (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`label tap transition-colors duration-300 ${
                  active
                    ? "text-fg underline decoration-hair-strong underline-offset-[6px]"
                    : "rule-link text-fg-mute hover:text-fg"
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

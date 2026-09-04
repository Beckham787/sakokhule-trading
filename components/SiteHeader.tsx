"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Wordmark from "@/components/Wordmark";
import { company } from "@/lib/content";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/company", label: "Company" },
  { href: "/plant", label: "Plant" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const active = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative z-50 bg-asphalt/85 backdrop-blur-sm">
        <div className="shell flex items-center justify-between gap-6 border-b border-[--rule] py-3.5">
          <Link
            href="/"
            onClick={close}
            className="tap text-bone"
            aria-label={`${company.businessName} — home`}
          >
            <Wordmark />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active(item.href) ? "page" : undefined}
                className={`label tap link-rule transition-colors duration-300 ${
                  active(item.href) ? "text-blue" : "text-bone/70 hover:text-bone"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="label bg-blue px-5 py-3 text-asphalt transition-colors duration-300 hover:bg-blue-lift"
            >
              WhatsApp
            </a>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="label tap text-bone lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="site-menu"
          className="menu-panel fixed inset-0 z-40 flex flex-col justify-center bg-asphalt lg:hidden"
        >
          <nav aria-label="Primary" className="shell flex flex-col gap-1">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
                className={`menu-line font-display border-b border-[--rule] py-5 text-[clamp(1.75rem,7vw,2.75rem)] transition-colors duration-300 ${
                  active(item.href) ? "text-blue" : "text-bone"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              style={{ "--d": `${NAV.length * 60}ms` } as React.CSSProperties}
              className="menu-line label mt-9 self-start bg-blue px-6 py-4 text-asphalt"
            >
              WhatsApp us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

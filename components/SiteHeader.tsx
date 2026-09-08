"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { company } from "@/lib/content";

const NAV = [
  { href: "/company", label: "Company" },
  { href: "/company/projects", label: "Projects" },
  { href: "/fleet", label: "Fleet" },
  { href: "/contact", label: "Contact" },
];

/**
 * Redesigned alongside the Clay Style homepage, 2026-09-08. One toggle and
 * one dropdown panel at every width — the old split (inline links on
 * desktop, a full-screen take-over on mobile) is gone. Always `.clay`
 * regardless of which page it's sitting over, so the header reads as one
 * thing sitewide even on the inner pages that haven't moved to Clay Style
 * yet: it floats transparent over the top of the page, then becomes a
 * puffy clay bar once you scroll, or once the menu opens.
 */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    href === "/company" ? pathname === "/company" : pathname.startsWith(href);

  return (
    <header className="clay fixed inset-x-0 top-0 z-50">
      <div className="shell-wide pt-3">
        <div
          className={`flex items-center justify-between gap-8 px-5 py-3 transition-all duration-400 ${
            lifted || open ? "clay-surface" : ""
          }`}
        >
          <Link
            href="/"
            onClick={close}
            className="tap flex items-center gap-3"
            aria-label={`${company.businessName} — home`}
          >
            <Image src="/images/brand/mark.png" alt="" width={34} height={34} priority />
            <span className="flex flex-col">
              <span className="clay-display text-[1rem] leading-none">{company.businessName}</span>
              <span className="label mt-1.5 leading-none text-fg-mute">{company.tagline}</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn hidden sm:inline-flex"
            >
              WhatsApp
            </a>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className="clay-btn-ghost"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* The dropdown — one panel, every width, puffy and pressed just
            like everything else on Clay Style. */}
        {open && (
          <div id="site-menu" className="mt-3 pb-4">
            <nav aria-label="Primary" className="clay-surface flex flex-col p-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  aria-current={active(item.href) ? "page" : undefined}
                  className="clay-nav-link"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="clay-btn mt-2 justify-center sm:ml-auto sm:mt-0"
              >
                WhatsApp {company.whatsappNumber} →
              </a>
            </nav>
            <p className="value mt-4 px-2 text-fg-mute">{company.address}</p>
          </div>
        )}
      </div>
    </header>
  );
}

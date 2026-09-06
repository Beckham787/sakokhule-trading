"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Wordmark from "@/components/Wordmark";
import { company } from "@/lib/content";

const NAV = [
  { href: "/company", label: "Company" },
  { href: "/company/projects", label: "Projects" },
  { href: "/fleet", label: "Fleet" },
  { href: "/contact", label: "Contact" },
];

/**
 * The header does almost nothing, on purpose. It sits transparent over the
 * hero until you leave the top of the page, then the pit ground and a
 * hairline arrive under it. No blur, no shadow, no colour block.
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-50 transition-colors duration-500 ${
          lifted || open ? "border-b border-hair bg-pit" : "border-b border-transparent"
        }`}
      >
        <div className="shell-wide flex items-center justify-between gap-8 py-4">
          <Link
            href="/"
            onClick={close}
            className="tap text-fg"
            aria-label={`${company.businessName} — home`}
          >
            <Wordmark size={34} onNight />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active(item.href) ? "page" : undefined}
                className={`tap text-[0.9375rem] transition-colors duration-300 ${
                  active(item.href)
                    ? "text-fg underline decoration-hair-strong underline-offset-[7px]"
                    : "rule-link text-fg-soft hover:text-fg"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn label"
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
            className="label tap text-fg lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="site-menu"
          className="grain fixed inset-0 z-40 flex flex-col justify-between bg-pit pt-24 lg:hidden"
        >
          <nav aria-label="Primary" className="shell flex flex-col">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                style={{ "--d": `${i * 55}ms` } as React.CSSProperties}
                className={`menu-line font-display border-b border-hair py-6 text-[clamp(1.75rem,7vw,2.5rem)] ${
                  active(item.href) ? "text-fg-mute" : "text-fg"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="shell pb-12">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="btn label w-full justify-center"
            >
              WhatsApp {company.whatsappNumber}
            </a>
            <p className="value mt-6 text-fg-mute">{company.address}</p>
          </div>
        </div>
      )}
    </header>
  );
}

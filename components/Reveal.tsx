"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  /** Stagger within a group, in milliseconds. */
  delay?: number;
  threshold?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Scroll-triggered fade-and-rise. IntersectionObserver only — no animation
 * library on this site.
 *
 * The element renders visible and is only "armed" (hidden) inside an effect,
 * after the observer has attached. If JS never runs, or hydration fails, the
 * content is still on the page and readable.
 */
export default function Reveal({
  children,
  delay = 0,
  threshold = 0.15,
  as: Tag = "div",
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"idle" | "armed" | "in">("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* Anything already on screen at load stays put. Arming it would hide
       content the reader can already see and fade it back in — a flash on first
       paint, not a reveal. */
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    setState("armed");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("in");
            observer.disconnect();
          }
        }
      },
      /* The huge top margin extends the root upwards without limit so anything
         already scrolled past still counts as intersecting — otherwise jumping
         down the page (scroll restoration, an anchor link, End) leaves
         everything above the landing point armed and permanently invisible. */
      { threshold, rootMargin: "9999px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal={state === "idle" ? undefined : state}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}

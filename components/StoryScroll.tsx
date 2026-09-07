"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import Reveal from "@/components/Reveal";

export type StoryStep = {
  key: string;
  image: keyof typeof IMAGES;
  alt: string;
  /** Tailwind object-position class. */
  focus?: string;
  /** Omit for a wordless beat — the hero, and the pause before Registration. */
  content?: ReactNode;
  /**
   * How much scroll distance this step owns, in svh. A floor, not a cap —
   * if a step's own content ever needs more room than this, its track
   * simply grows to fit (see the caption note below). Not a container the
   * words scroll inside — just how long the reader has to sit with this
   * picture before the next one takes over.
   */
  dwell?: number;
};

/**
 * The homepage as one held photograph, the way olsonkundig.com does its own
 * front page: the picture changes under you, and each caption sits in one
 * screen position and holds there while its picture does, rather than
 * scrolling past like ordinary page text.
 *
 * Second version, 2026-09-07 — the first one hung the tab. It kept every
 * step's picture AND every step's caption stacked in one absolutely
 * positioned box for the whole section, all of them toggled by a single
 * IntersectionObserver watching a 16%-tall band in the middle of the
 * screen. Two things came from that: a step whose caption was taller than
 * one screen (three of the four here, once "What we do" ran two
 * disciplines through the same beat) had nowhere to put the overflow, so
 * it rode up over the fixed header — and a narrow trigger band is exactly
 * the kind of thing a fast scroll (a trackpad flick, a dragged scrollbar)
 * can jump straight over, which left the observer re-arming against a
 * moving target rather than settling, and the tab with it.
 *
 * This version only asks the browser to do the one thing browsers are
 * already good at: `position: sticky`. The picture stack is still one
 * sticky, full-bleed layer shared down the whole section, cross-fading on
 * a plain scroll-position readout (which step's track is nearest the
 * middle of the screen — recomputed at most once per frame, so a big jump
 * just lands on the right answer instead of missing a window). But the
 * caption for each step now lives inside *that step's own track*, pinned
 * with its own `sticky top-0`, scoped to that track alone by the normal
 * CSS containing-block rule. It can never sit on top of the header (it
 * starts sticking from the section's own top, same as the picture), it
 * can never overlap a neighbour's caption (each is boxed inside its own
 * track), and if a caption ever does need more than one screen, that
 * track's `overflow-y-auto` lets it scroll on its own rather than clip —
 * belt and braces, since no caption here is actually that long any more
 * (see app/page.tsx: "What we do" is now two beats, one discipline each,
 * not one beat carrying both).
 */
export default function StoryScroll({ steps }: { steps: StoryStep[] }) {
  const [active, setActive] = useState(0);
  const tracks = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      let bestIndex = 0;
      let bestDist = Infinity;

      tracks.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        // 0 while the viewport's mid-line is inside this track; otherwise
        // the distance to its nearer edge. Whichever track the middle of
        // the screen is actually sitting in wins, full stop — no band to
        // miss, no state to re-settle.
        const dist = mid < r.top ? r.top - mid : mid > r.bottom ? mid - r.bottom : 0;
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });

      setActive((prev) => (prev === bestIndex ? prev : bestIndex));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [steps.length]);

  return (
    <section className="grain relative">
      {/* The pictures — one shared sticky layer for the whole section,
          exactly as before. Only the trigger for *which one* changed. */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {steps.map((step, i) => {
          const img = IMAGES[step.image];
          return (
            <div
              key={step.key}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img.src}
                alt={step.content ? "" : step.alt}
                fill
                priority={i === 0}
                placeholder="blur"
                blurDataURL={img.blurDataURL}
                sizes="100vw"
                className={`object-cover transition-transform duration-[2600ms] ease-out motion-reduce:transition-none ${
                  step.focus ?? "object-center"
                } ${i === active ? "scale-100" : "scale-[1.045]"}`}
              />
              <div
                aria-hidden="true"
                className={`absolute inset-0 ${step.content ? "hero-scrim" : "hero-scrim-light"}`}
              />
            </div>
          );
        })}
      </div>

      {/* One track per step. Each is at least `dwell` tall — that's the
          scroll distance the picture holds for — and each owns its own
          sticky caption, so nothing here can ever reach outside its own
          step. */}
      <div className="relative">
        {steps.map((step, i) => (
          <div
            key={step.key}
            ref={(el) => {
              tracks.current[i] = el;
            }}
            style={{ minHeight: `${step.dwell ?? 100}svh` }}
            className="relative"
          >
            {step.content && (
              <div className="sticky top-0 flex h-[100svh] max-h-[100svh] items-end overflow-y-auto pb-[clamp(2.5rem,6vw,4.5rem)] pt-[clamp(5rem,8vw,7rem)]">
                <Reveal className="w-full" threshold={0.3}>
                  {step.content}
                </Reveal>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

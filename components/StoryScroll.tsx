"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

export type StoryStep = {
  key: string;
  image: keyof typeof IMAGES;
  alt: string;
  /** Tailwind object-position class. */
  focus?: string;
  /** Omit for a wordless beat — the hero, and the pause before Registration. */
  content?: ReactNode;
  /**
   * How much scroll distance this step owns, in svh. Not a container the
   * words scroll inside — see below — just how long the reader has to sit
   * with this picture before the next one takes over.
   */
  dwell?: number;
};

/**
 * The homepage as one held photograph, the way olsonkundig.com does its own
 * front page: the picture changes under you, and the caption that goes with
 * it sits in one fixed spot on the screen and stays there — it does not
 * ride up with the scroll the way ordinary page content would. Checked
 * against the reference site directly (2026-09-06): its captions hold a
 * single screen position across a whole scroll passage and only ever
 * *replace themselves*, never translate.
 *
 * Earlier version of this component put the words in normal document flow,
 * pulled up over the sticky image with a negative margin — which meant a
 * step taller than one screen (ours: "What we do", two disciplines) scrolled
 * its own text past the reader exactly like a normal page, illegible at any
 * speed. Fixed by moving the words into the sticky layer itself, as their
 * own cross-fading stack alongside the images: nothing in view ever moves,
 * it only ever swaps. Scroll distance is now just a set of empty, unstyled
 * spacer tracks below — one per step, sized by `dwell` — watched by an
 * IntersectionObserver purely to decide which cross-fade is active.
 */
export default function StoryScroll({ steps }: { steps: StoryStep[] }) {
  const [active, setActive] = useState(0);
  const nodes = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const i = nodes.current.indexOf(entry.target as HTMLDivElement);
          if (i !== -1) setActive(i);
        }
      },
      { threshold: 0, rootMargin: "-42% 0px -42% 0px" },
    );

    for (const node of nodes.current) if (node) observer.observe(node);
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <section className="grain relative">
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
                className={`object-cover ${step.focus ?? "object-center"}`}
              />
              <div
                aria-hidden="true"
                className={`absolute inset-0 ${step.content ? "hero-scrim" : "hero-scrim-light"}`}
              />
            </div>
          );
        })}

        {/* The words: fixed to the screen, never in document flow, never
            translating — only ever cross-fading in place, same as the
            pictures above. */}
        {steps.map(
          (step, i) =>
            step.content && (
              <div
                key={`${step.key}-copy`}
                aria-hidden={i !== active}
                className={`pointer-events-none absolute inset-0 flex items-end pb-[clamp(3rem,7vw,5.5rem)] pt-[clamp(9rem,16vw,13rem)] transition-opacity duration-[900ms] ease-out ${
                  i === active ? "opacity-100 delay-[500ms]" : "opacity-0"
                }`}
              >
                <div className={i === active ? "pointer-events-auto w-full" : "w-full"}>
                  {step.content}
                </div>
              </div>
            ),
        )}
      </div>

      {/* Unstyled scroll track — one spacer per step, however long that
          step should hold the screen before the next takes over. No
          content lives here; it exists only for the observer below. */}
      <div className="relative">
        {steps.map((step, i) => (
          <div
            key={step.key}
            ref={(el) => {
              nodes.current[i] = el;
            }}
            style={{ height: `${step.dwell ?? 100}svh` }}
          />
        ))}
      </div>
    </section>
  );
}

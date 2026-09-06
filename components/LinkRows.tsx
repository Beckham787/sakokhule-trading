import Link from "next/link";
import Reveal from "@/components/Reveal";

export type Row = { href: string; title: string; body: string };

/**
 * Onward links as full-width rows rather than cards — a hairline, a title
 * in the display serif, one line of description, and an arrow that steps
 * right on hover. Cards would box off what is really just a table of
 * contents.
 */
export default function LinkRows({ rows }: { rows: readonly Row[] }) {
  return (
    <ul className="border-t border-hair">
      {rows.map((r, i) => (
        <Reveal as="li" key={r.href} delay={i * 70} className="border-b border-hair">
          <Link href={r.href} className="group block py-7">
            <div className="grid items-baseline gap-x-[var(--gutter)] gap-y-2 lg:grid-cols-12">
              <p className="index lg:col-span-1">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-[length:var(--step-head)] transition-colors duration-300 group-hover:text-accent lg:col-span-4">
                {r.title}
              </h3>
              <p className="text-[0.9375rem] text-fg-soft lg:col-span-6">{r.body}</p>
              <span
                aria-hidden="true"
                className="label text-fg-mute transition-transform duration-300 group-hover:translate-x-1 lg:col-span-1 lg:text-right"
              >
                →
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

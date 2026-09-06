import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/lib/projects";

/**
 * Completed contracts, as a record rather than a sales pitch.
 *
 * The contract value sits in mono at body size on the right of each row —
 * present, checkable, and deliberately no louder than the client's name. An
 * earlier edition set those figures at display scale across the homepage; a
 * company that has done the work does not need to shout the invoice.
 */
export default function WorkList({
  limit,
  notes = false,
}: {
  limit?: number;
  /** Show the qualification on a value (an extension, a scope change). Used
      on the projects page, where there is room to be precise. */
  notes?: boolean;
}) {
  const rows = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <ul className="border-t border-hair">
      {rows.map((p, i) => (
        <Reveal as="li" key={p.name} delay={(i % 5) * 60} className="border-b border-hair">
          <div className="grid gap-x-[var(--gutter)] gap-y-3 py-6 lg:grid-cols-12">
            <p className="index pt-2 lg:col-span-1">{String(i + 1).padStart(2, "0")}</p>

            <div className="lg:col-span-6">
              <h3 className="font-display text-[length:var(--step-head)] leading-snug">
                {p.client}
              </h3>
              <p className="mt-1.5 text-[0.9375rem] text-fg-soft">{p.name}</p>
              {notes && p.note && <p className="caption mt-2">{p.note}</p>}
            </div>

            <div className="lg:col-span-3 lg:pt-2">
              <p className="value text-fg-mute">{p.location}</p>
            </div>

            <div className="lg:col-span-2 lg:pt-2 lg:text-right">
              <p className="value text-fg">{p.value}</p>
              <p className="value mt-1 text-fg-mute">{p.period}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

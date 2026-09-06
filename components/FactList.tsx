import Reveal from "@/components/Reveal";

export type Fact = { label: string; value: string; note?: string };

/**
 * A ledger of label-and-value rows — registration numbers, gradings, dates.
 * One hairline per row, the label in mono at the left, the value set plain.
 * Used wherever the site states something that a client will check.
 */
export default function FactList({
  facts,
  className = "",
}: {
  facts: readonly Fact[];
  className?: string;
}) {
  return (
    <dl className={`border-t border-hair ${className}`}>
      {facts.map((f, i) => (
        <Reveal key={f.label} delay={(i % 6) * 55}>
          {/* Three tracks, not twelve, for a two-group split: eleven gutter
              gaps at up to 4rem each can outrun a narrow nested column
              (this exact grid, at sm:grid-cols-12 inside a col-span-7 on
              /contact, was measuring 11 × 64px = 704px of gap against a
              589px container — every track collapsed to 0 and the value
              text overflowed straight across the next column). Three
              tracks means two gaps, which no realistic container loses to. */}
          <div className="grid gap-x-[var(--gutter)] gap-y-1 border-b border-hair py-5 sm:grid-cols-3">
            <dt className="label pt-1 text-fg-mute sm:col-span-1">{f.label}</dt>
            <dd className="sm:col-span-2">
              <span className="value text-fg">{f.value}</span>
              {f.note && (
                <span className="mt-1.5 block text-[0.9375rem] leading-relaxed text-fg-soft">
                  {f.note}
                </span>
              )}
            </dd>
          </div>
        </Reveal>
      ))}
    </dl>
  );
}

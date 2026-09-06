import Reveal from "@/components/Reveal";

export type IndexItem = { name: string; body?: string };

/**
 * A numbered index of capabilities. Hairline per item, number hanging above
 * the name — the register of a contents page or a bill of quantities, which
 * is exactly what a list of fourteen services is.
 */
export default function IndexList({
  items,
  columns = 3,
  offset = 0,
  className = "",
}: {
  items: readonly IndexItem[];
  columns?: 2 | 3;
  offset?: number;
  className?: string;
}) {
  return (
    <ul
      className={`grid gap-x-[var(--gutter)] ${
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      } ${className}`}
    >
      {items.map((item, i) => (
        <Reveal
          as="li"
          key={item.name}
          delay={(i % 3) * 65}
          className="border-t border-hair py-6"
        >
          <p className="index">{String(i + 1 + offset).padStart(2, "0")}</p>
          <h3 className="font-display mt-3 text-[1.1875rem] leading-snug">
            {item.name}
          </h3>
          {item.body && (
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-fg-soft">
              {item.body}
            </p>
          )}
        </Reveal>
      ))}
    </ul>
  );
}

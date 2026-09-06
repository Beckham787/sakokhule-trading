import Reveal from "@/components/Reveal";
import { CLIENTS } from "@/lib/clients";

/**
 * Who the work was done for. No logos — none were supplied, and a
 * contractor borrowing a client's mark makes a claim it has no right to
 * make — so each organisation is set in the site's own display serif with a
 * plain description of what it is underneath.
 *
 * Names at one size, in one column width, under one hairline each: a list
 * of clients reads as confidence; the same list in coloured cards reads as
 * advertising.
 */
export default function ClientList({
  showBasis = true,
  className = "",
}: {
  showBasis?: boolean;
  className?: string;
}) {
  return (
    <ul
      className={`grid gap-x-[var(--gutter)] sm:grid-cols-2 lg:grid-cols-3 ${className}`}
    >
      {CLIENTS.map((c, i) => (
        <Reveal
          as="li"
          key={c.name}
          delay={(i % 3) * 70}
          className="border-t border-hair py-7"
        >
          <h3 className="font-display text-[1.3rem] leading-snug">{c.name}</h3>
          <p className="caption mt-2.5">{c.descriptor}</p>
          {/* Only the subcontract is worth marking. Stamping "direct
              contract" on the other four repeats the default four times and
              reads as protesting too much. */}
          {showBasis && c.basis === "Subcontract" && (
            <p className="label mt-6 text-fg-mute">{c.basis}</p>
          )}
        </Reveal>
      ))}
    </ul>
  );
}

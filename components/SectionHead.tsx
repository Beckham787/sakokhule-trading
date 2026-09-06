import Link from "next/link";
import Reveal from "@/components/Reveal";

/**
 * The section opening used across the site: the index number and label hang
 * in the left margin with the section's onward link under them, and the
 * title and standfirst sit in the main column. Clause number in the margin,
 * clause beside it — the shape of a specification rather than a brochure.
 */
export default function SectionHead({
  index,
  label,
  title,
  lede,
  href,
  linkLabel,
}: {
  index: string;
  label: string;
  title: string;
  lede?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <Reveal className="grid gap-x-[var(--gutter)] gap-y-6 border-t border-hair pt-8 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <p className="label text-fg-mute">
          <span className="mr-4 text-accent">{index}</span>
          {label}
        </p>
        {href && linkLabel && (
          <Link
            href={href}
            className="rule-link tap mt-5 hidden text-[0.875rem] text-fg-soft transition-colors duration-300 hover:text-fg lg:inline-block"
          >
            {linkLabel}
          </Link>
        )}
      </div>

      <div className="lg:col-span-9">
        <h2 className="max-w-[24ch] text-[length:var(--step-title)]">{title}</h2>
        {lede && <p className="lede mt-7 max-w-measure">{lede}</p>}
        {href && linkLabel && (
          <Link
            href={href}
            className="rule-link tap mt-6 inline-block text-[0.875rem] text-fg-soft transition-colors duration-300 hover:text-fg lg:hidden"
          >
            {linkLabel}
          </Link>
        )}
      </div>
    </Reveal>
  );
}

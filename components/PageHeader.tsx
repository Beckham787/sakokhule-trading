import Reveal from "@/components/Reveal";

/**
 * Every inner page opens the same way: a numbered section label, the title
 * in the display serif, the chainage rule drawing itself across, and — when
 * there is something worth saying up front — one paragraph. Nothing else.
 */
export default function PageHeader({
  index,
  eyebrow,
  title,
  lede,
  meta,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  lede?: string;
  meta?: { label: string; value: string }[];
}) {
  return (
    <header className="shell pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(7.5rem,14vw,11rem)]">
      <p className="rise rise-1 label text-fg-mute">
        {index && <span className="mr-4 text-accent">{index}</span>}
        {eyebrow}
      </p>

      <h1 className="rise rise-2 mt-8 max-w-[19ch] text-[length:var(--step-hero)]">
        {title}
      </h1>

      <div aria-hidden="true" className="draw chainage mt-10 w-full max-w-[26rem]" />

      {lede && (
        <p className="rise rise-4 lede mt-9 max-w-measure">{lede}</p>
      )}

      {meta && (
        <Reveal delay={120}>
          <dl className="mt-11 flex flex-wrap gap-x-14 gap-y-6 border-t border-hair pt-7">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="label text-fg-mute">{m.label}</dt>
                <dd className="value mt-2 text-fg">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}
    </header>
  );
}

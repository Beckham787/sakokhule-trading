/**
 * Sub-page opening. Same gesture as the homepage hero at a lower volume —
 * eyebrow, headline, the chainage rule drawing itself across — so arriving
 * on an inner page feels like the same document rather than a different
 * site.
 */
export default function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="shell pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(7.5rem,15vw,11rem)]">
      <p className="rise rise-1 label text-blue">{eyebrow}</p>
      <h1 className="rise rise-2 mt-7 max-w-[18ch] text-[length:var(--step-title)]">
        {title}
      </h1>
      <div
        aria-hidden="true"
        className="draw chainage mt-8 w-full max-w-[24rem]"
      />
      {lede && (
        <p className="rise rise-4 lede mt-9 max-w-measure text-bone/80">{lede}</p>
      )}
    </section>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[74svh] flex-col justify-center pt-[clamp(8rem,16vw,12rem)]">
      <p className="label text-fg-mute">
        <span className="mr-4 text-accent">404</span>Not found
      </p>
      <h1 className="mt-8 max-w-[18ch] text-[length:var(--step-title)]">
        That page has moved, or never existed.
      </h1>
      <div aria-hidden="true" className="draw chainage mt-10 w-full max-w-[22rem]" />
      <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
        <Link href="/" className="btn label">
          Back to the front
        </Link>
        <Link
          href="/company/projects"
          className="rule-link tap text-[0.9375rem] text-fg-soft transition-colors duration-300 hover:text-fg"
        >
          See completed projects →
        </Link>
      </div>
    </section>
  );
}

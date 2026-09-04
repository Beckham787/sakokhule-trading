import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70svh] flex-col justify-center pt-[clamp(8rem,16vw,12rem)]">
      <span className="label text-blue">404</span>
      <h1 className="mt-6 max-w-[18ch] text-[length:var(--step-title)]">
        Page not found.
      </h1>
      <p className="lede mt-7 max-w-measure text-bone/75">
        The page you asked for has moved or never existed.
      </p>
      <Link
        href="/company/projects"
        className="label mt-10 self-start bg-blue px-7 py-4 text-asphalt transition-colors duration-300 hover:bg-blue-lift"
      >
        See our projects
      </Link>
    </section>
  );
}

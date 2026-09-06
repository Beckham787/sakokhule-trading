import Image from "next/image";
import { company } from "@/lib/content";

/**
 * The lockup. Lindokuhle supplied the real logo on 2026-09-06 — the first
 * time this company has had one on the site at all — so the mark is his,
 * not ours: the ring, the bars and the rising arrow, keyed off the flat
 * background of the supplied JPEG (`_source/supplied-2026-09-06/`).
 *
 * The name is set beside it rather than using the logo's own baked-in
 * lettering, which is a default grotesque at low resolution and falls apart
 * at header size. The mark carries the identity; the type carries the name.
 */
export default function Wordmark({
  className = "",
  discipline = true,
  onNight = false,
  size = 30,
}: {
  className?: string;
  discipline?: boolean;
  /** Lifts the mark a little on the dark ground, where the steel ring and
      the grey bars otherwise sit too close to the background. */
  onNight?: boolean;
  size?: number;
}) {
  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <Image
        src="/images/brand/mark.png"
        alt=""
        width={size}
        height={size}
        priority
        className={onNight ? "brightness-125 saturate-[1.05]" : undefined}
      />
      <span className="flex flex-col">
        <span className="font-display text-[1.0625rem] font-medium leading-none tracking-[-0.014em]">
          {company.businessName}
        </span>
        {discipline && (
          <span className="label mt-[0.45rem] text-[0.5625rem] leading-none text-fg-mute">
            {company.tagline}
          </span>
        )}
      </span>
    </span>
  );
}

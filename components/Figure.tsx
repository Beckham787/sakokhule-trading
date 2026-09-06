import Image from "next/image";
import { IMAGES } from "@/lib/images";

/**
 * A photograph, treated as a photograph. The first edition of this site
 * used the paver shot as a dark texture with display type on top of it;
 * here the work is shown at full brightness with a caption under it, the
 * way a project record does it.
 */
export default function Figure({
  image,
  alt,
  caption,
  credit,
  ratio = "aspect-[16/8]",
  focus = "object-center",
  priority = false,
  sizes = "100vw",
  className = "",
}: {
  image: keyof typeof IMAGES;
  alt: string;
  caption?: string;
  credit?: string;
  ratio?: string;
  /** Tailwind object-position class — most of these are phone photographs
      whose subject sits well above centre. */
  focus?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const img = IMAGES[image];

  return (
    <figure className={className}>
      <div className={`relative w-full overflow-hidden bg-pit-lift ${ratio}`}>
        <Image
          src={img.src}
          alt={alt}
          fill
          priority={priority}
          placeholder="blur"
          blurDataURL={img.blurDataURL}
          sizes={sizes}
          className={`object-cover ${focus}`}
        />
      </div>
      {(caption || credit) && (
        <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
          {caption && <span className="caption">{caption}</span>}
          {credit && <span className="caption">{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}

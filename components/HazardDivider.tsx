/**
 * The group's signature device, shared with Izanolihle Roads. A diagonal
 * hazard stripe drawn straight from the client's own approved company-profile
 * PDF (the band across the cover), reused here as a structural section break
 * rather than decoration — it marks a change of ground the way a physical
 * site boundary would.
 *
 * Pure CSS (`.hazard-stripes` in globals.css), no image asset, so it holds up
 * at any width and costs nothing to load.
 */
export default function HazardDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`hazard-stripes h-3 w-full sm:h-4 ${className}`}
    />
  );
}

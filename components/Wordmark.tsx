/**
 * No transparent/vector logo was supplied — only the mark baked into the
 * company-profile PDF, at a size too small to extract cleanly (same asset
 * gap as GMP Builders; see brand.md). Rebuilt in type instead: SAKOKHULE in
 * bone, TRADING in blue, matching the two-tone treatment already used and
 * approved on the client's own PDF cover. A small diagonal mark stands in
 * for the PDF's angular icon — the same 45° angle as the hazard stripe.
 */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <rect x="0" y="0" width="20" height="20" fill="none" />
        <path d="M3 15 L11 3 L15 3 L7 15 Z" fill="currentColor" className="text-blue" />
        <path d="M11 15 L15 9 L15 15 Z" fill="currentColor" className="text-bone" />
      </svg>
      <span className="wordmark text-[0.95rem] leading-none">
        SAKOKHULE <span className="text-blue">TRADING</span>
      </span>
    </span>
  );
}

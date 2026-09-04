import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { company } from "@/lib/content";
import "./globals.css";

/* Self-hosted, same three files as Izanolihle Roads — the sister site
   already worked out why (see that repo's app/layout.tsx comment: the
   Google Fonts CDN was hanging from this environment). Reusing the exact
   files also means the two sites' type genuinely matches, not just
   resembles. */
const archivo = localFont({
  src: "../fonts/archivo-variable.woff2",
  weight: "600 800",
  display: "swap",
  variable: "--font-display",
});

const inter = localFont({
  src: "../fonts/inter-variable.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-body",
});

const plexMono = localFont({
  src: [
    { path: "../fonts/ibm-plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: `${company.businessName} — civil engineering & construction, Mpumalanga`,
    template: `%s — ${company.businessName}`,
  },
  description:
    "Civil engineering and construction contractor based in Malelane, Mpumalanga. CIDB 5CE·3GB graded. R31.5m+ in completed roads, civil and mining-haulage contracts.",
  openGraph: {
    type: "website",
    title: `${company.businessName} — civil engineering & construction, Mpumalanga`,
    siteName: company.businessName,
    locale: "en_ZA",
  },
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
  },
};

/* GeneralContractor structured data, same pattern as Izanolihle Roads —
   pulled from lib/content.ts so it can't drift out of sync with the page. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.businessName,
  legalName: company.legalName,
  url: company.siteUrl,
  description:
    "Civil engineering and construction contractor — roads, structures and infrastructure — based in Malelane, Mpumalanga.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "38 Station Street",
    addressLocality: "Malelane",
    postalCode: "1320",
    addressRegion: "Mpumalanga",
    addressCountry: "ZA",
  },
  telephone: company.phones[0],
  email: company.email,
  areaServed: {
    "@type": "AdministrativeArea",
    name: company.region,
  },
  founder: {
    "@type": "Person",
    name: company.principal,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-ZA"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-blue focus:px-5 focus:py-3 focus:text-asphalt"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}

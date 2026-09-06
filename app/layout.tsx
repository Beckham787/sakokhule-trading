import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { company } from "@/lib/content";
import "./globals.css";

/* Self-hosted, as on every site in the group — the Google Fonts CDN hangs
   from this environment, and shipping the files means the two sister sites
   genuinely share a type system rather than resembling one.

   Source Serif 4 replaces Archivo as the display voice in this edition. A
   grotesque set in uppercase reads as signage; a text serif at 420 weight,
   sentence case, reads as a company that has been doing this for a decade.
   Inter carries body and interface; IBM Plex Mono keeps the record. */
const sourceSerif = localFont({
  src: "../fonts/source-serif-variable.woff2",
  weight: "300 700",
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
    default: `${company.businessName} — earth moving & plant hire, Mpumalanga`,
    template: `%s — ${company.businessName}`,
  },
  description:
    "Earth moving and plant hire in Malelane, Mpumalanga. Bulk earthworks, load and haul, road layers and machine hire with operators — CIDB 5CE·3GB graded, trading since 2016.",
  openGraph: {
    type: "website",
    title: `${company.businessName} — civil engineering & construction, Mpumalanga`,
    siteName: company.businessName,
    locale: "en_ZA",
  },
  alternates: { canonical: "/" },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.businessName,
  legalName: company.legalName,
  url: company.siteUrl,
  description:
    "Earth moving, load and haul, and plant hire — based in Malelane, Mpumalanga.",
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
  areaServed: { "@type": "AdministrativeArea", name: company.region },
  founder: { "@type": "Person", name: company.principal },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-ZA"
      className={`${sourceSerif.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-bone focus:bg-pit focus:px-5 focus:py-3 focus:text-bone"
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

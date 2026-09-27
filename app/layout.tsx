import type { Metadata, Viewport } from "next";
import "@fontsource-variable/schibsted-grotesk";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import { site, links, startup, ventures } from "@/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "profile",
    firstName: "Miles",
    lastName: "Johnson",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  // Paste the code from Google Search Console here (Settings > Ownership verification > HTML tag)
  verification: site.googleVerification ? { google: site.googleVerification } : undefined,
};

export const viewport: Viewport = { themeColor: "#070b16", width: "device-width", initialScale: 1 };

// Structured data so Google understands who this site is about
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}${site.photo}`,
  email: `mailto:${links.email}`,
  jobTitle: "Computer Science Student, Software Engineer & Founder",
  description: site.description,
  address: { "@type": "PostalAddress", addressLocality: "Greensboro", addressRegion: "NC", addressCountry: "US" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "North Carolina A&T State University", sameAs: "https://www.ncat.edu" },
  worksFor: { "@type": "Organization", name: startup.name, url: startup.link },
  knowsAbout: site.keywords,
  sameAs: [links.linkedin, links.github, startup.link, ...ventures.map((v) => v.link)].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NextAuthProvider from "@/components/providers/SessionProvider";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://brownlinetours.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brownline Tours — Immersive Ghana Experiences",
    template: "%s | Brownline Tours",
  },
  description:
    "Brownline Tours specialises in immersive travel experiences across Ghana — castles & slave route history, waterfalls & nature, cultural immersion, and custom private itineraries.",
  keywords: ["ghana tours", "ghana tourism", "cape coast castle", "slave route tour", "waterfalls ghana", "cultural tour ghana", "private itinerary ghana", "ghana travel", "mole national park", "kakum national park", "kumasi ashanti tour"],
  authors: [{ name: "Brownline Tours" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Brownline Tours",
    title: "Brownline Tours — Immersive Ghana Experiences",
    description: "Immersive cultural, heritage, nature and adventure tours across Ghana. Safe, guided, and well-curated experiences for individuals and groups.",
    images: [
      {
        url: "/logo.png",
        width: 1080,
        height: 732,
        alt: "Brownline Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brownline Tours — Immersive Ghana Experiences",
    description: "Immersive cultural, heritage, nature and adventure tours across Ghana.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#f59e0b",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Brownline Tours",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  description:
    "Brownline Tours specialises in immersive travel experiences across Ghana — castles & slave route history, waterfalls & nature, cultural immersion, and custom private itineraries.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4 Airport Road, Kotoka Area",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  telephone: "+233247810448",
  email: "hello@brownlinetours.com",
  areaServed: "Ghana",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-slate-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <NextAuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </NextAuthProvider>
        <Analytics />
      </body>
    </html>
  );
}

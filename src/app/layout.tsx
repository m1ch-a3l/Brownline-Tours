import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NextAuthProvider from "@/components/providers/SessionProvider";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Brownline Tours — Immersive Ghana Experiences",
    template: "%s | Brownline Tours",
  },
  description:
    "Brownline Tours specialises in immersive travel experiences across Ghana — castles & slave route history, waterfalls & nature, cultural immersion, and custom private itineraries.",
  keywords: ["ghana tours", "ghana tourism", "cape coast castle", "slave route tour", "waterfalls ghana", "cultural tour ghana", "private itinerary ghana", "ghana travel"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brownlinetours.com",
    siteName: "Brownline Tours",
    title: "Brownline Tours — Immersive Ghana Experiences",
    description: "Immersive cultural, heritage, nature and adventure tours across Ghana. Safe, guided, and well-curated experiences for individuals and groups.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-slate-800">
        <NextAuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Users, MapPin, Check } from "lucide-react";

const INCLUDES = [
  "7 Nights' Accommodation",
  "Airport Transfers",
  "Comfortable Transportation",
  "Daily Breakfast & Selected Meals",
  "Cultural & Heritage Experiences",
  "Guided Tours & Activities",
  "Local Support & Professional Guides",
];

const THEMES = ["Culture", "Heritage", "Food", "Music", "Beaches", "Community"];

export default function DecemberPromoSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16">
      {/* Background tourist site image */}
      <Image
        src="/tourist_site/hero/25.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — copy */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              <span className="text-amber-400">Ghana Unfiltered</span>
              <br />
              8 Days &amp; 7 Nights
              <br />
              December 2026.
            </h2>

            <p className="text-white/65 leading-relaxed mb-4 text-base max-w-md">
              More than a holiday — it&apos;s a journey into the heart of Ghana.
              From the vibrant streets of Accra to the historic shores of Cape Coast.
              Real people, real culture, unforgettable experiences.
            </p>

            {/* Themes */}
            <p className="text-amber-400/90 text-xs font-bold uppercase tracking-widest mb-6">
              {THEMES.join(" · ")}
            </p>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Calendar, text: "December 2026", color: "text-amber-400" },
                { icon: MapPin,   text: "Across Ghana",  color: "text-emerald-400" },
                { icon: Users,    text: "Guided tours",  color: "text-sky-400" },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/10"
                  style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)" }}>
                  <Icon size={13} className={color} />
                  {text}
                </div>
              ))}
            </div>

            {/* Package includes */}
            <div className="mb-8">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
                Package Includes
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-white/80 text-sm">
                    <Check size={15} className="text-amber-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price highlight */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-5xl font-extrabold text-amber-400">$1,700</span>
              <div>
                <div className="text-white font-semibold text-sm">per person sharing</div>
                <div className="text-white/40 text-xs">
                  30% deposit to book · balance due 30 days before departure
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/tours/detty-december-ghana-experience"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-extrabold rounded-xl text-sm transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", color: "#0f172a", boxShadow: "0 8px 32px rgba(245,158,11,0.35)" }}
              >
                View Full Itinerary <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/233247810448"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-emerald-400 hover:text-emerald-400 text-white font-bold rounded-xl transition-all text-sm"
                style={{ backdropFilter: "blur(8px)", background: "rgba(255,255,255,0.05)" }}
              >
                WhatsApp to Book
              </a>
            </div>

            <p className="text-white/40 text-xs mt-5">
              +233 24 781 0448 ·{" "}
              <a href="mailto:brownlinetours@gmail.com" className="hover:text-amber-400 transition-colors">
                brownlinetours@gmail.com
              </a>{" "}
              · @brownlinetours
            </p>
          </div>

          {/* Right — floating flyer */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Multi-layer glow */}
              <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-50"
                style={{ background: "radial-gradient(ellipse, #f59e0b55, transparent 70%)" }} />
              <div className="absolute -inset-3 rounded-3xl blur-xl opacity-40"
                style={{ background: "radial-gradient(ellipse, #fbbf24, transparent 70%)" }} />

              {/* Flyer — tilted, hover straightens + lifts */}
              <div className="relative w-72 sm:w-80 lg:w-[340px] rotate-2 hover:rotate-0 hover:-translate-y-3 transition-all duration-500 cursor-pointer"
                style={{ filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.7))" }}>
                <div className="rounded-2xl overflow-hidden ring-2 ring-amber-400/30">
                  <Image
                    src="/Ads/GHANA UNFILTERED.jpg.jpeg"
                    alt="Ghana Unfiltered — 8 Days, 7 Nights, December 2026 — Brownline Tours"
                    width={600}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { featuredDestinations } from "@/lib/data";

const headlines = [
  { top: "Experience Ghana", accent: "Beyond Sightseeing" },
  { top: "Culture. Heritage.", accent: "Adventure. Connection." },
  { top: "Immersive African Journeys", accent: "Designed With Soul" },
  { top: "Your Return to the", accent: "Motherland Awaits" },
  { top: "Real Ghana.", accent: "Real Connections." },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const go = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent((index + featuredDestinations.length) % featuredDestinations.length);
        setTransitioning(false);
      }, 400);
    },
    [transitioning]
  );

  useEffect(() => {
    const timer = setInterval(() => go(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, go]);

  const headline = headlines[current % headlines.length];

  return (
    <section className="relative h-screen min-h-[640px] max-h-[960px] overflow-hidden">
      {/* Background images */}
      {featuredDestinations.map((dest, i) => (
        <div
          key={dest.name}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={dest.image}
            alt={dest.name}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Headline */}
        <div key={current} className="animate-fade-in mb-6">
          <h1 className="text-white font-black leading-[1.1] drop-shadow-xl" style={{ fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)" }}>
            {headline.top}
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #f46f22 0%, #FF8A45 50%, #FFB380 100%)",
              }}
            >
              {headline.accent}
            </span>
          </h1>

          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mt-5 leading-relaxed">
            Castles &amp; slave route history, waterfalls, cultural immersion, and custom adventures — safe, guided experiences across all of Ghana.
          </p>
        </div>

        {/* Search bar */}
        <div className="w-full max-w-2xl mb-8">
          <form
            action="/tours"
            className="flex flex-col sm:flex-row gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2"
          >
            <div className="flex-1 flex items-center gap-3 bg-white rounded-xl px-4 py-3">
              <Search size={17} className="text-slate-400 shrink-0" />
              <input
                name="search"
                type="text"
                placeholder="Search Mole, Cape Coast, Volta, Kumasi…"
                className="flex-1 outline-none text-slate-800 placeholder:text-slate-400 text-sm"
              />
            </div>
            <button
              type="submit"
              className="px-7 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all hover:shadow-lg text-sm shrink-0"
            >
              Find Tours
            </button>
          </form>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Link
            href="/tours"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all hover:shadow-xl text-sm tracking-wide shadow-lg"
          >
            Plan My Journey
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/25 transition-all text-sm tracking-wide"
          >
            Explore Tours
          </Link>
        </div>

      </div>

      {/* Nav arrows */}
      <button
        onClick={() => go(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/15 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 transition-all"
        aria-label="Previous"
      >
        <ChevronLeft size={19} />
      </button>
      <button
        onClick={() => go(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/15 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 transition-all"
        aria-label="Next"
      >
        <ChevronRight size={19} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {featuredDestinations.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`transition-all rounded-full ${
              i === current ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

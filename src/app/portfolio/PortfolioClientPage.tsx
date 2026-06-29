"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowRight, Camera } from "lucide-react";

interface PortfolioPhoto {
  src: string;
  caption: string;
  location: string;
  span?: "tall" | "wide" | "normal";
}

const photos: PortfolioPhoto[] = [
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.55 PM (2).jpeg",
    caption: "A quiet moment above the clouds",
    location: "Volta Region highlands",
    span: "tall",
  },
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.58 PM.jpeg",
    caption: "\"I Survived the Kakum Canopy Walkway\"",
    location: "Kakum National Park",
    span: "wide",
  },
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.56 PM (1).jpeg",
    caption: "Walking through history together",
    location: "Cape Coast Castle",
  },
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.57 PM (2).jpeg",
    caption: "Summit celebration",
    location: "Volta Region highlands",
    span: "tall",
  },
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.55 PM.jpeg",
    caption: "Exploring Ghana's craft markets",
    location: "Cape Coast",
  },
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.58 PM (1).jpeg",
    caption: "Cooling off beneath the falls",
    location: "Wli Falls",
  },
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.56 PM.jpeg",
    caption: "Leading travelers through the rainforest",
    location: "Kakum National Park",
    span: "wide",
  },
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.58 PM (3).jpeg",
    caption: "Welcome to Mt. Gemi",
    location: "Volta Region",
  },
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.55 PM (1).jpeg",
    caption: "Guiding a group through the forest trails",
    location: "Kakum National Park",
  },
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.57 PM.jpeg",
    caption: "Reaching the summit, together",
    location: "Volta Region highlands",
    span: "tall",
  },
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.58 PM (2).jpeg",
    caption: "Tallest waterfall in West Africa",
    location: "Wli Agumatsa Falls",
  },
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.57 PM (1).jpeg",
    caption: "Arriving at Kakum Canopy Walkway",
    location: "Kakum National Park",
  },
  {
    src: "/portfolio/WhatsApp Image 2026-06-28 at 12.48.59 PM.jpeg",
    caption: "On the road across Ghana",
    location: "Ghana",
    span: "wide",
  },
];

export default function PortfolioClientPage() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevPhoto = () => setLightboxIdx((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
  const nextPhoto = () => setLightboxIdx((i) => (i === null ? 0 : (i + 1) % photos.length));

  useEffect(() => {
    if (lightboxIdx === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setLightboxIdx((i) => (i === null ? 0 : (i + 1) % photos.length));
      else if (e.key === "ArrowLeft") setLightboxIdx((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
      else if (e.key === "Escape") setLightboxIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx]);

  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <div className="relative h-96 bg-slate-900 overflow-hidden">
        <Image
          src="/portfolio/WhatsApp Image 2026-06-28 at 12.48.57 PM (2).jpeg"
          alt="Brownline Tours — Portfolio"
          fill
          className="object-cover opacity-50"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0E0603]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
            <Camera size={14} /> Portfolio
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4 max-w-2xl">
            Moments From the Road
          </h1>
          <p className="text-white/70 max-w-xl leading-relaxed">
            Real journeys, real travelers, real Ghana — a look back at the trails, summits, and
            stories guided personally by Brownline Tours founder Marven Brown.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px]">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => openLightbox(i)}
                className={`relative group overflow-hidden rounded-xl sm:rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  photo.span === "tall" ? "row-span-2" : photo.span === "wide" ? "col-span-2" : ""
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <p className="text-white font-bold text-xs sm:text-sm leading-snug">{photo.caption}</p>
                  <p className="text-amber-300 text-[10px] sm:text-xs mt-0.5">{photo.location}</p>
                </div>
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={13} className="text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Inspired by These Journeys?
          </h2>
          <p className="text-slate-500 mb-7 leading-relaxed">
            Every photo here started with a traveler who said yes to Ghana. Yours could be next.
          </p>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all hover:shadow-lg"
          >
            Explore Our Tours <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full pointer-events-none">
            {lightboxIdx + 1} / {photos.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft size={26} />
          </button>

          <div
            className="relative w-full h-full max-w-5xl max-h-[78vh] mx-16 sm:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIdx].src}
              alt={photos[lightboxIdx].caption}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight size={26} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4 pointer-events-none">
            <p className="text-white font-bold text-sm sm:text-base">{photos[lightboxIdx].caption}</p>
            <p className="text-amber-300 text-xs sm:text-sm mt-1">{photos[lightboxIdx].location}</p>
          </div>
        </div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, X } from "lucide-react";

interface RegionInfo {
  fullName: string;
  image: string;
  tourLink: string;
  highlight: string;
}

const regionInfo: Record<string, RegionInfo> = {
  BOLGATANGA: {
    fullName: "Upper East Region",
    image: "https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=700&q=80",
    tourLink: "/tours?search=upper+east",
    highlight: "Crafts, Paga Crocodile Pond, Red-clay architecture",
  },
  WA: {
    fullName: "Upper West Region",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=700&q=80",
    tourLink: "/tours?search=upper+west",
    highlight: "Wechiau Hippo Sanctuary, Traditional mud-brick mosques",
  },
  TAMALE: {
    fullName: "Northern Region",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80",
    tourLink: "/tours?search=tamale",
    highlight: "Larabanga Mosque, Dagomba culture, Smock weaving",
  },
  DAMONGO: {
    fullName: "Savannah Region",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=80",
    tourLink: "/tours?search=mole",
    highlight: "Mole National Park, Wild elephants, Walking safaris",
  },
  TECHIMAN: {
    fullName: "Bono East Region",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&q=80",
    tourLink: "/tours?search=techiman",
    highlight: "Techiman Market, Brong culture, Tano Sacred Grove",
  },
  Sunyani: {
    fullName: "Bono Region",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80",
    tourLink: "/tours?search=sunyani",
    highlight: "Lush forest reserves, Fiema Monkey Sanctuary",
  },
  GOASO: {
    fullName: "Ahafo Region",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80",
    tourLink: "/tours?search=goaso",
    highlight: "Rainforest, Tano Boase Sacred Grove, Waterfalls",
  },
  KUMASI: {
    fullName: "Ashanti Region",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700&q=80",
    tourLink: "/tours?search=kumasi",
    highlight: "Manhyia Palace, Kejetia Market, Kente weaving villages",
  },
  Wiawso: {
    fullName: "Western North Region",
    image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=700&q=80",
    tourLink: "/tours?search=wiawso",
    highlight: "Ancient rainforest, Bia National Park",
  },
  "SEKONDI-TAKORADI": {
    fullName: "Western Region",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=700&q=80",
    tourLink: "/tours?search=takoradi",
    highlight: "Busua Beach, Fort Apollonia, Nzulezo stilt village",
  },
  "CAPE COAST": {
    fullName: "Central Region",
    image: "/tourist_site/Kakum/caption (1).jpg",
    tourLink: "/tours?search=cape+coast",
    highlight: "Cape Coast Castle, Door of No Return, Kakum canopy walkway",
  },
  ACCRA: {
    fullName: "Greater Accra Region",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&q=80",
    tourLink: "/tours?search=accra",
    highlight: "Labadi Beach, Kwame Nkrumah Mausoleum, Jamestown",
  },
  KOFORIDUA: {
    fullName: "Eastern Region",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",
    tourLink: "/tours?search=koforidua",
    highlight: "Boti Falls, Akosombo Dam, Aburi Botanical Gardens",
  },
  HO: {
    fullName: "Volta Region",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&q=80",
    tourLink: "/tours?category=Adventure",
    highlight: "Wli Falls, Mount Afadjato, Tafi Atome monkey sanctuary",
  },
  DAMBAI: {
    fullName: "Oti Region",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80",
    tourLink: "/tours?search=dambai",
    highlight: "Volta River, Kpassa Hills, Authentic riverine culture",
  },
  Nalerrigu: {
    fullName: "North East Region",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=80",
    tourLink: "/tours?search=north+east",
    highlight: "Gambaga Scarp, Nalerigu Fort, Ancient trade routes",
  },
};

const stats = [
  { value: "16", label: "Regions\nCovered" },
  { value: "13,560", label: "Kilometres\nExplored" },
  { value: "276", label: "Destinations\nVisited" },
  { value: "355,622+", label: "Guests\nServed" },
];

// Ordered stops along the route path (data-end = where along path [0–1] this city sits)
const regionStops = [
  { name: "BOLGATANGA", end: 0.0382 },
  { name: "WA", end: 0.136 },
  { name: "TAMALE", end: 0.227 },
  { name: "DAMONGO", end: 0.269 },
  { name: "TECHIMAN", end: 0.375 },
  { name: "Sunyani", end: 0.395 },
  { name: "GOASO", end: 0.4364 },
  { name: "KUMASI", end: 0.4845 },
  { name: "Wiawso", end: 0.547 },
  { name: "SEKONDI-TAKORADI", end: 0.67 },
  { name: "CAPE COAST", end: 0.6917 },
  { name: "ACCRA", end: 0.7375 },
  { name: "KOFORIDUA", end: 0.76 },
  { name: "HO", end: 0.801 },
  { name: "DAMBAI", end: 0.8785 },
  { name: "Nalerrigu", end: 1.0 },
];

const TRAVEL_SPEED = 0.04;  // path-units per second
const PAUSE_DURATION = 3200; // ms to pause at each region

export default function InteractiveMapSection() {
  const [svgLoaded, setSvgLoaded] = useState(false);
  const [tourIdx, setTourIdx] = useState<number>(-1);   // which stop we're currently showing
  const [manualRegion, setManualRegion] = useState<string | null>(null); // click modal

  const svgContainerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const carRef = useRef<SVGCircleElement | null>(null);
  const rafRef = useRef<number>(0);
  const animRef = useRef({
    progress: 0,
    targetIdx: 0,
    isPaused: false,
    pauseStart: 0,
    lastTs: 0,
    shownIdx: -1, // last idx we called setTourIdx for, to avoid spamming
  });

  /** Move the car circle to the right SVG-coordinate position */
  const positionCar = useCallback((progress: number) => {
    const path = pathRef.current;
    const car = carRef.current;
    if (!path || !car) return;
    const len = path.getTotalLength();
    const pt = path.getPointAtLength(progress * len);
    car.setAttribute("cx", pt.x.toFixed(1));
    car.setAttribute("cy", pt.y.toFixed(1));
  }, []);

  /** Highlight the active region circle on the map */
  const highlightCircle = useCallback((name: string | null) => {
    if (!svgContainerRef.current) return;
    svgContainerRef.current.querySelectorAll(".gas-station").forEach((el) => {
      const c = el as SVGCircleElement;
      if (c.getAttribute("data-region") === name) {
        c.setAttribute("r", "30");
        c.setAttribute("fill", "#D4A017"); // gold
      } else {
        c.setAttribute("r", "15");
        c.setAttribute("fill", "#ffffff");
      }
    });
  }, []);

  /** rAF animation loop */
  const animate = useCallback(
    (ts: number) => {
      const s = animRef.current;
      const dt = s.lastTs > 0 ? Math.min((ts - s.lastTs) / 1000, 0.05) : 0;
      s.lastTs = ts;

      if (s.isPaused) {
        // Waiting at a region — check if it's time to move on
        if (ts - s.pauseStart >= PAUSE_DURATION) {
          s.isPaused = false;
          s.targetIdx++;
          if (s.targetIdx >= regionStops.length) {
            // Completed the full circuit — restart
            s.targetIdx = 0;
            s.progress = 0;
          }
        }
      } else {
        // Travelling toward next stop
        const target = regionStops[s.targetIdx].end;
        s.progress = Math.min(s.progress + TRAVEL_SPEED * dt, target);
        positionCar(s.progress);

        if (s.progress >= target) {
          // Arrived — pause and show this region
          s.isPaused = true;
          s.pauseStart = ts;
          const name = regionStops[s.targetIdx].name;
          if (s.shownIdx !== s.targetIdx) {
            s.shownIdx = s.targetIdx;
            setTourIdx(s.targetIdx);
            highlightCircle(name);
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    },
    [positionCar, highlightCircle]
  );

  useEffect(() => {
    fetch("/ghana-map.svg")
      .then((r) => r.text())
      .then((text) => {
        if (!svgContainerRef.current) return;
        svgContainerRef.current.innerHTML = text;

        const svg = svgContainerRef.current.querySelector("svg");
        if (svg) { svg.style.width = "100%"; svg.style.height = "auto"; svg.style.display = "block"; }

        pathRef.current = svgContainerRef.current.querySelector("#motionPath") as SVGPathElement;
        carRef.current  = svgContainerRef.current.querySelector("#car") as SVGCircleElement;

        if (carRef.current) {
          carRef.current.removeAttribute("transform");
          carRef.current.removeAttribute("style");
          carRef.current.setAttribute("r", "35");
          // Start at beginning of path
          positionCar(0);
        }

        // Wire click + hover on every region circle
        svgContainerRef.current.querySelectorAll(".gas-station").forEach((el) => {
          const c = el as SVGCircleElement;
          c.style.cursor = "pointer";

          c.addEventListener("mouseenter", () => {
            // Only enlarge if it's not the currently-highlighted active circle
            const activeName = regionStops[animRef.current.shownIdx]?.name;
            if (c.getAttribute("data-region") !== activeName) {
              c.setAttribute("r", "22");
            }
          });
          c.addEventListener("mouseleave", () => {
            const activeName = regionStops[animRef.current.shownIdx]?.name;
            if (c.getAttribute("data-region") !== activeName) {
              c.setAttribute("r", "15");
            }
          });
          c.addEventListener("click", () => {
            const region = c.getAttribute("data-region");
            if (region) setManualRegion(region);
          });
        });

        setSvgLoaded(true);
        rafRef.current = requestAnimationFrame(animate);
      })
      .catch(console.error);

    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, positionCar]);

  const tourInfo = tourIdx >= 0 ? regionInfo[regionStops[tourIdx].name] : null;
  const tourName = tourIdx >= 0 ? regionStops[tourIdx].name : null;
  const manualInfo = manualRegion ? regionInfo[manualRegion] : null;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Forest background */}
      <div className="absolute inset-0">
        <img
          src="/tourist_site/Kakum/zVEJLRhoeWA_BdafSPCDGokrtA-sGjAvBTWRiizCUEQ6GLFfIof1ISMXvcRg43ATmPnH_EGGQtyUIBK8Uq7CKI-vhyGFWpF7-v-5R4Flzo6I4zAiovQlvFQHzZ6j1kS3SWiIVBJIKwE3vVCh8j4hHv5WB3LmPj2vKisKBJR5K8KduphFThEFA5A1174PQxXW.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Deep overlay so text and cards stay legible */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A0A]/92 via-[#0D2010]/88 to-[#0A1A0A]/94" />
        {/* Subtle vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-10">
          <h2 className="text-white text-5xl sm:text-6xl font-extrabold leading-tight">
            Ghana<span className="text-amber-400">Tour</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* ── LEFT: stats + auto-tour card ── */}
          <div className="lg:w-5/12 xl:w-[42%] flex flex-col gap-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-white font-extrabold text-4xl sm:text-5xl tabular-nums leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-slate-400 text-sm font-medium whitespace-pre-line leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Auto-tour region card — rectangular, editorial */}
            <div className="overflow-hidden border border-white/10 min-h-[320px] flex flex-col">
              {tourInfo && tourName ? (
                <>
                  {/* Full-bleed image */}
                  <div className="relative h-64 shrink-0">
                    <Image
                      key={tourName}
                      src={tourInfo.image}
                      alt={tourName}
                      fill
                      className="object-cover transition-opacity duration-700"
                      sizes="520px"
                    />
                    {/* Dark gradient from bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Amber left-edge accent bar */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-amber-400" />

                    {/* Region label — top right */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-black/50 backdrop-blur-sm text-amber-400 text-xs font-bold px-3 py-1 uppercase tracking-widest border border-amber-400/30">
                        {tourInfo.fullName}
                      </span>
                    </div>

                    {/* City name — bottom left */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                      <h3 className="text-white font-black text-3xl leading-none tracking-tight uppercase">
                        {tourName}
                      </h3>
                    </div>
                  </div>

                  {/* Info strip */}
                  <div className="bg-black/60 backdrop-blur-sm border-t border-white/10 flex items-stretch">
                    {/* Highlight text */}
                    <div className="flex-1 px-5 py-4 flex items-center gap-3">
                      <MapPin size={13} className="text-amber-400 shrink-0" />
                      <p className="text-white/70 text-sm leading-relaxed">{tourInfo.highlight}</p>
                    </div>
                    {/* CTA — sharp vertical button on the right */}
                    <Link
                      href={tourInfo.tourLink}
                      className="shrink-0 flex items-center justify-center px-5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold text-xs uppercase tracking-widest transition-colors border-l border-amber-300/30 writing-mode-vertical"
                      style={{ writingMode: "vertical-rl", textOrientation: "mixed", letterSpacing: "0.15em" }}
                    >
                      Explore
                    </Link>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-[320px] gap-3 bg-black/30">
                  <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                  <p className="text-white/40 text-sm tracking-wide uppercase text-xs">Loading region…</p>
                </div>
              )}
            </div>

            {/* Progress dots */}
            <div className="flex flex-wrap gap-1.5">
              {regionStops.map((stop, i) => (
                <button
                  key={stop.name}
                  title={stop.name}
                  onClick={() => setManualRegion(stop.name)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === tourIdx
                      ? "bg-amber-400 scale-150"
                      : i < tourIdx
                      ? "bg-slate-500"
                      : "bg-slate-700"
                  }`}
                />
              ))}
            </div>

            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold transition-colors text-sm uppercase tracking-widest"
            >
              Explore All Tours
            </Link>
          </div>

          {/* ── RIGHT: SVG map ── */}
          <div className="lg:w-7/12 xl:w-[58%] relative self-center">
            {!svgLoaded && (
              <div className="w-full aspect-[3/4] bg-black/30 rounded-2xl animate-pulse flex items-center justify-center">
                <span className="text-white/40 text-sm">Loading map…</span>
              </div>
            )}

            <div
              ref={svgContainerRef}
              className={`w-full transition-opacity duration-500 ${svgLoaded ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}
              style={{ filter: "drop-shadow(0 4px 32px rgba(0,0,0,0.5))" }}
            />
          </div>
        </div>
      </div>

      {/* ── Click modal (manual selection) ── */}
      {manualRegion && manualInfo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setManualRegion(null)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <div
            className="relative z-10 bg-[#0A1A0A] border border-white/10 overflow-hidden shadow-2xl w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56">
              <Image
                src={manualInfo.image}
                alt={manualRegion}
                fill
                className="object-cover"
                sizes="448px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <button
                onClick={() => setManualRegion(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-colors"
              >
                <X size={16} />
              </button>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-extrabold text-2xl leading-tight">{manualRegion}</h3>
                <p className="text-slate-300 text-sm">{manualInfo.fullName}</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-start gap-2 mb-5">
                <MapPin size={14} className="text-amber-400 shrink-0 mt-0.5" />
                <p className="text-slate-400 text-sm leading-relaxed">{manualInfo.highlight}</p>
              </div>
              <Link
                href={manualInfo.tourLink}
                onClick={() => setManualRegion(null)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-extrabold transition-colors text-sm uppercase tracking-widest"
              >
                Explore {manualRegion} Tours
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

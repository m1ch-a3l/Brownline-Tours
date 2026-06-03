import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  PawPrint,
  Landmark,
  Mountain,
  Building2,
  Crown,
  Waves,
  Leaf,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ghanaRegions, allTours } from "@/lib/data";

// One Lucide icon per region — deterministic, no emojis
export const REGION_ICONS: Record<string, LucideIcon> = {
  "Northern Ghana": PawPrint,
  "Central Region": Landmark,
  "Volta Region":   Mountain,
  "Greater Accra":  Building2,
  "Ashanti Region": Crown,
  "Western Region": Waves,
  "Eastern Region": Leaf,
};

export default function BrowseByRegionSection() {
  const tourCounts = allTours.reduce<Record<string, number>>((acc, t) => {
    acc[t.region] = (acc[t.region] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={14} className="text-amber-500" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
                Explore by Destination
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Browse by Region
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl">
              Ghana has 16 regions — each with its own landscape, culture, and adventure.
              Find the one that calls to you.
            </p>
          </div>
          <Link
            href="/tours"
            className="flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all group shrink-0"
          >
            View all tours
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── Region grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ghanaRegions.map((region) => {
            const Icon  = REGION_ICONS[region.id] ?? MapPin;
            const count = tourCounts[region.id] ?? 0;

            return (
              <Link
                key={region.id}
                href={`/tours?region=${encodeURIComponent(region.id)}`}
                className="group relative overflow-hidden rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
                style={{ minHeight: "230px" }}
              >
                {/* Background photo */}
                <img
                  src={region.image}
                  alt={region.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:from-black/90 transition-all duration-300" />

                {/* Accent top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: region.accentColor }}
                />

                {/* Tour count — top right */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/20">
                  {count} {count === 1 ? "tour" : "tours"}
                </div>

                {/* Icon badge — top left */}
                <div
                  className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: region.accentColor }}
                >
                  <Icon size={20} className="text-white" strokeWidth={2} />
                </div>

                {/* Content — bottom */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="text-white font-extrabold text-xl leading-snug mb-1">
                    {region.name}
                  </h3>
                  <p className="text-white/75 text-sm leading-snug mb-3">
                    {region.tagline}
                  </p>
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore region
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

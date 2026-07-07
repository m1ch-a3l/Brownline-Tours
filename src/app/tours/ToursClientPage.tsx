"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { allTours as tours, ghanaRegions } from "@/lib/data";
import TourCard from "@/components/ui/TourCard";
import { REGION_ICONS } from "@/components/sections/BrowseByRegionSection";
import {
  Search,
  SlidersHorizontal,
  Grid3X3,
  List,
  X,
  ChevronDown,
  ShieldCheck,
  Headphones,
  BadgePercent,
  Users,
  MapPin,
} from "lucide-react";

const categories = ["All", "Safari", "Adventure", "Beach", "Cultural", "Heritage", "Culinary"];
const durations  = ["All", "1-3 Days", "4-7 Days", "8-14 Days", "15+ Days"];
const sortOptions = [
  { value: "popular",    label: "Most Popular" },
  { value: "price-asc",  label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating",     label: "Highest Rated" },
  { value: "duration",   label: "Duration" },
];

const trustItems = [
  { icon: ShieldCheck,  label: "Best Price Guarantee", sub: "Transparent pricing" },
  { icon: BadgePercent, label: "Free Cancellation",    sub: "On most tours"   },
  { icon: Headphones,   label: "24 / 7 Support",       sub: "Always reachable"},
  { icon: Users,        label: "Expert Local Guides",  sub: "Certified & vetted" },
];


function ToursContent() {
  const searchParams = useSearchParams();
  const [view, setView]               = useState<"grid" | "list">("grid");
  const [search, setSearch]           = useState(searchParams.get("search") || "");
  const [category, setCategory]       = useState(searchParams.get("category") || "All");
  const [region, setRegion]           = useState(searchParams.get("region") || "All");
  const [duration, setDuration]       = useState("All");
  const [priceRange, setPriceRange]   = useState<[number, number]>([0, 5000]);
  const [sort, setSort]               = useState("popular");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [difficulty, setDifficulty]   = useState<string[]>(["Easy", "Moderate", "Challenging"]);

  useEffect(() => {
    const s = searchParams.get("search");
    const c = searchParams.get("category");
    const r = searchParams.get("region");
    const country = searchParams.get("country");
    if (s) setSearch(s);
    if (c) setCategory(c);
    if (r) setRegion(r);
    if (country) setSearch(country);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let result = [...tours];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.location.toLowerCase().includes(q) ||
          t.country.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.region.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    if (category !== "All") result = result.filter((t) => t.category === category);
    if (region   !== "All") result = result.filter((t) => t.region   === region);

    result = result.filter((t) => t.price >= priceRange[0] && t.price <= priceRange[1]);

    if (difficulty.length > 0 && difficulty.length < 3)
      result = result.filter((t) => difficulty.includes(t.difficulty));

    if (duration !== "All") {
      result = result.filter((t) => {
        const d = t.durationDays;
        if (duration === "1-3 Days")  return d <= 3;
        if (duration === "4-7 Days")  return d >= 4 && d <= 7;
        if (duration === "8-14 Days") return d >= 8 && d <= 14;
        if (duration === "15+ Days")  return d >= 15;
        return true;
      });
    }

    switch (sort) {
      case "price-asc":  result.sort((a, b) => a.price - b.price);              break;
      case "price-desc": result.sort((a, b) => b.price - a.price);              break;
      case "rating":     result.sort((a, b) => b.rating - a.rating);            break;
      case "duration":   result.sort((a, b) => a.durationDays - b.durationDays);break;
      default:           result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    // Signature flagship tours always lead the list
    const signature = result.filter((t) => t.badge === "Signature");
    const rest = result.filter((t) => t.badge !== "Signature");
    result = [...signature, ...rest];

    return result;
  }, [search, category, region, duration, priceRange, difficulty, sort]);

  const clearFilters = () => {
    setSearch(""); setCategory("All"); setRegion("All"); setDuration("All");
    setPriceRange([0, 5000]); setDifficulty(["Easy", "Moderate", "Challenging"]); setSort("popular");
  };

  const hasFilters =
    search || category !== "All" || region !== "All" || duration !== "All" ||
    priceRange[0] > 0 || priceRange[1] < 5000 || difficulty.length < 3;

  // Active region metadata
  const activeRegionMeta = region !== "All"
    ? ghanaRegions.find((r) => r.id === region)
    : null;

  return (
    <div className="flex-1 bg-slate-50">

      {/* ── Page header ── */}
      <div className="relative pt-28 pb-16 px-4 overflow-hidden">
        <img
          src={activeRegionMeta?.image ?? "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0D06]/90 via-[#1A0D06]/80 to-[#1A0D06]/95" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-xs text-white/50 mb-4 flex items-center gap-1.5">
            <a href="/" className="hover:text-amber-400 transition-colors">Home</a>
            <span>/</span>
            {activeRegionMeta ? (
              <>
                <a href="/tours" className="hover:text-amber-400 transition-colors">Tours</a>
                <span>/</span>
                <span className="text-white/80">{activeRegionMeta.name}</span>
              </>
            ) : (
              <span className="text-white/80">All Tours</span>
            )}
          </nav>

          {activeRegionMeta ? (
            <>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{activeRegionMeta.emoji}</span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                  {activeRegionMeta.name}
                </h1>
              </div>
              <p className="text-white/70 text-lg max-w-xl mb-2">
                {activeRegionMeta.tagline}
              </p>
              <p className="text-white/55 text-sm max-w-lg">
                {activeRegionMeta.description}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-amber-400 font-semibold">{filtered.length} tours</span>
                <span className="text-white/50 text-sm">in this region</span>
                <button
                  onClick={() => setRegion("All")}
                  className="ml-2 flex items-center gap-1 text-xs text-white/60 hover:text-white border border-white/20 rounded-full px-3 py-1 hover:border-white/40 transition-all"
                >
                  <X size={10} /> Clear region
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
                Explore Ghana
              </h1>
              <p className="text-white/70 text-lg max-w-xl">
                <span className="text-amber-400 font-semibold">{filtered.length} tours</span>
                {" "}— from elephant safaris in the North to heritage journeys on the coast
              </p>
            </>
          )}

          {/* Category quick-filter pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  category === cat
                    ? "bg-amber-500 text-white shadow-md"
                    : "bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Trust strip ── */}
      <div className="bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {trustItems.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-amber-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">{label}</div>
                  <div className="text-xs text-slate-400">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Sidebar Filters ── */}
          <aside className={`lg:w-72 shrink-0 ${filtersOpen ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-slate-800 text-lg">Filters</h2>
                {hasFilters && (
                  <button onClick={clearFilters} className="text-xs text-amber-600 hover:text-amber-800 font-medium flex items-center gap-1">
                    <X size={12} /> Clear all
                  </button>
                )}
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Search</label>
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Destination, tour name…"
                    className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                  />
                </div>
              </div>

              {/* Region */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Region</label>
                <div className="space-y-1">
                  <button
                    onClick={() => setRegion("All")}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                      region === "All" ? "bg-amber-500 text-white font-semibold" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>All Regions</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${region === "All" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                      {tours.length}
                    </span>
                  </button>
                  {ghanaRegions.map((r) => {
                    const Icon = REGION_ICONS[r.id] ?? MapPin;
                    const active = region === r.id;
                    return (
                      <button
                        key={r.id}
                        onClick={() => setRegion(r.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all ${
                          active ? "bg-amber-500 text-white font-semibold" : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span
                            className="w-6 h-6 rounded-md flex items-center justify-center shrink-0"
                            style={{ backgroundColor: active ? "rgba(255,255,255,0.25)" : r.accentColor + "22" }}
                          >
                            <Icon
                              size={13}
                              style={{ color: active ? "#fff" : r.accentColor }}
                              strokeWidth={2.5}
                            />
                          </span>
                          {r.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        category === cat ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Duration</label>
                <div className="space-y-1.5">
                  {durations.map((d) => (
                    <label key={d} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="duration" value={d} checked={duration === d} onChange={() => setDuration(d)} className="accent-amber-500" />
                      <span className="text-sm text-slate-600 group-hover:text-slate-900">{d}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <label className="text-sm font-semibold text-slate-700 mb-2 block">
                  Budget: ${priceRange[0].toLocaleString()} – ${priceRange[1] >= 5000 ? "5,000+" : priceRange[1].toLocaleString()}
                </label>
                <input
                  type="range" min={0} max={5000} step={100} value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>$0</span><span>$5,000+</span>
                </div>
              </div>

              {/* Difficulty */}
              <div>
                <label className="text-sm font-semibold text-slate-700 mb-2 block">Difficulty</label>
                <div className="space-y-1.5">
                  {["Easy", "Moderate", "Challenging"].map((d) => (
                    <label key={d} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox" className="accent-amber-500"
                        checked={difficulty.includes(d)}
                        onChange={() => setDifficulty((prev) => prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d])}
                      />
                      <span className="text-sm text-slate-600 group-hover:text-slate-900">{d}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* ── Results ── */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setFiltersOpen((v) => !v)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:border-amber-400 transition-all"
                >
                  <SlidersHorizontal size={16} />
                  Filters {hasFilters && <span className="w-2 h-2 rounded-full bg-amber-500" />}
                </button>
                <span className="text-sm text-slate-500 hidden sm:block">
                  <span className="font-semibold text-slate-800">{filtered.length}</span> tours found
                  {activeRegionMeta && <span className="text-amber-600"> in {activeRegionMeta.name}</span>}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 cursor-pointer hover:border-slate-300 transition-all"
                  >
                    {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                  <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                  <button onClick={() => setView("grid")} className={`p-2.5 transition-colors ${view === "grid" ? "bg-amber-500 text-white" : "bg-white text-slate-500 hover:bg-slate-50"}`}>
                    <Grid3X3 size={16} />
                  </button>
                  <button onClick={() => setView("list")} className={`p-2.5 transition-colors ${view === "list" ? "bg-amber-500 text-white" : "bg-white text-slate-500 hover:bg-slate-50"}`}>
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Active filter chips */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-5">
                {search && (
                  <span className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                    &ldquo;{search}&rdquo;<button onClick={() => setSearch("")}><X size={12} /></button>
                  </span>
                )}
                {region !== "All" && (
                  <span className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                    {activeRegionMeta?.emoji} {region}<button onClick={() => setRegion("All")}><X size={12} /></button>
                  </span>
                )}
                {category !== "All" && (
                  <span className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                    {category}<button onClick={() => setCategory("All")}><X size={12} /></button>
                  </span>
                )}
                {duration !== "All" && (
                  <span className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                    {duration}<button onClick={() => setDuration("All")}><X size={12} /></button>
                  </span>
                )}
                {difficulty.length < 3 && difficulty.map((d) => (
                  <span key={d} className="flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                    {d}<button onClick={() => setDifficulty((prev) => prev.filter((x) => x !== d))}><X size={12} /></button>
                  </span>
                ))}
              </div>
            )}

            {/* Tour results */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">No tours found</h3>
                <p className="text-slate-500 mb-6">Try adjusting your filters or search terms.</p>
                <button onClick={clearFilters} className="px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className={view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5" : "space-y-4"}>
                {filtered.map((tour) => (
                  <TourCard key={tour.id} tour={tour} view={view} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ToursClientPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center bg-slate-50">
        <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ToursContent />
    </Suspense>
  );
}

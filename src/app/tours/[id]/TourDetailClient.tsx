"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Clock,
  MapPin,
  Users,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  Calendar,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Send,
  MessageCircle,
  Mail,
  Camera,
  ZoomIn,
} from "lucide-react";
import { Tour, testimonials, globalFoodAddOns } from "@/lib/data";
import { formatPrice, getDifficultyColor, getBadgeColor, getBadgeLabel } from "@/lib/utils";
import { wishlistStore } from "@/lib/store";
import TourCard from "@/components/ui/TourCard";
import StarRating from "@/components/ui/StarRating";

interface Props {
  tour: Tour;
  related: Tour[];
}

export default function TourDetailClient({ tour, related }: Props) {
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [openItinerary, setOpenItinerary] = useState<number | null>(0);
  const [tab, setTab] = useState<"overview" | "itinerary" | "reviews" | "photos">("overview");

  // Lightbox
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const openLightbox  = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevPhoto = () => setLightboxIdx((i) => (i === null ? 0 : (i - 1 + tour.gallery.length) % tour.gallery.length));
  const nextPhoto = () => setLightboxIdx((i) => (i === null ? 0 : (i + 1) % tour.gallery.length));

  // Ask a question modal
  const [questionOpen, setQuestionOpen] = useState(false);
  const [questionName, setQuestionName] = useState("");
  const [questionEmail, setQuestionEmail] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [questionSent, setQuestionSent] = useState(false);
  const [questionLoading, setQuestionLoading] = useState(false);

  const handleQuestionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuestionLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setQuestionLoading(false);
    setQuestionSent(true);
  };

  const closeQuestion = () => {
    setQuestionOpen(false);
    setTimeout(() => { setQuestionSent(false); setQuestionName(""); setQuestionEmail(""); setQuestionText(""); }, 300);
  };

  useEffect(() => {
    setWishlisted(wishlistStore.has(tour.id));
  }, [tour.id]);

  // Keyboard navigation + scroll lock for lightbox
  useEffect(() => {
    if (lightboxIdx === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setLightboxIdx((i) => (i === null ? 0 : (i + 1) % tour.gallery.length));
      else if (e.key === "ArrowLeft")
        setLightboxIdx((i) => (i === null ? 0 : (i - 1 + tour.gallery.length) % tour.gallery.length));
      else if (e.key === "Escape")
        setLightboxIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx, tour.gallery.length]);

  const toggleWishlist = () => {
    const updated = wishlistStore.toggle(tour.id);
    setWishlisted(updated.includes(tour.id));
  };

  const discountedPrice = tour.discount
    ? Math.round(tour.price * (1 - tour.discount / 100))
    : null;

  // Fake tour reviews (reuse testimonials)
  const tourReviews = testimonials.slice(0, 4);

  return (
    <>
    <div className="flex-1 bg-white">
      {/* Gallery hero */}
      <div className="relative bg-slate-900 pt-16" style={{ height: "480px" }}>
        {tour.gallery.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === galleryIdx ? 1 : 0 }}
          >
            <Image
              src={img}
              alt={`${tour.title} — photo ${i + 1}`}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Nav arrows */}
        <button
          onClick={() => setGalleryIdx((v) => (v - 1 + tour.gallery.length) % tour.gallery.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => setGalleryIdx((v) => (v + 1) % tour.gallery.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all"
        >
          <ChevronRight size={18} />
        </button>

        {/* Thumbnails */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {tour.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setGalleryIdx(i)}
              className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                i === galleryIdx ? "border-white" : "border-white/30 opacity-60"
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" sizes="56px" />
            </button>
          ))}
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-20 left-4 flex items-center gap-1.5 text-white/70 text-xs">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tours" className="hover:text-amber-400 transition-colors">Tours</Link>
          <span>/</span>
          <span className="text-white/90 truncate max-w-[160px]">{tour.title}</span>
        </div>

        {/* Actions */}
        <div className="absolute top-20 right-4 flex gap-2">
          <button
            onClick={toggleWishlist}
            className="w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
          >
            <Heart size={16} className={wishlisted ? "fill-red-400 text-red-400" : ""} />
          </button>
          <button
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            className="w-9 h-9 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
          >
            <Share2 size={16} />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left column */}
          <div className="flex-1 min-w-0">
            {/* Title area */}
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{tour.category}</span>
                {tour.badge && (
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full text-white ${getBadgeColor(tour.badge)}`}>
                    {getBadgeLabel(tour.badge)}
                  </span>
                )}
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${getDifficultyColor(tour.difficulty)}`}>
                  {tour.difficulty}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
                {tour.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1"><MapPin size={14} className="text-amber-500" />{tour.location}</span>
                <span className="flex items-center gap-1"><Clock size={14} className="text-amber-500" />{tour.duration}</span>
                <span className="flex items-center gap-1"><Users size={14} className="text-amber-500" />Max {tour.maxGuests} guests</span>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-slate-800">{tour.rating}</span>
                  <span className="text-slate-400">({tour.reviewCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-slate-200 mb-6">
              <nav className="flex gap-1 overflow-x-auto">
                {(["overview", "itinerary", "reviews"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-5 py-3 text-sm font-semibold capitalize transition-all border-b-2 -mb-px whitespace-nowrap ${
                      tab === t
                        ? "border-amber-500 text-amber-600"
                        : "border-transparent text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    {t}
                  </button>
                ))}
                <button
                  onClick={() => setTab("photos")}
                  className={`px-5 py-3 text-sm font-semibold transition-all border-b-2 -mb-px flex items-center gap-1.5 whitespace-nowrap ${
                    tab === "photos"
                      ? "border-amber-500 text-amber-600"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <Camera size={14} />
                  Photos
                  <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                    {tour.gallery.length}
                  </span>
                </button>
              </nav>
            </div>

            {/* Overview */}
            {tab === "overview" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-3">About This Tour</h2>
                  <p className="text-slate-600 leading-relaxed">{tour.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-4">Tour Highlights</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {tour.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <Check size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-slate-600 text-sm">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-4">What's Included</h2>
                    <ul className="space-y-2">
                      {tour.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Not Included</h2>
                    <ul className="space-y-2">
                      {tour.excluded.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                          <X size={15} className="text-red-400 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Meal plan */}
                {tour.mealPlan && (
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Meal Plan</h2>
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                      <div className="flex flex-wrap gap-3 mb-3">
                        {[
                          { key: "breakfast", label: "Breakfast", icon: "🍳" },
                          { key: "lunch",     label: "Lunch",     icon: "🥗" },
                          { key: "dinner",    label: "Dinner",    icon: "🍽️" },
                          { key: "snacks",    label: "Snacks",    icon: "🍎" },
                        ].map(({ key, label, icon }) => {
                          const included = tour.mealPlan![key as keyof typeof tour.mealPlan];
                          return (
                            <div key={key} className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold ${included ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-400 line-through"}`}>
                              <span>{icon}</span> {label}
                              {included ? <Check size={13} /> : <X size={13} />}
                            </div>
                          );
                        })}
                      </div>
                      {tour.mealPlan.note && (
                        <p className="text-amber-800 text-sm italic">{tour.mealPlan.note}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Cuisine highlights */}
                {tour.cuisineHighlights && tour.cuisineHighlights.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Cuisine Highlights</h2>
                    <div className="flex flex-wrap gap-2">
                      {tour.cuisineHighlights.map((dish) => (
                        <span key={dish} className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-800 px-3 py-1.5 rounded-full text-sm font-medium">
                          🍴 {dish}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Restaurant recommendations */}
                {tour.restaurants && tour.restaurants.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Recommended Restaurants</h2>
                    <div className="space-y-3">
                      {tour.restaurants.map((r) => (
                        <div key={r.name} className="border border-slate-200 rounded-xl p-4 hover:border-amber-300 transition-colors">
                          <div className="flex items-start justify-between gap-3 mb-1">
                            <div>
                              <span className="font-bold text-slate-800">{r.name}</span>
                              <span className="ml-2 text-xs font-semibold text-amber-600">{r.priceRange}</span>
                            </div>
                            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full shrink-0">{r.cuisine}</span>
                          </div>
                          <p className="text-slate-500 text-sm mb-2">{r.specialty}</p>
                          <div className="flex items-start gap-1 text-xs text-emerald-700 bg-emerald-50 rounded-lg px-2 py-1.5">
                            <span className="shrink-0">🍽️ Must try:</span>
                            <span className="italic">{r.mustTry}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Food add-ons */}
                {tour.foodAddOns && tour.foodAddOns.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-1">Food Experience Add-Ons</h2>
                    <p className="text-slate-500 text-sm mb-4">Enhance your tour with optional culinary experiences.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tour.foodAddOns.filter(Boolean).map((addon) => (
                        <div key={addon.id} className="border border-slate-200 rounded-xl p-4 hover:border-orange-300 hover:bg-orange-50 transition-all group">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{addon.icon}</span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="font-semibold text-slate-800 text-sm">{addon.name}</span>
                                <span className="font-bold text-amber-600 text-sm shrink-0">+{formatPrice(addon.price)}{addon.perPerson ? "/pp" : ""}</span>
                              </div>
                              <p className="text-slate-500 text-xs leading-relaxed">{addon.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-400 mt-3">All add-ons are subject to availability. Contact us to include these in your itinerary.</p>
                  </div>
                )}

                {/* Optional experiences */}
                {tour.optionalExperiences && tour.optionalExperiences.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-1">Optional Experiences</h2>
                    <p className="text-slate-500 text-sm mb-4">Personalize your journey with these add-on experiences.</p>
                    <div className="flex flex-wrap gap-2">
                      {tour.optionalExperiences.map((exp) => (
                        <span key={exp} className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-full text-sm font-medium">
                          ✨ {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Perfect for */}
                {tour.perfectFor && tour.perfectFor.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Perfect For</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {tour.perfectFor.map((p) => (
                        <div key={p} className="flex items-start gap-2">
                          <Check size={16} className="text-amber-500 mt-0.5 shrink-0" />
                          <span className="text-slate-600 text-sm">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing */}
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-4">Pricing</h2>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="border border-slate-200 rounded-xl p-5 text-center hover:border-amber-400 transition-colors">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Single</div>
                      <div className="text-3xl font-extrabold text-amber-600">
                        {formatPrice(discountedPrice ?? tour.price)}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">per person</div>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-5 text-center hover:border-amber-400 transition-colors">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Double</div>
                      <div className="text-3xl font-extrabold text-amber-600">
                        {formatPrice(tour.doublePrice)}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">per person (sharing)</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setQuestionOpen(true)}
                    className="w-full py-2.5 border border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-all text-sm"
                  >
                    Get a custom quote
                  </button>
                </div>
              </div>
            )}

            {/* Itinerary */}
            {tab === "itinerary" && (
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-6">Day-by-Day Itinerary</h2>
                <div className="space-y-3">
                  {tour.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="border border-slate-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenItinerary(openItinerary === day.day ? null : day.day)}
                        className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-extrabold text-sm shrink-0">
                            {day.day}
                          </div>
                          <span className="font-semibold text-slate-800 text-left">{day.title}</span>
                        </div>
                        {openItinerary === day.day ? (
                          <ChevronUp size={16} className="text-slate-400 shrink-0" />
                        ) : (
                          <ChevronDown size={16} className="text-slate-400 shrink-0" />
                        )}
                      </button>
                      {openItinerary === day.day && (
                        <div className="px-5 pb-4 border-t border-slate-100 pt-3 space-y-2">
                          <p className="text-sm text-slate-600 leading-relaxed">{day.description}</p>
                          {day.meals && day.meals.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {day.meals.map((meal) => (
                                <span key={meal} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-medium">
                                  🍽️ {meal}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            {tab === "reviews" && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-800">Guest Reviews</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <StarRating rating={tour.rating} size={18} />
                      <span className="text-2xl font-extrabold text-slate-900">{tour.rating}</span>
                      <span className="text-slate-400 text-sm">({tour.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  {tourReviews.map((r) => (
                    <div key={r.id} className="border border-slate-100 rounded-xl p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                          <Image src={r.avatar} alt={r.name} fill className="object-cover" sizes="40px" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-800 text-sm">{r.name}</span>
                            <span className="text-xs text-slate-400">{r.date}</span>
                          </div>
                          <div className="text-xs text-slate-400">{r.location}</div>
                          <StarRating rating={r.rating} size={13} className="mt-1" />
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">"{r.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Photos */}
            {tab === "photos" && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2 className="text-xl font-bold text-slate-800">Photo Gallery</h2>
                    <p className="text-sm text-slate-500 mt-0.5">{tour.gallery.length} photos · click to enlarge</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {tour.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => openLightbox(i)}
                      className={`relative group overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                        i === 0 ? "col-span-2 h-64 sm:h-72" : "h-44"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${tour.title} — photo ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                        <ZoomIn
                          size={28}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"
                        />
                      </div>
                      {/* photo number chip */}
                      <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        {i + 1} / {tour.gallery.length}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Enquire sidebar */}
          <div className="lg:w-80 shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="bg-[#1A0D06] p-5 text-white">
                <div className="text-sm font-medium text-white/60 mb-1">Starting from</div>
                {discountedPrice ? (
                  <div>
                    <span className="text-3xl font-extrabold text-amber-400">{formatPrice(discountedPrice)}</span>
                    <span className="text-white/40 line-through text-lg ml-2">{formatPrice(tour.price)}</span>
                  </div>
                ) : (
                  <span className="text-3xl font-extrabold text-amber-400">{formatPrice(tour.price)}</span>
                )}
                <div className="text-white/60 text-sm">per person</div>
                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10">
                  <span className="flex items-center gap-1 text-xs text-white/70"><Check size={11} className="text-emerald-400" /> No hidden fees</span>
                  <span className="flex items-center gap-1 text-xs text-white/70"><Check size={11} className="text-emerald-400" /> Personalised itineraries</span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                <p className="text-sm text-slate-600 leading-relaxed">
                  Interested in this tour? Reach out to us directly and we&apos;ll personalise it for you.
                </p>

                <button
                  onClick={() => setQuestionOpen(true)}
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all hover:shadow-lg text-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle size={15} />
                  Enquire About This Tour
                </button>

                <a
                  href="https://wa.me/233247810448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.859L.073 23.927l6.244-1.635A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.37l-.36-.213-3.707.972.989-3.614-.234-.371A9.793 9.793 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                  WhatsApp Us
                </a>

                <a
                  href="mailto:brownlinetours@gmail.com"
                  className="w-full py-3 border-2 border-slate-200 text-slate-600 font-semibold rounded-xl hover:bg-slate-50 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <Mail size={15} className="text-amber-500" />
                  Email Us
                </a>

                <div className="border-t border-slate-100 pt-4 space-y-2.5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Why Travel With Us</p>
                  {[
                    { icon: "🌍", text: "Expert local Ghana guides, certified & vetted" },
                    { icon: "📞", text: "24/7 support before & during your trip" },
                    { icon: "🤝", text: "Fully customised, personally guided experiences" },
                    { icon: "🌱", text: "Responsible travel supporting local communities" },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="shrink-0">{icon}</span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related tours */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900">You May Also Like</h2>
              <Link href="/tours" className="flex items-center gap-1 text-amber-600 font-semibold text-sm hover:gap-2 transition-all">
                View all <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((t) => (
                <TourCard key={t.id} tour={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>

      {/* ── Ask a Question modal ── */}
      {questionOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeQuestion}
        >
          <div
            className="relative w-full sm:max-w-lg bg-white sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[96vh]"
            onClick={(e) => e.stopPropagation()}
          >

            {/* ── Hero banner ── */}
            <div className="relative h-36 shrink-0">
              <Image
                src={tour.gallery?.[0] ?? tour.image}
                alt={tour.title}
                fill
                className="object-cover"
                sizes="600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0D06] via-black/50 to-black/10" />

              {/* Close */}
              <button
                onClick={closeQuestion}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
              >
                <X size={15} />
              </button>

              {/* Tour name over image */}
              <div className="absolute bottom-4 left-5 right-12">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-0.5">Ask a Question</p>
                <h3 className="text-white font-extrabold text-base leading-snug line-clamp-2">{tour.title}</h3>
              </div>
            </div>

            {questionSent ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center justify-center px-8 py-12 gap-4 text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Check size={30} className="text-emerald-500" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                    <Send size={11} className="text-white" />
                  </div>
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-xl mt-1">Question sent!</p>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed max-w-xs mx-auto">
                    Our Ghana specialists will reply to{" "}
                    <span className="font-semibold text-slate-700">{questionEmail}</span>{" "}
                    within 24 hours.
                  </p>
                </div>
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={closeQuestion}
                    className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-sm transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              /* ── Form ── */
              <div className="overflow-y-auto">
                {/* Quick question chips */}
                <div className="px-5 pt-5 pb-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">Quick questions</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "What's included in the price?",
                      "Is this suitable for children?",
                      "Do you offer group discounts?",
                      "Can I customise this itinerary?",
                      "What's the best time to visit?",
                    ].map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setQuestionText(q)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                          questionText === q
                            ? "bg-amber-500 border-amber-500 text-white font-semibold"
                            : "border-slate-200 text-slate-500 hover:border-amber-300 hover:text-amber-600"
                        }`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleQuestionSubmit} className="px-5 pb-6 space-y-3">
                  {/* Name + Email side by side */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Name</label>
                      <input
                        type="text"
                        required
                        value={questionName}
                        onChange={(e) => setQuestionName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Email</label>
                      <input
                        type="email"
                        required
                        value={questionEmail}
                        onChange={(e) => setQuestionEmail(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={questionText}
                      onChange={(e) => setQuestionText(e.target.value)}
                      placeholder="What would you like to know about this tour?"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:bg-white focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={questionLoading}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-xl text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-sm shadow-amber-500/30"
                  >
                    {questionLoading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <><Send size={14} /> Send Question</>
                    )}
                  </button>

                  {/* Divider + alternatives */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex-1 h-px bg-slate-100" />
                    <span className="text-slate-400 text-xs">or reach us directly</span>
                    <div className="flex-1 h-px bg-slate-100" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="https://wa.me/233247810448"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.859L.073 23.927l6.244-1.635A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.001-1.37l-.36-.213-3.707.972.989-3.614-.234-.371A9.793 9.793 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="mailto:brownlinetours@gmail.com"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                    >
                      <Mail size={14} className="text-amber-500" />
                      Email Us
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full pointer-events-none">
            {lightboxIdx + 1} / {tour.gallery.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16 sm:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={tour.gallery[lightboxIdx]}
              alt={`${tour.title} — photo ${lightboxIdx + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight size={26} />
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-2">
            {tour.gallery.map((img, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightboxIdx(i); }}
                className={`relative w-12 h-9 rounded-md overflow-hidden shrink-0 transition-all ${
                  i === lightboxIdx ? "ring-2 ring-amber-400 opacity-100" : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="48px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

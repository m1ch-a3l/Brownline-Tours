"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Clock, MapPin, Heart, Users, Camera, CheckCircle, Zap, Flame } from "lucide-react";
import { Tour } from "@/lib/data";
import { formatPrice, getBadgeColor, getBadgeLabel, getDifficultyColor } from "@/lib/utils";
import { wishlistStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { REGION_ICONS } from "@/components/sections/BrowseByRegionSection";

interface TourCardProps {
  tour: Tour;
  view?: "grid" | "list";
}

// Deterministic urgency signals based on tour data
function getUrgencySignal(tour: Tour): { icon: React.ReactNode; text: string; color: string } | null {
  const spotsLeft: Record<string, number> = { t3: 3, c2: 2, t8: 4 };
  const spots = spotsLeft[tour.id];
  if (spots) return { icon: <Zap size={11} className="shrink-0" />, text: `Only ${spots} spots left!`, color: "text-red-600" };
  if (tour.badge === "Popular") return { icon: <Flame size={11} className="shrink-0" />, text: "High demand this season", color: "text-orange-600" };
  if (tour.badge === "Top Rated") return { icon: <Star size={11} className="shrink-0 fill-amber-500 text-amber-500" />, text: "Award-winning experience", color: "text-amber-700" };
  if (tour.badge === "Sale") return { icon: <Zap size={11} className="shrink-0" />, text: "Limited-time offer", color: "text-emerald-600" };
  return null;
}

export default function TourCard({ tour, view = "grid" }: TourCardProps) {
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    setWishlisted(wishlistStore.has(tour.id));
  }, [tour.id]);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = wishlistStore.toggle(tour.id);
    setWishlisted(updated.includes(tour.id));
  };

  const discountedPrice = tour.discount
    ? Math.round(tour.price * (1 - tour.discount / 100))
    : null;

  const urgency = getUrgencySignal(tour);
  const freeCancellation = tour.difficulty === "Easy" || tour.difficulty === "Moderate";

  // ── LIST VIEW ──────────────────────────────────────────────────
  if (view === "list") {
    return (
      <Link href={`/tours/${tour.slug}`} className="group block">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-amber-200 transition-all duration-300 overflow-hidden flex flex-col sm:flex-row">
          {/* Image */}
          <div className="relative sm:w-72 h-52 sm:h-auto shrink-0 overflow-hidden">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 288px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            {tour.badge && (
              <span className={cn("absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white shadow", getBadgeColor(tour.badge))}>
                {getBadgeLabel(tour.badge)}
              </span>
            )}
            {tour.discount && (
              <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-extrabold px-2 py-0.5 rounded-full shadow">
                -{tour.discount}% OFF
              </span>
            )}
            <button
              onClick={toggleWishlist}
              className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow hover:bg-white transition-all hover:scale-110"
            >
              <Heart size={15} className={wishlisted ? "fill-red-500 text-red-500" : "text-slate-400"} />
            </button>
            {/* Photo count */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full">
              <Camera size={10} /> {tour.gallery.length}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{tour.category}</span>
                  <h3 className="font-bold text-slate-800 text-lg leading-snug mt-0.5 group-hover:text-amber-600 transition-colors">
                    {tour.title}
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  {discountedPrice ? (
                    <>
                      <div className="text-slate-400 line-through text-sm">{formatPrice(tour.price)}</div>
                      <div className="text-2xl font-extrabold text-amber-600">{formatPrice(discountedPrice)}</div>
                    </>
                  ) : (
                    <div className="text-2xl font-extrabold text-amber-600">{formatPrice(tour.price)}</div>
                  )}
                  <div className="text-xs text-slate-400">per person</div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 text-slate-500 text-sm mb-2">
                <MapPin size={13} className="text-amber-500" />
                <span>{tour.location}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className={i < Math.round(tour.rating) ? "fill-amber-400 text-amber-400" : "text-slate-200"} />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-800">{tour.rating}</span>
                <span className="text-sm text-slate-400">({tour.reviewCount.toLocaleString()} reviews)</span>
              </div>

              <p className="text-slate-500 text-sm line-clamp-2 mb-3">{tour.description}</p>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-3">
                {freeCancellation && (
                  <span className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                    <CheckCircle size={12} /> Free cancellation
                  </span>
                )}
                {urgency && (
                  <span className={cn("flex items-center gap-1 text-xs font-semibold", urgency.color)}>
                    {urgency.icon} {urgency.text}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1"><Clock size={13} /> {tour.duration}</span>
                <span className="flex items-center gap-1"><Users size={13} /> Max {tour.maxGuests}</span>
                <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium", getDifficultyColor(tour.difficulty))}>
                  {tour.difficulty}
                </span>
              </div>
              <span className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded-lg transition-colors shadow-sm uppercase tracking-wide">
                View Tour
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // ── GRID VIEW ──────────────────────────────────────────────────
  return (
    <Link href={`/tours/${tour.slug}`} className="group block tour-card">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-full flex flex-col hover:shadow-lg hover:border-amber-200 transition-all duration-300">

        {/* ── Image area ── */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

          {/* Discount ribbon */}
          {tour.discount && (
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-extrabold px-3 py-1 rounded-bl-xl shadow">
              -{tour.discount}% OFF
            </div>
          )}

          {/* Badge */}
          {tour.badge && !tour.discount && (
            <span className={cn("absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white shadow", getBadgeColor(tour.badge))}>
              {getBadgeLabel(tour.badge)}
            </span>
          )}
          {tour.badge && tour.discount && (
            <span className={cn("absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white shadow", getBadgeColor(tour.badge))}>
              {getBadgeLabel(tour.badge)}
            </span>
          )}

          {/* Wishlist */}
          <button
            onClick={toggleWishlist}
            className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow hover:bg-white transition-all hover:scale-110"
          >
            <Heart size={15} className={wishlisted ? "fill-red-500 text-red-500" : "text-slate-500"} />
          </button>

          {/* Bottom row: duration + photo count */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
            <div className="flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
              <Clock size={11} /> {tour.duration}
            </div>
            <div className="flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
              <Camera size={10} /> {tour.gallery.length} photos
            </div>
          </div>
        </div>

        {/* ── Card body ── */}
        <div className="p-4 flex flex-col flex-1">

          {/* Category + Difficulty */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{tour.category}</span>
            <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", getDifficultyColor(tour.difficulty))}>
              {tour.difficulty}
            </span>
          </div>
          {/* Region */}
          {(() => {
            const RegionIcon = REGION_ICONS[tour.region] ?? MapPin;
            return (
              <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                <RegionIcon size={9} className="text-amber-500 shrink-0" strokeWidth={2.5} />
                {tour.region}
              </div>
            );
          })()}

          {/* Title */}
          <h3 className="font-bold text-slate-800 leading-snug mb-1.5 group-hover:text-amber-600 transition-colors line-clamp-2 text-[15px]">
            {tour.title}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-1 text-slate-500 text-xs mb-2">
            <MapPin size={11} className="text-amber-500 shrink-0" />
            <span className="truncate">{tour.location}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-2.5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className={i < Math.round(tour.rating) ? "fill-amber-400 text-amber-400" : "text-slate-200"} />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800">{tour.rating}</span>
            <span className="text-xs text-slate-400">({tour.reviewCount.toLocaleString()})</span>
          </div>

          {/* Urgency signal */}
          {urgency && (
            <div className={cn("flex items-center gap-1 text-xs font-semibold mb-2", urgency.color)}>
              {urgency.icon}
              <span>{urgency.text}</span>
            </div>
          )}

          {/* Free cancellation */}
          {freeCancellation && (
            <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium mb-2">
              <CheckCircle size={11} className="shrink-0" />
              Free cancellation available
            </div>
          )}

          {/* Price + CTA */}
          <div className="mt-auto pt-3 border-t border-slate-100 flex items-end justify-between gap-2">
            <div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wide">From</div>
              {discountedPrice ? (
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-extrabold text-amber-600">{formatPrice(discountedPrice)}</span>
                  <span className="text-xs text-slate-400 line-through">{formatPrice(tour.price)}</span>
                </div>
              ) : (
                <div className="text-xl font-extrabold text-amber-600">{formatPrice(tour.price)}</div>
              )}
              <div className="text-[10px] text-slate-400">per person</div>
            </div>
            <span className="shrink-0 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-extrabold rounded-xl transition-colors shadow-sm uppercase tracking-wide whitespace-nowrap">
              View Tour →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

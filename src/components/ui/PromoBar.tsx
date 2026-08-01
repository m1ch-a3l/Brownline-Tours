"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Calendar, Sparkles } from "lucide-react";

export default function PromoBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("promoBar_december2026");
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("promoBar_december2026", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-[#1A0D06] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 flex-wrap">
        <span className="text-white/80 text-xs">10-Day Ghana Heritage & December Experience — 22–31 Dec 2026</span>
        <span className="hidden sm:inline text-white/40 text-xs">·</span>
        <span className="text-amber-300 font-bold text-xs flex items-center gap-1">
          <Calendar size={11} /> From $4,550 / person
        </span>
        <Link
          href="/tours/ghana-heritage-luxury-experience"
          className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xs px-3 py-1 rounded-full transition-colors shrink-0"
        >
          View Tour
        </Link>
      </div>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
}

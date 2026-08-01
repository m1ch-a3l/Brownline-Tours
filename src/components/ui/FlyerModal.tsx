"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function FlyerModal() {
  const [open, setOpen] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("flyerModal_december2026");
    if (!seen) setOpen(true);
  }, []);

  useEffect(() => {
    const handler = () => {
      setCountdown(30);
      setOpen(true);
    };
    window.addEventListener("open-flyer", handler);
    return () => window.removeEventListener("open-flyer", handler);
  }, []);

  useEffect(() => {
    if (!open) return;

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          close();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [open]);

  function close() {
    if (timerRef.current) clearInterval(timerRef.current);
    sessionStorage.setItem("flyerModal_december2026", "1");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
      onClick={close}
    >
      <div
        className="relative max-h-[90vh] w-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg hover:bg-amber-500 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Countdown ring */}
        <div className="absolute -top-3 -left-3 z-10 w-8 h-8 rounded-full bg-slate-900 border-2 border-amber-400 text-amber-400 text-xs font-bold flex items-center justify-center">
          {countdown}
        </div>

        {/* Flyer image */}
        <Link href="/tours/ghana-heritage-luxury-experience" onClick={close}>
          <Image
            src="/Ads/December Tour.jpg.jpeg"
            alt="10 Days Ghana Heritage & December Experience — Brownline Tours"
            width={500}
            height={700}
            className="max-h-[85vh] w-auto object-contain rounded-xl shadow-2xl cursor-pointer"
            priority
          />
        </Link>

        {/* Click-away hint */}
        <p className="text-center text-white/50 text-xs mt-3">
          Click anywhere outside to close · auto-closes in {countdown}s
        </p>
      </div>
    </div>
  );
}

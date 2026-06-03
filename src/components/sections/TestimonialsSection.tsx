"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import StarRating from "@/components/ui/StarRating";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Real Stories
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900">
            What Our Travelers Say
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Don't take our word for it — hear from the 15,000+ travellers who have
            discovered Ghana with Brownline Tours.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <div
              key={t.id + i}
              className={`bg-slate-50 rounded-2xl p-6 border border-slate-100 relative transition-all duration-300 ${
                i === 0 ? "ring-2 ring-sky-400 bg-white shadow-md" : "opacity-80"
              }`}
            >
              <Quote className="absolute top-5 right-5 text-slate-200" size={36} />
              <StarRating rating={t.rating} size={15} className="mb-3" />
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                "{t.comment}"
              </p>
              <div className="text-xs font-semibold text-sky-600 mb-4">{t.tourName}</div>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm">{t.name}</div>
                  <div className="text-slate-400 text-xs">{t.location} • {t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-slate-200 hover:border-sky-400 flex items-center justify-center text-slate-500 hover:text-sky-600 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${
                  i === current ? "w-6 h-2.5 bg-sky-600" : "w-2.5 h-2.5 bg-slate-200"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-slate-200 hover:border-sky-400 flex items-center justify-center text-slate-500 hover:text-sky-600 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Overall rating */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-4xl font-extrabold text-slate-900">4.9</div>
            <StarRating rating={5} size={16} className="justify-center my-1" />
            <div className="text-sm text-slate-500">Average Rating</div>
          </div>
          <div className="w-px bg-slate-200 hidden sm:block" />
          <div>
            <div className="text-4xl font-extrabold text-slate-900">50K+</div>
            <div className="text-sm text-slate-500 mt-2">Happy Travelers</div>
          </div>
          <div className="w-px bg-slate-200 hidden sm:block" />
          <div>
            <div className="text-4xl font-extrabold text-slate-900">97%</div>
            <div className="text-sm text-slate-500 mt-2">Would Book Again</div>
          </div>
        </div>
      </div>
    </section>
  );
}

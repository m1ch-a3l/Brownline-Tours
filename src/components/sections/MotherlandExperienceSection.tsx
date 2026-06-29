import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Users, Star } from "lucide-react";
import { allTours } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function MotherlandExperienceSection() {
  const tour = allTours.find((t) => t.id === "t10");
  if (!tour) return null;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0603]/95 via-[#0E0603]/80 to-[#0E0603]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-[0.2em] mb-5 border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 rounded-full">
            <Star size={12} className="fill-amber-400" />
            Brownline Tours Signature Experience
          </div>

          <h2 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Return to the <span className="text-amber-400">Motherland</span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-6">
            A 12-day journey of heritage, healing, identity & connection — designed for the African diaspora and
            cultural travelers seeking a deep, emotional bond with Ghana.
          </p>

          <div className="flex flex-wrap items-center gap-5 mb-8 text-white/80 text-sm">
            <span className="flex items-center gap-1.5"><Calendar size={15} className="text-amber-400" /> 12 Days / 11 Nights</span>
            <span className="flex items-center gap-1.5"><Users size={15} className="text-amber-400" /> Small groups, families & solo travelers</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-9">
            {["Accra Heritage", "Wli Waterfalls", "Ashanti Kingdom", "Assin Manso", "Kakum & Elmina"].map((chip) => (
              <span key={chip} className="bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full">
                {chip}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href={`/tours/${tour.slug}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all hover:shadow-xl text-sm tracking-wide"
            >
              View Full Itinerary <ArrowRight size={16} />
            </Link>
            <div className="text-white">
              <span className="text-2xl font-extrabold text-amber-400">{formatPrice(tour.price)}</span>
              <span className="text-white/50 text-sm ml-1.5">per person</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, ShieldCheck, BadgePercent, Headphones, Users } from "lucide-react";
import TourCard from "@/components/ui/TourCard";
import { tours } from "@/lib/data";

const trustBadges = [
  { icon: ShieldCheck,  text: "Best Price Guarantee" },
  { icon: BadgePercent, text: "Free Cancellation" },
  { icon: Headphones,   text: "24/7 Local Support" },
  { icon: Users,        text: "Expert Guides" },
];

export default function FeaturedToursSection() {
  const signature = tours.filter((t) => t.badge === "Signature");
  const rest = tours.filter((t) => t.badge !== "Signature");
  const featured = [...signature, ...rest].slice(0, 6);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-4">
          <div>
            <div className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Handpicked for You
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              Featured Tour Packages
            </h2>
            <p className="text-slate-500 mt-3 max-w-xl">
              From adrenaline-fueled adventures to relaxing beach escapes — we have
              the perfect tour for every traveller.
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

        {/* Trust badges strip */}
        <div className="flex flex-wrap gap-4 mb-10">
          {trustBadges.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-white border border-slate-100 rounded-full px-4 py-2 shadow-sm">
              <Icon size={14} className="text-amber-500" />
              <span className="text-xs font-semibold text-slate-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Tour grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((tour) => (
            <TourCard key={tour.id} tour={tour} view="grid" />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-500 mb-5">
            Can&apos;t find what you&apos;re looking for? We also offer custom private tours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/tours"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all hover:shadow-lg"
            >
              Browse All Tours
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border-2 border-amber-500 text-amber-600 font-bold rounded-xl hover:bg-amber-50 transition-all"
            >
              Request Custom Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

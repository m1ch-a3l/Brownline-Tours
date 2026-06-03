import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "233245006789";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'd like to speak with a Brownline Tours travel specialist.")}`;

export default function CtaBannerSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
        alt="Ghana savanna — begin your journey"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Rich overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,7,3,0.92) 0%, rgba(56,35,18,0.78) 60%, rgba(15,7,3,0.88) 100%)",
        }}
      />

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block text-amber-400 text-xs font-bold uppercase tracking-[0.25em] border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 rounded-full mb-6">
          Your Journey Starts Here
        </div>

        <h2 className="text-white font-black leading-tight mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
          Your Journey to Africa Deserves
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #f46f22 0%, #FF8A45 50%, #f46f22 100%)",
            }}
          >
            More Than Ordinary Tourism.
          </span>
        </h2>

        <p className="text-white/75 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformation. Connection. Identity. Culture. Belonging. Adventure. Authenticity.
          That's what we sell — and what you'll carry home forever.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/tours"
            className="flex items-center gap-2 px-9 py-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold rounded-xl transition-all hover:shadow-2xl text-base tracking-wide shadow-lg"
          >
            Start Planning <ArrowRight size={18} />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-9 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl transition-all hover:shadow-2xl text-base tracking-wide shadow-lg"
          >
            <MessageCircle size={18} />
            Speak With Brownline Tours
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-9 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-base"
          >
            Custom Trip Request
          </Link>
        </div>

        {/* Micro trust line */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
          <span>🌍 15,000+ travelers hosted</span>
          <span>🏆 4.9 / 5 average rating</span>
          <span>🔒 Secure payments</span>
          <span>📞 24/7 on-trip support</span>
        </div>
      </div>
    </section>
  );
}

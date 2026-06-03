import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Users,
  Headphones,
  Star,
  Map,
  Leaf,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Map,
    title: "Local Insider Access",
    description: "Our guides were born and raised in the communities they share with you — real connections, not scripted tours.",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: Users,
    title: "Small, Intimate Groups",
    description: "Maximum 12 travelers per group. No crowds, no rush — just you, Ghana, and the people who call it home.",
    color: "text-sky-600 bg-sky-50",
  },
  {
    icon: Shield,
    title: "Safe & Stress-Free",
    description: "We handle every detail — transport, accommodation, permits, and emergency support — so you just experience.",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Star,
    title: "Authentic Cultural Immersion",
    description: "Beyond sightseeing: cooking classes, drumming, village stays, and ceremonies that connect you to real Ghanaian life.",
    color: "text-rose-600 bg-rose-50",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    description: "From first inquiry to final departure, our team is always a WhatsApp message away — day or night.",
    color: "text-violet-600 bg-violet-50",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Travel",
    description: "We partner with local businesses, pay living wages, and actively fund conservation and community projects.",
    color: "text-teal-600 bg-teal-50",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Reason cards */}
        <div className="text-center mb-14">
          <div className="text-sky-600 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            The Brownline Tours Difference
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Why Travelers
            <span className="text-sky-600"> Choose Us</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-lg">
            We're not a booking platform. We're your personal Ghana family — with you every step of the journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${reason.color}`}>
                <reason.icon size={22} />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-sky-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Founder section */}
        <div className="relative bg-slate-900 rounded-3xl overflow-hidden">
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #382312 0%, transparent 50%), radial-gradient(circle at 80% 20%, #f46f22 0%, transparent 40%)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Founder image */}
            <div className="relative min-h-72 lg:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Kwame Asante — Brownline Tours Founder & Lead Guide"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/70 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent lg:hidden" />

              {/* Credential badge */}
              <div className="absolute bottom-5 left-5 bg-amber-500 text-slate-900 rounded-xl px-4 py-2.5 shadow-lg">
                <div className="text-xs font-bold uppercase tracking-wide">Lead Guide & Founder</div>
                <div className="text-lg font-extrabold leading-tight">Kwame Asante</div>
              </div>
            </div>

            {/* Founder copy */}
            <div className="flex flex-col justify-center px-8 py-12 lg:px-12">
              <div className="text-amber-400 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
                People Book People
              </div>
              <h3 className="text-white text-3xl font-extrabold leading-tight mb-5">
                You're Not Booking a Tour.
                <br />
                <span className="text-amber-400">You're Trusting a Friend.</span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4 text-[15px]">
                I founded Brownline Tours in 2012 because I watched Ghana's extraordinary tourism potential
                go unshared with the world. I'd spent years guiding — and I knew the Ghana most visitors
                never see: the family compounds, the chief's palace, the woman who makes the best kelewele
                in all of Accra.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8 text-[15px]">
                When you travel with us, you travel with me and my team of 80 locally trained guides who
                grew up in the places they show you. We don't just take you to Ghana — we take you inside it.
              </p>

              {/* Credentials strip */}
              <div className="flex flex-wrap gap-3 mb-8">
                {["12+ Years Experience", "Ghana Tourism Authority", "80 Certified Guides", "15,000+ Travelers Hosted"].map((c) => (
                  <span
                    key={c}
                    className="text-xs font-semibold text-slate-300 border border-slate-600 bg-white/5 px-3 py-1.5 rounded-full"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-extrabold rounded-xl transition-all hover:shadow-lg text-sm w-fit"
              >
                Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

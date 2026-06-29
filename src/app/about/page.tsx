import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  Users,
  PawPrint,
  Mountain,
  Gem,
  Users2,
  GraduationCap,
  Briefcase,
  Sparkles,
  Compass,
  Plane,
  ShieldCheck,
  Leaf,
  HeartPulse,
  Stethoscope,
  Building2,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Brownline Tours — destination management and tour company specializing in authentic, immersive, and professionally guided experiences across Ghana.",
};

const whatWeDo = [
  { icon: Landmark, label: "Heritage & Ancestral Return Journeys" },
  { icon: Users, label: "Cultural Immersion Tours" },
  { icon: PawPrint, label: "Nature & Wildlife Adventures" },
  { icon: Mountain, label: "Hiking & Eco-Tourism Experiences" },
  { icon: Gem, label: "Luxury Private Tours" },
  { icon: Users2, label: "Group & Family Tours" },
  { icon: GraduationCap, label: "Educational & School Tours" },
  { icon: Briefcase, label: "Corporate & Incentive Travel" },
  { icon: Sparkles, label: "Wellness & Retreat Experiences" },
  { icon: Compass, label: "Customized Tailor-Made Itineraries" },
  { icon: Plane, label: "Airport Transfers & Travel Assistance" },
];

const whyUs = [
  {
    icon: Sparkles,
    title: "Authentic Experiences",
    body: "We go beyond the surface, offering real connections with Ghanaian culture, people, and history.",
  },
  {
    icon: Compass,
    title: "Expert Local Guidance",
    body: "Our experienced guides bring every destination to life through storytelling, history, and cultural insight.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    body: "Every traveler is unique. We design flexible itineraries that match your interests, pace, and travel style.",
  },
  {
    icon: ShieldCheck,
    title: "Comfort & Reliability",
    body: "We ensure smooth logistics, trusted partners, safe transport, and quality service from arrival to departure.",
  },
  {
    icon: Leaf,
    title: "Responsible Tourism",
    body: "We are committed to ethical tourism that respects culture, supports local communities, and protects the environment.",
  },
];

const impactAreas = [
  { icon: HeartPulse, label: "Access to essential medical equipment such as wheelchairs, hospital beds, and mobility aids" },
  { icon: Stethoscope, label: "Community health outreach programs in underserved areas" },
  { icon: Building2, label: "Partnerships with hospitals and healthcare professionals" },
  { icon: GraduationCap, label: "Educational support and youth development programs" },
  { icon: HeartHandshake, label: "Ethical and community-led volunteer experiences" },
];

export default function AboutPage() {
  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <div className="relative h-80 bg-slate-900 overflow-hidden">
        <Image
          src="/tourist_site/Kakum/caption (1).jpg"
          alt="About Brownline Tours"
          fill
          className="object-cover opacity-60"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60" />
        <div className="relative z-10 h-full flex items-end pb-12 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-amber-400 font-semibold uppercase tracking-widest text-sm mb-2">Our Story</p>
            <h1 className="text-white text-4xl sm:text-5xl font-extrabold">Discover Ghana Beyond the Guidebook</h1>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-5">
                About Brownline Tours
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                At Brownline Tours, we believe travel is more than visiting destinations — it is
                about experiencing culture, connecting with people, and creating meaningful
                memories that last a lifetime.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Founded in Ghana, Brownline Tours is a destination management and tour company
                specializing in authentic, immersive, and professionally guided experiences across
                the country. We design journeys that showcase Ghana&apos;s rich heritage, vibrant
                traditions, breathtaking landscapes, and warm hospitality.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                From ancestral heritage journeys and historic castles to nature adventures,
                cultural immersion, and luxury private experiences, every itinerary is thoughtfully
                curated to offer something real, engaging, and unforgettable.
              </p>
              <Link href="/contact" className="px-7 py-3.5 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-all inline-block">
                Get in Touch
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/tourist_site/Cape Coast/the-world-famous-cape.jpg"
                  alt="Brownline Tours — Ghana Heritage"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-amber-500 rounded-2xl p-5 text-white shadow-xl max-w-[220px]">
                <div className="text-lg font-extrabold leading-snug">Authentic Ghana.</div>
                <div className="text-amber-100 text-sm">Exceptional Experiences.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">Meet the Founder</p>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-1">Marven Brown</h2>
            <p className="text-slate-500 font-medium">Founder &amp; CEO, Brownline Tours</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-start mb-12">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shrink-0 mx-auto lg:mx-0 shadow-lg ring-4 ring-amber-100">
              <Image
                src="/ceo-profile/WhatsApp Image 2026-06-28 at 12.48.58 PM (4).jpeg"
                alt="Marven Brown — Founder & CEO, Brownline Tours"
                fill
                className="object-cover"
                sizes="144px"
              />
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Brownline Tours was founded by Marven Brown, a Ghanaian tour guide and travel
                professional with a deep passion for storytelling, culture, and meaningful travel
                experiences.
              </p>
              <p>
                With hands-on experience guiding travelers across Ghana&apos;s key destinations —
                from historic forts and castles along the coast to the Ashanti Kingdom, Volta
                landscapes, and northern cultural sites — Marven developed a strong understanding
                of what visitors truly seek: authentic connection, not just sightseeing.
              </p>
              <p>
                His vision for Brownline Tours is to move beyond traditional tourism and create
                immersive experiences that allow travelers to engage deeply with Ghana&apos;s
                history, people, and way of life. He is especially passionate about heritage
                tourism, African diaspora connections, eco-tourism, and community-based travel.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-7 sm:p-9 mb-12">
            <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-3">His Vision</p>
            <blockquote className="text-xl sm:text-2xl font-bold text-slate-800 leading-snug mb-4">
              &ldquo;To show Ghana in a way that feels real, personal, and unforgettable — while
              ensuring local communities benefit from every journey.&rdquo;
            </blockquote>
            <p className="text-slate-600 leading-relaxed">
              He believes tourism should not only create memories for visitors but also generate
              opportunity and positive impact for the people and places visited.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-5">Leadership Approach</h3>
            <p className="text-slate-600 leading-relaxed mb-4">Under his leadership, Brownline Tours is built on:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                "Authentic storytelling and cultural education",
                "Personalized and immersive travel experiences",
                "Respect for local communities and traditions",
                "Responsible and sustainable tourism practices",
                "Strong commitment to service and guest experience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-slate-600 text-sm">
                  <span className="text-amber-500 font-bold mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed">
              He is also developing the Brownline Impact Initiative, focused on supporting
              healthcare, education, and community development through tourism-driven impact
              projects.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-slate-800 mb-3">A Personal Touch</h3>
            <p className="text-slate-600 leading-relaxed">
              For Marven, guiding is not just a profession — it is a calling. Every tour is an
              opportunity to connect people to Ghana in a meaningful way, share untold stories, and
              create lifelong memories for travelers from around the world.
            </p>
          </div>

          <blockquote className="text-center border-t border-slate-200 pt-10">
            <p className="text-xl sm:text-2xl font-extrabold text-amber-600 leading-snug max-w-2xl mx-auto">
              &ldquo;Travel is not just about places — it&apos;s about connection, and connection is
              what we create at Brownline Tours.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Our Mission</h3>
              <p className="text-slate-500 leading-relaxed">
                To deliver exceptional travel experiences that connect people to Ghana&apos;s
                culture, history, and nature while promoting responsible tourism and supporting
                local communities.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="text-5xl mb-4">🔭</div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Our Vision</h3>
              <p className="text-slate-500 leading-relaxed">
                To become one of Africa&apos;s leading tour operators, recognized globally for
                authentic, sustainable, and transformative travel experiences that benefit both
                travelers and the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="text-3xl font-extrabold text-slate-900">A Wide Range of Travel Experiences</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatWeDo.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-xl p-4 hover:border-amber-300 hover:bg-amber-50/50 transition-all">
                <div className="w-11 h-11 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-amber-600" />
                </div>
                <span className="text-slate-700 font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">Why Travel With Brownline Tours?</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Travel With Confidence</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyUs.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-amber-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-[#1A0D06] relative overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-2">Our Commitment to Impact</p>
            <h2 className="text-3xl font-extrabold text-white mb-5">Tourism Should Create Value Beyond Travel</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              At Brownline Tours, we believe tourism should create value beyond travel
              experiences. Every journey into Ghana is also an opportunity to give back to the
              communities that make these experiences possible.
            </p>
            <p className="text-white/70 leading-relaxed">
              As part of our long-term vision, we are developing the{" "}
              <strong className="text-amber-400">Brownline Impact Initiative</strong> — a social
              responsibility arm focused on supporting healthcare, education, and community
              development across Ghana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {impactAreas.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="w-9 h-9 rounded-lg bg-amber-400/15 flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-amber-400" />
                </div>
                <span className="text-white/80 text-sm leading-relaxed">{label}</span>
              </div>
            ))}
          </div>

          <div className="max-w-3xl space-y-3 text-white/60 text-sm leading-relaxed">
            <p>
              We ensure that all impact activities are respectful, meaningful, and designed with
              the communities involved — not imposed on them.
            </p>
            <p>
              We also offer optional Impact Experiences for travelers who wish to participate in
              community-based activities, cultural exchange, and responsible giving initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-5">Our Promise</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            At Brownline Tours, we don&apos;t just show you Ghana — we help you experience it.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            We are committed to creating journeys that are enriching, respectful, and
            unforgettable, while contributing positively to the people and places that make Ghana
            so special.
          </p>
          <p className="text-xl font-extrabold text-amber-600 mb-10">
            Experience Ghana. Connect Deeply. Travel Responsibly.
          </p>
          <Link href="/tours" className="px-8 py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-all inline-block">
            Explore Our Tours
          </Link>
        </div>
      </section>

    </div>
  );
}

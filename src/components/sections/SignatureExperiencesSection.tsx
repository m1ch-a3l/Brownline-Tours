import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Heritage & Return to Roots",
    description:
      "Walk through the Door of No Return. Stand inside Cape Coast Castle. Feel the weight of history — and the power of homecoming. This journey is for those who need to reconnect.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
    tag: "Heritage",
    href: "/tours?category=Heritage",
    accent: "from-amber-900/80",
  },
  {
    title: "Nature & Adventure Escapes",
    description:
      "Trek West Africa's highest peak, walk above an ancient rainforest canopy, and kayak down the Volta River. Ghana's wild side will leave you breathless.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    tag: "Adventure",
    href: "/tours?category=Adventure",
    accent: "from-emerald-900/80",
  },
  {
    title: "Cultural Immersion",
    description:
      "Learn to drum. Attend a chief's durbar. Cook jollof from scratch with a grandmother in Kumasi. Authentic Ghanaian culture doesn't happen in a museum — it happens in daily life.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    tag: "Cultural",
    href: "/tours?category=Cultural",
    accent: "from-rose-900/80",
  },
  {
    title: "December in Ghana",
    description:
      "Detty December — the most electric time in Ghana. World-class concerts, beach parties, festivals, and a diaspora reunion unlike anything on earth. Be here for it.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    tag: "Festival",
    href: "/tours?search=December",
    accent: "from-purple-900/80",
  },
  {
    title: "Wildlife Safari",
    description:
      "Walk alongside wild elephants at Mole National Park. Spot hippos, baboons, and 300 bird species. West Africa's largest wildlife sanctuary — experienced on foot.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    tag: "Safari",
    href: "/tours?category=Safari",
    accent: "from-yellow-900/80",
  },
  {
    title: "Culinary Journeys",
    description:
      "From Accra's vibrant street food to the smoky soups of Kumasi and the freshest seafood along the coast. Ghana's cuisine is a love language — taste every dialect.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    tag: "Culinary",
    href: "/tours?category=Culinary",
    accent: "from-orange-900/80",
  },
  {
    title: "Luxury Ghana Experiences",
    description:
      "Private beach villas, bespoke itineraries, helicopter transfers and fine dining overlooking the Atlantic. Ghana's luxury scene is real — and remarkably intimate.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    tag: "Luxury",
    href: "/tours?search=luxury",
    accent: "from-slate-900/80",
  },
  {
    title: "Volunteer & Give-Back Trips",
    description:
      "Build schools in the north, teach on the coast, or support wildlife conservation in Mole. Travel with purpose — and leave Ghana a little better than you found it.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    tag: "Volunteer",
    href: "/contact",
    accent: "from-teal-900/80",
  },
];

export default function SignatureExperiencesSection() {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* ── Background layers ── */}
      {/* Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E0603] via-[#2A1208] to-[#1A0D06]" />

      {/* Warm glow blobs */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-amber-400/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #f46f22 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Top & bottom fade edges */}
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#0E0603] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#1A0D06] to-transparent pointer-events-none" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-amber-400 font-semibold text-xs uppercase tracking-[0.2em] mb-3 border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 rounded-full">
            Signature Experiences
          </div>
          <h2 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight mt-2">
            Not Just Tours.
            <br />
            <span className="text-amber-400">Life-Changing Journeys.</span>
          </h2>
          <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
            Every experience we craft is designed to transform — not just transport. Choose what calls to your soul.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {experiences.map((exp, i) => (
            <Link
              key={exp.title}
              href={exp.href}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 || i === 4 ? "sm:col-span-2" : ""
              }`}
              style={{ minHeight: i === 0 || i === 4 ? "340px" : "280px" }}
            >
              {/* Image */}
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${exp.accent} via-black/30 to-transparent group-hover:opacity-90 transition-opacity`}
              />

              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                  {exp.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="text-white font-extrabold text-lg leading-snug mb-2">
                  {exp.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed line-clamp-2 mb-3">
                  {exp.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold group-hover:gap-3 transition-all">
                  View Experience <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
}

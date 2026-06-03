import Link from "next/link";
import Image from "next/image";

const destinations = [
  { name: "Northern Region", region: "Mole National Park", tours: 3, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80", href: "/tours?search=Northern" },
  { name: "Central Region", region: "Cape Coast & Elmina", tours: 5, image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80", href: "/tours?search=Central" },
  { name: "Volta Region", region: "Waterfalls & Mountains", tours: 4, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", href: "/tours?search=Volta" },
  { name: "Ashanti Region", region: "Kumasi & Kente Culture", tours: 3, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80", href: "/tours?search=Kumasi" },
  { name: "Greater Accra", region: "Accra & Ada Foah", tours: 4, image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80", href: "/tours?search=Accra" },
  { name: "Western Region", region: "Busua Beach & Rainforest", tours: 3, image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80", href: "/tours?search=Busua" },
];

export default function DestinationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-2">
            Explore Ghana
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900">
            Ghana's Regions
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            From wildlife-rich savanna in the north to pristine beaches in the west — Ghana's
            regions each offer something completely different.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {destinations.map((dest, i) => (
            <Link
              key={dest.name}
              href={dest.href}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "md:col-span-1 md:row-span-2" : ""
              }`}
              style={{ minHeight: i === 0 ? "420px" : "200px" }}
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                  {dest.region}
                </div>
                <h3 className="text-2xl font-extrabold">{dest.name}</h3>
                <div className="text-sm text-white/80 mt-1">{dest.tours} tours available</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

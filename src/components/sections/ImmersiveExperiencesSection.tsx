import Image from "next/image";

const activities = [
  {
    emoji: "🎨",
    title: "Batik & Fabric Art",
    description: "Create your own wax-resist masterpiece alongside master artisans in Kumasi.",
    image: "/tourist_site/Ashanti Region/IMG_5859-2-800x510.jpg",
  },
  {
    emoji: "🥁",
    title: "Drumming Sessions",
    description: "Learn the sacred rhythms of the Ashanti and Ewe people from master percussionists.",
    image: "/tourist_site/Ashanti Region/43ece6a5_PeopleDancingatHogbetsotsofestivalTraditionalDressGhanaEditeddreamstimem261372873_2.jpeg",
  },
  {
    emoji: "🍲",
    title: "Traditional Cooking",
    description: "Pound fufu, stir jollof, and learn the recipes that have fed generations.",
    image: "/tourist_site/Kakum/caption.jpg",
  },
  {
    emoji: "🛶",
    title: "Canoe Rides",
    description: "Glide through the mangroves of Ada Foah or along the Volta River at sunset.",
    image: "/tourist_site/Volta/volta_river.jpg",
  },
  {
    emoji: "💎",
    title: "Bead Making",
    description: "Craft handmade Krobo glass beads — a tradition stretching back centuries.",
    image: "/tourist_site/Eastern/95.jpg",
  },
  {
    emoji: "🏘️",
    title: "Village Experiences",
    description: "Spend a day with a rural community — share meals, stories, and daily life.",
    image: "/tourist_site/Mole/safari-guided-tours-at.jpg",
  },
  {
    emoji: "📸",
    title: "Cultural Photoshoots",
    description: "Dress in kente cloth or traditional attire and be photographed across iconic Ghana.",
    image: "/tourist_site/Ashanti Region/kumasi-e1427985649237.jpg",
  },
  {
    emoji: "🌿",
    title: "Wellness & Nature Walks",
    description: "Guided herb walks, forest meditation, and traditional healing at Ghana's sacred sites.",
    image: "/tourist_site/Volta/de.jpg",
  },
];

export default function ImmersiveExperiencesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-sky-600 font-semibold text-xs uppercase tracking-[0.2em] mb-3">
            Hands-On &amp; Heart-Open
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Immersive Cultural
            <span className="text-sky-600"> Activities</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            What makes Brownline Tours different is what happens between the landmarks —
            the hands-on moments that make Ghana impossible to forget.
          </p>
        </div>

        {/* Activity grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {activities.map((act) => (
            <div
              key={act.title}
              className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-600"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Emoji badge */}
                <div className="absolute top-3 left-3 w-9 h-9 bg-white/90 rounded-xl flex items-center justify-center text-xl shadow-md">
                  {act.emoji}
                </div>
              </div>

              {/* Text */}
              <div className="p-4">
                <h3 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-sky-600 transition-colors">
                  {act.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";

const activities = [
  {
    emoji: "🎨",
    title: "Batik & Fabric Art",
    description: "Create your own wax-resist masterpiece alongside master artisans in Kumasi.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    emoji: "🥁",
    title: "Drumming Sessions",
    description: "Learn the sacred rhythms of the Ashanti and Ewe people from master percussionists.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
  },
  {
    emoji: "🍲",
    title: "Traditional Cooking",
    description: "Pound fufu, stir jollof, and learn the recipes that have fed generations.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  },
  {
    emoji: "🛶",
    title: "Canoe Rides",
    description: "Glide through the mangroves of Ada Foah or along the Volta River at sunset.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
  },
  {
    emoji: "💎",
    title: "Bead Making",
    description: "Craft handmade Krobo glass beads — a tradition stretching back centuries.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
  },
  {
    emoji: "🏘️",
    title: "Village Experiences",
    description: "Spend a day with a rural community — share meals, stories, and daily life.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
  },
  {
    emoji: "📸",
    title: "Cultural Photoshoots",
    description: "Dress in kente cloth or traditional attire and be photographed across iconic Ghana.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  },
  {
    emoji: "🌿",
    title: "Wellness & Nature Walks",
    description: "Guided herb walks, forest meditation, and traditional healing at Ghana's sacred sites.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
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

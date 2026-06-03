import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Clock, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Blog",
  description: "Ghana travel guides, tips, destination deep-dives and inspiring stories from the Brownline Tours team.",
};

const categories = ["All", "Guides", "Heritage", "Wildlife", "Beaches", "Food & Culture", "Culture"];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <div className="bg-slate-900 pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-2">Travel Inspiration</p>
          <h1 className="text-white text-4xl font-extrabold mb-3">Brownline Tours Blog</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Ghana travel guides, destination deep-dives, packing tips, and stories from travellers across the country.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                c === "All"
                  ? "bg-sky-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all">
            <div className="relative h-72 md:h-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 left-4 bg-sky-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                ✨ Featured
              </div>
            </div>
            <div className="bg-white p-8 flex flex-col justify-center">
              <div className="text-sky-600 text-xs font-bold uppercase tracking-widest mb-2">{featured.category}</div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors leading-snug">
                {featured.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><User size={12} /> {featured.author}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                <span>{featured.date}</span>
              </div>
              <div className="flex items-center gap-1 text-sky-600 font-semibold text-sm mt-5 group-hover:gap-2 transition-all">
                Read Article <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3 bg-sky-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-800 leading-snug mb-2 group-hover:text-sky-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1"><User size={11} />{post.author}</span>
                  <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Clock, User, ArrowLeft, Tag, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [{ url: post.image }] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <div className="relative h-[420px] overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-sky-600 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-white text-4xl font-extrabold leading-tight mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src={post.authorAvatar} alt={post.author} fill className="object-cover" sizes="32px" />
                </div>
                <span>{post.author}</span>
              </div>
              <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime}</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="flex items-center gap-1 text-sky-600 text-sm font-medium mb-8 hover:gap-2 transition-all">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="prose prose-slate max-w-none">
          <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">{post.excerpt}</p>

          {/* Simulated article content */}
          <p className="text-slate-600 leading-relaxed mb-6">
            Planning the perfect trip requires careful research and preparation. Whether you're a seasoned traveler or embarking on your first adventure, understanding the key factors that will shape your experience is essential for making the most of every moment.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Key Considerations</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Every destination has its unique rhythm, seasonal patterns, and cultural nuances. The most rewarding travel experiences come from respecting these rhythms rather than fighting against them. Local expertise, developed over years of guiding visitors, reveals layers of a destination that no guidebook can fully capture.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            The best travelers approach each destination with curiosity and humility — willing to be surprised, to adapt, and to engage authentically with the people and places they encounter. This mindset transforms a holiday into something genuinely life-changing.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Practical Planning Tips</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-600 mb-6 ml-4">
            <li>Research the best time to visit based on your specific interests</li>
            <li>Book accommodations well in advance for peak seasons</li>
            <li>Secure necessary permits and visas early</li>
            <li>Pack appropriately for all expected weather conditions</li>
            <li>Purchase comprehensive travel insurance before departure</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-6">
            Remember that the unexpected is often what makes a trip memorable. Leave room in your itinerary for spontaneity — the hidden restaurant recommended by your guide, the detour that reveals a breathtaking vista, the chance encounter with a local artisan.
          </p>
          <blockquote className="border-l-4 border-sky-500 pl-6 my-8 bg-sky-50 py-4 pr-4 rounded-r-xl">
            <p className="text-slate-700 italic text-lg">"Travel is not just about seeing new places. It's about seeing yourself differently — through the lens of a wider world."</p>
            <footer className="text-slate-500 text-sm mt-2">— Kwame Asante, Brownline Tours Founder</footer>
          </blockquote>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-100">
          {post.tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1 bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full text-xs font-medium">
              <Tag size={11} /> {tag}
            </span>
          ))}
        </div>

        {/* Author */}
        <div className="mt-10 bg-slate-50 rounded-2xl p-6 flex items-start gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
            <Image src={post.authorAvatar} alt={post.author} fill className="object-cover" sizes="56px" />
          </div>
          <div>
            <div className="font-bold text-slate-800 text-lg">{post.author}</div>
            <div className="text-sky-600 text-sm mb-2">Brownline Tours Travel Expert</div>
            <p className="text-slate-500 text-sm">A passionate Ghanaian guide and travel expert, dedicated to sharing the authentic beauty and culture of Ghana with visitors from around the world.</p>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-14 pt-10 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group flex gap-4 items-start hover:bg-slate-50 rounded-xl p-3 -m-3 transition-colors">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <Image src={p.image} alt={p.title} fill className="object-cover" sizes="80px" />
                  </div>
                  <div>
                    <div className="text-xs text-sky-600 font-semibold mb-1">{p.category}</div>
                    <div className="text-sm font-semibold text-slate-800 group-hover:text-sky-600 transition-colors line-clamp-2">{p.title}</div>
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-1"><Clock size={10} /> {p.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

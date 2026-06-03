import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { team, stats } from "@/lib/data";
import { X, AtSign, Link2, Globe, Users, Map, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Brownline Tours — our story, mission, and the passionate Ghanaian team behind your authentic travel experiences.",
};

const iconMap = { users: Users, globe: Globe, map: Map, award: Award };

export default function AboutPage() {
  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <div className="relative h-80 bg-slate-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
          alt="About Brownline Tours"
          fill
          className="object-cover opacity-60"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60" />
        <div className="relative z-10 h-full flex items-end pb-12 px-4">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-sky-400 font-semibold uppercase tracking-widest text-sm mb-2">Our Story</p>
            <h1 className="text-white text-5xl font-extrabold">About Brownline Tours</h1>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-5">
                Born from a Passion for Ghana
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Brownline Tours was founded in Accra in 2012 by Kwame Asante, who had watched Ghana's extraordinary tourism potential go largely undiscovered. He wanted to share the Ghana he knew — its wildlife, its history, its culture, and its food — with the world through experiences that actually benefit local communities.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Starting with four tours and a team of six, Brownline Tours set out to build Ghana's most trusted tour operator. Today, we cover all 16 regions of Ghana with 45+ tours, a team of passionate experts, and over 80 certified local guides who live in the communities they share with you.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Akwaaba — welcome. We believe every visitor to Ghana should leave with a deeper understanding of this remarkable country and a desire to return. That is what guides everything we do.
              </p>
              <Link href="/contact" className="px-7 py-3.5 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 transition-all inline-block">
                Get in Touch
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Brownline Tours Team"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-sky-600 rounded-2xl p-5 text-white shadow-xl">
                <div className="text-3xl font-extrabold">12+</div>
                <div className="text-sky-100 text-sm">Years in Ghana</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-sky-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap] || Globe;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="text-sky-200 mx-auto mb-3" size={24} />
                  <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                  <div className="text-sky-100 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌍",
                title: "Our Mission",
                body: "To craft extraordinary travel experiences that connect people with the world's most remarkable places and cultures — responsibly, authentically, and memorably.",
              },
              {
                icon: "🔭",
                title: "Our Vision",
                body: "A world where travel is a force for good — enriching the lives of both travelers and the communities they visit, while preserving the natural wonders we all share.",
              },
              {
                icon: "💚",
                title: "Our Values",
                body: "Authenticity, sustainability, safety, and joy. We reject mass tourism and champion experiences that create real connections and lasting impact.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center hover:shadow-md transition-all">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sky-600 font-semibold text-sm uppercase tracking-widest mb-2">The People Behind the Magic</div>
            <h2 className="text-3xl font-extrabold text-slate-900">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-white shadow-lg group-hover:ring-sky-200 transition-all">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="128px" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">{member.name}</h3>
                <div className="text-sky-600 text-sm font-medium mb-2">{member.role}</div>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
                <div className="flex justify-center gap-2">
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="w-8 h-8 bg-slate-100 hover:bg-sky-100 rounded-full flex items-center justify-center text-slate-500 hover:text-sky-600 transition-all">
                      <X size={14} />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="w-8 h-8 bg-slate-100 hover:bg-rose-100 rounded-full flex items-center justify-center text-slate-500 hover:text-rose-600 transition-all">
                      <AtSign size={14} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="w-8 h-8 bg-slate-100 hover:bg-blue-100 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 transition-all">
                      <Link2 size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

import { Users, Globe, Map, Award } from "lucide-react";
import { stats } from "@/lib/data";

const iconMap = {
  users: Users,
  globe: Globe,
  map: Map,
  award: Award,
};

export default function StatsSection() {
  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap] || Globe;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                    <Icon className="text-amber-500" size={22} />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

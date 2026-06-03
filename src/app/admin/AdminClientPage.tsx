"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  Map,
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  Star,
  Eye,
  Edit2,
  Trash2,
  Plus,
  Search,
  Bell,
  ChevronDown,
  Check,
  X,
  AlertCircle,
  LogOut,
} from "lucide-react";
import { tours, sampleBookings } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

type AdminTab = "dashboard" | "tours" | "bookings" | "customers";

const adminStats = [
  { label: "Total Revenue", value: "$284,500", change: "+12.5%", up: true, icon: DollarSign, color: "text-emerald-600 bg-emerald-50" },
  { label: "Active Bookings", value: "48", change: "+8", up: true, icon: Calendar, color: "text-sky-600 bg-sky-50" },
  { label: "Total Tours", value: "320", change: "+5", up: true, icon: Map, color: "text-violet-600 bg-violet-50" },
  { label: "New Customers", value: "126", change: "+23%", up: true, icon: Users, color: "text-amber-600 bg-amber-50" },
];

const recentActivity = [
  { type: "booking", message: "New booking: Serengeti Safari — Sarah Mitchell", time: "2 min ago" },
  { type: "review", message: "5★ review posted for Bali Island Paradise", time: "15 min ago" },
  { type: "cancellation", message: "Booking BK-087 cancelled — Inca Trail", time: "1 hour ago" },
  { type: "booking", message: "New booking: Japanese Cultural Journey — 3 guests", time: "2 hours ago" },
  { type: "signup", message: "New customer registered: james@example.com", time: "3 hours ago" },
];

export default function AdminClientPage() {
  const [tab, setTab] = useState<AdminTab>("dashboard");
  const [tourSearch, setTourSearch] = useState("");
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminCreds, setAdminCreds] = useState({ email: "", password: "" });
  const [adminError, setAdminError] = useState("");
  const [deletedTours, setDeletedTours] = useState<string[]>([]);
  const [editingTour, setEditingTour] = useState<string | null>(null);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminCreds.email === "admin@ghanaquest.com" && adminCreds.password === "admin123") {
      setAdminLoggedIn(true);
    } else {
      setAdminError("Invalid credentials. Use admin@ghanaquest.com / admin123");
    }
  };

  const filteredTours = tours
    .filter((t) => !deletedTours.includes(t.id))
    .filter((t) =>
      t.title.toLowerCase().includes(tourSearch.toLowerCase()) ||
      t.location.toLowerCase().includes(tourSearch.toLowerCase())
    );

  const statusColor = (s: string) => {
    if (s === "Confirmed") return "bg-emerald-100 text-emerald-700";
    if (s === "Cancelled") return "bg-red-100 text-red-700";
    return "bg-amber-100 text-amber-700";
  };

  const activityIcon = (type: string) => {
    if (type === "booking") return <Check size={14} className="text-emerald-600" />;
    if (type === "cancellation") return <X size={14} className="text-red-500" />;
    if (type === "review") return <Star size={14} className="text-amber-500" />;
    return <Users size={14} className="text-sky-600" />;
  };

  if (!adminLoggedIn) {
    return (
      <div className="flex-1 bg-slate-900 flex items-center justify-center px-4 pt-16">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-sky-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-black text-xl">
              W
            </div>
            <h1 className="text-2xl font-extrabold text-white">Admin Portal</h1>
            <p className="text-slate-400 text-sm mt-1">Brownline Tours Management</p>
          </div>
          <div className="bg-white rounded-2xl p-6">
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5 block">Email</label>
                <input
                  type="email"
                  value={adminCreds.email}
                  onChange={(e) => setAdminCreds({ ...adminCreds, email: e.target.value })}
                  placeholder="admin@ghanaquest.com"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-400 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5 block">Password</label>
                <input
                  type="password"
                  value={adminCreds.password}
                  onChange={(e) => setAdminCreds({ ...adminCreds, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-400 transition-all"
                />
              </div>
              {adminError && <p className="text-red-500 text-xs">{adminError}</p>}
              <button
                type="submit"
                className="w-full py-3.5 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 transition-all"
              >
                Sign In to Admin
              </button>
            </form>
            <p className="text-center text-slate-400 text-xs mt-4">
              Demo: admin@ghanaquest.com / admin123
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-60 bg-slate-900 text-white flex flex-col fixed top-0 bottom-0 left-0 z-40 pt-16 hidden md:flex">
        <div className="px-4 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center font-black text-sm">W</div>
            <div>
              <div className="font-bold text-sm">Brownline Tours</div>
              <div className="text-slate-400 text-xs">Admin Panel</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {([
            { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
            { id: "tours", label: "Tours", icon: Map },
            { id: "bookings", label: "Bookings", icon: Calendar },
            { id: "customers", label: "Customers", icon: Users },
          ] as { id: AdminTab; label: string; icon: typeof LayoutDashboard }[]).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                tab === id ? "bg-sky-600 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={17} /> {label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => setAdminLoggedIn(false)}
            className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
          >
            <LogOut size={15} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 md:ml-60 pt-16">
        {/* Top bar */}
        <div className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between sticky top-16 z-30">
          <h1 className="text-lg font-bold text-slate-900 capitalize">{tab}</h1>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-slate-500 hover:text-slate-800">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                A
              </div>
              <span className="text-slate-700 font-medium hidden sm:block">Admin</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Dashboard */}
          {tab === "dashboard" && (
            <div>
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {adminStats.map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color}`}>
                        <s.icon size={18} />
                      </div>
                      <span className={`text-xs font-bold ${s.up ? "text-emerald-600" : "text-red-500"}`}>
                        {s.change}
                      </span>
                    </div>
                    <div className="text-2xl font-extrabold text-slate-900">{s.value}</div>
                    <div className="text-slate-500 text-sm mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent bookings + activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-slate-800">Recent Bookings</h2>
                    <button onClick={() => setTab("bookings")} className="text-sky-600 text-xs font-semibold hover:underline">View all</button>
                  </div>
                  <div className="space-y-3">
                    {sampleBookings.map((b) => (
                      <div key={b.id} className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                          <Image src={b.tourImage} alt="" fill className="object-cover" sizes="40px" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-slate-800 truncate">{b.name}</div>
                          <div className="text-xs text-slate-400 truncate">{b.tourTitle}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-sm font-bold text-sky-600">{formatPrice(b.totalPrice)}</div>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColor(b.status)}`}>{b.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
                  <h2 className="font-bold text-slate-800 mb-4">Recent Activity</h2>
                  <div className="space-y-3">
                    {recentActivity.map((a, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          {activityIcon(a.type)}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-slate-700">{a.message}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{a.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Revenue chart placeholder */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-slate-800">Revenue Overview</h2>
                  <select className="text-xs border border-slate-200 rounded-lg px-3 py-1.5 outline-none">
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>This year</option>
                  </select>
                </div>
                <div className="flex items-end gap-2 h-32">
                  {[65, 78, 55, 90, 72, 88, 95, 68, 82, 75, 91, 85].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-sky-500 rounded-t-md hover:bg-sky-600 transition-colors cursor-pointer"
                      style={{ height: `${h}%` }}
                      title={`$${(h * 2800).toLocaleString()}`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map(m => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tours management */}
          {tab === "tours" && (
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={tourSearch}
                    onChange={(e) => setTourSearch(e.target.value)}
                    placeholder="Search tours…"
                    className="pl-9 pr-4 py-2.5 border border-slate-200 bg-white rounded-xl text-sm outline-none focus:border-sky-400 transition-all w-64"
                  />
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-sky-600 text-white font-semibold rounded-xl text-sm hover:bg-sky-700 transition-all">
                  <Plus size={16} /> Add Tour
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tour</th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Location</th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Category</th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Price</th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden lg:table-cell">Rating</th>
                        <th className="text-right px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredTours.map((tour) => (
                        <tr key={tour.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0">
                                <Image src={tour.image} alt="" fill className="object-cover" sizes="40px" />
                              </div>
                              <div>
                                <div className="font-semibold text-slate-800 text-sm line-clamp-1">{tour.title}</div>
                                <div className="text-xs text-slate-400">{tour.duration}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-sm text-slate-600 hidden sm:table-cell">{tour.country}</td>
                          <td className="px-5 py-4 hidden md:table-cell">
                            <span className="bg-sky-100 text-sky-700 px-2.5 py-0.5 rounded-full text-xs font-medium">{tour.category}</span>
                          </td>
                          <td className="px-5 py-4 font-semibold text-sky-600 text-sm">{formatPrice(tour.price)}</td>
                          <td className="px-5 py-4 hidden lg:table-cell">
                            <div className="flex items-center gap-1 text-sm">
                              <Star size={13} className="fill-amber-400 text-amber-400" />
                              <span className="font-semibold text-slate-800">{tour.rating}</span>
                              <span className="text-slate-400">({tour.reviewCount})</span>
                            </div>
                          </td>
                          <td className="px-5 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <Link href={`/tours/${tour.slug}`} className="p-1.5 text-slate-400 hover:text-sky-600 transition-colors">
                                <Eye size={15} />
                              </Link>
                              <button
                                onClick={() => setEditingTour(editingTour === tour.id ? null : tour.id)}
                                className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"
                              >
                                <Edit2 size={15} />
                              </button>
                              <button
                                onClick={() => setDeletedTours((d) => [...d, tour.id])}
                                className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-5 py-3 border-t border-slate-100 text-xs text-slate-500">
                  Showing {filteredTours.length} of {tours.length} tours
                </div>
              </div>
            </div>
          )}

          {/* Bookings */}
          {tab === "bookings" && (
            <div>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                  <h2 className="font-bold text-slate-800">All Bookings</h2>
                  <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {sampleBookings.length} bookings
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        {["Ref", "Customer", "Tour", "Date", "Guests", "Total", "Status", "Actions"].map((h) => (
                          <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {sampleBookings.map((b) => (
                        <tr key={b.id} className="hover:bg-slate-50 transition-colors">
                          <td className="px-5 py-4 font-mono text-xs font-semibold text-sky-600">{b.id}</td>
                          <td className="px-5 py-4">
                            <div className="font-semibold text-slate-800 text-sm">{b.name}</div>
                            <div className="text-xs text-slate-400">{b.email}</div>
                          </td>
                          <td className="px-5 py-4 text-sm text-slate-600 max-w-32 truncate">{b.tourTitle}</td>
                          <td className="px-5 py-4 text-sm text-slate-600">{b.date}</td>
                          <td className="px-5 py-4 text-sm text-slate-600">{b.adults + b.children}</td>
                          <td className="px-5 py-4 font-semibold text-sky-600 text-sm">{formatPrice(b.totalPrice)}</td>
                          <td className="px-5 py-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColor(b.status)}`}>{b.status}</span>
                          </td>
                          <td className="px-5 py-4">
                            <button className="text-slate-400 hover:text-sky-600 transition-colors">
                              <Eye size={15} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Customers */}
          {tab === "customers" && (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <h2 className="font-bold text-slate-800 text-lg mb-5">Customer Management</h2>
              <div className="space-y-4">
                {sampleBookings.map((b, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center font-bold text-sky-700">
                        {b.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">{b.name}</div>
                        <div className="text-xs text-slate-400">{b.email}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-sky-600">{formatPrice(b.totalPrice)}</div>
                      <div className="text-xs text-slate-400">{b.createdAt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

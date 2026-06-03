"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  User,
  Calendar,
  Heart,
  Settings,
  LogOut,
  MapPin,
  Check,
  X,
  AlertCircle,
  Plus,
  Loader2,
  Globe,
} from "lucide-react";
import { bookingStore, wishlistStore, type BookingData } from "@/lib/store";
import { tours } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import TourCard from "@/components/ui/TourCard";

type Tab = "bookings" | "wishlist" | "profile" | "settings";

const tabs: { key: Tab; label: string; Icon: typeof Calendar }[] = [
  { key: "bookings",  label: "My Bookings",  Icon: Calendar  },
  { key: "wishlist",  label: "Wishlist",      Icon: Heart     },
  { key: "profile",   label: "Profile",       Icon: User      },
  { key: "settings",  label: "Settings",      Icon: Settings  },
];

/* ─── status helpers ─── */
const statusIcon = (s: string) => {
  if (s === "Confirmed") return <Check size={12} className="text-emerald-600" />;
  if (s === "Cancelled") return <X size={12} className="text-red-500" />;
  return <AlertCircle size={12} className="text-amber-500" />;
};
const statusColor = (s: string) => {
  if (s === "Confirmed") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (s === "Cancelled") return "bg-red-50 text-red-700 border-red-200";
  return "bg-amber-50 text-amber-700 border-amber-200";
};

/* ─── toggle switch ─── */
function Toggle({ defaultChecked }: { defaultChecked: boolean }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <button
      role="switch"
      aria-checked={on}
      onClick={() => setOn(!on)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
        on ? "bg-amber-500" : "bg-slate-200"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ${
          on ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function AccountClientPage() {
  const { data: session, status } = useSession();
  const [tab, setTab] = useState<Tab>("bookings");
  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);

  useEffect(() => {
    if (session) {
      setBookings(bookingStore.get());
      setWishlistIds(wishlistStore.get());
    }
  }, [session]);

  const cancelBooking = (id: string) => {
    bookingStore.cancel(id);
    setBookings(bookingStore.get());
  };

  const wishlistTours = tours.filter((t) => wishlistIds.includes(t.id));

  /* ── Loading ── */
  if (status === "loading") {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-amber-500" size={36} />
      </div>
    );
  }

  /* ── Signed-out / login screen ── */
  if (!session) {
    return (
      <div className="flex-1 flex min-h-screen">
        {/* Left panel — brand */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center p-12 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80"
            alt="Ghana landscape"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A0D06]/95 via-[#382312]/80 to-[#1A0D06]/90" />
          <div className="relative z-10 text-center">
            <div className="inline-flex bg-white px-3 py-2 mb-6 shadow-xl">
              <Image src="/logo1.png" alt="Brownline Tours" width={180} height={75} className="h-16 w-auto object-contain" />
            </div>
            <h2 className="text-white text-3xl font-extrabold leading-tight mb-4">
              Your Ghana Journey<br />
              <span className="text-amber-400">Starts Here</span>
            </h2>
            <p className="text-white/65 text-sm max-w-xs mx-auto leading-relaxed">
              Sign in to manage bookings, save your favourite tours, and unlock exclusive Brownline member deals.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {[
                { value: "15k+", label: "Happy Travellers" },
                { value: "4.9★", label: "Average Rating" },
                { value: "100+", label: "Tours Offered" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-amber-400 text-xl font-extrabold">{value}</div>
                  <div className="text-white/50 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 bg-white">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <div className="inline-flex bg-white px-3 py-2 shadow-sm border border-slate-100">
              <Image src="/logo1.png" alt="Brownline Tours" width={160} height={66} className="h-14 w-auto object-contain" />
            </div>
          </div>

          <div className="w-full max-w-sm">
            <h1 className="text-2xl font-extrabold text-slate-900 mb-1">Welcome back</h1>
            <p className="text-slate-500 text-sm mb-8">Sign in to your Brownline account</p>

            <div className="space-y-3">
              <button
                onClick={() => signIn("google", { callbackUrl: "/account" })}
                className="w-full flex items-center justify-center gap-3 px-5 py-3.5 border border-slate-200 rounded-xl hover:border-amber-300 hover:bg-amber-50/50 transition-all font-semibold text-slate-700 text-sm"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

              <button
                onClick={() => signIn("github", { callbackUrl: "/account" })}
                className="w-full flex items-center justify-center gap-3 px-5 py-3.5 border border-slate-200 rounded-xl hover:border-amber-300 hover:bg-amber-50/50 transition-all font-semibold text-slate-700 text-sm"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Continue with GitHub
              </button>
            </div>

            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-slate-100" />
              <span className="text-slate-400 text-xs">secure sign-in</span>
              <div className="flex-1 h-px bg-slate-100" />
            </div>

            <p className="text-center text-slate-400 text-xs">
              By signing in you agree to our{" "}
              <Link href="/terms-of-service" className="text-amber-600 hover:underline">Terms</Link>
              {" "}and{" "}
              <Link href="/privacy-policy" className="text-amber-600 hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const user = session.user!;

  return (
    <div className="flex-1 bg-slate-50">

      {/* ── Profile banner ── */}
      <div className="relative bg-[#1A0D06] pt-24 pb-0 overflow-hidden">
        {/* Background texture blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-8">
            {/* Avatar + identity */}
            <div className="flex items-end gap-5">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-amber-400/40 shadow-xl shrink-0">
                {user.image ? (
                  <Image src={user.image} alt={user.name ?? "User"} fill className="object-cover" sizes="80px" />
                ) : (
                  <div className="w-full h-full bg-[#382312] flex items-center justify-center">
                    <User className="text-amber-400" size={32} />
                  </div>
                )}
              </div>
              <div className="pb-1">
                <h1 className="text-white text-2xl font-extrabold leading-tight">
                  {user.name ?? "Traveller"}
                </h1>
                <p className="text-slate-400 text-sm mt-0.5">{user.email}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="inline-flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    <Globe size={10} /> Brownline Member
                  </span>
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <MapPin size={10} /> Ghana
                  </span>
                </div>
              </div>
            </div>

            {/* Stats + sign out */}
            <div className="flex items-center gap-6 pb-2">
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-white">{bookings.length}</div>
                  <div className="text-slate-400 text-xs mt-0.5">Trips Booked</div>
                </div>
                <div className="w-px bg-white/10" />
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-white">{wishlistTours.length}</div>
                  <div className="text-slate-400 text-xs mt-0.5">Saved Tours</div>
                </div>
              </div>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm text-white/60 hover:text-white border border-white/10 hover:border-white/30 rounded-xl transition-all"
              >
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          </div>

          {/* Tab nav — flush with banner bottom */}
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {tabs.map(({ key, label, Icon }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`flex items-center gap-2 px-5 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${
                  tab === key
                    ? "border-amber-400 text-amber-400"
                    : "border-transparent text-slate-400 hover:text-white"
                }`}
              >
                <Icon size={15} />
                {label}
                {key === "bookings" && bookings.length > 0 && (
                  <span className="ml-1 bg-amber-400/20 text-amber-400 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {bookings.length}
                  </span>
                )}
                {key === "wishlist" && wishlistTours.length > 0 && (
                  <span className="ml-1 bg-amber-400/20 text-amber-400 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {wishlistTours.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Bookings */}
        {tab === "bookings" && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">My Bookings</h2>
                <p className="text-slate-400 text-sm mt-0.5">All your upcoming and past Ghana adventures</p>
              </div>
              <Link
                href="/tours"
                className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-bold rounded-xl transition-all shadow-sm"
              >
                <Plus size={15} /> Book a Tour
              </Link>
            </div>

            {bookings.length === 0 ? (
              <EmptyState
                icon={<Calendar size={40} className="text-amber-400/60" />}
                title="No bookings yet"
                body="Explore our curated tours and book your first Ghana adventure."
                cta="Browse Tours"
                href="/tours"
              />
            ) : (
              <div className="space-y-4">
                {bookings.map((b) => (
                  <div
                    key={b.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative sm:w-52 h-44 sm:h-auto shrink-0">
                        <Image
                          src={b.tourImage}
                          alt={b.tourTitle}
                          fill
                          className="object-cover"
                          sizes="208px"
                        />
                        {/* Status badge over image */}
                        <div className="absolute top-3 left-3">
                          <span className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border ${statusColor(b.status)}`}>
                            {statusIcon(b.status)} {b.status}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="font-extrabold text-slate-900 text-lg leading-snug mb-3">
                            {b.tourTitle}
                          </h3>
                          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={13} className="text-amber-500 shrink-0" />
                              {new Date(b.date).toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <User size={13} className="text-amber-500 shrink-0" />
                              {b.adults} adult{b.adults !== 1 ? "s" : ""}
                              {b.children > 0 ? `, ${b.children} child${b.children !== 1 ? "ren" : ""}` : ""}
                            </span>
                          </div>
                          <div className="mt-2 text-xs text-slate-400">
                            Ref:{" "}
                            <span className="font-mono font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                              {b.id}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
                          <span className="font-extrabold text-amber-600 text-xl">
                            {formatPrice(b.totalPrice)}
                          </span>
                          <div className="flex gap-2">
                            <Link
                              href={`/tours/${b.tourId}`}
                              className="px-4 py-2 text-xs font-semibold border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-all"
                            >
                              View Tour
                            </Link>
                            {b.status !== "Cancelled" && (
                              <button
                                onClick={() => cancelBooking(b.id)}
                                className="px-4 py-2 text-xs font-semibold border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition-all"
                              >
                                Cancel
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Wishlist */}
        {tab === "wishlist" && (
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-extrabold text-slate-900">Wishlist</h2>
              <p className="text-slate-400 text-sm mt-0.5">Tours you&apos;ve saved for later</p>
            </div>
            {wishlistTours.length === 0 ? (
              <EmptyState
                icon={<Heart size={40} className="text-amber-400/60" />}
                title="Your wishlist is empty"
                body="Tap the heart on any tour to save it here for later."
                cta="Explore Tours"
                href="/tours"
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {wishlistTours.map((t) => (
                  <TourCard key={t.id} tour={t} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Profile */}
        {tab === "profile" && (
          <div className="max-w-lg">
            <div className="mb-8">
              <h2 className="text-xl font-extrabold text-slate-900">Profile</h2>
              <p className="text-slate-400 text-sm mt-0.5">Your personal details</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              {/* Profile card top */}
              <div className="bg-gradient-to-r from-[#1A0D06] to-[#382312] px-6 py-5 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden ring-2 ring-amber-400/40 shrink-0">
                  {user.image ? (
                    <Image src={user.image} alt={user.name ?? "User"} fill className="object-cover" sizes="64px" />
                  ) : (
                    <div className="w-full h-full bg-[#4A2A12] flex items-center justify-center">
                      <User className="text-amber-400" size={28} />
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{user.name ?? "Traveller"}</div>
                  <div className="text-slate-400 text-sm">{user.email}</div>
                  <div className="text-amber-400/70 text-xs mt-1">Brownline Tours Member</div>
                </div>
              </div>

              {/* Fields */}
              <div className="p-6 space-y-5">
                {[
                  { label: "Full Name", value: user.name ?? "", type: "text" },
                  { label: "Email Address", value: user.email ?? "", type: "email" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      defaultValue={field.value}
                      readOnly
                      className="w-full px-4 py-3 border border-slate-100 rounded-xl text-sm bg-slate-50 text-slate-500 cursor-not-allowed outline-none"
                    />
                  </div>
                ))}
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Your name and photo are managed by your Google or GitHub account. To update them, change your details in your provider settings.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Settings */}
        {tab === "settings" && (
          <div className="max-w-lg">
            <div className="mb-8">
              <h2 className="text-xl font-extrabold text-slate-900">Preferences</h2>
              <p className="text-slate-400 text-sm mt-0.5">Control what Brownline Tours sends you</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100">
              {[
                {
                  label: "Booking Confirmations",
                  desc: "Itineraries, reminders, and updates for your trips",
                  default: true,
                  locked: true,
                },
                {
                  label: "Newsletter",
                  desc: "Weekly Ghana travel inspiration and exclusive member deals",
                  default: true,
                  locked: false,
                },
                {
                  label: "SMS Alerts",
                  desc: "Last-minute availability and flash sales via text",
                  default: false,
                  locked: false,
                },
                {
                  label: "Price Drop Alerts",
                  desc: "Get notified when a wishlist tour drops in price",
                  default: true,
                  locked: false,
                },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-5 gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-800 text-sm">{s.label}</div>
                    <div className="text-slate-400 text-xs mt-0.5 leading-relaxed">{s.desc}</div>
                    {s.locked && (
                      <span className="text-amber-600 text-xs font-semibold mt-0.5 inline-block">Required</span>
                    )}
                  </div>
                  {s.locked ? (
                    <Toggle defaultChecked={true} />
                  ) : (
                    <Toggle defaultChecked={s.default} />
                  )}
                </div>
              ))}

              {/* Sign out row */}
              <div className="px-6 py-5 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-800 text-sm">Sign Out</div>
                  <div className="text-slate-400 text-xs mt-0.5">Sign out of your Brownline account</div>
                </div>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-all"
                >
                  <LogOut size={14} /> Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Shared empty state ─── */
function EmptyState({
  icon,
  title,
  body,
  cta,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-8 max-w-xs mx-auto leading-relaxed">{body}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-7 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all shadow-sm text-sm"
      >
        {cta}
      </Link>
    </div>
  );
}

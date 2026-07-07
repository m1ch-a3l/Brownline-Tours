"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  User,
  Heart,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tours", label: "Tours" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navBg =
    scrolled || !isHome
      ? "bg-white shadow-md"
      : "bg-transparent";

  const textColor =
    scrolled || !isHome ? "text-slate-800" : "text-white";


  return (
    <>
      {/* Main nav */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          navBg
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <div className={cn(
                "px-2 py-1 transition-all",
                scrolled || !isHome ? "bg-white" : "bg-white/90 backdrop-blur-sm"
              )}>
                <Image
                  src="/logo1.png"
                  alt="Brownline Tours"
                  width={120}
                  height={50}
                  className="h-14 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/10",
                    textColor,
                    pathname === link.href
                      ? scrolled || !isHome
                        ? "text-sky-600 bg-sky-50"
                        : "text-white bg-white/20"
                      : ""
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className={cn(
                  "p-2 rounded-lg hover:bg-white/10 transition-all",
                  textColor
                )}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <Link
                href="/account"
                className={cn(
                  "p-2 rounded-lg hover:bg-white/10 transition-all",
                  textColor
                )}
                aria-label="Wishlist"
              >
                <Heart size={18} />
              </Link>
              <Link
                href="/account"
                className={cn(
                  "p-2 rounded-lg hover:bg-white/10 transition-all mr-2",
                  textColor
                )}
                aria-label="Account"
              >
                <User size={18} />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "md:hidden p-2 rounded-lg hover:bg-white/10 transition-all",
                textColor
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 bg-white shadow-lg",
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 pb-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-all text-slate-700 hover:bg-sky-50 hover:text-sky-600",
                  pathname === link.href && "bg-sky-50 text-sky-600"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100 flex gap-2">
              <Link
                href="/account"
                className="flex-1 text-center py-2.5 border border-sky-600 text-sky-600 rounded-lg text-sm font-semibold hover:bg-sky-50"
              >
                My Account
              </Link>
              <Link
                href="/tours"
                className="flex-1 text-center py-2.5 bg-sky-600 text-white rounded-lg text-sm font-semibold hover:bg-sky-700"
              >
                View Tours
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <Search className="text-slate-400" size={20} />
              <input
                autoFocus
                type="text"
                placeholder="Search tours, destinations…"
                className="flex-1 text-lg outline-none text-slate-800 placeholder:text-slate-400"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const q = (e.target as HTMLInputElement).value;
                    if (q) {
                      window.location.href = `/tours?search=${encodeURIComponent(q)}`;
                    }
                  }
                  if (e.key === "Escape") setSearchOpen(false);
                }}
              />
              <button onClick={() => setSearchOpen(false)}>
                <X size={20} className="text-slate-400 hover:text-slate-700" />
              </button>
            </div>
            <div className="text-xs text-slate-500">
              Popular:{" "}
              {["Mole Safari", "Cape Coast", "Kakum", "Kumasi", "Volta"].map((s) => (
                <Link
                  key={s}
                  href={`/tours?search=${s}`}
                  className="inline-block mr-2 px-2 py-1 bg-slate-100 rounded-md hover:bg-sky-100 hover:text-sky-700 transition-colors"
                  onClick={() => setSearchOpen(false)}
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

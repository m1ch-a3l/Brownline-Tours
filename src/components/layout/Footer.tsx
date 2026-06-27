import Link from "next/link";
import Image from "next/image";
import {
  Share2,
  AtSign,
  X,
  Rss,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowRight,
} from "lucide-react";

function GhanaFlag({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size * 1.5}
      height={size}
      viewBox="0 0 30 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ghana"
      className="shrink-0 mt-0.5 rounded-[1px] overflow-hidden"
    >
      {/* Red band */}
      <rect width="30" height="6.67" y="0" fill="#CF0921" />
      {/* Gold band */}
      <rect width="30" height="6.67" y="6.67" fill="#FCD116" />
      {/* Green band */}
      <rect width="30" height="6.67" y="13.34" fill="#006B3F" />
      {/* Black star */}
      <polygon
        points="15,6.5 16.18,9.85 19.72,9.85 16.77,11.97 17.95,15.32 15,13.2 12.05,15.32 13.23,11.97 10.28,9.85 13.82,9.85"
        fill="#000000"
      />
    </svg>
  );
}

const footerLinks = {
  Tours: [
    { href: "/tours?category=Safari",   label: "Wildlife Safaris" },
    { href: "/tours?category=Adventure", label: "Adventure Tours" },
    { href: "/tours?category=Beach",     label: "Beach Escapes" },
    { href: "/tours?category=Cultural",  label: "Cultural Tours" },
    { href: "/tours?category=Heritage",  label: "Heritage Tours" },
    { href: "/tours?category=Culinary",  label: "Culinary Tours" },
  ],
  Company: [
    { href: "/about",          label: "About Us" },
    { href: "/blog",           label: "Travel Blog" },
    { href: "/about#team",     label: "Our Team" },
    { href: "/about#partners", label: "Partners" },
    { href: "/contact",        label: "Contact Us" },
    { href: "/admin",          label: "Admin Portal" },
  ],
  Support: [
    { href: "/contact#faq", label: "FAQ" },
    { href: "/contact",     label: "Help Center" },
    { href: "#",            label: "Travel Insurance" },
    { href: "#",            label: "Visa Information" },
    { href: "#",            label: "Cancellation Policy" },
    { href: "/account",     label: "My Bookings" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">

      {/* ────────────────────────────────────────────────────────────
          MOBILE  (< md): flat, clean dark footer — no image
          DESKTOP (≥ md): grounded footer with landscape background
      ──────────────────────────────────────────────────────────── */}

      {/* Desktop landscape background — hidden on mobile */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
          alt="Ghana savanna landscape"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #1A0D06 0%, #1A0D06 42%, rgba(26,13,6,0.80) 60%, rgba(26,13,6,0.30) 80%, rgba(0,0,0,0.10) 100%)",
          }}
        />
      </div>

      {/* Mobile flat background — hidden on desktop */}
      <div className="block md:hidden absolute inset-0 bg-[#1A0D06]" />

      {/* ── Links + brand — shared content, above both backgrounds ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* Brand column — full width on mobile, 2 cols on desktop */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex mb-4">
              <div className="bg-white px-2 py-1.5">
                <Image
                  src="/logo.png"
                  alt="Brownline Tours"
                  width={140}
                  height={58}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5 text-slate-400">
              Immersive travel experiences across Ghana — cultural, heritage, nature &amp; adventure tours for individuals and groups.
            </p>
            <div className="space-y-2.5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-amber-400 mt-0.5 shrink-0" />
                <span>4 Airport Road, Kotoka Area, Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-amber-400 shrink-0" />
                <span>+233 24 781 0448</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-amber-400 shrink-0" />
                <span>hello@brownlinetours.com</span>
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              {[
                { icon: Share2, label: "Facebook" },
                { icon: AtSign, label: "Instagram" },
                { icon: X,      label: "X (Twitter)" },
                { icon: Rss,    label: "Blog RSS" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-3">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1 group"
                    >
                      <ArrowRight
                        size={11}
                        className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop-only: tagline + landscape reveal area */}
      <div className="hidden md:flex relative z-10 items-center justify-center py-10">
        <div className="flex items-center gap-3 drop-shadow-lg px-4">
          <GhanaFlag size={22} />
          <span className="text-white/85 text-xl font-semibold tracking-wide">
            Akwaaba — You Are Welcome to Ghana
          </span>
        </div>
      </div>
      <div className="hidden md:block relative z-10 h-32" />

      {/* ── Bottom bar ── */}
      <div className="relative z-10 border-t border-white/10 bg-black/60 md:bg-black/50 md:backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Brownline Tours Ghana. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-amber-400 transition-colors">Cookie Policy</Link>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={12} />
            <span>Serving travellers across all 16 regions of Ghana</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

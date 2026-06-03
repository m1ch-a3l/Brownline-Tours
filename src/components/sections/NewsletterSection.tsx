"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A0D06 0%, #382312 55%, #5A3218 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-sm mb-6">
          ✉ Join 8,000+ Ghana travel enthusiasts
        </div>
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Ghana Travel Deals & Inspiration
        </h2>
        <p className="text-white/70 text-lg mb-10">
          Subscribe and be first to receive flash sales, new tour launches, seasonal
          Ghana travel tips, and stories from our guides — straight to your inbox.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3 animate-fade-in">
            <CheckCircle className="text-emerald-400" size={48} />
            <p className="text-white text-lg font-semibold">You're subscribed!</p>
            <p className="text-white/70 text-sm">
              Welcome aboard. Check your inbox for a special welcome gift.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/25 text-white placeholder:text-white/50 outline-none focus:bg-white/20 focus:border-white/50 transition-all text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-7 py-4 bg-white text-sky-700 font-bold rounded-xl hover:bg-sky-50 transition-all hover:shadow-lg flex items-center gap-2 justify-center shrink-0 disabled:opacity-70"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-sky-600 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={16} />
                  Subscribe
                </>
              )}
            </button>
          </form>
        )}

        <p className="text-white/40 text-xs mt-5">
          No spam, ever. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}

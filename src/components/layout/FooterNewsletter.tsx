"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 animate-fade-in">
        <CheckCircle className="text-amber-400 shrink-0" size={22} />
        <div>
          <p className="text-white text-sm font-semibold">You're subscribed!</p>
          <p className="text-slate-400 text-xs">Check your inbox for a welcome gift.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full sm:max-w-sm">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/45 outline-none focus:bg-white/15 focus:border-amber-400/60 transition-all text-sm"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shrink-0 text-sm disabled:opacity-70"
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <Send size={13} />
            Subscribe
          </>
        )}
      </button>
    </form>
  );
}

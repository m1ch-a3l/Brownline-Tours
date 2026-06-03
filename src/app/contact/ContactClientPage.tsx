"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, Check, Send } from "lucide-react";

const faqs = [
  {
    q: "Do I need a visa to visit Ghana?",
    a: "Most nationalities require a visa to enter Ghana. Citizens of ECOWAS member states (e.g. Nigeria, Senegal) enter visa-free. We strongly recommend applying for your Ghana visa at least 6–8 weeks before travel. We can point you to the official Ghana Immigration Service portal and assist with any invitation letters needed.",
  },
  {
    q: "How far in advance should I book a tour?",
    a: "We recommend booking at least 4–8 weeks in advance, especially for Mole National Park (limited lodge beds) and Cape Coast Castle heritage tours during peak season (November–March). Last-minute bookings are sometimes possible — contact us.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Free cancellation up to 30 days before departure. 50% refund for cancellations 15–29 days before. No refund within 14 days of departure. We strongly recommend purchasing travel insurance to cover unexpected cancellations.",
  },
  {
    q: "Is Ghana safe to visit?",
    a: "Ghana is one of the most politically stable and visitor-friendly countries in West Africa. Accra, Cape Coast, Kumasi, and the Volta Region are all considered safe for tourists. Our guides are locally based and always up to date on current conditions. We follow all Ghana Tourism Authority safety guidelines.",
  },
  {
    q: "What vaccinations do I need for Ghana?",
    a: "Yellow fever vaccination is mandatory to enter Ghana (you must carry your Yellow Card). We also recommend hepatitis A, typhoid, and malaria prophylaxis. Consult your GP or a travel medicine clinic at least 6 weeks before departure.",
  },
  {
    q: "Do you accommodate dietary restrictions?",
    a: "Absolutely. Ghanaian cuisine is naturally rich in plant-based options, and halal food is widely available across the north. We accommodate vegetarian, vegan, gluten-free, halal, and allergy requirements. Please inform us at booking and we'll ensure all partners are briefed.",
  },
];

export default function ContactClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="flex-1 bg-white">
      {/* Hero */}
      <div className="bg-slate-900 pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-2">We'd Love to Hear From You</p>
          <h1 className="text-white text-4xl font-extrabold mb-3">Get in Touch</h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Have a question about a tour? Need help planning your trip? Our travel experts are ready to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-500">Thanks for reaching out. We'll respond within 2 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Full Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Email Address *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Subject *</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all appearance-none"
                    >
                      <option value="">Select a topic</option>
                      <option>Tour Inquiry</option>
                      <option>Booking Support</option>
                      <option>Custom Tour Request</option>
                      <option>Cancellation / Refund</option>
                      <option>Partnership Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    placeholder="Tell us about your dream trip or how we can help…"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl transition-all hover:shadow-lg disabled:opacity-70"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-slate-800 text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-700">Head Office</div>
                    <div className="text-sm text-slate-500">4 Airport Road, Kotoka Area<br />Accra, Ghana</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-700">Phone</div>
                    <div className="text-sm text-slate-500">+233 30 277 1234<br />+233 24 500 6789 (WhatsApp)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-700">Email</div>
                    <div className="text-sm text-slate-500">hello@ghanaquest.com<br />bookings@ghanaquest.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-amber-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-700">Business Hours</div>
                    <div className="text-sm text-slate-500">Mon–Sat: 7AM – 7PM GMT<br />Sun: 9AM – 4PM GMT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.874286854832!2d-0.17091568523614963!3d5.6055478956997065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2ad7a31%3A0xbed14b4c53354a7b!2sKotoka%20International%20Airport%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1685000000000!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brownline Tours Office Location"
              />
            </div>

            <div className="bg-amber-600 rounded-2xl p-5 text-white">
              <div className="font-bold text-lg mb-1">Emergency Line</div>
              <div className="text-sky-100 text-sm mb-3">For travelers currently on tour</div>
              <div className="text-2xl font-extrabold">+233 24 500 9999</div>
              <div className="text-sky-200 text-xs mt-1">Available 24/7</div>
            </div>
          </div>
        </div>

        {/* Full-width map */}
        <div className="mt-16">
          <div className="flex items-end justify-between mb-5">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Find Us</h2>
              <p className="text-slate-500 text-sm mt-1">4 Airport Road, Kotoka Area, Accra, Ghana</p>
            </div>
            <a
              href="https://maps.google.com/?q=Kotoka+International+Airport,+Accra,+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
            >
              <MapPin size={15} />
              Open in Google Maps
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm" style={{ height: "420px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15883.497147419328!2d-0.18580439999999998!3d5.605548000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2ad7a31%3A0xbed14b4c53354a7b!2sKotoka%20International%20Airport%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1685000000000!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brownline Tours — Accra Office Map"
            />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 pt-12 border-t border-slate-200" id="faq">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 mt-3">Can't find your answer? Contact us directly — we respond within 2 hours.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors text-left"
                >
                  <span className="font-semibold text-slate-800 pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-amber-600 shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

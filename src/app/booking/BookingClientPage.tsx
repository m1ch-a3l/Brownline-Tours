"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  CreditCard,
  Lock,
  User,
  Mail,
  Phone,
  Users,
  Calendar,
  MessageSquare,
  Shield,
} from "lucide-react";
import { allTours as tours, dietaryOptions, globalFoodAddOns, type FoodAddOn } from "@/lib/data";
import { formatPrice, generateBookingId, calculateTotalPrice } from "@/lib/utils";
import { bookingStore } from "@/lib/store";

const STEPS = ["Details", "Review", "Payment", "Confirmation"];

export default function BookingClientPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const tourId = searchParams.get("tour") || "";
  const initialAdults = Number(searchParams.get("adults") || 2);
  const initialChildren = Number(searchParams.get("children") || 0);
  const initialDate = searchParams.get("date") || "";

  const tour = tours.find((t) => t.id === tourId) || tours[0];

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [bookingId, setBookingId] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    adults: initialAdults,
    children: initialChildren,
    date: initialDate,
    specialRequests: "",
  });

  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleDietary = (id: string) =>
    setSelectedDietary((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );

  const toggleAddOn = (id: string) =>
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );

  // Add-ons available for this tour (tour-specific first, then global options)
  const availableAddOns: FoodAddOn[] =
    tour.foodAddOns && tour.foodAddOns.length > 0
      ? tour.foodAddOns.filter(Boolean)
      : globalFoodAddOns;

  const addOnsTotal = availableAddOns
    .filter((a) => selectedAddOns.includes(a.id))
    .reduce((sum, a) => sum + (a.perPerson ? a.price * (form.adults + form.children) : a.price), 0);

  const [payment, setPayment] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
    method: "card" as "card" | "paypal" | "bank",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const discountedPrice = tour.discount
    ? Math.round(tour.price * (1 - tour.discount / 100))
    : null;
  const pricePerPerson = discountedPrice ?? tour.price;
  const totalPrice = calculateTotalPrice(
    pricePerPerson,
    tour.childPrice,
    form.adults,
    form.children
  );

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.includes("@")) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Phone number required";
    if (!form.date) e.date = "Please select a travel date";
    return e;
  };

  const validatePayment = () => {
    const e: Record<string, string> = {};
    if (payment.method === "card") {
      if (payment.cardNumber.replace(/\s/g, "").length < 16) e.cardNumber = "Enter a valid 16-digit card number";
      if (!payment.expiry.match(/^\d{2}\/\d{2}$/)) e.expiry = "Format: MM/YY";
      if (payment.cvv.length < 3) e.cvv = "3–4 digit CVV";
      if (!payment.cardName.trim()) e.cardName = "Name on card required";
    }
    return e;
  };

  const nextStep = () => {
    if (step === 0) {
      const e = validate();
      if (Object.keys(e).length > 0) { setErrors(e); return; }
    }
    if (step === 2) {
      const e = validatePayment();
      if (Object.keys(e).length > 0) { setErrors(e); return; }
    }
    setErrors({});
    setStep((s) => s + 1);
    window.scrollTo(0, 0);
  };

  const submitBooking = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000)); // Simulate payment processing
    const id = generateBookingId();
    setBookingId(id);
    bookingStore.add({
      id,
      tourId: tour.id,
      tourTitle: tour.title,
      tourImage: tour.image,
      name: form.name,
      email: form.email,
      phone: form.phone,
      adults: form.adults,
      children: form.children,
      date: form.date,
      totalPrice,
      specialRequests: form.specialRequests,
      status: "Confirmed",
      createdAt: new Date().toISOString().split("T")[0],
    });
    setLoading(false);
    setStep(3);
    window.scrollTo(0, 0);
  };

  const formatCard = (val: string) =>
    val.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ").trim().slice(0, 19);

  const formatExpiry = (val: string) =>
    val.replace(/\D/g, "").slice(0, 4).replace(/(\d{2})(\d)/, "$1/$2");

  if (!tour) return <div className="pt-32 text-center text-slate-500">Tour not found.</div>;

  return (
    <div className="flex-1 bg-slate-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Steps indicator */}
        <div className="flex items-center justify-center mb-10">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex items-center gap-2 ${i < step ? "text-sky-600" : i === step ? "text-slate-900" : "text-slate-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all
                  ${i < step ? "bg-sky-600 border-sky-600 text-white" : i === step ? "border-sky-600 text-sky-600" : "border-slate-300 text-slate-400"}`}>
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                <span className="text-sm font-medium hidden sm:block">{s}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`w-12 sm:w-20 h-0.5 mx-2 transition-colors ${i < step ? "bg-sky-600" : "bg-slate-200"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8">
              {/* Step 0: Details */}
              {step === 0 && (
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Your Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Full Name *</label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Smith"
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm outline-none transition-all ${errors.name ? "border-red-400 bg-red-50" : "border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"}`}
                        />
                      </div>
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Email Address *</label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@example.com"
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm outline-none transition-all ${errors.email ? "border-red-400 bg-red-50" : "border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"}`}
                        />
                      </div>
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Phone Number *</label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm outline-none transition-all ${errors.phone ? "border-red-400 bg-red-50" : "border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"}`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Adults *</label>
                      <div className="relative">
                        <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <select
                          value={form.adults}
                          onChange={(e) => setForm({ ...form, adults: Number(e.target.value) })}
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all appearance-none"
                        >
                          {[1,2,3,4,5,6,7,8,9,10].map(n => (
                            <option key={n} value={n}>{n} Adult{n > 1 ? "s" : ""}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Children (4–11)</label>
                      <div className="relative">
                        <Users size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <select
                          value={form.children}
                          onChange={(e) => setForm({ ...form, children: Number(e.target.value) })}
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all appearance-none"
                        >
                          {[0,1,2,3,4,5].map(n => (
                            <option key={n} value={n}>{n} Child{n !== 1 ? "ren" : ""}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Travel Date *</label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          min={new Date().toISOString().split("T")[0]}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm outline-none transition-all ${errors.date ? "border-red-400 bg-red-50" : "border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"}`}
                        />
                      </div>
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Special Requests</label>
                      <div className="relative">
                        <MessageSquare size={16} className="absolute left-3 top-3.5 text-slate-400" />
                        <textarea
                          value={form.specialRequests}
                          onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                          placeholder="Accessibility needs, special occasions…"
                          rows={3}
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dietary Preferences */}
                  <div className="mt-6">
                    <h3 className="text-sm font-bold text-slate-800 mb-1">Dietary Preferences</h3>
                    <p className="text-xs text-slate-400 mb-3">Select all that apply — our team will do their best to accommodate you.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {dietaryOptions.map((opt) => {
                        const active = selectedDietary.includes(opt.id);
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => toggleDietary(opt.id)}
                            className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                              active
                                ? "border-sky-500 bg-sky-50 text-sky-700"
                                : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <span>{opt.icon}</span>
                            <span>{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Food Add-Ons */}
                  <div className="mt-6">
                    <h3 className="text-sm font-bold text-slate-800 mb-1">Food &amp; Dining Add-Ons</h3>
                    <p className="text-xs text-slate-400 mb-3">Enhance your culinary experience with optional extras.</p>
                    <div className="space-y-2">
                      {availableAddOns.map((addon) => {
                        const active = selectedAddOns.includes(addon.id);
                        const addonCost = addon.perPerson
                          ? addon.price * (form.adults + form.children)
                          : addon.price;
                        return (
                          <button
                            key={addon.id}
                            type="button"
                            onClick={() => toggleAddOn(addon.id)}
                            className={`w-full flex items-start gap-3 px-4 py-3 rounded-xl border text-left transition-all ${
                              active
                                ? "border-sky-500 bg-sky-50"
                                : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <span className="text-xl mt-0.5">{addon.icon}</span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className={`text-sm font-semibold ${active ? "text-sky-700" : "text-slate-800"}`}>{addon.name}</span>
                                <span className={`text-sm font-bold ${active ? "text-sky-600" : "text-slate-600"}`}>
                                  +{formatPrice(addonCost)}{addon.perPerson ? "/person" : ""}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5">{addon.description}</p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${active ? "border-sky-500 bg-sky-500" : "border-slate-300"}`}>
                              {active && <Check size={11} className="text-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1: Review */}
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Review Your Booking</h2>
                  <div className="space-y-4">
                    {[
                      { label: "Name", value: form.name },
                      { label: "Email", value: form.email },
                      { label: "Phone", value: form.phone },
                      { label: "Travel Date", value: new Date(form.date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) },
                      { label: "Adults", value: `${form.adults} adult${form.adults > 1 ? "s" : ""}` },
                      { label: "Children", value: `${form.children} child${form.children !== 1 ? "ren" : ""}` },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between py-3 border-b border-slate-100">
                        <span className="text-sm text-slate-500">{label}</span>
                        <span className="text-sm font-semibold text-slate-800">{value}</span>
                      </div>
                    ))}
                    {form.specialRequests && (
                      <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-600">
                        <strong>Special Requests:</strong> {form.specialRequests}
                      </div>
                    )}
                    {selectedDietary.length > 0 && (
                      <div className="py-3 border-b border-slate-100">
                        <div className="text-sm text-slate-500 mb-2">Dietary Preferences</div>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedDietary.map((id) => {
                            const opt = dietaryOptions.find((o) => o.id === id);
                            return opt ? (
                              <span key={id} className="flex items-center gap-1 bg-sky-100 text-sky-700 px-2.5 py-1 rounded-full text-xs font-medium">
                                {opt.icon} {opt.label}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                    {selectedAddOns.length > 0 && (
                      <div className="py-3 border-b border-slate-100">
                        <div className="text-sm text-slate-500 mb-2">Food Add-Ons</div>
                        <div className="space-y-1">
                          {selectedAddOns.map((id) => {
                            const addon = availableAddOns.find((a) => a.id === id);
                            if (!addon) return null;
                            const cost = addon.perPerson ? addon.price * (form.adults + form.children) : addon.price;
                            return (
                              <div key={id} className="flex items-center justify-between text-sm">
                                <span className="text-slate-700">{addon.icon} {addon.name}</span>
                                <span className="font-semibold text-emerald-600">+{formatPrice(cost)}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
                      <p className="text-sm text-sky-700">
                        <strong>Cancellation Policy:</strong> Free cancellation up to 30 days before departure.
                        50% refund 15–29 days before. No refund within 14 days.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Secure Payment</h2>

                  {/* Payment method selector */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { value: "card", label: "Credit Card", icon: "💳" },
                      { value: "paypal", label: "PayPal", icon: "🅿️" },
                      { value: "bank", label: "Bank Transfer", icon: "🏦" },
                    ].map((m) => (
                      <button
                        key={m.value}
                        onClick={() => setPayment({ ...payment, method: m.value as typeof payment.method })}
                        className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border-2 text-sm font-medium transition-all ${
                          payment.method === m.value
                            ? "border-sky-500 bg-sky-50 text-sky-700"
                            : "border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <span className="text-xl">{m.icon}</span>
                        <span>{m.label}</span>
                      </button>
                    ))}
                  </div>

                  {payment.method === "card" && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Card Number *</label>
                        <div className="relative">
                          <CreditCard size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            value={payment.cardNumber}
                            onChange={(e) => setPayment({ ...payment, cardNumber: formatCard(e.target.value) })}
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                            className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm outline-none font-mono transition-all ${errors.cardNumber ? "border-red-400 bg-red-50" : "border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"}`}
                          />
                        </div>
                        {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Name on Card *</label>
                        <input
                          type="text"
                          value={payment.cardName}
                          onChange={(e) => setPayment({ ...payment, cardName: e.target.value })}
                          placeholder="JOHN SMITH"
                          className={`w-full px-4 py-3 border rounded-xl text-sm outline-none uppercase transition-all ${errors.cardName ? "border-red-400 bg-red-50" : "border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"}`}
                        />
                        {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-semibold text-slate-700 mb-1.5 block">Expiry Date *</label>
                          <input
                            type="text"
                            value={payment.expiry}
                            onChange={(e) => setPayment({ ...payment, expiry: formatExpiry(e.target.value) })}
                            placeholder="MM/YY"
                            maxLength={5}
                            className={`w-full px-4 py-3 border rounded-xl text-sm outline-none font-mono transition-all ${errors.expiry ? "border-red-400 bg-red-50" : "border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"}`}
                          />
                          {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-slate-700 mb-1.5 block">CVV *</label>
                          <input
                            type="password"
                            value={payment.cvv}
                            onChange={(e) => setPayment({ ...payment, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) })}
                            placeholder="•••"
                            maxLength={4}
                            className={`w-full px-4 py-3 border rounded-xl text-sm outline-none font-mono transition-all ${errors.cvv ? "border-red-400 bg-red-50" : "border-slate-200 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"}`}
                          />
                          {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {payment.method === "paypal" && (
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-3">🅿️</div>
                      <p className="text-slate-700 font-semibold mb-2">Pay with PayPal</p>
                      <p className="text-slate-500 text-sm">You'll be redirected to PayPal to complete your payment securely.</p>
                    </div>
                  )}

                  {payment.method === "bank" && (
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                      <p className="text-sm font-semibold text-slate-800">Bank Transfer Details</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between"><span className="text-slate-500">Bank:</span><span className="font-mono">GCB Bank Ghana Ltd</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Account Name:</span><span className="font-mono">Brownline Tours Tours</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Account No.:</span><span className="font-mono">****4482</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Branch:</span><span className="font-mono">Airport City, Accra</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Reference:</span><span className="font-mono text-sky-600">GQ-{Math.random().toString(36).slice(2,8).toUpperCase()}</span></div>
                      </div>
                      <p className="text-xs text-slate-400">Booking will be confirmed within 1 business day after payment is received. WhatsApp us at +233 24 500 6789 once transferred.</p>
                    </div>
                  )}

                  <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">
                    <Lock size={12} className="text-emerald-500" />
                    256-bit SSL encrypted. Your payment info is never stored on our servers.
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="text-emerald-600" size={36} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Booking Confirmed!</h2>
                  <p className="text-slate-500 mb-2">
                    Your adventure awaits. Confirmation sent to <strong>{form.email}</strong>
                  </p>
                  <div className="inline-flex items-center gap-2 bg-slate-100 rounded-xl px-5 py-3 mb-8">
                    <span className="text-sm text-slate-500">Booking Reference:</span>
                    <span className="font-extrabold text-sky-600 text-lg tracking-wider">{bookingId}</span>
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 text-left space-y-3 mb-8">
                    <div className="flex justify-between text-sm"><span className="text-slate-500">Tour</span><span className="font-semibold">{tour.title}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-slate-500">Date</span><span className="font-semibold">{new Date(form.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-slate-500">Guests</span><span className="font-semibold">{form.adults} adults{form.children > 0 ? `, ${form.children} children` : ""}</span></div>
                    {selectedDietary.length > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Dietary</span>
                        <span className="font-medium text-right max-w-[60%]">
                          {selectedDietary.map((id) => dietaryOptions.find((o) => o.id === id)?.label).filter(Boolean).join(", ")}
                        </span>
                      </div>
                    )}
                    {selectedAddOns.length > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Add-Ons</span>
                        <span className="font-medium text-emerald-600">+{formatPrice(addOnsTotal)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm border-t border-slate-200 pt-3"><span className="text-slate-500">Total Paid</span><span className="font-extrabold text-sky-600 text-lg">{formatPrice(totalPrice + addOnsTotal)}</span></div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/account" className="px-8 py-3.5 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 transition-all">
                      View My Bookings
                    </Link>
                    <Link href="/tours" className="px-8 py-3.5 border-2 border-sky-600 text-sky-600 font-bold rounded-xl hover:bg-sky-50 transition-all">
                      Explore More Tours
                    </Link>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              {step < 3 && (
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                  {step > 0 ? (
                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl font-semibold hover:bg-slate-50 transition-all text-sm"
                    >
                      ← Back
                    </button>
                  ) : (
                    <div />
                  )}
                  {step < 2 ? (
                    <button
                      onClick={nextStep}
                      className="flex items-center gap-2 px-7 py-3 bg-sky-600 text-white font-bold rounded-xl hover:bg-sky-700 transition-all hover:shadow-lg"
                    >
                      Continue <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={submitBooking}
                      disabled={loading}
                      className="flex items-center gap-2 px-7 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all hover:shadow-lg disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Processing…
                        </>
                      ) : (
                        <>
                          <Lock size={16} />
                          Pay {formatPrice(totalPrice + addOnsTotal)}
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Order summary sidebar */}
          {step < 3 && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-24">
                <div className="relative h-40">
                  <Image src={tour.image} alt={tour.title} fill className="object-cover" sizes="320px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="text-xs font-medium text-white/70">{tour.category}</div>
                    <div className="font-bold">{tour.title}</div>
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="text-sm font-bold text-slate-800 mb-3">Order Summary</div>
                  {form.adults > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">{form.adults} × Adult ({formatPrice(pricePerPerson)})</span>
                      <span className="font-semibold">{formatPrice(pricePerPerson * form.adults)}</span>
                    </div>
                  )}
                  {form.children > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">{form.children} × Child ({formatPrice(tour.childPrice)})</span>
                      <span className="font-semibold">{formatPrice(tour.childPrice * form.children)}</span>
                    </div>
                  )}
                  {addOnsTotal > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Food Add-Ons ({selectedAddOns.length})</span>
                      <span className="font-semibold text-emerald-600">+{formatPrice(addOnsTotal)}</span>
                    </div>
                  )}
                  <div className="border-t border-slate-100 pt-3 flex justify-between font-bold text-slate-900">
                    <span>Total</span>
                    <span className="text-sky-600 text-lg">{formatPrice(totalPrice + addOnsTotal)}</span>
                  </div>
                  <div className="flex items-start gap-2 bg-emerald-50 rounded-xl p-3 mt-2">
                    <Shield size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-emerald-700">100% Secure Booking — Protected by Brownline Tours Guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

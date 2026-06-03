"use client";

// Simple localStorage-based state for wishlist and bookings
export const wishlistStore = {
  get(): string[] {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("wq_wishlist") || "[]");
    } catch {
      return [];
    }
  },
  toggle(tourId: string): string[] {
    const current = wishlistStore.get();
    const updated = current.includes(tourId)
      ? current.filter((id) => id !== tourId)
      : [...current, tourId];
    localStorage.setItem("wq_wishlist", JSON.stringify(updated));
    return updated;
  },
  has(tourId: string): boolean {
    return wishlistStore.get().includes(tourId);
  },
};

export type BookingData = {
  id: string;
  tourId: string;
  tourTitle: string;
  tourImage: string;
  name: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  date: string;
  totalPrice: number;
  specialRequests: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  createdAt: string;
};

export const bookingStore = {
  get(): BookingData[] {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("wq_bookings") || "[]");
    } catch {
      return [];
    }
  },
  add(booking: BookingData): void {
    const current = bookingStore.get();
    localStorage.setItem("wq_bookings", JSON.stringify([...current, booking]));
  },
  cancel(id: string): void {
    const current = bookingStore.get();
    const updated = current.map((b) =>
      b.id === id ? { ...b, status: "Cancelled" as const } : b
    );
    localStorage.setItem("wq_bookings", JSON.stringify(updated));
  },
};

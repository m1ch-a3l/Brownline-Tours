import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function calculateTotalPrice(
  adultPrice: number,
  childPrice: number,
  adults: number,
  children: number,
  discount = 0
): number {
  const subtotal = adultPrice * adults + childPrice * children;
  return Math.round(subtotal * (1 - discount / 100));
}

export function generateBookingId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "BK-";
  for (let i = 0; i < 6; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "…";
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case "Easy": return "text-emerald-600 bg-emerald-50";
    case "Moderate": return "text-amber-600 bg-amber-50";
    case "Challenging": return "text-red-600 bg-red-50";
    default: return "text-slate-600 bg-slate-50";
  }
}

export function getBadgeColor(badge?: string): string {
  switch (badge) {
    case "Popular": return "bg-orange-500";
    case "New": return "bg-emerald-500";
    case "Sale": return "bg-violet-500";
    case "Top Rated": return "bg-sky-500";
    case "Signature": return "bg-gradient-to-r from-amber-600 to-orange-600";
    default: return "bg-slate-500";
  }
}

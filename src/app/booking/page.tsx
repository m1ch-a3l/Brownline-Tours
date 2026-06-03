import { Metadata } from "next";
import { Suspense } from "react";
import BookingClientPage from "./BookingClientPage";

export const metadata: Metadata = {
  title: "Book Your Tour",
  description: "Complete your tour booking securely. Select your dates, guests, and payment method.",
};

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="flex-1 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-sky-600 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <BookingClientPage />
    </Suspense>
  );
}

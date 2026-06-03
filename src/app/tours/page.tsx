import { Metadata } from "next";
import ToursClientPage from "./ToursClientPage";

export const metadata: Metadata = {
  title: "All Tours",
  description: "Browse 320+ handcrafted tours — safari, adventure, beach, cultural and more. Filter by destination, price, duration, and category.",
};

export default function ToursPage() {
  return <ToursClientPage />;
}

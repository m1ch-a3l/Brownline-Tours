import { Metadata } from "next";
import ToursClientPage from "./ToursClientPage";

export const metadata: Metadata = {
  title: "All Tours",
  description: "Browse handcrafted Ghana tours — safari, heritage, adventure, beach and culinary experiences across all regions. Filter by destination, price, duration, and category.",
};

export default function ToursPage() {
  return <ToursClientPage />;
}

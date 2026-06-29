import { Metadata } from "next";
import PortfolioClientPage from "./PortfolioClientPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A look back at real journeys across Ghana — Kakum, Wli Falls, Mt. Gemi, Cape Coast Castle, and the travelers who made every trip unforgettable, guided by Brownline Tours founder Marven Brown.",
};

export default function PortfolioPage() {
  return <PortfolioClientPage />;
}

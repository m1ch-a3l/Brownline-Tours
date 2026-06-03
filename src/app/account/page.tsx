import { Metadata } from "next";
import AccountClientPage from "./AccountClientPage";

export const metadata: Metadata = {
  title: "My Account",
  description: "Manage your Brownline Tours bookings, profile, and wishlist.",
};

export default function AccountPage() {
  return <AccountClientPage />;
}

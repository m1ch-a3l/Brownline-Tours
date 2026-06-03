import { Metadata } from "next";
import AdminClientPage from "./AdminClientPage";

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Brownline Tours admin portal — manage tours, bookings, and customers.",
};

export default function AdminPage() {
  return <AdminClientPage />;
}

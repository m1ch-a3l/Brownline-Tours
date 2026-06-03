import { Metadata } from "next";
import ContactClientPage from "./ContactClientPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Brownline Tours team. We're here to help you plan your perfect Ghana adventure.",
};

export default function ContactPage() {
  return <ContactClientPage />;
}

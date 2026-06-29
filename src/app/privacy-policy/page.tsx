import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Brownline Tours privacy policy — how we collect, use, and protect your personal information.",
};

const EFFECTIVE_DATE = "28 June 2026";
const COMPANY = "Brownline Tours";
const EMAIL = "brownlinetours@gmail.com";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1 bg-white">
      {/* Page header */}
      <div className="bg-[#1A0D06] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-xs mb-3">
            Legal
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">
            Effective date: <span className="text-slate-300 font-medium">{EFFECTIVE_DATE}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 max-w-none">

        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          {COMPANY} values your privacy.
        </p>

        <Section title="What We Collect">
          <p>We collect personal information only to:</p>
          <ul>
            <li>Process bookings</li>
            <li>Arrange accommodation and transport</li>
            <li>Communicate before and during your trip</li>
            <li>Meet legal or regulatory requirements</li>
          </ul>
        </Section>

        <Section title="How We Use Your Information">
          <p>
            We do not sell or rent your personal information. Your information is shared only with
            trusted service providers when necessary to deliver your tour.
          </p>
        </Section>

        <Section title="Protecting Your Data">
          <p>
            We take reasonable measures to protect your personal data. By booking with Brownline
            Tours, you consent to the use of your information as described in this policy.
          </p>
        </Section>

        <Section title="Contact Us">
          <p>
            For any privacy-related questions, please contact us:
          </p>
          <address className="not-italic bg-slate-50 rounded-xl p-5 text-slate-700 text-sm leading-relaxed">
            <strong>{COMPANY}</strong><br />
            Accra, Ghana<br />
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
            Phone: +233 24 781 0448
          </address>
        </Section>

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-4 text-sm text-slate-500">
          <Link href="/terms-of-service" className="text-amber-600 font-medium hover:underline">Terms &amp; Conditions →</Link>
          <Link href="/cookie-policy" className="text-amber-600 font-medium hover:underline">Cookie Policy →</Link>
        </div>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-extrabold text-slate-900 mb-4 mt-8">{title}</h2>
      <div className="text-slate-600 leading-relaxed space-y-4 text-[15px] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-amber-600 [&_a:hover]:underline">
        {children}
      </div>
    </section>
  );
}

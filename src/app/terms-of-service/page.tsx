import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Brownline Tours terms and conditions — booking, payment, cancellation, and refund policies.",
};

const EFFECTIVE_DATE = "28 June 2026";
const COMPANY = "Brownline Tours";
const EMAIL = "brownlinetours@gmail.com";

export default function TermsOfServicePage() {
  return (
    <div className="flex-1 bg-white">
      {/* Page header */}
      <div className="bg-[#1A0D06] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-xs mb-3">
            Legal
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-slate-400 text-sm">
            Effective date: <span className="text-slate-300 font-medium">{EFFECTIVE_DATE}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 max-w-none">

        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          Welcome to {COMPANY}. By booking a tour with us, you agree to the following Terms &amp; Conditions.
        </p>

        <Section title="1. Booking Confirmation">
          <p>
            A booking is confirmed only after Brownline Tours receives the required deposit or full
            payment and sends written confirmation by email or WhatsApp.
          </p>
        </Section>

        <Section title="2. Payment">
          <ul>
            <li>A <strong>30% non-refundable deposit</strong> is required to confirm your booking.</li>
            <li>The remaining balance is due <strong>60 days before arrival</strong>.</li>
            <li>Bookings made within 60 days of departure require <strong>full payment</strong>.</li>
            <li>Prices are quoted in <strong>US Dollars (USD)</strong> unless otherwise stated.</li>
          </ul>
        </Section>

        <Section title="3. Cancellation by the Guest">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left py-2 px-3 font-semibold text-slate-700 border border-slate-200">Notice before arrival</th>
                <th className="text-left py-2 px-3 font-semibold text-slate-700 border border-slate-200">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["More than 60 days", "Deposit is non-refundable; other eligible payments will be refunded."],
                ["31–59 days", "50% of the total tour cost is non-refundable."],
                ["15–30 days", "75% of the total tour cost is non-refundable."],
                ["14 days or less, no-show, or early departure", "No refund."],
              ].map(([period, outcome]) => (
                <tr key={period} className="even:bg-slate-50">
                  <td className="py-2 px-3 border border-slate-200 text-slate-700">{period}</td>
                  <td className="py-2 px-3 border border-slate-200 text-slate-600">{outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        <Section title="4. Changes to Bookings">
          <p>
            Changes requested after confirmation are subject to availability and may incur
            additional charges.
          </p>
        </Section>

        <Section title="5. Cancellation by Brownline Tours">
          <p>
            Brownline Tours reserves the right to cancel or modify any tour due to force majeure,
            weather, safety concerns, government restrictions, or other circumstances beyond our
            control. Guests will be offered:
          </p>
          <ul>
            <li>A rescheduled tour,</li>
            <li>A comparable alternative, or</li>
            <li>A refund of amounts paid directly to Brownline Tours.</li>
          </ul>
          <p>
            Brownline Tours is not responsible for airline tickets, visa fees, insurance, or other
            personal expenses.
          </p>
        </Section>

        <Section title="6. Passport & Visa">
          <p>Guests are responsible for ensuring they have:</p>
          <ul>
            <li>A valid passport</li>
            <li>Required visas</li>
            <li>Vaccinations</li>
            <li>Any other travel documents required by Ghana or transit countries.</li>
          </ul>
        </Section>

        <Section title="7. Travel Insurance">
          <p>
            Comprehensive travel insurance is strongly recommended and should include:
          </p>
          <ul>
            <li>Medical emergencies</li>
            <li>Trip cancellation</li>
            <li>Emergency evacuation</li>
            <li>Personal belongings</li>
          </ul>
        </Section>

        <Section title="8. Health & Fitness">
          <p>
            Guests must inform Brownline Tours of any medical conditions or mobility limitations
            that may affect their participation.
          </p>
        </Section>

        <Section title="9. Liability">
          <p>
            Brownline Tours acts as an organizer and coordinator of travel services. While we work
            with trusted suppliers, we are not liable for losses, injuries, delays, or damages
            caused by third-party providers or events beyond our reasonable control.
          </p>
        </Section>

        <Section title="10. Guest Conduct">
          <p>
            Guests are expected to respect Ghanaian laws, local customs, fellow travelers, staff,
            and property. Brownline Tours may remove any guest whose behavior endangers others or
            disrupts the tour, without refund.
          </p>
        </Section>

        <Section title="11. Photography">
          <p>
            Photos and videos taken during tours may be used for marketing purposes unless you
            notify us in writing before the tour begins.
          </p>
        </Section>

        <Section title="12. Governing Law">
          <p>
            These Terms &amp; Conditions are governed by the laws of the Republic of Ghana.
          </p>
        </Section>

        <Section title="Booking Policy">
          <ul>
            <li>A 30% deposit confirms your reservation.</li>
            <li>Full payment is due 60 days before arrival.</li>
            <li>Bookings made within 60 days require full payment.</li>
            <li>Reservations are confirmed only after payment has been received.</li>
            <li>Prices may change before confirmation due to supplier costs or exchange-rate fluctuations.</li>
            <li>Special requests are subject to availability and cannot be guaranteed.</li>
          </ul>
        </Section>

        <Section title="Cancellation & Refund Policy">
          <p>Cancellation by Guests:</p>
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left py-2 px-3 font-semibold text-slate-700 border border-slate-200">Notice before tour</th>
                <th className="text-left py-2 px-3 font-semibold text-slate-700 border border-slate-200">Refund</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["More than 60 days", "Balance refunded (deposit retained)"],
                ["31–59 days", "50% refund of eligible amount"],
                ["15–30 days", "25% refund of eligible amount"],
                ["14 days or less", "No refund"],
              ].map(([period, refund]) => (
                <tr key={period} className="even:bg-slate-50">
                  <td className="py-2 px-3 border border-slate-200 text-slate-700">{period}</td>
                  <td className="py-2 px-3 border border-slate-200 text-slate-600">{refund}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            Refunds, where applicable, will be processed using the original payment method. Bank
            charges or transaction fees may be deducted where applicable.
          </p>
        </Section>

        <Section title="Contact">
          <address className="not-italic bg-slate-50 rounded-xl p-5 text-slate-700 text-sm leading-relaxed">
            <strong>{COMPANY}</strong><br />
            Accra, Ghana<br />
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
            Phone: +233 24 781 0448
          </address>
        </Section>

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-4 text-sm text-slate-500">
          <Link href="/privacy-policy" className="text-amber-600 font-medium hover:underline">Privacy Policy →</Link>
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
      <div className="text-slate-600 leading-relaxed space-y-4 text-[15px] [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:text-base [&_h3]:mt-5 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-amber-600 [&_a:hover]:underline [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_th]:text-left [&_th]:py-2 [&_th]:px-3 [&_th]:font-semibold [&_th]:text-slate-700 [&_th]:border [&_th]:border-slate-200 [&_th]:bg-slate-100 [&_td]:py-2 [&_td]:px-3 [&_td]:border [&_td]:border-slate-200 [&_td]:text-slate-700 [&_tr:nth-child(even)]:bg-slate-50">
        {children}
      </div>
    </section>
  );
}

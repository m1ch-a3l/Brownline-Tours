import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Brownline Tours privacy policy — how we collect, use, and protect your personal information.",
};

const EFFECTIVE_DATE = "18 May 2026";
const COMPANY = "Brownline Tours Ghana Limited";
const ADDRESS = "4 Airport Road, Kotoka Area, Accra, Ghana";
const EMAIL = "privacy@brownlinetours.com";

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
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 prose prose-slate prose-headings:font-extrabold prose-headings:text-slate-900 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline max-w-none">

        <p className="lead text-slate-600 text-lg leading-relaxed not-prose mb-10">
          {COMPANY} (&ldquo;Brownline Tours&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting
          your personal information. This Privacy Policy explains what data we collect when you
          use our website or book a tour with us, how we use it, with whom we share it, and
          the rights you have over it. It is written in plain English so you can actually read it.
        </p>

        {/* 1 */}
        <Section title="1. Who We Are">
          <p>
            Brownline Tours Ghana Limited is a tour operator registered in Ghana, specialising in
            immersive travel experiences across all 16 regions of Ghana — including heritage,
            wildlife safari, cultural, culinary, adventure, and diaspora-return journeys.
          </p>
          <p>
            <strong>Data Controller:</strong><br />
            {COMPANY}<br />
            {ADDRESS}<br />
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p>
            We operate under the <em>Ghana Data Protection Act, 2012 (Act 843)</em> and, where
            applicable, the EU General Data Protection Regulation (GDPR) for visitors from the
            European Economic Area.
          </p>
        </Section>

        {/* 2 */}
        <Section title="2. Information We Collect">
          <h3>2.1 Information you give us directly</h3>
          <ul>
            <li><strong>Identity data</strong> — first name, last name, date of birth, nationality, passport or ID number (required for certain tours and permits).</li>
            <li><strong>Contact data</strong> — email address, phone number, postal address.</li>
            <li><strong>Booking data</strong> — tour selection, travel dates, group size, dietary or medical requirements relevant to your tour, emergency contact details.</li>
            <li><strong>Payment data</strong> — billing address and payment method. Card numbers are processed directly by our payment processor (Paystack or Stripe) and are never stored on our servers.</li>
            <li><strong>Communications</strong> — messages you send us via contact forms, email, WhatsApp, or social media.</li>
            <li><strong>Account data</strong> — username and password if you create an account, saved wishlists, and booking history.</li>
          </ul>
          <h3>2.2 Information we collect automatically</h3>
          <ul>
            <li><strong>Usage data</strong> — pages visited, time spent, links clicked, referring URL.</li>
            <li><strong>Device data</strong> — IP address, browser type and version, operating system, screen resolution.</li>
            <li><strong>Cookie data</strong> — see our <Link href="/cookie-policy">Cookie Policy</Link> for full details.</li>
          </ul>
          <h3>2.3 Information from third parties</h3>
          <ul>
            <li>Travel agents or group organisers who book on your behalf.</li>
            <li>Review platforms (e.g., TripAdvisor, Google) where you leave public reviews.</li>
            <li>Social login providers (Google, Facebook) if you choose to sign in that way.</li>
          </ul>
        </Section>

        {/* 3 */}
        <Section title="3. How We Use Your Information">
          <table className="w-full text-sm border-collapse not-prose">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left py-2 px-3 font-semibold text-slate-700 border border-slate-200">Purpose</th>
                <th className="text-left py-2 px-3 font-semibold text-slate-700 border border-slate-200">Lawful Basis</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Process and manage your tour booking", "Contract performance"],
                ["Send booking confirmations, itineraries, and pre-departure information", "Contract performance"],
                ["Process payments and issue refunds", "Contract performance"],
                ["Respond to enquiries and provide customer support", "Legitimate interest / Contract"],
                ["Send marketing emails and newsletters (with your consent)", "Consent"],
                ["Personalise your website experience and recommend tours", "Legitimate interest"],
                ["Comply with legal obligations (tax records, permit requirements)", "Legal obligation"],
                ["Detect and prevent fraud or security threats", "Legitimate interest"],
                ["Improve our website, services, and tour offerings", "Legitimate interest"],
                ["Conduct customer satisfaction surveys", "Legitimate interest / Consent"],
              ].map(([purpose, basis]) => (
                <tr key={purpose} className="even:bg-slate-50">
                  <td className="py-2 px-3 border border-slate-200 text-slate-700">{purpose}</td>
                  <td className="py-2 px-3 border border-slate-200 text-slate-500 whitespace-nowrap">{basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* 4 */}
        <Section title="4. Who We Share Your Data With">
          <p>We do <strong>not</strong> sell your personal data. We share it only as necessary:</p>
          <ul>
            <li><strong>Tour ground operators &amp; guides</strong> — local operators and licensed guides who deliver your tour. They receive only the data needed to facilitate your experience (name, date, group size, any relevant health/dietary notes).</li>
            <li><strong>Accommodation and transport partners</strong> — hotels, lodges, and vehicle operators, solely to complete your reservation.</li>
            <li><strong>Payment processors</strong> — Paystack (Ghana) and/or Stripe (international), who process card payments under their own security standards (PCI-DSS compliant).</li>
            <li><strong>Email and CRM platforms</strong> — services such as Mailchimp or similar, used to send booking confirmations and newsletters.</li>
            <li><strong>Analytics providers</strong> — Google Analytics (anonymised aggregates) to help us understand how the website is used.</li>
            <li><strong>Legal and regulatory bodies</strong> — Ghana Tourism Authority, Ghana Immigration Service, or law enforcement where legally required.</li>
            <li><strong>Professional advisers</strong> — lawyers, auditors, and insurers, under strict confidentiality obligations.</li>
          </ul>
          <p>
            Where we share data internationally (e.g., with processors based outside Ghana), we take
            steps to ensure adequate protection through contractual safeguards or equivalent mechanisms.
          </p>
        </Section>

        {/* 5 */}
        <Section title="5. How Long We Keep Your Data">
          <ul>
            <li><strong>Booking and transaction records</strong> — 7 years (Ghana tax and business law requirement).</li>
            <li><strong>Account data</strong> — for as long as your account is active, plus 2 years after the last login unless you request deletion.</li>
            <li><strong>Marketing preferences</strong> — until you withdraw consent or unsubscribe.</li>
            <li><strong>Customer support communications</strong> — 3 years.</li>
            <li><strong>Website analytics</strong> — 26 months (rolling).</li>
          </ul>
          <p>
            After the applicable retention period, data is securely deleted or anonymised.
          </p>
        </Section>

        {/* 6 */}
        <Section title="6. Your Rights">
          <p>Under the Ghana Data Protection Act 2012 and, where applicable, the GDPR, you have the right to:</p>
          <ul>
            <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
            <li><strong>Correction</strong> — ask us to correct inaccurate or incomplete data.</li>
            <li><strong>Erasure</strong> — request deletion of your data where there is no compelling reason for us to keep it.</li>
            <li><strong>Restriction</strong> — ask us to limit how we process your data in certain circumstances.</li>
            <li><strong>Portability</strong> — receive your data in a structured, machine-readable format.</li>
            <li><strong>Objection</strong> — object to processing based on legitimate interest, including direct marketing.</li>
            <li><strong>Withdraw consent</strong> — where processing is based on consent, you may withdraw it at any time without affecting prior processing.</li>
          </ul>
          <p>
            To exercise any of these rights, email us at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will respond within 30 days.
            You also have the right to lodge a complaint with the{" "}
            <strong>Data Protection Commission of Ghana</strong> at{" "}
            <a href="https://dpc.gov.gh" target="_blank" rel="noopener noreferrer">dpc.gov.gh</a>.
          </p>
        </Section>

        {/* 7 */}
        <Section title="7. Data Security">
          <p>
            We implement appropriate technical and organisational security measures to protect your
            personal data against unauthorised access, alteration, disclosure, or destruction.
            These include TLS/SSL encryption on all web traffic, hashed password storage,
            role-based access controls for staff, and regular security reviews.
          </p>
          <p>
            However, no method of transmission over the internet is completely secure. In the event
            of a data breach that is likely to result in risk to your rights, we will notify you
            and the relevant authority in accordance with applicable law.
          </p>
        </Section>

        {/* 8 */}
        <Section title="8. Children's Privacy">
          <p>
            Our website and services are not directed at children under 16. We do not knowingly
            collect personal data from children. If you believe a child has provided us with
            personal information, please contact us immediately and we will delete it.
          </p>
          <p>
            Where a minor travels as part of a group or family booking, the booking adult is
            responsible for providing any necessary consents on their behalf.
          </p>
        </Section>

        {/* 9 */}
        <Section title="9. Links to Third-Party Websites">
          <p>
            Our website may contain links to third-party sites (e.g., travel insurance providers,
            attraction pages). We are not responsible for the privacy practices of those sites and
            encourage you to read their privacy policies before providing any personal data.
          </p>
        </Section>

        {/* 10 */}
        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the
            effective date at the top of this page and, for material changes, notify you by email
            or a prominent notice on the website. Your continued use of our services after such
            changes constitutes acceptance of the revised policy.
          </p>
        </Section>

        {/* 11 */}
        <Section title="11. Contact Us">
          <p>
            For any privacy-related questions or to exercise your rights, please contact our
            Data Protection Officer:
          </p>
          <address className="not-italic bg-slate-50 rounded-xl p-5 text-slate-700 text-sm leading-relaxed">
            <strong>{COMPANY}</strong><br />
            {ADDRESS}<br />
            Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
            Phone: +233 30 277 1234
          </address>
        </Section>

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-4 text-sm text-slate-500">
          <Link href="/terms-of-service" className="text-amber-600 font-medium hover:underline">Terms of Service →</Link>
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
      <div className="text-slate-600 leading-relaxed space-y-4 text-[15px]">{children}</div>
    </section>
  );
}

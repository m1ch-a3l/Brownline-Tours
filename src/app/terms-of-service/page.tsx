import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Brownline Tours terms of service — booking conditions, cancellation policy, liability, and guest responsibilities.",
};

const EFFECTIVE_DATE = "18 May 2026";
const COMPANY = "Brownline Tours Ghana Limited";
const ADDRESS = "4 Airport Road, Kotoka Area, Accra, Ghana";
const EMAIL = "legal@brownlinetours.com";

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
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm">
            Effective date: <span className="text-slate-300 font-medium">{EFFECTIVE_DATE}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 max-w-none">

        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before booking a tour or using
          the Brownline Tours website. By placing a booking or accessing our services, you agree
          to be bound by these Terms. If you do not agree, please do not make a booking.
        </p>
        <p className="text-slate-500 text-sm mb-10 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <strong className="text-amber-700">Note:</strong> These Terms constitute a legally binding contract between
          you and {COMPANY}. Where a booking is made on behalf of a group, the lead traveller
          accepts these Terms on behalf of all members and is responsible for ensuring each
          member is aware of them.
        </p>

        {/* 1 */}
        <Section title="1. Definitions">
          <ul>
            <li><strong>&ldquo;Company&rdquo; / &ldquo;we&rdquo; / &ldquo;us&rdquo;</strong> means {COMPANY}.</li>
            <li><strong>&ldquo;Guest&rdquo; / &ldquo;you&rdquo;</strong> means any person who makes a booking or travels on a Brownline Tours experience.</li>
            <li><strong>&ldquo;Tour&rdquo;</strong> means any guided experience, itinerary, day trip, multi-day package, or activity arranged by or through Brownline Tours.</li>
            <li><strong>&ldquo;Booking Confirmation&rdquo;</strong> means the written confirmation (email or document) we issue once a booking is confirmed and a deposit received.</li>
            <li><strong>&ldquo;Total Tour Price&rdquo;</strong> means the full amount stated in your Booking Confirmation including all applicable taxes and fees.</li>
          </ul>
        </Section>

        {/* 2 */}
        <Section title="2. Booking and Contract Formation">
          <p>
            A binding contract between you and Brownline Tours is formed when: (a) you submit a
            booking request (online, by email, or through an agent); (b) we issue a Booking
            Confirmation; and (c) you pay the required deposit or full payment as applicable.
          </p>
          <p>
            All bookings are subject to availability. We reserve the right to decline any booking
            at our discretion without providing reasons. If we decline your booking, any payment
            received will be refunded in full within 7 business days.
          </p>
          <p>
            You must be at least 18 years old to make a booking. Guests under 18 must be
            accompanied by a parent or legal guardian at all times during the tour unless otherwise
            expressly agreed in writing.
          </p>
        </Section>

        {/* 3 */}
        <Section title="3. Pricing and Payment">
          <h3>3.1 Prices</h3>
          <p>
            All prices are quoted in United States Dollars (USD) or Ghana Cedis (GHS) as specified
            on the relevant tour page. Prices are inclusive of VAT/NHIL where applicable under
            Ghana Revenue Authority regulations. We reserve the right to correct any pricing errors
            before a Booking Confirmation is issued.
          </p>
          <h3>3.2 Deposit and full payment</h3>
          <ul>
            <li>A non-refundable deposit of <strong>30% of the Total Tour Price</strong> is required at the time of booking to secure your place.</li>
            <li>The remaining balance is due <strong>30 days before the tour departure date</strong>.</li>
            <li>For bookings made within 30 days of departure, the full Total Tour Price is payable at the time of booking.</li>
          </ul>
          <h3>3.3 Accepted payment methods</h3>
          <p>
            We accept Visa, Mastercard, mobile money (MTN MoMo, Vodafone Cash, AirtelTigo Money),
            and bank transfer. Card payments are processed by Paystack (GHS) or Stripe (USD/GBP/EUR).
            A payment processing fee may apply and will be disclosed at checkout.
          </p>
          <h3>3.4 Currency and exchange rates</h3>
          <p>
            Where prices are quoted in USD, the GHS equivalent at the time of payment will be
            based on the prevailing interbank exchange rate. Brownline Tours is not responsible
            for exchange rate fluctuations.
          </p>
        </Section>

        {/* 4 */}
        <Section title="4. Cancellations and Refunds">
          <h3>4.1 Cancellation by you</h3>
          <p>
            All cancellations must be submitted in writing to{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. The following charges apply based on notice received before
            the tour departure date:
          </p>
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left py-2 px-3 font-semibold text-slate-700 border border-slate-200">Notice period</th>
                <th className="text-left py-2 px-3 font-semibold text-slate-700 border border-slate-200">Cancellation charge</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["More than 60 days", "Deposit only (30%)"],
                ["30–60 days", "50% of Total Tour Price"],
                ["14–29 days", "75% of Total Tour Price"],
                ["Less than 14 days", "100% of Total Tour Price (no refund)"],
                ["No-show", "100% of Total Tour Price (no refund)"],
              ].map(([period, charge]) => (
                <tr key={period} className="even:bg-slate-50">
                  <td className="py-2 px-3 border border-slate-200 text-slate-700">{period}</td>
                  <td className="py-2 px-3 border border-slate-200 text-slate-600">{charge}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            We strongly recommend purchasing comprehensive travel insurance that covers
            cancellation costs.
          </p>
          <h3>4.2 Cancellation by Brownline Tours</h3>
          <p>
            We reserve the right to cancel any tour due to insufficient bookings (minimum group
            numbers not met), force majeure events, safety concerns, or circumstances beyond our
            control. In such cases, we will:
          </p>
          <ul>
            <li>Offer you a full credit note valid for 24 months; or</li>
            <li>Offer you an alternative tour of equivalent or greater value; or</li>
            <li>Issue a full refund of all monies paid within 14 business days.</li>
          </ul>
          <p>
            Brownline Tours is not liable for any additional costs you may incur as a result
            of our cancellation (e.g., flights, accommodation booked independently), and this
            further underscores the importance of travel insurance.
          </p>
          <h3>4.3 Itinerary changes</h3>
          <p>
            We reserve the right to make minor changes to tour itineraries (e.g., substituting
            one attraction for a comparable one) at any time due to operational requirements,
            weather, or road conditions. We will endeavour to notify you as soon as reasonably
            practicable. Material changes that significantly affect the nature of the tour will
            entitle you to a proportionate price reduction or a full credit.
          </p>
        </Section>

        {/* 5 */}
        <Section title="5. Traveller Responsibilities">
          <h3>5.1 Passports, visas, and entry requirements</h3>
          <p>
            You are solely responsible for ensuring you hold a valid passport (with at least
            6 months validity beyond the tour end date), any required visa, and any vaccinations
            or health certificates required to enter Ghana or transit through other countries.
            Brownline Tours accepts no liability for any failure by you to comply with entry
            requirements.
          </p>
          <h3>5.2 Health and fitness</h3>
          <p>
            Some tours involve physical activity (trekking, canopy walks, river crossings). You
            must ensure you are physically and mentally fit to participate in the activities
            described in your chosen tour. You must disclose any medical conditions, disabilities,
            allergies, or dietary requirements that may affect your participation or require
            special arrangements when making your booking.
          </p>
          <h3>5.3 Conduct</h3>
          <p>
            You are expected to behave with respect toward other guests, guides, local communities,
            cultural sites, and wildlife at all times. Any guest whose behaviour is deemed
            disruptive, offensive, dangerous, or disrespectful to local culture may be removed from
            the tour without refund at the discretion of the tour guide or Brownline Tours management.
          </p>
          <h3>5.4 Travel insurance</h3>
          <p>
            <strong>Travel insurance is not included in our tour prices and is strongly recommended.</strong>{" "}
            Your policy should cover, at minimum: trip cancellation, medical expenses (including
            emergency evacuation), baggage loss, and personal liability.
          </p>
          <h3>5.5 Accuracy of information</h3>
          <p>
            You warrant that all information provided to us (including names, passport details,
            health disclosures, and payment information) is accurate and complete. You must
            notify us of any changes as soon as possible.
          </p>
        </Section>

        {/* 6 */}
        <Section title="6. Liability and Limitation">
          <h3>6.1 Our liability</h3>
          <p>
            Brownline Tours acts as a tour organiser. Where we arrange services provided by
            third-party operators (hotels, transport companies, activity providers), we exercise
            reasonable care in selecting reputable suppliers but are not liable for the acts or
            omissions of those third parties.
          </p>
          <p>
            To the fullest extent permitted by Ghanaian law, our total liability to you for any
            claim arising from a booking (whether in contract, tort, or otherwise) shall not
            exceed the Total Tour Price paid by you for the tour to which the claim relates.
          </p>
          <h3>6.2 Exclusions</h3>
          <p>We are not liable for:</p>
          <ul>
            <li>Death or personal injury caused by your own negligence or failure to follow guide instructions.</li>
            <li>Loss, theft, or damage to personal belongings.</li>
            <li>Losses arising from force majeure events (see clause 7).</li>
            <li>Losses arising from your failure to comply with entry requirements, health requirements, or these Terms.</li>
            <li>Emotional distress unconnected to physical injury.</li>
          </ul>
          <h3>6.3 Consumer rights</h3>
          <p>
            Nothing in these Terms limits or excludes our liability for death or personal injury
            caused by our negligence, fraud, or any other liability that cannot lawfully be
            excluded under the laws of Ghana or the country in which you reside.
          </p>
        </Section>

        {/* 7 */}
        <Section title="7. Force Majeure">
          <p>
            Brownline Tours shall not be liable for any failure or delay in performing its
            obligations where such failure or delay results from circumstances beyond our
            reasonable control, including but not limited to: acts of God, pandemic or epidemic,
            civil unrest, government actions, natural disasters, strike or industrial action,
            power or infrastructure failure, or acts of terrorism.
          </p>
          <p>
            In such circumstances, we will endeavour to offer alternative arrangements or a
            credit note. Where a full refund is not possible due to non-recoverable costs already
            incurred with suppliers, we will be transparent about the amounts involved.
          </p>
        </Section>

        {/* 8 */}
        <Section title="8. Photography and Media">
          <p>
            Our guides may take photographs during tours for promotional purposes. By
            participating in a tour, you grant Brownline Tours a non-exclusive licence to use
            images or footage in which you appear on our website, social media channels, and
            marketing materials, unless you notify us in writing that you do not consent.
          </p>
          <p>
            You may photograph and film for personal use. We ask that you respect local cultural
            norms and always seek permission before photographing individuals, particularly
            at religious sites, ceremonies, and in rural communities.
          </p>
        </Section>

        {/* 9 */}
        <Section title="9. Intellectual Property">
          <p>
            All content on the Brownline Tours website — including text, itinerary descriptions,
            photographs, logos, graphics, and software — is owned by or licensed to{" "}
            {COMPANY} and is protected by copyright and other intellectual property laws.
            You may not reproduce, distribute, or create derivative works from any content
            without our prior written consent.
          </p>
        </Section>

        {/* 10 */}
        <Section title="10. Website Use">
          <p>
            You may use our website for personal, non-commercial purposes only. You must not:
          </p>
          <ul>
            <li>Use automated tools to scrape, crawl, or extract data from our website.</li>
            <li>Attempt to gain unauthorised access to any part of our systems.</li>
            <li>Submit false, misleading, or fraudulent information.</li>
            <li>Use our website in any way that disrupts or interferes with its operation.</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate your access to our website or account
            if you breach these Terms or engage in fraudulent activity.
          </p>
        </Section>

        {/* 11 */}
        <Section title="11. Disputes and Governing Law">
          <p>
            These Terms are governed by and construed in accordance with the laws of the
            Republic of Ghana. Any dispute arising from or in connection with these Terms or a
            booking shall first be referred to our customer relations team at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> for good-faith resolution.
          </p>
          <p>
            If a dispute cannot be resolved amicably within 30 days, it shall be submitted to
            the exclusive jurisdiction of the courts of Ghana. For guests residing in the European
            Union, the applicable mandatory consumer protection provisions of your country of
            residence also apply.
          </p>
        </Section>

        {/* 12 */}
        <Section title="12. Changes to These Terms">
          <p>
            We may update these Terms from time to time. The current version will always be
            available on this page with the effective date shown above. Your continued use of
            our website or services after any changes constitutes acceptance of the revised
            Terms. For bookings already confirmed, the Terms in force at the time of booking
            apply.
          </p>
        </Section>

        {/* 13 */}
        <Section title="13. Contact">
          <address className="not-italic bg-slate-50 rounded-xl p-5 text-slate-700 text-sm leading-relaxed">
            <strong>{COMPANY}</strong><br />
            {ADDRESS}<br />
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

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Brownline Tours cookie policy — what cookies we use, why, and how to manage them.",
};

const EFFECTIVE_DATE = "18 May 2026";
const COMPANY = "Brownline Tours Ghana Limited";
const EMAIL = "privacy@brownlinetours.com";

export default function CookiePolicyPage() {
  return (
    <div className="flex-1 bg-white">
      {/* Page header */}
      <div className="bg-[#1A0D06] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 font-semibold uppercase tracking-widest text-xs mb-3">
            Legal
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-4">
            Cookie Policy
          </h1>
          <p className="text-slate-400 text-sm">
            Effective date: <span className="text-slate-300 font-medium">{EFFECTIVE_DATE}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 max-w-none">

        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          This Cookie Policy explains what cookies and similar tracking technologies are, how{" "}
          {COMPANY} (&ldquo;Brownline Tours&rdquo;) uses them on our website, and the choices
          you have. It supplements our <Link href="/privacy-policy" className="text-amber-600 hover:underline">Privacy Policy</Link>.
        </p>

        {/* 1 */}
        <Section title="1. What Are Cookies?">
          <p>
            Cookies are small text files placed on your device (computer, tablet, or phone) when
            you visit a website. They allow the website to remember your actions and preferences
            over a period of time so you don&apos;t have to keep re-entering them whenever you
            revisit the site.
          </p>
          <p>
            Similar technologies include <strong>web beacons</strong> (tiny transparent images
            embedded in pages or emails to track opens), <strong>pixels</strong> (used by
            advertising platforms), and <strong>local storage</strong> (browser-side data storage).
            References to &ldquo;cookies&rdquo; in this policy cover all of these technologies.
          </p>
          <p>
            Cookies can be <strong>session cookies</strong> (deleted when you close your browser)
            or <strong>persistent cookies</strong> (remaining on your device for a set period or
            until you delete them). They can be set by us (<strong>first-party cookies</strong>)
            or by third-party services we use (<strong>third-party cookies</strong>).
          </p>
        </Section>

        {/* 2 */}
        <Section title="2. How We Use Cookies">
          <p>We use cookies for four broad purposes, described in detail in Section 3 below:</p>
          <ol>
            <li><strong>Essential</strong> — to make our website work correctly.</li>
            <li><strong>Functional</strong> — to remember your preferences and personalise your experience.</li>
            <li><strong>Analytics</strong> — to understand how visitors use our site so we can improve it.</li>
            <li><strong>Marketing</strong> — to show you relevant advertising and measure campaign performance.</li>
          </ol>
        </Section>

        {/* 3 */}
        <Section title="3. Cookies We Use">

          <CookieTable
            category="Essential Cookies"
            color="emerald"
            description="These cookies are strictly necessary for our website to function. They cannot be switched off in our systems and do not require your consent. Without them, services you have asked for — such as browsing tours, adding items to a wishlist, or completing a booking — cannot be provided."
            cookies={[
              { name: "__session", provider: "Brownline Tours", purpose: "Maintains your logged-in session", expiry: "Session" },
              { name: "csrf_token", provider: "Brownline Tours", purpose: "Prevents cross-site request forgery attacks", expiry: "Session" },
              { name: "booking_cart", provider: "Brownline Tours", purpose: "Retains your tour selection and booking progress", expiry: "1 day" },
              { name: "cookie_consent", provider: "Brownline Tours", purpose: "Stores your cookie preferences", expiry: "12 months" },
            ]}
          />

          <CookieTable
            category="Functional Cookies"
            color="sky"
            description="These cookies enable enhanced functionality and personalisation — such as remembering your preferred currency, language, or recently viewed tours. If you do not allow these cookies, some features may not work as intended."
            cookies={[
              { name: "preferred_currency", provider: "Brownline Tours", purpose: "Remembers your chosen display currency (USD/GHS)", expiry: "12 months" },
              { name: "recently_viewed", provider: "Brownline Tours", purpose: "Stores IDs of recently viewed tour pages", expiry: "30 days" },
              { name: "ui_preferences", provider: "Brownline Tours", purpose: "Stores UI preferences (e.g., map view vs. list view)", expiry: "6 months" },
            ]}
          />

          <CookieTable
            category="Analytics Cookies"
            color="amber"
            description="These cookies allow us to count visits and traffic sources so we can measure and improve our website's performance. All data collected is aggregated and anonymous — we cannot identify you from it."
            cookies={[
              { name: "_ga", provider: "Google Analytics", purpose: "Distinguishes unique users; used to throttle request rate", expiry: "2 years" },
              { name: "_ga_*", provider: "Google Analytics", purpose: "Stores session state for Google Analytics 4", expiry: "2 years" },
              { name: "_gid", provider: "Google Analytics", purpose: "Distinguishes users within 24-hour sessions", expiry: "24 hours" },
              { name: "_gat", provider: "Google Analytics", purpose: "Throttles request rate to Google Analytics", expiry: "1 minute" },
            ]}
          />

          <CookieTable
            category="Marketing Cookies"
            color="rose"
            description="These cookies may be set through our site by our advertising partners (Meta, Google Ads). They build a profile of your interests and may be used to show you relevant adverts on other websites. They do not store personal identifiers but work by uniquely identifying your browser and device."
            cookies={[
              { name: "_fbp", provider: "Meta (Facebook)", purpose: "Identifies browsers for Meta advertising products and remarketing", expiry: "3 months" },
              { name: "fr", provider: "Meta (Facebook)", purpose: "Facebook ad delivery and measurement", expiry: "3 months" },
              { name: "_gcl_au", provider: "Google Ads", purpose: "Conversion tracking and remarketing for Google Ads", expiry: "3 months" },
              { name: "IDE", provider: "Google DoubleClick", purpose: "Tracks ad clicks and conversions across Google display network", expiry: "13 months" },
            ]}
          />

        </Section>

        {/* 4 */}
        <Section title="4. Third-Party Services">
          <p>
            We embed content and tools from third-party services that may set their own cookies.
            These include:
          </p>
          <ul>
            <li><strong>Google Maps</strong> — embedded on tour pages and our interactive map. Google&apos;s <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Privacy Policy</a> applies.</li>
            <li><strong>YouTube</strong> — video embeds on tour detail pages. YouTube&apos;s <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Privacy Policy</a> applies.</li>
            <li><strong>Paystack / Stripe</strong> — payment processing iframes. Their respective privacy policies apply; no payment data is stored by us.</li>
            <li><strong>Trustpilot / TripAdvisor</strong> — review widgets. Their respective privacy policies apply.</li>
            <li><strong>WhatsApp Business</strong> — chat widget. Meta&apos;s <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Privacy Policy</a> applies when you initiate a chat.</li>
          </ul>
          <p>
            Brownline Tours does not control these third-party cookies and is not responsible for
            them. You should refer to the relevant third party&apos;s privacy and cookie policy
            for more information.
          </p>
        </Section>

        {/* 5 */}
        <Section title="5. Managing Your Cookie Preferences">
          <h3>5.1 Our cookie consent banner</h3>
          <p>
            When you first visit our website, you will be presented with a cookie consent banner
            that allows you to accept all cookies, reject non-essential cookies, or customise
            your choices by category. You can change your preferences at any time by clicking
            the &ldquo;Cookie Settings&rdquo; link in the footer.
          </p>
          <h3>5.2 Browser settings</h3>
          <p>
            You can also control cookies through your browser settings. Most browsers allow you
            to view, block, or delete cookies. Note that blocking all cookies may affect the
            functionality of our website. Here are links to cookie management instructions for
            popular browsers:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Microsoft Edge</a></li>
          </ul>
          <h3>5.3 Opt-out tools</h3>
          <ul>
            <li>
              <strong>Google Analytics</strong> — install the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Google Analytics Opt-out Browser Add-on</a>.
            </li>
            <li>
              <strong>Meta advertising</strong> — manage ad preferences via{" "}
              <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Facebook Ad Preferences</a>.
            </li>
            <li>
              <strong>Interest-based advertising</strong> — opt out via the{" "}
              <a href="https://youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">Your Online Choices</a> platform (EU) or the{" "}
              <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">NAI opt-out tool</a>.
            </li>
          </ul>
        </Section>

        {/* 6 */}
        <Section title="6. Do Not Track">
          <p>
            Some browsers transmit &ldquo;Do Not Track&rdquo; (DNT) signals to websites. Because there is
            no common industry standard for how websites should respond to DNT signals, our website
            does not currently alter its data collection practices when it receives a DNT signal.
            You can use our cookie consent tool or browser settings to limit tracking.
          </p>
        </Section>

        {/* 7 */}
        <Section title="7. Updates to This Policy">
          <p>
            We review and update this Cookie Policy periodically to reflect changes in the
            cookies we use or applicable regulations. When we make material changes, we will
            update the effective date at the top of this page and may notify you via our
            cookie consent banner. Please check this page regularly.
          </p>
        </Section>

        {/* 8 */}
        <Section title="8. Contact Us">
          <p>
            If you have any questions about our use of cookies or this policy, please contact us:
          </p>
          <address className="not-italic bg-slate-50 rounded-xl p-5 text-slate-700 text-sm leading-relaxed">
            <strong>{COMPANY}</strong><br />
            4 Airport Road, Kotoka Area, Accra, Ghana<br />
            Email: <a href={`mailto:${EMAIL}`} className="text-amber-600 hover:underline">{EMAIL}</a><br />
            Phone: +233 30 277 1234
          </address>
        </Section>

        <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-4 text-sm text-slate-500">
          <Link href="/privacy-policy" className="text-amber-600 font-medium hover:underline">Privacy Policy →</Link>
          <Link href="/terms-of-service" className="text-amber-600 font-medium hover:underline">Terms of Service →</Link>
        </div>
      </article>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-extrabold text-slate-900 mb-4 mt-8">{title}</h2>
      <div className="text-slate-600 leading-relaxed space-y-4 text-[15px] [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:text-base [&_h3]:mt-5 [&_h3]:mb-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  );
}

type CookieRow = { name: string; provider: string; purpose: string; expiry: string };

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
  sky:     "bg-sky-50 border-sky-200 text-sky-700",
  amber:   "bg-amber-50 border-amber-200 text-amber-700",
  rose:    "bg-rose-50 border-rose-200 text-rose-700",
};

function CookieTable({
  category,
  color,
  description,
  cookies,
}: {
  category: string;
  color: string;
  description: string;
  cookies: CookieRow[];
}) {
  return (
    <div className="mb-8">
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border mb-3 ${colorMap[color]}`}>
        {category}
      </div>
      <p className="text-slate-600 text-sm mb-4">{description}</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-sm border-collapse min-w-[480px]">
          <thead>
            <tr className="bg-slate-100">
              <th className="text-left py-2 px-3 font-semibold text-slate-700 border-b border-slate-200">Cookie name</th>
              <th className="text-left py-2 px-3 font-semibold text-slate-700 border-b border-slate-200">Provider</th>
              <th className="text-left py-2 px-3 font-semibold text-slate-700 border-b border-slate-200">Purpose</th>
              <th className="text-left py-2 px-3 font-semibold text-slate-700 border-b border-slate-200 whitespace-nowrap">Expiry</th>
            </tr>
          </thead>
          <tbody>
            {cookies.map((c) => (
              <tr key={c.name} className="even:bg-slate-50 hover:bg-slate-100 transition-colors">
                <td className="py-2 px-3 font-mono text-xs text-slate-700">{c.name}</td>
                <td className="py-2 px-3 text-slate-600 whitespace-nowrap">{c.provider}</td>
                <td className="py-2 px-3 text-slate-600">{c.purpose}</td>
                <td className="py-2 px-3 text-slate-500 whitespace-nowrap">{c.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

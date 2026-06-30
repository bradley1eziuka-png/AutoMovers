import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "US AutoMovers Privacy Policy. How we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "When you request a quote or create an account, we collect your name, email address, phone number, and vehicle details.",
      "We collect your pickup and delivery locations to process your transport request.",
      "When you use our website, we may collect basic analytics data such as pages visited and browser type.",
      "We do not collect your payment card information directly. Payments are processed securely through Stripe.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To process your vehicle transport quote and coordinate your shipment.",
      "To send you transactional emails related to your quote request and order status.",
      "To create and manage your customer account and order portal access.",
      "To communicate with you regarding your shipment, including pickup and delivery notifications.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "Supabase: We use Supabase to securely store your account information and order data.",
      "Resend: We use Resend to deliver transactional emails (quote confirmations, order updates).",
      "Stripe: Payment processing is handled by Stripe. We do not store your payment card details.",
      "These providers are bound by their own privacy policies and applicable data protection laws.",
    ],
  },
  {
    title: "Data Retention",
    content: [
      "We retain your account information for as long as your account is active.",
      "Order records are retained for a minimum of five years for business and legal compliance purposes.",
      "You may request deletion of your personal information by contacting us directly.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "We use authentication cookies to keep you logged in to your customer portal.",
      "We do not use tracking or advertising cookies.",
      "You can disable cookies in your browser settings, though this may affect your ability to log in.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to request access to the personal information we hold about you.",
      "You may request correction of inaccurate data or deletion of your account.",
      "To exercise these rights, contact us at the email address provided on our website.",
    ],
  },
  {
    title: "Security",
    content: [
      "We use industry-standard security measures including encrypted connections (HTTPS) and secure authentication.",
      "Your data is stored on infrastructure provided by Supabase, which maintains SOC 2 Type II certification.",
      "No method of electronic transmission or storage is 100% secure. We work to protect your data but cannot guarantee absolute security.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. We will notify registered users of significant changes by email.",
      "The effective date at the top of this page will reflect the most recent update.",
      "Continued use of our services after changes constitutes acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section style={{ padding: "5rem 1.5rem", background: "#0C0C0C", minHeight: "calc(100vh - 68px)" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <div className="section-tag">Legal</div>
        <h1 className="display-font" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "#fff", marginBottom: "0.75rem" }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#555", marginBottom: "3rem" }}>
          Effective Date: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {sections.map(({ title, content }) => (
            <div key={title}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase", color: "#fff", marginBottom: "1rem", paddingBottom: "0.625rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {title}
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {content.map((item, i) => (
                  <li key={i} style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", color: "#888", lineHeight: 1.7, paddingLeft: "1rem", borderLeft: "2px solid rgba(242,92,5,0.2)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "3rem", padding: "1.5rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#666", margin: 0, lineHeight: 1.6 }}>
            Questions about this Privacy Policy? Contact us at the email listed on our website or via the{" "}
            <Link href="/get-quote" style={{ color: "#F25C05", textDecoration: "none", fontWeight: 600 }}>contact page</Link>.
          </p>
        </div>

        <div style={{ marginTop: "2rem", display: "flex", gap: "1.5rem" }}>
          <Link href="/terms" style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#F25C05", textDecoration: "none" }}>Terms of Service →</Link>
          <Link href="/" style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#555", textDecoration: "none" }}>← Back to Home</Link>
        </div>
      </div>
    </section>
  );
}

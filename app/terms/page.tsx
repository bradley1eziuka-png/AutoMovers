import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "US AutoMovers Terms of Service. The terms governing your use of our vehicle transport services.",
};

const sections = [
  {
    title: "1. Services",
    content: [
      "US AutoMovers arranges vehicle transport services by coordinating with licensed, FMCSA-registered motor carriers. We are a transport broker, not a carrier.",
      "All carriers in our network hold active FMCSA authority and maintain required cargo insurance.",
      "We do not transport vehicles ourselves. A third-party carrier performs the physical transport of your vehicle.",
    ],
  },
  {
    title: "2. Quote and Pricing",
    content: [
      "Quotes provided by US AutoMovers are binding upon confirmation. The price stated in your confirmed quote is the price you pay.",
      "Quotes are based on the vehicle information you provide. Inaccurate information (undisclosed modifications, incorrect vehicle size, non-disclosure of inoperable condition) may result in adjusted pricing.",
      "Pricing starts at $75 per vehicle. Final price depends on route, vehicle type, and transport option.",
      "US AutoMovers does not add fuel surcharges or undisclosed fees after a quote is confirmed.",
    ],
  },
  {
    title: "3. Payment",
    content: [
      "No payment is required until a carrier is assigned to your shipment.",
      "Payment is processed via Stripe secure checkout. We do not store your payment card information.",
      "Payment is due at or before vehicle pickup. The carrier will not load your vehicle until payment is confirmed.",
      "Cancellations made more than 48 hours before scheduled pickup may be eligible for a full refund. Cancellations within 48 hours of pickup may incur a cancellation fee.",
    ],
  },
  {
    title: "4. Vehicle Condition and Preparation",
    content: [
      "You must accurately disclose the condition of your vehicle, including whether it is operable.",
      "Remove all personal belongings from the vehicle before pickup. US AutoMovers and its carriers are not responsible for items left inside vehicles.",
      "Fuel tank should be no more than a quarter full at pickup.",
      "Ensure your vehicle has working brakes and can be safely loaded onto a carrier.",
    ],
  },
  {
    title: "5. Insurance and Liability",
    content: [
      "All carriers are required to maintain cargo insurance. Your vehicle is covered during transport.",
      "Upon delivery, inspect your vehicle before signing the Bill of Lading. Document any damage with photos prior to signing.",
      "Claims for transport damage must be noted on the Bill of Lading at delivery and submitted to the carrier within the timeframe specified in their insurance policy.",
      "US AutoMovers' liability as a broker is limited to assisting you in filing a claim with the carrier's insurer.",
    ],
  },
  {
    title: "6. Transit Times",
    content: [
      "Transit times provided are estimates only. US AutoMovers does not guarantee specific pickup or delivery dates.",
      "Delays may occur due to weather, mechanical issues, traffic, or other circumstances outside our control.",
      "We will communicate with you throughout the process and provide updated timelines if delays occur.",
    ],
  },
  {
    title: "7. Customer Portal",
    content: [
      "Access to the customer portal is granted after your order is confirmed.",
      "You are responsible for maintaining the confidentiality of your login credentials.",
      "Order status updates displayed in the portal reflect information provided by your assigned carrier.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "US AutoMovers shall not be liable for indirect, incidental, special, or consequential damages arising from your use of our services.",
      "Our total liability to you shall not exceed the amount paid for the specific shipment giving rise to the claim.",
    ],
  },
  {
    title: "9. Governing Law",
    content: [
      "These Terms are governed by the laws of the United States. Disputes shall be resolved through binding arbitration.",
      "By using our services, you agree to these Terms of Service in their entirety.",
    ],
  },
  {
    title: "10. Changes to Terms",
    content: [
      "We may update these Terms at any time. Continued use of our services after changes constitutes acceptance.",
      "For active orders, the Terms in effect at the time of booking apply.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section style={{ padding: "5rem 1.5rem", background: "#0C0C0C", minHeight: "calc(100vh - 68px)" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        <div className="section-tag">Legal</div>
        <h1 className="display-font" style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "#fff", marginBottom: "0.75rem" }}>
          Terms of Service
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#555", marginBottom: "1rem" }}>
          Effective Date: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#A3A3A3", lineHeight: 1.7, marginBottom: "3rem" }}>
          By requesting a quote or using any service provided by US AutoMovers, you agree to the following terms. Please read them carefully.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {sections.map(({ title, content }) => (
            <div key={title}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 800, textTransform: "uppercase", color: "#fff", marginBottom: "1rem", paddingBottom: "0.625rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
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
            Questions about these Terms?{" "}
            <Link href="/get-quote" style={{ color: "#F25C05", textDecoration: "none", fontWeight: 600 }}>Contact us</Link>.
          </p>
        </div>

        <div style={{ marginTop: "2rem", display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy" style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#F25C05", textDecoration: "none" }}>Privacy Policy →</Link>
          <Link href="/" style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#555", textDecoration: "none" }}>← Back to Home</Link>
        </div>
      </div>
    </section>
  );
}

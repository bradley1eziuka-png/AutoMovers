import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  DollarSign,
  Truck,
  Navigation,
  Shield,
  Clock,
  Phone,
  CreditCard,
  MapPin,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how US AutoMovers handles your vehicle transport from quote to delivery in four simple steps.",
};

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Request Your Quote",
    summary: "Fill out our short form with your vehicle and location details.",
    details: [
      "Provide your full name, contact info, and email.",
      "Enter your pickup and delivery city/state or ZIP code.",
      "Tell us your vehicle year, make, model, and condition.",
      "Choose between open or enclosed transport.",
      "Select your preferred timeframe.",
      "Submit your details and we receive your request instantly.",
    ],
    note: "No account required. No credit card. No commitment.",
  },
  {
    icon: DollarSign,
    step: "02",
    title: "Get a Confirmed Price",
    summary: "Our team reviews your request and sends you a locked-in price.",
    details: [
      "We review route distance, vehicle type, and transport option.",
      "You receive a firm quote via email. No range, no estimate.",
      "The price you see is the price you pay. No fuel surcharges added at delivery.",
      "You choose whether to accept. No pressure, no expiration anxiety.",
      "Once accepted, we begin coordinating a carrier for your pickup.",
    ],
    note: "Pricing starts at $75. Most shipments fall between $75–$150.",
  },
  {
    icon: Truck,
    step: "03",
    title: "We Pick Up Your Vehicle",
    summary: "A licensed carrier collects your vehicle at the agreed time.",
    details: [
      "We assign a vetted, FMCSA-licensed carrier to your shipment.",
      "The driver contacts you to confirm pickup time and address.",
      "Your vehicle is inspected and documented before loading.",
      "Payment is processed at pickup. Not before.",
      "You receive a bill of lading as your official transport record.",
    ],
    note: "You pay nothing until your vehicle is on the carrier.",
  },
  {
    icon: Navigation,
    step: "04",
    title: "Delivered Safe",
    summary: "Track your vehicle and receive it at your destination.",
    details: [
      "Log into your customer portal to see live status updates.",
      "Status moves from Picked Up → In Transit → Delivered.",
      "The driver calls ahead to confirm delivery window.",
      "You inspect your vehicle at delivery and sign off.",
      "Your order history is saved in your portal permanently.",
    ],
    note: "All carriers carry cargo insurance. Your vehicle is covered start to finish.",
  },
];

const faqs = [
  { q: "What if I don't have an account?", a: "You don't need one to get a quote. An account is created when your order is confirmed so you can access the tracking portal." },
  { q: "What happens if my vehicle is inoperable?", a: "Just mark it as inoperable on the quote form. We use specialized loading equipment for non-running vehicles. It won't affect your ability to ship." },
  { q: "Can I ship more than one vehicle?", a: "Yes. Submit a separate quote request for each vehicle, or contact us directly to bundle multiple vehicles into one shipment." },
  { q: "What if there's damage at delivery?", a: "Document any damage before signing the bill of lading. Carrier insurance covers transport damage. Our team will help you file a claim." },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero — stays dark */}
      <section style={{ padding: "5rem 1.5rem 4rem", background: "#0C0C0C", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(242,92,5,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>The Process</div>
          <h1 className="display-font" style={{ fontSize: "clamp(3rem,6vw,6rem)", color: "#fff", marginBottom: "1.25rem" }}>
            How It <span className="text-gradient-orange">Works</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "#A3A3A3", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Four steps from quote to delivery. No deposits, no guesswork, no hidden fees at the end.
          </p>
          <Link href="/get-quote" className="btn-orange btn-orange-lg">Get Started Free</Link>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: "5rem 1.5rem", background: "#F8F9FA" }}>
        <div className="steps-list" style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "4rem" }}>
          {steps.map(({ icon: Icon, step, title, summary, details, note }) => (
            <div key={step} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "start" }} className="step-row">
              {/* Left: icon + connector */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", paddingTop: "0.25rem" }}>
                <div className="step-icon-box" style={{ width: "56px", height: "56px", borderRadius: "12px", background: "rgba(242,92,5,0.10)", border: "1px solid rgba(242,92,5,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={24} style={{ color: "#F25C05" }} />
                </div>
                <div className="step-connector" style={{ width: "1px", height: "100%", minHeight: "80px", background: "linear-gradient(to bottom, rgba(242,92,5,0.3), transparent)" }} />
              </div>

              {/* Right: content */}
              <div>
                <div className="step-heading-row" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span className="display-font step-ghost-number" style={{ fontSize: "3.5rem", color: "rgba(0,0,0,0.06)", lineHeight: 1 }}>{step}</span>
                  <h2 className="display-font" style={{ fontSize: "2.25rem", color: "#1A1A1A" }}>{title}</h2>
                </div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "#636666", marginBottom: "1.5rem", lineHeight: 1.6 }}>{summary}</p>

                {/* Detail card */}
                <div style={{ background: "#FFFFFF", border: "1px solid #EBEBEB", borderRadius: "12px", padding: "1.5rem", marginBottom: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 14px rgba(0,0,0,0.04)" }}>
                  <ul className="step-detail-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                    {details.map((d, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#4A4A4A", lineHeight: 1.5 }}>
                        <CheckCircle size={15} style={{ color: "#F25C05", flexShrink: 0, marginTop: "2px" }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Note pill */}
                <div className="step-note" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(242,92,5,0.06)", border: "1px solid rgba(242,92,5,0.14)", borderRadius: "6px", padding: "0.5rem 0.875rem", fontSize: "0.8rem", fontFamily: "var(--font-body)", color: "#636666" }}>
                  <Shield size={12} style={{ color: "#F25C05" }} />
                  {note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key facts */}
      <section style={{ padding: "5rem 1.5rem", background: "#FFFFFF", borderTop: "1px solid #EBEBEB", borderBottom: "1px solid #EBEBEB" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>What to Know</div>
            <h2 className="display-font" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "#1A1A1A" }}>Before You Ship</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.25rem" }}>
            {[
              { icon: Clock, title: "Typical Transit Time", body: "1–3 days for short hauls. 5–10 days coast-to-coast." },
              { icon: DollarSign, title: "Pricing Range", body: "Starts at $75. Most shipments $75–$150. Complex routes quoted individually." },
              { icon: CreditCard, title: "When You Pay", body: "At pickup. Never before. Stripe checkout link sent by our team after carrier assignment." },
              { icon: Phone, title: "Communication", body: "We contact you by email and phone. The carrier calls 24 hours before pickup and delivery." },
              { icon: Shield, title: "Insurance", body: "All carriers hold FMCSA authority and cargo insurance. Full coverage during transit." },
              { icon: MapPin, title: "Service Area", body: "All 48 contiguous states. Alaska, Hawaii, and overseas routes via FastLine Logistics." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} style={{ background: "#FFFFFF", border: "1px solid #EBEBEB", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 14px rgba(0,0,0,0.04)" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "8px", background: "rgba(242,92,5,0.09)", border: "1px solid rgba(242,92,5,0.16)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.875rem" }}>
                  <Icon size={17} style={{ color: "#F25C05" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9375rem", color: "#1A1A1A", marginBottom: "0.375rem" }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "#636666", lineHeight: 1.55 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section style={{ padding: "5rem 1.5rem", background: "#F8F9FA" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="display-font" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "#1A1A1A" }}>More Questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "3rem" }}>
            {faqs.map(({ q, a }, i) => (
              <details key={i} style={{ background: "#FFFFFF", border: "1px solid #E8E8E8", borderRadius: "10px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <summary style={{ padding: "1.125rem 1.5rem", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9375rem", color: "#1A1A1A", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {q}
                  <ChevronDown size={17} style={{ color: "#F25C05", flexShrink: 0, marginLeft: "1rem" }} />
                </summary>
                <div style={{ padding: "0 1.5rem 1.125rem", fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#636666", lineHeight: 1.7 }}>{a}</div>
              </details>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/get-quote" className="btn-orange btn-orange-lg">Get My Free Quote</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .step-row { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
          .step-connector { display: none !important; }
          .step-ghost-number { display: none !important; }
          .step-icon-box { width: 40px !important; height: 40px !important; border-radius: 8px !important; }
          .step-heading-row { gap: 0.5rem !important; margin-bottom: 0.5rem !important; }
          .step-detail-list li:nth-child(n+4) { display: none !important; }
          .step-note { margin-bottom: 0 !important; }
          .steps-list { gap: 2rem !important; }
        }
      `}</style>
    </>
  );
}

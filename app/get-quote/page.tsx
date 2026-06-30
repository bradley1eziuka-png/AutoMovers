import type { Metadata } from "next";
import { Shield, DollarSign, Clock, CheckCircle } from "lucide-react";
import { QuoteForm } from "@/components/ui/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Request a free, no-obligation vehicle transport quote. Get a locked-in price within hours. No upfront payment required.",
};

export default function GetQuotePage() {
  return (
    <>
      {/* Dark hero header */}
      <section style={{ padding: "4.5rem 1.5rem 3.5rem", background: "#0C0C0C", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(242,92,5,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "640px", margin: "0 auto", position: "relative" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>Free &amp; No Obligation</div>
          <h1 className="display-font" style={{ fontSize: "clamp(2.5rem,5vw,5rem)", color: "#fff", marginBottom: "1rem" }}>
            Get Your <span className="text-gradient-orange">Free Quote</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#A3A3A3", lineHeight: 1.7 }}>
            Fill out the form and our team will send you a locked-in price. No estimates, no ranges. One firm number you can count on.
          </p>
        </div>
      </section>

      {/* Light body — two-column layout */}
      <section style={{ padding: "5rem 1.5rem 6rem", background: "#F8F9FA" }}>
        <div
          style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", alignItems: "start" }}
          className="quote-page-grid"
        >
          {/* Left: info */}
          <div style={{ position: "sticky", top: "100px" }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.07em", color: "#F25C05", marginBottom: "1.5rem" }}>
              Why get a quote with us
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { icon: DollarSign, title: "No Upfront Payment", body: "You pay nothing until a carrier is assigned." },
                { icon: Clock, title: "Fast Response", body: "Quotes delivered within a few hours, often sooner." },
                { icon: Shield, title: "Locked-In Price", body: "The price we quote is the price you pay. No add-ons." },
                { icon: CheckCircle, title: "FMCSA Licensed", body: "All carriers in our network hold active FMCSA authority." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem", padding: "1rem", background: "#FFFFFF", border: "1px solid #E8E8E8", borderRadius: "10px", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "8px", background: "rgba(242,92,5,0.09)", border: "1px solid rgba(242,92,5,0.16)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={16} style={{ color: "#F25C05" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", color: "#1A1A1A", marginBottom: "0.15rem" }}>{title}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "#636666", lineHeight: 1.5 }}>{body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: "1.25rem", background: "rgba(242,92,5,0.06)", border: "1px solid rgba(242,92,5,0.15)", borderRadius: "10px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "#636666", lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: "#1A1A1A" }}>Pricing starts at $75.</strong> Most domestic shipments range between $75–$150 depending on distance, route, and transport type. You&apos;ll receive an exact number, not a range.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E8E8E8", borderRadius: "16px", padding: "2.5rem", boxShadow: "0 4px 16px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)" }}>
            <h2 className="display-font" style={{ fontSize: "2rem", color: "#1A1A1A", marginBottom: "0.5rem" }}>Request a Quote</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#8C8C8C", marginBottom: "2rem" }}>All fields required unless noted. We respond within a few hours.</p>
            <QuoteForm light />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .quote-page-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .quote-page-grid > div:first-child { position: static !important; }
        }
      `}</style>
    </>
  );
}

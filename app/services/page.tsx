import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Truck, Lock, Wrench, MapPin, Star, Shield, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Open transport, enclosed transport, inoperable vehicle shipping, and door-to-door delivery. Every type of vehicle, every route in the US.",
};

const services = [
  {
    icon: Truck,
    title: "Open Transport",
    tag: "Most Popular",
    price: "From $75",
    headline: "The standard. The reliable. The affordable.",
    desc: "Open transport places your vehicle on a multi-car carrier, the same method auto dealerships use when moving inventory across the country. It's exposed to the elements, but your vehicle is secured and insured throughout the journey.",
    mobiledesc: "Your vehicle on a multi-car carrier — the same method dealerships use. Secure, insured, and the most affordable option.",
    bestFor: ["Standard sedans, SUVs, and trucks", "Budget-conscious moves", "Non-urgent timelines", "Any vehicle in good condition"],
    notFor: ["Classic cars or show cars", "High-value exotics", "Vehicles you're concerned about road debris"],
  },
  {
    icon: Lock,
    title: "Enclosed Transport",
    tag: "Premium",
    price: "From $150",
    headline: "Full protection. Total peace of mind.",
    desc: "Your vehicle rides inside a fully enclosed trailer, shielded from weather, road debris, and prying eyes. Enclosed transport is the standard for classic cars, luxury vehicles, exotic sports cars, and anything you wouldn't risk on an open carrier.",
    mobiledesc: "Your vehicle inside a fully enclosed trailer — shielded from weather and road debris. The standard for luxury, classic, and exotic vehicles.",
    bestFor: ["Classic and collector cars", "Luxury vehicles (BMW, Mercedes, Porsche, etc.)", "Exotic and sports cars", "Freshly painted or restored vehicles"],
    notFor: ["Anyone on a tight budget. Open transport is just as safe for daily drivers."],
  },
  {
    icon: Wrench,
    title: "Inoperable Vehicle Shipping",
    tag: "Specialty",
    price: "Custom Quote",
    headline: "Doesn't drive? Still ships.",
    desc: "We transport vehicles that can't be driven under their own power. Using specialized winch-loading equipment and flatbed carriers, we can move salvage vehicles, project cars, flood vehicles, and anything else that needs to get from A to B.",
    mobiledesc: "Doesn't run? We use winch-loading equipment to move salvage, project, and non-running vehicles anywhere in the US.",
    bestFor: ["Project and restoration vehicles", "Salvage and auction purchases", "Flood-damaged or accident vehicles", "Vehicles with mechanical failures"],
    notFor: ["Nothing. If it doesn't drive, we can still move it."],
  },
  {
    icon: MapPin,
    title: "Door-to-Door Delivery",
    tag: "Standard",
    price: "Included",
    headline: "From your driveway. To theirs.",
    desc: "We pick up from your address and deliver directly to the destination address. No terminal drop-offs, no extra trips. The driver arranges a time that works for you, and that's it.",
    mobiledesc: "Pickup at your address, delivery to the destination. No terminal drop-offs, no extra trips.",
    bestFor: ["Anyone who wants maximum convenience", "Multi-state relocations", "Snowbirds and seasonal moves", "Anyone who's used a terminal before and hated it"],
    notFor: ["Addresses with very low clearance or tight access. Contact us to discuss alternatives."],
  },
];

const routes = [
  "New York → Florida",
  "California → Texas",
  "Illinois → Arizona",
  "Georgia → Colorado",
  "Ohio → Nevada",
  "North Carolina → Washington",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero — stays dark with truck image */}
      <section style={{ padding: "5rem 1.5rem 4rem", background: "#0C0C0C", position: "relative", overflow: "hidden" }}>
        <Image
          src="/images/services-carrier.jpg"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center 50%", zIndex: 0 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(8,8,8,0.84)", zIndex: 1 }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(242,92,5,0.14) 0%, transparent 70%)", pointerEvents: "none", zIndex: 2 }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 3 }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>What We Offer</div>
          <h1 className="display-font" style={{ fontSize: "clamp(3rem,6vw,6rem)", color: "#fff", marginBottom: "1.25rem" }}>
            Transport <span className="text-gradient-orange">Services</span>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "#A3A3A3", lineHeight: 1.7, maxWidth: "540px", margin: "0 auto 2.5rem" }}>
            Every vehicle type. Every route. Every service level. One company you can call.
          </p>
          <Link href="/get-quote" className="btn-orange btn-orange-lg">Get a Free Quote</Link>
        </div>
      </section>

      {/* Service cards */}
      <section style={{ padding: "5rem 1.5rem", background: "#F8F9FA" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {services.map(({ icon: Icon, title, tag, price, headline, desc, mobiledesc, bestFor, notFor }) => (
            <div key={title} className="service-card" style={{ background: "#FFFFFF", border: "1px solid #EBEBEB", borderRadius: "14px", padding: "2.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 6px 20px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem", alignItems: "start" }} className="service-row">
                {/* Left */}
                <div>
                  <div className="service-header" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                      <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "rgba(242,92,5,0.10)", border: "1px solid rgba(242,92,5,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={22} style={{ color: "#F25C05" }} />
                      </div>
                      <div>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#F25C05", background: "rgba(242,92,5,0.08)", border: "1px solid rgba(242,92,5,0.15)", padding: "0.2rem 0.5rem", borderRadius: "4px", display: "inline-block", marginBottom: "0.3rem" }}>{tag}</span>
                        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 800, textTransform: "uppercase", color: "#1A1A1A" }}>{title}</h2>
                      </div>
                    </div>
                    <div className="service-price" style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, color: "#F25C05", flexShrink: 0 }}>{price}</div>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontStyle: "italic", color: "#636666", marginBottom: "0.875rem" }}>{headline}</p>
                  <p className="service-desc-full" style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#636666", lineHeight: 1.7 }}>{desc}</p>
                  <p className="service-desc-mobile" style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#636666", lineHeight: 1.7 }}>{mobiledesc}</p>
                  <div style={{ marginTop: "1.5rem" }}>
                    <Link href="/get-quote" className="btn-orange" style={{ fontSize: "0.875rem" }}>
                      Get a Quote <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Right */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* Best for */}
                  <div style={{ background: "rgba(242,92,5,0.05)", border: "1px solid rgba(242,92,5,0.14)", borderRadius: "10px", padding: "1.25rem" }}>
                    <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#F25C05", marginBottom: "0.75rem" }}>Best For</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {bestFor.map((b) => (
                        <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#4A4A4A" }}>
                          <CheckCircle size={14} style={{ color: "#F25C05", flexShrink: 0, marginTop: "2px" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Consider alternatives */}
                  <div style={{ background: "#F8F9FA", border: "1px solid #E8E8E8", borderRadius: "10px", padding: "1.25rem" }}>
                    <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#8C8C8C", marginBottom: "0.75rem" }}>Consider Alternatives If</h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {notFor.map((n) => (
                        <li key={n} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#636666" }}>
                          <span style={{ flexShrink: 0, marginTop: "6px", width: "6px", height: "6px", borderRadius: "50%", background: "#CCCCCC", display: "inline-block" }} />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular routes */}
      <section style={{ padding: "5rem 1.5rem", background: "#FFFFFF", borderTop: "1px solid #EBEBEB" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Common Moves</div>
            <h2 className="display-font" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "#1A1A1A" }}>Popular Routes</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
            {routes.map((route) => (
              <div key={route} style={{ display: "flex", alignItems: "center", gap: "0.625rem", background: "#F8F9FA", border: "1px solid #EBEBEB", borderRadius: "8px", padding: "1rem 1.25rem" }}>
                <MapPin size={15} style={{ color: "#F25C05", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#4A4A4A" }}>{route}</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#636666", textAlign: "center" }}>
            We service all 48 contiguous states. &nbsp;
            <Link href="/get-quote" style={{ color: "#F25C05", textDecoration: "none", fontWeight: 600 }}>
              Get a quote for your specific route →
            </Link>
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ padding: "3.5rem 1.5rem", background: "#F8F9FA", borderTop: "1px solid #EBEBEB" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2.5rem" }}>
          {[
            { icon: Shield, label: "FMCSA Licensed Carriers" },
            { icon: Star, label: "Price-Match Guarantee" },
            { icon: CheckCircle, label: "No Upfront Payment" },
            { icon: Lock, label: "Fully Insured Transport" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <Icon size={18} style={{ color: "#F25C05" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#636666", fontWeight: 500 }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .service-desc-mobile { display: none; }
        @media (max-width: 768px) {
          .service-row { grid-template-columns: 1fr !important; }
          .service-card { padding: 1.25rem !important; }
          .service-header { flex-wrap: wrap; gap: 0.5rem !important; }
          .service-price { width: 100%; font-size: 1.25rem !important; margin-top: 0.25rem; }
          .service-desc-full { display: none !important; }
          .service-desc-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}

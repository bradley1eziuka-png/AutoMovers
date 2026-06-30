import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  DollarSign,
  MapPin,
  ChevronDown,
  CheckCircle,
  Truck,
  FileText,
  Package,
  Navigation,
} from "lucide-react";
import { HeroQuoteBar } from "@/components/ui/HeroQuoteBar";
import { TestimonialsCarousel } from "@/components/ui/TestimonialsCarousel";

const trustItems = [
  { icon: Shield, label: "FMCSA Licensed Carriers" },
  { icon: DollarSign, label: "No Upfront Payment" },
  { icon: CheckCircle, label: "Fully Insured Transport" },
  { icon: MapPin, label: "Nationwide Coverage" },
];

const stats = [
  { value: "2,400+", label: "Vehicles Shipped" },
  { value: "48", label: "States Covered" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "$0", label: "Upfront Payment" },
];

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Request Your Quote",
    body: "Fill out the form with your vehicle details and locations. Takes under 60 seconds. No obligations.",
  },
  {
    icon: DollarSign,
    step: "02",
    title: "Get a Confirmed Price",
    body: "Our team reviews your request and sends a final, locked-in price. No fuel surcharges added later.",
  },
  {
    icon: Truck,
    step: "03",
    title: "We Pick Up Your Vehicle",
    body: "A licensed carrier picks up your vehicle at the agreed time. You pay only after pickup is confirmed.",
  },
  {
    icon: Navigation,
    step: "04",
    title: "Delivered Safe",
    body: "Track your shipment in real time through your customer portal. We notify you at every step.",
  },
];

const services = [
  {
    title: "Open Transport",
    desc: "The most affordable way to ship a standard vehicle. Your car rides on an open multi-car carrier, the same method dealerships use.",
    price: "From $75",
    tag: "Most Popular",
  },
  {
    title: "Enclosed Transport",
    desc: "Full protection from weather and road debris. Ideal for classic cars, luxury vehicles, and anything you wouldn't want exposed.",
    price: "From $150",
    tag: "Premium",
  },
  {
    title: "Inoperable Vehicle Shipping",
    desc: "Your car doesn't need to drive to be shipped. We use specialized equipment to load and secure non-running vehicles.",
    price: "Custom Quote",
    tag: "Specialty",
  },
];


const faqs = [
  {
    q: "How much does it cost to ship a car?",
    a: "Most domestic shipments range from $75 to $150 per vehicle depending on distance, transport type, and vehicle size. We provide a locked-in price before any payment is required.",
  },
  {
    q: "Do I have to pay anything upfront?",
    a: "No. You pay nothing until a carrier is assigned to your shipment. We believe in earned trust, not deposits.",
  },
  {
    q: "How long does it take to ship a car?",
    a: "Transit times vary by distance. Shorter routes (under 500 miles) typically take 1–3 days. Cross-country shipments usually take 5–10 days.",
  },
  {
    q: "Is my vehicle insured during transport?",
    a: "Yes. All carriers in our network are FMCSA licensed and carry cargo insurance. Your vehicle is covered throughout the entire journey.",
  },
  {
    q: "What types of vehicles can you ship?",
    a: "We ship sedans, SUVs, trucks, vans, motorcycles, classic cars, and inoperable vehicles. If it has wheels, we can move it.",
  },
  {
    q: "Can I track my shipment?",
    a: "Yes. Once your order is confirmed, you get access to our customer portal where you can see real-time status updates at every stage of your shipment.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", background: "#0C0C0C", overflow: "hidden", minHeight: "88vh", display: "flex", flexDirection: "column" }}>
        <Image
          src="/images/hero-carrier2.png"
          alt=""
          fill
          priority
          quality={90}
          style={{ objectFit: "cover", objectPosition: "center 50%", zIndex: 0 }}
        />
        {/* Subtle gradient overlay — top darker for nav readability, centre stays open */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.45) 28%, rgba(0,0,0,0.48) 65%, rgba(0,0,0,0.78) 100%)", zIndex: 1 }} />

        {/* Centered content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "8rem 1.5rem 5rem", position: "relative", zIndex: 2 }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            <span style={{ display: "inline-block", width: "24px", height: "2px", background: "#F25C05" }} />
            Nationwide Vehicle Transport
          </div>
          <h1 className="display-font" style={{ fontSize: "clamp(3.5rem, 7vw, 7.5rem)", color: "#FFFFFF", marginBottom: "1.25rem", textShadow: "0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.5)" }}>
            Ship Your Car<br />
            Anywhere<br />
            in the US
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.125rem", lineHeight: 1.7, color: "rgba(255,255,255,0.90)", maxWidth: "520px", marginBottom: "2rem", textShadow: "0 1px 12px rgba(0,0,0,0.85), 0 2px 24px rgba(0,0,0,0.6)" }}>
            Door-to-door vehicle transport by truck. FMCSA licensed carriers, a firm price before you commit, and zero payment until pickup.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "1.75rem" }}>
            {trustItems.map(({ icon: Icon, label }) => (
              <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", background: "rgba(0,0,0,0.32)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "100px", padding: "0.375rem 0.875rem", fontSize: "0.8rem", fontFamily: "var(--font-body)", fontWeight: 500, color: "rgba(255,255,255,0.88)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
                <Icon size={13} style={{ color: "#F25C05" }} />
                {label}
              </span>
            ))}
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem", background: "rgba(0,0,0,0.28)", border: "1px solid rgba(242,92,5,0.28)", borderRadius: "8px", padding: "0.625rem 1rem", fontSize: "0.8rem", fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
            <Package size={14} style={{ color: "#F25C05" }} />
            Shipping from overseas?{" "}
            <a href="https://fastline-logistics.com" target="_blank" rel="noopener noreferrer" style={{ color: "#F25C05", textDecoration: "none", fontWeight: 600 }}>
              FastLine Logistics →
            </a>
          </div>
        </div>
      </section>

      {/* Hero quote bar — floats between hero and stats */}
      <div style={{ position: "relative", zIndex: 20, marginTop: "-52px", padding: "0 1.5rem", paddingBottom: "0" }}>
        <HeroQuoteBar />
      </div>

      {/* STATS */}
      <section className="section-pad" style={{ background: "#FFFFFF", borderBottom: "1px solid #EBEBEB", padding: "5rem 1.5rem 3.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2rem" }} className="stats-grid">
          {stats.map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div className="display-font text-gradient-orange" style={{ fontSize: "3rem" }}>{value}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#636666", marginTop: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad" style={{ padding: "6rem 1.5rem", background: "#F8F9FA" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-head" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Simple Process</div>
            <h2 className="display-font" style={{ fontSize: "clamp(2.5rem,4vw,4.5rem)", color: "#1A1A1A" }}>
              Four Steps to <span className="text-gradient-orange">Your Door</span>
            </h2>
          </div>

          {/* Highway image band */}
          <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", height: "300px", marginBottom: "3.5rem" }}>
            <Image
              src="/images/hiw-carrier.jpg"
              alt="Car hauler truck on the highway"
              fill
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1.5rem" }}>
            {steps.map(({ icon: Icon, step, title, body }) => (
              <div key={step} className="card" style={{ padding: "2rem", position: "relative", overflow: "hidden" }}>
                <span className="display-font" style={{ position: "absolute", top: "0.25rem", right: "1rem", fontSize: "3rem", color: "rgba(0,0,0,0.07)", userSelect: "none", lineHeight: 1 }}>{step}</span>
                <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(242,92,5,0.10)", border: "1px solid rgba(242,92,5,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <Icon size={20} style={{ color: "#F25C05" }} />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", fontWeight: 800, textTransform: "uppercase", color: "#1A1A1A", marginBottom: "0.625rem" }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#636666", lineHeight: 1.65 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-pad" style={{ padding: "6rem 1.5rem", background: "#FFFFFF", borderTop: "1px solid #EBEBEB" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-head" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>What We Ship</div>
            <h2 className="display-font" style={{ fontSize: "clamp(2.5rem,4vw,4.5rem)", color: "#1A1A1A" }}>Transport Options</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {services.map(({ title, desc, price, tag }) => (
              <div key={title} className="card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#F25C05", background: "rgba(242,92,5,0.08)", border: "1px solid rgba(242,92,5,0.15)", padding: "0.25rem 0.625rem", borderRadius: "4px" }}>{tag}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", fontWeight: 800, color: "#F25C05" }}>{price}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 800, textTransform: "uppercase", color: "#1A1A1A" }}>{title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#636666", lineHeight: 1.65, flex: 1 }}>{desc}</p>
                <Link href="/get-quote" className="btn-ghost" style={{ fontSize: "0.875rem" }}>Get a Quote</Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/services" className="btn-orange btn-orange-lg">View All Services</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-pad" style={{ padding: "6rem 1.5rem", background: "#F0F2F4", borderTop: "1px solid #E4E6E8", borderBottom: "1px solid #E4E6E8" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }} className="why-grid">
            {/* Image column */}
            <div className="why-img" style={{ position: "relative", borderRadius: "16px", overflow: "hidden", minHeight: "520px" }}>
              <Image
                src="/images/why-us-carrier.jpg"
                alt="Car hauler loaded with vehicles"
                fill
                style={{ objectFit: "cover", objectPosition: "center 35%" }}
              />
              <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(242,92,5,0.28)", borderRadius: "16px", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)" }} />
            </div>
            {/* Text + features column */}
            <div>
              <div className="section-tag">Why US AutoMovers</div>
              <h2 className="display-font" style={{ fontSize: "clamp(2.5rem,4vw,4.5rem)", color: "#1A1A1A", marginBottom: "1.5rem" }}>
                Price Certainty.<br /><span className="text-gradient-orange">Zero Surprises.</span>
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#636666", lineHeight: 1.7, marginBottom: "1.75rem" }}>
                Most auto transport companies quote low and bill high. We send one price, we charge one price. No fuel surcharges added at delivery. No bait-and-switch.
              </p>
              <Link href="/get-quote" className="btn-orange btn-orange-lg" style={{ marginBottom: "2rem" }}>Get Your Firm Price</Link>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginTop: "2rem" }}>
                {[
                  { title: "No Upfront Payment", body: "You pay nothing until a licensed carrier is assigned to your vehicle.", icon: DollarSign },
                  { title: "FMCSA Licensed Network", body: "Every carrier we use holds active FMCSA authority and full cargo insurance.", icon: Shield },
                  { title: "Real-Time Order Portal", body: "Log in anytime to see exactly where your vehicle is and what happens next.", icon: Navigation },
                  { title: "Door-to-Door Delivery", body: "We pick up at your address and deliver directly. No terminal drop-off required.", icon: MapPin },
                ].map(({ title, body, icon: Icon }) => (
                  <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1rem 1.25rem", background: "#FFFFFF", border: "1px solid #E8E8E8", borderRadius: "10px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                    <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "8px", background: "rgba(242,92,5,0.10)", border: "1px solid rgba(242,92,5,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={16} style={{ color: "#F25C05" }} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", color: "#1A1A1A", marginBottom: "0.2rem" }}>{title}</h4>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#636666", lineHeight: 1.5 }}>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad" style={{ padding: "6rem 1.5rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="section-head" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Customer Stories</div>
            <h2 className="display-font" style={{ fontSize: "clamp(2.5rem,4vw,4.5rem)", color: "#1A1A1A" }}>Delivered on Every Promise</h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ padding: "6rem 1.5rem", background: "#F8F9FA", borderTop: "1px solid #E8E8E8" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div className="section-head" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-tag" style={{ justifyContent: "center" }}>Common Questions</div>
            <h2 className="display-font" style={{ fontSize: "clamp(2.5rem,4vw,4.5rem)", color: "#1A1A1A" }}>FAQ</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {faqs.map(({ q, a }, i) => (
              <details key={i} style={{ background: "#FFFFFF", border: "1px solid #E8E8E8", borderRadius: "10px", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <summary style={{ padding: "1.25rem 1.5rem", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9375rem", color: "#1A1A1A", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", userSelect: "none" }}>
                  {q}
                  <ChevronDown size={18} style={{ color: "#F25C05", flexShrink: 0, marginLeft: "1rem" }} />
                </summary>
                <div style={{ padding: "0 1.5rem 1.25rem", fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#636666", lineHeight: 1.7 }}>{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-pad" style={{ padding: "5rem 1.5rem", background: "linear-gradient(135deg,#F25C05 0%,#D94E00 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div style={{ position: "relative", maxWidth: "700px", margin: "0 auto" }}>
          <h2 className="display-font" style={{ fontSize: "clamp(2.5rem,5vw,5rem)", color: "#fff", marginBottom: "1rem" }}>Ready to Ship Your Vehicle?</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem", lineHeight: 1.6 }}>Get a firm price in minutes. No upfront payment. No surprises at delivery.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/get-quote" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2.25rem", background: "#fff", color: "#D94E00", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "1rem", borderRadius: "6px", textDecoration: "none" }}>Get My Free Quote</Link>
            <Link href="/how-it-works" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "1rem 2.25rem", background: "rgba(255,255,255,0.12)", color: "#fff", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1rem", borderRadius: "6px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>How It Works</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .section-pad { padding: 3rem 1.25rem !important; }
          .section-head { margin-bottom: 2rem !important; }
          .why-img { min-height: unset !important; max-height: 300px; }
        }
        @media (max-width: 640px) {
          .hero-quote-bar { flex-direction: column !important; }
          .hero-quote-bar > div[style*="ArrowRight"], .hero-quote-bar > div:has(svg) { display: none !important; }
        }
        @keyframes bounce { 0%,100%{transform:translateY(0)}50%{transform:translateY(8px)} }
        details[open] summary .chevron { transform: rotate(180deg); }
      `}</style>
    </>
  );
}

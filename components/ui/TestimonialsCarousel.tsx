"use client";
import { useState } from "react";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    location: "Chicago → Los Angeles",
    text: "Shipping my car cross-country seemed daunting. US AutoMovers made it simple. Price was exactly what they quoted, no surprises. Car arrived in perfect shape.",
    rating: 5,
  },
  {
    name: "Rachel M.",
    location: "New York → Miami",
    text: "I could track my car through the portal the entire time. That peace of mind was worth everything. Driver was professional and on time.",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Phoenix → Denver",
    text: "Called three companies. US AutoMovers was the only one that gave me a firm price upfront. No haggling, no bait-and-switch. Booked immediately.",
    rating: 5,
  },
];

function TestimonialCard({ name, location, text, rating }: (typeof testimonials)[0]) {
  return (
    <div className="card" style={{ padding: "2rem" }}>
      <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} style={{ color: "#F25C05", fill: "#F25C05" }} />
        ))}
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7, color: "#4A4A4A", marginBottom: "1.5rem", fontStyle: "italic" }}>
        &ldquo;{text}&rdquo;
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", color: "#1A1A1A" }}>{name}</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "#F25C05", background: "rgba(242,92,5,0.08)", border: "1px solid rgba(242,92,5,0.15)", borderRadius: "4px", padding: "0.25rem 0.5rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
          <MapPin size={11} />{location}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  return (
    <>
      {/* Desktop: unchanged 3-column grid */}
      <div className="testimonials-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem" }}>
        {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
      </div>

      {/* Mobile: single-card carousel */}
      <div className="testimonials-mobile">
        <TestimonialCard {...testimonials[idx]} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginTop: "1.5rem" }}>
          <button
            onClick={prev}
            aria-label="Previous"
            style={{ width: "38px", height: "38px", borderRadius: "50%", border: "1px solid rgba(242,92,5,0.35)", background: "transparent", color: "#F25C05", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <ChevronLeft size={18} />
          </button>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{ width: "8px", height: "8px", borderRadius: "50%", border: "none", padding: 0, background: i === idx ? "#F25C05" : "rgba(242,92,5,0.25)", cursor: "pointer", transition: "background 0.2s" }}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            style={{ width: "38px", height: "38px", borderRadius: "50%", border: "1px solid rgba(242,92,5,0.35)", background: "transparent", color: "#F25C05", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .testimonials-mobile { display: none; }
        @media (max-width: 768px) {
          .testimonials-desktop { display: none !important; }
          .testimonials-mobile { display: block; }
        }
      `}</style>
    </>
  );
}

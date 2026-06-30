"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, ArrowRight } from "lucide-react";

export function HeroQuoteBar() {
  const [pickup, setPickup] = useState("");
  const [delivery, setDelivery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (pickup) params.set("pickup", pickup);
    if (delivery) params.set("delivery", delivery);
    router.push(`/get-quote?${params.toString()}`);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1.5px solid #E8E8E8",
    borderRadius: "8px",
    padding: "0.8125rem 0.875rem 0.8125rem 2.375rem",
    color: "#111",
    fontFamily: "var(--font-body)",
    fontSize: "0.9375rem",
    outline: "none",
    background: "#FAFAFA",
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        background: "#fff",
        borderRadius: "16px",
        padding: "1.25rem 1.5rem 1.375rem",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.05)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.07em",
          color: "#999",
          marginBottom: "0.875rem",
        }}
      >
        Get your free quote. Takes 60 seconds · No upfront payment
      </p>
      <form onSubmit={handleSubmit}>
        <div
          className="hero-quote-bar"
          style={{ display: "flex", gap: "0.625rem", alignItems: "stretch" }}
        >
          {/* Pickup */}
          <div style={{ flex: 1, position: "relative", minWidth: 0 }}>
            <MapPin
              size={15}
              style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#F25C05",
                pointerEvents: "none",
                flexShrink: 0,
              }}
            />
            <input
              type="text"
              placeholder="Pickup city, state or ZIP"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              color: "#D4D4D4",
            }}
          >
            <ArrowRight size={17} />
          </div>

          {/* Delivery */}
          <div style={{ flex: 1, position: "relative", minWidth: 0 }}>
            <MapPin
              size={15}
              style={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#A3A3A3",
                pointerEvents: "none",
                flexShrink: 0,
              }}
            />
            <input
              type="text"
              placeholder="Delivery city, state or ZIP"
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
              required
              style={inputStyle}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn-orange"
            style={{
              padding: "0 1.875rem",
              fontSize: "0.9375rem",
              fontWeight: 700,
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Get My Quote
            <ArrowRight size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}

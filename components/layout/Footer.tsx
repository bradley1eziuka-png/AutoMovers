"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1.5rem 2rem",
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <Logo size="sm" />
            <p
              style={{
                marginTop: "1.25rem",
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "#666",
                maxWidth: "260px",
              }}
            >
              Nationwide inland vehicle transport by truck. Licensed carriers,
              real-time tracking, and no upfront payment.
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <a
                href="https://fastline-logistics.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#A3A3A3",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "0.375rem 0.75rem",
                  borderRadius: "6px",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.16)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#A3A3A3";
                }}
              >
                <ExternalLink size={12} />
                Sister company: FastLine Logistics
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#fff",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { label: "Open Transport", href: "/services" },
                { label: "Enclosed Transport", href: "/services" },
                { label: "Inoperable Vehicle Shipping", href: "/services" },
                { label: "Door-to-Door Delivery", href: "/services" },
                { label: "Interstate Vehicle Shipping", href: "/services" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "#666",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#A3A3A3")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#666")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#fff",
                marginBottom: "1.25rem",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {[
                { label: "How It Works", href: "/how-it-works" },
                { label: "Get a Quote", href: "/get-quote" },
                { label: "Track Your Order", href: "/portal" },
                { label: "Customer Login", href: "/login" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "#666",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#A3A3A3")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#666")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#fff",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                <Phone size={15} style={{ color: "#F25C05", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "0.875rem", color: "#666" }}>
                  [Phone number coming soon]
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                <Mail size={15} style={{ color: "#F25C05", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "0.875rem", color: "#666" }}>
                  [Email coming soon]
                </span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem" }}>
                <MapPin size={15} style={{ color: "#F25C05", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ fontSize: "0.875rem", color: "#666" }}>
                  Nationwide Service<br />United States
                </span>
              </li>
            </ul>
            <div style={{ marginTop: "1.5rem" }}>
              <Link
                href="/get-quote"
                className="btn-orange"
                style={{ fontSize: "0.875rem", padding: "0.625rem 1.25rem" }}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.75rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#444" }}>
            © {new Date().getFullYear()} US AutoMovers. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8rem", color: "#444" }}>
            FMCSA Licensed &amp; Insured Carriers · Nationwide Vehicle Transport
          </p>
        </div>
      </div>
    </footer>
  );
}

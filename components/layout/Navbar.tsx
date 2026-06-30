"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "Services" },
  { href: "/get-quote", label: "Get a Quote" },
  { href: "/portal", label: "Track Order" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(12,12,12,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)} style={{ background: "transparent", lineHeight: 0, display: "block" }}>
          <Logo size="sm" />
        </Link>

        {/* Desktop nav */}
        <div
          className="hidden md:flex items-center gap-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                color:
                  pathname === link.href ? "#F25C05" : "rgba(255,255,255,0.75)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                pathname !== link.href &&
                ((e.target as HTMLAnchorElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                pathname !== link.href &&
                ((e.target as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.75)")
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="btn-ghost" style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.25)" }}>
            Customer Login
          </Link>
          <Link href="/get-quote" className="btn-orange" style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}>
            Get Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: "0.25rem",
          }}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            background: "#0C0C0C",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                fontFamily: "var(--font-body)",
                fontSize: "1rem",
                fontWeight: 500,
                color:
                  pathname === link.href ? "#F25C05" : "rgba(255,255,255,0.8)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Link href="/login" onClick={() => setOpen(false)} className="btn-ghost" style={{ width: "100%", justifyContent: "center", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.25)" }}>
              Customer Login
            </Link>
            <Link href="/get-quote" onClick={() => setOpen(false)} className="btn-orange" style={{ width: "100%", justifyContent: "center" }}>
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

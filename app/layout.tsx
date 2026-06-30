import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | US AutoMovers",
    default: "US AutoMovers | Nationwide Vehicle Transport by Truck",
  },
  description:
    "Ship your car anywhere in the United States. Licensed carriers, no upfront payment, real-time order tracking. Get a free quote in 60 seconds.",
  keywords: [
    "vehicle transport",
    "car shipping",
    "auto transport",
    "car transport USA",
    "nationwide vehicle shipping",
    "truck car transport",
  ],
  openGraph: {
    title: "US AutoMovers | Nationwide Vehicle Transport",
    description:
      "Licensed carriers, no upfront payment, door-to-door vehicle transport across the USA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: "68px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

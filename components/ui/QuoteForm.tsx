"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  full_name: string;
  phone: string;
  email: string;
  pickup_location: string;
  delivery_location: string;
  vehicle_year: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_condition: string;
  transport_type: string;
  timeframe: string;
}

const initialForm: FormData = {
  full_name: "",
  phone: "",
  email: "",
  pickup_location: "",
  delivery_location: "",
  vehicle_year: "",
  vehicle_make: "",
  vehicle_model: "",
  vehicle_condition: "operable",
  transport_type: "open",
  timeframe: "flexible",
};

interface QuoteFormProps {
  compact?: boolean;
  light?: boolean;
}

export function QuoteForm({ compact = false, light = false }: QuoteFormProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  if (status === "success") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1.5rem",
          textAlign: "center",
          minHeight: compact ? "auto" : "320px",
        }}
      >
        <div style={{ color: "#F25C05", marginBottom: "1rem" }}>
          <CheckCircle size={48} />
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "2rem",
            fontWeight: 800,
            textTransform: "uppercase",
            color: light ? "#1A1A1A" : "#fff",
            marginBottom: "0.75rem",
          }}
        >
          Quote Request Sent
        </h3>
        <p style={{ color: light ? "#636666" : "#A3A3A3", fontSize: "0.9375rem", maxWidth: "380px", lineHeight: 1.6 }}>
          We&apos;ll review your request and send a confirmed price to{" "}
          <strong style={{ color: light ? "#1A1A1A" : "#fff" }}>{form.email}</strong> within a few hours.
        </p>
        <p style={{ marginTop: "0.75rem", fontSize: "0.8rem", color: light ? "#8C8C8C" : "#666" }}>
          No payment required until a carrier is assigned.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = light
    ? {
        width: "100%",
        background: "#FAFAFA",
        border: "1.5px solid #E8E8E8",
        borderRadius: "8px",
        padding: "0.7rem 0.875rem",
        color: "#1A1A1A",
        fontFamily: "var(--font-body)",
        fontSize: "0.9rem",
        outline: "none",
      }
    : {
        width: "100%",
        background: "#1E1E1E",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "8px",
        padding: "0.7rem 0.875rem",
        color: "#fff",
        fontFamily: "var(--font-body)",
        fontSize: "0.9rem",
        outline: "none",
      };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-body)",
    fontSize: "0.8rem",
    fontWeight: 500,
    color: light ? "#636666" : "#A3A3A3",
    marginBottom: "0.375rem",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: compact ? "1fr 1fr" : "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "0.875rem",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
        {/* Contact row */}
        <div style={gridStyle}>
          <div>
            <label style={labelStyle}>Full Name *</label>
            <input
              className="input-field"
              type="text"
              placeholder="Your name"
              value={form.full_name}
              onChange={set("full_name")}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Phone *</label>
            <input
              className="input-field"
              type="tel"
              placeholder="Best number to reach you"
              value={form.phone}
              onChange={set("phone")}
              required
              style={inputStyle}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input
            className="input-field"
            type="email"
            placeholder="Where we'll send your quote"
            value={form.email}
            onChange={set("email")}
            required
            style={inputStyle}
          />
        </div>

        {/* Locations row */}
        <div style={gridStyle}>
          <div>
            <label style={labelStyle}>Pickup Location *</label>
            <input
              className="input-field"
              type="text"
              placeholder="e.g. Dallas, TX or 75201"
              value={form.pickup_location}
              onChange={set("pickup_location")}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Delivery Location *</label>
            <input
              className="input-field"
              type="text"
              placeholder="e.g. Miami, FL or 33101"
              value={form.delivery_location}
              onChange={set("delivery_location")}
              required
              style={inputStyle}
            />
          </div>
        </div>

        {/* Vehicle row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr", gap: "0.875rem" }}>
          <div>
            <label style={labelStyle}>Year *</label>
            <input
              className="input-field"
              type="text"
              placeholder="e.g. 2019"
              maxLength={4}
              value={form.vehicle_year}
              onChange={set("vehicle_year")}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Make *</label>
            <input
              className="input-field"
              type="text"
              placeholder="e.g. Ford, BMW"
              value={form.vehicle_make}
              onChange={set("vehicle_make")}
              required
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Model *</label>
            <input
              className="input-field"
              type="text"
              placeholder="e.g. F-150, Civic"
              value={form.vehicle_model}
              onChange={set("vehicle_model")}
              required
              style={inputStyle}
            />
          </div>
        </div>

        {/* Options row */}
        <div style={gridStyle}>
          <div>
            <label style={labelStyle}>Vehicle Condition *</label>
            <select
              className="input-field"
              value={form.vehicle_condition}
              onChange={set("vehicle_condition")}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="operable">Operable (Drives)</option>
              <option value="inoperable">Inoperable (Doesn&apos;t Drive)</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Transport Type *</label>
            <select
              className="input-field"
              value={form.transport_type}
              onChange={set("transport_type")}
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="open">Open Transport</option>
              <option value="enclosed">Enclosed Transport</option>
            </select>
          </div>
        </div>

        {/* Timeframe */}
        <div>
          <label style={labelStyle}>Preferred Timeframe *</label>
          <select
            className="input-field"
            value={form.timeframe}
            onChange={set("timeframe")}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="asap">As Soon As Possible</option>
            <option value="1-2weeks">1–2 Weeks</option>
            <option value="2-4weeks">2–4 Weeks</option>
            <option value="flexible">Flexible / Not Sure Yet</option>
          </select>
        </div>

        {/* Error */}
        {status === "error" && (
          <p style={{ fontSize: "0.875rem", color: "#EF4444", padding: "0.75rem", background: "rgba(239,68,68,0.08)", borderRadius: "8px", border: "1px solid rgba(239,68,68,0.2)" }}>
            {errorMsg}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-orange"
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "1rem",
            fontWeight: 700,
            marginTop: "0.25rem",
            opacity: status === "loading" ? 0.7 : 1,
          }}
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
              Submitting...
            </>
          ) : (
            <>
              Get My Free Quote
              <ArrowRight size={18} />
            </>
          )}
        </button>

        <p style={{ fontSize: "0.78rem", color: light ? "#8C8C8C" : "#555", textAlign: "center" }}>
          No upfront payment · Response within a few hours · FMCSA licensed carriers
        </p>
      </div>
    </form>
  );
}

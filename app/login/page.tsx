"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Loader2, LogIn, Eye, EyeOff, Package } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { createClient } from "@/lib/supabase/client";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/portal";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setStatus("error");
      setErrorMsg("Invalid email or password. Please try again.");
      return;
    }

    router.push(redirect);
    router.refresh();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#1E1E1E",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    color: "#fff",
    fontFamily: "var(--font-body)",
    fontSize: "0.9375rem",
    outline: "none",
  };

  return (
    <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div>
        <label style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 500, color: "#A3A3A3", marginBottom: "0.5rem" }}>
          Email Address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          autoComplete="email"
          style={inputStyle}
        />
      </div>

      <div>
        <label style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 500, color: "#A3A3A3", marginBottom: "0.5rem" }}>
          Password
        </label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            autoComplete="current-password"
            style={{ ...inputStyle, paddingRight: "3rem" }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#666", padding: "0.25rem" }}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {status === "error" && (
        <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", padding: "0.75rem 1rem", fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#EF4444" }}>
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-orange"
        style={{ width: "100%", padding: "0.875rem", fontSize: "1rem", fontWeight: 700, opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? (
          <><Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> Signing In...</>
        ) : (
          <><LogIn size={18} /> Sign In to Portal</>
        )}
      </button>

      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#555", textAlign: "center" }}>
        Don&apos;t have an account?{" "}
        <Link href="/get-quote" style={{ color: "#F25C05", textDecoration: "none", fontWeight: 600 }}>
          Request a Quote First
        </Link>
      </p>
    </form>
  );
}

export default function LoginPage() {
  return (
    <section style={{ minHeight: "calc(100vh - 68px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem 1.5rem", background: "#0C0C0C", position: "relative" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(242,92,5,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ width: "100%", maxWidth: "420px", position: "relative" }}>
        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
          <Link href="/"><Logo size="md" /></Link>
        </div>

        {/* Card */}
        <div style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "2.5rem", boxShadow: "0 25px 60px rgba(0,0,0,0.5)" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "rgba(242,92,5,0.12)", border: "1px solid rgba(242,92,5,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
              <Package size={22} style={{ color: "#F25C05" }} />
            </div>
            <h1 className="display-font" style={{ fontSize: "2rem", color: "#fff", marginBottom: "0.375rem" }}>Customer Portal</h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#666" }}>Sign in to track your vehicle shipment</p>
          </div>

          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>

        <p style={{ textAlign: "center", marginTop: "1.75rem", fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#444" }}>
          Need help?{" "}
          <Link href="/get-quote" style={{ color: "#F25C05", textDecoration: "none" }}>Contact us →</Link>
        </p>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}

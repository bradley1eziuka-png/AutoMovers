"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Loader2, LogIn, UserPlus, Eye, EyeOff, Package, CheckCircle } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { createClient } from "@/lib/supabase/client";

type Mode = "login" | "signup";
type Status = "idle" | "loading" | "error" | "success";

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
  boxSizing: "border-box",
};

function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/portal";

  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const switchMode = (next: Mode) => {
    setMode(next);
    setStatus("idle");
    setErrorMsg("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const supabase = createClient();

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setStatus("error");
        setErrorMsg("Invalid email or password. Please try again.");
        return;
      }
      router.push(redirect);
      router.refresh();
    } else {
      if (password !== confirmPassword) {
        setStatus("error");
        setErrorMsg("Passwords don't match.");
        return;
      }
      if (password.length < 8) {
        setStatus("error");
        setErrorMsg("Password must be at least 8 characters.");
        return;
      }
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setStatus("error");
        setErrorMsg(error.message);
        return;
      }
      if (data.session) {
        router.push(redirect);
        router.refresh();
        return;
      }
      setStatus("success");
    }
  };

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "1rem 0" }}>
        <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "rgba(5,150,105,0.12)", border: "1px solid rgba(5,150,105,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
          <CheckCircle size={24} style={{ color: "#059669" }} />
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.35rem", color: "#fff", marginBottom: "0.625rem" }}>Check Your Email</h3>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#888", lineHeight: 1.6, marginBottom: "1.5rem" }}>
          We sent a confirmation link to <strong style={{ color: "#ccc" }}>{email}</strong>. Click it to activate your account, then sign in.
        </p>
        <button
          onClick={() => switchMode("login")}
          style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#F25C05", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}
        >
          Back to Sign In →
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Tab toggle */}
      <div style={{ display: "flex", background: "rgba(255,255,255,0.05)", borderRadius: "8px", padding: "3px", marginBottom: "1.75rem" }}>
        {(["login", "signup"] as Mode[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => switchMode(m)}
            style={{
              flex: 1,
              padding: "0.5rem",
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 600,
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              transition: "background 0.15s, color 0.15s",
              background: mode === m ? "#F25C05" : "transparent",
              color: mode === m ? "#fff" : "rgba(255,255,255,0.45)",
            }}
          >
            {m === "login" ? "Sign In" : "Create Account"}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {/* Email */}
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

        {/* Password */}
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
              autoComplete={mode === "login" ? "current-password" : "new-password"}
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

        {/* Confirm password — signup only */}
        {mode === "signup" && (
          <div>
            <label style={{ display: "block", fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 500, color: "#A3A3A3", marginBottom: "0.5rem" }}>
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="new-password"
              style={inputStyle}
            />
          </div>
        )}

        {/* Error */}
        {status === "error" && (
          <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", padding: "0.75rem 1rem", fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#EF4444" }}>
            {errorMsg}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-orange"
          style={{ width: "100%", padding: "0.875rem", fontSize: "1rem", fontWeight: 700, opacity: status === "loading" ? 0.7 : 1 }}
        >
          {status === "loading" ? (
            <><Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> {mode === "login" ? "Signing In..." : "Creating Account..."}</>
          ) : mode === "login" ? (
            <><LogIn size={18} /> Sign In to Portal</>
          ) : (
            <><UserPlus size={18} /> Create Account</>
          )}
        </button>

        {mode === "signup" && (
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "#555", textAlign: "center", lineHeight: 1.5 }}>
            By creating an account you agree to our{" "}
            <Link href="/terms" style={{ color: "#F25C05", textDecoration: "none" }}>Terms of Service</Link>{" "}
            and{" "}
            <Link href="/privacy" style={{ color: "#F25C05", textDecoration: "none" }}>Privacy Policy</Link>.
          </p>
        )}
      </form>
    </>
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
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#666" }}>Sign in or create an account to track your shipment</p>
          </div>

          <Suspense fallback={null}>
            <AuthForm />
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

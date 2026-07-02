import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import {
  Truck,
  MapPin,
  Clock,
  CheckCircle,
  Package,
  LogOut,
  ArrowRight,
  Navigation,
} from "lucide-react";
import type { Order, OrderStatus } from "@/types";

const STATUS_CONFIG: Record<
  OrderStatus,
  { label: string; color: string; bg: string; border: string; icon: typeof Package }
> = {
  pending: {
    label: "Pending",
    color: "#8C8C8C",
    bg: "#F0F0F0",
    border: "#DCDCDC",
    icon: Clock,
  },
  picked_up: {
    label: "Picked Up",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.22)",
    icon: Truck,
  },
  in_transit: {
    label: "In Transit",
    color: "#F25C05",
    bg: "rgba(242,92,5,0.08)",
    border: "rgba(242,92,5,0.22)",
    icon: Navigation,
  },
  delivered: {
    label: "Delivered",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    border: "rgba(5,150,105,0.22)",
    icon: CheckCircle,
  },
};

const STATUS_STEPS: OrderStatus[] = ["pending", "picked_up", "in_transit", "delivered"];

function StatusPipeline({ current }: { current: OrderStatus }) {
  const currentIndex = STATUS_STEPS.indexOf(current);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0", marginBottom: "1.5rem" }}>
      {STATUS_STEPS.map((s, i) => {
        const cfg = STATUS_CONFIG[s];
        const Icon = cfg.icon;
        const done = i <= currentIndex;
        const active = i === currentIndex;
        const deliveredCfg = STATUS_CONFIG["delivered"];

        return (
          <div key={s} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "0 0 auto" }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: done ? (active ? cfg.bg : deliveredCfg.bg) : "#F0F0F0",
                border: `1px solid ${done ? (active ? cfg.border : deliveredCfg.border) : "#E0E0E0"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={15} style={{ color: done ? (active ? cfg.color : deliveredCfg.color) : "#CCCCCC" }} />
              </div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", marginTop: "0.375rem", fontWeight: active ? 700 : 400, color: done ? (active ? cfg.color : deliveredCfg.color) : "#BBBBBB", whiteSpace: "nowrap" }}>
                {cfg.label}
              </span>
            </div>
            {i < STATUS_STEPS.length - 1 && (
              <div style={{ flex: 1, height: "1px", background: i < currentIndex ? "rgba(5,150,105,0.3)" : "#E8E8E8", margin: "0 0.375rem", marginBottom: "1.375rem" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function OrderCard({ order }: { order: Order }) {
  const cfg = STATUS_CONFIG[order.status];
  const StatusIcon = cfg.icon;
  const date = new Date(order.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const updatedDate = new Date(order.status_updated_at).toLocaleDateString("en-US", { month: "short", day: "numeric" });

  return (
    <div style={{ background: "#FFFFFF", border: "1px solid #EBEBEB", borderRadius: "14px", padding: "1.75rem", boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem", flexWrap: "wrap", gap: "0.75rem" }}>
        <div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "#8C8C8C", marginBottom: "0.25rem" }}>
            Order #{order.order_number} · Placed {date}
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, textTransform: "uppercase", fontSize: "1.35rem", color: "#1A1A1A" }}>
            {order.vehicle_year} {order.vehicle_make} {order.vehicle_model}
          </h3>
        </div>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", background: cfg.bg, border: `1px solid ${cfg.border}`, borderRadius: "100px", padding: "0.3rem 0.75rem", fontSize: "0.8rem", fontFamily: "var(--font-body)", fontWeight: 600, color: cfg.color }}>
          <StatusIcon size={13} />
          {cfg.label}
        </span>
      </div>

      {/* Progress pipeline */}
      <StatusPipeline current={order.status} />

      {/* Route */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem", padding: "0.875rem 1rem", background: "#F8F9FA", border: "1px solid #EBEBEB", borderRadius: "8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", flex: 1 }}>
          <MapPin size={14} style={{ color: "#F25C05", flexShrink: 0 }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#4A4A4A" }}>{order.pickup_location}</span>
        </div>
        <ArrowRight size={14} style={{ color: "#CCCCCC", flexShrink: 0 }} />
        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", flex: 1, justifyContent: "flex-end" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#4A4A4A", textAlign: "right" }}>{order.delivery_location}</span>
          <MapPin size={14} style={{ color: "#059669", flexShrink: 0 }} />
        </div>
      </div>

      {/* Details row */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
        {[
          { label: "Transport", value: order.transport_type === "open" ? "Open Carrier" : "Enclosed Carrier" },
          { label: "Condition", value: order.vehicle_condition === "operable" ? "Operable" : "Inoperable" },
          { label: "Status Updated", value: updatedDate },
          ...(order.estimated_delivery ? [{ label: "Est. Delivery", value: order.estimated_delivery }] : []),
          ...(order.carrier_name ? [{ label: "Carrier", value: order.carrier_name }] : []),
        ].map(({ label, value }) => (
          <div key={label} style={{ background: "#F8F9FA", border: "1px solid #EBEBEB", borderRadius: "6px", padding: "0.5rem 0.75rem" }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "#8C8C8C", marginBottom: "0.15rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "#1A1A1A", fontWeight: 500 }}>{value}</div>
          </div>
        ))}
      </div>

      {order.notes && (
        <div style={{ marginTop: "1rem", padding: "0.75rem 1rem", background: "rgba(242,92,5,0.05)", border: "1px solid rgba(242,92,5,0.14)", borderRadius: "8px", fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "#636666", lineHeight: 1.5 }}>
          <strong style={{ color: "#F25C05", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Note from Team: </strong>
          {order.notes}
        </div>
      )}
    </div>
  );
}

export default async function PortalPage() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  const user = session!.user;

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("customer_id", user.id)
    .order("created_at", { ascending: false });

  const typedOrders = (orders ?? []) as Order[];

  return (
    <>
      {/* Dark hero header */}
      <section style={{ padding: "3rem 1.5rem 2.5rem", background: "#0C0C0C" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div className="section-tag">My Account</div>
            <h1 className="display-font" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "#fff" }}>
              Order <span className="text-gradient-orange">Portal</span>
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#A3A3A3", marginTop: "0.25rem" }}>
              Logged in as {user!.email}
            </p>
          </div>
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.5rem 1.25rem", background: "transparent",
                color: "rgba(255,255,255,0.80)", fontFamily: "var(--font-body)",
                fontWeight: 500, fontSize: "0.875rem", borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.22)", cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
            >
              <LogOut size={15} />
              Sign Out
            </button>
          </form>
        </div>
      </section>

      {/* Light body */}
      <section style={{ padding: "3rem 1.5rem 5rem", background: "#F8F9FA", minHeight: "calc(100vh - 68px - 160px)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          {typedOrders.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 1.5rem" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(242,92,5,0.08)", border: "1px solid rgba(242,92,5,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                <Package size={28} style={{ color: "#F25C05" }} />
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 800, textTransform: "uppercase", color: "#1A1A1A", marginBottom: "0.75rem" }}>
                No Orders Yet
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#636666", marginBottom: "2rem", lineHeight: 1.6 }}>
                Your shipments will appear here once an order is confirmed. Start by requesting a quote.
              </p>
              <Link href="/get-quote" className="btn-orange">
                Get a Quote
              </Link>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#8C8C8C" }}>
                {typedOrders.length} order{typedOrders.length !== 1 ? "s" : ""} in your history
              </p>
              {typedOrders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          )}

          {/* Help CTA */}
          <div style={{ marginTop: "3rem", padding: "1.5rem", background: "#FFFFFF", border: "1px solid #E8E8E8", borderRadius: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", color: "#1A1A1A", marginBottom: "0.25rem" }}>Need help with your shipment?</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "#636666" }}>Our team updates statuses manually. Contact us if you have questions.</div>
            </div>
            <Link href="/get-quote" className="btn-orange" style={{ fontSize: "0.875rem", flexShrink: 0 }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

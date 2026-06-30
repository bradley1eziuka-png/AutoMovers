import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TEAM_EMAIL = process.env.TEAM_EMAIL || "team@usautomovers.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@usautomovers.com";

function formatTimeframe(val: string) {
  const map: Record<string, string> = {
    asap: "As Soon As Possible",
    "1-2weeks": "1–2 Weeks",
    "2-4weeks": "2–4 Weeks",
    flexible: "Flexible / Not Sure Yet",
  };
  return map[val] ?? val;
}

function formatCondition(val: string) {
  return val === "operable" ? "Operable (Drives)" : "Inoperable (Doesn't Drive)";
}

function formatTransport(val: string) {
  return val === "open" ? "Open Transport" : "Enclosed Transport";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      full_name,
      phone,
      email,
      pickup_location,
      delivery_location,
      vehicle_year,
      vehicle_make,
      vehicle_model,
      vehicle_condition,
      transport_type,
      timeframe,
    } = body;

    // Basic validation
    const required = [full_name, phone, email, pickup_location, delivery_location, vehicle_year, vehicle_make, vehicle_model];
    if (required.some((v) => !v || !String(v).trim())) {
      return NextResponse.json({ error: "All required fields must be filled in." }, { status: 400 });
    }

    // Save to Supabase
    const supabase = await createClient();
    const { error: dbError } = await supabase.from("quotes").insert({
      full_name: full_name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      pickup_location: pickup_location.trim(),
      delivery_location: delivery_location.trim(),
      vehicle_year: vehicle_year.trim(),
      vehicle_make: vehicle_make.trim(),
      vehicle_model: vehicle_model.trim(),
      vehicle_condition,
      transport_type,
      timeframe,
      status: "new",
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      // Don't block email sending if DB write fails
    }

    const vehicleSummary = `${vehicle_year} ${vehicle_make} ${vehicle_model}`;
    const routeSummary = `${pickup_location} → ${delivery_location}`;

    // ---- Email to team ----
    await resend.emails.send({
      from: `US AutoMovers <${FROM_EMAIL}>`,
      to: TEAM_EMAIL,
      subject: `New Quote Request: ${vehicleSummary} · ${routeSummary}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; padding: 0;">
          <div style="background: #0C0C0C; padding: 24px 32px; border-bottom: 3px solid #F25C05;">
            <h1 style="color: #fff; font-size: 22px; margin: 0; font-weight: 800; text-transform: uppercase; letter-spacing: -0.01em;">
              New Quote Request
            </h1>
          </div>
          <div style="padding: 28px 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ["Name", full_name],
                ["Phone", phone],
                ["Email", email],
                ["Pickup", pickup_location],
                ["Delivery", delivery_location],
                ["Vehicle", vehicleSummary],
                ["Condition", formatCondition(vehicle_condition)],
                ["Transport", formatTransport(transport_type)],
                ["Timeframe", formatTimeframe(timeframe)],
              ]
                .map(
                  ([label, value]) => `
                <tr>
                  <td style="padding: 10px 12px; background: #f8f8f8; border: 1px solid #eee; font-weight: 600; font-size: 13px; color: #555; width: 140px;">${label}</td>
                  <td style="padding: 10px 12px; border: 1px solid #eee; font-size: 14px; color: #111;">${value}</td>
                </tr>`
                )
                .join("")}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #FFF7F3; border-left: 3px solid #F25C05; border-radius: 4px;">
              <p style="margin: 0; font-size: 13px; color: #666;">Reply to this email or contact the customer directly to send their quote. Remember: firm price, no fuel surcharges.</p>
            </div>
          </div>
        </div>
      `,
    });

    // ---- Confirmation email to customer ----
    await resend.emails.send({
      from: `US AutoMovers <${FROM_EMAIL}>`,
      to: email,
      replyTo: TEAM_EMAIL,
      subject: `We received your quote request for ${vehicleSummary}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; padding: 0;">
          <div style="background: #0C0C0C; padding: 24px 32px; border-bottom: 3px solid #F25C05;">
            <h1 style="color: #fff; font-size: 20px; margin: 0 0 4px; font-weight: 800; text-transform: uppercase;">
              Quote Request Received
            </h1>
            <p style="color: #999; margin: 0; font-size: 14px;">US AutoMovers · Nationwide Vehicle Transport</p>
          </div>
          <div style="padding: 28px 32px;">
            <p style="font-size: 16px; color: #111; margin: 0 0 20px;">Hi ${full_name.split(" ")[0]},</p>
            <p style="font-size: 15px; color: #444; line-height: 1.6; margin: 0 0 20px;">
              We received your request to ship your <strong>${vehicleSummary}</strong> from <strong>${pickup_location}</strong> to <strong>${delivery_location}</strong>.
            </p>
            <p style="font-size: 15px; color: #444; line-height: 1.6; margin: 0 0 24px;">
              Our team will review your request and send you a <strong>locked-in price</strong> within a few hours. No fuel surcharges. No hidden fees. One firm number.
            </p>
            <div style="background: #f8f8f8; border: 1px solid #eee; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: #999; margin: 0 0 12px; font-weight: 700;">Your Request Summary</h3>
              ${[
                ["Vehicle", vehicleSummary],
                ["Route", routeSummary],
                ["Transport", formatTransport(transport_type)],
                ["Condition", formatCondition(vehicle_condition)],
                ["Timeframe", formatTimeframe(timeframe)],
              ]
                .map(
                  ([label, value]) => `
                <div style="display: flex; justify-content: space-between; padding: 6px 0; border-bottom: 1px solid #eee; font-size: 14px;">
                  <span style="color: #999;">${label}</span>
                  <span style="color: #111; font-weight: 600;">${value}</span>
                </div>`
                )
                .join("")}
            </div>
            <div style="background: #FFF7F3; border-left: 3px solid #F25C05; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
              <p style="margin: 0; font-size: 14px; color: #555; line-height: 1.5;">
                <strong style="color: #F25C05;">No payment required.</strong> You won't be charged anything until a carrier is assigned and your pickup is confirmed.
              </p>
            </div>
            <p style="font-size: 14px; color: #777; line-height: 1.6; margin: 0 0 8px;">Questions? Simply reply to this email.</p>
            <p style="font-size: 14px; color: #777; margin: 0;">The US AutoMovers Team</p>
          </div>
          <div style="background: #f5f5f5; padding: 16px 32px; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #aaa; margin: 0; text-align: center;">
              US AutoMovers · Nationwide Vehicle Transport · FMCSA Licensed Carriers
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json(
      { error: "Failed to submit quote request. Please try again." },
      { status: 500 }
    );
  }
}

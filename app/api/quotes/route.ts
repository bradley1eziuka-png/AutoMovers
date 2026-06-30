import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

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
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json(
      { error: "Failed to submit quote request. Please try again." },
      { status: 500 }
    );
  }
}

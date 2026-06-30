export type OrderStatus = "pending" | "picked_up" | "in_transit" | "delivered";

export interface Quote {
  id: string;
  created_at: string;
  full_name: string;
  phone: string;
  email: string;
  pickup_location: string;
  delivery_location: string;
  vehicle_year: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_condition: "operable" | "inoperable";
  transport_type: "open" | "enclosed";
  timeframe: string;
  status: "new" | "quoted" | "confirmed" | "cancelled";
  notes?: string;
}

export interface Order {
  id: string;
  created_at: string;
  customer_id: string;
  quote_id?: string;
  order_number: string;
  status: OrderStatus;
  pickup_location: string;
  delivery_location: string;
  vehicle_year: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_condition: "operable" | "inoperable";
  transport_type: "open" | "enclosed";
  estimated_delivery?: string;
  carrier_name?: string;
  carrier_phone?: string;
  notes?: string;
  status_updated_at: string;
}

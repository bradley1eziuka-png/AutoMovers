-- US AutoMovers — Supabase Schema
-- Run this in the Supabase SQL editor to initialize the database.

-- ================================================================
-- QUOTES TABLE
-- Stores all incoming quote requests from the website form.
-- The team reviews these and sends manual price quotes via email.
-- ================================================================
create table if not exists public.quotes (
  id                  uuid      default gen_random_uuid() primary key,
  created_at          timestamptz default now() not null,
  full_name           text      not null,
  phone               text      not null,
  email               text      not null,
  pickup_location     text      not null,
  delivery_location   text      not null,
  vehicle_year        text      not null,
  vehicle_make        text      not null,
  vehicle_model       text      not null,
  vehicle_condition   text      not null check (vehicle_condition in ('operable', 'inoperable')),
  transport_type      text      not null check (transport_type in ('open', 'enclosed')),
  timeframe           text      not null,
  status              text      not null default 'new'
                        check (status in ('new', 'quoted', 'confirmed', 'cancelled')),
  notes               text
);

-- RLS: Only authenticated service-role can read quotes (team only)
alter table public.quotes enable row level security;

create policy "Team can read all quotes"
  on public.quotes for select
  using (auth.role() = 'service_role');

create policy "Anyone can insert a quote"
  on public.quotes for insert
  with check (true);


-- ================================================================
-- ORDERS TABLE
-- Created when a quote is accepted and carrier is assigned.
-- Customers see this in their portal.
-- Team updates status directly in Supabase dashboard.
-- ================================================================
create table if not exists public.orders (
  id                  uuid      default gen_random_uuid() primary key,
  created_at          timestamptz default now() not null,
  customer_id         uuid      not null references auth.users(id) on delete cascade,
  quote_id            uuid      references public.quotes(id),
  order_number        text      not null unique,
  status              text      not null default 'pending'
                        check (status in ('pending', 'picked_up', 'in_transit', 'delivered')),
  pickup_location     text      not null,
  delivery_location   text      not null,
  vehicle_year        text      not null,
  vehicle_make        text      not null,
  vehicle_model       text      not null,
  vehicle_condition   text      not null check (vehicle_condition in ('operable', 'inoperable')),
  transport_type      text      not null check (transport_type in ('open', 'enclosed')),
  estimated_delivery  text,
  carrier_name        text,
  carrier_phone       text,
  notes               text,
  status_updated_at   timestamptz default now() not null
);

-- RLS: Customers can only see their own orders
alter table public.orders enable row level security;

create policy "Customers can read own orders"
  on public.orders for select
  using (auth.uid() = customer_id);

-- Service role has full access (for team manual updates)
create policy "Service role full access to orders"
  on public.orders for all
  using (auth.role() = 'service_role');


-- ================================================================
-- FUNCTION: auto-update status_updated_at on status change
-- ================================================================
create or replace function public.update_status_timestamp()
returns trigger
language plpgsql
as $$
begin
  if new.status <> old.status then
    new.status_updated_at = now();
  end if;
  return new;
end;
$$;

create trigger orders_status_change
  before update on public.orders
  for each row
  execute function public.update_status_timestamp();


-- ================================================================
-- SAMPLE DATA (remove before going live)
-- ================================================================
-- insert into public.orders (customer_id, order_number, status, pickup_location, delivery_location, vehicle_year, vehicle_make, vehicle_model, vehicle_condition, transport_type)
-- values (
--   '<user-uuid-here>',
--   'USM-001',
--   'in_transit',
--   'Chicago, IL',
--   'Los Angeles, CA',
--   '2021',
--   'Toyota',
--   'Camry',
--   'operable',
--   'open'
-- );

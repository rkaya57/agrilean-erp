-- AgriLean ERP draft schema.
-- This is intentionally not a migration file yet. Apply only after a Supabase project is connected and reviewed.

create extension if not exists pgcrypto;

create table if not exists public.farms (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  city text,
  country_code text not null default 'TR',
  created_at timestamptz not null default now()
);

create table if not exists public.farm_members (
  farm_id uuid not null references public.farms(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role text not null check (role in ('owner','manager','worker')),
  created_at timestamptz not null default now(),
  primary key (farm_id, user_id)
);

create table if not exists public.rooms (
  id uuid primary key default gen_random_uuid(),
  farm_id uuid not null references public.farms(id) on delete cascade,
  name text not null,
  room_type text not null,
  target_temperature_min numeric,
  target_temperature_max numeric,
  target_humidity_min numeric,
  target_humidity_max numeric,
  target_co2_max numeric,
  created_at timestamptz not null default now()
);

create table if not exists public.batches (
  id uuid primary key default gen_random_uuid(),
  farm_id uuid not null references public.farms(id) on delete cascade,
  room_id uuid references public.rooms(id) on delete set null,
  batch_code text not null,
  strain text,
  status text not null check (status in ('incubation','fruiting','harvest','completed','discarded')),
  substrate_kg numeric not null default 0 check (substrate_kg >= 0),
  started_at date not null,
  completed_at date,
  notes text,
  created_at timestamptz not null default now(),
  unique (farm_id, batch_code)
);

create table if not exists public.harvests (
  id uuid primary key default gen_random_uuid(),
  farm_id uuid not null references public.farms(id) on delete cascade,
  batch_id uuid not null references public.batches(id) on delete cascade,
  harvested_at timestamptz not null default now(),
  quality_grade text,
  quantity_kg numeric not null check (quantity_kg > 0),
  unit_sale_price numeric check (unit_sale_price >= 0),
  created_at timestamptz not null default now()
);

create table if not exists public.expenses (
  id uuid primary key default gen_random_uuid(),
  farm_id uuid not null references public.farms(id) on delete cascade,
  batch_id uuid references public.batches(id) on delete set null,
  category text not null,
  amount numeric not null check (amount >= 0),
  occurred_on date not null default current_date,
  note text,
  created_at timestamptz not null default now()
);

create table if not exists public.waste_events (
  id uuid primary key default gen_random_uuid(),
  farm_id uuid not null references public.farms(id) on delete cascade,
  batch_id uuid not null references public.batches(id) on delete cascade,
  reason text not null,
  quantity_kg numeric not null check (quantity_kg >= 0),
  occurred_at timestamptz not null default now(),
  note text
);

create table if not exists public.sensor_readings (
  id bigint generated always as identity primary key,
  farm_id uuid not null references public.farms(id) on delete cascade,
  room_id uuid not null references public.rooms(id) on delete cascade,
  recorded_at timestamptz not null default now(),
  temperature_c numeric,
  humidity_percent numeric,
  co2_ppm numeric
);

alter table public.farms enable row level security;
alter table public.farm_members enable row level security;
alter table public.rooms enable row level security;
alter table public.batches enable row level security;
alter table public.harvests enable row level security;
alter table public.expenses enable row level security;
alter table public.waste_events enable row level security;
alter table public.sensor_readings enable row level security;

create policy "members can read their farms" on public.farms for select to authenticated
using (exists (select 1 from public.farm_members m where m.farm_id = farms.id and m.user_id = (select auth.uid())));

create policy "members can read farm memberships" on public.farm_members for select to authenticated
using (user_id = (select auth.uid()) or exists (select 1 from public.farm_members self where self.farm_id = farm_members.farm_id and self.user_id = (select auth.uid())));

create policy "members can read rooms" on public.rooms for select to authenticated
using (exists (select 1 from public.farm_members m where m.farm_id = rooms.farm_id and m.user_id = (select auth.uid())));

create policy "members can read batches" on public.batches for select to authenticated
using (exists (select 1 from public.farm_members m where m.farm_id = batches.farm_id and m.user_id = (select auth.uid())));

create policy "members can read harvests" on public.harvests for select to authenticated
using (exists (select 1 from public.farm_members m where m.farm_id = harvests.farm_id and m.user_id = (select auth.uid())));

create policy "members can read expenses" on public.expenses for select to authenticated
using (exists (select 1 from public.farm_members m where m.farm_id = expenses.farm_id and m.user_id = (select auth.uid())));

create policy "members can read waste" on public.waste_events for select to authenticated
using (exists (select 1 from public.farm_members m where m.farm_id = waste_events.farm_id and m.user_id = (select auth.uid())));

create policy "members can read sensor data" on public.sensor_readings for select to authenticated
using (exists (select 1 from public.farm_members m where m.farm_id = sensor_readings.farm_id and m.user_id = (select auth.uid())));

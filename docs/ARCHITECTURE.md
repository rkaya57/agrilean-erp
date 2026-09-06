# AgriLean ERP — MVP Architecture

## Product boundary

The first vertical is oyster mushroom production. The MVP should answer four operational questions:

1. Which batch is at which stage?
2. Which room or process step is causing waste?
3. What is the real cost per saleable kilogram?
4. What happened to a product lot from production through harvest?

## Application

- Next.js 16 / React 19 / TypeScript
- App Router
- Server Components by default; Client Components only for interaction-heavy flows
- Responsive desktop/tablet/mobile layout

## Data layer (planned)

Supabase/Postgres is the target persistence layer. The draft schema lives in `supabase/schema.sql` and deliberately enables RLS for every public table. It is not yet an applied migration.

Core entities:

`farms -> farm_members -> rooms -> batches -> harvests / expenses / waste_events / sensor_readings`

## MVP sequence

1. UI foundation and operating model
2. Supabase project connection + authenticated tenant model
3. Batch create/edit/archive workflow
4. Harvest + waste + expense entry
5. Cost and yield calculations
6. QR batch traceability
7. Reporting/export
8. Sensor ingestion API

## Authorization model

Every business row belongs to a `farm_id`. Access is granted through `farm_members`; roles are `owner`, `manager`, and `worker`. UI roles are not trusted for authorization — database RLS remains the source of truth.

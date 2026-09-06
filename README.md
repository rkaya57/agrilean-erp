# AgriLean ERP

AgriLean ERP is a lightweight production management system for niche agriculture operations, starting with oyster mushroom farms.

## MVP focus

- Batch lifecycle tracking
- Production room monitoring
- Harvest records
- Waste/fire analysis
- Batch-level cost accounting
- Inventory overview
- QR-ready traceability
- Operational reports

## Stack

- Next.js 16
- React 19
- TypeScript
- Supabase/Postgres planned for persistence and authentication

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run build
```

## Database

`supabase/schema.sql` contains the draft multi-tenant data model and RLS baseline. It is intentionally not an applied migration yet; it will be converted into a reviewed migration when a Supabase project is connected.

See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the implementation plan.

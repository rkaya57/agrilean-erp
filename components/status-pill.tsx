import type { BatchStatus } from "@/lib/types";

const classes: Record<BatchStatus, string> = {
  "İnkübasyon": "status status-blue",
  "Meyveleme": "status status-purple",
  "Hasat": "status status-green",
  "Tamamlandı": "status status-neutral",
};

export function StatusPill({ status }: { status: BatchStatus }) {
  return <span className={classes[status]}>{status}</span>;
}

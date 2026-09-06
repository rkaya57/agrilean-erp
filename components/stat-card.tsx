import type { ReactNode } from "react";

export function StatCard({ label, value, detail, tone = "default" }: { label: string; value: string; detail: ReactNode; tone?: "default" | "warning" }) {
  return (
    <article className={`stat-card ${tone === "warning" ? "stat-card-warning" : ""}`}>
      <span className="stat-label">{label}</span>
      <strong className="stat-value">{value}</strong>
      <span className="stat-detail">{detail}</span>
    </article>
  );
}

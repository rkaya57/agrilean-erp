import Link from "next/link";
import type { ReactNode } from "react";
import { BoxIcon, ChartIcon, GridIcon, HarvestIcon, LayersIcon, RoomIcon } from "@/components/icons";

const nav = [
  { href: "/", label: "Genel Bakış", Icon: GridIcon },
  { href: "/batches", label: "Partiler", Icon: LayersIcon },
  { href: "/rooms", label: "Odalar", Icon: RoomIcon },
  { href: "/harvests", label: "Hasat", Icon: HarvestIcon },
  { href: "/inventory", label: "Stok", Icon: BoxIcon },
  { href: "/reports", label: "Raporlar", Icon: ChartIcon },
];

export function AppShell({ children, active }: { children: ReactNode; active: string }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link className="brand" href="/" aria-label="AgriLean ERP ana sayfa">
          <span className="brand-mark">A</span>
          <span><strong>AgriLean</strong><small>Üretim ERP</small></span>
        </Link>
        <nav className="nav-list" aria-label="Ana navigasyon">
          {nav.map(({ href, label, Icon }) => (
            <Link key={href} href={href} className={`nav-item ${active === href ? "nav-item-active" : ""}`}>
              <Icon className="nav-icon" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="sidebar-foot">
          <div className="farm-avatar">GK</div>
          <div><strong>Güneş Çiftliği</strong><small>Sinop · TR</small></div>
        </div>
      </aside>
      <div className="content-column">
        <header className="topbar">
          <div><span className="mobile-brand">AgriLean</span></div>
          <div className="topbar-user"><span className="live-dot" /> Sistem aktif <span className="user-circle">RK</span></div>
        </header>
        <main className="page">{children}</main>
      </div>
    </div>
  );
}

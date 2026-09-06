import Link from "next/link";
import { AlertIcon, PlusIcon } from "@/components/icons";
import { AppShell } from "@/components/app-shell";
import { StatCard } from "@/components/stat-card";
import { StatusPill } from "@/components/status-pill";
import { batches, rooms } from "@/lib/demo-data";

export default function DashboardPage() {
  return (
    <AppShell active="/">
      <section className="page-heading">
        <div><h1>Üretimin bugünkü resmi</h1><p>6 Eylül 2026 · Pazar</p></div>
        <Link href="/batches" className="primary-button"><PlusIcon /> Yeni parti</Link>
      </section>

      <section className="stats-grid" aria-label="Temel performans göstergeleri">
        <StatCard label="Aktif parti" value="14" detail={<><b>+2</b> bu hafta</>} />
        <StatCard label="Bugün tahmini hasat" value="184 kg" detail="3 parti hasada hazır" />
        <StatCard label="7 günlük fire" value="%6,4" detail={<><em>Hedef: &lt;%4</em></>} tone="warning" />
        <StatCard label="Ortalama maliyet" value="47,30 ₺/kg" detail={<><b>−%3,1</b> geçen aya göre</>} />
      </section>

      <section className="alert-panel">
        <div className="alert-icon"><AlertIcon /></div>
        <div><strong>Oda 3’te fire oranı yükseliyor</strong><p>Son dört partide ortalama fire %11,8. Diğer odaların ortalaması %4,2.</p></div>
        <Link href="/rooms">İncele →</Link>
      </section>

      <div className="dashboard-grid">
        <section className="panel panel-wide">
          <div className="panel-heading"><div><h2>Aktif üretim partileri</h2><p>Son hareketlere göre sıralı</p></div><Link href="/batches">Tümünü gör</Link></div>
          <div className="table-wrap">
            <table>
              <thead><tr><th>Parti</th><th>Oda</th><th>Aşama</th><th>Fire</th><th>Durum</th></tr></thead>
              <tbody>
                {batches.slice(0, 3).map((batch) => (
                  <tr key={batch.id}><td><strong>{batch.id}</strong><small>{batch.strain}</small></td><td>{batch.room}</td><td>{batch.stageDay}</td><td className={batch.wasteRate > 5 ? "danger-text" : ""}>%{batch.wasteRate.toLocaleString("tr-TR")}</td><td><StatusPill status={batch.status} /></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <div className="panel-heading"><div><h2>Oda durumu</h2><p>Son manuel/sensör ölçümü</p></div><Link href="/rooms">Detay</Link></div>
          <div className="room-list">
            {rooms.map((room) => (
              <div className="room-row" key={room.id}><span className={`room-health ${room.health === "Dikkat" ? "room-health-warning" : ""}`} /><div><strong>{room.name}</strong><small>{room.temperature}°C · %{room.humidity} nem</small></div><span>{room.activeBatches} parti</span></div>
            ))}
          </div>
        </section>
      </div>

      <section className="panel margin-top">
        <div className="panel-heading"><div><h2>Bu ayın maliyet görünümü</h2><p>Üretim girdilerinin yaklaşık dağılımı</p></div><strong className="panel-total">186.400 ₺</strong></div>
        <div className="cost-bars">
          {[["Substrat", 34, "63.376 ₺"], ["Misel", 26, "48.464 ₺"], ["Enerji", 19, "35.416 ₺"], ["İşçilik", 13, "24.232 ₺"], ["Diğer", 8, "14.912 ₺"]].map(([label, pct, amount]) => (
            <div className="cost-row" key={String(label)}><span>{label}</span><div className="bar"><i style={{ width: `${pct}%` }} /></div><strong>{amount}</strong></div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

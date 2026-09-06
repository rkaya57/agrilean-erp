import { AppShell } from "@/components/app-shell";
import { PlusIcon } from "@/components/icons";
import { StatusPill } from "@/components/status-pill";
import { batches } from "@/lib/demo-data";

export default function BatchesPage() {
  return <AppShell active="/batches">
    <section className="page-heading"><div><h1>Üretim partileri</h1><p>Parti bazlı verim, fire ve maliyet takibi</p></div><button className="primary-button" type="button"><PlusIcon /> Yeni parti</button></section>
    <section className="panel">
      <div className="toolbar"><input className="search-input" placeholder="Parti kodu veya tür ara…" aria-label="Parti ara"/><select aria-label="Durum filtresi"><option>Tüm durumlar</option><option>İnkübasyon</option><option>Meyveleme</option><option>Hasat</option></select></div>
      <div className="table-wrap"><table><thead><tr><th>Parti</th><th>Başlangıç</th><th>Oda</th><th>Substrat</th><th>Hasat</th><th>Fire</th><th>Maliyet</th><th>Durum</th></tr></thead><tbody>{batches.map(batch => <tr key={batch.id}><td><strong>{batch.id}</strong><small>{batch.strain}</small></td><td>{batch.startedAt}</td><td>{batch.room}</td><td>{batch.substrateKg} kg</td><td>{batch.harvestKg} kg</td><td className={batch.wasteRate > 5 ? "danger-text" : ""}>%{batch.wasteRate}</td><td>{batch.unitCost.toLocaleString("tr-TR")} ₺/kg</td><td><StatusPill status={batch.status}/></td></tr>)}</tbody></table></div>
    </section>
  </AppShell>;
}

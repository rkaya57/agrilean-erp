import { AppShell } from "@/components/app-shell";

const harvests = [
  ["06 Eyl · 07:20", "MNT-2026-0091", "1. kalite", "62,4 kg", "5.304 ₺"],
  ["05 Eyl · 16:10", "MNT-2026-0094", "1. kalite", "41,8 kg", "3.553 ₺"],
  ["05 Eyl · 08:05", "MNT-2026-0091", "2. kalite", "27,2 kg", "1.768 ₺"],
  ["04 Eyl · 15:30", "MNT-2026-0089", "1. kalite", "55,1 kg", "4.684 ₺"],
];

export default function HarvestsPage() {
  return <AppShell active="/harvests"><section className="page-heading"><div><h1>Hasat kayıtları</h1><p>Kalite sınıfı, miktar ve tahmini satış değeri</p></div><button className="primary-button">Hasat gir</button></section><section className="stats-grid compact"><article className="stat-card"><span className="stat-label">Bugün</span><strong className="stat-value">104,2 kg</strong><span className="stat-detail">2 kayıt</span></article><article className="stat-card"><span className="stat-label">Bu hafta</span><strong className="stat-value">684 kg</strong><span className="stat-detail">Hedefin %91’i</span></article><article className="stat-card"><span className="stat-label">1. kalite oranı</span><strong className="stat-value">%84</strong><span className="stat-detail">+%2,4 geçen haftaya göre</span></article></section><section className="panel"><div className="table-wrap"><table><thead><tr><th>Zaman</th><th>Parti</th><th>Kalite</th><th>Miktar</th><th>Tahmini değer</th></tr></thead><tbody>{harvests.map(row => <tr key={row.join("-")}>{row.map((cell, index) => <td key={cell}>{index === 1 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div></section></AppShell>;
}

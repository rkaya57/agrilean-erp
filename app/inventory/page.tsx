import { AppShell } from "@/components/app-shell";

const inventory = [
  ["Misel · Grey Oyster", "kg", "84", "30", "Yeterli"],
  ["Buğday samanı", "kg", "2.480", "1.000", "Yeterli"],
  ["Pelet", "kg", "310", "500", "Sipariş ver"],
  ["18×25 mantar poşeti", "adet", "1.240", "700", "Yeterli"],
  ["500 g kraft kutu", "adet", "360", "500", "Sipariş ver"],
];

export default function InventoryPage() {
  return <AppShell active="/inventory"><section className="page-heading"><div><h1>Stok yönetimi</h1><p>Üretim girdileri ve kritik stok seviyeleri</p></div><button className="primary-button">Stok hareketi</button></section><section className="panel"><div className="table-wrap"><table><thead><tr><th>Malzeme</th><th>Birim</th><th>Mevcut</th><th>Min. seviye</th><th>Durum</th></tr></thead><tbody>{inventory.map(row => <tr key={row[0]}><td><strong>{row[0]}</strong></td><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td><td><span className={row[4] === "Sipariş ver" ? "status status-orange" : "status status-green"}>{row[4]}</span></td></tr>)}</tbody></table></div></section></AppShell>;
}

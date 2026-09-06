import { AppShell } from "@/components/app-shell";
import { rooms } from "@/lib/demo-data";

export default function RoomsPage() {
  return <AppShell active="/rooms"><section className="page-heading"><div><h1>Üretim odaları</h1><p>İklim koşulları ve aktif parti yoğunluğu</p></div></section><section className="room-grid">{rooms.map(room => <article className="room-card" key={room.id}><div className="room-card-top"><div><small>{room.id}</small><h2>{room.name}</h2></div><span className={`health-badge ${room.health === "Dikkat" ? "health-warning" : ""}`}>{room.health}</span></div><p>{room.phase}</p><div className="metric-trio"><div><span>Sıcaklık</span><strong>{room.temperature}°C</strong></div><div><span>Nem</span><strong>%{room.humidity}</strong></div><div><span>CO₂</span><strong>{room.co2}</strong><small> ppm</small></div></div><div className="room-card-foot"><span>Aktif parti</span><strong>{room.activeBatches}</strong></div></article>)}</section></AppShell>;
}

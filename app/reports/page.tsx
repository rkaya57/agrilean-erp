import { AppShell } from "@/components/app-shell";

const reports = [
  ["Parti performans raporu", "Verim, fire, hasat dalgaları ve maliyetleri parti bazında karşılaştırır."],
  ["Fire analizi", "Fire nedenlerini oda, reçete ve tedarikçi kırılımında gösterir."],
  ["Aylık üretim özeti", "Üretim, hasat, stok tüketimi ve temel finansal göstergeleri özetler."],
  ["Girdi kullanım raporu", "Misel, substrat, ambalaj ve diğer girdilerin parti bazlı kullanımını döker."],
  ["İzlenebilirlik dökümü", "QR/parti kimliği üzerinden üretimden paketlemeye kayıt zinciri oluşturur."],
];

export default function ReportsPage() {
  return <AppShell active="/reports"><section className="page-heading"><div><h1>Raporlar</h1><p>Operasyon, maliyet ve izlenebilirlik çıktıları</p></div></section><section className="report-list">{reports.map(([title, desc]) => <article className="report-row" key={title}><div><h2>{title}</h2><p>{desc}</p></div><button className="secondary-button">Oluştur</button></article>)}</section></AppShell>;
}

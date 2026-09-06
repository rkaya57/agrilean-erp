import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgriLean ERP",
  description: "Niş tarımsal üretim için yalın operasyon ve maliyet yönetimi.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}

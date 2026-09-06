import type { Batch, Room } from "@/lib/types";

export const batches: Batch[] = [
  { id: "MNT-2026-0098", strain: "Pleurotus ostreatus", room: "Meyveleme 2", startedAt: "06 Eyl 2026", stageDay: "8 / 14", status: "İnkübasyon", substrateKg: 1000, harvestKg: 0, wasteRate: 0.8, unitCost: 21.85 },
  { id: "MNT-2026-0094", strain: "Grey Oyster", room: "Meyveleme 1", startedAt: "31 Ağu 2026", stageDay: "7 / 10", status: "Meyveleme", substrateKg: 850, harvestKg: 112, wasteRate: 3.2, unitCost: 49.6 },
  { id: "MNT-2026-0091", strain: "Pearl Oyster", room: "Meyveleme 3", startedAt: "26 Ağu 2026", stageDay: "2. flush", status: "Hasat", substrateKg: 920, harvestKg: 244, wasteRate: 6.1, unitCost: 53.2 },
  { id: "MNT-2026-0087", strain: "Grey Oyster", room: "Meyveleme 2", startedAt: "19 Ağu 2026", stageDay: "Kapandı", status: "Tamamlandı", substrateKg: 1100, harvestKg: 421, wasteRate: 4.0, unitCost: 47.1 }
];

export const rooms: Room[] = [
  { id: "R-01", name: "İnkübasyon 1", phase: "İnkübasyon", temperature: 24.1, humidity: 78, co2: 1850, activeBatches: 4, health: "Normal" },
  { id: "R-02", name: "Meyveleme 1", phase: "Meyveleme", temperature: 17.8, humidity: 89, co2: 740, activeBatches: 3, health: "Normal" },
  { id: "R-03", name: "Meyveleme 2", phase: "Meyveleme", temperature: 18.2, humidity: 86, co2: 810, activeBatches: 4, health: "Normal" },
  { id: "R-04", name: "Meyveleme 3", phase: "Meyveleme", temperature: 21.1, humidity: 72, co2: 1080, activeBatches: 3, health: "Dikkat" }
];

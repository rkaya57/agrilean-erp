export type BatchStatus = "İnkübasyon" | "Meyveleme" | "Hasat" | "Tamamlandı";

export interface Batch {
  id: string;
  strain: string;
  room: string;
  startedAt: string;
  stageDay: string;
  status: BatchStatus;
  substrateKg: number;
  harvestKg: number;
  wasteRate: number;
  unitCost: number;
}

export interface Room {
  id: string;
  name: string;
  phase: string;
  temperature: number;
  humidity: number;
  co2: number;
  activeBatches: number;
  health: "Normal" | "Dikkat";
}

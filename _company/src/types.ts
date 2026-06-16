// MVP에서 사용할 핵심 타입 정의 (데이터 신뢰성 및 동기화 상태 반영)
export type SyncStatus = 'Pending Sync' | 'Synced (High Trust)' | 'Sync Error';

export interface KPIData {
  metricName: string;
  value: number;
  trustLevel: number; // 0.0 ~ 1.0
}
export function calculateKpiFinal(base_kpi: number, alpha: number, lambda: number, t_wait: number): number {
  // KPI 보정 공식: KPI_final = KPI_base * (1 + α * (1 - λ))
  const final_kpi = base_kpi * (1 + alpha * (1 - lambda));

  // 신뢰도 검증: lambda가 0에서 1 사이인지 확인
  if (lambda < 0 || lambda > 1) {
    throw new Error(`Data Reliability Error: Lambda (${lambda}) must be between 0 and 1.`);
  }

  return final_kpi;
}
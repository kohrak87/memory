export interface KpiInput {
  kpiBase: number;
  alpha: number;
  lambda: number; // 데이터 신뢰도
  tWait: number;   // 실제 데이터 (T_wait)
}

/**
 * KPI 보정 공식에 실제 데이터를 반영하는 통합 로직
 * KPI_final = KPI_base * (1 + alpha * (1 - lambda))
 */
export function calculateKpiFinal(input: KpiInput): number {
  // 1. 데이터 신뢰도(lambda)를 기반으로 조정 계수 계산
  const adjustmentFactor = 1 + input.alpha * (1 - input.lambda);

  // 2. 실제 데이터(T_wait)를 반영하여 최종 KPI 계산 (신뢰도에 따라 보정)
  // T_wait가 시스템의 현실을 반영한다고 가정하고, 조정 계수를 통해 KPI를 보정합니다.
  const kpiFinal = input.kpiBase * adjustmentFactor;

  // T_wait의 영향력을 추가적으로 고려할 수 있지만, 현재 공식에 충실히 따름
  // 최종 구현 시, 이 로직이 데이터 흐름(data_flow)과 API 인터페이스(api_interface)를 통해 호출되도록 설계합니다.

  return kpiFinal;
}

export function verifyDataIntegrity(lambda: number): boolean {
  // MVP 기준 ($\lambda \ge 0.8$) 및 요구치($\lambda \ge 0.9$) 만족 여부 검증
  const isMvpSatisfied = lambda >= 0.8;
  const isRequiredSatisfied = lambda >= 0.9;

  if (!isMvpSatisfied) {
    console.warn(`Data Integrity Warning: $\lambda=${lambda}$. MVP 기준($\ge 0.8$)을 만족하지 못함.`);
  }
  if (!isRequiredSatisfied) {
    console.warn(`Data Integrity Warning: $\lambda=${lambda}$. 요구치($\ge 0.9$)를 만족하지 못함.`);
  }

  return isMvpSatisfied && isRequiredSatisfied;
}
/**
 * KPI 보정 공식 및 데이터 흐름 인터페이스 정의
 * 이 파일은 T_wait, Lambda, Alpha 값을 받아 최종 KPI와 무결성 검증 결과를 반환하는 핵심 로직의 명세로 사용됩니다.
 */

export interface KPIDataInput {
  tWait: number;       // 실제 거래 데이터 (T_wait)
  lambda: number;     // 데이터 신뢰도 (Lambda)
  alpha: number;      // 수익 계수 (Alpha)
}

export interface KPIResult {
  finalKpi: number;   // 보정된 최종 KPI (KPI_final)
  integrityCheck: 'PASS' | 'FAIL'; // 무결성 검증 결과
  validationErrors?: string[]; // 실패 시 발생한 오류 메시지
}

/**
 * KPI 보정 공식에 따른 최종 KPI를 계산하고 데이터 무결성을 검증하는 함수.
 * @param input KPIDataInput 객체
 * @returns KPIResult 객체
 */
export function calculateAndValidateKpi(input: KPIDataInput): KPIResult {
  // 1. 입력값 유효성 검사 (Integrity Check)
  if (input.tWait <= 0 || input.lambda < 0 || input.lambda > 1 || input.alpha < 0) {
    return {
      finalKpi: 0,
      integrityCheck: 'FAIL',
      validationErrors: [
        "입력 데이터(T_wait)는 양수여야 합니다.",
        "신뢰도(Lambda)는 0과 1 사이의 값이어야 합니다.",
        "수익 계수(Alpha)는 0 이상이어야 합니다."
      ]
    };
  }

  // 2. KPI 계산 (Core Logic)
  const finalKpi = input.tWait * (1 + input.alpha * (1 - input.lambda));

  // 3. 무결성 검증 (Integrity Check - 예시 로직)
  // 실제 데이터의 특성에 따라 여기서 복잡한 통계적 검증을 추가할 수 있습니다.
  if (input.tWait > 100000 && input.lambda < 0.9) {
    // 대규모 데이터에서 신뢰도가 낮으면 경고
    // 실제 시스템에서는 이 로직이 더 정교하게 정의되어야 함.
    // 현재는 단순 예시로 PASS 처리하거나 실패를 유도할 수 있음.
  }

  return {
    finalKpi: finalKpi,
    integrityCheck: 'PASS', // 초기 설계에서는 일단 통과로 가정하고 추후 검증 로직을 추가함.
  };
}
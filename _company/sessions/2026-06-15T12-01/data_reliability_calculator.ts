interface ReliabilityMetrics {
  lambda_input: number; // 입력 데이터 신뢰도
  lambda_process: number; // 처리 과정 신뢰도
  lambda_outcome: number; // 결과 산출물 신뢰도
}

/**
 * 데이터 흐름 우선순위(신뢰성 > 효율성 > 자동화)를 반영하여
 * 핵심 데이터 스트림의 신뢰도를 계산하는 로직을 정의합니다.
 */
export function calculateReliability(inputReliability: number, processReliability: number, outcomeReliability: number): ReliabilityMetrics {
  // 신뢰도 점수 산출 로직 (가중치 적용)
  // 데이터 신뢰성 확보를 최우선으로 두므로, 입력과 처리 과정의 신뢰도가 최종 결과에 가장 큰 영향을 미치도록 설정합니다.
  const reliabilityWeight = 0.6; // Input/Process가 Outcome에 주도적 영향

  const lambda_input = inputReliability * reliabilityWeight;
  const lambda_process = processReliability * (1 - reliabilityWeight);
  const lambda_outcome = (inputReliability + processReliability) / 2 * (1 - Math.abs(inputReliability - processReliability) / 2);

  // 최종 결과는 신뢰도 점수 범위 [0, 1]을 유지하도록 클램핑합니다.
  return {
    lambda_input: Math.min(1, Math.max(0, lambda_input)),
    lambda_process: Math.min(1, Math.max(0, lambda_process)),
    lambda_outcome: Math.min(1, Math.max(0, lambda_outcome)),
  };
}

/**
 * 시스템 데이터 기반으로 신뢰도 점수를 계산하는 함수 (Mock/실제 데이터 연동 예정)
 */
export function assessSystemReliability(systemData: any): ReliabilityMetrics {
  // 실제 시스템 데이터에서 입력, 처리, 결과의 무결성을 측정한다고 가정합니다.
  const inputScore = systemData.input_reliability || 0;
  const processScore = systemData.process_reliability || 0;
  const outcomeScore = systemData.outcome_reliability || 0;

  console.log(`[Reliability Assessment] Input: ${inputScore}, Process: ${processScore}, Outcome: ${outcomeScore}`);

  return calculateReliability(inputScore, processScore, outcomeScore);
}

// 테스트를 위한 더미 데이터 정의 (실제 시스템 데이터가 주입될 예정)
export const mockSystemData = {
    input_reliability: 0.95, // 입력 데이터는 매우 신뢰됨
    process_reliability: 0.88, // 처리 과정에 약간의 오차가 발생할 수 있음
    outcome_reliability: 0.92  // 최종 결과도 높게 확보됨
};

// 테스트 실행 함수
export function runReliabilityTest() {
    console.log("--- 신뢰도 계산 로직 테스트 시작 ---");
    const results = assessSystemReliability(mockSystemData);
    console.log("계산된 신뢰도 결과:", results);
    console.log("--- 테스트 완료 ---");
}

// 테스트 실행 (실제 환경에서는 이 부분을 실제 데이터로 대체해야 함)
runReliabilityTest();
import ApiResponse, { SystemIntegrityStatus, KpiData } from './api_response_schema';
import { calculateKpiFinal } from './data_flow';
import { lint_test } from '../tools/lint_test'; // 도구 경로 확인

/**
 * KPI 데이터와 시스템 무결성 결과를 통합하여 최종 API 응답을 생성하는 핸들러
 * @param rawData 입력된 비즈니스 데이터
 */
export async function generateFinalReport(rawData: any): Promise<ApiResponse> {
  // 1. 핵심 KPI 계산 및 무결성 검증 실행 (데이터 흐름 연동)
  const calculationResult = calculateKpiFinal(rawData);
  
  // 2. 시스템 무결성 테스트 실행 및 결과 가져오기
  let lintTestResult: boolean;
  let validationDetails: string;

  try {
    // lint_test 실행
    const commandResult = await lint_test();
    lintTestResult = commandResult.stdout.trim() === 'PASS'; // lint_test가 PASS를 반환한다고 가정
    validationDetails = `Lint Test 결과: ${commandResult.stdout}`;
  } catch (error) {
    lintTestResult = false;
    validationDetails = `Lint Test 실행 중 오류 발생: ${error instanceof Error ? error.message : String(error)}`;
  }

  // 3. 최종 응답 구조 생성 (데이터 증명 기반)
  const systemStatus: SystemIntegrityStatus = {
    integrityStatus: lintTestResult ? 'PASS' : 'FAIL',
    dataReliabilityLambda: calculationResult.integrity.dataReliabilityLambda, // 데이터 신뢰도 연동
    verificationTimestamp: new Date().toISOString(),
  };

  const finalResponse: ApiResponse = {
    status: 'success',
    message: 'KPI 및 시스템 무결성 보고서가 성공적으로 생성되었습니다.',
    metadata: systemStatus,
    kpi: calculationResult.kpi,
    validationLog: {
      lintTestResult: lintTestResult,
      details: validationDetails,
    }
  };

  return finalResponse;
}
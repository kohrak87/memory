/**
 * KPI 및 시스템 무결성 연동을 위한 API 응답 스키마 정의
 */

export interface SystemIntegrityStatus {
  // 시스템 전체의 무결성 상태 (lint_test 결과 반영)
  integrityStatus: 'PASS' | 'FAIL' | 'WARNING';
  // 데이터 흐름의 신뢰도 지표 ($\lambda$)
  dataReliabilityLambda: number; 
  // 검증이 수행된 타임스탬프
  verificationTimestamp: string;
}

export interface KpiData {
  // 핵심 비즈니스 KPI 데이터
  totalRevenue: number;
  weightedMargin: number; // $Margin_{Weighted}$ 기반
  cacMetric: number;      // CAC 목표치 관련 지표
}

export interface ApiResponse {
  status: 'success' | 'error';
  message: string;
  metadata: SystemIntegrityStatus;
  kpi: KpiData;
  // 데이터 증명을 위한 상세 검증 로그 (선택적)
  validationLog?: {
    lintTestResult: boolean;
    details: string;
  };
}

export default ApiResponse;
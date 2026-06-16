# Figma 프로토타입 구현 스펙: KPI 대시보드 (Phase 1 Validation)

## 1. 전체 레이아웃 정의
**Base Layout:** `📋 Dashboard Kit`의 `DashboardLayout` (사이드바 + 탑바 + 메인 영역 통합).

*   **Top Bar:** $\lambda$, $\alpha$ 입력 필드 및 시스템 상태 표시.
*   **Sidebar:** KPI 목록 및 데이터 흐름 우선순위 시각화.
*   **Main Area:** 핵심 시각화 요소 배치.

## 2. 핵심 컴포넌트 정의 (Core Components)

### A. KPI 게이지/스코어 플롯 (Scatter Plot / Dual-Axis Gauge)
*   **목표:** 데이터 신뢰도($\lambda$)와 잠재 수익($KPI_{final}$)의 관계 시각화.
*   **축 설정:** X축: $\lambda$ (0.0 ~ 1.0), Y축: $KPI_{final}$ 분포.
*   **강조 요소:** 목표 신뢰도 경계선 ($\lambda=0.9$)을 명확히 표시.

### B. 수익 분포 차트 (Distribution Chart - Histogram)
*   **목표:** $\lambda$ 구간별 잠재 수익($KPI_{final}$) 분포 시각화.
*   **구분 기준:** 신뢰도 구간에 따라 데이터 집합 분리 및 색상 구분.
    1.  $\lambda < 0.7$: 낮은 신뢰도 영역 (예: 회색 계열)
    2.  $0.7 \le \lambda < 0.9$: 중간 신뢰도 영역 (예: 노란색 계열)
    3.  $\lambda \ge 0.9$: 고신뢰도 영역 (예: 녹색/골드 계열)

### C. 시스템 상태 요약 카드 (System Status Card)
*   **표시 항목:**
    1.  현재 $\lambda$ 값 (가장 크게 표시)
    2.  수익 보정 계수 ($\alpha$)
    3.  최종 예측 수익 ($KPI_{final}$)

## 3. 디자인 가이드라인 (Visual System)
*   **컬러 전략:** 신뢰도 관련 데이터는 안정적인 블루/그레이, 잠재 수익 변화는 골드/오렌지 강조.
*   **타이포그래피:** 모든 수치는 명확한 산세리프 계열로 표현하며, $\lambda$와 $KPI_{final}$은 굵기를 통해 시각적 위계를 설정한다.
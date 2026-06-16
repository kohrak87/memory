# 잠재 수익 분포 시각화 프로토타입: 최종 디자인 및 컴포넌트 구현 스펙

## 1. 디자인 원칙 (Principle)
*   **톤:** 오류 없는 답변(Errorless Answer). 데이터 기반의 명확성과 신뢰성을 최우선으로 함.
*   **핵심 강조점:** **데이터 신뢰도($\lambda$)**가 수익 분포보다 우선하며, $\lambda$ 값이 낮을수록 리스크가 높음을 시각적으로 표현한다.
*   **레이아웃 구조:** SaaS 대시보드 레이아웃(`DashboardLayout`)을 기반으로 하며, 핵심 KPI(수익분포)와 검증 지표($\lambda$)를 메인 영역에 통합한다.

## 2. 컬러 및 타이포그래피 시스템 (Visual System)
*   **Primary Color (신뢰/안정):** `#007BFF` (Deep Blue, 신뢰성 강조)
*   **Secondary Color (경고/신뢰도):** `#FFC107` (Amber/Yellow, 주의 및 $\lambda$ 값 표시)
*   **Background:** `#F8F9FA` (Light Gray, 깔끔함 유지)
*   **Typography (폰트):** Inter (모든 텍스트에 적용하여 가독성 확보)

## 3. 핵심 컴포넌트 정의 (Core Components)

### A. 수익 분포 시각화 차트: $\lambda$-Weighted Distribution Chart
*   **유형:** 누적 영역 그래프 (Stacked Area Chart) 또는 히트맵 형태의 바 차트.
*   **X축:** 수익 구간 (Tier 1, Tier 2, Tier 3).
*   **Y축:** 잠재 수익 분포 금액 ($P_{total}$).
*   **핵심 레이어:** 각 Tier별로 $\lambda$ 값에 따라 색상 그라데이션을 적용하여 신뢰도를 시각화한다.
    *   Tier 1 (Basic): 낮은 $\lambda$일수록 어두운/붉은 계열 (위험)
    *   Tier 3 (Enterprise): 높은 $\lambda$일수록 밝은/푸른 계열 (안정)

### B. 데이터 신뢰도 지표 컴포넌트: $\lambda$ Trust Indicator
*   **위치:** 차트 상단 또는 별도의 KPI 카드 섹션.
*   **표현 방식:** 원형 게이지(Gauge) 또는 바 형태의 시각화.
    *   **Metric:** $\lambda$ Score (0.0 ~ 1.0).
    *   **Color Mapping:**
        *   $\lambda > 0.9$: Green (최고 신뢰)
        *   $0.7 < \lambda \le 0.9$: Amber (주의)
        *   $\lambda \le 0.7$: Red (경고/재검증 필요)
*   **텍스트:** "시스템 신뢰도: $\lambda = [값]$"

### C. Tiered Pricing 상세 카드 (Actionable Insights)
각 수익화 모델(Tier 1, 2, 3)별로 다음 정보를 명확히 제시하는 카드 디자인.
*   **제목:** Tier X (예: Pro Bundle)
*   **가격:** $P_{pro}$ (가장 크게 표시)
*   **핵심 가치:** 제공되는 기능 목록 (Bullet Points).
*   **신뢰 지표:** 해당 티어에 대한 평균 $\lambda$ 값 명시.

## 4. 레이아웃 스케치 (Layout Sketch - Figma Reference)
*   **Top Bar:** 로고 / 현재 수익화 모델 선택 버튼
*   **Main Area (70%):** A. $\lambda$-Weighted Distribution Chart (가장 큰 영역)
*   **Side Panel (30%):** B. $\lambda$ Trust Indicator & C. Tiered Pricing 상세 카드 (보조 정보 제공)

---
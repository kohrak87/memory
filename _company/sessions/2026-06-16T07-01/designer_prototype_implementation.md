# 잠재 수익 분포 시각화 프로토타입: 최종 컴포넌트 및 레이아웃 정의 (Figma Ready)

## 1. 핵심 디자인 원칙 재확인
- **핵심 메시지:** 데이터 신뢰도($\lambda$) 변화에 따른 잠재 수익 분포 시각화 극대화.
- **톤앤매너:** 오류 없는 답변(신뢰성 강조).
- **시각화 목표:** $\lambda$ 값이 변할 때, 잠재 수익의 범위와 분포가 어떻게 달라지는지 직관적으로 이해하도록 함.

## 2. 핵심 컴포넌트 정의 (Figma Component Definition)

### A. 데이터 신뢰도 게이지 (Trust Gauge - $\lambda$)
- **목표:** 데이터 신뢰도($\lambda$)를 시각적 지표로 즉시 인지.
- **타입:** Gauge/Semi-Circle Progress Bar 또는 Radial Gauge.
- **핵심 요소:**
    - **중앙 값:** 현재 $\lambda$ 값 표시 (예: 0.95).
    - **색상 코딩:**
        - $\lambda \ge 0.9$: 녹색 계열 (신뢰 높음)
        - $0.8 \le \lambda < 0.9$: 노란색 계열 (주의 필요)
        - $\lambda < 0.8$: 빨간색 계열 (위험/재검증 필요)
    - **레이블:** "데이터 신뢰도($\lambda$)"

### B. 잠재 수익 분포 시각화 (Profit Distribution Scatter Plot / Area Chart)
- **목표:** $\lambda$에 따른 잠재 수익의 변화를 다차원적으로 표현.
- **타입:** 2D 산점도(Scatter Plot) 또는 누적 영역 차트(Area Chart).
- **축 정의:**
    - **X축 (가로):** 데이터 신뢰도($\lambda$) 범위 ($0$에서 $1$).
    - **Y축 (세로):** 잠재 수익 가치 (Potential Profit Value, $KPI_{final}$).
- **데이터 포인트:** 각 수익화 모델별 예상되는 최적 수익 지점(Predicted Optimal Profit Point)을 점으로 표시.
- **시각적 강조:** $\lambda$ 축의 변화에 따라 데이터 포인트들이 어떻게 이동하는지 화살표나 곡선으로 연결하여 '위험 대비 수익성'의 관계를 명확히 표현.

## 3. 레이아웃 구조 제안 (Dashboard Layout Integration)
- **섹션 제목:** "수익화 잠재력 분석: 신뢰도($\lambda$) 기반 분포"
- **레이아웃 구성:**
    1. 상단에 A. 데이터 신뢰도 게이지 ($\lambda$) 배치.
    2. 중앙에 B. 잠재 수익 분포 시각화 (Scatter Plot)를 크게 배치.
    3. 하단에 $\lambda$ 변화에 따른 핵심 권고안 요약 박스 (Actionable Insight Box).

## 4. 컴포넌트 연결 스펙 (Figma Linking Specification)
- **상호작용:** $\lambda$ 게이지의 값 변경 시, Scatter Plot의 데이터 포인트들이 실시간으로 재계산되어 위치가 업데이트되도록 설정.
- **데이터 바인딩:** $KPI_{final}$과 $\lambda$ 변수를 Figma Variables 또는 Mockup Data에 연결하여 프로토타입이 실제 데이터 흐름을 반영하도록 준비.

**실행 계획:** 상기 정의된 컴포넌트와 레이아웃 스펙을 기반으로 Figma 파일 내에 최종 시각화 프로토타입을 구현합니다.
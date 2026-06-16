# KPI 분포 시각화 Figma 디자인 스펙 (v1.0)

## 🎨 브랜드 시스템 적용
*   **Primary Color:** `#1A73E8` (딥 블루) - 신뢰성 강조
*   **Secondary Color:** `#FDD835` (골드 옐로우) - $\lambda$ 변동 강조
*   **Background:** `#FFFFFF`
*   **Text Color:** `#212121`
*   **Font Family:** Inter / Pretendard

## 📊 레이아웃 정의
*   **DashboardLayout:** 사이드바(20%), 탑바, 메인 영역(80%) 통합.
*   **Main Content Area:** KPI 분포 시각화 차트가 중앙에 배치됨.

## 🧩 핵심 컴포넌트: 수익 분포 시각화 (Scatter Plot)
*   **차트 유형:** Scatter Plot / Heatmap
*   **X축:** 데이터 신뢰도 ($\lambda$) [0.0 ~ 1.0]
*   **Y축:** 잠재 수익 ($KPI_{final}$)
*   **강조 요소:** $\lambda=0.5$ 지점에 Primary Color(`#1A73E8`)로 중심선 표시.

## 📝 KPI 카드 컴포넌트
*   **구조:** KPI Name, 최종 값 (Primary Color), $\lambda$ 지표 포함.
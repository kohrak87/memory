# 시소(Seesaw) 백엔드 자동화 파이프라인: 데이터 소스 및 스키마 정의

## 1. API 연동 계획 요약
본 문서는 '시소' 플랫폼의 백엔드 자동화 파이프라인 구축을 위한 데이터 소스 API 연동 방안과 초기 데이터 흐름 스키마를 정의합니다.

### 1.1. 핵심 데이터 영역 및 후보군
*   **플랫폼 운영 데이터:** 자체 DB 로그 (내부 마스터)
*   **사용자 행동 데이터:** 내부 이벤트 로깅
*   **콘텐츠 및 트렌드 데이터:** 외부 소셜/뉴스 API 연동

### 1.2. 초기 연동 방안 제안
*   **중앙 허브 설계:** 모든 외부 데이터는 내부 백엔드의 API 게이트웨이를 통해 단일화된 방식으로 접근하도록 설계하여 보안과 데이터 흐름의 통제권을 확보한다.
*   **내부 시스템 우선 원칙:** 가장 안정적인 데이터 소스는 '시소' 플랫폼 자체에서 발생하는 트랜잭션 로그 및 사용자 활동 기록이며, 이를 1차 마스터 데이터로 설정한다.

### 1.3. 초기 데이터 흐름 스키마 (Conceptual Schema)
다음은 파이프라인의 핵심 엔티티 정의입니다.

| 엔티티 명 | 설명 | 주요 속성 (Attributes) | 데이터 타입 | 관계 |
| :--- | :--- | :--- | :--- | :--- |
| **User** | 플랫폼 사용자 정보 | `user_id`, `username`, `registration_date`, `role` | UUID, String, Timestamp, Enum | 1:N (Content) |
| **Content** | 게시물/콘텐츠 데이터 | `content_id`, `user_id`, `post_type` (Image/Text), `caption`, `timestamp`, `status` | UUID, UUID, Enum, String, Timestamp, Enum | N:1 (User) |
| **Interaction** | 사용자 상호작용 기록 | `interaction_id`, `content_id`, `user_id`, `action_type` (Like/Comment/Share), `timestamp` | UUID, UUID, UUID, Enum, Timestamp | N:1 (Content), N:1 (User) |
| **TrendData** | 외부 트렌드 데이터 | `trend_id`, `topic`, `source` (News/Search), `value`, `timestamp` | UUID, String, String, Float/Int, Timestamp | 1:N (Content) |

## 2. 다음 단계 계획
다음 단계에서는 위 정의된 스키마를 바탕으로 각 엔티티에 대한 **실제 테이블 및 필드 명세(SQL DDL 또는 JSON Schema)**를 구체화하고, 잠재적 외부 API(예: 뉴스 데이터 소스)의 **구체적인 Endpoints**를 리서치하여 연동 계획을 구체화하겠습니다.
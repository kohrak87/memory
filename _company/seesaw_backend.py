import json
from datetime import datetime

# 상수 설정: 중앙 영역 포인트 컬러는 보라색(Purple)로 세팅
CENTER_COLOR = "#8A2BE2" # Purple Hex Code

def calculate_contradiction_ranking(data: list) -> list:
    """[긴코 랭킹] 알고리즘을 적용하여 반대성 점수를 계산하고 순위를 매김."""
    ranked_results = []
    for item in data:
        # TODO: 실제 벡터 유사도 및 극성 변화 계산 로직 삽입 (Placeholder)
        contradiction_score = hash(item['headline']) % 100 # 임시 점수 할당
        item['contradiction_score'] = contradiction_score
        ranked_results.append(item)
    
    # 점수가 높은 순으로 정렬 (반대성이 클수록 상위 노출)
    ranked_results.sort(key=lambda x: x['contradiction_score'], reverse=True)
    return ranked_results

def generate_seesaw_output(raw_data: list, output_path: str):
    """최종 결과를 JSON 파일로 생성하여 저장."""
    print("Applying 'Ginko Ranking' algorithm...")
    final_ranked_data = calculate_contradiction_ranking(raw_data)
    
    # 최종 구조 정의 (Antigravity 카드뉴스용 JSON 포맷)
    seesaw_structure = {
        "metadata": {
            "generated_at": datetime.now().isoformat(),
            "center_color": CENTER_COLOR,
            "source_data_count": len(final_ranked_data)
        },
        "ranking_results": final_ranked_data
    }
    
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(seesaw_structure, f, ensure_ascii=False, indent=4)
        
    print(f"✅ 최종 결과 저장 완료: {output_path}")

if __name__ == "__main__":
    # 테스트 데이터 (Researcher의 스크립트 실행 결과를 가정)
    mock_input_data = [
        {"source": "A", "headline": "과거 발언 1", "content": "좌파적 입장"},
        {"source": "B", "headline": "현재 행보 1", "content": "우파적 행동"}
    ]
    
    # 이 부분은 실제 Researcher 스크립트의 출력 파일을 읽어와야 함.
    mock_input_data.append(
        {"source": "C", "headline": "과거 발언 2", "content": "보수적 입장"}
    )
    mock_input_data.append(
        {"source": "D", "headline": "현재 행보 2", "content": "진보적 행동"}
    )

    generate_seesaw_output(mock_input_data, "seesaw_today.json")
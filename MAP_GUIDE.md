# 🗺️ 지도 추가 가이드

지도를 추가하는 방법을 스크린샷과 함께 상세히 설명합니다.

## 📍 방법 1: 네이버 지도 (추천)

네이버 지도는 한국에서 가장 정확하고 사용하기 쉽습니다.

### 1단계: 네이버 지도 접속
- 웹브라우저에서 https://map.naver.com/ 접속

### 2단계: 매장 검색
- 검색창에 매장 이름 또는 주소 입력
- 예: "서면마리하우스", "부산 부산진구 서면로 ..."

### 3단계: 공유 버튼 클릭
- 매장 정보가 나오면 **"공유"** 버튼 클릭
- 또는 **"저장/공유"** 메뉴 찾기

### 4단계: HTML 태그 복사
- 공유 메뉴에서 **"HTML 태그"** 또는 **"소스코드"** 선택
- 나타나는 코드 전체를 복사 (Ctrl+C 또는 Cmd+C)
- 코드는 다음과 같이 생겼습니다:

```html
<iframe src="https://map.naver.com/..." width="..." height="..." ...></iframe>
```

### 5단계: HTML 파일에 붙여넣기
1. `index.html` 파일 열기
2. "지도 섹션" 찾기 (약 65~100번째 줄)
3. 아래 주석 사이에 붙여넣기:

```html
<!-- 여기에 iframe 코드를 붙여넣으세요 (이 줄은 지우지 마세요) -->

여기에 복사한 iframe 코드를 붙여넣으세요!

<!-- 여기까지 (이 줄도 지우지 마세요) -->
```

### 6단계: 확인
- `index.html` 파일 저장 (Ctrl+S 또는 Cmd+S)
- 브라우저에서 새로고침 (F5)
- 지도가 표시되는지 확인!

---

## 🗺️ 방법 2: 카카오맵

카카오맵도 사용하기 쉽고 디자인이 깔끔합니다.

### 1단계: 카카오맵 접속
- 웹브라우저에서 https://map.kakao.com/ 접속

### 2단계: 매장 검색
- 검색창에 매장 이름 또는 주소 입력

### 3단계: 공유하기
- 매장 정보 패널에서 **"공유"** 아이콘 클릭 (보통 오른쪽 상단)

### 4단계: URL 복사 (간편 방법)
카카오맵은 iframe을 직접 제공하지 않으므로, URL을 복사하여 링크로 사용합니다:

1. "URL 복사" 선택
2. 복사한 URL을 `index.html`의 다음 부분에 추가:

```html
<div class="map-links">
    <a href="여기에_복사한_카카오맵_URL_붙여넣기" target="_blank" class="map-link">
        카카오맵에서 위치 보기
    </a>
</div>
```

---

## 🎯 방법 3: 직접 iframe 만들기 (네이버 지도)

네이버 지도에서 공유 버튼이 안 보이는 경우:

### 1단계: 매장 URL 복사
- 브라우저 주소창의 전체 URL 복사
- 예: `https://map.naver.com/p/search/서면마리하우스/place/2056892130?...`

### 2단계: iframe 코드 직접 작성
다음 코드를 `index.html`의 지도 섹션에 붙여넣으세요:

```html
<iframe 
    src="여기에_복사한_네이버지도_URL_붙여넣기" 
    width="100%" 
    height="400" 
    frameborder="0" 
    style="border:0" 
    allowfullscreen>
</iframe>
```

### 예시:
```html
<iframe 
    src="https://map.naver.com/p/search/서면마리하우스/place/2056892130?c=15.00,0,0,0,adh" 
    width="100%" 
    height="400" 
    frameborder="0" 
    style="border:0" 
    allowfullscreen>
</iframe>
```

---

## ❓ 문제 해결

### Q1: 지도가 표시되지 않아요
**해결방법:**
- 브라우저 콘솔 확인 (F12 → Console 탭)
- iframe 코드가 주석 밖에 있는지 확인
- `<!--`와 `-->` 사이에 있으면 주석이라 안 보입니다!

### Q2: "교차 출처 읽기 차단" 오류
**해결방법:**
- 정상적인 현상입니다 (지도는 보입니다)
- 보안 상 일부 기능이 제한될 수 있지만 지도 표시에는 문제없습니다

### Q3: 모바일에서 지도가 안 보여요
**해결방법:**
- iframe의 `width="100%"` 확인
- 모바일 브라우저 새로고침
- 캐시 삭제 후 다시 시도

### Q4: 지도가 너무 작아요/커요
**해결방법:**
- iframe의 `height` 값을 조정하세요:
  - `height="300"` - 작게
  - `height="400"` - 보통 (권장)
  - `height="500"` - 크게

---

## 📱 실전 예제

### 완성된 코드 예시:

```html
<!-- 지도 섹션 -->
<section class="map-section fade-in-delay-3">
    <h2 class="map-title">📍 오시는 길</h2>
    <div class="map-wrapper">
        <!-- 네이버 지도 임베드 -->
        <iframe 
            src="https://map.naver.com/p/search/서면마리하우스/place/2056892130?c=15.00,0,0,0,adh&isCorrectAnswer=true" 
            width="100%" 
            height="400" 
            frameborder="0" 
            style="border:0" 
            allowfullscreen>
        </iframe>
        
        <!-- 지도를 추가하지 않았을 때 보이는 영역 (지도 추가 후 자동으로 숨겨짐) -->
        <div class="map-placeholder">
            ...
        </div>
    </div>
</section>
```

---

## 💡 추가 팁

### 지도 스타일 커스터마이징
iframe에 추가 스타일을 적용하려면:

```html
<iframe 
    src="지도_URL" 
    width="100%" 
    height="400" 
    frameborder="0" 
    style="border:0; border-radius: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" 
    allowfullscreen>
</iframe>
```

### 지도 중심 좌표 조정
네이버 지도 URL의 `c=` 파라미터를 조정하면 줌 레벨과 중심을 변경할 수 있습니다.

### 여러 위치 표시
두 개 이상의 매장을 표시하려면:
1. 각각의 iframe을 만들거나
2. 한 지도에서 "길찾기" URL을 사용

---

## ✅ 체크리스트

지도 추가를 완료했다면 다음을 확인하세요:

- [ ] 네이버 지도 또는 카카오맵 접속
- [ ] 매장 이름 검색
- [ ] 공유 버튼에서 HTML 태그 또는 URL 복사
- [ ] `index.html`의 지도 섹션 찾기
- [ ] 주석 사이 또는 적절한 위치에 코드 붙여넣기
- [ ] 파일 저장
- [ ] 브라우저에서 확인
- [ ] 모바일에서도 확인

---

## 📞 도움이 더 필요하신가요?

1. `index.html` 파일의 65~100번째 줄 확인
2. 주석 `<!-- -->` 밖에 iframe 코드 배치
3. 파일 저장 후 브라우저 새로고침

완료! 🎉

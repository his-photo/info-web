# 🏪 매장 임시 휴업 안내 랜딩 페이지

리모델링으로 인한 매장 임시 휴업을 안내하고, 대체 매장 방문을 유도하는 전문적인 랜딩 페이지입니다.

## 📁 프로젝트 구조

```
info-web/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 파일
└── README.md           # 이 파일
```

## 🎨 주요 기능

✅ **완전 반응형 디자인** (모바일 최적화)  
✅ **임시 휴업 안내** (리모델링 설명)  
✅ **대체 매장 정보** (위치, 서비스 동일 보장)  
✅ **특별 혜택 안내** (30% 할인 + 무료 헤드스파)  
✅ **지도 연동** (카카오맵/네이버지도)  
✅ **예약 및 연락처** (디자이너 직통, 운영시간)  
✅ **부드러운 애니메이션** (전문적인 UX)  

## 📋 페이지 구성

1. **헤더**: 임시 휴업 안내 제목
2. **안내 메시지**: 리모델링 사유 및 대체 매장 안내
3. **특별 혜택 카드**:
   - 도보 5분 거리
   - 동일 퀄리티 보장
   - VIP 특별 혜택 (30% 할인 + 무료 헤드스파)
   - 최적화된 환경
4. **지도**: 대체 매장 위치
5. **예약 버튼**: CTA (Call to Action)
6. **연락처 정보**: 디자이너 직통, 운영시간
7. **감사 메시지**

## 📝 커스터마이징 방법

### 1. 매장 이름 수정
`index.html` 파일을 열어 다음 부분을 수정하세요:

```html
<!-- 원래 매장 이름 -->
<strong>[원래 매장 이름]</strong>

<!-- 대체 매장 이름 -->
<strong>[대체 매장 이름]</strong>
```

### 2. 디자이너 정보 수정
```html
<!-- 디자이너 이름 -->
<p class="contact-detail">디자이너 [이름] 선생님</p>

<!-- 전화번호 -->
<a href="tel:010-1234-5678">010-1234-5678</a>
```

### 3. 예약 웹사이트 링크 수정
```html
<a href="https://example.com/reserve" target="_blank" ...>
```

### 4. 지도 추가 방법

#### 카카오맵 사용:
1. [카카오맵](https://map.kakao.com/)에서 매장 검색
2. "공유" → "HTML 태그" 복사
3. `index.html`의 지도 섹션에 iframe 붙여넣기

```html
<div class="map-wrapper">
    <iframe 
        src="//dapi.kakao.com/v2/maps/sdk.js?..." 
        width="100%" 
        height="400" 
        frameborder="0" 
        style="border:0">
    </iframe>
</div>
```

#### 네이버지도 사용:
1. [네이버지도](https://map.naver.com/)에서 매장 검색
2. "공유" → "HTML 태그 복사"
3. `index.html`의 지도 섹션에 iframe 붙여넣기

### 5. 특별 혜택 수정
`index.html`에서 혜택 내용을 자유롭게 변경할 수 있습니다:

```html
<div class="benefit-card highlight">
    <div class="benefit-icon">💎</div>
    <h3>VIP 특별 혜택</h3>
    <p><strong>30% 할인 + 무료 헤드스파(20분)</strong> 제공</p>
    <span class="benefit-note">예약 시 "임시 안내" 언급 필수</span>
    <span class="benefit-badge">리모델링 기간 한정</span>
</div>
```

### 6. 색상 테마 변경
`styles.css` 파일의 `:root` 섹션에서 색상 변경:

```css
:root {
    --primary-color: #6366f1;      /* 메인 색상 */
    --secondary-color: #ec4899;     /* 보조 색상 */
    /* ... */
}
```

## 🚀 무료 배포 방법

### 방법 1: GitHub Pages (추천)

1. **GitHub 저장소 생성 및 푸시**
   ```bash
   git init
   git add .
   git commit -m "매장 임시 휴업 안내 페이지 생성"
   git branch -M main
   git remote add origin https://github.com/your-username/info-web.git
   git push -u origin main
   ```

2. **GitHub Pages 활성화**
   - GitHub 저장소 페이지 접속
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → / (root) 선택
   - Save 클릭

3. **접속 및 QR 코드 생성**
   - 약 1-2분 후 `https://your-username.github.io/info-web/` 에서 확인
   - 이 URL로 QR 코드 생성

### 방법 2: Vercel (가장 빠름)

1. **Vercel 계정 생성**
   - [vercel.com](https://vercel.com) 접속
   - GitHub으로 로그인

2. **프로젝트 배포**
   - "New Project" 클릭
   - GitHub 저장소 선택 (또는 직접 업로드)
   - Deploy 클릭

3. **완료**
   - 자동으로 HTTPS URL 생성
   - 커스텀 도메인 연결 가능

### 방법 3: Netlify

1. **드래그 앤 드롭 배포**
   - [netlify.com](https://netlify.com) 접속
   - 프로젝트 폴더를 브라우저에 드래그 앤 드롭

2. **완료**
   - 즉시 배포 완료
   - 커스텀 도메인 설정 가능

## 📱 QR 코드 생성 방법

배포 후 받은 URL로 QR 코드를 생성하세요:

### 무료 QR 코드 생성 사이트:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [Naver QR 코드](https://qr.naver.com/)
- [카카오 QR 코드](https://accounts.kakao.com/qr_check_in)

### QR 코드 인쇄 팁:
1. **크기**: 최소 3cm x 3cm 이상 권장
2. **위치**: 매장 입구, 유리문, 포스터
3. **안내 문구 추가**: "QR 코드를 스캔하면 대체 매장 정보를 확인하실 수 있습니다"

## 🔧 로컬 테스트

### 방법 1: 직접 열기
`index.html` 파일을 더블클릭하면 바로 브라우저에서 볼 수 있습니다.

### 방법 2: Live Server (VS Code 확장)
1. VS Code에서 Live Server 확장 설치
2. `index.html` 우클릭
3. "Open with Live Server" 선택

### 방법 3: Python 서버
```bash
python -m http.server 8000
# 브라우저에서 http://localhost:8000 접속
```

## 💡 운영 가이드

### 1. 배포 전 체크리스트
- [ ] 원래 매장 이름 입력
- [ ] 대체 매장 이름 입력
- [ ] 디자이너 이름 입력
- [ ] 전화번호 수정
- [ ] 예약 웹사이트 링크 수정
- [ ] 운영 시간 확인
- [ ] 지도 추가 (카카오맵 또는 네이버지도)
- [ ] 특별 혜택 내용 확인
- [ ] 모바일에서 테스트

### 2. QR 코드 배치 장소
- ✅ 매장 입구 유리문
- ✅ 매장 앞 스탠드 배너
- ✅ 근처 상가 게시판
- ✅ SNS (인스타그램, 카카오톡 채널)

### 3. 고객 응대 스크립트
> "리모델링 중이라 불편을 드려 죄송합니다. 도보 5분 거리에 있는 [대체 매장 이름]에서 동일한 서비스를 받으실 수 있으며, 특별히 30% 할인과 무료 헤드스파를 제공해 드리고 있습니다. QR 코드를 스캔하시면 자세한 정보를 확인하실 수 있습니다."

## 🆘 문제 해결

### 지도가 표시되지 않는 경우
- 카카오맵 또는 네이버지도에서 iframe 코드를 정확히 복사했는지 확인
- HTML 주석을 제거하고 iframe 코드를 붙여넣었는지 확인

### 모바일에서 레이아웃이 깨지는 경우
- `<meta name="viewport">` 태그가 있는지 확인
- 브라우저 개발자 도구로 반응형 테스트

### 링크가 작동하지 않는 경우
- `tel:`, `https://` 등 프로토콜이 정확한지 확인
- 전화번호에 특수문자(괄호, 대시 등) 제거 시도

### 배포 후 스타일이 적용되지 않는 경우
- CSS/JS 파일 경로가 상대 경로인지 확인
- 브라우저 캐시 삭제 (Ctrl+Shift+R 또는 Cmd+Shift+R)

## 📊 효과 측정

배포 후 다음 지표를 추적하세요:

1. **QR 코드 스캔 횟수**: URL 단축 서비스 활용 (bit.ly, naver.me)
2. **예약 전환율**: "임시 안내" 언급 고객 수
3. **고객 만족도**: 대체 매장 이용 후 피드백
4. **방문율**: 실제 대체 매장 방문 고객 수

## 📞 추가 지원

더 많은 기능이 필요하거나 문제가 발생하면:
1. 브라우저 콘솔 (F12) 에러 확인
2. HTML/CSS 유효성 검사
3. 모바일 테스트 도구 활용

## 📄 라이선스

이 프로젝트는 자유롭게 사용, 수정, 배포할 수 있습니다.

---

**제작일**: 2026년 2월 1일  
**버전**: 1.0.0

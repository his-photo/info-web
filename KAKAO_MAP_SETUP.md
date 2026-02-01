# 🗺️ 카카오맵 설정 가이드

카카오맵 API를 사용하여 깔끔한 지도를 표시하는 방법입니다.

## 🔑 1단계: 카카오 개발자 앱 키 발급 (필수)

### 1-1. 카카오 개발자 사이트 접속
- https://developers.kakao.com/ 접속
- 카카오 계정으로 로그인

### 1-2. 애플리케이션 추가
1. 상단 메뉴에서 **"내 애플리케이션"** 클릭
2. **"애플리케이션 추가하기"** 클릭
3. 앱 정보 입력:
   - 앱 이름: `매장 안내 페이지` (원하는 이름)
   - 사업자명: 개인 또는 회사명
4. **저장** 클릭

### 1-3. JavaScript 키 복사
1. 생성된 앱 클릭
2. **"요약 정보"** 또는 **"앱 키"** 탭
3. **JavaScript 키** 복사 (예: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

### 1-4. 플랫폼 등록
1. **"플랫폼"** 메뉴 클릭
2. **"Web 플랫폼 등록"** 클릭
3. 사이트 도메인 입력:
   - 로컬 테스트: `http://localhost`
   - GitHub Pages: `https://your-username.github.io`
   - Vercel: `https://your-project.vercel.app`
4. **저장** 클릭

---

## 📝 2단계: HTML 파일에 API 키 입력

`index.html` 파일을 열고 다음 부분을 찾으세요 (약 10번째 줄):

```html
<!-- 카카오맵 API -->
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY"></script>
```

`YOUR_APP_KEY` 부분을 복사한 JavaScript 키로 변경:

```html
<!-- 카카오맵 API -->
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6"></script>
```

---

## 📍 3단계: 매장 위치 좌표 설정

### 3-1. 카카오맵에서 좌표 찾기

1. https://map.kakao.com/ 접속
2. 매장 이름 또는 주소 검색
3. 브라우저 주소창 URL 확인:
   ```
   https://map.kakao.com/link/map/서면마리하우스,35.1579,129.0595
   ```
4. 쉼표로 구분된 숫자가 좌표입니다:
   - **위도**: `35.1579`
   - **경도**: `129.0595`

### 3-2. script.js 파일에 좌표 입력

`script.js` 파일을 열고 다음 부분을 찾으세요 (약 60번째 줄):

```javascript
// 서면마리하우스 좌표 (부산 서면)
const latitude = 35.1579;  // 위도
const longitude = 129.0595; // 경도
```

실제 매장의 위도와 경도로 변경하세요.

### 3-3. 매장 정보 수정

같은 `script.js` 파일에서 인포윈도우 내용도 수정:

```javascript
const infowindow = new kakao.maps.InfoWindow({
    content: `
        <div style="padding: 15px 20px; text-align: center; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-size: 1.1rem; color: #333;">서면마리하우스</h3>
            <p style="margin: 0; font-size: 0.9rem; color: #666;">부산광역시 부산진구 서면로 20</p>
            <p style="margin: 8px 0 0 0; font-size: 0.85rem; color: #999;">도보 5분 거리</p>
        </div>
    `
});
```

매장명, 주소, 거리 정보를 실제 정보로 변경하세요.

---

## ✅ 4단계: 테스트

### 로컬 테스트
1. `index.html` 파일을 브라우저에서 열기
2. "오시는 길" 섹션에 지도가 표시되는지 확인
3. 지도 확대/축소, 드래그가 되는지 확인
4. 마커(핀)가 정확한 위치에 있는지 확인

### 문제 해결
- **지도가 안 보이는 경우**:
  - 브라우저 콘솔(F12) 확인
  - API 키가 정확한지 확인
  - 플랫폼 도메인이 등록되어 있는지 확인

- **마커 위치가 잘못된 경우**:
  - 위도/경도 좌표를 다시 확인
  - 카카오맵에서 정확한 좌표 복사

---

## 🎨 5단계: 커스터마이징 (선택사항)

### 지도 높이 조절
`index.html`에서:
```html
<div id="kakao-map" style="width:100%; height:450px; ..."></div>
```
`height` 값을 변경 (예: `500px`, `400px`)

### 지도 확대 레벨 조절
`script.js`에서:
```javascript
const mapOption = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 3 // 1~14 (숫자가 작을수록 확대)
};
```
`level` 값 변경:
- `1`: 최대 확대
- `3`: 적당한 확대 (권장)
- `5`: 중간 확대
- `8`: 넓은 범위

### 마커 스타일 변경
커스텀 마커 이미지 사용:
```javascript
const imageSrc = 'path/to/marker.png';
const imageSize = new kakao.maps.Size(64, 69);
const imageOption = {offset: new kakao.maps.Point(27, 69)};

const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
    map: map
});
```

---

## 📱 6단계: 배포

### GitHub Pages
1. 모든 파일 커밋 및 푸시
2. GitHub Pages 설정에서 도메인 확인
3. 카카오 개발자 사이트에서 플랫폼에 해당 도메인 추가

### Vercel / Netlify
1. 배포 완료 후 도메인 확인
2. 카카오 개발자 사이트 플랫폼에 도메인 추가

---

## 🔐 보안 주의사항

### ⚠️ API 키 노출 주의
- JavaScript 키는 클라이언트에서 사용하므로 공개됨
- 걱정하지 마세요: 카카오맵 JavaScript 키는 공개되어도 안전합니다
- 플랫폼 도메인 제한으로 보호됨

### 🛡️ 도메인 제한
- 반드시 사용할 도메인만 등록
- 와일드카드(*) 사용 지양

---

## 📊 전체 체크리스트

설정 완료 후 다음을 확인하세요:

- [ ] 카카오 개발자 계정 생성
- [ ] 애플리케이션 추가
- [ ] JavaScript 키 복사
- [ ] 플랫폼(도메인) 등록
- [ ] `index.html`에 API 키 입력
- [ ] `script.js`에 좌표 입력
- [ ] 매장 정보 수정
- [ ] 로컬 테스트
- [ ] 배포 후 실제 도메인 테스트

---

## 💡 추가 기능

### 길찾기 기능
마커 클릭 시 카카오맵 길찾기로 이동 (이미 구현됨):
```javascript
kakao.maps.event.addListener(marker, 'click', function() {
    window.open(`https://map.kakao.com/link/map/매장명,위도,경도`, '_blank');
});
```

### 현재 위치 표시
사용자의 현재 위치를 지도에 표시:
```javascript
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const locPosition = new kakao.maps.LatLng(lat, lng);
        
        // 현재 위치 마커 추가
        const myMarker = new kakao.maps.Marker({
            position: locPosition,
            map: map
        });
    });
}
```

---

## 🆘 문제 해결

### Q: 지도가 "지도를 불러오는 중입니다" 메시지만 표시됩니다
**A:** API 키가 입력되지 않았거나 잘못되었습니다.
- `index.html`의 API 키 확인
- 카카오 개발자 사이트에서 키 재확인

### Q: "InvalidAppKey" 오류
**A:** API 키가 유효하지 않거나 도메인이 등록되지 않았습니다.
- 플랫폼 설정에서 현재 도메인 추가

### Q: 지도는 보이는데 마커가 이상한 위치에 있습니다
**A:** 위도/경도 좌표가 잘못되었습니다.
- 카카오맵에서 정확한 좌표 재확인

---

## 📞 추가 도움

- 카카오맵 API 문서: https://apis.map.kakao.com/web/
- 카카오 개발자 포럼: https://devtalk.kakao.com/

완료! 🎉

# 조민수 포트폴리오 웹사이트

엔터프라이즈 B2B 통합 전문가 조민수의 포트폴리오 웹사이트입니다.

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 모던 스타일링 및 다크 모드 지원
- **JavaScript (Vanilla)**: 순수 JavaScript로 구현된 인터랙티브 기능
- **반응형 디자인**: Mobile, Tablet, Desktop 지원

## 주요 기능

- ✅ 반응형 디자인 (Mobile, Tablet, Desktop)
- ✅ 다크 모드 지원
- ✅ 프로젝트 필터링 및 검색
- ✅ 부드러운 스크롤 애니메이션
- ✅ 프로젝트 상세 모달
- ✅ 기술 스택 숙련도 시각화
- ✅ 경력 타임라인
- ✅ SEO 최적화

## 파일 구조

```
chomins.github.io/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 스타일시트
├── js/
│   ├── data.js         # 프로젝트 데이터
│   └── main.js         # 메인 JavaScript 로직
├── .nojekyll           # GitHub Pages Jekyll 비활성화
└── README.md
```

## 로컬에서 실행하기

1. 저장소 클론:
   ```bash
   git clone https://github.com/chomins/chomins.github.io.git
   cd chomins.github.io
   ```

2. 로컬 서버 실행:
   ```bash
   # Python 3 사용
   python -m http.server 8000
   
   # 또는 Node.js 사용
   npx serve
   ```

3. 브라우저에서 열기:
   ```
   http://localhost:8000
   ```

## 배포

이 저장소는 GitHub Pages를 통해 자동으로 배포됩니다.

- 저장소 이름이 `username.github.io` 형식이므로 자동으로 루트 도메인에서 호스팅됩니다.
- `main` 브랜치에 푸시하면 자동으로 배포됩니다.
- 배포된 사이트: https://chomins.github.io

### 배포 설정

1. GitHub 저장소 Settings > Pages로 이동
2. Source를 "Deploy from a branch"로 선택
3. Branch를 "main"으로 선택
4. Save 클릭

## 데이터 수정

프로젝트, 경력, 기술 스택 등의 데이터는 `js/data.js` 파일을 수정하면 됩니다.

- `projects`: 프로젝트 데이터 배열
- `experiences`: 경력 데이터 배열
- `skills`: 기술 스택 데이터 배열
- `achievements`: 수상 및 성과 데이터 배열

## 커스터마이징

### 색상 변경

`css/style.css` 파일의 CSS 변수를 수정하세요:

```css
:root {
  --primary-color: #2563EB;    /* 메인 색상 */
  --secondary-color: #10B981;  /* 보조 색상 */
  --accent-color: #F59E0B;     /* 강조 색상 */
}
```

### 폰트 변경

`index.html`의 Google Fonts 링크를 수정하거나 `css/style.css`의 `font-family`를 변경하세요.

## 라이선스

MIT

## 작성자

조민수 (Minsu Cho)
- Email: cms4317@naver.com
- GitHub: [chomins](https://github.com/chomins)
- Portfolio: [chomins.github.io](https://chomins.github.io/)

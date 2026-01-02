# 조민수 포트폴리오 웹사이트

엔터프라이즈 B2B 통합 전문가 조민수의 포트폴리오 웹사이트입니다.

## 기술 스택

- **Frontend**: React 18 + TypeScript
- **스타일링**: Tailwind CSS
- **라우팅**: React Router v6
- **애니메이션**: Framer Motion
- **빌드 도구**: Vite
- **차트**: Recharts

## 주요 기능

- ✅ 반응형 디자인 (Mobile, Tablet, Desktop)
- ✅ 다크 모드 지원
- ✅ 프로젝트 필터링 및 검색
- ✅ 부드러운 페이지 전환 애니메이션
- ✅ SEO 최적화
- ✅ 성능 최적화 (Lazy Loading, Code Splitting)

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

### 빌드

```bash
npm run build
```

빌드 결과물은 `dist` 폴더에 생성됩니다.

### 미리보기

```bash
npm run preview
```

빌드된 결과물을 미리 볼 수 있습니다.

## 배포

### GitHub Pages 자동 배포 (권장)

이 프로젝트는 GitHub Actions를 사용하여 자동으로 배포됩니다.

1. 코드를 `main` 브랜치에 푸시:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. GitHub 저장소 Settings > Pages에서:
   - Source를 "GitHub Actions"로 설정
   - 자동으로 빌드 및 배포됨
   - 배포 완료 후 `https://chomins.github.io`에서 확인 가능

### 수동 배포

수동으로 배포하려면:

1. 빌드:
   ```bash
   npm run build
   ```

2. `dist` 폴더의 내용을 GitHub Pages에 배포

### Vercel을 사용한 배포

1. GitHub 저장소에 푸시
2. [Vercel](https://vercel.com)에 로그인
3. "New Project" 클릭
4. GitHub 저장소 선택
5. 자동으로 빌드 및 배포됨

## 프로젝트 구조

```
portfolio/
├── src/
│   ├── components/     # 재사용 가능한 컴포넌트
│   │   └── common/     # 공통 컴포넌트 (Header, Footer 등)
│   ├── pages/          # 페이지 컴포넌트
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   ├── data/           # 프로젝트 데이터
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── skills.ts
│   │   └── achievements.ts
│   ├── hooks/          # 커스텀 훅
│   │   └── useDarkMode.ts
│   ├── styles/         # 스타일 파일
│   │   └── globals.css
│   ├── App.tsx         # 메인 앱 컴포넌트
│   └── main.tsx        # 진입점
├── public/             # 정적 파일
├── dist/              # 빌드 결과물
└── package.json
```

## 페이지 구성

- **Home** (`/`): 홈 페이지, 자기소개 및 주요 프로젝트 하이라이트
- **Projects** (`/projects`): 프로젝트 목록 페이지 (필터링 및 검색 지원)
- **Project Detail** (`/projects/:id`): 프로젝트 상세 페이지
- **Skills** (`/skills`): 기술 스택 페이지 (숙련도 시각화)
- **Experience** (`/experience`): 경력 페이지 (타임라인 형식)
- **Achievements** (`/achievements`): 수상 및 성과 페이지
- **Contact** (`/contact`): 연락처 페이지

## 데이터 수정

프로젝트, 경력, 기술 스택 등의 데이터는 `src/data/` 폴더의 파일들을 수정하면 됩니다:

- `projects.ts`: 프로젝트 데이터
- `experience.ts`: 경력 데이터
- `skills.ts`: 기술 스택 데이터
- `achievements.ts`: 수상 및 성과 데이터

## 커스터마이징

### 색상 변경

`tailwind.config.js`에서 색상을 변경할 수 있습니다:

```javascript
colors: {
  primary: '#2563EB',    // 메인 색상
  secondary: '#10B981',  // 보조 색상
  accent: '#F59E0B',     // 강조 색상
}
```

### 폰트 변경

`index.html`에서 폰트를 변경하거나 `tailwind.config.js`에서 폰트 패밀리를 설정할 수 있습니다.

## 라이선스

MIT

## 작성자

조민수 (Minsu Cho)
- Email: cms4317@naver.com
- GitHub: [chomins](https://github.com/chomins)
- Portfolio: [chomins.github.io](https://chomins.github.io/)



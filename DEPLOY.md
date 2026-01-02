# GitHub Pages 배포 가이드

## 자동 배포 설정 (GitHub Actions)

이 프로젝트는 GitHub Actions를 사용하여 자동으로 배포됩니다.

### 1. GitHub 저장소 설정

1. GitHub 저장소로 이동: `https://github.com/chomins/chomins.github.io`
2. Settings > Pages로 이동
3. Source를 "GitHub Actions"로 선택
4. Save 클릭

### 2. 코드 푸시

```bash
# 저장소로 이동
cd C:\Users\cms4317\Desktop\coding\chomins.github.io

# 변경사항 확인
git status

# 모든 변경사항 추가
git add .

# 커밋
git commit -m "Initial portfolio deployment"

# GitHub에 푸시
git push origin main
```

### 3. 배포 확인

1. GitHub 저장소의 "Actions" 탭에서 배포 진행 상황 확인
2. 배포 완료 후 `https://chomins.github.io`에서 확인

## 수동 배포 (대안)

GitHub Actions를 사용하지 않는 경우:

```bash
# 빌드
npm run build

# gh-pages 브랜치에 배포 (gh-pages 패키지 필요)
npm install -g gh-pages
gh-pages -d dist
```

## 문제 해결

### 배포가 실패하는 경우

1. GitHub Actions 로그 확인
2. 빌드 오류 확인 (`npm run build` 로컬에서 실행)
3. `vite.config.ts`의 `base` 설정 확인 (루트 도메인이므로 `/`)

### 페이지가 표시되지 않는 경우

1. GitHub Pages 설정 확인
2. 브라우저 캐시 삭제 후 재시도
3. 배포 완료 후 몇 분 대기 (CDN 캐시)


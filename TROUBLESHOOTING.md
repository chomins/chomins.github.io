# 문제 해결 가이드

## MIME 타입 오류 해결

### 증상
```
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream"
```

### 원인
GitHub Pages의 Jekyll이 JavaScript 파일을 올바르게 처리하지 못함

### 해결 방법

1. **`.nojekyll` 파일 확인**
   - `public/.nojekyll` 파일이 존재하는지 확인
   - 이 파일은 GitHub Pages에서 Jekyll 처리를 비활성화합니다

2. **빌드 후 확인**
   ```bash
   npm run build
   ```
   - `dist` 폴더에 `.nojekyll` 파일이 있는지 확인
   - `dist/index.html`이 올바르게 생성되었는지 확인

3. **GitHub Pages 설정 확인**
   - Settings > Pages > Source가 "GitHub Actions"로 설정되어 있는지 확인
   - Jekyll이 비활성화되어 있는지 확인

4. **캐시 삭제**
   - 브라우저 캐시 삭제
   - GitHub Pages 캐시는 몇 분 후 자동으로 갱신됩니다

### 추가 확인 사항

- `vite.config.ts`의 `base`가 `/`로 설정되어 있는지 확인
- 빌드된 파일들이 올바른 경로에 있는지 확인
- GitHub Actions 로그에서 빌드 오류가 없는지 확인


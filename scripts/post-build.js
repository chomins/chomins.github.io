const fs = require('fs');
const path = require('path');

// 빌드 후 .nojekyll 파일 생성
const distPath = path.join(__dirname, '..', 'dist');
const nojekyllPath = path.join(distPath, '.nojekyll');

try {
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ .nojekyll file created in dist folder');
} catch (error) {
  console.error('✗ Failed to create .nojekyll file:', error);
  process.exit(1);
}


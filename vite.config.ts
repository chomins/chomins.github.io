import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-nojekyll',
      closeBundle() {
        // 빌드 완료 후 .nojekyll 파일을 dist 폴더로 복사
        try {
          copyFileSync(
            join(__dirname, 'public', '.nojekyll'),
            join(__dirname, 'dist', '.nojekyll')
          )
          console.log('.nojekyll file copied to dist')
        } catch (error) {
          console.warn('Could not copy .nojekyll file:', error)
        }
      },
    },
  ],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
        },
        // 파일명에 해시를 포함하여 캐시 문제 방지
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
})

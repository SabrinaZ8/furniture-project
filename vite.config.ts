

import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  build: {
    outDir: './dist',        // Pasta onde os arquivos de produção serão gerados
    assetsDir: 'assets',     // Pasta dentro de dist para armazenar assets (imagens, etc.)
    rollupOptions: {
      output: {
        // Personalize o nome e estrutura dos arquivos, se necessário
      }
    }
  }
});

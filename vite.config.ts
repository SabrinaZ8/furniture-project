import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Isso permite conexões de qualquer IP
    port: 5173,        // A porta do Vite, ou a porta que você deseja usar
  },
});

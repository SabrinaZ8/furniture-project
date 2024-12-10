import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // Isso permite conexões de qualquer IP
    port: 5173,        // A porta do Vite, ou a porta que você deseja usar
  },
});

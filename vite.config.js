import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === 'production' ? '/portfolio/' : '/', // ✅
  server: {
    open: '/', // en dev, ouvre la racine
    port: 5173,
  },
}))

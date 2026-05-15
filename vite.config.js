import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/complejo-productivos/',
  server: { port: 5173, open: true }
})

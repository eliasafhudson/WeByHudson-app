import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "WeByHudson-app",  // ← exactamente como se llama en GitHub
  plugins: [
    tailwindcss(),
    react()
  ],
})
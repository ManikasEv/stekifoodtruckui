import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Static files (logo, robots.txt, sitemap.xml) live in `public/` and are copied
// to the build root as-is. Everything imported from `src/` is bundled & hashed.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

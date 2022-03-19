import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginLinaria from '@linaria/rollup'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pluginLinaria(), reactRefresh()],
})

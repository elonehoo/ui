/// <reference types="vitest" />
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})

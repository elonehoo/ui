import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import UI from '../src'

export default defineConfig({
  optimizeDeps: {
    // vitepress is aliased with replacement `join(DIST_CLIENT_PATH, '/index')`
    // This needs to be excluded from optimization
    exclude: ['@vueuse/core', 'vitepress'],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    Components({
      include: [/\.vue/, /\.md/],
      dirs: '.vitepress/components',
      dts: '.vitepress/components.d.ts',
    }) as Plugin,
    Unocss({
      presets: [
        UI() as any,
        presetUno({
          dark: 'media',
        }),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
        }),
      ],
    }),
  ],
})

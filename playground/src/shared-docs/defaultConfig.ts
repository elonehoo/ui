import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'
import UI from '@elonehoo/ui'

export default defineConfig({
  presets: [
    UI(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
  ],
})

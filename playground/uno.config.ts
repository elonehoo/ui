import {
  defineConfig,
  presetIcons,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import UI from '../src/index'

export default defineConfig({
  theme: {
    fontFamily: {
      sans: '\'Inter\', sans-serif',
      mono: '\'Fira Code\', monospace',
    },
  },
  shortcuts: {
    responsiveBorder: 'absolute flex items-center justify-center bg-light-700 dark:bg-dark-800 [&>span]-(w-4 h-4 text-gray-400)',
  },
  presets: [
    presetAttributify() as any,
    presetUno() as any,
    presetIcons(),
    UI(),
  ],
  transformers: [
    transformerCompileClass(),
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})

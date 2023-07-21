import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'
import Sammui from '../src/index'

export default defineConfig({
  shortcuts:[
    [/^radio-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([, color]) => `shrink-0 h-6 w-6 cursor-pointer appearance-none border rounded-full radiomark-${color} border-${color} checked:bg-${color} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${color}`],
  ],
  rules:[
    [/^radiomark-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/,([,color],{ rawSelector, currentSelector, variantHandlers, theme })=>{
      return `
        :root {
          --radiomark-color: #FFFFFF;
        }
        .dark:root {
          --radiomark-color: #000000;
        }
        .radio-${color}:checked{
          animation: radiomark 0.2s ease-in-out;
          box-shadow: var(--radiomark-color) 0px 0px 0px 4px inset, var(--radiomark-color) 0px 0px 0px 4px inset;
        }
        @keyframes radiomark {
          0% {
            box-shadow: 0 0 0 12px var(--radiomark-color) inset, 0 0 0 12px var(--radiomark-color) inset;
          }
          50% {
            box-shadow: 0 0 0 3px var(--radiomark-color) inset, 0 0 0 3px var(--radiomark-color) inset;
          }
          100% {
            box-shadow: 0 0 0 4px var(--radiomark-color) inset, 0 0 0 4px var(--radiomark-color) inset;
          }
        }
      `
    }],
  ],
  presets: [
    Sammui(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.5,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})

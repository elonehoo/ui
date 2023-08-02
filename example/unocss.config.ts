import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'
import Sammui from '../src/index'

export default defineConfig({
  shortcuts: [
  ],
  rules: [
    [/^divider-((rose|pink|fuchsia|purple|violet|indigo|blue|sky|cyan|teal|emerald|green|lime|yellow|amber|orange|red|gray|slate|zinc|neutral|stone|light|dark|lightblue|warmgray|truegray|coolgray|bluegray))$/, ([,color], data: any) => {
      return `
      .divider-${color} {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-self: stretch;
        margin-top: 1rem;
        margin-bottom: 1rem;
        white-space: nowrap;
        height: 1rem;
        &:before,
        &:after {
          content: "";
          flex-grow: 1;
          height: 0.125rem;
          width: 100%;
        }
        &:before {
          background-color: ${data.theme.colors[color]['200']};
        }
        &:after {
          background-color: ${data.theme.colors[color]['200']};
        }
        &:not(:empty) {
          gap: 1rem;
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

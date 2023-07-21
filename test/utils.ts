import prettier from 'prettier/standalone'
import parserCSS from 'prettier/parser-postcss'
import generator from './setup'

export function hexToRgb(color: string, depth: string): { r: number; g: number; b: number } | null {
  // @ts-expect-error the theme has colors
  const hex = generator.config.theme.colors[color][depth]
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: Number.parseInt(result[1], 16),
        g: Number.parseInt(result[2], 16),
        b: Number.parseInt(result[3], 16),
      }
    : null
}

export const uiColor: string[] = [
  'rose', 'pink', 'fuchsia',
  'purple', 'violet', 'indigo',
  'blue', 'sky', 'cyan',
  'teal', 'emerald', 'green',
  'lime', 'yellow', 'amber',
  'orange', 'red', 'gray',
  'slate', 'zinc', 'neutral',
  'stone', 'light', 'dark',
  'lightblue', 'warmgray', 'truegray',
  'coolgray', 'bluegray',
]

export function prettierCss(css: string) {
  return prettier.format(css, { parser: 'css', plugins: [parserCSS as any], singleQuote: true, semi: false })
}

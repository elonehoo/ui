import { describe, expect, it } from 'vitest'
import generator from '../setup'
import { hexToRgb, prettierCSS, uiColor } from '../utils'

describe('alert color', () => {
  for (const color of uiColor) {
    it(`alert ${color}`, async () => {
      const { getLayer } = await generator.generate(`alert-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.alert-${color} {
  display: grid;
  grid-auto-flow: row;
  width: 100%;
  align-content: flex-start;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  border-width: 1px;
  --un-border-opacity: 1;
  border-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-border-opacity));
  border-radius: 1rem;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-bg-opacity));
  padding: 1rem;
  text-align: center;
  --un-text-opacity: 1;
  color: rgba(${color === 'dark' ? '255' : '0'}, ${color === 'dark' ? '255' : '0'}, ${color === 'dark' ? '255' : '0'}, var(--un-text-opacity));
}
@media (min-width: 640px) {
  .alert-${color} {
    grid-auto-flow: column;
    grid-template-columns: auto minmax(auto, 1fr);
    justify-items: start;
    text-align: left;
  }
}
`,
      )
    })
  }
})

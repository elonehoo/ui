import { describe,it,expect } from 'vitest'
import generator from '../setup'
import { prettierCSS,hexToRgb, uiColor } from '../utils'

describe('skeleton color', ()=>{
  for(const color of uiColor){
    it(`skeleton ${color}`, async ()=>{
      const { getLayer } = await generator.generate(`skeleton-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      console.log(css)
      expect(css).toEqual(
`/* layer: shortcuts */
.skeleton-${color} {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '100')?.r}, ${hexToRgb(color, '100')?.g}, ${hexToRgb(color, '100')?.b}, var(--un-bg-opacity));
}
.dark .skeleton-${color} {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '800')?.r}, ${hexToRgb(color, '800')?.g}, ${hexToRgb(color, '800')?.b}, var(--un-bg-opacity));
}
`)
    })
  }
})

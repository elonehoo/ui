import { describe,it,expect } from 'vitest'
import generator from '../setup'
import { prettierCSS,hexToRgb, uiColor } from '../utils'

describe('radio color',()=>{
  for (const color of uiColor) {
    it(`radio ${color}`,async()=>{
      const { getLayer } = await generator.generate(`radio-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.radio-${color} {
  height: 1.5rem;
  width: 1.5rem;
  flex-shrink: 0;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  border-width: 1px;
  --un-border-opacity: 1;
  border-color: rgba(${hexToRgb(color,'DEFAULT')!.r}, ${hexToRgb(color,'DEFAULT')!.g}, ${hexToRgb(color,'DEFAULT')!.b}, var(--un-border-opacity));
  border-radius: 9999px;
}
.radio-${color}:checked {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color,'DEFAULT')!.r}, ${hexToRgb(color,'DEFAULT')!.g}, ${hexToRgb(color,'DEFAULT')!.b}, var(--un-bg-opacity));
}
.radio-${color}:focus-visible {
  outline-width: 2px;
  --un-outline-color-opacity: 1;
  outline-color: rgba(${hexToRgb(color,'DEFAULT')!.r}, ${hexToRgb(color,'DEFAULT')!.g}, ${hexToRgb(color,'DEFAULT')!.b}, var(--un-outline-color-opacity));
  outline-offset: 2px;
  outline-style: solid;
}
`)
    })
  }
})

describe('radio size',()=>{
  it('radio size xs',async()=>{
    const { getLayer } = await generator.generate('radio-xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.radio-xs {
  width: 1rem;
  height: 1rem;
}
`)
  })

  it('radio size sm',async()=>{
    const { getLayer } = await generator.generate('radio-sm')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.radio-sm {
  width: 1.25rem;
  height: 1.25rem;
}
`)
  })

  it('radio size md',async()=>{
    const { getLayer } = await generator.generate('radio-md')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.radio-md {
  width: 1.5rem;
  height: 1.5rem;
}
`)
  })

  it('radio size lg',async()=>{
    const { getLayer } = await generator.generate('radio-lg')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.radio-lg {
  width: 2rem;
  height: 2rem;
}
`)
  })
})


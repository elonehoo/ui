import { describe,it,expect } from 'vitest'
import generator from '../setup'
import { prettierCSS,hexToRgb, uiColor } from '../utils'

describe('select color',()=>{
  for(const color of uiColor){
    it(`select ${color}`, async ()=>{
      const { getLayer } = await generator.generate(`select-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.select-${color} {
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position:
    calc(100% - 20px) calc(1px + 50%),
    calc(100% - 16px) calc(1px + 50%);
  background-size:
    4px 4px,
    4px 4px;
  background-repeat: no-repeat;
  position: relative;
  display: block;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  border-width: 0;
  border-radius: 0.375rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-inline-end: 2.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --un-text-opacity: 1;
  color: rgba(17, 24, 39, var(--un-text-opacity));
  --un-shadow: var(--un-shadow-inset) 0 1px 2px 0
    var(--un-shadow-color, rgba(0, 0, 0, 0.05));
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
  --un-ring-width: 1px;
  --un-ring-offset-shadow: var(--un-ring-inset) 0 0 0
    var(--un-ring-offset-width) var(--un-ring-offset-color);
  --un-ring-shadow: var(--un-ring-inset) 0 0 0
    calc(var(--un-ring-width) + var(--un-ring-offset-width))
    var(--un-ring-color);
  --un-ring-opacity: 1;
  --un-ring-color: rgba(209, 213, 219, var(--un-ring-opacity));
  --un-ring-inset: inset;
}
.select-${color}:disabled {
  cursor: not-allowed;
  opacity: 0.75;
}
.dark .select-${color} {
  --un-bg-opacity: 1;
  background-color: rgba(15, 15, 15, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  --un-ring-opacity: 1;
  --un-ring-color: rgba(55, 65, 81, var(--un-ring-opacity));
}
.select-${color}:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --un-ring-width: 2px;
  --un-ring-offset-shadow: var(--un-ring-inset) 0 0 0
    var(--un-ring-offset-width) var(--un-ring-offset-color);
  --un-ring-shadow: var(--un-ring-inset) 0 0 0
    calc(var(--un-ring-width) + var(--un-ring-offset-width))
    var(--un-ring-color);
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
  --un-ring-opacity: 1;
  --un-ring-color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-ring-opacity));
}
.dark .select-${color}:focus {
  --un-ring-opacity: 1;
  --un-ring-color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-ring-opacity));
}
`)
    })
  }
})

describe('select size',()=>{
  it('select 2xs', async ()=>{
    const { getLayer } = await generator.generate('select-2xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.select-2xs {
  grid-column-gap: 0.25rem;
  column-gap: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
}
`)
  })

  it('select xs', async ()=>{
    const { getLayer } = await generator.generate('select-xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.select-xs {
  grid-column-gap: 0.375rem;
  column-gap: 0.375rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.75rem;
  line-height: 1rem;
}
`)
  })

  it('select sm', async ()=>{
    const { getLayer } = await generator.generate('select-sm')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.select-sm {
  grid-column-gap: 0.5rem;
  column-gap: 0.5rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
`)
  })

  it('select md', async ()=>{
    const { getLayer } = await generator.generate('select-md')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.select-md {
  grid-column-gap: 0.5rem;
  column-gap: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
`)
  })

  it('select lg', async ()=>{
    const { getLayer } = await generator.generate('select-lg')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.select-lg {
  grid-column-gap: 0.5rem;
  column-gap: 0.5rem;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
`)
  })

  it('select xl', async ()=>{
    const { getLayer } = await generator.generate('select-xl')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.select-xl {
  grid-column-gap: 0.5rem;
  column-gap: 0.5rem;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  font-size: 1rem;
  line-height: 1.5rem;
}
`)
  })
})

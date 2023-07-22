import { describe, expect, it } from 'vitest'
import generator from '../setup'
import { hexToRgb, prettierCSS, uiColor } from '../utils'

describe('badge color', () => {
  for (const color of uiColor) {
    it(`badge ${color}`, async () => {
      const { getLayer } = await generator.generate(`badge-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.badge-${color} {
  display: inline-flex;
  align-items: center;
  border-radius: 0.375rem;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '50')?.r}, ${hexToRgb(color, '50')?.g}, ${hexToRgb(color, '50')?.b}, var(--un-bg-opacity));
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-text-opacity));
  --un-ring-width: 1px;
  --un-ring-offset-shadow: var(--un-ring-inset) 0 0 0
    var(--un-ring-offset-width) var(--un-ring-offset-color);
  --un-ring-shadow: var(--un-ring-inset) 0 0 0
    calc(var(--un-ring-width) + var(--un-ring-offset-width))
    var(--un-ring-color);
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
  --un-ring-opacity: 1;
  --un-ring-color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-ring-opacity));
  --un-ring-opacity: 0.1;
  --un-ring-inset: inset;
}
.dark .badge-${color} {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-bg-opacity));
  --un-bg-opacity: 0.1;
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-text-opacity));
  --un-ring-opacity: 1;
  --un-ring-color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-ring-opacity));
  --un-ring-opacity: 0.2;
}
`)
    })
  }
})

describe('badge size', () => {
  it('badge size xs', async () => {
    const { getLayer } = await generator.generate('badge-xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.badge-xs {
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  font-size: 0.75rem;
  line-height: 1rem;
}
`)
  })

  it('badge size sm', async () => {
    const { getLayer } = await generator.generate('badge-sm')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.badge-sm {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
}
`)
  })

  it('badge size md', async () => {
    const { getLayer } = await generator.generate('badge-md')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.badge-md {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
`)
  })

  it('badge size lg', async () => {
    const { getLayer } = await generator.generate('badge-lg')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.badge-lg {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
`)
  })
})

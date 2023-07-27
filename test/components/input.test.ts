import { describe, expect, it } from 'vitest'
import generator from '../setup'
import { hexToRgb, prettierCSS, uiColor } from '../utils'

describe('input color', () => {
  for (const color of uiColor) {
    it(`input ${color}`, async () => {
      const { getLayer } = await generator.generate(`input-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.input-${color} {
  position: relative;
  display: block;
  width: 100%;
  border-width: 0;
  border-radius: 0.375rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
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
.input-${color}:disabled {
  cursor: not-allowed;
  opacity: 0.75;
}
.dark .input-${color} {
  --un-bg-opacity: 1;
  background-color: rgba(15, 15, 15, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  --un-ring-opacity: 1;
  --un-ring-color: rgba(55, 65, 81, var(--un-ring-opacity));
}
.input-${color}:focus {
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
.dark .input-${color}:focus {
  --un-ring-opacity: 1;
  --un-ring-color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-ring-opacity));
}
.dark .input-${color}::placeholder {
  --un-placeholder-opacity: 1;
  color: rgba(107, 114, 128, var(--un-placeholder-opacity));
}
.input-${color}::placeholder {
  --un-placeholder-opacity: 1;
  color: rgba(156, 163, 175, var(--un-placeholder-opacity));
}
`)
    })
  }

  it('input none', async () => {
    const { getLayer } = await generator.generate('input-none')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.input-none {
  position: relative;
  display: block;
  width: 100%;
  border-width: 0;
  border-radius: 0.375rem;
  background-color: transparent;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.input-none:disabled {
  cursor: not-allowed;
  opacity: 0.75;
}
.input-none:focus {
  --un-shadow: 0 0 var(--un-shadow-color, rgba(0, 0, 0, 0));
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
  outline: 2px solid transparent;
  outline-offset: 2px;
  --un-ring-width: 0;
  --un-ring-offset-shadow: var(--un-ring-inset) 0 0 0
    var(--un-ring-offset-width) var(--un-ring-offset-color);
  --un-ring-shadow: var(--un-ring-inset) 0 0 0
    calc(var(--un-ring-width) + var(--un-ring-offset-width))
    var(--un-ring-color);
}
.dark .input-none::placeholder {
  --un-placeholder-opacity: 1;
  color: rgba(107, 114, 128, var(--un-placeholder-opacity));
}
.input-none::placeholder {
  --un-placeholder-opacity: 1;
  color: rgba(156, 163, 175, var(--un-placeholder-opacity));
}
`)
  })
})

describe('input size', () => {
  it('input size 2xs', async () => {
    const { getLayer } = await generator.generate('input-2xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.input-2xs {
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

  it('input size xs', async () => {
    const { getLayer } = await generator.generate('input-xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.input-xs {
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

  it('input size sm', async () => {
    const { getLayer } = await generator.generate('input-sm')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.input-sm {
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

  it('input size md', async () => {
    const { getLayer } = await generator.generate('input-md')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.input-md {
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

  it('input size lg', async () => {
    const { getLayer } = await generator.generate('input-lg')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.input-lg {
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

  it('input size xl', async () => {
    const { getLayer } = await generator.generate('input-xl')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.input-xl {
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

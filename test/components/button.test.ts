import { describe, expect, it } from 'vitest'
import generator from '../setup'
import { hexToRgb, prettierCSS, uiColor } from '../utils'

describe('button base', () => {
  for (const color of uiColor) {
    it(`btn ${color}`, async () => {
      const { getLayer } = await generator.generate(`btn-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)

      expect(css).toEqual(
`/* layer: shortcuts */
.btn-${color} {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  column-gap: 0.375rem;
  border-radius: 0.375rem;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-bg-opacity));
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  --un-text-opacity: 1;
  color: rgba(${color === 'light' ? hexToRgb('gray', '900')?.r : '255'}, ${color === 'light' ? hexToRgb('gray', '900')?.g : '255'}, ${color === 'light' ? hexToRgb('gray', '900')?.b : '255'}, var(--un-text-opacity));
  --un-shadow: var(--un-shadow-inset) 0 1px 2px 0
    var(--un-shadow-color, rgba(0, 0, 0, 0.05));
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
}
.btn-${color}:disabled {
  cursor: not-allowed;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-bg-opacity));
  opacity: 0.75;
}
.dark .btn-${color} {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(${hexToRgb('gray', '900')?.r}, ${hexToRgb('gray', '900')?.g}, ${hexToRgb('gray', '900')?.b}, var(--un-text-opacity));
}
.btn-${color}:hover {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '600')?.r}, ${hexToRgb(color, '600')?.g}, ${hexToRgb(color, '600')?.b}, var(--un-bg-opacity));
}
.dark .btn-${color}:hover {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-bg-opacity));
}
.btn-${color}:hover:disabled {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-bg-opacity));
}
.dark .btn-${color}:disabled {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-bg-opacity));
}
.dark .btn-${color}:hover:disabled {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-bg-opacity));
}
.btn-${color}:focus-visible {
  outline-width: 0;
  outline-width: 2px;
  --un-outline-color-opacity: 1;
  outline-color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-outline-color-opacity));
  outline-offset: 2px;
  outline-style: solid;
}
.dark .btn-${color}:focus-visible {
  --un-outline-color-opacity: 1;
  outline-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-outline-color-opacity));
}
.btn-${color}:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
`)
    })
  }
})

describe('button outline', () => {
  for (const color of uiColor) {
    it(`button outline ${color}`, async () => {
      const { getLayer } = await generator.generate(`btn-outline-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.btn-outline-${color} {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  column-gap: 0.375rem;
  border-radius: 0.375rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
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
  --un-ring-color: currentColor;
  --un-ring-inset: inset;
}
.btn-outline-${color}:disabled {
  cursor: not-allowed;
  background-color: transparent;
  opacity: 0.75;
}
.btn-outline-${color}:hover {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '50')?.r}, ${hexToRgb(color, '50')?.g}, ${hexToRgb(color, '50')?.b}, var(--un-bg-opacity));
}
.dark .btn-outline-${color}:hover {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '950')?.r}, ${hexToRgb(color, '950')?.g}, ${hexToRgb(color, '950')?.b}, var(--un-bg-opacity));
}
.dark .btn-outline-${color}:disabled {
  background-color: transparent;
}
.dark .btn-outline-${color} {
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-text-opacity));
}
.btn-outline-${color}:focus-visible {
  outline-width: 0;
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
.btn-outline-${color}:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.dark .btn-outline-${color}:focus-visible {
  --un-ring-opacity: 1;
  --un-ring-color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-ring-opacity));
}
`)
    })
  }
})

describe('button soft', () => {
  for (const color of uiColor) {
    it(`button soft ${color}`, async () => {
      const { getLayer } = await generator.generate(`btn-soft-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.btn-soft-${color} {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  column-gap: 0.375rem;
  border-radius: 0.375rem;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '50')?.r}, ${hexToRgb(color, '50')?.g}, ${hexToRgb(color, '50')?.b}, var(--un-bg-opacity));
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-text-opacity));
}
.btn-soft-${color}:disabled {
  cursor: not-allowed;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '50')?.r}, ${hexToRgb(color, '50')?.g}, ${hexToRgb(color, '50')?.b}, var(--un-bg-opacity));
  opacity: 0.75;
}
.dark .btn-soft-${color} {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '950')?.r}, ${hexToRgb(color, '950')?.g}, ${hexToRgb(color, '950')?.b}, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-text-opacity));
}
.btn-soft-${color}:hover {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '100')?.r}, ${hexToRgb(color, '100')?.g}, ${hexToRgb(color, '100')?.b}, var(--un-bg-opacity));
}
.dark .btn-soft-${color}:hover {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '900')?.r}, ${hexToRgb(color, '900')?.g}, ${hexToRgb(color, '900')?.b}, var(--un-bg-opacity));
}
.dark .btn-soft-${color}:disabled {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '950')?.r}, ${hexToRgb(color, '950')?.g}, ${hexToRgb(color, '950')?.b}, var(--un-bg-opacity));
}
.btn-soft-${color}:focus-visible {
  outline-width: 0;
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
  --un-ring-inset: inset;
}
.btn-soft-${color}:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.dark .btn-soft-${color}:focus-visible {
  --un-ring-opacity: 1;
  --un-ring-color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-ring-opacity));
}
`)
    })
  }
})

describe('button ghost', () => {
  for (const color of uiColor) {
    it(`button ghost ${color}`, async () => {
      const { getLayer } = await generator.generate(`btn-ghost-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.btn-ghost-${color} {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  column-gap: 0.375rem;
  border-radius: 0.375rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-text-opacity));
}
.btn-ghost-${color}:disabled {
  cursor: not-allowed;
  background-color: transparent;
  opacity: 0.75;
}
.btn-ghost-${color}:hover {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '50')?.r}, ${hexToRgb(color, '50')?.g}, ${hexToRgb(color, '50')?.b}, var(--un-bg-opacity));
}
.dark .btn-ghost-${color}:hover {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '950')?.r}, ${hexToRgb(color, '950')?.g}, ${hexToRgb(color, '950')?.b}, var(--un-bg-opacity));
}
.dark .btn-ghost-${color}:disabled {
  background-color: transparent;
}
.dark .btn-ghost-${color} {
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-text-opacity));
}
.btn-ghost-${color}:focus-visible {
  outline-width: 0;
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
  --un-ring-inset: inset;
}
.btn-ghost-${color}:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.dark .btn-ghost-${color}:focus-visible {
  --un-ring-opacity: 1;
  --un-ring-color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-ring-opacity));
}
`)
    })
  }
})

describe('button link', () => {
  for (const color of uiColor) {
    it(`button link ${color}`, async () => {
      const { getLayer } = await generator.generate(`btn-link-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.btn-link-${color} {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  column-gap: 0.375rem;
  border-radius: 0.375rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-text-opacity));
  text-underline-offset: 4px;
}
.btn-link-${color}:disabled {
  cursor: not-allowed;
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-text-opacity));
  opacity: 0.75;
}
.dark .btn-link-${color} {
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-text-opacity));
}
.btn-link-${color}:hover {
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '600')?.r}, ${hexToRgb(color, '600')?.g}, ${hexToRgb(color, '600')?.b}, var(--un-text-opacity));
  text-decoration-line: underline;
}
.dark .btn-link-${color}:hover {
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-text-opacity));
}
.dark .btn-link-${color}:disabled {
  --un-text-opacity: 1;
  color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-text-opacity));
}
.btn-link-${color}:focus-visible {
  outline-width: 0;
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
  --un-ring-inset: inset;
}
.btn-link-${color}:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.dark .btn-link-${color}:focus-visible {
  --un-ring-opacity: 1;
  --un-ring-color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-ring-opacity));
}
`)
    })
  }
})

describe('button black', () => {
  for (const color of uiColor) {
    it(`button black ${color}`, async () => {
      const { getLayer } = await generator.generate(`btn-black-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.btn-black-${color} {
  width: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  column-gap: 0.375rem;
  border-radius: 0.375rem;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-bg-opacity));
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  --un-text-opacity: 1;
  color: rgba(${color === 'light' ? hexToRgb('gray', '900')?.r : '255'}, ${color === 'light' ? hexToRgb('gray', '900')?.g : '255'}, ${color === 'light' ? hexToRgb('gray', '900')?.b : '255'}, var(--un-text-opacity));
  --un-shadow: var(--un-shadow-inset) 0 1px 2px 0
    var(--un-shadow-color, rgba(0, 0, 0, 0.05));
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
}
.btn-black-${color}:disabled {
  cursor: not-allowed;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-bg-opacity));
  opacity: 0.75;
}
.dark .btn-black-${color} {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(17, 24, 39, var(--un-text-opacity));
}
.btn-black-${color}:hover {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '600')?.r}, ${hexToRgb(color, '600')?.g}, ${hexToRgb(color, '600')?.b}, var(--un-bg-opacity));
}
.dark .btn-black-${color}:hover {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-bg-opacity));
}
.dark .btn-black-${color}:disabled {
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-bg-opacity));
}
.btn-black-${color}:focus-visible {
  outline-width: 0;
  outline-width: 2px;
  --un-outline-color-opacity: 1;
  outline-color: rgba(${hexToRgb(color, '500')?.r}, ${hexToRgb(color, '500')?.g}, ${hexToRgb(color, '500')?.b}, var(--un-outline-color-opacity));
  outline-offset: 2px;
  outline-style: solid;
}
.dark .btn-black-${color}:focus-visible {
  --un-outline-color-opacity: 1;
  outline-color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-outline-color-opacity));
}
.btn-black-${color}:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
`)
    })
  }
})

describe('button size', () => {
  it('button size 2xs', async () => {
    const { getLayer } = await generator.generate('btn-2xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.btn-2xs {
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

  it('button size xs', async () => {
    const { getLayer } = await generator.generate('btn-xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.btn-xs {
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

  it('button size md', async () => {
    const { getLayer } = await generator.generate('btn-md')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.btn-md {
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

  it('button size lg', async () => {
    const { getLayer } = await generator.generate('btn-lg')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.btn-lg {
  column-gap: 0.625rem;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
`)
  })

  it('button size xl', async () => {
    const { getLayer } = await generator.generate('btn-xl')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.btn-xl {
  column-gap: 0.625rem;
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

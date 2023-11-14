import { describe, expect, it } from 'vitest'
import generator from '../setup'
import { hexToRgb, prettierCSS, uiColor } from '../utils'

describe('checkbox color', () => {
  for (const color of uiColor) {
    it(`checkbox ${color}`, async () => {
      const { getLayer } = await generator.generate(`checkbox-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.checkbox-${color} {
  height: 1.5rem;
  width: 1.5rem;
  flex-shrink: 0;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  border-width: 1px;
  --un-border-opacity: 1;
  border-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-border-opacity));
  border-radius: 0.5rem;
}
.checkbox-${color}:checked {
  animation: checkmark 0.2s ease-in-out;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-bg-opacity));
  background-repeat: no-repeat;
}
.checkbox-${color}:indeterminate {
  animation: checkmark 0.2s ease-in-out;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-bg-opacity));
  background-repeat: no-repeat;
}
.checkbox-${color}:focus-visible {
  outline-width: 2px;
  --un-outline-color-opacity: 1;
  outline-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-outline-color-opacity));
  outline-offset: 2px;
  outline-style: solid;
}
`,
      )
    })
  }
})

describe('checkbox size', () => {
  it('checkbox size xs', async () => {
    const { getLayer } = await generator.generate('checkbox-xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.checkbox-xs {
  width: 1rem;
  height: 1rem;
}
`,
    )
  })

  it('checkbox size sm', async () => {
    const { getLayer } = await generator.generate('checkbox-sm')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.checkbox-sm {
  width: 1.25rem;
  height: 1.25rem;
}
`,
    )
  })

  it('checkbox size md', async () => {
    const { getLayer } = await generator.generate('checkbox-md')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.checkbox-md {
  width: 1.5rem;
  height: 1.5rem;
}
`,
    )
  })

  it('checkbox size lg', async () => {
    const { getLayer } = await generator.generate('checkbox-lg')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.checkbox-lg {
  width: 2rem;
  height: 2rem;
}
`,
    )
  })
})

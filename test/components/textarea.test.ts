import { describe, expect, it } from 'vitest'
import generator from '../setup'
import { hexToRgb, prettierCSS, uiColor } from '../utils'

describe('textarea color', () => {
  for (const color of uiColor) {
    it(`textarea ${color}`, async () => {
      const { getLayer } = await generator.generate(`textarea-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.textarea-${color} {
  position: relative;
  display: block;
  width: 100%;
  resize: none;
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
.textarea-${color}:disabled {
  cursor: not-allowed;
  opacity: 0.75;
}
.dark .textarea-${color} {
  --un-bg-opacity: 1;
  background-color: rgba(15, 15, 15, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  --un-ring-opacity: 1;
  --un-ring-color: rgba(55, 65, 81, var(--un-ring-opacity));
}
.textarea-${color}:focus {
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
.dark .textarea-${color}:focus {
  --un-ring-opacity: 1;
  --un-ring-color: rgba(${hexToRgb(color, '400')?.r}, ${hexToRgb(color, '400')?.g}, ${hexToRgb(color, '400')?.b}, var(--un-ring-opacity));
}
.dark .textarea-${color}::placeholder {
  --un-placeholder-opacity: 1;
  color: rgba(107, 114, 128, var(--un-placeholder-opacity));
}
.textarea-${color}::placeholder {
  --un-placeholder-opacity: 1;
  color: rgba(156, 163, 175, var(--un-placeholder-opacity));
}
`,
      )
    })
  }

  it('textarea none', async () => {
    const { getLayer } = await generator.generate('textarea-none')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.textarea-none {
  position: relative;
  display: block;
  width: 100%;
  resize: none;
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
.textarea-none:disabled {
  cursor: not-allowed;
  opacity: 0.75;
}
.textarea-none:focus {
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
.dark .textarea-none::placeholder {
  --un-placeholder-opacity: 1;
  color: rgba(107, 114, 128, var(--un-placeholder-opacity));
}
.textarea-none::placeholder {
  --un-placeholder-opacity: 1;
  color: rgba(156, 163, 175, var(--un-placeholder-opacity));
}
`,
    )
  })
})

describe('textarea size', () => {
  it('textarea 2xs', async () => {
    const { getLayer } = await generator.generate('textarea-2xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.textarea-2xs {
  column-gap: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
}
`,
    )
  })

  it('textarea xs', async () => {
    const { getLayer } = await generator.generate('textarea-xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.textarea-xs {
  column-gap: 0.375rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.75rem;
  line-height: 1rem;
}
`,
    )
  })

  it('textarea sm', async () => {
    const { getLayer } = await generator.generate('textarea-sm')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.textarea-sm {
  column-gap: 0.5rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
`,
    )
  })

  it('textarea md', async () => {
    const { getLayer } = await generator.generate('textarea-md')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.textarea-md {
  column-gap: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
`,
    )
  })

  it('textarea lg', async () => {
    const { getLayer } = await generator.generate('textarea-lg')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.textarea-lg {
  column-gap: 0.5rem;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
`,
    )
  })

  it('textarea xl', async () => {
    const { getLayer } = await generator.generate('textarea-xl')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.textarea-xl {
  column-gap: 0.5rem;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  font-size: 1rem;
  line-height: 1.5rem;
}
`,
    )
  })
})

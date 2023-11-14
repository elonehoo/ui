import { describe, expect, it } from 'vitest'
import generator from '../setup'
import { prettierCSS } from '../utils'

describe('kbd', () => {
  it('kbd', async () => {
    const { getLayer } = await generator.generate('kbd')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.kbd {
  height: 1.25rem;
  min-width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--un-bg-opacity));
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 11px;
  font-weight: 500;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'Noto Sans',
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
  --un-text-opacity: 1;
  color: rgba(17, 24, 39, var(--un-text-opacity));
  --un-ring-width: 1px;
  --un-ring-offset-shadow: var(--un-ring-inset) 0 0 0
    var(--un-ring-offset-width) var(--un-ring-offset-color);
  --un-ring-shadow: var(--un-ring-inset) 0 0 0
    calc(var(--un-ring-width) + var(--un-ring-offset-width))
    var(--un-ring-color);
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
  --un-ring-opacity: 1;
  --un-ring-color: rgba(209, 213, 219, var(--un-ring-opacity));
  --un-ring-inset: inset;
}
.dark .kbd {
  --un-bg-opacity: 1;
  background-color: rgba(31, 41, 55, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  --un-ring-opacity: 1;
  --un-ring-color: rgba(55, 65, 81, var(--un-ring-opacity));
}
`,
    )
  })

  it('kbd-sm', async () => {
    const { getLayer } = await generator.generate('kbd-sm')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.kbd-sm {
  height: 1.25rem;
  min-width: 20px;
  font-size: 11px;
}
`,
    )
  })

  it('kbd-xs', async () => {
    const { getLayer } = await generator.generate('kbd-xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.kbd-xs {
  height: 1rem;
  min-width: 16px;
  font-size: 10px;
}
`,
    )
  })

  it('kbd-md', async () => {
    const { getLayer } = await generator.generate('kbd-md')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.kbd-md {
  height: 1.5rem;
  min-width: 24px;
  font-size: 12px;
}
`,
    )
  })
})

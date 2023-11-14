import { describe, expect, it } from 'vitest'
import generator from '../setup'
import { prettierCSS } from '../utils'

describe('space', () => {
  it('space start', async () => {
    const { getLayer } = await generator.generate('space-start')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.space-start {
  flex-flow: row wrap;
  display: flex;
  justify-content: flex-start;
  gap: 8px 12px;
}
`,
    )
  })

  it('space center', async () => {
    const { getLayer } = await generator.generate('space-center')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.space-center {
  flex-flow: row wrap;
  display: flex;
  justify-content: center;
  gap: 8px 12px;
}
`,
    )
  })

  it('space end', async () => {
    const { getLayer } = await generator.generate('space-end')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.space-end {
  flex-flow: row wrap;
  display: flex;
  justify-content: flex-end;
  gap: 8px 12px;
}
`,
    )
  })

  it('space around', async () => {
    const { getLayer } = await generator.generate('space-around')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.space-around {
  flex-flow: row wrap;
  display: flex;
  justify-content: space-around;
  gap: 8px 12px;
}
`,
    )
  })

  it('space between', async () => {
    const { getLayer } = await generator.generate('space-between')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.space-between {
  flex-flow: row wrap;
  display: flex;
  justify-content: space-between;
  gap: 8px 12px;
}
`,
    )
  })

  it('space evenly', async () => {
    const { getLayer } = await generator.generate('space-evenly')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.space-evenly {
  flex-flow: row wrap;
  display: flex;
  justify-content: space-evenly;
  gap: 8px 12px;
}
`,
    )
  })

  it('space stretch', async () => {
    const { getLayer } = await generator.generate('space-stretch')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.space-stretch {
  flex-flow: row wrap;
  display: flex;
  justify-content: stretch;
  gap: 8px 12px;
}
`,
    )
  })

  it('space vertical', async () => {
    const { getLayer } = await generator.generate('space-vertical')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.space-vertical {
  flex-flow: column nowrap;
}
`,
    )
  })
})

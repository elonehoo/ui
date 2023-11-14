import { describe, expect, it } from 'vitest'
import generator from '../setup'
import { prettierCSS } from '../utils'

describe('content', () => {
  it('content', async () => {
    const { getLayer } = await generator.generate('content')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.content {
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (min-width: 640px) {
  .content {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
@media (min-width: 1024px) {
  .content {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
`,
    )
  })
})

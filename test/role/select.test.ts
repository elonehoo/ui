import { describe,it,expect } from 'vitest'
import generator from '../setup'
import { prettierCSS } from '../utils'


describe('select arrow',()=>{
  it('select arrow color',async()=>{
    const { getLayer } = await generator.generate('select-arrow')
    const css = await prettierCSS(getLayer('default')!)
    expect(css).toEqual(
`/* layer: default */
.select-arrow {
  background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position:
    calc(100% - 20px) calc(1px + 50%),
    calc(100% - 16px) calc(1px + 50%);
  background-size:
    4px 4px,
    4px 4px;
  background-repeat: no-repeat;
}
`)
  })
})

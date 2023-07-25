import { describe,it,expect } from 'vitest'
import generator from '../setup'
import { prettierCSS, uiColor } from '../utils'

describe('range color',()=>{
  for (const color of uiColor) {
    it(`range ${color}`,async()=>{
      const { getLayer } = await generator.generate(`range-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.range-${color}:focus {
  outline: none;
}
.range-${color} {
  height: 1.5rem;
  width: 100%;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  overflow: hidden;
  border-radius: 1rem;
  background-color: transparent;
}
`)
    })
  }
})

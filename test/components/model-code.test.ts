import { describe,it,expect } from 'vitest'
import generator from '../setup'
import { prettierCSS,uiColor, hexToRgb } from '../utils'

describe('model code color',()=>{
  for(const color of uiColor){
    it(`model code ${color}`, async ()=>{
      const { getLayer } = await generator.generate(`model-code-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.model-code-${color} {
  position: relative;
  min-width: 18rem;
  overflow: hidden;
  overflow-x: auto;
  border-radius: 1rem;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-bg-opacity));
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  --un-text-opacity: 1;
  ${
    color === 'light' ?
    'color: rgba(0, 0, 0, var(--un-text-opacity));'
    :'color: rgba(255, 255, 255, var(--un-text-opacity));'
  }
}
.model-code-${color}::before {
  margin-bottom: 1rem;
  display: block;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 9999px;
  opacity: 0.3;
  --un-shadow: 1.4em 0, 2.8em 0, 4.2em 0;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
  content: '';
}
`)
    })
  }
})

describe('code line', ()=>{
  it('code line',async ()=>{
    const { getLayer } = await generator.generate('code-line')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.code-line::before {
  margin-right: 2ch;
  display: inline-block;
  width: 2rem;
  text-align: right;
  opacity: 0.5;
  content: '';
  content: attr(data-prefix);
}
.code-line {
  display: flex;
  justify-content: flex-start;
  padding-right: 1.25rem;
}
`)
  })
})

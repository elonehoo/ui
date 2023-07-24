import { describe,it,expect } from 'vitest'
import generator from '../setup'
import { prettierCSS,uiColor } from '../utils'

describe('radiomark color',()=>{
  for (const color of uiColor) {
    it(`radiomark ${color}`,async()=>{
      const { getLayer } = await generator.generate(`radiomark-${color}`)
      const css = await prettierCSS(getLayer('default')!)
      expect(css).toEqual(
`/* layer: default */

:root {
  --radiomark-color: #ffffff;
}
.dark:root {
  --radiomark-color: #000000;
}
.radio-${color}:checked {
  animation: radiomark 0.2s ease-in-out;
  box-shadow:
    var(--radiomark-color) 0px 0px 0px 4px inset,
    var(--radiomark-color) 0px 0px 0px 4px inset;
}
@keyframes radiomark {
  0% {
    box-shadow:
      0 0 0 12px var(--radiomark-color) inset,
      0 0 0 12px var(--radiomark-color) inset;
  }
  50% {
    box-shadow:
      0 0 0 3px var(--radiomark-color) inset,
      0 0 0 3px var(--radiomark-color) inset;
  }
  100% {
    box-shadow:
      0 0 0 4px var(--radiomark-color) inset,
      0 0 0 4px var(--radiomark-color) inset;
  }
}
`)
    })
  }
})

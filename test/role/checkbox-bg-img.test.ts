import { describe,it,expect } from 'vitest'
import generator from '../setup'
import { prettierCSS,uiColor, getHex } from '../utils'

describe('checkbox bg img color',()=>{
  for (const color of uiColor) {
    it(`checkbox bg img ${color}`,async()=>{
      const { getLayer } = await generator.generate(`checkbox-bg-img-${color}`)
      const css = await prettierCSS(getLayer('default')!)
      expect(css).toEqual(
`/* layer: default */

.checkbox-bg-img-${color}:checked {
  background-image: linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0) 65%,
      ${getHex(color,'DEFAULT')} 65.99%
    ),
    linear-gradient(45deg, rgba(0, 0, 0, 0) 75%, ${getHex(color,'DEFAULT')} 75.99%),
    linear-gradient(-45deg, ${getHex(color,'DEFAULT')} 40%, rgba(0, 0, 0, 0) 40.99%),
    linear-gradient(
      45deg,
      ${getHex(color,'DEFAULT')} 30%,
      ${color !== 'dark' ? 'rgb(29, 35, 42) 30.99%,' : 'rgb(255, 255, 255) 30.99%,'}
      ${color !== 'dark' ? 'rgb(29, 35, 42) 40%,' : 'rgb(255, 255, 255) 40%,'}
      rgba(0, 0, 0, 0) 40.99%
    ),
    linear-gradient(-45deg, ${color !== 'dark' ? 'rgb(29, 35, 42)' : 'rgb(255, 255, 255)'} 50%, ${getHex(color,'DEFAULT')} 50.99%);
}
.checkbox-bg-img-${color}:indeterminate {
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0) 80%, ${getHex(color,'DEFAULT')} 80%),
    linear-gradient(-90deg, rgba(0, 0, 0, 0) 80%, ${getHex(color,'DEFAULT')} 80%),
    linear-gradient(
      0deg,
      ${getHex(color,'DEFAULT')} 43%,
      ${color !== 'dark' ? 'rgb(29, 35, 42) 43%,' : 'rgb(255, 255, 255) 43%,'}
      ${color !== 'dark' ? 'rgb(29, 35, 42) 57%,' : 'rgb(255, 255, 255) 57%,'}
      ${getHex(color,'DEFAULT')} 57%
    );
}
@keyframes checkmark {
  0% {
    background-position-y: 5px;
  }
  50% {
    background-position-y: -2px;
  }
  100% {
    background-position-y: 0;
  }
}
`)
    })
  }
})

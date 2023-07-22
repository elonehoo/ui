import { describe,it,expect } from 'vitest'
import generator from '../setup'
import { prettierCSS } from '../utils'

describe('input',()=>{
  it('input', async ()=>{
    const { getLayer } = await generator.generate('input-green')
    const css = await prettierCSS(getLayer('shortcuts')!)
    console.log(css)
    expect(css).toEqual(
`/* layer: shortcuts */
.input-green {
  position: relative;
  display: block;
  width: 100%;
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
.input-green:disabled {
  cursor: not-allowed;
  opacity: 0.75;
}
.dark .input-green {
  --un-bg-opacity: 1;
  background-color: rgba(17, 24, 39, var(--un-bg-opacity));
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
  --un-ring-opacity: 1;
  --un-ring-color: rgba(55, 65, 81, var(--un-ring-opacity));
}
.input-green:focus {
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
  --un-ring-color: rgba(34, 197, 94, var(--un-ring-opacity));
}
.dark .input-green:focus {
  --un-ring-opacity: 1;
  --un-ring-color: rgba(74, 222, 128, var(--un-ring-opacity));
}
.dark .input-green::placeholder {
  --un-placeholder-opacity: 1;
  color: rgba(107, 114, 128, var(--un-placeholder-opacity));
}
.input-green::placeholder {
  --un-placeholder-opacity: 1;
  color: rgba(156, 163, 175, var(--un-placeholder-opacity));
}
`)
  })
})

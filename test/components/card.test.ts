import { describe, expect, it } from 'vitest'
import generator from '../setup'
import { prettierCSS } from '../utils'

describe('card', () => {
  it('card-body', async () => {
    const { getLayer } = await generator.generate('card-body')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.card-body {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
@media (min-width: 640px) {
  .card-body {
    padding: 1.5rem;
  }
}
`)
  })

  it('card-box', async () => {
    const { getLayer } = await generator.generate('card-box')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.card-box {
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
  --un-shadow: var(--un-shadow-inset) 0 1px 3px 0
      var(--un-shadow-color, rgba(0, 0, 0, 0.1)),
    var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgba(0, 0, 0, 0.1));
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
  --un-ring-width: 1px;
  --un-ring-offset-shadow: var(--un-ring-inset) 0 0 0
    var(--un-ring-offset-width) var(--un-ring-offset-color);
  --un-ring-shadow: var(--un-ring-inset) 0 0 0
    calc(var(--un-ring-width) + var(--un-ring-offset-width))
    var(--un-ring-color);
  --un-ring-opacity: 1;
  --un-ring-color: rgba(229, 231, 235, var(--un-ring-opacity));
}
.card-box > :not([hidden]) ~ :not([hidden]) {
  --un-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--un-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--un-divide-y-reverse));
  --un-divide-opacity: 1;
  border-color: rgba(229, 231, 235, var(--un-divide-opacity));
}
.dark .card-box > :not([hidden]) ~ :not([hidden]) {
  --un-divide-opacity: 1;
  border-color: rgba(31, 41, 55, var(--un-divide-opacity));
}
.dark .card-box {
  --un-bg-opacity: 1;
  background-color: rgba(15, 15, 15, var(--un-bg-opacity));
  --un-ring-opacity: 1;
  --un-ring-color: rgba(31, 41, 55, var(--un-ring-opacity));
}
`)
  })

  it('card-head', async () => {
    const { getLayer } = await generator.generate('card-head')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.card-head {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
@media (min-width: 640px) {
  .card-head {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
`)
  })

  it('card-footer', async () => {
    const { getLayer } = await generator.generate('card-footer')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.card-footer {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
@media (min-width: 640px) {
  .card-footer {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
`)
  })
})

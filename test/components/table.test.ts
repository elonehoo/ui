import { describe,it,expect } from 'vitest'
import generator from '../setup'
import { prettierCSS } from '../utils'

describe('table',()=>{
  it('table box', async ()=>{
    const { getLayer } = await generator.generate('table-box')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.table-box {
  position: relative;
  display: flex;
  overflow-x: auto;
  border-width: 1px;
  --un-border-opacity: 1;
  border-color: rgba(229, 231, 235, var(--un-border-opacity));
  border-radius: 0.375rem;
  --un-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--un-bg-opacity));
}
.dark .table-box {
  --un-border-opacity: 1;
  border-color: rgba(31, 41, 55, var(--un-border-opacity));
  --un-bg-opacity: 1;
  background-color: rgba(15, 15, 15, var(--un-bg-opacity));
}
`)
  })

  it('table main', async ()=>{
    const { getLayer } = await generator.generate('table-main')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.table-main {
  min-width: 100%;
  table-layout: fixed;
}
.table-main > :not([hidden]) ~ :not([hidden]) {
  --un-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--un-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--un-divide-y-reverse));
  --un-divide-opacity: 1;
  border-color: rgba(209, 213, 219, var(--un-divide-opacity));
}
.dark .table-main > :not([hidden]) ~ :not([hidden]) {
  --un-divide-opacity: 1;
  border-color: rgba(31, 41, 55, var(--un-divide-opacity));
}
`)
  })

  it('table th', async ()=>{
    const { getLayer } = await generator.generate('table-th')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.table-th {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  --un-text-opacity: 1;
  color: rgba(8, 8, 8, var(--un-text-opacity));
}
[dir='rtl'] .table-th {
  text-align: right;
}
.dark .table-th {
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}
`)
  })

  it('table body', async ()=>{
    const { getLayer } = await generator.generate('table-body')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.table-body > :not([hidden]) ~ :not([hidden]) {
  --un-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--un-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--un-divide-y-reverse));
  --un-divide-opacity: 1;
  border-color: rgba(229, 231, 235, var(--un-divide-opacity));
}
.dark .table-body > :not([hidden]) ~ :not([hidden]) {
  --un-divide-opacity: 1;
  border-color: rgba(24, 24, 24, var(--un-divide-opacity));
}
`)
  })

  it('table td', async ()=>{
    const { getLayer } = await generator.generate('table-td')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.table-td {
  white-space: nowrap;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  --un-text-opacity: 1;
  color: rgba(107, 114, 128, var(--un-text-opacity));
}
.dark .table-td {
  --un-text-opacity: 1;
  color: rgba(156, 163, 175, var(--un-text-opacity));
}
`)
  })
})

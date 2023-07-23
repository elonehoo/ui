import { describe,it,expect } from 'vitest'
import generator from '../setup'
import { prettierCSS,hexToRgb, uiColor } from '../utils'

describe('toggle color',()=>{
  for(const color of uiColor){
    it(`toggle ${color}`, async ()=>{
      const { getLayer } = await generator.generate(`toggle-${color}`)
      const css = await prettierCSS(getLayer('shortcuts')!)
      expect(css).toEqual(
`/* layer: shortcuts */
.toggle-${color} {
  height: 1.5rem;
  width: 3rem;
  flex-shrink: 0;
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  border-width: 1px;
  --un-border-opacity: 1;
  border-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-border-opacity));
  border-radius: 1.5rem;
  --un-bg-opacity: 1;
  background-color: rgba(${hexToRgb(color, 'DEFAULT')?.r}, ${hexToRgb(color, 'DEFAULT')?.g}, ${hexToRgb(color, 'DEFAULT')?.b}, var(--un-bg-opacity));
  --un-bg-opacity: 0.4;
  --un-shadow: -1.5rem 0 0 2px white inset, 0 0 0 2px white inset;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.toggle-${color}:disabled {
  cursor: not-allowed;
}
.toggle-${color}:checked {
  --un-bg-opacity: 1;
  --un-shadow: 1.5rem 0 0 2px white inset, 0 0 0 2px white inset;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
}
.dark .toggle-${color} {
  --un-shadow: -1.5rem 0 0 2px black inset, 0 0 0 2px black inset;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
}
.dark .toggle-${color}:checked {
  --un-shadow: 1.5rem 0 0 2px black inset, 0 0 0 2px black inset;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
}
.dark .toggle-${color}:indeterminate {
  --un-shadow: 1.5rem 0 0 2px black inset, 0 0 0 2px black inset;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
}
.toggle-${color}:indeterminate {
  --un-shadow: -1.5rem 0 0 2px white inset, 0 0 0 2px white inset;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow);
}
.toggle-${color}:focus-visible {
  outline-width: 2px;
  --un-outline-color-opacity: 1;
  outline-color: rgba(${hexToRgb(color, '200')?.r}, ${hexToRgb(color, '200')?.g}, ${hexToRgb(color, '200')?.b}, var(--un-outline-color-opacity));
  outline-offset: 2px;
  outline-style: solid;
}
`)
    })
  }

  it(`toggle none`, async ()=>{
    const { getLayer } = await generator.generate(`toggle-none`)
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.dark .toggle-none {
  --un-shadow: 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.toggle-none {
  --un-shadow: 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-none:checked {
  --un-shadow: 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.toggle-none:checked {
  --un-shadow: 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-none:indeterminate {
  --un-shadow: 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.toggle-none:indeterminate {
  --un-shadow: 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
`)
  })
})

describe('toggle size',()=>{
  it(`toggle xs`, async ()=>{
    const { getLayer } = await generator.generate(`toggle-xs`)
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.toggle-xs {
  height: 1rem !important;
  width: 1.5rem !important;
  --un-shadow: -0.5rem 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-xs {
  --un-shadow: -0.5rem 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-xs:checked {
  --un-shadow: 0.5rem 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.toggle-xs:checked {
  --un-shadow: 0.5rem 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-xs:indeterminate {
  --un-shadow: 0.5rem 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.toggle-xs:indeterminate {
  --un-shadow: -0.5rem 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
`)
  })

  it(`toggle sm`, async ()=>{
    const { getLayer } = await generator.generate(`toggle-sm`)
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.toggle-sm {
  height: 1.25rem !important;
  width: 2rem !important;
  --un-shadow: -0.75rem 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-sm {
  --un-shadow: -0.75rem 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-sm:checked {
  --un-shadow: 0.75rem 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.toggle-sm:checked {
  --un-shadow: 0.75rem 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-sm:indeterminate {
  --un-shadow: 0.75rem 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.toggle-sm:indeterminate {
  --un-shadow: -0.75rem 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
`)
  })

  it(`toggle md`, async ()=>{
    const { getLayer } = await generator.generate(`toggle-md`)
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.toggle-md {
  height: 1.5rem !important;
  width: 3rem !important;
  --un-shadow: -1.5rem 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-md {
  --un-shadow: -1.5rem 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-md:checked {
  --un-shadow: 1.5rem 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.toggle-md:checked {
  --un-shadow: 1.5rem 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-md:indeterminate {
  --un-shadow: 1.5rem 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.toggle-md:indeterminate {
  --un-shadow: -1.5rem 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
`)
  })

  it(`toggle lg`, async ()=>{
    const { getLayer } = await generator.generate(`toggle-lg`)
    const css = await prettierCSS(getLayer('shortcuts')!)
    console.log(css)
    expect(css).toEqual(
`/* layer: shortcuts */
.toggle-lg {
  height: 2rem !important;
  width: 4rem !important;
  --un-shadow: -2rem 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-lg {
  --un-shadow: -2rem 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-lg:checked {
  --un-shadow: 2rem 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.toggle-lg:checked {
  --un-shadow: 2rem 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.dark .toggle-lg:indeterminate {
  --un-shadow: 2rem 0 0 2px black inset, 0 0 0 2px black inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
.toggle-lg:indeterminate {
  --un-shadow: -2rem 0 0 2px white inset, 0 0 0 2px white inset !important;
  box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
    var(--un-shadow) !important;
}
`)
  })
})

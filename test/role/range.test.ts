import { describe, expect, it } from 'vitest'
import generator from '../setup'
import { getHex, prettierCSS, uiColor } from '../utils'

describe('range size', () => {
  it('range size xs', async () => {
    const { getLayer } = await generator.generate('range-xs')
    const css = await prettierCSS(getLayer('default')!)
    expect(css).toEqual(
`/* layer: default */

.range-xs {
  height: 1rem !important;
}
.range-xs::-webkit-slider-runnable-track {
  height: 0.25rem !important;
}
.range-xs::-moz-range-track {
  height: 0.25rem !important;
}
.range-xs::-webkit-slider-thumb {
  height: 1rem !important;
  width: 1rem !important;
  --filler-offset: 0.4rem !important;
}
.range-xs::-moz-range-thumb {
  height: 1rem !important;
  width: 1rem !important;
  --filler-offset: 0.4rem !important;
}
`)
  })

  it('range size sm', async () => {
    const { getLayer } = await generator.generate('range-sm')
    const css = await prettierCSS(getLayer('default')!)
    expect(css).toEqual(
`/* layer: default */

.range-sm {
  height: 1.25rem !important;
}
.range-sm::-webkit-slider-runnable-track {
  height: 0.25rem !important;
}
.range-sm::-moz-range-track {
  height: 0.25rem !important;
}
.range-sm::-webkit-slider-thumb {
  height: 1.25rem !important;
  width: 1.25rem !important;
  --filler-offset: 0.5rem !important;
}
.range-sm::-moz-range-thumb {
  height: 1.25rem !important;
  width: 1.25rem !important;
  --filler-offset: 0.5rem !important;
}
`)
  })

  it('range size md', async () => {
    const { getLayer } = await generator.generate('range-md')
    const css = await prettierCSS(getLayer('default')!)
    expect(css).toEqual(
`/* layer: default */

.range-md {
  height: 1.5rem !important;
}

.range-md::-webkit-slider-runnable-track {
  height: 0.5rem !important;
}

.range-md::-moz-range-track {
  height: 0.5rem !important;
}

.range-md::-webkit-slider-thumb {
  height: 1.5rem !important;
  width: 1.5rem !important;
  --filler-offset: 0.6rem !important;
}

.range-md::-moz-range-thumb {
  height: 1.5rem !important;
  width: 1.5rem !important;
  --filler-offset: 0.6rem !important;
}
`)
  })

  it('range size lg', async () => {
    const { getLayer } = await generator.generate('range-lg')
    const css = await prettierCSS(getLayer('default')!)
    expect(css).toEqual(
`/* layer: default */

.range-lg {
  height: 2rem !important;
}

.range-lg::-webkit-slider-runnable-track {
  height: 1rem !important;
}

.range-lg::-moz-range-track {
  height: 1rem !important;
}

.range-lg::-webkit-slider-thumb {
  height: 2rem !important;
  width: 2rem !important;
  --filler-offset: 1rem !important;
}

.range-lg::-moz-range-thumb {
  height: 2rem !important;
  width: 2rem !important;
  --filler-offset: 1rem !important;
}
`)
  })
})

describe('range variants', () => {
  for (const color of uiColor) {
    it(`range focus-visible ${color}`, async () => {
      const { getLayer } = await generator.generate(`range-focus-visible-${color}`)
      const css = await prettierCSS(getLayer('default')!)
      expect(css).toEqual(
`/* layer: default */

.range-${color}:focus-visible {
  --focus-shadow: 0 0 0 6px #1d232a inset, 0 0 0 2rem ${getHex(color, 'DEFAULT')} inset;
}
`)
    })
  }

  for (const color of uiColor) {
    it(`range webkit-slider-runnable-track ${color}`, async () => {
      const { getLayer } = await generator.generate(`range-webkit-slider-runnable-track-${color}`)
      const css = await prettierCSS(getLayer('default')!)
      expect(css).toEqual(
`/* layer: default */

.range-${color}::-webkit-slider-runnable-track {
  height: 0.5rem;
  width: 100%;
  background-color: #a6adba1a;
  border-radius: 1rem;
}
`)
    })
  }

  for (const color of uiColor) {
    it(`range moz-range-track ${color}`, async () => {
      const { getLayer } = await generator.generate(`range-moz-range-track-${color}`)
      const css = await prettierCSS(getLayer('default')!)
      expect(css).toEqual(
`/* layer: default */

.range-${color}::-moz-range-track {
  height: 0.5rem;
  width: 100%;
  background-color: #a6adba1a;
  border-radius: 1rem;
}
`)
    })
  }

  for (const color of uiColor) {
    it(`range webkit-slider-thumb ${color}`, async () => {
      const { getLayer } = await generator.generate(`range-webkit-slider-thumb-${color}`)
      const css = await prettierCSS(getLayer('default')!)
      expect(css).toEqual(
`/* layer: default */

.range-${color}::-webkit-slider-thumb {
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  border-style: none;
  background-color: ${color === 'dark' ? '#fff' : '#000'};
  border-radius: 1rem;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  top: 50%;
  color: ${getHex(color, 'DEFAULT')};
  transform: translateY(-50%);
  --filler-size: 100rem;
  --filler-offset: 0.6rem;
  box-shadow:
    0 0 0 3px ${getHex(color, 'DEFAULT')} inset,
    var(--focus-shadow, 0 0),
    calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size);
}
`)
    })
  }

  for (const color of uiColor) {
    it(`range moz-range-thumb ${color}`, async () => {
      const { getLayer } = await generator.generate(`range-moz-range-thumb-${color}`)
      const css = await prettierCSS(getLayer('default')!)
      expect(css).toEqual(
`/* layer: default */

.range-${color}::-moz-range-thumb {
  position: relative;
  height: 1.5rem;
  width: 1.5rem;
  border-style: none;
  background-color: ${color === 'dark' ? '#fff' : '#000'};
  border-radius: 1rem;
  top: 50%;
  color: ${getHex(color, 'DEFAULT')};
  --filler-size: 100rem;
  --filler-offset: 0.5rem;
  box-shadow:
    0 0 0 3px ${getHex(color, 'DEFAULT')} inset,
    var(--focus-shadow, 0 0),
    calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size);
}
`)
    })
  }
})

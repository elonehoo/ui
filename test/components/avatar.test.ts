import { describe, expect, it } from 'vitest'
import generator from '../setup'
import { prettierCSS } from '../utils'

describe('avatar', () => {
  it('avatar', async () => {
    const { getLayer } = await generator.generate('avatar')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.avatar {
  position: relative;
  height: 2rem;
  width: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  --un-bg-opacity: 1;
  background-color: rgba(243, 244, 246, var(--un-bg-opacity));
  font-size: 0.75rem;
  line-height: 1rem;
}
.dark .avatar {
  --un-bg-opacity: 1;
  background-color: rgba(24, 24, 24, var(--un-bg-opacity));
}
`)
  })
})

describe('avatar size', () => {
  it('avatar size 3xs', async () => {
    const { getLayer } = await generator.generate('avatar-3xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.avatar-3xs {
  height: 1rem;
  width: 1rem;
  font-size: 8px;
}
`)
  })

  it('avatar size 2xs', async () => {
    const { getLayer } = await generator.generate('avatar-2xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.avatar-2xs {
  height: 1.25rem;
  width: 1.25rem;
  font-size: 10px;
}
`)
  })

  it('avatar size xs', async () => {
    const { getLayer } = await generator.generate('avatar-xs')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.avatar-xs {
  height: 1.5rem;
  width: 1.5rem;
  font-size: 11px;
}
`)
  })

  it('avatar size sm', async () => {
    const { getLayer } = await generator.generate('avatar-sm')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.avatar-sm {
  height: 2rem;
  width: 2rem;
  font-size: 0.75rem;
  line-height: 1rem;
}
`)
  })

  it('avatar size md', async () => {
    const { getLayer } = await generator.generate('avatar-md')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.avatar-md {
  height: 2.5rem;
  width: 2.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
`)
  })

  it('avatar size lg', async () => {
    const { getLayer } = await generator.generate('avatar-lg')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.avatar-lg {
  height: 3rem;
  width: 3rem;
  font-size: 1rem;
  line-height: 1.5rem;
}
`)
  })

  it('avatar size xl', async () => {
    const { getLayer } = await generator.generate('avatar-xl')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.avatar-xl {
  height: 3.5rem;
  width: 3.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
}
`)
  })

  it('avatar size 2xl', async () => {
    const { getLayer } = await generator.generate('avatar-2xl')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.avatar-2xl {
  height: 4rem;
  width: 4rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
`)
  })

  it('avatar size 3xl', async () => {
    const { getLayer } = await generator.generate('avatar-3xl')
    const css = await prettierCSS(getLayer('shortcuts')!)
    expect(css).toEqual(
`/* layer: shortcuts */
.avatar-3xl {
  height: 5rem;
  width: 5rem;
  font-size: 1.5rem;
  line-height: 2rem;
}
`)
  })
})

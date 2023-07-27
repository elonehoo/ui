// fork https://github.com/unocss/unocss/blob/main/playground/src/composables/constants.ts
import defaultConfigRaw from '../shared-docs/defaultConfig.ts?raw'
import { version } from '../../../package.json'

export const defaultHTML = `
<div h-full text-center flex select-none all:transition-400>
  <div ma>
    <div
      text-5xl
      fw100
      animate-bounce-alt
      animate-count-infinite
      animate-duration-1s
      class="alert-green"
    >
      @elonehoo/ui
    </div>
    <div op70 text-lg fw300 m1 class="badge-green">UnoCss component preset.</div>
    <div m2 flex justify-center text-2xl op30 hover="op80">
      <a
        i-carbon-logo-github
        text-inherit
        href="https://github.com/elonehoo/ui"
        target="_blank"
      ></a>
    </div>
  </div>
</div>
`.trim()

export { defaultConfigRaw, version }

export const defaultCSS = ''
export const customCSSLayerName = 'playground'

export const defaultOptions = '{}'

export const STORAGE_KEY = 'last-search'

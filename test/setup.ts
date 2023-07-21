import { createGenerator } from '@unocss/core'
import {
  presetWind,
} from 'unocss'
import UI from '../src/index'

const generator = createGenerator({
  presets: [
    UI(),
    presetWind(),
  ],
})

export default generator

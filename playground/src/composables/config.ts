// fork https://github.com/unocss/unocss/blob/main/playground/src/composables/config.ts
import type { UserConfig } from '@unocss/core'
import { evaluateUserConfig } from '../shared-docs'

export const defaultConfig = ref<UserConfig | undefined>()

export async function load() {
  try {
    defaultConfig.value = await evaluateUserConfig(defaultConfigRaw)
  }
  catch (e) {
    console.error(e)
  }
}

load()

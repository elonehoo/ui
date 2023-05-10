import type { Preset } from 'unocss'
import {
  alert,
  alertInfo,
  alertSuccess,
  alertWarning,
  alertError,
  avatar,
  avatarGroup
} from './styled'
import {Colors} from './color/theme'

export function Samuui(): Preset {
  return {
    name: 'unocss-samu-ui',
    theme:{
      colors:Colors
    },
    shortcuts:[
      // alert
      [alert.name,alert.value],
      [alertInfo.name,alertInfo.value],
      [alertSuccess.name,alertSuccess.value],
      [alertWarning.name,alertWarning.value],
      [alertError.name,alertError.value],
      // avatar
      [avatar.name,avatar.value],
      [avatarGroup.name,avatarGroup.value],
    ],
    preflights:[

    ]
  }
}

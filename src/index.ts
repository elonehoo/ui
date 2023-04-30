import type { Preset } from 'unocss'
import {alert,alertInfo} from './styled'

export function Samuui(): Preset {
  return {
    name: 'unocss-samu-ui',
    theme:{
      colors:{

      }
    },
    shortcuts:[
      [alert.name,alert.value],
      [alertInfo.name,alertInfo.value],
    ],
    preflights:[

    ]
  }
}

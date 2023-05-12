import type { Preset } from 'unocss'
import {
  alert,
  alertInfo,
  alertSuccess,
  alertWarning,
  alertError,
  avatar,
  avatarGroup,
  button,
  buttonPrimary,
  buttonSecondary,
  buttonAccent,
  buttonInfo,
  buttonSuccess,
  buttonWarning,
  buttonError,
  buttonGhost,
  buttonLink,
  buttonOutline,
  buttonDisabled,
  buttonCircle,
  buttonSquare,
  buttonXs,
  buttonSm,
  buttonMd,
  buttonLg,
  buttonWide,
  buttonBlock
} from './styled'
import {Colors} from './color/theme'

export default function Samuui(): Preset {
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
      // button
      [button.name,button.value],
      [buttonPrimary.name,buttonPrimary.value],
      [buttonSecondary.name,buttonSecondary.value],
      [buttonAccent.name,buttonAccent.value],
      [buttonInfo.name,buttonInfo.value],
      [buttonSuccess.name,buttonSuccess.value],
      [buttonWarning.name,buttonWarning.value],
      [buttonError.name,buttonError.value],
      [buttonGhost.name,buttonGhost.value],
      [buttonLink.name,buttonLink.value],
      [buttonOutline.name,buttonOutline.value],
      [buttonDisabled.name,buttonDisabled.value],
      [buttonCircle.name,buttonCircle.value],
      [buttonSquare.name,buttonSquare.value],
      [buttonXs.name,buttonXs.value],
      [buttonSm.name,buttonSm.value],
      [buttonMd.name,buttonMd.value],
      [buttonLg.name,buttonLg.value],
      [buttonWide.name,buttonWide.value],
      [buttonBlock.name,buttonBlock.value],
    ],
    preflights:[
      {
        getCSS:() =>{
          return `
            @keyframes button-pop {
              0% {
                transform: scale(0.95);
              }
              40% {
                transform: scale(1.02);
              }
              100% {
                transform: scale(1);
              }
            }
          `
        }
      },
      {
        getCSS:()=>{
          return `
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `
        }
      }
    ]
  }
}

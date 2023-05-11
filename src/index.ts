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
  buttonDefault,
  buttonDefaultActive,
  buttonPrimary,
  buttonPrimaryActive,
  buttonSecondary,
  buttonSecondaryActive,
  buttonAccent,
  buttonAccentActive,
  buttonInfo,
  buttonInfoActive,
  buttonSuccess,
  buttonSuccessActive,
  buttonWarning,
  buttonWarningActive,
  buttonError,
  buttonErrorActive,
  buttonGhost,
  buttonGhostActive,
  buttonLink,
  buttonLinkActive
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
      // button
      [button.name,button.value],
      [buttonDefault.name,buttonDefault.value],
      [buttonDefaultActive.name,buttonDefaultActive.value],
      [buttonPrimary.name,buttonPrimary.value],
      [buttonPrimaryActive.name,buttonPrimaryActive.value],
      [buttonSecondary.name,buttonSecondary.value],
      [buttonSecondaryActive.name,buttonSecondaryActive.value],
      [buttonAccent.name,buttonAccent.value],
      [buttonAccentActive.name,buttonAccentActive.value],
      [buttonInfo.name,buttonInfo.value],
      [buttonInfoActive.name,buttonInfoActive.value],
      [buttonSuccess.name,buttonSuccess.value],
      [buttonSuccessActive.name,buttonSuccessActive.value],
      [buttonWarning.name,buttonWarning.value],
      [buttonWarningActive.name,buttonWarningActive.value],
      [buttonError.name,buttonError.value],
      [buttonErrorActive.name,buttonErrorActive.value],
      [buttonGhost.name,buttonGhost.value],
      [buttonGhostActive.name,buttonGhostActive.value],
      [buttonLink.name,buttonLink.value],
      [buttonLinkActive.name,buttonLinkActive.value],
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

import type { Preset } from 'unocss'
import { Options,config } from './options'
import {
  alert,
  alertError,
  alertInfo,
  alertSuccess,
  alertWarning,
  avatar,
  avatarGroup,
  button,
  buttonAccent,
  buttonBlock,
  buttonCircle,
  buttonDisabled,
  buttonError,
  buttonGhost,
  buttonInfo,
  buttonLg,
  buttonLink,
  buttonMd,
  buttonOutline,
  buttonPrimary,
  buttonSecondary,
  buttonSm,
  buttonSquare,
  buttonSuccess,
  buttonWarning,
  buttonWide,
  buttonXs,
  badge
} from './styled'

export default function Samuui(options:Partial<Options> = {}): Preset {
  const option = Object.assign({}, config, options)

  return {
    name: 'unocss-samu-ui',
    theme: {
      colors: {
        light: {
          primary: option.lightPrimary,
          primaryFocus: option.lightPrimaryFocus,
          primaryContent: option.lightPrimaryContent,
          secondary: option.lightSecondary,
          secondaryFocus: option.lightSecondaryFocus,
          secondaryContent: option.lightSecondaryContent,
          accent: option.lightAccent,
          accentFocus: option.lightAccentFocus,
          accentContent: option.lightAccentContent,
          neutral: option.lightNeutral,
          neutralFocus: option.lightNeutralFocus,
          neutralContent: option.lightNeutralContent,
          base: {
            100: option.lightBase100,
            200: option.lightBase200,
            300: option.lightBase300,
            content: option.lightBaseContent,
          },
          info: option.lightInfo,
          infoContent: option.lightInfoContent,
          success: option.lightSuccess,
          successContent: option.lightSuccessContent,
          warning: option.lightWarning,
          warningContent: option.lightWarningContent,
          error: option.lightError,
          errorContent: option.lightErrorContent,
        },
        dark: {
          primary: option.darkPrimary,
          primaryFocus: option.darkPrimaryFocus,
          primaryContent: option.darkPrimaryContent,
          secondary: option.darkSecondary,
          secondaryFocus: option.darkSecondaryFocus,
          secondaryContent: option.darkSecondaryContent,
          accent: option.darkAccent,
          accentFocus: option.darkAccentFocus,
          accentContent: option.darkAccentContent,
          neutral: option.darkNeutral,
          neutralFocus: option.darkNeutralFocus,
          neutralContent: option.darkNeutralContent,
          base: {
            100: option.darkBase100,
            200: option.darkBase200,
            300: option.darkBase300,
            content: option.darkBaseContent,
          },
          info: option.darkInfo,
          infoContent: option.darkInfoContent,
          success: option.darkSuccess,
          successContent: option.darkSuccessContent,
          warning: option.darkWarning,
          warningContent: option.darkWarningContent,
          error: option.darkError,
          errorContent: option.darkErrorContent,
        },
        badge: option.badge
      },
    },
    shortcuts: [
      // alert
      [alert.name, alert.value],
      [alertInfo.name, alertInfo.value],
      [alertSuccess.name, alertSuccess.value],
      [alertWarning.name, alertWarning.value],
      [alertError.name, alertError.value],
      // avatar
      [avatar.name, avatar.value],
      [avatarGroup.name, avatarGroup.value],
      // button
      [button.name, button.value],
      [buttonPrimary.name, buttonPrimary.value],
      [buttonSecondary.name, buttonSecondary.value],
      [buttonAccent.name, buttonAccent.value],
      [buttonInfo.name, buttonInfo.value],
      [buttonSuccess.name, buttonSuccess.value],
      [buttonWarning.name, buttonWarning.value],
      [buttonError.name, buttonError.value],
      [buttonGhost.name, buttonGhost.value],
      [buttonLink.name, buttonLink.value],
      [buttonOutline.name, buttonOutline.value],
      [buttonDisabled.name, buttonDisabled.value],
      [buttonCircle.name, buttonCircle.value],
      [buttonSquare.name, buttonSquare.value],
      [buttonXs.name, buttonXs.value],
      [buttonSm.name, buttonSm.value],
      [buttonMd.name, buttonMd.value],
      [buttonLg.name, buttonLg.value],
      [buttonWide.name, buttonWide.value],
      [buttonBlock.name, buttonBlock.value],
      // badge
      [badge.name, badge.value],
    ],
    preflights: [
      {
        getCSS:()=>{
          return `
            :root {
              --badge: 1.9rem;
            }
          `
        }
      },
      {
        getCSS: () => {
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
        },
      },
      {
        getCSS: () => {
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
        },
      },
    ],
  }
}

import type { Preset } from 'unocss'
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

export default function Samuui(): Preset {
  return {
    name: 'unocss-samu-ui',
    theme: {
      colors: {
        light: {
          primary: '#570DF8',
          primaryFocus: '#4406CB',
          primaryContent: '#FFFFFF',
          secondary: '#F000B8',
          secondaryFocus: '#C00093',
          secondaryContent: '#FFFFFF',
          accent: '#37CDBE',
          accentFocus: '#2AA69A',
          accentContent: '#163835',
          neutral: '#3D4451',
          neutralFocus: '#313641',
          neutralContent: '#FFFFFF',
          base: {
            100: '#FFFFFF',
            200: '#F2F2F2',
            300: '#E5E6E6',
            content: '#1F2937',
          },
          info: '#3ABFF8',
          infoContent: '#002B3D',
          success: '#36D399',
          successContent: '#003320',
          warning: '#FBBD23',
          warningContent: '#382800',
          error: '#F87272',
          errorContent: '#470000',
        },
        dark: {
          primary: '#661AE6',
          primaryFocus: '#5114B9',
          primaryContent: '#FFFFFF',
          secondary: '#D926AA',
          secondaryFocus: '#AE1E88',
          secondaryContent: '#FFFFFF',
          accent: '#1FB2A5',
          accentFocus: '#198E84',
          accentContent: '#FFFFFF',
          neutral: '#191D24',
          neutralFocus: '#111318',
          neutralContent: '#A6ADBB',
          base: {
            100: '#2A303C',
            200: '#242933',
            300: '#20252E',
            content: '#A6ADBB',
          },
          info: '#3ABFF8',
          infoContent: '#002B3D',
          success: '#36D399',
          successContent: '#003320',
          warning: '#FBBD23',
          warningContent: '#382800',
          error: '#F87272',
          errorContent: '#470000',
        },
        badge: '1.9rem'
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

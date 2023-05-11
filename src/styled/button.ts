import type {ShortcutsType} from '../types'

export const button:ShortcutsType = {
  name:'btn',
  value:
  "border animate-[button-pop_0.25s_ease-out] uppercase focus-visible:outline-offset-2 font-semibold uppercase no-underline " +
  "active:hover:animate-none active:hover:scale-95 active:focus:animate-none active:focus:scale-95 " +
  "inline-flex flex-shrink-0 cursor-pointer select-none flex-wrap items-center justify-center border-transparent text-center transition duration-200 ease-in-out rounded-0.5rem " +
  "h-12 px-4 text-sm min-h-12 leading-4"
}

export const buttonDefault:ShortcutsType = {
  name:'btn-default',
  value:
  "border-light-neutral dark:border-dark-neutral bg-light-neutral dark:bg-dark-neutral text-light-neutral-content dark:text-dark-neutral-content no-underline " +
  "hover:border-light-neutral-focus dark:hover:border-dark-neutral-focus hover:bg-light-neutral-focus dark:hover:bg-dark-neutral-focus " +
  "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#111318 outline-offset-2"
}

export const buttonDefaultActive:ShortcutsType = {
  name:'btn-default-active',
  value: "border-light-neutral-focus dark:border-dark-neutral-focus bg-light-neutral-focus dark:bg-dark-neutral-focus"
}

export const buttonPrimary:ShortcutsType = {
  name:'btn-primary',
  value:
    "border-light-primary dark:border-dark-primary bg-light-primary dark:bg-dark-primary text-light-primary-content dark:text-dark-primary-content " +
    "hover:border-light-primary-focus dark:hover:border-dark-primary-focus hover:bg-light-primary-focus dark:hover:bg-dark-primary-focus " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#661AE6 outline-offset-2"
}

export const buttonPrimaryActive:ShortcutsType = {
  name:'btn-primary-active',
  value: "border-light-primary-focus dark:border-dark-primary-focus bg-light-primary-focus dark:bg-dark-primary-focus"
}

export const buttonSecondary:ShortcutsType = {
  name:'btn-secondary',
  value:
    "border-light-secondary dark:border-dark-secondary bg-light-secondary dark:bg-dark-secondary text-light-secondary-content dark:text-dark-secondary-content " +
    "hover:border-light-secondary-focus dark:hover:border-dark-secondary-focus hover:bg-light-secondary-focus dark:hover:bg-dark-secondary-focus " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#003320 outline-offset-2"
}

export const buttonSecondaryActive:ShortcutsType = {
  name:'btn-secondary-active',
  value: "border-light-secondary-focus dark:border-dark-secondary-focus bg-light-secondary-focus dark:bg-dark-secondary-focus"
}

export const buttonAccent:ShortcutsType = {
  name:'btn-accent',
  value:
    "border-light-accent dark:border-dark-accent bg-light-accent dark:bg-dark-accent text-light-accent-content dark:text-dark-accent-content " +
    "hover:border-light-accent-focus dark:hover:border-dark-accent-focus hover:bg-light-accent-focus dark:hover:bg-dark-accent-focus " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#1FB2A5 outline-offset-2"
}

export const buttonAccentActive:ShortcutsType = {
  name:'btn-accent-active',
  value: "border-light-accent-focus dark:border-dark-accent-focus bg-light-accent-focus dark:bg-dark-accent-focus"
}

export const buttonInfo:ShortcutsType = {
  name:'btn-info',
  value:
    "border-light-info dark:border-dark-info bg-light-info dark:bg-dark-info text-light-info-content dark:text-dark-info-content " +
    "hover:border-light-info dark:hover:border-dark-info hover:bg-light-info dark:hover:bg-dark-info " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#3ABFF8 outline-offset-2"
}

export const buttonInfoActive:ShortcutsType = {
  name:'btn-info-active',
  value: "border-light-info dark:border-dark-info bg-light-info dark:bg-dark-info"
}

export const buttonSuccess:ShortcutsType = {
  name:'btn-success',
  value:
    "border-light-success dark:border-dark-success bg-light-success dark:bg-dark-success text-light-success-content dark:text-dark-success-content " +
    "hover:border-light-success dark:hover:border-dark-success hover:bg-light-success dark:hover:bg-dark-success " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#36D399 outline-offset-2"
}

export const buttonSuccessActive:ShortcutsType = {
  name:'btn-success-active',
  value: "border-light-success dark:border-dark-success bg-light-success dark:bg-dark-success"
}

export const buttonWarning:ShortcutsType = {
  name:'btn-warning',
  value:
    "border-light-warning dark:border-dark-warning bg-light-warning dark:bg-dark-warning text-light-warning-content dark:text-dark-warning-content " +
    "hover:border-light-warning dark:hover:border-dark-warning hover:bg-light-warning dark:hover:bg-dark-warning " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#FBBD23 outline-offset-2"
}

export const buttonWarningActive:ShortcutsType = {
  name:'btn-warning-active',
  value: "border-light-warning dark:border-dark-warning bg-light-warning dark:bg-dark-warning"
}

export const buttonError:ShortcutsType = {
  name:'btn-error',
  value:
    "border-light-error dark:border-dark-error bg-light-error dark:bg-dark-error text-light-error-content dark:text-dark-error-content " +
    "hover:border-light-error dark:hover:border-dark-error hover:bg-light-error dark:hover:bg-dark-error " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#FBBD23 outline-offset-2"
}

export const buttonErrorActive:ShortcutsType = {
  name:'btn-error-active',
  value: "border-light-error dark:border-dark-error bg-light-error dark:bg-dark-error "
}

export const buttonGhost:ShortcutsType = {
  name:'btn-ghost',
  value:
    "border border-transparent bg-transparent text-current " +
    "hover:border-opacity-0 hover:bg-light-base-content dark:hover:bg-dark-base-content hover:bg-opacity-20 " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-current outline-offset-2"
}

export const buttonGhostActive:ShortcutsType = {
  name:'btn-ghost-active',
  value: "border-opacity-0 bg-light-base-content dark:bg-dark-base-content bg-opacity-20"
}

export const buttonLink:ShortcutsType = {
  name:'btn-link',
  value:
    "border-transparent bg-transparent text-light-primary dark:text-dark-primary underline " +
    "hover:border-transparent hover:bg-transparent hover:underline " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-current outline-offset-2"
}

export const buttonLinkActive:ShortcutsType = {
  name:'btn-link-active',
  value: "border-transparent bg-transparent underline"
}

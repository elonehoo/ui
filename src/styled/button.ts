import type {ShortcutsType} from '../types'

export const button:ShortcutsType = {
  name:'btn',
  value:
    // btn style
    "border animate-[button-pop_0.25s_ease-out] uppercase outline-offset-2 " +
    "font-semibold uppercase no-underline " +
    "[&:active:hover]:animate-none [&:active:hover]:scale-95 " +
    "[&:active:focus]:animate-none [&:active:focus]:scale-95 " +
    // btn unstyle
    "inline-flex flex-shrink-0 cursor-pointer select-none flex-wrap items-center justify-center border-transparent text-center transition duration-200 ease-in-out rounded-0.5rem " +
    "h-12 px-4 text-sm min-h-12 leading-[1em] " +
    // default btn
    "border-light-neutral bg-light-neutral text-light-neutral-content no-underline " +
    "dark:border-dark-neutral dark:bg-dark-neutral dark:text-dark-neutral-content " +
    "hover:border-light-neutral-focus hover:bg-light-neutral-focus " +
    "dark:hover:border-dark-neutral-focus dark:hover:bg-dark-neutral-focus " +
    "[&.btn-active]:border-light-neutral-focus [&.btn-active]:bg-light-neutral-focus " +
    "dark:[&.btn-active]:border-dark-neutral-focus dark:[&.btn-active]:bg-dark-neutral-focus " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#111318"
}

export const buttonPrimary:ShortcutsType = {
  name:'btn-primary',
  value:
    "border-light-primary bg-light-primary text-light-primary-content " +
    "dark:border-dark-primary dark:bg-dark-primary dark:text-dark-primary-content " +
    "hover:border-light-primary-focus hover:bg-light-primary-focus " +
    "dark:hover:border-dark-primary-focus dark:hover:bg-dark-primary-focus " +
    "[&.btn-active]:border-light-primary-focus [&.btn-active]:bg-light-primary-focus " +
    "dark:[&.btn-active]:border-dark-primary-focus dark:[&.btn-active]:bg-dark-primary-focus " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#661AE6"
}

export const buttonSecondary:ShortcutsType = {
  name:'btn-secondary',
  value:
    "border-light-secondary bg-light-secondary text-light-secondary-content " +
    "dark:border-dark-secondary dark:bg-dark-secondary dark:text-dark-secondary-content " +
    "hover:border-light-secondary-focus hover:bg-light-secondary-focus " +
    "dark:hover:border-dark-secondary-focus dark:hover:bg-dark-secondary-focus " +
    "[&.btn-active]:border-light-secondary-focus [&.btn-active]:bg-light-secondary-focus " +
    "dark:[&.btn-active]:border-dark-secondary-focus dark:[&.btn-active]:bg-dark-secondary-focus " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#003320"
}

export const buttonAccent:ShortcutsType = {
  name:'btn-accent',
  value:
    "border-light-accent bg-light-accent text-light-accent-content " +
    "dark:border-dark-accent dark:bg-dark-accent dark:text-dark-accent-content " +
    "hover:border-light-accent-focus hover:bg-light-accent-focus " +
    "dark:hover:border-dark-accent-focus dark:hover:bg-dark-accent-focus " +
    "[&.btn-active]:border-light-accent-focus [&.btn-active]:bg-light-accent-focus " +
    "dark:[&.btn-active]:border-dark-accent-focus dark:[&.btn-active]:bg-dark-accent-focus " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#1FB2A5"
}

export const buttonInfo:ShortcutsType = {
  name:'btn-info',
  value:
    "border-light-info bg-light-info text-light-info-content " +
    "dark:border-dark-info dark:bg-dark-info dark:text-dark-info-content " +
    "hover:border-light-info hover:bg-light-info " +
    "dark:hover:border-dark-info dark:hover:bg-dark-info " +
    "[&.btn-active]:border-light-info [&.btn-active]:bg-light-info " +
    "dark:[&.btn-active]:border-dark-info dark:[&.btn-active]:bg-dark-info " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#3ABFF8"
}

export const buttonSuccess:ShortcutsType = {
  name:'btn-success',
  value:
    "border-light-success bg-light-success text-light-success-content " +
    "dark:border-dark-success dark:bg-dark-success dark:text-dark-success-content " +
    "hover:border-light-success hover:bg-light-success " +
    "dark:hover:border-dark-success dark:hover:bg-dark-success " +
    "[&.btn-active]:border-light-success [&.btn-active]:bg-light-success " +
    "dark:[&.btn-active]:border-dark-success dark:[&.btn-active]:bg-dark-success " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#36D399"
}

export const buttonWarning:ShortcutsType = {
  name:'btn-warning',
  value:
    "border-light-warning bg-light-warning text-light-warning-content " +
    "dark:border-dark-warning dark:bg-dark-warning dark:text-dark-warning-content " +
    "hover:border-light-warning hover:bg-light-warning " +
    "dark:hover:border-dark-warning dark:hover:bg-dark-warning " +
    "[&.btn-active]:border-light-warning [&.btn-active]:bg-light-warning " +
    "dark:[&.btn-active]:border-dark-warning dark:[&.btn-active]:bg-dark-warning " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#FBBD23"
}

export const buttonError:ShortcutsType = {
  name:'btn-error',
  value:
    "border-light-error bg-light-error text-light-error-content " +
    "dark:border-dark-error dark:bg-dark-error dark:text-dark-error-content " +
    "hover:border-light-error hover:bg-light-error " +
    "dark:hover:border-dark-error dark:hover:bg-dark-error " +
    "[&.btn-active]:border-light-error [&.btn-active]:bg-light-error " +
    "dark:[&.btn-active]:border-dark-error dark:[&.btn-active]:bg-dark-error " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-#F97171"
}

export const buttonGhost:ShortcutsType = {
  name:'btn-ghost',
  value:
    "border border-transparent bg-transparent text-current " +
    "border-none dark:border-transparent dark:bg-transparent dark:text-current " +
    "hover:border-opacity-0 hover:bg-light-base-content dark:hover:bg-dark-base-content hover:bg-opacity-20 " +
    "[&.btn-active]:border-opacity-0 [&.btn-active]:bg-light-base-content [&.btn-active]:bg-opacity-20 " +
    "dark:[&.btn-active]:bg-dark-base-content " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-current"
}

export const buttonLink:ShortcutsType = {
  name:'btn-link',
  value:
    "border-transparent bg-transparent text-light-primary underline " +
    "border-none dark:border-transparent dark:bg-transparent dark:text-light-primary " +
    "hover:border-transparent hover:bg-transparent hover:underline dark:hover:bg-transparent " +
    "[&.btn-active]:border-transparent [&.btn-active]:bg-transparent [&.btn-active]:underline " +
    "dark:[&.btn-active]:bg-transparent " +
    "focus-visible:outline-2px focus-visible:outline-solid focus-visible:outline-current"
}
